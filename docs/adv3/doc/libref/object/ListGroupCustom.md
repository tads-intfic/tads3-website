---
---
<span class="title">ListGroupCustom</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[2029](../source/lister.t.html#2029)\]

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

A "custom" List Group implementation. This type of lister uses a
completely custom message to show the group, without a need to
recursively invoke a lister to list the individual elements. The main
difference between this and the base ListGroup is that the interface to
the custom message generator is very simple - we can dispense with most
of the numerous arguments that the base group message receives, since
most of those arguments are there to allow recursive listing of the
group list.

This group type is intended mainly for cases where you want to display
some sort of collective description of the group, rather than listing
its members individually. The whole point of the simple interface is
that we don't pass the normal big pile of parameters because we won't be
invoking a full sublisting. Since we assume that this group won't itself
look like a sublist, we set groupDisplaysSublist to nil by default. This
means that our presence in the overall list won't trigger the "long
list" format (usually, this uses semicolons instead of commas) in the
enclosing list. If your custom group message does indeed look like a
sublist (that is, it displays multiple items in a comma-separated list),
you might want to change groupDisplaysSublist back to true so that the
overall list is shown in the "long" format.

`class `**`ListGroupCustom`**` :   `[`ListGroup`](../object/ListGroup.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ListGroupCustom`**  
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

` `[`groupDisplaysSublist`](#groupDisplaysSublist)`  `

Inherited from `ListGroup` :  
` `[`minGroupSize`](../object/ListGroup.html#minGroupSize)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`showGroupList`](#showGroupList)`  `[`showGroupMsg`](#showGroupMsg)`  `

Inherited from `ListGroup` :  
` `[`createGroupSublister`](../object/ListGroup.html#createGroupSublister)`  `[`groupCardinality`](../object/ListGroup.html#groupCardinality)`  `[`groupNounPhraseCount`](../object/ListGroup.html#groupNounPhraseCount)`  `[`showGroupItem`](../object/ListGroup.html#showGroupItem)`  `[`showGroupItemCounted`](../object/ListGroup.html#showGroupItemCounted)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="groupDisplaysSublist"></span>

`groupDisplaysSublist`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2040](../source/lister.t.html#2040)\]

<div class="desc">

assume our listing message doesn't look like a sublist

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="showGroupList"></span>

`showGroupList (pov, lister, lst, options, indent, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2030](../source/lister.t.html#2030)\]

<div class="desc">

*no description available*

</div>

<span id="showGroupMsg"></span>

`showGroupMsg (lst)`

[lister.t](../file/lister.t.html)\[[2037](../source/lister.t.html#2037)\]

<div class="desc">

show the custom group message - subclasses should override

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
