[seekPreParser]{.title}[object]{.type}

[newbie.t](../file/newbie.t.html)\[[896](../source/newbie.t.html#896)\]

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
The StringPreparser and the TopicAction which follows are designed to
deal with command like LOOK FOR X, FIND Y or SEARCH FOR Z. The
complication is that in the standard library these are all forms of LOOK
UP X, which prompt the response \"What do you want to look that up
in?\". This is likely to confuse new players.

The StringPreparser checks to see if there\'s a Consultable in the
current location. If so, then we use the standard library handling, on
the assumption that the player is trying to looking something up in it.
If not we change the command to SEEK X in order to invoke the new
SeekAction defined below.

**`seekPreParser`**` :   `[`StringPreParser`](../object/StringPreParser.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`seekPreParser`**\
`         `[`StringPreParser`](../object/StringPreParser.html)\
`                 `[`PreinitObject`](../object/PreinitObject.html)\
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`pat`](#pat)`  `

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

[newbie.t](../file/newbie.t.html)\[[911](../source/newbie.t.html#911)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#doParsing}

`doParsing (str, which)`[OVERRIDDEN]{.rem}

[newbie.t](../file/newbie.t.html)\[[897](../source/newbie.t.html#897)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::