---
layout: docs
---
<span class="title">UnboundMultiMethod</span><span class="type">class</span>

[multmeth.t](../file/multmeth.t.html)\[[413](../source/multmeth.t.html#413)\]

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



Unbound multi-method exception. This is thrown when a call to resolve a
multi-method fails to find a binding, meaning that there's no definition
of the method that matches the types of the arguments.

`class `**`UnboundMultiMethod`**` :   `[`Exception`](../object/Exception.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`UnboundMultiMethod`**  
[`Exception`](../object/Exception.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`UnboundMultiMethod`**  
[`UnboundInheritedMultiMethod`](../object/UnboundInheritedMultiMethod.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`args_`](#args_) [`func_`](#func_) [`name_`](#name_)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`displayException`](#displayException)

Inherited from `Exception` :  
[`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="args_"></span>

`args_`

[multmeth.t](../file/multmeth.t.html)\[[437](../source/multmeth.t.html#437)\]



the number of arguments



<span id="func_"></span>

`func_`

[multmeth.t](../file/multmeth.t.html)\[[431](../source/multmeth.t.html#431)\]



the base function pointer



<span id="name_"></span>

`name_`

[multmeth.t](../file/multmeth.t.html)\[[434](../source/multmeth.t.html#434)\]



the symbol name of the base function



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (func, args)`<span class="rem">OVERRIDDEN</span>

[multmeth.t](../file/multmeth.t.html)\[[414](../source/multmeth.t.html#414)\]



*no description available*



<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[multmeth.t](../file/multmeth.t.html)\[[425](../source/multmeth.t.html#425)\]



display an error message describing the exception
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


