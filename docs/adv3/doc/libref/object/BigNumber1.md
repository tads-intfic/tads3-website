---
layout: docs
---
<span class="title">BigNumber</span><span class="type">class</span>

[bignum.h](../file/bignum.h.html)\[[39](../source/bignum.h.html#39)\],
[reflect.t](../file/reflect.t.html)\[[356](../source/reflect.t.html#356)\]

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

The BigNumber intrinsic class lets you perform floating-point and
integer arithmetic with (almost) any desired precision. BigNumber uses a
decimal representation, which means that decimal values can be
represented exactly (i.e., with no rounding errors, as can happen with
IEEE 'double' and 'float' values that languages like C typically
support). BigNumber combines a varying-length mantissa with an exponent;
the length of the mantissa determines how many digits of precision a
given BigNumber can store, and the exponent lets you represent very
large or very small values with minimal storage. You can specify the
desired precision when you create a BigNumber explicitly; when BigNumber
values are created implicitly by computations, the system chooses a
precision based on the inputs to the calculations, typically equal to
the largest of the precisions of the input values.

The maximum precision for a BigNumber is about 64,000 digits, and the
exponent can range from -32768 to +32767. Since this is a decimal
exponent, this implies an absolute value range from 1.0e-32768 to
1.0e+32767. The more digits of precision stored in a given BigNumber
value, the more memory the object consumes, and the more time it takes
to perform calculations using the value.

*Modified in
[reflect.t](../file/reflect.t.html)\[[356](../source/reflect.t.html#356)\]:*  
If desired, modify the BigNumber intrinsic class to provide a to-symbol
mapping. We only include this modification if the program is compiled
with REFLECT_BIGNUM defined.

`intrinsic class `**`BigNumber`**` :   `[`Object`](../object/Object1.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BigNumber`**  
[`Object`](../object/Object1.html)  
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

[`valToSymbol`](#valToSymbol)

Inherited from `Object` :  
[`getPropList`](../object/Object1.html#getPropList)[`getPropParams`](../object/Object1.html#getPropParams)[`getSuperclassList`](../object/Object1.html#getSuperclassList)[`isClass`](../object/Object1.html#isClass)[`isTransient`](../object/Object1.html#isTransient)[`ofKind`](../object/Object1.html#ofKind)[`propDefined`](../object/Object1.html#propDefined)[`propInherited`](../object/Object1.html#propInherited)[`propType`](../object/Object1.html#propType)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="valToSymbol"></span>

`valToSymbol ( )`<span class="rem">OVERRIDDEN</span>

[reflect.t](../file/reflect.t.html)\[[357](../source/reflect.t.html#357)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 9/13/2007 from TADS version 3.0.15.2

</div>
