[StringPreParser]{.title}[class]{.type}

[input.t](../file/input.t.html)\[[631](../source/input.t.html#631)\]

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
Base class for command input string preparsers.

Preparsers must be registered in order to run. During preinitialization,
we will automatically register any existing preparser objects;
preparsers that are created dynamically during execution must be
registered explicitly, which can be accomplished by inheriting the
default constructor from this class.

`class `**`StringPreParser`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`StringPreParser`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`commentPreParser`](../object/commentPreParser.html)`  `[`decimalPreParser`](../object/decimalPreParser.html)`  `[`evalPreParser`](../object/evalPreParser.html)`  `[`pleasePreParser`](../object/pleasePreParser.html)`  `[`pronounUsePreParser`](../object/pronounUsePreParser.html)`  `[`queryPreParser`](../object/queryPreParser.html)`  `[`seekPreParser`](../object/seekPreParser.html)`  `[`somethingPreParser`](../object/somethingPreParser.html)`  `[`usePreParser`](../object/usePreParser.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`isActive`](#isActive)`  `[`regList`](#regList)`  `[`regListSorted`](#regListSorted)`  `[`runOrder`](#runOrder)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`doParsing`](#doParsing)`  `[`execute`](#execute)`  `[`registerPreParser`](#registerPreParser)`  `[`runAll`](#runAll)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#isActive}

`isActive`

[input.t](../file/input.t.html)\[[735](../source/input.t.html#735)\]

::: desc
Flag, is this PreParser active?
:::

[]{#regList}

`regList`

[input.t](../file/input.t.html)\[[729](../source/input.t.html#729)\]

::: desc
class property containing the list of registered parsers
:::

[]{#regListSorted}

`regListSorted`

[input.t](../file/input.t.html)\[[732](../source/input.t.html#732)\]

::: desc
class property - the registration list has been sorted
:::

[]{#runOrder}

`runOrder`

[input.t](../file/input.t.html)\[[637](../source/input.t.html#637)\]

::: desc
My execution order number. When multiple preparsers are registered,
we\'ll run the preparsers in ascending order of this value (i.e.,
smallest runOrder goes first).
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct ( )`

[input.t](../file/input.t.html)\[[663](../source/input.t.html#663)\]

::: desc
construction - when we dynamically create a preparser, register it by
default
:::

[]{#doParsing}

`doParsing (str, which)`

[input.t](../file/input.t.html)\[[653](../source/input.t.html#653)\]

::: desc
Do our parsing. Each instance should override this method to define the
parsing that it does.

\'str\' is the string to parse, and \'which\' is the rmcXxx enum giving
the type of command we\'re working with.

This method returns a string or nil. If the method returns a string, the
caller will forget the original string and work from here on out with
the new version returned; this allows the method to rewrite the original
input as desired. If the method returns nil, it means that the string
has been fully handled and that further parsing of the same string is
not desired.
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[input.t](../file/input.t.html)\[[670](../source/input.t.html#670)\]

::: desc
run pre-initialization
:::

[]{#registerPreParser}

`registerPreParser (pp)`

[input.t](../file/input.t.html)\[[677](../source/input.t.html#677)\]

::: desc
register a preparser
:::

[]{#runAll}

`runAll (str, which)`

[input.t](../file/input.t.html)\[[694](../source/input.t.html#694)\]

::: desc
Class method - Run all preparsers. Returns the result of successively
calling each preparser on the given string.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
