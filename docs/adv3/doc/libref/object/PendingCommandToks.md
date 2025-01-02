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

<div class="fdesc">

a pending command based on a list of tokens from an input string

`class `**`PendingCommandToks`**` :   `[`PendingCommandInfo`](../object/PendingCommandInfo.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PendingCommandToks`**  
`         `[`PendingCommandInfo`](../object/PendingCommandInfo.html)  
`                 object`  
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

` `[`tokens_`](#tokens_)`  `

Inherited from `PendingCommandInfo` :  
` `[`hasCommand`](../object/PendingCommandInfo.html#hasCommand)`  `[`issuer_`](../object/PendingCommandInfo.html#issuer_)`  `[`startOfSentence_`](../object/PendingCommandInfo.html#startOfSentence_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`executePending`](#executePending)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="tokens_"></span>

`tokens_`

[actor.t](../file/actor.t.html)\[[10515](../source/actor.t.html#10515)\]

<div class="desc">

the token list for the command

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (startOfSentence, issuer, toks)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10496](../source/actor.t.html#10496)\]

<div class="desc">

*no description available*

</div>

<span id="executePending"></span>

`executePending (targetActor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10508](../source/actor.t.html#10508)\]

<div class="desc">

Execute the command. We'll parse our tokens and execute the parsed
results.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
