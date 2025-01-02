---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Capturing Calls to
Undefined Methods  
<span class="navnp"><a href="anonfn.html" class="nav"><em>Prev:</em> Anonymous Functions</a>
    <a href="reflect.html" class="nav"><em>Next:</em> Reflection</a>    
</span>

</div>



# Capturing Calls to Undefined Properties

The TADS 3 language doesn't require you to specify the types of
variables, functions, and properties when you declare them - in fact,
the language doesn't have any way of making these declarations even if
you wanted to. This means that the language isn't "statically typed":
you can't tell the type of a variable with certainty just by looking at
the variable's definition.

(This isn't to say the language is "weakly typed", by the way, which is
a common misconception about this type of language. TADS is actually a
strongly typed language with run-time typing. A weakly typed language is
one where values can be reinterpreted as different types at the byte
storage level, such as the way an integer can be reinterpreted as a
pointer, or vice versa, in C. C could be considered a weakly typed
language with static typing; TADS is the opposite, a strongly typed
language with run-time typing.)

Because the compiler doesn't know in advance what kind of object a
variable might contain, the compiler can't determine whether or not a
particular property will be defined for the object. For example,
consider this code:

```
    local x;
    x = getSomeObject();
    x.name;
```

Because the compiler can't tell what kind of object x will contain when
this code is executed, the compiler can't know whether or not that
object will define the property "name."

When you call a property (or, equivalently, a method) on an object, and
the object doesn't define that property and doesn't inherit it from any
superclass, the VM will do one of two things:

- If the program exports a property called
  `propNotDefined`, and the object defines or
  inherits this property, the VM invokes
  `propNotDefined` with the original property ID
  as the first argument, followed by all of the other arguments of the
  original invocation.
- Otherwise, the undefined property invocation returns nil.

The basic system library doesn't export any symbol called
`propNotDefined`, so in a low-level TADS 3
program, you must explicitly export this symbol if you want to use the
`propNotDefined` mechanism. However, note that
the adv3 library **does** export
`propNotDefined`, so the mechanism is enabled
automatically if you're writing a library-based game.

Refer to the section on [exporting symbols](export.html) for details on
the export mechanism.

## Throwing an Exception for Undefined Properties

Calling an undefined property is perfectly legal in TADS, so there are
no error messages or other negative consequences when a program does so.
It's possible, though, to use the propNotDefined mechanism described
above to introduce your own error on undefined property evaluation, if
you wish to modify the language to make such calls illegal. Of course,
doing so is only suitable if you're using TADS to create something
highly customized. Be aware that you'll have to replace all of the
standard Adv and system library components if you don't want to allow
undefined property calls, since the standard components all operate
within the standard rule that calls to undefined properties are legal.
This sort of change is thus only possible if you're creating a complete
replacement library.

Here's an example of how you might do this:

```
    // this export is needed only if the library doesn't
    // otherwise define it
    property propNotDefined;
    export propNotDefined;

    // an exception for invoking an undefined property -
    // note that reflection could be used to provide a better message
    class PropNotDefinedException: Exception
      construct(prop, argList) { prop_ = prop; argList_ = argList; }
      displayException() { "call to undefined property"; }
      prop_ = nil
      argList_ = nil
    ;

    // throw an exception for any undefined property invocations
    modify Object
      propNotDefined(prop, [args])
      {
        throw new PropNotDefinedException(prop, args);
      }
    ;
```

## Proxy Objects

It's frequently useful to define one object as a "proxy" for another, so
that the proxy object redirects most method calls to its underlying
object. This allows the proxy to provide its own definitions for a few
particular properties, while letting the original object do everything
else. The `propNotDefined` mechanism makes this
easy to implement.

```
    // redirect everything but 'name' to the original
    class Proxy: object
      construct(original) { orig_ = original; }

      // change the name
      name = "proxy for <<orig_.name>>"

      // redirect everything we don't define ourselves
      propNotDefined(prop, [args])
      {
        // call the undefined property on the original object
        orig_.(prop)(args...);
      }

      // my underlying object
      orig_ = nil
    ;
```



------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Capturing Calls to
Undefined Methods  
<span class="navnp"><a href="anonfn.html" class="nav"><em>Prev:</em> Anonymous Functions</a>
    <a href="reflect.html" class="nav"><em>Next:</em> Reflection</a>    
</span>

</div>
