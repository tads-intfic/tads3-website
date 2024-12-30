[Distinguisher]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[1242](../source/parser.t.html#1242)\]

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
A Distinguisher is an abstract parser object that represents one way
that we can tell two objects apart, both in the name we display and in
command input.

Note that this class is designed primarily for the parser\'s internal
use, to facilitate some bookkeeping that we have to do during
disambiguation. It\'s not really designed as an extensibility mechanism,
because it\'s not usually enough to just add a new instance: you usually
also have to add grammar for whatever new phrasing the new distinguisher
represents, plus object resolution code to handle the new form of
qualification.

`class `**`Distinguisher`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Distinguisher`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Distinguisher`**\
`         `[`StateDistinguisher`](../object/StateDistinguisher.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`contentsDistinguisher`](../object/contentsDistinguisher.html)`  `[`disambigNameDistinguisher`](../object/disambigNameDistinguisher.html)`  `[`locationDistinguisher`](../object/locationDistinguisher.html)`  `[`nameDistinguisher`](../object/nameDistinguisher.html)`  `[`ownerDistinguisher`](../object/ownerDistinguisher.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`all`](#all)`  `[`classInitFirst`](#classInitFirst)`  `[`sortOrder`](#sortOrder)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`appliesTo`](#appliesTo)`  `[`apply`](#apply)`  `[`classInit`](#classInit)`  `[`equal`](#equal)`  `[`getNames`](#getNames)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#all}

`all`

[parser.t](../file/parser.t.html)\[[1318](../source/parser.t.html#1318)\]

::: desc
class property: master list of all distinguishers
:::

[]{#classInitFirst}

`classInitFirst`

[parser.t](../file/parser.t.html)\[[1331](../source/parser.t.html#1331)\]

::: desc
make sure the StateDistinguisher instances are constructed first
:::

[]{#sortOrder}

`sortOrder`

[parser.t](../file/parser.t.html)\[[1248](../source/parser.t.html#1248)\]

::: desc
Sorting order. The parser sorts the master list of distinguishers in
ascending order of this value to determine the order of application.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#appliesTo}

`appliesTo (obj)`

[parser.t](../file/parser.t.html)\[[1265](../source/parser.t.html#1265)\]

::: desc
Is this distinguisher applicable to the given object? Some
distinguishers can only apply to certain objects. For example, a
Lit/Unlit distinguisher can only be applied to objects with that state
variable, because there\'s no vocabulary that we can add to an object
without the variable. (We can talk about \"lit\" and \"unlit\" matches,
but we don\'t have any standard vocabulary to talk about \"unlightable\"
matches.)
:::

[]{#apply}

`apply (lst)`

[parser.t](../file/parser.t.html)\[[1271](../source/parser.t.html#1271)\]

::: desc
Apply the distinguisher. Returns a DistResult object with the results.
:::

[]{#classInit}

`classInit ( )`

[parser.t](../file/parser.t.html)\[[1321](../source/parser.t.html#1321)\]

::: desc
during initialization, build the master list
:::

[]{#equal}

`equal (a, b)`

[parser.t](../file/parser.t.html)\[[1254](../source/parser.t.html#1254)\]

::: desc
Compare two objects for equivalence under this distinguisher. Returns
true if the objects are equivalent, nil others.
:::

[]{#getNames}

`getNames (objs, article)`

[parser.t](../file/parser.t.html)\[[1348](../source/parser.t.html#1348)\]

::: desc
Class method: generate distinguishing names for a list of objects. This
generates names that distinguish the objects from one another, by
applying as many Distinguishers as needed to come up with unique names.

If \'article\' is true, we\'ll use a definite or indefinite article, as
appropriate: definite if the name we settle upon uniquely identifies the
object within the list, indefinite if not. If \'article\' is nil, the
names don\'t have articles at all.

Returns a list of \[name, \[objects\]\] sublists. The name is a string
giving the distinguished name; the \[objects\] sub-sublist is a list of
the objects known under that name.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::