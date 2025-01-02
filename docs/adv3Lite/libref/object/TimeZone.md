---
layout: docs
---
<span class="title">TimeZone</span><span class="type">class</span>

[date.h](../file/date.h.html)\[[508](../source/date.h.html#508)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

TimeZone intrinsic class. A TimeZone object represents a location entry
in the IANA zoneinfo database. It contains information on the location's
wall clock time settings relative to universal time (UTC), allowing
translations between local wall clock time and UTC. The object stores
the current clock settings in the location, the current ongoing rules
for future switches between standard and daylight time (if applicable in
the zone), and a full history of the past changes to the location's time
settings, including standard/daylight time changes, redefinitions of the
time zone, and changes in the location from one time zone to another.
(For example, some US cities that lie near zone borders have switched
their time zones at various points in their history.) The historical
information for most zones goes back to the original establishment of
standard time zones, typically in the late 19th century, and for dates
before that, the history usually includes the Local Mean Time settings
for the location. The history information allows the accurate
reconstruction of the local time representation for virtually any date
and time in the past, present, or future.

Construction:

  
new TimeZone() - creates a TimeZone object representing the local  
system time zone. Note that a TimeZone object created this way  
will always represent the local zone. If the game is saved on  
one machine and restored on another that uses a different local  
time zone, the restored object will represent the new machine's  
local time zone after the restore.

  
new TimeZone(integer) - creates a TimeZone object representing the  
given offset from UTC, in seconds. Positive values are east of  
UTC, negative values are west; for example, Pacific Standard  
Time is 8 hours west of UTC, so you'd use -8\*60\*60 as the offset.  
This type of TimeZone represents a fixed offset

  
new TimeZone('name') - creates a TimeZone object for the given zone  
name. This can use a number of formats: \*.  
'America/New_York' - a name from the IANA zoneinfo database.  
This is the best way to specify a zone because it's  
unambiguous. \*.  
'Z', 'UTC' - UTC (Universal Time Coordinated, also sometimes  
called GMT/Greenwich Mean Time, or Z/Zulu time)

  
'EST' - a colloquial English abbreviation for a local time  
zone. Many of these are ambiguous, since some zone names  
are used in several different regions. For example,  
'CST' is used in the US, Brazil, Australia, and China,  
for time zones at different offsets from UTC. When the  
name is ambiguous, we use a fixed mapping that tends to  
favor zones in the US and Europe. This format is mapped  
to a zoneinfo entry, so the actual underlying zone will  
be one of the location-based entries. For example, 'EST'  
is mapped to 'America/New_York'. This is important  
because it means that the TimeZone object uses the full  
rule set and history for the mapped zone, which might  
differ from the history of the same nominal zone in other  
locations; e.g., 'America/New_York' and 'Canada/Montreal'  
are both on Eastern Time, but they have some differences  
in their historical daylight savings rules.

  
'PST8PDT' - a POSIX TZ-style string, with the standard time  
abbreviation, the standard time offset in hours (and  
optionally minutes and seconds, with colons), the daylight  
time abbreviation, and optionally the daylight time  
offset (which defaults to one hour ahead of standard  
time when not specified). This is somewhat less ambiguous  
than using just the zone abbreviation, but is still

  
'+0430' or 'UTC+0430' - four hours thirty minutes east of UTC;  
this can also be written as '+4:30' or '+4:30:00'. For a  
whole number of hours, you can write it as simply '+4', for  
example. A negative number is west of UTC; e.g., Pacific  
Standard Time is '-8'. When using this format, the zone  
represents a fixed time offset from UTC; it's not tied to  
any location or named time zone, and doesn't use daylight  
savings time.

Note that the commonly used time zone names (e.g., PST, or Pacific
Standard Time) aren't allowed. The standard time zone names are
ambiguous; for example, CST refers to at least four different time zones
(USA Central Standard Time, Australia Central Standard Time, China
Standard Time, and Cuba Summer Time).

`intrinsic class `**`TimeZone`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TimeZone`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>





*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`getHistory`](#getHistory)[`getLocation`](#getLocation)[`getNames`](#getNames)[`getRules`](#getRules)

Inherited from `Object` :  
[`callInherited`](../object/Object.html#callInherited)[`createIterator`](../object/Object.html#createIterator)[`createLiveIterator`](../object/Object.html#createLiveIterator)[`forEach`](../object/Object.html#forEach)[`getPropList`](../object/Object.html#getPropList)[`getPropParams`](../object/Object.html#getPropParams)[`getSuperclassList`](../object/Object.html#getSuperclassList)[`isClass`](../object/Object.html#isClass)[`isTransient`](../object/Object.html#isTransient)[`mapAll`](../object/Object.html#mapAll)[`ofKind`](../object/Object.html#ofKind)[`propDefined`](../object/Object.html#propDefined)[`propInherited`](../object/Object.html#propInherited)[`propType`](../object/Object.html#propType)[`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getHistory"></span>

`getHistory (date?)`

[date.h](../file/date.h.html)\[[566](../source/date.h.html#566)\]

<div class="desc">

Get the history item that applies to a given date, or the entire
enumerated history of clock changes in this timezone.

If 'date' is supplied, it must be a Date object. This returns a list
describing the single period in the timezone history that applies to the
given date. The list contains \[date, offset, save, abbr\], where 'date'
is a Date object giving the starting date when the history item took
effect; 'offset' is the offset from UTC in milliseconds of standard time
in the zone during this period, using the zoneinfo convention that
positive values are east of GMT; 'save' is the additional time added if
daylight savings is in effect during this period, in milliseconds, or
zero if standard time is in effect; and 'abbr' is a string giving the
abbreviation for the zone during this period ('PST', 'EDT', etc). Each
period in the history is entirely in daylight or standard time; if
'save' is zero, standard time is in effect, otherwise daylight time.

If 'date' is omitted or nil, this returns a list of all of the
pre-computed changes in the timezone's history, including definition
changes and daylight time changes. Each list entry is a sublist of the
form described above.

In a full history, the first and last items are special. The first item
represents the settings in the location prior to the establishment of
standard time zones; this is usually a "local mean time" setting (with
abbreviation LMT) for the mean solar time at the location. The last item
represents the last pre-computed history entry, which is sometimes in
the future; further transitions after this item might occur if the zone
has ongoing rules.

In many cases, the history list contains a number of periods that could
have been inferred from the ongoing rules, so strictly speaking they
don't need to be enumerated in the history. When they're included, it's
for faster run-time lookup. TADS pre-computes rule-based transitions up
to the present and a few years into the future, since history-based
lookups are much faster than applying the rules. We expect that the
typical program will mostly work with dates close to the present time,
so we pre-compute transitions for a few years into the future to speed
things up for the typical case. For changes after the last enumerated
entry, TADS applies the rules, so transitions in the far future will be
correctly figured when needed.

</div>

<span id="getLocation"></span>

`getLocation ( )`

[date.h](../file/date.h.html)\[[628](../source/date.h.html#628)\]

<div class="desc">

Get the zone's location. This returns a list: \[country, lat, lon,
comment\], where 'country' is a string with the country code (a
two-letter ISO 3166 code) for the country that contains the zone's main
city, 'lat' is a string giving the latitude in the format +ddmm (degrees
and minutes) or +ddmmss (and seconds), 'lon' is the longitude as a
string in the format +dddmm or +dddmmss, and 'comment' is a string with
any comment text from the zoneinfo database.

</div>

<span id="getNames"></span>

`getNames ( )`

[date.h](../file/date.h.html)\[[520](../source/date.h.html#520)\]

<div class="desc">

Get the name or names for this timezone. This returns a list of strings
with the timezone's names, as defined in the IANA zoneinfo database. The
zoneinfo database names zones by location, usually using a combination
of a continent major city, as in 'America/New_York'. Some zones have
multiple aliases as a matter of convenience, such as when there are
several major cities in a region that share the same timezone rules.
When a zone has aliases, the primary name is listed first, followed by
the aliases.

</div>

<span id="getRules"></span>

`getRules ( )`

[date.h](../file/date.h.html)\[[616](../source/date.h.html#616)\]

<div class="desc">

Get the ongoing rules that are in effect after the last enumerated
history item. This returns a list of the rules for future changes to the
zone; each rule fires once annually, and encodes the day of year when
the rule fires, and the new clock settings in effect after the rule
fires. Virtually all zones that use ongoing rules have exactly two: one
for the annual change to daylight savings time in the spring, and one
for the return to standard time in the fall. Each rule's firing date is
specified in an abstract format designed to handle the variety of
regional daylight savings schemes: "last Sunday in March", "second
Sunday in November", "January 15", etc.

Each rule in the list is described by a sublist: \[abbr, offset, save,
when, mm, typ, dd, wkday, time, zone\]. 'abbr' is a string with the time
zone abbreviation while the rule is in effect; most zones use one
abbreviation for standard time and another for daylight time, so each
rule tells us the abbreviation to use while the rule is in effect.
'offset' is the standard time GMT offset, in milliseconds, while the
rule is in effect, and 'save' is the additional offset for daylight
savings time - so the full offset while the rule is in effect is
offset+save. 'when' is a string with a human-readable description of the
firing date: this will be of the form 'Mar last Sun' (for the last
Sunday in March), 'Mar Sun\>=1' for the first Sunday in March on or
after March 1, 'Mar Sun\<=28' for the last Sunday in March on or before
March 28, 'Mar 7' for March 7, or 'DOY 72' for the 72nd day of the year.
Next we have the same firing date information in a more
computer-friendly format: 'mm' is the month number, 1-12 for Jan-Dec;
'typ' is an integer giving the type of date specification (0 for a fixed
day of the month 'mm/dd', 1 for the last \<weekday\> of month \<mm\>, 2
for the first \<weekday\> of month \<mm\> on or after day \<dd\>, and 3
for the last \<weekday\> of month \<mm\> on or before day \<dd\>), 'dd'
is the day of the month (which is ignored if 'typ' is 1), 'wkday' is the
day of the week, 1-7 for Sunday-Saturday (which is ignored if 'typ' is
0). 'time' is the time of day the rule goes into effect, as milliseconds
after midnight. 'zone' is a code for the timezone used to interpret the
date and time; this is usually 'w' for local wall clock time (in other
words, the local time zone that was in effect up until the moment this
rule takes effect - so if this is a daylight savings rule, the rule is
stated in terms of local standard time, and vice versa), but can also be
's' for local standard time (in other words, if the previous period was
in daylight time, ignore that and read this rule's time in terms of
local standard time instead), or 'u' for UTC. Note that the zone has to
be applied to the full date-and-time value, since an 's' or 'u' could
conceivably cause the local date and the date in the rule's zone to
differ by a day at the time of day of the rule.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
