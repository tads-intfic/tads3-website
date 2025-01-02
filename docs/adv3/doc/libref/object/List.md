---
layout: docs
---
<span class="title">List</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[932](../source/systype.h.html#932)\],
[reflect.t](../file/reflect.t.html)\[[373](../source/reflect.t.html#373)\]

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



The native list type

*Modified in
[reflect.t](../file/reflect.t.html)\[[373](../source/reflect.t.html#373)\]:*  
Modify the List intrinsic class to provide a to-symbol mapping

`intrinsic class `**`List`**` :   `[`Collection`](../object/Collection.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`List`**  
[`Collection`](../object/Collection.html)  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  









*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`append`](#append)[`appendUnique`](#appendUnique)[`car`](#car)[`cdr`](#cdr)[`countOf`](#countOf)[`countWhich`](#countWhich)[`forEach`](#forEach)[`forEachAssoc`](#forEachAssoc)[`getUnique`](#getUnique)[`indexOf`](#indexOf)[`indexOfMax`](#indexOfMax)[`indexOfMin`](#indexOfMin)[`indexWhich`](#indexWhich)[`insertAt`](#insertAt)[`intersect`](#intersect)[`join`](#join)[`lastIndexOf`](#lastIndexOf)[`lastIndexWhich`](#lastIndexWhich)[`lastValWhich`](#lastValWhich)[`length`](#length)[`mapAll`](#mapAll)[`maxVal`](#maxVal)[`minVal`](#minVal)[`prepend`](#prepend)[`removeElementAt`](#removeElementAt)[`removeRange`](#removeRange)[`sort`](#sort)[`splice`](#splice)[`sublist`](#sublist)[`subset`](#subset)[`valToSymbol`](#valToSymbol)[`valWhich`](#valWhich)

Inherited from `Collection` :  
[`createIterator`](../object/Collection.html#createIterator)[`createLiveIterator`](../object/Collection.html#createLiveIterator)

Inherited from `Object` :  
[`getPropList`](../object/Object.html#getPropList)[`getPropParams`](../object/Object.html#getPropParams)[`getSuperclassList`](../object/Object.html#getSuperclassList)[`isClass`](../object/Object.html#isClass)[`isTransient`](../object/Object.html#isTransient)[`ofKind`](../object/Object.html#ofKind)[`propDefined`](../object/Object.html#propDefined)[`propInherited`](../object/Object.html#propInherited)[`propType`](../object/Object.html#propType)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="append"></span>

`append (val)`

[systype.h](../file/systype.h.html)\[[1037](../source/systype.h.html#1037)\]



append an element - this works almost exactly like the concatation
operator ('+'), but if the argument is a list, this simply adds the list
as a new element, rather than adding each element of the list as a
separate element



<span id="appendUnique"></span>

`appendUnique (lst)`

[systype.h](../file/systype.h.html)\[[1029](../source/systype.h.html#1029)\]



append the elements of the list 'lst' to the elements of this list, then
remove repeated elements in the result; returns a new list with the
unique elements of the combination of the two lists



<span id="car"></span>

`car ( )`

[systype.h](../file/systype.h.html)\[[968](../source/systype.h.html#968)\]



car/cdr - head/tail of list



<span id="cdr"></span>

`cdr ( )`

[systype.h](../file/systype.h.html)\[[969](../source/systype.h.html#969)\]



*no description available*



<span id="countOf"></span>

`countOf (val)`

[systype.h](../file/systype.h.html)\[[1016](../source/systype.h.html#1016)\]



count the number of elements with the given value



<span id="countWhich"></span>

`countWhich (cond)`

[systype.h](../file/systype.h.html)\[[1019](../source/systype.h.html#1019)\]



count the number of elements for which the callback returns true



<span id="forEach"></span>

`forEach (func)`

[systype.h](../file/systype.h.html)\[[986](../source/systype.h.html#986)\]



Invoke the callback func(val) on each element, in order from first to
last. No return value.



<span id="forEachAssoc"></span>

`forEachAssoc (func)`

[systype.h](../file/systype.h.html)\[[1101](../source/systype.h.html#1101)\]



Invoke the callback func(index, val) on each element, in order from
first to last. No return value.



<span id="getUnique"></span>

`getUnique ( )`

[systype.h](../file/systype.h.html)\[[1022](../source/systype.h.html#1022)\]



get a new list consisting of the unique elements of this list



<span id="indexOf"></span>

`indexOf (val)`

[systype.h](../file/systype.h.html)\[[965](../source/systype.h.html#965)\]



get the index of the first match for the given value



<span id="indexOfMax"></span>

`indexOfMax (func?)`

[systype.h](../file/systype.h.html)\[[1169](../source/systype.h.html#1169)\]



Get the index of the list item with the maximum value. If 'func' is
missing, this simply returns the index of the list element with the
largest value, comparing the element values as though using the '\>' and
'\<' operators. If 'func' is specified, it must be a function; it's
called as func(x) for each value in the list, and the result of the
overall call is the index of the element for which func(x) returns the
greatest value. For example, if you have a list of strings l,
l.indexOfMax({x: x.length()}) returns the index of the longest string in
the list.



<span id="indexOfMin"></span>

`indexOfMin (func?)`

[systype.h](../file/systype.h.html)\[[1146](../source/systype.h.html#1146)\]



Get the index of the list item with the minimum value. If 'func' is
missing, this simply returns the index of the list element with the
smallest value, comparing the element values as though using the '\>'
and '\<' operators. If 'func' is specified, it must be a function; it's
called as func(x) for each value in the list, and the result of the
overall call is the index of the element for which func(x) returns the
smallest value. For example, if you have a list of strings l,
l.indexOfMin({x: x.length()}) returns the index of the shortest string
in the list.



<span id="indexWhich"></span>

`indexWhich (cond)`

[systype.h](../file/systype.h.html)\[[980](../source/systype.h.html#980)\]



Find the first element for which the given condition is true, and return
the index of the element. Applies the callback function (which encodes
the condition to evaluate) to each element in turn, starting with the
first. For each element, if the callback returns nil, proceeds to the
next element; otherwise, stops and returns the index of the element. If
the callback never returns true for any element, we'll return nil.



<span id="insertAt"></span>

`insertAt (startingIndex, val, ...)`

[systype.h](../file/systype.h.html)\[[1077](../source/systype.h.html#1077)\]



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



<span id="intersect"></span>

`intersect (other)`

[systype.h](../file/systype.h.html)\[[962](../source/systype.h.html#962)\]



intersect with another list



<span id="join"></span>

`join (sep?)`

[systype.h](../file/systype.h.html)\[[1133](../source/systype.h.html#1133)\]



Combine the list elements into a string. This converts each element into
a string value using the usual default conversions (or throws an error
if string conversion isn't possible), then concatenates the values
together and returns the result. If 'separator' is provided, it's a
string that's interposed between elements; if this is omitted, the
elements are concatenated together with no extra characters in between.



<span id="lastIndexOf"></span>

`lastIndexOf (val)`

[systype.h](../file/systype.h.html)\[[996](../source/systype.h.html#996)\]



find the last element with the given value, and return its index



<span id="lastIndexWhich"></span>

`lastIndexWhich (cond)`

[systype.h](../file/systype.h.html)\[[1007](../source/systype.h.html#1007)\]



Find the last element for which the condition is true, and return the
index of the element. Applies the callback to each element in turn,
starting with the last element and working backwards. For each element,
if the callback returns nil, proceeds to the previous element;
otherwise, stops and returns the index of the element. If the callback
never returns true for any element, we'll return nil.



<span id="lastValWhich"></span>

`lastValWhich (cond)`

[systype.h](../file/systype.h.html)\[[1013](../source/systype.h.html#1013)\]



Find the last element for which the condition is true, and return the
value of the element



<span id="length"></span>

`length ( )`

[systype.h](../file/systype.h.html)\[[956](../source/systype.h.html#956)\]



get the number of elements in the list



<span id="mapAll"></span>

`mapAll (func)`

[systype.h](../file/systype.h.html)\[[953](../source/systype.h.html#953)\]



Apply the callback function to each element of this list, and return a
new list consisting of the results. Effectively maps the list to a new
list using the given function. Suppose the original list is

\[x, y, z\]

Then the result list is

\[func(x), func(y), func(z)\]



<span id="maxVal"></span>

`maxVal (func?)`

[systype.h](../file/systype.h.html)\[[1179](../source/systype.h.html#1179)\]



Get the maximum value in the list. If 'func' is missing, this returns
the largest element value. If 'func' is specified, it must be a
function; it's called as func(x) for each value in the list, and the
result of the overall method call is the element value x that maximizes
func(x). For example, if l is a list of strings, l.maxVal({x:
x.length()}) returns the longest string.



<span id="minVal"></span>

`minVal (func?)`

[systype.h](../file/systype.h.html)\[[1156](../source/systype.h.html#1156)\]



Get the minimum value in the list. If 'func' is missing, this returns
the minimum element value. If 'func' is specified, it must be a
function; it's called as func(x) for each value in the list, and the
result of the overall method call is the element value x that minimizes
func(x). For example, if l is a list of strings, l.minVal({x:
x.length()}) returns the shortest string.



<span id="prepend"></span>

`prepend (val)`

[systype.h](../file/systype.h.html)\[[1060](../source/systype.h.html#1060)\]



Prepend an element - this inserts the value before the first existing
element.



<span id="removeElementAt"></span>

`removeElementAt (index)`

[systype.h](../file/systype.h.html)\[[1085](../source/systype.h.html#1085)\]



Delete the element at the given index, reducing the length of the list
by one element. If the index is negative, it counts from the end of the
list: -1 is the last element, -2 is the second to last, etc. Returns a
new list with the given element removed.



<span id="removeRange"></span>

`removeRange (startingIndex, endingIndex)`

[systype.h](../file/systype.h.html)\[[1095](../source/systype.h.html#1095)\]



Delete the range of elements starting at startingIndex and ending at
endingIndex. The elements at the ends of the range are included in the
deletion. If startingIndex == endingIndex, only one element is removed.
If either index is negative, it counts from the end of the list: -1 is
the last element, -2 is the second to last, etc. Returns a new list with
the given element range removed.



<span id="sort"></span>

`sort (descending?, comparisonFunction?)`

[systype.h](../file/systype.h.html)\[[1054](../source/systype.h.html#1054)\]



Sort the list, returning a new list. If the 'descending' flag is
provided and is not nil, we'll sort the list in descending order rather
than ascending order.

If the 'comparisonFunction' argument is provided, it must be a callback
function; the callback takes two arguments, and returns an integer less
than zero if the first argument value is less than the second, zero if
they're equal, and an integer greater than zero if the first is greater
than the second. If no 'comparisonFunction' argument is provided, or
it's provided and its value is nil, we'll simply compare the list
elements as ordinary values. The comparison function can be provided for
caller-defined orderings, such as ordering a set of objects.



<span id="splice"></span>

`splice (idx, del, ...)`

[systype.h](../file/systype.h.html)\[[1122](../source/systype.h.html#1122)\]



Splice new values into the list. Deletes the 'del' list items starting
at 'idx', then inserts the extra arguments in their place. Returns a new
list reflecting the spliced values. To insert items without deleting
anything, pass 0 for 'del'. To delete items without inserting anything,
omit any additional arguments.



<span id="sublist"></span>

`sublist (start, len?)`

[systype.h](../file/systype.h.html)\[[959](../source/systype.h.html#959)\]



extract a sublist



<span id="subset"></span>

`subset (func)`

[systype.h](../file/systype.h.html)\[[939](../source/systype.h.html#939)\]



Select a subset of the list: returns a new list consisting only of the
elements for which the callback function 'func' returns true.



<span id="valToSymbol"></span>

`valToSymbol ( )`<span class="rem">OVERRIDDEN</span>

[reflect.t](../file/reflect.t.html)\[[374](../source/reflect.t.html#374)\]



*no description available*



<span id="valWhich"></span>

`valWhich (cond)`

[systype.h](../file/systype.h.html)\[[993](../source/systype.h.html#993)\]



Find the first element for which the given condition is true, and return
the value of the element. Returns nil if no item satisfies the
condition.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


