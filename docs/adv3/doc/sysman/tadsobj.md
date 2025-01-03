---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> TadsObject  
<span class="navnp"><a href="strcomp.html" class="nav"><em>Prev:</em> StringComparator</a>
    <a href="tempfile.html" class="nav"><em>Next:</em> TemporaryFile</a>
    </span>
# TadsObject

The objects and classes that you define in your program are of intrinsic
class TadsObject. Everything that has "object" as its superclass is
really a subclass of intrinsic class TadsObject.

For example:

```
    class Item: object;
    myObj: object;
```

Both Item and myObj are of intrinsic class TadsObject.

## TadsObject methods

TadsObject is a subclass of the root intrinsic class, Object, so all of
the methods that Object defines are inherited by TadsObject instances as
well. In addition to the Object methods, TadsObject provides its own
methods, described below.

`createClone()`



Creates a new object that is an identical copy of this object. The new
object will have the same superclasses as the original, and the
identical set of properties defined in the original.

No constructor is called in creating the new object, since the object is
explicitly initialized by this method to have the exact property values
of the original.

The clone is a "shallow" copy of the original, which means that the
clone refers to all of the same objects as the original. For example, if
a property of the original points to a Vector, the corresponding
property of the clone points to the same Vector, not a copy of the
Vector.



`createInstance(...)`



Creates a new instance of the target object. This method's arguments are
passed directly to the constructor, if any, of the new object; this
method doesn't make any other use of the arguments. The method creates
the object, invokes the new object's constructor, then returns the new
object.

This method can be especially useful in static methods defined in base
classes that are further subclassed, because it essentially allows a
parameterized "new" operator. For example, suppose we had a base class,
Coin, which you subclass into several types: GoldCoin, SilverCoin,
CopperCoin. For each of these classes, you want to provide a method that
creates a new instance of that kind of coin. Using the
`new` operator, you'd have to write a separate
method in each subclass:

```
    class Coin: object;
    class GoldCoin: Coin
      createCoin() { return new GoldCoin(); }
    ;
    class SilverCoin: Coin
      createCoin() { return new SilverCoin(); }
    ;
    class CopperCoin: Coin
      createCoin() { return new CopperCoin(); }
    ;
```

This gets increasingly tedious as we add new subclasses. What we'd
really like to do is something like this:

```
    class Coin: object
      createCoin() { return new self(); } // illegal!
    ;
```

This would let all the subclasses inherit this one implementation, which
would create the appropriate kind of object depending on the subclass on
which the method was invoked. We can't write exactly this code, though,
because the `new` operator doesn't allow a
variable like `self` to be used as its argument.

So, it's `createInstance()` to the rescue. This
method lets us do exactly what we'd like: create an instance of the
current class, writing the code only once in the base class. Using
`createInstance(),` we can rewrite the method to
get the effect we want:

```
    class Coin: object
      createCoin() { return createInstance(); }
    ;
```
`createInstanceOf(...)`



Creates a new instance based on multiple superclasses. This is a static
(class-level) method, so you can call it directly on TadsObject. With no
arguments, this simply creates a basic TadsObject instance; this is
equivalent to the `createInstance()` method.

The arguments give the superclasses, in "dominance" order. The
superclasses appear in the argument list in the same order in which
they'd appear in an object definition: the first argument corresponds to
the leftmost superclass in an ordinary object definition. Each argument
is either a class or a list. If an argument is a list, the first element
of the list must be a class, and the remainder of the elements are the
arguments to pass to that class's constructor. If an argument is simply
a class (not a list), then the constructor for this superclass is not
invoked at all.

For example, suppose we had the following class definitions:

```
    class A: object
      construct(a, b) { ... }
    ;

    class B: object
      construct(a, b, c) { ... }
    ;

    class C: object
      construct() { ... }
    ;

    class D: A, B, C
      construct(x, y)
      {
        inherited A(x, y);
        inherited C();

      }
    ;
```

Now, suppose that we had never actually defined class D, but we want to
create an instance dynamically as though it class D had been defined. We
could obtain this effect like so:

```
    local d = TadsObject.createInstanceOf([A, x, y], B, [C]);
```

This creates a new instance with superclasses A, B, and C, in that
dominance order. During construction of the new object, we will inherit
A's constructor, passing `(x,y)` as arguments,
and we'll inherit C's constructor with no arguments. Note that we pass a
list containing C alone; this indicates that we do want to call the
constructor, since the argument is passed as a list rather than as
simply the object C, but that we have no arguments to send to C's
constructor. Note also that we don't invoke B's constructor at all,
since B is specified without being wrapped in a list.

Note that if constructors are invoked at all, they can only be called in
the same order in which they appear in the superclass list.



`createTransientInstance(...)`



This works like `createInstance()`, except that
the new instance is transient.



`createTransientInstanceOf(...)`



This works like `createInstanceOf()`, except
that the new instance is transient.



`getMethod(*prop*)`



Gets a function pointer to one of the object's methods. *prop* is a
property pointer value giving the property of the object to retrieve. If
this property contains a method, `getMethod()`
returns a function pointer to the method's code. If the property
contains a self-printing string, the return value is an ordinary string
value with the text of the printed string. If the property is any other
type of data, or is undefined, the result is
`nil`.

Note that a double-quoted string that contains embedded ("interpolated")
expressions with `\<\< \>\>` is really a
function. This means that if you call
`getMethod()` on a property containing a string
with embedded expressions, you'll get back a function pointer result
rather than a string expression.

When the returned value is a function, it can be called like an ordinary
function. You wouldn't normally do this, though, because the call would
have a `nil` value for
`self`, which means that the method would
trigger a run-time error if it tried to access any properties or other
methods of `self`. Instead, the main use for the
returned function pointer would be to assign the function as a different
method of the same object, or as a method of another object, using
`setMethod()`.

Note that `getMethod()` can also return an
anonymous function object. Methods originally defined in the source code
will always be returned as regular function pointers (of type
TypeFuncPtr). An anonymous function will be returned only for a method
that was explicitly set to an anonymous functions via
`setMethod()`. In this case, the same anonymous
function object that was passed to `setMethod()`
will be returned from `getMethod()`.

(Ordinary methods are also "anonymous" functions in that they're not
named. But these aren't what we normally call anonymous function
objects, which are the type of object created with the
`function` syntax.)



<span id="setMethod"></span>

`setMethod(*prop*, *func*)`



Assigns the function *func* as a method of the object, using the
property *prop*.

*prop* is the property pointer to assign. This specifies the property
that will be used for the newly assigned method. Any previous method or
data value for this property will be replaced with the new function.

*func* can be:

- A regular (named) function pointer, which becomes a method with the
  same arguments as the function. The function itself isn't changed by
  this; you can also still call it directly as an ordinary function.
- A [floating method](proccode.html#floatingMethods) pointer, which
  becomes a method with the same arguments.
- An anonymous function, which becomes a method with the same arguments
  as the anonymous function. The anonymous function itself isn't changed
  in any way by this; you can still call it directly, too.
- An anonymous method, which becomes a method with the same arguments as
  the anonymous method.
- A [DynamicFunc](dynfunc.html), which becomes a method with the same
  arguments as the dynamically compiled code.
- A single-quoted string value, which will be displayed on evaluating
  the property, as though it had been initially defined as a
  double-quoted string property of the object.
- Any value retrieved by a call to
  `getMethod()`, on this object or any other
  object.

After calling this method, invoking *prop* on this object will result in
calling the function *func* as though it had always been a method of the
object. `self` will be set, and the method can
use `inherited` to inherit from this object's
class structure.

It's important to note how the naming works. The new method is callable
under the name *prop* - **not** under the name of the function that was
used to create it. For example:

```
    method foo(x) { return x*x; }
    obj: object;

    main(args)
    {
      obj.setMethod(&square, foo);
      local x = obj.square(10);
    }
```

The name of the new method is `square`, *not*
`foo`. `foo` is still
just a floating method; the new, full-fledged method is established
under the property name, not the function name.

The method relationship created by `setMethod()`
is non-exclusive. You're free to use
`setMethod()` to assign the same function
pointer (or other value) as a method of multiple objects at once. The
value doesn't lose its regular meaning, either: as we said above, if you
supply a function pointer to `setMethod()`, you
can still call the same function as an ordinary function, too.

Note that when you define an ordinary function, the compiler doesn't let
you refer to `self` or any other method context
variables (such as `targetprop` or
`definingobj`) within the function body, since
these variables normally aren't valid in a function. This also means
that you can't define a function that uses
`inherited` or
`delegated`. There are two ways of dealing with
this:

- First, you can define a method of one object, and "move" it to a
  different object: use `getMethod()` to
  retrieve the method information from the original object, and pass the
  result to `setMethod()` to add the method to
  the other object. `self` and the other method
  context variables are dynamic, so they'll automatically reflect the
  new object context when you call the moved version of the method.
  (This doesn't really move the method; it really just copies it. You
  can still call it in the old object as well, where it will still
  reflect its original context.) This is a good approach when you need
  the same method functionality in an ordinary object anyway, since you
  can simply copy it as needed to new objects.
- Second, you can use the `method` syntax to
  define a [floating method](proccode.html#floatingMethods), which is
  really just an ordinary function that *does* have access to
  `self`, `targetprop`,
  and the others, and that can use `inherited`
  and `delegated`. This is a good approach when
  the function's only purpose is to be plugged into objects via
  `setMethod()`, since it avoids creating a
  dummy template object just to define a method.

When you use an anonymous function with
`setMethod()`, you should keep in mind that
`self` and the other method context variables
are shared with the scope where the function was defined. Consider this
example:

```
    obj1: object
       init()
       {
           obj2.setMethod(&a, { x: self.prop = x; });
       }
    ;
    obj2: object
       prop = nil
    ;

    main(args)
    {
        obj1.init();
        obj2.a(100);
    }
```

Here we've set up a new method for `obj2`, named
`a`. We then invoke the new method. The question
is: what's the value of `obj2.prop` when we're
done? At first glance you might think it should be 100, since the newly
created method sets `self.prop` to the argument
value, and the new method is part of `obj2`,
ergo we must be setting `obj2.prop` to 100. But
that's not what happens: the value of
`obj2.prop` is `nil`
when we're done.

The reason is the little detail we mentioned about how an anonymous
function shares its method context with its lexically enclosing scope.
Because the anonymous function was created within the confines of
`obj1.init`, the `self`
in effect at the moment of the function's creation was
`obj1`. And this is the
`self` that the function will use forever, no
matter how many times it's invoked. It's in the nature of an anonymous
function: it shares everything with its lexically enclosing scope,
including `self`.

In this example, though, that's not the effect we're after. We'd like
instead to create a method that assigns a value to the property
`prop` of whatever object we attach the method
to. In other words, we want to create a real live method, not a function
that's stuck to someone else's method context.

The way to do this is to replace the anonymous function with an
anonymous method. An anonymous method *isn't* stuck to the method
context that was in effect when it was created, but instead uses the
live context whenever it's called. This is an easy change to make: we
just need to use the `method` syntax to define
the anonymous method.

```
    obj2.setMethod(&a, method(x) { self.prop = x; });
```

With this change, running the program will indeed set
`obj2.prop` to 100.



`setSuperclassList(*lst*)`



Sets the object's superclasses to the values in *lst*, which must be a
list (or [list-like object](opoverload.html#listlike)) containing
objects. The object's superclass list is replaced with the given
superclass list. The objects in *lst* must all be TadsObject objects,
with one exception: lst is allowed to be
`\[TadsObject\]` (that is, a single-element list
containing the TadsObject class itself), in which case the object
becomes a root TadsObject object.
------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> TadsObject  
<span class="navnp"><a href="strcomp.html" class="nav"><em>Prev:</em> StringComparator</a>
    <a href="tempfile.html" class="nav"><em>Next:</em> TemporaryFile</a>
    </span>


