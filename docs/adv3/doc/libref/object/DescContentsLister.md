---
layout: docs
---
<span class="title">DescContentsLister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1758](../source/lister.t.html#1758)\]

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



Base class for description contents listers. This is used to list the
contents of an object when we examine the object, or when we explicitly
LOOK IN the object.

`class `**`DescContentsLister`**` :   `[`Lister`](../object/Lister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DescContentsLister`**  
[`Lister`](../object/Lister.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`DescContentsLister`**  
[`LookWhereContentsLister`](../object/LookWhereContentsLister.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`keyringExamineContentsLister`](../object/keyringExamineContentsLister.html)[`rearDescContentsLister`](../object/rearDescContentsLister.html)[`surfaceDescContentsLister`](../object/surfaceDescContentsLister.html)[`thingDescContentsLister`](../object/thingDescContentsLister.html)[`undersideDescContentsLister`](../object/undersideDescContentsLister.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Lister` :  
[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isListed`](#isListed)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed)[`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately)[`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality)[`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount)[`getContents`](../object/Lister.html#getContents)[`getFilteredList`](../object/Lister.html#getFilteredList)[`getListedContents`](../object/Lister.html#getListedContents)[`getListGrouping`](../object/Lister.html#getListGrouping)[`getTopLister`](../object/Lister.html#getTopLister)[`listCardinality`](../object/Lister.html#listCardinality)[`listSepEnd`](../object/Lister.html#listSepEnd)[`listSepMiddle`](../object/Lister.html#listSepMiddle)[`listSepTwo`](../object/Lister.html#listSepTwo)[`listWith`](../object/Lister.html#listWith)[`longListSepEnd`](../object/Lister.html#longListSepEnd)[`longListSepMiddle`](../object/Lister.html#longListSepMiddle)[`longListSepTwo`](../object/Lister.html#longListSepTwo)[`showArrangedList`](../object/Lister.html#showArrangedList)[`showContentsList`](../object/Lister.html#showContentsList)[`showInlineContentsList`](../object/Lister.html#showInlineContentsList)[`showList`](../object/Lister.html#showList)[`showListAll`](../object/Lister.html#showListAll)[`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall)[`showListEmpty`](../object/Lister.html#showListEmpty)[`showListIndent`](../object/Lister.html#showListIndent)[`showListItem`](../object/Lister.html#showListItem)[`showListItemCounted`](../object/Lister.html#showListItemCounted)[`showListPrefixTall`](../object/Lister.html#showListPrefixTall)[`showListPrefixWide`](../object/Lister.html#showListPrefixWide)[`showListSeparator`](../object/Lister.html#showListSeparator)[`showListSimple`](../object/Lister.html#showListSimple)[`showListSuffixWide`](../object/Lister.html#showListSuffixWide)[`showSeparateContents`](../object/Lister.html#showSeparateContents)[`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isListed"></span>

`isListed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1765](../source/lister.t.html#1765)\]



Use the explicit look-in flag for listing contents. We might list items
within an object on explicit examination of the item that we wouldn't
list in a room or inventory list containing the item.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


