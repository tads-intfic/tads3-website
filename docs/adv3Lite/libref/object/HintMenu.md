---
layout: docs
---
<span class="title">HintMenu</span><span class="type">class</span>

[hintsys.t](../file/hintsys.t.html)\[[462](../source/hintsys.t.html#462)\]

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



A hint menu. This same class can be used for the top-level hints menu
and for sub-menus within the hints menu.

The typical hint menu system will be structured into a top-level hint
menu that contains a set of sub-menus for the main areas of the game;
each sub-menu will have a series of Goal items, each Goal providing a
set of answers to a particular question. Something like this:

topHintMenu: TopHintMenu 'Hints';  
+ HintMenu 'General Questions';  
++ Goal 'What am I supposed to be doing?' \[answer, answer, answer\];  
++ Goal 'Amusing things to try' \[thing, thing, thing\];  
+ HintMenu 'First Area';  
++ Goal 'How do I get past the shark?' \[answer, answer, answer\];  
++ Goal 'How do I open the fish tank?' \[answer, answer, answer\];  
+ HintMenu 'Second Area';  
++ Goal 'Where is the gold key?' \[answer, answer, answer\];  
++ Goal 'How do I unlock the gold door?' \[answer, answer, answer\];

Note that there's no requirement that the hint menu tree takes exactly
this shape. A very small game could dispense with the submenus and
simply put all of the goals directly in the top hint menu. A very large
game with lots of goals could add more levels of sub-menus to make it
easier to navigate the large number of topics.

`class `**`HintMenu`**` :   `[`MenuItem`](../object/MenuItem.html)[`HintMenuObject`](../object/HintMenuObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`HintMenu`**  
[`MenuItem`](../object/MenuItem.html)  
[`MenuObject`](../object/MenuObject.html)  
`                         object`  
[`HintMenuObject`](../object/HintMenuObject.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`HintMenu`**  
[`TopHintMenu`](../object/TopHintMenu.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allContents`](#allContents)[`isActiveInMenu`](#isActiveInMenu)[`title`](#title)

Inherited from `MenuItem` :  
[`bgcolor`](../object/MenuItem.html#bgcolor)[`curKeyList`](../object/MenuItem.html#curKeyList)[`curMenu`](../object/MenuItem.html#curMenu)[`fgcolor`](../object/MenuItem.html#fgcolor)[`fullScreenMode`](../object/MenuItem.html#fullScreenMode)[`heading`](../object/MenuItem.html#heading)[`indent`](../object/MenuItem.html#indent)[`isOpen`](../object/MenuItem.html#isOpen)[`keyList`](../object/MenuItem.html#keyList)[`prevMenuLink`](../object/MenuItem.html#prevMenuLink)[`topbarbg`](../object/MenuItem.html#topbarbg)[`topbarfg`](../object/MenuItem.html#topbarfg)[`topMenu`](../object/MenuItem.html#topMenu)

Inherited from `MenuObject` :  
[`contents`](../object/MenuObject.html#contents)[`menuOrder`](../object/MenuObject.html#menuOrder)

Inherited from `HintMenuObject` :  
[`topicOrder`](../object/HintMenuObject.html#topicOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addToContents`](#addToContents)[`initializeContents`](#initializeContents)[`updateContents`](#updateContents)

Inherited from `MenuItem` :  
[`display`](../object/MenuItem.html#display)[`enterSubMenu`](../object/MenuItem.html#enterSubMenu)[`formatXML`](../object/MenuItem.html#formatXML)[`getChildIndex`](../object/MenuItem.html#getChildIndex)[`getKeysXML`](../object/MenuItem.html#getKeysXML)[`getNextMenu`](../object/MenuItem.html#getNextMenu)[`getPrevMenu`](../object/MenuItem.html#getPrevMenu)[`getXML`](../object/MenuItem.html#getXML)[`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner)[`removeStatusLine`](../object/MenuItem.html#removeStatusLine)[`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner)[`showMenu`](../object/MenuItem.html#showMenu)[`showMenuHtml`](../object/MenuItem.html#showMenuHtml)[`showMenuText`](../object/MenuItem.html#showMenuText)[`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner)

Inherited from `MenuObject` :  
[`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort)[`execute`](../object/MenuObject.html#execute)[`initializeLocation`](../object/MenuObject.html#initializeLocation)

Inherited from `HintMenuObject` :  
[`compareForTopicSort`](../object/HintMenuObject.html#compareForTopicSort)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allContents"></span>

`allContents`

[hintsys.t](../file/hintsys.t.html)\[[517](../source/hintsys.t.html#517)\]



our list of all of our sub-items (some of which may not be active, in
which case they'll appear in this list but not in our 'contents' list,
which contains only active contents)



<span id="isActiveInMenu"></span>

`isActiveInMenu`

[hintsys.t](../file/hintsys.t.html)\[[492](../source/hintsys.t.html#492)\]



we're active in a menu if we have any active contents



<span id="title"></span>

`title`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[464](../source/hintsys.t.html#464)\]



the menu's title



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addToContents"></span>

`addToContents (obj)`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[495](../source/hintsys.t.html#495)\]



add a sub-item to our contents



<span id="initializeContents"></span>

`initializeContents ( )`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[505](../source/hintsys.t.html#505)\]



initialize our contents list



<span id="updateContents"></span>

`updateContents ( )`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[467](../source/hintsys.t.html#467)\]



update our contents





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


