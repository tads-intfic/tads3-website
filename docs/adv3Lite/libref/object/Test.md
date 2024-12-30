[Test]{.title}[class]{.type}

[debug.t](../file/debug.t.html)\[[484](../source/debug.t.html#484)\]

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
A Test object can be used to create a series of testing commands in your
game, for example:

\
Test \'foo\' \[\'x me\', \'i\', \'wear uniform\'\] \[uniform\];

Would cause the uniform to be moved into the player character\'s
inventory and then the commands X ME and then I and WEAR UNIFORM to be
executed in response to TEST FOO.

`class `**`Test`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Test`**\
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

` `[`location`](#location)`  `[`reportHolding`](#reportHolding)`  `[`reportMove`](#reportMove)`  `[`testHolding`](#testHolding)`  `[`testList`](#testList)`  `[`testName`](#testName)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`getHolding`](#getHolding)`  `[`run`](#run)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#location}

`location`

[debug.t](../file/debug.t.html)\[[495](../source/debug.t.html#495)\]

::: desc
The location to move the player character to before running the test
script
:::

[]{#reportHolding}

`reportHolding`

[debug.t](../file/debug.t.html)\[[513](../source/debug.t.html#513)\]

::: desc
Flag: do we want to report on what items were added to inventory? By
default we do.
:::

[]{#reportMove}

`reportMove`

[debug.t](../file/debug.t.html)\[[501](../source/debug.t.html#501)\]

::: desc
Flag: Do we want to report any change of location by looking around in
the new one? By default we will.
:::

[]{#testHolding}

`testHolding`

[debug.t](../file/debug.t.html)\[[507](../source/debug.t.html#507)\]

::: desc
The objects to move into the player character\'s inventory before
running the test script.
:::

[]{#testList}

`testList`

[debug.t](../file/debug.t.html)\[[489](../source/debug.t.html#489)\]

::: desc
The list commands to be executed when running this test.
:::

[]{#testName}

`testName`

[debug.t](../file/debug.t.html)\[[486](../source/debug.t.html#486)\]

::: desc
The name of this test
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#getHolding}

`getHolding ( )`

[debug.t](../file/debug.t.html)\[[517](../source/debug.t.html#517)\]

::: desc
Move everything in the testHolding list into the actor\'s inventory
:::

[]{#run}

`run ( )`

[debug.t](../file/debug.t.html)\[[535](../source/debug.t.html#535)\]

::: desc
Run this test by passing the commands in testList through
Parser.parse().
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
