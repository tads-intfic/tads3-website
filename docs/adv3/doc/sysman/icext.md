---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Extending
Intrinsic Classes  
<span class="navnp"><a href="reflect.html" class="nav"><em>Prev:</em> Reflection</a>
   
<a href="export.html" class="nav"><em>Next:</em> Exporting Symbols</a>
    </span>

</div>



# Extending Intrinsic Classes

You can extend an intrinsic class's programmatic interface by adding new
methods and static (class-level) properties. This capability allows you
to add new functionality to an intrinsic class, and then access the new
functionality using the same syntax that you would use to access native
features of the class.

To add a method to an intrinsic class, use the
`modify` statement. The
`modify` syntax for intrinsic classes is almost
exactly the same as it is for regular objects:

<div class="syntax">

    modify intrinsicClassName
       method1 ( paramList ) { code }
       method2 ...
    ;



When you modify an intrinsic class, the intrinsic class must be defined
before the `modify` statement. In most cases,
this simply means that you must `\#include` the
system header file that defines the intrinsic class before the
`modify` statement in the same compilation unit.

The following example adds a base-2 logarithm function to the BigNumber
intrinsic class.

```
    #include <bignum.h>

    modify BigNumber
      log2()
      {
        /*
         *   cache ln(2)  use slightly greater precision than we
         *   actually need, to avoid rounding error
         */
        if (BigNumber.cacheLn2_ == nil
            || BigNumber.cacheLn2_.getPrecision() < getPrecision() + 3)
        {
          BigNumber.cacheLn2_ = 
            new BigNumber(2, getPrecision() + 3).logE();
        }

        /*
         *   Calculate ln(self), then divide by ln(2) to get the
         *   result (note that ln-base-B of x for any B is equal to
         *   ln(x)/ln(B)).  Reduce the precision of the result back
         *   to our own precision before returning.
         */
        return (self.setPrecision(getPrecision() + 3).logE()
                / BigNumber.cacheLn2_).setPrecision(getPrecision());
      }

      // our caches ln(2) value  we don't have any value initially
      cacheLn2_ = nil
    ;
```

This example illustrates several aspects of intrinsic class extensions.

First, note that we can refer to `self` within
the method we add to the class. We're modifying BigNumber, so
`self` is always a BigNumber object; we can thus
refer to its methods, such as `getPrecision()`
and `setPrecision()`, and we can also use the
value in arithmetic.

Second, note that we can add a data property to the class. In the
example, we add a property called `cacheLn2`,
which contains a cached value of the natural logarithm of 2. (In the
example, we have chosen to cache the value rather than recalculate it
each time we call the `ln2()` method as a
performance optimization; calculating `ln(2)` is
fairly expensive, so it makes sense to save the value when we first
calculate it, and re-use the same value rather than calculating it on
each new call to the method.)

Note, though, that we can only add class-level properties to the class.
We cannot add instance properties. In other words, we can only add a
property to BigNumber itself, not to each individual BigNumber value.
So, we cannot write something like this within an intrinsic class
extension method:

```
    self.val1 = 5;  // ILLEGAL!
```

The statement above is illegal in an intrinsic class extension method
because it attempts to store a property value with the object itself,
rather than with the intrinsic class.

## Restrictions

There are some restrictions on modifying intrinsic classes:

- You cannot add properties to instances of an intrinsic class (you can,
  however, add class-level properties).
- You cannot modify an intrinsic method of an intrinsic class, whether
  defined directly on the class or inherited from its intrinsic
  superclass
- You cannot use `replace` with an intrinsic
  class.
- You cannot subclass an intrinsic class.

## Using Aggregation

There might be times when the intrinsic class extension mechanism is too
restrictive for a particular application you have in mind. In
particular, you might sometimes find it necessary to add new properties
to individual instances of a class; since you can't do this by extending
an intrinsic class, you'll have to find an alternative approach in such
cases.

One approach that you might consider is aggregation. Aggregation is a
common technique in object-oriented programming in which you create a
"wrapper" object that contains an instance of a class you want to
extend. In other words, rather than subclassing, you create a new,
independent class, and store an instance of the class you wish to extend
as a property of the new class.

For example, suppose you wanted to create a complex number class. (A
complex number is a mathematical entity with two components, a "real"
part and an "imaginary" part. The real part is an ordinary real number,
and the imaginary part is a real number multiplied by *i*, the square
root of -1, known as the imaginary unit. The two parts are added
together to form the complex number.) You can't create a complex number
class by extending BigNumber, since there'd be no way to store the two
separate numbers making up a complex value. Instead, you could use
aggregation.

To create a complex number class using aggregation, we'd start with
something like this:

```
    class Complex: object
      construct(r, i) { r_ = r; i_ = i; }
      r_ = nil // the real part
      i_ = nil // the imaginary part
    ;
```

Here, the properties `r\_` and
`i\_` are simply BigNumber values. We have thus
aggregated two BigNumber values into this new class that we call
Complex.

Starting in TADS 3.1, you can use take this idea further using [operator
overloading](opoverload.html), which lets you define mathematical
operators (such as `+` and
`\*`) on a custom class. This makes it possible
to define a Complex class that you can use as though it were a built-in
numeric type.

```
      // adding to the Complex class definition...
      operator+(v) { return new Complex(r_ + v.r_, i_ + v.i_); }
      operator-(v) { return new Complex(r_ - v.r_, i_ - v.i_); }
    ;

    myFunc()
    {
      // perform some arithmetic on some complex values
      local a, b, c;
      a = new Complex(1.0, 2.0);
      b = new Complex(-3.1, -2.0);
      c = a + b;
    }
```

With a little more work, we could add the other standard math operators
to round out the class. Note that a really robust Complex class would
also want to deal with integer and BigNumber values as arguments to the
math operators; the example code above is a little too simplistic in
that it'll only work with other Complex values.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> Extending
Intrinsic Classes  
<span class="navnp"><a href="reflect.html" class="nav"><em>Prev:</em> Reflection</a>
   
<a href="export.html" class="nav"><em>Next:</em> Exporting Symbols</a>
    </span>

</div>
