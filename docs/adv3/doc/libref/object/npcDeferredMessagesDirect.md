---
layout: docs
---
<span class="title">npcDeferredMessagesDirect</span><span class="type">object</span>

[msg_neu.t](../file/msg_neu.t.html)\[[2457](../source/msg_neu.t.html#2457)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Deferred NPC messages. We use this to report deferred messages from an
NPC to the player. A message is deferred when a parsing error occurs,
but the NPC can't talk to the player because there's no sense path to
the player. When this happens, the NPC queues the message for eventual
delivery; when a sense path appears later that lets the NPC talk to the
player, we deliver the message through this object. Since these messages
describe conditions that occurred in the past, we use the past tense to
phrase the messages.

Some messages will never be deferred:

commandNotHeard - if a command is not heard, it will never enter an
actor's command queue; the error is given immediately in response to the
command entry.

refuseCommandBusy - same as commandNotHeard

noMatchDisambig - interactive disambiguation will not happen in a
deferred response situation, so it is impossible to have an interactive
disambiguation failure.

disambigOrdinalOutOfRange - for the same reason noMatchDisambig can't be
deferred.

askDisambig - if we couldn't display a message, we definitely couldn't
perform interactive disambiguation.

askMissingObject - for the same reason that askDisambig can't be
deferred

askUnknownWord - for the same reason that askDisambig can't be deferred.

**`npcDeferredMessagesDirect`**` :   `[`npcDeferredMessages`](../object/npcDeferredMessages.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`npcDeferredMessagesDirect`**  
`         `[`npcDeferredMessages`](../object/npcDeferredMessages.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`ambiguousNounPhrase`](#ambiguousNounPhrase)`  `[`askMissingObject`](#askMissingObject)`  `[`commandNotUnderstood`](#commandNotUnderstood)`  `[`emptyNounPhrase`](#emptyNounPhrase)`  `[`insufficientQuantity`](#insufficientQuantity)`  `[`noMatchCannotSee`](#noMatchCannotSee)`  `[`noMatchForAll`](#noMatchForAll)`  `[`noMatchForAllBut`](#noMatchForAllBut)`  `[`noMatchNotAware`](#noMatchNotAware)`  `[`singleObjectRequired`](#singleObjectRequired)`  `[`uniqueObjectRequired`](#uniqueObjectRequired)`  `[`wordIsUnknown`](#wordIsUnknown)`  `[`zeroQuantity`](#zeroQuantity)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (actor, originalText, matchList, fullMatchList)`

[msg_neu.t](../file/msg_neu.t.html)\[[2526](../source/msg_neu.t.html#2526)\]

<div class="desc">

we found an ambiguous noun phrase, but we were unable to perform
interactive disambiguation

</div>

<span id="askMissingObject"></span>

`askMissingObject (actor, action, which)`

[msg_neu.t](../file/msg_neu.t.html)\[[2533](../source/msg_neu.t.html#2533)\]

<div class="desc">

an object phrase was missing

</div>

<span id="commandNotUnderstood"></span>

`commandNotUnderstood (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2458](../source/msg_neu.t.html#2458)\]

<div class="desc">

*no description available*

</div>

<span id="emptyNounPhrase"></span>

`emptyNounPhrase (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2488](../source/msg_neu.t.html#2488)\]

<div class="desc">

empty noun phrase ('take the')

</div>

<span id="insufficientQuantity"></span>

`insufficientQuantity (actor, txt, matchList, requiredNum)`

[msg_neu.t](../file/msg_neu.t.html)\[[2502](../source/msg_neu.t.html#2502)\]

<div class="desc">

insufficient quantity to meet a command request ('take five books')

</div>

<span id="noMatchCannotSee"></span>

`noMatchCannotSee (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2465](../source/msg_neu.t.html#2465)\]

<div class="desc">

no match for a noun phrase

</div>

<span id="noMatchForAll"></span>

`noMatchForAll (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2475](../source/msg_neu.t.html#2475)\]

<div class="desc">

no match for 'all'

</div>

<span id="noMatchForAllBut"></span>

`noMatchForAllBut (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2481](../source/msg_neu.t.html#2481)\]

<div class="desc">

nothing left for 'all' after removing 'except' items

</div>

<span id="noMatchNotAware"></span>

`noMatchNotAware (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2469](../source/msg_neu.t.html#2469)\]

<div class="desc">

*no description available*

</div>

<span id="singleObjectRequired"></span>

`singleObjectRequired (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2516](../source/msg_neu.t.html#2516)\]

<div class="desc">

a unique object is required, but multiple objects were specified

</div>

<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (actor, txt, matchList)`

[msg_neu.t](../file/msg_neu.t.html)\[[2509](../source/msg_neu.t.html#2509)\]

<div class="desc">

a unique object is required, but multiple objects were specified

</div>

<span id="wordIsUnknown"></span>

`wordIsUnknown (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2542](../source/msg_neu.t.html#2542)\]

<div class="desc">

tell the user they entered a word we don't know

</div>

<span id="zeroQuantity"></span>

`zeroQuantity (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2495](../source/msg_neu.t.html#2495)\]

<div class="desc">

'take zero books'

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
