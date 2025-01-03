---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> BigNumber  
<span class="navnp"><a href="pack.html" class="nav"><em>Prev:</em> Byte Packing</a>
    <a href="bytearr.html" class="nav"><em>Next:</em> ByteArray</a>    
</span>
# BigNumber

The T3 VM's basic numeric type is the integer type. While this is
largely adequate for writing interactive fiction, it's sometimes useful
to have access to floating-point and high-precision integer arithmetic.
The BigNumber type provides this functionality.

BigNumber can represent values with enormous precision, storing up to
65,000 decimal digits in a value; and can represent a huge range of
values, with absolute values up to 10<sup>32767</sup> and down to
10<sup>-32767</sup>. These limits are so extreme that real-world
calculations should practically never bump up against them. Furthermore,
the BigNumber type can store values with whatever precision you actually
need for each particular value, up to the limits; a program can use this
flexibility to strike the balance it requires between numerical
precision and performance.

For reasons that are probably obvious, the more precision a BigNumber
value stores, the more memory it uses and the more time it takes to
perform calculations with the number. BigNumber lets you specify how
much precision to use, letting you balance precision against speed and
memory use.

Note that the BigNumber type is not the "double" or IEEE floating point
type that you might have encountered in other programming languages. The
BigNumber type is actually a custom type implemented entirely in the T3
VM. This has several advantages over "doubles":

- Doubles can have subtle, sometimes vexing variations from one computer
  to another. Many programmers treat doubles as fuzzy and capricious
  approximations, chalking up any unexpected variations to unfathomable
  hardware internals. BigNumber, in contrast, is portable, and behaves
  exactly the same way on every computer, down to the last digit.
- BigNumber uses a decimal rather than binary encoding, which means that
  any value that can be written in decimal can be represented exactly as
  a BigNumber, without any rounding error. Most people are accustomed to
  writing their numbers in decimal, so this makes BigNumber a "what you
  see is what you get" type. Some values that can be represented exactly
  in decimal can't be represented exactly in a binary encoding. For
  example, 1/5 is an endlessly repeating bit pattern in binary, much as
  1/3 is an endless sequence in decimal (0.333333...), which means 1/5
  can't be exactly represented with a binary double. This can be
  counterintuitive, because 1/5 is such a nice, round value - 0.2 - in
  decimal. Of course, numbers like 1/3 can't be expressed exactly in a
  decimal encoding, so using decimal doesn't eliminate this issue; but
  we tend to be already accustomed to which fractions can and can't be
  represented exactly in decimal, so it's at least somewhat more
  intuitive when rounding is required. Furthermore, since numbers are
  usually entered and displayed in decimal, keeping them in decimal
  internally avoids compounding any rounding errors on input and output.
- BigNumber allows for effectively unlimited precision. Doubles have a
  fixed precision - only about 16 decimal digits. The nearly unlimited
  precision of BigNumber enables calculations involving very large
  integers, for example, or precise calculations where very large and
  very small values are combined.

We don't mean to suggest that BigNumbers are superior to doubles in
every way. Doubles do have some advantages of their own, the big one
being speed. Doubles are implemented in hardware on many platforms,
which is nearly always much faster than a software implementation. Even
when doubles are implemented in software, they tend to be faster than a
type like BigNumber, because fixed-precision algorithms are inherently
simpler. You probably wouldn't want to use BigNumbers in an intensive
number-crunching scientific application. But that's not the kind of
program TADS is designed for, so we think the tradeoff - greater
flexibility, slower performance - is a reasonable one. Plus, it's rather
neat to be able to calculate *pi* to a thousand digits with a couple of
lines of code.

## Working with BigNumber values

You must `\#include \<bignum.h\>` in your source
files to use the BigNumber class. This file defines the BigNumber class
interface.

You can write a BigNumber value as a floating-point constant. This is a
numeric constant that contains a decimal point or an exponent, or both.
Syntactically, that means one of these formats:



    digit ... ( E | e )  [ + | - ]  digit ...
    [ digit ... ]  . ( digit ... )  [ ( E | e )  [ + | - ]  digit ...
    digit ... . [ ( E | e )  [ + | - ]  digit ... ] 



For example:

```
    x = 3.14159265;
```

This syntax actually creates a BigNumber object that represents the
given number. The compiler assigns the BigNumber's precision based on
the number of significant digits in the constant value: this is the
number of digits, ignoring leading zeros. For example,
`0.00001` has only one digit of precision, since
the leading zeros are ignored, whereas
`0.00001000` has a precision of four digits,
since trailing zeros are significant. The one exception to the
leading-zero rule is that if the value is actually zero, *all* of the
zeros in the constant are significant: so
`0.0000000` has a precision of 8 digits.

You can also use the `new` operator to create a
BigNumber. Pass the value for the number either as an integer or as a
character string. You can optionally specify the precision to use for
the value; if you don't specify a precision, the system infers a
precision from the value. If the source value is a string, the implied
precision is the number of significant digits, the same as for a
constant BigNumber value; if the source is an integer, the default
precision is 32 digits.

```
    x = new BigNumber(100);
    x = new BigNumber(100, 10); // set precision to 10 digits
    y = new BigNumber('3.14159265');
    z = new BigNumber('1.06e-30');
    z = new BigNumber('1.06e-30', 8); // precision is 8 digits
```

If you specify a string value, you can use a decimal point, and you can
also use an 'E' to specify a base-ten exponent. So, the fourth value
above should be read as 1.06×10<sup>-30</sup>.

Using the `new` operator has the advantage that
you can explicitly specify the precision you want for the new value. If
you do, it overrides the default precision that would otherwise be
inferred from the source value.

You can perform addition, subtraction, multiplication, division, and
negation on BigNumber values using the standard operators. You can also
use integer values with BigNumber values in calculations, although the
BigNumber value must always be the first operand in an expression
involving both a BigNumber and an integer.

```
    x = y + z;
    x = (y + z) * (y - z) / 2;
```

Similarly, you can compare BigNumber values using the normal comparison
operators:

```
    if (x > y)
      // ... 
```

You can convert a BigNumber to a string using the
`toString()` function in the tads-gen intrinsic
function set. `toString()` uses a default
formatting, though, so if you want control over the format, you should
use the `formatString()` method of the BigNumber
object itself.

You can convert a BigNumber to a regular integer value using the
`toInteger()` function from the tads-gen
function set. Note that `toInteger()` throws an
error if passed a `BigNumber` value that's too
large to represent as a 32-bit integer. The integer type can only store
values from -2,147,483,648 to +2,147,483,647.
`toInteger()` rounds numbers with fractional
parts to the nearest integer.

You can't use operators other than those listed above with BigNumber
values. You can't use a BigNumber as an operand for any of the bitwise
operators (`&`, `\|`,
`~`). You also can't use a BigNumber with the
integer modulo operator (`%`), but you can
obtain similar functionality from the
`divideBy()` method.

You can't use BigNumber values in function and method calls that require
integer arguments. You must explicitly convert a BigNumber value to an
integer with the `toInteger()` function if you
want to pass it to a method or function that takes an integer value; the
compiler does not perform these conversions for you automatically.

Because BigNumber values are, for most purposes, simply object
references, you can use them where you can use other objects; you can,
for example, store a BigNumber in a list, or assign it to an object
property.

## Rounding

BigNumber works with numbers of the precision you tell it to. This means
that some calculations won't return all of the digits in the full
mathematical result, since BigNumber has to round the result to fit into
the precision you specify.

For example, mathematically, 1.7\*0.25 = 0.425. But the expression
`1.7\*0.25` will yield the BigNumber value
`0.42`. The BigNumber calculation loses digits,
compared to the mathematically exact result.

Why is this? It's because BigNumber calculations generally yield results
using the same precision as the most precise operand. In the case of
`1.7\*0.25`, we have two operands,
`1.7` and `0.25`, each
with two digits of precision. (Remember that leading zeros don't count
as significant digits, so `0.25` only has two
digits of precision.) So the precision of the result will also be two
digits.

Internally, BigNumber performs the calculation with a couple of extra
"guard digits", to ensure more accurate results. When returning the
final value of the calculation, though, the result must be rounded to
the result precision. So BigNumber actually calculates the value 0.4250
internally, then rounds it to two digits before returning the final
result.

BigNumber uses a standard rounding method known as "round to nearest,
ties to even". This method does the obvious thing for most values, by
rounding them up or down to the nearest digit. For example, rounding 1.3
to integer yields 1, and rounding 1.7 yields 2. The only tricky part is
that when rounding a value that's exactly halfway between two digits, we
round to the nearest *even* digit. So rounding 1.5 to integer rounds up
to 2, since that's the nearest even digit, but rounding 2.5 to integer
rounds down to 2, since that's once again the nearest even digit.

For our example of rounding 0.4250 to two digits, we're at one of these
halfway points, so we invoke the "even digit" rule and round to 0.42
(not 0.43, since 3 is odd).

If we instead calculate `1.9\*0.25`, the
mathematical result is 0.4750, which again rounds to the nearest even
digit, giving us 0.48.

One more example: `1.9\*0.33` yields 0.6270
mathematically. In this case, we're not at a halfway point, so this
yields the obvious rounded value of 0.63.

## Calling methods on BigNumber values

The BigNumber class provides a number of methods for manipulating
values. Note that all of the methods that perform calculations return
new BigNumber values. A BigNumber object's value is immutable once the
object is created, so all calculations performed on these objects return
new objects representing the result values.

These functions are all methods called on a BigNumber object. For
example, to calculate the absolute value of a BigNumber value
`x`, we would code this:

```
    y = x.getAbs();
```

Some of the methods take an argument giving a value to be combined with
the target number. For example, to get the remainder of dividing 10 by
3, we'd write this:

```
    x = new BigNumber('10.0000');
    y = new BigNumber('3.00000');
    rem = x.divideBy(y) [2];  // second list item is remainder
```

## BigNumber methods

`arccosine()`



Returns the arccosine (the number whose cosine is this value), as a
value in radians, of the number. This function is mathematically
meaningful only for input values from -1 to +1; this function throws a
run-time exception if the input value is outside of this range.



`arcsine()`



Returns the arcsine (the number whose sine is this value), as a value in
radians, of the number. This function is mathematically meaningful only
for input values from -1 to +1; this function throws a run-time
exception if the input value is outside of this range.



`arctangent()`



Returns the arctangent (the number whose tangent is this value), as a
value in radians, of the number.



`copySignFrom(*x*)`



Returns a number containing the same absolute value as this number, but
with the sign of x replacing the original value's sign.



`cosh()`



Computes the hyperbolic cosine of the number and returns the result.



`cosine()`



Computes the trigonometric cosine of the number (interpreted as a radian
value) and returns the result. Refer to the description of sine() for
notes on how the input precision affects the calculation.



`degreesToRadians()`



Converts the value from radians to degrees and returns the number of
degrees. This simply multiplies the value by (*pi*/180).



`divideBy(*x*)`



Computes the integer quotient of dividing this number by x, and returns
a list with two elements. The first element is a BigNumber value giving
the integer quotient, and the second element is a BigNumber value giving
the remainder of the division, which is a number *remainder* satisfying
the relationship *dividend* `=`
*quotient*`\*`*divisor*
`+` *remainder*.

Note that the quotient returned from
`divideBy()` is not necessarily equal to the
whole part of the result of the division (`/`)
operator applied to the same values. If the precision of the result
(which is, as with all calculations, equal to the larger of the
precisions of the operands) is insufficient to represent exactly the
integer quotient result, the quotient returned from this function will
be rounded differently from the quotient returned by the division
operator. The division operator always rounds its result to the nearest
integer; in contrast, `divideBy` does **not**
round the quotient, but instead truncates any trailing digits beyond the
result's precision. The reason for this difference is that the
truncation ensures that the relationship (dividend = quotient\*divisor +
remainder) always holds for `divideBy` results,
which would not always be the case if the quotient were rounded.

Also, the remainder will not necessarily be less than the divisor. If
the quotient can't be represented exactly (this occurs if the precision
of the quotient is smaller than its scale), the remainder will be the
correct value so that the relationship (dividend = quotient\*divisor +
remainder) holds, rather than the unique remainder that's smaller than
the divisor. In all cases where the result precision is sufficient to
represent the exact integer quotient, the remainder will satisfy this
relationship **and** will be the unique remainder with absolute values
less than the divisor.



`equalRound(*num*)`



Determine if this value is equal to num after rounding. This is
equivalent to the `==` operator if the numbers
have the same precision, but if one number is more precise than the
other, this rounds the more precise of the two values to the precision
of the less precise value, then compares the values. The
`==` operator makes an exact comparison,
effectively extending the precision of the less precise value by adding
imaginary zeros to the end of the number.



`expE()`



Returns the result of raising *e*, the base of the natural logarithm, to
the power of this number.



<span id="formatString"></span>

`formatString(*maxDigits*?, *flags*?, *wholePlaces*?,
*fracDigits*?, *expDigits*?, *leadFiller*?)`



Formats the number, returning a string with the result. All of the
arguments are optional.

*maxDigits* specifies the maximum number of digits to display in the
formatted number; this is an upper bound only, and doesn't force a
minimum number of digits. If necessary, the function uses scientific
notation to make the number fit in the requested number of digits. The
default is the actual precision of the number (that is, the number of
decimal digits actually stored with the number).

*wholePlaces* specifies the minimum number of places to show before the
decimal point; if the number doesn't fill all of the requested places,
the function inserts leading spaces (before the sign character, if any).

*fracDigits* specifies the number of digits to display after the decimal
point. This specifies the maximum to display, and also the minimum; if
the number doesn't have enough digits to display, the method adds
trailing zeros, and if there are more digits than *fracDigits* allows,
the method rounds the value for display.

*expDigits* is the number of digits to display in the exponent; leading
zeros are inserted if necessary to fill the requested number of places.

Each of *maxDigits*, *wholePlaces*, *fracDigits*, and *expDigits* can be
specified as `nil` or -1, which tells the method
to use the default value, which is simply the number of digits actually
needed for the respective part.

*leadFiller*, if specified, gives a string that is used instead of
spaces to fill the beginning of the string, if required to satisfy the
*wholePlaces* argument. This argument is ignored if its value is
`nil`. If a string value is provided for this
argument, the characters of the string are inserted, one at a time, to
fill out the *wholePlaces* requirement; if the end of the string is
reached before the full set of padding characters is inserted, the
function starts over again at the beginning of the string. For example,
to insert alternating asterisks and pound signs, you would specify
`'\*#'` for this argument.

*flags* is a combination of the following bit-flag values (combined with
the bit-wise OR operator, `\|`). The default
*flags* value is 0, meaning that none of these options are selected.
`nil` is equivalent to 0 for the *flags*
argument.

- `BignumSign` - always show a sign character.
  Normally, if the number is positive, the function omits the sign
  character. If this flag is specified, a `+`
  sign is shown for a positive number.
- `BignumPosSpace` - if the number is positive
  and this flag is set, the function inserts a leading space. (If
  `BignumSign` is specified, this flag is
  ignored.) This function can be used to ensure that positive and
  negative numbers fill the same number of character positions, even
  when you don't want to use a `+` sign with
  positive numbers.
- `BignumExp` - always show the number in
  exponential format (scientific notation, as in "1.0e+20"). If this is
  not included, the function shows the number without an exponent if it
  will fit in *maxDigits* digits.
- `BignumExpSign` - always show a sign in the
  exponent. If this is included, a positive exponent will be shown with
  a `+` sign. This flag is ignored unless an
  exponent is displayed (so specifying this flag doesn't force an
  exponent to be displayed).
- `BignumLeadingZero` - always show a zero
  before the decimal point. This is only important when the number's
  absolute value is between 0 and 1, and an exponent isn't displayed;
  without this flag, no digits will precede the decimal point for such
  values (so 0.25 would be formatted as simply
  `'.25'`).
- `BignumPoint` - always show a decimal point.
  If the number has no fractional digits to display, and this flag is
  included, a trailing decimal point is displayed. Without this flag, no
  decimal point is displayed if no digits are displayed after the
  decimal point.
- `BignumCommas` - show commas to set off
  thousands, millions, billions, and so on. This flag has no effect if
  the number is shown in scientific notation. Commas don't count against
  the *maxDigits* or *wholePlaces* limits. However, commas do count for
  leading filler, which ensures that a column of numbers formatted with
  filler and commas will line up properly.
- `BignumEuroStyle` - use European-style
  formatting: use periods instead of commas to set off thousands,
  millions, etc., and use a comma instead of a period to indicate the
  decimal point.
- `BignumCompact` - use the shorter of the
  regular format or the exponential format. If the decimal exponent is
  less than -4, or greater than or equal to the number of digits after
  the decimal point, exponential format is used; otherwise the regular
  format is used.
- `BignumMaxSigDigits` - treat the *maxDigits*
  argument as the maximum number of significant digits to show, not
  total digits. This doesn't count leading zeros against the *maxDigits*
  limit.
- `BignumKeepTrailingZeros` - keep trailing
  zeros as needed to fill out the *maxDigits* size. By default, trailing
  zeros after the decimal point are removed. This is ignored if there's
  no *maxDigits* value.



`getAbs()`



Returns a number containing the absolute value of this number. (This
function could be easily coded from a comparison and negation, but the
method implementation is more efficient.)



`getCeil()`



"Ceiling": returns a number containing the least integer greater than
this number. For example, the ceiling of 2.2 is 3. Note that for
negative numbers, the least integer above a number has a smaller
absolute value, so the ceiling of -1.6 is -1.



`getE(*digits*)`



Returns the value of *e* (the base of the natural logarithm,
approximately 2.781828183) to the given number of digits of precision.
This is a static method, so you can call this method directly on the
BigNumber class itself:

```
    x = BigNumber.getE(10);
```

The BigNumber class internally caches the value of *e* to the highest
precision calculated so far during the program's execution, so this
routine only needs to compute the value when it is called with a higher
precision than that of the previously cached value.



`getFloor()`



"Floor": returns a number containing the greatest integer less than this
number.



`getFraction()`



Returns a number containing only the fractional part of this number (the
digits after the decimal point).



`getPi(*digits*)`



Returns the value of *pi* (*pi*, the mathematical constant defined as
the ratio of a circle's circumfrence to its diameter, approximately
3.14159265) to the given number of digits of precision. This is a static
method, so you can call this method directly on the BigNumber class
itself:

```
    x = BigNumber.getPi(10);
```

The BigNumber class internally caches the value of *pi* to the highest
precision calculated so far during the program's execution, so this
routine only needs to compute the value when it is called with a higher
precision than that of the cached value.



`getPrecision()`



Returns the number of digits of precision that this number stores. The
return value is of type integer.



`getScale()`



Returns an integer giving the base-10 scale of this number. If the
return value is positive, it indicates the number of digits before the
decimal point in the decimal representation of the number. If the return
value is zero, it indicates that the number has no whole part, and that
the first digit after the decimal point is non-zero (so the number is
greater than or equal to 0.1, and less than 1.0). If the return value is
negative, it indicates that the number has no whole part, and gives the
number of digits of zeros that immediately follow the decimal point
before the first non-zero digit. If the value of the number is exactly
zero, the return value is 1.



`getWhole()`



Returns BigNumber containing only the whole part of this number (the
digits before the decimal point). This doesn't do any rounding; it
simply truncates the number at the decimal point. For example,
`1.99999.getWhole()` returns
`1.00000`.



`isNegative()`



Returns true if the number is less than zero, nil if the number is
greater than or equal to zero.



`log10()`



Returns the base-10 logarithm of the number.



`logE()`



Returns the natural logarithm of the number. The logarithm of a
non-positive number is not a real number, so this function throws a
run-time exception if the number is less than or equal to zero.



`negate()`



Returns a number containing the arithmetic negative of this number.



`numType()`



Returns an integer with information on the type of the number. This lets
you identify the special values "Not a Number" (NaN) and Infinity.

The return value is an integer with a combination of the following bit
flags. Multiple flags may be returned, combined with
`\|`. Use `&` to test
for a flag: `(n.numType() & NumTypeNAN)` is
non-zero if the "not a number" flag is set.

- `NumTypeNum` - an ordinary number.
- `NumTypeNAN` - Not a Number (NaN). This value
  is used in some floating point systems as the result from a
  calculation with an invalid input, such as sqrt(-1). BigNumber doesn't
  currently return this from any calculations, since any BigNumber
  function given an invalid argument value will instead throw an error.
  However, it's possible to construct BigNumber NaN values, such as by
  reading an IEEE 754-2008 NaN from a file via unpackBytes().
- `NumTypePInf` - positive infinity. This is
  used in some floating point systems to represent overflows or the
  results of transcendental functions with infinite values, such as
  tan(pi/2). As with NaN, BigNumber calculations never return
  infinities; they throw overflow errors instead. However, you can
  construct Infinity values, such as by reading IEEE 754-2008 infinities
  via unpackBytes().
- `NumTypeNInf` - negative infinity.
- `NumTypeInf == NumTypePInf \| NumTypeNInf`.
  This is defined for your convenience, so that you can test for any
  infinity with a simpler expression; e.g.,
  `(n.numType() & NumTypeInf) != 0`. Any given
  number will have only one of the positive or negative infinity flags
  set.
- `NumTypePZero` - positive zero. Mathmetically,
  zero is neither positive nor negative, but the BigNumber
  representation retains a sign for all numbers, even zero. If this flag
  is set, `NumTypeNum` will also be set, since
  zero is an ordinary number.
- `NumTypeNZero` - negative zero. A negative
  zero can result from a calculation that yields a negative value with
  an absolute value too small to store in the available precision. It
  can also be constructed by unpacking a negative zero IEEE 754-2008
  value. The `NumTypeNum` flag will always be
  set if this flag is set.
- `NumTypeZero == NumTypePZero \| NumTypeNZero`.
  This is defined for your convenience, so that you can test for any
  zero with a simpler expression; e.g., `n.numType() &
  NumTypeZero) != 0`. Any given number will have only one of the
  positive or negative zero flags set.



`radiansToDegrees()`



Converts the value from degrees to radians and returns the number of
radians. This simply multiplies the value by (180/*pi*).



`raiseToPower(*y*)`



Computes the value of this number raised to the power *y* and returns
the result. If the value of the target number is negative, then *y* must
be an integer: if *x* \< 0, we can rewrite *x*<sup>*y*</sup> as
(-1)<sup>*y*</sup>(-*x*)<sup>*y*</sup>, and we know that
`-`*x* \> 0 because *x* \< 0. The result of
raising -1 to a non-integer exponent cannot be represented as a real
number, hence this function throws an error if the target number is
negative. Note also that raising zero to any positive exponent yields 0,
and raising any value to the power 0 yields 1. Raising 0 to an exponent
of 0 is undefined; 0 raised to any negative exponent is equivalent to
the inverse of 0 to the absolute value of the exponent, which is the
same as 1/0, which throws a divide-by-zero exception.



`roundToDecimal(*places*)`



Returns a number rounded to the given number of digits after the decimal
point. The new number has the same precision as this number, but all of
the digits after the given number of places after the decimal point will
be set to zero, and the last surviving digit will be rounded. If
*places* is zero, this simply rounds the number to an integer. If
*places* is less than zero, this rounds the number to a power of ten:
`roundToDecimal(-1)` rounds to the nearest
multiple of ten, `roundToDecimal(-2)` rounds to
the nearest multiple of 100, and so on. Note that the precision of the
result is the same as the precision of the original value; rounding
merely affects the value, not the stored precision.



`scaleTen(*x*)`



Returns a new number containing the value of this number scaled by
10<sup>*x*</sup>. If *x* is positive, this multiplies this number's
value by ten *x* times (so if *x* = 3, the result is this number's value
times 1000). If *x* is negative, this divides this number's value by ten
*x* times. (This is more efficient than explicitly multiplying by ten,
because it simply adjusts the number's internal scale factor.)



`setPrecision(*digits*)`



Returns a new number with the same value as this number but with the
specified number of digits of precision. If *digits* is higher than this
number's precision, the new value is simply extended with zeros in the
added trailing digits. If *digits* is lower than this number's
precision, the value is rounded to the given number of digits of
precision.



`sine()`



Computes the trigonometric sine of the number (interpreted as a radian
value) and returns the result.

Note that the input value must be expressed in radians. If you are
working in degrees, you can convert to radians by multiplying your
degree values by (*pi*/180), since 180 degress equals *pi* radians. For
convenience, you can use the
`degreesToRadians()` function to perform this
conversion.

Note also that this remainder calculation's precision is limited by the
precision of the original number itself, so a very large number with
insufficient precision to represent at least a few digits after the
decimal point (1.234e27, for example) will encounter a possibly
significant amount of rounding error, which will affect the accuracy of
the result. This should almost never be a problem in practice, because
there is usually little reason to compute angle values outside of plus
or minus a few times pi, but users should keep this in mind if they are
using very large numbers and the trigonometric functions yield
unexpected or inaccurate results.



`sinh()`



Computes the hyperbolic sine of the number and returns the result.



`sqrt()`



Returns the square root of the number. If the number is negative, this
function throws a run-time exception.



`tangent()`



Computes the trigonometric tangent of the number (interpreted as a
radian value) and returns the result. Refer to the description of sine()
for notes on how the input precision affects the calculation.

Note that the tangent of (2*n*+1)\**pi*/2, where *n* is any integer,
(i.e., any odd multiple of *pi*/2) is undefined, and that the limit
approaching these values is plus or minus infinity. The BigNumber class
internally calculates the tangent as the sine divided by the cosine, and
as a result it is possible to generate a divide-by-zero exception by
evaluating the tangent at one of these values. However, in most cases,
because the input value cannot be exactly an odd multiple of *pi*/2
(because it isn't even theoretically possible to represent *pi* exactly
with a finite number of decimal digits), the tangent will return a
number with a very large absolute value.



`tanh()`



Computes the hyperbolic tangent of the number and returns the result.



## Precision and Scale

Each floating-point value that BigNumber represents has two important
attributes apart from its value: precision and scale. For the most part,
these are internal attributes that you can ignore; however, in certain
cases, it's useful to know how BigNumber uses these internally.

The scale of a BigNumber value is a multiplier that determines how large
the number really is. A BigNumber value stores a scale so that very
large and very small numbers can be represented compactly, without
storing all of the digits that would be necessary to write out the
numbers in decimal format. This is the same idea behind scientific
notation, where you write a number as a value between 1 and 10
multiplied by a power of ten; for example, we could write four hundred
fifty billion as 450,000,000,000, or more compactly in scientific
notation as 4.5e11. The "e" means "times ten to the", so 4.5e11 means
4.5 × 10<sup>11</sup>. (10<sup>11</sup> is one hundred billion.) When we
write a number in scientific notation, we only need to write the
significant digits, so we can leave out all the extra trailing zeros of
a very large number. We can also use scientific notation to write
numbers with very small absolute values, by using negative exponents:
9.7e-9 is 9.7 × 10<sup>-9</sup>; 10<sup>-9</sup> is 1/(10<sup>9</sup>),
or one one-billionth. Internally, a BigNumber is stored just like this:
it's stored as small number times a power of ten. The power of ten is
what we call the scale.

The precision of a BigNumber value is the number of decimal digits that
the value actually stores. A number's precision determines how many
distinct values it can have; the higher the precision, the more values
it can store, and hence the finer the distinctions it can make between
adjacent representable values. The precision is independent of the
scale; if you create a BigNumber value with only one digit of precision,
it's not limited to representing the values -9 through +9, because the
scale can allow it take on larger or smaller values. So, you can
represent arbitrarily large values regardless of a number's precision;
however, the precision limits the number of distinct values the number
can represent. So, for example, with one digit of precision, the next
representable value after 8000 is 9000.

<span id="intconv"></span>When you create a BigNumber value, you can
explicitly assign it a precision by passing a precision specifier to the
constructor. If you don't specify a precision, BigNumber uses a default
precision. If you create a BigNumber value from an integer, the default
precision is 32 digits. This includes "implicit conversions", where the
system automatically converts an integer to a BigNumber because the two
types are combined with an operator in an expression, such as
`3.0 + 1000`.

If you create a BigNumber value from a string, the default precision is
exactly enough to store the value's significant digits. A significant
digit is a non-zero digit, or a zero that follows a non-zero digit.

Here are some examples:

- `'0012'` has two significant digits (the
  leading zeros are ignored).
- `'1.2000'` has five significant digits (the
  trailing zeros are significant because they follow non-zero digits).
- `'.00012'` has two significant digits (the
  leading zeros are ignored, even though they follow the decimal point).
- `'000.00012'` has two significant digits
  (leading zeros are ignored, whether they appear before or after the
  decimal point).
- `'1.00012'` has six significant digits (the
  zeros after the decimal point are significant because they follow a
  non-zero digit).
- `'3.20e06'` has three significant digits (the
  digits of the exponent, if specified, are not relevant to the number's
  precision).

When you use BigNumber values in calculations, the result in almost
every case has the same precision as the value operated upon. In
calculations involving two or more operands, the result has precision
equal to the greatest of the precisions of the operands. For example, if
you add a number with three digits of precision to a number with eight
digits of precision, the result will have eight digits of precision.
This has the desirable effect of preserving the precision of your values
in arithmetic, so that the precision you choose for your input data
values is carried forward throughout your calculations. For example,
consider this calculation:

```
    x = new BigNumber('3.1415');
    y = new BigNumber('0.000111');
    z = x + y;
```

The exact arithmetic value of this calculation would be 3.1416111, but
this isn't the value that ends up in z, because the precision of the
operands limits the precision of the result. The precision of x is 5,
because it is created from a string with five significant digits. The
precision of y is 3. The result of the addition will have a precision of
5, because that's the larger of the two input precisions. So, the result
value stored in z will be 3.1416 - the additional two digits of y are
dropped, because they don't fit in the result value's 5 digits of
precision.

Precision limitations are fairly intuitive when the precision lost is
after the decimal point, but note that digits can also be dropped before
a decimal point. Consider this calculation:

```
    x = new BigNumber('7.25e3');
    y = new BigNumber('122');
    z = x + y;
```

The value of x is 7.25e3, or 7250; this value has three digits of
precision. The value of y also has three digits of precision. The exact
result of the calculation is 7372, but the value stored in z will be
7370: the last digit of y is dropped because the result doesn't have
enough precision to represent it.

Note that calculations will in most cases round their result values when
they must drop precision from operand values. For example:

```
    x = new BigNumber('7.25e3');
    y = new BigNumber('127');
    z = x + y;
```

The exact result would be 7377, but the value stored in z will be 7380:
the last digit of y is dropped, but the system rounds up the last digit
retained because the dropped digit is 5 or higher (in this case, 7).



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> BigNumber  
<span class="navnp"><a href="pack.html" class="nav"><em>Prev:</em> Byte Packing</a>
    <a href="bytearr.html" class="nav"><em>Next:</em> ByteArray</a>    
</span>


