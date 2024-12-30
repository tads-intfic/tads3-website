[Collection]{.title}[class]{.type}

[systype.h](../file/systype.h.html)\[[142](../source/systype.h.html#142)\]

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
The native collection type - this is the base class for lists, vectors,
and other objects that represent collections of values.

`intrinsic class `**`Collection`**` :   `[`Object`](../object/Object.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Collection`**\
`         `[`Object`](../object/Object.html)\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Collection`**\
`         `[`List`](../object/List.html)\
`         `[`LookupTable`](../object/LookupTable.html)\
`                 `[`WeakRefLookupTable`](../object/WeakRefLookupTable.html)\
`         `[`Vector`](../object/Vector.html)\
`                 `[`AnonFuncPtr`](../object/AnonFuncPtr.html)\
[]{#_ObjectSummary_}

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

` `[`createIterator`](#createIterator)`  `[`createLiveIterator`](#createLiveIterator)`  `

Inherited from `Object` :\
` `[`callInherited`](../object/Object.html#callInherited)`  `[`forEach`](../object/Object.html#forEach)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`mapAll`](../object/Object.html#mapAll)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#createIterator}

`createIterator ( )`[OVERRIDDEN]{.rem}

[systype.h](../file/systype.h.html)\[[151](../source/systype.h.html#151)\]

::: desc
Create an iterator for the collection. This returns a new Iterator
object that can be used to iterate over the values in the collection.
The Iterator will use a snapshot of the collection that will never
change, even if the collection is changed after the iterator is created.
:::

[]{#createLiveIterator}

`createLiveIterator ( )`[OVERRIDDEN]{.rem}

[systype.h](../file/systype.h.html)\[[162](../source/systype.h.html#162)\]

::: desc
Create a \"live iterator\" for the collection. This returns a new
Iterator object that refers directly to the original collection; if the
original collection changes, the iterator will reflect the changes in
its iteration. As a result, the iterator is not guaranteed to visit all
of the elements in the collection if the collection changes during the
course of the iteration. If consistent results are required, use
createIterator() instead.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
