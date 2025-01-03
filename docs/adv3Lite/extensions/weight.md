---
layout: docs
---


<img src="../../docs/manual/topbar.jpg" data-border="0" />
<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
Weight  
<span class="navnp"><a href="viewport.html" class="nav"><em>Prev:</em> Viewport</a>
   
<a href="../../docs/manual/extensions.html" class="nav"><em>Next:</em>
Extensions</a>     </span>
# Weight

## Overview

The standard library allows you to assign a bulk to each items and to
limit what can be carried or placed in, on, under or behind other
objects according to bulk. The Weight extension allows you to do the
same with weight. Each item in the game (or at least, each portable
item) can be assigned a weight according to whatever scale you wish,
while actors and other objects can be assigned a weightCapacity which
limits how much weight they can bear. These features are probably not
needed for the majority of games, in which controlling by bulk is
usually sufficient, but are provided in this extension for any game that
wishes to make use of them. The principle difference between weight and
bulk is, of course, that while the bulk of an object is simply its bulk,
the weight of an object is its own weight plus the weight of all the
objects it contains.

  
<span id="properties"></span>

## New Methods and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following methods and properties on Thing:

- *Additional properties*: `weight`,
  `weightCapacity`,
  `maxSingleWeight`,
  `maxWeightHiddenUnder`,
  `maxWeightHiddenBehind`,
  `maxWeightHiddenIn`.
- *Additional methods*: `totalWeight()`,
  `getWeightWithin()`,
  `getCarriedWeight()`,
  `sayTooHeavy(obj)`,
  `sayCantBearMoreWeight(obj)`,
  `totalWeightIn(lst)`,
  `sayTooHeavyToHide(obj, insType)`,
  `getWeightHiddenUnder`,
  `getWeightHiddenIn`,
  `getWeightHiddenBehind`.

<span id="usage"></span>

## Usage

Include the weight.t file after the library files but before your game
source files.

Every object (or every portable object) can be assigned a **weight**
value, which is an integer value representing its weight on whatever
scale you find convenient. This `weight`
represents the intrinsic weight of the object by itself, less any
contents. By default every object has a `weight`
of 0.

The total weight of an object, including its contents, is given by its
**totalWeight()** method, while the weight of its contents (excluding
the object's own weight) is given by its **getWeightWithin()** method.
Hence for any object, `totalWeight = weight +
getWeightWithin()`. For actors, **getCarriedWeight()** gives the
total weight carried by the actor; this excludes the weight of anything
worn or of anything fixed in place (the latter are assumed to be body
parts).

The carrying capacity of both actors and other objects is defined by
their **weightCapacity** and **maxSingleWeight** properties. The
`weightCapacity` (by default 100000) is the
maximum total weight that can be carried by the actor, or the maximum
load that can be placed in/on/under or behind the object. The
`maxSingleWeight` (which by default takes its
value from `weightCapacity`) defines the maximum
weight of a single object that can be carried by the actor or borne by
the object.

The method **sayTooHeavy(obj)** is used to display a message to the
effect that *obj* exceeds the load capacity of the object into or onto
which an attempt is being made to place it (i.e. when the total weight
of *obj* exceeds either the `weightCapacity` or
`maxSingleWeight` of the object on which
`sayTooHeavy(obj)` is defined). The method
**sayCantBearMoreWeight(obj)** is used to display a message when *obj*
would otherwise cause the object's weightCapacity to be exceeded (since
the addition of *obj* would make its
`getWeightWithin` greater than its
`weightCapacity`).

In some instances, objects can be effectively
[hidden](../../docs/manual/thing.html#hidden) in, under or behind other
objects by being added to their `hiddenIn`,
`hiddenUnder` or
`hiddenBehind` lists. While in virtually every
case it probably makes more sense to limit this by bulk than by weight,
for the sake of completeness this extension provides
**maxWeightHiddenIn**, **maxWeightHiddenUnder** and
**maxWeightHiddenBehind** properties to limit the total weight that can
be placed in, under or behind an object in this manner. The default
value of all these properties is 100000. The method
**sayTooHeavyToHide(obj, insType)** is used to display a message when
hiding would cause the maximum weight to be exceeded; *obj* is the
object that the player is attempting to hide and *insType* is one of
`In`, `Under` or
`Behind` depending whether the action being
attempted is PutIn, PutUnder or PutBehind.

Finally, the service method **totalWeightIn(lst)** is used to calculate
the total weight of all the items in *lst*.

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[weight.t](../weight.t) file.



------------------------------------------------------------------------



*Adv3Lite Manual*  
<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
Weight  
<span class="navnp"><a href="viewport.html" class="nav"><em>Prev:</em> Viewport</a>
   
<a href="../../docs/manual/extensions.html" class="nav"><em>Next:</em>
Extensions</a>     </span>


