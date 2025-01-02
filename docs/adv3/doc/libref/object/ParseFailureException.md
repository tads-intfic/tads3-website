---
layout: docs
---
<span class="title">ParseFailureException</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[6961](../source/parser.t.html#6961)\]

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



Parsing failure exception. This exception is parameterized with message
information describing the failure, and can be used to route the failure
notification to the issuing actor.

`class `**`ParseFailureException`**` :   `[`ParserException`](../object/ParserException.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ParseFailureException`**  
[`ParserException`](../object/ParserException.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`args_`](#args_)[`message_`](#message_)



Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`displayException`](#displayException)[`notifyActor`](#notifyActor)



Inherited from `Exception` :  
[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)[`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="args_"></span>

`args_`

[parser.t](../file/parser.t.html)\[[6988](../source/parser.t.html#6988)\]



the (varargs) parameters to the message



<span id="message_"></span>

`message_`

[parser.t](../file/parser.t.html)\[[6985](../source/parser.t.html#6985)\]



the message property ID



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (messageProp, [args])`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[6962](../source/parser.t.html#6962)\]



*no description available*



<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[6982](../source/parser.t.html#6982)\]



Tell the target actor to notify the issuing actor. We route the
notification from the target to the issuer in keeping with conversation
we're modelling: the issuer asked the target to do something, so the
target is now replying with information explaining why the target can't
do as asked.



<span id="notifyActor"></span>

`notifyActor (targetActor, issuingActor)`

[parser.t](../file/parser.t.html)\[[6970](../source/parser.t.html#6970)\]



notify the issuing actor of the problem





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


