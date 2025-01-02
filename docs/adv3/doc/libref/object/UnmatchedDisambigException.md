---
layout: docs
---
<span class="title">UnmatchedDisambigException</span><span class="type">class</span>

[disambig.t](../file/disambig.t.html)\[[499](../source/disambig.t.html#499)\]

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



Unmatched disambiguation - we throw this when the user answers a
disambiguation question with a syntactically valid response that doesn't
refer to any of the objects in the list of choices offered.

`class `**`UnmatchedDisambigException`**` :   `[`DisambigException`](../object/DisambigException.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`UnmatchedDisambigException`**  
[`DisambigException`](../object/DisambigException.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`resp_`](#resp_)



Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)



Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException) [`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="resp_"></span>

`resp_`

[disambig.t](../file/disambig.t.html)\[[507](../source/disambig.t.html#507)\]



the response text



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (resp)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[500](../source/disambig.t.html#500)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


