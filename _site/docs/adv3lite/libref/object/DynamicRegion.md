<span class="title">DynamicRegion</span><span class="type">class</span>

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[12](../source/dynamicRegion.t.html#12)\]

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

*no description available*

`class `**`DynamicRegion`**` :   `[`Region`](../object/Region.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DynamicRegion`**  
`         `[`Region`](../object/Region.html)  
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

` `[`allRegions`](#allRegions)`  `[`regions`](#regions)`  `

Inherited from `Region` :  
` `[`extraScopeItems`](../object/Region.html#extraScopeItems)`  `[`familiar`](../object/Region.html#familiar)`  `[`fastGoTo`](../object/Region.html#fastGoTo)`  `[`roomList`](../object/Region.html#roomList)`  `[`rooms`](../object/Region.html#rooms)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addExtraScopeItems`](#addExtraScopeItems)`  `[`addToRoomList`](#addToRoomList)`  `[`contractRegion`](#contractRegion)`  `[`expandRegion`](#expandRegion)`  `[`extraAdjustments`](#extraAdjustments)`  `[`isIn`](#isIn)`  `[`notifyAfter`](#notifyAfter)`  `[`notifyBefore`](#notifyBefore)`  `

Inherited from `Region` :  
` `[`addToContents`](../object/Region.html#addToContents)`  `[`allRegions`](../object/Region.html#allRegions)`  `[`isCurrentlyWithin`](../object/Region.html#isCurrentlyWithin)`  `[`isOrIsIn`](../object/Region.html#isOrIsIn)`  `[`makeRegionLists`](../object/Region.html#makeRegionLists)`  `[`moveMLIntoAdd`](../object/Region.html#moveMLIntoAdd)`  `[`moveMLOutOf`](../object/Region.html#moveMLOutOf)`  `[`regionAfterAction`](../object/Region.html#regionAfterAction)`  `[`regionAfterTravel`](../object/Region.html#regionAfterTravel)`  `[`regionBeforeAction`](../object/Region.html#regionBeforeAction)`  `[`regionBeforeTravel`](../object/Region.html#regionBeforeTravel)`  `[`regionDaemon`](../object/Region.html#regionDaemon)`  `[`removeFromContents`](../object/Region.html#removeFromContents)`  `[`setFamiliarRooms`](../object/Region.html#setFamiliarRooms)`  `[`travelerEntering`](../object/Region.html#travelerEntering)`  `[`travelerLeaving`](../object/Region.html#travelerLeaving)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allRegions"></span>

`allRegions`

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[27](../source/dynamicRegion.t.html#27)\]

<div class="desc">

The list of regions a DynamicRegion is in is simply an empty list.
\[DYNAMICREGION EXTENSION\]

</div>

<span id="regions"></span>

`regions`<span class="rem">OVERRIDDEN</span>

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[18](../source/dynamicRegion.t.html#18)\]

<div class="desc">

A DynamicRegion cannot be part of any other Region, so any value given
to this property in game code will be ignored. \[DYNAMICREGION
EXTENSION\]

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addExtraScopeItems"></span>

`addExtraScopeItems (action)`<span class="rem">OVERRIDDEN</span>

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[50](../source/dynamicRegion.t.html#50)\]

<div class="desc">

Put extra items in scope when action is carried out in any room in this
region. \[DYNAMICREGION EXTENSION\]

</div>

<span id="addToRoomList"></span>

`addToRoomList (rm)`<span class="rem">OVERRIDDEN</span>

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[35](../source/dynamicRegion.t.html#35)\]

<div class="desc">

Add an additional room (passed as the rm parameter) to our list of
rooms. This method is intended for internal library use at PreInit only.
\[DYNAMICREGION EXTENSION\]

</div>

<span id="contractRegion"></span>

`contractRegion (rm)`

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[114](../source/dynamicRegion.t.html#114)\]

<div class="desc">

Remove rm from this Region. The rm parameter has the same meaning as for
expandRegion(rm) \[DYNAMICREGION EXTENSION\].

</div>

<span id="expandRegion"></span>

`expandRegion (rm)`

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[84](../source/dynamicRegion.t.html#84)\]

<div class="desc">

Expand this region by adding rm to it. rm may be a single Room or a list
of Rooms or a single Region or a list of Regions or a list of Rooms and
Regions. Note, however, that the effect of specifying Regions as an
argument to this method is only a shorthand way of specifying the rooms
the Regions contain; no permanent relationship is created between a
DynamicRegion and any other Regions added to it. \[DYNAMICREGION
EXTENSION\]

</div>

<span id="extraAdjustments"></span>

`extraAdjustments (rm, expanded)`

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[146](../source/dynamicRegion.t.html#146)\]

<div class="desc">

Carry out any additional adjustments that need to be made as
side-effects to adding or removing rooms. By default we do nothing here
but game code can override as necessary. The rm parameter is the list of
rooms/regions that have just been added (if expanding is true) or
subtracted (if expanded is nil) from this region. \[DYNAMICREGION
EXTENSION\]

</div>

<span id="isIn"></span>

`isIn (region)`<span class="rem">OVERRIDDEN</span>

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[21](../source/dynamicRegion.t.html#21)\]

<div class="desc">

A DynamicRegion cannot be in any other region, so we simply return nil
\[DYNAMICREGION EXTENSION\]

</div>

<span id="notifyAfter"></span>

`notifyAfter ( )`<span class="rem">OVERRIDDEN</span>

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[69](../source/dynamicRegion.t.html#69)\]

<div class="desc">

Carry out after notifications on the region \[DYNAMICREGION EXTENSION\]

</div>

<span id="notifyBefore"></span>

`notifyBefore ( )`<span class="rem">OVERRIDDEN</span>

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[62](../source/dynamicRegion.t.html#62)\]

<div class="desc">

Carry out before notifications on the region \[DYNAMICREGION EXTENSION\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
