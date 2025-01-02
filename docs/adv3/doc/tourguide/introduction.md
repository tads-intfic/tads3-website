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
href="startupcodegamemain.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="outdoorroom.htm">[Next]</a></td>
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
             [StairwayDown](stairwaydown.htm)  
         [StairwayUp](stairwayup.htm)  
  
      [ThroughPassage](throughpassage.htm)  
         [BasicDoor](basicdoor.htm)  
            [Door](door.htm)  
               [AutoClosingDoor](autoclosingdoor.htm)  
            [SecretDoor](secretdoor.htm)  
               [HiddenDoor](hiddendoor.htm)  
         [ExitOnlyPassage](exitonlypassage.htm)  
         [PathPassage](pathpassage.htm)  
   [RoomConnector](roomconnector.htm)  
      [OneWayRoomConnector](onewayroomconnector.htm)  
      [RoomAutoConnector](roomautoconnector.htm)  
         [Room](room.htm)  
            [DarkRoom](darkroom.htm)  
            [FloorlessRoom](floorlessroom.htm)  
            [OutdoorRoom](outdoorroom.htm)  
   [TravelMessage](travelmessage.htm)  
      [DeadEndConnector](deadendconnector.htm)  
      [NoTravelMessage](notravelmessage.htm)  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="42"></td>
<td>         <a href="fakeconnector.htm">FakeConnector</a>  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="42"></td>
<td>   <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="42"></td>
<td> <a href="askconnector.htm">AskConnector</a>  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Note that Passage also descends from Fixture, so that Passage and all
its subclasses represent physical game objects as well as connectors.
This is not the case with RoomConnector and its descendants or
TravelMessage and its.  
  
Note that TravelMessage also descends from
[TravelWithMessage](travelwithmessage.htm).  
  
There is also a [ShipBoardRoom](shipboardroom.htm) class that can be
used as a mix-in class for other kinds of room.  
  
Room and its subclasses have a number of methods and properties that it
is sometimes useful to override, these include:  
  
[atmosphereList](outdoorroom.htm)  
[brightness](secretdoor.htm)  
[destName](outdoorroom.htm)  
[enteringRoom](travelerarriving.htm)  
[roomAfterAction](roomxxxxaction.htm)  
[roomBeforeAction](roomxxxxaction.htm)  
[roomParts](roomparts.htm)  
  
  
