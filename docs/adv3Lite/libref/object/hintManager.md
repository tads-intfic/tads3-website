[hintManager]{.title}[object]{.type}

[hintsys.t](../file/hintsys.t.html)\[[549](../source/hintsys.t.html#549)\]

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
The default hint system user interface implementation. All of the
hint-related verbs operate by calling methods in the object stored in
the global variable gHintSystem, which we\'ll by default initialize with
a reference to this object. Games can replace this with their own
implementations if desired.

**`hintManager`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`hintManager`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`topHintMenuObj`](#topHintMenuObj)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`disableHints`](#disableHints)`  `[`execute`](#execute)`  `[`showHints`](#showHints)`  `[`showHintWarning`](#showHintWarning)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#topHintMenuObj}

`topHintMenuObj`

[hintsys.t](../file/hintsys.t.html)\[[594](../source/hintsys.t.html#594)\]

::: desc
The top-level hint menu. This must be provided by the game, and should
be set during initialization. If this is nil, hints won\'t be available.

We don\'t provide a default top-level hint menu because we want to give
the game maximum flexibility in defining this object exactly as it
wants. For convenience, an object of class TopHintMenu will
automatically register itself during pre-initialization - but note that
there should be only one such object in the entire game, since if there
are more than one, only one will be arbitrarily chosen as the registered
object.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#disableHints}

`disableHints ( )`

[hintsys.t](../file/hintsys.t.html)\[[567](../source/hintsys.t.html#567)\]

::: desc
Disable hints - this is invoked by the HINTS OFF action.

Some users don\'t like on-line hint systems because they find them to be
too much of a temptation. To address this concern, we provide this HINTS
OFF command. Players who want to ensure that their will-power won\'t
crumble later on in the face of a difficult puzzle can type HINTS OFF
early on, before the going gets rough; this will disable hints for the
rest of the session. It\'s kind of like giving your credit card to a
friend before going to the mall, making the friend promise that they
won\'t let you spend more than such and such an amount, no matter how
much you beg and plead.
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[hintsys.t](../file/hintsys.t.html)\[[551](../source/hintsys.t.html#551)\]

::: desc
during pre-initialization, register as the global hint manager
:::

[]{#showHints}

`showHints ( )`

[hintsys.t](../file/hintsys.t.html)\[[599](../source/hintsys.t.html#599)\]

::: desc
Show hints - invoke the hint system.
:::

[]{#showHintWarning}

`showHintWarning ( )`

[hintsys.t](../file/hintsys.t.html)\[[646](../source/hintsys.t.html#646)\]

::: desc
Show a warning before showing any hints. By default, we\'ll show this at
most once per session or once per saved game. Returns true if we are to
proceed to the hints, nil if not.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
