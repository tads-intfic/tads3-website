[Vector]{.title}[class]{.type}

[vector.h](../file/vector.h.html)\[[26](../source/vector.h.html#26)\],
[misc.t](../file/misc.t.html)\[[1742](../source/misc.t.html#1742)\],
[webui.t](../file/webui.t.html)\[[73](../source/webui.t.html#73)\]

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
The Vector intrinsic class provides a varying-length array type. Vectors
can be expanded dynamically, and values within a vector can be changed.
(In contrast, List is a constant type: a value within a list cannot be
changed, and new values can\'t be added to a list. Any manipulation of a
List results in a new, separate List object, leaving the original
unchanged. Vector allows new values to be added and existing values to
be changed in place, without creating a new object.)

*Modified in
[misc.t](../file/misc.t.html)\[[1742](../source/misc.t.html#1742)\]:*\
Add a couple of handy utility functions to Vector

*Modified in
[webui.t](../file/webui.t.html)\[[73](../source/webui.t.html#73)\]:*\
Some handy Vector extensions

`intrinsic class `**`Vector`**` :   `[`Collection`](../object/Collection.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Vector`**\
`         `[`Collection`](../object/Collection.html)\
`                 `[`Object`](../object/Object.html)\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Vector`**\
`         `[`AnonFuncPtr`](../object/AnonFuncPtr.html)\
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

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`append`](#append)`  `[`appendAll`](#appendAll)`  `[`appendUnique`](#appendUnique)`  `[`applyAll`](#applyAll)`  `[`clear`](#clear)`  `[`copyFrom`](#copyFrom)`  `[`countOf`](#countOf)`  `[`countWhich`](#countWhich)`  `[`fillValue`](#fillValue)`  `[`find`](#find)`  `[`forEach`](#forEach)`  `[`forEachAssoc`](#forEachAssoc)`  `[`getAndRemove`](#getAndRemove)`  `[`getTop`](#getTop)`  `[`getUnique`](#getUnique)`  `[`groupSort`](#groupSort)`  `[`indexOf`](#indexOf)`  `[`indexOfMax`](#indexOfMax)`  `[`indexOfMin`](#indexOfMin)`  `[`indexWhich`](#indexWhich)`  `[`insertAt`](#insertAt)`  `[`isEmpty`](#isEmpty)`  `[`join`](#join)`  `[`lastIndexOf`](#lastIndexOf)`  `[`lastIndexWhich`](#lastIndexWhich)`  `[`lastValWhich`](#lastValWhich)`  `[`length`](#length)`  `[`mapAll`](#mapAll)`  `[`maxVal`](#maxVal)`  `[`minVal`](#minVal)`  `[`pop`](#pop)`  `[`prepend`](#prepend)`  `[`push`](#push)`  `[`removeElement`](#removeElement)`  `[`removeElementAt`](#removeElementAt)`  `[`removeRange`](#removeRange)`  `[`setLength`](#setLength)`  `[`shift`](#shift)`  `[`shuffle`](#shuffle)`  `[`sort`](#sort)`  `[`splice`](#splice)`  `[`subset`](#subset)`  `[`toList`](#toList)`  `[`unshift`](#unshift)`  `[`valWhich`](#valWhich)`  `

Inherited from `Collection` :\
` `[`createIterator`](../object/Collection.html#createIterator)`  `[`createLiveIterator`](../object/Collection.html#createLiveIterator)`  `

Inherited from `Object` :\
` `[`callInherited`](../object/Object.html#callInherited)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#append}

`append (val)`

[vector.h](../file/vector.h.html)\[[217](../source/vector.h.html#217)\]

::: desc
Append an element to the vector. This works just like insertAt() with a
starting index one higher than the length of the vector. This has almost
the same effect as the \'+\' operator, but treats a list value like any
other value by simply inserting the list as a single new element (rather
than appending each item in the list individually, as the \'+\' operator
would).
:::

[]{#appendAll}

`appendAll (val)`

[vector.h](../file/vector.h.html)\[[234](../source/vector.h.html#234)\]

::: desc
Append all elements from a list or vector. This works like append(val),
except that if \'val\' is a list or vector, the elements of \'val\' will
be appended individually, like the \'+\' operator does. The difference
between this method and the \'+\' operator is that this method modifies
this Vector by adding the new elements directly to the existing Vector
object, whereas the \'+\' operator creates a new Vector to store the
result.
:::

[]{#appendUnique}

`appendUnique (val)`

[vector.h](../file/vector.h.html)\[[148](../source/vector.h.html#148)\]

::: desc
append the elements of the list or vector \'val\' to the elements of
this vector, then remove repeated elements in the result; returns a new
vector with the unique elements of the combination
:::

[]{#applyAll}

`applyAll (func)`

[vector.h](../file/vector.h.html)\[[74](../source/vector.h.html#74)\]

::: desc
Apply a callback function to each element of the vector. For each
element of the vector, invokes the callback, and replaces the element
with the return value of the callback. Modifies the vector in-place, and
returns \'self\'.
:::

[]{#clear}

`clear ( )`

[misc.t](../file/misc.t.html)\[[1747](../source/misc.t.html#1747)\],
[webui.t](../file/webui.t.html)\[[90](../source/webui.t.html#90)\]

::: desc
clear the vector

*Modified in
[webui.t](../file/webui.t.html)\[[90](../source/webui.t.html#90)\]:*\
return the popped element
:::

[]{#copyFrom}

`copyFrom (src, src_start, dst_start, cnt)`

[vector.h](../file/vector.h.html)\[[50](../source/vector.h.html#50)\]

::: desc
Copy from another vector or list. Elements are copied from the source
vector or list starting at the element given by \'src_start\', and are
copied into \'self\' starting at the index given by \'dst_start\'. At
most \'cnt\' values are copied, but we stop when we reach the last
element of either the source or destination values. If either index is
negative, it counts from the end of the vector: -1 is the last element,
-2 is the second to last, and so on.
:::

[]{#countOf}

`countOf (val)`

[vector.h](../file/vector.h.html)\[[135](../source/vector.h.html#135)\]

::: desc
count the number of elements with the given value
:::

[]{#countWhich}

`countWhich (cond)`

[vector.h](../file/vector.h.html)\[[138](../source/vector.h.html#138)\]

::: desc
count the number of elements for which the callback returns true
:::

[]{#fillValue}

`fillValue (val, start?, cnt?)`

[vector.h](../file/vector.h.html)\[[59](../source/vector.h.html#59)\]

::: desc
Fill with a given value, starting at the given element (the first
element if not specified), and running for the given number of elements
(the remaining existing elements of the vector, if not specified). The
vector is expanded if necessary. A negative starting index counts
backwards from the last element.
:::

[]{#find}

`find (ele)`

[misc.t](../file/misc.t.html)\[[1868](../source/misc.t.html#1868)\]

::: desc
find a list element - synonym for indexOf
:::

[]{#forEach}

`forEach (func)`[OVERRIDDEN]{.rem}

[vector.h](../file/vector.h.html)\[[90](../source/vector.h.html#90)\]

::: desc
Invoke the callback func(val) on each element, in order from first to
last. No return value.
:::

[]{#forEachAssoc}

`forEachAssoc (func)`

[vector.h](../file/vector.h.html)\[[96](../source/vector.h.html#96)\]

::: desc
Invoke the callback func(index, val) on each element, in order from
first to last. No return value.
:::

[]{#getAndRemove}

`getAndRemove (idx)`

[webui.t](../file/webui.t.html)\[[78](../source/webui.t.html#78)\]

::: desc
*no description available*
:::

[]{#getTop}

`getTop ( )`

[misc.t](../file/misc.t.html)\[[1754](../source/misc.t.html#1754)\]

::: desc
get the \"top\" item, treating the vector as a stack
:::

[]{#getUnique}

`getUnique ( )`

[vector.h](../file/vector.h.html)\[[141](../source/vector.h.html#141)\]

::: desc
create a new vector consisting of the unique elements of this vector
:::

[]{#groupSort}

`groupSort (func)`

[misc.t](../file/misc.t.html)\[[1820](../source/misc.t.html#1820)\]

::: desc
Perform a \"group sort\" on the vector. This sorts the items into
groups, then sorts by an ordering value within each group.

The groups are determined by group keys, which are arbitrary values.
Each group is simply the set of objects with a like value for the key.
Within the group, we sort by an integer ordering key.

\'func\' is a function that takes two parameters: func(entry, idx),
where \'entry\' is a list element and \'idx\' is an index in the list.
This returns a list, \[group, order\], giving the group key and ordering
key for the entry.
:::

[]{#indexOf}

`indexOf (val)`

[vector.h](../file/vector.h.html)\[[107](../source/vector.h.html#107)\]

::: desc
get the index of the first match for the given value
:::

[]{#indexOfMax}

`indexOfMax (func?)`

[vector.h](../file/vector.h.html)\[[309](../source/vector.h.html#309)\]

::: desc
Get the index of the element the maximum value. If \'func\' is missing,
this simply returns the index of the element with the largest value,
comparing the element values as though using the \'\>\' and \'\<\'
operators. If \'func\' is specified, it must be a function; it\'s called
as func(x) for each element value x, and the result of the overall call
is the index of the element for which func(x) returns the greatest
value. For example, if you have a vector v containing string elements,
v.indexOfMax({x: x.length()}) returns the index of the longest string.
:::

[]{#indexOfMin}

`indexOfMin (func?)`

[vector.h](../file/vector.h.html)\[[286](../source/vector.h.html#286)\]

::: desc
Get the index of the element with the minimum value. If \'func\' is
missing, this simply returns the index of the element with the smallest
value, comparing the element values as though using the \'\>\' and
\'\<\' operators. If \'func\' is specified, it must be a function; it\'s
called as func(x) for each element\'s value, and the result of the
overall call is the index of the element for which func(x) returns the
smallest value. For example, if you have a vector v containing string
elements, v.indexOfMin({x: x.length()}) returns the index of the
shortest string.
:::

[]{#indexWhich}

`indexWhich (cond)`

[vector.h](../file/vector.h.html)\[[84](../source/vector.h.html#84)\]

::: desc
Find the first element for which the given condition is true. Apply the
callback function (which encodes the condition to evaluate) to each
element in turn, starting with the first. For each element, if the
callback returns nil, proceed to the next element; otherwise, stop and
return the index of the element. If the callback never returns true for
any element, we\'ll return nil.
:::

[]{#insertAt}

`insertAt (startingIndex, val, ...)`

[vector.h](../file/vector.h.html)\[[188](../source/vector.h.html#188)\]

::: desc
Insert one or more elements at the given index. If the starting index is
1, the elements will be inserted before the first existing element. If
the index is one higher than the number of elements, the elements will
be inserted after all existing elements. A negative starting index
counts from the end of the vector: -1 is the last element, -2 is the
second to last, and so on. A zero starting index inserts after the last
existing element.

Note that a list value argument will simply be inserted as a single
element.

Returns \'self\'.
:::

[]{#isEmpty}

`isEmpty ( )`

[misc.t](../file/misc.t.html)\[[1744](../source/misc.t.html#1744)\]

::: desc
is the vector empty?
:::

[]{#join}

`join (sep?)`

[vector.h](../file/vector.h.html)\[[261](../source/vector.h.html#261)\]

::: desc
Combine the vector elements into a string. This converts each element
into a string value using the usual default conversions (or throws an
error if string conversion isn\'t possible), then concatenates the
values together and returns the result. If \'separator\' is provided,
it\'s a string that\'s interposed between elements; if this is omitted,
the elements are concatenated together with no extra characters in
between.
:::

[]{#lastIndexOf}

`lastIndexOf (val)`

[vector.h](../file/vector.h.html)\[[116](../source/vector.h.html#116)\]

::: desc
find the last element with the given value, and return its index
:::

[]{#lastIndexWhich}

`lastIndexWhich (cond)`

[vector.h](../file/vector.h.html)\[[126](../source/vector.h.html#126)\]

::: desc
Find the last element for which the condition is true, and return the
index of the element. Applies the callback to each element in turn,
starting with the last element and working backwards. For each element,
if the callback returns nil, proceeds to the previous element;
otherwise, stops and returns the index of the element. If the callback
never returns true for any element, we\'ll return nil.
:::

[]{#lastValWhich}

`lastValWhich (cond)`

[vector.h](../file/vector.h.html)\[[132](../source/vector.h.html#132)\]

::: desc
Find the last element for which the condition is true, and return the
value of the element
:::

[]{#length}

`length ( )`

[vector.h](../file/vector.h.html)\[[39](../source/vector.h.html#39)\]

::: desc
get the number of elements in the vector
:::

[]{#mapAll}

`mapAll (func)`[OVERRIDDEN]{.rem}

[vector.h](../file/vector.h.html)\[[104](../source/vector.h.html#104)\]

::: desc
Apply the callback function to each element of this vector, and return a
new vector consisting of the results. Effectively maps the vector to a
new vector using the given function, leaving the original vector
unchanged.
:::

[]{#maxVal}

`maxVal (func?)`

[vector.h](../file/vector.h.html)\[[319](../source/vector.h.html#319)\]

::: desc
Get the maximum element value. If \'func\' is missing, this returns the
largest element value. If \'func\' is specified, it must be a function;
it\'s called as func(x) for each element value x, and the result of the
overall method call is the element value x that maximizes func(x). For
example, if v is a vector containing string elements, v.minVal({x:
x.length()}) returns the longest string.
:::

[]{#minVal}

`minVal (func?)`

[vector.h](../file/vector.h.html)\[[296](../source/vector.h.html#296)\]

::: desc
Get the minimum element value. If \'func\' is missing, this simply
returns the smallest element value. If \'func\' is specified, it must be
a function; it\'s called as func(x) for each element value x, and the
result of the overall method call is the element value x that minimizes
func(x). For example, if v is a vector containing string elements,
v.minVal({x: x.length()}) returns the shortest string.
:::

[]{#pop}

`pop ( )`

[misc.t](../file/misc.t.html)\[[1760](../source/misc.t.html#1760)\],
[webui.t](../file/webui.t.html)\[[75](../source/webui.t.html#75)\]

::: desc
pop a value (remove and return the value at the end of the vector)
:::

[]{#prepend}

`prepend (val)`

[vector.h](../file/vector.h.html)\[[223](../source/vector.h.html#223)\]

::: desc
Prepend an element. This works like insertAt() with a starting index of
1.
:::

[]{#push}

`push (val)`

[misc.t](../file/misc.t.html)\[[1757](../source/misc.t.html#1757)\],
[webui.t](../file/webui.t.html)\[[74](../source/webui.t.html#74)\]

::: desc
push a value (append it to the end of the vector)
:::

[]{#removeElement}

`removeElement (val)`

[vector.h](../file/vector.h.html)\[[241](../source/vector.h.html#241)\]

::: desc
Remove an element by value. Each element of the vector matching the
given value is removed. The vector is modified in-place. The return
value is \'self\'.
:::

[]{#removeElementAt}

`removeElementAt (index)`

[vector.h](../file/vector.h.html)\[[196](../source/vector.h.html#196)\]

::: desc
Delete the element at the given index, reducing the length of the vector
by one element. If \'index\' is negative, it counts from the end of the
vector: -1 is the last element, -2 is the second to last, and so on.
Returns \'self\'.
:::

[]{#removeRange}

`removeRange (startingIndex, endingIndex)`

[vector.h](../file/vector.h.html)\[[207](../source/vector.h.html#207)\]

::: desc
Delete the range of elements starting at startingIndex and ending at
endingIndex. The elements at the ends of the range are included in the
deletion. If startingIndex == endingIndex, only one element is removed.
If either index is negative, it counts backwards from the last element:
-1 is the last element, -2 is the second to last, and so on. The length
of the vector is reduced by the number of elements removed. Returns
\'self\'.
:::

[]{#setLength}

`setLength (newElementCount)`

[vector.h](../file/vector.h.html)\[[172](../source/vector.h.html#172)\]

::: desc
Set the length - if this is shorter than the current length, existing
items will be discarded; if it\'s longer, the newly added slots will be
set to nil. Returns \'self\'.
:::

[]{#shift}

`shift ( )`

[misc.t](../file/misc.t.html)\[[1785](../source/misc.t.html#1785)\],
[webui.t](../file/webui.t.html)\[[76](../source/webui.t.html#76)\]

::: desc
shift a value (remove and return the first value)
:::

[]{#shuffle}

`shuffle ( )`

[misc.t](../file/misc.t.html)\[[1871](../source/misc.t.html#1871)\]

::: desc
shuffle the elements of the vector into a random order
:::

[]{#sort}

`sort (descending?, comparisonFunction?)`

[vector.h](../file/vector.h.html)\[[165](../source/vector.h.html#165)\]

::: desc
Sort the vector in place; returns \'self\'. If the \'descending\' flag
is provided and is not nil, we\'ll sort the vector in descending order
rather than ascending order.

If the \'comparisonFunction\' argument is provided, it must be a
callback function; the callback takes two arguments, and returns an
integer less than zero if the first argument value is less than the
second, zero if they\'re equal, and an integer greater than zero if the
first is greater than the second. If no \'comparisonFunction\' argument
is provided, or it\'s provided and its value is nil, we\'ll simply
compare the vector elements as ordinary values. The comparison function
can be provided for caller-defined orderings, such as ordering a set of
objects.
:::

[]{#splice}

`splice (idx, del, ...)`

[vector.h](../file/vector.h.html)\[[250](../source/vector.h.html#250)\]

::: desc
Splice new values into the vector. Deletes the \'del\' elements starting
at \'idx\', then inserts the extra arguments in their place. Updates the
vector in place. To insert items without deleting anything, pass 0 for
\'del\'. To delete items without inserting anything, omit any additional
arguments. Returns \'self\'.
:::

[]{#subset}

`subset (func)`

[vector.h](../file/vector.h.html)\[[66](../source/vector.h.html#66)\]

::: desc
Select a subset of the vector. Returns a new vector consisting only of
the elements of this vector for which the callback function returns
true.
:::

[]{#toList}

`toList (start?, cnt?)`

[vector.h](../file/vector.h.html)\[[36](../source/vector.h.html#36)\]

::: desc
Create a list with the same elements as the vector. If \'start\' is
specified, it\'s the index of the first element we store; we\'ll store
elements starting at index \'start\'. If \'cnt\' is specified, it gives
the maximum number of elements for the new list; by default, we\'ll
store all of the elements from \'start\' to the last element.
:::

[]{#unshift}

`unshift (val)`

[misc.t](../file/misc.t.html)\[[1782](../source/misc.t.html#1782)\]

::: desc
unshift a value (insert it at the start of the Vector)
:::

[]{#valWhich}

`valWhich (cond)`

[vector.h](../file/vector.h.html)\[[113](../source/vector.h.html#113)\]

::: desc
Find the first element for which the given condition is true, and return
the value of the element.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::