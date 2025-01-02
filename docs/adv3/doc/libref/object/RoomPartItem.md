---
layout: docs
---
<span class="title">RoomPartItem</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[5532](../source/travel.t.html#5532)\]

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

A "room part item" is an object that's specially described as being part
of, or attached to, a RoomPart (a wall, ceiling, floor, or the like).
This is a mix-in class that can be combined with any ordinary object
class (but usually with something non-portable, such as a Fixture or
Immovable). The effect of adding RoomPartItem to an object's
superclasses is that a command like EXAMINE EAST WALL (or whichever room
part the object is associated with) will display the object's
specialDesc, but a simple LOOK will not. This class is sometimes useful
for things like doors, windows, ceiling fans, and other things attached
to the room.

Note that this is a mix-in class, so you should always combine it with a
regular Thing-based class.

When using this class, you should define two properties in the object:
specialNominalRoomPartLocation, which you should set to the RoomPart
(such as a wall) where the object should be described; and specialDesc,
which is the description to show when the room part is examined.
Alternatively (or in addition), you can define
initNominalRoomPartLocation and initSpecialDesc - these work the same
way, but will only be in effect until the object is moved.

`class `**`RoomPartItem`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RoomPartItem`**  
`         object`  
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



*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`useSpecialDescInContents`](#useSpecialDescInContents)[`useSpecialDescInRoom`](#useSpecialDescInRoom)[`useSpecialDescInRoomPart`](#useSpecialDescInRoomPart)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="useSpecialDescInContents"></span>

`useSpecialDescInContents (cont)`

[travel.t](../file/travel.t.html)\[[5566](../source/travel.t.html#5566)\]

<div class="desc">

*no description available*

</div>

<span id="useSpecialDescInRoom"></span>

`useSpecialDescInRoom (room)`

[travel.t](../file/travel.t.html)\[[5565](../source/travel.t.html#5565)\]

<div class="desc">

don't use the special description in room descriptions, or in examining
any other container

</div>

<span id="useSpecialDescInRoomPart"></span>

`useSpecialDescInRoomPart (part)`

[travel.t](../file/travel.t.html)\[[5537](../source/travel.t.html#5537)\]

<div class="desc">

show our special description when examining our associated room part, as
long as we actually define a special description

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
