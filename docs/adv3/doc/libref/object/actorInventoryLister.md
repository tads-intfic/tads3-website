---
---
<span class="title">actorInventoryLister</span><span class="type">object</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4513](../source/msg_neu.t.html#4513)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Standard inventory lister for actors - this will work for the player
character and NPC's as well. This lister uses a "divided" format, which
segregates the listing into items being carried and items being worn.
We'll combine the two lists into a single sentence if the overall list
is short, otherwise we'll show two separate sentences for readability.

**`actorInventoryLister`**` :   `[`DividedInventoryLister`](../object/DividedInventoryLister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`actorInventoryLister`**  
`         `[`DividedInventoryLister`](../object/DividedInventoryLister.html)  
`                 `[`InventoryLister`](../object/InventoryLister.html)  
`                         `[`Lister`](../object/Lister.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`phraseSepPat`](#phraseSepPat)`  `

Inherited from `DividedInventoryLister` :  
` `[`carryingLister`](../object/DividedInventoryLister.html#carryingLister)`  `[`singleSentenceMaxNouns`](../object/DividedInventoryLister.html#singleSentenceMaxNouns)`  `[`wearingLister`](../object/DividedInventoryLister.html#wearingLister)`  `

` `

Inherited from `Lister` :  
` `[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`countPhrases`](#countPhrases)`  `[`showCombinedInventoryList`](#showCombinedInventoryList)`  `[`showInventoryCarryingOnly`](#showInventoryCarryingOnly)`  `[`showInventoryEmpty`](#showInventoryEmpty)`  `[`showInventoryLongLists`](#showInventoryLongLists)`  `[`showInventoryShortLists`](#showInventoryShortLists)`  `[`showInventoryWearingOnly`](#showInventoryWearingOnly)`  `[`showListContentsPrefixTall`](#showListContentsPrefixTall)`  `[`showListEmpty`](#showListEmpty)`  `[`showListPrefixTall`](#showListPrefixTall)`  `

Inherited from `DividedInventoryLister` :  
` `[`showList`](../object/DividedInventoryLister.html#showList)`  `

Inherited from `InventoryLister` :  
` `[`isListed`](../object/InventoryLister.html#isListed)`  `[`showContentsList`](../object/InventoryLister.html#showContentsList)`  `[`showInlineContentsList`](../object/InventoryLister.html#showInlineContentsList)`  `[`showListItem`](../object/InventoryLister.html#showListItem)`  `[`showListItemCounted`](../object/InventoryLister.html#showListItemCounted)`  `

Inherited from `Lister` :  
` `[`contentsListed`](../object/Lister.html#contentsListed)`  `[`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately)`  `[`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality)`  `[`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount)`  `[`getContents`](../object/Lister.html#getContents)`  `[`getFilteredList`](../object/Lister.html#getFilteredList)`  `[`getListedContents`](../object/Lister.html#getListedContents)`  `[`getListGrouping`](../object/Lister.html#getListGrouping)`  `[`getTopLister`](../object/Lister.html#getTopLister)`  `[`listCardinality`](../object/Lister.html#listCardinality)`  `[`listSepEnd`](../object/Lister.html#listSepEnd)`  `[`listSepMiddle`](../object/Lister.html#listSepMiddle)`  `[`listSepTwo`](../object/Lister.html#listSepTwo)`  `[`listWith`](../object/Lister.html#listWith)`  `[`longListSepEnd`](../object/Lister.html#longListSepEnd)`  `[`longListSepMiddle`](../object/Lister.html#longListSepMiddle)`  `[`longListSepTwo`](../object/Lister.html#longListSepTwo)`  `[`showArrangedList`](../object/Lister.html#showArrangedList)`  `[`showListAll`](../object/Lister.html#showListAll)`  `[`showListIndent`](../object/Lister.html#showListIndent)`  `[`showListPrefixWide`](../object/Lister.html#showListPrefixWide)`  `[`showListSeparator`](../object/Lister.html#showListSeparator)`  `[`showListSimple`](../object/Lister.html#showListSimple)`  `[`showListSuffixWide`](../object/Lister.html#showListSuffixWide)`  `[`showSeparateContents`](../object/Lister.html#showSeparateContents)`  `[`showTallListNewline`](../object/Lister.html#showTallListNewline)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="phraseSepPat"></span>

`phraseSepPat`

[msg_neu.t](../file/msg_neu.t.html)\[[4604](../source/msg_neu.t.html#4604)\]

<div class="desc">

return the count

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="countPhrases"></span>

`countPhrases (txt)`

[msg_neu.t](../file/msg_neu.t.html)\[[4570](../source/msg_neu.t.html#4570)\]

<div class="desc">

Count the noun phrases in a string. We'll count the number of elements
in the list as indicated by commas and semicolons. This might not be a
perfect count of the actual number of noun phrases, since we could have
commas setting off some other kind of clauses, but it nonetheless will
give us a good estimate of the overall complexity of the text, which is
what we're really after. The point is that we want to break up the
listings if they're long, but combine them into a single sentence if
they're short.

</div>

<span id="showCombinedInventoryList"></span>

`showCombinedInventoryList (parent, carrying, wearing)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4518](../source/msg_neu.t.html#4518)\]

<div class="desc">

Show the combined inventory listing, putting together the raw lists of
the items being carried and the items being worn.

</div>

<span id="showInventoryCarryingOnly"></span>

`showInventoryCarryingOnly (parent, carrying)`

[msg_neu.t](../file/msg_neu.t.html)\[[4623](../source/msg_neu.t.html#4623)\]

<div class="desc">

we're carrying nothing but wearing some items

</div>

<span id="showInventoryEmpty"></span>

`showInventoryEmpty (parent)`

[msg_neu.t](../file/msg_neu.t.html)\[[4612](../source/msg_neu.t.html#4612)\]

<div class="desc">

Once we've made up our mind about the format, we'll call one of these
methods to show the final sentence. These are all separate methods so
that the individual formats can be easily tweaked without overriding the
whole combined-inventory-listing method.

</div>

<span id="showInventoryLongLists"></span>

`showInventoryLongLists (parent, carrying, wearing)`

[msg_neu.t](../file/msg_neu.t.html)\[[4636](../source/msg_neu.t.html#4636)\]

<div class="desc">

short lists - combine carried and worn in a single sentence

</div>

<span id="showInventoryShortLists"></span>

`showInventoryShortLists (parent, carrying, wearing)`

[msg_neu.t](../file/msg_neu.t.html)\[[4628](../source/msg_neu.t.html#4628)\]

<div class="desc">

we have only carried items to report

</div>

<span id="showInventoryWearingOnly"></span>

`showInventoryWearingOnly (parent, wearing)`

[msg_neu.t](../file/msg_neu.t.html)\[[4617](../source/msg_neu.t.html#4617)\]

<div class="desc">

empty inventory

</div>

<span id="showListContentsPrefixTall"></span>

`showListContentsPrefixTall (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4651](../source/msg_neu.t.html#4651)\]

<div class="desc">

*no description available*

</div>

<span id="showListEmpty"></span>

`showListEmpty (pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4653](../source/msg_neu.t.html#4653)\]

<div class="desc">

*no description available*

</div>

<span id="showListPrefixTall"></span>

`showListPrefixTall (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4649](../source/msg_neu.t.html#4649)\]

<div class="desc">

For 'tall' listings, we'll use the standard listing style, so we need to
provide the framing messages for the tall-mode listing.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
