<span class="title">TadsObject</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[242](../source/systype.h.html#242)\],
[debug.t](../file/debug.t.html)\[[322](../source/debug.t.html#322)\],
[signals.t](../file/signals.t.html)\[[150](../source/signals.t.html#150)\]

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

The "TADS Object" intrinsic class. All objects that the program defines
with the "class" or "object" statements descend from this class.

*Modified in
[debug.t](../file/debug.t.html)\[[322](../source/debug.t.html#322)\]:*  
Provide TadsObject with an objToString() method so that the EVALUATE
command can display some kind of name of the object via the toString()
function

*Modified in
[signals.t](../file/signals.t.html)\[[150](../source/signals.t.html#150)\]:*  
MODIFICATIONS TO TadsObject for SIGNALS EXTENSION

Add handling for emiting, handling and dispatching signals.

`intrinsic class `**`TadsObject`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TadsObject`**  
`         `[`Object`](../object/Object.html)  
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

` `[`createClone`](#createClone)`  `[`createInstance`](#createInstance)`  `[`createTransientInstance`](#createTransientInstance)`  `[`dispatchSignal`](#dispatchSignal)`  `[`emit`](#emit)`  `[`getMethod`](#getMethod)`  `[`handle`](#handle)`  `[`objToString`](#objToString)`  `[`setMethod`](#setMethod)`  `[`setSuperclassList`](#setSuperclassList)`  `

Inherited from `Object` :  
` `[`callInherited`](../object/Object.html#callInherited)`  `[`createIterator`](../object/Object.html#createIterator)`  `[`createLiveIterator`](../object/Object.html#createLiveIterator)`  `[`forEach`](../object/Object.html#forEach)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`mapAll`](../object/Object.html#mapAll)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="createClone"></span>

`createClone ( )`

[systype.h](../file/systype.h.html)\[[260](../source/systype.h.html#260)\]

<div class="desc">

Create a clone of this object. This creates an exact copy, with the same
property values, as the original. This does not call any constructors;
it merely instantiates an exact copy of the original.

Note that the clone is a "shallow" copy, which means that any objects it
references are not themselves cloned.

</div>

<span id="createInstance"></span>

`createInstance (...)`

[systype.h](../file/systype.h.html)\[[250](../source/systype.h.html#250)\]

<div class="desc">

Create an instance of this object: in other words, create a new object
whose superclass is this object. The arguments provided are passed to
the new object's constructor. This method returns a reference to the new
object.

</div>

<span id="createTransientInstance"></span>

`createTransientInstance (...)`

[systype.h](../file/systype.h.html)\[[267](../source/systype.h.html#267)\]

<div class="desc">

Create a transient instance of this object. This works just like
createInstance(), but creates a transient instance instead of an
ordinary (persistent) instance.

</div>

<span id="dispatchSignal"></span>

`dispatchSignal (sender, signal)`

[signals.t](../file/signals.t.html)\[[177](../source/signals.t.html#177)\]

<div class="desc">

Dispatch a signal to the appropriate handler method on this object. We
look up the property pointer to use on the signal's dispatchTab
LookupTable. If we find one and the property is defined on this object
then we use that property to handle the signal. Otherwise, we simply use
our catch-all generic handle(sender, signal) method.

\[SIGNALS EXTENSION\]

</div>

<span id="emit"></span>

`emit (signal, [args])`

[signals.t](../file/signals.t.html)\[[152](../source/signals.t.html#152)\]

<div class="desc">

Emit a signal \[SIGNALS EXTENSION\]

</div>

<span id="getMethod"></span>

`getMethod (prop)`

[systype.h](../file/systype.h.html)\[[330](../source/systype.h.html#330)\]

<div class="desc">

Get a method value. If the property is a method, this returns a function
pointer to the method; this does NOT evaluate the method. If the
property is not a method, this returns nil.

The returned function pointer can be called like an ordinary function,
but such a call will have no 'self' value, so the disembodied method
won't be able to refer to properties or methods of 'self'. The main use
of this method is to get a method of one object to assign as a method of
another object using setMethod().

</div>

<span id="handle"></span>

`handle (sender, signal)`

[signals.t](../file/signals.t.html)\[[164](../source/signals.t.html#164)\]

<div class="desc">

Handle a signal from sender; game code will need to override particular
instances. Note that this is a catch-all handler for signals we don't
recognize or for which more specific handlers haven't been defined.
\[SIGNALS EXTENSION\]

</div>

<span id="objToString"></span>

`objToString ( )`

[debug.t](../file/debug.t.html)\[[323](../source/debug.t.html#323)\]

<div class="desc">

*no description available*

</div>

<span id="setMethod"></span>

`setMethod (prop, func)`

[systype.h](../file/systype.h.html)\[[341](../source/systype.h.html#341)\]

<div class="desc">

Set a method value. Assigns the given function (which must be a function
pointer value) to the given property of 'self'. This effectively adds a
new method to the object.

The function can be an ordinary named function, or a method pointer
retrieved from this object or from another object with getMethod().
Anonymous functions are NOT allowed here.

</div>

<span id="setSuperclassList"></span>

`setSuperclassList (scList)`

[systype.h](../file/systype.h.html)\[[317](../source/systype.h.html#317)\]

<div class="desc">

Set the superclass list. scList is a list giving the new superclasses.
The superclasses must all be TadsObject objects, with one exception: the
list \[TadsObject\] may be passed to create an object based directly on
TadsObject. No other intrinsic classes can be used in the list, and
objects of other types cannot be used in the list.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
