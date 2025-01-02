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
<td style="text-align: left;"><strong>ExitOnlyPassage : <a
href="throughpassage.html">ThroughPassage</a><br />
</strong></td>
<td style="text-align: right;"><a
href="notravelmessage.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="autoclosingdoor.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An ExitOnlyPassage is designed for one-way travel into a room, the other
side of a passage through which you can pass but by which you cannot
return. For example, imagine you have a slippery chute leading down from
one cave to another below it. In the upper cave the chute might be
represented by a ThroughPassage that the Player Character can enter; in
the lower cave, the other end of the chute, which ejects the PC into the
lower cave but can't be climbed back up could be implemented as an
ExitOnlyPassage. To illustrate this we'll add four more objects: a round
cave to the west of mainCave to act as the start of the chute, a long
cave underneath to act as the destination of the chute, and the two
halves of the chute, one in each location:  
  
roundCave : DarkRoom 'Round Cave' 'the round cave'  
  "This round, rocky cave has a narrow exit to the east and a strange square  
   hole in the floor. "  
  east = mainCave  
  down = squareHole    
;  
  
+ squareHole : TravelWithMessage, ThroughPassage 'square hole/chute' 'square hole'  
  "The hole is just about large enough for one person to fit through. A glint  
   of something metallic can be seen just through the hole. "  
  travelDesc = "You find yourself sliding down a long, slippery metal chute;  
   After a short ride you are ejected into another cave. "   
;  
  
longCave : DarkRoom 'Long Cave' 'the long cave'  
  "This long narrow cave runs from east to west between rough walls and   
   a low ceiling. There is a large square hole in the west wall, while  
   a ladder fixed to the wall at the east end runs up to a trapdoor  
   set in the ceiling. Some words have been crudely scratched on the  
   south wall. "  
   west : NoTravelMessage { "You can't climb back up the chute, it's  
    too slippery. " }  
;  
  
+ ExitOnlyPassage -\> squareHole 'square hole/chute' 'square hole'  
  "Through the square hole you can see the bottom end of the shiny metal  
   chute, which is too slippery to climb back up. "  
;  
  
One other thing we need to add before this can be tested is  
  
west = roundCave  
  
to mainCave.  
  
Note that we don't need to give the ExitOnlyPassage a name; we simply
point it to the squareHole with the -\> symbol in the [Passage
template](passagetemplate.html) to connect the two halves of the chute
together; in the [Passage template](passagetemplate.html) the -\>
references the masterObject property. Note also the use of a
[NoTravelMessage](notravelmessage.html) to explain why we can't climb
back up the chute if we try to go west, and of the
[TravelWithMessage](travelwithmessage.html) mix-in class used with the
[ThroughPassage](throughpassage.html) to provide a description of the
descent via the chute.  
  
You can compile and run this, but you'll need to use MEGA or FIAT LUX to
see what you're doing in the dark rooms.  
