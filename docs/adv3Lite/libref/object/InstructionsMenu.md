---
layout: docs
---
<span class="title">InstructionsMenu</span><span class="type">class</span>

[instruct.t](../file/instruct.t.html)\[[1023](../source/instruct.t.html#1023)\]

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



a base class for the instruction chapter menus

`class `**`InstructionsMenu`**` :   `[`MenuLongTopicItem`](../object/MenuLongTopicItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`InstructionsMenu`**  
[`MenuLongTopicItem`](../object/MenuLongTopicItem.html)  
[`MenuItem`](../object/MenuItem.html)  
[`MenuObject`](../object/MenuObject.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`chapterProp`](#chapterProp) [`heading`](#heading) [`isChapterMenu`](#isChapterMenu) [`menuContents`](#menuContents)

Inherited from `MenuLongTopicItem` :  
[`menuLongTopicEnd`](../object/MenuLongTopicItem.html#menuLongTopicEnd) [`title`](../object/MenuLongTopicItem.html#title)

Inherited from `MenuItem` :  
[`bgcolor`](../object/MenuItem.html#bgcolor) [`curKeyList`](../object/MenuItem.html#curKeyList) [`curMenu`](../object/MenuItem.html#curMenu) [`fgcolor`](../object/MenuItem.html#fgcolor) [`fullScreenMode`](../object/MenuItem.html#fullScreenMode) [`indent`](../object/MenuItem.html#indent) [`isOpen`](../object/MenuItem.html#isOpen) [`keyList`](../object/MenuItem.html#keyList) [`prevMenuLink`](../object/MenuItem.html#prevMenuLink) [`topbarbg`](../object/MenuItem.html#topbarbg) [`topbarfg`](../object/MenuItem.html#topbarfg) [`topMenu`](../object/MenuItem.html#topMenu)

Inherited from `MenuObject` :  
[`contents`](../object/MenuObject.html#contents) [`menuOrder`](../object/MenuObject.html#menuOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `MenuLongTopicItem` :  
[`getXML`](../object/MenuLongTopicItem.html#getXML) [`showMenuCommon`](../object/MenuLongTopicItem.html#showMenuCommon) [`showMenuHtml`](../object/MenuLongTopicItem.html#showMenuHtml) [`showMenuText`](../object/MenuLongTopicItem.html#showMenuText)

Inherited from `MenuItem` :  
[`display`](../object/MenuItem.html#display) [`enterSubMenu`](../object/MenuItem.html#enterSubMenu) [`formatXML`](../object/MenuItem.html#formatXML) [`getChildIndex`](../object/MenuItem.html#getChildIndex) [`getKeysXML`](../object/MenuItem.html#getKeysXML) [`getNextMenu`](../object/MenuItem.html#getNextMenu) [`getPrevMenu`](../object/MenuItem.html#getPrevMenu) [`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner) [`removeStatusLine`](../object/MenuItem.html#removeStatusLine) [`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner) [`showMenu`](../object/MenuItem.html#showMenu) [`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner) [`updateContents`](../object/MenuItem.html#updateContents)

Inherited from `MenuObject` :  
[`addToContents`](../object/MenuObject.html#addToContents) [`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort) [`execute`](../object/MenuObject.html#execute) [`initializeContents`](../object/MenuObject.html#initializeContents) [`initializeLocation`](../object/MenuObject.html#initializeLocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="chapterProp"></span>

`chapterProp`

[instruct.t](../file/instruct.t.html)\[[1031](../source/instruct.t.html#1031)\]



the InstructionsAction property that we invoke to show our chapter



<span id="heading"></span>

`heading`<span class="rem">OVERRIDDEN</span>

[instruct.t](../file/instruct.t.html)\[[1034](../source/instruct.t.html#1034)\]



don't use a heading, as we provide our own internal chapter titles



<span id="isChapterMenu"></span>

`isChapterMenu`<span class="rem">OVERRIDDEN</span>

[instruct.t](../file/instruct.t.html)\[[1028](../source/instruct.t.html#1028)\]



present the instructions in "chapter" format, so that we can navigate
from one chapter directly to the next



<span id="menuContents"></span>

`menuContents`<span class="rem">OVERRIDDEN</span>

[instruct.t](../file/instruct.t.html)\[[1037](../source/instruct.t.html#1037)\]



show our chapter text



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


