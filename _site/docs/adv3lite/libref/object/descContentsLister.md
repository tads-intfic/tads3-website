<span class="title">descContentsLister</span><span class="type">object</span>

[lister.t](../file/lister.t.html)\[[331](../source/lister.t.html#331)\]

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

descContentsLister displays a list of miscellaneous contents of an
object being examined.

**`descContentsLister`**` :   `[`ItemLister`](../object/ItemLister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`descContentsLister`**  
`         `[`ItemLister`](../object/ItemLister.html)  
`                 `[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`contentsListedProp`](#contentsListedProp)`  `[`showSubListing`](#showSubListing)`  `

Inherited from `ItemLister` :  
` `[`listRecursively`](../object/ItemLister.html#listRecursively)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showWornInfo`](../object/ItemLister.html#showWornInfo)`  `

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

<span id="contentsListedProp"></span>

`contentsListedProp`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[335](../source/lister.t.html#335)\]

<div class="desc">

*no description available*

</div>

<span id="showSubListing"></span>

`showSubListing`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3214](../source/english.t.html#3214)\]

<div class="desc">

Flag: Show a sublisting (i.e. the contents of the items in our immediate
contents, in parentheses after the name of the item, if the gameMain
option useParentheticalListing is true.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="listed"></span>

`listed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[333](../source/lister.t.html#333)\]

<div class="desc">

is the object listed in an EXAMINE description of its container?

</div>

<span id="showListEmpty"></span>

`showListEmpty (parent)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3202](../source/english.t.html#3202)\]

<div class="desc">

If there's no contents to list, but the item whose contents we were
trying to list wants to report its open-or-closed status, simply state
that it's open or closed.

</div>

<span id="showListPrefix"></span>

`showListPrefix (lst, pl, parent)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3171](../source/english.t.html#3171)\]

<div class="desc">

*no description available*

</div>

<span id="showListSuffix"></span>

`showListSuffix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3192](../source/english.t.html#3192)\]

<div class="desc">

Otherwise start the listing without explicitly mentioning that the
container is open.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
