---
layout: docs
---
<span class="title">QuantifiedPluralProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2221](../source/parser.t.html#2221)\]

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



Quantified plural phrase.

`class `**`QuantifiedPluralProd`**` :   `[`PluralProd`](../object/PluralProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`QuantifiedPluralProd`**  
[`PluralProd`](../object/PluralProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`QuantifiedPluralProd`**  
[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)  
[`BothPluralProd`](../object/BothPluralProd.html)  
[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)  
[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)  
[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)  
[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getQuantity`](#getQuantity)[`getVerifyKeepers`](#getVerifyKeepers)[`resolveMainPhrase`](#resolveMainPhrase)[`resolveNouns`](#resolveNouns)[`selectExactCount`](#selectExactCount)

Inherited from `PluralProd` :  
[`basicPluralResolveNouns`](../object/PluralProd.html#basicPluralResolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getQuantity"></span>

`getQuantity ( )`

[parser.t](../file/parser.t.html)\[[2242](../source/parser.t.html#2242)\]



get the quantity specified - by default, this comes from the quantifier
phrase in "quant\_"



<span id="getVerifyKeepers"></span>

`getVerifyKeepers (results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2358](../source/parser.t.html#2358)\]



Since the player explicitly told us to use a given number of matching
objects, keep the required number, logical or not.



<span id="resolveMainPhrase"></span>

`resolveMainPhrase (resolver, results)`

[parser.t](../file/parser.t.html)\[[2232](../source/parser.t.html#2232)\]



Resolve the main noun phrase. By default, we simply resolve np\_, but we
make this separately overridable to allow this class to be subclassed
for quantifying other types of plural phrases.

If this is unable to resolve the list, it can flag an appropriate error
via the results object and return nil. If this routine returns nil, our
main resolver will simply return an empty list without further flagging
of any errors.



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[2245](../source/parser.t.html#2245)\]



resolve the noun phrase



<span id="selectExactCount"></span>

`selectExactCount (lst, num, scopeList, resolver, results)`

[parser.t](../file/parser.t.html)\[[2342](../source/parser.t.html#2342)\]



Select the desired number of matches from what the normal disambiguation
filtering leaves us with.

Note that this will never be called with 'num' larger than the number in
the current list. This is only called to select a smaller subset than we
currently have.

By default, we'll simply select an arbitrary subset, since we simply
want any 'num' of the matches. This can be overridden if other behaviors
are needed.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


