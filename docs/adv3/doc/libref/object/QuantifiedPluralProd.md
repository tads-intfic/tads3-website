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

<div class="fdesc">

Quantified plural phrase.

`class `**`QuantifiedPluralProd`**` :   `[`PluralProd`](../object/PluralProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`QuantifiedPluralProd`**  
[`PluralProd`](../object/PluralProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`QuantifiedPluralProd`**  
[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)  
[`BothPluralProd`](../object/BothPluralProd.html)  
[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)  
[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)  
[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)  
[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>





Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`getQuantity`](#getQuantity)[`getVerifyKeepers`](#getVerifyKeepers)[`resolveMainPhrase`](#resolveMainPhrase)[`resolveNouns`](#resolveNouns)[`selectExactCount`](#selectExactCount)

Inherited from `PluralProd` :  
[`basicPluralResolveNouns`](../object/PluralProd.html#basicPluralResolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getQuantity"></span>

`getQuantity ( )`

[parser.t](../file/parser.t.html)\[[2242](../source/parser.t.html#2242)\]

<div class="desc">

get the quantity specified - by default, this comes from the quantifier
phrase in "quant\_"

</div>

<span id="getVerifyKeepers"></span>

`getVerifyKeepers (results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2358](../source/parser.t.html#2358)\]

<div class="desc">

Since the player explicitly told us to use a given number of matching
objects, keep the required number, logical or not.

</div>

<span id="resolveMainPhrase"></span>

`resolveMainPhrase (resolver, results)`

[parser.t](../file/parser.t.html)\[[2232](../source/parser.t.html#2232)\]

<div class="desc">

Resolve the main noun phrase. By default, we simply resolve np\_, but we
make this separately overridable to allow this class to be subclassed
for quantifying other types of plural phrases.

If this is unable to resolve the list, it can flag an appropriate error
via the results object and return nil. If this routine returns nil, our
main resolver will simply return an empty list without further flagging
of any errors.

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[2245](../source/parser.t.html#2245)\]

<div class="desc">

resolve the noun phrase

</div>

<span id="selectExactCount"></span>

`selectExactCount (lst, num, scopeList, resolver, results)`

[parser.t](../file/parser.t.html)\[[2342](../source/parser.t.html#2342)\]

<div class="desc">

Select the desired number of matches from what the normal disambiguation
filtering leaves us with.

Note that this will never be called with 'num' larger than the number in
the current list. This is only called to select a smaller subset than we
currently have.

By default, we'll simply select an arbitrary subset, since we simply
want any 'num' of the matches. This can be overridden if other behaviors
are needed.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
