---
---
<span class="title">InputDef</span><span class="type">class</span>

[input.t](../file/input.t.html)\[[23](../source/input.t.html#23)\]

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
`         `[`BasicInputDef`](../object/BasicInputDef.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`promptFunc`](#promptFunc)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`beginInputFont`](#beginInputFont)`  `[`endInputFont`](#endInputFont)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="promptFunc"></span>

`promptFunc`

[input.t](../file/input.t.html)\[[30](../source/input.t.html#30)\]

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

[input.t](../file/input.t.html)\[[39](../source/input.t.html#39)\]

<div class="desc">

Begin the input style. This should do anything required to set the font
to the desired attributes for the input text. By default, we'll simply
display \<.inputline\> to set up the default input style.

</div>

<span id="endInputFont"></span>

`endInputFont ( )`

[input.t](../file/input.t.html)\[[45](../source/input.t.html#45)\]

<div class="desc">

End the input style. By default, we'll close the \<.inputline\> that we
opened in beginInputFont().

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
