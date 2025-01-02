---
---
<span class="title">output.t</span><span class="type">file</span>

[source file](../source/output.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library - output formatting

This module defines the framework for displaying output text.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`CaptureFilter`](../object/CaptureFilter.html)`  `[`HtmlStyleTag`](../object/HtmlStyleTag.html)`  `[`LogConsole`](../object/LogConsole.html)`  `[`MessageBuilder`](../object/MessageBuilder.html)`  `[`MonitorFilter`](../object/MonitorFilter.html)`  `[`OutputFilter`](../object/OutputFilter.html)`  `[`OutputStream`](../object/OutputStream.html)`  `[`OutputStreamWindow`](../object/OutputStreamWindow.html)`  `[`ParagraphManager`](../object/ParagraphManager.html)`  `[`StringCaptureFilter`](../object/StringCaptureFilter.html)`  `[`StyleTag`](../object/StyleTag.html)`  `[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`announceObjStyleTag`](../object/announceObjStyleTag.html)`  `[`assumeStyleTag`](../object/assumeStyleTag.html)`  `[`commandSequencer`](../object/commandSequencer.html)`  `[`hyperlinkStyleTag`](../object/hyperlinkStyleTag.html)`  `[`inputlineStyleTag`](../object/inputlineStyleTag.html)`  `[`mainOutputStream`](../object/mainOutputStream.html)`  `[`mainParagraphManager`](../object/mainParagraphManager.html)`  `[`notificationStyleTag`](../object/notificationStyleTag.html)`  `[`outputManager`](../object/outputManager.html)`  `[`parserStyleTag`](../object/parserStyleTag.html)`  `[`roomdescStyleTag`](../object/roomdescStyleTag.html)`  `[`roomnameStyleTag`](../object/roomnameStyleTag.html)`  `[`roomparaStyleTag`](../object/roomparaStyleTag.html)`  `[`statusroomStyleTag`](../object/statusroomStyleTag.html)`  `[`statusscoreStyleTag`](../object/statusscoreStyleTag.html)`  `[`styleTagFilter`](../object/styleTagFilter.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`say`](#say)`  `[`withQuotes`](#withQuotes)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="say"></span>

`say (val)`

[output.t](../file/output.t.html)\[[21](../source/output.t.html#21)\]

<div class="desc">

The standard library output function. We set this up as the default
display function (for double-quoted strings and for "\<\< \>\>"
embeddings). Code can also call this directly to display items.

</div>

<span id="withQuotes"></span>

`withQuotes (txt)`

[output.t](../file/output.t.html)\[[32](../source/output.t.html#32)\]

<div class="desc">

Generate a string for showing quoted text. We simply enclose the text in
a \<Q\>...\</Q\> tag sequence and return the result.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
