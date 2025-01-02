---
layout: docs
---
<span class="title">travel.t</span><span class="type">file</span>

[source file](../source/travel.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
room.t This module forms part of the adv3Lite library (c) 2012-13 Eric
Eve



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`CompassDirection`](../object/CompassDirection.html)[`Direction`](../object/Direction.html)[`Door`](../object/Door.html)[`Region`](../object/Region.html)[`Room`](../object/Room.html)[`ShipboardDirection`](../object/ShipboardDirection.html)[`TravelBarrier`](../object/TravelBarrier.html)[`TravelConnector`](../object/TravelConnector.html)[`UnlistedProxyConnector`](../object/UnlistedProxyConnector.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`aftDir`](../object/aftDir.html)[`downDir`](../object/downDir.html)[`eastDir`](../object/eastDir.html)[`foreDir`](../object/foreDir.html)[`inDir`](../object/inDir.html)[`northDir`](../object/northDir.html)[`northeastDir`](../object/northeastDir.html)[`northwestDir`](../object/northwestDir.html)[`outDir`](../object/outDir.html)[`portDir`](../object/portDir.html)[`regionPreinit`](../object/regionPreinit.html)[`southDir`](../object/southDir.html)[`southeastDir`](../object/southeastDir.html)[`southwestDir`](../object/southwestDir.html)[`starboardDir`](../object/starboardDir.html)[`upDir`](../object/upDir.html)[`westDir`](../object/westDir.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`inherited`](#inherited)[`inherited`](#inherited)[`nonTravel`](#nonTravel)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="inherited"></span>

`inherited ( )`

[travel.t](../file/travel.t.html)\[[1775](../source/travel.t.html#1775)\]



Carry out the inherited handling



<span id="inherited"></span>

`inherited ( )`

[travel.t](../file/travel.t.html)\[[1890](../source/travel.t.html#1890)\]



Carry out the inherited handling



<span id="nonTravel"></span>

`nonTravel (loc, dir)`

[travel.t](../file/travel.t.html)\[[2237](../source/travel.t.html#2237)\]



Function to handle what will probably be non-travel in a direction that
doesn't point to exit. The loc parameter specifies the room we're
attempting travel from. For use as a common routine called by
TravelAction, PushTravelDir and UnlistedProxyConnnector. \*.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


