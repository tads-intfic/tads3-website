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



The native collection type - this is the base class for lists, vectors,
and other objects that represent collections of values.

`intrinsic class `**`Collection`**` :   `[`Object`](../object/Object.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Collection`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Collection`**  
[`List`](../object/List.html)  
[`LookupTable`](../object/LookupTable.html)  
[`WeakRefLookupTable`](../object/WeakRefLookupTable.html)  
[`Vector`](../object/Vector.html)  
[`AnonFuncPtr`](../object/AnonFuncPtr.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`createIterator`](#createIterator)[`createLiveIterator`](#createLiveIterator)

Inherited from `Object` :  
[`getPropList`](../object/Object.html#getPropList)[`getPropParams`](../object/Object.html#getPropParams)[`getSuperclassList`](../object/Object.html#getSuperclassList)[`isClass`](../object/Object.html#isClass)[`isTransient`](../object/Object.html#isTransient)[`ofKind`](../object/Object.html#ofKind)[`propDefined`](../object/Object.html#propDefined)[`propInherited`](../object/Object.html#propInherited)[`propType`](../object/Object.html#propType)[`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="createIterator"></span>

`createIterator ( )`

[systype.h](../file/systype.h.html)\[[151](../source/systype.h.html#151)\]



Create an iterator for the collection. This returns a new Iterator
object that can be used to iterate over the values in the collection.
The Iterator will use a snapshot of the collection that will never
change, even if the collection is changed after the iterator is created.



<span id="createLiveIterator"></span>

`createLiveIterator ( )`

[systype.h](../file/systype.h.html)\[[162](../source/systype.h.html#162)\]



Create a "live iterator" for the collection. This returns a new Iterator
object that refers directly to the original collection; if the original
collection changes, the iterator will reflect the changes in its
iteration. As a result, the iterator is not guaranteed to visit all of
the elements in the collection if the collection changes during the
course of the iteration. If consistent results are required, use
createIterator() instead.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


