---
layout: docs
---
<span class="title">ListGroupSorted</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[2047](../source/lister.t.html#2047)\]

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

Sorted group list. This is a list that simply displays its members in a
specific sorting order.

`class `**`ListGroupSorted`**` :   `[`ListGroup`](../object/ListGroup.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ListGroupSorted`**  
[`ListGroup`](../object/ListGroup.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ListGroupSorted`**  
[`ListGroupParen`](../object/ListGroupParen.html)  
[`ListGroupPrefixSuffix`](../object/ListGroupPrefixSuffix.html)  
[`SuggestionListGroup`](../object/SuggestionListGroup.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



Inherited from `ListGroup` :  
[`groupDisplaysSublist`](../object/ListGroup.html#groupDisplaysSublist)[`minGroupSize`](../object/ListGroup.html#minGroupSize)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`compareGroupItems`](#compareGroupItems)[`showGroupList`](#showGroupList)[`sortListGroup`](#sortListGroup)

Inherited from `ListGroup` :  
[`createGroupSublister`](../object/ListGroup.html#createGroupSublister)[`groupCardinality`](../object/ListGroup.html#groupCardinality)[`groupNounPhraseCount`](../object/ListGroup.html#groupNounPhraseCount)[`showGroupItem`](../object/ListGroup.html#showGroupItem)[`showGroupItemCounted`](../object/ListGroup.html#showGroupItemCounted)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="compareGroupItems"></span>

`// compareGroupItems (a, b)`<span class="rem">Interface description
only</span>

[lister.t](../file/lister.t.html)\[[2104](../source/lister.t.html#2104)\]

<div class="desc">

Compare a pair of items from the group to determine their relative
sorting order. This should return 0 if the two items are at the same
sorting order, a positive integer if the first item sorts after the
second item, or a negative integer if the first item sorts before the
second item.

Note that we don't care about the return value beyond whether it's
positive, negative, or zero. This makes it especially easy to implement
this method if the sorting order is determined by a property on each
object that has an integer value: in this case you simply return the
difference of the two property values, as in a.prop - b.prop. This will
have the effect of sorting the objects in ascending order of their
'prop' property values. To sort in descending order of the same
property, simply reverse the subtraction: b.prop - a.prop.

When no implementation of this method is defined in the group object,
sortListGroup won't bother sorting the list at all.

By default, we don't implement this method. Subclasses that want to
impose a sorting order must implement the method.

</div>

<span id="showGroupList"></span>

`showGroupList (pov, lister, lst, options, indent, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2051](../source/lister.t.html#2051)\]

<div class="desc">

Show the group list

</div>

<span id="sortListGroup"></span>

`sortListGroup (lst)`

[lister.t](../file/lister.t.html)\[[2069](../source/lister.t.html#2069)\]

<div class="desc">

Sort the group list. By default, if we have a compareGroupItems() method
defined, we'll sort the list using that method; otherwise, we'll just
return the list unchanged.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
