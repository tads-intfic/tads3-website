---
layout: docs
---
<span class="title">InputDef</span><span class="type">class</span>

[input.t](../file/input.t.html)\[[19](../source/input.t.html#19)\]

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



Keyboard input parameter definition.

`class `**`InputDef`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`InputDef`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`InputDef`**  
[`BasicInputDef`](../object/BasicInputDef.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allowRealTime`](#allowRealTime) [`promptFunc`](#promptFunc)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`beginInputFont`](#beginInputFont) [`endInputFont`](#endInputFont)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowRealTime"></span>

`allowRealTime`

[input.t](../file/input.t.html)\[[33](../source/input.t.html#33)\]



Allow real-time events. If this is true, we'll allow real-time events to
interrupt the input; if it's nil, we'll freeze the real-time clock while
reading input.



<span id="promptFunc"></span>

`promptFunc`

[input.t](../file/input.t.html)\[[26](../source/input.t.html#26)\]



The prompt function. This is a function pointer (which is frequently
given as an anonymous function) or nil; if it's nil, we won't show any
prompt at all, otherwise we'll call the function pointer to display a
prompt as needed.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="beginInputFont"></span>

`beginInputFont ( )`

[input.t](../file/input.t.html)\[[41](../source/input.t.html#41)\]



Begin the input style. This should do anything required to set the font
to the desired attributes for the input text. By default, we'll simply
display \<.inputline\> to set up the default input style.



<span id="endInputFont"></span>

`endInputFont ( )`

[input.t](../file/input.t.html)\[[47](../source/input.t.html#47)\]



End the input style. By default, we'll close the \<.inputline\> that we
opened in beginInputFont().
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


