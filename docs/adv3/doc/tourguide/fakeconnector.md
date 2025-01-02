<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>FakeConnector : <a
href="notravelmessage.htm">NoTravelMessage</a><br />
</strong></td>
<td style="text-align: right;"><a href="outdoorroom.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="deadendconnector.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The room [outsideCave](outdoorroom.htm) was defined previously. Its
description refers to a valley to the north and a car park to the east.
We do not want the Player Character to go wandering off in those
directions, but there should be a reasonable response to any attempts to
do so; in particular the game should respond with a sensible message if
the player types the commands EAST or NORTH. The FakeConnector is just
the job for this sort of situation, where we want to provide a soft
boundary. The two FakeConnectors to be added to the room definition are
shown in bold.  
  
outsideCave : OutdoorRoom 'Parser Valley' 'Parser Valley'  
  "To the north stretches the broad green Parser Valley under a clear blue sky,   
   past a small car park lying just off to the east. The main feature of  
   interest round here is the notorious Eerhtsdat Caves, the entrance to which  
   lies just to the south, marked by a large blue sign that proclaims, predictably  
   enough:\b\<FONT FACE='TADS-Typewriter' BGCOLOR=BLUE COLOR=WHITE\>  
   ENTRANCE TO THE\nEERHTSDAT CAVES\</FONT\>\n"  
   **north : FakeConnector { "You've come here to explore the caves, not the valley. " }     
   east : FakeConnector { "You've only just come from there -- you've no reason to go back just now. " }  
**   atmosphereList : ShuffledEventList {  
   \[  
     'A flight of birds disappears off to the west. ',  
     {: "\nA \<\<one of\>\>small\<\<or\>\>large\<\<at random\>\>  
       \<\<one
of\>\>green\<\<or\>\>red\<\<or\>\>blue\<\<or\>\>black\<\<or\>\>white\<\<at
random\>\> car  
       pulls out of the car park and drives off to the north. " },  
     'An aeroplane flies far overhead. ',  
     nil  
   \]   
   }  
;  
  
At this point you can compile and run the game to test that it is
working properly.  
  
Note that we once again use a template to abbreviate the business of
writing the FakeConnector definition. The property in double quotes that
we are defining for each FakeConnector here is in fact its travelDesc
property (defined by the [NoTravelMessage
template](notravelmessagetemplate.htm), which FakeConnector inherits).
This is called by the connector's showTravelDesc() method only for the
Player Character (so that, for example, the message will not be shown
repeatedly if the PC is being accompanied by one or more NPCs), while
showTravelDesc() is in turn invoked by noteTraversal(traveler). The last
of these methods - noteTraversal - is defined for all TravelConnectors,
whereas the other two - travelDesc and showTravelDesc - are defined on
[TravelWithMessage](travelwithmessage.htm) and classes that descend from
it.  
  
The FakeConnector works very like the
[NoTravelMessage](notravelmessage.htm). The only difference is that a
direction attached to a NoTravelMessage won't be included in a list of
exits (e.g. in response to an EXITS command, or in the status line),
whereas that attached to a FakeConnector will. A NoTravelMessage should
therefore be used to explain why travel is not possible in a direction
in which it's reasonably apparent that travel isn't possible, while a
FakeConnector should be used to make travel apparently possible in a
direction in which it isn't really, e.g.. to provide a "soft boundary"
to the map.  
  
  
