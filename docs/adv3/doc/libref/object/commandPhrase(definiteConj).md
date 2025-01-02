---
layout: docs
---
<span class="title">commandPhrase(definiteConj)</span><span class="type">grammar</span>

[parser.t](../file/parser.t.html)\[[1177](../source/parser.t.html#1177)\]

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



The basic grammar rule for an unambiguous end-of-sentence command. This
matches either a predicate with nothing following, or a predicate with
an unambiguous command-only conjunction following.

`grammar `<span class="gramalt">[`commandPhrase`](../object/commandPhrase.html)`(definiteConj)`</span>` :   `[`CommandProdWithDefiniteConj`](../object/CommandProdWithDefiniteConj.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`commandPhrase(definiteConj)`**  
[`CommandProdWithDefiniteConj`](../object/CommandProdWithDefiniteConj.html)  
[`CommandProd`](../object/CommandProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `CommandProdWithDefiniteConj` :  
[`cmdCounted_`](../object/CommandProdWithDefiniteConj.html#cmdCounted_)

Inherited from `CommandProd` :  
[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `CommandProdWithDefiniteConj` :  
[`countCommands`](../object/CommandProdWithDefiniteConj.html#countCommands)[`getCommandSepIndex`](../object/CommandProdWithDefiniteConj.html#getCommandSepIndex)[`getNextCommandIndex`](../object/CommandProdWithDefiniteConj.html#getNextCommandIndex)[`isEndOfSentence`](../object/CommandProdWithDefiniteConj.html#isEndOfSentence)[`resolveFirstAction`](../object/CommandProdWithDefiniteConj.html#resolveFirstAction)[`resolveNouns`](../object/CommandProdWithDefiniteConj.html#resolveNouns)

Inherited from `CommandProd` :  
[`execActorPhrase`](../object/CommandProd.html#execActorPhrase)[`hasTargetActor`](../object/CommandProd.html#hasTargetActor)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


