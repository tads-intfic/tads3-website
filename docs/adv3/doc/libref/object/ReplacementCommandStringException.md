---
layout: docs
---
<span class="title">ReplacementCommandStringException</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[7025](../source/parser.t.html#7025)\]

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

Replacement command string exception. Abort any current command line,
and start over with a brand new input string. Note that any pending,
unparsed tokens on the previous command line should be discarded.

`class `**`ReplacementCommandStringException`**` :   `[`ParserException`](../object/ParserException.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ReplacementCommandStringException`**  
[`ParserException`](../object/ParserException.html)  
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

[`issuingActor_`](#issuingActor_)[`newCommand_`](#newCommand_)[`targetActor_`](#targetActor_)



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

<span id="issuingActor_"></span>

`issuingActor_`

[parser.t](../file/parser.t.html)\[[7045](../source/parser.t.html#7045)\]

<div class="desc">

the actor issuing the command

</div>

<span id="newCommand_"></span>

`newCommand_`

[parser.t](../file/parser.t.html)\[[7042](../source/parser.t.html#7042)\]

<div class="desc">

the new command string

</div>

<span id="targetActor_"></span>

`targetActor_`

[parser.t](../file/parser.t.html)\[[7048](../source/parser.t.html#7048)\]

<div class="desc">

the default target actor of the command

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (str, issuer, target)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[7026](../source/parser.t.html#7026)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
