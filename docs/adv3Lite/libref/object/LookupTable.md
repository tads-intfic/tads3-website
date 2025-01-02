---
layout: docs
---
<span class="title">LookupTable</span><span class="type">class</span>

[lookup.h](../file/lookup.h.html)\[[24](../source/lookup.h.html#24)\]

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



The LookupTable intrinsic class provides a general-purpose hash table
implementation. LookupTable can be used syntactically as though it were
a list, but the index values are arbitrary hash key values rather than
being limited to sequential integers.

`intrinsic class `**`LookupTable`**` :   `[`Collection`](../object/Collection.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`LookupTable`**  
[`Collection`](../object/Collection.html)  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`LookupTable`**  
[`WeakRefLookupTable`](../object/WeakRefLookupTable.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  









*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`applyAll`](#applyAll) [`forEach`](#forEach) [`forEachAssoc`](#forEachAssoc) [`getBucketCount`](#getBucketCount) [`getDefaultValue`](#getDefaultValue) [`getEntryCount`](#getEntryCount) [`isKeyPresent`](#isKeyPresent) [`keysToList`](#keysToList) [`nthKey`](#nthKey) [`nthVal`](#nthVal) [`removeElement`](#removeElement) [`setDefaultValue`](#setDefaultValue) [`valsToList`](#valsToList)

Inherited from `Collection` :  
[`createIterator`](../object/Collection.html#createIterator) [`createLiveIterator`](../object/Collection.html#createLiveIterator)

Inherited from `Object` :  
[`callInherited`](../object/Object.html#callInherited) [`getPropList`](../object/Object.html#getPropList) [`getPropParams`](../object/Object.html#getPropParams) [`getSuperclassList`](../object/Object.html#getSuperclassList) [`isClass`](../object/Object.html#isClass) [`isTransient`](../object/Object.html#isTransient) [`mapAll`](../object/Object.html#mapAll) [`ofKind`](../object/Object.html#ofKind) [`propDefined`](../object/Object.html#propDefined) [`propInherited`](../object/Object.html#propInherited) [`propType`](../object/Object.html#propType) [`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="applyAll"></span>

`applyAll (func)`

[lookup.h](../file/lookup.h.html)\[[46](../source/lookup.h.html#46)\]



Apply the given function to each entry, and replace the value of the
entry with the return value of the function. The callback is invoked
with the key and value as arguments for each entry: func(key, value). No
return value.



<span id="forEach"></span>

`forEach (func)`<span class="rem">OVERRIDDEN</span>

[lookup.h](../file/lookup.h.html)\[[54](../source/lookup.h.html#54)\]



Invoke the given function with each entry in the table. The function is
invoked with value of an entry as its argument: func(value). Any return
value of the function is ignored. No return value.



<span id="forEachAssoc"></span>

`forEachAssoc (func)`

[lookup.h](../file/lookup.h.html)\[[80](../source/lookup.h.html#80)\]



Invoke the given function with each entry in the table, passing the key
and value to the callback. The function is invoked with key and value of
an entry as its arguments: func(key, value). Any return value of the
function is ignored. No return value.



<span id="getBucketCount"></span>

`getBucketCount ( )`

[lookup.h](../file/lookup.h.html)\[[63](../source/lookup.h.html#63)\]



Get the number of buckets (i.e., slots for unique hash values). The
number of buckets doesn't vary over the life of the table, so this
simply returns the number of buckets that was specified in the
constructor when the table was created. This can be used to create a new
table with the same parameters as an existing table.



<span id="getDefaultValue"></span>

`getDefaultValue ( )`

[lookup.h](../file/lookup.h.html)\[[99](../source/lookup.h.html#99)\]



Get the default value. This returns the value previously set with
setDefaultValue(), or nil if no explicit default has been set on this
table.



<span id="getEntryCount"></span>

`getEntryCount ( )`

[lookup.h](../file/lookup.h.html)\[[72](../source/lookup.h.html#72)\]



Get the number of entries. This returns the number of key/value pairs
stored in the table. Note that this is not the same as the initial
capacity specified in the constructor when the table was created; this
is the number of entries actually stored in the table.



<span id="isKeyPresent"></span>

`isKeyPresent (key)`

[lookup.h](../file/lookup.h.html)\[[30](../source/lookup.h.html#30)\]



Determine if a given key is present in the table. Returns true if the
key is present, nil if not.



<span id="keysToList"></span>

`keysToList ( )`

[lookup.h](../file/lookup.h.html)\[[86](../source/lookup.h.html#86)\]



Make a list of all of my keys. The return value is a list, in arbitrary
order, of all of the keys in the table.



<span id="nthKey"></span>

`nthKey (n)`

[lookup.h](../file/lookup.h.html)\[[113](../source/lookup.h.html#113)\]



Get the nth key. This returns the key that would appear at the given
index in the keysToList() result.



<span id="nthVal"></span>

`nthVal (n)`

[lookup.h](../file/lookup.h.html)\[[119](../source/lookup.h.html#119)\]



Get the enth value. This returns the value that would appear at the
given index in the valsToList() result.



<span id="removeElement"></span>

`removeElement (key)`

[lookup.h](../file/lookup.h.html)\[[38](../source/lookup.h.html#38)\]



Remove an entry from the table. Removes the key/value pair associated
with the given key, and returns the value that was associated with the
key. If the key isn't present in the table, the return value is nil, and
the method has no other effect.



<span id="setDefaultValue"></span>

`setDefaultValue (val)`

[lookup.h](../file/lookup.h.html)\[[107](../source/lookup.h.html#107)\]



Set the default value. This changes the value returned by the index
operator (self\[key\]) for a key that doesn't exist in the table. The
default value is initially nil, but you can change this to a different
value of any type if desired.



<span id="valsToList"></span>

`valsToList ( )`

[lookup.h](../file/lookup.h.html)\[[92](../source/lookup.h.html#92)\]



Make a list of all of my values. The return value is a list, in
arbitrary order, of all of the values in the table.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


