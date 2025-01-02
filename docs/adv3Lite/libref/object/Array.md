---
layout: docs
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



'Array' intrinsic class

`intrinsic class `**`Array`**` : `



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Array`**  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`append`](#append)[`appendUnique`](#appendUnique)[`applyAll`](#applyAll)[`copyFrom`](#copyFrom)[`countOf`](#countOf)[`countWhich`](#countWhich)[`fillValue`](#fillValue)[`forEach`](#forEach)[`getUnique`](#getUnique)[`indexOf`](#indexOf)[`indexWhich`](#indexWhich)[`lastIndexOf`](#lastIndexOf)[`lastIndexWhich`](#lastIndexWhich)[`lastValWhich`](#lastValWhich)[`length`](#length)[`mapAll`](#mapAll)[`sort`](#sort)[`subset`](#subset)[`toList`](#toList)[`valWhich`](#valWhich)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="append"></span>

`append (val)`

[array.h](../file/array.h.html)\[[158](../source/array.h.html#158)\]



Append an element to the vector. This works just like insertAt() with a
starting index one higher than the length of the vector. This has almost
the same effect as the '+' operator, but treats a list value like any
other value by simply inserting the list as a single new element (rather
than appending each item in the list individually, as the '+' operator
would).



<span id="appendUnique"></span>

`appendUnique (val)`

[array.h](../file/array.h.html)\[[131](../source/array.h.html#131)\]



append the elements of the list or array 'val' to the elements of this
array, then remove repeated elements in the result; returns a new array
with the unique elements of the combination



<span id="applyAll"></span>

`applyAll (func)`

[array.h](../file/array.h.html)\[[61](../source/array.h.html#61)\]



Apply a callback function to each element of the array. For each element
of the array, invokes the callback, and replaces the element with the
return value of the callback. Modifies the array in-place, and returns
'self'.



<span id="copyFrom"></span>

`copyFrom (src, src_start, dst_start, cnt)`

[array.h](../file/array.h.html)\[[38](../source/array.h.html#38)\]



Copy from another array or list. Elements are copied from the source
array or list starting at the element given by 'src_start', and are
copied into 'self' starting at the index given by 'dst_start'. At most
'cnt' values are copied, but we stop when we reach the last element of
either the source or destination values.



<span id="countOf"></span>

`countOf (val)`

[array.h](../file/array.h.html)\[[118](../source/array.h.html#118)\]



count the number of elements with the given value



<span id="countWhich"></span>

`countWhich (cond)`

[array.h](../file/array.h.html)\[[121](../source/array.h.html#121)\]



count the number of elements for which the callback returns true



<span id="fillValue"></span>

`fillValue (val, start?, cnt?)`

[array.h](../file/array.h.html)\[[46](../source/array.h.html#46)\]



fill with a given value, starting at the given element (the first
element if not specified), and running for the given number of elements
(the remaining elements of the array, if not not specified)



<span id="forEach"></span>

`forEach (func)`

[array.h](../file/array.h.html)\[[78](../source/array.h.html#78)\]



Invoke the callback on each element, in order from first to last. No
return value.



<span id="getUnique"></span>

`getUnique ( )`

[array.h](../file/array.h.html)\[[124](../source/array.h.html#124)\]



create a new array consisting of the unique elements of this array



<span id="indexOf"></span>

`indexOf (val)`

[array.h](../file/array.h.html)\[[89](../source/array.h.html#89)\]



get the index of the first match for the given value



<span id="indexWhich"></span>

`indexWhich (cond)`

[array.h](../file/array.h.html)\[[72](../source/array.h.html#72)\]



Find the first element for which the given condition is true. Apply the
callback function (which encodes the condition to evaluate) to each
element in turn, starting with the first. For each element, if the
callback returns nil, proceed to the next element; otherwise, stop and
return the index of the element. If the callback never returns true for
any element, we'll return nil.



<span id="lastIndexOf"></span>

`lastIndexOf (val)`

[array.h](../file/array.h.html)\[[98](../source/array.h.html#98)\]



find the last element with the given value, and return its index



<span id="lastIndexWhich"></span>

`lastIndexWhich (cond)`

[array.h](../file/array.h.html)\[[109](../source/array.h.html#109)\]



Find the last element for which the condition is true, and return the
index of the element. Applies the callback to each element in turn,
starting with the last element and working backwards. For each element,
if the callback returns nil, proceeds to the previous element;
otherwise, stops and returns the index of the element. If the callback
never returns true for any element, we'll return nil.



<span id="lastValWhich"></span>

`lastValWhich (cond)`

[array.h](../file/array.h.html)\[[115](../source/array.h.html#115)\]



Find the last element for which the condition is true, and return the
value of the element



<span id="length"></span>

`length ( )`

[array.h](../file/array.h.html)\[[28](../source/array.h.html#28)\]



get the number of elements in the array



<span id="mapAll"></span>

`mapAll (func)`

[array.h](../file/array.h.html)\[[86](../source/array.h.html#86)\]



Apply the callback function to each element of this array, and return a
new array consisting of the results. Effectively maps the array to a new
array using the given function, leaving the original array unchanged.



<span id="sort"></span>

`sort (descending?, comparisonFunction?)`

[array.h](../file/array.h.html)\[[148](../source/array.h.html#148)\]



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



<span id="subset"></span>

`subset (func)`

[array.h](../file/array.h.html)\[[53](../source/array.h.html#53)\]



Select a subset of the array. Returns a new array consisting only of the
elements of this array for which the callback function returns true.



<span id="toList"></span>

`toList (start?, cnt?)`

[array.h](../file/array.h.html)\[[25](../source/array.h.html#25)\]



Create a list with the same elements as the array. If 'start' is
specified, it's the index of the first element we store; we'll store
elements starting at index 'start'. If 'cnt' is specified, it gives the
maximum number of elements for the new list; by default, we'll store all
of the elements from 'start' to the last element.



<span id="valWhich"></span>

`valWhich (cond)`

[array.h](../file/array.h.html)\[[95](../source/array.h.html#95)\]



Find the first element for which the given condition is true, and return
the value of the element.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


