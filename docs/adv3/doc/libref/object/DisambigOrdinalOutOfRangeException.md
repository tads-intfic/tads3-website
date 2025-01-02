<span class="title">DisambigOrdinalOutOfRangeException</span><span class="type">class</span>

[disambig.t](../file/disambig.t.html)\[[518](../source/disambig.t.html#518)\]

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

Disambiguation Ordinal Out Of Range - this is thrown when the user
answers a disambiguation question with an ordinal, but the ordinal is
outside the bounds of the offered list (for example, we ask "which book
do you mean, the red book, or the blue book?", and the user answers "the
fourth one").

`class `**`DisambigOrdinalOutOfRangeException`**` :   `[`DisambigException`](../object/DisambigException.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DisambigOrdinalOutOfRangeException`**  
`         `[`DisambigException`](../object/DisambigException.html)  
`                 `[`Exception`](../object/Exception.html)  
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

` `[`ord_`](#ord_)`  `

` `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

` `

Inherited from `Exception` :  
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="ord_"></span>

`ord_`

[disambig.t](../file/disambig.t.html)\[[526](../source/disambig.t.html#526)\]

<div class="desc">

a string giving the ordinal word entered by the user

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (ord)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[519](../source/disambig.t.html#519)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>