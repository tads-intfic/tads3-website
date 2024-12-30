[StateDistinguisher]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[1565](../source/parser.t.html#1565)\]

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
The class for state distinguishers. A state distinguisher tells objects
apart based on their having distinct current values for a given state.
During preinit, we create a separate instance of this for each State
object in the game.

`class `**`StateDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`StateDistinguisher`**\
`         `[`Distinguisher`](../object/Distinguisher.html)\
`                 object`\
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

` `[`sortOrder`](#sortOrder)`  `[`state`](#state)`  `[`stateList`](#stateList)`  `

Inherited from `Distinguisher` :\
` `[`all`](../object/Distinguisher.html#all)`  `[`classInitFirst`](../object/Distinguisher.html#classInitFirst)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`appliesTo`](#appliesTo)`  `[`classInit`](#classInit)`  `[`construct`](#construct)`  `[`equal`](#equal)`  `

Inherited from `Distinguisher` :\
` `[`apply`](../object/Distinguisher.html#apply)`  `[`getNames`](../object/Distinguisher.html#getNames)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#sortOrder}

`sortOrder`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1566](../source/parser.t.html#1566)\]

::: desc
*no description available*
:::

[]{#state}

`state`

[parser.t](../file/parser.t.html)\[[1588](../source/parser.t.html#1588)\]

::: desc
the State this distinguisher tests
:::

[]{#stateList}

`stateList`

[parser.t](../file/parser.t.html)\[[1591](../source/parser.t.html#1591)\]

::: desc
class property: the list of state distinguisher instances
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#appliesTo}

`appliesTo (obj)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1572](../source/parser.t.html#1572)\]

::: desc
we only apply to objects that have our state variable
:::

[]{#classInit}

`classInit ( )`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1582](../source/parser.t.html#1582)\]

::: desc
during preinit, build an instance for each State
:::

[]{#construct}

`construct (st)`

[parser.t](../file/parser.t.html)\[[1575](../source/parser.t.html#1575)\]

::: desc
build from a State
:::

[]{#equal}

`equal (a, b)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1569](../source/parser.t.html#1569)\]

::: desc
we distinguish based on each object\'s current value for the state
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
