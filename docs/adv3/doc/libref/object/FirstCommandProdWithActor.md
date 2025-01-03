---
layout: docs
---
<span class="title">FirstCommandProdWithActor</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[884](../source/parser.t.html#884)\]

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



First-on-line command with target actor. As with CommandProdWithActor,
instantiating grammar rules must set the property actor\_ to the actor
match tree, and cmd\_ to the underlying commandPhrase match.

`class `**`FirstCommandProdWithActor`**` :   `[`CommandProdWithActor`](../object/CommandProdWithActor.html) [`FirstCommandProd`](../object/FirstCommandProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`FirstCommandProdWithActor`**  
[`CommandProdWithActor`](../object/CommandProdWithActor.html)  
[`CommandProd`](../object/CommandProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
[`FirstCommandProd`](../object/FirstCommandProd.html)  
[`CommandProd`](../object/CommandProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`FirstCommandProdWithActor`**  
[`actorBadCommandPhrase(main)`](../object/actorBadCommandPhrase(main).html)  
[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)  
[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `CommandProdWithActor` :  
[`resolvedActor_`](../object/CommandProdWithActor.html#resolvedActor_) [`resolver_`](../object/CommandProdWithActor.html#resolver_)

Inherited from `CommandProd` :  
[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)
<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `CommandProdWithActor` :  
[`execActorPhrase`](../object/CommandProdWithActor.html#execActorPhrase) [`getActorPhrase`](../object/CommandProdWithActor.html#getActorPhrase) [`getResolver`](../object/CommandProdWithActor.html#getResolver) [`getTargetActor`](../object/CommandProdWithActor.html#getTargetActor) [`hasTargetActor`](../object/CommandProdWithActor.html#hasTargetActor) [`resolveNouns`](../object/CommandProdWithActor.html#resolveNouns)



Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `FirstCommandProd` :  
[`countCommands`](../object/FirstCommandProd.html#countCommands) [`getCommandSepIndex`](../object/FirstCommandProd.html#getCommandSepIndex) [`getCommandTokens`](../object/FirstCommandProd.html#getCommandTokens) [`getNextCommandIndex`](../object/FirstCommandProd.html#getNextCommandIndex) [`isEndOfSentence`](../object/FirstCommandProd.html#isEndOfSentence) [`resolveFirstAction`](../object/FirstCommandProd.html#resolveFirstAction)
<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


