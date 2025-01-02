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



A binary settings item - this is for variables that have simple true/nil
values.

`class `**`BinarySettingsItem`**` :   `[`SettingsItem`](../object/SettingsItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BinarySettingsItem`**  
[`SettingsItem`](../object/SettingsItem.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`scoreNotifySettingsItem`](../object/scoreNotifySettingsItem.html)[`tipMode`](../object/tipMode.html)[`verboseModeSettingsItem`](../object/verboseModeSettingsItem.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isOn`](#isOn)

Inherited from `SettingsItem` :  
[`factoryDefault`](../object/SettingsItem.html#factoryDefault)[`includeInListing`](../object/SettingsItem.html#includeInListing)[`settingDesc`](../object/SettingsItem.html#settingDesc)[`settingID`](../object/SettingsItem.html#settingID)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`settingFromText`](#settingFromText)[`settingToText`](#settingToText)

Inherited from `SettingsItem` :  
[`restoreItem`](../object/SettingsItem.html#restoreItem)[`saveItem`](../object/SettingsItem.html#saveItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isOn"></span>

`isOn`

[settings.t](../file/settings.t.html)\[[203](../source/settings.t.html#203)\]



our value is true (on) or nil (off)



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="settingFromText"></span>

`settingFromText (str)`<span class="rem">OVERRIDDEN</span>

[settings.t](../file/settings.t.html)\[[192](../source/settings.t.html#192)\]



parse text



<span id="settingToText"></span>

`settingToText ( )`<span class="rem">OVERRIDDEN</span>

[settings.t](../file/settings.t.html)\[[189](../source/settings.t.html#189)\]



convert to text - use ON or OFF as the representation





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


