[List]{.title}[class]{.type}

[systype.h](../file/systype.h.html)\[[932](../source/systype.h.html#932)\],
[misc.t](../file/misc.t.html)\[[1918](../source/misc.t.html#1918)\],
[reflect.t](../file/reflect.t.html)\[[373](../source/reflect.t.html#373)\]

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
The native list type

*Modified in
[misc.t](../file/misc.t.html)\[[1918](../source/misc.t.html#1918)\]:*\
Add some utility methods to List.

*Modified in
[reflect.t](../file/reflect.t.html)\[[373](../source/reflect.t.html#373)\]:*\
Modify the List intrinsic class to provide a to-symbol mapping

`intrinsic class `**`List`**` :   `[`Collection`](../object/Collection.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`List`**\
`         `[`Collection`](../object/Collection.html)\
`                 `[`Object`](../object/Object.html)\
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

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`append`](#append)`  `[`appendUnique`](#appendUnique)`  `[`car`](#car)`  `[`cdr`](#cdr)`  `[`countOf`](#countOf)`  `[`countWhich`](#countWhich)`  `[`element`](#element)`  `[`find`](#find)`  `[`forEach`](#forEach)`  `[`forEachAssoc`](#forEachAssoc)`  `[`getUnique`](#getUnique)`  `[`indexOf`](#indexOf)`  `[`indexOfMax`](#indexOfMax)`  `[`indexOfMin`](#indexOfMin)`  `[`indexWhich`](#indexWhich)`  `[`insertAt`](#insertAt)`  `[`intersect`](#intersect)`  `[`join`](#join)`  `[`lastIndexOf`](#lastIndexOf)`  `[`lastIndexWhich`](#lastIndexWhich)`  `[`lastValWhich`](#lastValWhich)`  `[`length`](#length)`  `[`mapAll`](#mapAll)`  `[`matchProto`](#matchProto)`  `[`maxVal`](#maxVal)`  `[`minVal`](#minVal)`  `[`overlapsWith`](#overlapsWith)`  `[`prepend`](#prepend)`  `[`removeElementAt`](#removeElementAt)`  `[`removeRange`](#removeRange)`  `[`shuffle`](#shuffle)`  `[`sort`](#sort)`  `[`splice`](#splice)`  `[`strComp`](#strComp)`  `[`sublist`](#sublist)`  `[`subset`](#subset)`  `[`toList`](#toList)`  `[`valToSymbol`](#valToSymbol)`  `[`valWhich`](#valWhich)`  `

Inherited from `Collection` :\
` `[`createIterator`](../object/Collection.html#createIterator)`  `[`createLiveIterator`](../object/Collection.html#createLiveIterator)`  `

Inherited from `Object` :\
` `[`callInherited`](../object/Object.html#callInherited)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `

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

[systype.h](../file/systype.h.html)\[[1037](../source/systype.h.html#1037)\]

::: desc
append an element - this works almost exactly like the concatation
operator (\'+\'), but if the argument is a list, this simply adds the
list as a new element, rather than adding each element of the list as a
separate element
:::

[]{#appendUnique}

`appendUnique (lst)`

[systype.h](../file/systype.h.html)\[[1029](../source/systype.h.html#1029)\]

::: desc
append the elements of the list \'lst\' to the elements of this list,
then remove repeated elements in the result; returns a new list with the
unique elements of the combination of the two lists
:::

[]{#car}

`car ( )`

[systype.h](../file/systype.h.html)\[[968](../source/systype.h.html#968)\]

::: desc
car/cdr - head/tail of list
:::

[]{#cdr}

`cdr ( )`

[systype.h](../file/systype.h.html)\[[969](../source/systype.h.html#969)\]

::: desc
*no description available*
:::

[]{#countOf}

`countOf (val)`

[systype.h](../file/systype.h.html)\[[1016](../source/systype.h.html#1016)\]

::: desc
count the number of elements with the given value
:::

[]{#countWhich}

`countWhich (cond)`

[systype.h](../file/systype.h.html)\[[1019](../source/systype.h.html#1019)\]

::: desc
count the number of elements for which the callback returns true
:::

[]{#element}

`element (i)`

[misc.t](../file/misc.t.html)\[[2013](../source/misc.t.html#2013)\]

::: desc
Returns the ith member of the list if there is one, or nil otherwise
:::

[]{#find}

`find (ele)`

[misc.t](../file/misc.t.html)\[[1982](../source/misc.t.html#1982)\]

::: desc
find a list element - synonym for indexOf
:::

[]{#forEach}

`forEach (func)`[OVERRIDDEN]{.rem}

[systype.h](../file/systype.h.html)\[[986](../source/systype.h.html#986)\]

::: desc
Invoke the callback func(val) on each element, in order from first to
last. No return value.
:::

[]{#forEachAssoc}

`forEachAssoc (func)`

[systype.h](../file/systype.h.html)\[[1101](../source/systype.h.html#1101)\]

::: desc
Invoke the callback func(index, val) on each element, in order from
first to last. No return value.
:::

[]{#getUnique}

`getUnique ( )`

[systype.h](../file/systype.h.html)\[[1022](../source/systype.h.html#1022)\]

::: desc
get a new list consisting of the unique elements of this list
:::

[]{#indexOf}

`indexOf (val)`

[systype.h](../file/systype.h.html)\[[965](../source/systype.h.html#965)\]

::: desc
get the index of the first match for the given value
:::

[]{#indexOfMax}

`indexOfMax (func?)`

[systype.h](../file/systype.h.html)\[[1169](../source/systype.h.html#1169)\]

::: desc
Get the index of the list item with the maximum value. If \'func\' is
missing, this simply returns the index of the list element with the
largest value, comparing the element values as though using the \'\>\'
and \'\<\' operators. If \'func\' is specified, it must be a function;
it\'s called as func(x) for each value in the list, and the result of
the overall call is the index of the element for which func(x) returns
the greatest value. For example, if you have a list of strings l,
l.indexOfMax({x: x.length()}) returns the index of the longest string in
the list.
:::

[]{#indexOfMin}

`indexOfMin (func?)`

[systype.h](../file/systype.h.html)\[[1146](../source/systype.h.html#1146)\]

::: desc
Get the index of the list item with the minimum value. If \'func\' is
missing, this simply returns the index of the list element with the
smallest value, comparing the element values as though using the \'\>\'
and \'\<\' operators. If \'func\' is specified, it must be a function;
it\'s called as func(x) for each value in the list, and the result of
the overall call is the index of the element for which func(x) returns
the smallest value. For example, if you have a list of strings l,
l.indexOfMin({x: x.length()}) returns the index of the shortest string
in the list.
:::

[]{#indexWhich}

`indexWhich (cond)`

[systype.h](../file/systype.h.html)\[[980](../source/systype.h.html#980)\]

::: desc
Find the first element for which the given condition is true, and return
the index of the element. Applies the callback function (which encodes
the condition to evaluate) to each element in turn, starting with the
first. For each element, if the callback returns nil, proceeds to the
next element; otherwise, stops and returns the index of the element. If
the callback never returns true for any element, we\'ll return nil.
:::

[]{#insertAt}

`insertAt (startingIndex, val, ...)`

[systype.h](../file/systype.h.html)\[[1077](../source/systype.h.html#1077)\]

::: desc
Insert one or more elements at the given index. If the starting index is
1, the elements will be inserted before the first existing element. If
the index is one higher than the number of elements, the elements will
be inserted after all existing elements. If the index is negative, it
counts backwards from the end of the list: -1 inserts before the last
element, -2 inserts before the second to last, and so on. If the index
is zero, the new elements are inserted after the last element.

Note that a list value argument will simply be inserted as a single
element.

Returns a new list with the value(s) inserted.
:::

[]{#intersect}

`intersect (other)`

[systype.h](../file/systype.h.html)\[[962](../source/systype.h.html#962)\]

::: desc
intersect with another list
:::

[]{#join}

`join (sep?)`

[systype.h](../file/systype.h.html)\[[1133](../source/systype.h.html#1133)\]

::: desc
Combine the list elements into a string. This converts each element into
a string value using the usual default conversions (or throws an error
if string conversion isn\'t possible), then concatenates the values
together and returns the result. If \'separator\' is provided, it\'s a
string that\'s interposed between elements; if this is omitted, the
elements are concatenated together with no extra characters in between.
:::

[]{#lastIndexOf}

`lastIndexOf (val)`

[systype.h](../file/systype.h.html)\[[996](../source/systype.h.html#996)\]

::: desc
find the last element with the given value, and return its index
:::

[]{#lastIndexWhich}

`lastIndexWhich (cond)`

[systype.h](../file/systype.h.html)\[[1007](../source/systype.h.html#1007)\]

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

[systype.h](../file/systype.h.html)\[[1013](../source/systype.h.html#1013)\]

::: desc
Find the last element for which the condition is true, and return the
value of the element
:::

[]{#length}

`length ( )`

[systype.h](../file/systype.h.html)\[[956](../source/systype.h.html#956)\]

::: desc
get the number of elements in the list
:::

[]{#mapAll}

`mapAll (func)`[OVERRIDDEN]{.rem}

[systype.h](../file/systype.h.html)\[[953](../source/systype.h.html#953)\]

::: desc
Apply the callback function to each element of this list, and return a
new list consisting of the results. Effectively maps the list to a new
list using the given function. Suppose the original list is

\[x, y, z\]

Then the result list is

\[func(x), func(y), func(z)\]
:::

[]{#matchProto}

`matchProto (proto)`

[misc.t](../file/misc.t.html)\[[1929](../source/misc.t.html#1929)\]

::: desc
Check the list against a prototype (a list of data types). This is
useful for checking a varargs list to see if it matches a given
prototype. Each prototype element can be a TypeXxx type code, to match a
value of the given native type; an object class, to match an instance of
that class; \'any\', to match a value of any type; or the special value
\'\...\', to match zero or more additional arguments. If \'\...\' is
present, it must be the last prototype element.
:::

[]{#maxVal}

`maxVal (func?)`

[systype.h](../file/systype.h.html)\[[1179](../source/systype.h.html#1179)\]

::: desc
Get the maximum value in the list. If \'func\' is missing, this returns
the largest element value. If \'func\' is specified, it must be a
function; it\'s called as func(x) for each value in the list, and the
result of the overall method call is the element value x that maximizes
func(x). For example, if l is a list of strings, l.maxVal({x:
x.length()}) returns the longest string.
:::

[]{#minVal}

`minVal (func?)`

[systype.h](../file/systype.h.html)\[[1156](../source/systype.h.html#1156)\]

::: desc
Get the minimum value in the list. If \'func\' is missing, this returns
the minimum element value. If \'func\' is specified, it must be a
function; it\'s called as func(x) for each value in the list, and the
result of the overall method call is the element value x that minimizes
func(x). For example, if l is a list of strings, l.minVal({x:
x.length()}) returns the shortest string.
:::

[]{#overlapsWith}

`overlapsWith (lst)`

[misc.t](../file/misc.t.html)\[[2007](../source/misc.t.html#2007)\]

::: desc
Determine whether this list has any elements in common with lst
:::

[]{#prepend}

`prepend (val)`

[systype.h](../file/systype.h.html)\[[1060](../source/systype.h.html#1060)\]

::: desc
Prepend an element - this inserts the value before the first existing
element.
:::

[]{#removeElementAt}

`removeElementAt (index)`

[systype.h](../file/systype.h.html)\[[1085](../source/systype.h.html#1085)\]

::: desc
Delete the element at the given index, reducing the length of the list
by one element. If the index is negative, it counts from the end of the
list: -1 is the last element, -2 is the second to last, etc. Returns a
new list with the given element removed.
:::

[]{#removeRange}

`removeRange (startingIndex, endingIndex)`

[systype.h](../file/systype.h.html)\[[1095](../source/systype.h.html#1095)\]

::: desc
Delete the range of elements starting at startingIndex and ending at
endingIndex. The elements at the ends of the range are included in the
deletion. If startingIndex == endingIndex, only one element is removed.
If either index is negative, it counts from the end of the list: -1 is
the last element, -2 is the second to last, etc. Returns a new list with
the given element range removed.
:::

[]{#shuffle}

`shuffle ( )`

[misc.t](../file/misc.t.html)\[[1988](../source/misc.t.html#1988)\]

::: desc
shuffle the list: return a new list with the elements of this list
rearranged into a random order
:::

[]{#sort}

`sort (descending?, comparisonFunction?)`

[systype.h](../file/systype.h.html)\[[1054](../source/systype.h.html#1054)\]

::: desc
Sort the list, returning a new list. If the \'descending\' flag is
provided and is not nil, we\'ll sort the list in descending order rather
than ascending order.

If the \'comparisonFunction\' argument is provided, it must be a
callback function; the callback takes two arguments, and returns an
integer less than zero if the first argument value is less than the
second, zero if they\'re equal, and an integer greater than zero if the
first is greater than the second. If no \'comparisonFunction\' argument
is provided, or it\'s provided and its value is nil, we\'ll simply
compare the list elements as ordinary values. The comparison function
can be provided for caller-defined orderings, such as ordering a set of
objects.
:::

[]{#splice}

`splice (idx, del, ...)`

[systype.h](../file/systype.h.html)\[[1122](../source/systype.h.html#1122)\]

::: desc
Splice new values into the list. Deletes the \'del\' list items starting
at \'idx\', then inserts the extra arguments in their place. Returns a
new list reflecting the spliced values. To insert items without deleting
anything, pass 0 for \'del\'. To delete items without inserting
anything, omit any additional arguments.
:::

[]{#strComp}

`strComp (lst, cmp)`

[misc.t](../file/misc.t.html)\[[2023](../source/misc.t.html#2023)\]

::: desc
Compare two lists of strings using the cmp StringComparator; return true
if all the corresponding strings in the two lists are the same
(according to cmp) and nil otherwise.
:::

[]{#sublist}

`sublist (start, len?)`

[systype.h](../file/systype.h.html)\[[959](../source/systype.h.html#959)\]

::: desc
extract a sublist
:::

[]{#subset}

`subset (func)`

[systype.h](../file/systype.h.html)\[[939](../source/systype.h.html#939)\]

::: desc
Select a subset of the list: returns a new list consisting only of the
elements for which the callback function \'func\' returns true.
:::

[]{#toList}

`toList ( )`

[misc.t](../file/misc.t.html)\[[1979](../source/misc.t.html#1979)\]

::: desc
toList() on a list simply returns the same list
:::

[]{#valToSymbol}

`valToSymbol ( )`[OVERRIDDEN]{.rem}

[reflect.t](../file/reflect.t.html)\[[374](../source/reflect.t.html#374)\]

::: desc
*no description available*
:::

[]{#valWhich}

`valWhich (cond)`

[systype.h](../file/systype.h.html)\[[993](../source/systype.h.html#993)\]

::: desc
Find the first element for which the given condition is true, and return
the value of the element. Returns nil if no item satisfies the
condition.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
