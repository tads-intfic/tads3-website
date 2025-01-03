---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Object  
<span class="navnp"><a href="lookup.html" class="nav"><em>Prev:</em> LookupTable</a>
    <a href="rexpat.html" class="nav"><em>Next:</em> RexPattern</a>    
</span>
# Object

Every object in a running program, including objects your program
defines via "object" and "class" definitions and instances of intrinsic
classes, ultimately derives from the intrinsic class Object.

You can never instantiate Object directly, since this is an "abstract"
class. However, since every object is a subclass of Object, every object
in the system inherits the methods defined by Object.

## Object methods

The Object class defines a number of methods. Since all objects are
subclasses of Object, all objects inherit these methods. Most of these
methods are related to the the relationships between objects and
classes.

`getSuperclassList()`



Returns a list containing the immediate superclasses of the object. The
list contains only the object's direct superclasses, which are the
superclasses that were explicitly listed in the object's declaration for
static objects, or the class used with the `new`
operator for dynamic objects. This function returns an empty list for an
object with no superclass. For an object with more than one direct
superclass, the list contains the superclasses in the same order in
which they were specified in the object's declaration.

For example, consider these definitions:

```
    class A: object;
    class B: object;
    class C: B;
    myObj: C, A;
```

The result of `myObj.getSuperclassList()` will
be the list `\[C, A\]`. Note that class B is not
included in the list, because it is not a direct superclass of myObj,
but is a superclass only indirectly through class C.



`getPropList()`



Returns a list of the properties directly defined by this object. Each
entry in the list is a property pointer value. The returned list
contains only properties directly defined by the object; inherited
properties are not included, but may be obtained by explicitly
traversing the superclass list and calling this method on each
superclass.



<span id="getPropParams"></span>

`getPropParams(*prop*)`



Returns information on the parameters taken by the given property or
method of this object. The return value is a list with three elements:

- \[1\] is the minimum number of arguments taken by the method;
- \[2\] is the number of additional optional arguments taken by the
  method;
- \[3\] is true if the method accepts any number of additional
  arguments, `nil` if not.

The second element gives the number of optional arguments; only
intrinsic methods will ever yield a non-zero value for this element,
because regular methods cannot specify optional arguments. For example,
the `substring()` method of the String intrinsic
class can take either one or two arguments, so its return list is
`\[1, 1, nil\]`, indicating that the function
takes a minimum of one argument, can take one additional optional
argument, but does not take an unlimited varying argument list after
those arguments.

If the third element is `true`, it indicates
that the method was defined with the "..." varying argument list
notation.

If the specified property is not defined for the object, the method
returns `\[0, 0, nil\]`, because it's valid to
invoke the property with no arguments in this case.



`isClass()`



Returns `true` if the object was declared as a
"class", `nil` otherwise.



`isTransient()`



Returns `true` if the object is transient,
`nil` otherwise. A transient object is one that
was created with `new transient`
*`classname`*, or with a class-specific method
that creates transient instances (such as
`TadsObject.createTransientInstance()` or
`TadsObject.createTransientInstanceOf()`).



`ofKind(*cls*)`



Determines if the object is an instance of the class *cls*, or an
instance of any subclass of *cls*. Returns
`true` if so, `nil` if
not. This method always returns true if *cls* is Object, since every
object ultimately derives from the Object intrinsic class.



`propDefined(*prop*, *flags*?)`



Determines if the object defines or inherits the property *prop* (a
property pointer value - specify this by applying an ampersand prefix
(`&`) to a property name), according to the
*flags* value. If *flags* is not specified, a default value of
`PropDefAny` is used. The valid *flags* values
are:

- `PropDefAny` - the function returns
  `true` if the object defines or inherits the
  property.
- `PropDefDirectly` - the function returns
  `true` only if the object directly defines the
  property; if it inherits the property from a superclass, the function
  returns `nil`.
- `PropDefInherits` - the function returns
  `true` only if the object inherits the
  property from a superclass; if it defines the property directly, or
  doesn't define or inherit the property at all, the function returns
  `nil`.
- `PropDefGetClass` - the function returns the
  superclass object from which the property is inherited, or this object
  if the object defines the property directly. If the object doesn't
  define or inherit the property, the function returns
  `nil`.



`propInherited(*prop*, *origTargetObj*, *definingObj*,
*flags*?)`



Determines if the object inherits the property *prop* (a property
pointer value). *origTargetObj* is the "original target object," which
is the object on which the method was originally invoked; that is, it's
the object on the left-hand side of the `.`
operator in the expression that originally invoked the method.
*definingObj* is the "defining object," which is the object defining the
method which will be inheriting the superclass implementation.

The return value depends on the value of the *flags* argument:

- `PropDefAny` - the function returns
  `true` if the object inherits the property,
  `nil` otherwise.
- `PropDefGetClass` - the function returns the
  class object from which the property is inherited, or
  `nil` if the property is not inherited.

This method is most useful for determining if the currently active
method will invoke an inherited version of the method if it uses the
inherited operator; this is done by passing
`targetprop` for the *prop* parameter,
`targetobj` for the *origTargetObj* parameter,
and `definingobj` for the *definingObj*
parameter. When a class is designed as a "mix in" (which means that the
class is designed to be used with multiple inheritance as one of several
base classes, and adds some isolated functionality that is "mixed" with
the functionality of the other base classes), it sometimes useful to be
able to check to see if the method is inherited from any other base
classes involved in multiple inheritance. This method allows the caller
to determine exactly what inherited will do.

Note that the inheritance order is deterministic (i.e., it will always
be the same for a given situation), and that it depends on the full
class tree of the original target object. For example, suppose we have a
set of class definitions like this:

```
    class A: object  x() { "A.x\n"; inherited(); }
    class B: object  x() { "B.x\n"; inherited(); }

    class C: B, A    x() { "C.x\n"; inherited(); }
```

Now suppose we run some code like so:

```
    new B().x();
    new C().x();
```

The first line will simply display "B.x". B inherits directly from
TadsObject, so when B.x() calls `inherited()`,
it will find no definition of `x()` in any base
class (since TadsObject doesn't define it), so inherited() will do
nothing.

The second line, however, will display this:

```
    C.x
    B.x
    A.x
```

So, even though the call to `inherited()` in
`B.x()` went straight to TadsObject when
`B.x()` was invoked from the first line above,
the same call to inherited() in `B.x()` proceeds
to `A.x()` when invoked from the second line
above. The difference is that C inherits from both B and A. B is the
first superclass, so the call to `inherited()`
in `C.x()` proceeds to
`B.x(`). But C also inherits from A, and the
superclass order is defined so that A comes after B in C's superclass
list. So, the call to `inherited()` in
`B.x()` proceeds to
`A.x()` this time, since that's the next
superclass in inheritance order for the original target object.



`propType(*prop*)`



Returns the datatype of the given property of the given object, or
`nil` if the object does not define or inherit
the property. This function does not evaluate the property, but merely
determines its type. The return value is one of the
`TYPE_xxx` values (see the
[reflection](reflect.html) section for the list).
------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Object  
<span class="navnp"><a href="lookup.html" class="nav"><em>Prev:</em> LookupTable</a>
    <a href="rexpat.html" class="nav"><em>Next:</em> RexPattern</a>    
</span>


