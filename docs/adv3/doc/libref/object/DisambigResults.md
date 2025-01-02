---
layout: docs
---
<span class="title">DisambigResults</span><span class="type">class</span>

[disambig.t](../file/disambig.t.html)\[[534](../source/disambig.t.html#534)\]

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



A disambiguation results gatherer object. We use this to manage the
results of resolution of a disambiguation response.

`class `**`DisambigResults`**` :   `[`BasicResolveResults`](../object/BasicResolveResults.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DisambigResults`**  
[`BasicResolveResults`](../object/BasicResolveResults.html)  
[`ResolveResults`](../object/ResolveResults.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `BasicResolveResults` :  
[`allowActionRemapping`](../object/BasicResolveResults.html#allowActionRemapping) [`allowEquivalentFiltering`](../object/BasicResolveResults.html#allowEquivalentFiltering) [`issuingActor_`](../object/BasicResolveResults.html#issuingActor_) [`targetActor_`](../object/BasicResolveResults.html#targetActor_)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`ambiguousNounPhrase`](#ambiguousNounPhrase) [`construct`](#construct) [`noMatch`](#noMatch) [`noMatchForPossessive`](#noMatchForPossessive) [`noMatchPoss`](#noMatchPoss) [`noteOrdinalOutOfRange`](#noteOrdinalOutOfRange) [`noVocabMatch`](#noVocabMatch)

Inherited from `BasicResolveResults` :  
[`allNotAllowed`](../object/BasicResolveResults.html#allNotAllowed) [`askMissingLiteral`](../object/BasicResolveResults.html#askMissingLiteral) [`askMissingObject`](../object/BasicResolveResults.html#askMissingObject) [`beginSingleObjSlot`](../object/BasicResolveResults.html#beginSingleObjSlot) [`beginTopicSlot`](../object/BasicResolveResults.html#beginTopicSlot) [`canResolveInteractively`](../object/BasicResolveResults.html#canResolveInteractively) [`emptyNounPhrase`](../object/BasicResolveResults.html#emptyNounPhrase) [`endSingleObjSlot`](../object/BasicResolveResults.html#endSingleObjSlot) [`endTopicSlot`](../object/BasicResolveResults.html#endTopicSlot) [`filterWithDistinguisher`](../object/BasicResolveResults.html#filterWithDistinguisher) [`getImpliedObject`](../object/BasicResolveResults.html#getImpliedObject) [`incCommandCount`](../object/BasicResolveResults.html#incCommandCount) [`insufficientQuantity`](../object/BasicResolveResults.html#insufficientQuantity) [`noMatchForAll`](../object/BasicResolveResults.html#noMatchForAll) [`noMatchForAllBut`](../object/BasicResolveResults.html#noMatchForAllBut) [`noMatchForListBut`](../object/BasicResolveResults.html#noMatchForListBut) [`noMatchForLocation`](../object/BasicResolveResults.html#noMatchForLocation) [`noMatchForPronoun`](../object/BasicResolveResults.html#noMatchForPronoun) [`noMatchPossessive`](../object/BasicResolveResults.html#noMatchPossessive) [`noteActorSpecified`](../object/BasicResolveResults.html#noteActorSpecified) [`noteAdjEnding`](../object/BasicResolveResults.html#noteAdjEnding) [`noteBadPrep`](../object/BasicResolveResults.html#noteBadPrep) [`noteEmptyBut`](../object/BasicResolveResults.html#noteEmptyBut) [`noteIndefinite`](../object/BasicResolveResults.html#noteIndefinite) [`noteLiteral`](../object/BasicResolveResults.html#noteLiteral) [`noteMatches`](../object/BasicResolveResults.html#noteMatches) [`noteMiscWordList`](../object/BasicResolveResults.html#noteMiscWordList) [`noteNounSlots`](../object/BasicResolveResults.html#noteNounSlots) [`notePlural`](../object/BasicResolveResults.html#notePlural) [`notePronoun`](../object/BasicResolveResults.html#notePronoun) [`noteWeakPhrasing`](../object/BasicResolveResults.html#noteWeakPhrasing) [`nothingInLocation`](../object/BasicResolveResults.html#nothingInLocation) [`reflexiveNotAllowed`](../object/BasicResolveResults.html#reflexiveNotAllowed) [`setActors`](../object/BasicResolveResults.html#setActors) [`singleObjectRequired`](../object/BasicResolveResults.html#singleObjectRequired) [`uniqueObjectRequired`](../object/BasicResolveResults.html#uniqueObjectRequired) [`unknownNounPhrase`](../object/BasicResolveResults.html#unknownNounPhrase) [`wrongReflexive`](../object/BasicResolveResults.html#wrongReflexive) [`zeroQuantity`](../object/BasicResolveResults.html#zeroQuantity)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, asker, txt, matchList, fullMatchList, scopeList, requiredNum, resolver)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[541](../source/disambig.t.html#541)\]



copy the actor information from the parent resolver



<span id="construct"></span>

`construct (parent)`

[disambig.t](../file/disambig.t.html)\[[535](../source/disambig.t.html#535)\]



*no description available*



<span id="noMatch"></span>

`noMatch (action, txt)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[585](../source/disambig.t.html#585)\]



show a message on not matching an object - for a disambiguation
response, failing to match means that the combination of the
disambiguation response plus the original text doesn't name any objects,
not that the object in the response itself isn't present



<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[602](../source/disambig.t.html#602)\]



throw an error indicating the problem



<span id="noMatchPoss"></span>

`noMatchPoss (action, txt)`

[disambig.t](../file/disambig.t.html)\[[591](../source/disambig.t.html#591)\]



throw an error indicating the problem



<span id="noteOrdinalOutOfRange"></span>

`noteOrdinalOutOfRange (ord)`

[disambig.t](../file/disambig.t.html)\[[573](../source/disambig.t.html#573)\]



note the an ordinal response is out of range



<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[596](../source/disambig.t.html#596)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


