---
layout: docs
---
<span class="title">ListGroupParen</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[2116](../source/lister.t.html#2116)\]

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



List Group implementation: parenthesized sublist. Displays the number of
items collectively, then displays the list of items in parentheses.

Note that this is a ListGroupSorted subclass. If our subclass defines a
compareGroupItems() method, we'll show the list in the order specified
by compareGroupItems().

`class `**`ListGroupParen`**` :   `[`ListGroupSorted`](../object/ListGroupSorted.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ListGroupParen`**  
[`ListGroupSorted`](../object/ListGroupSorted.html)  
[`ListGroup`](../object/ListGroup.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`groupDisplaysSublist`](#groupDisplaysSublist)



Inherited from `ListGroup` :  
[`minGroupSize`](../object/ListGroup.html#minGroupSize)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`showGroupCountName`](#showGroupCountName) [`showGroupList`](#showGroupList)

Inherited from `ListGroupSorted` :  
[`compareGroupItems`](../object/ListGroupSorted.html#compareGroupItems) [`sortListGroup`](../object/ListGroupSorted.html#sortListGroup)

Inherited from `ListGroup` :  
[`createGroupSublister`](../object/ListGroup.html#createGroupSublister) [`groupCardinality`](../object/ListGroup.html#groupCardinality) [`groupNounPhraseCount`](../object/ListGroup.html#groupNounPhraseCount) [`showGroupItem`](../object/ListGroup.html#showGroupItem) [`showGroupItemCounted`](../object/ListGroup.html#showGroupItemCounted)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="groupDisplaysSublist"></span>

`groupDisplaysSublist`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2167](../source/lister.t.html#2167)\]



we don't add a sublist, since we enclose our list in parentheses



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="showGroupCountName"></span>

`showGroupCountName (lst)`

[lister.t](../file/lister.t.html)\[[2160](../source/lister.t.html#2160)\]



Show the collective count for the list of objects. By default, we'll
simply display the countName of the first item in the list, on the
assumption that each object has the same plural description. However, in
most cases this should be overridden to provide a more general
collective name for the group.



<span id="showGroupList"></span>

`showGroupList (pov, lister, lst, options, indent, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2120](../source/lister.t.html#2120)\]



show the group list





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


