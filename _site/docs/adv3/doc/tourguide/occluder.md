<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Occluder : object<br />
</strong></td>
<td style="text-align: right;"><a
href="distanceconnector.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="vaporous.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
While a DistanceConnector allows you to see more objects from a
particular location than you normally would (by letting you see what's
in neighbouring locations) an Occluder can remove objects from
visibility (or the scope of any other sense).  
  
The reason you may want to do this is that what is visible can depend on
where you're looking from. For example, suppose you have a window
looking into a living-room. You could implement the window as a
[SenseConnector](senseconnector.htm) to make it possible for the game to
list the contents of the room when the player character is on the
outside looking in. But suppose there's a bookcase on the same wall as
the window; then the player character probably ought not to be able to
see either the bookcase or anything that's in the bookcase from outside
the window, although the bookcase and its contents are perfectly visible
from anywhere within the living-room. To achieve this, you'd use an
Occluder to remove the bookcase and its contents from sensory scope if
the point of view was in the location on the outside of the window,
defining what you want occluded in the Occluder's **occludeObj(obj,
sense, pov)** method.  
  
To make an Occluder occlude an object for a particular combination of
object (the obj parameter), sense, and point of view (the pov
parameter), you just make the occludeObj method return true for that
combination (and nil otherwise). In the bookcase example the occludeObj
method might thus look something like:  
  
occludeObj(obj, sense, pov)  
{  
   return (obj.isIn(bookcase) \|\| obj == bookcase) && pov.isIn(outsideWindow);  
}  
  
(Where outsideWindow is the name of the location on the outside of the
window). Note that here we have made no use of the sense parameter,
since we want occlusion to occur (or not occur) for all senses; this is
probably the most common case, but there may be exceptions (for example
a loudly ticking clock placed on the bookcase might conceivably be
audible from outside the window), in which case you'd also need to test
for the sense parameter.  
  
Since we haven't got a convenient window and bookcase to hand in the
*Quest of the Golden Banana*, we'll use a different example here. You'll
recall that the description of the deepChasm room mentions a narrow
river visible a hundred feet below at the bottom of the chasm, and that
we added a Distant object to represent this river in case the player
tries to refer to it (see the [TravelPushable](travelpushable.htm)
section above). Now that we've added a DistanceConnector linking
deepChasm to the rooms either side of it (chasmLedge and narrowTunnel),
the inkyRiver object will be in scope from those two locations too.
However, since the chasm is so deep the river at its bottom should only
be visible when the player character is actually in deepChasm (on the
monolith, looking straight down). If he is one of the locations
neighbouring the chasm, the chasm walls will occlude the river from
view.  
  
Occluder is a mix-in class, which means that we need to mix it in with
another class. We don't need to create an object specially for the
purpose, however; in this case the DistanceConnector we've just created
will prove entirely suitable. We can now modify it to incorporate the
Occluder:  
  
**Occluder**, DistanceConnector \[narrowTunnel, deepChasm, chasmLedge\]   
   **occludeObj(obj, sense, pov)  
   {   
     return obj == inkyRiver && !pov.isIn(deepChasm);  
   }**  
;  
  
If you now recompile and run the game you should find that the river is
now visible only from the chasm.  
  
**Note**: although we incorporated the Occluder into the
DistanceConnector for convenience, the action of the Occluder is not
restricted to that DistanceConnector. If, at a later stage, we were to
add an overhanging ledge some way above the chasm, and then add another,
completely separate DistanceConnector, linking the overhanging ledge and
the chasm, the river would not be visible from the overhanging ledge,
since the Occluder we've already created would still occlude it (unless
we modified its occludeObj method to do something different). This
behaviour of Occluder is actually pretty useful, since it enables you to
define all the occlusion rules for a given location in one place, but it
can be a little confusing if you're not expecting it.  
  
For this reason, if you have a location joined to several other
locations by different DistanceConnectors (or SenseConnectors), you may
find it more intuitive to create a separate object, such as a
SecretFixture, to act as the Occluder. For example, instead of adding
the Occluder to the DistanceConnector as in the example above, we could
have added a SecretFixture to the deepChasm room (say, immediately after
the definition of inkyRiver):  
  
+ Occluder, SecretFixture  
   occludeObj(obj, sense, pov)  
   {   
     return obj == inkyRiver && !pov.isIn(deepChasm);  
   }  
;  
  
And it would have worked in exactly the same way.  
  
Note there is absolutely no need to do it this way in such a case; you
may simply find it clearer to do so. In particular, if you have a
complex set of interconnections via DistantConnectors with different
objects occluded from different points of view, you may find it easier
to set up an Occluder, SecretFixture in each of the linked locations,
and have each one start by *not* occluding anything when the pov is in
the same location, e.g.:  
  
+ Occluder, SecretFixture  
  occludeObj(obj, sense, pov)  
   {   
      if(pov.isIn(roomLocation))  
         return nil;  
  
      if(obj.ofKind(Distant))  
        return true;  
  
      if(pov.isIn(garden))  
         return (obj == sideboard \|\| obj.isIn(sideboard));  
        
      ...  
   }  
;  
  
In this example we start by ensuring that nothing is Occluded if the
point of view is in the same room as the Occluder - this can be useful
in complex cases to ensure we don't end up occluding something by
accident. We then occlude all Distant objects (we might want to do this
because an object implemented as Distant in one location might be
implemented rather differently in a neighbouring location); note that
this will *not* occlude Distant objects when the pov is in the same
location, since in this case occludeObj will already have return nil
before getting to this test. Next we make the sideboard and its contents
invisible from the garden. We could then go on to add any further
occlusion rules we wanted.  
  
It is also possible to let individual objects decide whether they are
occluded by a given occluder. By default the library defines
Occluder.occludeObj thus:  
  
  occludeObj(obj, sense, pov)   
  {   
     /\* by default, simply ask the object what it thinks \*/   
     return obj.isOccludedBy(self, sense, pov);   
  }   
  
While Thing.isOccludedBy() is defined in the library as:  
  
   isOccludedBy(occluder, sense, pov) { return nil; }   
  
Thus, for example, if there was a window through which you could see
into the sitting room from the garden, but you couldn't see the bookcase
against the wall and the mirror hanging on the wall, instead of trying
to write the appropriate occludeObj() routine on the Occluder, you could
write isOccludedBy routines on the mirror and bookcase:  
  
mirror: Fixture 'plain square mirror' 'mirror'    
   "It's a plain square mirror in which you can see your reflection quite clearly. "  
   isOccludedBy(occluder, sense, pov)  
   {  
     return occluder == window && pov.isIn(garden);  
   }  
;  
  
And likewise for the bookcase. Whether you find it easier to write the
occlusion rules on the Occluder or on individual objects depends partly
on the situation and partly on personal taste. As a general rule, the
more complicated the situation, and the more different cases you need to
take into account for the more objects, the more likely an occludeObj()
routine written on the Occluder is likely to be bug-ridden, and the
safer it might be to write your occlusion rules on individual objects.
On the other hand, where there's a simple occlusion rule (e.g. we don't
want any objects of class Distant located in the garden to be visible
when looking through the window from inside the house), the simpler it
might be to write the rules in the occludeObj() routine of the Occluder.
It is, of course, possible to combine both approaches:  
  
window: Occluder, Fixture 'window' 'window' @sittingRoom  
  ...  
  occludeObj(obj, sense, pov)  
  {  
     return (obj.ofKind(Distant) && obj.isIn(garden) && pov.isIn(sittingRoom))  
          \|\| inherited(obj, sense, pov);  
  }  
;  
  
  
  
  
  
  
  
