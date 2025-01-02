---
layout: docs
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



A command with an actor specification. This should be instantiated with
grammar rules in a language-specific module.

Instantiating grammar rules should set property actor\_ to the actor
match tree, and cmd\_ to the underlying 'commandPhrase' production match
tree.

`class `**`CommandProdWithActor`**` :   `[`CommandProd`](../object/CommandProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandProdWithActor`**  
[`CommandProd`](../object/CommandProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CommandProdWithActor`**  
[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)  
[`actorBadCommandPhrase(main)`](../object/actorBadCommandPhrase(main).html)  
[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)  
[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`resolvedActor_`](#resolvedActor_) [`resolver_`](#resolver_)

Inherited from `CommandProd` :  
[`getActorPhrase`](../object/CommandProd.html#getActorPhrase)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execActorPhrase`](#execActorPhrase) [`getActorPhrase`](#getActorPhrase) [`getResolver`](#getResolver) [`getTargetActor`](#getTargetActor) [`hasTargetActor`](#hasTargetActor) [`resolveNouns`](#resolveNouns)



Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="resolvedActor_"></span>

`resolvedActor_`

[parser.t](../file/parser.t.html)\[[872](../source/parser.t.html#872)\]



my resolved actor object



<span id="resolver_"></span>

`resolver_`

[parser.t](../file/parser.t.html)\[[875](../source/parser.t.html#875)\]



my actor resolver object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execActorPhrase"></span>

`execActorPhrase (issuingActor)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[815](../source/parser.t.html#815)\]



Execute the target actor phrase. This is a notification, for use by
subclasses; we don't have anything we need to do in this base class
implementation.



<span id="getActorPhrase"></span>

`getActorPhrase ( )`

[parser.t](../file/parser.t.html)\[[804](../source/parser.t.html#804)\]



return my resolved actor object



<span id="getResolver"></span>

`getResolver (issuingActor)`

[parser.t](../file/parser.t.html)\[[861](../source/parser.t.html#861)\]



get or create my actor resolver



<span id="getTargetActor"></span>

`getTargetActor ( )`

[parser.t](../file/parser.t.html)\[[799](../source/parser.t.html#799)\]



this command explicitly specifies an actor



<span id="hasTargetActor"></span>

`hasTargetActor ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[794](../source/parser.t.html#794)\]



*no description available*



<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`

[parser.t](../file/parser.t.html)\[[824](../source/parser.t.html#824)\]



Resolve nouns. We'll resolve only the nouns in the target actor phrase;
we do not resolve nouns in the command phrase, because we must re-parse
the command phrase after we've finished resolving the actor phrase, and
thus we can't resolve nouns in the command phrase until after the
re-parse is completed.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


