<span class="title">BaseContentsLister</span><span class="type">class</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4863](../source/msg_neu.t.html#4863)\]

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

Base contents lister. This class handles contents listings for most
kinds of specialized containers - Surfaces, RearConainers, RearSurfaces,
and Undersides. The main variation in the contents listings for these
various types of containers is simply the preposition that's used to
describe the relationship between the container and the contents, and
for this we can look to the objInPrep property of the container.

`class `**`BaseContentsLister`**` :   `[`Lister`](../object/Lister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BaseContentsLister`**  
`         `[`Lister`](../object/Lister.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`BaseContentsLister`**  
`         `[`BaseRearContentsLister`](../object/BaseRearContentsLister.html)  
`         `[`BaseSurfaceContentsLister`](../object/BaseSurfaceContentsLister.html)  
`         `[`BaseUndersideContentsLister`](../object/BaseUndersideContentsLister.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `Lister` :  
` `[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`showListContentsPrefixTall`](#showListContentsPrefixTall)`  `[`showListPrefixTall`](#showListPrefixTall)`  `[`showListPrefixWide`](#showListPrefixWide)`  `[`showListSuffixWide`](#showListSuffixWide)`  `

Inherited from `Lister` :  
` `[`contentsListed`](../object/Lister.html#contentsListed)`  `[`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately)`  `[`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality)`  `[`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount)`  `[`getContents`](../object/Lister.html#getContents)`  `[`getFilteredList`](../object/Lister.html#getFilteredList)`  `[`getListedContents`](../object/Lister.html#getListedContents)`  `[`getListGrouping`](../object/Lister.html#getListGrouping)`  `[`getTopLister`](../object/Lister.html#getTopLister)`  `[`isListed`](../object/Lister.html#isListed)`  `[`listCardinality`](../object/Lister.html#listCardinality)`  `[`listSepEnd`](../object/Lister.html#listSepEnd)`  `[`listSepMiddle`](../object/Lister.html#listSepMiddle)`  `[`listSepTwo`](../object/Lister.html#listSepTwo)`  `[`listWith`](../object/Lister.html#listWith)`  `[`longListSepEnd`](../object/Lister.html#longListSepEnd)`  `[`longListSepMiddle`](../object/Lister.html#longListSepMiddle)`  `[`longListSepTwo`](../object/Lister.html#longListSepTwo)`  `[`showArrangedList`](../object/Lister.html#showArrangedList)`  `[`showContentsList`](../object/Lister.html#showContentsList)`  `[`showInlineContentsList`](../object/Lister.html#showInlineContentsList)`  `[`showList`](../object/Lister.html#showList)`  `[`showListAll`](../object/Lister.html#showListAll)`  `[`showListEmpty`](../object/Lister.html#showListEmpty)`  `[`showListIndent`](../object/Lister.html#showListIndent)`  `[`showListItem`](../object/Lister.html#showListItem)`  `[`showListItemCounted`](../object/Lister.html#showListItemCounted)`  `[`showListSeparator`](../object/Lister.html#showListSeparator)`  `[`showListSimple`](../object/Lister.html#showListSimple)`  `[`showSeparateContents`](../object/Lister.html#showSeparateContents)`  `[`showTallListNewline`](../object/Lister.html#showTallListNewline)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="showListContentsPrefixTall"></span>

`showListContentsPrefixTall (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4878](../source/msg_neu.t.html#4878)\]

<div class="desc">

*no description available*

</div>

<span id="showListPrefixTall"></span>

`showListPrefixTall (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4873](../source/msg_neu.t.html#4873)\]

<div class="desc">

*no description available*

</div>

<span id="showListPrefixWide"></span>

`showListPrefixWide (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4864](../source/msg_neu.t.html#4864)\]

<div class="desc">

*no description available*

</div>

<span id="showListSuffixWide"></span>

`showListSuffixWide (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4869](../source/msg_neu.t.html#4869)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>