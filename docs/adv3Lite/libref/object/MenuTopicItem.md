[MenuTopicItem]{.title}[class]{.type}

[menusys.t](../file/menusys.t.html)\[[421](../source/menusys.t.html#421)\],
[menucon.t](../file/menucon.t.html)\[[590](../source/menucon.t.html#590)\],
[menuweb.t](../file/menuweb.t.html)\[[240](../source/menuweb.t.html#240)\]

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
MenuTopicItem displays a series of entries successively. This is
intended to be used for displaying something like a list of hints for a
topic. Set menuContents to be a list of strings to be displayed.

*Modified in
[menucon.t](../file/menucon.t.html)\[[590](../source/menucon.t.html#590)\]:*\
Menu topic item - console UI implementation

*Modified in
[menuweb.t](../file/menuweb.t.html)\[[240](../source/menuweb.t.html#240)\]:*\
Menu topic item - console UI implementation

`class `**`MenuTopicItem`**` :   `[`MenuItem`](../object/MenuItem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`MenuTopicItem`**\
`         `[`MenuItem`](../object/MenuItem.html)\
`                 `[`MenuObject`](../object/MenuObject.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`MenuTopicItem`**\
`         `[`Goal`](../object/Goal.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`chunkSize`](#chunkSize)`  `[`heading`](#heading)`  `[`lastDisplayed`](#lastDisplayed)`  `[`menuContents`](#menuContents)`  `[`menuTopicListEnd`](#menuTopicListEnd)`  `[`nextMenuTopicLink`](#nextMenuTopicLink)`  `[`title`](#title)`  `

Inherited from `MenuItem` :\
` `[`bgcolor`](../object/MenuItem.html#bgcolor)`  `[`curKeyList`](../object/MenuItem.html#curKeyList)`  `[`curMenu`](../object/MenuItem.html#curMenu)`  `[`fgcolor`](../object/MenuItem.html#fgcolor)`  `[`fullScreenMode`](../object/MenuItem.html#fullScreenMode)`  `[`indent`](../object/MenuItem.html#indent)`  `[`isOpen`](../object/MenuItem.html#isOpen)`  `[`keyList`](../object/MenuItem.html#keyList)`  `[`prevMenuLink`](../object/MenuItem.html#prevMenuLink)`  `[`topbarbg`](../object/MenuItem.html#topbarbg)`  `[`topbarfg`](../object/MenuItem.html#topbarfg)`  `[`topMenu`](../object/MenuItem.html#topMenu)`  `

Inherited from `MenuObject` :\
` `[`contents`](../object/MenuObject.html#contents)`  `[`menuOrder`](../object/MenuObject.html#menuOrder)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`displaySubItem`](#displaySubItem)`  `[`getNextTopicXML`](#getNextTopicXML)`  `[`getTopicXML`](#getTopicXML)`  `[`getXML`](#getXML)`  `[`redrawWinHtml`](#redrawWinHtml)`  `[`showMenuHtml`](#showMenuHtml)`  `[`showMenuText`](#showMenuText)`  `

Inherited from `MenuItem` :\
` `[`display`](../object/MenuItem.html#display)`  `[`enterSubMenu`](../object/MenuItem.html#enterSubMenu)`  `[`formatXML`](../object/MenuItem.html#formatXML)`  `[`getChildIndex`](../object/MenuItem.html#getChildIndex)`  `[`getKeysXML`](../object/MenuItem.html#getKeysXML)`  `[`getNextMenu`](../object/MenuItem.html#getNextMenu)`  `[`getPrevMenu`](../object/MenuItem.html#getPrevMenu)`  `[`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner)`  `[`removeStatusLine`](../object/MenuItem.html#removeStatusLine)`  `[`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner)`  `[`showMenu`](../object/MenuItem.html#showMenu)`  `[`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner)`  `[`updateContents`](../object/MenuItem.html#updateContents)`  `

Inherited from `MenuObject` :\
` `[`addToContents`](../object/MenuObject.html#addToContents)`  `[`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort)`  `[`execute`](../object/MenuObject.html#execute)`  `[`initializeContents`](../object/MenuObject.html#initializeContents)`  `[`initializeLocation`](../object/MenuObject.html#initializeLocation)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#chunkSize}

`chunkSize`

[menusys.t](../file/menusys.t.html)\[[447](../source/menusys.t.html#447)\]

::: desc
The maximum number of our sub-items that we\'ll display at once. This is
only used on interpreters with banner capabilities, and is ignored in
full-screen mode.
:::

[]{#heading}

`heading`[OVERRIDDEN]{.rem}

[menusys.t](../file/menusys.t.html)\[[426](../source/menusys.t.html#426)\]

::: desc
heading, displayed while we\'re showing this topic list
:::

[]{#lastDisplayed}

`lastDisplayed`

[menusys.t](../file/menusys.t.html)\[[440](../source/menusys.t.html#440)\]

::: desc
the index of the last item we displayed from our menuContents list
:::

[]{#menuContents}

`menuContents`

[menusys.t](../file/menusys.t.html)\[[437](../source/menusys.t.html#437)\]

::: desc
A list of strings and/or MenuTopicSubItem items. Each one of these is
meant to be something like a single hint on our topic. We display these
items one at a time when our menu item is selected.
:::

[]{#menuTopicListEnd}

`menuTopicListEnd`

[menusys.t](../file/menusys.t.html)\[[450](../source/menusys.t.html#450)\]

::: desc
we\'ll display this after we\'ve shown all of our items
:::

[]{#nextMenuTopicLink}

`nextMenuTopicLink`

[menusys.t](../file/menusys.t.html)\[[429](../source/menusys.t.html#429)\]

::: desc
hyperlink text for showing the next menu
:::

[]{#title}

`title`[OVERRIDDEN]{.rem}

[menusys.t](../file/menusys.t.html)\[[423](../source/menusys.t.html#423)\]

::: desc
the name of this topic, as it appears in our parent menu
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#displaySubItem}

`displaySubItem (idx, lastBeforeInput, eol)`

[menucon.t](../file/menucon.t.html)\[[875](../source/menucon.t.html#875)\]

::: desc
Display an item from our list. \'idx\' is the index in our list of the
item to display. \'lastBeforeInput\' indicates whether or not this is
the last item we\'re going to show before pausing for user input.
\'eol\' gives the newline sequence to display at the end of the line.
:::

[]{#getNextTopicXML}

`getNextTopicXML ( )`

[menuweb.t](../file/menuweb.t.html)\[[270](../source/menuweb.t.html#270)\]

::: desc
get the next topic, in XML format
:::

[]{#getTopicXML}

`getTopicXML (i)`

[menuweb.t](../file/menuweb.t.html)\[[281](../source/menuweb.t.html#281)\]

::: desc
get the XML formatted description of the item at the given index
:::

[]{#getXML}

`getXML (from)`[OVERRIDDEN]{.rem}

[menuweb.t](../file/menuweb.t.html)\[[242](../source/menuweb.t.html#242)\]

::: desc
get the XML description of my menu list
:::

[]{#redrawWinHtml}

`redrawWinHtml (topIdx)`

[menucon.t](../file/menucon.t.html)\[[782](../source/menucon.t.html#782)\]

::: desc
redraw the window in HTML mode, starting with the given item at the top
of the window
:::

[]{#showMenuHtml}

`showMenuHtml (topMenu)`[OVERRIDDEN]{.rem}

[menucon.t](../file/menucon.t.html)\[[654](../source/menucon.t.html#654)\]

::: desc
Display and run our menu in HTML mode.
:::

[]{#showMenuText}

`showMenuText (topMenu)`[OVERRIDDEN]{.rem}

[menucon.t](../file/menucon.t.html)\[[594](../source/menucon.t.html#594)\]

::: desc
Display and run our menu in text mode.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
