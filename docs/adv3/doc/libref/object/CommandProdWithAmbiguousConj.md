---
layout: docs
---
<span class="title">CommandProdWithAmbiguousConj</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1107](../source/parser.t.html#1107)\]

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



Match class for two command phrases separated by an ambiguous
conjunction (i.e., a conjunction that could also separate two noun
phrases). Grammar rules based on this class must set the properties
'cmd1\_' to the underlying 'predicate' production match of the first
command, and 'cmd2\_' to the underlying 'commandPhrase' production match
of the second command.

`class `**`CommandProdWithAmbiguousConj`**` :   `[`CommandProd`](../object/CommandProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandProdWithAmbiguousConj`**  
[`CommandProd`](../object/CommandProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CommandProdWithAmbiguousConj`**  
[`commandPhrase(ambiguousConj)`](../object/commandPhrase(ambiguousConj).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`cmdCounted_`](#cmdCounted_)

Inherited from `CommandProd` :  
[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`countCommands`](#countCommands) [`getCommandSepIndex`](#getCommandSepIndex) [`getNextCommandIndex`](#getNextCommandIndex) [`isEndOfSentence`](#isEndOfSentence) [`resolveFirstAction`](#resolveFirstAction) [`resolveNouns`](#resolveNouns)

Inherited from `CommandProd` :  
[`execActorPhrase`](../object/CommandProd.html#execActorPhrase) [`hasTargetActor`](../object/CommandProd.html#hasTargetActor)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="cmdCounted_"></span>

`cmdCounted_`

[parser.t](../file/parser.t.html)\[[1137](../source/parser.t.html#1137)\]



counter: have we counted our command in the results object yet?



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="countCommands"></span>

`countCommands (results)`

[parser.t](../file/parser.t.html)\[[1126](../source/parser.t.html#1126)\]



count our commands



<span id="getCommandSepIndex"></span>

`getCommandSepIndex ( )`

[parser.t](../file/parser.t.html)\[[1159](../source/parser.t.html#1159)\]



Get the token index of the first command separator token. This is the
first token that is not part of the underlying command.



<span id="getNextCommandIndex"></span>

`getNextCommandIndex ( )`

[parser.t](../file/parser.t.html)\[[1169](../source/parser.t.html#1169)\]



get the token index of the next command - this is simply the starting
index for our second subcommand tree



<span id="isEndOfSentence"></span>

`isEndOfSentence ( )`

[parser.t](../file/parser.t.html)\[[1146](../source/parser.t.html#1146)\]



does this command end a sentence



<span id="resolveFirstAction"></span>

`resolveFirstAction (issuingActor, targetActor)`

[parser.t](../file/parser.t.html)\[[1140](../source/parser.t.html#1140)\]



resolve my first action



<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`

[parser.t](../file/parser.t.html)\[[1108](../source/parser.t.html#1108)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


