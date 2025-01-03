---
layout: docs
---
<span class="title">literalPhrase(empty)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[7228](../source/en_us.t.html#7228)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



In case we have a verb grammar rule that calls for a literal phrase, but
the player enters a command with nothing in that slot, match an empty
token list as a last resort. Since this phrasing has a badness, we won't
match it unless we don't have any better structural match.

`grammar `<span class="gramalt">[`literalPhrase`](../object/literalPhrase.html)`(empty)`</span>` :   `[`EmptyLiteralPhraseProd`](../object/EmptyLiteralPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`literalPhrase(empty)`**  
[`EmptyLiteralPhraseProd`](../object/EmptyLiteralPhraseProd.html)  
[`LiteralProd`](../object/LiteralProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `EmptyLiteralPhraseProd` :  
[`newText`](../object/EmptyLiteralPhraseProd.html#newText)



Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`resolveLiteral`](#resolveLiteral)

Inherited from `EmptyLiteralPhraseProd` :  
[`getLiteralText`](../object/EmptyLiteralPhraseProd.html#getLiteralText) [`getTentativeLiteralText`](../object/EmptyLiteralPhraseProd.html#getTentativeLiteralText) [`isEmptyPhrase`](../object/EmptyLiteralPhraseProd.html#isEmptyPhrase)



Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="resolveLiteral"></span>

`resolveLiteral (results)`

[en_us.t](../file/en_us.t.html)\[[7229](../source/en_us.t.html#7229)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


