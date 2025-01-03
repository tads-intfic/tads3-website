---
layout: docs
---
<span class="title">completeNounPhraseWithAll(main)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5670](../source/en_us.t.html#5670)\]

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



"All" and "all but".

"All" is a "complete" noun phrase, because there's nothing else needed
to make it a noun phrase. We make this a special kind of complete noun
phrase because 'all' is not acceptable as a complete noun phrase in some
contexts where any of the other complete noun phrases are acceptable.

"All but" is a "terminal" noun phrase - this is a special kind of
complete noun phrase that cannot be followed by another noun phrase with
"and". "All but" is terminal because we want any and's that follow it to
be part of the exception list, so that we interpret "take all but a and
b" as excluding a and b, not as excluding a but then including b as a
separate list.

`grammar `<span class="gramalt">[`completeNounPhraseWithAll`](../object/completeNounPhraseWithAll.html)`(main)`</span>` :   `[`EverythingProd`](../object/EverythingProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`completeNounPhraseWithAll(main)`**  
[`EverythingProd`](../object/EverythingProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `EverythingProd` :  
[`filterForCollectives`](../object/EverythingProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `EverythingProd` :  
[`resolveNouns`](../object/EverythingProd.html#resolveNouns)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


