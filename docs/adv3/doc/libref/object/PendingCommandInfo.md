---
layout: docs
---
<span class="title">PendingCommandInfo</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[10474](../source/actor.t.html#10474)\]

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



Pending Command Information structure. This is an abstract base class
that we subclass for particular ways of representing the command to be
executed.

`class `**`PendingCommandInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PendingCommandInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`PendingCommandInfo`**  
[`PendingCommandAction`](../object/PendingCommandAction.html)  
[`PendingCommandMarker`](../object/PendingCommandMarker.html)  
[`PendingCommandToks`](../object/PendingCommandToks.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`hasCommand`](#hasCommand)[`issuer_`](#issuer_)[`startOfSentence_`](#startOfSentence_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`executePending`](#executePending)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="hasCommand"></span>

`hasCommand`

[actor.t](../file/actor.t.html)\[[10482](../source/actor.t.html#10482)\]



Check to see if this pending command item has a command to perform. This
returns true if we have a command, nil if we're just a queue placeholder
without any actual command to execute.



<span id="issuer_"></span>

`issuer_`

[actor.t](../file/actor.t.html)\[[10488](../source/actor.t.html#10488)\]



the issuer of the command



<span id="startOfSentence_"></span>

`startOfSentence_`

[actor.t](../file/actor.t.html)\[[10491](../source/actor.t.html#10491)\]



we're at the start of a "sentence"



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (issuer)`

[actor.t](../file/actor.t.html)\[[10475](../source/actor.t.html#10475)\]



*no description available*



<span id="executePending"></span>

`executePending (targetActor)`

[actor.t](../file/actor.t.html)\[[10485](../source/actor.t.html#10485)\]



execute the command





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


