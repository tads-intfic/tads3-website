---
layout: docs
---
<span class="title">SensoryEvent</span><span class="type">class</span>

[sensory.t](../file/sensory.t.html)\[[443](../source/sensory.t.html#443)\]

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



A SensoryEvent is a brief event in time, such as a sudden noise, to
which other actors or objects in the vicinity may react. \[DEFINED IN
SENSORY EXTENSION\]

`class `**`SensoryEvent`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SensoryEvent`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`SensoryEvent`**  
[`SightEvent`](../object/SightEvent.html)  
[`SmellEvent`](../object/SmellEvent.html)  
[`SoundEvent`](../object/SoundEvent.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`notifyProp`](#notifyProp)[`remoteProp`](#remoteProp)[`senseProp`](#senseProp)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`remoteList`](#remoteList)[`triggerEvent`](#triggerEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="notifyProp"></span>

`notifyProp`

[sensory.t](../file/sensory.t.html)\[[484](../source/sensory.t.html#484)\]



A property pointer to the property on each notified object that needs to
be executed when it's notified of this SensoryEvent (e.g.
&notifySoundEvent). \[DEFINED IN SENSORY EXTENSION\]



<span id="remoteProp"></span>

`remoteProp`

[sensory.t](../file/sensory.t.html)\[[498](../source/sensory.t.html#498)\]



The property pointer to the property of Room defining which list of
rooms also needs to be checked for remote items that might sense this
event (e.g. &audibleRooms). \[DEFINED IN SENSORY EXTENSION\]



<span id="senseProp"></span>

`senseProp`

[sensory.t](../file/sensory.t.html)\[[491](../source/sensory.t.html#491)\]



The property pointer relating to the Q method that needs to be called to
determined whethet this SensoryEvent can be sensed (e.g. &canHear).
\[DEFINED IN SENSORY EXTENSION\]



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="remoteList"></span>

`remoteList (obj)`

[sensory.t](../file/sensory.t.html)\[[501](../source/sensory.t.html#501)\]



Construct a list of notifiable objects in remote locations \[DEFINED IN
SENSORY EXTENSION\]



<span id="triggerEvent"></span>

`triggerEvent (obj)`

[sensory.t](../file/sensory.t.html)\[[450](../source/sensory.t.html#450)\]



We call the trigger event method of a SensoryEvent to simulate the
occurrence of that event. The obj parameter is the object associated
with the event, for example the source of a sudden explosion. \[DEFINED
IN SENSORY EXTENSION\]





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


