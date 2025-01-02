---
---
<span class="title">Array</span><span class="type">class</span>

[array.h](../file/array.h.html)\[[15](../source/array.h.html#15)\]

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

'Array' intrinsic class

`intrinsic class `**`Array`**` : `

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Array`**  
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

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`append`](#append)`  `[`appendUnique`](#appendUnique)`  `[`applyAll`](#applyAll)`  `[`copyFrom`](#copyFrom)`  `[`countOf`](#countOf)`  `[`countWhich`](#countWhich)`  `[`fillValue`](#fillValue)`  `[`forEach`](#forEach)`  `[`getUnique`](#getUnique)`  `[`indexOf`](#indexOf)`  `[`indexWhich`](#indexWhich)`  `[`lastIndexOf`](#lastIndexOf)`  `[`lastIndexWhich`](#lastIndexWhich)`  `[`lastValWhich`](#lastValWhich)`  `[`length`](#length)`  `[`mapAll`](#mapAll)`  `[`sort`](#sort)`  `[`subset`](#subset)`  `[`toList`](#toList)`  `[`valWhich`](#valWhich)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="append"></span>

`append (val)`

[array.h](../file/array.h.html)\[[158](../source/array.h.html#158)\]

<div class="desc">

Append an element to the vector. This works just like insertAt() with a
starting index one higher than the length of the vector. This has almost
the same effect as the '+' operator, but treats a list value like any
other value by simply inserting the list as a single new element (rather
than appending each item in the list individually, as the '+' operator
would).

</div>

<span id="appendUnique"></span>

`appendUnique (val)`

[array.h](../file/array.h.html)\[[131](../source/array.h.html#131)\]

<div class="desc">

append the elements of the list or array 'val' to the elements of this
array, then remove repeated elements in the result; returns a new array
with the unique elements of the combination

</div>

<span id="applyAll"></span>

`applyAll (func)`

[array.h](../file/array.h.html)\[[61](../source/array.h.html#61)\]

<div class="desc">

Apply a callback function to each element of the array. For each element
of the array, invokes the callback, and replaces the element with the
return value of the callback. Modifies the array in-place, and returns
'self'.

</div>

<span id="copyFrom"></span>

`copyFrom (src, src_start, dst_start, cnt)`

[array.h](../file/array.h.html)\[[38](../source/array.h.html#38)\]

<div class="desc">

Copy from another array or list. Elements are copied from the source
array or list starting at the element given by 'src_start', and are
copied into 'self' starting at the index given by 'dst_start'. At most
'cnt' values are copied, but we stop when we reach the last element of
either the source or destination values.

</div>

<span id="countOf"></span>

`countOf (val)`

[array.h](../file/array.h.html)\[[118](../source/array.h.html#118)\]

<div class="desc">

count the number of elements with the given value

</div>

<span id="countWhich"></span>

`countWhich (cond)`

[array.h](../file/array.h.html)\[[121](../source/array.h.html#121)\]

<div class="desc">

count the number of elements for which the callback returns true

</div>

<span id="fillValue"></span>

`fillValue (val, start?, cnt?)`

[array.h](../file/array.h.html)\[[46](../source/array.h.html#46)\]

<div class="desc">

fill with a given value, starting at the given element (the first
element if not specified), and running for the given number of elements
(the remaining elements of the array, if not not specified)

</div>

<span id="forEach"></span>

`forEach (func)`

[array.h](../file/array.h.html)\[[78](../source/array.h.html#78)\]

<div class="desc">

Invoke the callback on each element, in order from first to last. No
return value.

</div>

<span id="getUnique"></span>

`getUnique ( )`

[array.h](../file/array.h.html)\[[124](../source/array.h.html#124)\]

<div class="desc">

create a new array consisting of the unique elements of this array

</div>

<span id="indexOf"></span>

`indexOf (val)`

[array.h](../file/array.h.html)\[[89](../source/array.h.html#89)\]

<div class="desc">

get the index of the first match for the given value

</div>

<span id="indexWhich"></span>

`indexWhich (cond)`

[array.h](../file/array.h.html)\[[72](../source/array.h.html#72)\]

<div class="desc">

Find the first element for which the given condition is true. Apply the
callback function (which encodes the condition to evaluate) to each
element in turn, starting with the first. For each element, if the
callback returns nil, proceed to the next element; otherwise, stop and
return the index of the element. If the callback never returns true for
any element, we'll return nil.

</div>

<span id="lastIndexOf"></span>

`lastIndexOf (val)`

[array.h](../file/array.h.html)\[[98](../source/array.h.html#98)\]

<div class="desc">

find the last element with the given value, and return its index

</div>

<span id="lastIndexWhich"></span>

`lastIndexWhich (cond)`

[array.h](../file/array.h.html)\[[109](../source/array.h.html#109)\]

<div class="desc">

Find the last element for which the condition is true, and return the
index of the element. Applies the callback to each element in turn,
starting with the last element and working backwards. For each element,
if the callback returns nil, proceeds to the previous element;
otherwise, stops and returns the index of the element. If the callback
never returns true for any element, we'll return nil.

</div>

<span id="lastValWhich"></span>

`lastValWhich (cond)`

[array.h](../file/array.h.html)\[[115](../source/array.h.html#115)\]

<div class="desc">

Find the last element for which the condition is true, and return the
value of the element

</div>

<span id="length"></span>

`length ( )`

[array.h](../file/array.h.html)\[[28](../source/array.h.html#28)\]

<div class="desc">

get the number of elements in the array

</div>

<span id="mapAll"></span>

`mapAll (func)`

[array.h](../file/array.h.html)\[[86](../source/array.h.html#86)\]

<div class="desc">

Apply the callback function to each element of this array, and return a
new array consisting of the results. Effectively maps the array to a new
array using the given function, leaving the original array unchanged.

</div>

<span id="sort"></span>

`sort (descending?, comparisonFunction?)`

[array.h](../file/array.h.html)\[[148](../source/array.h.html#148)\]

<div class="desc">

Sort the array in place; returns 'self'. If the 'descending' flag is
provided and is not nil, we'll sort the array in descending order rather
than ascending order.

If the 'comparisonFunction' argument is provided, it must be a callback
function; the callback takes two arguments, and returns an integer less
than zero if the first argument value is less than the second, zero if
they're equal, and an integer greater than zero if the first is greater
than the second. If no 'comparisonFunction' argument is provided, or
it's provided and its value is nil, we'll simply compare the array
elements as ordinary values. The comparison function can be provided for
caller-defined orderings, such as ordering a set of objects.

</div>

<span id="subset"></span>

`subset (func)`

[array.h](../file/array.h.html)\[[53](../source/array.h.html#53)\]

<div class="desc">

Select a subset of the array. Returns a new array consisting only of the
elements of this array for which the callback function returns true.

</div>

<span id="toList"></span>

`toList (start?, cnt?)`

[array.h](../file/array.h.html)\[[25](../source/array.h.html#25)\]

<div class="desc">

Create a list with the same elements as the array. If 'start' is
specified, it's the index of the first element we store; we'll store
elements starting at index 'start'. If 'cnt' is specified, it gives the
maximum number of elements for the new list; by default, we'll store all
of the elements from 'start' to the last element.

</div>

<span id="valWhich"></span>

`valWhich (cond)`

[array.h](../file/array.h.html)\[[95](../source/array.h.html#95)\]

<div class="desc">

Find the first element for which the given condition is true, and return
the value of the element.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
