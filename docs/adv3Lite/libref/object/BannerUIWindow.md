[BannerUIWindow]{.title}[class]{.type}

[banner.t](../file/banner.t.html)\[[754](../source/banner.t.html#754)\]

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
A BannerUIWindow object. This keeps track of the transient UI state of a
banner window while it appears on the screen. We create only transient
instances of this class, since it tracks what\'s actually displayed at
any given time.

`class `**`BannerUIWindow`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`BannerUIWindow`**\
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

` `[`align_`](#align_)`  `[`handle_`](#handle_)`  `[`id_`](#id_)`  `[`outputStream_`](#outputStream_)`  `[`parentID_`](#parentID_)`  `[`styleFlags_`](#styleFlags_)`  `[`win_`](#win_)`  `[`windowType_`](#windowType_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#align_}

`align_`

[banner.t](../file/banner.t.html)\[[786](../source/banner.t.html#786)\]

::: desc
*no description available*
:::

[]{#handle_}

`handle_`

[banner.t](../file/banner.t.html)\[[769](../source/banner.t.html#769)\]

::: desc
the system-level banner handle
:::

[]{#id_}

`id_`

[banner.t](../file/banner.t.html)\[[772](../source/banner.t.html#772)\]

::: desc
the banner\'s ID
:::

[]{#outputStream_}

`outputStream_`

[banner.t](../file/banner.t.html)\[[782](../source/banner.t.html#782)\]

::: desc
The banner\'s output stream. Output streams are always transient, so
hang on to each active banner\'s stream so that we can plug it back in
on restore.
:::

[]{#parentID_}

`parentID_`

[banner.t](../file/banner.t.html)\[[775](../source/banner.t.html#775)\]

::: desc
the parent banner\'s ID (nil if this is a top-level banner)
:::

[]{#styleFlags_}

`styleFlags_`

[banner.t](../file/banner.t.html)\[[787](../source/banner.t.html#787)\]

::: desc
*no description available*
:::

[]{#win_}

`win_`

[banner.t](../file/banner.t.html)\[[794](../source/banner.t.html#794)\]

::: desc
Scratch-pad for our association to our BannerWindow object. We only use
this during the RESTORE process, to tie the transient object back to the
proper persistent object.
:::

[]{#windowType_}

`windowType_`

[banner.t](../file/banner.t.html)\[[785](../source/banner.t.html#785)\]

::: desc
creation parameters of the banner
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (handle, ostr, id, parentID, windowType, align, styleFlags)`

[banner.t](../file/banner.t.html)\[[756](../source/banner.t.html#756)\]

::: desc
construct
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
