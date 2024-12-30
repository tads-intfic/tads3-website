[moduleAdv3Lite]{.title}[object]{.type}

[modid.t](../file/modid.t.html)\[[596](../source/modid.t.html#596)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The main adv3Lite library ID.

**`moduleAdv3Lite`**` :   `[`ModuleID`](../object/ModuleID.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`moduleAdv3Lite`**\
`         `[`ModuleID`](../object/ModuleID.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`byline`](#byline)`  `[`htmlByline`](#htmlByline)`  `[`listingOrder`](#listingOrder)`  `[`listingOrder`](#listingOrder)`  `[`name`](#name)`  `[`version`](#version)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`showVersion`](#showVersion)`  `

Inherited from `ModuleID` :\
` `[`getModuleList`](../object/ModuleID.html#getModuleList)`  `[`showAbout`](../object/ModuleID.html#showAbout)`  `[`showCredit`](../object/ModuleID.html#showCredit)`  `[`showVersionMsg`](../object/ModuleID.html#showVersionMsg)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#byline}

`byline`[OVERRIDDEN]{.rem}

[modid.t](../file/modid.t.html)\[[598](../source/modid.t.html#598)\]

::: desc
*no description available*
:::

[]{#htmlByline}

`htmlByline`[OVERRIDDEN]{.rem}

[modid.t](../file/modid.t.html)\[[599](../source/modid.t.html#599)\]

::: desc
*no description available*
:::

[]{#listingOrder}

`listingOrder`[OVERRIDDEN]{.rem}

[modid.t](../file/modid.t.html)\[[611](../source/modid.t.html#611)\]

::: desc
We use a listing order of 50 so that, if all of the other credits use
the defaults, we appear after the game\'s own credits (conventionally at
listing order 1) and before any extension credits (which inherit the
default order 100), but so that there\'s room for extensions that want
to appear before us, or after us but before any default-ordered
extensions.
:::

[]{#listingOrder}

`listingOrder`[OVERRIDDEN]{.rem}

[modid.t](../file/modid.t.html)\[[642](../source/modid.t.html#642)\]

::: desc
Use a very high listing order so that we\'re the last thing shown.
:::

[]{#name}

`name`[OVERRIDDEN]{.rem}

[modid.t](../file/modid.t.html)\[[597](../source/modid.t.html#597)\]

::: desc
*no description available*
:::

[]{#version}

`version`[OVERRIDDEN]{.rem}

[modid.t](../file/modid.t.html)\[[601](../source/modid.t.html#601)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#showVersion}

`showVersion ( )`[OVERRIDDEN]{.rem}

[modid.t](../file/modid.t.html)\[[624](../source/modid.t.html#624)\]

::: desc
An ID module not for the library but for the T3 VM itself. This doesn\'t
display any credit information, but displays version number information
for the VM so that the \"version\" command shows what version of the
interpreter is in use.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
