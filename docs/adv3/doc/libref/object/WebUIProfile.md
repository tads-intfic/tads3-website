---
layout: docs
---
<span class="title">WebUIProfile</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[2333](../source/webui.t.html#2333)\]

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



UI Settings list. This represents a named UI settings profile in the Web
UI. A profile is a list of name/value pairs.

Most of the name keys are style IDs defined in the javascript for on the
UI side - see main.js. These style IDs are arbitrary keys we define to
identify UI elements - "mainFont" for the main font name, "statusBkg"
for the status-line window's background color, etc. Each style ID
generally corresponds to a dialog control widget in the preferences
dialog in the javascript UI, and also corresponds to one or more CSS
style selectors. The mapping from style ID to CSS is defined in the UI
javascript (see prefsMapper in main.js).

The non-style key "profileName" is the user-visible name of this
profile. Internally, we refer to profiles using ID values, which are
arbitrary identifiers generated by the UI when it creates a new profile
(it currently uses integer keys).

`class `**`WebUIProfile`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`WebUIProfile`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`profileID`](#profileID) [`settings`](#settings)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`forEach`](#forEach) [`setItem`](#setItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="profileID"></span>

`profileID`

[webui.t](../file/webui.t.html)\[[2353](../source/webui.t.html#2353)\]



internal ID of the profile



<span id="settings"></span>

`settings`

[webui.t](../file/webui.t.html)\[[2356](../source/webui.t.html#2356)\]



table of style value strings, keyed by style ID



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (id)`

[webui.t](../file/webui.t.html)\[[2334](../source/webui.t.html#2334)\]



*no description available*



<span id="forEach"></span>

`forEach (func)`

[webui.t](../file/webui.t.html)\[[2347](../source/webui.t.html#2347)\]



call a callback for each style: func(id, val)



<span id="setItem"></span>

`setItem (id, val)`

[webui.t](../file/webui.t.html)\[[2341](../source/webui.t.html#2341)\]



set a preference item in the profile





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


