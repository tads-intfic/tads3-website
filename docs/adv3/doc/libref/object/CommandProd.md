---
layout: docs
---
<span class="title">CommandProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[658](../source/parser.t.html#658)\]

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



The base class for commands. A command is the root of the grammar match
tree for a single action. A command line can consist of a number of
commands joined with command separators; in English, command separators
are things like periods, semicolons, commas, and the words "and" and
"then".

`class `**`CommandProd`**` :   `[`BasicProd`](../object/BasicProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandProd`**  
[`BasicProd`](../object/BasicProd.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CommandProd`**  
[`CommandProdWithActor`](../object/CommandProdWithActor.html)  
[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)  
[`actorBadCommandPhrase(main)`](../object/actorBadCommandPhrase(main).html)  
[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)  
[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)  
[`CommandProdWithAmbiguousConj`](../object/CommandProdWithAmbiguousConj.html)  
[`commandPhrase(ambiguousConj)`](../object/commandPhrase(ambiguousConj).html)  
[`CommandProdWithDefiniteConj`](../object/CommandProdWithDefiniteConj.html)  
[`commandPhrase(definiteConj)`](../object/commandPhrase(definiteConj).html)  
[`FirstCommandProd`](../object/FirstCommandProd.html)  
[`firstCommandPhrase(commandOnly)`](../object/firstCommandPhrase(commandOnly).html)  
[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)  
[`actorBadCommandPhrase(main)`](../object/actorBadCommandPhrase(main).html)  
[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)  
[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`getActorPhrase`](#getActorPhrase)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execActorPhrase`](#execActorPhrase)[`hasTargetActor`](#hasTargetActor)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="getActorPhrase"></span>

`getActorPhrase`

[parser.t](../file/parser.t.html)\[[674](../source/parser.t.html#674)\]



Get the match tree for the target actor phrase, if any. By default, we
have no target actor phrase, so just return nil.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execActorPhrase"></span>

`execActorPhrase (issuingActor)`

[parser.t](../file/parser.t.html)\[[683](../source/parser.t.html#683)\]



"Execute" the actor phrase. This lets us know that the parser has
decided to use our phrasing to specify the target actor. We're not
required to do anything here; it's just a notification for subclass use.
Since we don't have a target actor phrase at all, we obviously don't
need to do anything here.



<span id="hasTargetActor"></span>

`hasTargetActor ( )`

[parser.t](../file/parser.t.html)\[[659](../source/parser.t.html#659)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


