<span class="title">SingletonIterator</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[1668](../source/misc.t.html#1668)\]

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

A SingletonIterator is an implementation of the Iterator interface for
singleton values. This allows 'foreach' to be used with arbitrary
objects, or even primitive values. The effect of iterating over a
singleton value with 'foreach' using this iterator is simply to invoke
the loop once with the loop variable set to the singleton value.

`class `**`SingletonIterator`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SingletonIterator`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`more_`](#more_)`  `[`val_`](#val_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getCurVal`](#getCurVal)`  `[`getKey`](#getKey)`  `[`getNext`](#getNext)`  `[`isNextAvailable`](#isNextAvailable)`  `[`resetIterator`](#resetIterator)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="more_"></span>

`more_`

[misc.t](../file/misc.t.html)\[[1698](../source/misc.t.html#1698)\]

<div class="desc">

do we have any more values to fetch?

</div>

<span id="val_"></span>

`val_`

[misc.t](../file/misc.t.html)\[[1695](../source/misc.t.html#1695)\]

<div class="desc">

the singleton value we're "iterating" over

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (val)`

[misc.t](../file/misc.t.html)\[[1670](../source/misc.t.html#1670)\]

<div class="desc">

construction: save the singleton value that we're "iterating" over

</div>

<span id="getCurVal"></span>

`getCurVal ( )`

[misc.t](../file/misc.t.html)\[[1692](../source/misc.t.html#1692)\]

<div class="desc">

get the current value

</div>

<span id="getKey"></span>

`getKey ( )`

[misc.t](../file/misc.t.html)\[[1689](../source/misc.t.html#1689)\]

<div class="desc">

get the current key; we have no keys, so use a fake key of nil

</div>

<span id="getNext"></span>

`getNext ( )`

[misc.t](../file/misc.t.html)\[[1673](../source/misc.t.html#1673)\]

<div class="desc">

get the next value

</div>

<span id="isNextAvailable"></span>

`isNextAvailable ( )`

[misc.t](../file/misc.t.html)\[[1683](../source/misc.t.html#1683)\]

<div class="desc">

is another item available?

</div>

<span id="resetIterator"></span>

`resetIterator ( )`

[misc.t](../file/misc.t.html)\[[1686](../source/misc.t.html#1686)\]

<div class="desc">

reset: restore the flag that says the value is available

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
