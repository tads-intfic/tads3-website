[Direction]{.title}[class]{.type}

[travel.t](../file/travel.t.html)\[[1678](../source/travel.t.html#1678)\]

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
A Direction object represents a direction in which an actor might
attempt to travel. The library defines eight compass directions (north,
south, etc.) and a further eight special directions (in, out, up, down,
port, starboard, fore and aft), but game code can define additional
directions if required.

The convention that should be followed in naming a Direction object is
to use the name of the direction followed by Dir; e.g. the Direction
object corresponding to north is called northDir. Custom directions
should follow the same convention, since it is assumed by the
goInstead() and goNested() macros.

`class `**`Direction`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Direction`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Direction`**\
`         `[`CompassDirection`](../object/CompassDirection.html)\
`         `[`ShipboardDirection`](../object/ShipboardDirection.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`downDir`](../object/downDir.html)`  `[`inDir`](../object/inDir.html)`  `[`outDir`](../object/outDir.html)`  `[`upDir`](../object/upDir.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`allDirections`](#allDirections)`  `[`departureName`](#departureName)`  `[`dirProp`](#dirProp)`  `[`name`](#name)`  `[`nameTab`](#nameTab)`  `[`opposite`](#opposite)`  `[`sortingOrder`](#sortingOrder)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`classInit`](#classInit)`  `[`initializeDirection`](#initializeDirection)`  `[`oppositeProp`](#oppositeProp)`  `[`propDir`](#propDir)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#allDirections}

`allDirections`

[travel.t](../file/travel.t.html)\[[1748](../source/travel.t.html#1748)\]

::: desc
A Class property containing a Vector of all the directions defined in
the game (the 16 defined in the library plus any additionasl custom
directions defined in game code)
:::

[]{#departureName}

`departureName`

[travel.t](../file/travel.t.html)\[[1698](../source/travel.t.html#1698)\]

::: desc
The name to use when departing via this direction, e.g. \'to the north\'
:::

[]{#dirProp}

`dirProp`

[travel.t](../file/travel.t.html)\[[1684](../source/travel.t.html#1684)\]

::: desc
The exit property of a room association with this Direction, e.g. &north
(corresponding to northDir).
:::

[]{#name}

`name`

[travel.t](../file/travel.t.html)\[[1690](../source/travel.t.html#1690)\]

::: desc
The name of this direction, e.g. \'north\'. This is the name that
appears in the exit lister.
:::

[]{#nameTab}

`nameTab`

[travel.t](../file/travel.t.html)\[[1693](../source/travel.t.html#1693)\]

::: desc
Class property: a LookupTable matching names to direction objects.
:::

[]{#opposite}

`opposite`

[travel.t](../file/travel.t.html)\[[1751](../source/travel.t.html#1751)\]

::: desc
The direction that is opposite to this one.
:::

[]{#sortingOrder}

`sortingOrder`

[travel.t](../file/travel.t.html)\[[1741](../source/travel.t.html#1741)\]

::: desc
Our sorting order in the master list. We use this to present directions
in a consistent, aesthetically pleasing order in listings involving
multiple directions. The sorting order is simply an integer that gives
the relative position in the list; the list of directions is sorted from
lowest sorting order to highest. Sorting order numbers don\'t have to be
contiguous, since we simply put the directions in an order that makes
the sortingOrder values ascend through the list.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#classInit}

`classInit ( )`

[travel.t](../file/travel.t.html)\[[1719](../source/travel.t.html#1719)\]

::: desc
Class initialization - this is called once on the class object. We\'ll
build our master list of all of the Direction objects in the game, and
then sort the list using the sorting order.
:::

[]{#initializeDirection}

`initializeDirection ( )`

[travel.t](../file/travel.t.html)\[[1705](../source/travel.t.html#1705)\]

::: desc
Initialize. We\'ll use this routine to add each Direction instance to
the master direction list (Direction.allDirections) during
pre-initialization.
:::

[]{#oppositeProp}

`oppositeProp (prop)`

[travel.t](../file/travel.t.html)\[[1754](../source/travel.t.html#1754)\]

::: desc
The dirProp that\'s the opposite to prop
:::

[]{#propDir}

`propDir (prop)`

[travel.t](../file/travel.t.html)\[[1763](../source/travel.t.html#1763)\]

::: desc
The direction to which prop points.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
