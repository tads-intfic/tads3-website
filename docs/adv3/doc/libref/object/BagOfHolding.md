---
layout: docs
---
<span class="title">BagOfHolding</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[1184](../source/extras.t.html#1184)\]

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

"Bag of Holding." This is a mix-in that actively moves items from the
holding actor's direct inventory into itself when the actor's hands are
too full.

The bag of holding offers a solution to the conflict between "realism"
and playability. On the one hand, in real life, you can only hold so
many items at once, so at first glance it seems a simulation ought to
have such a limit in order to be more realistic. On the other hand, most
players justifiably hate having to deal with a carrying limit, because
it forces the player to spend a lot of time doing tedious inventory
management.

The Bag of Holding is a compromise solution. The concept is borrowed
from live role-playing games, where it's usually a magical item that can
hold objects of unlimited size and weight, thereby allowing characters
to transport impossibly large objects. In text IF, a bag of holding
isn't usually magical - it's usually just something like a large
backpack, or a trenchcoat with lots of pockets. And it usually isn't
meant as a solution to an obvious puzzle; rather, it's meant to
invisibly prevent inventory management from becoming a puzzle in the
first place, by shuffling objects out of the PC's hands automatically to
free up space as needed.

This Bag of Holding implementation works by automatically moving objects
from an actor's hands into the bag object, whenever the actor needs
space to pick up a new item. Whenever an action has a "roomToHoldObj"
precondition, the precondition will automatically look for a
BagOfHolding object within the actor's inventory, and then move as many
items as necessary from the actor's hands to the bag.

`class `**`BagOfHolding`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BagOfHolding`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`BagOfHolding`**  
[`Keyring`](../object/Keyring.html)  
<span id="_ObjectSummary_"></span>

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

[`affinityFor`](#affinityFor)[`getBagsOfHolding`](#getBagsOfHolding)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="affinityFor"></span>

`affinityFor (obj)`

[extras.t](../file/extras.t.html)\[[1244](../source/extras.t.html#1244)\]

<div class="desc">

Get my "affinity" for the given object. This is an indication of how
strongly this bag wants to contain the object. The affinity is a number
in arbitrary units; higher numbers indicate stronger affinities. An
affinity of zero means that the bag does not want to contain the object
at all.

The purpose of the affinity is to support specialized holders that are
designed to hold only specific types of objects, and allow these
specialized holders to implicitly gather their specific objects. For
example, a key ring might only hold keys, so it would have a high
affinity for keys and a zero affinity for everything else. A lunchbox
might have a higher affinity for things like sandwiches than for
anything else, but might be willing to serve as a general container for
other small items as well.

The units of affinity are arbitrary, but the library uses the following
values for its own classes:

0 - no affinity at all; the bag cannot hold the object

50 - willing to hold the object, but not of the preferred type

100 - default affinity; willing and able to hold the object, but just as
willing to hold most other things

200 - special affinity; this object is of a type that we especially want
to hold

We intentionally space these loosely so that games can use intermediate
levels if desired.

When we are looking for bags of holding to consolidate an actor's
directly-held inventory, note that we always move the object with the
highest bag-to-object affinity out of all of the objects under
consideration. So, if you want to give a particular kind of bag priority
so that the library uses that bag before any other bag, make this
routine return a higher affinity for the bag's objects than any other
bags do.

By default, we'll return the default affinity of 100. Specialized bags
that don't hold all types of objects must override this to return zero
for objects they can't hold.

</div>

<span id="getBagsOfHolding"></span>

`getBagsOfHolding (vec)`

[extras.t](../file/extras.t.html)\[[1190](../source/extras.t.html#1190)\]

<div class="desc">

Get my bags of holding. Since we are a bag of holding, we'll add
ourselves to the vector, then we'll inherit the normal handling to pick
up our contents.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
