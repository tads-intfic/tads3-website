---
layout: docs
---
<span class="title">EmptyLiteralPhraseProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4190](../source/parser.t.html#4190)\]

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



Empty literal phrase - this serves a purpose similar to that of
EmptyNounPhraseProd, but can be used where literal phrases are required.

`class `**`EmptyLiteralPhraseProd`**` :   `[`LiteralProd`](../object/LiteralProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EmptyLiteralPhraseProd`**  
[`LiteralProd`](../object/LiteralProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`EmptyLiteralPhraseProd`**  
[`literalPhrase(empty)`](../object/literalPhrase(empty).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`newText`](#newText)



Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getLiteralText`](#getLiteralText) [`getTentativeLiteralText`](#getTentativeLiteralText) [`isEmptyPhrase`](#isEmptyPhrase)



Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="newText"></span>

`newText`

[parser.t](../file/parser.t.html)\[[4268](../source/parser.t.html#4268)\]



the response to a previous interactive query



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getLiteralText"></span>

`getLiteralText (results, action, which)`

[parser.t](../file/parser.t.html)\[[4191](../source/parser.t.html#4191)\]



*no description available*



<span id="getTentativeLiteralText"></span>

`getTentativeLiteralText ( )`

[parser.t](../file/parser.t.html)\[[4255](../source/parser.t.html#4255)\]



Tentatively get my literal text. This is used for pre-resolution when we
have another phrase we want to resolve first, but we want to provide a
tentative form of the text in the meantime. We won't attempt to ask for
more information interactively, but we'll return any information we do
have.



<span id="isEmptyPhrase"></span>

`isEmptyPhrase ( )`

[parser.t](../file/parser.t.html)\[[4265](../source/parser.t.html#4265)\]



I'm an empty phrase, unless I already have a text response
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


