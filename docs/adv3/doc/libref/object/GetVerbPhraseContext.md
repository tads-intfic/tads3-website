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

<div class="fdesc">

Context for Action.getVerbPhrase(). This keeps track of pronoun
antecedents in cases where we're stringing together a series of verb
phrases.

`class `**`GetVerbPhraseContext`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`GetVerbPhraseContext`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`GetVerbPhraseContext`**  
[`ListImpCtx`](../object/ListImpCtx.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`defaultGetVerbPhraseContext`](../object/defaultGetVerbPhraseContext.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`pronounObj`](#pronounObj)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`isObjPronoun`](#isObjPronoun)[`objNameObj`](#objNameObj)[`setPronounObj`](#setPronounObj)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="pronounObj"></span>

`pronounObj`

[en_us.t](../file/en_us.t.html)\[[7988](../source/en_us.t.html#7988)\]

<div class="desc">

the pronoun antecedent

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="isObjPronoun"></span>

`isObjPronoun (obj)`

[en_us.t](../file/en_us.t.html)\[[7982](../source/en_us.t.html#7982)\]

<div class="desc">

are we showing the given object pronomially?

</div>

<span id="objNameObj"></span>

`objNameObj (obj)`

[en_us.t](../file/en_us.t.html)\[[7969](../source/en_us.t.html#7969)\]

<div class="desc">

get the objective form of an object, using a pronoun as appropriate

</div>

<span id="setPronounObj"></span>

`setPronounObj (obj)`

[en_us.t](../file/en_us.t.html)\[[7985](../source/en_us.t.html#7985)\]

<div class="desc">

set the pronoun antecedent

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
