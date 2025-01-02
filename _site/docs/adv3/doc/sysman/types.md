<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="langsec.htm" class="nav">The Language</a> \> Fundamental
Datatypes  
<span class="navnp"><a href="preproc.htm" class="nav"><em>Prev:</em> The Preprocessor</a>
    <a href="strlit.htm" class="nav"><em>Next:</em> String Literals</a>
    </span>

</div>

<div class="main">

# Fundamental Datatypes

This section describes the fundamental ("primitive") datatypes of the
TADS 3 Virtual Machine. These are the values that variables, function
and method parameters, object properties, list elements can hold and
that expressions can yield.

TADS 3 uses what's called strong run-time typing. It's *strong* in that
each value is of a definite type; this is in contrast to languages where
values can be interpreted in various ways according to context, or
freely coerced between unrelated types by reinterpreting a value's raw
bit pattern. It's *run-time* typing in that value containers - things
like variables and object properties - are free to hold any type, and
can hold different types at different times. You don't ever tell the
compiler which type of value a variable can hold, as you would in a
"statically typed" language like C or Java, since in TADS, any variable
can hold any type of value.

The T3 VM implements run-time typing by "tagging" each value with its
type. Every value stored in a local variable, an object property, a list
element, or anywhere else - even in temporary VM registers - is tagged
with its datatype. This lets you determine a given value's type at any
time, and lets the VM automatically determine how to handle a given
calculation with a given set of input values.

## nil and true

<span class="code">nil</span> is a special value that means "false" in
contexts where a condition is being tested (such as an
<span class="code">if</span> and <span class="code">for</span>
statements, or the <span class="code">&&</span> or
<span class="code">\|\|</span> operators). <span class="code">nil</span>
is also used to represent "empty" values; in particular, it's frequently
used where an object reference would otherwise be used to mean "no
object."

<span class="code">true</span> is a special value that means "true" in
condition contexts.

## Integer

This is the basic numeric datatype. It's represented as a 32-bit signed
binary integer value. This type can hold values from -2147483648 to
+2147483647 (inclusive).

Integer constants can be written in source code in decimal, hexadecimal,
or octal:

- A decimal integer constant is a non-zero digit (1 to 9) followed by
  zero or more decimal digits (0 to 9), or simply the digit 0 by itself:
  <span class="code">15 25 2147483647</span>
- A hexadecimal integer constant is written as
  <span class="code">0x</span> followed by one or more hex digits (0 to
  9, a to f, or A to F): <span class="code">0x1A 0xFFFF
  0x10000000</span>
- An octal integer constant is written as 0 followed by one or more
  octal digits (0 to 7): <span class="code">0177 0100</span>

Integers can be used with the arithmetic operators, the comparison
operators, the "bitwise" logic operators, and the logical operators
(<span class="code">&&</span>, <span class="code">\|\|</span>,
<span class="code">!</span>).

When integers are used with logical operators, with <span class="code">?
:</span>, or as condition expressions in <span class="code">if</span>,
<span class="code">for</span>, <span class="code">while</span>,
<span class="code">do</span>...<span class="code">while</span>
statements, 0 is treated as "false" and any non-zero value is treated as
"true."

## Enumerator

An enumerator is a symbolic value representing a unique entity.
Internally, the compiler assigns an arbitrary 32-bit integer value to
each enumerator; within a given program, each enumerator has a unique
value, so it's guaranteed that <span class="code">a != b</span> for any
two distinct enumerator names <span class="code">a</span> and
<span class="code">b</span> in a single program.

Enumerator symbols are defined with the <span class="code">enum</span>
statement:

<div class="syntax">

    enum symbol [ , ... ]  ;

</div>

For example,

<div class="code">

    enum red, blue, green;

</div>

Once an enumerator symbol is defined, you can simply refer to it by name
in expressions:

<div class="code">

    local x = red;

</div>

(Although enumerators are *represented* as integers internally, they're
not integer values from the program's perspective. "Enumerator" is a
distinct type from Integer. Enumerator values cannot be used with the
arithmetic operators, for example, and comparing an enumerator to an
integer value will always yield "unequal," *even if the enumerator's
internal integer value happens to be equal to the given integer.*)

See the section on [enumerators](enum.htm) for more details.

## Property ID

A property ID is an internal identifier that the compiler assigns to a
property name symbol. The compiler assigns a unique, arbitrary ID to
each property symbol used anywhere within a program.

You obtain a property ID value using the <span class="code">&</span>
operator:

<div class="code">

    local a = &getOwner;

</div>

This doesn't evaluate the property <span class="code">getOwner</span> on
any object; instead, it simply stores the ID of
<span class="code">getOwner</span> in the local variable
<span class="code">a</span>. This variable can be used to evaluate the
property on a particular object at a later time, using the
<span class="code">.</span> operator:

<div class="code">

    owner = someObj.(a);

</div>

## Function pointer

A function pointer is an internal identifer that the compiler assigns to
a function. The compiler assigns a unique, arbitrary ID to each function
defined in a program.

You obtain a function pointer value by referring to the function name
*without an argument list*, and without any parentheses after its name.
This doesn't invoke the function, but rather simply yields a pointer to
the function, which you can store in a variable for later use. You can
later invoke the function to which the pointer refers using the
<span class="code">( )</span> function-call operator.

<div class="code">

    times2(x)
    {
      return x*2;
    }

    main(args)
    {
      // get a pointer to times2
      local f = times2;

      // later... call through the pointer
      local x = (f)(7);
    }

</div>

You can also get a pointer to a function using the
<span class="code">&</span> operator, although it's not required:

<div class="code">

    local f = &times2;

</div>

## Pointer to built-in function

Just as you can get a pointer to a function you've defined, you can get
a pointer to a built-in function. In this case the
<span class="code">&</span> operator is mandatory, because merely
writing the name of a built-in function has the effect of calling it,
even without arguments. The <span class="code">&</span> operator tells
the compiler that you don't actually want to call the function, but
merely want a pointer to it:

<div class="code">

    local f = &tadsSay;

</div>

Once you have a built-in function pointer value, you can do the same
sorts of things with it that you can do with a regular function pointer,
such as calling the function via the pointer:

<div class="code">

    local f = &tadsSay;
    f('Hello, world, indirectly!\n');

</div>

## List

A list is an ordered collection of values. The elements in a list can
contain any type of value, and types can be freely mixed (that is, the
elements don't need to be of the same type).

A list constant is written in source code by enclosing a comma-separated
list of values in square brackets:

<div class="code">

    local lst = [5, 4, 3, 2, 1];

</div>

This creates a list of five elements, with the integer value 5 as the
first element, 4 as the second element, and so on.

The elements of a list can be obtained by indexing the list with the
<span class="code">\[ \]</span> operator:

<div class="code">

    local a = lst[4];

</div>

The expression inside the square brackets is the *index* expression;
this must evaluate to an integer from 1 to the number of elements in the
list.

A list is a type of object, of class List, and provides a number of
methods that perform operations on the list. Lists can also be used with
certain operators; the <span class="code">+</span> operator can be used
to create a new list by appending elements to an existing list's
contents, for example.

Lists are "immutable," meaning that a given list object's contents
cannot be changed during execution. Operations that manipulate lists
therefore must create new lists any time a list's contents are to be
amended.

Because lists are objects, a "list value" that's stored in a variable is
actually a *reference* to a List object.

For more details on lists, see the section on the [List intrinsic
type](list.htm).

## String

A string is an ordered set of Unicode characters. A string constant is
written in source code by enclosing a sequence of characters in
single-quote marks:

<div class="code">

    local str = 'Hello, world!';

</div>

A string is a type of object, of class String, and provides a number of
methods that perform operations on the string. Strings can also be used
with certain operators; the <span class="code">+</span> operator can be
used to create a new string by concatenating the contents of a given
string with another string's contents, for example.

Strings are "immutable," meaning that a given string object's contents
cannot be changed during execution. Operations that manipulate strings
therefore must create new strings any time a string's contents are to be
amended.

Because strings are objects, a "string value" that's stored in a
variable is actually a *reference* to a String object.

The [String Literals](strlit.htm) chapter has details on how to enter
strings in a program's source code. For information on manipulating
string objects, see the [String intrinsic type](string.htm) section.

## Object

An object is a data structure that combines data values and procedural
code into a single package. The data values are called "properties," and
the procedural code elements are called "methods." Each property and
method of an object is identified by a property ID, and can be retrieved
(in the case of a property) or invoked (in the case of a method) by
using the <span class="code">.</span> operator to combine the object's
reference with the property ID of the property or method.

Each object has an internal identifier assigned by the VM; this is
called a "reference" to the object. Variables and other value containers
can store these reference values.

We sometimes say that a variable "contains an object," but when we say
this we always actually mean that the variable contains a reference to
that object. The actual *contents* of an object are always off in a
private memory area managed by the VM; an object's contents are never
actually stored inside a variable (or a list element, object property,
etc).

Each object has one or more "superclasses." A superclass of an object is
simply another object - typically a "class" object - from which the
object "inherits" properties and mehods. An object is said to be a
"subclass" of a given class if the given class is among the object's
immediate superclasses, or if any of the object's immediate superclasses
are subclasses of the given class.

The syntax for defining objects is described in more detail in the
section on [defining objects](objdef.htm).

All objects are subclasses of the root object class, Object. This class
provides a number of methods, which all objects inherit. See the [Object
intrinsic class](objic.htm) section for details

## Intrinsic Classes

In addition to the fundamental types above, the T3 VM has a number of
"intrinsic" classes. These are object classes that are implemented
within the VM itself, which lets them provide special functionality that
would be difficult or impossible to implement directly within TADS 3
code. For the most part, the special functionality involves either
access to the external operating system environment, or processing
that's computationally intensive enough and frequent enough to justify
being implemented in native machine code.

Intrinsic classes work essentially like ordinary objects, which lets
them provide their special functionality through the same
property/method interfaces that ordinary objects use.

The intrinsic classes are covered in detail in their own sections, but
we'll provide a quick reference to them here.

### BigNumber

The BigNumber class provides high-precision integer and floating-point
arithimetic.

The compiler makes BigNumber look almost like a native type, in that you
can create BigNumber objects simply by writing floating-point constants
in ordinary expressions, and you can use BigNumber values with the
arithmetic operators. You can also combine integers and BigNumber values
with the arithmetic operators; when you do, the result is a BigNumber
with the same precision as the BigNumber operand.

A floating-point constant is written in the following format:

<div class="syntax">

    digits [ . [ digits ]  ]  [ E [ + | - ]  digits ] 

</div>

The <span class="code">E</span> (which can be upper- or lower-case) can
be used for "scientific notation," to specify a power of ten by which to
multiply the part before the <span class="code">E</span>. For example,
<span class="code">1.25e9</span> means 1.25×10<sup>9</sup>, or 1.25
billion, and <span class="code">7.20e-3</span> means
7.20×10<sup>-3</sup>, or 0.00720.

Zeros at the end of a floating-point constant are meaningful, because
they indicate additional precision. The compiler determines the
precision of each floating-point constant in the source code by counting
the number of digits starting with the first "significant" figure, and
*including* trailing zeros. The first significant figure is the first
non-zero digit. For example, <span class="code">0.000010</span> has a
precision of 2, since the first significant figure is the 1, and the
trailing zero counts as another.

See the [BigNumber](bignum.htm) section for details.

### ByteArray

The ByteArray class provides an array of raw bytes ("octets"), which is
useful for manipulating binary files.

Refer to the [ByteArray](bytearr.htm) section.

### CharacterSet

The CharacterSet class provides services for mapping between Unicode
(which the VM uses internally) and nearly any other character encoding.
This is useful for reading and writing external text files.

Refer to the [CharacterSet](charset.htm) section.

### Collection

The Collection class is the common base class for List, Vector, and
LookupTable. This class defines a basic interface in common to all of
the Collection classes, which lets you write certain code so that it
works uniformly with any collection type.

Refer to the [Collection](collect.htm) section.

### Dictionary

The Dictionary class is a specialized lookup table that maintains
vocabulary data for input parsers built with the GrammarProd class. The
compiler has special features that make it easier to populate a
Dictionary object's contents.

Refer to the [Dictionary](dict.htm) section.

### File

The File class provides input/output services for manipulating external
files.

Refer to the [File](file.htm) section.

### GrammarProd

The GrammarProd class is a specialized pattern-matching class designed
for implementing input parsers. The compiler has special features
(specifically the <span class="code">grammar</span> object declaration
statement) that make it easier to create GrammarProd objects.

Refer to the [GrammarProd](gramprod.htm) section.

### IntrinsicClass

The IntrinsicClass class is an internal type that's used to represent an
intrinsic class. For uniformity in the type system, each intrinsic class
is itself represented by an object, and that object is of this class.
For example, the Iterator class is represented by an object called
Iterator, which is of class IntrinsicClass. Naturally, the
IntrinsicClass class is represented by an object called IntrinsicClass
of class IntrinsicClass.

Refer to the [IntrinsicClass](icic.htm) section.

### Iterator

The Iterator class provides a generic interface for stepping through the
contents of a Collection. The <span class="code">foreach</span>
statement uses an Iterator internally to carry out its iteration, but
you can use these objects explicitly as well.

Refer to the [Iterator](iter.htm) section.

### LookupTable

The LookupTable class provides "hash table" functionality, also known as
an "associative array." This is a collection that behaves like an array,
except that the index values can be arbitrary "key" values, not just
integers.

Refer to the [LookupTable](lookup.htm) section.

### RexPattern

The RexPattern class stores a "compiled regular expression." A regular
expression is a string written in a special format, representing a
pattern that can be searched for in other strings. A compiled regular
expression is a processed version of this type of string, which the VM
uses internally to search for the pattern. The processing step takes
some CPU time to perform, so you might be able to make your program run
a little faster by pre-compiling regular expression patterns you use
frequently.

Refer to the [RexPattern](rexpat.htm) section.

### StringComparator

The StringComparator class is a fast, native-code implementation of the
Dictionary class's special interface for comparing input text to
dictionary words. StringComparator offers a number of customizable
options that let you control how input strings are interpreted. The
customization options are especially useful for non-English languages
where accented characters are common.

Refer to the [StringComparator](strcomp.htm) section.

### TadsObject

The TadsObject class is the base class for all objects defined in source
code.

Refer to the [TadsObject](tadsobj.htm) section.

### Vector

The Vector class is similar to the basic List class, but with one
important difference: Vectors are "mutable," meaning that the elements
and length of a Vector can be changed dynamically during execution.

Refer to the [Vector](vector.htm) section.

### WeakRefLookupTable

A WeakRefLookupTable is a special type of LookupTable that only "weakly"
references its elements. (A weak reference is different from an ordinary
reference in that the garbage collector is free to discard objects that
are reachable only through weak references; when the garbage collector
does discard such objects, it clears the weak references by setting them
to <span class="code">nil</span>.)

Weak reference tables are useful for setting up caches and indices and
the like, since they let you create a table that maps objects as long as
they're around, but doesn't itself force them to stay around.

Refer to the [WeakRefLookupTable](wlookup.htm) section.

## Notes for TADS 2 Users

In TADS 2, list constants could be specified by separating the elements
with commas *or* spaces. TADS 3 requires commas to be used as separators
in all cases.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="langsec.htm" class="nav">The Language</a> \> Fundamental
Datatypes  
<span class="navnp"><a href="preproc.htm" class="nav"><em>Prev:</em> The Preprocessor</a>
    <a href="strlit.htm" class="nav"><em>Next:</em> String Literals</a>
    </span>

</div>