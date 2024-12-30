[Script]{.title}[class]{.type}

[misc.t](../file/misc.t.html)\[[533](../source/misc.t.html#533)\]

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
Generic script object. This class can be used to implement a simple
state machine.

We define Script in misc.t rather than eventList.t so that other parts
of the library can safely test whether something is ofKind(Script) even
it eventList.t is not present. The various types and subclasses of
script are defined in eventList.t to allow them to be optionally
excluded from the build if they\'re not needed in a particular game.

`class `**`Script`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Script`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Script`**\
`         `[`EventList`](../object/EventList.html)\
`                 `[`CyclicEventList`](../object/CyclicEventList.html)\
`                 `[`ExternalEventList`](../object/ExternalEventList.html)\
`                 `[`RandomEventList`](../object/RandomEventList.html)\
`                 `[`ShuffledEventList`](../object/ShuffledEventList.html)\
`                 `[`StopEventList`](../object/StopEventList.html)\
`                 `[`SyncEventList`](../object/SyncEventList.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`curScriptState`](#curScriptState)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`doScript`](#doScript)`  `[`getScriptState`](#getScriptState)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#curScriptState}

`curScriptState`

[misc.t](../file/misc.t.html)\[[565](../source/misc.t.html#565)\]

::: desc
Property giving our current state. This should never be used directly;
instead, getScriptState() should always be used, since getScriptState()
can be overridden so that the state depends on something other than this
internal state property. The meaning of the state identifier is specific
to each subclass.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#doScript}

`doScript ( )`

[misc.t](../file/misc.t.html)\[[553](../source/misc.t.html#553)\]

::: desc
Process the next step of the script. This routine must be overridden to
perform the action of the script. This routine\'s action should call
getScriptState() to get our current state, and should update the
internal state appropriately to take us to the next step after the
current one.

By default, we don\'t do anything at all.
:::

[]{#getScriptState}

`getScriptState ( )`

[misc.t](../file/misc.t.html)\[[538](../source/misc.t.html#538)\]

::: desc
Get the current state. This returns a value that gives the current state
of the script, which is usually simply an integer.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
