[InstructionsMenu]{.title}[class]{.type}

[instruct.t](../file/instruct.t.html)\[[1023](../source/instruct.t.html#1023)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
a base class for the instruction chapter menus

`class `**`InstructionsMenu`**` :   `[`MenuLongTopicItem`](../object/MenuLongTopicItem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`InstructionsMenu`**\
`         `[`MenuLongTopicItem`](../object/MenuLongTopicItem.html)\
`                 `[`MenuItem`](../object/MenuItem.html)\
`                         `[`MenuObject`](../object/MenuObject.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`chapterProp`](#chapterProp)`  `[`heading`](#heading)`  `[`isChapterMenu`](#isChapterMenu)`  `[`menuContents`](#menuContents)`  `

Inherited from `MenuLongTopicItem` :\
` `[`menuLongTopicEnd`](../object/MenuLongTopicItem.html#menuLongTopicEnd)`  `[`title`](../object/MenuLongTopicItem.html#title)`  `

Inherited from `MenuItem` :\
` `[`bgcolor`](../object/MenuItem.html#bgcolor)`  `[`curKeyList`](../object/MenuItem.html#curKeyList)`  `[`curMenu`](../object/MenuItem.html#curMenu)`  `[`fgcolor`](../object/MenuItem.html#fgcolor)`  `[`fullScreenMode`](../object/MenuItem.html#fullScreenMode)`  `[`indent`](../object/MenuItem.html#indent)`  `[`isOpen`](../object/MenuItem.html#isOpen)`  `[`keyList`](../object/MenuItem.html#keyList)`  `[`prevMenuLink`](../object/MenuItem.html#prevMenuLink)`  `[`topbarbg`](../object/MenuItem.html#topbarbg)`  `[`topbarfg`](../object/MenuItem.html#topbarfg)`  `[`topMenu`](../object/MenuItem.html#topMenu)`  `

Inherited from `MenuObject` :\
` `[`contents`](../object/MenuObject.html#contents)`  `[`menuOrder`](../object/MenuObject.html#menuOrder)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `MenuLongTopicItem` :\
` `[`getXML`](../object/MenuLongTopicItem.html#getXML)`  `[`showMenuCommon`](../object/MenuLongTopicItem.html#showMenuCommon)`  `[`showMenuHtml`](../object/MenuLongTopicItem.html#showMenuHtml)`  `[`showMenuText`](../object/MenuLongTopicItem.html#showMenuText)`  `

Inherited from `MenuItem` :\
` `[`display`](../object/MenuItem.html#display)`  `[`enterSubMenu`](../object/MenuItem.html#enterSubMenu)`  `[`formatXML`](../object/MenuItem.html#formatXML)`  `[`getChildIndex`](../object/MenuItem.html#getChildIndex)`  `[`getKeysXML`](../object/MenuItem.html#getKeysXML)`  `[`getNextMenu`](../object/MenuItem.html#getNextMenu)`  `[`getPrevMenu`](../object/MenuItem.html#getPrevMenu)`  `[`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner)`  `[`removeStatusLine`](../object/MenuItem.html#removeStatusLine)`  `[`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner)`  `[`showMenu`](../object/MenuItem.html#showMenu)`  `[`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner)`  `[`updateContents`](../object/MenuItem.html#updateContents)`  `

Inherited from `MenuObject` :\
` `[`addToContents`](../object/MenuObject.html#addToContents)`  `[`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort)`  `[`execute`](../object/MenuObject.html#execute)`  `[`initializeContents`](../object/MenuObject.html#initializeContents)`  `[`initializeLocation`](../object/MenuObject.html#initializeLocation)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#chapterProp}

`chapterProp`

[instruct.t](../file/instruct.t.html)\[[1031](../source/instruct.t.html#1031)\]

::: desc
the InstructionsAction property that we invoke to show our chapter
:::

[]{#heading}

`heading`[OVERRIDDEN]{.rem}

[instruct.t](../file/instruct.t.html)\[[1034](../source/instruct.t.html#1034)\]

::: desc
don\'t use a heading, as we provide our own internal chapter titles
:::

[]{#isChapterMenu}

`isChapterMenu`[OVERRIDDEN]{.rem}

[instruct.t](../file/instruct.t.html)\[[1028](../source/instruct.t.html#1028)\]

::: desc
present the instructions in \"chapter\" format, so that we can navigate
from one chapter directly to the next
:::

[]{#menuContents}

`menuContents`[OVERRIDDEN]{.rem}

[instruct.t](../file/instruct.t.html)\[[1037](../source/instruct.t.html#1037)\]

::: desc
show our chapter text
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
