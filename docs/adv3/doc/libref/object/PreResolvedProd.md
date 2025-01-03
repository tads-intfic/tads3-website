---
layout: docs
---
<span class="title">PreResolvedProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1856](../source/parser.t.html#1856)\]

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



Pre-resolved phrase production. This isn't normally used in any actual
grammar; instead, this is for use when building actions
programmatically. This allows us to fill in an action tree when we
already know the object we want to resolve.

`class `**`PreResolvedProd`**` :   `[`BasicProd`](../object/BasicProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PreResolvedProd`**  
[`BasicProd`](../object/BasicProd.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`obj_`](#obj_)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`resolveNouns`](#resolveNouns)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="obj_"></span>

`obj_`

[parser.t](../file/parser.t.html)\[[1886](../source/parser.t.html#1886)\]



Our pre-resolved object result. This is a list containing a single
ResolveInfo representing our resolved object, since this is the form
required by callers of resolveNouns.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (obj)`

[parser.t](../file/parser.t.html)\[[1857](../source/parser.t.html#1857)\]



*no description available*



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[1875](../source/parser.t.html#1875)\]



resolve the nouns: this is easy, since we started out resolved
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


