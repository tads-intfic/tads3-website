---
layout: docs
---
<span class="title">SettingsItem</span><span class="type">class</span>

[settings.t](../file/settings.t.html)\[[65](../source/settings.t.html#65)\]

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

A settings item. This encapsulates a single setting variable. When we're
saving or restoring default settings, we'll simply loop over all objects
of this class to get or set the current settings.

Note that we don't make any assumptions in this base class about the
type of the value associated with this setting, how it's stored, or how
it's represented in the external configuration file. This means that
each subclass has to provide the property or properties that store the
item's value, and must also define the methods that operate on the
value.

If you want to force a particular default setting for a particular
preference item, overriding the setting stored in the global preferences
file, you can override that SettingsItem's settingFromText() method.
This is the method that interprets the information in the preferences
file, so if you want to ignore the preferences file setting, override
this method to set the hard-coded value of your choosing.

`class `**`SettingsItem`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SettingsItem`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`SettingsItem`**  
`         `[`BinarySettingsItem`](../object/BinarySettingsItem.html)  
`         `[`StringSettingsItem`](../object/StringSettingsItem.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`exitsMode`](../object/exitsMode.html)`  `[`footnoteSettingsItem`](../object/footnoteSettingsItem.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`factoryDefault`](#factoryDefault)`  `[`includeInListing`](#includeInListing)`  `[`settingDesc`](#settingDesc)`  `[`settingID`](#settingID)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`restoreItem`](#restoreItem)`  `[`saveItem`](#saveItem)`  `[`settingFromText`](#settingFromText)`  `[`settingToText`](#settingToText)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="factoryDefault"></span>

`factoryDefault`

[settings.t](../file/settings.t.html)\[[180](../source/settings.t.html#180)\]

<div class="desc">

My "factory default" setting. At pre-init time, before we've loaded the
settings file for the first time, we'll run through all SettingsItems
and store their pre-defined source-code settings here, as though we were
saving the values to a file. Later, when we load a file, if we find the
file lacks an entry for this setting item, we'll simply re-load the
factory default from this property.

</div>

<span id="includeInListing"></span>

`includeInListing`

[settings.t](../file/settings.t.html)\[[109](../source/settings.t.html#109)\]

<div class="desc">

Should this item be included in listings shown to the user? If this is
true, the UI will include this setting in a display list of current
settings shown to the user on request, by calling our settingDesc
method.

</div>

<span id="settingDesc"></span>

`settingDesc`

[settings.t](../file/settings.t.html)\[[101](../source/settings.t.html#101)\]

<div class="desc">

Display a message fragment that shows the current setting value. We use
this to show the player exactly what we're saving or restoring in
response to a SAVE DEFAULTS or RESTORE DEFAULTS command, so that there's
no confusion about which settings are included. In most cases, the best
thing to show here is the command that selects the current setting:
"NOTIFY ON," for example. This is for the UI's convenience; it's not
used by the settings manager itself.

</div>

<span id="settingID"></span>

`settingID`

[settings.t](../file/settings.t.html)\[[89](../source/settings.t.html#89)\]

<div class="desc">

The setting's identifier string. This is the ID of the setting as it
appears in the external configuration file.

The ID should be chosen to ensure uniqueness. To reduce the chances of
name collisions, we suggest a convention of using a two part name: a
prefix identifying the source of the name (an abbreviated version of the
name of the library, library extension, or game), followed by a period
as a separator, followed by a short descriptive name for the variable.
The library follows this convention by using names of the form
"adv3.xxx" - the "adv3" prefix indicates the standard library.

The ID should contain only letters, numbers, and periods. Don't use
spaces or punctuation marks (other than periods).

Note that the ID string is for the program's use, not the player's, so
this isn't something we translate to different languages. Note, though,
that the configuration file is a simple text file, so it wouldn't hurt
to use a reasonably meaningful name, in case the user takes it upon
herself to look at the contents of the file.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="restoreItem"></span>

`restoreItem (s)`

[settings.t](../file/settings.t.html)\[[140](../source/settings.t.html#140)\]

<div class="desc">

Load from a settings file. By default, this simply calls the setting
file object to load the data.

This implementation is suitable for any scalar type, so this won't need
to be overwritten for subclasses that only need to load a single string
value from the file. Subclasses that implement complex (non-scalar)
datatypes can override this as needed to read multiple line items from
the file.

</div>

<span id="saveItem"></span>

`saveItem (s)`

[settings.t](../file/settings.t.html)\[[162](../source/settings.t.html#162)\]

<div class="desc">

Save to a settings file. By default, this makes a string out of our
value and updates or adds our corresponding entry in the file.

This implementation is suitable for any scalar type, so this won't need
to be overwritten for subclasses that only need to store a single string
value in the file. Subclasses that implement complex (non-scalar)
datatypes can override this as needed to manipulate multiple line items
in the file.

</div>

<span id="settingFromText"></span>

`settingFromText (str)`

[settings.t](../file/settings.t.html)\[[128](../source/settings.t.html#128)\]

<div class="desc">

Set the current value to the contents of the given string. The string
contains a textual representation of a setting value, as previously
generated with settingToText().

This is only needed if the default restoreItem() method is used.

</div>

<span id="settingToText"></span>

`settingToText ( )`

[settings.t](../file/settings.t.html)\[[119](../source/settings.t.html#119)\]

<div class="desc">

Get the textual representation of the setting - returns a string
representing the setting as it should appear in the external
configuration file. We use this to write the setting to the file.

Note that this is only needed if the default saveItem() method is used.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
