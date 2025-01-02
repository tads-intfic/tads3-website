---
layout: docs
---
<span class="title">PendingCommandToks</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[10495](../source/actor.t.html#10495)\]

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



a pending command based on a list of tokens from an input string

`class `**`PendingCommandToks`**` :   `[`PendingCommandInfo`](../object/PendingCommandInfo.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PendingCommandToks`**  
[`PendingCommandInfo`](../object/PendingCommandInfo.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`tokens_`](#tokens_)

Inherited from `PendingCommandInfo` :  
[`hasCommand`](../object/PendingCommandInfo.html#hasCommand)[`issuer_`](../object/PendingCommandInfo.html#issuer_)[`startOfSentence_`](../object/PendingCommandInfo.html#startOfSentence_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`executePending`](#executePending)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="tokens_"></span>

`tokens_`

[actor.t](../file/actor.t.html)\[[10515](../source/actor.t.html#10515)\]



the token list for the command



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (startOfSentence, issuer, toks)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10496](../source/actor.t.html#10496)\]



*no description available*



<span id="executePending"></span>

`executePending (targetActor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10508](../source/actor.t.html#10508)\]



Execute the command. We'll parse our tokens and execute the parsed
results.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


