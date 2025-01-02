---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Optional
Parameters  
<span class="navnp"><a href="proccode.html" class="nav"><em>Prev:</em> Procedural Code</a>
   
<a href="namedargs.html" class="nav"><em>Next:</em> Named Arguments</a>
    </span>

</div>

<div class="main">

# Optional Parameters

It's sometimes useful to define functions and methods with parameters
that are optional. An optional parameter is one that a caller *can*
include in a call to the function, but doesn't have to.

For a normal function or method, a caller must supply the same number of
arguments that are specified in the definition of the routine. The
system checks that the number of argument values supplied by the caller
matches the number of parameter variables expected by the function
definition, and throws an error if there's a mismatch.

When you define a function or method with optional parameters, though,
you're telling the system that it's okay for a caller to omit one or
more of the argument values. If the caller supplies a value for an
optional parameter, the value is assigned to the parameter variable as
usual. But if the caller omits a value for the corresponding argument
position, the system doesn't throw an error; instead, it simply sets the
parameter variable to a default value instead.

Optional parameters are useful in situations where you expect that the
majority of calls to the function will use the same value for that
argument. Rather than forcing those typical callers to type out that
same value in every call, you can make the parameter optional, so that
typical callers who just want the default can omit the value from the
function call syntax. At the same time, the few cases where a different
value is needed can still specify it just by adding the extra argument.

## Declaring optional parameters

To make a parameter optional, simply put a question mark
"<span class="code">?</span>" after the parameter name in the function
or method definition:

<div class="code">

    f(a, b?)
    {
      "This is f: a=<<a>>, b=<<b>>\n";
    }

</div>

This declares "a" as a regular parameter, and "b" as optional. Callers
must supply either one or two arguments when calling
<span class="code">f()</span>: a value for "a" must always be supplied,
but "b" can be omitted if desired.

When a caller omits an optional parameter, the system automatically
assigns <span class="code">nil</span> as the default value. Consider the
following calls to <span class="code">f()</span>:

<div class="code">

    f(1);
    f(2, 3);

</div>

That'll produce this output:

<div class="code">

    This is f: a=1, b=
    This is f: a=2, b=3

</div>

In the first call, we supplied only one argument value. This is assigned
to "a", since it's the first parameter. Since there's no second argument
value, the optional second parameter "b" gets the default value of nil
(which is why we print out "b=" with no value - nil is displayed simply
as empty when printed out). In the second call, we supplied two argument
values, so "a" gets the first value and "b" gets the second.

The system matches up argument values to parameter names positionally,
from left to right. (This doesn't apply to [named
arguments](namedargs.html) which are assigned explicitly by name; we'll
see more about those [below](#namedargs).) When a function has multiple
optional parameters, they're assigned in left to right order.

<div class="code">

    f2(a?, b?, c?)
    {
      "This is f2: a=<<a>>, b=<<b>>, c=<<c>>\n";
    }

    main(args)
    {
      f2();
      f2(1);
      f2(2, 3);
      f2(4, 5, 6);
    }

</div>

Here's what the code above prints out:

<div class="code">

    This is f2: a=, b=, c=
    This is f2: a=1, b=, c=
    This is f2: a=2, b=3, c=
    This is f2: a=4, b=5, c=6

</div>

As you'd expect, when the call has no argument values at all, the
parameters are all set to nil, so they print out as empty. When one
argument value is supplied, it's assigned to "a", since it's the first
(leftmost) parameter in the list. When two are supplied, they go to "a"
and "b".

### Mixing normal and optional parameters

As we've seen, it's fine to use a mix of optional and normal parameters
in the same function definition. But there's an important rule about the
ordering: **All parameters after the first optional parameter must also
be optional**.

The reason for this rule is that there'd be too much ambiguity in some
cases without it. For example, let's suppose that you could define a
function like this (you can't, because of the rule, but imagine for a
moment we could):

<div class="code">

    g(a?, b, c?) { }  // illegal, because normal parameter b follows optional a

</div>

If you called this with <span class="code">g(1)</span>, it's fairly
clear that "b" would be set to 1, since it's the only required variable.
But how should we handle <span class="code">g(1, 2)</span>? The most
obvious handling would probably be to set a=1 and b=2, but this would
mean that the first value isn't always assigned to "a" - in
<span class="code">g(1)</span> it's assigned to "b". It's also possible
to think of other orderings that make their own kind of sense, such as
setting b=1 and c=2 to preserve their relative order, or b=1 and a=2 on
the theory that b should always get first dibs, being the one required
parameter.

In any case, the compiler sidesteps the whole problem by disallowing
this type of mixing. Optional parameters can only be followed by more
optional parameters, so argument values are always assigned to parameter
variables in a simple left-to-right order.

## Declaring default parameter values

When you use the "<span class="code">?</span>" suffix to mark a
parameter as optional, you're also implicitly saying that the default
value for the variable is <span class="code">nil</span> when the caller
doesn't supply an explicit value for it. But what if you want to use a
different default?

The obvious approach might be to compare the value to
<span class="code">nil</span>, since that's the default that's assigned
when the argument isn't supplied. If the value is
<span class="code">nil</span>, we'd set the variable to the default
value we really wanted:

<div class="code">

    h(a?)
    {
      if (a == nil)
        a = 'a default value';

      // ... 
    }

</div>

But there's a problem: what if the caller wants to *explicitly* pass in
<span class="code">nil</span> as the value for "a"?

<div class="code">

    h(nil);

</div>

The approach we just took would make this impossible, because the
function can't distinguish the case where the caller omits "a" entirely
from the case where the caller explicit passes in
<span class="code">nil</span> as the value for "a".

A better approach would be to check <span class="code">argcount</span>
to test whether or not the caller included the argument:

<div class="code">

    h(a?)
    {
      if (argcount < 1)
        a = 'a default value';

      // ...
    }

</div>

That works, but it's what's known as brittle code - brittle in that it
breaks if you bend it. The problem is that if you rearrange the argument
list (by inserting another argument before "a", say), you have to
remember to fix the <span class="code">argcount</span> test to account
for the change.

Fortunately, there's a better way, which doesn't involve a separate
<span class="code">argcount</span> test. The compiler provides some
special syntax just for setting up custom default values. Rather than
using the "<span class="code">?</span>" suffix to define an optional
parameters, you can instead use the special default value syntax,
"<span class="code">=</span> *expression*". Using this syntax, we'd
redefine our example above like this:

<div class="code">

    h(a = 'a default value')
    {
      // ...
    }

</div>

This says that "a" should be set to the string <span class="code">'a
default value'</span> *only* if the caller didn't supply a different
value for it. If the caller does provide a value - even if the value is
<span class="code">nil</span> - "a" keeps the caller's value rather than
the default.

Note that setting a default value with the "<span class="code">=</span>
*expression*" syntax also makes the parameter optional, as though it had
the "<span class="code">?</span>" suffix. You can't use both suffixes on
the same variable, since there's no way for a parameter with a default
*not* to be optional. This means that every parameter following a
default-value parameter has to be optional, because of the ordering rule
we saw earlier.

### How defaults are assigned

A default value expression can be any valid expression, constant or
non-constant. If it's not a constant, it's evaluated each time the
function is called without an argument value for the parameter,
immediately upon entry to the function. The expression has access to the
other parameter variable names, but be aware that the optional
parameters are initialized in left-to-right order. This means that if
you have two default value expressions, the left one won't be able to
access the value of the right one. It's not an error to do so, but the
value will simply be <span class="code">nil</span>. For example:

<div class="code">

    h2(a = 'b=<<b>>', b = 'a=<<a>>')
    {
       "This is h2: a=<<a>>, b=<<b>>\n";
    }

</div>

This looks confusingly circular: "a" uses the value of "b" and "b" uses
the value of "a". But it's not an error, because of the simple
left-to-right initialization rule. Here's how this is resolved. First,
the system sets "a" and "b" to <span class="code">nil</span>. Next, it
initializes the optional parameters in left-to-right order. So we start
with "a". If the caller supplied a value for "a", it's assigned to "a",
otherwise we evaluate the default value expression
<span class="code">'b=\<\<b\>\>'</span>. Since we haven't gotten around
to "b" yet, it still has its initial value
<span class="code">nil</span>, so "a" is set to the string
<span class="code">'b='</span>. We then move on to "b", assigning the
value passed by the caller, or the default value expression
<span class="code">'a=\<\<a\>\>'</span>. Since we've already finished
setting up "a", this will expand to <span class="code">'a=b='</span> if
there was no caller value for "a", or <span class="code">'a=x'</span> if
the caller supplied <span class="code">'x'</span> as the value for "a".

A default value expression is evaluated **only** when it's needed, which
is to say, when the caller omits the corresponding argument. This is
important when the expression has side effects, such as displaying a
message. Any side effect will be triggered only on calls where the
default value is actually needed.

## <span id="namedargs"></span>Declaring named parameters as optional

[Named arguments](namedargs.html) can be made optional in the same way as
positional parameters. Simply put the <span class="code">?</span> suffix
or the <span class="code">=</span>*default value* assignment after the
colon "<span class="code">:</span>" suffix for the named argument:

<div class="code">

    f3(a, b:?, c: = 'c default')
    {
      "This is f3: a=<<a>>, b=<<b>>, c=<<c>>\n";
    }

</div>

This defines a function with one required positional argument "a", and
two optional named arguments "b" and "c". Since "b" is marked as
optional with the "<span class="code">?</span>" suffix, it will be set
to <span class="code">nil</span> if the caller doesn't supply a value
for it; "c", on the other hand, has an explicit default value expression
that will be used if the caller omits a value. So the following series
of calls:

<div class="code">

    f3(1);
    f3(2, b:3);
    f3(4, c:5);
    f3(6, c:7, b:8);

</div>

...will produce this output:

<div class="code">

    This is f3: a=1, b=, c=c default
    This is f3: a=2, b=3, c=c default
    This is f3: a=4, b=, c=5
    This is f3: a=6, b=8, c=7

</div>

### Ordering for positional arguments

Remember the rule that an optional parameter can only be followed by
more optional parameters? Well, there's an exception. It doesn't apply
to named arguments.

This is because named arguments are effectively separate from the
positional list, despite their syntactic commingling. The caller and
callee both refer to these variables explicitly by name, so their
positional order doesn't matter. So, it's fine to follow an optional
positional parameter with a required named argument, and it's fine to
follow an optional named argument with a required positional one (so
long as there aren't any earlier optional positional parameters, of
course).

## Optional vs. varying parameters

Optional parameters are similar to the "..." syntax for varying argument
lists, but not quite identical.

The "..." syntax says that a function can take any number of additional
arguments beyond the ones explicitly named in the definition. This is
extremely useful for situations where the number of additional arguments
is truly unpredictable. For example, if you're setting up a proxy method
that calls another method that's determined at run-time, you obviously
can't know in advance how many arguments will be needed for the other
method; "..." handles this by accepting whatever arguments are actually
passed in. Similarly, a function that takes a message string and a
series of substitution parameters would need "...", because the number
of substitutions might be different in every message string.

Optional parameters, in contrast, are best for cases where you have a
fixed number of parameters, but where one (or more) of the parameters
will *usually* have a certain predictable value. That is, callers will
almost always pass that same argument value for the parameter, except
perhaps in a few special cases. For these situations, it's nice to let
callers omit the argument value entirely when it's going to be that
typical value. This saves a little typing on the calling side for the
common invocation, while still letting callers supply a non-default
value when needed.

By the way, it's legal to use the "..." syntax in a parameter list that
has optional arguments. Everything works as normal: you find out how
many parameters are present using <span class="code">argcount</span>,
and you access the unnamed parameters beyond the "..." using
<span class="code">getArg()</span>.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Optional
Parameters  
<span class="navnp"><a href="proccode.html" class="nav"><em>Prev:</em> Procedural Code</a>
   
<a href="namedargs.html" class="nav"><em>Next:</em> Named Arguments</a>
    </span>

</div>
