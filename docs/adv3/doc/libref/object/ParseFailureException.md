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

<div class="fdesc">

Parsing failure exception. This exception is parameterized with message
information describing the failure, and can be used to route the failure
notification to the issuing actor.

`class `**`ParseFailureException`**` :   `[`ParserException`](../object/ParserException.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ParseFailureException`**  
`         `[`ParserException`](../object/ParserException.html)  
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

` `[`args_`](#args_)`  `[`message_`](#message_)`  `

` `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`displayException`](#displayException)`  `[`notifyActor`](#notifyActor)`  `

` `

Inherited from `Exception` :  
` `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="args_"></span>

`args_`

[parser.t](../file/parser.t.html)\[[6988](../source/parser.t.html#6988)\]

<div class="desc">

the (varargs) parameters to the message

</div>

<span id="message_"></span>

`message_`

[parser.t](../file/parser.t.html)\[[6985](../source/parser.t.html#6985)\]

<div class="desc">

the message property ID

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (messageProp, [args])`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[6962](../source/parser.t.html#6962)\]

<div class="desc">

*no description available*

</div>

<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[6982](../source/parser.t.html#6982)\]

<div class="desc">

Tell the target actor to notify the issuing actor. We route the
notification from the target to the issuer in keeping with conversation
we're modelling: the issuer asked the target to do something, so the
target is now replying with information explaining why the target can't
do as asked.

</div>

<span id="notifyActor"></span>

`notifyActor (targetActor, issuingActor)`

[parser.t](../file/parser.t.html)\[[6970](../source/parser.t.html#6970)\]

<div class="desc">

notify the issuing actor of the problem

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
