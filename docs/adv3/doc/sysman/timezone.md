---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> TimeZone  
<span class="navnp"><a href="tempfile.html" class="nav"><em>Prev:</em> TemporaryFile</a>
    <a href="vector.html" class="nav"><em>Next:</em> Vector</a>    
</span>

</div>



# TimeZone

A TimeZone object represents a local time zone. It works with the
[Date](date.html) class to convert between local time zones and universal
time (UTC) when parsing, displaying, and manipulating dates and times.

In most cases, you won't need to use the TimeZone object directly, even
if you use Date objects, because you'll usually want to work in terms of
the host computer's local time zone. That's the default that Date uses
for local/UTC conversions, so you don't have to use TimeZone objects in
this case. The TimeZone object is only needed when you want to use a
specific time zone for local/UTC conversions.

TimeZone uses the [IANA zoneinfo
database](http://www.iana.org/time-zones) (also known as the tz database
or Olson database) to perform its conversions. The zoneinfo database
contains a comprehensive history of local time settings for locations
around the world. The TADS interpreter includes a compiled version of
the information in the zoneinfo database, so this information is always
available. This allows the TimeZone object to calculate historically
accurate local times for particular dates in the past in specific
locations, based on actual historical records, including zone
realignments (some cities have switched time zones on one or more
occasions) and the daylight savings rules in effect in different years.
The TimeZone object can also calculate local times in the future by
extrapolating the current daylight savings rules for a zone. The
zoneinfo database isn't static; it's updated frequently, because the
world's timezones are always being revised. The TADS version of the
zoneinfo database is in a separate file that can be replaced as needed
without updating the TADS interpreter itself.

When using the TimeZone class, `\#include
\<date.h\>` in your source files.

## Construction

`new TimeZone()`

<div class="fdef">

Creates a TimeZone object representing the host system's local time
zone. On Windows, this obtains the timezone settings from the operating
system, and maps the Windows zone identifier to a corresponding zoneinfo
key, using the mapping specified in the [Unicode
CLDR](http://cldr.unicode.org). On most Unix systems, the "TZ"
environment variable specifies the settings. (For best results on Unix,
you should set TZ to the zoneinfo key you wish to use; for example, for
US Eastern Time, set TZ=America/New_York.)



`new TimeZone(*zoneinfoName*)`

<div class="fdef">

Creates a TimeZone object for the given location in the zoneinfo
database, such as 'America/New_York' or 'Europe/London'.

When you create a TimeZone object based on a zoneinfo location, local
time conversions using the object will take into account historical
changes to the location's time zone definition, including realignments
(for example, America/Detroit was originally on US Central Time, but
switched to Eastern Time in 1915) and daylight savings changes. It also
applies the current daylight savings rules for the zone (if any) to
dates in the future. Parsing or formatting a date/time value will treat
the local time appropriately for its date, so that it matches the wall
clock actually in effect on that date in the given location.

</div>

`new
TimeZone('*STD*+*ofs*\[*DST*\[+*ofs*\],*start*,*end*\]')`

<div class="fdef">

This format creates a custom time zone. This bypasses the zoneinfo
database and lets you define a timezone with a custom name, UTC offset,
and daylight savings rule. Since this type of TimeZone isn't tied to a
zoneinfo entry, it doesn't have any location or history information.

The syntax is modeled on the POSIX "TZ" environment variable syntax,
with one important difference: we use the zoneinfo convention that that
the UTC offset is negative if it's west of UTC, whereas TZ uses positive
offsets west of UTC. So if you're copying a Unix TZ setting, reverse the
signs on the offsets: Unix EST5EDT becomes 'EST-5EDT' for the TimeZone
constructor.

The simplest form is an abbreviation plus an offset in hours. For
example, 'PST-8' defines a zone called "PST" with an offset 8 hours
ahead of (west of) UTC. This is equivalent to the current official
definition of US Pacific Standard Time, so a TimeZone created this way
lets you parse and format times in Pacific Standard Time year round,
even when daylight time would normally be in effect.

The complete form includes the standard time name and offset, the
daylight time name and offset, and the annual rules for when daylight
time starts and ends in the zone. The daylight offset can be omitted, in
which case it defaults to one hour ahead of standard time. If you do
include it, specify the daylight offset from UTC, *not* the offset from
standard time - so for US Eastern Time, you'd write
`EST-5EDT-4`, or equivalently just
`EST-5EDT`.

The syntax for the *start* and *end* strings can be one of the
following:

- M*month*.*week*.*day* - this format lets you specify dates based on
  "first/last Sunday of March" rules, which is how official daylight
  time rules are usually specified. *month* is the month number, 1 to 12
  for January to December; *week* says which occurrence of the day to
  use; and *day* is the weekday, 0 to 6 for Sunday to Saturday. If
  *week* is 1, the first *day* of the month is used; 2 means the second
  *day*; and so on up to 4 for the 4th *day*. Setting *week* to 5 is
  special: it means the last *day* of the month, no matter how many
  occurrences of that day there actually are. For example,
  `M4.1.0` is the first Sunday in April, and
  `M10.5.6` is the last Saturday in October.
- J*dayno* - a "Julian day". *dayno* is the day of the year, 1 to 365,
  never counting February 29. That is, J60 always means March 1, even in
  leap years. This is essentially an obtuse way of specifying a fixed
  month and day: J1 is January 1, J32 is February 1, J365 is December
  31, and so on.
- *dayno* - a calendar day. *dayno* is the day of the year, 0 to 365,
  counting February 29 in leap years. Day 60 is March 1 in non-leap
  years, but is February 29 in leap years. (It seems unlikely that any
  official timezone has ever been defined using this type of rule, as
  it's not clear why you'd want to set a date that moves by a day in
  leap years, but TimeZone accepts it for completeness.)

All of the formats above can optionally be followed by "/*time*", where
*time* is the time of day on a 24-hour clock. This can simply be the
hour if the time is at the top of the hours, so "/3" means 3:00 AM, and
"/0:30" means 12:30 AM. If the time is omitted, the default is 2:00 AM
("/2").

Example: the complete current definition of US Eastern Time is
`EST-5EDT-4,M3.2.0/2,M11.1.0/2`: standard time
is called EST, with a UTC offset of 5 hours west; daylight time is EDT
at 4 hours west; daylight time starts at 2:00 AM on the second Sunday in
March, and ends at 2:00 AM on the first Sunday in November. You could
write this more compactly, relying on the defaults, as
`EST-5EDT,M3.2.0,M11.1.0`.

If you specify both standard and daylight time in a zone, TimeZone will
accept the string without the daylight time start/end rules, but without
the rules the zone will always use standard time. There are no default
rules, so if you want to define a zone that switches seasonally between
standard and daylight time, you must specify the rules.

</div>

`new TimeZone('*UTC*')`

<div class="fdef">

'Z' and 'GMT' are equivalent. This creates a TimeZone object
representing UTC (Universal Time Coordinated), also known as Zulu (Z)
time in military and aviation jargon. This is the worldwide standard
reference point for timekeeping; all modern time zones are defined in
terms of their offset (clock time difference) from UTC. GMT isn't
technically the same as UTC, but the two terms are commonly used
interchangeably, which is why both are accepted here. UTC isn't subject
to daylight time; it's on "standard time" year round.

</div>

`new TimeZone('*UTC*+*offset*')`

<div class="fdef">

'Z+*offset*' and 'GMT+*offset*' are equivlaent. This creates a TimeZone
object representing a zone at a fixed offset (time difference) from UTC.
*offset* is a time difference in hours, hours and minutes, or hours,
minutes, and seconds: 'UTC-8' is eight hours west of UTC; 'UTC+0130' is
an hour and half east of UTC; 'UTC+01:00' is an hour east. The offset is
the amount of time you add to UTC to get the local time, which means
that negative numbers are west of UTC: Pacific Standard Time is UTC-8.

Be careful about the '+' or '-' sign when importing data from other
computer systems, since some systems use the opposite sign convention.
Unix in particular uses positive values for zones west of GMT.

A TimeZone object created this way uses the same fixed UTC offset for
all dates and times. It doesn't observe daylight savings time and
doesn't have any historical data on zone realignments, because it
doesn't represent a timezone per se, even if it happens to align (in
some or all of the year) with a defined regional zone. For example,
'UTC-8' is distinct from the US Pacific Time zone, even though it
happens to be at the same UTC offset as that zone's standard (winter)
time; the difference is that the US Pacific Time zone implies a history
of daylight savings and other changes, while 'UTC-8' is simply 8 hours
earlier than UTC for all dates and times.

</div>

`new TimeZone(*offsetSecs*)`

<div class="fdef">

Creates a TimeZone object at the fixed UTC offset. *offsetSecs* is an
integer giving the time zone offset in seconds; positive values are east
of UTC and negative values are west (e.g., US Pacific Daylight Time is
at -25200 seconds, which is -7 hours).

This type of TimeZone object is equivalent to the 'UTC+offset'
constructor above for the corresponding offset. For example,
`new TimeZone(-25200)` yields the same type of
time zone object as `new TimeZone('UTC-7')`.

</div>

## Methods

<span id="getNames"></span>

`getNames()`

<div class="fdef">

Returns a list of strings giving the names by which the timezone is
known. For a timezone based on a zoneinfo location, this returns a list
of all of the aliases by which the zone is known; the first entry is the
primary entry in the database for the zone, and the others are aliases
(called "links" in the zoneinfo database). For a zone based on an
abbreviation, the list has only one entry, with the abbreviation as the
name. For a zone based on a UTC offset, the list has only one entry,
with a name of the form 'UTC+hh:mm:ss' (but the seconds and minutes are
dropped if they're zero).

</div>

<span id="getHistory"></span>

`getHistory(*date*?)`

<div class="fdef">

Gets the enumerated history of clock setting changes in this timezone,
or the single history item that applies to the given date.

If *date* is supplied, it's a Date object specifying the date of
interest. The method finds the appropriate history item and returns it;
the return value is a list containing \[*date*, *offset*, *save*,
*abbr*\]:

\[1\] *date* is a [Date](date.html) object giving the moment in time when
the history item took effect

\[2\] *offset* is the zone's standard time offset from UTC in
milliseconds during this period. Positive values are east of UTC,
negative values west; e.g., New York standard time is 5 hours west,
which corresponds to an *offset* value of -5\*60\*60\*1000.

\[3\] *save* is the additional time added if daylight savings time is in
effect during this period, in milliseconds, or zero if standard time is
in effect. Each period in the history is entirely in daylight or
standard time; if *save* is zero, standard time is in effect for the
duration of the period, otherwise daylight savings time is in effect.
Note that *save* is an additional amount of time to add to *offset*, so
the zone's actual UTC offset during the period is *offset* + *save*.

\[4\] *abbr* is a string giving the abbreviation for the zone during
this period ('PST', 'EDT', etc).

If *date* is in the future beyond the end of the pre-computed history
list (see below), the method applies the ongoing rules and returns a
synthesized history item (which, since it's synthesized on the fly,
won't appear in the full pre-computed list).

If *date* is omitted or nil, the result is a full list of all of the
pre-computed changes to the timezone. This includes realignments (times
when the defining city relocated itself from one timezone to another)
and daylight time changes. Each list entry is sublist containing
\[*date*, *offset*, *save*, *abbr*\], as described above.

The first item in a full history list is special. This describes the
location's local time settings before the establishment of standard time
zones (which occurred in the 19th century in most locations). Before
time zones, cities generally used "local mean time", which is the mean
solar time as observed from the location. This is a function of
longitude, so it can be inferred whether or not people were actually
conducting solar observations in the locale at the time. The *date*
value in this special first history item is
`nil` because the item has no start date; it
applies into the indefinite past.

The last item is also somewhat special. This reflects the last
enumerated change to the time zone, but not necessarily the last
expected change. Many time zones have ongoing rules for daylight savings
time changes that are effective until further notice. It's not practical
for TADS to pre-compute these ongoing changes until the end of time,
particularly since the Date type can represent dates millions of years
into the future. So TADS pre-computes the transitions for all known past
changes and for a few years into the future, stopping there and letting
the ongoing rules handle it from then on. In many cases TADS could
compress the pre-computed list even further by going back to the point
where the ongoing rules started applying monotonously without changes -
the current rules for some zones have been in effect for many years
without any changes. But TADS pre-computes the transitions up to the
present day (and a few years into the future) anyway, because it's much
faster at run-time to look up a date in the history than to figure its
clock settings by applying the rules. We figure that most programs will
work mostly with dates close to the present, so it makes sense to
optimize for nearby dates. For dates beyond the pre-computed list, TADS
applies the ongoing rules, so it will still get the right result, but
has to work a little harder.

See the [getRules()](#getRules) method for information on retrieving the
ongoing rules.

</div>

<span id="getLocation"></span>

`getLocation()`

<div class="fdef">

Returns a description of the zone location, as a list consisting of
\[*country*, *latitude*, *longitude*, *desc*\]. *country* is a string
with the two-letter ISO 3166 country code for the zone's primary city,
*latitude* is a string giving the city's latitude (in '+ddmm' or
'+ddmmss' format - degrees, minutes, and seconds; '+' for northern
latitudes and '-' for southern), *longitude* is a string giving the
longitude (in '+dddmm' or '+dddmmss' format), and *desc* is a string
with comment text describing the zone (or `nil`
if there's no descriptive text). This information comes from the
zoneinfo database.

</div>

<span id="getRules"></span>

`getRules()`

<div class="fdef">

Gets the ongoing rules that are in effect after the last enumerated
history item (see [getHistory()](#getHistory)). This returns a list of
the rules for future changes to the zone; each rule fires once annually,
and encodes the day of the year when the rule fires, the time on that
day that it fires, and the new clock settings in effect after the rule
fires.

Virtually all zones that use ongoing rules have exactly two: one for the
annual change to daylight savings time in the spring, and one for the
return to standard time in the fall. Each rule's firing date is
specified in an abstract format designed to handle the variety of
regional daylight savings schemes: "last Sunday in March", "second
Sunday in November", "January 15", etc. Zones that don't observe
daylight savings time generally have no ongoing rules, since they
presumably plan to remain on the same standard time setting
indefinitely.

Each rule in the return list is described by a sublist with the
following elements:

\[1\] *abbr* - is a string with the time zone abbreviation while the
rule is in effect; most zones use one abbreviation for standard time and
another for daylight time, so each rule tells us the abbreviation to use
while the rule is in effect.

\[2\] *offset* is the standard time GMT offset for the zone, in
milliseconds, while the rule is in effect. (To get the full offset, add
the *save* value.)

\[3\] *save* is the additional offset for daylight savings time, in
milliseconds. The full offset while the rule is in effect is *offset* +
*save*.

\[4\] *when* is a string with a human-readable description of the firing
date: this will be of the form 'Mar last Sun' (for the last Sunday in
March), 'Mar Sun\>=1' for the first Sunday in March on or after March 1,
'Mar Sun\<=28' for the last Sunday in March on or before March 28, 'Mar
7' for March 7, or 'DOY 72' for the 72nd day of the year.

The same information that *when* encodes is also broken down into a more
computer-friendly format in *mm*, *typ*, *wkday*, and *dd*.

\[5\] *mm* is the month number when the rule fires, 1-12 for January to
December.

\[6\] *typ* is an integer giving the type of date specification:

- 0 = a fixed day of the month *mm/dd*
- 1 = the last *wkday* of month *mm*
- 2 = the first *wkday* of month *mm* on or after day *dd*
- 3 = the last *wkday* of month *mm* on or before day *dd*)

\[7\] *dd* is the day of the month (ignored if *typ* is 1)

\[8\] *wkday* is the day of the week, 1-7 for Sunday-Saturday (ignored
if 'typ' is 0)

\[9\] *time* is the time of day the rule goes into effect, as
milliseconds after midnight

\[10\] *zone* is a code indicating the timezone to use to interpret the
date and time:

- 'w' means local wall clock time in the zone just before the rule takes
  effect. In other words, the local time setting that was in effect up
  until the moment this rule takes effect. This is almost always the way
  rules are defined, since it's the intuitive way that people living in
  the zone would apply the rule - when it's 2:00 AM on the current clock
  setting, you know it's time to change to the new clock setting.
- 's' means local standard time in the zone before the rule. This means
  that if daylight time was in effect in the previous period, you ignore
  the additional daylight offset and read the change time in terms of
  the local base standard time.
- 'u' means UTC - so you ignore the local time zone entirely and apply
  the rule in terms of universal time.

Note that the zone has to be applied to the full date-and-time value,
not just the time, because the calendar date in the local zone at the
rule's firing time could differ by a day from the date in the reference
zone for types 's' and 'u'. For example, if a US Pacific Time rule were
stated as midnight UTC, the rule would fire on the previous afternoon in
terms of the local date.

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> TimeZone  
<span class="navnp"><a href="tempfile.html" class="nav"><em>Prev:</em> TemporaryFile</a>
    <a href="vector.html" class="nav"><em>Next:</em> Vector</a>    
</span>

</div>
