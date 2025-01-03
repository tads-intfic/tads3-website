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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`npcDeferredMessagesDirect`**  
[`npcDeferredMessages`](../object/npcDeferredMessages.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`ambiguousNounPhrase`](#ambiguousNounPhrase) [`askMissingObject`](#askMissingObject) [`commandNotUnderstood`](#commandNotUnderstood) [`emptyNounPhrase`](#emptyNounPhrase) [`insufficientQuantity`](#insufficientQuantity) [`noMatchCannotSee`](#noMatchCannotSee) [`noMatchForAll`](#noMatchForAll) [`noMatchForAllBut`](#noMatchForAllBut) [`noMatchNotAware`](#noMatchNotAware) [`singleObjectRequired`](#singleObjectRequired) [`uniqueObjectRequired`](#uniqueObjectRequired) [`wordIsUnknown`](#wordIsUnknown) [`zeroQuantity`](#zeroQuantity)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (actor, originalText, matchList, fullMatchList)`

[msg_neu.t](../file/msg_neu.t.html)\[[2526](../source/msg_neu.t.html#2526)\]



we found an ambiguous noun phrase, but we were unable to perform
interactive disambiguation



<span id="askMissingObject"></span>

`askMissingObject (actor, action, which)`

[msg_neu.t](../file/msg_neu.t.html)\[[2533](../source/msg_neu.t.html#2533)\]



an object phrase was missing



<span id="commandNotUnderstood"></span>

`commandNotUnderstood (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2458](../source/msg_neu.t.html#2458)\]



*no description available*



<span id="emptyNounPhrase"></span>

`emptyNounPhrase (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2488](../source/msg_neu.t.html#2488)\]



empty noun phrase ('take the')



<span id="insufficientQuantity"></span>

`insufficientQuantity (actor, txt, matchList, requiredNum)`

[msg_neu.t](../file/msg_neu.t.html)\[[2502](../source/msg_neu.t.html#2502)\]



insufficient quantity to meet a command request ('take five books')



<span id="noMatchCannotSee"></span>

`noMatchCannotSee (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2465](../source/msg_neu.t.html#2465)\]



no match for a noun phrase



<span id="noMatchForAll"></span>

`noMatchForAll (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2475](../source/msg_neu.t.html#2475)\]



no match for 'all'



<span id="noMatchForAllBut"></span>

`noMatchForAllBut (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2481](../source/msg_neu.t.html#2481)\]



nothing left for 'all' after removing 'except' items



<span id="noMatchNotAware"></span>

`noMatchNotAware (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2469](../source/msg_neu.t.html#2469)\]



*no description available*



<span id="singleObjectRequired"></span>

`singleObjectRequired (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2516](../source/msg_neu.t.html#2516)\]



a unique object is required, but multiple objects were specified



<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (actor, txt, matchList)`

[msg_neu.t](../file/msg_neu.t.html)\[[2509](../source/msg_neu.t.html#2509)\]



a unique object is required, but multiple objects were specified



<span id="wordIsUnknown"></span>

`wordIsUnknown (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2542](../source/msg_neu.t.html#2542)\]



tell the user they entered a word we don't know



<span id="zeroQuantity"></span>

`zeroQuantity (actor, txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[2495](../source/msg_neu.t.html#2495)\]



'take zero books'
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


