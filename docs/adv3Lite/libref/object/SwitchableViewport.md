---
layout: docs
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



A SwitchableViewport is one that only brings its remote rooms into view
when it's switched on. \[DEFINED ON VIEWPORT EXTENSION\]

`class `**`SwitchableViewport`**` :   `[`Viewport`](../object/Viewport.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SwitchableViewport`**  
[`Viewport`](../object/Viewport.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isSwitchable`](#isSwitchable)[`isViewing`](#isViewing)[`lookThroughToView`](#lookThroughToView)

Inherited from `Viewport` :  
[`examineToView`](../object/Viewport.html#examineToView)[`visibleRooms`](../object/Viewport.html#visibleRooms)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`makeOn`](#makeOn)

Inherited from `Viewport` :  
[`describeVisibleRooms`](../object/Viewport.html#describeVisibleRooms)[`dobjFor(LookThrough)`](../object/Viewport.html#dobjFor(LookThrough))[`examineStatus`](../object/Viewport.html#examineStatus)[`setRooms`](../object/Viewport.html#setRooms)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isSwitchable"></span>

`isSwitchable`

[viewport.t](../file/viewport.t.html)\[[138](../source/viewport.t.html#138)\]



*no description available*



<span id="isViewing"></span>

`isViewing`<span class="rem">OVERRIDDEN</span>

[viewport.t](../file/viewport.t.html)\[[139](../source/viewport.t.html#139)\]



*no description available*



<span id="lookThroughToView"></span>

`lookThroughToView`<span class="rem">OVERRIDDEN</span>

[viewport.t](../file/viewport.t.html)\[[159](../source/viewport.t.html#159)\]



Since a SwitchableViewport will typically be used to implement something
like a CCTV screen, by default it's not something we'd look through in
order to view the remote locations.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="makeOn"></span>

`makeOn (stat)`

[viewport.t](../file/viewport.t.html)\[[141](../source/viewport.t.html#141)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


