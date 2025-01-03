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



An implementation of ResolveResults for normal noun resolution.

`class `**`BasicResolveResults`**` :   `[`ResolveResults`](../object/ResolveResults.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BasicResolveResults`**  
[`ResolveResults`](../object/ResolveResults.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`BasicResolveResults`**  
[`ActorResolveResults`](../object/ActorResolveResults.html)  
[`DisambigResults`](../object/DisambigResults.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allowActionRemapping`](#allowActionRemapping) [`allowEquivalentFiltering`](#allowEquivalentFiltering) [`issuingActor_`](#issuingActor_) [`targetActor_`](#targetActor_)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`allNotAllowed`](#allNotAllowed) [`ambiguousNounPhrase`](#ambiguousNounPhrase) [`askMissingLiteral`](#askMissingLiteral) [`askMissingObject`](#askMissingObject) [`beginSingleObjSlot`](#beginSingleObjSlot) [`beginTopicSlot`](#beginTopicSlot) [`canResolveInteractively`](#canResolveInteractively) [`emptyNounPhrase`](#emptyNounPhrase) [`endSingleObjSlot`](#endSingleObjSlot) [`endTopicSlot`](#endTopicSlot) [`filterWithDistinguisher`](#filterWithDistinguisher) [`getImpliedObject`](#getImpliedObject) [`incCommandCount`](#incCommandCount) [`insufficientQuantity`](#insufficientQuantity) [`noMatch`](#noMatch) [`noMatchForAll`](#noMatchForAll) [`noMatchForAllBut`](#noMatchForAllBut) [`noMatchForListBut`](#noMatchForListBut) [`noMatchForLocation`](#noMatchForLocation) [`noMatchForPossessive`](#noMatchForPossessive) [`noMatchForPronoun`](#noMatchForPronoun) [`noMatchPossessive`](#noMatchPossessive) [`noteActorSpecified`](#noteActorSpecified) [`noteAdjEnding`](#noteAdjEnding) [`noteBadPrep`](#noteBadPrep) [`noteEmptyBut`](#noteEmptyBut) [`noteIndefinite`](#noteIndefinite) [`noteLiteral`](#noteLiteral) [`noteMatches`](#noteMatches) [`noteMiscWordList`](#noteMiscWordList) [`noteNounSlots`](#noteNounSlots) [`notePlural`](#notePlural) [`notePronoun`](#notePronoun) [`noteWeakPhrasing`](#noteWeakPhrasing) [`nothingInLocation`](#nothingInLocation) [`noVocabMatch`](#noVocabMatch) [`reflexiveNotAllowed`](#reflexiveNotAllowed) [`setActors`](#setActors) [`singleObjectRequired`](#singleObjectRequired) [`uniqueObjectRequired`](#uniqueObjectRequired) [`unknownNounPhrase`](#unknownNounPhrase) [`wrongReflexive`](#wrongReflexive) [`zeroQuantity`](#zeroQuantity)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowActionRemapping"></span>

`allowActionRemapping`

[parser.t](../file/parser.t.html)\[[5667](../source/parser.t.html#5667)\]



allow remapping the action



<span id="allowEquivalentFiltering"></span>

`allowEquivalentFiltering`

[parser.t](../file/parser.t.html)\[[5670](../source/parser.t.html#5670)\]



allow making an arbitrary choice among equivalents



<span id="issuingActor_"></span>

`issuingActor_`

[parser.t](../file/parser.t.html)\[[4761](../source/parser.t.html#4761)\]



*no description available*



<span id="targetActor_"></span>

`targetActor_`

[parser.t](../file/parser.t.html)\[[4760](../source/parser.t.html#4760)\]



The target and issuing actors for the command being resolved.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="allNotAllowed"></span>

`allNotAllowed ( )`

[parser.t](../file/parser.t.html)\[[4794](../source/parser.t.html#4794)\]



use the basic noMatch handling



<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, asker, txt, matchList, fullMatchList, scopeList, requiredNum, resolver)`

[parser.t](../file/parser.t.html)\[[4927](../source/parser.t.html#4927)\]



Handle an ambiguous noun phrase. We'll first check to see if we can find
a Distinguisher that can tell at least some of the matches apart; if we
fail to do that, we'll just pick the required number of objects
arbitrarily, since we have no way to distinguish any of them. Once we've
chosen a Distinguisher, we'll ask the user for help interactively if
possible.



<span id="askMissingLiteral"></span>

`askMissingLiteral (action, which)`

[parser.t](../file/parser.t.html)\[[5542](../source/parser.t.html#5542)\]



there's nothing to do with a literal at this point, since we're not
ranking anything



<span id="askMissingObject"></span>

`askMissingObject (asker, resolver, responseProd)`

[parser.t](../file/parser.t.html)\[[5511](../source/parser.t.html#5511)\]



ask the resolver to supply an implied default object



<span id="beginSingleObjSlot"></span>

`beginSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[5633](../source/parser.t.html#5633)\]



we don't care about these right now



<span id="beginTopicSlot"></span>

`beginTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[5636](../source/parser.t.html#5636)\]



*no description available*



<span id="canResolveInteractively"></span>

`canResolveInteractively (action)`

[parser.t](../file/parser.t.html)\[[4895](../source/parser.t.html#4895)\]



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



<span id="emptyNounPhrase"></span>

`emptyNounPhrase (resolver)`

[parser.t](../file/parser.t.html)\[[5568](../source/parser.t.html#5568)\]



return the response



<span id="endSingleObjSlot"></span>

`endSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[5634](../source/parser.t.html#5634)\]



*no description available*



<span id="endTopicSlot"></span>

`endTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[5637](../source/parser.t.html#5637)\]



*no description available*



<span id="filterWithDistinguisher"></span>

`filterWithDistinguisher (lst, dist)`

[parser.t](../file/parser.t.html)\[[5448](../source/parser.t.html#5448)\]



filter a match list with a specific Distinguisher



<span id="getImpliedObject"></span>

`getImpliedObject (np, resolver)`

[parser.t](../file/parser.t.html)\[[5505](../source/parser.t.html#5505)\]



If we didn't find any unknown words, it means that they used a word
that's in the dictionary in a way that makes no sense to us. Simply
return an empty list and let the resolver proceed with its normal
handling for unmatched noun phrases.



<span id="incCommandCount"></span>

`incCommandCount ( )`

[parser.t](../file/parser.t.html)\[[5639](../source/parser.t.html#5639)\]



*no description available*



<span id="insufficientQuantity"></span>

`insufficientQuantity (txt, matchList, requiredNum)`

[parser.t](../file/parser.t.html)\[[5581](../source/parser.t.html#5581)\]



abort with an error



<span id="noMatch"></span>

`noMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[4781](../source/parser.t.html#4781)\]



indicate that we couldn't match the phrase



<span id="noMatchForAll"></span>

`noMatchForAll ( )`

[parser.t](../file/parser.t.html)\[[4800](../source/parser.t.html#4800)\]



show an error



<span id="noMatchForAllBut"></span>

`noMatchForAllBut ( )`

[parser.t](../file/parser.t.html)\[[4811](../source/parser.t.html#4811)\]



this isn't an error - ignore it



<span id="noMatchForListBut"></span>

`noMatchForListBut ( )`

[parser.t](../file/parser.t.html)\[[4817](../source/parser.t.html#4817)\]



show an error



<span id="noMatchForLocation"></span>

`noMatchForLocation (loc, txt)`

[parser.t](../file/parser.t.html)\[[4859](../source/parser.t.html#4859)\]



let the (singular) owner object generate the error



<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`

[parser.t](../file/parser.t.html)\[[4844](../source/parser.t.html#4844)\]



show an error



<span id="noMatchForPronoun"></span>

`noMatchForPronoun (typ, txt)`

[parser.t](../file/parser.t.html)\[[4823](../source/parser.t.html#4823)\]



show an error



<span id="noMatchPossessive"></span>

`noMatchPossessive (action, txt)`

[parser.t](../file/parser.t.html)\[[4788](../source/parser.t.html#4788)\]



show an error



<span id="noteActorSpecified"></span>

`noteActorSpecified ( )`

[parser.t](../file/parser.t.html)\[[5644](../source/parser.t.html#5644)\]



we don't care about how many subcommands there are



<span id="noteAdjEnding"></span>

`noteAdjEnding ( )`

[parser.t](../file/parser.t.html)\[[5603](../source/parser.t.html#5603)\]



abort with an error



<span id="noteBadPrep"></span>

`noteBadPrep ( )`

[parser.t](../file/parser.t.html)\[[4871](../source/parser.t.html#4871)\]



let the location object generate the error



<span id="noteEmptyBut"></span>

`noteEmptyBut ( )`

[parser.t](../file/parser.t.html)\[[4806](../source/parser.t.html#4806)\]



show an error



<span id="noteIndefinite"></span>

`noteIndefinite ( )`

[parser.t](../file/parser.t.html)\[[5608](../source/parser.t.html#5608)\]



we don't care about adjective-ending noun phrases at this point



<span id="noteLiteral"></span>

`noteLiteral (txt)`

[parser.t](../file/parser.t.html)\[[5534](../source/parser.t.html#5534)\]



try reading an object response



<span id="noteMatches"></span>

`noteMatches (matchList)`

[parser.t](../file/parser.t.html)\[[5623](../source/parser.t.html#5623)\]



we don't care about pronouns right now



<span id="noteMiscWordList"></span>

`noteMiscWordList (txt)`

[parser.t](../file/parser.t.html)\[[5613](../source/parser.t.html#5613)\]



we don't care about indefinites at this point



<span id="noteNounSlots"></span>

`noteNounSlots (cnt)`

[parser.t](../file/parser.t.html)\[[5653](../source/parser.t.html#5653)\]



we don't care about this during execution - it only matters for
determining the strength of the command during the ranking process



<span id="notePlural"></span>

`notePlural ( )`

[parser.t](../file/parser.t.html)\[[5628](../source/parser.t.html#5628)\]



we don't care about the matches just now



<span id="notePronoun"></span>

`notePronoun ( )`

[parser.t](../file/parser.t.html)\[[5618](../source/parser.t.html#5618)\]



we don't care about unstructured noun phrases at this point



<span id="noteWeakPhrasing"></span>

`noteWeakPhrasing (level)`

[parser.t](../file/parser.t.html)\[[5661](../source/parser.t.html#5661)\]



we don't care about this during execution; it only matters for the
ranking process



<span id="nothingInLocation"></span>

`nothingInLocation (loc)`

[parser.t](../file/parser.t.html)\[[4865](../source/parser.t.html#4865)\]



let the location object generate the error



<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[4774](../source/parser.t.html#4774)\]



Results gatherer methods



<span id="reflexiveNotAllowed"></span>

`reflexiveNotAllowed (typ, txt)`

[parser.t](../file/parser.t.html)\[[4830](../source/parser.t.html#4830)\]



show an error



<span id="setActors"></span>

`setActors (target, issuer)`

[parser.t](../file/parser.t.html)\[[4764](../source/parser.t.html#4764)\]



set up the actor parameters



<span id="singleObjectRequired"></span>

`singleObjectRequired (txt)`

[parser.t](../file/parser.t.html)\[[5596](../source/parser.t.html#5596)\]



abort with an error



<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (txt, matchList)`

[parser.t](../file/parser.t.html)\[[5589](../source/parser.t.html#5589)\]



abort with an error



<span id="unknownNounPhrase"></span>

`unknownNounPhrase (match, resolver)`

[parser.t](../file/parser.t.html)\[[5475](../source/parser.t.html#5475)\]



handle a noun phrase that doesn't match any legal grammar rules for noun
phrases



<span id="wrongReflexive"></span>

`wrongReflexive (typ, txt)`

[parser.t](../file/parser.t.html)\[[4837](../source/parser.t.html#4837)\]



show an error



<span id="zeroQuantity"></span>

`zeroQuantity (txt)`

[parser.t](../file/parser.t.html)\[[5574](../source/parser.t.html#5574)\]



abort with an error
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


