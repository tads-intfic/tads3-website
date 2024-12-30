[Object]{.title}[class]{.type}

[systype.h](../file/systype.h.html)\[[37](../source/systype.h.html#37)\],
[misc.t](../file/misc.t.html)\[[1618](../source/misc.t.html#1618)\],
[reflect.t](../file/reflect.t.html)\[[235](../source/reflect.t.html#235)\]

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
The root object class. All objects descend from this class.

*Modified in
[misc.t](../file/misc.t.html)\[[1618](../source/misc.t.html#1618)\]:*\
Add some methods to the base Object that make it \*somewhat\*
interchangeable with lists and vectors. Certain operations that are
normally specific to the collection types have obvious degenerations for
the singleton case. In particular, a singleton can be thought of as a
collection consisting of one value, so operations that iterate over a
collection degenerate to one iteration on a singleton.

*Modified in
[reflect.t](../file/reflect.t.html)\[[235](../source/reflect.t.html#235)\]:*\
Modify the basic Object class to provide a to-symbol mapping

`intrinsic class `**`Object`**` : `
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Object`**\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Object`**\
`         `[`BigNumber`](../object/BigNumber.html)\
`         `[`ByteArray`](../object/ByteArray.html)\
`         `[`CharacterSet`](../object/CharacterSet.html)\
`         `[`Collection`](../object/Collection.html)\
`                 `[`List`](../object/List.html)\
`                 `[`LookupTable`](../object/LookupTable.html)\
`                         `[`WeakRefLookupTable`](../object/WeakRefLookupTable.html)\
`                 `[`Vector`](../object/Vector.html)\
`                         `[`AnonFuncPtr`](../object/AnonFuncPtr.html)\
`         `[`Date`](../object/Date.html)\
`         `[`Dictionary`](../object/Dictionary.html)\
`         `[`File`](../object/File.html)\
`         `[`FileName`](../object/FileName.html)\
`         `[`GrammarProd`](../object/GrammarProd.html)\
`         `[`HTTPRequest`](../object/HTTPRequest.html)\
`         `[`HTTPServer`](../object/HTTPServer.html)\
`         `[`IntrinsicClass`](../object/IntrinsicClass.html)\
`         `[`Iterator`](../object/Iterator.html)\
`                 `[`IndexedIterator`](../object/IndexedIterator.html)\
`                 `[`LookupTableIterator`](../object/LookupTableIterator.html)\
`         `[`RexPattern`](../object/RexPattern.html)\
`         `[`String`](../object/String.html)\
`         `[`StringComparator`](../object/StringComparator.html)\
`         `[`TadsObject`](../object/TadsObject.html)\
`         `[`TemporaryFile`](../object/TemporaryFile.html)\
`         `[`TimeZone`](../object/TimeZone.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`callInherited`](#callInherited)`  `[`createIterator`](#createIterator)`  `[`createLiveIterator`](#createLiveIterator)`  `[`forEach`](#forEach)`  `[`getPropList`](#getPropList)`  `[`getPropParams`](#getPropParams)`  `[`getSuperclassList`](#getSuperclassList)`  `[`isClass`](#isClass)`  `[`isTransient`](#isTransient)`  `[`mapAll`](#mapAll)`  `[`ofKind`](#ofKind)`  `[`propDefined`](#propDefined)`  `[`propInherited`](#propInherited)`  `[`propType`](#propType)`  `[`valToSymbol`](#valToSymbol)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#callInherited}

`callInherited (cl, prop, [args])`

[misc.t](../file/misc.t.html)\[[1655](../source/misc.t.html#1655)\]

::: desc
Call an inherited method directly. This has the same effect that calling
\'inherited cl.prop\' would from within a method, but allows you to do
this from an arbitrary point \*outside\* of the object\'s own code.
I.e., you can say \'obj.callInherited(cl, &prop)\' and get the effect
that \'inherited c.prop\' would have had from within an \'obj\' method.
:::

[]{#createIterator}

`createIterator ( )`

[misc.t](../file/misc.t.html)\[[1632](../source/misc.t.html#1632)\]

::: desc
create an iterator
:::

[]{#createLiveIterator}

`createLiveIterator ( )`

[misc.t](../file/misc.t.html)\[[1642](../source/misc.t.html#1642)\]

::: desc
create a live iterator (this allows \'foreach\' to be used with an
arbitrary object, iterating once over the loop with the object value)
:::

[]{#forEach}

`forEach (func)`

[misc.t](../file/misc.t.html)\[[1626](../source/misc.t.html#1626)\]

::: desc
forEach on an object simply calls the function on the object
:::

[]{#getPropList}

`getPropList ( )`

[systype.h](../file/systype.h.html)\[[60](../source/systype.h.html#60)\]

::: desc
Get a list of my directly-defined properties. When called on intrinsic
class objects, this returns a list of properties defined for instances
of the class, as well as static properties of the class.
:::

[]{#getPropParams}

`getPropParams (prop)`

[systype.h](../file/systype.h.html)\[[70](../source/systype.h.html#70)\]

::: desc
get parameter list information for the given method - returns a list:
\[minimumArgc, optionalArgc, varargs\], where minimumArgc is the minimum
number of arguments, optionalArgc is the number of additional optional
arguments, and varargs is true if the function takes a varying number of
arguments greater than or equal to the minimum, nil if not.
:::

[]{#getSuperclassList}

`getSuperclassList ( )`

[systype.h](../file/systype.h.html)\[[46](../source/systype.h.html#46)\]

::: desc
get the list of direct superclasses of this object
:::

[]{#isClass}

`isClass ( )`

[systype.h](../file/systype.h.html)\[[76](../source/systype.h.html#76)\]

::: desc
determine if I\'m a \"class\" object - returns true if the object was
defined with the \"class\" keyword, nil otherwise
:::

[]{#isTransient}

`isTransient ( )`

[systype.h](../file/systype.h.html)\[[87](../source/systype.h.html#87)\]

::: desc
determine if this instance is transient
:::

[]{#mapAll}

`mapAll (func)`

[misc.t](../file/misc.t.html)\[[1620](../source/misc.t.html#1620)\]

::: desc
mapAll for an object simply applies a function to the object
:::

[]{#ofKind}

`ofKind (cls)`

[systype.h](../file/systype.h.html)\[[43](../source/systype.h.html#43)\]

::: desc
Determine if I\'m an instance or subclass of the given class \'cls\'.
Note that x.ofKind(x) returns true - an object is of its own kind.
:::

[]{#propDefined}

`propDefined (prop, flags?)`

[systype.h](../file/systype.h.html)\[[49](../source/systype.h.html#49)\]

::: desc
determine if a property is defined or inherited by this object
:::

[]{#propInherited}

`propInherited (prop, origTargetObj, definingObj, flags?)`

[systype.h](../file/systype.h.html)\[[84](../source/systype.h.html#84)\]

::: desc
Determine if a property is inherited further from the given object.
definingObj is usually the value of the \'definingobj\' pseudo-variable,
and origTargetObj is usually the value of the \'targetobj\'
pseudo-variable.
:::

[]{#propType}

`propType (prop)`

[systype.h](../file/systype.h.html)\[[52](../source/systype.h.html#52)\]

::: desc
get the type of a property defined for this object
:::

[]{#valToSymbol}

`valToSymbol ( )`

[reflect.t](../file/reflect.t.html)\[[236](../source/reflect.t.html#236)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
