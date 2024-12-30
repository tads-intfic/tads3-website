[DirectObject]{.title}[object]{.type}

[parser.t](../file/parser.t.html)\[[3845](../source/parser.t.html#3845)\]

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
The DirectObject role is the role of the object being most directly
acted upon in the command. The is the only role in a verb that has only
one object. In a verb with two objects, this is the object most directly
affected. For example, UNLOCK DOOR WITH KEY directly acts upon the door,
so the door is the direct object; the key isn\'t the direct object
because it\'s merely a tool used to effect the change on the door.

**`DirectObject`**` :   `[`NounRole`](../object/NounRole.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DirectObject`**\
`         `[`NounRole`](../object/NounRole.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`curObjProp`](#curObjProp)`  `[`matchProp`](#matchProp)`  `[`missingReplyProp`](#missingReplyProp)`  `[`name`](#name)`  `[`npListProp`](#npListProp)`  `[`objListProp`](#objListProp)`  `[`objMatchProp`](#objMatchProp)`  `[`objProp`](#objProp)`  `[`order`](#order)`  `

Inherited from `NounRole` :\
` `[`all`](../object/NounRole.html#all)`  `[`allPredicate`](../object/NounRole.html#allPredicate)`  `[`isPredicate`](../object/NounRole.html#isPredicate)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `NounRole` :\
` `[`construct`](../object/NounRole.html#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#curObjProp}

`curObjProp`

[parser.t](../file/parser.t.html)\[[3852](../source/parser.t.html#3852)\]

::: desc
*no description available*
:::

[]{#matchProp}

`matchProp`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[3846](../source/parser.t.html#3846)\]

::: desc
*no description available*
:::

[]{#missingReplyProp}

`missingReplyProp`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[3851](../source/parser.t.html#3851)\]

::: desc
*no description available*
:::

[]{#name}

`name`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[3853](../source/parser.t.html#3853)\]

::: desc
*no description available*
:::

[]{#npListProp}

`npListProp`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[3847](../source/parser.t.html#3847)\]

::: desc
*no description available*
:::

[]{#objListProp}

`objListProp`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[3848](../source/parser.t.html#3848)\]

::: desc
*no description available*
:::

[]{#objMatchProp}

`objMatchProp`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[3850](../source/parser.t.html#3850)\]

::: desc
*no description available*
:::

[]{#objProp}

`objProp`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[3849](../source/parser.t.html#3849)\]

::: desc
*no description available*
:::

[]{#order}

`order`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[3854](../source/parser.t.html#3854)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
