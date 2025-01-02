---
layout: docs
---
<span class="title">TopHintMenu</span><span class="type">class</span>

[hintsys.t](../file/hintsys.t.html)\[[504](../source/hintsys.t.html#504)\]

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



Top-level hint menu. As a convenience, an object defined of this class
will automatically register itself as the top-level hint menu during
pre-initialization.

`class `**`TopHintMenu`**` :   `[`HintMenu`](../object/HintMenu.html) [`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TopHintMenu`**  
[`HintMenu`](../object/HintMenu.html)  
[`MenuItem`](../object/MenuItem.html)  
[`MenuObject`](../object/MenuObject.html)  
`                                 object`  
[`HintMenuObject`](../object/HintMenuObject.html)  
`                         object`  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `HintMenu` :  
[`allContents`](../object/HintMenu.html#allContents) [`isActiveInMenu`](../object/HintMenu.html#isActiveInMenu) [`title`](../object/HintMenu.html#title)

Inherited from `MenuItem` :  
[`bgcolor`](../object/MenuItem.html#bgcolor) [`curKeyList`](../object/MenuItem.html#curKeyList) [`curMenu`](../object/MenuItem.html#curMenu) [`fgcolor`](../object/MenuItem.html#fgcolor) [`fullScreenMode`](../object/MenuItem.html#fullScreenMode) [`heading`](../object/MenuItem.html#heading) [`indent`](../object/MenuItem.html#indent) [`isOpen`](../object/MenuItem.html#isOpen) [`keyList`](../object/MenuItem.html#keyList) [`prevMenuLink`](../object/MenuItem.html#prevMenuLink) [`topbarbg`](../object/MenuItem.html#topbarbg) [`topbarfg`](../object/MenuItem.html#topbarfg) [`topMenu`](../object/MenuItem.html#topMenu)

Inherited from `MenuObject` :  
[`contents`](../object/MenuObject.html#contents) [`menuOrder`](../object/MenuObject.html#menuOrder)

Inherited from `HintMenuObject` :  
[`topicOrder`](../object/HintMenuObject.html#topicOrder)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute)

Inherited from `HintMenu` :  
[`addToContents`](../object/HintMenu.html#addToContents) [`initializeContents`](../object/HintMenu.html#initializeContents) [`updateContents`](../object/HintMenu.html#updateContents)

Inherited from `MenuItem` :  
[`display`](../object/MenuItem.html#display) [`enterSubMenu`](../object/MenuItem.html#enterSubMenu) [`formatXML`](../object/MenuItem.html#formatXML) [`getChildIndex`](../object/MenuItem.html#getChildIndex) [`getKeysXML`](../object/MenuItem.html#getKeysXML) [`getNextMenu`](../object/MenuItem.html#getNextMenu) [`getPrevMenu`](../object/MenuItem.html#getPrevMenu) [`getXML`](../object/MenuItem.html#getXML) [`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner) [`removeStatusLine`](../object/MenuItem.html#removeStatusLine) [`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner) [`showMenu`](../object/MenuItem.html#showMenu) [`showMenuHtml`](../object/MenuItem.html#showMenuHtml) [`showMenuText`](../object/MenuItem.html#showMenuText) [`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner)

Inherited from `MenuObject` :  
[`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort) [`initializeLocation`](../object/MenuObject.html#initializeLocation)

Inherited from `HintMenuObject` :  
[`compareForTopicSort`](../object/HintMenuObject.html#compareForTopicSort)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[506](../source/hintsys.t.html#506)\]



register as the top-level hint menu during pre-initialization





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


