---
layout: docs
---
<span class="title">CommandProdWithDefiniteConj</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1035](../source/parser.t.html#1035)\]

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

Match class for a command phrase that is separated from anything that
follows with an unambiguous conjunction.

Grammar rules based on this match class must set property cmd\_ to the
underlying 'predicate' production.

`class `**`CommandProdWithDefiniteConj`**` :   `[`CommandProd`](../object/CommandProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandProdWithDefiniteConj`**  
[`CommandProd`](../object/CommandProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`CommandProdWithDefiniteConj`**  
[`commandPhrase(definiteConj)`](../object/commandPhrase(definiteConj).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`cmdCounted_`](#cmdCounted_)

Inherited from `CommandProd` :  
[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`countCommands`](#countCommands)[`getCommandSepIndex`](#getCommandSepIndex)[`getNextCommandIndex`](#getNextCommandIndex)[`isEndOfSentence`](#isEndOfSentence)[`resolveFirstAction`](#resolveFirstAction)[`resolveNouns`](#resolveNouns)

Inherited from `CommandProd` :  
[`execActorPhrase`](../object/CommandProd.html#execActorPhrase)[`hasTargetActor`](../object/CommandProd.html#hasTargetActor)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cmdCounted_"></span>

`cmdCounted_`

[parser.t](../file/parser.t.html)\[[1052](../source/parser.t.html#1052)\]

<div class="desc">

counter: have we counted our command in the results object yet?

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="countCommands"></span>

`countCommands (results)`

[parser.t](../file/parser.t.html)\[[1044](../source/parser.t.html#1044)\]

<div class="desc">

count commands

</div>

<span id="getCommandSepIndex"></span>

`getCommandSepIndex ( )`

[parser.t](../file/parser.t.html)\[[1075](../source/parser.t.html#1075)\]

<div class="desc">

Get the token index of the first command separator token. This is the
first token that is not part of the underlying command.

</div>

<span id="getNextCommandIndex"></span>

`getNextCommandIndex ( )`

[parser.t](../file/parser.t.html)\[[1093](../source/parser.t.html#1093)\]

<div class="desc">

get the token index of the next command - this is the index of the next
token after our conjunction if we have one, or after our command if we
don't have a conjunction

</div>

<span id="isEndOfSentence"></span>

`isEndOfSentence ( )`

[parser.t](../file/parser.t.html)\[[1061](../source/parser.t.html#1061)\]

<div class="desc">

does this command end a sentence

</div>

<span id="resolveFirstAction"></span>

`resolveFirstAction (issuingActor, targetActor)`

[parser.t](../file/parser.t.html)\[[1055](../source/parser.t.html#1055)\]

<div class="desc">

resolve my first action

</div>

<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`

[parser.t](../file/parser.t.html)\[[1036](../source/parser.t.html#1036)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
