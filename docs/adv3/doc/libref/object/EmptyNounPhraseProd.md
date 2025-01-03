---
layout: docs
---
<span class="title">EmptyNounPhraseProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4028](../source/parser.t.html#4028)\]

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



An empty noun phrase production is one that matches, typically with
non-zero badness value, as a placeholder when a command is missing a
noun phrase where one is required.

Each grammar rule instance of this rule class must define the property
'responseProd' to be the production that should be used to parse any
response to an interactive prompt for the missing object.

`class `**`EmptyNounPhraseProd`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EmptyNounPhraseProd`**  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`EmptyNounPhraseProd`**  
[`ImpliedActorNounPhraseProd`](../object/ImpliedActorNounPhraseProd.html)  
[`nounList(empty)`](../object/nounList(empty).html)  
[`singleNoun(empty)`](../object/singleNoun(empty).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`asker_`](#asker_) [`fallbackResponseProd`](#fallbackResponseProd) [`newMatch`](#newMatch) [`responseProd`](#responseProd)

Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getImpliedObject`](#getImpliedObject) [`getOrigText`](#getOrigText) [`getOrigTokenList`](#getOrigTokenList) [`isEmptyPhrase`](#isEmptyPhrase) [`resolveNouns`](#resolveNouns) [`setPrompt`](#setPrompt)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="asker_"></span>

`asker_`

[parser.t](../file/parser.t.html)\[[4152](../source/parser.t.html#4152)\]



The ResolveAsker we use to generate our prompt. Use the base
ResolveAsker by default; this can be overridden when the prompt is to be
customized.



<span id="fallbackResponseProd"></span>

`fallbackResponseProd`

[parser.t](../file/parser.t.html)\[[4145](../source/parser.t.html#4145)\]



Our fallback response production - if responseProd is nil, this must be
supplied for cases where we can't get the production from the action.
This is ignored if responseProd is non-nil.



<span id="newMatch"></span>

`newMatch`

[parser.t](../file/parser.t.html)\[[4130](../source/parser.t.html#4130)\]



the new match, when we get an interactive response to a query for the
missing object



<span id="responseProd"></span>

`responseProd`

[parser.t](../file/parser.t.html)\[[4138](../source/parser.t.html#4138)\]



Our "response" production - this is the production we use to parse the
player's input in response to our disambiguation prompt. A subclass can
leave this as nil, in which case we'll attempt to get the appropriate
response production from the action.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getImpliedObject"></span>

`getImpliedObject (resolver, results)`

[parser.t](../file/parser.t.html)\[[4094](../source/parser.t.html#4094)\]



Get an implied object to automatically fill in for the missing noun
phrase. By default, we simply ask the 'results' object for the missing
object.



<span id="getOrigText"></span>

`getOrigText ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4115](../source/parser.t.html#4115)\]



Get my original text. If I have a new match tree, return the text from
the new match tree. Otherwise, we have no original text, since we're an
empty phrase.



<span id="getOrigTokenList"></span>

`getOrigTokenList ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4105](../source/parser.t.html#4105)\]



Get my tokens. If I have a new match tree, return the tokens from the
new match tree. Otherwise, we don't have any tokens, since we're empty.



<span id="isEmptyPhrase"></span>

`isEmptyPhrase ( )`

[parser.t](../file/parser.t.html)\[[4124](../source/parser.t.html#4124)\]



I'm an empty noun phrase, unless I already have a new match object.



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[4038](../source/parser.t.html#4038)\]



resolve the empty phrase



<span id="setPrompt"></span>

`setPrompt (response, asker)`

[parser.t](../file/parser.t.html)\[[4030](../source/parser.t.html#4030)\]



customize the way we generate the prompt and parse the response
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


