[QSenseRegion]{.title}[object]{.type}

[senseRegion.t](../file/senseRegion.t.html)\[[1379](../source/senseRegion.t.html#1379)\]

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
This Special redefines canHear, canSee, canSmell, canTalkTo and
canThrowTo to take account of possible sensory connections across rooms
in a SenseRegion

**`QSenseRegion`**` :   `[`Special`](../object/Special.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`QSenseRegion`**\
`         `[`Special`](../object/Special.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`active`](#active)`  `[`priority`](#priority)`  `

Inherited from `Special` :\
` `[`all`](../object/Special.html#all)`  `[`allActive_`](../object/Special.html#allActive_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`canHear`](#canHear)`  `[`canSee`](#canSee)`  `[`canSmell`](#canSmell)`  `[`canTalkTo`](#canTalkTo)`  `[`canThrowTo`](#canThrowTo)`  `[`nonBlocker`](#nonBlocker)`  `[`reachBlocker`](#reachBlocker)`  `

Inherited from `Special` :\
` `[`allActive`](../object/Special.html#allActive)`  `[`classInit`](../object/Special.html#classInit)`  `[`first`](../object/Special.html#first)`  `[`next`](../object/Special.html#next)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#active}

`active`[OVERRIDDEN]{.rem}

[senseRegion.t](../file/senseRegion.t.html)\[[1388](../source/senseRegion.t.html#1388)\]

::: desc
This Special should be active whenever this module is included.
:::

[]{#priority}

`priority`[OVERRIDDEN]{.rem}

[senseRegion.t](../file/senseRegion.t.html)\[[1385](../source/senseRegion.t.html#1385)\]

::: desc
Gives this Special a slightly higher priority than QDefaults, so that it
takes priority.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#canHear}

`canHear (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1440](../source/senseRegion.t.html#1440)\]

::: desc
Can A hear B? We return true if there\'s a clear sound path from A to B.
:::

[]{#canSee}

`canSee (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1395](../source/senseRegion.t.html#1395)\]

::: desc
Can A see B? We return true if and only if B is in light and there\'s a
clear sight path from A to B.
:::

[]{#canSmell}

`canSmell (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1485](../source/senseRegion.t.html#1485)\]

::: desc
Can A smell B? We return true if there\'s a clear scent path from A to
B.
:::

[]{#canTalkTo}

`canTalkTo (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1531](../source/senseRegion.t.html#1531)\]

::: desc
For A to be able to talk to B, A must both be able to hear B and either
be in the same room as B or in a room that\'s close enough to be able to
converse with B
:::

[]{#canThrowTo}

`canThrowTo (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1554](../source/senseRegion.t.html#1554)\]

::: desc
Can A throw an object to B?
:::

[]{#nonBlocker}

`nonBlocker (o, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1601](../source/senseRegion.t.html#1601)\]

::: desc
Is o the kind of object that would block movement from one room to the
room containing b? It is unless o is a room and the room and b are both
in a SenseRegion for which autoGoTo is true.
:::

[]{#reachBlocker}

`reachBlocker (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1582](../source/senseRegion.t.html#1582)\]

::: desc
Determine if A can reach B, and if not, what stands in the way. Returns
a list of containers along the path between A and B that obstruct the
reach. If the two objects are in separate rooms, the top-level room
containing A is in the list to represent the room separation. If
there\'s no obstruction, we return an empty list.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
