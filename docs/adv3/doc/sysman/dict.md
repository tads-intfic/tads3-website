---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Dictionary  
<span class="navnp"><a href="date.html" class="nav"><em>Prev:</em> Date</a>
    <a href="dynfunc.html" class="nav"><em>Next:</em> DynamicFunc</a>    
</span>





# Dictionary

To facilitate command parsing, TADS 3 provides an intrinsic class called
Dictionary. A Dictionary is a specialized type of lookup table designed
specifically to work with the [GrammarProd](gramprod.html) intrinsic
class, which is used to create parsers. A Dictionary stores the
vocabulary for a grammar; more generically speaking, it stores
associations between keys and objects, and can be efficiently searched
for a key to yield all of the objects associated with the key.

A "key" is a combination of a string and a property ID. The Dictionary
class includes a property ID with each key so that object associations
can be differentiated by type; each property is a type of association.
In practical terms, the property used in a Dictionary key will usually
be a vocabulary property, such as `noun` or
`adjective`. A given word might be used with
some objects as a noun, but with other objects as an adjective; for
example, "card" might be used as a noun with an "ID Card" object, but as
an adjective with a "card slot" object. The Dictionary class
differentiates by property ID to allow for searching a Dictionary object
for the objects matching a word in a particular usage context.

To use the Dictionary class, you should `\#include
\<dict.h\>`. If you're using the adv3 library, the library headers
will do this for you automatically.

## Comparators

The Dictionary class allows the program to customize the way input
strings are matched to dictionary strings. This customization is handled
through a "comparator" object; this is simply an object that provides a
specific set of methods, which the Dictionary calls to perform its
comparisons.

You can set a Dictionary object's comparator at any time by calling the
Dictionary's `setComparator()` method. This
method takes the comparator object as an argument. When you set the
comparator, subsequent look-up operations are performed using the
matching rules contained in the new comparator.

The intrinsic class [StringComparator](strcomp.html) provides a
customizable comparator implementation, compatible with the Dictionary
requirements, that's very fast (since it's implemented as native code in
the interpreter). When the StringComparator class doesn't provide enough
flexibility, you can define your own completely custom comparator by
implementing the set of required methods.

The Dictionary class assumes that comparator objects are immutable. That
is, once a comparator is installed in a dictionary, the dictionary
assumes that the return values from the required methods, for a given
set of argument values, will never change. This is important because it
allows the dictionary to assume it will never need to rebuild its
internal tables except when a new comparator is installed. If you want
to change the comparison rules, you must create and install a new
comparator object; never attempt to change the comparison rules by
modifying the comparator itself.

A comparator object must define the following methods:

`calcHash(*str*)`



Calculate and return the "hash code" for the given string *str*. The
hash code is simply an arbitrary integer value; its purpose is to allow
the dictionary to divide its overall set of words into many bins, which
reduces the amount of work necessary when searching for a particular
string by limiting the search to the strings in one bin. When storing a
string, the dictionary computes the hash value by calling this method,
then stores the string in a bin specified by the hash value. When
looking up a string, the dictionary computes the string's hash value,
and then only has to look in the bin given by the hash value.

Note that this function doesn't have to worry about how many bins the
dictionary is using. The dictionary will automatically take the value
modulo the bin count (i.e., the dictionary will divide the value
returned from calcHash() by the number of bins, and use the integer
remainder of this division to select the bin; this will inherently be in
the correct range).

The hash value returned from this method is arbitrary, hence the method
can implement any algorithm it wants for computing the value. However,
there is one absolute requirement that the method must obey, and a
couple of properties that the algorithm should have:

- The absolute requirement is that, for any two strings *s1* and *s2*,
  if `matchValues(s1, s2)` indicates a match
  (i.e., it returns anything other than zero or
  `nil`), then
  `calcHash(s1)` must equal
  `calcHash(s2)`. (This does **not** imply that
  the hash values for two non-matching strings must be different: hash
  "collisions," in which two strings do not match but happen to have the
  same hash value, are specifically allowed.
- A highly desirable property of the hash function is that it runs
  quickly. The point of the hash is to reduce the amount of work needed
  to look up a word by very quickly picking only one bin to look in. If
  the hash function takes a long time to compute, then the speed
  advantage of this approach is reduced.
- Another highly desirable property is that the hash values for the set
  of all words in the dictionary should distribute uniformly. This is
  important because it will ensure that about an equal number of words
  goes into each bin, so that we don't have many empty bins and a few
  bins with all of the words; if the words were to clump into a few
  bins, then we wouldn't get much advantage out of limiting the
  searching to one bin per word looked up. There's no sure way to
  guarantee uniform hash distribution, especially given that the set of
  words in a particular dictionary can't be predicted in most cases;
  however, practice has shown that certain types of hash functions
  generally work pretty well. If you are writing your own comparator
  object, you can find information on how to write a good hash function
  in practically any textbook on computer algorithms.



`matchValues(*inputStr*, *dictStr*)`



Match the input string *inputStr* to the dictionary string *dictStr*.
Returns zero or `nil` if the values do not
match, or any other value if they do match. Because any non-zero and
non-nil value indicates a match, this routine is free to encode
additional information about the match in the return value; typically,
implementations use bit flags (a combination of binary values OR'd
together) for this purpose.

Note the asymmetry of the argument: the first argument is always an
input string, which is a string to be matched (such as the string
argument to the findWord() method); the second is always a dictionary
string, which is a string already stored in the dictionary that is being
compared with the input word. Some implementations might take advantage
of this distinction to permit certain types of approximations in input
strings; for example, an implementation might allow an input string to
be abbreviated to a leading substring of the dictionary string, so that
"flashl" matches "flashlight," but not vice versa.



## Compiler Support

The TADS 3 compiler has built-in support for the Dictionary intrinsic
class. (This built-in support is part of the compiler, not the
interpreter; as far as the interpreter is concerned, a Dictionary object
is the same as any other kind of object.) The compiler support is
provided by the statements `dictionary` and
`dictionary property`, and by recognition of
dictionary properties when defined in object property lists.

The `dictionary` statement has two purposes.
First, it defines a new object instance of class Dictionary, if the name
has not been previously defined. Second, it establishes the active
dictionary, which is the dictionary into which the compiler will insert
each dictionary word defined with an object.

The `dictionary property` statement tells the
compiler that a given property is henceforth a "dictionary property."
This means that, whenever the property is subsequently used in an object
definition, the property defines dictionary words for the object. The
compiler then automatically enters the words into the active dictionary
under the given property.

Here's some sample code that demonstrates how these statements work.

```
    // create a new dictionary and make it active
    dictionary myDict;

    // establish the dictionary properties
    dictionary property noun, adjective, plural;

    // define an object
    redBook: Book
        noun = 'book' 'booklet'
        adjective = 'red'
    ;
```

Note that dictionary properties use a special "implied list" syntax:
there's no need to enclose a vocabulary property's string list in square
brackets. In fact, the TADS 3 compiler doesn't even allow list notation
for dictionary properties - you *must* use the implied list format.

## <span id="spellingCorrection">Spelling correction</span>

The Dictionary class provides support for spelling correction through
the `correctSpelling()` method, which generates
a list of possible corrections for a misspelled word. This method by
itself doesn't constitute a complete spelling corrector, but it makes it
a lot easier to write a spelling corrector, since it does a lot of the
heavy lifting. Implementing a complete spelling corrector is beyond the
scope of the Dictionary class, since a full corrector would normally use
application-specific context information to rank the possible dictionary
matches to a misspelled word. For example, to correct spelling in an IF
game's command line input, a corrector could analyze the grammatical
context of the misspelled word in the overall command line, as well as
the current state of the world model (such as the list of nearby
objects). That sort of context information is outside of the the
Dictionary class's domain.

You might wonder, then, why the Dictionary class would involve itself in
spelling correction at all. The equivalent functionality of
`correctSpelling()` could be implemented
separately from the Dictionary class, and in fact extension libraries
that do this are already available. If the rest of the spelling
corrector has to be implemented externally, why not this part as well?
The reason is efficiency. Generating a list of candidate words is one of
the key performance bottlenecks in spelling correction, and there's a
special advantage to integrating this process with the Dictionary data.
This isn't just the obvious advantage of a native code version, although
that's also an important factor for such a compute-intensive task. The
bigger advantage is a particularly fast algorithm that's only possible
with direct access to the Dictionary data.

For the technically inclined, here are some details. Most spelling
correctors are based on an "edit distance" formula, usually the
Levenshtein distance. A corrector must take a misspelled input word and
produce a set of candidate corrections based on the edit distance
formula. The fastest algorithms for producing candidate sets based on
the Levenshtein distance use state-machine automata. TADS uses a
relatively new algorithm that's particular efficient. It involves a
special dual automaton that simultaneously traverses a Levenshtein state
machine and a dictionary "trie", which is state machine version of the
dictionary data. The algorithm's efficiency comes from the integration
of the two state machines, which allows the automaton to avoid blind
alleys that a regular Levenshtein automaton has to traverse. The dual
automaton immediately detects dead ends in the Levensthein paths because
it considers the dictionary data at every step. This greatly reduces the
search space and thus the execution time. It would be possible to build
the same algorithm externally by maintaining a side copy of the
dictionary's contents, but that would require some way to keep the copy
synchronized with the main dictionary. It's simpler to build the
algorithm within the dictionary so that everything stays in sync
naturally.

## Dictionary methods

`addWord(*obj*, *str*, *vocabProp*)`



Add an object to the dictionary with the given string and property key.
*str* can be a string value, or can be a list (or Vector or other
[list-like object](opoverload.html#listlike)) containing strings. If
*str* is a list of strings, the result is the same as calling
`addWord()` once for each string in the list. If
the word association to be added is already defined (i.e., another entry
with the same string, object, and property already exists), the new
association is simply ignored. *obj* is the object to associate with the
given vocabulary word or words, and *vocabProp* is the dictionary
property ID (`&noun`,
`&adjective`, etc) to use for the association.



`correctSpelling(*str*, *maxEditDistance*)`



Returns a list of words in the dictionary that are possible spelling
corrections for the given string *str*. The returned list contains each
word defined in the dictionary whose edit distance from *str* is less
than or equal to *maxEditDistance*.

*maxEditDistance* is an integer giving the maximum edit distance to
include in the results.

The edit distance between two words is defined as the smallest number of
single-character insertions, deletions, replacements, and transpositions
necessary to transform one word into another. This is often called the
"Levenshtein distance", but note that our version isn't strictly a
Levenshtein distance because we count transposition as one step. (A
transposition is a reversal of the positions of two adjacent letters,
such as changing "edti" to "edit" by switching the "ti" to "it". The
strict definition of the Levenshtein distance doesn't include
transpositions, so a transposition counts as two steps - an insertion
plus a deletion - in an actual Levenshtein distance.)

The concept of edit distance and its use in spelling correction are well
documented on the Web, so we won't go into a lot more detail here. For
more information, a good starting point is the [Wikipedia
article](http://en.wikipedia.org/wiki/Levenshtein_distance).

The return value is a list with all of the words in the dictionary that
match *str* within the specified maximum edit distance. Any given
dictionary word will appear only once in the returned list. The list is
in arbitrary order. Each element of the list is a sublist, \[*word*,
*dist*, *repl*\]:

- *word* is a string giving the matching dictionary word.
- *dist* is an integer giving the actual edit distance between *word*
  and the search string *str*; this ranges from 0 for an exact match up
  to the maximum edit distance you requested.
- *repl* is the number of character replacements that must be performed
  to transform *str* into *word*. The edit distance *dist* includes this
  figure, since a single-character replacement is one of the edit
  operations counted in the distance. *repl* is called out separately
  because some spelling correctors consider a replacement to be a
  heavier change than other edits, and use replacements to break ties.
  For example, consider "book" and "box" as corrections for "bok": both
  have edit distance 1, but some correctors might choose "book" over
  "box" as the correction because "book" can be corrected by inserting
  an "o", while "box" requires replacing the "k" with an "x".

If the Dictionary has a StringComparator object as its current
comparator, the results will take into account its case folding setting,
truncation length, and character mappings. These "approximations" are
**not** considered to be edits, so they don't count against the maximum
edit distance. Note an important limitation, though: custom comparators
that aren't of the StringComparator class are ignored. If you use your
own object type (not a StringComparator object) as the comparator, this
method will only find matches based on the exact text of the dictionary
words. This limitation is necessary because the custom comparator
interface doesn't provide enough information for the spelling corrector
to figure inexact matches of other kinds.

How do you choose a maximum edit distance? Unfortunately, there's no
theoretically perfect choice. Other factors in the overall design of a
spelling corrector will affect the choice, so the best approach is to
experiment with different distances to find the best one for your
specific implementation. The basic trade-off is that if you pick a value
that's too low, you won't find as many possible matches, so the match
that the user actually intended might be missed; but if you pick a value
that's too high, you'll get lots of false positives, and it'll be hard
to find the right match among all the chaff. Higher distances also make
the search take longer, for obvious reasons.

The literature on spelling correction suggests that 2 is a pretty good
all-purpose limit for edit distance in almost any application. However,
you'll probably do even better by varying this slightly according to the
word length. Our own empirical testing suggests a roughly logarithmic
scale works best: edit distance 1 for short words (four letters or
fewer), 2 for medium words (up to seven letters), and 3 for longer
words. Apart from empirical experience, there are some intuitive reasons
for using these numbers. For very short words (three or four letters),
two edits seems to be too many simply because it's possible to transform
any short word into almost any other short word in two edits. For long
words, the chances of multiple typos increase, and the chances of false
matches thin out considerably, so it seems worthwhile to increase the
distance limit for these words.



`findWord(*str*, *vocabProp*?)`



Search the dictionary for the given string and property ID. Returns a
list giving all of the matching objects; if there are no objects,
returns an empty list. If *vocabProp* is omitted or is
`nil`, the method returns all of the objects
that match the string with *any* property.

The returned list consists of two elements for each matching object. The
first element of each pair is the matching object; the second element is
the return value from the current comparator's
`matchValues()` method for the match. For
example, suppose that the comparator simply returns
`nil` for no match or
`true` for a match; the result list might then
look like this:

```
    [blueBook, true, booklet, true, matchbook, true]
```

The `matchValues()` result is included because
some comparators use the result to supply additional information about
the match. For example, StringComparator encodes information on case
folding, truncation, and equivalence mappings. The caller could use this
information to choose some matches over others, for example.



`forEachWord(*func*)`



Invokes the callback function *func* on each word association in the
dictionary. *func* is invoked as `(*func*)(*obj*,
*str*, *vocabProp*)`, where *obj*, *str*, and *vocabProp* have the
same meanings they do in `addWord()`. Note that
a given string can appear many times in a dictionary, so *func* can be
invoked with the same *str* value multiple times, once for each
string/object/property association.



`isWordDefined(*str*)`



Searches the dictionary for the given string and determines if it's
associated with any objects. If the word occurs in the dictionary at
all, this function returns `true`; otherwise, it
returns `nil`.



`removeWord(*obj*, *str*, *vocabProp*)`



Removes from the dictionary the object's association with the given
string and property ID key. Only the specific association of object,
string, and property is removed; if the same object is also associated
with other strings, the object is not removed from those other
associations, and likewise if the same string and property are
associated with different objects, those object associations are not
removed. *str* can be a string value, or it can be a list (or Vector or
other [list-like object](opoverload.html#listlike)) containing strings.
If it's a list of strings, the result is the same as calling
`removeWord()` separately for each string in the
list. If the word association to be removed is not defined, the
operation is simply ignored.



`setComparator(*compObj*)`



Set the comparator object. All subsequent dictionary operations are
performed with the new comparator object. If *compObj* is
`nil`, the dictionary simply matches input
strings to dictionary strings exactly.

Once installed, the dictionary considers a comparator object to be
immutable. That is, the dictionary assumes that the return values from
the required methods of the comparator for a given set of inputs will
never change. If you want to change the comparison rules for a
dictionary, you must create and install a new comparator object: never
attempt to change the comparison rules by modifying an existing
comparator.

Note that changing the comparator is a relatively expensive operation,
because the dictionary must rebuild its internal table for the new
comparator; programs should thus avoid changing comparators except when
necessary.



## Notes

There are a few other important things to know about dictionaries.

**Dictionaries and garbage collection:** A dictionary references its
objects "weakly." This means that adding an object to a dictionary does
not prevent the garbage collector from deleting the object. If an object
is referenced in a dictionary, but the object becomes otherwise
unreachable, the garbage collector will delete the object, and will at
the same time remove all of the object's associations from the
dictionary. While this might seem strange at first glance, it is
actually very useful, because it means that you don't have to worry
about manually deleting dictionary references to objects that have
become unneeded.

Because dictionaries reference their entries weakly, the mere presence
of an object in a dictionary never keeps the garbage collector from
deleting the object. Hence, if an object in a dictionary becomes
otherwise unreachable, the collector will eventually delete the object.
This is normally desirable, because dictionaries are usually used only
as a performance optimization to make it quicker to find an object given
its name. However, it is sometimes the case that a dictionary is the
primary way to access a group of objects; in these cases, the weak
references that a dictionary uses are undesirable because they don't
prevent your objects from being deleted. In these cases, you must create
some other explicit reference to your objects; an easy way to accomplish
this is to add each such object to a list stored in a property of a
static object. You must take care to remove these explicit references
when their objects are no longer needed, so that the objects can be
deleted.

**Creating dictionaries dynamically:** You can create a dictionary
object at run-time using the `new` operator.
Note that, when doing this, you should be sure to
`\#include \<dict.h\>` in your source file to
ensure that the compiler knows about the Dictionary class.

```
    // include the system header defining the Dictionary class
    #include <dict.h>

    myFunc()
    {
      // create a new dictionary (with the default
      // string comparator)
      local dict = new Dictionary();

      // add some words
      dict.addWord(redBook, 'red', &adjective);
      dict.addWord(redBook, 'book', &noun);
    }
```

**Using multiple dictionaries in the compiler:** You can use multiple
dictionaries at compile-time simply by using a new
`dictionary` statement for each dictionary. You
can switch back to an existing dictionary with another
`dictionary` statement naming the original
dictionary. The `dictionary` statement
establishes the active dictionary, which remains in effect until the
next `dictionary` statement. Multiple
dictionaries might be useful in certain situations, such as when you
want to create different parsing modes, each having their own separate
vocabulary words.

**Dynamic object creation and dictionaries:** When you create a new
simulation object with operator `new`, the
interpreter will **not** automatically add any vocabulary to any
dictionary for the object. While this might seem a deficiency, remember
that the interpreter doesn't think of Dictionary objects as anything
special, so it doesn't have any idea that you might want some random
object creation to have a side effect on a completely unrelated object
(such as a Dictionary).

If you're using the adv3 library, you won't notice this lack of
automatic action on the part of the interpreter, because the adv3
library *does* provide automatic vocabulary handling for new objects,
via constructors in the basic simulation-object classes.

If you're defining your own library, you'll probably want to put
something like this in the constructors for your simulation object base
classes:

```
    class Thing: object
      construct()
      {
        // add all of my vocabulary to the default dictionary
        libDict.addWord(self, noun, &noun);
        libDict.addWord(self, adjective, &adjective);
        libDict.addWord(self, plural, &plural);
      }
    ;
```

As long as each class derived from Thing (or from subclasses of Thing)
properly inherits its superclass constructor from its own constructor,
the library code will take care of adding the vocabulary words for the
new instance, taking advantage of the accessibility of the dictionary
property values that TADS 3 provides.

**Dictionary vs. LookupTable:** The Dictionary class is in some ways
similar to the LookupTable intrinsic class, in that both objects allow
you to associate keys with values and efficiently look up a value by
key. However, Dictionary is considerably more specialized than the
general-purpose LookupTable: Dictionary allows multiple values to be
associated with a key, and provides the composite property/string key.
Dictionary is also designed specifically to store its specialized data,
and makes more efficient use of memory than a more general
implementation would. In addition, Dictionary allows the string
comparison rules to be customized through the comparator object.

## Notes for TADS 2 users

The TADS 2 functions for manipulating the parser dictionary don't exist
in TADS 3. The equivalent functionality is implemented through methods
on the Dictionary object.

Even though code that defines vocabulary words for an object looks
similar to the way it did in TADS 2, though, there are some important
differences:

- First, the `noun` and
  `adjective` properties behave at run-time like
  ordinary properties: the compiler sets the values of these properties
  to simple string lists containing the strings actually defined, plus
  any strings inherited from superclasses. You can use and modify these
  properties during program execution just like any other, but since
  they're nothing special to the interpreter, changing them has no
  effect on the dictionary. Updating the dictionary requires explicitly
  using Dictionary methods (`addWord()`, etc).
- Second, the Dictionary object created by the
  `dictionary` statement is a full-fledged
  object at run-time. This means that you can call Dictionary methods on
  this object in your program, to look up words and modify the
  dictionary dynamically. There was no equivalent object in TADS 2.



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Dictionary  
<span class="navnp"><a href="date.html" class="nav"><em>Prev:</em> Date</a>
    <a href="dynfunc.html" class="nav"><em>Next:</em> DynamicFunc</a>    
</span>


