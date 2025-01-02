---
layout: docs
---
<span class="title">PresentLater</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[3622](../source/extras.t.html#3622)\]

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

A mix-in class for objects that don't come into play until some future
event. This class lets us initialize these objects with their
\*eventual\* location, using the standard '+' syntax, but they won't
actually appear in the given location until later in the game. During
pre-initialization, we'll remember the starting location, then set the
actual location to nil; later, the object can be easily moved to its
eventual location by calling makePresent().

`class `**`PresentLater`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PresentLater`**  
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

[`eventualLocation`](#eventualLocation)[`initiallyPresent`](#initiallyPresent)[`plKey`](#plKey)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`initializeLocation`](#initializeLocation)[`makePresent`](#makePresent)[`makePresentByKey`](#makePresentByKey)[`makePresentByKeyIf`](#makePresentByKeyIf)[`makePresentIf`](#makePresentIf)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="eventualLocation"></span>

`eventualLocation`

[extras.t](../file/extras.t.html)\[[3787](../source/extras.t.html#3787)\]

<div class="desc">

our eventual location

</div>

<span id="initiallyPresent"></span>

`initiallyPresent`

[extras.t](../file/extras.t.html)\[[3647](../source/extras.t.html#3647)\]

<div class="desc">

Flag: are we present initially? By default, we're only present later, as
that's the whole point. In some cases, though, we have objects that come
and go, but start out present. Setting this property to true makes the
object present initially, but still allows it to come and go using the
standard PresentLater mechanisms.

</div>

<span id="plKey"></span>

`plKey`

[extras.t](../file/extras.t.html)\[[3637](../source/extras.t.html#3637)\]

<div class="desc">

My "key" - this is an optional property you can add to a PresentLater
object to associate it with a group of objects. You can then use
makePresentByKey() to move every object with a given key into the game
world at once. This is useful when an event triggers a whole set of
objects to come into the game world: rather than having to write a
method that calls makePresent() on each of the related objects
individually, you can simply give each related object the same key
value, then call makePresentByKey() on that key.

You don't need to define this for an object unless you want to use
makePresentByKey() with the object.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="initializeLocation"></span>

`initializeLocation ( )`

[extras.t](../file/extras.t.html)\[[3649](../source/extras.t.html#3649)\]

<div class="desc">

*no description available*

</div>

<span id="makePresent"></span>

`makePresent ( )`

[extras.t](../file/extras.t.html)\[[3688](../source/extras.t.html#3688)\]

<div class="desc">

bring the object into the game world in its eventual location(s)

</div>

<span id="makePresentByKey"></span>

`makePresentByKey (key)`

[extras.t](../file/extras.t.html)\[[3732](../source/extras.t.html#3732)\]

<div class="desc">

Bring every PresentLater object with the given key into the game. Note
that this is a "class" method that you call on PresentLater itself:

PresentLater.makePresentByKey('foo');

</div>

<span id="makePresentByKeyIf"></span>

`makePresentByKeyIf (key, cond)`

[extras.t](../file/extras.t.html)\[[3760](../source/extras.t.html#3760)\]

<div class="desc">

Bring every PresentLater object with the given key into the game, or
move every one out of the game, according to the condition 'cond'.

If 'cond' is a function pointer, we'll invoke it once per object with
the given key, passing the object as the parameter, and use the return
value as the in game/out of game setting. For example, if you wanted to
show every object with key 'foo' AND with the property 'showObj' set to
true, you could write this:

PresentLater.makePresentByKeyIf('foo', {x: x.showObj});

Note that this is a "class" method that you call on PresentLater itself.

</div>

<span id="makePresentIf"></span>

`makePresentIf (cond)`

[extras.t](../file/extras.t.html)\[[3717](../source/extras.t.html#3717)\]

<div class="desc">

make myself present if the given condition is true; otherwise, remove me
from the game world (i.e. move me into nil)

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
