---
---
<span class="title">Viewport</span><span class="type">class</span>

[viewport.t](../file/viewport.t.html)\[[36](../source/viewport.t.html#36)\]

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

Viewport is a mix-in class which can be added to an object representing
a window or TV screen or the like to describe the remote location
viewable via the viewport. \[DEFINED ON VIEWPORT EXTENSION\]

`class `**`Viewport`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Viewport`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Viewport`**  
`         `[`SwitchableViewport`](../object/SwitchableViewport.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`examineToView`](#examineToView)`  `[`isViewing`](#isViewing)`  `[`lookThroughToView`](#lookThroughToView)`  `[`visibleRooms`](#visibleRooms)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`describeVisibleRooms`](#describeVisibleRooms)`  `[`dobjFor(LookThrough)`](#dobjFor(LookThrough))`  `[`examineStatus`](#examineStatus)`  `[`setRooms`](#setRooms)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="examineToView"></span>

`examineToView`

[viewport.t](../file/viewport.t.html)\[[96](../source/viewport.t.html#96)\]

<div class="desc">

Flag: should examining this object display a description of the visible
rooms and their contents? By default it should. \[VIEWPORT EXTENSION\]

</div>

<span id="isViewing"></span>

`isViewing`

[viewport.t](../file/viewport.t.html)\[[103](../source/viewport.t.html#103)\]

<div class="desc">

Is the Viewport currently available for viewing through (it may not be
if windows cover the curtain, or the CCTV screen has been turned off).
\[VIEWPORT EXTENSION\]

</div>

<span id="lookThroughToView"></span>

`lookThroughToView`

[viewport.t](../file/viewport.t.html)\[[90](../source/viewport.t.html#90)\]

<div class="desc">

Flag: can I see into the visibleRooms by looking through this object?
This should normally be true for a window-type object but probably nil
for a CCTV monitor. {VIEWPORT EXTENSION\]

</div>

<span id="visibleRooms"></span>

`visibleRooms`

[viewport.t](../file/viewport.t.html)\[[60](../source/viewport.t.html#60)\]

<div class="desc">

A list of rooms that are made visible by looking through or at this
viewport. \[VIEWPORT EXTENSION\]

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="describeVisibleRooms"></span>

`describeVisibleRooms ( )`

[viewport.t](../file/viewport.t.html)\[[42](../source/viewport.t.html#42)\]

<div class="desc">

Method to display a description of the rooms and contents visible by
means of me. \[VIEWPORT EXTENSION\]

</div>

<span id="dobjFor(LookThrough)"></span>

`dobjFor(LookThrough)`

[viewport.t](../file/viewport.t.html)\[[109](../source/viewport.t.html#109)\]

<div class="desc">

For the VIEWPORT EXTENSION add desribing rooms visible through this
viewport to the inherited behaviour

</div>

<span id="examineStatus"></span>

`examineStatus ( )`

[viewport.t](../file/viewport.t.html)\[[124](../source/viewport.t.html#124)\]

<div class="desc">

If examining this Viewport should describe what it shows, add a
description of the rooms it overlooks. \[VIEWPORT EXTENSION\]

</div>

<span id="setRooms"></span>

`setRooms (lst)`

[viewport.t](../file/viewport.t.html)\[[64](../source/viewport.t.html#64)\]

<div class="desc">

Set the list of visible rooms to lst \[VIEWPORT EXTENSION\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
