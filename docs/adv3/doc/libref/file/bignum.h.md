---
layout: docs
---
<span class="title">bignum.h</span><span class="type">file</span>

[source file](../source/bignum.h.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

**Macros**  
[Summary](#_MacroSummary_)  
[Details](#_Macros_)

**Enums**  
[Summary](#_EnumSummary_)  
[Details](#_Enums_)

**Templates**  
[Summary](#_TemplateSummary_)  
[Details](#_Templates_)



This header defines the BigNumber intrinsic class.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`BigNumber`](../object/BigNumber.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`BignumCommas`](#BignumCommas) [`BignumCompact`](#BignumCompact) [`BignumEuroStyle`](#BignumEuroStyle) [`BignumExp`](#BignumExp) [`BignumExpSign`](#BignumExpSign) [`BignumKeepTrailingZeros`](#BignumKeepTrailingZeros) [`BignumLeadingZero`](#BignumLeadingZero) [`BignumMaxSigDigits`](#BignumMaxSigDigits) [`BignumPoint`](#BignumPoint) [`BignumPosSpace`](#BignumPosSpace) [`BignumSign`](#BignumSign) [`NumTypeInf`](#NumTypeInf) [`NumTypeNAN`](#NumTypeNAN) [`NumTypeNInf`](#NumTypeNInf) [`NumTypeNum`](#NumTypeNum) [`NumTypeNZero`](#NumTypeNZero) [`NumTypePInf`](#NumTypePInf) [`NumTypePZero`](#NumTypePZero) [`NumTypeZero`](#NumTypeZero)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)* <span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="BignumCommas"></span>

`BignumCommas`

[bignum.h](../file/bignum.h.html)\[[255](../source/bignum.h.html#255)\]



`0x0020`  
insert commas to denote thousands, millions, etc



<span id="BignumCompact"></span>

`BignumCompact`

[bignum.h](../file/bignum.h.html)\[[273](../source/bignum.h.html#273)\]



`0x0100`  
"Compact" format: use the shorter of the regular format and scientific
notation. If the scientific notation exponent is less than -4 or greater
than or equal to the number of digits after the decimal point, we'll use
scientific notation; otherwise we'll use the plain format.



<span id="BignumEuroStyle"></span>

`BignumEuroStyle`

[bignum.h](../file/bignum.h.html)\[[265](../source/bignum.h.html#265)\]



`0x0080`  
use European-style formatting: use a comma instead of a period for the
decimal point, and use periods instead of commas to set off thousands,
millions, etc



<span id="BignumExp"></span>

`BignumExp`

[bignum.h](../file/bignum.h.html)\[[240](../source/bignum.h.html#240)\]



`0x0002`  
always show in exponential format (scientific notation, as in "1.0e20")



<span id="BignumExpSign"></span>

`BignumExpSign`

[bignum.h](../file/bignum.h.html)\[[243](../source/bignum.h.html#243)\]



`0x0004`  
always show a sign in the exponent, even if positive



<span id="BignumKeepTrailingZeros"></span>

`BignumKeepTrailingZeros`

[bignum.h](../file/bignum.h.html)\[[286](../source/bignum.h.html#286)\]



`0x0400`  
Keep trailing zeros. If there's a maxDigits value, this keeps enough
trailing zeros so that the number of digits shown equals maxDigits. By
default, trailing zeros after the decimal point are removed.



<span id="BignumLeadingZero"></span>

`BignumLeadingZero`

[bignum.h](../file/bignum.h.html)\[[249](../source/bignum.h.html#249)\]



`0x0008`  
show a zero before the decimal point - this is only relevant in
non-exponential format when the number is between -1 and +1



<span id="BignumMaxSigDigits"></span>

`BignumMaxSigDigits`

[bignum.h](../file/bignum.h.html)\[[279](../source/bignum.h.html#279)\]



`0x0200`  
maxDigits counts only significant digits; leading zeros aren't counted
against the maximum.



<span id="BignumPoint"></span>

`BignumPoint`

[bignum.h](../file/bignum.h.html)\[[252](../source/bignum.h.html#252)\]



`0x0010`  
always show a decimal point



<span id="BignumPosSpace"></span>

`BignumPosSpace`

[bignum.h](../file/bignum.h.html)\[[258](../source/bignum.h.html#258)\]



`0x0040`  
show a leading space if the number is positive



<span id="BignumSign"></span>

`BignumSign`

[bignum.h](../file/bignum.h.html)\[[237](../source/bignum.h.html#237)\]



`0x0001`  
always show a sign, even if positive



<span id="NumTypeInf"></span>

`NumTypeInf`

[bignum.h](../file/bignum.h.html)\[[320](../source/bignum.h.html#320)\]



`(NumTypePInf | NumTypeNInf)`  
*no description available*



<span id="NumTypeNAN"></span>

`NumTypeNAN`

[bignum.h](../file/bignum.h.html)\[[307](../source/bignum.h.html#307)\]



`0x0002`  
Number type: "Not a number" (NaN). This indicates that the value is the
result of a calculation with invalid input(s). Currently there are no
BigNumber calculations that return NaNs, as all functions on invalid
inputs throw errors instead. But it's possible to construct NaN value,
such as by reading an IEEE 754-2008 NaN value from a file via
unpackBytes().



<span id="NumTypeNInf"></span>

`NumTypeNInf`

[bignum.h](../file/bignum.h.html)\[[319](../source/bignum.h.html#319)\]



`0x0008`  
*no description available*



<span id="NumTypeNum"></span>

`NumTypeNum`

[bignum.h](../file/bignum.h.html)\[[297](../source/bignum.h.html#297)\]



`0x0001`  
Number type: ordinary number.



<span id="NumTypeNZero"></span>

`NumTypeNZero`

[bignum.h](../file/bignum.h.html)\[[332](../source/bignum.h.html#332)\]



`0x0020`  
*no description available*



<span id="NumTypePInf"></span>

`NumTypePInf`

[bignum.h](../file/bignum.h.html)\[[318](../source/bignum.h.html#318)\]



`0x0004`  
Number type: positive infinity, negative infinity. These indicate a
value that overflowed the capacity of the BigNumber type, or a
calculation that yields infinity (e.g., tan(pi/2)). Currently there are
no BigNumber calculations that return Infinities, as all functions where
an overflow is possible throw errors instead. But it's possible to
construct an Infinity value, such as by reading an IEEE 754-2008
Infinity value from a file via unpackBytes().



<span id="NumTypePZero"></span>

`NumTypePZero`

[bignum.h](../file/bignum.h.html)\[[331](../source/bignum.h.html#331)\]



`0x0010`  
Number type: zero, positive or negative. Mathematically, zero is neither
positive nor negative, but the BigNumber type retains a sign for all
values, even zeros. Negative zeros can come from calculations that yield
negative results with absolute values too small for the internal
representation. It's also possible to construct a negative zero, such as
by reading an IEEE 754-2008 negative zero value from a file via
unpackBytes().



<span id="NumTypeZero"></span>

`NumTypeZero`

[bignum.h](../file/bignum.h.html)\[[333](../source/bignum.h.html#333)\]



`(NumTypePZero | NumTypeNZero)`  
*no description available*



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


