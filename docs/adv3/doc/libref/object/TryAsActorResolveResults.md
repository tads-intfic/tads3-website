---
layout: docs
---
<span class="title">TryAsActorResolveResults</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5753](../source/parser.t.html#5753)\]

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



A results object for resolving an actor in a command with an unknown
word or invalid phrasing in the predicate. For this type of resolution,
we're trying to interpret the actor portion of the command as a noun
phrase referring to an actor, but it could also just be another command.
E.g., we could have "bob, asdf" or "east, asdf". Since we're only
tentatively interpreting the phrase as a noun phrase, to see if that
interpretation goes anywhere, we don't want to throw any errors on
failures; instead we simply allow empty match lists.

`class `**`TryAsActorResolveResults`**` :   `[`ResolveResults`](../object/ResolveResults.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TryAsActorResolveResults`**  
[`ResolveResults`](../object/ResolveResults.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allowActionRemapping`](#allowActionRemapping) [`allowEquivalentFiltering`](#allowEquivalentFiltering)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`allNotAllowed`](#allNotAllowed) [`ambiguousNounPhrase`](#ambiguousNounPhrase) [`askMissingLiteral`](#askMissingLiteral) [`askMissingObject`](#askMissingObject) [`beginSingleObjSlot`](#beginSingleObjSlot) [`beginTopicSlot`](#beginTopicSlot) [`emptyNounPhrase`](#emptyNounPhrase) [`endSingleObjSlot`](#endSingleObjSlot) [`endTopicSlot`](#endTopicSlot) [`getImpliedObject`](#getImpliedObject) [`incCommandCount`](#incCommandCount) [`insufficientQuantity`](#insufficientQuantity) [`noMatch`](#noMatch) [`noMatchForAll`](#noMatchForAll) [`noMatchForAllBut`](#noMatchForAllBut) [`noMatchForListBut`](#noMatchForListBut) [`noMatchForLocation`](#noMatchForLocation) [`noMatchForPossessive`](#noMatchForPossessive) [`noMatchForPronoun`](#noMatchForPronoun) [`noMatchPossessive`](#noMatchPossessive) [`noteActorSpecified`](#noteActorSpecified) [`noteAdjEnding`](#noteAdjEnding) [`noteBadPrep`](#noteBadPrep) [`noteEmptyBut`](#noteEmptyBut) [`noteIndefinite`](#noteIndefinite) [`noteLiteral`](#noteLiteral) [`noteMatches`](#noteMatches) [`noteMiscWord`](#noteMiscWord) [`noteNounSlots`](#noteNounSlots) [`notePlural`](#notePlural) [`notePronoun`](#notePronoun) [`noteWeakPhrasing`](#noteWeakPhrasing) [`nothingInLocation`](#nothingInLocation) [`noVocabMatch`](#noVocabMatch) [`reflexiveNotAllowed`](#reflexiveNotAllowed) [`singleObjectRequired`](#singleObjectRequired) [`uniqueObjectRequired`](#uniqueObjectRequired) [`unknownNounPhrase`](#unknownNounPhrase) [`wrongReflexive`](#wrongReflexive) [`zeroQuantity`](#zeroQuantity)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowActionRemapping"></span>

`allowActionRemapping`

[parser.t](../file/parser.t.html)\[[5795](../source/parser.t.html#5795)\]



*no description available*



<span id="allowEquivalentFiltering"></span>

`allowEquivalentFiltering`

[parser.t](../file/parser.t.html)\[[5796](../source/parser.t.html#5796)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="allNotAllowed"></span>

`allNotAllowed ( )`

[parser.t](../file/parser.t.html)\[[5762](../source/parser.t.html#5762)\]



*no description available*



<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, askwer, txt, matchLst, fullMatchLst, scopeList, requiredNum, resolver)`

[parser.t](../file/parser.t.html)\[[5769](../source/parser.t.html#5769)\]



*no description available*



<span id="askMissingLiteral"></span>

`askMissingLiteral (action, which)`

[parser.t](../file/parser.t.html)\[[5775](../source/parser.t.html#5775)\]



*no description available*



<span id="askMissingObject"></span>

`askMissingObject (asker, resolver, responseProd)`

[parser.t](../file/parser.t.html)\[[5773](../source/parser.t.html#5773)\]



*no description available*



<span id="beginSingleObjSlot"></span>

`beginSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[5787](../source/parser.t.html#5787)\]



*no description available*



<span id="beginTopicSlot"></span>

`beginTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[5789](../source/parser.t.html#5789)\]



*no description available*



<span id="emptyNounPhrase"></span>

`emptyNounPhrase (resolver)`

[parser.t](../file/parser.t.html)\[[5776](../source/parser.t.html#5776)\]



*no description available*



<span id="endSingleObjSlot"></span>

`endSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[5788](../source/parser.t.html#5788)\]



*no description available*



<span id="endTopicSlot"></span>

`endTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[5790](../source/parser.t.html#5790)\]



*no description available*



<span id="getImpliedObject"></span>

`getImpliedObject (np, resolver)`

[parser.t](../file/parser.t.html)\[[5772](../source/parser.t.html#5772)\]



*no description available*



<span id="incCommandCount"></span>

`incCommandCount ( )`

[parser.t](../file/parser.t.html)\[[5791](../source/parser.t.html#5791)\]



*no description available*



<span id="insufficientQuantity"></span>

`insufficientQuantity (txt, matchList, requiredNum)`

[parser.t](../file/parser.t.html)\[[5778](../source/parser.t.html#5778)\]



*no description available*



<span id="noMatch"></span>

`noMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[5755](../source/parser.t.html#5755)\]



*no description available*



<span id="noMatchForAll"></span>

`noMatchForAll ( )`

[parser.t](../file/parser.t.html)\[[5757](../source/parser.t.html#5757)\]



*no description available*



<span id="noMatchForAllBut"></span>

`noMatchForAllBut ( )`

[parser.t](../file/parser.t.html)\[[5758](../source/parser.t.html#5758)\]



*no description available*



<span id="noMatchForListBut"></span>

`noMatchForListBut ( )`

[parser.t](../file/parser.t.html)\[[5759](../source/parser.t.html#5759)\]



*no description available*



<span id="noMatchForLocation"></span>

`noMatchForLocation (loc, txt)`

[parser.t](../file/parser.t.html)\[[5766](../source/parser.t.html#5766)\]



*no description available*



<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`

[parser.t](../file/parser.t.html)\[[5765](../source/parser.t.html#5765)\]



*no description available*



<span id="noMatchForPronoun"></span>

`noMatchForPronoun ( )`

[parser.t](../file/parser.t.html)\[[5761](../source/parser.t.html#5761)\]



*no description available*



<span id="noMatchPossessive"></span>

`noMatchPossessive (action, txt)`

[parser.t](../file/parser.t.html)\[[5756](../source/parser.t.html#5756)\]



*no description available*



<span id="noteActorSpecified"></span>

`noteActorSpecified ( )`

[parser.t](../file/parser.t.html)\[[5792](../source/parser.t.html#5792)\]



*no description available*



<span id="noteAdjEnding"></span>

`noteAdjEnding ( )`

[parser.t](../file/parser.t.html)\[[5781](../source/parser.t.html#5781)\]



*no description available*



<span id="noteBadPrep"></span>

`noteBadPrep ( )`

[parser.t](../file/parser.t.html)\[[5767](../source/parser.t.html#5767)\]



*no description available*



<span id="noteEmptyBut"></span>

`noteEmptyBut ( )`

[parser.t](../file/parser.t.html)\[[5760](../source/parser.t.html#5760)\]



*no description available*



<span id="noteIndefinite"></span>

`noteIndefinite ( )`

[parser.t](../file/parser.t.html)\[[5782](../source/parser.t.html#5782)\]



*no description available*



<span id="noteLiteral"></span>

`noteLiteral (txt)`

[parser.t](../file/parser.t.html)\[[5774](../source/parser.t.html#5774)\]



*no description available*



<span id="noteMatches"></span>

`noteMatches (matchList)`

[parser.t](../file/parser.t.html)\[[5783](../source/parser.t.html#5783)\]



*no description available*



<span id="noteMiscWord"></span>

`noteMiscWord (txt)`

[parser.t](../file/parser.t.html)\[[5784](../source/parser.t.html#5784)\]



*no description available*



<span id="noteNounSlots"></span>

`noteNounSlots (cnt)`

[parser.t](../file/parser.t.html)\[[5793](../source/parser.t.html#5793)\]



*no description available*



<span id="notePlural"></span>

`notePlural ( )`

[parser.t](../file/parser.t.html)\[[5786](../source/parser.t.html#5786)\]



*no description available*



<span id="notePronoun"></span>

`notePronoun ( )`

[parser.t](../file/parser.t.html)\[[5785](../source/parser.t.html#5785)\]



*no description available*



<span id="noteWeakPhrasing"></span>

`noteWeakPhrasing ( )`

[parser.t](../file/parser.t.html)\[[5794](../source/parser.t.html#5794)\]



*no description available*



<span id="nothingInLocation"></span>

`nothingInLocation (loc)`

[parser.t](../file/parser.t.html)\[[5768](../source/parser.t.html#5768)\]



*no description available*



<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[5754](../source/parser.t.html#5754)\]



*no description available*



<span id="reflexiveNotAllowed"></span>

`reflexiveNotAllowed ( )`

[parser.t](../file/parser.t.html)\[[5763](../source/parser.t.html#5763)\]



*no description available*



<span id="singleObjectRequired"></span>

`singleObjectRequired (txt)`

[parser.t](../file/parser.t.html)\[[5780](../source/parser.t.html#5780)\]



*no description available*



<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (txt, matchList)`

[parser.t](../file/parser.t.html)\[[5779](../source/parser.t.html#5779)\]



*no description available*



<span id="unknownNounPhrase"></span>

`unknownNounPhrase (match, resolver)`

[parser.t](../file/parser.t.html)\[[5771](../source/parser.t.html#5771)\]



*no description available*



<span id="wrongReflexive"></span>

`wrongReflexive (typ, txt)`

[parser.t](../file/parser.t.html)\[[5764](../source/parser.t.html#5764)\]



*no description available*



<span id="zeroQuantity"></span>

`zeroQuantity (txt)`

[parser.t](../file/parser.t.html)\[[5777](../source/parser.t.html#5777)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


