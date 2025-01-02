---
layout: docs
---
<span class="title">TravelWithMessage</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[2015](../source/travel.t.html#2015)\]

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



A mix-in class that can be added to objects that also inherit from
TravelConnector to add a message as the connector is traversed.

Note that this isn't itself a travel connector; it's just a class that
should be combined with TravelConnector or one of its subclasses. This
class should be in the superclass list before the
TravelConnector-derived superclass.

`class `**`TravelWithMessage`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TravelWithMessage`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`TravelWithMessage`**  
[`TravelMessage`](../object/TravelMessage.html)  
[`DeadEndConnector`](../object/DeadEndConnector.html)  
[`NoTravelMessage`](../object/NoTravelMessage.html)  
[`FakeConnector`](../object/FakeConnector.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`npcTravelDesc`](#npcTravelDesc)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`noteTraversal`](#noteTraversal)[`showTravelDesc`](#showTravelDesc)[`travelDesc`](#travelDesc)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="npcTravelDesc"></span>

`npcTravelDesc`

[travel.t](../file/travel.t.html)\[[2033](../source/travel.t.html#2033)\]



My message to display when any non-player character traverses the
connector. If this is not overridden, no message will be displayed when
an NPC travels through the connector.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="noteTraversal"></span>

`noteTraversal (traveler)`

[travel.t](../file/travel.t.html)\[[2048](../source/travel.t.html#2048)\]



on traversing the connector, show our message



<span id="showTravelDesc"></span>

`showTravelDesc ( )`

[travel.t](../file/travel.t.html)\[[2039](../source/travel.t.html#2039)\]



Display my message. By default, we show one message for the player
character and another message for NPC's.



<span id="travelDesc"></span>

`travelDesc ( )`

[travel.t](../file/travel.t.html)\[[2022](../source/travel.t.html#2022)\]



My message to display when the player character traverses the connector.
This should be overridden with the custom message for the connector. By
default, if we're a Script, we'll invoke the script to show the next
message.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


