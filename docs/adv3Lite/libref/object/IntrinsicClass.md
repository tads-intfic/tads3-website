[IntrinsicClass]{.title}[class]{.type}

[systype.h](../file/systype.h.html)\[[108](../source/systype.h.html#108)\]

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
The IntrinsicClass intrinsic class. Objects of this type represent the
intrinsic classes themselves.

`intrinsic class `**`IntrinsicClass`**` :   `[`Object`](../object/Object.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`IntrinsicClass`**\
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

` `[`isIntrinsicClass`](#isIntrinsicClass)`  `

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

[]{#isIntrinsicClass}

`isIntrinsicClass (obj)`

[systype.h](../file/systype.h.html)\[[127](../source/systype.h.html#127)\]

::: desc
Class method: is the given value an IntrinsicClass object? This returns
true if so, nil if not.

It\'s not possible to determine if an object is an IntrinsicClass object
using x.ofKind(IntrinsicClass) or via x.getSuperclassList(). This is
because those methods traverse the nominal class tree: \[1,2,3\] is a
List, and List is an Object. However, List and Object themselves are
represented by IntrinsicClass instances, and it\'s occasionally useful
to know if you\'re dealing with such an object. That\'s where this
method comes in.

This method returns nil for instances of an intrinsic class. For
example, isIntrinsicClass(\[1,2,3\]) returns nil, because \[1,2,3\] is a
List instance. If you get the superclass list for \[1,2,3\], though,
that will be \[List\], and isIntrinsicClass(List) returns true.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
