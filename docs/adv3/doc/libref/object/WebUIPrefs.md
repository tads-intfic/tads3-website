---
layout: docs
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



Web UI preferences. This object contains the in-memory version of the
display style preferences file.

Each client session has its own copy of this object, because each client
can be associated with a different user, and each user has their own
preferences file.

`class `**`WebUIPrefs`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`WebUIPrefs`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`clientSession`](#clientSession) [`curProfile`](#curProfile) [`curProPat`](#curProPat) [`profileTab`](#profileTab) [`proItemPat`](#proItemPat)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`getSettingsFile`](#getSettingsFile) [`getXML`](#getXML) [`loadSettings`](#loadSettings) [`openSettingsFile`](#openSettingsFile) [`readSettings`](#readSettings) [`saveSettings`](#saveSettings)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="clientSession"></span>

`clientSession`

[webui.t](../file/webui.t.html)\[[2558](../source/webui.t.html#2558)\]



the client session for this preference list



<span id="curProfile"></span>

`curProfile`

[webui.t](../file/webui.t.html)\[[2567](../source/webui.t.html#2567)\]



current active profile selected by the user



<span id="curProPat"></span>

`curProPat`

[webui.t](../file/webui.t.html)\[[2434](../source/webui.t.html#2434)\]



current profile ID pattern - current-profile:xxx



<span id="profileTab"></span>

`profileTab`

[webui.t](../file/webui.t.html)\[[2564](../source/webui.t.html#2564)\]



profile table - this is a LookupTable of WebUIProfile objects keyed by
profile name



<span id="proItemPat"></span>

`proItemPat`

[webui.t](../file/webui.t.html)\[[2437](../source/webui.t.html#2437)\]



setting ID pattern for profile items - nnn.xxx=yyy



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (c)`

[webui.t](../file/webui.t.html)\[[2368](../source/webui.t.html#2368)\]



*no description available*



<span id="getSettingsFile"></span>

`getSettingsFile ( )`

[webui.t](../file/webui.t.html)\[[2504](../source/webui.t.html#2504)\]



get the settings file path



<span id="getXML"></span>

`getXML ( )`

[webui.t](../file/webui.t.html)\[[2523](../source/webui.t.html#2523)\]



get the current settings as XML, to send to the web UI



<span id="loadSettings"></span>

`loadSettings ( )`

[webui.t](../file/webui.t.html)\[[2378](../source/webui.t.html#2378)\]



read the settings file



<span id="openSettingsFile"></span>

`openSettingsFile (access)`

[webui.t](../file/webui.t.html)\[[2483](../source/webui.t.html#2483)\]



open the settings file



<span id="readSettings"></span>

`readSettings (f)`

[webui.t](../file/webui.t.html)\[[2393](../source/webui.t.html#2393)\]



read settings from a file



<span id="saveSettings"></span>

`saveSettings ( )`

[webui.t](../file/webui.t.html)\[[2440](../source/webui.t.html#2440)\]



save the current settings to the user's config file
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


