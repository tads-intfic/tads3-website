<div class="topbar">

<img src="../../docs/manual/topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../../docs/manual/toc.htm" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.htm" class="nav">Extensions</a> \>
Weight  
<span class="navnp"><a href="viewport.htm" class="nav"><em>Prev:</em> Viewport</a>
   
<a href="../../docs/manual/extensions.htm" class="nav"><em>Next:</em>
Extensions</a>     </span>

</div>

<div class="main">

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

- *Additional properties*: <span class="code">weight</span>,
  <span class="code">weightCapacity</span>,
  <span class="code">maxSingleWeight</span>,
  <span class="code">maxWeightHiddenUnder</span>,
  <span class="code">maxWeightHiddenBehind</span>,
  <span class="code">maxWeightHiddenIn</span>.
- *Additional methods*: <span class="code">totalWeight()</span>,
  <span class="code">getWeightWithin()</span>,
  <span class="code">getCarriedWeight()</span>,
  <span class="code">sayTooHeavy(obj)</span>,
  <span class="code">sayCantBearMoreWeight(obj)</span>,
  <span class="code">totalWeightIn(lst)</span>,
  <span class="code">sayTooHeavyToHide(obj, insType)</span>,
  <span class="code">getWeightHiddenUnder</span>,
  <span class="code">getWeightHiddenIn</span>,
  <span class="code">getWeightHiddenBehind</span>.

<span id="usage"></span>

## Usage

Include the weight.t file after the library files but before your game
source files.

Every object (or every portable object) can be assigned a **weight**
value, which is an integer value representing its weight on whatever
scale you find convenient. This <span class="code">weight</span>
represents the intrinsic weight of the object by itself, less any
contents. By default every object has a <span class="code">weight</span>
of 0.

The total weight of an object, including its contents, is given by its
**totalWeight()** method, while the weight of its contents (excluding
the object's own weight) is given by its **getWeightWithin()** method.
Hence for any object, <span class="code">totalWeight = weight +
getWeightWithin()</span>. For actors, **getCarriedWeight()** gives the
total weight carried by the actor; this excludes the weight of anything
worn or of anything fixed in place (the latter are assumed to be body
parts).

The carrying capacity of both actors and other objects is defined by
their **weightCapacity** and **maxSingleWeight** properties. The
<span class="code">weightCapacity</span> (by default 100000) is the
maximum total weight that can be carried by the actor, or the maximum
load that can be placed in/on/under or behind the object. The
<span class="code">maxSingleWeight</span> (which by default takes its
value from <span class="code">weightCapacity</span>) defines the maximum
weight of a single object that can be carried by the actor or borne by
the object.

The method **sayTooHeavy(obj)** is used to display a message to the
effect that *obj* exceeds the load capacity of the object into or onto
which an attempt is being made to place it (i.e. when the total weight
of *obj* exceeds either the <span class="code">weightCapacity</span> or
<span class="code">maxSingleWeight</span> of the object on which
<span class="code">sayTooHeavy(obj)</span> is defined). The method
**sayCantBearMoreWeight(obj)** is used to display a message when *obj*
would otherwise cause the object's weightCapacity to be exceeded (since
the addition of *obj* would make its
<span class="code">getWeightWithin</span> greater than its
<span class="code">weightCapacity</span>).

In some instances, objects can be effectively
[hidden](../../docs/manual/thing.htm#hidden) in, under or behind other
objects by being added to their <span class="code">hiddenIn</span>,
<span class="code">hiddenUnder</span> or
<span class="code">hiddenBehind</span> lists. While in virtually every
case it probably makes more sense to limit this by bulk than by weight,
for the sake of completeness this extension provides
**maxWeightHiddenIn**, **maxWeightHiddenUnder** and
**maxWeightHiddenBehind** properties to limit the total weight that can
be placed in, under or behind an object in this manner. The default
value of all these properties is 100000. The method
**sayTooHeavyToHide(obj, insType)** is used to display a message when
hiding would cause the maximum weight to be exceeded; *obj* is the
object that the player is attempting to hide and *insType* is one of
<span class="code">In</span>, <span class="code">Under</span> or
<span class="code">Behind</span> depending whether the action being
attempted is PutIn, PutUnder or PutBehind.

Finally, the service method **totalWeightIn(lst)** is used to calculate
the total weight of all the items in *lst*.

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[weight.t](../weight.t) file.

</div>

------------------------------------------------------------------------

<div class="navb">

*Adv3Lite Manual*  
<a href="../../docs/manual/toc.htm" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.htm" class="nav">Extensions</a> \>
Weight  
<span class="navnp"><a href="viewport.htm" class="nav"><em>Prev:</em> Viewport</a>
   
<a href="../../docs/manual/extensions.htm" class="nav"><em>Next:</em>
Extensions</a>     </span>

</div>