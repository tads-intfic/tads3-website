---
layout: docs
---
<span class="title">tipMode</span><span class="type">object</span>

[tips.t](../file/tips.t.html)\[[202](../source/tips.t.html#202)\]

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

Next, we want to allow turning all tips on and off during the game. It
should also be possible to turn the tips off for ALL games that use
them, and thus we define a SettingsItem for this purpose. This means
that the player can turn the tips off and then save this setting as the
default.

**`tipMode`**` :   `[`BinarySettingsItem`](../object/BinarySettingsItem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`tipMode`**  
`         `[`BinarySettingsItem`](../object/BinarySettingsItem.html)  
`                 `[`SettingsItem`](../object/SettingsItem.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isOn`](#isOn)`  `[`settingDesc`](#settingDesc)`  `[`settingID`](#settingID)`  `

` `

Inherited from `SettingsItem` :  
` `[`factoryDefault`](../object/SettingsItem.html#factoryDefault)`  `[`includeInListing`](../object/SettingsItem.html#includeInListing)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `BinarySettingsItem` :  
` `[`settingFromText`](../object/BinarySettingsItem.html#settingFromText)`  `[`settingToText`](../object/BinarySettingsItem.html#settingToText)`  `

Inherited from `SettingsItem` :  
` `[`restoreItem`](../object/SettingsItem.html#restoreItem)`  `[`saveItem`](../object/SettingsItem.html#saveItem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isOn"></span>

`isOn`<span class="rem">OVERRIDDEN</span>

[tips.t](../file/tips.t.html)\[[204](../source/tips.t.html#204)\]

<div class="desc">

we show tips by default

</div>

<span id="settingDesc"></span>

`settingDesc`<span class="rem">OVERRIDDEN</span>

[tips.t](../file/tips.t.html)\[[210](../source/tips.t.html#210)\]

<div class="desc">

show our description

</div>

<span id="settingID"></span>

`settingID`<span class="rem">OVERRIDDEN</span>

[tips.t](../file/tips.t.html)\[[207](../source/tips.t.html#207)\]

<div class="desc">

the ID string to use in the configuration file

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
