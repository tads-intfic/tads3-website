[WebUIPrefs]{.title}[class]{.type}

[webui.t](../file/webui.t.html)\[[2367](../source/webui.t.html#2367)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
Web UI preferences. This object contains the in-memory version of the
display style preferences file.

Each client session has its own copy of this object, because each client
can be associated with a different user, and each user has their own
preferences file.

`class `**`WebUIPrefs`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`WebUIPrefs`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`clientSession`](#clientSession)`  `[`curProfile`](#curProfile)`  `[`curProPat`](#curProPat)`  `[`profileTab`](#profileTab)`  `[`proItemPat`](#proItemPat)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`getSettingsFile`](#getSettingsFile)`  `[`getXML`](#getXML)`  `[`loadSettings`](#loadSettings)`  `[`openSettingsFile`](#openSettingsFile)`  `[`readSettings`](#readSettings)`  `[`saveSettings`](#saveSettings)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#clientSession}

`clientSession`

[webui.t](../file/webui.t.html)\[[2558](../source/webui.t.html#2558)\]

::: desc
the client session for this preference list
:::

[]{#curProfile}

`curProfile`

[webui.t](../file/webui.t.html)\[[2567](../source/webui.t.html#2567)\]

::: desc
current active profile selected by the user
:::

[]{#curProPat}

`curProPat`

[webui.t](../file/webui.t.html)\[[2434](../source/webui.t.html#2434)\]

::: desc
current profile ID pattern - current-profile:xxx
:::

[]{#profileTab}

`profileTab`

[webui.t](../file/webui.t.html)\[[2564](../source/webui.t.html#2564)\]

::: desc
profile table - this is a LookupTable of WebUIProfile objects keyed by
profile name
:::

[]{#proItemPat}

`proItemPat`

[webui.t](../file/webui.t.html)\[[2437](../source/webui.t.html#2437)\]

::: desc
setting ID pattern for profile items - nnn.xxx=yyy
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (c)`

[webui.t](../file/webui.t.html)\[[2368](../source/webui.t.html#2368)\]

::: desc
*no description available*
:::

[]{#getSettingsFile}

`getSettingsFile ( )`

[webui.t](../file/webui.t.html)\[[2504](../source/webui.t.html#2504)\]

::: desc
get the settings file path
:::

[]{#getXML}

`getXML ( )`

[webui.t](../file/webui.t.html)\[[2523](../source/webui.t.html#2523)\]

::: desc
get the current settings as XML, to send to the web UI
:::

[]{#loadSettings}

`loadSettings ( )`

[webui.t](../file/webui.t.html)\[[2378](../source/webui.t.html#2378)\]

::: desc
read the settings file
:::

[]{#openSettingsFile}

`openSettingsFile (access)`

[webui.t](../file/webui.t.html)\[[2483](../source/webui.t.html#2483)\]

::: desc
open the settings file
:::

[]{#readSettings}

`readSettings (f)`

[webui.t](../file/webui.t.html)\[[2393](../source/webui.t.html#2393)\]

::: desc
read settings from a file
:::

[]{#saveSettings}

`saveSettings ( )`

[webui.t](../file/webui.t.html)\[[2440](../source/webui.t.html#2440)\]

::: desc
save the current settings to the user\'s config file
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
