---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> List  
<span class="navnp"><a href="iter.html" class="nav"><em>Prev:</em> Iterator</a>
    <a href="lookup.html" class="nav"><em>Next:</em> LookupTable</a>    
</span>

</div>



# List

"List" is a native TADS 3 datatype. Lists are actually instances of the
intrinsic class List, which means that you can call methods defined by
the List intrinsic class on list objects.

## Value Semantics

Lists have "value semantics," which means that a given list value is
immutable. Any operation that appears to modify a list value is actually
creating a new list value, and leaving the original value unchanged.
This behavior makes it very easy to work with lists, because you never
have to worry about how many variables or properties refer to a list -
even if several variables refer to a list value, each variable
effectively has its own private copy of the list, so changes made to one
variable's list won't affect any others. This also means that you can
pass a list to a function without having to worry about whether the
function will modify the list, and similarly that you can modify a list
passed in as an argument to your functions without having to worry about
how the changes will affect the caller.

This is discussed in more detail in the [Vector](vector.html) class
section.

## String conversions

### String conversions

A list can be converted to a string using the
[toString()](tadsgen.html#toString) function. A list can also be used in
a context where a non-string value is implicitly converted to a string,
such as on the right-hand side of a "+" operator where the left-hand
side is a string.

The string conversion of a list consists of the list's elements, each
itself first converted to a string if necessary, concatenated together,
with commas separating elements. For example,
`toString(\[1, 2, 3\])` yields the string
`'1,2,3'`.

## List iterations

A List is a subclass of [Collection](collect.html), so you can use the
`createIterator()` method to create an Iterator
to iterate over the elements of the list. The Iterator that a List
creates is called an IndexedIterator, and visits the elements of the
list in index order (the first element visited is the element at index
1, the second is the element at index 2, and so forth).

## List methods

List is a subclass of [Collection](collect.html), and thus defines the
Collection methods. In addition, List defines the methods shown below.

`append(*val*)`

<div class="fdef">

Appends the value *val* to this list, returning the resulting list. This
is almost the same as using the `+` operator to
append *val* to the list, but differs in that this method always treats
*val* as a single new element, even if *val* is a list. Consider the
following:

```
    local x = [1, 2, 3];
    local y = x + [4, 5];
    local z = x.append([4, 5]);
```

In this example, the value of `y` is the list
`\[1, 2, 3, 4, 5\]`: if the value on the right
of a `+` operator is a list, the
`+` operator appends each value of the list as a
separate element. In contrast, the value of `z`
is `\[1, 2, 3, \[4, 5\]\]`, because the
`append()` method always treats its argument as
a single element of the new list.

Note that you can achieve the same effect using the
`+` operator by constructing a new list for the
right operand:

```
    local y2 = x + [[4, 5]];
```

This will ensure that the value of `y2` is the
same as the value of `z`:
`\[1, 2, 3, \[4, 5\]\]`. However, the
`append()` method is more efficient than
constructing a new list for the right operand of
`+`, because it's not necessary to construct the
intermediate list using `append()`.



`appendUnique(*lst*)`

<div class="fdef">

Appends the elements of the list *lst* to this list, returning a new
list consisting only of the unique elements of the combination. Each
value appearing in the result list will appear in the result list only
once. (The same effect could be obtained by concatenating the two lists
with the `+` operator then applying
`getUnique()` to the result, but this method is
more efficient because it avoids constructing the fully concatenated
list as an intermediate value.)

</div>

`car()`

<div class="fdef">

Returns the first element of the list. If the list has no elements,
returns `nil`.

(The names "car" and "cdr" are historical; they come from the Lisp
programming language, which borrowed them from an old IBM mainframe
instruction set.)

</div>

`cdr()`

<div class="fdef">

Returns the "tail" of the list; that is, the rest of the list after
removing the first element. If the list has no elements, returns
`nil`. This function is almost the same as
`sublist(2)`, except that
`sublist()` would return an empty list if given
an empty list, whereas `cdr()` returns
`nil` in this case.

(The names "car" and "cdr" are historical; they come from the Lisp
programming language, which borrowed them from an old IBM mainframe
instruction set.)

</div>

`countOf(*val*)`

<div class="fdef">

Returns the number of elements whose values equal *val*.

</div>

`countWhich(*cond*)`

<div class="fdef">

Returns the number of elements for which the callback function *cond*
returns a non-false value (anything but `nil` or
0). For each element, this method calls the callback, passing the
current element as the argument. If the callback returns anything but
`nil` or 0, the method counts the element. After
invoking the callback for each element, the method returns the resulting
count.

</div>

`forEach(*func*)`

<div class="fdef">

Invokes the callback function
`(*func*)(*value*)` for each element, in order
from first to last, passing the value of one element as *value* to the
callback on each invocation. The callback function takes one argument,
which is the current element, and returns no value. This method returns
no value. This method is a convenient means of executing some code for
each element of the list.

</div>

`forEachAssoc(*func*)`

<div class="fdef">

Invokes the callback function `(*func*)(*index*,
*value*)` for each element, in order from first to last, passing
each element's index and value to the function *func*. The callback
function returns no value. This method returns no value. This method is
a convenient means of executing some code for each element of the list;
unlike `forEach()`, this method provides its
callback with the index as well as the value for each element it visits.

</div>

<span id="generate"></span>

`generate(*func*, *n*)`

<div class="fdef">

Creates a new list containing *n* elements by invoking the callback
function *func* once for each element, and using the return value as the
element value. This is a class method that you call on the List class
directly, as in `List.generate(f, 10)`.

*func* is a callback function, which can be a regular function or an
anonymous function. *func* can take zero or one argument. The
one-argument form is invoked with the index of the current element as
the argument on each call.

`generate()` is convenient for creating a list
of values based on a formula. For example, this creates a list of the
first ten positive even integers:

```
    local e = List.generate({i: i*2}, 10);
```

That creates a list containing ten elements. Each element's value is
determined by calling the anonymous function ` {i:
i\*2}` with the index of that element. So the value of the first
element, at index 1, is determined by calling the anonymous function
with `i=1`. In this case the function returns
`i\*2` == `1\*2` ==
`2`. The second element is determined by calling
the function again with `i=2`, which returns 4,
and so on for the remaining elements.

This creates a list of the first 20 Fibonacci numbers:

```
    local a = 0, b = 1;
    local fib = List.generate({: local f = a, a = b, b = f + a, f }, 20);
```

(For a simple way of generating a list consisting of a repeated fixed
value, see the [makeList()](tadsgen.html#makeList) function.)

</div>

`getUnique()`

<div class="fdef">

Returns a new list consisting of the unique elements of the original
list. For each value in the original list, the value will appear in the
new list only once. The order of the elements in the new list is that of
the first appearances of the unique elements of the original list. For
example, if the original list is `\[1, 5, 2, 5, 3, 5,
4, 5\]`, this method will return `\[1, 5, 2, 3,
4\]`.

</div>

`indexOf(*val*)`

<div class="fdef">

Returns the index of the first element of the list equal to the given
value. If *val* does not appear anywhere in the list, the method returns
`nil`. The first element is at index 1.

</div>

`indexOfMax(*func*?)`

<div class="fdef">

If *func* is omitted, returns the index of the element with the maximum
value, comparing values to one another as though using the
`\>` operator.

If *func* is specified, it must be a function pointer. The method calls
*func*() for each element in the list, passing the element's value as
the function argument. The function must return a value. The result of
`indexOfMax` in this case is the index of the
element for which *func*() returned the maximum value.

For example, if `lst` is a list of string
values, `lst.indexOfMax({x: x.length()})`
returns the index of the longest string in the list.

</div>

`indexOfMin(*func*?)`

<div class="fdef">

If *func* is omitted, returns the index of the element with the minimum
value, comparing values to one another as though using the
`\<` operator.

If *func* is specified, it must be a function pointer. The method calls
*func*() for each element in the list, passing the element's value as
the function argument. The function must return a value. The result of
`indexOfMin` in this case is the index of the
element for which *func*() returned the minimum value.

For example, if `lst` is a list of string
values, `lst.indexOfMin({x: x.length()})`
returns the index of the shortest string in the list.

</div>

`indexWhich(*cond*)`

<div class="fdef">

Finds the first element for which the given condition is true. The
method iterates through the elements of the list, starting at the first
element and proceeding in order, and applies the callback function
*cond* to each element. The callback takes one argument, which is the
value of the list element, and returns a condition result value. For
each element, if the callback function returns a non-false value (i.e.,
any value except `nil` or 0), the method
immediately stops the iteration and returns the index of that element.
If the callback returns a false value (`nil` or
0) for every element of the list, the method returns
`nil`.

</div>

`insertAt(*index*, *val1*, *val2*, …)`

<div class="fdef">

Returns a new list which results from inserting the given values
(*val1*, *val2*, and so on) into the existing list before the element at
the position given by *index*. At least one value argument is required;
if multiple value arguments are provided, the values are inserted into
the list in the same order in which they appear in the arguments.

If *index* is 1, the values are inserted before the first element of the
existing list (this means that `insertAt(1, x)`
is equivalent to `prepend(x)`), and if *index*
is equal to the number of elements in the original list plus 1, the
values are inserted after the last element of the existing list (so
`lst.insertAt(lst.length() + 1, x)` is
equivalent to `lst.append(x)`). If *index* is
negative, it counts backwards from the end of the list: -1 inserts
before the last element, -2 inserts before the second to last, and so
on. If *index* is zero, elements are inserted after the existing last
element.

Because the new elements are inserted before any existing element at the
insertion point, the index in the result list of the first element
inserted always equals *index*. For example, consider this statement:

```
    lst = lst.insertAt(5, 'a', 'b', 'c');
```

After this statement is executed, `lst\[5\]`
will be `'a'`.

Note that, if any of the values to be inserted are themselves lists,
each one is inserted as a single list-valued element, in the same manner
as `append(*val*)` and
`prepend(*val*)`.

</div>

`intersect(*lst2*)`

<div class="fdef">

Returns a new list consisting of the intersection of this list and
*lst2*; that is, a list consisting of the elements common to both this
list and *lst2*. *lst2* must also be a list. If the two lists have no
elements in common, the result is an empty list. If an element of the
shorter list (or, if the lists are of equal length, this list) appears
more than once in the shorter list, and that element value also appears
in the longer list, then the element will be in the result list the same
number of times that it is in the shorter list. An element repeated in
the longer list will not be repeated in the result list.

</div>

<span id="join"></span>

`join(*sep*?)`

<div class="fdef">

Returns a string made by concatenating the elements of the list together
in index order. If *sep* is provided, it's a string that's interposed
between elements as a separator. If *sep* is omitted, the elements are
concatenated with no separation.

Each element is converted to a string using the usual automatic
conversions before it's concatenated. If an element can't be converted
to string, the method throws an error.

</div>

`lastIndexOf(*val*)`

<div class="fdef">

Returns the index of the last element in the list whose value equals
*val*. If no element in the list equals *val*, this method returns
`nil`.

</div>

`lastIndexWhich(*cond*)`

<div class="fdef">

Returns the index of the last element in the list for which the callback
function *cond* returns a non-false value (anything except
`nil` or 0). This method is similar to
`indexWhich(*cond*)`, but scans the list in
reverse order, starting at the last element and working towards the
first. Returns `nil` if the callback returns
`nil` or 0 for every element.

</div>

`lastValWhich(*cond*)`

<div class="fdef">

Returns the value of the last element in the list for which the callback
function *cond* returns a non-false value. This method is similar to
`lastIndexWhich(*cond*)`, but returns the value
of the matching element rather than its index. Returns
`nil` if the callback returns
`nil` or 0 for every element.

</div>

`length()`

<div class="fdef">

Returns the number of elements in the list.

</div>

`mapAll(*func*)`

<div class="fdef">

For each element of the list, this method invokes the callback function
*func*, passing the current element as the single argument, then adds
the callback's return value to a new list. The method returns the
resulting new list, which has the same number of elements as the
original list. Each element of the returned list contains the result
returned by func for the corresponding element of the original list.
This method does not modify the original list, but creates a new list.

Here's an example that creates a new list consisting of multiplying each
element of an original list by 2 (naturally, for this to work, the
original list must consist entirely of integer values):

```
    x = [1, 2, 3, 4];
    y = x.applyAll({x: x*2});
```

</div>

`maxVal(*func*?)`

<div class="fdef">

If *func* is omitted, returns the maximum of the element values in the
list, comparing values to one another as though using the
`\>` operator.

If *func* is specified, it must be a function pointer. The method calls
*func*() for each element in the list, passing the element's value as
the function argument. The function must return a value. The result of
`maxVal` in this case is the value of the
element which maximizes *func*. Note that the **element value** is
returned, *not* the return value of *func*.

For example, if `lst` is a list of string
values, `lst.maxVal({x: x.length()})` returns
the longest string in the list.

</div>

`minVal(*func*?)`

<div class="fdef">

If *func* is omitted, returns minimum of the element values in the list,
comparing values to one another as though using the
`\<` operator.

If *func* is specified, it must be a function pointer. The method calls
*func*() for each element in the list, passing the element's value as
the function argument. The function must return a value. The result of
`minVal` in this case is the element that
minimizes *func*(). Note that the **element value** is returned, *not*
the return value of *func*.

For example, if `lst` is a list of string
values, `lst.minVal({x: x.length()})` returns
the shortest string in the list.

</div>

`prepend(*val*)`

<div class="fdef">

Returns a new list which results from inserting the value *val* before
the first element of the existing list. This method is similar to
`append(*val*)`, but this method inserts the new
element at the beginning of the list rather than at the end. Note that
if *val* is a list, it is prepended as a single list-valued element.

</div>

`removeElementAt(*index*)`

<div class="fdef">

Returns a new list which results from deleting the element at the given
index. For example, `\[100, 200,
300\].removeElementAt(2)` yields `\[100,
300\]`.

If *index* is negative, it counts from the end of the list: -1 is the
last element, -2 is the second to last, and so on. Otherwise, *index*
must be at least 1 and at most the number of elements in the list; if
*index* is outside this range, the method throws an "index out of range"
exception.

</div>

`removeRange(*startIndex*, *endIndex*)`

<div class="fdef">

Returns a new list which results from deleting the elements starting at
*startIndex* and ending with (and including) *endIndex*. If *endIndex*
equals *startIndex*, only one value is deleted, so
`removeRange(*x*, *x*)` is equivalent to
`removeElementAt(*x*)`.

If either index is negative, it counts from the end of the list: -1 is
the last element, -2 is the second to last, and so on. Otherwise,
*startIndex* and *endIndex* must be at least 1 and at most the number of
elements in the list, and *endIndex* must be greater than or equal to
*startIndex*.

</div>

<span id="sort"></span>

`sort(*descending*?, *comparisonFunction*?)`

<div class="fdef">

Returns a new list consisting of the elements of this list rearranged
into a sorted order. By default, this method sorts the elements of the
list into ascending order, but you can reverse this ordering by
specifying `true` for the *descending*
parameter.

The optional *comparisonFunction* can be used to specify the ordering of
the result. If this argument is not specified (or is
`nil`), the method will sort the elements
according to the standard system ordering of values; hence, the elements
must be of comparable types (such as all integers or all strings). By
specifying a comparison function, you can provide your own special
ordering, and you can also sort values that have no system-defined
order, such as object values.

If provided, the *comparisonFunction* value is a pointer to a function
taking two arguments, which are two values from the list to be compared.
The function returns an integer less than zero if the first value is
less than the second, zero if the two values are equal, or an integer
greater than zero if the first value is greater than the second.

For example, if you wanted to sort a list of objects so that the objects
are placed into descending order of their "priority" property values,
where the "priority" property has an integer value, you could do this:

```
    lst = [obj1, obj2, obj3];
    sortedLst = lst.sort(true, { a, b: a.priority - b.priority });
```

</div>

<span id="splice"></span>

`splice(*startIndex*, *deleteCount*, ...)`

<div class="fdef">

Returns a new list which results from deleting the *deleteCount*
elements starting at *startIndex*, then inserting any additional
argument values as new list elements in their place. If *deleteCount* is
zero, no elements are deleted. If there are no additional arguments, no
new elements are inserted.

If *startIndex* is negative, it counts from the end of the list: -1 is
the last element, -2 is the second to last, and so on. Use 0 to indicate
one past the last element, to insert the new elements after the last
existing element.

You can get the same effect as this method using a combination of
`removeRange()` and
`insertAt()`. `splice()`
is clearer and more concise for cases where you want to replace a range
with new values. It's also a little more efficient, since it doesn't
have to construct an extra list to hold the intermediate result between
the deletion and insertion.

</div>

<span id="sublist"></span>

`sublist(*start*, *length*?)`

<div class="fdef">

Creates and returns a new list consisting of a sublist of this list
starting at the element of this list at index *start*, and continuing
for the number of elements given by *length*, if present, or to the end
of this list if not. If *start* is negative, it counts from the end of
the list: -1 is the last element, -2 is the second to last, and so on.
If *length* is negative, it gives the number of items to omit from the
end of the result list; -1 omits the last element of the source list, -2
omits the last two elements, and so on.

Examples:

```
    [1, 2, 3].sublist(2) yields [2, 3]
    [1, 2, 3].sublist(2, 1) yields [2]
    [1, 2, 3, 4, 5].sublist(1, -2) yields [1, 2, 3]
    [1, 2, 3, 4, 5].sublist(2, -2) yields [2, 3]
```

</div>

`subset(*func*)`

<div class="fdef">

Creates and returns a new list containing the elements of this list for
which the callback function *func* returns true (i.e., any value other
than `nil` or 0). For each element of the source
list, this method invokes the callback function, passing the value of
the current element as the callback function's single argument. If the
callback returns `nil` or 0, the method omits
the element from the result; otherwise, the method includes the element
in the result list. The new list's elements will be in the same order as
the selected elements from the source list.

This method does not modify the original list.

This example uses a short-form anonymous function to create a new list
that contains only the elements from an original list whose values are
greater than 10.

```
    x = [5, 10, 15, 20];
    y = x.subset({x: x > 10});
```

</div>

`valWhich(*cond*)`

<div class="fdef">

Returns the value of the first element for which the callback function
*cond* returns non-false (i.e., anything except
`nil` or 0). This method is similar to
`indexWhich(*cond*)`, but returns the value of
the first matching element rather than its index. If *cond* returns
`nil` or 0 for every element of the list, this
method returns `nil`.

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> List  
<span class="navnp"><a href="iter.html" class="nav"><em>Prev:</em> Iterator</a>
    <a href="lookup.html" class="nav"><em>Next:</em> LookupTable</a>    
</span>

</div>
