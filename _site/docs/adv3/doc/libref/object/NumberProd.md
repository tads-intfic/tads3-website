<span class="title">NumberProd</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[7639](../source/en_us.t.html#7639)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

A numeric production. These can be either spelled-out numbers (such as
"fifty-seven") or numbers entered in digit form (as in "57").

`class `**`NumberProd`**` :   `[`BasicProd`](../object/BasicProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`NumberProd`**  
`         `[`BasicProd`](../object/BasicProd.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`NumberProd`**  
`         `[`numberPhrase(digits)`](../object/numberPhrase(digits).html)  
`         `[`numberPhrase(spelled)`](../object/numberPhrase(spelled).html)  
`         `[`poundNumberPhrase(main)`](../object/poundNumberPhrase(main).html)  
`         `[`spelledHundred(aHundred)`](../object/spelledHundred(aHundred).html)  
`         `[`spelledHundred(aHundredPlus)`](../object/spelledHundred(aHundredPlus).html)  
`         `[`spelledHundred(hundreds)`](../object/spelledHundred(hundreds).html)  
`         `[`spelledHundred(hundredsPlus)`](../object/spelledHundred(hundredsPlus).html)  
`         `[`spelledHundred(small)`](../object/spelledHundred(small).html)  
`         `[`spelledMillion(aMillion)`](../object/spelledMillion(aMillion).html)  
`         `[`spelledMillion(aMillionAndSmall)`](../object/spelledMillion(aMillionAndSmall).html)  
`         `[`spelledMillion(millions)`](../object/spelledMillion(millions).html)  
`         `[`spelledMillion(millionsAndSmall)`](../object/spelledMillion(millionsAndSmall).html)  
`         `[`spelledMillion(millionsPlus)`](../object/spelledMillion(millionsPlus).html)  
`         `[`spelledNumber(main)`](../object/spelledNumber(main).html)  
`         `[`spelledSmallNumber(digit)`](../object/spelledSmallNumber(digit).html)  
`         `[`spelledSmallNumber(teen)`](../object/spelledSmallNumber(teen).html)  
`         `[`spelledSmallNumber(tens)`](../object/spelledSmallNumber(tens).html)  
`         `[`spelledSmallNumber(tensAndUnits)`](../object/spelledSmallNumber(tensAndUnits).html)  
`         `[`spelledSmallNumber(zero)`](../object/spelledSmallNumber(zero).html)  
`         `[`spelledThousand(aThousand)`](../object/spelledThousand(aThousand).html)  
`         `[`spelledThousand(aThousandAndSmall)`](../object/spelledThousand(aThousandAndSmall).html)  
`         `[`spelledThousand(thousands)`](../object/spelledThousand(thousands).html)  
`         `[`spelledThousand(thousandsAndSmall)`](../object/spelledThousand(thousandsAndSmall).html)  
`         `[`spelledThousand(thousandsPlus)`](../object/spelledThousand(thousandsPlus).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getStrVal`](#getStrVal)`  `[`getval`](#getval)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getStrVal"></span>

`getStrVal ( )`

[en_us.t](../file/en_us.t.html)\[[7650](../source/en_us.t.html#7650)\]

<div class="desc">

Get the string version of the numeric value. This should return a
string, but the string should be in digit form. If the original entry
was in digit form, then the original entry should be returned;
otherwise, a string should be constructed from the integer value. By
default, we'll do the latter.

</div>

<span id="getval"></span>

`getval ( )`

[en_us.t](../file/en_us.t.html)\[[7641](../source/en_us.t.html#7641)\]

<div class="desc">

get the numeric (integer) value

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
