---
---
<span class="title">CommandProdWithActor</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[793](../source/parser.t.html#793)\]

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

A command with an actor specification. This should be instantiated with
grammar rules in a language-specific module.

Instantiating grammar rules should set property actor\_ to the actor
match tree, and cmd\_ to the underlying 'commandPhrase' production match
tree.

`class `**`CommandProdWithActor`**` :   `[`CommandProd`](../object/CommandProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandProdWithActor`**  
`         `[`CommandProd`](../object/CommandProd.html)  
`                 `[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`CommandProdWithActor`**  
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

` `[`resolvedActor_`](#resolvedActor_)`  `[`resolver_`](#resolver_)`  `

Inherited from `CommandProd` :  
` `[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execActorPhrase`](#execActorPhrase)`  `[`getActorPhrase`](#getActorPhrase)`  `[`getResolver`](#getResolver)`  `[`getTargetActor`](#getTargetActor)`  `[`hasTargetActor`](#hasTargetActor)`  `[`resolveNouns`](#resolveNouns)`  `

` `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="resolvedActor_"></span>

`resolvedActor_`

[parser.t](../file/parser.t.html)\[[872](../source/parser.t.html#872)\]

<div class="desc">

my resolved actor object

</div>

<span id="resolver_"></span>

`resolver_`

[parser.t](../file/parser.t.html)\[[875](../source/parser.t.html#875)\]

<div class="desc">

my actor resolver object

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execActorPhrase"></span>

`execActorPhrase (issuingActor)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[815](../source/parser.t.html#815)\]

<div class="desc">

Execute the target actor phrase. This is a notification, for use by
subclasses; we don't have anything we need to do in this base class
implementation.

</div>

<span id="getActorPhrase"></span>

`getActorPhrase ( )`

[parser.t](../file/parser.t.html)\[[804](../source/parser.t.html#804)\]

<div class="desc">

return my resolved actor object

</div>

<span id="getResolver"></span>

`getResolver (issuingActor)`

[parser.t](../file/parser.t.html)\[[861](../source/parser.t.html#861)\]

<div class="desc">

get or create my actor resolver

</div>

<span id="getTargetActor"></span>

`getTargetActor ( )`

[parser.t](../file/parser.t.html)\[[799](../source/parser.t.html#799)\]

<div class="desc">

this command explicitly specifies an actor

</div>

<span id="hasTargetActor"></span>

`hasTargetActor ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[794](../source/parser.t.html#794)\]

<div class="desc">

*no description available*

</div>

<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`

[parser.t](../file/parser.t.html)\[[824](../source/parser.t.html#824)\]

<div class="desc">

Resolve nouns. We'll resolve only the nouns in the target actor phrase;
we do not resolve nouns in the command phrase, because we must re-parse
the command phrase after we've finished resolving the actor phrase, and
thus we can't resolve nouns in the command phrase until after the
re-parse is completed.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
