---
layout: docs
---
<span class="title">StillAmbiguousException</span><span class="type">class</span>

[disambig.t](../file/disambig.t.html)\[[479](../source/disambig.t.html#479)\]

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

Still Ambiguous Exception - this is thrown when the user answers a
disambiguation question with insufficient specificity, so that we still
have an ambiguous list.

`class `**`StillAmbiguousException`**` :   `[`DisambigException`](../object/DisambigException.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`StillAmbiguousException`**  
[`DisambigException`](../object/DisambigException.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`matchList_`](#matchList_)[`origText_`](#origText_)



Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)



Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException)[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)[`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="matchList_"></span>

`matchList_`

[disambig.t](../file/disambig.t.html)\[[488](../source/disambig.t.html#488)\]

<div class="desc">

the narrowed, but still ambiguous, match list

</div>

<span id="origText_"></span>

`origText_`

[disambig.t](../file/disambig.t.html)\[[491](../source/disambig.t.html#491)\]

<div class="desc">

the text of the new phrasing

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (matchList, origText)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[480](../source/disambig.t.html#480)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
