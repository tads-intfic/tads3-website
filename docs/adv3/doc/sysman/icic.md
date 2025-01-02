<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="builtins.htm" class="nav">The Intrinsics</a> \>
IntrinsicClass  
<span class="navnp"><a href="httpsrv.htm" class="nav"><em>Prev:</em> HTTPServer</a>
    <a href="iter.htm" class="nav"><em>Next:</em> Iterator</a>    
</span>

</div>

<div class="main">

# IntrinsicClass

Each intrinsic class that a program uses is represented by an instance
of the intrinsic class IntrinsicClass. If you didn't major in college in
computer science, don't worry if contemplating the circularity of this
notion induces a slight spinning sensation; the IntrinsicClass intrinsic
class has only a couple of practical applications, which are pretty
straightforward.

Each time you use the <span class="code">intrinsic class</span>
statement to define an intrinsic class, the compiler implicitly creates
an instance of IntrinsicClass to represent the intrinsic class.
(Actually, *you* probably won't ever use the
<span class="code">intrinsic class</span> statement; you'll probably
just <span class="code">\#include</span> system header files that use
it.) The compiler gives this instance the same name as the class. For
example, consider the following statement:

<div class="code">

    intrinsic class BigNumber 'bignumber' { }

</div>

This defines an intrinsic class called BigNumber. It also creates an
object of intrinsic class IntrinsicClass, and calls the object
BigNumber.

## Using IntrinsicClass instances

IntrinsicClass objects exist simply to serve as identifiers for the
classes of the built-in object types, such as String, List, Vector,
LookupTable, and so on. There are two main situations where it's
important to have this kind of identifiers:

- with the ofKind() method
- with the getSuperclassList() method

## The ofKind() method

ofKind() returns <span class="code">true</span> if the argument is the
IntrinsicClass object representing the intrinsic class of the first
argument. For example:

<div class="code">

    local x = new BigNumber('100');
      
    tadsSay(x.ofKind(BigNumber) ? 'yes' : 'no'); "; ";
    tadsSay(x.ofKind(Dictionary) ? 'yes' : 'no'); "\n";

</div>

This will display "yes; no", because the object is an instance of the
BigNumber intrinsic class, and is not an instance of the Dictionary
intrinsic class.

## The getSuperclassList() method

getSuperclassList() returns a list of the immediate superclasses of a
given object. If the object is an instance of an intrinsic class, the
list will have one element, which is the IntrinsicClass object
representing the intrinsic class. For example:

<div class="code">

    x = new BigNumber('100');
    y = x.getSuperclassList();

</div>

The value of <span class="code">y</span> will be
<span class="code">\[BigNumber\]</span>.

Most intrinsic classes derive from an "abstract" intrinsic class called
Object, so, for example,
<span class="code">BigNumber.getSuperclassList()</span> will return
<span class="code">\[Object\]</span>. Object itself has no superclass,
so <span class="code">Object.getSuperclassList()</span> will return an
empty list.

## IntrinsicClass methods

<span class="code">isIntrinsicClass(*val*)</span>

<div class="fdef">

Returns <span class="code">true</span> if *val* is an IntrinsicClass
object, <span class="code">nil</span> if not.

This is a class method, so you call this method directly on
IntrinsicClass itself:

<div class="code">

    if (IntrinsicClass.isIntrinsicClass(x))
      "x is an intrinsic class instance!\n";

</div>

At first glance, this method might seem redundant with
<span class="code">ofKind()</span> and
<span class="code">getSuperclassList()</span>. It's not, though: those
methods don't let you determine if you're dealing with an IntrinsicClass
object, because they instead yield information about the *inheritance*
structure for the intrinsic types. IntrinsicClass is used only for the
*representation* of these objects, and isn't involved in the inheritance
structure.

For example, <span class="code">\[1,2,3\].getSuperclassList()</span>
yields <span class="code">\[List\]</span>, and
<span class="code">List.getSuperclassList()</span> yields
<span class="code">\[Object\]</span>. Since
<span class="code">Object</span> is the root object,
<span class="code">Object.getSuperclassList()</span> yields an empty
list. In order for the type system to be internally consistent,
<span class="code">ofKind()</span> must report information that's
consistent with <span class="code">getSuperclassList()</span>, so
<span class="code">List.ofKind(IntrinsicClass)</span> must return
<span class="code">nil</span>: IntrinsicClass isn't anywhere in
<span class="code">List</span>'s superclass tree, so
<span class="code">List</span> must not be of kind
<span class="code">IntrinsicClass</span>.

That's why <span class="code">isIntrinsicClass()</span> is needed. It's
occasionally useful to know when you're dealing with an intrinsic class
representation object, and the normal means of class relationship
testing don't work for this test.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="builtins.htm" class="nav">The Intrinsics</a> \>
IntrinsicClass  
<span class="navnp"><a href="httpsrv.htm" class="nav"><em>Prev:</em> HTTPServer</a>
    <a href="iter.htm" class="nav"><em>Next:</em> Iterator</a>    
</span>

</div>

</div>