---
layout: docs
---
<span class="title">parserStyleTag</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[877](../source/output.t.html#877)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



\<.parser\> - style for messages explicitly from the parser.

By default, we do nothing special with these messages. Many games like
to use a distinctive notation for parser messages, to make it clear that
the messages are "meta" text that's not part of the story but rather
specific to the game mechanics; one common convention is to put parser
messages in \[square brackets\].

If the game defines a special appearance for parser messages, for
consistency it might want to use the same appearance for notification
messages displayed with the \<.notification\> tag (see
notificationStyleTag).

**`parserStyleTag`**` :   `[`StyleTag`](../object/StyleTag.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`parserStyleTag`**  
[`StyleTag`](../object/StyleTag.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`closeText`](#closeText) [`openText`](#openText)

Inherited from `StyleTag` :  
[`tagName`](../object/StyleTag.html#tagName)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  







*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="closeText"></span>

`closeText`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[879](../source/output.t.html#879)\]



*no description available*



<span id="openText"></span>

`openText`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[878](../source/output.t.html#878)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


