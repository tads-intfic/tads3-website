<span class="title">firstCommandPhrase(askTellActorTo)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5107](../source/en_us.t.html#5107)\]

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

flag that the actor's being addressed in the second person

`grammar `<span class="gramalt">[`firstCommandPhrase`](../object/firstCommandPhrase.html)`(askTellActorTo)`</span>` :   `[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`firstCommandPhrase(askTellActorTo)`**  
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

` `[`execActorPhrase`](#execActorPhrase)`  `

` `

Inherited from `CommandProdWithActor` :  
` `[`getActorPhrase`](../object/CommandProdWithActor.html#getActorPhrase)`  `[`getResolver`](../object/CommandProdWithActor.html#getResolver)`  `[`getTargetActor`](../object/CommandProdWithActor.html#getTargetActor)`  `[`hasTargetActor`](../object/CommandProdWithActor.html#hasTargetActor)`  `[`resolveNouns`](../object/CommandProdWithActor.html#resolveNouns)`  `

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

<span id="execActorPhrase"></span>

`execActorPhrase (issuingActor)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[5113](../source/en_us.t.html#5113)\]

<div class="desc">

"execute" the target actor phrase

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>