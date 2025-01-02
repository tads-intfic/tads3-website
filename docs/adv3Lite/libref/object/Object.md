---
layout: docs
---
<span class="title">Object</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[37](../source/systype.h.html#37)\],
[misc.t](../file/misc.t.html)\[[1618](../source/misc.t.html#1618)\],
[reflect.t](../file/reflect.t.html)\[[235](../source/reflect.t.html#235)\]

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
[misc.t](../file/misc.t.html)\[[1618](../source/misc.t.html#1618)\]:*  
Add some methods to the base Object that make it \*somewhat\*
interchangeable with lists and vectors. Certain operations that are
normally specific to the collection types have obvious degenerations for
the singleton case. In particular, a singleton can be thought of as a
collection consisting of one value, so operations that iterate over a
collection degenerate to one iteration on a singleton.

*Modified in
[reflect.t](../file/reflect.t.html)\[[235](../source/reflect.t.html#235)\]:*  
Modify the basic Object class to provide a to-symbol mapping

`intrinsic class `**`Object`**` : `



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Object`**  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Object`**  
[`BigNumber`](../object/BigNumber.html)  
[`ByteArray`](../object/ByteArray.html)  
[`CharacterSet`](../object/CharacterSet.html)  
[`Collection`](../object/Collection.html)  
[`List`](../object/List.html)  
[`LookupTable`](../object/LookupTable.html)  
[`WeakRefLookupTable`](../object/WeakRefLookupTable.html)  
[`Vector`](../object/Vector.html)  
[`AnonFuncPtr`](../object/AnonFuncPtr.html)  
[`Date`](../object/Date.html)  
[`Dictionary`](../object/Dictionary.html)  
[`File`](../object/File.html)  
[`FileName`](../object/FileName.html)  
[`GrammarProd`](../object/GrammarProd.html)  
[`HTTPRequest`](../object/HTTPRequest.html)  
[`HTTPServer`](../object/HTTPServer.html)  
[`IntrinsicClass`](../object/IntrinsicClass.html)  
[`Iterator`](../object/Iterator.html)  
[`IndexedIterator`](../object/IndexedIterator.html)  
[`LookupTableIterator`](../object/LookupTableIterator.html)  
[`RexPattern`](../object/RexPattern.html)  
[`String`](../object/String.html)  
[`StringComparator`](../object/StringComparator.html)  
[`TadsObject`](../object/TadsObject.html)  
[`TemporaryFile`](../object/TemporaryFile.html)  
[`TimeZone`](../object/TimeZone.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`callInherited`](#callInherited)[`createIterator`](#createIterator)[`createLiveIterator`](#createLiveIterator)[`forEach`](#forEach)[`getPropList`](#getPropList)[`getPropParams`](#getPropParams)[`getSuperclassList`](#getSuperclassList)[`isClass`](#isClass)[`isTransient`](#isTransient)[`mapAll`](#mapAll)[`ofKind`](#ofKind)[`propDefined`](#propDefined)[`propInherited`](#propInherited)[`propType`](#propType)[`valToSymbol`](#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="callInherited"></span>

`callInherited (cl, prop, [args])`

[misc.t](../file/misc.t.html)\[[1655](../source/misc.t.html#1655)\]



Call an inherited method directly. This has the same effect that calling
'inherited cl.prop' would from within a method, but allows you to do
this from an arbitrary point \*outside\* of the object's own code. I.e.,
you can say 'obj.callInherited(cl, &prop)' and get the effect that
'inherited c.prop' would have had from within an 'obj' method.



<span id="createIterator"></span>

`createIterator ( )`

[misc.t](../file/misc.t.html)\[[1632](../source/misc.t.html#1632)\]



create an iterator



<span id="createLiveIterator"></span>

`createLiveIterator ( )`

[misc.t](../file/misc.t.html)\[[1642](../source/misc.t.html#1642)\]



create a live iterator (this allows 'foreach' to be used with an
arbitrary object, iterating once over the loop with the object value)



<span id="forEach"></span>

`forEach (func)`

[misc.t](../file/misc.t.html)\[[1626](../source/misc.t.html#1626)\]



forEach on an object simply calls the function on the object



<span id="getPropList"></span>

`getPropList ( )`

[systype.h](../file/systype.h.html)\[[60](../source/systype.h.html#60)\]



Get a list of my directly-defined properties. When called on intrinsic
class objects, this returns a list of properties defined for instances
of the class, as well as static properties of the class.



<span id="getPropParams"></span>

`getPropParams (prop)`

[systype.h](../file/systype.h.html)\[[70](../source/systype.h.html#70)\]



get parameter list information for the given method - returns a list:
\[minimumArgc, optionalArgc, varargs\], where minimumArgc is the minimum
number of arguments, optionalArgc is the number of additional optional
arguments, and varargs is true if the function takes a varying number of
arguments greater than or equal to the minimum, nil if not.



<span id="getSuperclassList"></span>

`getSuperclassList ( )`

[systype.h](../file/systype.h.html)\[[46](../source/systype.h.html#46)\]



get the list of direct superclasses of this object



<span id="isClass"></span>

`isClass ( )`

[systype.h](../file/systype.h.html)\[[76](../source/systype.h.html#76)\]



determine if I'm a "class" object - returns true if the object was
defined with the "class" keyword, nil otherwise



<span id="isTransient"></span>

`isTransient ( )`

[systype.h](../file/systype.h.html)\[[87](../source/systype.h.html#87)\]



determine if this instance is transient



<span id="mapAll"></span>

`mapAll (func)`

[misc.t](../file/misc.t.html)\[[1620](../source/misc.t.html#1620)\]



mapAll for an object simply applies a function to the object



<span id="ofKind"></span>

`ofKind (cls)`

[systype.h](../file/systype.h.html)\[[43](../source/systype.h.html#43)\]



Determine if I'm an instance or subclass of the given class 'cls'. Note
that x.ofKind(x) returns true - an object is of its own kind.



<span id="propDefined"></span>

`propDefined (prop, flags?)`

[systype.h](../file/systype.h.html)\[[49](../source/systype.h.html#49)\]



determine if a property is defined or inherited by this object



<span id="propInherited"></span>

`propInherited (prop, origTargetObj, definingObj, flags?)`

[systype.h](../file/systype.h.html)\[[84](../source/systype.h.html#84)\]



Determine if a property is inherited further from the given object.
definingObj is usually the value of the 'definingobj' pseudo-variable,
and origTargetObj is usually the value of the 'targetobj'
pseudo-variable.



<span id="propType"></span>

`propType (prop)`

[systype.h](../file/systype.h.html)\[[52](../source/systype.h.html#52)\]



get the type of a property defined for this object



<span id="valToSymbol"></span>

`valToSymbol ( )`

[reflect.t](../file/reflect.t.html)\[[236](../source/reflect.t.html#236)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


