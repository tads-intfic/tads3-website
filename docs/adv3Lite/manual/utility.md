::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Final Moves](final.htm){.nav} \>
Utility Functions\
[[*Prev:* Some Output Issues](output.htm){.nav}     [*Next:* Lists and
Listers](lister.htm){.nav}     ]{.navnp}
:::

::: main
# Utility Functions

The library defines a number of [utility functions](#utility) and
[intrinsic class extensions](#intrinsic) for both internal and game
author use. Some of these will be of more use to game authors than
others, since a number of them are primarily designed to carry out
specialized functions in the library. They are nevertheless all
available for game authors to use, and are described below. Note that
most of them were simply taken over from the Mercury library, but a few
have been added in adv3Lite.

[]{#functions}

## Functions

The following functions (some quite general, some special-purpose) are
defined in misc.t or english.t:

-   **tryInt(val)**: if val is an integer or a string or BigNumber that
    can be converted to an integer, returns the integer equivalent of
    val; otherwise returns nil.
-   **tryNumber(val)**: if val is an number (integer or BigNumber) or a
    string or BigNumber that can be converted to a number, returns the
    numerical (integer or BigNumber) equivalent of val; otherwise
    returns nil.
-   **spellNumber(n)**: Generate a spelled-out version of the given
    number value *n* or simply a string representation of the number. We
    follow fairly standard English style rules:- we spell out numbers
    below 100; e also spell out round figures above 100 that can be
    expressed in two words (e.g., \"fifteen thousand\" or \"thirty
    million\"); for millions and billions, we write, e.g., \"1.7
    million\", if possible for anything else, we return the decimal
    digits, with commas to separate groups of thousands (e.g., 120,400).
-   **spelledToInt(val)**: converts *val* from a spelt-out number (e.g.
    \'forty-three\') to the corresponding integer value (e.g. 43), or
    returns nil if the conversion is not possible (because *val* isn\'t
    recognized as a spelt-out number).
-   **nilToList(val)**: if val is a list, returns val unchanged; if val
    is nil, returns an empty list.
-   **valToList(val)**: if val is a list, returns val unchanged; if val
    is nil, returns an empty list; if val is a Vector returns val
    converted to a list; if val is any other singleton value returns a
    list with one element containing val.
-   **makeMentioned(obj)**: Set the mentioned property of obj to true.
    If obj is supplied as a list, set every object\'s mentioned property
    in the list to true. This can be used in room and object
    descriptions to mark an object as mentioned so it won\'t be included
    in the listing.
-   **partitionList(lst, fn)**: partitionList - partition a list into a
    pair of two lists, the first containing items that match the
    predicate \'fn\', the second containing items that don\'t match
    \'fn\'. \'fn\' is a function pointer (usually an anonymous function)
    that takes a single argument - a list element - and returns true or
    nil. The return value is a list with two elements. The first element
    is a list giving the elements of the original list for which \'fn\'
    returns true, the second element is a list giving the elements for
    which \'fn\' returns nil.
-   **isListSubset(a, b)**: Determine if list a is a subset of list b. a
    is a subset of b if every element of a is in b.
-   **findMatchingTopic(voc, cls = Topic)**: Find an existing Topic
    whose vocab is voc. If the cls parameter is supplied it can be used
    to find a match in some other class, such as Thing or Mentionable.
-   **setPlayer(actor, person = 2)**: Set the player character to
    another actor. If the optional second parameter is supplied, it sets
    the person of the player character; otherwise it defaults to the
    second person.
-   **isEmptyStr(str)**: returns true if *str* is either nil or the
    empty string \'\'.
-   **yesOrNo()**: Simple yes/no confirmation. The caller must display a
    prompt; [yesOrNo()]{.code} reads a command line response, then
    returns true if it\'s an affirmative response or nil if not.

The [tryInt(val)]{.code} and [tryNumber(val)]{.code} functions can be
useful when you want to parse user input to see whether something is a
valid number and, if so, do something with the numerical value it
returns. The following table further illustrate how these two functions
work (with the output from the intrinsic functions [toInteger()]{.code}
and [toNumber()]{.code} also supplied for comparison):

  ------------ ------------- ------------- ------------- ------------
  val          tryInt(val)   tryNum(val)   toInteger()   toNumber()
  1            1             1             1             1
  \'1\'        1             1             1             1
  1.1          1             1.1           1             1.1
  \'1.1\'      nil           1.1           1             1.1
  0            0             0             0             0
  \'foobar\'   nil           nil           0             0
  true         nil           nil           1             1
  \'5a5\'      nil           nil           5             5
  \'15b\'      nil           nil           15            15
  \'b15\'      nil           nil           0             0
  \'3e\'       nil           3             3             3
  \'3e3\'      nil           3000          3             3000
  \'1.2E2\'    nil           120           1             120
  \'+4\'       4             4             4             4
  \'-3\'       -3            -3            -3            -3
  \'-3.2e4\'   nil           -32000        -3            -32000
  ------------ ------------- ------------- ------------- ------------

You can see from this that [tryInt(val)]{.code} and
[tryNumber(val)]{.code} are both stricter than [toInteger(val)]{.code}
and [toNumber(val)]{.code} (which, for example, would have returned
numeric values when val was true, \'15b\' or \'5a5\'), and that
[tryInt(val)]{.code} is \'stricter\' than [tryNum(val)]{.code};
[tryInt(val)]{.code} only returns a non-nil value either if it\'s passed
a number or if it\'s passed a string containing only digits optionally
preceded by + or -, whereas [tryNum(val]{.code}) will also accept
strings with decimal point and exponent notation (such as \'1.2E2\').

\

There are also a number of list-related utility functions which are
described in the chapter on [Lists and Listers](lister.htm#functions).

[]{#intrinsic}

## Intrinsic Class Extensions

In addition, the misc.t module (which must be included in every adv3Lite
game) defines a number of additional methods on the intrinsic classes
[String](#string), [Vector](#vector), [List](#list) and
[Object](#object):

### [String]{#string}

The String class gains the following additional methods, each of which
returns a new string:

-   **trim()**: Trim spaces. Removes leading and trailing spaces from
    the string.
-   **firstChar()**: returns the first character in the string.
-   **lastChar()**: returns the last character of the string.
-   **delFirst()**: removes the first character (i.e. returns the string
    minus its first character)
-   **delLast()**: removes the last character (i.e. returns the string
    minus its final character)
-   **left(n)**: returns a string containing the leftmost n characters
    of the original string; if n is negative, returns the leftmost
    (length-n) characters).
-   **right(n)**: returns a string containing the rightmost n characters
    of the original string; if n is negative, returns the rightmost
    (length-n).

\

### [Vector]{#vector}

The Vector class gains the following additional methods:

-   **isEmpty()**: returns true if the Vector is empty (i.e. if its
    length is zero).
-   **clear()**: clears (i.e. empties) the Vector.
-   **getTop()**: get the \"top\" (i.e. last) item, treating the Vector
    as a stack.
-   **push(val)**: push a value (append it to the end of the Vector).
-   **pop()**: pop a value (remove and return the value at the end of
    the Vector).
-   **unshift(val)**: unshift a value (insert it at the start of the
    Vector).
-   **shift()**: shift a value (remove and return the first value).
-   **groupSort(func)**: Perform a \"group sort\" on the vector. This
    sorts the items into groups, then sorts by an ordering value within
    each group. The groups are determined by group keys, which are
    arbitrary values. Each group is simply the set of objects with a
    like value for the key. Within the group, we sort by an integer
    ordering key. \'func\' is a function that takes two parameters:
    func(entry, idx), where \'entry\' is a list element and \'idx\' is
    an index in the list. This returns a list, \[group, order\], giving
    the group key and ordering key for the entry.
-   **find(ele)**: find a list element - synonym for indexOf(ele).
-   **shuffle()**: shuffle the elements of the Vector into a random
    order.

\

### [List]{#list}

The List class gains the following additional methods:

-   **matchProto(proto)**: Check the list against a prototype (a list of
    data types). This is useful for checking a varargs list to see if it
    matches a given prototype. Each prototype element can be a TypeXxx
    type code, to match a value of the given native type; an object
    class, to match an instance of that class; \'any\', to match a value
    of any type; or the special value \'\...\', to match zero or more
    additional arguments. If \'\...\' is present, it must be the last
    prototype element.
-   **toList()**: toList() on a list simply returns the same list (this
    seemingly pointless method presumably makes it easier to call the
    toList() method on something that might be either a List or a Vector
    and get a list returned either way).
-   **find(ele)**: find a list element - synonym for indexOf(ele).
-   **shuffle()**: shuffle the list: return a new list with the elements
    of this list rearranged into a random order.
-   **overlapsWith(lst)**: Determine whether this list has any elements
    in common with a second list *lst*; returns true if it does and nil
    otherwise.
-   **element(i)**: Returns the *i*th element of the list if there is
    one, or nil otherwise (i.e. if the list has less than *i* elements).
-   **strComp(lst, cmp)**: Compare two lists of strings (in this list
    and *lst*) using the *cmp* StringComparator; return true if all the
    corresponding strings in the two lists are the same (according to
    *cmp*) and nil otherwise.

\

### [Object]{#object}

Some methods have been added to the base Object class to make it
*somewhat* interchangeable with lists and vectors. Certain operations
that are normally specific to the collection types have obvious
degenerations for the singleton case. In particular, a singleton can be
thought of as a collection consisting of one value, so operations that
iterate over a collection degenerate to one iteration on a singleton.

-   **mapAll(func)**: mapAll for an object simply applies a function to
    the object.
-   **forEach(func)**: forEach on an object simply calls the function on
    the object.
-   **createIterator()**: create an iterator of the
    **SingletonIterator** class, which is an implementation of the
    Iterator interface for singleton values. This allows \'foreach\' to
    be used with arbitrary objects, or even primitive values. The effect
    of iterating over a singleton value with \'foreach\' using this
    iterator is simply to invoke the loop once with the loop variable
    set to the singleton value.
-   **createLiveIterator():** create a live iterator (this allows
    \'foreach\' to be used with an arbitrary object, iterating once over
    the loop with the object value).
-   **callInherited(cl, prop, \[args\])**: Call an inherited method
    directly. This has the same effect that calling \'inherited
    cl.prop\' would from within a method, but allows you to do this from
    an arbitrary point *outside* the object\'s own code. I.e., you can
    say \'obj.callInherited(cl, &prop)\' and get the effect that
    \'inherited c.prop\' would have had from within an \'obj\' method.

The createLiveIterator() method thus allows us to write code like this:

::: code
      local a = 'Hello World! ';
      foreach(local cur in a)
         "<<cur>>\n"; 
     
:::

Executing this will then indeed result in a display of the string
\'Hello World!\'. This will principally be useful when we want to
iterate over some variable (or property) that may contain either a
collection (List or Vector) or a singleton value.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Final Moves](final.htm){.nav} \>
Utility Functions\
[[*Prev:* Some Output Issues](output.htm){.nav}     [*Next:* Lists and
Listers](lister.htm){.nav}     ]{.navnp}
:::
