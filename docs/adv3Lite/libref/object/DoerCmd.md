[DoerCmd]{.title}[class]{.type}

[doer.t](../file/doer.t.html)\[[482](../source/doer.t.html#482)\]

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
A DoerCmd is a helper object that stores a single command match template
for a Doer object. A given Doer can match multiple commands; each match
is represented by one of these objects.

`class `**`DoerCmd`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DoerCmd`**\
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

` `[`cmd`](#cmd)`  `[`doer`](#doer)`  `[`doerTab`](#doerTab)`  `[`seqno`](#seqno)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`compareTo`](#compareTo)`  `[`construct`](#construct)`  `[`findDoers`](#findDoers)`  `[`matchCmd`](#matchCmd)`  `[`matchConditions`](#matchConditions)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#cmd}

`cmd`

[doer.t](../file/doer.t.html)\[[501](../source/doer.t.html#501)\]

::: desc
The parsed command template. This is a list consisting of the Action we
match plus the objects or classes we match for the noun phrases, in the
canonical order (direct object, indirect object, accessory). The action
can also be the Action class itself, to indicate that we match all
actions. We only match a command with the same number of noun phrases as
in the template.
:::

[]{#doer}

`doer`

[doer.t](../file/doer.t.html)\[[491](../source/doer.t.html#491)\]

::: desc
the Doer I\'m associated with
:::

[]{#doerTab}

`doerTab`

[doer.t](../file/doer.t.html)\[[519](../source/doer.t.html#519)\]

::: desc
Class member: the master table of DoerCmd objects. The library builds
this automatically during preinitialization. This is a lookup table
indexed by Action. Each Action entry has a list of DoerCmd objects
associated with that Action. Note that the generic all-verb handlers are
listed under Action.
:::

[]{#seqno}

`seqno`

[doer.t](../file/doer.t.html)\[[510](../source/doer.t.html#510)\]

::: desc
My global sequence number. During initialization, we set this to reflect
our position in the global list of DoerCmd objects after the list is
sorted into priority order. This makes it easy to sort a new list of
DoerCmd objects into the original priority order.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#compareTo}

`compareTo (other)`

[doer.t](../file/doer.t.html)\[[641](../source/doer.t.html#641)\]

::: desc
Get the processing priority sorting order relative to another DoerCmd.
(See Doer.priority for a discussion of the priority rules.)
:::

[]{#construct}

`construct (d, c)`

[doer.t](../file/doer.t.html)\[[484](../source/doer.t.html#484)\]

::: desc
construction
:::

[]{#findDoers}

`findDoers (cmdLst)`

[doer.t](../file/doer.t.html)\[[526](../source/doer.t.html#526)\]

::: desc
Class method: Get a list of Doer objects matching the given command.
\'cmdLst\' is the command\'s action and object list in canonical format:
\[action, dobj, iobj, accessory\].
:::

[]{#matchCmd}

`matchCmd (cmdLst)`

[doer.t](../file/doer.t.html)\[[571](../source/doer.t.html#571)\]

::: desc
Check for a match to a command list. \'cmdLst\' is the command object
list in canonical format: \[action, dobj, iobj, \...\]. This routine
determines if our Doer is a handler for the given command.
:::

[]{#matchConditions}

`matchConditions ( )`

[doer.t](../file/doer.t.html)\[[745](../source/doer.t.html#745)\]

::: desc
Check whether a Doer matches its where, when, who and during conditions.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
