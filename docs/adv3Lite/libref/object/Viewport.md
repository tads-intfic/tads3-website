---
layout: docs
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



Viewport is a mix-in class which can be added to an object representing
a window or TV screen or the like to describe the remote location
viewable via the viewport. \[DEFINED ON VIEWPORT EXTENSION\]

`class `**`Viewport`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Viewport`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Viewport`**  
[`SwitchableViewport`](../object/SwitchableViewport.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`examineToView`](#examineToView)  [`isViewing`](#isViewing)  [`lookThroughToView`](#lookThroughToView)  [`visibleRooms`](#visibleRooms)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`describeVisibleRooms`](#describeVisibleRooms)  [`dobjFor(LookThrough)`](#dobjFor(LookThrough))  [`examineStatus`](#examineStatus)  [`setRooms`](#setRooms)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="examineToView"></span>

`examineToView`

[viewport.t](../file/viewport.t.html)\[[96](../source/viewport.t.html#96)\]



Flag: should examining this object display a description of the visible
rooms and their contents? By default it should. \[VIEWPORT EXTENSION\]



<span id="isViewing"></span>

`isViewing`

[viewport.t](../file/viewport.t.html)\[[103](../source/viewport.t.html#103)\]



Is the Viewport currently available for viewing through (it may not be
if windows cover the curtain, or the CCTV screen has been turned off).
\[VIEWPORT EXTENSION\]



<span id="lookThroughToView"></span>

`lookThroughToView`

[viewport.t](../file/viewport.t.html)\[[90](../source/viewport.t.html#90)\]



Flag: can I see into the visibleRooms by looking through this object?
This should normally be true for a window-type object but probably nil
for a CCTV monitor. {VIEWPORT EXTENSION\]



<span id="visibleRooms"></span>

`visibleRooms`

[viewport.t](../file/viewport.t.html)\[[60](../source/viewport.t.html#60)\]



A list of rooms that are made visible by looking through or at this
viewport. \[VIEWPORT EXTENSION\]



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="describeVisibleRooms"></span>

`describeVisibleRooms ( )`

[viewport.t](../file/viewport.t.html)\[[42](../source/viewport.t.html#42)\]



Method to display a description of the rooms and contents visible by
means of me. \[VIEWPORT EXTENSION\]



<span id="dobjFor(LookThrough)"></span>

`dobjFor(LookThrough)`

[viewport.t](../file/viewport.t.html)\[[109](../source/viewport.t.html#109)\]



For the VIEWPORT EXTENSION add desribing rooms visible through this
viewport to the inherited behaviour



<span id="examineStatus"></span>

`examineStatus ( )`

[viewport.t](../file/viewport.t.html)\[[124](../source/viewport.t.html#124)\]



If examining this Viewport should describe what it shows, add a
description of the rooms it overlooks. \[VIEWPORT EXTENSION\]



<span id="setRooms"></span>

`setRooms (lst)`

[viewport.t](../file/viewport.t.html)\[[64](../source/viewport.t.html#64)\]



Set the list of visible rooms to lst \[VIEWPORT EXTENSION\]
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


