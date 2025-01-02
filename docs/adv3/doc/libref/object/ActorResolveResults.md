---
layout: docs
---
<span class="title">ActorResolveResults</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5703](../source/parser.t.html#5703)\]

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

Specialized noun-phrase resolution results gatherer for resolving a
command actor (i.e., the target actor of a command).

`class `**`ActorResolveResults`**` :   `[`BasicResolveResults`](../object/BasicResolveResults.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ActorResolveResults`**  
[`BasicResolveResults`](../object/BasicResolveResults.html)  
[`ResolveResults`](../object/ResolveResults.html)  
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

[`allowActionRemapping`](#allowActionRemapping)

Inherited from `BasicResolveResults` :  
[`allowEquivalentFiltering`](../object/BasicResolveResults.html#allowEquivalentFiltering)[`issuingActor_`](../object/BasicResolveResults.html#issuingActor_)[`targetActor_`](../object/BasicResolveResults.html#targetActor_)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`getImpliedObject`](#getImpliedObject)[`singleObjectRequired`](#singleObjectRequired)[`uniqueObjectRequired`](#uniqueObjectRequired)

Inherited from `BasicResolveResults` :  
[`allNotAllowed`](../object/BasicResolveResults.html#allNotAllowed)[`ambiguousNounPhrase`](../object/BasicResolveResults.html#ambiguousNounPhrase)[`askMissingLiteral`](../object/BasicResolveResults.html#askMissingLiteral)[`askMissingObject`](../object/BasicResolveResults.html#askMissingObject)[`beginSingleObjSlot`](../object/BasicResolveResults.html#beginSingleObjSlot)[`beginTopicSlot`](../object/BasicResolveResults.html#beginTopicSlot)[`canResolveInteractively`](../object/BasicResolveResults.html#canResolveInteractively)[`emptyNounPhrase`](../object/BasicResolveResults.html#emptyNounPhrase)[`endSingleObjSlot`](../object/BasicResolveResults.html#endSingleObjSlot)[`endTopicSlot`](../object/BasicResolveResults.html#endTopicSlot)[`filterWithDistinguisher`](../object/BasicResolveResults.html#filterWithDistinguisher)[`incCommandCount`](../object/BasicResolveResults.html#incCommandCount)[`insufficientQuantity`](../object/BasicResolveResults.html#insufficientQuantity)[`noMatch`](../object/BasicResolveResults.html#noMatch)[`noMatchForAll`](../object/BasicResolveResults.html#noMatchForAll)[`noMatchForAllBut`](../object/BasicResolveResults.html#noMatchForAllBut)[`noMatchForListBut`](../object/BasicResolveResults.html#noMatchForListBut)[`noMatchForLocation`](../object/BasicResolveResults.html#noMatchForLocation)[`noMatchForPossessive`](../object/BasicResolveResults.html#noMatchForPossessive)[`noMatchForPronoun`](../object/BasicResolveResults.html#noMatchForPronoun)[`noMatchPossessive`](../object/BasicResolveResults.html#noMatchPossessive)[`noteActorSpecified`](../object/BasicResolveResults.html#noteActorSpecified)[`noteAdjEnding`](../object/BasicResolveResults.html#noteAdjEnding)[`noteBadPrep`](../object/BasicResolveResults.html#noteBadPrep)[`noteEmptyBut`](../object/BasicResolveResults.html#noteEmptyBut)[`noteIndefinite`](../object/BasicResolveResults.html#noteIndefinite)[`noteLiteral`](../object/BasicResolveResults.html#noteLiteral)[`noteMatches`](../object/BasicResolveResults.html#noteMatches)[`noteMiscWordList`](../object/BasicResolveResults.html#noteMiscWordList)[`noteNounSlots`](../object/BasicResolveResults.html#noteNounSlots)[`notePlural`](../object/BasicResolveResults.html#notePlural)[`notePronoun`](../object/BasicResolveResults.html#notePronoun)[`noteWeakPhrasing`](../object/BasicResolveResults.html#noteWeakPhrasing)[`nothingInLocation`](../object/BasicResolveResults.html#nothingInLocation)[`noVocabMatch`](../object/BasicResolveResults.html#noVocabMatch)[`reflexiveNotAllowed`](../object/BasicResolveResults.html#reflexiveNotAllowed)[`setActors`](../object/BasicResolveResults.html#setActors)[`unknownNounPhrase`](../object/BasicResolveResults.html#unknownNounPhrase)[`wrongReflexive`](../object/BasicResolveResults.html#wrongReflexive)[`zeroQuantity`](../object/BasicResolveResults.html#zeroQuantity)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowActionRemapping"></span>

`allowActionRemapping`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5740](../source/parser.t.html#5740)\]

<div class="desc">

don't allow action remapping while resolving the actor

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct ( )`

[parser.t](../file/parser.t.html)\[[5704](../source/parser.t.html#5704)\]

<div class="desc">

*no description available*

</div>

<span id="getImpliedObject"></span>

`getImpliedObject (np, resolver)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5718](../source/parser.t.html#5718)\]

<div class="desc">

set the initial actor context to the PC - this type of resolver is set
up to determine the actor context, so we don't usually know the actual
actor context yet when setting up this resolver

</div>

<span id="singleObjectRequired"></span>

`singleObjectRequired (txt)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5733](../source/parser.t.html#5733)\]

<div class="desc">

an actor phrase must address a single actor

</div>

<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (txt, matchList)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5727](../source/parser.t.html#5727)\]

<div class="desc">

there's no default for the actor - it's usually simply a syntax error
when the actor is omitted

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
