---
layout: docs
---
<span class="title">ResolveInfo</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[345](../source/parser.t.html#345)\]

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

The resolveNouns() method returns a list of ResolveInfo objects
describing the objects matched to the noun phrase.

`class `**`ResolveInfo`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ResolveInfo`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`dummyTentativeInfo`](../object/dummyTentativeInfo.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`flags_`](#flags_)[`multiAnnounce`](#multiAnnounce)[`np_`](#np_)[`obj_`](#obj_)[`possRank_`](#possRank_)[`pronounType_`](#pronounType_)[`quant_`](#quant_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`isDistEquivInList`](#isDistEquivInList)[`isEquivalentInList`](#isEquivalentInList)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="flags_"></span>

`flags_`

[parser.t](../file/parser.t.html)\[[393](../source/parser.t.html#393)\]

<div class="desc">

flags describing how we matched the object

</div>

<span id="multiAnnounce"></span>

`multiAnnounce`

[parser.t](../file/parser.t.html)\[[440](../source/parser.t.html#440)\]

<div class="desc">

The pre-calculated multi-object announcement text for this object. When
we iterate over the object list in a command with multiple direct or
indirect objects (TAKE THE BOOK, BELL, AND CANDLE), we calculate the
little announcement messages ("book:") for the objects BEFORE we execute
the actual commands. We then use the pre-calculated announcements during
our iteration. This ensures consistency in the basis for choosing the
names, which is important in cases where the names include
state-dependent information for the purposes of distinguishing one
object from another. The relevant state can change over the course of
executing the command on the objects in the iteration, so if we
calculated the names on the fly we could end up with inconsistent
naming. The user thinks of the objects in terms of their state at the
start of the command, so the pre-calculation approach is not only more
internally consistent, but is also more consistent with the user's
perspective.

</div>

<span id="np_"></span>

`np_`

[parser.t](../file/parser.t.html)\[[420](../source/parser.t.html#420)\]

<div class="desc">

the noun phrase we parsed to come up with this object

</div>

<span id="obj_"></span>

`obj_`

[parser.t](../file/parser.t.html)\[[390](../source/parser.t.html#390)\]

<div class="desc">

the object matched

</div>

<span id="possRank_"></span>

`possRank_`

[parser.t](../file/parser.t.html)\[[414](../source/parser.t.html#414)\]

<div class="desc">

The possessive ranking, if applicable. If this object is qualified by a
possessive phrase ("my books"), we'll set this to a value indicating how
strongly the possession applies to our object: 2 indicates that the
object is explicitly owned by the object indicated in the possessive
phrase, 1 indicates that it's directly held by the named possessor but
not explicitly owned, and 0 indicates all else. In cases where there's
no posessive qualifier, this will simply be zero.

</div>

<span id="pronounType_"></span>

`pronounType_`

[parser.t](../file/parser.t.html)\[[417](../source/parser.t.html#417)\]

<div class="desc">

the pronoun type we matched, if any (as a PronounXxx enum)

</div>

<span id="quant_"></span>

`quant_`

[parser.t](../file/parser.t.html)\[[402](../source/parser.t.html#402)\]

<div class="desc">

By default, each ResolveInfo counts as one object, for the purposes of a
quantity specifier (as in "five coins" or "both hats"). However, in some
cases, a single resolved object might represent a collection of discrete
objects and thus count as more than one for the purposes of the
quantifier.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, flags, np, =, nil)`

[parser.t](../file/parser.t.html)\[[346](../source/parser.t.html#346)\]

<div class="desc">

*no description available*

</div>

<span id="isDistEquivInList"></span>

`isDistEquivInList (lst, dist)`

[parser.t](../file/parser.t.html)\[[378](../source/parser.t.html#378)\]

<div class="desc">

Look for a ResolveInfo item in a list of ResolveInfo items that is
equivalent to us according to a particular Distinguisher.

</div>

<span id="isEquivalentInList"></span>

`isEquivalentInList (lst)`

[parser.t](../file/parser.t.html)\[[363](../source/parser.t.html#363)\]

<div class="desc">

Look for a ResolveInfo item in a list of ResolveInfo items that is
equivalent to us. Returns true if we find such an item, nil if not.

Another ResolveInfo is equivalent to us if it refers to the same
underlying game object that we do, or if it refers to a game object that
is indistinguishable from our underlying game object.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
