[ScopeList]{.title}[class]{.type}

[query.t](../file/query.t.html)\[[923](../source/query.t.html#923)\]

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
A ScopeList is a helper object used to build the list of objects in
scope. This object provides methods for the common ways of adding
objects to scope.

The ScopeList isn\'t a true Collection object, but it mimics one by
providing most of the standard methods. You can use length() and the
\[\] operator to scan the list, perform a foreach or for..in loop with a
ScopeList to iterate over the items in scope, you can use find() to
check if a given object is in scope, and you can use subset() to get a
list of in-scope objects satisfying some condition.

`class `**`ScopeList`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ScopeList`**\
`         object`\
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

` `[`status_`](#status_)`  `[`vec_`](#vec_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`add`](#add)`  `[`addAll`](#addAll)`  `[`addOnly`](#addOnly)`  `[`addSelfIlluminatingWithin`](#addSelfIlluminatingWithin)`  `[`addWithin`](#addWithin)`  `[`close`](#close)`  `[`createIterator`](#createIterator)`  `[`createLiveIterator`](#createLiveIterator)`  `[`find`](#find)`  `[`length`](#length)`  `[`subset`](#subset)`  `[`toList`](#toList)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#status_}

`status_`

[query.t](../file/query.t.html)\[[1045](../source/query.t.html#1045)\]

::: desc
A LookupTable with the objects already added to the list. We use this to
avoid redundantly scanning containment trees for objects that we\'ve
already added. For each object, we set status\_\[obj\] to a status
indicator:

\
nil (unset) - the object has never been visited\
1 - we\'ve added the object only, not its contents\
2 - we\'ve added the object and its contents
:::

[]{#vec_}

`vec_`

[query.t](../file/query.t.html)\[[1033](../source/query.t.html#1033)\]

::: desc
a vector with the objects in scope
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#add}

`add (obj)`

[query.t](../file/query.t.html)\[[927](../source/query.t.html#927)\]

::: desc
Add an object and its contents to the scope.
:::

[]{#addAll}

`addAll (lst)`

[query.t](../file/query.t.html)\[[957](../source/query.t.html#957)\]

::: desc
Add all of the objects in the given list
:::

[]{#addOnly}

`addOnly (obj)`

[query.t](../file/query.t.html)\[[985](../source/query.t.html#985)\]

::: desc
Add a single object to the scope. This doesn\'t add anything related to
the object (such as its contents) - just the object itself.
:::

[]{#addSelfIlluminatingWithin}

`addSelfIlluminatingWithin (obj)`

[query.t](../file/query.t.html)\[[975](../source/query.t.html#975)\]

::: desc
add each self-illuminating object in the interior contents
:::

[]{#addWithin}

`addWithin (obj)`

[query.t](../file/query.t.html)\[[967](../source/query.t.html#967)\]

::: desc
Add the interior contents of an object to the scope. This adds only the
contents, not the object itself.
:::

[]{#close}

`close ( )`

[query.t](../file/query.t.html)\[[1005](../source/query.t.html#1005)\]

::: desc
\"close\" the scope list - this converts the vector to a list
:::

[]{#createIterator}

`createIterator ( )`

[query.t](../file/query.t.html)\[[1027](../source/query.t.html#1027)\]

::: desc
create an iterator, for foreach()
:::

[]{#createLiveIterator}

`createLiveIterator ( )`

[query.t](../file/query.t.html)\[[1030](../source/query.t.html#1030)\]

::: desc
create a live iterator
:::

[]{#find}

`find (obj)`

[query.t](../file/query.t.html)\[[1018](../source/query.t.html#1018)\]

::: desc
is the given object in scope?
:::

[]{#length}

`length ( )`

[query.t](../file/query.t.html)\[[1012](../source/query.t.html#1012)\]

::: desc
get the number of items in scope
:::

[]{#subset}

`subset (func)`

[query.t](../file/query.t.html)\[[1021](../source/query.t.html#1021)\]

::: desc
get the subset of the objects in scope matching the given condition
:::

[]{#toList}

`toList ( )`

[query.t](../file/query.t.html)\[[1024](../source/query.t.html#1024)\]

::: desc
return the scope as a simple list of objects
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
