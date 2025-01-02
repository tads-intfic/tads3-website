<span class="title">Date</span><span class="type">class</span>

[date.h](../file/date.h.html)\[[134](../source/date.h.html#134)\]

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

The Date intrinsic class stores a date-and-time value representing a
particular point in time, and provides methods and operators for date
arithmetic, formatting, and parsing.

The date/time value is stored internally in terms of universal time
(UTC). This makes it independent of locations and time zones. When a new
Date object is created for a given calendar day or clock time, that
source value is assumed to be in terms of the local wall clock time of
the machine it's running on, but a different time zone can be explicitly
specified instead; the Date object automatically translates that local
time value to UTC for storage. Likewise, when a Date is formatted to a
string representation, or when calendar or clock components are
extracted from it, the formatted or extracted value is translated by
default to the local time zone, but a different time zone can be
specified.

You can create a Date object from a number of other representations for
date values:

  
new Date() - creates a Date representing the current date and time.

  
new Date('string', refTZ?, refDate?) - parses the string as a date  
value. 'refTZ' is an optional TimeZone object; if provided,  
the date string will be interpreted as a local time in that  
zone, unless the string contains a timezone specifier. The  
default timezone if 'refTZ' is missing is the local system's  
time zone. 'refDate' is an optional Date object that's used  
to fill in certain missing date elements in the string. If  
the string doesn't specify the year (e.g., 'March 1'), the  
year is taken from refDate; if the string only specifies only  
a time, the date is taken from refDate. If the date uses a  
two-digit year number ('5/15/92'), the century is inferred  
from the reference date by finding the year closest to the  
reference year (for example, if it's currently 2012, '92' is  
interpreted as 1992, since that's closer to 2012 than is  
2092). The date parser accepts numerous common human-readable  
formats and several standard computer formats. For a full  
list of, see the System Manual. The parser uses the locale  
settings from setLocaleInfo() to match month names, weekday  
names, etc; the default settings are for US English format.

  
new Date(number, 'J') - 'number' can be an integer or a BigNumber.  
This creates a Date object representing the given number of  
days after January 1, 4713 BCE on the Julian calendar, at  
noon UTC. The fractional part is the fraction of a day  
past noon; for example, a fractional portion of 0.25  
represents 1/4 of a day, or 6 hours, so it represents a  
clock time of 18:00 UTC (6 hours past noon).

  
new Date(number, 'U') - 'number' can be an integer or a BigNumber.  
This creates a Date object representing the given number of  
seconds after standard Unix Epoch (1/1/1970 00:00:00 UTC),  
or before the Epoch if the value is negative. If 'number'  
is a BigNumber, it can specify fractions of a second, which  
the Date object will round to the nearest milliseconds.  
This constructor format is provided because "seconds since  
1/1/1970" is the standard representation of time on Unix-like  
systems, and as a result it's also common in file formats.

  
new Date(year, month, day, tz?) - midnight on year/month/day (all  
given as integers), in the given local time zone 'tz' (given  
as a TimeZone object or a string giving a time zone name).  
The default time zone if 'tz' is omitted is the system's  
local time zone. The year must be given as the full year  
with century, e.g., 2012, not just 12; the latter is valid  
but is taken literally as the first-century year 12. The  
month is 1-12 for January to December. The day is simply  
the calendar day of the month (e.g., 5 for January 5). The  
year can zero or negative. Note that because year 0 is a  
valid year in Date's calendar system, negative years are off  
by one from the "BC" convention: in the AD/BC convention,  
the year before AD 1 is 1 BC, not AD 0; so on our calendar,  
year 0 corresponds to 1 BC, -1 is 2 BC, etc.

  
new Date(year, month, day, hour, minute, seconds, ms, tz?) - the  
given date and time value, with each element as an integer.  
The value is in terms of the given local time zone 'tz',  
or the system's local time zone if 'tz' is omitted. 'ms'  
is the number of milliseconds (0-999).

Date arithmetic: the following operators perform calendar calculations
on the date value:

  
Date + integer - add days to the date  
Date - integer - subtract days from date  
Date + BigNumber - add days (which can include fractional days)  
Date - BigNumber - subtract days (which can include fractional days)  
Date - Date - number of days between dates (with fractional days)

Adding an integer or BigNumber returns a new Date object representing
the result; Date objects are immutable, so the original Date value isn't
changed by the operation.

Subtracting one Date from another yields a BigNumber with the difference
in days between the two dates. Note that this might have a fractional
part, because the difference might not be whole days; for example,
subtracting 13:00 from 19:00 on the same day yields 0.25, which is 1/4
of a 24-hour day, or 6 hours.. Like all Date arithmetic, subtraction
works in universal time, so the subtraction yields the true time
difference between the events even if they were created from times in
different time zones. For example, subtracting 1 PM Eastern Time from 1
PM Pacific Time on the same day yields 0.125 (1/8 of a day, or 3 hours).

The comparison operators (\< \> \<= \>=) compare two Date values by
order of occurrence in time. For example, a \> b is true if a is later
than b. The comparison is done in universal time, so the comparison
yields the actual event order, not the nominal local time order. For
example, 2 PM Eastern Time is earlier than 1 PM Pacific Time on any
given day.

Time zone specifications: when a time zone is specified in a constructor
or method argument, you can supply a TimeZone object, or a string with
the name of a time zone, using the same formats that the TimeZone
constructor accepts. See the TimeZone object for more information. The
default if you don't specify a time zone is

`intrinsic class `**`Date`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Date`**  
`         `[`Object`](../object/Object.html)  
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

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addInterval`](#addInterval)`  `[`compareTo`](#compareTo)`  `[`findWeekday`](#findWeekday)`  `[`formatDate`](#formatDate)`  `[`formatJulianDate`](#formatJulianDate)`  `[`getClockTime`](#getClockTime)`  `[`getDate`](#getDate)`  `[`getISOWeekDate`](#getISOWeekDate)`  `[`getJulianDate`](#getJulianDate)`  `[`getJulianDay`](#getJulianDay)`  `

Inherited from `Object` :  
` `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addInterval"></span>

`addInterval (interval)`

[date.h](../file/date.h.html)\[[280](../source/date.h.html#280)\]

<div class="desc">

Add an interval to this date, returning a new date object. The interval
is given as a list of integers: \[years, months, days, hours, minutes,
seconds\]. The 'seconds' value can be a BigNumber with a fractional part
(but anything smaller than milliseconds is discarded). Elements can be
omitted from the end of the list; for example, \[0, 2\] adds two months.
An element can be negative: \[-1\] subtracts one year.

</div>

<span id="compareTo"></span>

`compareTo (date)`

[date.h](../file/date.h.html)\[[204](../source/date.h.html#204)\]

<div class="desc">

Compare to another Date object; returns an integer less than zero if
this Date is before the other Date, zero if they refer to the same date,
greater than zero if this Date is after the other Date. The same
comparisons can be done with the ordinary comparison operators (\<, \>,
\<=, \>=, ==, !=), but this is convenient for sorting callbacks since it
lets you get the greater/equal/less result in one shot.

</div>

<span id="findWeekday"></span>

`findWeekday (weekday, which, tz?)`

[date.h](../file/date.h.html)\[[292](../source/date.h.html#292)\]

<div class="desc">

Find a given day of the week relative to this date, in its local time
zone. 'weekday' is the target weekday to find, as an integer: 1 for
Sunday, 2 for Monday, ..., 7 for Saturday. 'which' is an integer
specifying which relative day to find: 1 means to find the next
occurrence of the given weekday on or after this date, 2 means the
second occurrence on or after this date, and so on. -1 means the first
occurrence on or before this date; -2 is the second occurrence on or
before this date; etc.

</div>

<span id="formatDate"></span>

`formatDate (format, tz?)`

[date.h](../file/date.h.html)\[[188](../source/date.h.html#188)\]

<div class="desc">

Format the date/time value as a Gregorian calendar date, using the given
format template string. Returns a string with the formatted date/time.
The date/time is displayed in the given time zone (or the system's local
time zone if 'tz' isn't specified).

</div>

<span id="formatJulianDate"></span>

`formatJulianDate (format, tz?)`

[date.h](../file/date.h.html)\[[194](../source/date.h.html#194)\]

<div class="desc">

Format the date/time value as a Julian calendar date, using the given
format template string.

</div>

<span id="getClockTime"></span>

`getClockTime (tz?)`

[date.h](../file/date.h.html)\[[269](../source/date.h.html#269)\]

<div class="desc">

Get the wall clock time represented by this Date object, in terms of
local time in the given time zone (or the system's local time zone is
'tz' isn't specified). Returns a list of integers: \[hour, minute,
second, ms\]. The hour is on a 24-hour clock, with 0 hours representing
midnight and 23 representing 11 PM. The 'ms' value is a value from 0 to
999 giving the milliseconds portion of the time.

</div>

<span id="getDate"></span>

`getDate (tz?)`

[date.h](../file/date.h.html)\[[214](../source/date.h.html#214)\]

<div class="desc">

Get the Gregorian calendar date represented by this Date object, in
terms of local time in the given time zone (or the system's local time
zone if 'tz' isn't specified). Returns a list consisting of \[year,
month, day, weekday\], each value represented as an integer. The weekday
is 1 for Sunday, 2 for Monday, etc. For example, June 21, 2012 (a
Thursday) is represented as \[2012,6,21,5\].

</div>

<span id="getISOWeekDate"></span>

`getISOWeekDate (tz?)`

[date.h](../file/date.h.html)\[[259](../source/date.h.html#259)\]

<div class="desc">

Get the ISO 8601 week date. This returns a list with three elements,
\[year, week, day\], where 'year' is the ISO year number containing the
date, 'week' is the week number (1 to 53), and 'day' is the day of the
week (1-7, Monday to Sunday, per the ISO 8601 conventions). The year on
the ISO week calendar can differ from the year on the Gregorian calendar
for dates during the first and last week of a year on Gregorian
calendar, because year boundaries on the ISO calendar always occur on
week boundaries. For example, Jan 1, 2005 has the ISO week date
2004-W53-6 - it's part of 2004 on the ISO week calendar because weeks
can't be split across years, so the entire week belongs to 2004 on the
ISO calendar. This can work in both directions: Dec 31, 2007 has the ISO
week date 2008-W01-1.

</div>

<span id="getJulianDate"></span>

`getJulianDate (tz?)`

[date.h](../file/date.h.html)\[[243](../source/date.h.html#243)\]

<div class="desc">

Get the Julian calendar date for this Date object, in terms of the local
time in the given time zone (or the system's local time zone if 'tz'
isn't specified). Returns a list consisting of \[year, month, day,
weekday\]. (The weekday on the Julian calendar is always the same as the
weekday on the Gregorian calendar for a given Date value.)

</div>

<span id="getJulianDay"></span>

`getJulianDay ( )`

[date.h](../file/date.h.html)\[[233](../source/date.h.html#233)\]

<div class="desc">

Get the Julian day number. This is the number of days since January 1,
4713 BCE on the (proleptic) Julian calendar, at noon UTC. This is an
important figure in astronomy. It's also often useful as a common
currency for converting between arbitrary calendars: you might not be
able to find a published formula for converting between calendar X and
calendar Y, but you can almost always find a formula for converting
between any given calendar and the Julian day system.

The return value is a BigNumber value giving the Julian day
corresponding to this Date value, including a fractional part for the
time past noon UTC on that date.

Note that there's no local time zone involved in this calculation, since
the Julian day number is specifically defined in terms of universal
time.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
