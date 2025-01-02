<span class="title">SenseConnector</span><span class="type">class</span>

[sense.t](../file/sense.t.html)\[[431](../source/sense.t.html#431)\]

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

SenseConnector: an object that can pass senses across room boundaries.
This is a mix-in class: add it to the superclass list of the object
before Thing (or a Thing subclass).

A SenseConnector acts as a sense conduit across all of its locations, so
to establish a connection between locations, simply place a
SenseConnector in each location. Since a SenseConnector is useful only
when placed placed in multiple locations, SenseConnector is based on
MultiLoc.

`class `**`SenseConnector`**` :   `[`MultiLoc`](../object/MultiLoc.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SenseConnector`**  
`         `[`MultiLoc`](../object/MultiLoc.html)  
`                 `[`BaseMultiLoc`](../object/BaseMultiLoc.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`SenseConnector`**  
`         `[`DistanceConnector`](../object/DistanceConnector.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`connectorMaterial`](#connectorMaterial)`  `[`getConnectedContainers`](#getConnectedContainers)`  `

` `

Inherited from `BaseMultiLoc` :  
` `[`initialLocationClass`](../object/BaseMultiLoc.html#initialLocationClass)`  `[`locationList`](../object/BaseMultiLoc.html#locationList)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addDirectConnections`](#addDirectConnections)`  `[`checkMoveThrough`](#checkMoveThrough)`  `[`checkMoveViaPath`](#checkMoveViaPath)`  `[`checkThrowThrough`](#checkThrowThrough)`  `[`checkThrowViaPath`](#checkThrowViaPath)`  `[`checkTouchThrough`](#checkTouchThrough)`  `[`checkTouchViaPath`](#checkTouchViaPath)`  `[`forEachConnectedContainer`](#forEachConnectedContainer)`  `[`sensePathFromWithout`](#sensePathFromWithout)`  `[`shineFromWithout`](#shineFromWithout)`  `[`transSensingThru`](#transSensingThru)`  `

Inherited from `MultiLoc` :  
` `[`baseMoveInto`](../object/MultiLoc.html#baseMoveInto)`  `[`baseMoveIntoAdd`](../object/MultiLoc.html#baseMoveIntoAdd)`  `[`baseMoveOutOf`](../object/MultiLoc.html#baseMoveOutOf)`  `[`cloneForMultiInstanceContents`](../object/MultiLoc.html#cloneForMultiInstanceContents)`  `[`cloneMultiInstanceContents`](../object/MultiLoc.html#cloneMultiInstanceContents)`  `[`forEachContainer`](../object/MultiLoc.html#forEachContainer)`  `[`getDropDestination`](../object/MultiLoc.html#getDropDestination)`  `[`initializeLocation`](../object/MultiLoc.html#initializeLocation)`  `[`moveIntoAdd`](../object/MultiLoc.html#moveIntoAdd)`  `[`moveOutOf`](../object/MultiLoc.html#moveOutOf)`  `[`reInitializeLocation`](../object/MultiLoc.html#reInitializeLocation)`  `[`restoreLocation`](../object/MultiLoc.html#restoreLocation)`  `[`saveLocation`](../object/MultiLoc.html#saveLocation)`  `[`sensePathToLoc`](../object/MultiLoc.html#sensePathToLoc)`  `[`shineOnLoc`](../object/MultiLoc.html#shineOnLoc)`  `

Inherited from `BaseMultiLoc` :  
` `[`buildLocationList`](../object/BaseMultiLoc.html#buildLocationList)`  `[`isDirectlyIn`](../object/BaseMultiLoc.html#isDirectlyIn)`  `[`isIn`](../object/BaseMultiLoc.html#isIn)`  `[`isInitiallyIn`](../object/BaseMultiLoc.html#isInitiallyIn)`  `[`isListedInContents`](../object/BaseMultiLoc.html#isListedInContents)`  `[`isOrIsIn`](../object/BaseMultiLoc.html#isOrIsIn)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="connectorMaterial"></span>

`connectorMaterial`

[sense.t](../file/sense.t.html)\[[436](../source/sense.t.html#436)\]

<div class="desc">

A SenseConnector's material generally determines how senses pass through
the connection.

</div>

<span id="getConnectedContainers"></span>

`getConnectedContainers`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[582](../source/sense.t.html#582)\]

<div class="desc">

Return a list of my connected containers. We connect to all of our
containers, so simply return my location list.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addDirectConnections"></span>

`addDirectConnections (tab)`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[451](../source/sense.t.html#451)\]

<div class="desc">

Add the direct containment connections for this item to a lookup table.

Since we provide a sense connection among all of our containers, add
each of our containers to the list.

</div>

<span id="checkMoveThrough"></span>

`checkMoveThrough (obj, dest)`

[sense.t](../file/sense.t.html)\[[589](../source/sense.t.html#589)\]

<div class="desc">

Check moving an object through me. This is called when we try to move an
object from one of our containers to another of our containers through
me. By default, we don't allow it.

</div>

<span id="checkMoveViaPath"></span>

`checkMoveViaPath (obj, dest, op)`

[sense.t](../file/sense.t.html)\[[617](../source/sense.t.html#617)\]

<div class="desc">

check for moving via a path

</div>

<span id="checkThrowThrough"></span>

`checkThrowThrough (obj, dest)`

[sense.t](../file/sense.t.html)\[[611](../source/sense.t.html#611)\]

<div class="desc">

Check throwing an object through me. This is called when an actor tries
to throw a projectile 'obj' at 'dest' via a path that includes 'self'.
By default, we don't allow it.

</div>

<span id="checkThrowViaPath"></span>

`checkThrowViaPath (obj, dest, op)`

[sense.t](../file/sense.t.html)\[[647](../source/sense.t.html#647)\]

<div class="desc">

check for throwing via a path

</div>

<span id="checkTouchThrough"></span>

`checkTouchThrough (obj, dest)`

[sense.t](../file/sense.t.html)\[[600](../source/sense.t.html#600)\]

<div class="desc">

Check touching an object through me. This is called when an actor tries
to reach from one of my containers through me into another of my
containers. By default, we don't allow it.

</div>

<span id="checkTouchViaPath"></span>

`checkTouchViaPath (obj, dest, op)`

[sense.t](../file/sense.t.html)\[[632](../source/sense.t.html#632)\]

<div class="desc">

check for touching via a path

</div>

<span id="forEachConnectedContainer"></span>

`forEachConnectedContainer (func, [args])`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[573](../source/sense.t.html#573)\]

<div class="desc">

Call a function on each connected container. Since we provide a sense
path connection among our containers, we must iterate over each of our
containers.

</div>

<span id="sensePathFromWithout"></span>

`sensePathFromWithout (fromParent, sense, trans, obs, fill)`

[sense.t](../file/sense.t.html)\[[519](../source/sense.t.html#519)\]

<div class="desc">

Build a sense path from a container to me

</div>

<span id="shineFromWithout"></span>

`shineFromWithout (fromParent, sense, ambient, fill)`

[sense.t](../file/sense.t.html)\[[478](../source/sense.t.html#478)\]

<div class="desc">

Transmit energy from a container onto me.

</div>

<span id="transSensingThru"></span>

`transSensingThru (sense)`

[sense.t](../file/sense.t.html)\[[442](../source/sense.t.html#442)\]

<div class="desc">

Determine how senses pass through this connection. By default, we simply
use the material's transparency.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
