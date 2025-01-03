---
layout: docs
---
<span class="title">sceneManager</span><span class="type">object</span>

[scene.t](../file/scene.t.html)\[[16](../source/scene.t.html#16)\]

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



The sceneManager object is used to control the scene-switching and
execution mechanism.

**`sceneManager`**` :   `[`InitObject`](../object/InitObject.html) [`Event`](../object/Event.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`sceneManager`**  
[`InitObject`](../object/InitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
[`Event`](../object/Event.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`eventOrder`](#eventOrder) [`execBeforeMe`](#execBeforeMe)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

Inherited from `Event` :  
[`captureText`](../object/Event.html#captureText) [`executed`](../object/Event.html#executed) [`interval_`](../object/Event.html#interval_) [`isPromptDaemon`](../object/Event.html#isPromptDaemon) [`nextRunTime`](../object/Event.html#nextRunTime) [`obj_`](../object/Event.html#obj_) [`prop_`](../object/Event.html#prop_) [`senseObj_`](../object/Event.html#senseObj_) [`senseProp_`](../object/Event.html#senseProp_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute) [`executeEvent`](#executeEvent) [`notifyAfter`](#notifyAfter) [`notifyBefore`](#notifyBefore)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

Inherited from `Event` :  
[`callMethod`](../object/Event.html#callMethod) [`construct`](../object/Event.html#construct) [`delayEvent`](../object/Event.html#delayEvent) [`eventMatches`](../object/Event.html#eventMatches) [`getNextRunTime`](../object/Event.html#getNextRunTime) [`removeEvent`](../object/Event.html#removeEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="eventOrder"></span>

`eventOrder`<span class="rem">OVERRIDDEN</span>

[scene.t](../file/scene.t.html)\[[34](../source/scene.t.html#34)\]



Run the executeEvent() method for the first time to set up any scenes
that should be active at the start of play.



<span id="execBeforeMe"></span>

`execBeforeMe`<span class="rem">OVERRIDDEN</span>

[scene.t](../file/scene.t.html)\[[69](../source/scene.t.html#69)\]



If the scene is happening, call its eachTurn() method



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[scene.t](../file/scene.t.html)\[[17](../source/scene.t.html#17)\]



*no description available*



<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[scene.t](../file/scene.t.html)\[[39](../source/scene.t.html#39)\]



The executeEvent() method is run each turn to drive the Scenes mechanism



<span id="notifyAfter"></span>

`notifyAfter ( )`

[scene.t](../file/scene.t.html)\[[82](../source/scene.t.html#82)\]



*no description available*



<span id="notifyBefore"></span>

`notifyBefore ( )`

[scene.t](../file/scene.t.html)\[[72](../source/scene.t.html#72)\]



Run the beforeAction method on every currently active Scene
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


