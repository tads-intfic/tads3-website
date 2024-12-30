[MenuLongTopicItem]{.title}[class]{.type}

[menusys.t](../file/menusys.t.html)\[[474](../source/menusys.t.html#474)\],
[menucon.t](../file/menucon.t.html)\[[915](../source/menucon.t.html#915)\],
[menuweb.t](../file/menuweb.t.html)\[[299](../source/menuweb.t.html#299)\]

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
Long Topic Items are used to print out big long gobs of text on a
subject. Use it for printing long treatises on your design philosophy
and the like.

*Modified in
[menucon.t](../file/menucon.t.html)\[[915](../source/menucon.t.html#915)\]:*\
Long topic item

*Modified in
[menuweb.t](../file/menuweb.t.html)\[[299](../source/menuweb.t.html#299)\]:*\
Long topic item

`class `**`MenuLongTopicItem`**` :   `[`MenuItem`](../object/MenuItem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`MenuLongTopicItem`**\
`         `[`MenuItem`](../object/MenuItem.html)\
`                 `[`MenuObject`](../object/MenuObject.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`MenuLongTopicItem`**\
`         `[`HintLongTopicItem`](../object/HintLongTopicItem.html)\
`         `[`InstructionsMenu`](../object/InstructionsMenu.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`heading`](#heading)`  `[`isChapterMenu`](#isChapterMenu)`  `[`menuContents`](#menuContents)`  `[`menuLongTopicEnd`](#menuLongTopicEnd)`  `[`title`](#title)`  `

Inherited from `MenuItem` :\
` `[`bgcolor`](../object/MenuItem.html#bgcolor)`  `[`curKeyList`](../object/MenuItem.html#curKeyList)`  `[`curMenu`](../object/MenuItem.html#curMenu)`  `[`fgcolor`](../object/MenuItem.html#fgcolor)`  `[`fullScreenMode`](../object/MenuItem.html#fullScreenMode)`  `[`indent`](../object/MenuItem.html#indent)`  `[`isOpen`](../object/MenuItem.html#isOpen)`  `[`keyList`](../object/MenuItem.html#keyList)`  `[`prevMenuLink`](../object/MenuItem.html#prevMenuLink)`  `[`topbarbg`](../object/MenuItem.html#topbarbg)`  `[`topbarfg`](../object/MenuItem.html#topbarfg)`  `[`topMenu`](../object/MenuItem.html#topMenu)`  `

Inherited from `MenuObject` :\
` `[`contents`](../object/MenuObject.html#contents)`  `[`menuOrder`](../object/MenuObject.html#menuOrder)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`getXML`](#getXML)`  `[`showMenuCommon`](#showMenuCommon)`  `[`showMenuHtml`](#showMenuHtml)`  `[`showMenuText`](#showMenuText)`  `

Inherited from `MenuItem` :\
` `[`display`](../object/MenuItem.html#display)`  `[`enterSubMenu`](../object/MenuItem.html#enterSubMenu)`  `[`formatXML`](../object/MenuItem.html#formatXML)`  `[`getChildIndex`](../object/MenuItem.html#getChildIndex)`  `[`getKeysXML`](../object/MenuItem.html#getKeysXML)`  `[`getNextMenu`](../object/MenuItem.html#getNextMenu)`  `[`getPrevMenu`](../object/MenuItem.html#getPrevMenu)`  `[`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner)`  `[`removeStatusLine`](../object/MenuItem.html#removeStatusLine)`  `[`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner)`  `[`showMenu`](../object/MenuItem.html#showMenu)`  `[`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner)`  `[`updateContents`](../object/MenuItem.html#updateContents)`  `

Inherited from `MenuObject` :\
` `[`addToContents`](../object/MenuObject.html#addToContents)`  `[`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort)`  `[`execute`](../object/MenuObject.html#execute)`  `[`initializeContents`](../object/MenuObject.html#initializeContents)`  `[`initializeLocation`](../object/MenuObject.html#initializeLocation)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#heading}

`heading`[OVERRIDDEN]{.rem}

[menusys.t](../file/menusys.t.html)\[[479](../source/menusys.t.html#479)\]

::: desc
the heading, shown while we\'re displaying our contents
:::

[]{#isChapterMenu}

`isChapterMenu`

[menusys.t](../file/menusys.t.html)\[[490](../source/menusys.t.html#490)\]

::: desc
Flag - this is a \"chapter\" in a list of chapters. If this is set to
true, then we\'ll offer the options to proceed directly to the next and
previous chapters. If this is nil, we\'ll simply wait for acknowledgment
and return to the parent menu.
:::

[]{#menuContents}

`menuContents`

[menusys.t](../file/menusys.t.html)\[[482](../source/menusys.t.html#482)\]

::: desc
either a string to be displayed, or a method returning a string
:::

[]{#menuLongTopicEnd}

`menuLongTopicEnd`

[menusys.t](../file/menusys.t.html)\[[493](../source/menusys.t.html#493)\]

::: desc
the message we display at the end of our text
:::

[]{#title}

`title`[OVERRIDDEN]{.rem}

[menusys.t](../file/menusys.t.html)\[[476](../source/menusys.t.html#476)\]

::: desc
the title of the menu, shown in parent menus
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#getXML}

`getXML (from)`[OVERRIDDEN]{.rem}

[menuweb.t](../file/menuweb.t.html)\[[301](../source/menuweb.t.html#301)\]

::: desc
get my XML description
:::

[]{#showMenuCommon}

`showMenuCommon (topMenu)`

[menucon.t](../file/menucon.t.html)\[[1060](../source/menucon.t.html#1060)\]

::: desc
show our contents - common handler for text and HTML modes
:::

[]{#showMenuHtml}

`showMenuHtml (topMenu)`[OVERRIDDEN]{.rem}

[menucon.t](../file/menucon.t.html)\[[938](../source/menucon.t.html#938)\]

::: desc
display and run our menu in HTML mode
:::

[]{#showMenuText}

`showMenuText (topMenu)`[OVERRIDDEN]{.rem}

[menucon.t](../file/menucon.t.html)\[[917](../source/menucon.t.html#917)\]

::: desc
display and run our menu in text mode
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
