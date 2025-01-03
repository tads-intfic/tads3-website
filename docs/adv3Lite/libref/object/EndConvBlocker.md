---
layout: docs
---
<span class="title">EndConvBlocker</span><span class="type">object</span>

[actor.t](../file/actor.t.html)\[[4873](../source/actor.t.html#4873)\]

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



EndConvBlocker is a mix-in class whose sole function is to define the
blockEndConv method common to Actor, ActorState and NodeEndCheck

**`EndConvBlocker`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EndConvBlocker`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`blockEndConv`](#blockEndConv)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="blockEndConv"></span>

`blockEndConv ( )`

[actor.t](../file/actor.t.html)\[[4883](../source/actor.t.html#4883)\]



Convenience method that notes that conversation has occurred on this
turn and returns nil. This is to allow us to use: \*. return
blockEndConv;

in the canEndConversation method to suppress the output of any
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


