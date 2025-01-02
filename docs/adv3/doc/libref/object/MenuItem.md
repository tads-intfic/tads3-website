---
---
<span class="title">MenuItem</span><span class="type">class</span>

[menusys.t](../file/menusys.t.html)\[[275](../source/menusys.t.html#275)\],
[menucon.t](../file/menucon.t.html)\[[44](../source/menucon.t.html#44)\],
[menuweb.t](../file/menuweb.t.html)\[[16](../source/menuweb.t.html#16)\]

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

A MenuItem is a given item in the menu tree. In general all you need to
do to use menus is create a tree of MenuItems with titles.

To display a menu tree, call displayMenu() on the top menu in the tree.
That routine displays the menu and processes user input until the user
dismisses the menu, automatically displaying submenus as necessary.

*Modified in
[menucon.t](../file/menucon.t.html)\[[44](../source/menucon.t.html#44)\]:*  
Menu Item - user interface implementation for the console

*Modified in
[menuweb.t](../file/menuweb.t.html)\[[16](../source/menuweb.t.html#16)\]:*  
Menu Item - user interface implementation for the console

`class `**`MenuItem`**` :   `[`MenuObject`](../object/MenuObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MenuItem`**  
`         `[`MenuObject`](../object/MenuObject.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`MenuItem`**  
`         `[`HintMenu`](../object/HintMenu.html)  
`                 `[`TopHintMenu`](../object/TopHintMenu.html)  
`         `[`MenuLongTopicItem`](../object/MenuLongTopicItem.html)  
`                 `[`HintLongTopicItem`](../object/HintLongTopicItem.html)  
`         `[`MenuTopicItem`](../object/MenuTopicItem.html)  
`                 `[`Goal`](../object/Goal.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`bgcolor`](#bgcolor)`  `[`curKeyList`](#curKeyList)`  `[`curMenu`](#curMenu)`  `[`fgcolor`](#fgcolor)`  `[`fullScreenMode`](#fullScreenMode)`  `[`heading`](#heading)`  `[`indent`](#indent)`  `[`isOpen`](#isOpen)`  `[`keyList`](#keyList)`  `[`prevMenuLink`](#prevMenuLink)`  `[`title`](#title)`  `[`topbarbg`](#topbarbg)`  `[`topbarfg`](#topbarfg)`  `[`topMenu`](#topMenu)`  `

Inherited from `MenuObject` :  
` `[`contents`](../object/MenuObject.html#contents)`  `[`menuOrder`](../object/MenuObject.html#menuOrder)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`display`](#display)`  `[`enterSubMenu`](#enterSubMenu)`  `[`formatXML`](#formatXML)`  `[`getChildIndex`](#getChildIndex)`  `[`getKeysXML`](#getKeysXML)`  `[`getNextMenu`](#getNextMenu)`  `[`getPrevMenu`](#getPrevMenu)`  `[`getXML`](#getXML)`  `[`refreshTopMenuBanner`](#refreshTopMenuBanner)`  `[`removeStatusLine`](#removeStatusLine)`  `[`removeTopMenuBanner`](#removeTopMenuBanner)`  `[`showMenu`](#showMenu)`  `[`showMenuHtml`](#showMenuHtml)`  `[`showMenuText`](#showMenuText)`  `[`showTopMenuBanner`](#showTopMenuBanner)`  `[`updateContents`](#updateContents)`  `

Inherited from `MenuObject` :  
` `[`addToContents`](../object/MenuObject.html#addToContents)`  `[`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort)`  `[`execute`](../object/MenuObject.html#execute)`  `[`initializeContents`](../object/MenuObject.html#initializeContents)`  `[`initializeLocation`](../object/MenuObject.html#initializeLocation)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="bgcolor"></span>

`bgcolor`

[menusys.t](../file/menusys.t.html)\[[311](../source/menusys.t.html#311)\]

<div class="desc">

*no description available*

</div>

<span id="curKeyList"></span>

`curKeyList`

[menusys.t](../file/menusys.t.html)\[[354](../source/menusys.t.html#354)\]

<div class="desc">

the current key list - we'll set this on entry to the start of each
showMenuXxx method, so that we keep track of the actual key list in use,
as inherited from the top-level menu

</div>

<span id="curMenu"></span>

`curMenu`

[menuweb.t](../file/menuweb.t.html)\[[41](../source/menuweb.t.html#41)\]

<div class="desc">

current menu, and current top-level menu

</div>

<span id="fgcolor"></span>

`fgcolor`

[menusys.t](../file/menusys.t.html)\[[310](../source/menusys.t.html#310)\]

<div class="desc">

foreground (text) and background colors, as HTML color names

</div>

<span id="fullScreenMode"></span>

`fullScreenMode`

[menusys.t](../file/menusys.t.html)\[[328](../source/menusys.t.html#328)\]

<div class="desc">

full-screen mode: make our menu take up the whole screen (apart from the
instructions bar, of course)

</div>

<span id="heading"></span>

`heading`

[menusys.t](../file/menusys.t.html)\[[283](../source/menusys.t.html#283)\]

<div class="desc">

the heading - this is shown when this menu is active; by default, we
simply use the title

</div>

<span id="indent"></span>

`indent`

[menusys.t](../file/menusys.t.html)\[[322](../source/menusys.t.html#322)\]

<div class="desc">

number of spaces to indent the menu's contents

</div>

<span id="isOpen"></span>

`isOpen`

[menuweb.t](../file/menuweb.t.html)\[[45](../source/menuweb.t.html#45)\]

<div class="desc">

is the menu open?

</div>

<span id="keyList"></span>

`keyList`

[menusys.t](../file/menusys.t.html)\[[347](../source/menusys.t.html#347)\]

<div class="desc">

The keys used to navigate the menus, in order:

\[quit, previous, up, down, select\]

Since multiple keys can be used for the same navigation, the list is
implemented as a List of Lists. Keys must be given as lower-case in
order to match input, since we convert all input keys to lower-case
before matching them.

In the sublist for each key, we use the first element as the key name we
show in the instruction bar at the top of the screen.

By default, we use our parent menu's key list, if we have a parent; if
we have no parent, we use the standard keys from the library messages.

</div>

<span id="prevMenuLink"></span>

`prevMenuLink`

[menusys.t](../file/menusys.t.html)\[[363](../source/menusys.t.html#363)\]

<div class="desc">

Title for the link to the previous menu, if any. If the menu has a
parent menu, we'll display this link next to the menu title in the top
instructions/title bar. If this is nil, we won't display a link at all.
Note that this can contain an HTML fragment; for example, you could use
an \<IMG\> tag to display an icon here.

</div>

<span id="title"></span>

`title`

[menusys.t](../file/menusys.t.html)\[[277](../source/menusys.t.html#277)\]

<div class="desc">

the name of the menu; this is listed in the parent menu

</div>

<span id="topbarbg"></span>

`topbarbg`

[menusys.t](../file/menusys.t.html)\[[319](../source/menusys.t.html#319)\]

<div class="desc">

*no description available*

</div>

<span id="topbarfg"></span>

`topbarfg`

[menusys.t](../file/menusys.t.html)\[[318](../source/menusys.t.html#318)\]

<div class="desc">

Foreground and background colors for the top instructions bar. By
default, we use the color scheme of the parent menu, or the inverse of
our main menu color scheme if we're the top menu.

</div>

<span id="topMenu"></span>

`topMenu`

[menuweb.t](../file/menuweb.t.html)\[[42](../source/menuweb.t.html#42)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="display"></span>

`display ( )`

[menucon.t](../file/menucon.t.html)\[[51](../source/menucon.t.html#51)\],
[menuweb.t](../file/menuweb.t.html)\[[23](../source/menuweb.t.html#23)\]

<div class="desc">

Call menu.display when you're ready to show the menu. This should be
called on the top-level menu; we run the entire menu display process,
and return when the user exits from the menu tree.

*Modified in
[menuweb.t](../file/menuweb.t.html)\[[23](../source/menuweb.t.html#23)\]:*  
Call menu.display when you're ready to show the menu. This should be
called on the top-level menu; we run the entire menu display process,
and return when the user exits from the menu tree.

</div>

<span id="enterSubMenu"></span>

`enterSubMenu (idx)`

[menuweb.t](../file/menuweb.t.html)\[[61](../source/menuweb.t.html#61)\]

<div class="desc">

navigate into a submenu

</div>

<span id="formatXML"></span>

`formatXML (func)`

[menuweb.t](../file/menuweb.t.html)\[[146](../source/menuweb.t.html#146)\]

<div class="desc">

Prepare a title or content string for our XML output. If 'val' is a
string, we'll run it through the output formatter to expand any special
\<.xxx\> sequences. If 'val' is a property, we'll evaluate the property
of self, capturing the output if it generates any or capturing the
string if it returns one. In all cases, we take the result string and
convert TADS special characters to HTML, and finally html-escape the
result for inclusion in XML output, and return the resulting string.

</div>

<span id="getChildIndex"></span>

`getChildIndex (child)`

[menusys.t](../file/menusys.t.html)\[[409](../source/menusys.t.html#409)\]

<div class="desc">

get the index in the parent of the given child menu

</div>

<span id="getKeysXML"></span>

`getKeysXML (buf)`

[menuweb.t](../file/menuweb.t.html)\[[119](../source/menuweb.t.html#119)\]

<div class="desc">

get the XML description of the top-level key list

</div>

<span id="getNextMenu"></span>

`getNextMenu (menu)`

[menusys.t](../file/menusys.t.html)\[[379](../source/menusys.t.html#379)\]

<div class="desc">

Get the next menu in our list following the given menu. Returns nil if
we don't find the given menu, or the given menu is the last menu.

</div>

<span id="getPrevMenu"></span>

`getPrevMenu (menu)`

[menusys.t](../file/menusys.t.html)\[[396](../source/menusys.t.html#396)\]

<div class="desc">

Get the menu previous tot he given menu. Returns nil if we don't find
the given menu or the given menu is the first one.

</div>

<span id="getXML"></span>

`getXML (from)`

[menuweb.t](../file/menuweb.t.html)\[[87](../source/menuweb.t.html#87)\]

<div class="desc">

Package my menu items as XML, to send to the javascript API. 'from' is
the menu we just navigated from, if any. This is nil when we enter the
top level menu, since we're not navigating from another menu; when we
navigate from a parent to a child, this is the parent; when we return
from a child to a parent, this is the child; and when we move directly
from sibling to sibling (via a next/previous chapter command), this is
the sibling. When we display a new topic in a topic list menu, this is
simply 'self'.

</div>

<span id="refreshTopMenuBanner"></span>

`refreshTopMenuBanner (topMenu)`

[menucon.t](../file/menucon.t.html)\[[486](../source/menucon.t.html#486)\]

<div class="desc">

Refresh the contents of the top bar with the instructions

</div>

<span id="removeStatusLine"></span>

`removeStatusLine ( )`

[menucon.t](../file/menucon.t.html)\[[557](../source/menucon.t.html#557)\]

<div class="desc">

Remove the status line banner prior to displaying the menu

</div>

<span id="removeTopMenuBanner"></span>

`removeTopMenuBanner ( )`

[menucon.t](../file/menucon.t.html)\[[538](../source/menucon.t.html#538)\]

<div class="desc">

Remove the top banner window

</div>

<span id="showMenu"></span>

`showMenu (from)`

[menuweb.t](../file/menuweb.t.html)\[[48](../source/menuweb.t.html#48)\]

<div class="desc">

show this menu as a submenu

</div>

<span id="showMenuHtml"></span>

`showMenuHtml (topMenu)`

[menucon.t](../file/menucon.t.html)\[[262](../source/menucon.t.html#262)\]

<div class="desc">

Show the menu using HTML. Return nil when the user selects QUIT to exit
the menu entirely.

</div>

<span id="showMenuText"></span>

`showMenuText (topMenu)`

[menucon.t](../file/menucon.t.html)\[[129](../source/menucon.t.html#129)\]

<div class="desc">

Display the menu in plain text mode. This is used when the interpreter
only supports the old tads2-style text-mode single-line status area.

Returns true if we should return to the parent menu, nil if the user
selected QUIT to exit the menu system entirely.

</div>

<span id="showTopMenuBanner"></span>

`showTopMenuBanner (topMenu)`

[menucon.t](../file/menucon.t.html)\[[457](../source/menucon.t.html#457)\]

<div class="desc">

showTopMenuBanner creates the banner for the menu using the banner API.
The banner contains the title of the menu on the left and the navigation
keys on the right.

</div>

<span id="updateContents"></span>

`updateContents ( )`

[menusys.t](../file/menusys.t.html)\[[371](../source/menusys.t.html#371)\]

<div class="desc">

Update our contents. By default, we'll do nothing; subclasses can
override this to manage dynamic menus if desired. This is called just
before the menu is displayed, each time it's displayed.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
