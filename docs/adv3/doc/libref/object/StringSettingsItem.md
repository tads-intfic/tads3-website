---
---
<span class="title">StringSettingsItem</span><span class="type">class</span>

[settings.t](../file/settings.t.html)\[[210](../source/settings.t.html#210)\]

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

A string settings item. This is for variables that have scalar string
values. Value strings can contain anything except newlines.

`class `**`StringSettingsItem`**` :   `[`SettingsItem`](../object/SettingsItem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`StringSettingsItem`**  
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

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`leadTrailSpPat`](#leadTrailSpPat)`  `[`needQuotePat`](#needQuotePat)`  `[`trimSpPat`](#trimSpPat)`  `[`val`](#val)`  `

Inherited from `SettingsItem` :  
` `[`factoryDefault`](../object/SettingsItem.html#factoryDefault)`  `[`includeInListing`](../object/SettingsItem.html#includeInListing)`  `[`settingDesc`](../object/SettingsItem.html#settingDesc)`  `[`settingID`](../object/SettingsItem.html#settingID)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`quoteValue`](#quoteValue)`  `[`settingFromText`](#settingFromText)`  `[`settingToText`](#settingToText)`  `

Inherited from `SettingsItem` :  
` `[`restoreItem`](../object/SettingsItem.html#restoreItem)`  `[`saveItem`](../object/SettingsItem.html#saveItem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="leadTrailSpPat"></span>

`leadTrailSpPat`

[settings.t](../file/settings.t.html)\[[242](../source/settings.t.html#242)\]

<div class="desc">

no leading quote; just trim spaces

</div>

<span id="needQuotePat"></span>

`needQuotePat`

[settings.t](../file/settings.t.html)\[[274](../source/settings.t.html#274)\]

<div class="desc">

quotes aren't needed

</div>

<span id="trimSpPat"></span>

`trimSpPat`

[settings.t](../file/settings.t.html)\[[243](../source/settings.t.html#243)\]

<div class="desc">

*no description available*

</div>

<span id="val"></span>

`val`

[settings.t](../file/settings.t.html)\[[277](../source/settings.t.html#277)\]

<div class="desc">

our current value string

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="quoteValue"></span>

`quoteValue (str)`

[settings.t](../file/settings.t.html)\[[251](../source/settings.t.html#251)\]

<div class="desc">

Class method: quote a string value for storing in the file. If the
string has any leading or trailing spaces, starts with a double quote,
or contains any newlines, we'll quote it; otherwise we'll return it
as-is.

</div>

<span id="settingFromText"></span>

`settingFromText (str)`<span class="rem">OVERRIDDEN</span>

[settings.t](../file/settings.t.html)\[[219](../source/settings.t.html#219)\]

<div class="desc">

parse text

</div>

<span id="settingToText"></span>

`settingToText ( )`<span class="rem">OVERRIDDEN</span>

[settings.t](../file/settings.t.html)\[[212](../source/settings.t.html#212)\]

<div class="desc">

convert to text

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
