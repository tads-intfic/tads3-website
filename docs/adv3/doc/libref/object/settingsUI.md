<span class="title">settingsUI</span><span class="type">object</span>

[misc.t](../file/misc.t.html)\[[2350](../source/misc.t.html#2350)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

The settings user interface. This is a subclass of the Settings Manager
that adds a command-line user interface, particularly to allow the user
to view, save, and load the default settings.

Our user interface consists mainly of a pair of special commands: SAVE
DEFAULTS and RESTORE DEFAULTS. The SAVE DEFAULTS command tells the
library to write out all of the current settings (at least, all of those
that participate in this framework) to a file. RESTORE DEFAULTS
explicitly reads that same file and puts the stored settings into
effect. Finally, we'll also read the file and activate its stored
settings when we start (or RESTART) the game.

**`settingsUI`**` :   `[`settingsManager`](../object/settingsManager.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`settingsUI`**  
`         `[`settingsManager`](../object/settingsManager.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`restoreSettingsMsg`](#restoreSettingsMsg)`  `[`saveSettingsMsg`](#saveSettingsMsg)`  `[`showAll`](#showAll)`  `

Inherited from `settingsManager` :  
` `[`restoreSettings`](../object/settingsManager.html#restoreSettings)`  `[`retrieveSettings`](../object/settingsManager.html#retrieveSettings)`  `[`saveSettings`](../object/settingsManager.html#saveSettings)`  `[`storeSettings`](../object/settingsManager.html#storeSettings)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="restoreSettingsMsg"></span>

`restoreSettingsMsg ( )`

[misc.t](../file/misc.t.html)\[[2401](../source/misc.t.html#2401)\]

<div class="desc">

Restore settings, and display an acknowledgment or error message, as
appropriate.

</div>

<span id="saveSettingsMsg"></span>

`saveSettingsMsg ( )`

[misc.t](../file/misc.t.html)\[[2379](../source/misc.t.html#2379)\]

<div class="desc">

Save settings, and display an acknowledgment message (or an error
message, if necessary) for the user's edification.

</div>

<span id="showAll"></span>

`showAll ( )`

[misc.t](../file/misc.t.html)\[[2352](../source/misc.t.html#2352)\]

<div class="desc">

display all of the current settings

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>