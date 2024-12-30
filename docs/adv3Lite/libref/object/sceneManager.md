[sceneManager]{.title}[object]{.type}

[scene.t](../file/scene.t.html)\[[16](../source/scene.t.html#16)\]

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
The sceneManager object is used to control the scene-switching and
execution mechanism.

**`sceneManager`**` :   `[`InitObject`](../object/InitObject.html)`   `[`Event`](../object/Event.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`sceneManager`**\
`         `[`InitObject`](../object/InitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
`         `[`Event`](../object/Event.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`eventOrder`](#eventOrder)`  `[`execBeforeMe`](#execBeforeMe)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

Inherited from `Event` :\
` `[`captureText`](../object/Event.html#captureText)`  `[`executed`](../object/Event.html#executed)`  `[`interval_`](../object/Event.html#interval_)`  `[`isPromptDaemon`](../object/Event.html#isPromptDaemon)`  `[`nextRunTime`](../object/Event.html#nextRunTime)`  `[`obj_`](../object/Event.html#obj_)`  `[`prop_`](../object/Event.html#prop_)`  `[`senseObj_`](../object/Event.html#senseObj_)`  `[`senseProp_`](../object/Event.html#senseProp_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execute`](#execute)`  `[`executeEvent`](#executeEvent)`  `[`notifyAfter`](#notifyAfter)`  `[`notifyBefore`](#notifyBefore)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

Inherited from `Event` :\
` `[`callMethod`](../object/Event.html#callMethod)`  `[`construct`](../object/Event.html#construct)`  `[`delayEvent`](../object/Event.html#delayEvent)`  `[`eventMatches`](../object/Event.html#eventMatches)`  `[`getNextRunTime`](../object/Event.html#getNextRunTime)`  `[`removeEvent`](../object/Event.html#removeEvent)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#eventOrder}

`eventOrder`[OVERRIDDEN]{.rem}

[scene.t](../file/scene.t.html)\[[34](../source/scene.t.html#34)\]

::: desc
Run the executeEvent() method for the first time to set up any scenes
that should be active at the start of play.
:::

[]{#execBeforeMe}

`execBeforeMe`[OVERRIDDEN]{.rem}

[scene.t](../file/scene.t.html)\[[69](../source/scene.t.html#69)\]

::: desc
If the scene is happening, call its eachTurn() method
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[scene.t](../file/scene.t.html)\[[17](../source/scene.t.html#17)\]

::: desc
*no description available*
:::

[]{#executeEvent}

`executeEvent ( )`[OVERRIDDEN]{.rem}

[scene.t](../file/scene.t.html)\[[39](../source/scene.t.html#39)\]

::: desc
The executeEvent() method is run each turn to drive the Scenes mechanism
:::

[]{#notifyAfter}

`notifyAfter ( )`

[scene.t](../file/scene.t.html)\[[82](../source/scene.t.html#82)\]

::: desc
*no description available*
:::

[]{#notifyBefore}

`notifyBefore ( )`

[scene.t](../file/scene.t.html)\[[72](../source/scene.t.html#72)\]

::: desc
Run the beforeAction method on every currently active Scene
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
