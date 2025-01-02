<span class="title">tipManager</span><span class="type">object</span>

[tips.t](../file/tips.t.html)\[[23](../source/tips.t.html#23)\]

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

The tip manager keeps track of which tips we have shown. Since we don't
want to unnecessarily show any tips more than once, we store this
information both transiently (in the tipManager) and persistently (in
the tip objects themselves). This should make sure that we at least
cover these two types of cases:

\- The player sees a tip, then restarts, undos or restores to an earlier
position. - The player sees a tip, saves, then resumes play at some
later time.

`transient `**`tipManager`**` :   `[`InitObject`](../object/InitObject.html)`   `[`PostRestoreObject`](../object/PostRestoreObject.html)`   `[`PostUndoObject`](../object/PostUndoObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`tipManager`**  
`         `[`InitObject`](../object/InitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
`         `[`PostRestoreObject`](../object/PostRestoreObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
`         `[`PostUndoObject`](../object/PostUndoObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`pendingTips`](#pendingTips)`  `[`shownTips`](#shownTips)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

Inherited from `PostRestoreObject` :  
` `[`restoreCode`](../object/PostRestoreObject.html#restoreCode)`  `

` `

` `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execute`](#execute)`  `[`showTips`](#showTips)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

` `

` `

` `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="pendingTips"></span>

`pendingTips`

[tips.t](../file/tips.t.html)\[[76](../source/tips.t.html#76)\]

<div class="desc">

a vector of tips to be displayed before the next prompt

</div>

<span id="shownTips"></span>

`shownTips`

[tips.t](../file/tips.t.html)\[[87](../source/tips.t.html#87)\]

<div class="desc">

A transient list of shown tips. Note that this must be a list and not a
vector. When updating a list, we actually replace it with a new list,
since lists are immutable. This is a transient change - it affects only
the value of the shownTips property. Updating a vector, however,
modifies the vector itself and leaves the property with the same
reference. A vector itself is always persistent, so this change would be
lost after E.G. a restore.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[tips.t](../file/tips.t.html)\[[45](../source/tips.t.html#45)\]

<div class="desc">

update tip information after a restore, restart or undo

</div>

<span id="showTips"></span>

`showTips ( )`

[tips.t](../file/tips.t.html)\[[28](../source/tips.t.html#28)\]

<div class="desc">

Show pending tips. This is called by a PromptDaemon before each new
round of input.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
