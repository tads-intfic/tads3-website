---
layout: docs
---
<span class="title">TadsObject</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[242](../source/systype.h.html#242)\]

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



The "TADS Object" intrinsic class. All objects that the program defines
with the "class" or "object" statements descend from this class.

`intrinsic class `**`TadsObject`**` :   `[`Object`](../object/Object.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TadsObject`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`createClone`](#createClone) [`createInstance`](#createInstance) [`createTransientInstance`](#createTransientInstance) [`getMethod`](#getMethod) [`setMethod`](#setMethod) [`setSuperclassList`](#setSuperclassList)

Inherited from `Object` :  
[`getPropList`](../object/Object.html#getPropList) [`getPropParams`](../object/Object.html#getPropParams) [`getSuperclassList`](../object/Object.html#getSuperclassList) [`isClass`](../object/Object.html#isClass) [`isTransient`](../object/Object.html#isTransient) [`ofKind`](../object/Object.html#ofKind) [`propDefined`](../object/Object.html#propDefined) [`propInherited`](../object/Object.html#propInherited) [`propType`](../object/Object.html#propType) [`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="createClone"></span>

`createClone ( )`

[systype.h](../file/systype.h.html)\[[260](../source/systype.h.html#260)\]



Create a clone of this object. This creates an exact copy, with the same
property values, as the original. This does not call any constructors;
it merely instantiates an exact copy of the original.

Note that the clone is a "shallow" copy, which means that any objects it
references are not themselves cloned.



<span id="createInstance"></span>

`createInstance (...)`

[systype.h](../file/systype.h.html)\[[250](../source/systype.h.html#250)\]



Create an instance of this object: in other words, create a new object
whose superclass is this object. The arguments provided are passed to
the new object's constructor. This method returns a reference to the new
object.



<span id="createTransientInstance"></span>

`createTransientInstance (...)`

[systype.h](../file/systype.h.html)\[[267](../source/systype.h.html#267)\]



Create a transient instance of this object. This works just like
createInstance(), but creates a transient instance instead of an
ordinary (persistent) instance.



<span id="getMethod"></span>

`getMethod (prop)`

[systype.h](../file/systype.h.html)\[[330](../source/systype.h.html#330)\]



Get a method value. If the property is a method, this returns a function
pointer to the method; this does NOT evaluate the method. If the
property is not a method, this returns nil.

The returned function pointer can be called like an ordinary function,
but such a call will have no 'self' value, so the disembodied method
won't be able to refer to properties or methods of 'self'. The main use
of this method is to get a method of one object to assign as a method of
another object using setMethod().



<span id="setMethod"></span>

`setMethod (prop, func)`

[systype.h](../file/systype.h.html)\[[341](../source/systype.h.html#341)\]



Set a method value. Assigns the given function (which must be a function
pointer value) to the given property of 'self'. This effectively adds a
new method to the object.

The function can be an ordinary named function, or a method pointer
retrieved from this object or from another object with getMethod().
Anonymous functions are NOT allowed here.



<span id="setSuperclassList"></span>

`setSuperclassList (scList)`

[systype.h](../file/systype.h.html)\[[317](../source/systype.h.html#317)\]



Set the superclass list. scList is a list giving the new superclasses.
The superclasses must all be TadsObject objects, with one exception: the
list \[TadsObject\] may be passed to create an object based directly on
TadsObject. No other intrinsic classes can be used in the list, and
objects of other types cannot be used in the list.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


