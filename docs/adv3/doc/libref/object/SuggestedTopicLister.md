---
layout: docs
---
<span class="title">SuggestedTopicLister</span><span class="type">class</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5593](../source/msg_neu.t.html#5593)\]

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



Suggested topic lister.

`class `**`SuggestedTopicLister`**` :   `[`Lister`](../object/Lister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SuggestedTopicLister`**  
[`Lister`](../object/Lister.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`askingActor`](#askingActor) [`isExplicit`](#isExplicit) [`scopeList`](#scopeList) [`targetActor`](#targetActor)

Inherited from `Lister` :  
[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`contentsListed`](#contentsListed) [`isListed`](#isListed) [`listCardinality`](#listCardinality) [`listWith`](#listWith) [`longListSepEnd`](#longListSepEnd) [`longListSepMiddle`](#longListSepMiddle) [`longListSepTwo`](#longListSepTwo) [`markAsSeen`](#markAsSeen) [`showListEmpty`](#showListEmpty) [`showListItem`](#showListItem) [`showListPrefixWide`](#showListPrefixWide) [`showListSeparator`](#showListSeparator) [`showListSuffixWide`](#showListSuffixWide)

Inherited from `Lister` :  
[`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately) [`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality) [`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount) [`getContents`](../object/Lister.html#getContents) [`getFilteredList`](../object/Lister.html#getFilteredList) [`getListedContents`](../object/Lister.html#getListedContents) [`getListGrouping`](../object/Lister.html#getListGrouping) [`getTopLister`](../object/Lister.html#getTopLister) [`listSepEnd`](../object/Lister.html#listSepEnd) [`listSepMiddle`](../object/Lister.html#listSepMiddle) [`listSepTwo`](../object/Lister.html#listSepTwo) [`showArrangedList`](../object/Lister.html#showArrangedList) [`showContentsList`](../object/Lister.html#showContentsList) [`showInlineContentsList`](../object/Lister.html#showInlineContentsList) [`showList`](../object/Lister.html#showList) [`showListAll`](../object/Lister.html#showListAll) [`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall) [`showListIndent`](../object/Lister.html#showListIndent) [`showListItemCounted`](../object/Lister.html#showListItemCounted) [`showListPrefixTall`](../object/Lister.html#showListPrefixTall) [`showListSimple`](../object/Lister.html#showListSimple) [`showSeparateContents`](../object/Lister.html#showSeparateContents) [`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="askingActor"></span>

`askingActor`

[msg_neu.t](../file/msg_neu.t.html)\[[5678](../source/msg_neu.t.html#5678)\]



the actor who's asking for the topic list (usually the PC)



<span id="isExplicit"></span>

`isExplicit`

[msg_neu.t](../file/msg_neu.t.html)\[[5675](../source/msg_neu.t.html#5675)\]



flag: this is an explicit listing (i.e., a TOPICS command)



<span id="scopeList"></span>

`scopeList`

[msg_neu.t](../file/msg_neu.t.html)\[[5684](../source/msg_neu.t.html#5684)\]



our cached scope list for the actor



<span id="targetActor"></span>

`targetActor`

[msg_neu.t](../file/msg_neu.t.html)\[[5681](../source/msg_neu.t.html#5681)\]



the actor we're talking to



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (asker, askee, explicit)`

[msg_neu.t](../file/msg_neu.t.html)\[[5594](../source/msg_neu.t.html#5594)\]



*no description available*



<span id="contentsListed"></span>

`contentsListed (obj)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5651](../source/msg_neu.t.html#5651)\]



suggestions have no contents



<span id="isListed"></span>

`isListed (obj)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5645](../source/msg_neu.t.html#5645)\]



list suggestions that are currently active



<span id="listCardinality"></span>

`listCardinality (obj)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5648](../source/msg_neu.t.html#5648)\]



each item counts as one item grammatically



<span id="listWith"></span>

`listWith (obj)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5654](../source/msg_neu.t.html#5654)\]



get the list group



<span id="longListSepEnd"></span>

`longListSepEnd ( )`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5672](../source/msg_neu.t.html#5672)\]



*no description available*



<span id="longListSepMiddle"></span>

`longListSepMiddle ( )`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5671](../source/msg_neu.t.html#5671)\]



*no description available*



<span id="longListSepTwo"></span>

`longListSepTwo ( )`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5670](../source/msg_neu.t.html#5670)\]



don't use semicolons, even in long lists



<span id="markAsSeen"></span>

`markAsSeen (obj, pov)`

[msg_neu.t](../file/msg_neu.t.html)\[[5657](../source/msg_neu.t.html#5657)\]



mark as seen - nothing to do for suggestions



<span id="showListEmpty"></span>

`showListEmpty (pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5620](../source/msg_neu.t.html#5620)\]



end the sentence; include a paren if not in explicit mode



<span id="showListItem"></span>

`showListItem (obj, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5660](../source/msg_neu.t.html#5660)\]



show the item - show the suggestion's theName



<span id="showListPrefixWide"></span>

`showListPrefixWide (cnt, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5607](../source/msg_neu.t.html#5607)\]



cache the actor's scope list



<span id="showListSeparator"></span>

`showListSeparator (options, curItemNum, totalItems)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5635](../source/msg_neu.t.html#5635)\]



say that the list is empty if it was explicitly requested; say nothing
if the list is being added by the library



<span id="showListSuffixWide"></span>

`showListSuffixWide (cnt, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5615](../source/msg_neu.t.html#5615)\]



show the prefix; include a paren if not in explicit mode
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


