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
<td style="text-align: left;"><strong>AutoClosingDoor : <a
href="door.html">Door</a><br />
</strong></td>
<td style="text-align: right;"><a
href="exitonlypassage.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="onewayroomconnector.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
So far we've provided a way of getting into the long cave, but no way of
getting out. Let's suppose that the way back up is also a one-way trip,
via a trapdoor in the ceiling that closes each time you go through it.
This would be a good example of an AutoClosingDoor. The other (top) side
of the trapdoor could be another [ExitOnlyPassage](exitonlypassage.html),
since we don't want to allow the trapdoor to be opened from the upper
cave ( we want to force the player to use the chute we've so carefully
implemented). We'll have the trapdoor open into yet another new room, a
square cave to the east of mainCave:  
  
longCave : DarkRoom 'Long Cave' 'the long cave'  
  "This long narrow cave runs from east to west between rough walls and   
   a low ceiling. There is a large square hole in the west wall, while  
   a ladder fixed to the wall at the east end runs up to a trapdoor  
   set in the ceiling. Some words have been crudely scratched on the  
   south wall. "  
  west : NoTravelMessage { "You can't climb back up the chute, it's  
    too slippery. " }  
  **up = longCaveLadder**   
;  
  
+ ExitOnlyPassage -\> squareHole 'square hole/chute' 'square hole'  
  "Through the square hole you can see the bottom end of the shiny metal  
   chute, which is too slippery to climb back up. "  
;  
  
+ longCaveLadder: StairwayUp 'ladder' 'ladder'  
  "The ladder fixed to the east wall leads up to a trapdoor in the ceiling. "  
  dobjFor(TravelVia) remapTo(TravelVia, trapdoor)  
;  
  
+ trapdoor : AutoClosingDoor 'trap trapdoor/door' 'trapdoor';  
  
squareCave : DarkRoom 'Square Cave' 'the square cave'  
   "This large square cave boasts a solitary exit to the west. "  
   west = mainCave  
;  
  
+ ExitOnlyPassage -\> trapdoor 'trap trapdoor/door' 'trapdoor'  
  "You can hardly see the trapdoor from this side, and there is no means to  
   pull it open. "     
;  
  
The other thing to note here is the way we've handled the ladder. We've
made it a StairwayUp to allow it to be climbed, but it is actually the
trapdoor rather than the ladder that must be traversed to reach the
square cave above. There's no easy way to make the trapdoor the
destination of the ladder and the other side of the trapdoor the
destination of its underside. It's far easier to make traversing (i.e.
climbing) the ladder equivalent to traversing (i.e. going through) the
trapdoor. However such actions may be described by the player (CLIMB
LADDER, CLIMB UP LADDER, ENTER TRAPDOOR, GO THROUGH TRAPDOOR) they'll
end up being mapped to TravelVia actions internally. We can therefore
simply redirect a TravelVia action on the ladder to a TravelVia action
on the trapdoor, which we do using the dobjFor and remapTo macros.  
  
Don't forget to add east = squareCave to the definition of mainCave.
Then you can recompile and test the game once more.  
  
Here the trapdoor uses the [Thing template](thingtemplate.html) and the
ExitOnlyPassage the [Passage template](passagetemplate.html).  
  
There's another method on AutoClosingDoor, **reportAutoClose()**, which
can be customised if we want an AutoClosingDoor to report its automatic
closing in anything other than the default way. Suppose, for example,
that when the player character goes through the trapdoor, instead of the
standard "After you go through the trapdoor, it closes behind you" we
want it to say, "After you emerge through the trapdoor, it slams shut
behind you". You can achieve this by redefining the trapdoor thus:  
  
+ trapdoor : AutoClosingDoor 'trap trapdoor/door' 'trapdoor'  
  **reportAutoClose = "\<.p\>After {you/he} emerge{s} through the trapdoor, it slams  
   shut behind {it actor/him}. "  
**;  
  
If you want an AutoClosingDoor to close silently (i.e. without any
report at all), you can simply override reportAutoClose() to do
nothing.  
