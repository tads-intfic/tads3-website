[date.h]{.title}[file]{.type}

[source file](../source/date.h.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

**Macros**\
[Summary](#_MacroSummary_)\
[Details](#_Macros_)

**Enums**\
[Summary](#_EnumSummary_)\
[Details](#_Enums_)

**Templates**\
[Summary](#_TemplateSummary_)\
[Details](#_Templates_)

::: fdesc
This header defines the Date and TimeZone intrinsic classes.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`Date`](../object/Date.html)`  `[`TimeZone`](../object/TimeZone.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

*(none)* []{#_MacroSummary_}

::: mjhd
[Summary of Macros]{.hdln}  
:::

` `[`DateAMPM`](#DateAMPM)`  `[`DateEra`](#DateEra)`  `[`DateFmt12Hour`](#DateFmt12Hour)`  `[`DateFmt24Hour`](#DateFmt24Hour)`  `[`DateFmt24HourSecs`](#DateFmt24HourSecs)`  `[`DateFmtDate`](#DateFmtDate)`  `[`DateFmtShortDate`](#DateFmtShortDate)`  `[`DateFmtTime`](#DateFmtTime)`  `[`DateFmtTimestamp`](#DateFmtTimestamp)`  `[`DateMonthAbbrs`](#DateMonthAbbrs)`  `[`DateMonthNames`](#DateMonthNames)`  `[`DateOrdSuffixes`](#DateOrdSuffixes)`  `[`DateParseFilter`](#DateParseFilter)`  `[`DateWeekdayAbbrs`](#DateWeekdayAbbrs)`  `[`DateWeekdayNames`](#DateWeekdayNames)`  `

[]{#_EnumSummary_}

::: mjhd
[Summary of Enums]{.hdln}  
:::

*(none)* []{#_TemplateSummary_}

::: mjhd
[Summary of Templates]{.hdln}  
:::

*(none)* []{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

*(none)* []{#_Macros_}

::: mjhd
[Macros]{.hdln}  
:::

[]{#DateAMPM}

`DateAMPM`

[date.h](../file/date.h.html)\[[353](../source/date.h.html#353)\]

::: desc
`4`\
AM/PM indicators - AM,PM
:::

[]{#DateEra}

`DateEra`

[date.h](../file/date.h.html)\[[356](../source/date.h.html#356)\]

::: desc
`5`\
\"era\" indicator - AD=CE,BC=BCE
:::

[]{#DateFmt12Hour}

`DateFmt12Hour`

[date.h](../file/date.h.html)\[[407](../source/date.h.html#407)\]

::: desc
`12`\
12-hour clock format. The default is \'%#I:%M:%S %P\' (\'5:30:22 PM\').
:::

[]{#DateFmt24Hour}

`DateFmt24Hour`

[date.h](../file/date.h.html)\[[412](../source/date.h.html#412)\]

::: desc
`13`\
24-hour clock format. The default is \'%H:%M\' (17:30).
:::

[]{#DateFmt24HourSecs}

`DateFmt24HourSecs`

[date.h](../file/date.h.html)\[[418](../source/date.h.html#418)\]

::: desc
`14`\
24-hour clock format with seconds. The default is \'%H:%M:%S\'
(17:30:22).
:::

[]{#DateFmtDate}

`DateFmtDate`

[date.h](../file/date.h.html)\[[397](../source/date.h.html#397)\]

::: desc
`10`\
Default local format for the date, without the time. The default is
\'%m/%d/%Y\' (02/15/2012).
:::

[]{#DateFmtShortDate}

`DateFmtShortDate`

[date.h](../file/date.h.html)\[[402](../source/date.h.html#402)\]

::: desc
`11`\
Local short date format. The default is \'%m/%d/%y\' (02/15/12).
:::

[]{#DateFmtTime}

`DateFmtTime`

[date.h](../file/date.h.html)\[[391](../source/date.h.html#391)\]

::: desc
`9`\
Default local format for the time, without the date. The default is
\'%H:%M:%S\' (\'18:44:39\').
:::

[]{#DateFmtTimestamp}

`DateFmtTimestamp`

[date.h](../file/date.h.html)\[[385](../source/date.h.html#385)\]

::: desc
`8`\
Default local format for date/time stamps. This is a format string
suitable for use in formatDate(). The default is \'%a %b %#d %T %Y\'
(which produces, e.g., \'Thu Feb 7 15:20:33 2009\').
:::

[]{#DateMonthAbbrs}

`DateMonthAbbrs`

[date.h](../file/date.h.html)\[[344](../source/date.h.html#344)\]

::: desc
`1`\
month name abbreviations - Jan,Feb,Mar\...
:::

[]{#DateMonthNames}

`DateMonthNames`

[date.h](../file/date.h.html)\[[341](../source/date.h.html#341)\]

::: desc
`0`\
full names of months - January,February,March,\...
:::

[]{#DateOrdSuffixes}

`DateOrdSuffixes`

[date.h](../file/date.h.html)\[[378](../source/date.h.html#378)\]

::: desc
`7`\
Ordinal suffixes for 1st, 2nd, 3rd, Nth, X1st, X2nd, Xrd. \'Nth\' is the
suffix for everything not otherwise enumerated. \'X1st\' is the suffix
for the 21st, 31st, 1041st, etc - this applies to all of the decades
except the units and teens; likewise for \'X2nd\' and \'X3rd\'. Specify
only the suffix; e.g., for English, \'st,nd,rd,th,st,nd,rd\'. If all of
the items after a given point are the same for the target language, you
can omit them, and the last item in the list will be used for all
missing items; e.g., French can specify simply \'er,e\', and German can
specify simply \'.\'.
:::

[]{#DateParseFilter}

`DateParseFilter`

[date.h](../file/date.h.html)\[[365](../source/date.h.html#365)\]

::: desc
`6`\
Parsing filter for culture-specific date formats. This can be \'us\' to
select the US-style formats, or \'eu\' to select European-style formats.
This controls day/month or month/day order when parsing numeric dates -
the \'us\' formats use the \"month/day\" style, as in 11/20 for November
20, and the \'eu\' formats use \"day/month\", as in 20/11.
:::

[]{#DateWeekdayAbbrs}

`DateWeekdayAbbrs`

[date.h](../file/date.h.html)\[[350](../source/date.h.html#350)\]

::: desc
`3`\
abbreviated weekday names - Sun,Mon,Tue,\...
:::

[]{#DateWeekdayNames}

`DateWeekdayNames`

[date.h](../file/date.h.html)\[[347](../source/date.h.html#347)\]

::: desc
`2`\
full names of weekdays - Sunday,Monday,Tuesday,\...
:::

[]{#_Enums_}

::: mjhd
[Enums]{.hdln}  
:::

*(none)* []{#_Templates_}

::: mjhd
[Templates]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
