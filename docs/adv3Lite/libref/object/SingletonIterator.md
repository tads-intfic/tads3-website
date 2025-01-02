---
layout: docs
---
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



A SingletonIterator is an implementation of the Iterator interface for
singleton values. This allows 'foreach' to be used with arbitrary
objects, or even primitive values. The effect of iterating over a
singleton value with 'foreach' using this iterator is simply to invoke
the loop once with the loop variable set to the singleton value.

`class `**`SingletonIterator`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SingletonIterator`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`more_`](#more_)[`val_`](#val_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`getCurVal`](#getCurVal)[`getKey`](#getKey)[`getNext`](#getNext)[`isNextAvailable`](#isNextAvailable)[`resetIterator`](#resetIterator)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="more_"></span>

`more_`

[misc.t](../file/misc.t.html)\[[1698](../source/misc.t.html#1698)\]



do we have any more values to fetch?



<span id="val_"></span>

`val_`

[misc.t](../file/misc.t.html)\[[1695](../source/misc.t.html#1695)\]



the singleton value we're "iterating" over



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (val)`

[misc.t](../file/misc.t.html)\[[1670](../source/misc.t.html#1670)\]



construction: save the singleton value that we're "iterating" over



<span id="getCurVal"></span>

`getCurVal ( )`

[misc.t](../file/misc.t.html)\[[1692](../source/misc.t.html#1692)\]



get the current value



<span id="getKey"></span>

`getKey ( )`

[misc.t](../file/misc.t.html)\[[1689](../source/misc.t.html#1689)\]



get the current key; we have no keys, so use a fake key of nil



<span id="getNext"></span>

`getNext ( )`

[misc.t](../file/misc.t.html)\[[1673](../source/misc.t.html#1673)\]



get the next value



<span id="isNextAvailable"></span>

`isNextAvailable ( )`

[misc.t](../file/misc.t.html)\[[1683](../source/misc.t.html#1683)\]



is another item available?



<span id="resetIterator"></span>

`resetIterator ( )`

[misc.t](../file/misc.t.html)\[[1686](../source/misc.t.html#1686)\]



reset: restore the flag that says the value is available





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


