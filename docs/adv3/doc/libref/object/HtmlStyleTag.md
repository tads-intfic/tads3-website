---
layout: docs
---
<span class="title">HtmlStyleTag</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[789](../source/output.t.html#789)\]

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



HtmlStyleTag - this is a subclass of StyleTag that provides different
rendering depending on whether the interpreter is in HTML mode or not.
In HTML mode, we display our htmlOpenText and htmlCloseText; when not in
HTML mode, we display our plainOpenText and plainCloseText.

`class `**`HtmlStyleTag`**` :   `[`StyleTag`](../object/StyleTag.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`HtmlStyleTag`**  
[`StyleTag`](../object/StyleTag.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`hyperlinkStyleTag`](../object/hyperlinkStyleTag.html) [`inputlineStyleTag`](../object/inputlineStyleTag.html) [`statusroomStyleTag`](../object/statusroomStyleTag.html) [`statusscoreStyleTag`](../object/statusscoreStyleTag.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`closeText`](#closeText) [`htmlCloseText`](#htmlCloseText) [`htmlOpenText`](#htmlOpenText) [`openText`](#openText) [`plainCloseText`](#plainCloseText) [`plainOpenText`](#plainOpenText)

Inherited from `StyleTag` :  
[`tagName`](../object/StyleTag.html#tagName)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="closeText"></span>

`closeText`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[792](../source/output.t.html#792)\]



*no description available*



<span id="htmlCloseText"></span>

`htmlCloseText`

[output.t](../file/output.t.html)\[[796](../source/output.t.html#796)\]



*no description available*



<span id="htmlOpenText"></span>

`htmlOpenText`

[output.t](../file/output.t.html)\[[795](../source/output.t.html#795)\]



our HTML-mode opening and closing text



<span id="openText"></span>

`openText`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[790](../source/output.t.html#790)\]



*no description available*



<span id="plainCloseText"></span>

`plainCloseText`

[output.t](../file/output.t.html)\[[800](../source/output.t.html#800)\]



*no description available*



<span id="plainOpenText"></span>

`plainOpenText`

[output.t](../file/output.t.html)\[[799](../source/output.t.html#799)\]



our plain (non-HTML) opening and closing text



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


