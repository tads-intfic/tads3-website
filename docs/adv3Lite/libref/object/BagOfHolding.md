[BagOfHolding]{.title}[class]{.type}

[gadget.t](../file/gadget.t.html)\[[292](../source/gadget.t.html#292)\]

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
Mix-in class to help with inventory management. A BagOfHolding can be
mixed in with a Container (or, less usually, Surface, RearContainer or
Underside) to provide an object which, if held by the player character,
will be used to move objects in the player character\'s inventory to if
his/her hands become too full to pick up another object.

`class `**`BagOfHolding`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`BagOfHolding`**\
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

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`affinityFor`](#affinityFor)`  `[`moveAction`](#moveAction)`  `[`suitabilityFor`](#suitabilityFor)`  `[`tryHolding`](#tryHolding)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#affinityFor}

`affinityFor (obj)`

[gadget.t](../file/gadget.t.html)\[[302](../source/gadget.t.html#302)\]

::: desc
The affinity for this BagOfHolding for obj. This can be used to
determined how \'willing\' a particular BagOfHolding is to contain obj.
A value of less than 1 means that the BagOfHolding can\'t contain obj at
all. The higher the affinity, the better the choice this BagOfHolding is
for obj. The default value is 100, or 0 for a BagOfHolding\'s affinity
for itself.
:::

[]{#moveAction}

`moveAction ( )`

[gadget.t](../file/gadget.t.html)\[[418](../source/gadget.t.html#418)\]

::: desc
The action needed to move an object into me.
:::

[]{#suitabilityFor}

`suitabilityFor (obj)`

[gadget.t](../file/gadget.t.html)\[[312](../source/gadget.t.html#312)\]

::: desc
To be suitable to contain obj a BagOfHolding must have enough spare
capacity for it. If it has, its suitability is its affinity for obj;
otherwise it\'s 0. A BagOfHolding is also unsuitable if it\'s locked.
:::

[]{#tryHolding}

`tryHolding (obj)`

[gadget.t](../file/gadget.t.html)\[[327](../source/gadget.t.html#327)\]

::: desc
Class method to determine whether the actor is carrying a suitable
BagOfHolding that could be used to move something from his inventory
into, and then to move items from the actor\'s inventory into an
appropriate bag of holding.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
