---
layout: docs
---
<span class="title">bannerTracker</span><span class="type">object</span>

[banner.t](../file/banner.t.html)\[[811](../source/banner.t.html#811)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

The persistent banner tracker. This keeps track of the active banner
windows persistently. Whenever we save or restore the game's state, this
object will be saved or restored along with the state. When we restore a
previously saved state, we can look at this object to determine which
banners were active at the time the state was saved, and use this
information to restore the same active banners in the user interface.

This is a post-restore and post-undo object, so we're notified via our
execute() method whenever we restore a saved state using RESTORE or
UNDO. When we restore a saved state, we'll restore the banner display
conditions as they existed in the saved state.

**`bannerTracker`**` :   `[`PostRestoreObject`](../object/PostRestoreObject.html)[`PostUndoObject`](../object/PostUndoObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`bannerTracker`**  
[`PostRestoreObject`](../object/PostRestoreObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
[`PostUndoObject`](../object/PostUndoObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`activeBanners_`](#activeBanners_)

Inherited from `PostRestoreObject` :  
[`restoreCode`](../object/PostRestoreObject.html#restoreCode)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)





<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`addBanner`](#addBanner)[`execute`](#execute)[`removeBanner`](#removeBanner)[`restoreDisplayState`](#restoreDisplayState)[`skipDescendants`](#skipDescendants)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)





<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="activeBanners_"></span>

`activeBanners_`

[banner.t](../file/banner.t.html)\[[927](../source/banner.t.html#927)\]

<div class="desc">

The list of active banners. This is a list of BannerWindow objects,
stored in banner layout list order.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addBanner"></span>

`addBanner (win, parent, where, other)`

[banner.t](../file/banner.t.html)\[[813](../source/banner.t.html#813)\]

<div class="desc">

add a banner to the active display list

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[banner.t](../file/banner.t.html)\[[930](../source/banner.t.html#930)\]

<div class="desc">

receive RESTORE/UNDO notification

</div>

<span id="removeBanner"></span>

`removeBanner (win)`

[banner.t](../file/banner.t.html)\[[899](../source/banner.t.html#899)\]

<div class="desc">

remove a banner from the active list

</div>

<span id="restoreDisplayState"></span>

`restoreDisplayState (initing)`

[banner.t](../file/banner.t.html)\[[943](../source/banner.t.html#943)\]

<div class="desc">

Restore the saved banner display state, so that the banner layout looks
the same as it did when we saved the persistent state. This should be
called after restoring a saved state, undoing to a savepoint, or
initializing (when first starting the game or when restarting).

</div>

<span id="skipDescendants"></span>

`skipDescendants (idx)`

[banner.t](../file/banner.t.html)\[[872](../source/banner.t.html#872)\]

<div class="desc">

Skip all descendants of the window at the given index.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
