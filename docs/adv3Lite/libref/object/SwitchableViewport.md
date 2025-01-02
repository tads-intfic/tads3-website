---
---
<span class="title">SwitchableViewport</span><span class="type">class</span>

[viewport.t](../file/viewport.t.html)\[[137](../source/viewport.t.html#137)\]

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

A SwitchableViewport is one that only brings its remote rooms into view
when it's switched on. \[DEFINED ON VIEWPORT EXTENSION\]

`class `**`SwitchableViewport`**` :   `[`Viewport`](../object/Viewport.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SwitchableViewport`**  
`         `[`Viewport`](../object/Viewport.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isSwitchable`](#isSwitchable)`  `[`isViewing`](#isViewing)`  `[`lookThroughToView`](#lookThroughToView)`  `

Inherited from `Viewport` :  
` `[`examineToView`](../object/Viewport.html#examineToView)`  `[`visibleRooms`](../object/Viewport.html#visibleRooms)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`makeOn`](#makeOn)`  `

Inherited from `Viewport` :  
` `[`describeVisibleRooms`](../object/Viewport.html#describeVisibleRooms)`  `[`dobjFor(LookThrough)`](../object/Viewport.html#dobjFor(LookThrough))`  `[`examineStatus`](../object/Viewport.html#examineStatus)`  `[`setRooms`](../object/Viewport.html#setRooms)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isSwitchable"></span>

`isSwitchable`

[viewport.t](../file/viewport.t.html)\[[138](../source/viewport.t.html#138)\]

<div class="desc">

*no description available*

</div>

<span id="isViewing"></span>

`isViewing`<span class="rem">OVERRIDDEN</span>

[viewport.t](../file/viewport.t.html)\[[139](../source/viewport.t.html#139)\]

<div class="desc">

*no description available*

</div>

<span id="lookThroughToView"></span>

`lookThroughToView`<span class="rem">OVERRIDDEN</span>

[viewport.t](../file/viewport.t.html)\[[159](../source/viewport.t.html#159)\]

<div class="desc">

Since a SwitchableViewport will typically be used to implement something
like a CCTV screen, by default it's not something we'd look through in
order to view the remote locations.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="makeOn"></span>

`makeOn (stat)`

[viewport.t](../file/viewport.t.html)\[[141](../source/viewport.t.html#141)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
