---
layout: docs
---
<span class="title">Lister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[29](../source/lister.t.html#29)\],
[english.t](../file/english.t.html)\[[2920](../source/english.t.html#2920)\]

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



Lister is the class that displays lists of objects. This is used in room
descriptions, inventory lists, and EXAMINE descriptions of objects (to
show the examined object's contents).

Showing a listing is basically a function call. The reason we make a
whole class out of it is that we provide a number of options, and a
class is a convenient way to specify options. The options are simply
defined as properties of a lister object, so to create a certain kind of
list, you just set up a Lister instance with the desired options. We
provide pre-defined Lister objects for the common library listing types,
but games can create their own custom list types by creating their own
Lister objects for different sets of options.

*Modified in
[english.t](../file/english.t.html)\[[2920](../source/english.t.html#2920)\]:*  
List display routines

`class `**`Lister`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Lister`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Lister`**  
[`ItemLister`](../object/ItemLister.html)  
[`CustomRoomLister`](../object/CustomRoomLister.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`ExitLister`](../object/ExitLister1.html) [`finishOptionsLister`](../object/finishOptionsLister.html) [`fullScoreLister`](../object/fullScoreLister.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`buildList`](#buildList) [`listed`](#listed) [`listOrder`](#listOrder) [`show`](#show) [`showList`](#showList) [`showListEmpty`](#showListEmpty) [`showListPrefix`](#showListPrefix) [`showListSuffix`](#showListSuffix)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="buildList"></span>

`buildList (lst)`

[lister.t](../file/lister.t.html)\[[100](../source/lister.t.html#100)\]



Return a string containing what this lister would display, minus the
terminating paragraph break.



<span id="listed"></span>

`listed (obj)`

[lister.t](../file/lister.t.html)\[[84](../source/lister.t.html#84)\]



Should 'obj' be listed in this list? Returns true if so, nil if not. By
default, we list any object whose 'listed' property is true.



<span id="listOrder"></span>

`listOrder (obj)`

[lister.t](../file/lister.t.html)\[[92](../source/lister.t.html#92)\]



Get an item's sorting order. This returns an integer that gives the
relative position in the list; we order the list in ascending order of
this value. By default, we return the 'listOrder' property of the
object.



<span id="show"></span>

`show (lst, paraCnt, paraBrk, =, true)`

[lister.t](../file/lister.t.html)\[[39](../source/lister.t.html#39)\]



Show a list of objects. 'lst' is the list of objects to show; 'paraCnt'
is the number of paragraph-style descriptions that we've already shown
as part of this description.

Note that many specific listers replaced the 'paraCnt' parameter with a
more useful 'parent' parameter, containing the identity of the object
whose contents are being listed.



<span id="showList"></span>

`showList (lst, pl, paraCnt)`

[english.t](../file/english.t.html)\[[2926](../source/english.t.html#2926)\]



Show the list as an 'and' list, that is a list of the aNames of each
item in lst formatted with commas between list elements and 'and'
between the last two items in the list.



<span id="showListEmpty"></span>

`showListEmpty (paraCnt)`

[lister.t](../file/lister.t.html)\[[77](../source/lister.t.html#77)\]



*no description available*



<span id="showListPrefix"></span>

`showListPrefix (lst, pl, paraCnt)`

[lister.t](../file/lister.t.html)\[[73](../source/lister.t.html#73)\]



add a paragraph break at the end, if it's requested



<span id="showListSuffix"></span>

`showListSuffix (lst, pl, paraCnt)`

[lister.t](../file/lister.t.html)\[[75](../source/lister.t.html#75)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


