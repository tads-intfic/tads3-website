---
layout: docs
---
<span class="title">FirstCommandProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[691](../source/parser.t.html#691)\]

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

A first-on-line command. The first command on a command line can
optionally start with an actor specification, to give orders to the
actor.

`class `**`FirstCommandProd`**` :   `[`CommandProd`](../object/CommandProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`FirstCommandProd`**  
`         `[`CommandProd`](../object/CommandProd.html)  
`                 `[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`FirstCommandProd`**  
`         `[`firstCommandPhrase(commandOnly)`](../object/firstCommandPhrase(commandOnly).html)  
`         `[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)  
`                 `[`actorBadCommandPhrase(main)`](../object/actorBadCommandPhrase(main).html)  
`                 `[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)  
`                 `[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `CommandProd` :  
` `[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`countCommands`](#countCommands)`  `[`getCommandSepIndex`](#getCommandSepIndex)`  `[`getCommandTokens`](#getCommandTokens)`  `[`getNextCommandIndex`](#getNextCommandIndex)`  `[`getTargetActor`](#getTargetActor)`  `[`isEndOfSentence`](#isEndOfSentence)`  `[`resolveFirstAction`](#resolveFirstAction)`  `[`resolveNouns`](#resolveNouns)`  `

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

<span id="countCommands"></span>

`countCommands (results)`

[parser.t](../file/parser.t.html)\[[692](../source/parser.t.html#692)\]

<div class="desc">

*no description available*

</div>

<span id="getCommandSepIndex"></span>

`getCommandSepIndex ( )`

[parser.t](../file/parser.t.html)\[[756](../source/parser.t.html#756)\]

<div class="desc">

Get the token index of the first command separator token. This is the
first token that is not part of the underlying command.

</div>

<span id="getCommandTokens"></span>

`getCommandTokens ( )`

[parser.t](../file/parser.t.html)\[[715](../source/parser.t.html#715)\]

<div class="desc">

The tokens of the entire command except for the target actor
specification. By default, we take all of the tokens starting with the
first command's first token and running to the end of the token list.
This assumes that the target actor is specified at the beginning of the
command - languages that use some other word ordering must override this
accordingly.

</div>

<span id="getNextCommandIndex"></span>

`getNextCommandIndex ( )`

[parser.t](../file/parser.t.html)\[[767](../source/parser.t.html#767)\]

<div class="desc">

get the token index of the next command - this is the index of the next
token after our conjunction if we have one, or after our command if we
don't have a conjunction

</div>

<span id="getTargetActor"></span>

`getTargetActor ( )`

[parser.t](../file/parser.t.html)\[[698](../source/parser.t.html#698)\]

<div class="desc">

count commands in the underlying command

</div>

<span id="isEndOfSentence"></span>

`isEndOfSentence ( )`

[parser.t](../file/parser.t.html)\[[746](../source/parser.t.html#746)\]

<div class="desc">

Does this command end a sentence? The exact meaning of a sentence may
vary by language; in English, a sentence ends with certain punctuation
marks (a period, a semicolon, an exclamation point).

</div>

<span id="resolveFirstAction"></span>

`resolveFirstAction (issuingActor, targetActor)`

[parser.t](../file/parser.t.html)\[[725](../source/parser.t.html#725)\]

<div class="desc">

Resolve my first action. This returns an instance of a subclass of
Action that represents the resolved action. We'll ask our first
subcommand to resolve its action.

</div>

<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`

[parser.t](../file/parser.t.html)\[[731](../source/parser.t.html#731)\]

<div class="desc">

resolve nouns in the command

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
