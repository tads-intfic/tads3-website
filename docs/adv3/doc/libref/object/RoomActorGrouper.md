---
layout: docs
---
<span class="title">RoomActorGrouper</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1479](../source/lister.t.html#1479)\]

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

Grouper for actors in a common posture and in a common location. We
create one of these per room per posture when we discover actors in the
room during "look around" (or "examine" on a nested room). This grouper
lets us group actors like so: "Dan and Jane are sitting on the couch."

`class `**`RoomActorGrouper`**` :   `[`ListGroup`](../object/ListGroup.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RoomActorGrouper`**  
`         `[`ListGroup`](../object/ListGroup.html)  
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

` `

Inherited from `ListGroup` :  
` `[`groupDisplaysSublist`](../object/ListGroup.html#groupDisplaysSublist)`  `[`minGroupSize`](../object/ListGroup.html#minGroupSize)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`showGroupList`](#showGroupList)`  `

Inherited from `ListGroup` :  
` `[`createGroupSublister`](../object/ListGroup.html#createGroupSublister)`  `[`groupCardinality`](../object/ListGroup.html#groupCardinality)`  `[`groupNounPhraseCount`](../object/ListGroup.html#groupNounPhraseCount)`  `[`showGroupItem`](../object/ListGroup.html#showGroupItem)`  `[`showGroupItemCounted`](../object/ListGroup.html#showGroupItemCounted)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (location, posture)`

[lister.t](../file/lister.t.html)\[[1480](../source/lister.t.html#1480)\]

<div class="desc">

*no description available*

</div>

<span id="showGroupList"></span>

`showGroupList (pov, lister, lst, options, indent, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1486](../source/lister.t.html#1486)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
