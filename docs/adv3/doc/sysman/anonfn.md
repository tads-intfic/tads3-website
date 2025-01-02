---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Anonymous
Functions  
<span class="navnp"><a href="except.html" class="nav"><em>Prev:</em> Exceptions and Error
Handling</a>    
<a href="undef.html" class="nav"><em>Next:</em> Capturing Calls to
Undefined Methods</a>     </span>





# Anonymous Functions

There's a coding pattern that you'll see a lot in TADS, which we usually
refer to as "callbacks". A callback is a *reference* to a function that
you pass as an argument to another function, with the intention that the
second function will invoke the callback one or more times in the course
of carrying out its duties. The name comes from the idea that the second
function is "calling back" to its own caller, since the callback
function is usually a bit of custom code specific to the caller.

Callbacks are especially useful in libraries, because they allow a
library function to be written generically and then re-used for multiple
purposes. The common part of the task is coded into the library for
everyone to use. The part that's different every time is factored out
into a callback function. As a user of the library, you have to write
the callback function to carry out whatever that custom portion happens
to be for your application. Then you call the common library routine,
passing in a reference to the callback. The library routine "calls you
back" when it needs to carry out the custom bit.

One common use for callbacks is iterating over the items in a group.
Iterating simply means that we're performing an operation sequentially
on each item in the group.

Some types of groups are easy to iterate over. For example, performing
an operation on each item in a list is just a matter of using a counter
to step through the possible index values:

```
    for (local i = 1, local cnt = lst.length() ; i <= cnt ; ++i)
      doSomethingWith(lst[i]);
```

Other groups are more complicated to iterate over, though. For example,
we might want to display all of the things a character in a game is
carrying, and all of the things those items contain, all of the things
they contain, and so forth. This type of iteration requires a more
complicated algorithm than the simple loop we can use for a list,
because we must traverse a tree of unknown depth.

We could write our display function so that it contains the algorithm to
traverse the containment tree, but suppose that later we wanted to write
a function that counts all of the items in the same tree. It seems
tedious to write all of that same traversal code again, changing the
lines of code that display names so that they increment a counter
instead.

Fortunately, there's a better way - use a callback! Rather than writing
a function that traverses the containment tree and displays object
names, we instead write two functions. The first function simply
displays the name of an object. The second only traverses the
containment tree - but what it does with each element is to invoke a
callback function, passing the current element as the parameter. We
combine these two by calling the second function, passing the first
function as the callback function pointer, and between the two we have a
way of traversing the tree and displaying the contents. If we want to
count the contents, all we have to do is write a new callback function
that increments a counter variable, and pass the new callback to the
same generic tree traversal function. The traversal function doesn't
care what's going on for each item: it's only concerned with walking
through the tree. The callbacks don't care about how the tree is
arranged: they're only concerned with printing, counting, etc.

Callbacks offer an excellent way to re-use common code, but using
regular functions as callbacks has some disadvantages. First, it makes
for somewhat verbose code, especially when the callback functions
themselves are very simple, as they tend to be - for our examples of
displaying a name or incrementing a counter, we've turned what would
probably be a single line of code into four or five lines to define a
new function. Second, it scatters code around in the source files,
because the callback has to appear in a separate function from the code
that passes it to the library function. Third, if the calling function
wants to share information with the callback (which would be necessary
for something like incrementing a counter, because the counter's final
value ultimately has to make it back to the calling function), it's
necessary for the caller and the callback to come up with some way of
passing information between one another; while this isn't usually
difficult, it does tend to add even more verbosity.

Once again, there's a better way, which is to use "anonymous" functions.
An anonymous function is a function that you write directly where you
want to use it as a function pointer. Anonymous functions solve all of
the problems we just listed:

- An anonymous function is more concise than a separate named function.
- An anonymous function is written directly in the code where it's used.
- An anonymous function directly shares all of the local variables of
  the scope where it's defined.

## Anonymous Function Syntax

An anonymous function definition looks like this:

```
    function(x) { "Hello from anonymous! x = <<x>>\n"; }
```

This looks a lot like a regular function definition, but note that we've
used the keyword "function" instead of giving the function a name.
That's why they're called anonymous.

If there are any parameters (we have one parameter, "x", in this
example), they appear in parentheses after the "function" keyword.
Finally, we write the body of the function, enclosed in braces. The body
can contain any code that we could put in an ordinary function.

So far the only thing that's different from a regular function is the
lack of a name. But there's another important distinction: location. A
regular function is always defined at the "top level" of the program,
outside of any object definitions and outside of any other functions. An
anonymous function, in contrast, can be defined *anywhere an expression
can go*. You can assign an anonymous function to a variable, or pass it
as an argument to another function.

The most common usage is as a function argument, because that's the
convenient way to invoke iterators, which are probably the place you'll
use anonymous functions the most. For example, suppose we have an
iterator function called enumItems() that enumerates some set of items
through a callback function. To display all of the items that the
function enumerates, we can write something like this:

```
    enumItems(function(obj) { obj.sdesc; });
```

If at some other point we wanted to count all of the items the function
enumerates, we could write this:

```
    local cnt = 0;
    enumItems(function(obj) { ++cnt; });
```

Since the value of an anonymous function is simply a pointer to the
function, we can assign an anonymous function to a local variable or to
a property:

```
    local f = function(x) { "Hello from anonymous! x = <<x>>\n"; }
```

We call the function to which the local variable "f" refers using the
same syntax we'd use with an ordinary function pointer:

```
       f(7);
```

## Referring to Local Variables

Anonymous functions are especially useful for iterators and enumerators,
which are routines that invoke a callback function for each member of a
collection of some sort. For example, we could define an object class
with a "contents" property, and write an enumerator that invokes a
callback for each entry in the contents list:

```
    class Thing: object
      contents = []
      enumContents(func)
      {
        for (local i = 1, local len = contents.length() ;
             i <= len ; ++i)
          func(contents[i]);
      }
    ;
```

Now, suppose we wanted to count the contents of the object. We could do
this using the enumContents() enumerator and an anonymous function:

```
    local cnt = 0;
    myThing.enumContents(function { ++cnt; });
```

Note that the anonymous function is accessing the local variable cnt
from the enclosing function. This might seem perfectly obvious and
natural, but it is a very powerful feature of anonymous functions that
traditional function pointers don't offer: with a regular function
pointer, the callback function obviously can't access the local
variables of the function where the pointer is used, so we would have to
arrange some other way to share information. Anonymous functions make
this information sharing simple by allowing us to share local variables
directly.

Anonymous functions share not only the local variables of the scope in
which they were defined, but all of the method context variables:
`self`, `targetobj`,
`definingobj`, and
`targetprop`. So an anonymous function that
appears in a method can refer to the properties of the
`self` object that was in effect at the time the
function was created.

If you're familiar with a static language like C or C++, you might be
concerned about the "lifetime" of the shared variables. In particular,
what happens to the variables referenced from the anonymous function
*after* the routine that created the anonymous function returns to its
caller? Consider this example:

```
    myFunc()
    {
      f = createAnonFunc();
      f();
    }

    createAnonFunc()
    {
      local i = 100;
      return function() { tadsSay(i); }
    }
```

If you're a C++ programmer, this probably looks like a classic newbie
error to you. If you did something like this in C++, the local variable
"i" would cease to exist when `createAnonFunc`
returns. So the fact that the anonymous function continues to refer to
"i" after that is a problem. In C++, this would cause all sorts of
unpleasant behavior, possibly picking random values from memory, and
possibly crashing the program.

But in TADS 3, this is perfectly legal. What's more, it works the way
the C++ newbie would probably expect it to.

When you create an anonymous function that references local variables in
the enclosing scope, TADS moves the local variables to a "context
object" that's shared between the enclosing scope and the anonymous
functions. The context object is shared by reference, so any changes to
the local variables made in the anonymous function affect the enclosing
scope, and vice versa. The context object isn't a "stack variable" as it
would be in C++, but is a full-fledged object that's managed by the
garbage collector. When the creating routine returns to its caller, its
reference to the context object disappears. But as long as the anonymous
function remains alive, its reference to the context object will prevent
the object from being deleted. This means that the lifetime of the local
variables is automatically extended so that the variables remain valid
as long as any anonymous functions can access them.

In short, the anonymous function mechanism is designed to be simple to
use, and doesn't come with any warnings or limitations.

## Short-Form Anonymous Functions

Even though anonymous functions are already a concise way to write
callbacks, TADS allows an even terser syntax in situations where the
function only needs to evaluate an expression. In these cases, you can
omit the "function" keyword, and write only the parameter list and the
expression, enclosed in braces, with a colon (":") separating the
expression from the parameter list. So, rather than writing this:

```
    function(x, y) { return x + y; }
```

we can write this:

```
    { x, y: x + y }
```

Note that there's no semicolon at the end of the expression. The body of
a short-form anonymous function is simply an expression, not a
statement. In TADS, semicolons terminate statements - we're not writing
a statement, so we don't need a semicolon at the end.

The colon that ends the argument list is always needed, whether or not
there are any parameters. To write an anonymous function that takes no
arguments, simply put the colon immediately after the opening brace:

```
    { : ++cnt }
```

The body of a short-form anonymous function is a single expression, and
the function implicitly returns the value of the expression. We can,
however, use the comma operator to evaluate a series of sub-expressions:

```
    { x, y: tadsSay(x), tadsSay(y), x*y }
```

That prints the values of x and y, then returns the product of the two
values as the result of the function.

<span id="shortFormLocals"></span> Short-form functions can define their
own local variables. Use the `local` keyword at
the very beginning of the function's expression. For example, this
generates a list of the first 20 Fibonacci numbers:

```
    local a = 0, b = 1;
    local fib = List.generate({: local f = a, a = b, b = f + a, f }, 20);
```

That defines the local variable `f`, assigning
it immediately to `a` (which comes from the
enclosing scope). `f` is local to the anonymous
function. Apart from defining the local variable
`f`, that `local` clause
works just like an ordinary expression, and it combines with the rest of
the expression using the normal behavior of the comma operator. Let's
look at how this executes. We start by evaluting `f =
a`, which assigns the value of `a` from
the enclosing scope to `f`. We then move on to
`a = b`, which simply assigns the value of
`b` to `a` (both in the
enclosing scope, since these two variables *aren't* defined as local to
the anonymous function). Next comes `b = f + a`,
which adds `f` and `a`
and assigns the sum to `b`. Finally, we get to
`f`, which simply gets the current value of
`f` - and since this is the last part of the
expression, it's the result value of the function.

The `local` clause in an anonymous function
defines only one local variable. The next thing after the comma is a
separate expression, not part of the `local`
clause at all. If you want to define multiple locals, use a separate
`local` keyword for each one:

```
    {: local a = 1, local b = 2, local c = 3, ... }
```

All of the `local` definitions must be
consecutive, at the start of the expression.

Short-form and long-form anonymous functions behave in exactly the same
way. The only difference is the syntax used to define them.

## Recursive anonymous functions

In an ordinary named function, recursion is easy: the function is free
to call itself by name, the same way any other code would call it.

```
    factorial(n)
    {
       if (n <= 0)
          return 1;
       else
          return n * factorial(n-1);
    }
```

If we want to do the same thing in an anonymous function, though,
there's a snag: the function has no name, so how does it refer to itself
to make the recursive call?

One approach is take advantage of the anonymous function's ability to
refer to local variables in the enclosing scope. As long as the
anonymous function is assigned to a local variable, it can refer to
itself via that local variable, making the syntax almost deceptively
similar to the ordinary function version:

```
    local f = new function(n)
    {
       if (n <= 0)
          return 1;
       else
          return n * f(n-1);
    }
```

But that only works if the anonymous function value is indeed assigned
to a local variable. It's not always convenient or possible to do that.
For example, suppose we want to use our anonymous function in a call to
List.mapAll():

```
    lst = lst.mapAll({n: n <= 0 ? 1 : WhatDoWePutHereToCallMyself(n-1) });
```

The solution is to use the
[`invokee`](expr.html#invokee) pseudo-variable.
`invokee` contains a pointer to the function
that's currently executing at any given time. So within an anonymous
function, this provides a pointer to the anonymous function, without any
need for a name or a local variable.

```
    lst = lst.mapAll({n: n <= 0 ? 1 : invokee(n-1)});
```

## <span id="anonMethods"></span>Anonymous Methods

There's another version of the anonymous function that's known as an
anonymous method. An anonymous method looks and acts very much like an
anonymous function. The difference is that an anonymous method *doesn't*
share its method context variables (`self`,
`definingobj`,
`targetobj`,
`targetprop`) with the lexically enclosing code.
Instead, an anonymous method takes on the "live" values for the method
context each time it's called.

The syntax for defining an anonymous method is the same as for a
regular, long-form anonymous function, except that you substitute the
keyword `method` in place of
`function`. For example:

```
    local m = method(x) { self.prop = x; };
```

Although an anonymous method doesn't share
`self` and the other method context variables
with its lexically enclosing routine, it does have access to the
ordinary local variables defined in the enclosing scope, just like an
anonymous function does. For example:

```
    function addSetter(obj, val)
    {
        local m = method() { self.prop = val; }
        obj.setMethod(&setter, m);
    }
```

Note how the anonymous method refers to the local variable "val", which
is part of the enclosing function.

The main use of anonymous methods is to add new methods to objects using
[`setMethod()`](tadsobj.html#setMethod). The
section on `setMethod()` has more details on how
anonymous functions and methods differ in practice when creating new
object methods.

Note that an anonymous method is only meant to be used as a method, not
as a function. If you try to call it as an ordinary function, it won't
have any method context, so attempting to access
`self` or the other method context variables
could cause run-time errors.

## "new function" syntax

Prior to TADS 3.1, the syntax for anonymous functions required the
keyword `new` before
`function` or `method`:

```
    local f = new function(x) { return x*2; };
```

In 3.1 and later, this is exactly equivalent to the same code without
the `new`.

The rationale for the `new` keyword was that an
anonymous function is actually an object. Each time you evaluate the
definition of an anonymous function, you're creating a new object.

(More precisely, you're creating a new object if the function contains
references to local variables in its enclosing scope. If not, the
function doesn't have any context information, so the compiler creates a
single static version at compile time, and reuses this static instance
each time the function is referenced.)

Starting in 3.1, we removed the requirement for the
`new` keyword. It's still allowed, though. Old
code that uses it will compile without complaint, and the meaning is
exactly the same with or without `new`.

The `new` keyword wasn't there for the
compiler's sake or the VM's sake - it was there for the programmer's
sake, to make it explicit in the syntax that object creation was
involved. There was no deep technical reason it had to be there; there
were no issues of syntactic ambiguity, for example. Since the TADS 3
syntax was created, though, anonymous functions have become common in
mainstream programming languages, and we've noticed that no one else has
seen fit to make their syntax mimic object creation syntax. Apparently
our concerns about emphasizing object creation were overblown.

The main pragmatic motivation for actually removing
`new` from the TADS syntax is the Web UI. If
you're writing a game that uses the Web UI, you'll probably find
yourself switching back and forth between TADS and Javascript as you
work on your project, since the UI portion of the Web UI is written in
Javascript. Javascript syntax is very similar to TADS syntax in many
ways, which makes it fairly easy to work in both languages in one
project. Javascript's anonymous function syntax is identical to the TADS
anonymous function syntax now that `new` has
been removed, but the old syntax with `new` was
just different enough to be a constant gotcha when switching back and
forth. Since `new` was only there in the first
place for ease-of-use reasons, adding Javascript to the mix clearly tips
the balance in favor of removing `new`.



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Anonymous
Functions  
<span class="navnp"><a href="except.html" class="nav"><em>Prev:</em> Exceptions and Error
Handling</a>    
<a href="undef.html" class="nav"><em>Next:</em> Capturing Calls to
Undefined Methods</a>     </span>


