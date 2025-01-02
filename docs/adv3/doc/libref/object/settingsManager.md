---
layout: docs
---
<span class="title">settingsManager</span><span class="type">object</span>

[settings.t](../file/settings.t.html)\[[289](../source/settings.t.html#289)\]

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

The settings manager. This object gathers up some global methods for
managing the saved settings. This base class provides only a
programmatic interface - it doesn't have a user interface.

**`settingsManager`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`settingsManager`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`restoreSettings`](#restoreSettings)[`retrieveSettings`](#retrieveSettings)[`saveSettings`](#saveSettings)[`storeSettings`](#storeSettings)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="restoreSettings"></span>

`restoreSettings ( )`

[settings.t](../file/settings.t.html)\[[327](../source/settings.t.html#327)\]

<div class="desc">

Restore all of the settings. If an error occurs, we'll throw an
exception:

\- SettingsNotSupportedException - this is an older interpreter that
doesn't support the "special files" feature, so we can't save or restore
the default settings.

</div>

<span id="retrieveSettings"></span>

`retrieveSettings ( )`

[settings.t](../file/settings.t.html)\[[347](../source/settings.t.html#347)\]

<div class="desc">

Retrieve the settings from the global settings file. This returns a
SettingsFileData object that describes the file's contents. Note that if
there simply isn't an existing settings file, we'll successfully return
a SettingsFileData object with no data - the absence of a settings file
isn't an error, but is merely equivalent to an empty settings file.

</div>

<span id="saveSettings"></span>

`saveSettings ( )`

[settings.t](../file/settings.t.html)\[[300](../source/settings.t.html#300)\]

<div class="desc">

Save the current settings. This writes out the current settings to the
global settings file.

On any error, the method throws an exception. Possible errors include:

\- FileCreationException indicates that the settings file couldn't be
opened for writing.

</div>

<span id="storeSettings"></span>

`storeSettings (s)`

[settings.t](../file/settings.t.html)\[[429](../source/settings.t.html#429)\]

<div class="desc">

store the given SettingsFileData to the global settings file

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
