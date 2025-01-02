---
layout: docs
---
<span class="title">BinarySettingsItem</span><span class="type">class</span>

[settings.t](../file/settings.t.html)\[[187](../source/settings.t.html#187)\]

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

A binary settings item - this is for variables that have simple true/nil
values.

`class `**`BinarySettingsItem`**` :   `[`SettingsItem`](../object/SettingsItem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BinarySettingsItem`**  
`         `[`SettingsItem`](../object/SettingsItem.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`scoreNotifySettingsItem`](../object/scoreNotifySettingsItem.html)`  `[`tipMode`](../object/tipMode.html)`  `[`verboseModeSettingsItem`](../object/verboseModeSettingsItem.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isOn`](#isOn)`  `

Inherited from `SettingsItem` :  
` `[`factoryDefault`](../object/SettingsItem.html#factoryDefault)`  `[`includeInListing`](../object/SettingsItem.html#includeInListing)`  `[`settingDesc`](../object/SettingsItem.html#settingDesc)`  `[`settingID`](../object/SettingsItem.html#settingID)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`settingFromText`](#settingFromText)`  `[`settingToText`](#settingToText)`  `

Inherited from `SettingsItem` :  
` `[`restoreItem`](../object/SettingsItem.html#restoreItem)`  `[`saveItem`](../object/SettingsItem.html#saveItem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isOn"></span>

`isOn`

[settings.t](../file/settings.t.html)\[[203](../source/settings.t.html#203)\]

<div class="desc">

our value is true (on) or nil (off)

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="settingFromText"></span>

`settingFromText (str)`<span class="rem">OVERRIDDEN</span>

[settings.t](../file/settings.t.html)\[[192](../source/settings.t.html#192)\]

<div class="desc">

parse text

</div>

<span id="settingToText"></span>

`settingToText ( )`<span class="rem">OVERRIDDEN</span>

[settings.t](../file/settings.t.html)\[[189](../source/settings.t.html#189)\]

<div class="desc">

convert to text - use ON or OFF as the representation

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
