---
---
<span class="title">NounRole</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3766](../source/parser.t.html#3766)\]

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

A NounRole is a internal parser object that provides information on a
given noun role in a predicate.

A noun role is one of the standard semantic roles that a noun phrase can
play in a natural language predicate. A predicate is a combination of an
action and the objects that it applies to. Any given verb has a set of
assigned roles that need to be filled to make a complete thought.
(Sometimes the same verb word has multiple senses with different numbers
of slots to fill, but you can think of the different senses as actually
being different actions at some abstract level, which all happen to
share the same verb word.) For example, TAKE requires a noun phrase
telling us which object is to be taken; this is called the direct object
of the verb. PUT X IN Y has a direct object (the thing to be put
somewhere) and an indirect object (the place to put it).

Natural languages use a fairly small number of these noun roles. Most
predicates in most languages have just one role: TAKE, DROP, OPEN,
CLOSE. We call this first-and-only noun role the direct object. A few
predicates have two roles: PUT IN, GIVE TO, UNLOCK WITH. We call the
second role the indirect object. A very few predicates have three roles:
TRADE BOB AN APPLE FOR AN ORANGE, PUT PLUTONIUM IN REACTOR WITH TONGS.
We call the third role the "accessory" object (which is something we
made up - there doesn't seem to be an agreed-upon word among linguists
for this role). And it appears that there's simply no such thing as a
"tetratransitive" verb in any natural human language, so we don't bother
defining a fourth slot.

(It would be easy for a game to add an object defining a fourth slot,
analogous with these others, and use it to include a fourth noun phrase
in the grammar for applicable verbs. The rest of the parser will pick it
up automatically if you do. However, the practical utility of this seems
minimal. \*Three\*-noun verbs are incredibly rare in IF, in part because
situations requiring them are rare, and in part because they're almost
guaranteed to vex players and be panned as guess-the-syntax puzzles. One
can only imagine how a \*four\*-noun command would be received.)

`class `**`NounRole`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`NounRole`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`AccessoryObject`](../object/AccessoryObject.html)`  `[`ActorRole`](../object/ActorRole.html)`  `[`DirectObject`](../object/DirectObject.html)`  `[`IndirectObject`](../object/IndirectObject.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`all`](#all)`  `[`allPredicate`](#allPredicate)`  `[`isPredicate`](#isPredicate)`  `[`matchProp`](#matchProp)`  `[`missingReplyProp`](#missingReplyProp)`  `[`name`](#name)`  `[`npListProp`](#npListProp)`  `[`objListProp`](#objListProp)`  `[`objMatchProp`](#objMatchProp)`  `[`objProp`](#objProp)`  `[`order`](#order)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="all"></span>

`all`

[parser.t](../file/parser.t.html)\[[3814](../source/parser.t.html#3814)\]

<div class="desc">

class property: master list of all roles

</div>

<span id="allPredicate"></span>

`allPredicate`

[parser.t](../file/parser.t.html)\[[3817](../source/parser.t.html#3817)\]

<div class="desc">

class property: master list of all predicate roles

</div>

<span id="isPredicate"></span>

`isPredicate`

[parser.t](../file/parser.t.html)\[[3792](../source/parser.t.html#3792)\]

<div class="desc">

Is this a predicate noun phrase role? This is true for roles that serve
as objects of a verb: direct object, indirect object, accessory. This is
nil for non-predicate roles, such as the addressee actor.

</div>

<span id="matchProp"></span>

`matchProp`

[parser.t](../file/parser.t.html)\[[3772](../source/parser.t.html#3772)\]

<div class="desc">

The -\> property slot in the predicate grammar that's assigned to this
role. This is the property that predicate grammar rules assign for the
match tree for a noun phrase taking this role.

</div>

<span id="missingReplyProp"></span>

`missingReplyProp`

[parser.t](../file/parser.t.html)\[[3798](../source/parser.t.html#3798)\]

<div class="desc">

the predicate match object property that gives the grammar rule for
parsing a reply to a missing noun question for this role

</div>

<span id="name"></span>

`name`

[parser.t](../file/parser.t.html)\[[3804](../source/parser.t.html#3804)\]

<div class="desc">

name - this is an ID string that we use internally for embedding the
role in things like verb template strings

</div>

<span id="npListProp"></span>

`npListProp`

[parser.t](../file/parser.t.html)\[[3775](../source/parser.t.html#3775)\]

<div class="desc">

the NounPhrase list property in the Command object for this role

</div>

<span id="objListProp"></span>

`objListProp`

[parser.t](../file/parser.t.html)\[[3778](../source/parser.t.html#3778)\]

<div class="desc">

the object match list property in the Command object for this role

</div>

<span id="objMatchProp"></span>

`objMatchProp`

[parser.t](../file/parser.t.html)\[[3784](../source/parser.t.html#3784)\]

<div class="desc">

the property in the Command for the current item's NPMatch

</div>

<span id="objProp"></span>

`objProp`

[parser.t](../file/parser.t.html)\[[3781](../source/parser.t.html#3781)\]

<div class="desc">

the property in the Command for the \*current\* item being executed

</div>

<span id="order"></span>

`order`

[parser.t](../file/parser.t.html)\[[3811](../source/parser.t.html#3811)\]

<div class="desc">

Internal sequence number. This tells us the order in which this role
appears in lists (including argument lists) when we store lists of
roles.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct ( )`

[parser.t](../file/parser.t.html)\[[3820](../source/parser.t.html#3820)\]

<div class="desc">

on construction, populate the various maps

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
