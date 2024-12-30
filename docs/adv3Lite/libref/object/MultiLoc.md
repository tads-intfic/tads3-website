[MultiLoc]{.title}[class]{.type}

[thing.t](../file/thing.t.html)\[[9647](../source/thing.t.html#9647)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A MultiLoc is an object that can exist in several locations at once.
MultiLoc is a mix-in class that should be used in conjunction with Thing
or a Thing-derived class.

`class `**`MultiLoc`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`MultiLoc`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`MultiLoc`**\
`         `[`Floor`](../object/Floor.html)\
`         `[`RoomPart`](../object/RoomPart.html)\
`                 `[`Ceiling`](../object/Ceiling.html)\
`                 `[`DefaultWall`](../object/DefaultWall.html)\
`         `[`SymPassage`](../object/SymPassage.html)\
`                 `[`SymDoor`](../object/SymDoor.html)\
`                 `[`SymPathPassage`](../object/SymPathPassage.html)\
`                 `[`SymStairway`](../object/SymStairway.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`bodyParts`](../object/bodyParts.html)`  ` []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`exceptions`](#exceptions)`  `[`initialLocationClass`](#initialLocationClass)`  `[`initialLocationList`](#initialLocationList)`  `[`locationList`](#locationList)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addToLocations`](#addToLocations)`  `[`isDirectlyIn`](#isDirectlyIn)`  `[`isIn`](#isIn)`  `[`isInitiallyIn`](#isInitiallyIn)`  `[`location`](#location)`  `[`moveInto`](#moveInto)`  `[`moveIntoAdd`](#moveIntoAdd)`  `[`moveOutOf`](#moveOutOf)`  `[`preinitThing`](#preinitThing)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#exceptions}

`exceptions`

[thing.t](../file/thing.t.html)\[[9669](../source/thing.t.html#9669)\]

::: desc
A list of locations this object is not to be present in. This is
intended mainly to allow certain rooms to be excepted from a specified
region.
:::

[]{#initialLocationClass}

`initialLocationClass`

[thing.t](../file/thing.t.html)\[[9679](../source/thing.t.html#9679)\]

::: desc
If the initialLocationClass property is defined, then this MultiLoc is
initially located in every instance of this class. Note that this would
be in addition to the locations defined in the locationList class and
would likewise be subject to anything defined in the exceptions
property.
:::

[]{#initialLocationList}

`initialLocationList`

[thing.t](../file/thing.t.html)\[[9662](../source/thing.t.html#9662)\]

::: desc
A list of the locations this object is to start out in. Locations may be
specified as Things, Rooms or Regions, or as some mix of all three.
:::

[]{#locationList}

`locationList`

[thing.t](../file/thing.t.html)\[[9655](../source/thing.t.html#9655)\]

::: desc
A list of the locations this object is currently present in. If this
property is defined at the start of the game and initialLocationList
isn\'t, then this list will be copied to initialLocationList, and so can
be specified by users in exactly the same way.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addToLocations}

`addToLocations ( )`

[thing.t](../file/thing.t.html)\[[9696](../source/thing.t.html#9696)\]

::: desc
In Preinit, add this MultiLoc into the contents list of every item in
its locationList and every object of class initialLocationClass (if this
is not nil) and then remove it from the contents list of every item in
its exceptions list.
:::

[]{#isDirectlyIn}

`isDirectlyIn (loc)`

[thing.t](../file/thing.t.html)\[[9804](../source/thing.t.html#9804)\]

::: desc
A MultiLoc is directly in another object if it\'s listed in that other
object\'s contents list.
:::

[]{#isIn}

`isIn (loc)`

[thing.t](../file/thing.t.html)\[[9821](../source/thing.t.html#9821)\]

::: desc
A MultiLoc is in another object either if it\'s directly in that object
or if one of the items in its location list is in that object.
:::

[]{#isInitiallyIn}

`isInitiallyIn (obj)`

[thing.t](../file/thing.t.html)\[[9688](../source/thing.t.html#9688)\]

::: desc
Test an object for inclusion in our initial location list. By default,
we\'ll simply return true to include every object. We return true by
default so that an instance can merely specify a value for
initialLocationClass in order to place this object in every instance of
the given class.
:::

[]{#location}

`location ( )`

[thing.t](../file/thing.t.html)\[[9838](../source/thing.t.html#9838)\]

::: desc
For certain purposes, such as sense path calculations, a Multiloc needs
a notional location. We assume the enquiry is made from the perspective
of the current actor, or, failing that, the player char, so we return
the current actor\'s (or the player char\'s) current location if the
MultiLoc is present there, or the last place where the MultiLoc was seen
otherwise. The intention is to select the most currently significant
location where we\'re present.
:::

[]{#moveInto}

`moveInto (loc)`

[thing.t](../file/thing.t.html)\[[9788](../source/thing.t.html#9788)\]

::: desc
To move a MultiLoc into a single location, first remove it from every
location in its location list, then add it to the single location it\'s
now in.
:::

[]{#moveIntoAdd}

`moveIntoAdd (loc)`

[thing.t](../file/thing.t.html)\[[9761](../source/thing.t.html#9761)\]

::: desc
Move this MultiLoc into an additional location.
:::

[]{#moveOutOf}

`moveOutOf (loc)`

[thing.t](../file/thing.t.html)\[[9774](../source/thing.t.html#9774)\]

::: desc
Remove this MultiLoc from loc.
:::

[]{#preinitThing}

`preinitThing ( )`

[thing.t](../file/thing.t.html)\[[9891](../source/thing.t.html#9891)\]

::: desc
If we\'re a MultiLoc we don\'t want to carry out any of the normal
preinitialization related to our location.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
