[bannerTracker]{.title}[object]{.type}

[banner.t](../file/banner.t.html)\[[811](../source/banner.t.html#811)\]

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
The persistent banner tracker. This keeps track of the active banner
windows persistently. Whenever we save or restore the game\'s state,
this object will be saved or restored along with the state. When we
restore a previously saved state, we can look at this object to
determine which banners were active at the time the state was saved, and
use this information to restore the same active banners in the user
interface.

This is a post-restore and post-undo object, so we\'re notified via our
execute() method whenever we restore a saved state using RESTORE or
UNDO. When we restore a saved state, we\'ll restore the banner display
conditions as they existed in the saved state.

**`bannerTracker`**` :   `[`PostRestoreObject`](../object/PostRestoreObject.html)`   `[`PostUndoObject`](../object/PostUndoObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`bannerTracker`**\
`         `[`PostRestoreObject`](../object/PostRestoreObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
`         `[`PostUndoObject`](../object/PostUndoObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`activeBanners_`](#activeBanners_)`  `

Inherited from `PostRestoreObject` :\
` `[`restoreCode`](../object/PostRestoreObject.html#restoreCode)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addBanner`](#addBanner)`  `[`execute`](#execute)`  `[`removeBanner`](#removeBanner)`  `[`restoreDisplayState`](#restoreDisplayState)`  `[`skipDescendants`](#skipDescendants)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

` `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#activeBanners_}

`activeBanners_`

[banner.t](../file/banner.t.html)\[[927](../source/banner.t.html#927)\]

::: desc
The list of active banners. This is a list of BannerWindow objects,
stored in banner layout list order.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addBanner}

`addBanner (win, parent, where, other)`

[banner.t](../file/banner.t.html)\[[813](../source/banner.t.html#813)\]

::: desc
add a banner to the active display list
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[banner.t](../file/banner.t.html)\[[930](../source/banner.t.html#930)\]

::: desc
receive RESTORE/UNDO notification
:::

[]{#removeBanner}

`removeBanner (win)`

[banner.t](../file/banner.t.html)\[[899](../source/banner.t.html#899)\]

::: desc
remove a banner from the active list
:::

[]{#restoreDisplayState}

`restoreDisplayState (initing)`

[banner.t](../file/banner.t.html)\[[943](../source/banner.t.html#943)\]

::: desc
Restore the saved banner display state, so that the banner layout looks
the same as it did when we saved the persistent state. This should be
called after restoring a saved state, undoing to a savepoint, or
initializing (when first starting the game or when restarting).
:::

[]{#skipDescendants}

`skipDescendants (idx)`

[banner.t](../file/banner.t.html)\[[872](../source/banner.t.html#872)\]

::: desc
Skip all descendants of the window at the given index.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
