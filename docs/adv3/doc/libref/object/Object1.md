---
layout: docs
---
<span class="title">Object</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[38](../source/systype.h.html#38)\],
[reflect.t](../file/reflect.t.html)\[[181](../source/reflect.t.html#181)\]

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



The root object class. All objects descend from this class.

*Modified in
[reflect.t](../file/reflect.t.html)\[[181](../source/reflect.t.html#181)\]:*  
Modify the basic Object class to provide a to-symbol mapping

`intrinsic class `**`Object`**` : `



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Object`**  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Object`**  
[`BigNumber`](../object/BigNumber1.html)  
[`ByteArray`](../object/ByteArray.html)  
[`CharacterSet`](../object/CharacterSet.html)  
[`Collection`](../object/Collection.html)  
[`List`](../object/List1.html)  
[`LookupTable`](../object/LookupTable.html)  
[`WeakRefLookupTable`](../object/WeakRefLookupTable.html)  
[`Vector`](../object/Vector.html)  
[`AnonFuncPtr`](../object/AnonFuncPtr.html)  
[`Dictionary`](../object/Dictionary.html)  
[`File`](../object/File.html)  
[`GrammarProd`](../object/GrammarProd.html)  
[`IntrinsicClass`](../object/IntrinsicClass.html)  
[`Iterator`](../object/Iterator.html)  
[`IndexedIterator`](../object/IndexedIterator.html)  
[`LookupTableIterator`](../object/LookupTableIterator.html)  
[`RexPattern`](../object/RexPattern.html)  
[`String`](../object/String1.html)  
[`StringComparator`](../object/StringComparator.html)  
[`TadsObject`](../object/TadsObject.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getPropList`](#getPropList) [`getPropParams`](#getPropParams) [`getSuperclassList`](#getSuperclassList) [`isClass`](#isClass) [`isTransient`](#isTransient) [`ofKind`](#ofKind) [`propDefined`](#propDefined) [`propInherited`](#propInherited) [`propType`](#propType) [`valToSymbol`](#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getPropList"></span>

`getPropList ( )`

[systype.h](../file/systype.h.html)\[[61](../source/systype.h.html#61)\]



Get a list of my directly-defined properties. When called on intrinsic
class objects, this returns a list of properties defined for instances
of the class, as well as static properties of the class.



<span id="getPropParams"></span>

`getPropParams (prop)`

[systype.h](../file/systype.h.html)\[[71](../source/systype.h.html#71)\]



get parameter list information for the given method - returns a list:
\[minimumArgc, optionalArgc, varargs\], where minimumArgc is the minimum
number of arguments, optionalArgc is the number of additional optional
arguments, and varargs is true if the function takes a varying number of
arguments greater than or equal to the minimum, nil if not.



<span id="getSuperclassList"></span>

`getSuperclassList ( )`

[systype.h](../file/systype.h.html)\[[47](../source/systype.h.html#47)\]



get the list of direct superclasses of this object



<span id="isClass"></span>

`isClass ( )`

[systype.h](../file/systype.h.html)\[[77](../source/systype.h.html#77)\]



determine if I'm a "class" object - returns true if the object was
defined with the "class" keyword, nil otherwise



<span id="isTransient"></span>

`isTransient ( )`

[systype.h](../file/systype.h.html)\[[88](../source/systype.h.html#88)\]



determine if this instance is transient



<span id="ofKind"></span>

`ofKind (cls)`

[systype.h](../file/systype.h.html)\[[44](../source/systype.h.html#44)\]



Determine if I'm an instance or subclass of the given class 'cls'. Note
that x.ofKind(x) returns true - an object is of its own kind.



<span id="propDefined"></span>

`propDefined (prop, flags, ?)`

[systype.h](../file/systype.h.html)\[[50](../source/systype.h.html#50)\]



determine if a property is defined or inherited by this object



<span id="propInherited"></span>

`propInherited (prop, origTargetObj, definingObj, flags, ?)`

[systype.h](../file/systype.h.html)\[[85](../source/systype.h.html#85)\]



Determine if a property is inherited further from the given object.
definingObj is usually the value of the 'definingobj' pseudo-variable,
and origTargetObj is usually the value of the 'targetobj'
pseudo-variable.



<span id="propType"></span>

`propType (prop)`

[systype.h](../file/systype.h.html)\[[53](../source/systype.h.html#53)\]



get the type of a property defined for this object



<span id="valToSymbol"></span>

`valToSymbol ( )`

[reflect.t](../file/reflect.t.html)\[[182](../source/reflect.t.html#182)\]



*no description available*





TADS 3 Library Manual  
Generated on 9/13/2007 from TADS version 3.0.15.2


