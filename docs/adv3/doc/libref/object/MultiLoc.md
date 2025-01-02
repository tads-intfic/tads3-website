---
---
<span class="title">MultiLoc</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[2604](../source/objects.t.html#2604)\]

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

MultiLoc: this class can be multiply inherited by any object that must
exist in more than one place at a time. To use this class, put it BEFORE
Thing (or any subclass of Thing) in the object's superclass list, to
ensure that we override the default containment implementation for the
object.

Note that a MultiLoc object appears \*in its entirety\* in each of its
locations. This means that MultiLoc is most suitable for a couple of
specific situations:

\- several locations overlap slightly so that they include a common
object: a large statue at the center of a public square, for example;

\- an object forms a sense connection among its location: a window;

\- a distant object that is seen in its entirety from several locations:
the moon, say, or a mountain range.

Note that MultiLoc is NOT suitable for cases where an object spans
several locations but isn't contained entirely in any one of them: it's
not good for something like a rope or a river, for example. MultiLoc
also isn't good for cases where you simply want to avoid creating a
bunch of repeated decorations in different locations. MultiLoc isn't
good for these cases because a MultiLoc is treated as though it exists
ENTIRELY and SIMULTANEOUSLY in all of its locations, which means that
all of its sense information and internal state is shared among all of
its locations.

MultiInstance is better than MultiLoc for cases where you want to share
a decoration object across several locations. MultiInstance is better
because it creates individual copies of the object in the different
locations, so each copy has its own separate sense information and its
own separate identity.

MultiFaceted is better for objects that span several locations, such as
a river or a long rope. Like MultiInstance, MultiFaceted creates a
separate copy in each location; in addition, MultiFaceted relates the
copies together as "facets" of the same object, so that the parser knows
they're all actually parts of one larger object.

`class `**`MultiLoc`**` :   `[`BaseMultiLoc`](../object/BaseMultiLoc.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MultiLoc`**  
`         `[`BaseMultiLoc`](../object/BaseMultiLoc.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`MultiLoc`**  
`         `[`SenseConnector`](../object/SenseConnector.html)  
`                 `[`DistanceConnector`](../object/DistanceConnector.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`getConnectedContainers`](#getConnectedContainers)`  `

Inherited from `BaseMultiLoc` :  
` `[`initialLocationClass`](../object/BaseMultiLoc.html#initialLocationClass)`  `[`locationList`](../object/BaseMultiLoc.html#locationList)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addDirectConnections`](#addDirectConnections)`  `[`baseMoveInto`](#baseMoveInto)`  `[`baseMoveIntoAdd`](#baseMoveIntoAdd)`  `[`baseMoveOutOf`](#baseMoveOutOf)`  `[`cloneForMultiInstanceContents`](#cloneForMultiInstanceContents)`  `[`cloneMultiInstanceContents`](#cloneMultiInstanceContents)`  `[`forEachConnectedContainer`](#forEachConnectedContainer)`  `[`forEachContainer`](#forEachContainer)`  `[`getDropDestination`](#getDropDestination)`  `[`initializeLocation`](#initializeLocation)`  `[`moveIntoAdd`](#moveIntoAdd)`  `[`moveOutOf`](#moveOutOf)`  `[`reInitializeLocation`](#reInitializeLocation)`  `[`restoreLocation`](#restoreLocation)`  `[`saveLocation`](#saveLocation)`  `[`sensePathToLoc`](#sensePathToLoc)`  `[`shineOnLoc`](#shineOnLoc)`  `

Inherited from `BaseMultiLoc` :  
` `[`buildLocationList`](../object/BaseMultiLoc.html#buildLocationList)`  `[`isDirectlyIn`](../object/BaseMultiLoc.html#isDirectlyIn)`  `[`isIn`](../object/BaseMultiLoc.html#isIn)`  `[`isInitiallyIn`](../object/BaseMultiLoc.html#isInitiallyIn)`  `[`isListedInContents`](../object/BaseMultiLoc.html#isListedInContents)`  `[`isOrIsIn`](../object/BaseMultiLoc.html#isOrIsIn)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="getConnectedContainers"></span>

`getConnectedContainers`

[objects.t](../file/objects.t.html)\[[2832](../source/objects.t.html#2832)\]

<div class="desc">

get a list of my connected containers; by default, we don't connect our
containers, so this is an empty list

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addDirectConnections"></span>

`addDirectConnections (tab)`

[objects.t](../file/objects.t.html)\[[2866](../source/objects.t.html#2866)\]

<div class="desc">

Add the direct containment connections for this item to a lookup table.

A MultiLoc does not, by default, connect its multiple locations
together. This means that if we're traversing in from a point of view
outside the MultiLoc object, we don't add any of our other containers to
the connection table. However, the MultiLoc itself, and its contents,
\*can\* see out to all of its locations; so if we're traversing from a
point of view inside self, we will add all of our containers to the
connection list.

</div>

<span id="baseMoveInto"></span>

`baseMoveInto (newContainer)`

[objects.t](../file/objects.t.html)\[[2722](../source/objects.t.html#2722)\]

<div class="desc">

Basic routine to move this object into a given single container. Removes
the object from all of its other containers. Performs no notifications.

</div>

<span id="baseMoveIntoAdd"></span>

`baseMoveIntoAdd (newContainer)`

[objects.t](../file/objects.t.html)\[[2747](../source/objects.t.html#2747)\]

<div class="desc">

Add this object to a new location - base version that performs no
notifications.

</div>

<span id="baseMoveOutOf"></span>

`baseMoveOutOf (cont)`

[objects.t](../file/objects.t.html)\[[2776](../source/objects.t.html#2776)\]

<div class="desc">

Base routine to move myself out of a given container. Performs no
notifications.

</div>

<span id="cloneForMultiInstanceContents"></span>

`cloneForMultiInstanceContents (loc)`

[objects.t](../file/objects.t.html)\[[2848](../source/objects.t.html#2848)\]

<div class="desc">

Create a clone of this object for inclusion in a MultiInstance's
contents tree. We don't actually need to make a copy of the object,
because a MultiLoc can be in several locations simultaneously; all we
need to do is add ourselves to the new location.

</div>

<span id="cloneMultiInstanceContents"></span>

`cloneMultiInstanceContents (loc)`

[objects.t](../file/objects.t.html)\[[2839](../source/objects.t.html#2839)\]

<div class="desc">

Clone this object's contents for inclusion in a MultiInstance's contents
tree. A MultiLoc is capable of being in multiple places at once, so we
can just use our original contents tree as is.

</div>

<span id="forEachConnectedContainer"></span>

`forEachConnectedContainer (func, ...)`

[objects.t](../file/objects.t.html)\[[2826](../source/objects.t.html#2826)\]

<div class="desc">

Call a function on each connected container. By default, we don't
connect our containers for sense purposes, so we do nothing here.

</div>

<span id="forEachContainer"></span>

`forEachContainer (func, [args])`

[objects.t](../file/objects.t.html)\[[2814](../source/objects.t.html#2814)\]

<div class="desc">

Call a function on each container. We'll invoke the function as follows
for each container 'cont':

(func)(cont, args...)

</div>

<span id="getDropDestination"></span>

`getDropDestination (obj, path)`

[objects.t](../file/objects.t.html)\[[2950](../source/objects.t.html#2950)\]

<div class="desc">

Get the drop destination. The default implementation in Thing won't work
for us, because it delegates to its location to find the drop
destination; we can't do that because we could have several locations.
To figure out which of our multiple locations to delegate to, we'll look
for 'self' in the supplied sense path; if we can find it, and the
previous path element is a container or peer of ours, then we'll
delegate to that container, because it's the "side" we approached from.
If there's no path, or if we're not preceded in the path by a container
of ours, we'll arbitrarily delegate to our first container.

Note that when we don't have a path, or there's no container of ours
preceding us in the path, the object being dropped must be starting
inside us. It would be highly unusual for this to happen with a
multi-location object, because MutliLoc isn't designed for use as a
"nested room" or the like. However, it's not an impossible situation; if
the game does want to create such a scenario, then the game simply needs
to override this routine so that it does whatever makes sense in the
game scenario. There's no general way to handle such situations, but it
should be possible to determine the correct handling for specific
scenarios.

</div>

<span id="initializeLocation"></span>

`initializeLocation ( )`

[objects.t](../file/objects.t.html)\[[2609](../source/objects.t.html#2609)\]

<div class="desc">

Initialize my location's contents list - add myself to my container
during initialization

</div>

<span id="moveIntoAdd"></span>

`moveIntoAdd (newContainer)`

[objects.t](../file/objects.t.html)\[[2759](../source/objects.t.html#2759)\]

<div class="desc">

Add this object to a new location.

</div>

<span id="moveOutOf"></span>

`moveOutOf (cont)`

[objects.t](../file/objects.t.html)\[[2789](../source/objects.t.html#2789)\]

<div class="desc">

Remove myself from a given container, leaving myself in any other
containers.

</div>

<span id="reInitializeLocation"></span>

`reInitializeLocation ( )`

[objects.t](../file/objects.t.html)\[[2634](../source/objects.t.html#2634)\]

<div class="desc">

Re-initialize the location list. This calls buildLocationList() to
re-evaluate the location rules, then updates the locationList to match
the new results. We'll remove the MultiLoc from any old locations that
are no longer part of the location list, and we'll add it to any new
locations that weren't previously in the location list. You can call
this at any time to update the MutliLoc's presence to reflect applying
our location rules to the current game state.

Note that this doesn't trigger any moveInto notifications. This routine
is a re-initialization rather than an in-game action, so it's not meant
to behave as though an actor in the game were walking around moving the
MultiLoc around; thus no notifications are sent. Note also that we
attempt to minimize our work by computing the "delta" from the old
state - hence we only move the MultiLoc into containers it wasn't in
previously, and we only remove it from existing containers that it's no
longer in.

</div>

<span id="restoreLocation"></span>

`restoreLocation (oldLoc)`

[objects.t](../file/objects.t.html)\[[2692](../source/objects.t.html#2692)\]

<div class="desc">

restore a previously saved location

</div>

<span id="saveLocation"></span>

`saveLocation ( )`

[objects.t](../file/objects.t.html)\[[2685](../source/objects.t.html#2685)\]

<div class="desc">

save my location for later restoration

</div>

<span id="sensePathToLoc"></span>

`sensePathToLoc (sense, trans, obs, fill)`

[objects.t](../file/objects.t.html)\[[2919](../source/objects.t.html#2919)\]

<div class="desc">

Build a sense path to my location or locations. Note that even though we
don't by default connect our different containers together, we still
build a sense path from within to outside, because we can see from
within out to all of our containers.

</div>

<span id="shineOnLoc"></span>

`shineOnLoc (sense, ambient, fill)`

[objects.t](../file/objects.t.html)\[[2905](../source/objects.t.html#2905)\]

<div class="desc">

Transmit ambient energy to my location or locations. Note that even
though we don't by default shine light from one of our containers to
another, we still shine light from within me to each of our containers.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
