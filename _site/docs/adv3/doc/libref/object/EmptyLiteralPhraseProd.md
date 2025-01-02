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

<div class="fdesc">

Empty literal phrase - this serves a purpose similar to that of
EmptyNounPhraseProd, but can be used where literal phrases are required.

`class `**`EmptyLiteralPhraseProd`**` :   `[`LiteralProd`](../object/LiteralProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`EmptyLiteralPhraseProd`**  
`         `[`LiteralProd`](../object/LiteralProd.html)  
`                 `[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`EmptyLiteralPhraseProd`**  
`         `[`literalPhrase(empty)`](../object/literalPhrase(empty).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`newText`](#newText)`  `

` `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getLiteralText`](#getLiteralText)`  `[`getTentativeLiteralText`](#getTentativeLiteralText)`  `[`isEmptyPhrase`](#isEmptyPhrase)`  `

` `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="newText"></span>

`newText`

[parser.t](../file/parser.t.html)\[[4268](../source/parser.t.html#4268)\]

<div class="desc">

the response to a previous interactive query

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getLiteralText"></span>

`getLiteralText (results, action, which)`

[parser.t](../file/parser.t.html)\[[4191](../source/parser.t.html#4191)\]

<div class="desc">

*no description available*

</div>

<span id="getTentativeLiteralText"></span>

`getTentativeLiteralText ( )`

[parser.t](../file/parser.t.html)\[[4255](../source/parser.t.html#4255)\]

<div class="desc">

Tentatively get my literal text. This is used for pre-resolution when we
have another phrase we want to resolve first, but we want to provide a
tentative form of the text in the meantime. We won't attempt to ask for
more information interactively, but we'll return any information we do
have.

</div>

<span id="isEmptyPhrase"></span>

`isEmptyPhrase ( )`

[parser.t](../file/parser.t.html)\[[4265](../source/parser.t.html#4265)\]

<div class="desc">

I'm an empty phrase, unless I already have a text response

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
