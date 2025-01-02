<span class="title">Vector</span><span class="type">class</span>

[vector.h](../file/vector.h.html)\[[26](../source/vector.h.html#26)\],
[webui.t](../file/webui.t.html)\[[73](../source/webui.t.html#73)\]

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

The Vector intrinsic class provides a varying-length array type. Vectors
can be expanded dynamically, and values within a vector can be changed.
(In contrast, List is a constant type: a value within a list cannot be
changed, and new values can't be added to a list. Any manipulation of a
List results in a new, separate List object, leaving the original
unchanged. Vector allows new values to be added and existing values to
be changed in place, without creating a new object.)

*Modified in
[webui.t](../file/webui.t.html)\[[73](../source/webui.t.html#73)\]:*  
Some handy Vector extensions

`intrinsic class `**`Vector`**` :   `[`Collection`](../object/Collection.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Vector`**  
`         `[`Collection`](../object/Collection.html)  
`                 `[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Vector`**  
`         `[`AnonFuncPtr`](../object/AnonFuncPtr.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`append`](#append)`  `[`appendAll`](#appendAll)`  `[`appendUnique`](#appendUnique)`  `[`applyAll`](#applyAll)`  `[`clear`](#clear)`  `[`copyFrom`](#copyFrom)`  `[`countOf`](#countOf)`  `[`countWhich`](#countWhich)`  `[`fillValue`](#fillValue)`  `[`forEach`](#forEach)`  `[`forEachAssoc`](#forEachAssoc)`  `[`getAndRemove`](#getAndRemove)`  `[`getUnique`](#getUnique)`  `[`indexOf`](#indexOf)`  `[`indexOfMax`](#indexOfMax)`  `[`indexOfMin`](#indexOfMin)`  `[`indexWhich`](#indexWhich)`  `[`insertAt`](#insertAt)`  `[`join`](#join)`  `[`lastIndexOf`](#lastIndexOf)`  `[`lastIndexWhich`](#lastIndexWhich)`  `[`lastValWhich`](#lastValWhich)`  `[`length`](#length)`  `[`mapAll`](#mapAll)`  `[`maxVal`](#maxVal)`  `[`minVal`](#minVal)`  `[`pop`](#pop)`  `[`prepend`](#prepend)`  `[`push`](#push)`  `[`removeElement`](#removeElement)`  `[`removeElementAt`](#removeElementAt)`  `[`removeRange`](#removeRange)`  `[`setLength`](#setLength)`  `[`shift`](#shift)`  `[`sort`](#sort)`  `[`splice`](#splice)`  `[`subset`](#subset)`  `[`toList`](#toList)`  `[`valWhich`](#valWhich)`  `

Inherited from `Collection` :  
` `[`createIterator`](../object/Collection.html#createIterator)`  `[`createLiveIterator`](../object/Collection.html#createLiveIterator)`  `

Inherited from `Object` :  
` `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

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

[vector.h](../file/vector.h.html)\[[217](../source/vector.h.html#217)\]

<div class="desc">

Append an element to the vector. This works just like insertAt() with a
starting index one higher than the length of the vector. This has almost
the same effect as the '+' operator, but treats a list value like any
other value by simply inserting the list as a single new element (rather
than appending each item in the list individually, as the '+' operator
would).

</div>

<span id="appendAll"></span>

`appendAll (val)`

[vector.h](../file/vector.h.html)\[[234](../source/vector.h.html#234)\]

<div class="desc">

Append all elements from a list or vector. This works like append(val),
except that if 'val' is a list or vector, the elements of 'val' will be
appended individually, like the '+' operator does. The difference
between this method and the '+' operator is that this method modifies
this Vector by adding the new elements directly to the existing Vector
object, whereas the '+' operator creates a new Vector to store the
result.

</div>

<span id="appendUnique"></span>

`appendUnique (val)`

[vector.h](../file/vector.h.html)\[[148](../source/vector.h.html#148)\]

<div class="desc">

append the elements of the list or vector 'val' to the elements of this
vector, then remove repeated elements in the result; returns a new
vector with the unique elements of the combination

</div>

<span id="applyAll"></span>

`applyAll (func)`

[vector.h](../file/vector.h.html)\[[74](../source/vector.h.html#74)\]

<div class="desc">

Apply a callback function to each element of the vector. For each
element of the vector, invokes the callback, and replaces the element
with the return value of the callback. Modifies the vector in-place, and
returns 'self'.

</div>

<span id="clear"></span>

`clear ( )`

[webui.t](../file/webui.t.html)\[[90](../source/webui.t.html#90)\]

<div class="desc">

return the popped element

</div>

<span id="copyFrom"></span>

`copyFrom (src, src_start, dst_start, cnt)`

[vector.h](../file/vector.h.html)\[[50](../source/vector.h.html#50)\]

<div class="desc">

Copy from another vector or list. Elements are copied from the source
vector or list starting at the element given by 'src_start', and are
copied into 'self' starting at the index given by 'dst_start'. At most
'cnt' values are copied, but we stop when we reach the last element of
either the source or destination values. If either index is negative, it
counts from the end of the vector: -1 is the last element, -2 is the
second to last, and so on.

</div>

<span id="countOf"></span>

`countOf (val)`

[vector.h](../file/vector.h.html)\[[135](../source/vector.h.html#135)\]

<div class="desc">

count the number of elements with the given value

</div>

<span id="countWhich"></span>

`countWhich (cond)`

[vector.h](../file/vector.h.html)\[[138](../source/vector.h.html#138)\]

<div class="desc">

count the number of elements for which the callback returns true

</div>

<span id="fillValue"></span>

`fillValue (val, start?, cnt?)`

[vector.h](../file/vector.h.html)\[[59](../source/vector.h.html#59)\]

<div class="desc">

Fill with a given value, starting at the given element (the first
element if not specified), and running for the given number of elements
(the remaining existing elements of the vector, if not specified). The
vector is expanded if necessary. A negative starting index counts
backwards from the last element.

</div>

<span id="forEach"></span>

`forEach (func)`

[vector.h](../file/vector.h.html)\[[90](../source/vector.h.html#90)\]

<div class="desc">

Invoke the callback func(val) on each element, in order from first to
last. No return value.

</div>

<span id="forEachAssoc"></span>

`forEachAssoc (func)`

[vector.h](../file/vector.h.html)\[[96](../source/vector.h.html#96)\]

<div class="desc">

Invoke the callback func(index, val) on each element, in order from
first to last. No return value.

</div>

<span id="getAndRemove"></span>

`getAndRemove (idx)`

[webui.t](../file/webui.t.html)\[[78](../source/webui.t.html#78)\]

<div class="desc">

*no description available*

</div>

<span id="getUnique"></span>

`getUnique ( )`

[vector.h](../file/vector.h.html)\[[141](../source/vector.h.html#141)\]

<div class="desc">

create a new vector consisting of the unique elements of this vector

</div>

<span id="indexOf"></span>

`indexOf (val)`

[vector.h](../file/vector.h.html)\[[107](../source/vector.h.html#107)\]

<div class="desc">

get the index of the first match for the given value

</div>

<span id="indexOfMax"></span>

`indexOfMax (func?)`

[vector.h](../file/vector.h.html)\[[309](../source/vector.h.html#309)\]

<div class="desc">

Get the index of the element the maximum value. If 'func' is missing,
this simply returns the index of the element with the largest value,
comparing the element values as though using the '\>' and '\<'
operators. If 'func' is specified, it must be a function; it's called as
func(x) for each element value x, and the result of the overall call is
the index of the element for which func(x) returns the greatest value.
For example, if you have a vector v containing string elements,
v.indexOfMax({x: x.length()}) returns the index of the longest string.

</div>

<span id="indexOfMin"></span>

`indexOfMin (func?)`

[vector.h](../file/vector.h.html)\[[286](../source/vector.h.html#286)\]

<div class="desc">

Get the index of the element with the minimum value. If 'func' is
missing, this simply returns the index of the element with the smallest
value, comparing the element values as though using the '\>' and '\<'
operators. If 'func' is specified, it must be a function; it's called as
func(x) for each element's value, and the result of the overall call is
the index of the element for which func(x) returns the smallest value.
For example, if you have a vector v containing string elements,
v.indexOfMin({x: x.length()}) returns the index of the shortest string.

</div>

<span id="indexWhich"></span>

`indexWhich (cond)`

[vector.h](../file/vector.h.html)\[[84](../source/vector.h.html#84)\]

<div class="desc">

Find the first element for which the given condition is true. Apply the
callback function (which encodes the condition to evaluate) to each
element in turn, starting with the first. For each element, if the
callback returns nil, proceed to the next element; otherwise, stop and
return the index of the element. If the callback never returns true for
any element, we'll return nil.

</div>

<span id="insertAt"></span>

`insertAt (startingIndex, val, ...)`

[vector.h](../file/vector.h.html)\[[188](../source/vector.h.html#188)\]

<div class="desc">

Insert one or more elements at the given index. If the starting index is
1, the elements will be inserted before the first existing element. If
the index is one higher than the number of elements, the elements will
be inserted after all existing elements. A negative starting index
counts from the end of the vector: -1 is the last element, -2 is the
second to last, and so on. A zero starting index inserts after the last
existing element.

Note that a list value argument will simply be inserted as a single
element.

Returns 'self'.

</div>

<span id="join"></span>

`join (sep?)`

[vector.h](../file/vector.h.html)\[[261](../source/vector.h.html#261)\]

<div class="desc">

Combine the vector elements into a string. This converts each element
into a string value using the usual default conversions (or throws an
error if string conversion isn't possible), then concatenates the values
together and returns the result. If 'separator' is provided, it's a
string that's interposed between elements; if this is omitted, the
elements are concatenated together with no extra characters in between.

</div>

<span id="lastIndexOf"></span>

`lastIndexOf (val)`

[vector.h](../file/vector.h.html)\[[116](../source/vector.h.html#116)\]

<div class="desc">

find the last element with the given value, and return its index

</div>

<span id="lastIndexWhich"></span>

`lastIndexWhich (cond)`

[vector.h](../file/vector.h.html)\[[126](../source/vector.h.html#126)\]

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

[vector.h](../file/vector.h.html)\[[132](../source/vector.h.html#132)\]

<div class="desc">

Find the last element for which the condition is true, and return the
value of the element

</div>

<span id="length"></span>

`length ( )`

[vector.h](../file/vector.h.html)\[[39](../source/vector.h.html#39)\]

<div class="desc">

get the number of elements in the vector

</div>

<span id="mapAll"></span>

`mapAll (func)`

[vector.h](../file/vector.h.html)\[[104](../source/vector.h.html#104)\]

<div class="desc">

Apply the callback function to each element of this vector, and return a
new vector consisting of the results. Effectively maps the vector to a
new vector using the given function, leaving the original vector
unchanged.

</div>

<span id="maxVal"></span>

`maxVal (func?)`

[vector.h](../file/vector.h.html)\[[319](../source/vector.h.html#319)\]

<div class="desc">

Get the maximum element value. If 'func' is missing, this returns the
largest element value. If 'func' is specified, it must be a function;
it's called as func(x) for each element value x, and the result of the
overall method call is the element value x that maximizes func(x). For
example, if v is a vector containing string elements, v.minVal({x:
x.length()}) returns the longest string.

</div>

<span id="minVal"></span>

`minVal (func?)`

[vector.h](../file/vector.h.html)\[[296](../source/vector.h.html#296)\]

<div class="desc">

Get the minimum element value. If 'func' is missing, this simply returns
the smallest element value. If 'func' is specified, it must be a
function; it's called as func(x) for each element value x, and the
result of the overall method call is the element value x that minimizes
func(x). For example, if v is a vector containing string elements,
v.minVal({x: x.length()}) returns the shortest string.

</div>

<span id="pop"></span>

`pop ( )`

[webui.t](../file/webui.t.html)\[[75](../source/webui.t.html#75)\]

<div class="desc">

*no description available*

</div>

<span id="prepend"></span>

`prepend (val)`

[vector.h](../file/vector.h.html)\[[223](../source/vector.h.html#223)\]

<div class="desc">

Prepend an element. This works like insertAt() with a starting index of
1.

</div>

<span id="push"></span>

`push (ele)`

[webui.t](../file/webui.t.html)\[[74](../source/webui.t.html#74)\]

<div class="desc">

*no description available*

</div>

<span id="removeElement"></span>

`removeElement (val)`

[vector.h](../file/vector.h.html)\[[241](../source/vector.h.html#241)\]

<div class="desc">

Remove an element by value. Each element of the vector matching the
given value is removed. The vector is modified in-place. The return
value is 'self'.

</div>

<span id="removeElementAt"></span>

`removeElementAt (index)`

[vector.h](../file/vector.h.html)\[[196](../source/vector.h.html#196)\]

<div class="desc">

Delete the element at the given index, reducing the length of the vector
by one element. If 'index' is negative, it counts from the end of the
vector: -1 is the last element, -2 is the second to last, and so on.
Returns 'self'.

</div>

<span id="removeRange"></span>

`removeRange (startingIndex, endingIndex)`

[vector.h](../file/vector.h.html)\[[207](../source/vector.h.html#207)\]

<div class="desc">

Delete the range of elements starting at startingIndex and ending at
endingIndex. The elements at the ends of the range are included in the
deletion. If startingIndex == endingIndex, only one element is removed.
If either index is negative, it counts backwards from the last element:
-1 is the last element, -2 is the second to last, and so on. The length
of the vector is reduced by the number of elements removed. Returns
'self'.

</div>

<span id="setLength"></span>

`setLength (newElementCount)`

[vector.h](../file/vector.h.html)\[[172](../source/vector.h.html#172)\]

<div class="desc">

Set the length - if this is shorter than the current length, existing
items will be discarded; if it's longer, the newly added slots will be
set to nil. Returns 'self'.

</div>

<span id="shift"></span>

`shift ( )`

[webui.t](../file/webui.t.html)\[[76](../source/webui.t.html#76)\]

<div class="desc">

*no description available*

</div>

<span id="sort"></span>

`sort (descending?, comparisonFunction?)`

[vector.h](../file/vector.h.html)\[[165](../source/vector.h.html#165)\]

<div class="desc">

Sort the vector in place; returns 'self'. If the 'descending' flag is
provided and is not nil, we'll sort the vector in descending order
rather than ascending order.

If the 'comparisonFunction' argument is provided, it must be a callback
function; the callback takes two arguments, and returns an integer less
than zero if the first argument value is less than the second, zero if
they're equal, and an integer greater than zero if the first is greater
than the second. If no 'comparisonFunction' argument is provided, or
it's provided and its value is nil, we'll simply compare the vector
elements as ordinary values. The comparison function can be provided for
caller-defined orderings, such as ordering a set of objects.

</div>

<span id="splice"></span>

`splice (idx, del, ...)`

[vector.h](../file/vector.h.html)\[[250](../source/vector.h.html#250)\]

<div class="desc">

Splice new values into the vector. Deletes the 'del' elements starting
at 'idx', then inserts the extra arguments in their place. Updates the
vector in place. To insert items without deleting anything, pass 0 for
'del'. To delete items without inserting anything, omit any additional
arguments. Returns 'self'.

</div>

<span id="subset"></span>

`subset (func)`

[vector.h](../file/vector.h.html)\[[66](../source/vector.h.html#66)\]

<div class="desc">

Select a subset of the vector. Returns a new vector consisting only of
the elements of this vector for which the callback function returns
true.

</div>

<span id="toList"></span>

`toList (start?, cnt?)`

[vector.h](../file/vector.h.html)\[[36](../source/vector.h.html#36)\]

<div class="desc">

Create a list with the same elements as the vector. If 'start' is
specified, it's the index of the first element we store; we'll store
elements starting at index 'start'. If 'cnt' is specified, it gives the
maximum number of elements for the new list; by default, we'll store all
of the elements from 'start' to the last element.

</div>

<span id="valWhich"></span>

`valWhich (cond)`

[vector.h](../file/vector.h.html)\[[113](../source/vector.h.html#113)\]

<div class="desc">

Find the first element for which the given condition is true, and return
the value of the element.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
