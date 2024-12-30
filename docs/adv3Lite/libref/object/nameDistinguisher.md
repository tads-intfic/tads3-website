[nameDistinguisher]{.title}[object]{.type}

[parser.t](../file/parser.t.html)\[[1542](../source/parser.t.html#1542)\]

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
The basic name distinguisher distinguishes objects by their base names.
This is the first distinguisher we apply, since the name is always the
easiest way to tell objects apart in parsing. However since one name
could be entirely contained within another (e.g. \'ball\' and \'red
ball\') we consider the names as equal for this purpose if one of them
is part of the other.

**`nameDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`nameDistinguisher`**\
`         `[`Distinguisher`](../object/Distinguisher.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`sortOrder`](#sortOrder)`  `

Inherited from `Distinguisher` :\
` `[`all`](../object/Distinguisher.html#all)`  `[`classInitFirst`](../object/Distinguisher.html#classInitFirst)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`equal`](#equal)`  `

Inherited from `Distinguisher` :\
` `[`appliesTo`](../object/Distinguisher.html#appliesTo)`  `[`apply`](../object/Distinguisher.html#apply)`  `[`classInit`](../object/Distinguisher.html#classInit)`  `[`getNames`](../object/Distinguisher.html#getNames)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#sortOrder}

`sortOrder`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1543](../source/parser.t.html#1543)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#equal}

`equal (a, b)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1544](../source/parser.t.html#1544)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
