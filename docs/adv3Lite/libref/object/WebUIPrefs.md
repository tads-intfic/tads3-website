---
---
<span class="title">WebUIPrefs</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[2367](../source/webui.t.html#2367)\]

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

Web UI preferences. This object contains the in-memory version of the
display style preferences file.

Each client session has its own copy of this object, because each client
can be associated with a different user, and each user has their own
preferences file.

`class `**`WebUIPrefs`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WebUIPrefs`**  
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

` `[`clientSession`](#clientSession)`  `[`curProfile`](#curProfile)`  `[`curProPat`](#curProPat)`  `[`profileTab`](#profileTab)`  `[`proItemPat`](#proItemPat)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getSettingsFile`](#getSettingsFile)`  `[`getXML`](#getXML)`  `[`loadSettings`](#loadSettings)`  `[`openSettingsFile`](#openSettingsFile)`  `[`readSettings`](#readSettings)`  `[`saveSettings`](#saveSettings)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="clientSession"></span>

`clientSession`

[webui.t](../file/webui.t.html)\[[2558](../source/webui.t.html#2558)\]

<div class="desc">

the client session for this preference list

</div>

<span id="curProfile"></span>

`curProfile`

[webui.t](../file/webui.t.html)\[[2567](../source/webui.t.html#2567)\]

<div class="desc">

current active profile selected by the user

</div>

<span id="curProPat"></span>

`curProPat`

[webui.t](../file/webui.t.html)\[[2434](../source/webui.t.html#2434)\]

<div class="desc">

current profile ID pattern - current-profile:xxx

</div>

<span id="profileTab"></span>

`profileTab`

[webui.t](../file/webui.t.html)\[[2564](../source/webui.t.html#2564)\]

<div class="desc">

profile table - this is a LookupTable of WebUIProfile objects keyed by
profile name

</div>

<span id="proItemPat"></span>

`proItemPat`

[webui.t](../file/webui.t.html)\[[2437](../source/webui.t.html#2437)\]

<div class="desc">

setting ID pattern for profile items - nnn.xxx=yyy

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (c)`

[webui.t](../file/webui.t.html)\[[2368](../source/webui.t.html#2368)\]

<div class="desc">

*no description available*

</div>

<span id="getSettingsFile"></span>

`getSettingsFile ( )`

[webui.t](../file/webui.t.html)\[[2504](../source/webui.t.html#2504)\]

<div class="desc">

get the settings file path

</div>

<span id="getXML"></span>

`getXML ( )`

[webui.t](../file/webui.t.html)\[[2523](../source/webui.t.html#2523)\]

<div class="desc">

get the current settings as XML, to send to the web UI

</div>

<span id="loadSettings"></span>

`loadSettings ( )`

[webui.t](../file/webui.t.html)\[[2378](../source/webui.t.html#2378)\]

<div class="desc">

read the settings file

</div>

<span id="openSettingsFile"></span>

`openSettingsFile (access)`

[webui.t](../file/webui.t.html)\[[2483](../source/webui.t.html#2483)\]

<div class="desc">

open the settings file

</div>

<span id="readSettings"></span>

`readSettings (f)`

[webui.t](../file/webui.t.html)\[[2393](../source/webui.t.html#2393)\]

<div class="desc">

read settings from a file

</div>

<span id="saveSettings"></span>

`saveSettings ( )`

[webui.t](../file/webui.t.html)\[[2440](../source/webui.t.html#2440)\]

<div class="desc">

save the current settings to the user's config file

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
