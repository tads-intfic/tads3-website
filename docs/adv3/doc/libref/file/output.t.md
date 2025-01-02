---
layout: docs
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



TADS 3 Library - output formatting

This module defines the framework for displaying output text.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`CaptureFilter`](../object/CaptureFilter.html)[`HtmlStyleTag`](../object/HtmlStyleTag.html)[`LogConsole`](../object/LogConsole.html)[`MessageBuilder`](../object/MessageBuilder.html)[`MonitorFilter`](../object/MonitorFilter.html)[`OutputFilter`](../object/OutputFilter.html)[`OutputStream`](../object/OutputStream.html)[`OutputStreamWindow`](../object/OutputStreamWindow.html)[`ParagraphManager`](../object/ParagraphManager.html)[`StringCaptureFilter`](../object/StringCaptureFilter.html)[`StyleTag`](../object/StyleTag.html)[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`announceObjStyleTag`](../object/announceObjStyleTag.html)[`assumeStyleTag`](../object/assumeStyleTag.html)[`commandSequencer`](../object/commandSequencer.html)[`hyperlinkStyleTag`](../object/hyperlinkStyleTag.html)[`inputlineStyleTag`](../object/inputlineStyleTag.html)[`mainOutputStream`](../object/mainOutputStream.html)[`mainParagraphManager`](../object/mainParagraphManager.html)[`notificationStyleTag`](../object/notificationStyleTag.html)[`outputManager`](../object/outputManager.html)[`parserStyleTag`](../object/parserStyleTag.html)[`roomdescStyleTag`](../object/roomdescStyleTag.html)[`roomnameStyleTag`](../object/roomnameStyleTag.html)[`roomparaStyleTag`](../object/roomparaStyleTag.html)[`statusroomStyleTag`](../object/statusroomStyleTag.html)[`statusscoreStyleTag`](../object/statusscoreStyleTag.html)[`styleTagFilter`](../object/styleTagFilter.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`say`](#say)[`withQuotes`](#withQuotes)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="say"></span>

`say (val)`

[output.t](../file/output.t.html)\[[21](../source/output.t.html#21)\]



The standard library output function. We set this up as the default
display function (for double-quoted strings and for "\<\< \>\>"
embeddings). Code can also call this directly to display items.



<span id="withQuotes"></span>

`withQuotes (txt)`

[output.t](../file/output.t.html)\[[32](../source/output.t.html#32)\]



Generate a string for showing quoted text. We simply enclose the text in
a \<Q\>...\</Q\> tag sequence and return the result.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


