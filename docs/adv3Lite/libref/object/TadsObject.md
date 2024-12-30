[TadsObject]{.title}[class]{.type}

[systype.h](../file/systype.h.html)\[[242](../source/systype.h.html#242)\],
[debug.t](../file/debug.t.html)\[[322](../source/debug.t.html#322)\],
[signals.t](../file/signals.t.html)\[[150](../source/signals.t.html#150)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The \"TADS Object\" intrinsic class. All objects that the program
defines with the \"class\" or \"object\" statements descend from this
class.

*Modified in
[debug.t](../file/debug.t.html)\[[322](../source/debug.t.html#322)\]:*\
Provide TadsObject with an objToString() method so that the EVALUATE
command can display some kind of name of the object via the toString()
function

*Modified in
[signals.t](../file/signals.t.html)\[[150](../source/signals.t.html#150)\]:*\
MODIFICATIONS TO TadsObject for SIGNALS EXTENSION

Add handling for emiting, handling and dispatching signals.

`intrinsic class `**`TadsObject`**` :   `[`Object`](../object/Object.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TadsObject`**\
`         `[`Object`](../object/Object.html)\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`createClone`](#createClone)`  `[`createInstance`](#createInstance)`  `[`createTransientInstance`](#createTransientInstance)`  `[`dispatchSignal`](#dispatchSignal)`  `[`emit`](#emit)`  `[`getMethod`](#getMethod)`  `[`handle`](#handle)`  `[`objToString`](#objToString)`  `[`setMethod`](#setMethod)`  `[`setSuperclassList`](#setSuperclassList)`  `

Inherited from `Object` :\
` `[`callInherited`](../object/Object.html#callInherited)`  `[`createIterator`](../object/Object.html#createIterator)`  `[`createLiveIterator`](../object/Object.html#createLiveIterator)`  `[`forEach`](../object/Object.html#forEach)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`mapAll`](../object/Object.html#mapAll)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#createClone}

`createClone ( )`

[systype.h](../file/systype.h.html)\[[260](../source/systype.h.html#260)\]

::: desc
Create a clone of this object. This creates an exact copy, with the same
property values, as the original. This does not call any constructors;
it merely instantiates an exact copy of the original.

Note that the clone is a \"shallow\" copy, which means that any objects
it references are not themselves cloned.
:::

[]{#createInstance}

`createInstance (...)`

[systype.h](../file/systype.h.html)\[[250](../source/systype.h.html#250)\]

::: desc
Create an instance of this object: in other words, create a new object
whose superclass is this object. The arguments provided are passed to
the new object\'s constructor. This method returns a reference to the
new object.
:::

[]{#createTransientInstance}

`createTransientInstance (...)`

[systype.h](../file/systype.h.html)\[[267](../source/systype.h.html#267)\]

::: desc
Create a transient instance of this object. This works just like
createInstance(), but creates a transient instance instead of an
ordinary (persistent) instance.
:::

[]{#dispatchSignal}

`dispatchSignal (sender, signal)`

[signals.t](../file/signals.t.html)\[[177](../source/signals.t.html#177)\]

::: desc
Dispatch a signal to the appropriate handler method on this object. We
look up the property pointer to use on the signal\'s dispatchTab
LookupTable. If we find one and the property is defined on this object
then we use that property to handle the signal. Otherwise, we simply use
our catch-all generic handle(sender, signal) method.

\[SIGNALS EXTENSION\]
:::

[]{#emit}

`emit (signal, [args])`

[signals.t](../file/signals.t.html)\[[152](../source/signals.t.html#152)\]

::: desc
Emit a signal \[SIGNALS EXTENSION\]
:::

[]{#getMethod}

`getMethod (prop)`

[systype.h](../file/systype.h.html)\[[330](../source/systype.h.html#330)\]

::: desc
Get a method value. If the property is a method, this returns a function
pointer to the method; this does NOT evaluate the method. If the
property is not a method, this returns nil.

The returned function pointer can be called like an ordinary function,
but such a call will have no \'self\' value, so the disembodied method
won\'t be able to refer to properties or methods of \'self\'. The main
use of this method is to get a method of one object to assign as a
method of another object using setMethod().
:::

[]{#handle}

`handle (sender, signal)`

[signals.t](../file/signals.t.html)\[[164](../source/signals.t.html#164)\]

::: desc
Handle a signal from sender; game code will need to override particular
instances. Note that this is a catch-all handler for signals we don\'t
recognize or for which more specific handlers haven\'t been defined.
\[SIGNALS EXTENSION\]
:::

[]{#objToString}

`objToString ( )`

[debug.t](../file/debug.t.html)\[[323](../source/debug.t.html#323)\]

::: desc
*no description available*
:::

[]{#setMethod}

`setMethod (prop, func)`

[systype.h](../file/systype.h.html)\[[341](../source/systype.h.html#341)\]

::: desc
Set a method value. Assigns the given function (which must be a function
pointer value) to the given property of \'self\'. This effectively adds
a new method to the object.

The function can be an ordinary named function, or a method pointer
retrieved from this object or from another object with getMethod().
Anonymous functions are NOT allowed here.
:::

[]{#setSuperclassList}

`setSuperclassList (scList)`

[systype.h](../file/systype.h.html)\[[317](../source/systype.h.html#317)\]

::: desc
Set the superclass list. scList is a list giving the new superclasses.
The superclasses must all be TadsObject objects, with one exception: the
list \[TadsObject\] may be passed to create an object based directly on
TadsObject. No other intrinsic classes can be used in the list, and
objects of other types cannot be used in the list.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
