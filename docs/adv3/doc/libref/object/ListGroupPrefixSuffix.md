---
layout: docs
---
<span class="title">ListGroupPrefixSuffix</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[2178](../source/lister.t.html#2178)\]

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



List Group implementation: simple prefix/suffix lister. Shows a prefix
message, then shows the list, then shows a suffix message.

Note that this is a ListGroupSorted subclass. If our subclass defines a
compareGroupItems() method, we'll show the list in the order specified
by compareGroupItems().

`class `**`ListGroupPrefixSuffix`**` :   `[`ListGroupSorted`](../object/ListGroupSorted.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ListGroupPrefixSuffix`**  
[`ListGroupSorted`](../object/ListGroupSorted.html)  
[`ListGroup`](../object/ListGroup.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ListGroupPrefixSuffix`**  
[`SuggestionListGroup`](../object/SuggestionListGroup.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`groupPrefix`](#groupPrefix) [`groupSuffix`](#groupSuffix)



Inherited from `ListGroup` :  
[`groupDisplaysSublist`](../object/ListGroup.html#groupDisplaysSublist) [`minGroupSize`](../object/ListGroup.html#minGroupSize)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`showGroupList`](#showGroupList) [`showGroupPrefix`](#showGroupPrefix) [`showGroupSuffix`](#showGroupSuffix)

Inherited from `ListGroupSorted` :  
[`compareGroupItems`](../object/ListGroupSorted.html#compareGroupItems) [`sortListGroup`](../object/ListGroupSorted.html#sortListGroup)

Inherited from `ListGroup` :  
[`createGroupSublister`](../object/ListGroup.html#createGroupSublister) [`groupCardinality`](../object/ListGroup.html#groupCardinality) [`groupNounPhraseCount`](../object/ListGroup.html#groupNounPhraseCount) [`showGroupItem`](../object/ListGroup.html#showGroupItem) [`showGroupItemCounted`](../object/ListGroup.html#showGroupItemCounted)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="groupPrefix"></span>

`groupPrefix`

[lister.t](../file/lister.t.html)\[[2216](../source/lister.t.html#2216)\]



The prefix and suffix messages. The showGroupPrefix and showGroupSuffix
methods simply show these message properties. We go through this
two-step procedure for convenience: if the subclass doesn't need the POV
and list parameters, it's less typing to just override these
parameterless properties. If the subclass needs to vary the message
according to the POV or what's in the list, it can override the
showGroupXxx methods instead.



<span id="groupSuffix"></span>

`groupSuffix`

[lister.t](../file/lister.t.html)\[[2217](../source/lister.t.html#2217)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="showGroupList"></span>

`showGroupList (pov, lister, lst, options, indent, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[2179](../source/lister.t.html#2179)\]



*no description available*



<span id="showGroupPrefix"></span>

`showGroupPrefix (pov, lst)`

[lister.t](../file/lister.t.html)\[[2202](../source/lister.t.html#2202)\]



show the prefix - we just show the groupPrefix message by default



<span id="showGroupSuffix"></span>

`showGroupSuffix (pov, lst)`

[lister.t](../file/lister.t.html)\[[2205](../source/lister.t.html#2205)\]



show the suffix - we just show the groupSuffix message by default
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


