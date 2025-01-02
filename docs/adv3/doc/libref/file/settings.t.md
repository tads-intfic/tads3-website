---
layout: docs
---
<span class="title">settings.t</span><span class="type">file</span>

[source file](../source/settings.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



TADS 3 Library - settings file management

This is a framework that the library uses to keep track of certain
preference settings - things like the NOTIFY, FOOTNOTES, and EXITS
settings.

The point of this framework is "global" settings - settings that apply
not just to a particular game, but to all games that have a particular
feature. Things like NOTIFY, FOOTNOTES, and some other such features are
part of the standard library, so they tend to be available in most
games. Furthermore, they tend to work more or less the same way in most
games. As a result, a given player will probably prefer to set the
options a particular way for most or all games. If a player doesn't like
score notification, she'll probably dislike it across the board, not
just in certain games.

This module provides the internal, programmatic core for managing global
preferences. There's no UI in this part of the implementation; the adv3
library layers the UI on top via the settingsUI object, but other
alternative UIs could be built using the API provided here.

The framework is extensible - there's an easy, structured way for
library extensions and games to add their own configuration variables
that will be automatically managed by the framework. All you have to do
to create a new configuration variable is to create a SettingsItem
object to represent it. Once you've created the object, the library will
automatically find it and manage it for you.

This module is designed to be separable from the adv3 library, so that
alternative libraries or stand-alone (non-library-based) games can reuse
it. This file has no dependencies on anything in adv3 (at least, it
shouldn't).



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`BinarySettingsItem`](../object/BinarySettingsItem.html) [`SettingsFileComment`](../object/SettingsFileComment.html) [`SettingsFileData`](../object/SettingsFileData.html) [`SettingsFileItem`](../object/SettingsFileItem.html) [`SettingsItem`](../object/SettingsItem.html) [`SettingsNotSupportedException`](../object/SettingsNotSupportedException.html) [`StringSettingsItem`](../object/StringSettingsItem.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`settingsManager`](../object/settingsManager.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


