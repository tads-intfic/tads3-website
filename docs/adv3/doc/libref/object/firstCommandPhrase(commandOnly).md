---
layout: docs
---
<span class="title">firstCommandPhrase(commandOnly)</span><span class="type">grammar</span>

[parser.t](../file/parser.t.html)\[[781](../source/parser.t.html#781)\]

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



Define the simplest grammar rule for a first-on-line command phrase,
which is just an ordinary command phrase. The language-specific grammar
must define any other alternatives; specifically, the language might
provide an "actor, command" syntax to direct a command to a particular
actor.

`grammar `<span class="gramalt">[`firstCommandPhrase`](../object/firstCommandPhrase.html)`(commandOnly)`</span>` :   `[`FirstCommandProd`](../object/FirstCommandProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`firstCommandPhrase(commandOnly)`**  
[`FirstCommandProd`](../object/FirstCommandProd.html)  
[`CommandProd`](../object/CommandProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







Inherited from `CommandProd` :  
[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `FirstCommandProd` :  
[`countCommands`](../object/FirstCommandProd.html#countCommands) [`getCommandSepIndex`](../object/FirstCommandProd.html#getCommandSepIndex) [`getCommandTokens`](../object/FirstCommandProd.html#getCommandTokens) [`getNextCommandIndex`](../object/FirstCommandProd.html#getNextCommandIndex) [`getTargetActor`](../object/FirstCommandProd.html#getTargetActor) [`isEndOfSentence`](../object/FirstCommandProd.html#isEndOfSentence) [`resolveFirstAction`](../object/FirstCommandProd.html#resolveFirstAction) [`resolveNouns`](../object/FirstCommandProd.html#resolveNouns)

Inherited from `CommandProd` :  
[`execActorPhrase`](../object/CommandProd.html#execActorPhrase) [`hasTargetActor`](../object/CommandProd.html#hasTargetActor)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


