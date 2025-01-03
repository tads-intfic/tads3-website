---
layout: docs
---
<span class="title">Shipboard</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[4768](../source/travel.t.html#4768)\]

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



A shipboard room. This is a simple mix-in class: it can be used along
with any type of Room to indicate that this room is aboard a ship. When
a room is aboard a ship, the shipboard travel directions (port,
starboard, fore, aft) are allowed; these directions normally make no
sense.

This is a mix-in class rather than a Room subclass to allow it to be
used in conjunction with any other Room subclass. To make a room
shipboard, simply declare your room like this:

mainDeck: Shipboard, Room // etc

`class `**`Shipboard`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Shipboard`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Shipboard`**  
[`ShipboardRoom`](../object/ShipboardRoom.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isShipboard`](#isShipboard)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isShipboard"></span>

`isShipboard`

[travel.t](../file/travel.t.html)\[[4770](../source/travel.t.html#4770)\]



mark the location as being aboard ship



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


