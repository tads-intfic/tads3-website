---
layout: docs
---
<span class="title">Collection</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[142](../source/systype.h.html#142)\]

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

The native collection type - this is the base class for lists, vectors,
and other objects that represent collections of values.

`intrinsic class `**`Collection`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Collection`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Collection`**  
[`List`](../object/List.html)  
[`LookupTable`](../object/LookupTable.html)  
[`WeakRefLookupTable`](../object/WeakRefLookupTable.html)  
[`Vector`](../object/Vector.html)  
[`AnonFuncPtr`](../object/AnonFuncPtr.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>





*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`createIterator`](#createIterator)[`createLiveIterator`](#createLiveIterator)

Inherited from `Object` :  
[`getPropList`](../object/Object.html#getPropList)[`getPropParams`](../object/Object.html#getPropParams)[`getSuperclassList`](../object/Object.html#getSuperclassList)[`isClass`](../object/Object.html#isClass)[`isTransient`](../object/Object.html#isTransient)[`ofKind`](../object/Object.html#ofKind)[`propDefined`](../object/Object.html#propDefined)[`propInherited`](../object/Object.html#propInherited)[`propType`](../object/Object.html#propType)[`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="createIterator"></span>

`createIterator ( )`

[systype.h](../file/systype.h.html)\[[151](../source/systype.h.html#151)\]

<div class="desc">

Create an iterator for the collection. This returns a new Iterator
object that can be used to iterate over the values in the collection.
The Iterator will use a snapshot of the collection that will never
change, even if the collection is changed after the iterator is created.

</div>

<span id="createLiveIterator"></span>

`createLiveIterator ( )`

[systype.h](../file/systype.h.html)\[[162](../source/systype.h.html#162)\]

<div class="desc">

Create a "live iterator" for the collection. This returns a new Iterator
object that refers directly to the original collection; if the original
collection changes, the iterator will reflect the changes in its
iteration. As a result, the iterator is not guaranteed to visit all of
the elements in the collection if the collection changes during the
course of the iteration. If consistent results are required, use
createIterator() instead.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
