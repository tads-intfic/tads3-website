---
layout: docs
---
<span class="title">possessiveAdjPhrase(ppApostropheS)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[6763](../source/en_us.t.html#6763)\]

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



return just the basic noun phrase part

`grammar `<span class="gramalt">[`possessiveAdjPhrase`](../object/possessiveAdjPhrase.html)`(ppApostropheS)`</span>` :   `[`LayeredNounPhraseProd`](../object/LayeredNounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`possessiveAdjPhrase(ppApostropheS)`**  
[`LayeredNounPhraseProd`](../object/LayeredNounPhraseProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isPluralPossessive`](#isPluralPossessive)



Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getOrigMainText`](#getOrigMainText) [`resolveNouns`](#resolveNouns)



Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isPluralPossessive"></span>

`isPluralPossessive`

[en_us.t](../file/en_us.t.html)\[[6785](../source/en_us.t.html#6785)\]



the possessive phrase is plural



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getOrigMainText"></span>

`getOrigMainText ( )`

[en_us.t](../file/en_us.t.html)\[[6769](../source/en_us.t.html#6769)\]



get the original text without the "'s" suffix



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[6775](../source/en_us.t.html#6775)\]



return just the basic noun phrase part





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


