<span class="title">menusys.t</span><span class="type">file</span>

[source file](../source/menusys.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library - Menu System

  
Modifications copyright 2003, 2010 Michael J. Roberts

This module is designed to make it easy to add on-screen menu trees to a
game. Note that we're not using the term "menu" in its modern GUI sense
of a compact, mouse-driven pop-up list. The style of menu we implement
is more like the kind you'd find in old character-mode terminal
programs, where a list of text items takes over the main window
contents.

Note that in plain-text mode (for interpreters without banner
capabilities), a menu won't be fully usable if it exceeds nine subitems:
each item in a menu is numbered, and the user selects an item by
entering its number; but we only accept a single digit as input, so only
items 1 through 9 can be selected on any given menu. In practice you
probably wouldn't want to create larger menus anyway, for usability
reasons, but this is something to keep in mind. If you need more items,
you can group some of them into a submenu.

The user interface for the menu system is implemented in menucon.t for
traditional console interpreter, and in menuweb.t for the Web UI.

Stephen Granade adapted this module from his TADS 2 menu system, and
Mike Roberts made some minor cosmetic changes to integrate it with the
main TADS 3 library.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`MenuItem`](../object/MenuItem.html)`  `[`MenuLongTopicItem`](../object/MenuLongTopicItem.html)`  `[`MenuObject`](../object/MenuObject.html)`  `[`MenuTopicItem`](../object/MenuTopicItem.html)`  `[`MenuTopicSubItem`](../object/MenuTopicSubItem.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`menuOutputStream`](../object/menuOutputStream.html)`  `[`menuParagraphManager`](../object/menuParagraphManager.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

*(none)* <span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
