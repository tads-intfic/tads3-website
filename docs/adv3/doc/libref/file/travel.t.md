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

<div class="fdesc">

TADS 3 Library - travel

This module defines the parts of the simulation model related to travel:
rooms and other locations, directions, passages.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`AskConnector`](../object/AskConnector.html)`  `[`AutoClosingDoor`](../object/AutoClosingDoor.html)`  `[`BasicBed`](../object/BasicBed.html)`  `[`BasicChair`](../object/BasicChair.html)`  `[`BasicDoor`](../object/BasicDoor.html)`  `[`BasicLocation`](../object/BasicLocation.html)`  `[`BasicPlatform`](../object/BasicPlatform.html)`  `[`Bed`](../object/Bed.html)`  `[`Booth`](../object/Booth.html)`  `[`Chair`](../object/Chair.html)`  `[`CompassDirection`](../object/CompassDirection.html)`  `[`DarkRoom`](../object/DarkRoom.html)`  `[`DeadEndConnector`](../object/DeadEndConnector.html)`  `[`DefaultAskConnector`](../object/DefaultAskConnector.html)`  `[`DefaultWall`](../object/DefaultWall.html)`  `[`Direction`](../object/Direction.html)`  `[`Door`](../object/Door.html)`  `[`Enterable`](../object/Enterable.html)`  `[`EntryPortal`](../object/EntryPortal.html)`  `[`Exitable`](../object/Exitable.html)`  `[`ExitOnlyPassage`](../object/ExitOnlyPassage.html)`  `[`ExitPortal`](../object/ExitPortal.html)`  `[`FakeConnector`](../object/FakeConnector.html)`  `[`FakeDestination`](../object/FakeDestination.html)`  `[`Floor`](../object/Floor.html)`  `[`Floorless`](../object/Floorless.html)`  `[`FloorlessRoom`](../object/FloorlessRoom.html)`  `[`HiddenDoor`](../object/HiddenDoor.html)`  `[`HighNestedRoom`](../object/HighNestedRoom.html)`  `[`NestedRoom`](../object/NestedRoom.html)`  `[`NestedRoomFloor`](../object/NestedRoomFloor.html)`  `[`NominalPlatform`](../object/NominalPlatform.html)`  `[`NoTravelMessage`](../object/NoTravelMessage.html)`  `[`OneWayRoomConnector`](../object/OneWayRoomConnector.html)`  `[`OutdoorRoom`](../object/OutdoorRoom.html)`  `[`Passage`](../object/Passage.html)`  `[`PathPassage`](../object/PathPassage.html)`  `[`Platform`](../object/Platform.html)`  `[`PushTravelBarrier`](../object/PushTravelBarrier.html)`  `[`PushTraveler`](../object/PushTraveler.html)`  `[`RelativeDirection`](../object/RelativeDirection.html)`  `[`Room`](../object/Room.html)`  `[`RoomAutoConnector`](../object/RoomAutoConnector.html)`  `[`RoomConnector`](../object/RoomConnector.html)`  `[`RoomPart`](../object/RoomPart.html)`  `[`RoomPartItem`](../object/RoomPartItem.html)`  `[`SecretDoor`](../object/SecretDoor.html)`  `[`Shipboard`](../object/Shipboard.html)`  `[`ShipboardDirection`](../object/ShipboardDirection.html)`  `[`ShipboardRoom`](../object/ShipboardRoom.html)`  `[`Stairway`](../object/Stairway.html)`  `[`StairwayDown`](../object/StairwayDown.html)`  `[`StairwayUp`](../object/StairwayUp.html)`  `[`ThroughPassage`](../object/ThroughPassage.html)`  `[`TravelBarrier`](../object/TravelBarrier.html)`  `[`TravelConnector`](../object/TravelConnector.html)`  `[`TravelConnectorLink`](../object/TravelConnectorLink.html)`  `[`Traveler`](../object/Traveler.html)`  `[`TravelMessage`](../object/TravelMessage.html)`  `[`TravelMessageHandler`](../object/TravelMessageHandler.html)`  `[`TravelPushable`](../object/TravelPushable.html)`  `[`TravelWithMessage`](../object/TravelWithMessage.html)`  `[`UnlistedProxyConnector`](../object/UnlistedProxyConnector.html)`  `[`Vehicle`](../object/Vehicle.html)`  `[`VehicleBarrier`](../object/VehicleBarrier.html)`  `[`VerticalDirection`](../object/VerticalDirection.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`aftDirection`](../object/aftDirection.html)`  `[`askTravelDown`](../object/askTravelDown.html)`  `[`askTravelIn`](../object/askTravelIn.html)`  `[`askTravelOut`](../object/askTravelOut.html)`  `[`defaultCeiling`](../object/defaultCeiling.html)`  `[`defaultEastWall`](../object/defaultEastWall.html)`  `[`defaultFloor`](../object/defaultFloor.html)`  `[`defaultGround`](../object/defaultGround.html)`  `[`defaultNorthWall`](../object/defaultNorthWall.html)`  `[`defaultSky`](../object/defaultSky.html)`  `[`defaultSouthWall`](../object/defaultSouthWall.html)`  `[`defaultWestWall`](../object/defaultWestWall.html)`  `[`downDirection`](../object/downDirection.html)`  `[`eastDirection`](../object/eastDirection.html)`  `[`foreDirection`](../object/foreDirection.html)`  `[`inDirection`](../object/inDirection.html)`  `[`lightProbe`](../object/lightProbe.html)`  `[`nestedRoomOut`](../object/nestedRoomOut.html)`  `[`northDirection`](../object/northDirection.html)`  `[`northeastDirection`](../object/northeastDirection.html)`  `[`northwestDirection`](../object/northwestDirection.html)`  `[`noShipTravel`](../object/noShipTravel.html)`  `[`noTravel`](../object/noTravel.html)`  `[`noTravelDown`](../object/noTravelDown.html)`  `[`noTravelIn`](../object/noTravelIn.html)`  `[`noTravelOut`](../object/noTravelOut.html)`  `[`outDirection`](../object/outDirection.html)`  `[`portDirection`](../object/portDirection.html)`  `[`southDirection`](../object/southDirection.html)`  `[`southeastDirection`](../object/southeastDirection.html)`  `[`southwestDirection`](../object/southwestDirection.html)`  `[`starboardDirection`](../object/starboardDirection.html)`  `[`upDirection`](../object/upDirection.html)`  `[`westDirection`](../object/westDirection.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`infiniteLoop`](#infiniteLoop)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="infiniteLoop"></span>

`infiniteLoop ( )`

[travel.t](../file/travel.t.html)\[[15](../source/travel.t.html#15)\]

<div class="desc">

include the library header

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
