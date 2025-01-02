---
layout: docs
---
Inline Objects



<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Inline Objects  
<span class="navnp"><a href="objdef.html" class="nav"><em>Prev:</em> Object Definitions</a>
    <a href="opoverload.html" class="nav"><em>Next:</em> Operator
Overloading</a>     </span>





# Inline Objects

Most [object definitions](objdef.html) in a TADS game are at the "top
level" of the program's source code, outside of any functions or other
object definitions. Sometimes, though, it's convenient to be able to
define an object right in the middle of some other program code. For
example, you might need to create an object whose only purpose is to
serve as an argument to a function call, to pass information to the
function. In this case, it's inconvenient to have to define the object
at the top level, some distance away from the function call where it's
used; it also makes the code harder to read, since you have to go find
that separate object definition to see what it contains.

This is where inline objects come into play. An inline object is similar
to an ordinary top-level object, but you can define it in the middle of
a function or method.

Inline objects are analogous to [anonymous functions](anonfn.html). An
anonymous function lets you define a snippet of executable code right
where you need it; an inline object lets you define a whole object right
where you need it. Like anonymous functions, methods within an inline
object can reference local variables from the enclosing scope. Inline
objects are useful for many of the same coding patterns where anonymous
functions are useful.

## Basic syntax

The syntax for defining an inline object is very similar to the syntax
for a regular top-level object. The main difference is the placement in
the program. A top-level object is defined outside of any function or
method code, whereas an inline object is defined within an expression.
You can place an inline object definition anywhere you could write the
name of a regular object.

An inline object definition always starts with the keyword
`object`. You can optionally follow that with a
colon and a superclass list; then you write the property list for the
object, in braces. Note that enclosing the property list in braces is
optional for a top-level object, but required for an inline object.

Here's an example that creates an object with no superclasses and a
single property:

```
    func()
    {
       local o = object { weight = 10; };
    }
```

When this code runs, the `object { ... }`
expression behaves like a `new` expression: it
creates a new object instance at the moment the
`object` expression is evaluated. The
`weight` property is added to the new object,
and the overall expression yields a reference to the new object as its
result. If you run this code multiple times, you'll create a separate
object each time through.

Here's an example that creates an object of the Adv3 Thing class:

```
    func()
    {
       local box = object: Thing {
          name = 'box';
          desc = "It's a large cardboard box. ";
       };
    }
```

An inline object expression is truly an expression, so you can use it
anywhere you could write any other expression; you're not limited to
using it in local variable initializers as we've done so far. You could
just as well use an inline object as an argument to a function call:

```
    func()
    {
       addToScope(object: Thing {
          name = 'box';
          desc = "It's a large cardbox box. ";
       });
    }
```

## Methods

An inline object can define methods, just like any other object. Inline
object methods use the same syntax as for top-level object methods.

```
    func()
    {
       local o = object: Thing {
           hideFromAll(action) { return action.ofKind(TakeAction); }
       };
    }
```

Inline object methods have an important additional capability that
regular top-level object methods don't have. An inline object method can
access the local variables in the enclosing scope, just like an
anonymous function can:

```
    func()
    {
       local owner = bob;
       local o = object: Thing {
           isOwnedBy(obj) { return obj == owner; }
       };
    }
```

As with anonymous functions, an inline object method can both read and
write local variables in the enclosing scope.

## Static properties

For top-level objects, a static property is evaluated when the program
is compiled, fixing the property at an initial value rather than
evaluating the property expression again each time the property is
referenced.

For an inline object, it's obviously not possible to evaluate a static
property when the program is compiled, since an inline object isn't
created until its `object` expression is
executed. Instead, static properties of an inline object are evaluated
when the object is created - that is, when the
`object` expression is executed. As with a
top-level object, a static property is fixed at its initial value,
rather than being re-evaluated each time the property is referenced.

```
    func()
    {
       local x = 'original';
       local o = object {
          prop1 = static x;
          prop2 = x;
       };
       x = 'updated';
       "o.prop1=<<o.prop1>>, o.prop2=<<o.prop2>>\n";
    }
```

When you run this example, it will display:

```
    o.prop1=original, o.prop2=updated
```

See how this works? prop1 is defined as static, so it evaluates its
expression - the local variable `x` from the
enclosing scope - at the moment the object is created, and saves that
value. prop2, on the other hand, isn't static, which means that its
expression is evaluated anew every time
`o.prop2` is evaluated. Since we've changed the
value of `x` before we evaluate
`o.prop2`, we get the updated value.

## Nested objects

You can use nested objects within inline objects, just like in top-level
objects. A nested object is itself an inline object expression, so its
methods can access local variables in the enclosing scope. A nested
object definition is treated as a static property of the enclosing
object, which means that the nested object is created at the same time
as the enclosing inline object, and the property is set to a reference
to the newly created object.

```
    func()
    {
       local o = object {
          name = 'inline object';
          subobj: object {
             name = 'inline nested object';
          };
       };
    }
```

In this example, when the outer `object`
expression is executed, the system creates an object to represent the
outer object. It then creates a second object for the nested object, and
stores a reference to it in `o.subobj`.

## Constructors

When an inline object expression is evaluated, the system creates a new
instance of the specified class or class list, and initializes the new
instance with the properties and methods contained in the expression. If
the inline object contains an explicit
`construct()` method, the system then calls that
`construct()` method, with no arguments. If the
object doesn't define a `construct()` method of
its own, the system doesn't call any constructor for the object at all,
including inherited constructors. This means that if you want to invoke
inherited base class constructors, you have to do so explicitly, by
specifying a `construct()` method like this:

```
    construct() { inherited(); }
```

The rationale for calling the constructor only if it's explicitly
defined has two parts. The first part is that the property list in the
inline object definition accomplishes essentially the same thing that a
typical constructor does, which is to initialize the object's properties
with suitable parameter values at the time the object is created. To
that extent, the normal constructor call would be redundant. The second
part is that any inherited constructors might require arguments, and
unlike the `new` operator, the inline object
syntax doesn't have a way to specify any constructor arguments. Writing
an explicit `construct()` method solves this
problem, since you can specify whatever arguments are required for the
base class constructor in the `inherited()`
call.



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Inline Objects  
<span class="navnp"><a href="objdef.html" class="nav"><em>Prev:</em> Object Definitions</a>
    <a href="opoverload.html" class="nav"><em>Next:</em> Operator
Overloading</a>     </span>


