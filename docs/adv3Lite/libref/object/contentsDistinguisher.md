[contentsDistinguisher]{.title}[object]{.type}

[parser.t](../file/parser.t.html)\[[1624](../source/parser.t.html#1624)\]

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
Contents distinguisher. This tells objects apart based on their nominal
contents (and only applies to objects with nominal contents at all).
Note that we\'re interested in the \*names\* of the contents, so even if
two objects have different contents objects, they\'re still considered
equal if the contents\' names match. (E.g., two \"buckets of water\" are
indistinguishable, even if the contents are two distinct \"water\"
objects. But \"bucket of water\" and \"bucket of fish\" are
distinguishable.)

**`contentsDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`contentsDistinguisher`**\
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

` `[`appliesTo`](#appliesTo)`  `[`equal`](#equal)`  `

Inherited from `Distinguisher` :\
` `[`apply`](../object/Distinguisher.html#apply)`  `[`classInit`](../object/Distinguisher.html#classInit)`  `[`getNames`](../object/Distinguisher.html#getNames)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#sortOrder}

`sortOrder`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1625](../source/parser.t.html#1625)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#appliesTo}

`appliesTo (obj)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1626](../source/parser.t.html#1626)\]

::: desc
*no description available*
:::

[]{#equal}

`equal (a, b)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1627](../source/parser.t.html#1627)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
