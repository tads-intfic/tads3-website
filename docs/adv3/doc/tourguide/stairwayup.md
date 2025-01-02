<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>StairwayUp : Stairway<br />
</strong></td>
<td style="text-align: right;"><a href="stairwaydown.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="travelwithmessage.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
We first need to add a minimal definition of the room in which we'll put
the bottom end of the ladder:  
  
mainCave: Room 'Large Cave'  
      "The flickering orange light from the blazing torch fixed to the wall   
      accentuates the naturally ruddy hues of this large, irregular cave,  
      which seems to be something of a major hub in the cave system. A  
      large rock rests against the wall to the north.   
      A sturdy steel ladder leading upwards. "  
      
    up = upLadder  
;  
  
The main thing to note here is that we point the up property of the room
to the upLadder object we're about to define, so that in can be
traversed either in response to an UP command, or in response to a CLIMB
(UP) LADDER command. We next define the basic upLadder object (using the
[Passage template](passagetemplate.htm)):  
  
+ upLadder : StairwayUp  -\>downLadder   
  'sturdy steel ladder' 'sturdy steel ladder'  
  "The ladder leads up through a hole in the ceiling. "  
;  
  
The one thing to note here is the use of the -\> in the template syntax
to link the upLadder to its masterObject, the corresponding
[StairwayDown](stairwaydown.htm), downLadder. The two Stairway objects
are now linked so that traversing one will take us to the location of
the other (we could equally well have done this the other way round by
having downLadder point to upLadder as its master object, although we
would *not* want both of them pointing to each other).  
  
Either way, our ladder will work fine, but now we want to add a
refinement. Remember when we defined the entranceTunnel
[RoomConnector](roomconnector.htm) we gave it a **blocked** property to
simulate the effect of a rockfall? Well, now we want to trigger the
rockfall the first time the PC climbs the ladder back to the
entranceCave. We could do this by overriding the stairwayUp's
noteTraversal method, perhaps along the following lines (using an
additional **climbed** property we define to make sure that the rockfall
occurs only once):  
  
+ upLadder :  StairwayUp  -\>downLadder   
  'sturdy steel ladder' 'sturdy steel ladder'  
  "The ladder leads up through a hole in the ceiling. "  
  **noteTraversal(traveler)   
  {   
    if(!climbed)  
    {  
      "As you climb the ladder you hear what sounds like a thunderous rockfall  
       up above. ";  
      entranceTunnel.blocked = true;         
      climbed = true;  
    }  
  }  
  climbed = nil**  
;  
  
There is no reason why we should not do it this way, but since we want
to explore as much of the library as possible, we'll next look at
another way of doing it using
[TravelWithMessage](travelwithmessage.htm).  
