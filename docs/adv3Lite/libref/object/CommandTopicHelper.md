[CommandTopicHelper]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[3526](../source/actor.t.html#3526)\]

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
CommandTopicHelper is a mix-in class for use with CommandTopic and
DefaultCommantTopic to provide some common handling for both. Its base
class LCommandTopicHelper (which provides a method for reconstructing
the text of a command issued to an actor) must be defined in the
language-specific part of the library.

`class `**`CommandTopicHelper`**` :   `[`LCommandTopicHelper`](../object/LCommandTopicHelper.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`CommandTopicHelper`**\
`         `[`LCommandTopicHelper`](../object/LCommandTopicHelper.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`CommandTopicHelper`**\
`         `[`CommandTopic`](../object/CommandTopic.html)\
`         `[`DefaultCommandTopic`](../object/DefaultCommandTopic.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`allowAction`](#allowAction)`  `[`myAction`](#myAction)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`handleTopic`](#handleTopic)`  `

Inherited from `LCommandTopicHelper` :\
` `[`actionPhrase`](../object/LCommandTopicHelper.html#actionPhrase)`  `[`getName`](../object/LCommandTopicHelper.html#getName)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#allowAction}

`allowAction`

[actor.t](../file/actor.t.html)\[[3544](../source/actor.t.html#3544)\]

::: desc
Set this to true to allow the action to proceed as commanded by the
player.
:::

[]{#myAction}

`myAction`

[actor.t](../file/actor.t.html)\[[3550](../source/actor.t.html#3550)\]

::: desc
The action our actor has been ordered to carry out, which will be the
action on the current Command object.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#handleTopic}

`handleTopic ( )`

[actor.t](../file/actor.t.html)\[[3527](../source/actor.t.html#3527)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
