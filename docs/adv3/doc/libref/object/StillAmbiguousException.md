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



Still Ambiguous Exception - this is thrown when the user answers a
disambiguation question with insufficient specificity, so that we still
have an ambiguous list.

`class `**`StillAmbiguousException`**` :   `[`DisambigException`](../object/DisambigException.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`StillAmbiguousException`**  
[`DisambigException`](../object/DisambigException.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`matchList_`](#matchList_)[`origText_`](#origText_)



Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)



Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException)[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)[`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="matchList_"></span>

`matchList_`

[disambig.t](../file/disambig.t.html)\[[488](../source/disambig.t.html#488)\]



the narrowed, but still ambiguous, match list



<span id="origText_"></span>

`origText_`

[disambig.t](../file/disambig.t.html)\[[491](../source/disambig.t.html#491)\]



the text of the new phrasing



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (matchList, origText)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[480](../source/disambig.t.html#480)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


