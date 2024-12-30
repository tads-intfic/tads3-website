[ModuleExecObject]{.title}[class]{.type}

[\_main.t](../file/_main.t.html)\[[314](../source/_main.t.html#314)\]

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
Module Execution Object. This is an abstract base class for various
classes that provide modular execution hooks. This class and its
subclasses are mix-in classes - they can be multiply inherited by any
object (as long as it\'s not already some other kind of module execution
object).

The point of the Module Execution Object and its subclasses is to allow
libraries and user code to define execution hooks, without having to
worry about what other libraries and user code bits are defining the
same hook. When we need to execute a hook defined via this object, we
iterate over all of the instances of the appropriate subclass and invoke
its execute() method.

By default, the order of execution is arbitrary. In some cases, though,
dependencies will exist, so that one object cannot be invoked until
another object has already been invoked. In these cases, you must set
the execBeforeMe property to contain a list of the objects whose
execute() methods must be invoked before this object\'s execute() method
is invoked. The library will check this list before calling execute() on
this object, and ensure that each object in the list has been invoked
before calling this object\'s execute().

`class `**`ModuleExecObject`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ModuleExecObject`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`ModuleExecObject`**\
`         `[`InitObject`](../object/InitObject.html)\
`         `[`PostRestoreObject`](../object/PostRestoreObject.html)\
`         `[`PostUndoObject`](../object/PostUndoObject.html)\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`EventListItem`](../object/EventListItem.html)\
`                         `[`ELI`](../object/ELI.html)\
`                         `[`ELI1`](../object/ELI1.html)\
`                 `[`MetadataModuleID`](../object/MetadataModuleID.html)\
`                         `[`GameInfoModuleID`](../object/GameInfoModuleID.html)\
`                                 `[`GameID`](../object/GameID.html)\
`                 `[`MobileCollectiveGroup`](../object/MobileCollectiveGroup.html)\
`                 `[`OutputStream`](../object/OutputStream.html)\
`                         `[`BannerOutputStream`](../object/BannerOutputStream.html)\
`                         `[`LogConsole`](../object/LogConsole.html)\
`                         `[`WebWinOutputStream`](../object/WebWinOutputStream.html)\
`                 `[`Relation`](../object/Relation.html)\
`                 `[`RuleBook`](../object/RuleBook.html)\
`                 `[`StringPreParser`](../object/StringPreParser.html)\
`                 `[`ThoughtManager`](../object/ThoughtManager.html)\
`                 `[`TopHintMenu`](../object/TopHintMenu.html)\
`         `[`PreRestartObject`](../object/PreRestartObject.html)\
`         `[`PreSaveObject`](../object/PreSaveObject.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`execAfterMe`](#execAfterMe)`  `[`execBeforeMe`](#execBeforeMe)`  `[`hasInitialized_`](#hasInitialized_)`  `[`isDoingExec_`](#isDoingExec_)`  `[`isExecuted_`](#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`_execute`](#_execute)`  `[`classExec`](#classExec)`  `[`execute`](#execute)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#execAfterMe}

`execAfterMe`

[\_main.t](../file/_main.t.html)\[[327](../source/_main.t.html#327)\]

::: desc
List of objects that must be executed after me - this is analogous to
execBeforeMe, but we make sure we run before these.
:::

[]{#execBeforeMe}

`execBeforeMe`

[\_main.t](../file/_main.t.html)\[[321](../source/_main.t.html#321)\]

::: desc
List of objects that must be executed before me - by default, the order
doesn\'t matter, so we\'ll set this to an empty list. Instances can
override this if it is necessary to execute other objects before this
object can be executed.
:::

[]{#hasInitialized_}

`hasInitialized_`

[\_main.t](../file/_main.t.html)\[[422](../source/_main.t.html#422)\]

::: desc
flag to indicate that this is the first time running classExec
:::

[]{#isDoingExec_}

`isDoingExec_`

[\_main.t](../file/_main.t.html)\[[345](../source/_main.t.html#345)\]

::: desc
flag - true if we\'re in the process of executing
:::

[]{#isExecuted_}

`isExecuted_`

[\_main.t](../file/_main.t.html)\[[342](../source/_main.t.html#342)\]

::: desc
flag - true if we\'ve been executed on this round
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#_execute}

`_execute ( )`

[\_main.t](../file/_main.t.html)\[[348](../source/_main.t.html#348)\]

::: desc
execute - internal method: checks dependency order
:::

[]{#classExec}

`classExec ( )`

[\_main.t](../file/_main.t.html)\[[429](../source/_main.t.html#429)\]

::: desc
Class execution. Call this method on the particular class of modules to
execute. We\'ll iterate over all instances of that class and invoke each
instance\'s \_execute() method.
:::

[]{#execute}

`execute ( )`

[\_main.t](../file/_main.t.html)\[[333](../source/_main.t.html#333)\]

::: desc
Subclass-specific execution method. Each subclass should override this
method to provide its execution code.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
