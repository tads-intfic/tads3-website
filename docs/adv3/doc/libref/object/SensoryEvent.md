---
layout: docs
---
<span class="title">SensoryEvent</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[758](../source/objects.t.html#758)\]

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



Sensory Event. This is an object representing a transient event, such as
a sound, visual display, or odor, to which some objects observing the
event might react.

A sensory event differs from a sensory emanation in that an emanation is
ongoing and passive, while an event is isolated in time and actively
notifies observers.

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



[`notifyProp`](#notifyProp) [`sense`](#sense)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`triggerEvent`](#triggerEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="notifyProp"></span>

`notifyProp`

[objects.t](../file/objects.t.html)\[[830](../source/objects.t.html#830)\]



the notification property - this is the property we'll invoke on each
observer to notify it of the event



<span id="sense"></span>

`sense`

[objects.t](../file/objects.t.html)\[[824](../source/objects.t.html#824)\]



the sense in which the event is observable



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="triggerEvent"></span>

`triggerEvent (source)`

[objects.t](../file/objects.t.html)\[[773](../source/objects.t.html#773)\]



Trigger the event. This routine must be called at the time when the
event is to occur. We'll notify every interested observer capable of
sensing the event that the event is occurring, so observers can take
appropriate action in response to the event.

'source' is the source object - this is the physical object in the
simulation that is causing the event. For example, if the event is the
sound of a phone ringing, the phone would probably be the source object.
The source is used to determine which observers are capable of detecting
the event: an observer must be able to sense the source object in the
appropriate sense to be notified of the event.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


