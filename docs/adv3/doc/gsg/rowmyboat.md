---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>



[\[Main\]](index.html)  
*[\[Previous\]](lettherebelight.html)   [\[Next\]](goingshopping.html)*

## Row My Boat

Leaving the battery so near the torch perhaps makes things a little too
easy. For the final complication we'll oblige Heidi to go and buy a
battery, and just to make things interesting the way to the shop will be
by rowing a boat along the stream (now you know what the oars are for).
Since we're going to row this boat, we once again need to define a new
verb:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

DefineTAction(Row);  
  
VerbRule(Row)  
  'row' singleDobj  
  : RowAction  
  verbPhrase = 'row/rowing (what)'  
;  
  
modify Thing  
  dobjFor(Row)   
  {  
    preCond = \[touchObj\]  
    verify() { illogical('{You/he} can\\t row {that dobj/him}'); }  
  }  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

There is a Vehicle class (a subclass of NestedRoom), but this is not
really what we want for our boat. Instead we'll use three different
objects to define our boat; a Heavy, Enterable to represent the boat as
seen from the outside, an OutdoorRoom to represent its interior, and an
anonymous object placed inside the OutdoorRoom to be the object of the
Row action. This is how we fit the three together:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

boat : Heavy, Enterable -\> insideBoat 'rowing boat' 'rowing boat'  
  @cottageGarden  
  "It's a small rowing boat. "  
  specialDesc = "A small rowing boat floats on the stream,   
      just by the bank. "  
  useSpecialDesc { return true; }  
  dobjFor(Board) asDobjFor(Enter)    
;  
  
insideBoat : OutdoorRoom  
  name = ('In the boat (by '+ boat.location.name + ')')  
  desc = "The boat is a plain wooden rowing dinghy with a single   
   wooden seat. It is floating on the stream just by the   
  \<\<boat.location.name\>\>. "    
  out = (boat.location)  
;  
  
+ Fixture 'plain wooden rowing boat/dinghy' 'boat'  
  "\<\<insideBoat.desc\>\>"  
  dobjFor(Take)  
  {  
    verify() {illogical('{You/he} can\\t take the boat - {you\\re/he\\s} in  
      it!'); }  
  }   
    
  dobjFor(Row)  
  {  
    verify() {}  
    check()  
    {  
     if(!oars.isHeldBy(gActor))  
     {  
      "{You/he} need to be holding the oars before you can row this boat. ";  
        exit;  
     }  
    }  
    action()  
    {  
      "You row the boat along the stream and under a low bridge, finally   
        arriving at ";  
      if(boat.isIn(jetty))  
      {  
        "the bottom of the cottage garden.\<.p\> ";  
        boat.moveInto(cottageGarden);          
      }  
      else  
      {  
        "the side of a small wooden jetty.\<.p\> ";  
        boat.moveInto(jetty);  
      }  
      nestedAction(Look);  
    }  
  }  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

There is little here that is really new; we have simply fitted existing
things together in a new way. Perhaps the most complex of these is the
way we have defined the name property of insideBoat. We have taken
advantage of the fact that a property can contain an expression (in
parentheses) to build up a name that shows not only that the player
character is the boat but where the boat is. We also use
\<\<boat.location.name\>\> in the description of the boat's interior, so
that this also reports not only what the boat looks like but where it
is. Finally, we set the out property of insideBoat to boat.location, so
that whenever we go out from insideBoat we end up wherever the boat
object is. We can thus achieve the actual travel by moving the boat
object around. Finally, we use the specialDesc property of the boat
object to display a message that the boat is floating on the stream, and
define the useSpecialDesc method always to return true so that
specialDesc is always used.  
  
The code for handling the Row command first checks that the actor is
holding the oars. If so, then it checks which of two locations the boat
is currently in and moves it to the other, displaying a suitable message
to show the outcome, and then performing a nested Look action to show
that we've arrived at a new location.  
  
One could almost do away with the anonymous object contained within
insideBoat, by defining vocabWords = 'boat' on insideBoat itself and
moving the handling of for Row and Take to insideBoat. The main reason
for not doing this is that one gets quite a bizarre message if one types
the command **row** without a direct object and the parser helpfully
selects the insideBoat object.  
  
There's one other minor refinement you may want to include on this boat.
If you get in the boat and then sit or lie down, you'll find that you're
described as being in the boat sitting or lying on the ground. The way
to fix this is to give the boat a more appropriate floor object:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

boatBottom : Floor 'floor/bottom/(boat)' 'bottom of the boat'  
;  
  
insideBoat : OutdoorRoom  
  name = ('In the boat (by '+ boat.location.name + ')')  
  desc = "The boat is a plain wooden rowing boat with a single wooden seat.  
  It is floating on the stream just by the \<\<boat.location.name\>\>. "    
  out = (boat.location)  
  roomParts = \[boatBottom, defaultSky\]   
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

You may also want to add the small wooden seat referred to in the
description of the inside of the boat, but this can be left as an
exercise for the reader (or you can look at the source code to heidi.t
that came with this Guide). Note that the way we have specified
boatBottom's vocabWords (floor/bottom/(boat)) will automatically match
'floor of boat' and 'bottom of boat' - but not just 'boat'); once again
we don't need to do anything special to take care of the 'of' in phrases
like these.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

This boat is fairly simple since it moves between only two locations. If
we wanted more possible locations we'd need a more complicated
implementation of the Row verb - or perhaps define two versions of it,
RowUpstream and RowDownstream. In principle, however, the approach taken
here could be extended to all sorts of vehicles.  
  
Talking of destinations, we have yet to define the destination the boat
arrives at when it's rowed from the bottom of the garden (although you
may already have made your own attempt). Here's this guide's
suggestion:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

jetty : OutdoorRoom 'Jetty'  
  "This small wooden jetty stands on the bank of the stream. Upstream   
  to the east you can see a road-bridge, and a path runs downstream   
  along the bank to the west. Just to the south stands a small shop. "  
  west : FakeConnector {"You could go wandering down the path but you don't  
    feel you have much reason to. "}  
  east : NoTravelMessage {"The path doesn't run under the bridge. "}  
;  
  
+ Distant 'bridge' 'bridge'  
  "It's a small brick-built hump-backed bridge carrying the road over  
  the stream. "  
;  
  
+ Fixture 'stream' 'stream'  
  "The stream becomes quite wide at this point, almost reaching the   
   proportions of a small river. To the east it flows under a bridge, and   
   to the west it carries on through the village. "  
  dobjFor(Cross)  
  {  
    preCond = \[objVisible\]  
    verify() {}  
    check()   
     { failCheck ('The stream is far too wide and deep to cross here. '; }  
  }  
;  
  
The one new feature introduced here is the Distant class, which may be
used for objects that can be seen from a location but are too far away
to interact with. This location isn't quite finished, since there's
still no shop. We'll add that in the next section; in the meantime you
can try the current version of the game out to make sure you can row
your boat.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](lettherebelight.html)   [\[Next\]](goingshopping.html)*


