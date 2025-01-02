---
layout: docs
---
<span class="title">ReflexivePronounProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1531](../source/parser.t.html#1531)\]

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

Third-person anaphoric reflexive pronouns. These refer to objects that
appeared earlier in the sentence: "ask bob about himself."

`class `**`ReflexivePronounProd`**` :   `[`PronounProd`](../object/PronounProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ReflexivePronounProd`**  
[`PronounProd`](../object/PronounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ReflexivePronounProd`**  
[`HerselfProd`](../object/HerselfProd.html)  
[`completeNounPhraseWithoutAll(herself)`](../object/completeNounPhraseWithoutAll(herself).html)  
[`HimselfProd`](../object/HimselfProd.html)  
[`completeNounPhraseWithoutAll(himself)`](../object/completeNounPhraseWithoutAll(himself).html)  
[`ItselfProd`](../object/ItselfProd.html)  
[`completeNounPhraseWithoutAll(itself)`](../object/completeNounPhraseWithoutAll(itself).html)  
[`ThemselvesProd`](../object/ThemselvesProd.html)  
[`completeNounPhraseWithoutAll(themselves)`](../object/completeNounPhraseWithoutAll(themselves).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



Inherited from `PronounProd` :  
[`isPlural`](../object/PronounProd.html#isPlural)[`isPossessive`](../object/PronounProd.html#isPossessive)[`pronounType`](../object/PronounProd.html#pronounType)

Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`checkAgreement`](#checkAgreement)[`resolveNouns`](#resolveNouns)

Inherited from `PronounProd` :  
[`checkAnaphoricBinding`](../object/PronounProd.html#checkAnaphoricBinding)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

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

<span id="checkAgreement"></span>

`checkAgreement (lst)`

[parser.t](../file/parser.t.html)\[[1591](../source/parser.t.html#1591)\]

<div class="desc">

Check that the binding we found for our reflexive pronoun agrees with
the pronoun in gender, number, and anything else that it has to agree
with. This must be defined by each concrete subclass. Note that
language-specific subclasses can and \*should\* override this to test
agreement for the local language's rules.

This should return true if we agree, nil if not.

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1532](../source/parser.t.html#1532)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
