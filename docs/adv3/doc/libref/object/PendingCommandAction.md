---
layout: docs
---
<span class="title">PendingCommandAction</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[10519](../source/actor.t.html#10519)\]

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



a pending command based on a pre-resolved Action and its objects

`class `**`PendingCommandAction`**` :   `[`PendingCommandInfo`](../object/PendingCommandInfo.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PendingCommandAction`**  
[`PendingCommandInfo`](../object/PendingCommandInfo.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`action_`](#action_) [`objs_`](#objs_)

Inherited from `PendingCommandInfo` :  
[`hasCommand`](../object/PendingCommandInfo.html#hasCommand) [`issuer_`](../object/PendingCommandInfo.html#issuer_) [`startOfSentence_`](../object/PendingCommandInfo.html#startOfSentence_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`executePending`](#executePending)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="action_"></span>

`action_`

[actor.t](../file/actor.t.html)\[[10549](../source/actor.t.html#10549)\]



the resolved Action to perform



<span id="objs_"></span>

`objs_`

[actor.t](../file/actor.t.html)\[[10552](../source/actor.t.html#10552)\]



the resolved objects for the action



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (startOfSentence, issuer, action, [objs])`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10520](../source/actor.t.html#10520)\]



*no description available*



<span id="executePending"></span>

`executePending (targetActor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10530](../source/actor.t.html#10530)\]



execute the pending command
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


