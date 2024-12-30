[MenuObject]{.title}[class]{.type}

[menusys.t](../file/menusys.t.html)\[[141](../source/menusys.t.html#141)\]

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
A basic menu object. This is an abstract base class that encapsulates
some behavior common to different menu classes, and allows the use of
the + syntax (like \"+ MenuItem\") to define containment.

`class `**`MenuObject`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`MenuObject`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`MenuObject`**\
`         `[`MenuItem`](../object/MenuItem.html)\
`                 `[`HintMenu`](../object/HintMenu.html)\
`                         `[`TopHintMenu`](../object/TopHintMenu.html)\
`                 `[`MenuLongTopicItem`](../object/MenuLongTopicItem.html)\
`                         `[`HintLongTopicItem`](../object/HintLongTopicItem.html)\
`                         `[`InstructionsMenu`](../object/InstructionsMenu.html)\
`                 `[`MenuTopicItem`](../object/MenuTopicItem.html)\
`                         `[`Goal`](../object/Goal.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`contents`](#contents)`  `[`menuOrder`](#menuOrder)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addToContents`](#addToContents)`  `[`compareForMenuSort`](#compareForMenuSort)`  `[`execute`](#execute)`  `[`initializeContents`](#initializeContents)`  `[`initializeLocation`](#initializeLocation)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#contents}

`contents`

[menusys.t](../file/menusys.t.html)\[[143](../source/menusys.t.html#143)\]

::: desc
our contents list
:::

[]{#menuOrder}

`menuOrder`

[menusys.t](../file/menusys.t.html)\[[204](../source/menusys.t.html#204)\]

::: desc
The menu order. When we\'re about to show a list of menu items, we\'ll
sort the list in ascending order of this property, then in ascending
order of title. By default, we set this order value to be equal to the
menu item\'s sourceTextOrder. This makes the menu order default to the
order of objects as defined in the source. If some other basis is
desired, override topicOrder.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addToContents}

`addToContents (obj)`

[menusys.t](../file/menusys.t.html)\[[156](../source/menusys.t.html#156)\]

::: desc
add a menu item
:::

[]{#compareForMenuSort}

`compareForMenuSort (other)`

[menusys.t](../file/menusys.t.html)\[[215](../source/menusys.t.html#215)\]

::: desc
Compare this menu object to another, for the purposes of sorting a list
of menu items. Returns a positive number if this menu item sorts after
the other one, a negative number if this menu item sorts before the
other one, 0 if the relative order is arbitrary.

By default, we\'ll sort by menuOrder if the menuOrder values are
different, otherwise arbitrarily.
:::

[]{#execute}

`execute ( )`

[menusys.t](../file/menusys.t.html)\[[255](../source/menusys.t.html#255)\]

::: desc
This preinit object makes sure the MenuObjects all have their contents
initialized properly.
:::

[]{#initializeContents}

`initializeContents ( )`

[menusys.t](../file/menusys.t.html)\[[242](../source/menusys.t.html#242)\]

::: desc
Finish initializing our contents list. This will be called on each
MenuObject \*after\* we\'ve called initializeLocation() on every object.
In other words, every menu will already have been added to its parent\'s
contents; this can do anything else that\'s needed to initialize the
contents list. For example, some subclasses might want to sort their
contents here, so that they list their menus in a defined order. By
default, we sort the menu items by menuOrder; subclasses can override
this as needed.
:::

[]{#initializeLocation}

`initializeLocation ( )`

[menusys.t](../file/menusys.t.html)\[[149](../source/menusys.t.html#149)\]

::: desc
Since we\'re inheriting from object, but need to use the \"+\" syntax,
we need to set up the contents appropriately
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::