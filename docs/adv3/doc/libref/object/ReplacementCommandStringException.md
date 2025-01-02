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



Replacement command string exception. Abort any current command line,
and start over with a brand new input string. Note that any pending,
unparsed tokens on the previous command line should be discarded.

`class `**`ReplacementCommandStringException`**` :   `[`ParserException`](../object/ParserException.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ReplacementCommandStringException`**  
[`ParserException`](../object/ParserException.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`issuingActor_`](#issuingActor_) [`newCommand_`](#newCommand_) [`targetActor_`](#targetActor_)



Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)



Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException) [`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="issuingActor_"></span>

`issuingActor_`

[parser.t](../file/parser.t.html)\[[7045](../source/parser.t.html#7045)\]



the actor issuing the command



<span id="newCommand_"></span>

`newCommand_`

[parser.t](../file/parser.t.html)\[[7042](../source/parser.t.html#7042)\]



the new command string



<span id="targetActor_"></span>

`targetActor_`

[parser.t](../file/parser.t.html)\[[7048](../source/parser.t.html#7048)\]



the default target actor of the command



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (str, issuer, target)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[7026](../source/parser.t.html#7026)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


