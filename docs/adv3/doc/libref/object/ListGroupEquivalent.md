---
layout: docs
---
<span class="title">ListGroupEquivalent</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[2225](../source/lister.t.html#2225)\]

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



Equivalent object list group. This is the default listing group for
equivalent items. The Thing class creates an instance of this class
during initialization for each set of equivalent items.

`class `**`ListGroupEquivalent`**` :   `[`ListGroup`](../object/ListGroup.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ListGroupEquivalent`**  
[`ListGroup`](../object/ListGroup.html)  
`                 object`  
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



[`groupNounPhraseCount`](#groupNounPhraseCount) [`showGroupList`](#showGroupList)

Inherited from `ListGroup` :  
[`createGroupSublister`](../object/ListGroup.html#createGroupSublister) [`groupCardinality`](../object/ListGroup.html#groupCardinality) [`showGroupItem`](../object/ListGroup.html#showGroupItem) [`showGroupItemCounted`](../object/ListGroup.html#showGroupItemCounted)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="groupDisplaysSublist"></span>

`groupDisplaysSublist`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2239](../source/lister.t.html#2239)\]



we display as a single item, so there's no sublist



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="groupNounPhraseCount"></span>

`groupNounPhraseCount (lister, lst)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2236](../source/lister.t.html#2236)\]



An equivalence group displays only a single noun phrase to cover the
entire group.



<span id="showGroupList"></span>

`showGroupList (pov, lister, lst, options, indent, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2226](../source/lister.t.html#2226)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


