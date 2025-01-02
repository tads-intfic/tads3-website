---
layout: docs
---
<span class="title">List</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[394](../source/systype.h.html#394)\],
[reflect.t](../file/reflect.t.html)\[[322](../source/reflect.t.html#322)\]

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
[reflect.t](../file/reflect.t.html)\[[322](../source/reflect.t.html#322)\]:*  
Modify the List intrinsic class to provide a to-symbol mapping

`intrinsic class `**`List`**` :   `[`Collection`](../object/Collection.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`List`**  
[`Collection`](../object/Collection.html)  
[`Object`](../object/Object1.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  









*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`append`](#append) [`appendUnique`](#appendUnique) [`car`](#car) [`cdr`](#cdr) [`countOf`](#countOf) [`countWhich`](#countWhich) [`forEach`](#forEach) [`forEachAssoc`](#forEachAssoc) [`getUnique`](#getUnique) [`indexOf`](#indexOf) [`indexWhich`](#indexWhich) [`insertAt`](#insertAt) [`intersect`](#intersect) [`lastIndexOf`](#lastIndexOf) [`lastIndexWhich`](#lastIndexWhich) [`lastValWhich`](#lastValWhich) [`length`](#length) [`mapAll`](#mapAll) [`prepend`](#prepend) [`removeElementAt`](#removeElementAt) [`removeRange`](#removeRange) [`sort`](#sort) [`sublist`](#sublist) [`subset`](#subset) [`valToSymbol`](#valToSymbol) [`valWhich`](#valWhich)

Inherited from `Collection` :  
[`createIterator`](../object/Collection.html#createIterator) [`createLiveIterator`](../object/Collection.html#createLiveIterator)

Inherited from `Object` :  
[`getPropList`](../object/Object1.html#getPropList) [`getPropParams`](../object/Object1.html#getPropParams) [`getSuperclassList`](../object/Object1.html#getSuperclassList) [`isClass`](../object/Object1.html#isClass) [`isTransient`](../object/Object1.html#isTransient) [`ofKind`](../object/Object1.html#ofKind) [`propDefined`](../object/Object1.html#propDefined) [`propInherited`](../object/Object1.html#propInherited) [`propType`](../object/Object1.html#propType)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="append"></span>

`append (val)`

[systype.h](../file/systype.h.html)\[[499](../source/systype.h.html#499)\]



append an element - this works almost exactly like the concatation
operator ('+'), but if the argument is a list, this simply adds the list
as a new element, rather than adding each element of the list as a
separate element



<span id="appendUnique"></span>

`appendUnique (lst)`

[systype.h](../file/systype.h.html)\[[491](../source/systype.h.html#491)\]



append the elements of the list 'lst' to the elements of this list, then
remove repeated elements in the result; returns a new list with the
unique elements of the combination of the two lists



<span id="car"></span>

`car ( )`

[systype.h](../file/systype.h.html)\[[430](../source/systype.h.html#430)\]



car/cdr - head/tail of list



<span id="cdr"></span>

`cdr ( )`

[systype.h](../file/systype.h.html)\[[431](../source/systype.h.html#431)\]



*no description available*



<span id="countOf"></span>

`countOf (val)`

[systype.h](../file/systype.h.html)\[[478](../source/systype.h.html#478)\]



count the number of elements with the given value



<span id="countWhich"></span>

`countWhich (cond)`

[systype.h](../file/systype.h.html)\[[481](../source/systype.h.html#481)\]



count the number of elements for which the callback returns true



<span id="forEach"></span>

`forEach (func)`

[systype.h](../file/systype.h.html)\[[448](../source/systype.h.html#448)\]



Invoke the callback func(val) on each element, in order from first to
last. No return value.



<span id="forEachAssoc"></span>

`forEachAssoc (func)`

[systype.h](../file/systype.h.html)\[[557](../source/systype.h.html#557)\]



Invoke the callback func(index, val) on each element, in order from
first to last. No return value.



<span id="getUnique"></span>

`getUnique ( )`

[systype.h](../file/systype.h.html)\[[484](../source/systype.h.html#484)\]



get a new list consisting of the unique elements of this list



<span id="indexOf"></span>

`indexOf (val)`

[systype.h](../file/systype.h.html)\[[427](../source/systype.h.html#427)\]



get the index of the first match for the given value



<span id="indexWhich"></span>

`indexWhich (cond)`

[systype.h](../file/systype.h.html)\[[442](../source/systype.h.html#442)\]



Find the first element for which the given condition is true, and return
the index of the element. Applies the callback function (which encodes
the condition to evaluate) to each element in turn, starting with the
first. For each element, if the callback returns nil, proceeds to the
next element; otherwise, stops and returns the index of the element. If
the callback never returns true for any element, we'll return nil.



<span id="insertAt"></span>

`insertAt (startingIndex, val, ...)`

[systype.h](../file/systype.h.html)\[[535](../source/systype.h.html#535)\]



Insert one or more elements at the given index. If the index is 1, the
elements will be inserted before the first existing element. If the
index is one higher than the number of elements, the elements will be
inserted after all existing elements.

Note that a list value argument will simply be inserted as a single
element.

Returns a new list with the value(s) inserted.



<span id="intersect"></span>

`intersect (other)`

[systype.h](../file/systype.h.html)\[[424](../source/systype.h.html#424)\]



intersect with another list



<span id="lastIndexOf"></span>

`lastIndexOf (val)`

[systype.h](../file/systype.h.html)\[[458](../source/systype.h.html#458)\]



find the last element with the given value, and return its index



<span id="lastIndexWhich"></span>

`lastIndexWhich (cond)`

[systype.h](../file/systype.h.html)\[[469](../source/systype.h.html#469)\]



Find the last element for which the condition is true, and return the
index of the element. Applies the callback to each element in turn,
starting with the last element and working backwards. For each element,
if the callback returns nil, proceeds to the previous element;
otherwise, stops and returns the index of the element. If the callback
never returns true for any element, we'll return nil.



<span id="lastValWhich"></span>

`lastValWhich (cond)`

[systype.h](../file/systype.h.html)\[[475](../source/systype.h.html#475)\]



Find the last element for which the condition is true, and return the
value of the element



<span id="length"></span>

`length ( )`

[systype.h](../file/systype.h.html)\[[418](../source/systype.h.html#418)\]



get the number of elements in the list



<span id="mapAll"></span>

`mapAll (func)`

[systype.h](../file/systype.h.html)\[[415](../source/systype.h.html#415)\]



Apply the callback function to each element of this list, and return a
new list consisting of the results. Effectively maps the list to a new
list using the given function. Suppose the original list is

\[x, y, z\]

Then the result list is

\[func(x), func(y), func(z)\]



<span id="prepend"></span>

`prepend (val)`

[systype.h](../file/systype.h.html)\[[522](../source/systype.h.html#522)\]



Prepend an element - this inserts the value before the first existing
element.



<span id="removeElementAt"></span>

`removeElementAt (index)`

[systype.h](../file/systype.h.html)\[[542](../source/systype.h.html#542)\]



Delete the element at the given index, reducing the length of the list
by one element. Returns a new list with the given element removed.



<span id="removeRange"></span>

`removeRange (startingIndex, endingIndex)`

[systype.h](../file/systype.h.html)\[[551](../source/systype.h.html#551)\]



Delete the range of elements starting at startingIndex and ending at
endingIndex. The elements at the ends of the range are included in the
deletion. If startingIndex == endingIndex, only one element is removed.
Returns a new list with the given element range removed.



<span id="sort"></span>

`sort (descending, ?, comparisonFunction, ?)`

[systype.h](../file/systype.h.html)\[[516](../source/systype.h.html#516)\]



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



<span id="sublist"></span>

`sublist (start, len, ?)`

[systype.h](../file/systype.h.html)\[[421](../source/systype.h.html#421)\]



extract a sublist



<span id="subset"></span>

`subset (func)`

[systype.h](../file/systype.h.html)\[[401](../source/systype.h.html#401)\]



Select a subset of the list: returns a new list consisting only of the
elements for which the callback function 'func' returns true.



<span id="valToSymbol"></span>

`valToSymbol ( )`<span class="rem">OVERRIDDEN</span>

[reflect.t](../file/reflect.t.html)\[[323](../source/reflect.t.html#323)\]



*no description available*



<span id="valWhich"></span>

`valWhich (cond)`

[systype.h](../file/systype.h.html)\[[455](../source/systype.h.html#455)\]



Find the first element for which the given condition is true, and return
the value of the element. Returns nil if no item satisfies the
condition.





TADS 3 Library Manual  
Generated on 9/13/2007 from TADS version 3.0.15.2


