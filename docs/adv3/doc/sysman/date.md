---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Date  
<span class="navnp"><a href="collect.html" class="nav"><em>Prev:</em> Collection</a>
    <a href="dict.html" class="nav"><em>Next:</em> Dictionary</a>    
</span>

</div>



# Date

A Date object represents a date-and-time value specifying a particular
point in time. The Date class can parse strings expressing dates in many
common human and computer formats; it can generate custom-formatted
strings from date values; and it can solve tricky date arithmetic
problems with relative ease, such as computing the number of days
between two dates, finding the date that's a given number of days (or
weeks, months, years, etc) after or before a given date, finding the day
of the week of a given date, or finding the next or previous date that
falls on a given weekday. It works with the [TimeZone](timezone.html)
class to perform conversions between universal time (UTC) and local time
in virtually any time zone, taking into account the historical changes
in the definitions of local time zones around the world (including the
ever-changing daylight savings time rules in individual regions).

Internally, a Date value is stored in "universal" time, relative to the
worldwide UTC standard. This makes Date values independent of local time
zones and seasonal clock changes for daylight savings time. For example,
if you use Date values to compare a wall clock time in Los Angeles to
one in New York, the comparison won't be fooled by the three-hour time
zone difference; since the Date class converts both values to UTC
internally, the comparison yields the true order of the events, not the
nominal order of the local clock readings.

Externally, when you parse or display a date, you'll usually want the
date to be expressed in a local time zone. The Date class takes care of
these conversions automatically. By default, formatting and parsing
convert to and from the local time zone settings for the host system,
but you can also specify a particular time zone with each conversion.

A Date object is immutable; it records a particular time and date that
doesn't change. Arithmetic on a Date object, such as adding a number of
days to the date, yields a new Date object representing the result.

When using the Date class, `\#include
\<date.h\>` in your source files.

## Construction

`new Date()`

<div class="fdef">

This creates a Date object representing the current date and time, as of
the moment the `new` expression is evaluated.
(The object created isn't a "live" current-time value that changes every
time you look at it; it simply records the fixed moment when the
`new` expression was evaluated. Evaluating the
same `new` expression again will yield another
Date object representing the then-current time.)



<span id="newDateStr"></span>

`new Date(*str*, *refTZ*?, *refDate*?)`

<div class="fdef">

This parses the string value *str*, attempting to interpret it as a
written date in various common human and computer formats. A wide range
of formats is accepted, so the string doesn't have to be in any
particular rigid format; the parser attempts to make sense of most of
the usual ways people (and computers) write dates. See [built-in input
formats](#inputFormats) below for a full list.

*refTZ* is the reference time zone. If this is
`nil` or is omitted, the default is the host
system's local time zone. *refTZ* can be given in any of the [timezone
argument](#tzarg) formats. The parsed date is taken to be in this time
zone unless it explicitly specifies a different time zone within the
string.

See the notes on [parsing time zones](#tzParsing) if you expect to parse
date strings that include time zone names within the strings.

*refDate* is an optional Date object giving the reference point for
parsing the date. This is used to fill in certain missing information if
the string contains only a partial date value. If this is omitted, the
current time is used by default. The reference date is used as follows:

- If the parsed date contains only a month and day (e.g., "March 15"),
  or only a month ("June"), the year is taken from the reference date.
- If the parsed date contains only a time ("12:13 pm"), the entire date
  (day, month, and year) is taken from the reference date.
- If the parsed date has a two-digit year ("5/15/92"), the century is
  inferred from the reference date such that it yields the closest year
  to the reference date's year. For example, if the reference date's
  year is 2012, "92" would be interpreted as 1992, since that's closer
  to 2012 than 2092 is; "55" would be taken as 2055, since that's closer
  than 1955.

Other missing elements have different handling that doesn't involve the
reference date:

- If the parsed date string contains only a year, the date is taken to
  be January 1 of that year.
- If the string contains only a year and month, the date is taken to be
  the first of that month.
- If the string has a date with no time, the time is implicitly midnight
  (i.e., the very first moment of the day).
- If the time is given in hours and minutes, the seconds and
  milliseconds are implicitly zero.

</div>

`new Date(*number*, '*J*')`

<div class="fdef">

*number* is an integer or [BigNumber](bignum.html) giving a Julian day
number (see [getJulianDay()](#getJulianDay)), which is the number of
days since January 1, 4713 BCE on the (proleptic) Julian calendar, at
noon UTC. The fractional portion (if any) is the fraction of a day past
noon UTC, counting a day as exactly 24 hours (86,400 seconds).

</div>

`new Date(*number*, '*U*')`

<div class="fdef">

*number* is an integer or [BigNumber](bignum.html) giving the number of
seconds since January 1, 1970, at 00:00 UTC, which is also known as the
Unix Epoch. If the value is negative, it's the number of seconds before
the Epoch.

This constructor option is provided because this is a common way to
represent times in software. Unix-like systems in particular represent
time this way. This constructor allows you to create a Date value
directly from an external value in this format.

A 32-bit integer can only represent time values in this format from
12/13/1901 to 1/19/2038, since those are the dates that happen to be
2,147,438,648 seconds on either side of 1/1/1970. (This is known in Unix
circles as the "year 2038 bug", since older Unix systems used a 32-bit
value for the time counter. This has been largely fixed in modern Unix
systems by using a 64-bit value instead.) You can use a BigNumber value
if you need to exceed these limits. A BigNumber also lets you specify
fractional seconds. Note that the Date type stores times to millisecond
precision, so any fractional part specified with a BigNumber will be
rounded to the nearest millisecond.

This constructor calculates the date and time based on the definition of
one day as exactly 86,400 seconds, ignoring any [leap
seconds](#leapseconds) between the Epoch and the given time. This is the
way almost all Unix systems work as well, so the result should be
exactly the same calendar date and clock time that Unix systems show for
a given timestamp value. If you should encounter a Unix-type system that
actually does correct for leap seconds, it might show slightly different
clock times for dates in the past (as of 2012, this could be up to a
24-second difference, since that's how many leap seconds were added to
UTC between 1972 and 2012).

</div>

`new Date(*year*, *month*, *day*, *tz*?)`

<div class="fdef">

This creates a Date value representing midnight (00:00) on the given
date. *year* is the year number (e.g., 2012), *month* is a calendar
month (1 to 12), and *day* is a day of the month (1 to 31). For example,
`new Date(2012, 4, 10` creates a Date value for
April 10, 2012 at midnight, local time.

The date is taken as midnight in the time zone specified by *tz* (using
the usual [timezone conventions](#tzarg)), which defaults to the host
system's local time zone if `nil` or not
specified.

You can also use this constructor with invalid month and day values. If
the day is out of range for its month, it's interpreted by moving into
the next or previous month until the day is valid. For example,
`new Date(2012, 11, 31)` is the first day of
December; `new Date(2012, 3, 0)` is the last day
of February 2012. You can use this feature for many simple date
arithmetic operations; for example, `new Date(2012, 1,
90)` gives you the 90th day of the year, and
`new Date(2012, 4, 10 + 60)` is 60 days after
April 10. The same treatment applies to the month; if it's less than 1
or more than 12, it's a month in the previous or following year, so
`new Date(2012, 14, 1)` is interpreted as
February 1, 2013.

</div>

`new Date(*year*, *month*, *day*, *hour*, *minutes*,
*seconds*, *ms*, *tz*?)`

<div class="fdef">

Creates a Date value representing the given time on the given date.
*year* is the year number (e.g., 2012), *month* is the month (1 to 12),
*day* is the day of the month (1 to 31). *hour* is the clock hour (0 for
midnight to 23 for 11 PM), *minutes* is the number of minutes past the
hour (0 to 59), *seconds* is the number of seconds past the minute (0 to
59), and *ms* is the number of milliseconds past the second (0 to 999).

*tz* is the timezone in which the time is interpreted, specified with
the usual [timezone conventions](#tzarg). If *tz* is
`nil` or missing, the system's local time zone
is the default.

</div>

## <span id="tzarg">Timezone arguments</span>

Many of the constructors and methods take a "timezone" argument. This
lets you specify the local time to be used for parsing an input time,
formatting a time, or extracting a date or time component. Remember that
a Date object's value is stored internally in universal time (UTC), so
it must be converted to a local time zone whenever you want a calendar
date or clock time. The local time zone affects not only the clock time
portion but also the date; it can be Monday in one time zone and Tuesday
in another.

All of the methods and constructors that take timezone arguments let you
omit the argument or use `nil`, in which case
the host system's local time zone will be used by default. For most
purposes, this is the time zone you'll want. The typical situation is
that you're simply displaying times to the user, who will want to see
them in terms of her ordinary wall clock time.

When you do wish to specify a particular time zone, you can supply one
of the following:

- a [TimeZone](timezone.html) object
- a string giving a time zone name, in a format accepted by the TimeZone
  constructor
- a number giving a UTC offset in seconds

See the [TimeZone](timezone.html) class for full details on each of these
formats.

## Date arithmetic

A Date value can be used in arithmetic expressions to carry out a number
of common calendar calculations.

*Date* `+` *number* calculates a new Date that's
the given number of days after the given Date (or before, if *number* is
negative). For example, `new Date('2010-1-1') +
30` returns a Date representing Jan 31, 2010 at midnight local
time.

*Date* `-` *number* calculates a Date that's the
given number of days before the given date (or after, if *number* is
negative).

You can add or subtract time values by using fractional days, specified
as [BigNumber](bignum.html) values. A day is defined for the purposes of
these calculations as exactly 86,400 seconds long, so an hour is 1/24th
of a day, a minute is 1/1440th, and a second is 1/86400th. For example,
`new Date('2010-1-1') + 1.0/24` yields 1:00 AM
on Jan 1, 2010.

*Date* `-` *Date* returns a BigNumber giving the
elapsed time between the two date values, measured in days. The result
is a BigNumber because it represents any difference in the times as a
fraction of a day. For example, `new Date('2010-1-1
16:00') - new Date('2010-1-1 10:00')` yields 0.25, since the
difference between these two times is 6 hours, or 1/4th of a day.
Similarly, `new Date('2010-1-2 16:00') - new
Date('2010-1-1 10:00')` yields 1.25, since the difference is 1 day
6 hours.

You can compare two Date values with `\>`,
`\<`, `\<=`,
`\>=`, `==`, or
`!=`. This compares the Dates based on the UTC
times they represent. One Date is greater than another if it occurs
later in time than the other; a Date is less than another if it occurs
earlier in time. Two dates are equal if they occur at exactly the same
UTC moment.

## Conversion to string

If a Date value is used in a context where a string is required, such as
for displaying output, the Date is automatically formatted to a string
using a default format. For more control over the presentation, use
`formatDate()`.

## Methods

`addInterval(*interval*)`

<div class="fdef">

Adds the given calendar and/or clock interval to the given Date,
returning a new Date object representing the result. *interval* is given
as a list, consisting of \[*years*, *months*, *days*, *hours*,
*minutes*, *seconds*\]. Each element is an integer (the *hours*,
*minutes*, and *seconds* can also be given as BigNumber values) that's
added to the corresponding date/time component (negative values are
subtracted).

You can omit trailing elements that are unneeded; this is the same as
using 0 for the omitted elements. For example, to add one month to a
date, you can write simply `d = d.addInterval(\[0,
1\])`.

When months and years are added, the interval is in terms of whole
calendar years and months. For example, if `d`
represents February 1, 2011, `d.addInterval(\[0,
1\]` yields March 1, 2011, and
`d.addInterval\[0, 2\]` represents April 1,
2011. The difference in the lengths of the months is irrelevant because
the addition is in terms of whole months. The same holds for adding
years: the difference in length between leap years and non-leap years
doesn't matter, since the addition works in whole years.

When time units are added, one day is defined as exactly 86,400 seconds.
Any UTC [leap seconds](#leapseconds) in the added interval are ignored.

</div>

<span id="compareTo"></span>

`compareTo(*date*)`

<div class="fdef">

Compares this Date value to *date*, which must be another Date value.
Returns an integer less than zero if this Date is less than (earlier in
time than) *date*, zero if the two dates are equal (they represent the
same point in time), and greater than zero if this date is greater than
(after) *date*.

Note that the same comparison can be made using the ordinary comparison
operators (`\<`, `\>`,
`\>=`, `\<=`,
`==`, `!=`). This method
is convenient for cases where you want the relative order of two dates,
such as in sort callbacks, since it lets you get the order in one shot.

</div>

<span id="findWeekday"></span>

`findWeekday(*weekday*, *which*, *tz*?)`

<div class="fdef">

Returns a new Date giving the date of the Nth *weekday* on or
after/before the given date, in local time zone given by *tz* (see
[timezone arguments](#tzarg)). *weekday* is a weekday number, 1 to 7 for
Sunday to Saturday. *which* is an integer specifying which occurrence of
the given weekday to find. A positive value finds a future occurrence; a
zero or negative value finds a past occurrence. +1 is the first
*weekday* on or after the given date, +2 is the second *weekday* on or
after the date, and so on. 0 is the first *weekday* on or before the
date, -1 is the second *weekday* on or before the date, etc.

For example, to find the first Sunday in October of this year, you could
write `new Date('Oct 1').findWeekday(1, 1)`. To
find the last Thursday in November, `new Date('Dec
0').findWeekday(0, 5)`: "December 0" is equivalent to the last day
of November, so this starts on the last day of November, then finds the
nearest Thursday on or before that day.

</div>

<span id="formatDate"></span>

`formatDate(*format*, *tz*?)`

<div class="fdef">

Returns a string representation of the Date value's representation on
the Gregorian calendar, in the local time zone specified by *tz* (see
[timezone arguments](#tzarg)), formatted according to the format
template string *format*. The format string consists of a free mixture
of literal text, which is simply copied exactly to the result string,
and "%" substitution codes, listed below. For example,
`new Date('12-3-2011 17:30').formatDate('on the %t of
%M, %Y at %I:%M %p')` returns `'on 3rd of
December, 2011 at 5:30 pm'`.

Most of the numeric formats have a fixed number of digits, with leading
zeros for values that don't fill all of the digit slots - e.g., the
`%d` format renders 7 as '07'. You can remove
the leading zeros with the `\#` flag - e.g.,
`%#d` shows 7 as '7'. You can alternatively
replace leading zeros with leading spaces or quoted spaces by putting
the desired space character between the `%` and
the specifier letter: `% m` (*percent space*
`m`) shows the month number with a leading
ordinary space when needed, and `%\\ m` show the
month number with a leading quoted space when needed.

You can show a numeric field in Roman numerals with the
`&` flag: `%&y` show the
year in Roman numerals. Leading zeros are obviously not a factor with
this style. Roman numerals can be used for numbers from 1 to 4999; the
`&` flag is ignored if the value to be displayed
is outside this range.

`%a`

the abbreviated weekday name ('Mon')

`%A`

the full weekday name ('Monday')

`%u`

the ISO 8601 weekday number, 1 to 7 for Monday to Sunday

`%w`

the weekday number, 0 to 6 for Sunday to Saturday

`%d`

the two-digit day of the month, 01 to 31

`%t`

day of the month as a number with an ordinal suffix, '1st' to '31st'

`%j`

the three-digit day of the year, 001 to 366 (January 1 is day 1,
February 1 is day 32, etc)

`%J`

the Julian day number (see [getJulianDay()](#getJulianDay)). The value
uses as many digits as needed, with no leading zeros. By default, the
full value is displayed, including the fractional portion representing
the time of day. Use the `\#` flag
(`%#J`) to show only the whole part.

`%U`

a number giving the week of the year that contains the day represented
by the Date value, 00 to 53; week 01 is the week that starts with the
first Sunday of the year, and week 00 is the partial week (if any) that
precedes the first Sunday

`%W`

a number giving the week of the year that contains the day represented
by the Date value, 00 to 53; week 01 is the week that starts with the
first Monday of the year, and week 00 is the partial week (if any) that
precedes the first Monday

`%V`

the ISO-8601 week number of the week that contains the day represented
by the Date value, 01 to 53; if the week containing January 1 has four
or more days in the new year, it's week 1, otherwise it's the last week
of the previous year. There is no week 0 in this system, because days
between January 1 and the Monday of week 1 are considered part of the
the previous year. See also the `%g`,
`%G`, and `%u` formats.

`%b`

the abbreviated name of the month ('Feb')

`%B`

the full name of the month ('February')

`%m`

the two-digit month number, 01 to 12

`%y`

the two-digit year number (i.e., the last two digits of the year: 2005
is formatted as '05')

`%Y`

the four-digit year number, in astronomer's notation (the year before AD
1 is represented as year 0000, the year before that is -0001, and so on)

`%e`

the year (with no leading zeros) followed by a space and the era name
(AD or BC by default, but these can be customized with
[setLocaleInfo](#setLocaleInfo)). With a '-' flag
(`%-e`), the era name is placed before the year.
The year before AD 1 is shown as 1 BC, the year before that 2 BC, etc.

`%E`

the year (with no leading zeros) and era name; the era name is written
before the year for AD years (e.g., 'AD 32') and after for BC ('37 BC');
the order is reversed if the `-` flag is used
(`%-E`).

`%C`

the two-digit century prefix for the year ('19' for 1900 to 1999)

`%g`

the last two digits of the ISO-8601 Week calendar year for the date;
this is for use with the `%V` format

`%G`

the four digit ISO-8601 Week calendar year for the date; for use with
the `%V` format

`%H`

the two-digit hour, on the 24-hour clock, 00 to 23

`%I`

the two-digit hour on the 12-hour clock, 01 to 12

`%M`

the two-digit minutes after the hour, 00 to 59

`%S`

the two-digit seconds after the minute, 00 to 59

`%N`

the three-digit milliseconds after the second, 000 to 999

`%P`

upper-case AM or PM designator for a 12-hour clock

`%p`

lower-case AM or PM designator for a 12-hour clock

`%r`

the full 12-hour clock time, equivalent to `%I:%M:%S
%P`

`%R`

the 24-hour clock time with minutes, equivalent to
`%H:%M`

`%T`

the 24-hour clock time with seconds, equivalent to
`%H:%M:%S`

`%X`

the preferred time representation according to the locale settings; the
default is `%H:%M:%S`, but this can be
overridden with [setLocaleInfo](#setLocaleInfo)

`%z`

the local time zone abbreviation ('EST')

`%Z`

the local time zone offset from UTC, in hours and minutes, as four
digits (+0500)

`%c`

the preferred date and time stamp for the locale; the default is
`%a %b %#d %T %Y`, but this can be overridden
with [setLocaleInfo](#setLocaleInfo)

`%D`

the short date, equivalent to `%m/%d/%y`

`%F`

the database-style date, equivalent to
`%Y-%m-%d`

`%s`

the Unix timestamp value for the Date; this is an integer giving the
number of seconds between the Date and the Unix Epoch, 1/1/1970 00:00
UTC; it's positive for dates after the Epoch and negative for dates
before; each day is counted as exactly 86,400 seconds, ignoring any UTC
leap seconds

`%x`

the preferred locale date representation; the default is
`%m/%d/%y`, but this can be overridden with
[setLocaleInfo](#setLocaleInfo)

`%%`

a single `%` character

This method is modeled on the `strftime()`
function found in C, php, and other languages (and the related
DATE_FORMAT function in MySQL). Most of the format codes are the same as
in those other languages. It's not a particularly mnemonic or rational
set of codes, but given the number of variations needed it would be hard
to come up with a set that actually was mnemonic or rational, so we
figured we could at least choose a set that some people already know. A
number of the codes are unique TADS extensions.

</div>

<span id="formatJulianDate"></span>

`formatJulianDate(*format*, *tz*?)`

<div class="fdef">

Formats the Date value to a string giving the Julian calendar
representation of the date. This works just like
[formatDate()](#formatDate), but uses the Julian year, month, and day
for the appropriate fields.

Many fields will show the same values as for formatDate(). The
time-of-day fields aren't affected, since Julian days are deemed to
start at midnight, just like Gregorian days. The Week Date fields
(`%V`, `%G`) aren't
affected because the Week Date system is effectively an independent
calendar.

</div>

<span id="getClockTime"></span>

`getClockTime(*tz*?)`

<div class="fdef">

Returns the time of day represented by this Date object, in the local
time zone specified by *tz* (see [timezone arguments](#tzarg)). Returns
a list containing \[*hour*, *minute*, *second*, *ms*\], where *hour* is
the hour of the day on the 24-hour clock (0 to 23), *minute* is the
number of minutes past the hour (0 to 59), *second* is the number of
seconds past the minute (0 to 59), and *ms* is the number of
milliseconds past the second (0 to 999).

</div>

<span id="getDate"></span>

`getDate(*tz*?)`

<div class="fdef">

Returns a list consisting of the \[*year*, *month*, *day*, *weekday*\]
that the Date corresponds to on the Gregorian calendar, in the local
time zone. *tz* specifies the local time zone to use; see [timezone
arguments](#tzarg).

*year* is the calendar year; this uses an integer scale with no AD/BC
eras. Positive values correspond to the like numbered AD years, so 2012
means AD 2012; 0 is the year before AD 1, which is called 1 BC in the
AD/BC notation; -1 is the year before that, usually called 2 BC; and so
on. So if the year is less than 1, it represents (-year+1) BC.

*month* is the calendar month, 1 to 12 for January to December. *day* is
the day of the month, 1 to 31.

*weekday* is the day of the week, 1 to 7 for Sunday to Saturday.

This method always yields Gregorian calendar dates, even for dates
before 1582 (when the calendar was first adopted). It doesn't make any
attempt to switch to other calendars for older dates.

</div>

<span id="getISOWeekDate"></span>

`getISOWeekDate(*tz*?)`

<div class="fdef">

Returns the Date object's date in the ISO 8601 Week Date system, in the
local time zone given by *tz* (see [timezone arguments](#tzarg)). The
return value is a list consisting of \[*year*, *week*, *day*\], where
*year* is the Week Date year, *week* is the week of the year, 1 to 53,
and *day* is the day of the week, 1 to 7 for Monday to Sunday.

The ISO Week Date system is in a sense a full-fledged calendar, based on
an annual cycle of weeks rather than months. A full Week Date is
expressed as a year, week number, and day number. For example,
2009-W01-1 represents the first day (Monday) of the first week of Week
Date year 2009; this corresponds to the Gregorian calendar date December
29, 2008. The year number in the Week Date system is the usually same as
the year on the Gregorian calendar, but not always, as in the example we
just saw; the years can differ by plus or minus one for the first few
days of January (Gregorian) and the last few days of December. The
reason for the difference is that the Week Date year boundaries always
align exactly with week boundaries, so a week that's split across years
on the Gregorian calendar will always be entirely in a single year on
the Week calendar. The Gregorian and Week Date calendars always agree on
the day of the week; a Monday is always a Monday on both calendars.

</div>

<span id="getJulianDay"></span>

`getJulianDay()`

<div class="fdef">

Get the Julian day number, defined as the number of days since January
1, 4713 BCE on the (proleptic) Julian calendar, at noon UTC.

The return value is a BigNumber value giving the Julian day
corresponding to this Date value, including a fractional part for the
time past noon UTC on that date. The fractional part is the fraction of
a day, defined as exactly 24 hours (86,400 seconds); for example, 0.25
represents 1/4 of a day, or 6 hours, yielding a clock time of 18:00 UTC
(6 hours past noon).

There's no local time zone involved in this calculation, since the
Julian day number is explicitly defined in terms of universal time.

The Julian day number is an important figure in astronomy. It's also
quite useful as a common currency for converting between arbitrary
calendars. You might not be able to find a published formula for
converting directly between calendar X and calendar Y, but there's
almost always a formula for converting between any given calendar and
Julian day numbers.

</div>

<span id="getJulianDate"></span>

`getJulianDate(*tz*?)`

<div class="fdef">

Calculates the Julian calendar date for this Date object, in terms of
the local time in the given time zone (or the system's local time zone
if 'tz' isn't specified). Returns a list consisting of \[*year*,
*month*, *day*, *weekday*\], where *year* is an integer giving the year
number; *month* is an integer with the month, 1-12 for January to
December; *day* is an integer with the day of the month, 1-31; and
*weekday* is the day of the week, 1-7 for Sunday to Saturday. (The
weekday on the Julian calendar always agrees with the weekday on the
Gregorian calendar for a given day. Even medieval popes lacked the power
to interfere with the eternal cycle of the seven-day week.)

The Julian calendar is almost identical to the Gregorian; both have the
same system of months and days, and both have an additional leap day on
February 29 in leap years. The only difference is the formula that
determines which years are leap years. On the Julian calendar, ever year
evenly divisible by 4 is a leap year. On the Gregorian, leap years
include *most* years divisible by 4, but not those divisible by 100,
unless they're also divisible by 400. (So 1900 isn't a leap year on the
Gregorian calendar, and 2000 is.) The added complexity in the Gregorian
system isn't gratuitous; it's designed to make the calendar's average
year length a closer approximation of the actual mean solar year, so
that the calendar stays more closely aligned with the Earth's seasons
over long periods of time.

The Julian calendar can be useful for historical purposes, as it was in
use in its present form in nearly all of Europe from 8 CE to 1582, and
remained in use much later in many regions, as late as the 1920s in a
few. (The nominal adoption date was even earlier, 46 BC, but that was a
slightly different version; several revised versions were in effect at
different times before the calendar reached the form now considered
canonical.) Dates in historical records in Europe from before the local
adoption of the Gregorian calendar are usually on the Julian system.

</div>

<span id="parseDate"></span>

`static parseDate(*str*, *format*?, *refDate*?
*refTZ*?)`

<div class="fdef">

Parse a date. This is similar to the `new
Date(*str*)` constructor, but lets you specify one or more custom
format templates, and returns detailed information on the parsing
results.

*str* is the string to parse. *format* is an optional custom format
template string, or a list of custom template strings; if this is
omitted or `nil`, the [built-in
formats](#inputFormats) are used by default. Specifying a
non-`nil` *format* overrides the built-in
formats, but you can include them in your list by including a
`nil` element in the list; this means "include
all of the built-in templates here". The order is sometimes important;
the template parser scans the entire template list, and if two or more
templates match, it picks the one that matched the longest portion of
the input string. But if two templates match the same amount of input
text, the one that's earlier in the template list takes precedence.
*refDate* is an optional Date object giving a reference date, used to
fill in missing date/time fields; this works the same way it does in the
[`new Date(*str*)`](#newDateStr) constructor. If
*refDate* is omitted or `nil`, the current
system time is used by default. *refTZ* is an optional
[timezone](#tzarg), specifying the default timezone to use if the date
string doesn't contain a timezone name of its own; this defaults to the
host system's local timezone.

If you include custom format template strings, you construct these
strings using the same syntax as the built-in formats. Refer to the
[input format](#inputFormats) section for a list of the fields.

If the parsing succeeds, the return value is a list that contains the
parsed date (as a Date object), the parsed timezone (if any, as a
TimeZone object), the format string(s) matched, and a list of strings
with the original source text matched for the individual date/time
components. A TimeZone object is included only if the string contains an
explicit time zone name; otherwise this element is
`nil` in the return list, indicating that the
reference timezone was used (*refTZ* if supplied, otherwise the host
system's local timezone). Source text components that aren't matched in
the string are set to `nil` in the list. The
list elements are:

\[1\] a Date object with the parsed date

\[2\] a TimeZone object with the parsed timezone, or
`nil` if a timezone name wasn't matched in the
string.

\[3\] an integer giving the fixed timezone offset specified in the input
string, in seconds, if applicable; `nil` if not.
This is applicable only when the input string specifies a timezone name
that carries specific a standard/daylight clock setting, such as "EST"
or "PDT", which overrides the TimeZone object's normal automatic
adjustment for the time of year.

\[4\] a sublist with the individual format strings matched; each element
is a string from either the built-in format list or the custom format
list you supplied

\[5\] a sublist with the original source text matched in each of the
different fields making up the date time value. This is a list of
strings; any element that wasn't matched in the input is set to
`nil`. The elements of the sublist are:

- \[1\] era - the source text matched for the AD/BC or +/- era indicator
- \[2\] year - the source text matched for the year
- \[3\] month - the source text matched for the month
- \[4\] day - the source text matched for the day of the month
- \[5\] yearDay - the source text matched for the day of the year
- \[6\] weekDay - the source text matched for the numeric day of the
  week
- \[7\] ampm - the source text matched for the AM/PM indicator
- \[8\] hour - the source text matched for the hour
- \[9\] minute - the source text matched for the minutes portion of the
  time
- \[10\] second - the source text matched for the seconds portion of the
  time
- \[11\] ms - the source text matched for the milliseconds portion of
  the time
- \[12\] unix - the source text matched for the Unix timestamp value
- \[13\] tz - the source text matched for the timezone name

The return value is `nil` if the parsing fails.
This is different from the `new Date(*str*)`
constructor, which throws an error if the parsing fails. The
`nil` return used here is meant to make it a
little more convenient to use this method to test a string of uncertain
provenance to see if it looks like a date.

</div>

<span id="parseJulianDate"></span>

`static parseJulianDate(*str*, *format*?, *refDate*?
*refTZ*?)`

<div class="fdef">

This works just like [parseDate()](#parseDate), except that it
interprets the date on the Julian calendar. The form of a Julian date is
identical to that of a Gregorian date, since the two calendars have the
same month names, days per month, and weekdays. However, a given day has
different nominal dates on the two calendars, except for a stretch in
the third century when they happen to overlap. This routine translates
the written date to an internal date/time value according to the Julian
calendar.

As with all Date operations, once the written date has been parsed into
a Date object, the Date value is independent of calendars and time
zones, so you can freely use it with Date objects parsed from Gregorian
dates. For example, this will display the Gregorian date for a given
Julian date string:

```
    local str = 'October 4, 1582';
    "<<str>> Julian = <<Date.parseJulianDate(str)[1].formatDate('%B %#d, %Y')>>\n";
```

</div>

<span id="setLocaleInfo"></span>

`static setLocaleInfo(...)`

<div class="fdef">

Sets locale information for parsing and formatting date values. This
lets you customize month names, day names, and other date elements for a
non-English presentation.

There are two ways to call this method:

- `setLocaleInfo(\[*monthNames*, *monthAbbrs*,
  ...\])` This form lets you set the whole list of custom elements
  in one shot. The list consists of strings giving the elements in order
  of the index values (see below). You can stop after any number of
  elements; any missing elements at the end of the list will simply be
  left at the current or default settings.
- `setLocaleInfo(*index*, *value*, ...)` This
  form sets elements individually. For each element you wish to set,
  include an *index*, which is one of the DateXXX values below, followed
  by a string *value* giving the custom setting for that index. With
  this format you can supply any number of index/value pairs in a single
  call.

The index values are:

Index Name

Value

Description/Default

`DateMonthNames`

0

full names of the months  
`'January,February,March,April,May,June,July,August,September,October,November,December'`

`DateMonthAbbrs`

1

abbreviated names of the months  
`'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep=Sept,Oct,Nov,Dec'`

`DateWeekdayNames`

2

full names of the weekdays  
`'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'`

`DateWeekdayAbbrs`

3

abbreviated names of the weekdays  
`'Sun,Mon,Tue,Wed,Thu,Fri,Sat'`

`DateAMPM`

4

AM/PM (meridian) indicator for 12-hour clock; upper case AM, upper case
PM, lower case AM, lower case PM (the parser ignores case when matching
input, so the lower-case versions are needed only for formatting)  
`'AM=A.M.,PM=P.M.,am,pm'`

`DateEra`

5

AD/BC indicators for era  
`'AD=A.D.=CE=C.E.,BC=B.C.=BCE=B.C.E.'`

`DateParseFilter`

6

a filter for the culture-specific parsing formats: currently this can be
'us' to select the US-style formats (e.g., the numeric "month/day"
formats), or 'eu' for the European-style formats (the "day/month"
formats)  
`'m/d'`

`DateOrdSuffixes`

7

ordinal suffixes for the days of the month: 1st, 2nd, 3rd, Nth, X1st,
X2nd, X3rd. The "Nth" entry is the one that applies to everything other
than the enumerated ones. The X1st, X2nd, and X3rd entries apply to the
twenties, thirties, forties, etc. - all of the decades except the teens.
If all of the elements after after a given point are the same, you can
omit the rest, and the last element will be used for all remaining
elements; for example, French could specify simply 're,e', and German
'.'.  
`'st,nd,rd,th,st,nd,rd'`

`DateFmtTimestamp`

8

the default local format for the full date and time, as a format string
for `formatDate()`  
`'%a %b %#d %T %Y'`

`DateFmtTime`

9

the default local format for a time without a date, as a format string
for `formatDate()`  
`'%H:%M:%S'`

`DateFmtDate`

10

the default local format for a date without a time, as a format string
for `formatDate()`  
`'%m/%d/%Y'`

`DateFmtShortDate`

11

the default short date format, as a format string for
`formatDate()`  
`'%m/%d/%y`

`DateFmt12Hour`

12

local 12-hour clock format, as a format string for
`formatDate()`  
`'%I:%M:%S %P'`

`DateFmt24Hour`

13

local 24-hour clock format, as a format string for
`formatDate()`  
`'%H:%M'`

`DateFmt24HourSec`

14

24-hour clock format with seconds, as a format string for
`formatDate()`  
`'%H:%M:%S'`

Most elements serve as both a list of strings to match in parsed input
(for the `new Date('string')` constructor) and a
list of strings to use in formatted output (from
`formatDate()`). These value lists are encoded
as strings, with commas separating elements. (Don't use spaces unless
you want them to be literally included in the output.) For input parsing
purposes, you can also supply synonyms for an item, using an equals sign
('=') to separate synonyms. For example, you'll notice that the default
list of month abbreviations allows both 'Sep' and 'Sept' for September.
When you supply synonyms, the first item is the one used for output; any
synonyms are purely for input matching.

</div>

## <span id="inputFormats">Input formats</span>

The Date class can parse a variety of common human and computer
date/time formats. It aims to be flexible enough that users can enter
dates intuitively, the way they'd write them on their own, without
having to remember specific computer formats or adhere to rigid
punctuation rules. It also allows the most common computer formats, so
that data from other software sources can usually be used directly,
without any reformatting.

Date formats vary by language and culture. For one thing, the names of
months and weekdays depend on the language being used. For another, the
order of fields in a purely numeric date varies by culture; Americans
usually write dates in month/day order, as in 11/20 for November 20,
while Europeans usually use day/month order, as in 20/11. The date
parser uses the American conventions and English words by default, but
you can customize the settings with [setLocaleInfo()](#setLocaleInfo).

The date parser works by matching an input string to a list of format
templates, one at a time. If multiple templates match, the one that
consumes the longest string of input is used. Since an input string can
include a date, a time, or both, the parser makes multiple passes over
the string: any remaining text after the first pass is matched again on
the next pass. This proceeds until either the entire input string has
been matched, or none of the templates match. The parsing only succeeds
if the entire input string can be matched, so if the process ends with
unmatched text at the end of the string, the parsing fails.

If the date string contains an explicit time zone name, the parser
interprets the date using the named zone, overriding any TimeZone
argument passed to the Date constructor. See the notes on [parsing time
zones](#tzParsing) for information on how to write time zone names in
input strings.

The templates are composed of fields. Here are the meanings of the
fields:

d

a one- or two-digit day of the month, 1 to 31 or 01 to 31

dd

a two-digit day of the month, 01 to 31

ddth

a one- or two-digit day of the month with an optional ordinal suffix, 1
to 31, 01 to 31, or 1st to 31st

m

a one- or two-digit month number, 1 to 12 or 01 to 12

mm

a two-digit month number, 01 to 12

mon

an abbreviated month name, insensitive to case; this uses the English
month names by default (Jan, Feb, ...), but localized names can be
specified with [setLocaleInfo()](#setLocaleInfo)

month

a full month name, insensitive to case; this uses the English month
names by default (January, February, ...) but localized names can be
specified with [setLocaleInfo()](#setLocaleInfo); also matches an
abbreviated month name or an upper-case roman numeral for the month (VI
for June, XII for December, etc)

W

an ISO 8601 week number: a two-digit number giving the week of the year,
optionally followed by a day number, with or without a hyphen (e.g., 15,
153, or 15-3)

doy

a three-digit day of the year, 001 to 366

y

a one- to seven-digit year number. If one or two digits are used, the
century is inferred such that the result is the year closest to the
reference date (e.g., if the reference date is in 2012, 99 is taken as
1999, since that's closer to 2012 than is 2099). If five or more digits
are used, commas or periods may be used to separate groups of three
digits, as in '5,000,000'.

ye

the year (with the same format as 'y' above), with optional era (in the
format of 'era' below). The era can be before or after the year: '95
BC', 'AD 101'. If an era is given, a one- or two-digit date isn't
assumed to be in the current century: '95 BC' is taken as year -0094,
and '11 AD' is year 0011.

era

an era name. The default era names are AD, A.D., CE, C.E., BC, B.C.,
BCE, B.C.E., but localized names can be specified with
[setLocaleInfo()](#setLocaleInfo). When an era is specified, the year
isn't assumed to be in the current century: 'AD 95' is taken as year
0095.

+-

an era designator as a "+" or "-" sign, using the astronomical timeline,
in which the year before AD 1 is year 0000, the year before that is
-0001, then -0002, and so on

yy

a two-digit year number; the century is inferred such that the result is
the year closest to the reference date

yyyy

a four-digit year number

h

a one- or two-digit hour on the 12-hour clock, 1 to 12 or 01 to 12

hh

a two-digit hour on the 24-hour clock 00 to 23

mi

a two-digit minutes past the hour, 00 to 59

i

a one- or two-digit minutes past the hour, 1 to 59 or 01 to 59

ss

a two-digit seconds past the minute, 00 to 59

s

a one- or two-digit seconds past the minute, 1 to 59 or 01 to 59

ssfrace

a string of one or more digits representing fractional seconds after a
decimal point

unix

a Unix timestamp value: a string of digits representing an integer,
positive or negative, giving the number of seconds after or before the
Unix Epoch (1/1/1970 00:00 UTC), ignoring [leap seconds](#leapseconds)

ampm

an AM/PM indicator; by default, this matches "AM", "PM", "A.M.", or
"P.M." (ignoring case), but localized versions can be specified with
[setLocaleInfo()](#setLocaleInfo)

tz

a timezone name or abbreviation, as a string of alphabetic characters,
slashes, and underscores, which must match the name or abbreviation for
a timezone in the zoneinfo database (see the [TimeZone
class](timezone.html) for more information); or a match to the gmtofs
field type (below)

gmtofs

an offset from GMT, optionally starting with the literal text "GMT"
(which must be in upper case), a "+" or "-" sign, and an offset in hours
(e.g., "+8" or "+08"), hours and minutes ("+830", "+0830", "+8:30",
"+08:30"), or hours, minutes, and seconds ("+083000", "+08:30:00")

*literals*

anything else is a single literal character to match, or a series of
single characters, *any one of which* can be matched. An underscore
represents a space. To match an alphabetic character, start the literals
with a backslash: e.g., `\W` matches a literal
'W'. You can also make the literals optional, or allow them to match
more than once: a trailing "\*" means that the template matches zero or
more characters of input, "+" matches one or more characters, and "?"
matches zero or one. For example, `\_\*` matches
zero or more spaces, and `.,;+` matches a series
of one or more periods, commas, and/or semicolons.

Those are the field values. A template string is constructed by
combining one or more of these fields, separated by spaces. A template
can also contain a "filter", which specifies that it's only used when a
given DateParseFilter value for [setLocaleInfo()](#setLocaleInfo) is
selected. The filter must be the very first thing in the string, and is
simply the filter name enclosed in square brackets: so a template that
begins with "\[us\]" means that the template only applies if
DateParseFilter is set to 'us', and "\[eu\]" means that it only applies
if DateParseFilter is set to 'eu' for European-style day/month ordering.

Template

Description

Examples

\[us\]m / d / y

numeric month/day/year

8/15/12  
08/15/2012

\[us\]m / d

numeric month/day

8/15  
08/15

\[us\]m - d

numeric month-day

8-15  
08-15

\[us\]m . d

numeric month.day

8.15  
08.15

\[us\]m .\t- d .\t- y

numeric month-day-year

8-15-12  
08.15.2012

\[eu\]d / m / y

numeric day/month/year

15/8/12  
15/08/2012

\[eu\]d / m

numeric day/month

15/8  
15/08

\[eu\]d - m

numeric day-month

15-8  
15-08

\[eu\]d . m

numeric day.month

15.8  
15.08

\[eu\]d .\t- m .\t- y

numeric day-month-year

15-8-12  
15-08-2012

yyyy mm dd

numeric year month day

19991231

yyyy .? doy

PostreSQL year with day-of-year

2011.072

m / y

numeric month/year

10/2012  
5/99

m - y

numeric month-year

10-2012  
5-99

month \_.\t-\* ddth \_,.\t+ ye

month name with ordinal day and year, and optional era

Jan 7, 2011  
December 15th, 1999  
July 23rd, 2005  
May 1, 95 AD

ddth \_.\t-\* month \_,.\t-\* ye

ordinal day with month name and year, and optional era

7th January 2011  
15 Dec 1999  
11th November 11 C.E.

month \_.\t-\* ddth

month name and ordinal day

January 7th  
Nov 11

ddth \_.\t-\* month

ordinal day and month name

7th January  
11 Nov

month - dd - ye

month name-day-year, with optional era

Jan-07-10  
January-07-2010  
Dec-15-95 BC

month \_\t.-\* y

month name and year

January 2012  
Feb-1999

month

month name

January  
Feb

+- y - mm - dd

numeric year month day

+1999-12-31  
-0005-11-10

y / m / d

numeric year/month/day

2012/10/5  
95/3/1

y - m - d

numeric year-month-day

2012-10-05  
95-3-1

y / m

numeric year/month

2012/10  
99/05

y - m

numeric year-month

2012-10  
99-05

ye \_\t.-\* month \_\t.-\* d

year (with optional era), month name, and day

1999-Decemember-5  
2012.Jan.03  
AD 9 June 10  
11 BC May 5

ye \_\t.-\* month

year (with optional era) and month name

1999-December  
72 BC Jan

ye - month - dd

year-month name-day, with optional era

10-Jan-07  
2010-Jan-07  
15 AD-Jan-07

yyyy

four-digit year

2010

era \_\* y

year with era

AD 2012  
C.E. 95

y \_\* era

year with era

15 BC  
100 BCE  
11 A.D.

h \_? ampm

hour with AM/PM

11 PM  
10am

h : mi

hour and minute

3:00  
11:30

h .: mi \_? ampm

hour and minute with AM/PM

3:00 AM  
11:30pm

h .: mi .: ss \_? ampm

hour, minute, and second with AM/PM

3:15:10 AM  
11:31:05 pm

h : mi : ss

hour, minute, and second

3:15:10  
11:31:05

h : mi : ss .: ssfrac \_? ampm

hour, minute, second, and fraction of a second with AM/PM

3:15.10.91 am

h : mi : ss .: ssfrac

hour, minute, second, and fraction of a second

3:15:10.91

tT? hh .: mi

24-hour clock hour and minute

13:50  
T23:01

tT? hh mi

24-hour clock hour and minute

1350  
T2301

tT? hh .: mi .: ss

24-hour clock hour, minute, and second

13:50:01  
T23:01:15

tT? hh mi SS

24-hour clock hour, minute, and second

135001  
T230115

tT? hh .: mi .: ss \_? tz

24-hour clock hour, minute, and second with time zone

13:50:01 America/New_York

tT? hh .: mi .: ss . ssfrac

24-hour hour, minute, second, and fraction of a second

13:50:01.95

tz

time zone name or abbreviation

America/Los_Angeles  
EST

d / mon / yyyy : hh : mi : ss \_ gmtofs

Unix log file format

7/Jul/2011:15:31:07 +0800

yyyy : mm : dd \_ hh : mi : ss

EXIF format

1999:12:10 07:32:58

yyyy -? \\W W

ISO year with ISO week and optional day

1999-W07  
1999W073  
1999W07-3

yyyy - mm - dd \\T hh : mi : ss . ssfrac

SOAP

2011-07-02T15:41:27.000

yyyy - mm - dd \\T hh : mi : ss . ssfrac gmtofs

SOAP

2011-07-02T15:42:27.000+0800

@ unix

Unix timestamp

@314729346

yyyy mm dd \\T hh : mi : ss

XMLRPC

20110719T13:41:07

yyyy mm dd \\t hh mi ss

XMLRPC - compact

20110719T134107

yyyy - m - d \\T h : i : s

WDDX

2011-07-19T13:41:07

## Details and background notes

### <span id="limits">Internal representation and range limits</span>

The internal representation of a Date has two components: a 32-bit "day
number", and the time of day, as the number of milliseconds after
midnight. The zero point for the day number is March 1, year 0000 on the
Gregorian calendar, at midnight UTC. (The day we label 3/1/0000 wasn't
known by that date at the time, of course, as the Gregorian calendar
didn't exist yet. But the calendar's underlying formula can be projected
arbitrarily far back in time, so we're talking about an extrapolated
date on the modern calendar, not the date that people alive at the time
would have used to label the day. See also ["year 0" below](#year0).)

The 32-bit day number can be positive or negative, allowing a range of
about plus or minus two billion days from 0000-03-01, which is about
5.87 million years in each direction.

Parsing time zone names date strings

The date parser accepts date and time strings that contain explicit time
zone specifications, overriding the default local time zone.

The way humans usually write time zones is with a local abbreviation,
such as EST for US Eastern Standard Time. Unfortunately, many of those
common abbreviations are highly ambiguous, since they're used for
different zones in other parts of the world. For example, CST stands for
zones in the US, Cuba, Australia, and China, all with different UTC
offsets. Even using the full name wouldn't completely clear things up;
Eastern Standard Time is the name of zones in at least the US and
Australia, for example.

Because of all the ambiguity in the common zone names, the designers of
the zoneinfo database came up with their own separate, unambiguous
naming system. (See the [TimeZone](timezone.html) class for more on the
zoneinfo database.) The zoneinfo system is based on narrowly defined
locations. It names each location by continent and city, sometimes with
a region (such as a US state) interposed: America/Los_Angeles,
Europe/Moscow, Asia/Shanghai, etc.

The date parser accepts both common abbreviations and zoneinfo location
names. The zoneinfo names are the better of the two, since they're
unambiguous. But the date parser is designed to understand dates in
familiar human formats, so that users don't have to conform to any rigid
computerese - and the zoneinfo names are definitely a sort of
computerese. So the parser also accepts the common abbreviations.

When a zoneinfo name is specified, the time is interpreted according to
the local wall clock settings in effect in that zone on the date parsed
from the string. For example, '2012-3-12 1:59 am America/Los_Angeles' is
interpreted using Pacific Standard Time, while '2012-3-12 2:01 am
America/Los_Angeles' is parsed using Pacific Daylight Time, since
daylight time starts at 2:00 AM that day.

If you use a common local time abbreviation like EST or CDT, the date
parser tries to guess which zone you mean. It first looks for a zone
that matches the abbreviation and is in the same country as your host
system's local time zone. So if you're in the US and enter EST or CDT,
the US zone by that name will be selected; if you're in Australia, the
Australian zone will be used. If the parser can't find a country match,
it looks for a zone with the given abbreviation within 3 hours of your
host system's UTC offset; this should at least give you a zone in the
same part of the world. If even that fails, an arbitrary match is used
(currently the westernmost zone, with the most most negative UTC
offset).

Note that a zone name like EST or PDT specifies a particular Standard or
Daylight clock setting. The date parser assumes you mean exactly what
you say, so it obeys the Standard or Daylight setting indicated by the
abbreviation, even if it's not normally used on the given date. For
example, if you enter '7/1/2011 12:00 PST', the parser interprets this
as noon Pacific Standard Time, even though Pacific Daylight Time would
normally apply in July. PST still exists during the summer months, so
it's still meaningful to enter PST times in California in July - they'll
just be an hour off from what the clock on the wall reads. In zones
where the same abbreviation is used for both standard and daylight time
(this is the practice in Australia, for example), the parser uses the
setting that's in effect for the parsed date.

### Gregorian and Julian calendars

The Date class is happy to calculate extrapolated Gregorian and Julian
dates as far back as you want, within its +/-5.87 million year limit,
even when those dates are before the calendar in question came into use
(or, in the case of the Julian calendar, after it fell into disuse). For
dates before the given calendar's adoption in a given region, the
calculated dates won't correspond to the dates used by people alive at
the time. For example, if you want to work with dates written in the
ship's logs during Columbus's voyages, the source material obviously
won't be rendered in Gregorian terms. Historians usually work in terms
of the calendar that was in use in the era and region under study for
just this reason. Some software systems try to be clever and switch
between Gregorian and Julian dates in October, 1582, but TADS doesn't do
this. Because of the gradual adoption of the Gregorian calendar in
different regions over several centuries, there's really no single
historically accurate cut-off date; the transition timing depends on the
region you're talking about, and even within a single region it can be
surprisingly complex, as the transition didn't always go smoothly. As a
result, there's really no way to infer from a date alone that it should
be on one calendar or another. So the Date parser and formatter let you
explicitly choose the calendar you wish to use for a given operation.

### <span id="year0">Year zero and negative year numbers</span>

In the traditional AD/BC timeline, there's no such thing as a Year 0,
and no negative year numbers: the year before AD 1 is called 1 BC, the
year before that is 2 BC, and so on. That's the way most people write
years before AD 1, but astronomers and most computer systems use a
different convention where the years are numbered as ordinary integers.
The positive year numbers correspond to the same positive integers, but
when we count backwards past year 1, we just keep going through the
integers instead of switching to a different "BC" era: so the year
before year 1 is year 0, the year before that is -1, then -2, etc. This
is often called astronomical notation, since it's the way astronomers
number years.

When parsing and formatting date strings, the Date class can handle both
the astronomical notation and the AD/BC notation. In input, the parser
determines which notation is used by analyzing the input string. For
output via [formatDate()](#formatDate), you can choose the notation by
selecting the appropriate format code (e.g.,
`%y` for astronomical years,
`%e` for AD/BC eras).

### <span id="leapseconds">Leap seconds</span>

For most of human history, the Earth was our master clock. Timekeeping
was traditionally a matter of observing the Earth's orientation in
space; the key reference points on the clock and the calendar are
defined by astronomical alignments like noon and the solstices. Until
very recently, the Earth was the most stable and precise timepiece we
had, and man-made clocks had to be reset regularly to make up for their
mechanical imprecision. In the modern era, the situation is inverted:
timekeeping technology now allows us to build clocks that are much more
stable than the Earth's rotational speed. Atomic clocks now serve as the
definitive reference points for measuring time. We still want our clocks
to match the observed solar time, though, so we still make occasional
corrections - but now it's because the clocks are *too* accurate, and
have to be tweaked to account for imperfections in the Earth's celestial
mechanics.

Over the long haul, the Earth's rotational rate is gradually slowing:
the day is getting longer, which will be good news to those who feel
there aren't enough hours in the day. In the short term, the rate varies
chaotically. Atomic clocks are so stable that the variation becomes
significant over the span of couple of years. To keep the reference
clocks synchronized with the heavens, the timekeeping authorities
occasionally have to add or subtract a "leap second", where UTC is set
ahead or back by one second. This has happened, on average, about once
every two years since the practice was started in 1972. But that's just
an average; there's no formula for it, since the short-term variations
in the Earth's rotation are unpredictable.

The Date class's treatment of leap seconds is simple: it ignores them.
For future dates, it's simply not possible to account for them because
of their inherent unpredictability. It would be possible in principle to
account for leap seconds for past dates, but practical experience with
other computer systems has suggested that doing so does more harm than
good. Most computer systems today use an idealized UTC timeline that
ignores all past and future leap seconds; this is what the Date class
does.

The design of the Date class actually insulates it from the effects of
leap seconds for most purposes. A Date consists of a day number and a
separate time of day. This design means that calendar calculations, such
as determining the calendar date of a given Date value, or figuring the
number of days between two dates, are completely unaffected by leap
seconds. Calculations of the time of day within a given day are also
unaffected by leap seconds, since leap seconds are cleverly added at the
very end of a day, by making the last minute of the day 61 seconds long
(so each leap-second day has a rather anomalous moment labeled
23:59:60). The only type of calculation with the Date type that's
affected by leap seconds is figuring the elapsed time, in units such as
hours or minutes, between two events on different UTC days (or the
reverse, figuring the date/time at a given interval measured in time
units from another date/time, where the two values are on different UTC
days). The Date class doesn't take leap seconds into account for these
calculations; it simply treats every day as exactly 86,400 seconds. This
yields results that are consistent with most other computer systems,
even though they're not precisely correct as measured on the atomic
clocks.

In concrete terms, 24 leap seconds were added to UTC between 1972 and
2012. This makes the error due to ignoring leap seconds in an elapsed
time calculation over that entire period about one part in 51 million.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Date  
<span class="navnp"><a href="collect.html" class="nav"><em>Prev:</em> Collection</a>
    <a href="dict.html" class="nav"><em>Next:</em> Dictionary</a>    
</span>

</div>
