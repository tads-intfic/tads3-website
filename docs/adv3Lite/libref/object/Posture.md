[Posture]{.title}[class]{.type}

[postures.t](../file/postures.t.html)\[[34](../source/postures.t.html#34)\]

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
The Posture class is used to define the various postures used in the
POSTURES EXTENSION.

`class `**`Posture`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Posture`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`lying`](../object/lying.html)`  `[`sitting`](../object/sitting.html)`  `[`standing`](../object/standing.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`allowedInProp`](#allowedInProp)`  `[`allowedOnProp`](#allowedOnProp)`  `[`cannotInMsgProp`](#cannotInMsgProp)`  `[`cannotOnMsgProp`](#cannotOnMsgProp)`  `[`participle`](#participle)`  `[`verbPhrase`](#verbPhrase)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`canAdoptIn`](#canAdoptIn)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#allowedInProp}

`allowedInProp`

[postures.t](../file/postures.t.html)\[[43](../source/postures.t.html#43)\]

::: desc
The property of a potential container that must be true if the actor is
to be allowed to adopt this posture in that container (e.g.
&canStandInMe). \[POSTURES EXTENSION\]
:::

[]{#allowedOnProp}

`allowedOnProp`

[postures.t](../file/postures.t.html)\[[50](../source/postures.t.html#50)\]

::: desc
The property of a potential container that must be true if the actor is
to be allowed to adopt this posture on that container (e.g.
&canStandOnMe). \[POSTURES EXTENSION\]
:::

[]{#cannotInMsgProp}

`cannotInMsgProp`

[postures.t](../file/postures.t.html)\[[56](../source/postures.t.html#56)\]

::: desc
The property of a potential container that contains the message to
display if we can\'t adopt this posture in it. \[POSTURES EXTENSION\]
:::

[]{#cannotOnMsgProp}

`cannotOnMsgProp`

[postures.t](../file/postures.t.html)\[[62](../source/postures.t.html#62)\]

::: desc
The property of a potential container that contains the message to
display if we can\'t adopt this posture on it. \[POSTURES EXTENSION\]
:::

[]{#participle}

`participle`

[postures.t](../file/postures.t.html)\[[36](../source/postures.t.html#36)\]

::: desc
The participle (e.g. \'standing\') relating to the posture. \[POSTURES
EXTENSION\]
:::

[]{#verbPhrase}

`verbPhrase`

[postures.t](../file/postures.t.html)\[[79](../source/postures.t.html#79)\]

::: desc
The verb phrase (subject and verb) corresponding an action that involves
taking this posture. \[POSTURES EXTENSION\]
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#canAdoptIn}

`canAdoptIn (obj)`

[postures.t](../file/postures.t.html)\[[69](../source/postures.t.html#69)\]

::: desc
A method that returns true or nil according to whether an actor can
adopt this posture in/on obj, which depends on the contType of obj.
\[POSTURES EXTENSION\]
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
