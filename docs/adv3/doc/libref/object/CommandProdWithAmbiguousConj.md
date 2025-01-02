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

<div class="fdesc">

Match class for two command phrases separated by an ambiguous
conjunction (i.e., a conjunction that could also separate two noun
phrases). Grammar rules based on this class must set the properties
'cmd1\_' to the underlying 'predicate' production match of the first
command, and 'cmd2\_' to the underlying 'commandPhrase' production match
of the second command.

`class `**`CommandProdWithAmbiguousConj`**` :   `[`CommandProd`](../object/CommandProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandProdWithAmbiguousConj`**  
`         `[`CommandProd`](../object/CommandProd.html)  
`                 `[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`CommandProdWithAmbiguousConj`**  
`         `[`commandPhrase(ambiguousConj)`](../object/commandPhrase(ambiguousConj).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`cmdCounted_`](#cmdCounted_)`  `

Inherited from `CommandProd` :  
` `[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`countCommands`](#countCommands)`  `[`getCommandSepIndex`](#getCommandSepIndex)`  `[`getNextCommandIndex`](#getNextCommandIndex)`  `[`isEndOfSentence`](#isEndOfSentence)`  `[`resolveFirstAction`](#resolveFirstAction)`  `[`resolveNouns`](#resolveNouns)`  `

Inherited from `CommandProd` :  
` `[`execActorPhrase`](../object/CommandProd.html#execActorPhrase)`  `[`hasTargetActor`](../object/CommandProd.html#hasTargetActor)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cmdCounted_"></span>

`cmdCounted_`

[parser.t](../file/parser.t.html)\[[1137](../source/parser.t.html#1137)\]

<div class="desc">

counter: have we counted our command in the results object yet?

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="countCommands"></span>

`countCommands (results)`

[parser.t](../file/parser.t.html)\[[1126](../source/parser.t.html#1126)\]

<div class="desc">

count our commands

</div>

<span id="getCommandSepIndex"></span>

`getCommandSepIndex ( )`

[parser.t](../file/parser.t.html)\[[1159](../source/parser.t.html#1159)\]

<div class="desc">

Get the token index of the first command separator token. This is the
first token that is not part of the underlying command.

</div>

<span id="getNextCommandIndex"></span>

`getNextCommandIndex ( )`

[parser.t](../file/parser.t.html)\[[1169](../source/parser.t.html#1169)\]

<div class="desc">

get the token index of the next command - this is simply the starting
index for our second subcommand tree

</div>

<span id="isEndOfSentence"></span>

`isEndOfSentence ( )`

[parser.t](../file/parser.t.html)\[[1146](../source/parser.t.html#1146)\]

<div class="desc">

does this command end a sentence

</div>

<span id="resolveFirstAction"></span>

`resolveFirstAction (issuingActor, targetActor)`

[parser.t](../file/parser.t.html)\[[1140](../source/parser.t.html#1140)\]

<div class="desc">

resolve my first action

</div>

<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`

[parser.t](../file/parser.t.html)\[[1108](../source/parser.t.html#1108)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
