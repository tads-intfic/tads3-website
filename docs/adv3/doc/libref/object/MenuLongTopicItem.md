<span class="title">MenuLongTopicItem</span><span class="type">class</span>

[menusys.t](../file/menusys.t.html)\[[474](../source/menusys.t.html#474)\],
[menucon.t](../file/menucon.t.html)\[[915](../source/menucon.t.html#915)\],
[menuweb.t](../file/menuweb.t.html)\[[299](../source/menuweb.t.html#299)\]

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

Long Topic Items are used to print out big long gobs of text on a
subject. Use it for printing long treatises on your design philosophy
and the like.

*Modified in
[menucon.t](../file/menucon.t.html)\[[915](../source/menucon.t.html#915)\]:*  
Long topic item

*Modified in
[menuweb.t](../file/menuweb.t.html)\[[299](../source/menuweb.t.html#299)\]:*  
Long topic item

`class `**`MenuLongTopicItem`**` :   `[`MenuItem`](../object/MenuItem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MenuLongTopicItem`**  
`         `[`MenuItem`](../object/MenuItem.html)  
`                 `[`MenuObject`](../object/MenuObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`MenuLongTopicItem`**  
`         `[`HintLongTopicItem`](../object/HintLongTopicItem.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`heading`](#heading)`  `[`isChapterMenu`](#isChapterMenu)`  `[`menuContents`](#menuContents)`  `[`menuLongTopicEnd`](#menuLongTopicEnd)`  `[`title`](#title)`  `

Inherited from `MenuItem` :  
` `[`bgcolor`](../object/MenuItem.html#bgcolor)`  `[`curKeyList`](../object/MenuItem.html#curKeyList)`  `[`curMenu`](../object/MenuItem.html#curMenu)`  `[`fgcolor`](../object/MenuItem.html#fgcolor)`  `[`fullScreenMode`](../object/MenuItem.html#fullScreenMode)`  `[`indent`](../object/MenuItem.html#indent)`  `[`isOpen`](../object/MenuItem.html#isOpen)`  `[`keyList`](../object/MenuItem.html#keyList)`  `[`prevMenuLink`](../object/MenuItem.html#prevMenuLink)`  `[`topbarbg`](../object/MenuItem.html#topbarbg)`  `[`topbarfg`](../object/MenuItem.html#topbarfg)`  `[`topMenu`](../object/MenuItem.html#topMenu)`  `

Inherited from `MenuObject` :  
` `[`contents`](../object/MenuObject.html#contents)`  `[`menuOrder`](../object/MenuObject.html#menuOrder)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getXML`](#getXML)`  `[`showMenuCommon`](#showMenuCommon)`  `[`showMenuHtml`](#showMenuHtml)`  `[`showMenuText`](#showMenuText)`  `

Inherited from `MenuItem` :  
` `[`display`](../object/MenuItem.html#display)`  `[`enterSubMenu`](../object/MenuItem.html#enterSubMenu)`  `[`formatXML`](../object/MenuItem.html#formatXML)`  `[`getChildIndex`](../object/MenuItem.html#getChildIndex)`  `[`getKeysXML`](../object/MenuItem.html#getKeysXML)`  `[`getNextMenu`](../object/MenuItem.html#getNextMenu)`  `[`getPrevMenu`](../object/MenuItem.html#getPrevMenu)`  `[`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner)`  `[`removeStatusLine`](../object/MenuItem.html#removeStatusLine)`  `[`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner)`  `[`showMenu`](../object/MenuItem.html#showMenu)`  `[`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner)`  `[`updateContents`](../object/MenuItem.html#updateContents)`  `

Inherited from `MenuObject` :  
` `[`addToContents`](../object/MenuObject.html#addToContents)`  `[`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort)`  `[`execute`](../object/MenuObject.html#execute)`  `[`initializeContents`](../object/MenuObject.html#initializeContents)`  `[`initializeLocation`](../object/MenuObject.html#initializeLocation)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="heading"></span>

`heading`<span class="rem">OVERRIDDEN</span>

[menusys.t](../file/menusys.t.html)\[[479](../source/menusys.t.html#479)\]

<div class="desc">

the heading, shown while we're displaying our contents

</div>

<span id="isChapterMenu"></span>

`isChapterMenu`

[menusys.t](../file/menusys.t.html)\[[490](../source/menusys.t.html#490)\]

<div class="desc">

Flag - this is a "chapter" in a list of chapters. If this is set to
true, then we'll offer the options to proceed directly to the next and
previous chapters. If this is nil, we'll simply wait for acknowledgment
and return to the parent menu.

</div>

<span id="menuContents"></span>

`menuContents`

[menusys.t](../file/menusys.t.html)\[[482](../source/menusys.t.html#482)\]

<div class="desc">

either a string to be displayed, or a method returning a string

</div>

<span id="menuLongTopicEnd"></span>

`menuLongTopicEnd`

[menusys.t](../file/menusys.t.html)\[[493](../source/menusys.t.html#493)\]

<div class="desc">

the message we display at the end of our text

</div>

<span id="title"></span>

`title`<span class="rem">OVERRIDDEN</span>

[menusys.t](../file/menusys.t.html)\[[476](../source/menusys.t.html#476)\]

<div class="desc">

the title of the menu, shown in parent menus

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getXML"></span>

`getXML (from)`<span class="rem">OVERRIDDEN</span>

[menuweb.t](../file/menuweb.t.html)\[[301](../source/menuweb.t.html#301)\]

<div class="desc">

get my XML description

</div>

<span id="showMenuCommon"></span>

`showMenuCommon (topMenu)`

[menucon.t](../file/menucon.t.html)\[[1060](../source/menucon.t.html#1060)\]

<div class="desc">

show our contents - common handler for text and HTML modes

</div>

<span id="showMenuHtml"></span>

`showMenuHtml (topMenu)`<span class="rem">OVERRIDDEN</span>

[menucon.t](../file/menucon.t.html)\[[938](../source/menucon.t.html#938)\]

<div class="desc">

display and run our menu in HTML mode

</div>

<span id="showMenuText"></span>

`showMenuText (topMenu)`<span class="rem">OVERRIDDEN</span>

[menucon.t](../file/menucon.t.html)\[[917](../source/menucon.t.html#917)\]

<div class="desc">

display and run our menu in text mode

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
