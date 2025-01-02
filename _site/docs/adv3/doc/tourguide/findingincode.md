<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Finding by moving<br />
</strong></td>
<td style="text-align: right;"><a href="wordgames.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="sightpresence+islisted.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
Finding concealed items can be implemented in code using the classes and
methods we have already seen, e.g. by moving an object from nil into the
player character's location when it is discovered. This is the technique
we'll use to find the dynamite. We'll assume that the dynamite is buried
in the sandy floor of the small cave. Since it's not obvious that one
should dig there, and the player can hardly be expected to try digging
in every location in the game, we'll drop a heavy hint by leaving a
spade leaning against the wall of the cave:  
  
spade : Thing 'spade' 'spade' @smallCave  
  "It's a good solid spade, with a stout wooden handle and sharp steel blade. "  
  initSpecialDesc = "A spade leans against the wall of the cave. "  
  verifyIobjDigWith { logicalRank(150, 'digging implement'); }  
;  
  
Note that the last line of this definition is simply a more compact way
of writing:  
  
iobjFor(DigWith)  
{  
  verify() { logicalRank(150, 'digging implement'); }  
}  
  
Having defined the digging implement, we need to define a floor that can
be dug in and will yield dynamite when dug. You will recall that we
start the [dynamite](dynamite.htm) in limbo (i.e. location = nil). Once
the dynamite is discovered, we do not want the player to find another
stick, unless the first one has been destroyed (by exploding). When it
is destroyed, the stick of dynamite is moved back into nil, which means
the player could then dig up another one from the small cave floor. This
is fine, since it prevents the game becoming unwinable should the player
allow his first stick of dynamite to detonate in the wrong place. It
would be good, however, to indicate that the second (and any subsequent)
stick of dynamite is 'another' one, and not the same one miraculously
reconstructed (even though, in the internal implementation, that's
precisely what it is). We'll want our sandy diggable floor to be a
replacement for the defaultFloor in the cave, so we'll derive it from
that:  
  
  
smallCaveFloor : defaultFloor  
  desc = "The floor of this cave is very sandy. "  
  dobjFor(DigWith)  
  {  
    verify() { }  
    action()  
    {  
      local another = (dynamite.moved ? 'another' : 'a' );  
      if(dynamite.isIn(nil))  
      {  
        "You uncover \<\<another\>\> stick of dynamite. ";  
        dynamite.moveInto(smallCave);  
      }  
      else  
        "You dig in the sand for a while but find nothing. ";  
    }  
  }  
;  
  
Finally, we need to amend our definition of smallCave so that it
incorporates our special floor:  
  
smallCave : DarkRoom 'Small Cave' 'the small cave'  
  "The only way out of this small**, sandy** cave is to the south. "  
  south : TravelMessage   
    {   
      -\> secretPassage  
      "You walk south for quite some way down a long tunnel. ";  
    }  
  **roomParts = static inherited - defaultFloor + smallCaveFloor    
**;   
  
  
