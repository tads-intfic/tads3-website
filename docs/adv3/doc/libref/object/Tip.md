---
layout: docs
---
<span class="title">Tip</span><span class="type">class</span>

[tips.t](../file/tips.t.html)\[[96](../source/tips.t.html#96)\]

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

The Tip class. Each actual tip should be represented by an instance of
this class. To show the tip, just call tipName.showTip(). If the tip has
already been shown, or if the tips have been turned off completely, then
nothing will be displayed.

`class `**`Tip`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Tip`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`exitsTip`](../object/exitsTip.html)`  `[`footnotesTip`](../object/footnotesTip.html)`  `[`fullScoreTip`](../object/fullScoreTip.html)`  `[`oopsTip`](../object/oopsTip.html)`  `[`scoreChangeTip`](../object/scoreChangeTip.html)`  `[`undoTip`](../object/undoTip.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`desc`](#desc)`  `[`shown`](#shown)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`makeShown`](#makeShown)`  `[`shouldShowTip`](#shouldShowTip)`  `[`showTip`](#showTip)`  `[`showTipDesc`](#showTipDesc)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="desc"></span>

`desc`

[tips.t](../file/tips.t.html)\[[102](../source/tips.t.html#102)\]

<div class="desc">

The actual text to display when this tip is shown. We'll wrap it in
\<.tip\> tags automatically, and also add a paragraph break before it.

</div>

<span id="shown"></span>

`shown`

[tips.t](../file/tips.t.html)\[[163](../source/tips.t.html#163)\]

<div class="desc">

flag: has this tip been shown before?

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="makeShown"></span>

`makeShown ( )`

[tips.t](../file/tips.t.html)\[[153](../source/tips.t.html#153)\]

<div class="desc">

Mark this tip as shown. This method can be called by outside code before
the tip has been triggered. If the tip informs the player of a certain
command, for instance, then it would become redundant if the player has
already used that command.

</div>

<span id="shouldShowTip"></span>

`shouldShowTip ( )`

[tips.t](../file/tips.t.html)\[[135](../source/tips.t.html#135)\]

<div class="desc">

should we show this tip when asked to?

</div>

<span id="showTip"></span>

`showTip ( )`

[tips.t](../file/tips.t.html)\[[105](../source/tips.t.html#105)\]

<div class="desc">

show this tip

</div>

<span id="showTipDesc"></span>

`showTipDesc ( )`

[tips.t](../file/tips.t.html)\[[122](../source/tips.t.html#122)\]

<div class="desc">

display our tip description, I.E. the actual tip

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
