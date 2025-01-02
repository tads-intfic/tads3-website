---
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

<div class="fdesc">

Sub-lister for listing the contents of a group. This lister shows a
simple list with no prefix or suffix, and otherwise uses the
characteristics of the parent lister.

`class `**`GroupSublister`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`GroupSublister`**  
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

` `[`parentGroup`](#parentGroup)`  `[`parentLister`](#parentLister)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getTopLister`](#getTopLister)`  `[`propNotDefined`](#propNotDefined)`  `[`showListEmpty`](#showListEmpty)`  `[`showListItem`](#showListItem)`  `[`showListItemCounted`](#showListItemCounted)`  `[`showListPrefixTall`](#showListPrefixTall)`  `[`showListPrefixWide`](#showListPrefixWide)`  `[`showListSuffixWide`](#showListSuffixWide)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="parentGroup"></span>

`parentGroup`

[lister.t](../file/lister.t.html)\[[1392](../source/lister.t.html#1392)\]

<div class="desc">

my parent list group

</div>

<span id="parentLister"></span>

`parentLister`

[lister.t](../file/lister.t.html)\[[1389](../source/lister.t.html#1389)\]

<div class="desc">

my parent lister

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (parentLister, parentGroup)`

[lister.t](../file/lister.t.html)\[[1341](../source/lister.t.html#1341)\]

<div class="desc">

*no description available*

</div>

<span id="getTopLister"></span>

`getTopLister ( )`

[lister.t](../file/lister.t.html)\[[1386](../source/lister.t.html#1386)\]

<div class="desc">

get the top-level lister - returns my parent's top-level lister

</div>

<span id="propNotDefined"></span>

`propNotDefined (prop, [args])`

[lister.t](../file/lister.t.html)\[[1380](../source/lister.t.html#1380)\]

<div class="desc">

delegate everything we don't explicitly handle to our parent lister

</div>

<span id="showListEmpty"></span>

`showListEmpty (pov, parent)`

[lister.t](../file/lister.t.html)\[[1354](../source/lister.t.html#1354)\]

<div class="desc">

show nothing when empty

</div>

<span id="showListItem"></span>

`showListItem (obj, options, pov, infoTab)`

[lister.t](../file/lister.t.html)\[[1361](../source/lister.t.html#1361)\]

<div class="desc">

Show an item in the list. Rather than going through the parent lister
directly, we go through the parent group, so that it can customize the
display of items in the group.

</div>

<span id="showListItemCounted"></span>

`showListItemCounted (lst, options, pov, infoTab)`

[lister.t](../file/lister.t.html)\[[1372](../source/lister.t.html#1372)\]

<div class="desc">

Show a counted item in the group. As with showListItem, we ask the
parent group to do the work, so that it can customize the display if
desired.

</div>

<span id="showListPrefixTall"></span>

`showListPrefixTall (itemCount, pov, parent)`

[lister.t](../file/lister.t.html)\[[1351](../source/lister.t.html#1351)\]

<div class="desc">

*no description available*

</div>

<span id="showListPrefixWide"></span>

`showListPrefixWide (itemCount, pov, parent)`

[lister.t](../file/lister.t.html)\[[1349](../source/lister.t.html#1349)\]

<div class="desc">

no prefix or suffix

</div>

<span id="showListSuffixWide"></span>

`showListSuffixWide (itemCount, pov, parent)`

[lister.t](../file/lister.t.html)\[[1350](../source/lister.t.html#1350)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
