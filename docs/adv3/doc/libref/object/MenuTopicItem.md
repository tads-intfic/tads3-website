---
layout: docs
---
<span class="title">MenuTopicItem</span><span class="type">class</span>

[menusys.t](../file/menusys.t.html)\[[421](../source/menusys.t.html#421)\],
[menucon.t](../file/menucon.t.html)\[[590](../source/menucon.t.html#590)\],
[menuweb.t](../file/menuweb.t.html)\[[240](../source/menuweb.t.html#240)\]

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



MenuTopicItem displays a series of entries successively. This is
intended to be used for displaying something like a list of hints for a
topic. Set menuContents to be a list of strings to be displayed.

*Modified in
[menucon.t](../file/menucon.t.html)\[[590](../source/menucon.t.html#590)\]:*  
Menu topic item - console UI implementation

*Modified in
[menuweb.t](../file/menuweb.t.html)\[[240](../source/menuweb.t.html#240)\]:*  
Menu topic item - console UI implementation

`class `**`MenuTopicItem`**` :   `[`MenuItem`](../object/MenuItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MenuTopicItem`**  
[`MenuItem`](../object/MenuItem.html)  
[`MenuObject`](../object/MenuObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`MenuTopicItem`**  
[`Goal`](../object/Goal.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`chunkSize`](#chunkSize) [`heading`](#heading) [`lastDisplayed`](#lastDisplayed) [`menuContents`](#menuContents) [`menuTopicListEnd`](#menuTopicListEnd) [`nextMenuTopicLink`](#nextMenuTopicLink) [`title`](#title)

Inherited from `MenuItem` :  
[`bgcolor`](../object/MenuItem.html#bgcolor) [`curKeyList`](../object/MenuItem.html#curKeyList) [`curMenu`](../object/MenuItem.html#curMenu) [`fgcolor`](../object/MenuItem.html#fgcolor) [`fullScreenMode`](../object/MenuItem.html#fullScreenMode) [`indent`](../object/MenuItem.html#indent) [`isOpen`](../object/MenuItem.html#isOpen) [`keyList`](../object/MenuItem.html#keyList) [`prevMenuLink`](../object/MenuItem.html#prevMenuLink) [`topbarbg`](../object/MenuItem.html#topbarbg) [`topbarfg`](../object/MenuItem.html#topbarfg) [`topMenu`](../object/MenuItem.html#topMenu)

Inherited from `MenuObject` :  
[`contents`](../object/MenuObject.html#contents) [`menuOrder`](../object/MenuObject.html#menuOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`displaySubItem`](#displaySubItem) [`getNextTopicXML`](#getNextTopicXML) [`getTopicXML`](#getTopicXML) [`getXML`](#getXML) [`redrawWinHtml`](#redrawWinHtml) [`showMenuHtml`](#showMenuHtml) [`showMenuText`](#showMenuText)

Inherited from `MenuItem` :  
[`display`](../object/MenuItem.html#display) [`enterSubMenu`](../object/MenuItem.html#enterSubMenu) [`formatXML`](../object/MenuItem.html#formatXML) [`getChildIndex`](../object/MenuItem.html#getChildIndex) [`getKeysXML`](../object/MenuItem.html#getKeysXML) [`getNextMenu`](../object/MenuItem.html#getNextMenu) [`getPrevMenu`](../object/MenuItem.html#getPrevMenu) [`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner) [`removeStatusLine`](../object/MenuItem.html#removeStatusLine) [`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner) [`showMenu`](../object/MenuItem.html#showMenu) [`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner) [`updateContents`](../object/MenuItem.html#updateContents)

Inherited from `MenuObject` :  
[`addToContents`](../object/MenuObject.html#addToContents) [`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort) [`execute`](../object/MenuObject.html#execute) [`initializeContents`](../object/MenuObject.html#initializeContents) [`initializeLocation`](../object/MenuObject.html#initializeLocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="chunkSize"></span>

`chunkSize`

[menusys.t](../file/menusys.t.html)\[[447](../source/menusys.t.html#447)\]



The maximum number of our sub-items that we'll display at once. This is
only used on interpreters with banner capabilities, and is ignored in
full-screen mode.



<span id="heading"></span>

`heading`<span class="rem">OVERRIDDEN</span>

[menusys.t](../file/menusys.t.html)\[[426](../source/menusys.t.html#426)\]



heading, displayed while we're showing this topic list



<span id="lastDisplayed"></span>

`lastDisplayed`

[menusys.t](../file/menusys.t.html)\[[440](../source/menusys.t.html#440)\]



the index of the last item we displayed from our menuContents list



<span id="menuContents"></span>

`menuContents`

[menusys.t](../file/menusys.t.html)\[[437](../source/menusys.t.html#437)\]



A list of strings and/or MenuTopicSubItem items. Each one of these is
meant to be something like a single hint on our topic. We display these
items one at a time when our menu item is selected.



<span id="menuTopicListEnd"></span>

`menuTopicListEnd`

[menusys.t](../file/menusys.t.html)\[[450](../source/menusys.t.html#450)\]



we'll display this after we've shown all of our items



<span id="nextMenuTopicLink"></span>

`nextMenuTopicLink`

[menusys.t](../file/menusys.t.html)\[[429](../source/menusys.t.html#429)\]



hyperlink text for showing the next menu



<span id="title"></span>

`title`<span class="rem">OVERRIDDEN</span>

[menusys.t](../file/menusys.t.html)\[[423](../source/menusys.t.html#423)\]



the name of this topic, as it appears in our parent menu



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="displaySubItem"></span>

`displaySubItem (idx, lastBeforeInput, eol)`

[menucon.t](../file/menucon.t.html)\[[875](../source/menucon.t.html#875)\]



Display an item from our list. 'idx' is the index in our list of the
item to display. 'lastBeforeInput' indicates whether or not this is the
last item we're going to show before pausing for user input. 'eol' gives
the newline sequence to display at the end of the line.



<span id="getNextTopicXML"></span>

`getNextTopicXML ( )`

[menuweb.t](../file/menuweb.t.html)\[[270](../source/menuweb.t.html#270)\]



get the next topic, in XML format



<span id="getTopicXML"></span>

`getTopicXML (i)`

[menuweb.t](../file/menuweb.t.html)\[[281](../source/menuweb.t.html#281)\]



get the XML formatted description of the item at the given index



<span id="getXML"></span>

`getXML (from)`<span class="rem">OVERRIDDEN</span>

[menuweb.t](../file/menuweb.t.html)\[[242](../source/menuweb.t.html#242)\]



get the XML description of my menu list



<span id="redrawWinHtml"></span>

`redrawWinHtml (topIdx)`

[menucon.t](../file/menucon.t.html)\[[782](../source/menucon.t.html#782)\]



redraw the window in HTML mode, starting with the given item at the top
of the window



<span id="showMenuHtml"></span>

`showMenuHtml (topMenu)`<span class="rem">OVERRIDDEN</span>

[menucon.t](../file/menucon.t.html)\[[654](../source/menucon.t.html#654)\]



Display and run our menu in HTML mode.



<span id="showMenuText"></span>

`showMenuText (topMenu)`<span class="rem">OVERRIDDEN</span>

[menucon.t](../file/menucon.t.html)\[[594](../source/menucon.t.html#594)\]



Display and run our menu in text mode.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


