<span class="title">ScopeList</span><span class="type">class</span>

[query.t](../file/query.t.html)\[[923](../source/query.t.html#923)\]

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

A ScopeList is a helper object used to build the list of objects in
scope. This object provides methods for the common ways of adding
objects to scope.

The ScopeList isn't a true Collection object, but it mimics one by
providing most of the standard methods. You can use length() and the
\[\] operator to scan the list, perform a foreach or for..in loop with a
ScopeList to iterate over the items in scope, you can use find() to
check if a given object is in scope, and you can use subset() to get a
list of in-scope objects satisfying some condition.

`class `**`ScopeList`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ScopeList`**  
`         object`  
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

` `[`status_`](#status_)`  `[`vec_`](#vec_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`add`](#add)`  `[`addAll`](#addAll)`  `[`addOnly`](#addOnly)`  `[`addSelfIlluminatingWithin`](#addSelfIlluminatingWithin)`  `[`addWithin`](#addWithin)`  `[`close`](#close)`  `[`createIterator`](#createIterator)`  `[`createLiveIterator`](#createLiveIterator)`  `[`find`](#find)`  `[`length`](#length)`  `[`subset`](#subset)`  `[`toList`](#toList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="status_"></span>

`status_`

[query.t](../file/query.t.html)\[[1045](../source/query.t.html#1045)\]

<div class="desc">

A LookupTable with the objects already added to the list. We use this to
avoid redundantly scanning containment trees for objects that we've
already added. For each object, we set status\_\[obj\] to a status
indicator:

  
nil (unset) - the object has never been visited  
1 - we've added the object only, not its contents  
2 - we've added the object and its contents

</div>

<span id="vec_"></span>

`vec_`

[query.t](../file/query.t.html)\[[1033](../source/query.t.html#1033)\]

<div class="desc">

a vector with the objects in scope

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="add"></span>

`add (obj)`

[query.t](../file/query.t.html)\[[927](../source/query.t.html#927)\]

<div class="desc">

Add an object and its contents to the scope.

</div>

<span id="addAll"></span>

`addAll (lst)`

[query.t](../file/query.t.html)\[[957](../source/query.t.html#957)\]

<div class="desc">

Add all of the objects in the given list

</div>

<span id="addOnly"></span>

`addOnly (obj)`

[query.t](../file/query.t.html)\[[985](../source/query.t.html#985)\]

<div class="desc">

Add a single object to the scope. This doesn't add anything related to
the object (such as its contents) - just the object itself.

</div>

<span id="addSelfIlluminatingWithin"></span>

`addSelfIlluminatingWithin (obj)`

[query.t](../file/query.t.html)\[[975](../source/query.t.html#975)\]

<div class="desc">

add each self-illuminating object in the interior contents

</div>

<span id="addWithin"></span>

`addWithin (obj)`

[query.t](../file/query.t.html)\[[967](../source/query.t.html#967)\]

<div class="desc">

Add the interior contents of an object to the scope. This adds only the
contents, not the object itself.

</div>

<span id="close"></span>

`close ( )`

[query.t](../file/query.t.html)\[[1005](../source/query.t.html#1005)\]

<div class="desc">

"close" the scope list - this converts the vector to a list

</div>

<span id="createIterator"></span>

`createIterator ( )`

[query.t](../file/query.t.html)\[[1027](../source/query.t.html#1027)\]

<div class="desc">

create an iterator, for foreach()

</div>

<span id="createLiveIterator"></span>

`createLiveIterator ( )`

[query.t](../file/query.t.html)\[[1030](../source/query.t.html#1030)\]

<div class="desc">

create a live iterator

</div>

<span id="find"></span>

`find (obj)`

[query.t](../file/query.t.html)\[[1018](../source/query.t.html#1018)\]

<div class="desc">

is the given object in scope?

</div>

<span id="length"></span>

`length ( )`

[query.t](../file/query.t.html)\[[1012](../source/query.t.html#1012)\]

<div class="desc">

get the number of items in scope

</div>

<span id="subset"></span>

`subset (func)`

[query.t](../file/query.t.html)\[[1021](../source/query.t.html#1021)\]

<div class="desc">

get the subset of the objects in scope matching the given condition

</div>

<span id="toList"></span>

`toList ( )`

[query.t](../file/query.t.html)\[[1024](../source/query.t.html#1024)\]

<div class="desc">

return the scope as a simple list of objects

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
