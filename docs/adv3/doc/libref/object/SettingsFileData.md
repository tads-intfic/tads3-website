---
layout: docs
---
<span class="title">SettingsFileData</span><span class="type">class</span>

[settings.t](../file/settings.t.html)\[[465](../source/settings.t.html#465)\]

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



SettingsFileData - this is an object we use to represent the contents of
the configuration file.

`class `**`SettingsFileData`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SettingsFileData`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`lst_`](#lst_) [`tab_`](#tab_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addComment`](#addComment) [`addItem`](#addItem) [`construct`](#construct) [`delItem`](#delItem) [`forEach`](#forEach) [`getItem`](#getItem) [`setItem`](#setItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="lst_"></span>

`lst_`

[settings.t](../file/settings.t.html)\[[557](../source/settings.t.html#557)\]



a list of SettingsFileItem objects giving the contents of the file



<span id="tab_"></span>

`tab_`

[settings.t](../file/settings.t.html)\[[554](../source/settings.t.html#554)\]



lookup table of values, keyed by variable name



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addComment"></span>

`addComment (str)`

[settings.t](../file/settings.t.html)\[[532](../source/settings.t.html#532)\]



add a comment line



<span id="addItem"></span>

`addItem (id, val)`

[settings.t](../file/settings.t.html)\[[504](../source/settings.t.html#504)\]



add a variable



<span id="construct"></span>

`construct ( )`

[settings.t](../file/settings.t.html)\[[466](../source/settings.t.html#466)\]



*no description available*



<span id="delItem"></span>

`delItem (id)`

[settings.t](../file/settings.t.html)\[[539](../source/settings.t.html#539)\]



delete an item



<span id="forEach"></span>

`forEach (func)`

[settings.t](../file/settings.t.html)\[[492](../source/settings.t.html#492)\]



iterate over all data (non-comment) items in the file



<span id="getItem"></span>

`getItem (id)`

[settings.t](../file/settings.t.html)\[[485](../source/settings.t.html#485)\]



find an item - returns a SettinsFileItem for the key, or nil if there's
no existing item



<span id="setItem"></span>

`setItem (id, val)`

[settings.t](../file/settings.t.html)\[[519](../source/settings.t.html#519)\]



set a variable, adding a new variable if it doesn't already exist
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


