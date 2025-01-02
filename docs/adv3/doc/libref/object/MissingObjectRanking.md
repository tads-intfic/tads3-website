---
layout: docs
---
<span class="title">MissingObjectRanking</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4743](../source/parser.t.html#4743)\]

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

Missing-object response ranker.

`class `**`MissingObjectRanking`**` :   `[`CommandRanking`](../object/CommandRanking.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MissingObjectRanking`**  
`         `[`CommandRanking`](../object/CommandRanking.html)  
`                 `[`ResolveResults`](../object/ResolveResults.html)  
`                         object`  
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

` `[`nounSlotCount`](#nounSlotCount)`  `

Inherited from `CommandRanking` :  
` `[`actorSpecifiedCount`](../object/CommandRanking.html#actorSpecifiedCount)`  `[`allExcludedCount`](../object/CommandRanking.html#allExcludedCount)`  `[`allowActionRemapping`](../object/CommandRanking.html#allowActionRemapping)`  `[`ambigCount`](../object/CommandRanking.html#ambigCount)`  `[`commandCount`](../object/CommandRanking.html#commandCount)`  `[`emptyButCount`](../object/CommandRanking.html#emptyButCount)`  `[`endAdjCount`](../object/CommandRanking.html#endAdjCount)`  `[`indefiniteCount`](../object/CommandRanking.html#indefiniteCount)`  `[`inSingleObjSlot`](../object/CommandRanking.html#inSingleObjSlot)`  `[`insufficientCount`](../object/CommandRanking.html#insufficientCount)`  `[`inTopicSlot`](../object/CommandRanking.html#inTopicSlot)`  `[`listForSingle`](../object/CommandRanking.html#listForSingle)`  `[`literalLength`](../object/CommandRanking.html#literalLength)`  `[`match`](../object/CommandRanking.html#match)`  `[`miscWordListCount`](../object/CommandRanking.html#miscWordListCount)`  `[`missingCount`](../object/CommandRanking.html#missingCount)`  `[`nonMatchCount`](../object/CommandRanking.html#nonMatchCount)`  `[`nonMatchPossCount`](../object/CommandRanking.html#nonMatchPossCount)`  `[`pluralTruncCount`](../object/CommandRanking.html#pluralTruncCount)`  `[`pronounCount`](../object/CommandRanking.html#pronounCount)`  `[`rankingCriteria`](../object/CommandRanking.html#rankingCriteria)`  `[`tokCount`](../object/CommandRanking.html#tokCount)`  `[`truncCount`](../object/CommandRanking.html#truncCount)`  `[`unknownWordCount`](../object/CommandRanking.html#unknownWordCount)`  `[`unwantedPluralCount`](../object/CommandRanking.html#unwantedPluralCount)`  `[`vocabNonMatchCount`](../object/CommandRanking.html#vocabNonMatchCount)`  `[`weaknessLevel`](../object/CommandRanking.html#weaknessLevel)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `CommandRanking` :  
` `[`allNotAllowed`](../object/CommandRanking.html#allNotAllowed)`  `[`ambiguousNounPhrase`](../object/CommandRanking.html#ambiguousNounPhrase)`  `[`askMissingObject`](../object/CommandRanking.html#askMissingObject)`  `[`beginSingleObjSlot`](../object/CommandRanking.html#beginSingleObjSlot)`  `[`beginTopicSlot`](../object/CommandRanking.html#beginTopicSlot)`  `[`calcRanking`](../object/CommandRanking.html#calcRanking)`  `[`compareRanking`](../object/CommandRanking.html#compareRanking)`  `[`construct`](../object/CommandRanking.html#construct)`  `[`emptyNounPhrase`](../object/CommandRanking.html#emptyNounPhrase)`  `[`endSingleObjSlot`](../object/CommandRanking.html#endSingleObjSlot)`  `[`endTopicSlot`](../object/CommandRanking.html#endTopicSlot)`  `[`getImpliedObject`](../object/CommandRanking.html#getImpliedObject)`  `[`incCommandCount`](../object/CommandRanking.html#incCommandCount)`  `[`insufficientQuantity`](../object/CommandRanking.html#insufficientQuantity)`  `[`noMatch`](../object/CommandRanking.html#noMatch)`  `[`noMatchForAll`](../object/CommandRanking.html#noMatchForAll)`  `[`noMatchForAllBut`](../object/CommandRanking.html#noMatchForAllBut)`  `[`noMatchForListBut`](../object/CommandRanking.html#noMatchForListBut)`  `[`noMatchForLocation`](../object/CommandRanking.html#noMatchForLocation)`  `[`noMatchForPossessive`](../object/CommandRanking.html#noMatchForPossessive)`  `[`noMatchForPronoun`](../object/CommandRanking.html#noMatchForPronoun)`  `[`noMatchPossessive`](../object/CommandRanking.html#noMatchPossessive)`  `[`noteActorSpecified`](../object/CommandRanking.html#noteActorSpecified)`  `[`noteAdjEnding`](../object/CommandRanking.html#noteAdjEnding)`  `[`noteBadPrep`](../object/CommandRanking.html#noteBadPrep)`  `[`noteEmptyBut`](../object/CommandRanking.html#noteEmptyBut)`  `[`noteIndefinite`](../object/CommandRanking.html#noteIndefinite)`  `[`noteLiteral`](../object/CommandRanking.html#noteLiteral)`  `[`noteMatches`](../object/CommandRanking.html#noteMatches)`  `[`noteMiscWordList`](../object/CommandRanking.html#noteMiscWordList)`  `[`noteNounSlots`](../object/CommandRanking.html#noteNounSlots)`  `[`notePlural`](../object/CommandRanking.html#notePlural)`  `[`notePronoun`](../object/CommandRanking.html#notePronoun)`  `[`noteWeakPhrasing`](../object/CommandRanking.html#noteWeakPhrasing)`  `[`nothingInLocation`](../object/CommandRanking.html#nothingInLocation)`  `[`noVocabMatch`](../object/CommandRanking.html#noVocabMatch)`  `[`reflexiveNotAllowed`](../object/CommandRanking.html#reflexiveNotAllowed)`  `[`singleObjectRequired`](../object/CommandRanking.html#singleObjectRequired)`  `[`sortByRanking`](../object/CommandRanking.html#sortByRanking)`  `[`uniqueObjectRequired`](../object/CommandRanking.html#uniqueObjectRequired)`  `[`unknownNounPhrase`](../object/CommandRanking.html#unknownNounPhrase)`  `[`wrongReflexive`](../object/CommandRanking.html#wrongReflexive)`  `[`zeroQuantity`](../object/CommandRanking.html#zeroQuantity)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="nounSlotCount"></span>

`nounSlotCount`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4749](../source/parser.t.html#4749)\]

<div class="desc">

missing-object responses have no verb, so they won't count any noun
slots; we just need to give these an arbitrary value so that we can
compare them (and find them equal)

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
