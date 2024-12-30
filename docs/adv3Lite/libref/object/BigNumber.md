[BigNumber]{.title}[class]{.type}

[bignum.h](../file/bignum.h.html)\[[37](../source/bignum.h.html#37)\],
[reflect.t](../file/reflect.t.html)\[[407](../source/reflect.t.html#407)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The BigNumber intrinsic class lets you perform floating-point and
integer arithmetic with (almost) any desired precision. BigNumber uses a
decimal representation, which means that decimal values can be
represented exactly (i.e., with no rounding errors, as can happen with
IEEE \'double\' and \'float\' values that languages like C typically
support). BigNumber combines a varying-length mantissa with an exponent;
the length of the mantissa determines how many digits of precision a
given BigNumber can store, and the exponent lets you represent very
large or very small values with minimal storage. You can specify the
desired precision when you create a BigNumber explicitly; when BigNumber
values are created implicitly by computations, the system chooses a
precision based on the inputs to the calculations, typically equal to
the largest of the precisions of the input values.

The maximum precision for a BigNumber is about 64,000 digits, and the
exponent can range from -32768 to +32767. Since this is a decimal
exponent, this implies an absolute value range from 1.0e-32768 to
1.0e+32767. The more digits of precision stored in a given BigNumber
value, the more memory the object consumes, and the more time it takes
to perform calculations using the value.

*Modified in
[reflect.t](../file/reflect.t.html)\[[407](../source/reflect.t.html#407)\]:*\
If desired, modify the BigNumber intrinsic class to provide a to-symbol
mapping. We only include this modification if the program is compiled
with REFLECT_BIGNUM defined.

`intrinsic class `**`BigNumber`**` :   `[`Object`](../object/Object.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`BigNumber`**\
`         `[`Object`](../object/Object.html)\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`arccosine`](#arccosine)`  `[`arcsine`](#arcsine)`  `[`arctangent`](#arctangent)`  `[`copySignFrom`](#copySignFrom)`  `[`cosh`](#cosh)`  `[`cosine`](#cosine)`  `[`degreesToRadians`](#degreesToRadians)`  `[`divideBy`](#divideBy)`  `[`equalRound`](#equalRound)`  `[`expE`](#expE)`  `[`formatString`](#formatString)`  `[`getAbs`](#getAbs)`  `[`getCeil`](#getCeil)`  `[`getE`](#getE)`  `[`getFloor`](#getFloor)`  `[`getFraction`](#getFraction)`  `[`getPi`](#getPi)`  `[`getPrecision`](#getPrecision)`  `[`getScale`](#getScale)`  `[`getWhole`](#getWhole)`  `[`isNegative`](#isNegative)`  `[`log10`](#log10)`  `[`logE`](#logE)`  `[`negate`](#negate)`  `[`numType`](#numType)`  `[`radiansToDegrees`](#radiansToDegrees)`  `[`raiseToPower`](#raiseToPower)`  `[`roundToDecimal`](#roundToDecimal)`  `[`scaleTen`](#scaleTen)`  `[`setPrecision`](#setPrecision)`  `[`sine`](#sine)`  `[`sinh`](#sinh)`  `[`sqrt`](#sqrt)`  `[`tangent`](#tangent)`  `[`tanh`](#tanh)`  `[`valToSymbol`](#valToSymbol)`  `

Inherited from `Object` :\
` `[`callInherited`](../object/Object.html#callInherited)`  `[`createIterator`](../object/Object.html#createIterator)`  `[`createLiveIterator`](../object/Object.html#createLiveIterator)`  `[`forEach`](../object/Object.html#forEach)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`mapAll`](../object/Object.html#mapAll)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#arccosine}

`arccosine ( )`

[bignum.h](../file/bignum.h.html)\[[182](../source/bignum.h.html#182)\]

::: desc
Calculate and return the arccosine (in radians). The value must be
between -1 and +1 inclusive.
:::

[]{#arcsine}

`arcsine ( )`

[bignum.h](../file/bignum.h.html)\[[176](../source/bignum.h.html#176)\]

::: desc
Calculate and return the arcsine (in radians) of the value. Note that
the value must be between -1 and +1 inclusive, since sine() never has a
value outside of this range.
:::

[]{#arctangent}

`arctangent ( )`

[bignum.h](../file/bignum.h.html)\[[185](../source/bignum.h.html#185)\]

::: desc
calculate and return the arctangent (in radians)
:::

[]{#copySignFrom}

`copySignFrom (x)`

[bignum.h](../file/bignum.h.html)\[[104](../source/bignum.h.html#104)\]

::: desc
copySignFrom - combine the absolute value of self with the sign of x
:::

[]{#cosh}

`cosh ( )`

[bignum.h](../file/bignum.h.html)\[[213](../source/bignum.h.html#213)\]

::: desc
*no description available*
:::

[]{#cosine}

`cosine ( )`

[bignum.h](../file/bignum.h.html)\[[151](../source/bignum.h.html#151)\]

::: desc
calculate and return the trigonometric cosine of the value (taken as a
radian value)
:::

[]{#degreesToRadians}

`degreesToRadians ( )`

[bignum.h](../file/bignum.h.html)\[[163](../source/bignum.h.html#163)\]

::: desc
interpreting this number as a number of degrees, convert the value to
radians and return the result
:::

[]{#divideBy}

`divideBy (x)`

[bignum.h](../file/bignum.h.html)\[[139](../source/bignum.h.html#139)\]

::: desc
Calculate the integer quotient and the remainder; returns a list whose
first element is the integer quotient (a BigNumber containing an integer
value), and whose second element is the remainder (the value R such that
dividend = quotient\*x + R).

Note that the quotient returned will not necessarily have the same value
as the whole part of dividing self by x with the \'/\' operator, because
this division handles rounding differently. In particular, the \'/\'
operator will perform the appropriate rounding on the quotient if the
quotient has insufficient precision to represent the exact result. This
routine, in contrast, does NOT round the quotient, but merely truncates
any trailing digits that cannot be represented in the result\'s
precision. The reason for this difference is that it ensures that the
relation (dividend=quotient\*x+remainder) holds, which would not always
be the case if the quotient were rounded up.

Note also that the remainder will not necessarily be less than the
divisor. If the quotient cannot be exactly represented (which occurs if
the precision of the quotient is smaller than its scale), the remainder
will be the correct value so that the relationship above holds, rather
than the unique remainder that is smaller than the divisor. In all cases
where there is sufficient precision to represent the quotient exactly
(to the units digit only, since the quotient returned from this method
will always be an integer), the remainder will satisfy the relationship
AND will be the unique remainder with absolute value less than the
divisor.
:::

[]{#equalRound}

`equalRound (num)`

[bignum.h](../file/bignum.h.html)\[[47](../source/bignum.h.html#47)\]

::: desc
compare for equality after rounding to the smaller of my precision and
num\'s precision
:::

[]{#expE}

`expE ( )`

[bignum.h](../file/bignum.h.html)\[[200](../source/bignum.h.html#200)\]

::: desc
raise e (the base of the natural logarithm) to the power of this value
and return the result
:::

[]{#formatString}

`formatString (maxDigits?, flags?, wholePlaces?, fracDigits?, expDigits?, leadFiller?)`

[bignum.h](../file/bignum.h.html)\[[40](../source/bignum.h.html#40)\]

::: desc
format to a string
:::

[]{#getAbs}

`getAbs ( )`

[bignum.h](../file/bignum.h.html)\[[79](../source/bignum.h.html#79)\]

::: desc
return the absolute value
:::

[]{#getCeil}

`getCeil ( )`

[bignum.h](../file/bignum.h.html)\[[82](../source/bignum.h.html#82)\]

::: desc
least integer greater than or equal to this number
:::

[]{#getE}

`getE (digits)`

[bignum.h](../file/bignum.h.html)\[[220](../source/bignum.h.html#220)\]

::: desc
class method: get the value of e to a given precision
:::

[]{#getFloor}

`getFloor ( )`

[bignum.h](../file/bignum.h.html)\[[85](../source/bignum.h.html#85)\]

::: desc
greatest integer less than or equal to this number
:::

[]{#getFraction}

`getFraction ( )`

[bignum.h](../file/bignum.h.html)\[[66](../source/bignum.h.html#66)\]

::: desc
get the fractional part
:::

[]{#getPi}

`getPi (digits)`

[bignum.h](../file/bignum.h.html)\[[217](../source/bignum.h.html#217)\]

::: desc
class method: get the value of pi to a given precision
:::

[]{#getPrecision}

`getPrecision ( )`

[bignum.h](../file/bignum.h.html)\[[53](../source/bignum.h.html#53)\]

::: desc
returns an integer giving the number of digits of precision that this
number stores
:::

[]{#getScale}

`getScale ( )`

[bignum.h](../file/bignum.h.html)\[[88](../source/bignum.h.html#88)\]

::: desc
get the base-10 scale of the number
:::

[]{#getWhole}

`getWhole ( )`

[bignum.h](../file/bignum.h.html)\[[69](../source/bignum.h.html#69)\]

::: desc
get the whole part (truncates the fraction - doesn\'t round)
:::

[]{#isNegative}

`isNegative ( )`

[bignum.h](../file/bignum.h.html)\[[107](../source/bignum.h.html#107)\]

::: desc
determine if the value is negative
:::

[]{#log10}

`log10 ( )`

[bignum.h](../file/bignum.h.html)\[[203](../source/bignum.h.html#203)\]

::: desc
calculate the base-10 logarithm of the number and return the result
:::

[]{#logE}

`logE ( )`

[bignum.h](../file/bignum.h.html)\[[194](../source/bignum.h.html#194)\]

::: desc
calculate the natural logarithm of this number and return the result
:::

[]{#negate}

`negate ( )`

[bignum.h](../file/bignum.h.html)\[[98](../source/bignum.h.html#98)\]

::: desc
negate - invert the sign of the number
:::

[]{#numType}

`numType ( )`

[bignum.h](../file/bignum.h.html)\[[228](../source/bignum.h.html#228)\]

::: desc
Get the type of this number. This returns a combination of NumTypeXxx
flags, combined with the \'\|\' operator. This can be used to check for
special values, such as infinites and \"not a number\" values.
:::

[]{#radiansToDegrees}

`radiansToDegrees ( )`

[bignum.h](../file/bignum.h.html)\[[169](../source/bignum.h.html#169)\]

::: desc
interpreting this number as a number of radians, convert the value to
degrees and return the result
:::

[]{#raiseToPower}

`raiseToPower (x)`

[bignum.h](../file/bignum.h.html)\[[209](../source/bignum.h.html#209)\]

::: desc
raise this number to the power of the argument and return the result
:::

[]{#roundToDecimal}

`roundToDecimal (places)`

[bignum.h](../file/bignum.h.html)\[[76](../source/bignum.h.html#76)\]

::: desc
round to the given number of digits after the decimal point; if the
value is zero, round to integer; if the value is negative, round to the
given number of places before the decimal point
:::

[]{#scaleTen}

`scaleTen (x)`

[bignum.h](../file/bignum.h.html)\[[95](../source/bignum.h.html#95)\]

::: desc
scale by 10\^x - if x is positive, this multiplies the number by ten the
given number of times; if x is negative, this divides the number by ten
the given number of times
:::

[]{#setPrecision}

`setPrecision (digits)`

[bignum.h](../file/bignum.h.html)\[[63](../source/bignum.h.html#63)\]

::: desc
Return a new number, with the same value as this number but with the
given number of decimal digits of precision. If the new precision is
higher than the old precision, this will increase the precision to the
requested new size and add trailing zeros to the value. If the new
precision is lower than the old precision, we\'ll round the number for
the reduced precision.
:::

[]{#sine}

`sine ( )`

[bignum.h](../file/bignum.h.html)\[[145](../source/bignum.h.html#145)\]

::: desc
calculate and return the trigonometric sine of the value (taken as a
radian value)
:::

[]{#sinh}

`sinh ( )`

[bignum.h](../file/bignum.h.html)\[[212](../source/bignum.h.html#212)\]

::: desc
calculate the hyperbolic sine, cosine, and tangent
:::

[]{#sqrt}

`sqrt ( )`

[bignum.h](../file/bignum.h.html)\[[188](../source/bignum.h.html#188)\]

::: desc
calculate the square root and return the result
:::

[]{#tangent}

`tangent ( )`

[bignum.h](../file/bignum.h.html)\[[157](../source/bignum.h.html#157)\]

::: desc
calculate and return the trigonometric tangent of the value (taken as a
radian value)
:::

[]{#tanh}

`tanh ( )`

[bignum.h](../file/bignum.h.html)\[[214](../source/bignum.h.html#214)\]

::: desc
*no description available*
:::

[]{#valToSymbol}

`valToSymbol ( )`[OVERRIDDEN]{.rem}

[reflect.t](../file/reflect.t.html)\[[408](../source/reflect.t.html#408)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
