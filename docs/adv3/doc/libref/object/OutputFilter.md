---
layout: docs
---
<span class="title">OutputFilter</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[645](../source/output.t.html#645)\]

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

Output Filter

`class `**`OutputFilter`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`OutputFilter`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`OutputFilter`**  
`         `[`CaptureFilter`](../object/CaptureFilter.html)  
`                 `[`StringCaptureFilter`](../object/StringCaptureFilter.html)  
`                 `[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)  
`         `[`CommandTranscript`](../object/CommandTranscript.html)  
`         `[`MessageBuilder`](../object/MessageBuilder.html)  
`         `[`MonitorFilter`](../object/MonitorFilter.html)  
`         `[`ParagraphManager`](../object/ParagraphManager.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`commandSequencer`](../object/commandSequencer.html)`  `[`conversationManager`](../object/conversationManager.html)`  `[`styleTagFilter`](../object/styleTagFilter.html)`  `[`typographicalOutputFilter`](../object/typographicalOutputFilter.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`filterText`](#filterText)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="filterText"></span>

`filterText (ostr, txt)`

[output.t](../file/output.t.html)\[[653](../source/output.t.html#653)\]

<div class="desc">

Apply the filter - this should be overridden in each filter. The return
value is the result of filtering the string.

'ostr' is the OutputStream to which the text is being written, and 'txt'
is the original text to be displayed.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
