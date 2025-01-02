<span class="title">wornLister</span><span class="type">object</span>

[lister.t](../file/lister.t.html)\[[178](../source/lister.t.html#178)\]

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

wornLister displays a list of items being worn.

**`wornLister`**` :   `[`ItemLister`](../object/ItemLister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`wornLister`**  
`         `[`ItemLister`](../object/ItemLister.html)  
`                 `[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`showWornInfo`](#showWornInfo)`  `

Inherited from `ItemLister` :  
` `[`contentsListedProp`](../object/ItemLister.html#contentsListedProp)`  `[`listRecursively`](../object/ItemLister.html#listRecursively)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showSubListing`](../object/ItemLister.html#showSubListing)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`listed`](#listed)`  `[`showListEmpty`](#showListEmpty)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `

Inherited from `ItemLister` :  
` `[`listName`](../object/ItemLister.html#listName)`  `[`show`](../object/ItemLister.html#show)`  `[`showList`](../object/ItemLister.html#showList)`  `

Inherited from `Lister` :  
` `[`buildList`](../object/Lister.html#buildList)`  `[`listOrder`](../object/Lister.html#listOrder)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="showWornInfo"></span>

`showWornInfo`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3096](../source/english.t.html#3096)\]

<div class="desc">

We don't want to show "(being worn)" after items listed after "You are
wearing" since this would clearly be redundant.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="listed"></span>

`listed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[180](../source/lister.t.html#180)\]

<div class="desc">

is the object listed in an inventory list?

</div>

<span id="showListEmpty"></span>

`showListEmpty (paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3087](../source/english.t.html#3087)\]

<div class="desc">

*no description available*

</div>

<span id="showListPrefix"></span>

`showListPrefix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3077](../source/english.t.html#3077)\]

<div class="desc">

*no description available*

</div>

<span id="showListSuffix"></span>

`showListSuffix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3082](../source/english.t.html#3082)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
