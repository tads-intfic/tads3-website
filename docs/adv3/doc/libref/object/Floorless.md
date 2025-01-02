---
layout: docs
---
<span class="title">Floorless</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[4799](../source/travel.t.html#4799)\]

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

Make a room "floorless." This is a mix-in class that you can include in
a superclass list ahead of Room or any of its subclasses to create a
room where support is provided by some means other than standing on a
surface, or where there's simply no support. Examples: hanging on a rope
over a chasm; climbing a ladder; in free-fall after jumping out of a
plane; levitating in mid-air.

There are two main special features of a floorless room. First, and most
obviously, there's no "floor" or "ground" object among the room parts.
We accomplish this by simply subtracting out any object of class Floor
from the room parts list inherited from the combined base room class.

Second, there's no place to put anything down, so objects dropped here
either disappear from the game or are transported to another location
(the room at the bottom of the chasm, for example).

`class `**`Floorless`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Floorless`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Floorless`**  
[`FloorlessRoom`](../object/FloorlessRoom.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`bottomRoom`](#bottomRoom)[`roomParts`](#roomParts)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`receiveDrop`](#receiveDrop)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="bottomRoom"></span>

`bottomRoom`

[travel.t](../file/travel.t.html)\[[4818](../source/travel.t.html#4818)\]

<div class="desc">

The room below, if any - this is where objects dropped here will
actually end up. By default, this is nil, which means that objects
dropped here simply disappear from the game. If there's a "bottom of
chasm" location where dropped objects should land, provide it here.

</div>

<span id="roomParts"></span>

`roomParts`

[travel.t](../file/travel.t.html)\[[4809](../source/travel.t.html#4809)\]

<div class="desc">

Omit the default floor/ground objects from the room parts list. Room
classes generally have static room parts lists, so calculate this once
per instance and store the results.

NOTE - if you combine Floorless with a base Room class that has a
dynamic room parts list, you'll need to override this to calculate the
subset dynamically on each invocation.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="receiveDrop"></span>

`receiveDrop (obj, desc)`

[travel.t](../file/travel.t.html)\[[4821](../source/travel.t.html#4821)\]

<div class="desc">

receive a dropped object

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
