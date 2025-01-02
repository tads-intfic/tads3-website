---
layout: docs
---
<span class="title">exitsMode</span><span class="type">object</span>

[exits.t](../file/exits.t.html)\[[405](../source/exits.t.html#405)\]

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



Settings item - show defaults in status line

**`exitsMode`**` :   `[`SettingsItem`](../object/SettingsItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`exitsMode`**  
[`SettingsItem`](../object/SettingsItem.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`inRoomDesc`](#inRoomDesc)[`inStatusLine`](#inStatusLine)[`settingDesc`](#settingDesc)[`settingID`](#settingID)

Inherited from `SettingsItem` :  
[`factoryDefault`](../object/SettingsItem.html#factoryDefault)[`includeInListing`](../object/SettingsItem.html#includeInListing)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`settingFromText`](#settingFromText)[`settingToText`](#settingToText)

Inherited from `SettingsItem` :  
[`restoreItem`](../object/SettingsItem.html#restoreItem)[`saveItem`](../object/SettingsItem.html#saveItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="inRoomDesc"></span>

`inRoomDesc`

[exits.t](../file/exits.t.html)\[[440](../source/exits.t.html#440)\]



*no description available*



<span id="inStatusLine"></span>

`inStatusLine`

[exits.t](../file/exits.t.html)\[[439](../source/exits.t.html#439)\]



Our value is in two parts. inStatusLine controls whether or not we show
the exit list in the status line; inRoomDesc controls the exit listing
in room descriptions.



<span id="settingDesc"></span>

`settingDesc`<span class="rem">OVERRIDDEN</span>

[exits.t](../file/exits.t.html)\[[410](../source/exits.t.html#410)\]



show our description



<span id="settingID"></span>

`settingID`<span class="rem">OVERRIDDEN</span>

[exits.t](../file/exits.t.html)\[[407](../source/exits.t.html#407)\]



our ID



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="settingFromText"></span>

`settingFromText (str)`<span class="rem">OVERRIDDEN</span>

[exits.t](../file/exits.t.html)\[[422](../source/exits.t.html#422)\]



just return the two binary variables



<span id="settingToText"></span>

`settingToText ( )`<span class="rem">OVERRIDDEN</span>

[exits.t](../file/exits.t.html)\[[414](../source/exits.t.html#414)\]



convert to text





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


