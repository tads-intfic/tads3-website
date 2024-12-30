[DistResult]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[1497](../source/parser.t.html#1497)\]

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
Result object from applying a Distinguisher to a set of objects.

`class `**`DistResult`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DistResult`**\
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

` `[`appliesTo`](#appliesTo)`  `[`distinguisher`](#distinguisher)`  `[`partitioned`](#partitioned)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`partition`](#partition)`  `[`partSize`](#partSize)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#appliesTo}

`appliesTo`

[parser.t](../file/parser.t.html)\[[1520](../source/parser.t.html#1520)\]

::: desc
the objects that the distinguisher applies to
:::

[]{#distinguisher}

`distinguisher`

[parser.t](../file/parser.t.html)\[[1531](../source/parser.t.html#1531)\]

::: desc
the Distinguisher that these results come from
:::

[]{#partitioned}

`partitioned`

[parser.t](../file/parser.t.html)\[[1528](../source/parser.t.html#1528)\]

::: desc
The partitioned list of objects. This is a list of lists. Each sublist
is a group of objects we can\'t distinguish from one another. Each
object in appliesTo appears once in a sublist, and each object in a
sublist appears in appliesTo.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (dist)`

[parser.t](../file/parser.t.html)\[[1498](../source/parser.t.html#1498)\]

::: desc
*no description available*
:::

[]{#partition}

`partition (obj)`

[parser.t](../file/parser.t.html)\[[1508](../source/parser.t.html#1508)\]

::: desc
get the partition in which \'obj\' appears
:::

[]{#partSize}

`partSize (obj)`

[parser.t](../file/parser.t.html)\[[1514](../source/parser.t.html#1514)\]

::: desc
get the size of the partition in which \'obj\' appears
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
