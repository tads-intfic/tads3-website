[multmeth.t]{.title}[file]{.type}

[source file](../source/multmeth.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
This module provides the run-time component of \"multi-methods\" in TADS
3. This works with the compiler to implement a multiple-dispatch system.

Multi-methods are essentially a combination of regular object methods
and \"overloaded functions\" in languages like C++. Like a regular
object method, multi-methods are polymorphic: you can define several
incarnations of the same function name, with different parameter types,
the system picks the right binding for each invocation dynamically,
based on the actual argument values at run-time. Unlike regular methods,
though, the selection is made on ALL of the argument types, not just a
special \"self\" argument. In that respect, multi-methods are like
overloaded functions in C++; but multi-methods differ from C++
overloading in that the selection of which method to call is made
dynamically at run-time, not at compile time.

There are two main uses for multi-methods.

First, most obviously, multi-methods provide what\'s known as \"multiple
dispatch\" semantics. There are some situations (actually, quite a few)
where the ordinary Object Oriented notion of polymorphism - selecting a
method based on a single target object - doesn\'t quite do the trick,
because what you really want to do is select a particular method based
on the \*combination\* of objects involved in an operation. Some
canonical examples are calculating intersections of shapes in a graphics
program, where you want to select a specialized \"Rectangle + Circle\"
routine in one case and a \"Line + Polygon\" routine in another; or
performing file format conversions, where you want to select, say, a
specialized \"JPEG to PNG\" routine. In an IF context, the obvious use
is for carrying out multi-object verbs, where you might want a special
routine for PUT (liquid) IN (vessel), and another for PUT (object) IN
(container).

Second, multi-methods offer a way of extending a class without having to
change the class\'s source code. Since a multi-method is defined
externally to any classes it refers to, you can create a method that\'s
polymorphic on class type - just like a regular method - but as a
syntactically stand-alone function. This feature isn\'t as important in
TADS as in some other languages, since TADS lets you do essentially the
same thing with the \"modify\" syntax; but for some purposes the
multi-method approach might be preferable aesthetically, since it\'s
wholly external to the class rather than a sort of lexically separate
continuation of the class\'s code. (However, as a practical matter,
it\'s not all that different; our implementation of multi-methods does
in fact modify the original class object, since we store the binding
information in the class objects.)
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`_MultiMethodInheritCtx`](../object/_MultiMethodInheritCtx.html)`  `[`_MultiMethodPlaceholder`](../object/_MultiMethodPlaceholder.html)`  `[`UnboundInheritedMultiMethod`](../object/UnboundInheritedMultiMethod.html)`  `[`UnboundMultiMethod`](../object/UnboundMultiMethod.html)`  `
[]{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`_multiMethodEndOfList`](../object/_multiMethodEndOfList.html)`  `[`_multiMethodNonObjectBindings`](../object/_multiMethodNonObjectBindings.html)`  `[`_multiMethodRegistry`](../object/_multiMethodRegistry.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`_multiMethodBuildBindings`](#_multiMethodBuildBindings)`  `[`_multiMethodCall`](#_multiMethodCall)`  `[`_multiMethodCallInherited`](#_multiMethodCallInherited)`  `[`_multiMethodInherit`](#_multiMethodInherit)`  `[`_multiMethodInheritMain`](#_multiMethodInheritMain)`  `[`_multiMethodRegister`](#_multiMethodRegister)`  `[`_multiMethodSelect`](#_multiMethodSelect)`  `[`getMultiMethodPointer`](#getMultiMethodPointer)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#_multiMethodBuildBindings}

`_multiMethodBuildBindings ( )`

[multmeth.t](../file/multmeth.t.html)\[[518](../source/multmeth.t.html#518)\]

::: desc
Build the method bindings. The compiler generates a call to this after
all methods have been registered; we run through the list of registered
methods and generate the binding properties in the referenced objects.
:::

[]{#_multiMethodCall}

`_multiMethodCall (baseFunc, args)`

[multmeth.t](../file/multmeth.t.html)\[[76](../source/multmeth.t.html#76)\]

::: desc
Invoke a multi-method function. For an expression of the form

\
f(a, b, \...)

where \'f\' has been declared as a multi-method, the compiler will
actually generate code that invokes this function, like so:

\
\_multiMethodCall(baseFunc, params);

\'baseFunc\' is a function pointer giving the base function; this is a
pointer to the common stub function that the compiler generates to
identify all of the multi-methods with a given name. \'params\' is a
list giving the actual parameter values for invoking the function.

Our job is to find the actual run-time binding for the function given
the actual parameters, and invoke it.
:::

[]{#_multiMethodCallInherited}

`_multiMethodCallInherited (fromFunc, [args])`

[multmeth.t](../file/multmeth.t.html)\[[105](../source/multmeth.t.html#105)\]

::: desc
Invoke the base multi-method inherited from the given multi-method.
\'fromFunc\' is a pointer to a multi-method, presumably the one
currently running; we look up the next in line in inheritance order and
invoke it with the given argument list.
:::

[]{#_multiMethodInherit}

`_multiMethodInherit (fromFunc, prop, args)`

[multmeth.t](../file/multmeth.t.html)\[[291](../source/multmeth.t.html#291)\]

::: desc
Select the INHERITED version of a multi-method. This takes a particular
version of the multi-method, and finds the next version in inheritance
order.

This is basically a copy of \_multiMethodSelect(), with a small amount
of extra logic. This code repetition isn\'t good maintenance-wise, and
the two functions could in principle be merged into one. However, doing
so would have an efficiency cost to \_multiMethodSelect(), which we want
to keep as lean as possible.
:::

[]{#_multiMethodInheritMain}

`_multiMethodInheritMain (ctx, fromFunc, prop, args)`

[multmeth.t](../file/multmeth.t.html)\[[301](../source/multmeth.t.html#301)\]

::: desc
*no description available*
:::

[]{#_multiMethodRegister}

`_multiMethodRegister (baseFunc, func, params)`

[multmeth.t](../file/multmeth.t.html)\[[495](../source/multmeth.t.html#495)\]

::: desc
Register a multi-method.

The compiler automatically generates a call to this function during
pre-initialization for each defined multi-method. \'baseFunc\' is a
pointer to the \"base\" function - this is a stub function that the
compiler generates to refer to the whole collection of multi-methods
with a given name. \'func\' is the pointer to the specific multi-method
we\'re registering; this is the actual function defined in the code with
a given set of parameter types. \'params\' is a list of the parameter
type values; each parameter type in the list is given as a class object
(meaning that the parameter matches that class), nil (meaning that the
parameter matches ANY type of value), or the string \'\...\' (meaning
that this is a \"varargs\" function, and any number of additional
parameters can be supplied at this point in the parameters; this is
always the last parameter in the list if it\'s present).
:::

[]{#_multiMethodSelect}

`_multiMethodSelect (prop, args)`

[multmeth.t](../file/multmeth.t.html)\[[205](../source/multmeth.t.html#205)\]

::: desc
Resolve a multi-method binding. This function takes a binding property
ID (the property we assign during the registration process to generate
the binding tables) and a \"remaining\" argument list. This function
invokes itself recursively to traverse the arguments from left to right,
so at each recursive invocation, we lop off the leftmost argument (the
one we\'re working on currently) and pass in the remaining arguments in
the list.

We look up the binding property on the first argument in the remaining
argument list. This can yield one of three things:

\- The trivial result is nil, which means that this binding property has
no definition on the first argument. This doesn\'t necessarily mean that
the whole function is undefined on the arguments; it only means that the
current inheritance level we\'re looking at for the previous argument(s)
has no binding. If we get this result we simply return nil to tell the
caller that it must look at an inherited binding for the previous
argument.

\- If the result is a function pointer, it\'s the bound function. This
is the final result for the recursion, so we simply return it.

\- Otherwise, the result will be a new property ID, giving the property
that resolves the binding for the \*next\* argument. In this case, we
use this property to resolve the next argument in the list by a
recursive invocation. If that recursive call succeeds (i.e., returns a
non-nil value), we\'re done - we simply return the recursive result as
though it were our own. If it fails, it means that there\'s no binding
for the particular subclass we\'re currently working on for the first
argument - however, there could still be a binding for a parent class of
the first argument. So, we iterate up to any inherited binding for the
first argument, and if we find one, we try again with the same recursive
call. We continue up our first argument\'s class tree until we either
find a binding (in which case we return it) or exhaust the class tree
(in which case we return nil).
:::

[]{#getMultiMethodPointer}

`getMultiMethodPointer (baseFunc, [args])`

[multmeth.t](../file/multmeth.t.html)\[[153](../source/multmeth.t.html#153)\]

::: desc
Get a pointer to a resolved multi-method function. This takes a pointer
to the base function for the multi-method and a list of actual argument
values, and returns a function pointer to the specific version of the
multi-method that would be invoked if you called the multi-method with
that argument list.

For example, if you want to get a pointer to the function that would be
called if you were to call foo(x, y, z), you\'d use:

\
local func = getMultiMethodPointer(foo, x, y, z);

We return a pointer to the individual multi-method function that matches
the argument list, or nil if there\'s no matching multi-method.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
