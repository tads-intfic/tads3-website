---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="ui.html" class="nav">The User Interface</a> \> The Default
Display Function  
<span class="navnp"><a href="fmt.html" class="nav"><em>Prev:</em> The Output Formatter</a>
    <a href="banners.html" class="nav"><em>Next:</em> The Banner Window
Display Model</a>     </span>





# The Default Display Function

The T3 VM does not have a built-in input/output system; as far as the VM
is concerned, input/output operations are part of the host environment,
and not part of the VM. As a result, T3 doesn't know what to do with
self-printing strings (strings enclosed in double quotes in a TADS
program's source code) or embedded expressions (expressions contained in
`\<\< \>\>` sequences within double-quoted
strings). To enable implicit display operations, the VM has a mechanism
that lets the running program specify a function, defined in the program
code, to call to display self-printing strings and embedded expressions.
This is the "default display function." The program can also define a
method to be called on the active `self` object
at the time a string is to be displayed; this is the "default display
method."

Note: if you're using the adv3 library, the library will take care of
the VM-level display function registration. You'll generally want to
work with the adv3 output manager instead of directly with the VM-level
display mechanism.

The program can define a default display function and method
simultaneously. The VM chooses whether to call the method or the
function on a case-by-case basis, each time a value is to be displayed:

- If all of the following conditions are true, the VM calls the default
  display *method*:
  - A default display method has been defined (via the
    `t3SetSay()` function)
  - There is a valid `self` object that is
    displaying the string or embedded value
  - The `self` object defines or inherits the
    default display method
- If any of the necessary conditions for invoking the default display
  method aren't met, then the VM invokes the default display *function*
  instead. If no default display function has been defined (via the
  `t3SetSay()` function), the VM throws an
  error.

To set the default display function, call the
`t3SetSay()` function in the [t3vm](t3vm.html)
function set, passing a function pointer argument (this must be a
program-defined function, not an intrinsic function). To set the default
display method, call `t3SetSay()` with a
property pointer argument.

Most programs can simply set up the default display function and method
once at program startup. However, some programs might wish to change the
function from time to time. For example, a program might wish to use
special output filtering at some times but not others; this can be
achieved by switching between a version of the display function that
performs the filtering, and another version that displays unfiltered
output.

## Writing a display function

A default display function takes a single argument, which is the value
to be displayed, and returns no value. The simplest implementation is to
simply pass the value to the `tadsSay()`
function (in the [tads-io](tadsio.html) function set) to display the
value on the console:

```
    myDispFunction(val)
    {
      tadsSay(val);
    }
```

To establish `myDispFunction()` as the default
display function, you'd write a line of code like this:

```
    t3SetSay(myDispFunction);
```

t3SetSay() call in your `main()` routine, since
this would establish the display function during start-up. Of course,
you can also switch display functions at any time during program
execution, which can be useful for certain special effects. For example,
if you wanted to display text in all capitals at certain times (such as
when the player is in a particular location), you could switch to a
capitalizing display function:

```
    dispAllCaps(val)
    {
      tadsSay(val.toUpper());
    }

    // when entering all-caps room
    t3SetSay(dispAllCaps);

    // when leaving all-caps room
    t3SetSay(myDispFunction);
```

## Writing a display method

The default display method works just like the default display function,
but it's a method on an object or class rather than a function. If you
use a default display method, you will in most cases define one method
in one of your classes that is near the root of your class hierarchy, so
that most or all of your other objects and classes inherit the method.

Like the default display function, the default display method takes a
single argument, which is a value to be displayed, and returns no value.
The method should simply display the value using whatever mechanism you
wish.

```
    class Item: object
      myDispMethod(val) { tadsSay(val); }
    ;
```

The benefit of using a default display method instead of (or in addition
to) a display function is that the method can use properties of the
"self" object to customize the display. For example, suppose that you
defined a class of objects that all have a color attribute, and you
wanted to create a mechanism that lets you write generic messages
describing instances of the class, while still customizing the color
name in the messages. You could do this by defining a substitution
string - let's say it's "COLOR" - then looking for that string in
display values and substituting the color attribute. Here's some code
that would accomplish this.

```
    class ColorItem: Item
      myDispMethod(val)
      {
        /* substitute color placeholder strings */
        if (dataType(val) == TypeSString)
          val = rexReplace('COLOR', val, colorName, ReplaceAll);

        /* display the value */
        tadsSay(val);
      }
      sdesc = "COLOR item"
      ldesc = "It's a COLOR item. "
    ;

    redItem: ColorItem colorName='red';
    blueItem: ColorItem colorName='blue';
```

The implementation of `myDispMethod()` in the
ColorItem class, which is inherited by redItem and blueItem, checks the
datatype of the value to be displayed. If the value is a string, the
method performs a replacement on the string, substituting the string in
the `self` object's colorName property for any
instance of the text "COLOR" in the original string.

## How the VM calls the display function

The VM calls the current display method or function each time your
program evaluates a double-quoted string, and each time the program
evaluates an expression embedded in a double-quoted string with the
`\<\< \>\>` syntax.

The argument to the display function can be of any type. When you
evaluate a double-quoted string, the VM calls the display function with
a single-quoted string containing the same text as the double-quoted
string. However, when you evaluate an expression embedded in a
double-quoted string using the `\<\< \>\>`
syntax, the VM calls the display function with the result of evaluating
the expression. This value can be of any type.

Note that the display function should generally display nothing when
called with a `nil` argument. This allows you to
use expressions that have side effects, but which return no value, as
embedded expressions. We will see an example of this a little later.

By way of explanation, we could rewrite any double-quoted string in the
program as a call to the display function with the string value as the
argument. So, we could rewrite this:

```
    f1() { "Hello!"; }
```

like this:

```
    f1() { myDispFunction('Hello!'); }
```

Similarly, any time there is an embedded expression in a string, we
could rewrite the entire string as a series of calls to the display
function. We could thus rewrite this:

```
    f2() { "Hello <<Me.nameString>>!  Your age is <<Me.age>>."; }
```

like so:

```
    f2()
    {
      myDispFunction('Hello ');
      myDispFunction(Me.nameString);
      myDispFunction('!  Your age is ');
      myDispFunction(Me.age);
      myDispFunction('.');
    }
```

When a default display method is in effect, and you display a string or
embedded expression from an object that defines or inherits the display
method, double-quoted strings are displayed by calls to the method. For
example, assume that we have a class named DispItem that defines the
current default display method. We could then rewrite this:

```
    obj1: DispItem
      sdesc = "My name is <<nameString>>."
    ;
```

as this:

```
    obj1: DispItem
      sdesc
      {
        self.myDispMethod('My name is ');
        self.myDispMethod(self.nameString);
        self.myDispMethod('.');

      }
    ;
```

When the VM calls the display method, `self` is
the object that actually defines the property or method displaying the
string. This applies even for embedded expressions. Consider this
example:

```
    obj2: DispItem
      sdesc = "The other object is <<obj3.openDesc>>"
    ;

    obj3: DispItem
      openDesc { isOpen ? "open" : "closed"; }
      isOpen = true
    ;
```

This is a bit complicated, because we are evaluating a double-quoted
string which has an embedded expression, which in turn evaluates a
double-quoted string in a different object. So, what
`self` object is in effect when we display
"open" or "closed"?

This is easier to answer if we use our rewriting rules. We can rewrite
the example like this:

```
    obj2: DispItem
      sdesc 
      {
        self.myDispMethod('The other object is ');
        self.myDispMethod(obj3.openDesc);
      }
    ;

    obj3: DispItem
      openDesc
      {
        isOpen ? self.myDispMethod('open') 
               : self.myDispMethod('closed');
      }
      isOpen = true
    ;
```

We can see that we start out in `obj2.sdesc`,
and display the first fragment of the string ("The other object is ");
`self` is clearly obj2 for this display method
call. We then evaluate `obj3.openDesc` (using
the normal TADS order of evaluation rules, we must evaluate a function's
arguments before we can call the function). So, we find ourselves in
`obj3.openDesc`. This method chooses to display
either "open" or "closed", depending on its isOpen property value. Once
again, the rewrite makes it fairly obvious what's going on: we call
myDispMethod to display "open" or "closed", with
`self` set to obj3. This method returns no
value, which means that its effective return value is
`nil`. Finally, we return back to where we came
from in `obj2.sdesc`, where we call
`myDisplayMethod()` with the
`nil` return value from
`obj3.openDesc`, using obj2 for the
`self` object.

It should be noted that the compiler does not actually make the
transformations above; the actual compiled representation is a lot more
compact than this, since the T3 byte-code has dedicated instructions for
displaying strings and expressions. The effect, however, is the same.



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="ui.html" class="nav">The User Interface</a> \> The Default
Display Function  
<span class="navnp"><a href="fmt.html" class="nav"><em>Prev:</em> The Output Formatter</a>
    <a href="banners.html" class="nav"><em>Next:</em> The Banner Window
Display Model</a>     </span>


