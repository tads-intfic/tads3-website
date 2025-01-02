---
layout: docs
---
<span class="title">WeakRefLookupTable</span><span class="type">class</span>

[lookup.h](../file/lookup.h.html)\[[135](../source/lookup.h.html#135)\]

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

WeakRefLookupTable is a "weak reference" version of the basic lookup
table. This is similar to the regular LookupTable, and has the same
methods; the only difference is that this type of table references its
values "weakly." A value that is reachable only through weak references
is subject to deletion by the garbage collector. A weak-reference lookup
table is useful when you don't want a value's presence in the table to
force the value to stay active, such as when the lookup table is merely
a fast index to a set of values that must be otherwise reachable to be
useful. When the garbage collector deletes one of our values, the
key/value pair for the value is automatically deleted from the table.

`intrinsic class `**`WeakRefLookupTable`**` :   `[`LookupTable`](../object/LookupTable.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WeakRefLookupTable`**  
`         `[`LookupTable`](../object/LookupTable.html)  
`                 `[`Collection`](../object/Collection.html)  
`                         `[`Object`](../object/Object.html)  
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

` `

` `

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `LookupTable` :  
` `[`applyAll`](../object/LookupTable.html#applyAll)`  `[`forEach`](../object/LookupTable.html#forEach)`  `[`forEachAssoc`](../object/LookupTable.html#forEachAssoc)`  `[`getBucketCount`](../object/LookupTable.html#getBucketCount)`  `[`getDefaultValue`](../object/LookupTable.html#getDefaultValue)`  `[`getEntryCount`](../object/LookupTable.html#getEntryCount)`  `[`isKeyPresent`](../object/LookupTable.html#isKeyPresent)`  `[`keysToList`](../object/LookupTable.html#keysToList)`  `[`nthKey`](../object/LookupTable.html#nthKey)`  `[`nthVal`](../object/LookupTable.html#nthVal)`  `[`removeElement`](../object/LookupTable.html#removeElement)`  `[`setDefaultValue`](../object/LookupTable.html#setDefaultValue)`  `[`valsToList`](../object/LookupTable.html#valsToList)`  `

Inherited from `Collection` :  
` `[`createIterator`](../object/Collection.html#createIterator)`  `[`createLiveIterator`](../object/Collection.html#createLiveIterator)`  `

Inherited from `Object` :  
` `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
