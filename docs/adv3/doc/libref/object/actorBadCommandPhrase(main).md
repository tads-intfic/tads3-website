---
layout: docs
---
<span class="title">actorBadCommandPhrase(main)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5147](../source/en_us.t.html#5147)\]

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

An actor-targeted command with a bad command phrase. This is used as a
fallback if we fail to match anything on the first attempt at parsing
the first command on a line. The point is to at least detect the target
actor phrase, if that much is valid, so that we better customize error
messages for the rest of the command.

`grammar `<span class="gramalt">[`actorBadCommandPhrase`](../object/actorBadCommandPhrase.html)`(main)`</span>` :   `[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`actorBadCommandPhrase(main)`**  
`         `[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)  
`                 `[`CommandProdWithActor`](../object/CommandProdWithActor.html)  
`                         `[`CommandProd`](../object/CommandProd.html)  
`                                 `[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
`                 `[`FirstCommandProd`](../object/FirstCommandProd.html)  
`                         `[`CommandProd`](../object/CommandProd.html)  
`                                 `[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

Inherited from `CommandProdWithActor` :  
` `[`resolvedActor_`](../object/CommandProdWithActor.html#resolvedActor_)`  `[`resolver_`](../object/CommandProdWithActor.html#resolver_)`  `

Inherited from `CommandProd` :  
` `[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

` `

` `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`resolveNouns`](#resolveNouns)`  `

` `

Inherited from `CommandProdWithActor` :  
` `[`execActorPhrase`](../object/CommandProdWithActor.html#execActorPhrase)`  `[`getActorPhrase`](../object/CommandProdWithActor.html#getActorPhrase)`  `[`getResolver`](../object/CommandProdWithActor.html#getResolver)`  `[`getTargetActor`](../object/CommandProdWithActor.html#getTargetActor)`  `[`hasTargetActor`](../object/CommandProdWithActor.html#hasTargetActor)`  `

` `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

Inherited from `FirstCommandProd` :  
` `[`countCommands`](../object/FirstCommandProd.html#countCommands)`  `[`getCommandSepIndex`](../object/FirstCommandProd.html#getCommandSepIndex)`  `[`getCommandTokens`](../object/FirstCommandProd.html#getCommandTokens)`  `[`getNextCommandIndex`](../object/FirstCommandProd.html#getNextCommandIndex)`  `[`isEndOfSentence`](../object/FirstCommandProd.html#isEndOfSentence)`  `[`resolveFirstAction`](../object/FirstCommandProd.html#resolveFirstAction)`  `

` `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[5153](../source/en_us.t.html#5153)\]

<div class="desc">

to resolve nouns, we merely resolve the actor

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
