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
<td style="text-align: left;"><strong>HighNestedRoom : <a
href="nestedroom.html">NestedRoom</a><br />
</strong></td>
<td style="text-align: right;"><a href="chair.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="outofreach.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A HighNestedPlatform is a NestedRoom that represents a part of the room
that's too high to get into, unless we provide some means of reaching
it. An example might be the upper of two bunk beds. The obvious place to
put pair of bunk beds might be in the crew quarters of our ship. In
order to reach the top bunk the player must be standing on the chair we
conveniently left in the main cabin aft; to achieve this we modify the
**stagingLocations()** property of the HighNestedRoom to return the
chair, but only when the actor's standing on it:  
  
Bed, Fixture 'bottom bunk bed\*bunks\*beds' 'bottom bunk' @crewQuarters  
   "The bottom bunk is mounted low on the port side, under the top bunk. "  
;  
  
HighNestedRoom, Bed, Fixture 'top bunk bed\*beds\*bunks' 'top bunk' @crewQuarters  
   "The top bunk is mounted high on the port side, above the bottom bunk. "  
   stagingLocations()  
   {  
     local lst = new Vector(5);  
     if(gActor.posture==standing)  
       lst.append(cabinChair);  
     return lst.toList;  
   }  
;  
  
+ Thing 'pillow' 'pillow'  
  "It's just a plain white pillow. "  
;     
  
At the same time we need to change the description of the crewQuarters
room to reflect the addition of some new furniture:  
  
crewQuarters : DarkCabin 'Crew Quarters' 'the crew quarters'  
  "The crew quarters seem largely deserted, apart from a single locker  
   fixed to the bulkhead**, and a pair of bunk beds nestling against against  
   the port side.** There's an exit back aft and a ladder leading down into   
   the hold. Another exit leads foreward. "  
  ...  
;  
  
If you compile and run this, you'll find that you can only get onto the
top bunk if you're standing on the chair, but the code is less than
ideal. In particular, if the chair is present but you're not standing on
it the game tries to *sit* you on the chair and then tells you that the
bunk is too high. The best solution is probably to modify
stagingLocations so that it only returns the chair if the actor is
actually standing on it. At the same time we'll take advantage of the
revision to make it easier to add further things the player could stand
on to reach the top bunk:  
  
HighNestedRoom, Bed, Fixture 'top bunk bed\*beds\*bunks' 'top bunk' @crewQuarters  
   "The top bunk is mounted high on the port side, above the bottom bunk. "  
   stagingLocations()  
   {  
     local lst = new Vector(5);  
     foreach(local cur in stagingPlatforms)  
       if((gActor.posture==standing && gActor.isIn(cur))  
         \|\| (gActor.isIn(self) && cur.isIn(location)))  
         lst.append(cur);  
     return lst.toList;  
   }  
   stagingPlatforms = \[cabinChair\]  
;  
  
Note that we need to make sure the player can get off the bunk as well
as on it. By default the exitDestination of a NestedRoom is its
defaultStagingLocation, which in turn is the first available
stagingLocation; so we need to make sure stagingLocations returns a
suitable value when the player is on the bunk as well as when he's
standing on the chair. A simpler (or addtional) solution might be to add
`exitDestination = location` to the definition of the bunk; if you try
it, you might also find it neater; the effect is to allow the player to
get off the bunk directly to the floor, instead of having to exit via
the chair.  
  
One other thing you may have noticed is that although we can only get
onto the top bunk with the aid of the chair, there is nothing to stop us
taking the pillow while we're standing on the floor. There's nothing
unrealistic about this; indeed it could well be that we could quite
easily reach up and take the pillow without being able to get ourselves
onto the top bunk, it just doesn't happen to be the behaviour we want
here. To prevent the pillow being reached except from the top bunk we
need to go a stage further and make the latter an
[OutOfReach](outofreach.html).  
  
  
  
  
