---
layout: docs
---
<span class="title">BasicResolveResults</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4756](../source/parser.t.html#4756)\]

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

An implementation of ResolveResults for normal noun resolution.

`class `**`BasicResolveResults`**` :   `[`ResolveResults`](../object/ResolveResults.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BasicResolveResults`**  
`         `[`ResolveResults`](../object/ResolveResults.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`BasicResolveResults`**  
`         `[`ActorResolveResults`](../object/ActorResolveResults.html)  
`         `[`DisambigResults`](../object/DisambigResults.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`allowActionRemapping`](#allowActionRemapping)`  `[`allowEquivalentFiltering`](#allowEquivalentFiltering)`  `[`issuingActor_`](#issuingActor_)`  `[`targetActor_`](#targetActor_)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`allNotAllowed`](#allNotAllowed)`  `[`ambiguousNounPhrase`](#ambiguousNounPhrase)`  `[`askMissingLiteral`](#askMissingLiteral)`  `[`askMissingObject`](#askMissingObject)`  `[`beginSingleObjSlot`](#beginSingleObjSlot)`  `[`beginTopicSlot`](#beginTopicSlot)`  `[`canResolveInteractively`](#canResolveInteractively)`  `[`emptyNounPhrase`](#emptyNounPhrase)`  `[`endSingleObjSlot`](#endSingleObjSlot)`  `[`endTopicSlot`](#endTopicSlot)`  `[`filterWithDistinguisher`](#filterWithDistinguisher)`  `[`getImpliedObject`](#getImpliedObject)`  `[`incCommandCount`](#incCommandCount)`  `[`insufficientQuantity`](#insufficientQuantity)`  `[`noMatch`](#noMatch)`  `[`noMatchForAll`](#noMatchForAll)`  `[`noMatchForAllBut`](#noMatchForAllBut)`  `[`noMatchForListBut`](#noMatchForListBut)`  `[`noMatchForLocation`](#noMatchForLocation)`  `[`noMatchForPossessive`](#noMatchForPossessive)`  `[`noMatchForPronoun`](#noMatchForPronoun)`  `[`noMatchPossessive`](#noMatchPossessive)`  `[`noteActorSpecified`](#noteActorSpecified)`  `[`noteAdjEnding`](#noteAdjEnding)`  `[`noteBadPrep`](#noteBadPrep)`  `[`noteEmptyBut`](#noteEmptyBut)`  `[`noteIndefinite`](#noteIndefinite)`  `[`noteLiteral`](#noteLiteral)`  `[`noteMatches`](#noteMatches)`  `[`noteMiscWordList`](#noteMiscWordList)`  `[`noteNounSlots`](#noteNounSlots)`  `[`notePlural`](#notePlural)`  `[`notePronoun`](#notePronoun)`  `[`noteWeakPhrasing`](#noteWeakPhrasing)`  `[`nothingInLocation`](#nothingInLocation)`  `[`noVocabMatch`](#noVocabMatch)`  `[`reflexiveNotAllowed`](#reflexiveNotAllowed)`  `[`setActors`](#setActors)`  `[`singleObjectRequired`](#singleObjectRequired)`  `[`uniqueObjectRequired`](#uniqueObjectRequired)`  `[`unknownNounPhrase`](#unknownNounPhrase)`  `[`wrongReflexive`](#wrongReflexive)`  `[`zeroQuantity`](#zeroQuantity)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowActionRemapping"></span>

`allowActionRemapping`

[parser.t](../file/parser.t.html)\[[5667](../source/parser.t.html#5667)\]

<div class="desc">

allow remapping the action

</div>

<span id="allowEquivalentFiltering"></span>

`allowEquivalentFiltering`

[parser.t](../file/parser.t.html)\[[5670](../source/parser.t.html#5670)\]

<div class="desc">

allow making an arbitrary choice among equivalents

</div>

<span id="issuingActor_"></span>

`issuingActor_`

[parser.t](../file/parser.t.html)\[[4761](../source/parser.t.html#4761)\]

<div class="desc">

*no description available*

</div>

<span id="targetActor_"></span>

`targetActor_`

[parser.t](../file/parser.t.html)\[[4760](../source/parser.t.html#4760)\]

<div class="desc">

The target and issuing actors for the command being resolved.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="allNotAllowed"></span>

`allNotAllowed ( )`

[parser.t](../file/parser.t.html)\[[4794](../source/parser.t.html#4794)\]

<div class="desc">

use the basic noMatch handling

</div>

<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, asker, txt, matchList, fullMatchList, scopeList, requiredNum, resolver)`

[parser.t](../file/parser.t.html)\[[4927](../source/parser.t.html#4927)\]

<div class="desc">

Handle an ambiguous noun phrase. We'll first check to see if we can find
a Distinguisher that can tell at least some of the matches apart; if we
fail to do that, we'll just pick the required number of objects
arbitrarily, since we have no way to distinguish any of them. Once we've
chosen a Distinguisher, we'll ask the user for help interactively if
possible.

</div>

<span id="askMissingLiteral"></span>

`askMissingLiteral (action, which)`

[parser.t](../file/parser.t.html)\[[5542](../source/parser.t.html#5542)\]

<div class="desc">

there's nothing to do with a literal at this point, since we're not
ranking anything

</div>

<span id="askMissingObject"></span>

`askMissingObject (asker, resolver, responseProd)`

[parser.t](../file/parser.t.html)\[[5511](../source/parser.t.html#5511)\]

<div class="desc">

ask the resolver to supply an implied default object

</div>

<span id="beginSingleObjSlot"></span>

`beginSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[5633](../source/parser.t.html#5633)\]

<div class="desc">

we don't care about these right now

</div>

<span id="beginTopicSlot"></span>

`beginTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[5636](../source/parser.t.html#5636)\]

<div class="desc">

*no description available*

</div>

<span id="canResolveInteractively"></span>

`canResolveInteractively (action)`

[parser.t](../file/parser.t.html)\[[4895](../source/parser.t.html#4895)\]

<div class="desc">

Service routine - determine if we can interactively resolve a need for
more information. If the issuer is the player, and the target actor can
talk to the player, then we can resolve a question interactively;
otherwise, we cannot.

We can't interactively resolve a question if the issuer isn't the
player, because there's no interactive user to prompt for more
information.

We can't interactively resolve a question if the target actor can't talk
to the player, because the question to the player would be coming out of
thin air.

</div>

<span id="emptyNounPhrase"></span>

`emptyNounPhrase (resolver)`

[parser.t](../file/parser.t.html)\[[5568](../source/parser.t.html#5568)\]

<div class="desc">

return the response

</div>

<span id="endSingleObjSlot"></span>

`endSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[5634](../source/parser.t.html#5634)\]

<div class="desc">

*no description available*

</div>

<span id="endTopicSlot"></span>

`endTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[5637](../source/parser.t.html#5637)\]

<div class="desc">

*no description available*

</div>

<span id="filterWithDistinguisher"></span>

`filterWithDistinguisher (lst, dist)`

[parser.t](../file/parser.t.html)\[[5448](../source/parser.t.html#5448)\]

<div class="desc">

filter a match list with a specific Distinguisher

</div>

<span id="getImpliedObject"></span>

`getImpliedObject (np, resolver)`

[parser.t](../file/parser.t.html)\[[5505](../source/parser.t.html#5505)\]

<div class="desc">

If we didn't find any unknown words, it means that they used a word
that's in the dictionary in a way that makes no sense to us. Simply
return an empty list and let the resolver proceed with its normal
handling for unmatched noun phrases.

</div>

<span id="incCommandCount"></span>

`incCommandCount ( )`

[parser.t](../file/parser.t.html)\[[5639](../source/parser.t.html#5639)\]

<div class="desc">

*no description available*

</div>

<span id="insufficientQuantity"></span>

`insufficientQuantity (txt, matchList, requiredNum)`

[parser.t](../file/parser.t.html)\[[5581](../source/parser.t.html#5581)\]

<div class="desc">

abort with an error

</div>

<span id="noMatch"></span>

`noMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[4781](../source/parser.t.html#4781)\]

<div class="desc">

indicate that we couldn't match the phrase

</div>

<span id="noMatchForAll"></span>

`noMatchForAll ( )`

[parser.t](../file/parser.t.html)\[[4800](../source/parser.t.html#4800)\]

<div class="desc">

show an error

</div>

<span id="noMatchForAllBut"></span>

`noMatchForAllBut ( )`

[parser.t](../file/parser.t.html)\[[4811](../source/parser.t.html#4811)\]

<div class="desc">

this isn't an error - ignore it

</div>

<span id="noMatchForListBut"></span>

`noMatchForListBut ( )`

[parser.t](../file/parser.t.html)\[[4817](../source/parser.t.html#4817)\]

<div class="desc">

show an error

</div>

<span id="noMatchForLocation"></span>

`noMatchForLocation (loc, txt)`

[parser.t](../file/parser.t.html)\[[4859](../source/parser.t.html#4859)\]

<div class="desc">

let the (singular) owner object generate the error

</div>

<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`

[parser.t](../file/parser.t.html)\[[4844](../source/parser.t.html#4844)\]

<div class="desc">

show an error

</div>

<span id="noMatchForPronoun"></span>

`noMatchForPronoun (typ, txt)`

[parser.t](../file/parser.t.html)\[[4823](../source/parser.t.html#4823)\]

<div class="desc">

show an error

</div>

<span id="noMatchPossessive"></span>

`noMatchPossessive (action, txt)`

[parser.t](../file/parser.t.html)\[[4788](../source/parser.t.html#4788)\]

<div class="desc">

show an error

</div>

<span id="noteActorSpecified"></span>

`noteActorSpecified ( )`

[parser.t](../file/parser.t.html)\[[5644](../source/parser.t.html#5644)\]

<div class="desc">

we don't care about how many subcommands there are

</div>

<span id="noteAdjEnding"></span>

`noteAdjEnding ( )`

[parser.t](../file/parser.t.html)\[[5603](../source/parser.t.html#5603)\]

<div class="desc">

abort with an error

</div>

<span id="noteBadPrep"></span>

`noteBadPrep ( )`

[parser.t](../file/parser.t.html)\[[4871](../source/parser.t.html#4871)\]

<div class="desc">

let the location object generate the error

</div>

<span id="noteEmptyBut"></span>

`noteEmptyBut ( )`

[parser.t](../file/parser.t.html)\[[4806](../source/parser.t.html#4806)\]

<div class="desc">

show an error

</div>

<span id="noteIndefinite"></span>

`noteIndefinite ( )`

[parser.t](../file/parser.t.html)\[[5608](../source/parser.t.html#5608)\]

<div class="desc">

we don't care about adjective-ending noun phrases at this point

</div>

<span id="noteLiteral"></span>

`noteLiteral (txt)`

[parser.t](../file/parser.t.html)\[[5534](../source/parser.t.html#5534)\]

<div class="desc">

try reading an object response

</div>

<span id="noteMatches"></span>

`noteMatches (matchList)`

[parser.t](../file/parser.t.html)\[[5623](../source/parser.t.html#5623)\]

<div class="desc">

we don't care about pronouns right now

</div>

<span id="noteMiscWordList"></span>

`noteMiscWordList (txt)`

[parser.t](../file/parser.t.html)\[[5613](../source/parser.t.html#5613)\]

<div class="desc">

we don't care about indefinites at this point

</div>

<span id="noteNounSlots"></span>

`noteNounSlots (cnt)`

[parser.t](../file/parser.t.html)\[[5653](../source/parser.t.html#5653)\]

<div class="desc">

we don't care about this during execution - it only matters for
determining the strength of the command during the ranking process

</div>

<span id="notePlural"></span>

`notePlural ( )`

[parser.t](../file/parser.t.html)\[[5628](../source/parser.t.html#5628)\]

<div class="desc">

we don't care about the matches just now

</div>

<span id="notePronoun"></span>

`notePronoun ( )`

[parser.t](../file/parser.t.html)\[[5618](../source/parser.t.html#5618)\]

<div class="desc">

we don't care about unstructured noun phrases at this point

</div>

<span id="noteWeakPhrasing"></span>

`noteWeakPhrasing (level)`

[parser.t](../file/parser.t.html)\[[5661](../source/parser.t.html#5661)\]

<div class="desc">

we don't care about this during execution; it only matters for the
ranking process

</div>

<span id="nothingInLocation"></span>

`nothingInLocation (loc)`

[parser.t](../file/parser.t.html)\[[4865](../source/parser.t.html#4865)\]

<div class="desc">

let the location object generate the error

</div>

<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[4774](../source/parser.t.html#4774)\]

<div class="desc">

Results gatherer methods

</div>

<span id="reflexiveNotAllowed"></span>

`reflexiveNotAllowed (typ, txt)`

[parser.t](../file/parser.t.html)\[[4830](../source/parser.t.html#4830)\]

<div class="desc">

show an error

</div>

<span id="setActors"></span>

`setActors (target, issuer)`

[parser.t](../file/parser.t.html)\[[4764](../source/parser.t.html#4764)\]

<div class="desc">

set up the actor parameters

</div>

<span id="singleObjectRequired"></span>

`singleObjectRequired (txt)`

[parser.t](../file/parser.t.html)\[[5596](../source/parser.t.html#5596)\]

<div class="desc">

abort with an error

</div>

<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (txt, matchList)`

[parser.t](../file/parser.t.html)\[[5589](../source/parser.t.html#5589)\]

<div class="desc">

abort with an error

</div>

<span id="unknownNounPhrase"></span>

`unknownNounPhrase (match, resolver)`

[parser.t](../file/parser.t.html)\[[5475](../source/parser.t.html#5475)\]

<div class="desc">

handle a noun phrase that doesn't match any legal grammar rules for noun
phrases

</div>

<span id="wrongReflexive"></span>

`wrongReflexive (typ, txt)`

[parser.t](../file/parser.t.html)\[[4837](../source/parser.t.html#4837)\]

<div class="desc">

show an error

</div>

<span id="zeroQuantity"></span>

`zeroQuantity (txt)`

[parser.t](../file/parser.t.html)\[[5574](../source/parser.t.html#5574)\]

<div class="desc">

abort with an error

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
