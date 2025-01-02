---
layout: docs
---
<span class="title">RetryCommandTokensException</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[7003](../source/parser.t.html#7003)\]

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



Exception: Retry a command with new tokens. In some cases, the parser
processes a command by replacing the command with a new one and
processing the new one instead of the original. When this happens, the
parser will throw this exception, filling in newTokens\_ with the
replacement token list.

Note that this is meant to replace the current command only - this
exception effectively \*edits\* the current command. Any pending tokens
after the current command should be retained when this exception is
thrown.

`class `**`RetryCommandTokensException`**` :   `[`ParserException`](../object/ParserException.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`RetryCommandTokensException`**  
[`ParserException`](../object/ParserException.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`newTokens_`](#newTokens_)



Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)



Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException) [`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="newTokens_"></span>

`newTokens_`

[parser.t](../file/parser.t.html)\[[7016](../source/parser.t.html#7016)\]



The replacement token list. Note that this is in the same format as the
token list returned from the tokenizer, so this is a list consisting of
two sublists - one for the token strings, the other for the
corresponding token types.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (lst)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[7004](../source/parser.t.html#7004)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


