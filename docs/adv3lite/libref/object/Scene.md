---
layout: docs
---
<span class="title">Scene</span><span class="type">class</span>

[scene.t](../file/scene.t.html)\[[98](../source/scene.t.html#98)\],
[scenetopic.t](../file/scenetopic.t.html)\[[7](../source/scenetopic.t.html#7)\]

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



A Scene is an object that represents a slice of time that starts and
ends according to specified conditions, and which can define what
happens when it starts and ends and also what happens each turn when it
is happening.

*Modified in
[scenetopic.t](../file/scenetopic.t.html)\[[7](../source/scenetopic.t.html#7)\]:*  
Modifications to Scene for the SCENETOPIC EXTENSION

`class `**`Scene`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Scene`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`endedAt`](#endedAt) [`endsWhen`](#endsWhen) [`hasHappened`](#hasHappened) [`howEnded`](#howEnded) [`isHappening`](#isHappening) [`notifySingleActor`](#notifySingleActor) [`recurring`](#recurring) [`startedAt`](#startedAt) [`startsWhen`](#startsWhen) [`timesHappened`](#timesHappened)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`afterAction`](#afterAction) [`beforeAction`](#beforeAction) [`eachTurn`](#eachTurn) [`end`](#end) [`notifyActors`](#notifyActors) [`start`](#start) [`whenEnding`](#whenEnding) [`whenStarting`](#whenStarting)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="endedAt"></span>

`endedAt`

[scene.t](../file/scene.t.html)\[[129](../source/scene.t.html#129)\]



The turn this scene ended at



<span id="endsWhen"></span>

`endsWhen`

[scene.t](../file/scene.t.html)\[[110](../source/scene.t.html#110)\]



an expression or method that evaluates to something other than nil when
you want the scene to end



<span id="hasHappened"></span>

`hasHappened`

[scene.t](../file/scene.t.html)\[[185](../source/scene.t.html#185)\]



Flag to show whether this scene has ever happened.



<span id="howEnded"></span>

`howEnded`

[scene.t](../file/scene.t.html)\[[191](../source/scene.t.html#191)\]



A user defined flag showing how the scene ended



<span id="isHappening"></span>

`isHappening`

[scene.t](../file/scene.t.html)\[[123](../source/scene.t.html#123)\]



Is this scene currently taking place? (Game code should treat this as
read-only)



<span id="notifySingleActor"></span>

`notifySingleActor`

[scenetopic.t](../file/scenetopic.t.html)\[[73](../source/scenetopic.t.html#73)\]



Flag (for use with SceneTopic extension): do we want to trigger a
SceneTopic response from every actor the player char can talk to, or
only the first one we find? By default we assume we want a response from
only one actor. Note that the Actor notificationOrder property can be
defined so that we can select which Actor this will be (the one with the
lowest notificationOrder). \[SCENETOPIC EXTENSION\]



<span id="recurring"></span>

`recurring`

[scene.t](../file/scene.t.html)\[[117](../source/scene.t.html#117)\]



Normally a scene will only occur once. Set recurring to true if you want
the scene to start again every time its startsWhen condition is true.



<span id="startedAt"></span>

`startedAt`

[scene.t](../file/scene.t.html)\[[126](../source/scene.t.html#126)\]



The turn this scene started at



<span id="startsWhen"></span>

`startsWhen`

[scene.t](../file/scene.t.html)\[[104](../source/scene.t.html#104)\]



An expression or method that evaluates to true when you want the scene
to start



<span id="timesHappened"></span>

`timesHappened`

[scene.t](../file/scene.t.html)\[[188](../source/scene.t.html#188)\]



The numbter of times this scene has happened.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="afterAction"></span>

`afterAction ( )`

[scene.t](../file/scene.t.html)\[[203](../source/scene.t.html#203)\]



This method is called on every active Scene just after an action has
taken place. By default we do nothing here.



<span id="beforeAction"></span>

`beforeAction ( )`

[scene.t](../file/scene.t.html)\[[197](../source/scene.t.html#197)\]



This method is called on every active Scene just before an action is
about to take place. By default we do nothing here.



<span id="eachTurn"></span>

`eachTurn ( )`

[scene.t](../file/scene.t.html)\[[182](../source/scene.t.html#182)\]



Routine to execute every turn this scene is in progress.



<span id="end"></span>

`end ( )`

[scene.t](../file/scene.t.html)\[[154](../source/scene.t.html#154)\],
[scenetopic.t](../file/scenetopic.t.html)\[[11](../source/scenetopic.t.html#11)\]



The method executed when this Scene ends. Game code should normally
override whenStarting() rather than this method.

*Modified in
[scenetopic.t](../file/scenetopic.t.html)\[[11](../source/scenetopic.t.html#11)\]:*  
Modified for SceneTopic Extension to notify any actor that we can talk
to that this scene has ended.



<span id="notifyActors"></span>

`notifyActors (prop)`

[scenetopic.t](../file/scenetopic.t.html)\[[32](../source/scenetopic.t.html#32)\]



Notify any actor that we can talk to that this scene has started



<span id="start"></span>

`start ( )`

[scene.t](../file/scene.t.html)\[[135](../source/scene.t.html#135)\],
[scenetopic.t](../file/scenetopic.t.html)\[[23](../source/scenetopic.t.html#23)\]



The method executed when this Scene starts. Game code should normally
override whenStarting() rather than this method.

*Modified in
[scenetopic.t](../file/scenetopic.t.html)\[[23](../source/scenetopic.t.html#23)\]:*  
Modified for SceneTopic Extension to notify any actor that we can talk
to that this scene has started.



<span id="whenEnding"></span>

`whenEnding ( )`

[scene.t](../file/scene.t.html)\[[179](../source/scene.t.html#179)\]



Routine to execute when this scene ends



<span id="whenStarting"></span>

`whenStarting ( )`

[scene.t](../file/scene.t.html)\[[176](../source/scene.t.html#176)\]



Routine to execute when this scene starts





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


