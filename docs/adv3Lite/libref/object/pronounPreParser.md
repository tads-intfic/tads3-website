[pronounPreParser]{.title}[object]{.type}

[newbie.t](../file/newbie.t.html)\[[481](../source/newbie.t.html#481)\]

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
Trap commands that start with a pronoun (e.g. I AM LOST or YOU ARE
SILLY) and advise the player that they are likely to be unproductive,
suggesting the format of commands that are more likely to work.

Note that we have to make exceptions that allow valid commands starting
with I where I is an abbreviation for INVENTORY, such as I itself, I
TALL and I WIDE. We also have to make exceptions when a conversation is
in progress, since the command could be a valid SayTopic.

**`pronounPreParser`**` :   `[`StringPreParser`](../object/StringPreParser.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`pronounPreParser`**\
`         `[`StringPreParser`](../object/StringPreParser.html)\
`                 `[`PreinitObject`](../object/PreinitObject.html)\
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`pat`](#pat)`  `[`pat2`](#pat2)`  `[`pat3`](#pat3)`  `

Inherited from `StringPreParser` :\
` `[`isActive`](../object/StringPreParser.html#isActive)`  `[`regList`](../object/StringPreParser.html#regList)`  `[`regListSorted`](../object/StringPreParser.html#regListSorted)`  `[`runOrder`](../object/StringPreParser.html#runOrder)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`doParsing`](#doParsing)`  `

Inherited from `StringPreParser` :\
` `[`construct`](../object/StringPreParser.html#construct)`  `[`execute`](../object/StringPreParser.html#execute)`  `[`registerPreParser`](../object/StringPreParser.html#registerPreParser)`  `[`runAll`](../object/StringPreParser.html#runAll)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#pat}

`pat`

[newbie.t](../file/newbie.t.html)\[[503](../source/newbie.t.html#503)\]

::: desc
*no description available*
:::

[]{#pat2}

`pat2`

[newbie.t](../file/newbie.t.html)\[[506](../source/newbie.t.html#506)\]

::: desc
*no description available*
:::

[]{#pat3}

`pat3`

[newbie.t](../file/newbie.t.html)\[[508](../source/newbie.t.html#508)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#doParsing}

`doParsing (str, which)`[OVERRIDDEN]{.rem}

[newbie.t](../file/newbie.t.html)\[[482](../source/newbie.t.html#482)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 25/05/2013 from adv3Lite version 0.9
:::
