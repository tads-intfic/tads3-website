---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Exceptions and
Error Handling  
<span class="navnp"><a href="namedargs.html" class="nav"><em>Prev:</em> Named Arguments</a>
   
<a href="anonfn.html" class="nav"><em>Next:</em> Anonymous Functions</a>
    </span>

</div>



# Exceptions and Error Handling

TADS 3 provides a "structured exception handling" mechanism, which lets
the program to signal and handle unusual conditions in a structured
manner. TADS 3 exceptions work very much like Java exceptions, so if
you've used Java you'll find the TADS 3 exception mechanism familiar.

Conceptually, an exception is any unusual condition. Exceptions usually
indicate errors, but they don't have to; they can also be used for a
variety of other purposes, such as terminating a procedure early or
recovering from a resource shortage. An exception is represented by an
object; you can tell what kind of exception you have by looking at the
class of the exception object. Exception objects are the same as any
other objects, so you can create as many different types of exception
classes as you need.

Exception handling has two components: "throwing" and "catching."

When something unusual occurs in your program that you wish to handle
using the exception mechanism, you "throw an exception." This means that
you create a new object to describe the unusual condition or error, then
use the `throw` statement to throw the
exception. The `throw` statement is a little
like `return` or `goto`,
in that it abruptly transfers execution somewhere else; hence any
statement immediately following a `throw` is
unreachable (unless, of course, it can be reached by a label or some
other means that doesn't involve going through the
`throw` statement).

Where does `throw` send execution? This is where
"catching" comes in. When you throw an exception, the VM looks for an
enclosing block of code protected within a `try`
block. This search is done according to the "call chain" - the series of
function and method calls that have been made so far to reach the
current point in the code. The VM looks for the nearest enclosing
`try` statement in the call chain - this might
be in the current method, actually enclosing the code with the
`throw`, or it might be in one of the callers.
The VM searches outward from the current method.

When the VM finds the first enclosing `try`
statement, it looks at the statement's `catch`
clauses. If there's a `catch` for a superclass
of the thrown exception, the VM transfers control to the code within
that `catch` clause's handler block; otherwise,
the VM skips that `try` and continues searching
for the next enclosing `try`.

For each `try` statement that encloses the
current code but doesn't define a `catch` block
for the thrown exception, the VM checks to see if the
`try` has an associated
`finally` block, and executes the enclosed code
before looking for an enclosing `try` block.

If the VM searches the entire call stack without finding any enclosing
`try` block with a
`catch` for the thrown exception, the VM
terminates the program. If it has to do this, the VM checks the
`exceptionMessage` property of the unhandled
exception object, and displays the value of that property if it's a
(single-quoted) string value. This at least lets the user see a message
describing the error that forced the program to terminate.

A `try` statement looks like this:

```
    try
    {
      // some code that might throw an exception, or call
      // a function or method that might do so
    }
    catch (FirstExceptionClass exc1)
    {
      // handle FirstExceptionClass exceptions
      // exc1 is a local with the thrown exception object
    }
    catch (SecondExceptionClass exc2)
    {
      // handle SecondExceptionClass exceptions
      // exc2 is a local with the thrown exception object
    }
    finally
    {
      // do some cleanup work  this gets called
      // whether an exception occurs or not
    }
```

A `try` statement can have as many
`catch` clauses as needed – it can even have no
`catch` clauses at all. The
`finally` clause is optional, but only one is
allowed if it's present at all, and it must follow all of the
`catch` clauses.

Each `catch` clause has a name following the
name of the exception. The `catch` defines a new
local variable with the given name – the variable is local to the code
within the `catch` clause. When the exception is
caught, the VM will store a reference to the thrown exception object in
this variable; this is, of course, the same object that was used in the
`throw` statement that threw the exception in
the first place.

The VM searches for a `catch` clause that
matches the exception class starting with the first
`catch` associated with the
`try`, and considers each
`catch` in turn until it finds a match. A
`catch` matches if the named class is a
superclass of the exception behing handled. Because the
`catch` clauses are tried in order, you can have
one handler for a specific type of exception, and also have a later
handler for a superclass of the first exception; the specific type will
be handled by the first handler, since the VM will find that handler
earlier than the more general handler. In such cases, only the first
matching handler will be invoked.

If a `finally` clause is present, the VM will
always execute the code contained within, no matter how control leaves
the `try` block. If control leaves via an
exception that isn't handled by any of the `try`
statement's `catch` clauses, the VM will execute
the `finally` code before it continues the
search for the next enclosing `try`. If no
exceptions occur, so control leaves the `try`
block normally, the `finally` code is executed
immediately after the last statement in the main
`try` block. If an exception is thrown but one
of the `try` statement's
`catch` clauses catches the exception, the VM
executes the `finally` code immediately after
the last statement in the `catch` block (or, if
control is transfered out of the `catch` block
in some other way - `goto`,
`return`, `throw`,
etc. - the `finally` is executed just before
that control transfer).

Note that the code in a `finally` clause will
execute *no matter how execution leaves the
`try` block*. This even includes
`goto`, `return`,
`break`, and `continue`
statements. If the `try` block contains a
`return` statement, the program will first
calculate the value of the expression being returned (if any), then it
will execute the `finally` code, and only then
will control transfer back to the caller of the current function or
method. (It's important that the return value is calculated first,
because it counts as code that's protected by the
`try`. If an exception is thrown while
calculating that value, it'll be handled the same as any other exception
thrown inside the `try`.) If you use
`goto`, `break`, or
`continue` within the
`try` block to jump to a statement that's
outside the `try` block, the program will
execute the `finally` code just before jumping
to the target statement.

Here's an example that illustrates how all of this works.

```
    #include "tads.h"

    class ResourceError: Exception;
    class ParsingError: Exception;

    main(args)
    {
      a();
    }

    a()
    {
      b(1);
      b(2);
      b(3);
    }

    b(x)
    {
      "This is b(<<x>>)\n";
      try
      {
        c(x);
      }
      catch (Exception exc)
      {
        "b: Caught an exception: <<exc.exceptionMessage>>\n";
      }
      "Done with b(<<x>>)\n";
    }

    c(x)
    {
      "This is c(<<x>>)\n";
      try
      {
        d(x);
      }
      catch(ParsingError perr)
      {
        "c: Caught a parsing error: <<perr.exceptionMessage>>\n";
      }
      finally
      {
        "In c's finally clause\n";
      }
      "Done with c(<<x>>)\n";
    }

    d(x)
    {
      "This is d(<<x>>)\n";
      e(x);
      "Done with d(<<x>>)\n";
    }

    e(x)
    {
      "This is e(<<x>>)\n";
      if (x == 1)
      {
        "Throwing resource error...\n";
        throw new ResourceError('some resource error');
      }
      else if (x == 2)
      {
        "Throwing parsing error...\n";
        throw new ParsingError('some parsing error');
      }
      "Done with e(<<x>>)\n";
    }
```

When this program is run, it will show the following output:

```
    This is b(1)
    This is c(1)
    This is d(1)
    This is e(1)
    Throwing resource error...
    In c's finally clause
    b:  Caught an exception:  some resource error
    Done with b(1)
    This is b(2)
    This is c(2)
    This is d(2)
    This is e(2)
    Throwing parsing error...
    c:  Caught a parsing error:  some parsing error
    In c's finally clause
    Done with c(2)
    Done with b(2)
    This is b(3)
    This is c(3)
    This is d(3)
    This is e(3)
    Done with e(3)
    Done with d(3)
    In c's finally clause
    Done with c(3)
    Done with b(3)
```

This illustrates several aspects of exceptions.

First, note that function `d()` doesn't have any
exception handlers (i.e., it has no `try`
block). Since this function is not concerned with catching any
exceptions that occur within itself or functions it calls, it doesn't
need any exception handlers. This is one of the advantages of exceptions
over using return codes to indicate errors: intermediate routines that
don't care about exceptions don't need to include any code to check for
them. When searching for a `try` block, the VM
simply skips function `d()` if it's in the call
chain, since it has no handlers.

Second, note that function `c()` only handles
ParsingError exceptions. Since this function has no handlers for any
other exception types, the VM skips past this function when trying to
find a handler for the `ResourceError`
exception. So, not only can a function ignore exceptions entirely, but
it can selectively include handlers only for the specific exceptions it
wants to handle, and ignore anything else.

Third, note that, once an exception is caught, it no longer disrupts the
program's control flow. In other words, an exception isn't "re-thrown"
after it's caught, unless you explicitly throw it again with another
`throw` statement in the handler that caught it.

## Handling VM Run-Time Errors

When your program does something illegal, such as trying to multiple two
strings together or extracting an element from a list at an invalid
index, a run-time error occurs. TADS 3 treats all run-time errors as
ordinary exceptions; this means that you can handle run-time errors
using the same try/catch mechanism that you use to handle your own
exceptions.

The system library defines the `RuntimeError`
class, which serves as the base class for all VM run-time errors.

When a VM run-time error occurs, the VM create and throws a new
`RuntimeError` instance. The
`errno\_` property of this object is set to the
VM error number describing the error that occurred, and the
`exceptionMessage` property is set to the VM
error text for the error. You can inspect these properties directly, but
if you just want to display the error message, you should call the
`displayException()` method of the error object.



------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Exceptions and
Error Handling  
<span class="navnp"><a href="namedargs.html" class="nav"><em>Prev:</em> Named Arguments</a>
   
<a href="anonfn.html" class="nav"><em>Next:</em> Anonymous Functions</a>
    </span>

</div>
