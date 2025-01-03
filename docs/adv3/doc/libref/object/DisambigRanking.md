---
layout: docs
---
<span class="title">DisambigRanking</span><span class="type">class</span>

[disambig.t](../file/disambig.t.html)\[[282](../source/disambig.t.html#282)\]

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



Disambiguation Ranking. This is a special version of the command ranker
that we use to rank the intepretations of a disambiguation response.

`class `**`DisambigRanking`**` :   `[`CommandRanking`](../object/CommandRanking.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DisambigRanking`**  
[`CommandRanking`](../object/CommandRanking.html)  
[`ResolveResults`](../object/ResolveResults.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`disambigOrdinalCount`](#disambigOrdinalCount) [`nounSlotCount`](#nounSlotCount) [`rankingCriteria`](#rankingCriteria)

Inherited from `CommandRanking` :  
[`actorSpecifiedCount`](../object/CommandRanking.html#actorSpecifiedCount) [`allExcludedCount`](../object/CommandRanking.html#allExcludedCount) [`allowActionRemapping`](../object/CommandRanking.html#allowActionRemapping) [`ambigCount`](../object/CommandRanking.html#ambigCount) [`commandCount`](../object/CommandRanking.html#commandCount) [`emptyButCount`](../object/CommandRanking.html#emptyButCount) [`endAdjCount`](../object/CommandRanking.html#endAdjCount) [`indefiniteCount`](../object/CommandRanking.html#indefiniteCount) [`inSingleObjSlot`](../object/CommandRanking.html#inSingleObjSlot) [`insufficientCount`](../object/CommandRanking.html#insufficientCount) [`inTopicSlot`](../object/CommandRanking.html#inTopicSlot) [`listForSingle`](../object/CommandRanking.html#listForSingle) [`literalLength`](../object/CommandRanking.html#literalLength) [`match`](../object/CommandRanking.html#match) [`miscWordListCount`](../object/CommandRanking.html#miscWordListCount) [`missingCount`](../object/CommandRanking.html#missingCount) [`nonMatchCount`](../object/CommandRanking.html#nonMatchCount) [`nonMatchPossCount`](../object/CommandRanking.html#nonMatchPossCount) [`pluralTruncCount`](../object/CommandRanking.html#pluralTruncCount) [`pronounCount`](../object/CommandRanking.html#pronounCount) [`tokCount`](../object/CommandRanking.html#tokCount) [`truncCount`](../object/CommandRanking.html#truncCount) [`unknownWordCount`](../object/CommandRanking.html#unknownWordCount) [`unwantedPluralCount`](../object/CommandRanking.html#unwantedPluralCount) [`vocabNonMatchCount`](../object/CommandRanking.html#vocabNonMatchCount) [`weaknessLevel`](../object/CommandRanking.html#weaknessLevel)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`noteDisambigOrdinal`](#noteDisambigOrdinal) [`noteOrdinalOutOfRange`](#noteOrdinalOutOfRange)

Inherited from `CommandRanking` :  
[`allNotAllowed`](../object/CommandRanking.html#allNotAllowed) [`ambiguousNounPhrase`](../object/CommandRanking.html#ambiguousNounPhrase) [`askMissingObject`](../object/CommandRanking.html#askMissingObject) [`beginSingleObjSlot`](../object/CommandRanking.html#beginSingleObjSlot) [`beginTopicSlot`](../object/CommandRanking.html#beginTopicSlot) [`calcRanking`](../object/CommandRanking.html#calcRanking) [`compareRanking`](../object/CommandRanking.html#compareRanking) [`construct`](../object/CommandRanking.html#construct) [`emptyNounPhrase`](../object/CommandRanking.html#emptyNounPhrase) [`endSingleObjSlot`](../object/CommandRanking.html#endSingleObjSlot) [`endTopicSlot`](../object/CommandRanking.html#endTopicSlot) [`getImpliedObject`](../object/CommandRanking.html#getImpliedObject) [`incCommandCount`](../object/CommandRanking.html#incCommandCount) [`insufficientQuantity`](../object/CommandRanking.html#insufficientQuantity) [`noMatch`](../object/CommandRanking.html#noMatch) [`noMatchForAll`](../object/CommandRanking.html#noMatchForAll) [`noMatchForAllBut`](../object/CommandRanking.html#noMatchForAllBut) [`noMatchForListBut`](../object/CommandRanking.html#noMatchForListBut) [`noMatchForLocation`](../object/CommandRanking.html#noMatchForLocation) [`noMatchForPossessive`](../object/CommandRanking.html#noMatchForPossessive) [`noMatchForPronoun`](../object/CommandRanking.html#noMatchForPronoun) [`noMatchPossessive`](../object/CommandRanking.html#noMatchPossessive) [`noteActorSpecified`](../object/CommandRanking.html#noteActorSpecified) [`noteAdjEnding`](../object/CommandRanking.html#noteAdjEnding) [`noteBadPrep`](../object/CommandRanking.html#noteBadPrep) [`noteEmptyBut`](../object/CommandRanking.html#noteEmptyBut) [`noteIndefinite`](../object/CommandRanking.html#noteIndefinite) [`noteLiteral`](../object/CommandRanking.html#noteLiteral) [`noteMatches`](../object/CommandRanking.html#noteMatches) [`noteMiscWordList`](../object/CommandRanking.html#noteMiscWordList) [`noteNounSlots`](../object/CommandRanking.html#noteNounSlots) [`notePlural`](../object/CommandRanking.html#notePlural) [`notePronoun`](../object/CommandRanking.html#notePronoun) [`noteWeakPhrasing`](../object/CommandRanking.html#noteWeakPhrasing) [`nothingInLocation`](../object/CommandRanking.html#nothingInLocation) [`noVocabMatch`](../object/CommandRanking.html#noVocabMatch) [`reflexiveNotAllowed`](../object/CommandRanking.html#reflexiveNotAllowed) [`singleObjectRequired`](../object/CommandRanking.html#singleObjectRequired) [`sortByRanking`](../object/CommandRanking.html#sortByRanking) [`uniqueObjectRequired`](../object/CommandRanking.html#uniqueObjectRequired) [`unknownNounPhrase`](../object/CommandRanking.html#unknownNounPhrase) [`wrongReflexive`](../object/CommandRanking.html#wrongReflexive) [`zeroQuantity`](../object/CommandRanking.html#zeroQuantity)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="disambigOrdinalCount"></span>

`disambigOrdinalCount`

[disambig.t](../file/disambig.t.html)\[[319](../source/disambig.t.html#319)\]



number of list ordinals in the match



<span id="nounSlotCount"></span>

`nounSlotCount`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[325](../source/disambig.t.html#325)\]



disambiguation commands have no verbs, so there's no verb structure to
rank; so just use an arbitrary noun slot count



<span id="rankingCriteria"></span>

`rankingCriteria`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[295](../source/disambig.t.html#295)\]



Add the ordinal count ranking criterion at the end of the inherited list
of ranking criteria. If we can't find any differences on the basis of
the other criteria, choose the interpretation that uses fewer ordinal
phrases. (We prefer an non-ordinal interpretation, because this will
prefer matches to explicit vocabulary for objects over matches for
generic ordinals.)

Insert the 'ordinal' rule just before the 'indefinite' rule - avoiding
an ordinal match is more important.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="noteDisambigOrdinal"></span>

`noteDisambigOrdinal ( )`

[disambig.t](../file/disambig.t.html)\[[312](../source/disambig.t.html#312)\]



note a list ordinal (i.e., "the first one" to refer to the first item in
the ambiguous list) - we take list ordinals as less desirable than
treating ordinal words as adjectives or nouns



<span id="noteOrdinalOutOfRange"></span>

`noteOrdinalOutOfRange (ord)`

[disambig.t](../file/disambig.t.html)\[[301](../source/disambig.t.html#301)\]



note the an ordinal response is out of range
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


