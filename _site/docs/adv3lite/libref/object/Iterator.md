<span class="title">Iterator</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[174](../source/systype.h.html#174)\]

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

The native iterator type - this is the base class for all iterators.
This class is abstract and is thus never directly instantiated.

Note that iterators can never be created directly with the 'new'
operator. Instead, iterators must be obtained from a collection via the
collection's createIterator() method.

`intrinsic class `**`Iterator`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Iterator`**  
`         `[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Iterator`**  
`         `[`IndexedIterator`](../object/IndexedIterator.html)  
`         `[`LookupTableIterator`](../object/LookupTableIterator.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getCurKey`](#getCurKey)`  `[`getCurVal`](#getCurVal)`  `[`getNext`](#getNext)`  `[`isNextAvailable`](#isNextAvailable)`  `[`resetIterator`](#resetIterator)`  `

Inherited from `Object` :  
` `[`callInherited`](../object/Object.html#callInherited)`  `[`createIterator`](../object/Object.html#createIterator)`  `[`createLiveIterator`](../object/Object.html#createLiveIterator)`  `[`forEach`](../object/Object.html#forEach)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`mapAll`](../object/Object.html#mapAll)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getCurKey"></span>

`getCurKey ( )`

[systype.h](../file/systype.h.html)\[[204](../source/systype.h.html#204)\]

<div class="desc">

Get the current key. This returns the value of the key for the current
item in the collection. For an indexed collection, this returns the
index value; for a keyed collection, this returns the current key value.

</div>

<span id="getCurVal"></span>

`getCurVal ( )`

[systype.h](../file/systype.h.html)\[[210](../source/systype.h.html#210)\]

<div class="desc">

Get the current value. This returns the value of the current item in the
collection.

</div>

<span id="getNext"></span>

`getNext ( )`

[systype.h](../file/systype.h.html)\[[183](../source/systype.h.html#183)\]

<div class="desc">

Get the next item in the collection. This returns the next item's value,
and advances the internal state in the iterator so that a subsequent
call to getNext() returns the next item after this one. When the
iterator is first created, or after calling resetIterator(), this
returns the first item in the collection.

</div>

<span id="isNextAvailable"></span>

`isNextAvailable ( )`

[systype.h](../file/systype.h.html)\[[190](../source/systype.h.html#190)\]

<div class="desc">

Determine if the collection is out of items. Returns true if getNext()
will return a valid item, nil if no more items are available.

</div>

<span id="resetIterator"></span>

`resetIterator ( )`

[systype.h](../file/systype.h.html)\[[196](../source/systype.h.html#196)\]

<div class="desc">

Reset to the first item. After calling this routine, the next call to
getNext() will return the first item in the collection.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
