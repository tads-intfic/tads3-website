---
layout: docs
---
<span class="title">GetVerbPhraseContext</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[7967](../source/en_us.t.html#7967)\]

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



Context for Action.getVerbPhrase(). This keeps track of pronoun
antecedents in cases where we're stringing together a series of verb
phrases.

`class `**`GetVerbPhraseContext`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GetVerbPhraseContext`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`GetVerbPhraseContext`**  
[`ListImpCtx`](../object/ListImpCtx.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`defaultGetVerbPhraseContext`](../object/defaultGetVerbPhraseContext.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`pronounObj`](#pronounObj)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isObjPronoun`](#isObjPronoun) [`objNameObj`](#objNameObj) [`setPronounObj`](#setPronounObj)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="pronounObj"></span>

`pronounObj`

[en_us.t](../file/en_us.t.html)\[[7988](../source/en_us.t.html#7988)\]



the pronoun antecedent



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isObjPronoun"></span>

`isObjPronoun (obj)`

[en_us.t](../file/en_us.t.html)\[[7982](../source/en_us.t.html#7982)\]



are we showing the given object pronomially?



<span id="objNameObj"></span>

`objNameObj (obj)`

[en_us.t](../file/en_us.t.html)\[[7969](../source/en_us.t.html#7969)\]



get the objective form of an object, using a pronoun as appropriate



<span id="setPronounObj"></span>

`setPronounObj (obj)`

[en_us.t](../file/en_us.t.html)\[[7985](../source/en_us.t.html#7985)\]



set the pronoun antecedent
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


