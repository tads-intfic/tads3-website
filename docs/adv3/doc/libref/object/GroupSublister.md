---
layout: docs
---
<span class="title">GroupSublister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1340](../source/lister.t.html#1340)\]

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



Sub-lister for listing the contents of a group. This lister shows a
simple list with no prefix or suffix, and otherwise uses the
characteristics of the parent lister.

`class `**`GroupSublister`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GroupSublister`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`parentGroup`](#parentGroup) [`parentLister`](#parentLister)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`getTopLister`](#getTopLister) [`propNotDefined`](#propNotDefined) [`showListEmpty`](#showListEmpty) [`showListItem`](#showListItem) [`showListItemCounted`](#showListItemCounted) [`showListPrefixTall`](#showListPrefixTall) [`showListPrefixWide`](#showListPrefixWide) [`showListSuffixWide`](#showListSuffixWide)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="parentGroup"></span>

`parentGroup`

[lister.t](../file/lister.t.html)\[[1392](../source/lister.t.html#1392)\]



my parent list group



<span id="parentLister"></span>

`parentLister`

[lister.t](../file/lister.t.html)\[[1389](../source/lister.t.html#1389)\]



my parent lister



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (parentLister, parentGroup)`

[lister.t](../file/lister.t.html)\[[1341](../source/lister.t.html#1341)\]



*no description available*



<span id="getTopLister"></span>

`getTopLister ( )`

[lister.t](../file/lister.t.html)\[[1386](../source/lister.t.html#1386)\]



get the top-level lister - returns my parent's top-level lister



<span id="propNotDefined"></span>

`propNotDefined (prop, [args])`

[lister.t](../file/lister.t.html)\[[1380](../source/lister.t.html#1380)\]



delegate everything we don't explicitly handle to our parent lister



<span id="showListEmpty"></span>

`showListEmpty (pov, parent)`

[lister.t](../file/lister.t.html)\[[1354](../source/lister.t.html#1354)\]



show nothing when empty



<span id="showListItem"></span>

`showListItem (obj, options, pov, infoTab)`

[lister.t](../file/lister.t.html)\[[1361](../source/lister.t.html#1361)\]



Show an item in the list. Rather than going through the parent lister
directly, we go through the parent group, so that it can customize the
display of items in the group.



<span id="showListItemCounted"></span>

`showListItemCounted (lst, options, pov, infoTab)`

[lister.t](../file/lister.t.html)\[[1372](../source/lister.t.html#1372)\]



Show a counted item in the group. As with showListItem, we ask the
parent group to do the work, so that it can customize the display if
desired.



<span id="showListPrefixTall"></span>

`showListPrefixTall (itemCount, pov, parent)`

[lister.t](../file/lister.t.html)\[[1351](../source/lister.t.html#1351)\]



*no description available*



<span id="showListPrefixWide"></span>

`showListPrefixWide (itemCount, pov, parent)`

[lister.t](../file/lister.t.html)\[[1349](../source/lister.t.html#1349)\]



no prefix or suffix



<span id="showListSuffixWide"></span>

`showListSuffixWide (itemCount, pov, parent)`

[lister.t](../file/lister.t.html)\[[1350](../source/lister.t.html#1350)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


