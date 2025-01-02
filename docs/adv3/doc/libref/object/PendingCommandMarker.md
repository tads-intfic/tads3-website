---
layout: docs
---
<span class="title">PendingCommandMarker</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[10566](../source/actor.t.html#10566)\]

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



A pending command marker. This is not an actual pending command; rather,
it's just a queue marker. We sometimes want to synchronize some other
activity with an actor's progress through its command queue; for
example, we might want one actor to wait until another actor has
executed a particular pending action. These markers can be used for this
kind of synchronization; they move through the queue like ordinary
pending commands, so we can tell if an actor has reached a particular
command by observing the marker's progress through the queue.

`class `**`PendingCommandMarker`**` :   `[`PendingCommandInfo`](../object/PendingCommandInfo.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PendingCommandMarker`**  
[`PendingCommandInfo`](../object/PendingCommandInfo.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`hasCommand`](#hasCommand)

Inherited from `PendingCommandInfo` :  
[`issuer_`](../object/PendingCommandInfo.html#issuer_)[`startOfSentence_`](../object/PendingCommandInfo.html#startOfSentence_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `PendingCommandInfo` :  
[`construct`](../object/PendingCommandInfo.html#construct)[`executePending`](../object/PendingCommandInfo.html#executePending)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="hasCommand"></span>

`hasCommand`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10568](../source/actor.t.html#10568)\]



I have no command to execute



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


