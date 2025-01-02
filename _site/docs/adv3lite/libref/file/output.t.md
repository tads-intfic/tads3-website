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

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
output.t

This module forms part of the adv3Lite library (c) 2012-13 Eric Eve,
based heavily in parts on the equivalent code in adv3 (c) Micheal J.
Roberts.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`CaptureFilter`](../object/CaptureFilter.html)`  `[`HtmlStyleTag`](../object/HtmlStyleTag.html)`  `[`ImplicitActionFilter`](../object/ImplicitActionFilter.html)`  `[`LogConsole`](../object/LogConsole.html)`  `[`MonitorFilter`](../object/MonitorFilter.html)`  `[`OutputFilter`](../object/OutputFilter.html)`  `[`OutputStream`](../object/OutputStream.html)`  `[`OutputStreamWindow`](../object/OutputStreamWindow.html)`  `[`ParagraphManager`](../object/ParagraphManager.html)`  `[`StringCaptureFilter`](../object/StringCaptureFilter.html)`  `[`StyleTag`](../object/StyleTag.html)`  `[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`announceObjStyleTag`](../object/announceObjStyleTag.html)`  `[`assumeStyleTag`](../object/assumeStyleTag.html)`  `[`commandSequencer`](../object/commandSequencer.html)`  `[`cquoteOutputFilter`](../object/cquoteOutputFilter.html)`  `[`hyperlinkStyleTag`](../object/hyperlinkStyleTag.html)`  `[`inputlineStyleTag`](../object/inputlineStyleTag.html)`  `[`mainOutputStream`](../object/mainOutputStream.html)`  `[`mainParagraphManager`](../object/mainParagraphManager.html)`  `[`notificationStyleTag`](../object/notificationStyleTag.html)`  `[`outputManager`](../object/outputManager.html)`  `[`parserStyleTag`](../object/parserStyleTag.html)`  `[`quoteFilter`](../object/quoteFilter.html)`  `[`roomcontentsStyleTag`](../object/roomcontentsStyleTag.html)`  `[`roomdescStyleTag`](../object/roomdescStyleTag.html)`  `[`roomnameStyleTag`](../object/roomnameStyleTag.html)`  `[`roomparaStyleTag`](../object/roomparaStyleTag.html)`  `[`statusroomStyleTag`](../object/statusroomStyleTag.html)`  `[`statusscoreStyleTag`](../object/statusscoreStyleTag.html)`  `[`styleTagFilter`](../object/styleTagFilter.html)`  `[`typographicalOutputFilter`](../object/typographicalOutputFilter.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`extraReport`](#extraReport)`  `[`filterText`](#filterText)`  `[`htmlSay`](#htmlSay)`  `[`oSay`](#oSay)`  `[`say`](#say)`  `[`senseSay`](#senseSay)`  `[`withQuotes`](#withQuotes)`  `[`withTense`](#withTense)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="extraReport"></span>

`extraReport (msg, expandParam, =, true)`

[output.t](../file/output.t.html)\[[2060](../source/output.t.html#2060)\]

<div class="desc">

Display msg bypassing all filters except for the massage parameter
substitutions; these may also be bypassed if the second (optional)
parameter is nil.

</div>

<span id="filterText"></span>

`filterText (ostr, val, ., substr, (, ret, [1], +, ret, [2], val, ., length, ()`

[output.t](../file/output.t.html)\[[1989](../source/output.t.html#1989)\]

<div class="desc">

*no description available*

</div>

<span id="htmlSay"></span>

`htmlSay (val)`

[output.t](../file/output.t.html)\[[48](../source/output.t.html#48)\]

<div class="desc">

A version of say() that avoids the cquote filter that can make havoc of
some HTML strings, especially those generated by HRef (the cquote filter
turns straight quotes into typographical ones, which is undesirable when
straight quotes are used as part of HTML markup).

</div>

<span id="oSay"></span>

`oSay (val)`

[output.t](../file/output.t.html)\[[37](../source/output.t.html#37)\]

<div class="desc">

Send a value straight to the output stream without any further message
filtering.

</div>

<span id="say"></span>

`say (val)`

[output.t](../file/output.t.html)\[[18](../source/output.t.html#18)\]

<div class="desc">

The standard library output function. We set this up as the default
display function (for double-quoted strings and for "\<\< \>\>"
embeddings). Code can also call this directly to display items.

</div>

<span id="senseSay"></span>

`senseSay (val, obj, prop, =, &, canSee)`

[output.t](../file/output.t.html)\[[71](../source/output.t.html#71)\]

<div class="desc">

A version of say() that only produces output if the player can see obj
(or, optionally, sense obj by some other sense passed as a canXXX method
of the

</div>

<span id="withQuotes"></span>

`withQuotes (txt)`

[output.t](../file/output.t.html)\[[83](../source/output.t.html#83)\]

<div class="desc">

Generate a string for showing quoted text. We simply enclose the text in
a \<Q\>...\</Q\> tag sequence and return the result.

</div>

<span id="withTense"></span>

`withTense (usePastTense, callback)`

[output.t](../file/output.t.html)\[[2031](../source/output.t.html#2031)\]

<div class="desc">

Temporarily override the current narrative tense and invoke a callback
function.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>