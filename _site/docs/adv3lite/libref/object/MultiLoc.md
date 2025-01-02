<span class="title">MultiLoc</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[9647](../source/thing.t.html#9647)\]

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

A MultiLoc is an object that can exist in several locations at once.
MultiLoc is a mix-in class that should be used in conjunction with Thing
or a Thing-derived class.

`class `**`MultiLoc`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MultiLoc`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`MultiLoc`**  
`         `[`Floor`](../object/Floor.html)  
`         `[`RoomPart`](../object/RoomPart.html)  
`                 `[`Ceiling`](../object/Ceiling.html)  
`                 `[`DefaultWall`](../object/DefaultWall.html)  
`         `[`SymPassage`](../object/SymPassage.html)  
`                 `[`SymDoor`](../object/SymDoor.html)  
`                 `[`SymPathPassage`](../object/SymPathPassage.html)  
`                 `[`SymStairway`](../object/SymStairway.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`bodyParts`](../object/bodyParts.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`exceptions`](#exceptions)`  `[`initialLocationClass`](#initialLocationClass)`  `[`initialLocationList`](#initialLocationList)`  `[`locationList`](#locationList)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addToLocations`](#addToLocations)`  `[`isDirectlyIn`](#isDirectlyIn)`  `[`isIn`](#isIn)`  `[`isInitiallyIn`](#isInitiallyIn)`  `[`location`](#location)`  `[`moveInto`](#moveInto)`  `[`moveIntoAdd`](#moveIntoAdd)`  `[`moveOutOf`](#moveOutOf)`  `[`preinitThing`](#preinitThing)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="exceptions"></span>

`exceptions`

[thing.t](../file/thing.t.html)\[[9669](../source/thing.t.html#9669)\]

<div class="desc">

A list of locations this object is not to be present in. This is
intended mainly to allow certain rooms to be excepted from a specified
region.

</div>

<span id="initialLocationClass"></span>

`initialLocationClass`

[thing.t](../file/thing.t.html)\[[9679](../source/thing.t.html#9679)\]

<div class="desc">

If the initialLocationClass property is defined, then this MultiLoc is
initially located in every instance of this class. Note that this would
be in addition to the locations defined in the locationList class and
would likewise be subject to anything defined in the exceptions
property.

</div>

<span id="initialLocationList"></span>

`initialLocationList`

[thing.t](../file/thing.t.html)\[[9662](../source/thing.t.html#9662)\]

<div class="desc">

A list of the locations this object is to start out in. Locations may be
specified as Things, Rooms or Regions, or as some mix of all three.

</div>

<span id="locationList"></span>

`locationList`

[thing.t](../file/thing.t.html)\[[9655](../source/thing.t.html#9655)\]

<div class="desc">

A list of the locations this object is currently present in. If this
property is defined at the start of the game and initialLocationList
isn't, then this list will be copied to initialLocationList, and so can
be specified by users in exactly the same way.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addToLocations"></span>

`addToLocations ( )`

[thing.t](../file/thing.t.html)\[[9696](../source/thing.t.html#9696)\]

<div class="desc">

In Preinit, add this MultiLoc into the contents list of every item in
its locationList and every object of class initialLocationClass (if this
is not nil) and then remove it from the contents list of every item in
its exceptions list.

</div>

<span id="isDirectlyIn"></span>

`isDirectlyIn (loc)`

[thing.t](../file/thing.t.html)\[[9804](../source/thing.t.html#9804)\]

<div class="desc">

A MultiLoc is directly in another object if it's listed in that other
object's contents list.

</div>

<span id="isIn"></span>

`isIn (loc)`

[thing.t](../file/thing.t.html)\[[9821](../source/thing.t.html#9821)\]

<div class="desc">

A MultiLoc is in another object either if it's directly in that object
or if one of the items in its location list is in that object.

</div>

<span id="isInitiallyIn"></span>

`isInitiallyIn (obj)`

[thing.t](../file/thing.t.html)\[[9688](../source/thing.t.html#9688)\]

<div class="desc">

Test an object for inclusion in our initial location list. By default,
we'll simply return true to include every object. We return true by
default so that an instance can merely specify a value for
initialLocationClass in order to place this object in every instance of
the given class.

</div>

<span id="location"></span>

`location ( )`

[thing.t](../file/thing.t.html)\[[9838](../source/thing.t.html#9838)\]

<div class="desc">

For certain purposes, such as sense path calculations, a Multiloc needs
a notional location. We assume the enquiry is made from the perspective
of the current actor, or, failing that, the player char, so we return
the current actor's (or the player char's) current location if the
MultiLoc is present there, or the last place where the MultiLoc was seen
otherwise. The intention is to select the most currently significant
location where we're present.

</div>

<span id="moveInto"></span>

`moveInto (loc)`

[thing.t](../file/thing.t.html)\[[9788](../source/thing.t.html#9788)\]

<div class="desc">

To move a MultiLoc into a single location, first remove it from every
location in its location list, then add it to the single location it's
now in.

</div>

<span id="moveIntoAdd"></span>

`moveIntoAdd (loc)`

[thing.t](../file/thing.t.html)\[[9761](../source/thing.t.html#9761)\]

<div class="desc">

Move this MultiLoc into an additional location.

</div>

<span id="moveOutOf"></span>

`moveOutOf (loc)`

[thing.t](../file/thing.t.html)\[[9774](../source/thing.t.html#9774)\]

<div class="desc">

Remove this MultiLoc from loc.

</div>

<span id="preinitThing"></span>

`preinitThing ( )`

[thing.t](../file/thing.t.html)\[[9891](../source/thing.t.html#9891)\]

<div class="desc">

If we're a MultiLoc we don't want to carry out any of the normal
preinitialization related to our location.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>