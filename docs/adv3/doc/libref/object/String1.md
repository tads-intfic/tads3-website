---
---
<span class="title">String</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[307](../source/systype.h.html#307)\],
[reflect.t](../file/reflect.t.html)\[[236](../source/reflect.t.html#236)\]

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

The native string type.

*Modified in
[reflect.t](../file/reflect.t.html)\[[236](../source/reflect.t.html#236)\]:*  
Modify the String intrinsic class to provide a to-symbol mapping

`intrinsic class `**`String`**` :   `[`Object`](../object/Object1.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`String`**  
`         `[`Object`](../object/Object1.html)  
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

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`endsWith`](#endsWith)`  `[`find`](#find)`  `[`findReplace`](#findReplace)`  `[`htmlify`](#htmlify)`  `[`length`](#length)`  `[`mapToByteArray`](#mapToByteArray)`  `[`startsWith`](#startsWith)`  `[`substr`](#substr)`  `[`toLower`](#toLower)`  `[`toUnicode`](#toUnicode)`  `[`toUpper`](#toUpper)`  `[`valToSymbol`](#valToSymbol)`  `

Inherited from `Object` :  
` `[`getPropList`](../object/Object1.html#getPropList)`  `[`getPropParams`](../object/Object1.html#getPropParams)`  `[`getSuperclassList`](../object/Object1.html#getSuperclassList)`  `[`isClass`](../object/Object1.html#isClass)`  `[`isTransient`](../object/Object1.html#isTransient)`  `[`ofKind`](../object/Object1.html#ofKind)`  `[`propDefined`](../object/Object1.html#propDefined)`  `[`propInherited`](../object/Object1.html#propInherited)`  `[`propType`](../object/Object1.html#propType)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="endsWith"></span>

`endsWith (str)`

[systype.h](../file/systype.h.html)\[[337](../source/systype.h.html#337)\]

<div class="desc">

determine if we end with the given string

</div>

<span id="find"></span>

`find (str, index, ?)`

[systype.h](../file/systype.h.html)\[[322](../source/systype.h.html#322)\]

<div class="desc">

find a substring

</div>

<span id="findReplace"></span>

`findReplace (origStr, newStr, flags, index, ?)`

[systype.h](../file/systype.h.html)\[[352](../source/systype.h.html#352)\]

<div class="desc">

Replace one occurrence or all occurrences of the given substring with
the given new string.

</div>

<span id="htmlify"></span>

`htmlify (flags, ?)`

[systype.h](../file/systype.h.html)\[[331](../source/systype.h.html#331)\]

<div class="desc">

htmlify a string

</div>

<span id="length"></span>

`length ( )`

[systype.h](../file/systype.h.html)\[[310](../source/systype.h.html#310)\]

<div class="desc">

get the length of the string

</div>

<span id="mapToByteArray"></span>

`mapToByteArray (charset)`

[systype.h](../file/systype.h.html)\[[346](../source/systype.h.html#346)\]

<div class="desc">

Map to a byte array, converting to the given character set. 'charset'
must be an object of intrinsic class CharacterSet; the characters in the
string will be mapped from the internal Unicode representation to the
appropriate byte representation in the given character set.

</div>

<span id="startsWith"></span>

`startsWith (str)`

[systype.h](../file/systype.h.html)\[[334](../source/systype.h.html#334)\]

<div class="desc">

determine if we start with the given string

</div>

<span id="substr"></span>

`substr (start, len, ?)`

[systype.h](../file/systype.h.html)\[[313](../source/systype.h.html#313)\]

<div class="desc">

extract a substring

</div>

<span id="toLower"></span>

`toLower ( )`

[systype.h](../file/systype.h.html)\[[319](../source/systype.h.html#319)\]

<div class="desc">

convert to lower case

</div>

<span id="toUnicode"></span>

`toUnicode (idx, ?)`

[systype.h](../file/systype.h.html)\[[328](../source/systype.h.html#328)\]

<div class="desc">

convert to a list of Unicode character codes, or get the Unicode
character code for the single character at the given index

</div>

<span id="toUpper"></span>

`toUpper ( )`

[systype.h](../file/systype.h.html)\[[316](../source/systype.h.html#316)\]

<div class="desc">

convert to upper case

</div>

<span id="valToSymbol"></span>

`valToSymbol ( )`<span class="rem">OVERRIDDEN</span>

[reflect.t](../file/reflect.t.html)\[[237](../source/reflect.t.html#237)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 9/13/2007 from TADS version 3.0.15.2

</div>
