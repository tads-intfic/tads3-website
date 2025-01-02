---
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Distant : <a
href="fixture.html">Fixture</a><br />
</strong></td>
<td style="text-align: right;"><a href="decoration.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="unthing.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Distant is a special type of [Decoration](decoration.html) that
represents an object that's too far away to interact with, perhaps an
object that's in another location. The lake as seen from the top of the
mast might come into this category:  
  
Distant 'great underground lake' 'lake' @topOfMast  
  "The lake stretches out to starboard as far as the eye can see; it looks as  
   calm and flat as a millpond. "  
;  
  
The shore as seen from the same place might also come into this
category. Since eventually the ship will move around the description
must either be studiously vague or else vary according to the location
of the ship:  
  
Distant 'shore' 'shore' @topOfMast  
  desc()  
  {  
    switch(ship.location)  
    {  
      case lakeRoom:  
        "The shore to port is a narrow strip of land bounded by the wall of the  
         cave, through which a doorway leads to the north. ";  
         break;  
      default:  
        "The shore is directly on the port side of the ship. ";  
    }  
  }  
;  
  
Clearly, we should come back and expand the desc method once we've
implemented more of the locations the ship can go to. The points to note
here are (1) that desc() can be a method (in which case we need to name
it explicitly, not via the template) and (2) to remember to use the
break statement in each branch of the switch statement where we don't
want fall-through.

Note that the [OutOfReach](outofreach.html) class, which we shall
encounter later, can sometimes offer a more flexible way of implementing
distant objects; especially when they may become reachable under certain
conditions.  
