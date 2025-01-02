---
layout: docs
---
<span class="title">PostRestoreObject</span><span class="type">class</span>

[actions.t](../file/actions.t.html)\[[194](../source/actions.t.html#194)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



PostRestoreObject - every instance of this class is notified, via its
execute() method, immediately after we restore the game.

`class `**`PostRestoreObject`**` :   `[`ModuleExecObject`](../object/ModuleExecObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PostRestoreObject`**  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`bannerTracker`](../object/bannerTracker.html) [`inputManager`](../object/inputManager.html) [`tipManager`](../object/tipManager.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`restoreCode`](#restoreCode)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec) [`execute`](../object/ModuleExecObject.html#execute)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="restoreCode"></span>

`restoreCode`

[actions.t](../file/actions.t.html)\[[217](../source/actions.t.html#217)\]



The "restore code," which is the (normally integer) value passed as the
second argument to restoreGame(). The restore code gives us some idea of
what triggered the restoration. By default, we define the following
restore codes:

1 - the system is restoring a game as part of interpreter startup,
usually because the user explicitly specified a game to restore on the
interpreter command line or via a GUI shell mechanism, such as
double-clicking on a saved game file from the desktop.

2 - the user is explicitly restoring a game via a RESTORE command.

Games and library extensions can use their own additional restore codes
in their calls to restoreGame().



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


