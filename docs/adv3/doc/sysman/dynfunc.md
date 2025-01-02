---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> DynamicFunc  
<span class="navnp"><a href="dict.html" class="nav"><em>Prev:</em> Dictionary</a>
    <a href="file.html" class="nav"><em>Next:</em> File</a>     </span>





# DynamicFunc

DynamicFunc is an intrinsic class that lets your program add new
executable code to itself while it runs. DynamicFunc takes a string
containing TADS program code, using the same syntax you'd use in your
project's compiled source code, and compiles it on the fly into a
function that you can call. The compiled code is packaged into an object
of class DynamicFunc, which you can then invoke as though it were an
ordinary function.

DynamicFunc values participate in the system save/restore mechanism, so
dynamically compiled functions are saved when the game is saved and
restored when it's restored.

## Headers and source files

If you use the DynamicFunc class in your program, you must
`\#include \<dynfunc.h\>` in your source files,
to define the intrinsic class interface.

You should also add the system library file
`dynfunc.t` to your project's list of source
files. This file isn't required, but if it's included, it defines some
useful helper objects. In particular, it defines the
`Compiler` object, which provides a convenient
interface to several dynamic compiler functions; and the
`CompilerException` class, which is the
exception type thrown when a source code compilation error occurs while
creating a DynamicFunc instance.

## The Compiler helper object

The easiest way to use DynamicFunc is through the helper object
`Compiler`. This object is defined in the system
library file `dynfunc.t`. To include this
optional file, add `dynfunc.t` (from the system
library folder) to your project's source file list.

The `Compiler` object provides a couple of
methods that make it easier to work with dynamic code.

### Compiler.compile()

`Compiler.compile()` takes a source code string,
and returns a `DynamicFunc` object with the
executable version of the string. The string uses the function syntax
describe [below](#funcSyntax). To invoke the compiled code, simply treat
the returned object as though it were a function, and use the standard
function call syntax with it.

```
    local square = Compiler.compile('function(x) { return x*x; }');
    local a = 100;
    "<<a>> squared is <<square(a)>>.";
```

Notice how the naming works. The source code string that you compile
doesn't give the function a name at all - it's just "function(x)". The
name `square` isn't actually the name of the
function, but simply the name of an ordinary local variable. The value
in the local variable is the actual function: it's the
`DynamicFunc` object that
`Compiler.compile` creates when it compiles the
source code. Because the compiler lets us use a local variable name with
the ordinary function call syntax, we can write
`square(a)` as though
`square` were a function name. This has the
effect of getting the value stored in the the variable - in this case,
the `DynamicFunc` object - and invoking it as a
function.

### Compiler.eval()

`Compiler.eval()` takes a source code string and
not only compiles it, but also executes it, and returns any return
value. If you just need to get the value of an expression, this skips
the extra step of making a function call to the compiled DynamicFunc.

```
    local x = Compiler.eval('Me.location.name');
```

If you're going to execute the same code many times, you're better off
using `compile()` and saving the DynamicFunc
result. Using `eval()` repeatedly on the same
expression is inefficient because it has to recompile the source code
every time, which is a fairly complex process.

### Global symbols

The main advantage of using the `Compiler`
object to compile source code strings (instead of calling
`new DynamicFunc()` directly) is that
`Compiler` automatically handles the global
symbol table for you. `Compiler` saves the
symbol table during pre-initialization, and then supplies it to the
compiler for each invocation.

Note that merely including `dynfunc.t` in your
build will include the `Compiler` object in your
program, whether you end up using it or not. And including
`Compiler` means that you include the global
symbol table. This adds to the size of your compiled .t3 file. If you're
trying to minimize the .t3 file size, and you *don't* actually need to
keep the global symbol table around, you'll probably want to avoid
adding `dynfunc.t` to your build.

### Local variables from enclosing scopes

The `compile()` and
`eval()` methods of the
`Compiler` object each accept an optional second
argument giving a StackFrameDesc object to use for local variable access
to another function's locals. See the section on [local variable
access](#localFrames) for more details.

## <span id="funcSyntax">Source code syntax</span>

There are two types of source code you can use to create dynamic code
objects.

First, you can specify a simple expression.

```
    local f = Compiler.compile('me.location');
```

This compiles the code as though it were a function taking no arguments,
consisting of a `return` statement returning the
expression value.

Second, you can specify an entire function. The syntax for this is
*almost* the same as for a function in ordinary static source code. The
only difference is that a function you define dynamically is
**unnamed**. Instead of writing a function name followed by a parameter
list, you simply write the word `function` where
the name would ordinarily go:

```
    local src = 'function(a) { return a*a; }';
```

Inside the function, you use the same syntax you'd use within a function
in a regular source file. You can use `if`,
`while`, `switch`, and
all the other procedural statements; you can call other functions and
methods; you can create new objects; you can print out messages with
double-quoted strings or with calls to
`tadsSay()`; you can use
`return` to return a value. You can do pretty
much anything you can do in a regular function.

You can alternatively use the `method` keyword
in place of `function`:

```
    local src = 'method(a) { return self.isIn(a); }';
```

If you don't supply a stack frame context when you compile the dynamic
code, there's no difference at all between using the
`function` and `method`
keywords. The choice of keywords only matters when you compile with a
stack frame context that includes a `self`
object. In that case, using `function` tells the
compiler that you want to use the `self` value
from the supplied stack frame; `method`, in
contrast, uses the actual `self` in effect each
time the DynamicFunc is called. The same applies to the other method
context variables (`definingobj`,
`targetobj`, and
`targetprop`).

As a rule of thumb, you'll generally want to use the
`method` syntax any time you're going to plug
the DynamicFunc into another object as a new method, using
[`setMethod()`](tadsobj.html#setMethod). In those
cases you'll want the "live" `self` value that's
in effect in the invoked method. Any time you're going to use the
DynamicFunc as a function, in contrast, you can use the
`function` keyword.

Note that the source code is given as a string value. This can make it a
bit tricky to handle quote marks properly. For example:

```
    local src = 'tadsSay(\'Oh, look, it\\\'s a DynamicFunc!\');';
```

Pay special attention to that triple backslash within "it's". You need a
backslash-quote just to get the apostrophe itself into the
`src` string value. But what are the other two
for? Those are there because you need to make sure the *compiler*
actually sees a backslash in front of the apostrophe, since that
apostrophe is inside a string in the source code fragment. Here's what
that `src` string actually looks like on the
inside, which is what the compiler will see at run-time:

```
    tadsSay('Oh, look, it\'s a DynamicFunc!');
```

The first two backslashes turn into a literal backslash, and the third
escapes the apostrophe.

Note that you can use the triple-quoting syntax to make that sort of
thing a lot more readable:

```
    local src = '''tadsSay('Oh, look, it\\'s a DynamicFunc!');''';

    <p>You still need the double-backslash to escape the quote inside
    the string-within-the-string, but otherwise it's almost straightforward.


    <h2><a name="localFrames"></a>
    Accessing a caller's local variables</h2>

    <p>You can arrange for a dynamic function to have access to local
    variables defined in a calling function.  This is analogous to the way
    that an anonymous function can access local variables in an enclosing
    lexical frame.  Unlike with anonymous functions, though, we have to
    set up local variable access explicitly for a dynamic function.  It's
    a little extra work, but it gives us lots of extra control, because we
    can specify precisely which set of local variables (if any) the
    dynamic function can access.

    <p>Note that we're not talking about <i>internal</i> locals here.  A
    dynamic function is always free to define its <i>own</i> local
    variables using the {{local}} statement - there's nothing extra you
    have to do for that.  We're talking about accessing <i>another
    function's locals</i> from within a dynamic function.

    <p>This might seem like a strange thing to want to do, but it can be
    extremely useful, especially for writing utility functions.  Let's
    look at an example.  Suppose we want to write a message-builder
    function that takes a string, and translates embedded expressions into
    their corresponding values.  The idea is that we could write something
    like this:

    <code>
    print('My location is {me.location.name}.');
```

The routine to implement this might look something like this:

```
    print(msg)
    {
      // replace each {...} expression with its evaluated result
      tadsSay(rexReplace('<lbrace>(<^rbrace>*)<rbrace>', msg,
              {m: Compiler.eval(rexGroup(1) [3])}));
    }
```

We use `rexReplace()` to look for each
occurrence of a brace sequence, `{...}`, and replace it with the result
of evaluating the expression within. For each pair of braces, we extract
the part between the braces (that's what the
`rexGroup(1)\[3\]` is for - it pulls out the
text that matches the parenthesized part of the regular expression). We
then use a callback function to submit that string to the compiler's
`eval()` function, which compiles the expression
and runs the resulting code, returning the result of evaluating the
expression. So when we submit the example string `'My
location is {me.location.name}.'`, we evaluate the expression
`me.location.name`, which we expect to return a
string. `rexReplace()` then substitutes this
result value into the string, so we get a result along the lines of
`My location is Ice Cave.`

So far so good. But what happens if we want to evaluate something like
this?

```
    local loc = me.location;
    print('My location is {loc.name}.');
```

In the previous example, we didn't have to worry about local variables,
because everything was a global name - we're assuming that
`me` is an object name, and
`location` and `name`
are properties. Now, though, we have this local variable
`loc` to deal with. This is where the local
variable access feature comes in.

The way we provide local variable access to a dynamic function is to
supply the compiler with a [StackFrameDesc](framedesc.html) object for
the function containing the locals we want to be able to refer to. A
StackFrameDesc is a system object that contains information on a running
function or method in the active call stack. Among other things, a
StackFrameDesc has a list of the names and values of the local variables
and parameters in an active function. If you supply a StackFrameDesc to
the compiler, it will make all of the local variables in the frame
available to the dynamic code.

You obtain StackFrameDesc objects using the
[t3GetStackTrace()](t3vm.html#t3GetStackTrace) function. This function
returns information on the active call stack; when you use the
`T3GetStackDesc` flag, it includes a
StackFrameDesc for each stack level.

Here's the new version of our example function, using the stack frame
object for the function's immediate caller. This lets us call our
`print()` function with a string that refers to
our own local variables.

```
    print(msg)
    {
      // Get the local variables for the caller.  The current function is
      // always stack frame level 1; we want the immediate caller, which is
      // level 2.
      local frame = t3GetStackTrace(2, T3GetStackDesc);

      // replace each {...} expression with its evaluated result
      tadsSay(rexReplace('<lbrace>(<^rbrace>*)<rbrace>', msg,
              {m: Compiler.eval(rexGroup(1) [3], frame)}));
    }
```

Notice how we retrieved the StackFrameDesc object for the caller, then
passed it to the `Compiler.eval()` method. That
method takes an optional second argument for the stack frame object. If
you omit it, as we did in the original version of the function above,
the dynamic function won't have access to any local variables in any
caller. When we supply a StackFrameDesc, though, the compiler makes the
variables in that frame available to the dynamic function.

When you compile a dynamic function with a StackFrameDesc object, the
function has full, live access to the stack frame's local variables.
This means that the dynamic function sees the current value of a
variable on each access.

Furthermore, the dynamic function can modify a variable, simply by
assigning a new value to it. This changes the actual local variable
value, so the original function will see the changed value when it
resumes execution. For example:

```
    main(args)
    {
      local x = 1;
      local frame = t3GetStackTrace(1, T3GetStackDesc);
      Compiler.eval('x++', frame);
      "After eval: x = <<x>>\n";
    }
```

The final value of `x` will be
`2`, because the dynamic function evaluation
changes the actual, live value of `x` in the
original frame.

### Using multiple local frames

The local frame argument also accepts a list of StackFrameDesc objects,
in lieu of the single object we've used in the examples so far. This
lets the source code refer to locals from any of the listed frames.

When you supply a list of frames, the compiler searches each frame in
the list each time it encounters a local variable name in the source
code. The compiler searches the list in order, starting with the first
element, and uses the first match it encounters. This means that if the
same name appears in more than one frame in the list, the compiler will
use the earliest occurrence in the list, and ignore the others. In
analogy with anonymous functions, you can think of the list as being
ordered from the innermost scope to the outermost, since variables in
inner scopes hide variables in enclosing scopes.

### Local frames and "self"

If you supply one or more stack frames for local variables, the function
not only has access to the local variables, but also to the
`self` value in the frame, along with the rest
of the method context variables: `definingobj`,
`targetobj`, and
`targetprop`. If you refer to
`self` or the other context variables within the
function, it will refer to the corresponding value from the local frame
you supply.

If you supply a list of stack frames, the `self`
value (and other method context values) are always taken from the first
frame in the list.

If you supply a frame, but the frame refers to an ordinary function (as
opposed to a method), the method context in the new code will also be
for an ordinary function, so it won't be able to refer to
`self` and the other context variables.

All of this is designed to work analogously to anonymous functions. You
can think of the stack frame list as equivalent to the enclosing lexical
scopes of an anonymous function. Just as an anonymous function takes its
`self` and other method context variables from
its enclosing scope, a dynamic function takes its method context from
the stack frame context you specify.

In cases where you intend to create a dynamic method that you'll later
plug in to an object via `setMethod()`, you
usually won't want to copy the method context from the local variable
context, since you'll instead want to use the "live" context when the
method is called. In these cases, use the
`method` keyword in place of
`function` in the dynamic source code string.
This tells the compiler to ignore the method context from the stack
frame, while still allowing you to access the frame's local variables.

## DynamicFunc Construction

The DynamicFunc constructor takes a source code string, compiles it into
bytecode, and returns a DynamicFunc that stores the compiled code. The
constructor takes the following arguments:

`new DynamicFunc(*sourceString*, *globalTable*?,
*localFrame*?, *macroTable*?)`

The *sourceString* argument is a string containing the TADS source code
to compile. It uses the syntax described [above](#funcSyntax).

*globalTable* is optional. If it's included, it must be a
[LookupTable](lookup.html) object containing the global symbol table to
use for compiling the string. Each key in the table is a string
containing a symbol name, and the value for a key is the meaning of that
value. This is the same format as the table returned by
[`t3GetGlobalSymbols()`](t3vm.html#t3GetGlobalSymbols),
and in fact the `t3GetGlobalSymbols()` table is
exactly what you'll want to use in most cases. You're free to provide a
custom table instead if you wish to use different symbol mappings, but
in most cases you'll want to compile the string with global symbols from
the program's own compilation.

*localFrame* is optional. If it's included, it must be a
[StackFrameDesc](framedesc.html) object, or a list of stack frame
objects. The function will have access to the local variables in the
specified stack frame or frames; it can get their current values as well
as assign new values, using the normal syntax for accessing local
variables. If you specify a list, the code will have access to any
variable in any of the frames. The compiler searches the list in the
order given; if the same name appears in more than one frame, the
compiler uses the first match and ignores the others.

*macroTable* is optional. If it's included, it must be a LookupTable
containing the global macro table to use for compiling the string. Each
key is a macro symbol name (that is, a name defined in the program's
source code with the `\#define` directive), and
each corresponding value is the definition of the macro. The macro
definitions must use the same format as in the table returned by
`t3GetGlobalSymbols(T3PreprocMacros)`. As you'd
guess, that's where you'd normally get this argument value in the first
place, since this allows the string to use the same macros defined in
the program's own source code. You can alternatively construct your own
custom macro table, as long as you use the same format as the system
table.

Passing `nil` for any of the optional arguments
has the same effect as omitting the argument entirely. Since the
arguments are positional, you'll need to pass
`nil` if you want to supply one of the later
arguments but want to omit an earlier one. For example, if you want to
provide a macro table argument but no local frame value, you must
specify `nil` for the local frame, simply to
fill out the position in the argument list.

Note that `t3GetGlobalSymbols()` can only return
information on the global symbols or macros during pre-initialization,
*or* when the program is built with full debugging information. That
means that if you plan to use the symbol table, you'll have to retrieve
it during preinit and save it in an object property, like this:

```
    symTabCache: PreinitObject
       execute() { symtab = t3GetGlobalSymbols(); }
       symtab = nil
    ;
```

That's exactly what the `Compiler` object
defined in `dynfunc.t` does, so if you include
that module in your build you won't have to worry about this. It might
seem like TADS is gratuitously making you jump through hoops with this
extra step, by the way, but there's a good reason for it. Most programs
have no need for the compiler symbol table, and keeping it around takes
up extra space in the compiled .t3 file. That's why TADS discards it by
default.

If you omit the global symbol table argument, or specify
`nil`, the string is compiled with no global
symbols at all. This means that it can only reference its own function
arguments and local variables. No global symbols, not even property
names, will be available.

## Calling the compiled function

Once you've successfully created a DynamicFunc, you can call it using
the same syntax you'd use for an ordinary function.

```
    local src = 'function(x) { return x*3; }';
    local f = new DynamicFunc(src);
    local result = f(7);
```

## Compiler error handling

When you create a DynamicFunc with `new`, the
system compiles the string into "bytecode," which is the internal
representation TADS uses for executable code. The compilation process
parses the source code, checks that the syntax is correct, looks up any
symbol names (objects, properties, other functions, etc.), and makes a
number of other checks for correctness. The process is largely the same
as when you use the regular compiler to build your project, and it can
catch the same types of errors.

If an error occurs, the `new DynamicFunc()` call
will throw an exception of type
`CompilerException`. You can use the
`displayException()` method of the exception
object to display the compiler error messages. It's possible for
multiple errors to occur in a single call to `new
DynamicFunc()`, since the compiler tries to carry on as best it
can after an error. (It does this to be helpful, by the way, not because
it enjoys nitpicking. The idea is to give you as many details as
possible about what needs to be fixed with a single run of the compiler,
rather than making you go back and forth between editing and compiling
for each individual problem.) If there multiple errors, they'll be
separated by newline "\n" characters in the message string stored in the
exception object.

## Methods

`getSource()`



Returns a string containing the source code originally used to create
the object via the `new DynamicFunc()`
constructor.



## Uses

Dynamic code creation is common in modern interpreted languages,
especially scripting languages like Javascript and PHP. People have
found all sorts of uses for it, but the best use is probably for
creating miniature extension languages as parts of code libraries.
Dynamic compilation can be used as a sort of super macro feature, since
it lets you bring to bear the full string-processing and procedural
power of the main language.

In a TADS context, dynamic code is particularly interesting for string
and message processing. Text generation is obviously a huge part of IF
programming, and one of the key tasks for libraries and extensions is to
provide tools and automation for text creation. Dynamic code creates
many possibilities for these tools, by making it possible to embed quasi
source code text inside strings, which are then processed by library
routines into actual source code, which is then compiled and executed on
the fly.

## DynamicFunc vs. anonymous functions

Dynamic functions and anonymous functions might seem a lot alike, but
there are some significant differences. The big one is that anonymous
functions can only be created from static source code that's part of
your project's source files, whereas DynamicFunc objects are created
dynamically from strings at run-time. This makes anonymous functions a
bit more efficient, since they're compiled in advance; a DynamicFunc
must be compiled while the program runs, which adds some run-time work
and resource consumption. On the other hand, you can do things with
DynamicFunc that you simply can't do with anonymous functions, by making
it possible to create code on the fly while the program runs.

In general, if you can write out the function you want to perform in
advance, as part of your source code, a regular or anonymous function is
the way to go. Dynamic functions are best for situations where the
source code must be assembled dynamically - based on input from the
user, for example, or based on data read from a file.

Because an anonymous function is statically compiled, it's syntactically
part of the surrounding code. This allows an anonymous function to
access local variables in the enclosing scope. For example:

```
    local lst = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    local cnt = 0;
    lst.forEach(function(val) { if (val.length() > 3) ++cnt; });
```

This function refers to the local variable
`cnt`, which isn't defined as part of the
anonymous function, but rather in the enclosing scope.

A DynamicFunc, in contrast, doesn't automatically have access to its
enclosing scope. In fact, a DynamicFunc doesn't even really have an
enclosing lexical scope: a lexical scope is essentially the text
surrounding the function, but a DynamicFunc's source is a run-time
string, which isn't part of the source code at all.

However, a DynamicFunc has something analogous to an enclosing scope: it
has a dynamic call stack. The call stack is the chain of callers that
were actually invoked at run-time to reach the function that's creating
the DynamicFunc. Each caller in that chain has local variables of its
own. You can arrange it so that the DynamicFunc has access to the local
variables in one or more of these callers.

This access to caller locals isn't automatic. If you don't make explicit
arrangements, a DynamicFunc can't access any locals in its callers. That
means that something like this won't work:

```
    local cnt = 0;
    local f = new DynamicFunc('function(val) { if (val > 3) ++cnt; }'); // WON'T WORK!
```

To make that work, you'd have to explicitly grant the DynamicFunc access
to the current local frame. You do this by passing in the StackFrameDesc
object for the current frame, like so:

```
    local cnt = 0;
    local frame = t3GetStackTrace(1, T3GetStackDesc).frameDesc_;
    local f = new DynamicFunc('function(val) { if (val > 3) ++cnt; }', nil, frame);
```

For more details, see the section on [accessing a caller's
locals](#localFrames) above.

## Limitations

The debugger can't stop in dynamic code, so you can't set breakpoints or
single-step through a DynamicFunc's contents.

As described above, dynamic code can't automatically refer to variables
defined in the scope that calls `new
DynamicFunc()`. You can, however, explicitly give the code access
to a frame's locals by supplying a StackFrameDesc object when compiling
the dynamic code.

You can't define a multimethod from dynamic code. This is due in part to
the same reasons that you can't add to the global symbol table, but
there's the additional complication that multimethods use a separate set
of run-time tables built by the system library during preinit. It would
be possible in principle to manipulate these tables to add new
multimethods on the fly, but there's not currently any API support for
that, so we don't recommend it.

Dynamic code can't define new **named** functions, objects, or
properties. The dynamic compiler treats the global symbol table that you
pass in as read-only, so the syntax for defining named items is
disabled.

Note that even though you can't create a named function or object using
the normal source code syntax, you *can* get the same result by
manipulating the LookupTable containing the symbols. To define a new
function, first use the unnamed function syntax to create a new
DynamicFunc with the function body, then simply add the DynamicFunc to
the symbol table under the function name of your choosing. Once you've
added the function to the symbol table, you can call it from other
dynamic code strings as though it were part of the original source code.

The `Compiler` helper object even provides a
method that does all of this for you:

```
    // define a new function, square(x)
    Compiler.defineFunc('square', 'function(x) { return x*x; }');

    // we can now call it from subsequent code
    local x = Compiler.eval('square(10)');
```

Note that this only updates the `Compiler`
object's copy of the symbol table. It doesn't change the original symbol
table used by the running program. This means you're free to redefine
the name of an existing function, but doing so will only affect *future*
compilations - it won't affect any code previously compiled, including
the statically compiled code of the main program.



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> DynamicFunc  
<span class="navnp"><a href="dict.html" class="nav"><em>Prev:</em> Dictionary</a>
    <a href="file.html" class="nav"><em>Next:</em> File</a>     </span>


