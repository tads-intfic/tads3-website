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

**`bannerTracker`**` :   `[`PostRestoreObject`](../object/PostRestoreObject.html) [`PostUndoObject`](../object/PostUndoObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`bannerTracker`**  
[`PostRestoreObject`](../object/PostRestoreObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
[`PostUndoObject`](../object/PostUndoObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`activeBanners_`](#activeBanners_)

Inherited from `PostRestoreObject` :  
[`restoreCode`](../object/PostRestoreObject.html#restoreCode)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addBanner`](#addBanner) [`execute`](#execute) [`removeBanner`](#removeBanner) [`restoreDisplayState`](#restoreDisplayState) [`skipDescendants`](#skipDescendants)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)





<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="activeBanners_"></span>

`activeBanners_`

[banner.t](../file/banner.t.html)\[[927](../source/banner.t.html#927)\]



The list of active banners. This is a list of BannerWindow objects,
stored in banner layout list order.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addBanner"></span>

`addBanner (win, parent, where, other)`

[banner.t](../file/banner.t.html)\[[813](../source/banner.t.html#813)\]



add a banner to the active display list



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[banner.t](../file/banner.t.html)\[[930](../source/banner.t.html#930)\]



receive RESTORE/UNDO notification



<span id="removeBanner"></span>

`removeBanner (win)`

[banner.t](../file/banner.t.html)\[[899](../source/banner.t.html#899)\]



remove a banner from the active list



<span id="restoreDisplayState"></span>

`restoreDisplayState (initing)`

[banner.t](../file/banner.t.html)\[[943](../source/banner.t.html#943)\]



Restore the saved banner display state, so that the banner layout looks
the same as it did when we saved the persistent state. This should be
called after restoring a saved state, undoing to a savepoint, or
initializing (when first starting the game or when restarting).



<span id="skipDescendants"></span>

`skipDescendants (idx)`

[banner.t](../file/banner.t.html)\[[872](../source/banner.t.html#872)\]



Skip all descendants of the window at the given index.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


