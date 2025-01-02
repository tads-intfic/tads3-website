<span class="title">PushTraveler</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[3314](../source/travel.t.html#3314)\],
[en_us.t](../file/en_us.t.html)\[[2842](../source/en_us.t.html#2842)\]

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

A special Traveler class for travel involving pushing an object from one
room to another. This class encapsulates the object being pushed and the
actual Traveler performing the travel.

For the most part, we refer Traveler methods to the underlying Traveler.
We override a few methods to provide special handling.

*Modified in
[en_us.t](../file/en_us.t.html)\[[2842](../source/en_us.t.html#2842)\]:*  
English-specific PushTraveler changes

`class `**`PushTraveler`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PushTraveler`**  
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

` `[`obj_`](#obj_)`  `[`traveler_`](#traveler_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`canTravelVia`](#canTravelVia)`  `[`construct`](#construct)`  `[`explainNoTravelVia`](#explainNoTravelVia)`  `[`propNotDefined`](#propNotDefined)`  `[`travelerName`](#travelerName)`  `[`travelerTravelTo`](#travelerTravelTo)`  `[`travelerTravelWithin`](#travelerTravelWithin)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="obj_"></span>

`obj_`

[travel.t](../file/travel.t.html)\[[3323](../source/travel.t.html#3323)\]

<div class="desc">

the object being pushed

</div>

<span id="traveler_"></span>

`traveler_`

[travel.t](../file/travel.t.html)\[[3329](../source/travel.t.html#3329)\]

<div class="desc">

the underlying Traveler - this is the real Traveler that will move to a
new location

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canTravelVia"></span>

`canTravelVia (connector, dest)`

[travel.t](../file/travel.t.html)\[[3400](../source/travel.t.html#3400)\]

<div class="desc">

Can we travel via the given connector? We'll ask our underlying traveler
first, and if that succeeds, we'll ask the object we're pushing.

</div>

<span id="construct"></span>

`construct (obj, traveler)`

[travel.t](../file/travel.t.html)\[[3315](../source/travel.t.html#3315)\]

<div class="desc">

*no description available*

</div>

<span id="explainNoTravelVia"></span>

`explainNoTravelVia (connector, dest)`

[travel.t](../file/travel.t.html)\[[3412](../source/travel.t.html#3412)\]

<div class="desc">

Explain why the given travel is not possible. If our underlying traveler
raised the objection, let it explain; otherwise, let our pushed object
explain.

</div>

<span id="propNotDefined"></span>

`propNotDefined (prop, [args])`

[travel.t](../file/travel.t.html)\[[3421](../source/travel.t.html#3421)\]

<div class="desc">

by default, send everything to the underlying Traveler

</div>

<span id="travelerName"></span>

`travelerName (arriving)`

[en_us.t](../file/en_us.t.html)\[[2848](../source/en_us.t.html#2848)\]

<div class="desc">

When an actor is pushing an object from one room to another, show its
name with an additional clause indicating the object being moved along
with us.

</div>

<span id="travelerTravelTo"></span>

`travelerTravelTo (dest, connector, backConnector)`

[travel.t](../file/travel.t.html)\[[3337](../source/travel.t.html#3337)\]

<div class="desc">

Travel to a new location. We'll run the normal travel routine for the
underlying real traveler; then, if we ended up in a new location, we'll
move the object being pushed to the traveler's new location.

</div>

<span id="travelerTravelWithin"></span>

`travelerTravelWithin (actor, dest)`

[travel.t](../file/travel.t.html)\[[3389](../source/travel.t.html#3389)\]

<div class="desc">

Perform local travel, between nested rooms within a top-level location.
By default, we simply don't allow pushing objects between nested rooms.

To allow pushing an object between nested rooms, override this in
parallel with travelerTravelTo(). Note that you'll have to call
travelerTravelWithin() on the underlying traveler (which will generally
be the actor), and you'll probably want to set up a new set of notifiers
parallel to beforeMovePushable() and movePushable(). You'll probably
particularly need to customize the report in your parallel for
movePushable() - the default ("you push x into the area") isn't very
good when nested rooms are involved, and you'll probably want something
more specific.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
