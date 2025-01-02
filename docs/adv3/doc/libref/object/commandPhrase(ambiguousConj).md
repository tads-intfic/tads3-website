<span class="title">commandPhrase(ambiguousConj)</span><span class="type">grammar</span>

[parser.t](../file/parser.t.html)\[[1188](../source/parser.t.html#1188)\]

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

the basic grammar rule for a pair of commands with an ambiguous
separator (i.e., a separator that could separate commands or
conjunctions)

`grammar `<span class="gramalt">[`commandPhrase`](../object/commandPhrase.html)`(ambiguousConj)`</span>` :   `[`CommandProdWithAmbiguousConj`](../object/CommandProdWithAmbiguousConj.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`commandPhrase(ambiguousConj)`**  
`         `[`CommandProdWithAmbiguousConj`](../object/CommandProdWithAmbiguousConj.html)  
`                 `[`CommandProd`](../object/CommandProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `CommandProdWithAmbiguousConj` :  
` `[`cmdCounted_`](../object/CommandProdWithAmbiguousConj.html#cmdCounted_)`  `

Inherited from `CommandProd` :  
` `[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `CommandProdWithAmbiguousConj` :  
` `[`countCommands`](../object/CommandProdWithAmbiguousConj.html#countCommands)`  `[`getCommandSepIndex`](../object/CommandProdWithAmbiguousConj.html#getCommandSepIndex)`  `[`getNextCommandIndex`](../object/CommandProdWithAmbiguousConj.html#getNextCommandIndex)`  `[`isEndOfSentence`](../object/CommandProdWithAmbiguousConj.html#isEndOfSentence)`  `[`resolveFirstAction`](../object/CommandProdWithAmbiguousConj.html#resolveFirstAction)`  `[`resolveNouns`](../object/CommandProdWithAmbiguousConj.html#resolveNouns)`  `

Inherited from `CommandProd` :  
` `[`execActorPhrase`](../object/CommandProd.html#execActorPhrase)`  `[`hasTargetActor`](../object/CommandProd.html#hasTargetActor)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
