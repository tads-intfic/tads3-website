---
layout: docs
---
<span class="title">footnoteSettingsItem</span><span class="type">object</span>

[footnote.t](../file/footnote.t.html)\[[213](../source/footnote.t.html#213)\]

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



our FOOTNOTES settings item

**`footnoteSettingsItem`**` :   `[`SettingsItem`](../object/SettingsItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`footnoteSettingsItem`**  
[`SettingsItem`](../object/SettingsItem.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`settingDesc`](#settingDesc) [`settingID`](#settingID) [`showFootnotes`](#showFootnotes)

Inherited from `SettingsItem` :  
[`factoryDefault`](../object/SettingsItem.html#factoryDefault) [`includeInListing`](../object/SettingsItem.html#includeInListing)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute) [`settingFromText`](#settingFromText) [`settingToText`](#settingToText)

Inherited from `SettingsItem` :  
[`restoreItem`](../object/SettingsItem.html#restoreItem) [`saveItem`](../object/SettingsItem.html#saveItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="settingDesc"></span>

`settingDesc`<span class="rem">OVERRIDDEN</span>

[footnote.t](../file/footnote.t.html)\[[221](../source/footnote.t.html#221)\]



show our short description



<span id="settingID"></span>

`settingID`<span class="rem">OVERRIDDEN</span>

[footnote.t](../file/footnote.t.html)\[[218](../source/footnote.t.html#218)\]



our config file variable ID



<span id="showFootnotes"></span>

`showFootnotes`

[footnote.t](../file/footnote.t.html)\[[215](../source/footnote.t.html#215)\]



our current status - the factory default is "medium"



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`

[footnote.t](../file/footnote.t.html)\[[265](../source/footnote.t.html#265)\]



pre-initialization - set up the footnote explanation daemon



<span id="settingFromText"></span>

`settingFromText (str)`<span class="rem">OVERRIDDEN</span>

[footnote.t](../file/footnote.t.html)\[[239](../source/footnote.t.html#239)\]



*no description available*



<span id="settingToText"></span>

`settingToText ( )`<span class="rem">OVERRIDDEN</span>

[footnote.t](../file/footnote.t.html)\[[224](../source/footnote.t.html#224)\]



get the setting's external file string representation
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


