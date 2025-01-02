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

<div class="fdesc">

A results object for resolving an actor in a command with an unknown
word or invalid phrasing in the predicate. For this type of resolution,
we're trying to interpret the actor portion of the command as a noun
phrase referring to an actor, but it could also just be another command.
E.g., we could have "bob, asdf" or "east, asdf". Since we're only
tentatively interpreting the phrase as a noun phrase, to see if that
interpretation goes anywhere, we don't want to throw any errors on
failures; instead we simply allow empty match lists.

`class `**`TryAsActorResolveResults`**` :   `[`ResolveResults`](../object/ResolveResults.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TryAsActorResolveResults`**  
`         `[`ResolveResults`](../object/ResolveResults.html)  
`                 object`  
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

` `[`allowActionRemapping`](#allowActionRemapping)`  `[`allowEquivalentFiltering`](#allowEquivalentFiltering)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`allNotAllowed`](#allNotAllowed)`  `[`ambiguousNounPhrase`](#ambiguousNounPhrase)`  `[`askMissingLiteral`](#askMissingLiteral)`  `[`askMissingObject`](#askMissingObject)`  `[`beginSingleObjSlot`](#beginSingleObjSlot)`  `[`beginTopicSlot`](#beginTopicSlot)`  `[`emptyNounPhrase`](#emptyNounPhrase)`  `[`endSingleObjSlot`](#endSingleObjSlot)`  `[`endTopicSlot`](#endTopicSlot)`  `[`getImpliedObject`](#getImpliedObject)`  `[`incCommandCount`](#incCommandCount)`  `[`insufficientQuantity`](#insufficientQuantity)`  `[`noMatch`](#noMatch)`  `[`noMatchForAll`](#noMatchForAll)`  `[`noMatchForAllBut`](#noMatchForAllBut)`  `[`noMatchForListBut`](#noMatchForListBut)`  `[`noMatchForLocation`](#noMatchForLocation)`  `[`noMatchForPossessive`](#noMatchForPossessive)`  `[`noMatchForPronoun`](#noMatchForPronoun)`  `[`noMatchPossessive`](#noMatchPossessive)`  `[`noteActorSpecified`](#noteActorSpecified)`  `[`noteAdjEnding`](#noteAdjEnding)`  `[`noteBadPrep`](#noteBadPrep)`  `[`noteEmptyBut`](#noteEmptyBut)`  `[`noteIndefinite`](#noteIndefinite)`  `[`noteLiteral`](#noteLiteral)`  `[`noteMatches`](#noteMatches)`  `[`noteMiscWord`](#noteMiscWord)`  `[`noteNounSlots`](#noteNounSlots)`  `[`notePlural`](#notePlural)`  `[`notePronoun`](#notePronoun)`  `[`noteWeakPhrasing`](#noteWeakPhrasing)`  `[`nothingInLocation`](#nothingInLocation)`  `[`noVocabMatch`](#noVocabMatch)`  `[`reflexiveNotAllowed`](#reflexiveNotAllowed)`  `[`singleObjectRequired`](#singleObjectRequired)`  `[`uniqueObjectRequired`](#uniqueObjectRequired)`  `[`unknownNounPhrase`](#unknownNounPhrase)`  `[`wrongReflexive`](#wrongReflexive)`  `[`zeroQuantity`](#zeroQuantity)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowActionRemapping"></span>

`allowActionRemapping`

[parser.t](../file/parser.t.html)\[[5795](../source/parser.t.html#5795)\]

<div class="desc">

*no description available*

</div>

<span id="allowEquivalentFiltering"></span>

`allowEquivalentFiltering`

[parser.t](../file/parser.t.html)\[[5796](../source/parser.t.html#5796)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="allNotAllowed"></span>

`allNotAllowed ( )`

[parser.t](../file/parser.t.html)\[[5762](../source/parser.t.html#5762)\]

<div class="desc">

*no description available*

</div>

<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, askwer, txt, matchLst, fullMatchLst, scopeList, requiredNum, resolver)`

[parser.t](../file/parser.t.html)\[[5769](../source/parser.t.html#5769)\]

<div class="desc">

*no description available*

</div>

<span id="askMissingLiteral"></span>

`askMissingLiteral (action, which)`

[parser.t](../file/parser.t.html)\[[5775](../source/parser.t.html#5775)\]

<div class="desc">

*no description available*

</div>

<span id="askMissingObject"></span>

`askMissingObject (asker, resolver, responseProd)`

[parser.t](../file/parser.t.html)\[[5773](../source/parser.t.html#5773)\]

<div class="desc">

*no description available*

</div>

<span id="beginSingleObjSlot"></span>

`beginSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[5787](../source/parser.t.html#5787)\]

<div class="desc">

*no description available*

</div>

<span id="beginTopicSlot"></span>

`beginTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[5789](../source/parser.t.html#5789)\]

<div class="desc">

*no description available*

</div>

<span id="emptyNounPhrase"></span>

`emptyNounPhrase (resolver)`

[parser.t](../file/parser.t.html)\[[5776](../source/parser.t.html#5776)\]

<div class="desc">

*no description available*

</div>

<span id="endSingleObjSlot"></span>

`endSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[5788](../source/parser.t.html#5788)\]

<div class="desc">

*no description available*

</div>

<span id="endTopicSlot"></span>

`endTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[5790](../source/parser.t.html#5790)\]

<div class="desc">

*no description available*

</div>

<span id="getImpliedObject"></span>

`getImpliedObject (np, resolver)`

[parser.t](../file/parser.t.html)\[[5772](../source/parser.t.html#5772)\]

<div class="desc">

*no description available*

</div>

<span id="incCommandCount"></span>

`incCommandCount ( )`

[parser.t](../file/parser.t.html)\[[5791](../source/parser.t.html#5791)\]

<div class="desc">

*no description available*

</div>

<span id="insufficientQuantity"></span>

`insufficientQuantity (txt, matchList, requiredNum)`

[parser.t](../file/parser.t.html)\[[5778](../source/parser.t.html#5778)\]

<div class="desc">

*no description available*

</div>

<span id="noMatch"></span>

`noMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[5755](../source/parser.t.html#5755)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForAll"></span>

`noMatchForAll ( )`

[parser.t](../file/parser.t.html)\[[5757](../source/parser.t.html#5757)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForAllBut"></span>

`noMatchForAllBut ( )`

[parser.t](../file/parser.t.html)\[[5758](../source/parser.t.html#5758)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForListBut"></span>

`noMatchForListBut ( )`

[parser.t](../file/parser.t.html)\[[5759](../source/parser.t.html#5759)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForLocation"></span>

`noMatchForLocation (loc, txt)`

[parser.t](../file/parser.t.html)\[[5766](../source/parser.t.html#5766)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`

[parser.t](../file/parser.t.html)\[[5765](../source/parser.t.html#5765)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForPronoun"></span>

`noMatchForPronoun ( )`

[parser.t](../file/parser.t.html)\[[5761](../source/parser.t.html#5761)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchPossessive"></span>

`noMatchPossessive (action, txt)`

[parser.t](../file/parser.t.html)\[[5756](../source/parser.t.html#5756)\]

<div class="desc">

*no description available*

</div>

<span id="noteActorSpecified"></span>

`noteActorSpecified ( )`

[parser.t](../file/parser.t.html)\[[5792](../source/parser.t.html#5792)\]

<div class="desc">

*no description available*

</div>

<span id="noteAdjEnding"></span>

`noteAdjEnding ( )`

[parser.t](../file/parser.t.html)\[[5781](../source/parser.t.html#5781)\]

<div class="desc">

*no description available*

</div>

<span id="noteBadPrep"></span>

`noteBadPrep ( )`

[parser.t](../file/parser.t.html)\[[5767](../source/parser.t.html#5767)\]

<div class="desc">

*no description available*

</div>

<span id="noteEmptyBut"></span>

`noteEmptyBut ( )`

[parser.t](../file/parser.t.html)\[[5760](../source/parser.t.html#5760)\]

<div class="desc">

*no description available*

</div>

<span id="noteIndefinite"></span>

`noteIndefinite ( )`

[parser.t](../file/parser.t.html)\[[5782](../source/parser.t.html#5782)\]

<div class="desc">

*no description available*

</div>

<span id="noteLiteral"></span>

`noteLiteral (txt)`

[parser.t](../file/parser.t.html)\[[5774](../source/parser.t.html#5774)\]

<div class="desc">

*no description available*

</div>

<span id="noteMatches"></span>

`noteMatches (matchList)`

[parser.t](../file/parser.t.html)\[[5783](../source/parser.t.html#5783)\]

<div class="desc">

*no description available*

</div>

<span id="noteMiscWord"></span>

`noteMiscWord (txt)`

[parser.t](../file/parser.t.html)\[[5784](../source/parser.t.html#5784)\]

<div class="desc">

*no description available*

</div>

<span id="noteNounSlots"></span>

`noteNounSlots (cnt)`

[parser.t](../file/parser.t.html)\[[5793](../source/parser.t.html#5793)\]

<div class="desc">

*no description available*

</div>

<span id="notePlural"></span>

`notePlural ( )`

[parser.t](../file/parser.t.html)\[[5786](../source/parser.t.html#5786)\]

<div class="desc">

*no description available*

</div>

<span id="notePronoun"></span>

`notePronoun ( )`

[parser.t](../file/parser.t.html)\[[5785](../source/parser.t.html#5785)\]

<div class="desc">

*no description available*

</div>

<span id="noteWeakPhrasing"></span>

`noteWeakPhrasing ( )`

[parser.t](../file/parser.t.html)\[[5794](../source/parser.t.html#5794)\]

<div class="desc">

*no description available*

</div>

<span id="nothingInLocation"></span>

`nothingInLocation (loc)`

[parser.t](../file/parser.t.html)\[[5768](../source/parser.t.html#5768)\]

<div class="desc">

*no description available*

</div>

<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[5754](../source/parser.t.html#5754)\]

<div class="desc">

*no description available*

</div>

<span id="reflexiveNotAllowed"></span>

`reflexiveNotAllowed ( )`

[parser.t](../file/parser.t.html)\[[5763](../source/parser.t.html#5763)\]

<div class="desc">

*no description available*

</div>

<span id="singleObjectRequired"></span>

`singleObjectRequired (txt)`

[parser.t](../file/parser.t.html)\[[5780](../source/parser.t.html#5780)\]

<div class="desc">

*no description available*

</div>

<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (txt, matchList)`

[parser.t](../file/parser.t.html)\[[5779](../source/parser.t.html#5779)\]

<div class="desc">

*no description available*

</div>

<span id="unknownNounPhrase"></span>

`unknownNounPhrase (match, resolver)`

[parser.t](../file/parser.t.html)\[[5771](../source/parser.t.html#5771)\]

<div class="desc">

*no description available*

</div>

<span id="wrongReflexive"></span>

`wrongReflexive (typ, txt)`

[parser.t](../file/parser.t.html)\[[5764](../source/parser.t.html#5764)\]

<div class="desc">

*no description available*

</div>

<span id="zeroQuantity"></span>

`zeroQuantity (txt)`

[parser.t](../file/parser.t.html)\[[5777](../source/parser.t.html#5777)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
