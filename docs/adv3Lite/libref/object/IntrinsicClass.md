---
layout: docs
---
<span class="title">IntrinsicClass</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[108](../source/systype.h.html#108)\]

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

The IntrinsicClass intrinsic class. Objects of this type represent the
intrinsic classes themselves.

`intrinsic class `**`IntrinsicClass`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`IntrinsicClass`**  
[`Object`](../object/Object.html)  
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





*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`isIntrinsicClass`](#isIntrinsicClass)

Inherited from `Object` :  
[`callInherited`](../object/Object.html#callInherited)[`createIterator`](../object/Object.html#createIterator)[`createLiveIterator`](../object/Object.html#createLiveIterator)[`forEach`](../object/Object.html#forEach)[`getPropList`](../object/Object.html#getPropList)[`getPropParams`](../object/Object.html#getPropParams)[`getSuperclassList`](../object/Object.html#getSuperclassList)[`isClass`](../object/Object.html#isClass)[`isTransient`](../object/Object.html#isTransient)[`mapAll`](../object/Object.html#mapAll)[`ofKind`](../object/Object.html#ofKind)[`propDefined`](../object/Object.html#propDefined)[`propInherited`](../object/Object.html#propInherited)[`propType`](../object/Object.html#propType)[`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="isIntrinsicClass"></span>

`isIntrinsicClass (obj)`

[systype.h](../file/systype.h.html)\[[127](../source/systype.h.html#127)\]

<div class="desc">

Class method: is the given value an IntrinsicClass object? This returns
true if so, nil if not.

It's not possible to determine if an object is an IntrinsicClass object
using x.ofKind(IntrinsicClass) or via x.getSuperclassList(). This is
because those methods traverse the nominal class tree: \[1,2,3\] is a
List, and List is an Object. However, List and Object themselves are
represented by IntrinsicClass instances, and it's occasionally useful to
know if you're dealing with such an object. That's where this method
comes in.

This method returns nil for instances of an intrinsic class. For
example, isIntrinsicClass(\[1,2,3\]) returns nil, because \[1,2,3\] is a
List instance. If you get the superclass list for \[1,2,3\], though,
that will be \[List\], and isIntrinsicClass(List) returns true.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
