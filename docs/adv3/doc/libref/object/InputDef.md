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

<div class="fdesc">

Keyboard input parameter definition.

`class `**`InputDef`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`InputDef`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`InputDef`**  
[`BasicInputDef`](../object/BasicInputDef.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`allowRealTime`](#allowRealTime)[`promptFunc`](#promptFunc)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`beginInputFont`](#beginInputFont)[`endInputFont`](#endInputFont)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowRealTime"></span>

`allowRealTime`

[input.t](../file/input.t.html)\[[33](../source/input.t.html#33)\]

<div class="desc">

Allow real-time events. If this is true, we'll allow real-time events to
interrupt the input; if it's nil, we'll freeze the real-time clock while
reading input.

</div>

<span id="promptFunc"></span>

`promptFunc`

[input.t](../file/input.t.html)\[[26](../source/input.t.html#26)\]

<div class="desc">

The prompt function. This is a function pointer (which is frequently
given as an anonymous function) or nil; if it's nil, we won't show any
prompt at all, otherwise we'll call the function pointer to display a
prompt as needed.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="beginInputFont"></span>

`beginInputFont ( )`

[input.t](../file/input.t.html)\[[41](../source/input.t.html#41)\]

<div class="desc">

Begin the input style. This should do anything required to set the font
to the desired attributes for the input text. By default, we'll simply
display \<.inputline\> to set up the default input style.

</div>

<span id="endInputFont"></span>

`endInputFont ( )`

[input.t](../file/input.t.html)\[[47](../source/input.t.html#47)\]

<div class="desc">

End the input style. By default, we'll close the \<.inputline\> that we
opened in beginInputFont().

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
