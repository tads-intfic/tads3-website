---
layout: docs
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Rooms and Connectors -
Overview<br />
</strong></td>
<td style="text-align: right;"><a
href="startupcodegamemain.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="outdoorroom.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
In the sections that follow we shall endeavour to make use of all the
main types of room and travel connector in the TADS 3 library.  
  
Rooms are locations in which actors and other objects may exist, and
between which actors may travel. Since travel is possible directly from
one Room to another, Rooms are also Travel Connectors. TravelConnectors
allow travel between Rooms: their class hierarchy is  
  
**TravelConnector**  
   Passage  
      Stairway  
             [StairwayDown](stairwaydown.html)  
         [StairwayUp](stairwayup.html)  
  
      [ThroughPassage](throughpassage.html)  
         [BasicDoor](basicdoor.html)  
            [Door](door.html)  
               [AutoClosingDoor](autoclosingdoor.html)  
            [SecretDoor](secretdoor.html)  
               [HiddenDoor](hiddendoor.html)  
         [ExitOnlyPassage](exitonlypassage.html)  
         [PathPassage](pathpassage.html)  
   [RoomConnector](roomconnector.html)  
      [OneWayRoomConnector](onewayroomconnector.html)  
      [RoomAutoConnector](roomautoconnector.html)  
         [Room](room.html)  
            [DarkRoom](darkroom.html)  
            [FloorlessRoom](floorlessroom.html)  
            [OutdoorRoom](outdoorroom.html)  
   [TravelMessage](travelmessage.html)  
      [DeadEndConnector](deadendconnector.html)  
      [NoTravelMessage](notravelmessage.html)  
         <a href="fakeconnector.html">FakeConnector</a>  
   
 <a href="askconnector.html">AskConnector</a>  

|     |     |
|-----|-----|
|     |     |

  
Note that Passage also descends from Fixture, so that Passage and all
its subclasses represent physical game objects as well as connectors.
This is not the case with RoomConnector and its descendants or
TravelMessage and its.  
  
Note that TravelMessage also descends from
[TravelWithMessage](travelwithmessage.html).  
  
There is also a [ShipBoardRoom](shipboardroom.html) class that can be
used as a mix-in class for other kinds of room.  
  
Room and its subclasses have a number of methods and properties that it
is sometimes useful to override, these include:  
  
[atmosphereList](outdoorroom.html)  
[brightness](secretdoor.html)  
[destName](outdoorroom.html)  
[enteringRoom](travelerarriving.html)  
[roomAfterAction](roomxxxxaction.html)  
[roomBeforeAction](roomxxxxaction.html)  
[roomParts](roomparts.html)  
  
  
