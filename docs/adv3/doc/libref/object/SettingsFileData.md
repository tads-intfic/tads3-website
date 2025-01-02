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

<div class="fdesc">

SettingsFileData - this is an object we use to represent the contents of
the configuration file.

`class `**`SettingsFileData`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SettingsFileData`**  
`         object`  
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

[`lst_`](#lst_)[`tab_`](#tab_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`addComment`](#addComment)[`addItem`](#addItem)[`construct`](#construct)[`delItem`](#delItem)[`forEach`](#forEach)[`getItem`](#getItem)[`setItem`](#setItem)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="lst_"></span>

`lst_`

[settings.t](../file/settings.t.html)\[[557](../source/settings.t.html#557)\]

<div class="desc">

a list of SettingsFileItem objects giving the contents of the file

</div>

<span id="tab_"></span>

`tab_`

[settings.t](../file/settings.t.html)\[[554](../source/settings.t.html#554)\]

<div class="desc">

lookup table of values, keyed by variable name

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addComment"></span>

`addComment (str)`

[settings.t](../file/settings.t.html)\[[532](../source/settings.t.html#532)\]

<div class="desc">

add a comment line

</div>

<span id="addItem"></span>

`addItem (id, val)`

[settings.t](../file/settings.t.html)\[[504](../source/settings.t.html#504)\]

<div class="desc">

add a variable

</div>

<span id="construct"></span>

`construct ( )`

[settings.t](../file/settings.t.html)\[[466](../source/settings.t.html#466)\]

<div class="desc">

*no description available*

</div>

<span id="delItem"></span>

`delItem (id)`

[settings.t](../file/settings.t.html)\[[539](../source/settings.t.html#539)\]

<div class="desc">

delete an item

</div>

<span id="forEach"></span>

`forEach (func)`

[settings.t](../file/settings.t.html)\[[492](../source/settings.t.html#492)\]

<div class="desc">

iterate over all data (non-comment) items in the file

</div>

<span id="getItem"></span>

`getItem (id)`

[settings.t](../file/settings.t.html)\[[485](../source/settings.t.html#485)\]

<div class="desc">

find an item - returns a SettinsFileItem for the key, or nil if there's
no existing item

</div>

<span id="setItem"></span>

`setItem (id, val)`

[settings.t](../file/settings.t.html)\[[519](../source/settings.t.html#519)\]

<div class="desc">

set a variable, adding a new variable if it doesn't already exist

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
