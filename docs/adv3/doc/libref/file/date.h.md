---
layout: docs
---
<span class="title">date.h</span><span class="type">file</span>

[source file](../source/date.h.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

**Macros**  
[Summary](#_MacroSummary_)  
[Details](#_Macros_)

**Enums**  
[Summary](#_EnumSummary_)  
[Details](#_Enums_)

**Templates**  
[Summary](#_TemplateSummary_)  
[Details](#_Templates_)



This header defines the Date and TimeZone intrinsic classes.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`Date`](../object/Date.html) [`TimeZone`](../object/TimeZone.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`DateAMPM`](#DateAMPM) [`DateEra`](#DateEra) [`DateFmt12Hour`](#DateFmt12Hour) [`DateFmt24Hour`](#DateFmt24Hour) [`DateFmt24HourSecs`](#DateFmt24HourSecs) [`DateFmtDate`](#DateFmtDate) [`DateFmtShortDate`](#DateFmtShortDate) [`DateFmtTime`](#DateFmtTime) [`DateFmtTimestamp`](#DateFmtTimestamp) [`DateMonthAbbrs`](#DateMonthAbbrs) [`DateMonthNames`](#DateMonthNames) [`DateOrdSuffixes`](#DateOrdSuffixes) [`DateParseFilter`](#DateParseFilter) [`DateWeekdayAbbrs`](#DateWeekdayAbbrs) [`DateWeekdayNames`](#DateWeekdayNames)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)* <span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="DateAMPM"></span>

`DateAMPM`

[date.h](../file/date.h.html)\[[353](../source/date.h.html#353)\]



`4`  
AM/PM indicators - AM,PM



<span id="DateEra"></span>

`DateEra`

[date.h](../file/date.h.html)\[[356](../source/date.h.html#356)\]



`5`  
"era" indicator - AD=CE,BC=BCE



<span id="DateFmt12Hour"></span>

`DateFmt12Hour`

[date.h](../file/date.h.html)\[[407](../source/date.h.html#407)\]



`12`  
12-hour clock format. The default is '%#I:%M:%S %P' ('5:30:22 PM').



<span id="DateFmt24Hour"></span>

`DateFmt24Hour`

[date.h](../file/date.h.html)\[[412](../source/date.h.html#412)\]



`13`  
24-hour clock format. The default is '%H:%M' (17:30).



<span id="DateFmt24HourSecs"></span>

`DateFmt24HourSecs`

[date.h](../file/date.h.html)\[[418](../source/date.h.html#418)\]



`14`  
24-hour clock format with seconds. The default is '%H:%M:%S' (17:30:22).



<span id="DateFmtDate"></span>

`DateFmtDate`

[date.h](../file/date.h.html)\[[397](../source/date.h.html#397)\]



`10`  
Default local format for the date, without the time. The default is
'%m/%d/%Y' (02/15/2012).



<span id="DateFmtShortDate"></span>

`DateFmtShortDate`

[date.h](../file/date.h.html)\[[402](../source/date.h.html#402)\]



`11`  
Local short date format. The default is '%m/%d/%y' (02/15/12).



<span id="DateFmtTime"></span>

`DateFmtTime`

[date.h](../file/date.h.html)\[[391](../source/date.h.html#391)\]



`9`  
Default local format for the time, without the date. The default is
'%H:%M:%S' ('18:44:39').



<span id="DateFmtTimestamp"></span>

`DateFmtTimestamp`

[date.h](../file/date.h.html)\[[385](../source/date.h.html#385)\]



`8`  
Default local format for date/time stamps. This is a format string
suitable for use in formatDate(). The default is '%a %b %#d %T %Y'
(which produces, e.g., 'Thu Feb 7 15:20:33 2009').



<span id="DateMonthAbbrs"></span>

`DateMonthAbbrs`

[date.h](../file/date.h.html)\[[344](../source/date.h.html#344)\]



`1`  
month name abbreviations - Jan,Feb,Mar...



<span id="DateMonthNames"></span>

`DateMonthNames`

[date.h](../file/date.h.html)\[[341](../source/date.h.html#341)\]



`0`  
full names of months - January,February,March,...



<span id="DateOrdSuffixes"></span>

`DateOrdSuffixes`

[date.h](../file/date.h.html)\[[378](../source/date.h.html#378)\]



`7`  
Ordinal suffixes for 1st, 2nd, 3rd, Nth, X1st, X2nd, Xrd. 'Nth' is the
suffix for everything not otherwise enumerated. 'X1st' is the suffix for
the 21st, 31st, 1041st, etc - this applies to all of the decades except
the units and teens; likewise for 'X2nd' and 'X3rd'. Specify only the
suffix; e.g., for English, 'st,nd,rd,th,st,nd,rd'. If all of the items
after a given point are the same for the target language, you can omit
them, and the last item in the list will be used for all missing items;
e.g., French can specify simply 'er,e', and German can specify simply
'.'.



<span id="DateParseFilter"></span>

`DateParseFilter`

[date.h](../file/date.h.html)\[[365](../source/date.h.html#365)\]



`6`  
Parsing filter for culture-specific date formats. This can be 'us' to
select the US-style formats, or 'eu' to select European-style formats.
This controls day/month or month/day order when parsing numeric dates -
the 'us' formats use the "month/day" style, as in 11/20 for November 20,
and the 'eu' formats use "day/month", as in 20/11.



<span id="DateWeekdayAbbrs"></span>

`DateWeekdayAbbrs`

[date.h](../file/date.h.html)\[[350](../source/date.h.html#350)\]



`3`  
abbreviated weekday names - Sun,Mon,Tue,...



<span id="DateWeekdayNames"></span>

`DateWeekdayNames`

[date.h](../file/date.h.html)\[[347](../source/date.h.html#347)\]



`2`  
full names of weekdays - Sunday,Monday,Tuesday,...



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


