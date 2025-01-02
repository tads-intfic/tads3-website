---
layout: docs
---
<span class="title">tipStyleTag</span><span class="type">object</span>

[tips.t](../file/tips.t.html)\[[171](../source/tips.t.html#171)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

A style tag that we enclose tips with. By default, we just use plain
parentheses, just like for notifications and parser messages, but this
could be overridden if we wanted to display something fancier.

**`tipStyleTag`**` :   `[`StyleTag`](../object/StyleTag.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`tipStyleTag`**  
`         `[`StyleTag`](../object/StyleTag.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`closeText`](#closeText)`  `[`openText`](#openText)`  `

Inherited from `StyleTag` :  
` `[`tagName`](../object/StyleTag.html#tagName)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execute`](#execute)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="closeText"></span>

`closeText`<span class="rem">OVERRIDDEN</span>

[tips.t](../file/tips.t.html)\[[173](../source/tips.t.html#173)\]

<div class="desc">

*no description available*

</div>

<span id="openText"></span>

`openText`<span class="rem">OVERRIDDEN</span>

[tips.t](../file/tips.t.html)\[[172](../source/tips.t.html#172)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`

[tips.t](../file/tips.t.html)\[[183](../source/tips.t.html#183)\]

<div class="desc">

During pre-init, create a PromptDaemon for displaying tips. We don't
want to display them directly when the showTip() method is called, to
allow tips to be triggered from pretty much anywhere without having to
worry about them showing up in the middle of some text.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
