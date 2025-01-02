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

<div class="fdesc">

Equivalent object list group. This is the default listing group for
equivalent items. The Thing class creates an instance of this class
during initialization for each set of equivalent items.

`class `**`ListGroupEquivalent`**` :   `[`ListGroup`](../object/ListGroup.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ListGroupEquivalent`**  
[`ListGroup`](../object/ListGroup.html)  
`                 object`  
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

[`groupDisplaysSublist`](#groupDisplaysSublist)

Inherited from `ListGroup` :  
[`minGroupSize`](../object/ListGroup.html#minGroupSize)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`groupNounPhraseCount`](#groupNounPhraseCount)[`showGroupList`](#showGroupList)

Inherited from `ListGroup` :  
[`createGroupSublister`](../object/ListGroup.html#createGroupSublister)[`groupCardinality`](../object/ListGroup.html#groupCardinality)[`showGroupItem`](../object/ListGroup.html#showGroupItem)[`showGroupItemCounted`](../object/ListGroup.html#showGroupItemCounted)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="groupDisplaysSublist"></span>

`groupDisplaysSublist`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2239](../source/lister.t.html#2239)\]

<div class="desc">

we display as a single item, so there's no sublist

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="groupNounPhraseCount"></span>

`groupNounPhraseCount (lister, lst)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2236](../source/lister.t.html#2236)\]

<div class="desc">

An equivalence group displays only a single noun phrase to cover the
entire group.

</div>

<span id="showGroupList"></span>

`showGroupList (pov, lister, lst, options, indent, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2226](../source/lister.t.html#2226)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
