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
<td style="text-align: left;"><strong>Dynamic Locations<br />
</strong></td>
<td style="text-align: right;"><a href="numbereddial.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="lever.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
We now come to the complicated part, writing the code that will move the
Tardis into a variety of locations (including dynamically-created ones)
depending on the setting of the slider and the dial we've just defined.
We'll start by defining the button the player has to press to set the
Tardis in motion. Two rules will be enforced before the Tardis is moved:
first the outer door to the Tardis must be closed, and secondly the
fluid link must be in place inside its compartment. If the fluid link is
not full, the slider will be treated as being set to 'A' regardless of
its actual setting. We then query another object (to be defined below)
to determine the Tardis's destination based on the setting of its two
controls, and move the Tardis into its new location. Again, remember to
place this definition in your code so that it's a Component of
tardisConsole:  
  
+ tardisButton : Button, Component 'big red button' 'big red button'  
   dobjFor(Push)  
   {  
    check()  
    {   
      if(tardisDoorInside.isOpen)  
      {  
        "A red warning message flashes up on the console:\n  
        \<FONT COLOR=RED\>DOOR OPEN - TRAVEL ABORTED\</FONT\>\<.p\>";           
        exit;  
      }  
    }  
    action()  
    {  
     if(!fluidLink.isIn(tardisPanelCompartment))  
     {       
       "Nothing happens. ";  
       return;  
     }  
      "The central control column pumps up and down with the strange wheezing  
       sound that only a superannuated TARDIS can make, and you feel the weird  
       sensation of being translated along unfamiliar dimensions. After about  
       half a minute, it all stops. ";  
       local destcode = (fluidLink.full ? tardisSlider.curSetting : 'A' )  
         + tardisDial.curSetting;  
       local dest = tardisDestinations.destination(destcode);         
       tardis.moveInto(dest);    
       if(dest == outsideCave) entranceTunnel.blocked = true;      
    }  
   }  
;  
  
The reason for the final line of code is to ensure that the tunnel is
blocked when the Tardis arrives outside the cave, even if the player
hasn't previously triggered the rockfall by climbing the ladder up from
the main cave. Otherwise, the game could become unwinnable (since if the
player character left the Tardis outside, entered the cave and climbed
down the ladder, climbing the ladder again would trigger the rockfall,
rendering the game unwinnable).  
  
  
At this point, you might want to add a full property to the fluid
link:  
  
++ fluidLink : Thing 'fluid link' 'fluid link'  
  "It's a long transparent tube, half full of mercury. "  
   **full = true**  
;  
  
We'll change this definition in due course, but having the fluid link
always full for now will give you access to all the possible Tardis
destinations while you're testing the Tardis drive.  
  
Next we need to define the tardisDestinations object that will work out
where to send the Tardis based on the settings of the dial and the
slider. There are potentially 260 locations keyed by a combination of
letter and digit (e.g. A0, A2, C9, T5). We shan't actually want to fill
all these potential slots, but we do want an easy way of knowing what
destination corresponds to what slot (defined by a letter and digit
combination). This is a good job for a **LookupTable**. A LookupTable
contains a set of pairs of arbitrary values, one of which is the key,
and the other the value corresponding to the key. To add such pair to
the table (or modify the value corresponding to an existing key) you
simply use a statement of the form myTable\[key\] = value; To find the
value corresponding to a given key you use value = myTable\[key\];. We
want the Tardis to start with a number of preset destinations, so we
make tardisDestinations a PreinitObject, which means that its
**execute** method will be called during preinitialization. We use that
execute method to define our preset destinations with statements like
destinations\['A0'\] = hold; (the starting location of the Tardis).  
  
If all the Tardis was going to do was visit these preset destinations,
then all we'd need to do is to return destinations\[destcode\] to any
calling routine wanting to know the destination corresponding to
destcode. But the player will probably try several destcodes for which
there is no entry in the destinations LookupTable (e.g. 'K2'), and for
which destinations\[destcode\] would therefore be nil. We have to decide
how we will handle these cases. We could just disallow travel in these
instances, but we'll attempt something much more interesting: we'll
create a new location on the fly and add it to the table. However (just
to complicate things still further!) we may want to limit the number of
dynamically-created locations that can be spawned by this means. To
achieve this we'll add a destinationsCreated property to keep track of
how many we've created and a maxDestinationsToCreate property to hold
the maximum number of destinations we'll let be created. Rather than
imposing a sharp cut-off when destinationsCreated reached
maxDestinationsToCreate, however, we'll gradually reduce the probability
of creating a new locations till it falls to zero when
destinationsCreated hits the maximum. To achieve this we compare
rand(101) (which returns a random number between 0 and 100 inclusive)
with destinations as a percentage of maxDestinationsToCreate. If
rand(101) is less than or equal to this percentage, we abort the
creation of a new location and simply return nil. Clearly, once this
percentage reaches 100, we'll always abort, but when it's very low,
we'll nearly always go ahead and create a new location.  
  
Before we get there, however, we should check whether there's an
existing location corresponding to destcode. If there is, we simply
return it. If there isn't, and we pass the probability test, we create a
new destination, add it to the table of destinations, and return it to
the calling routine (in tardisButton.actionDobjPush). To create the new
location we simply do what we'd do to create any new object dynamically,
call new plus the classname, in this case new TardisDestination. We'll
leave TardisDestination the job of defining itself:  
  
+ tardisDestinations : SecretFixture, PreinitObject  
  destinations = static new LookupTable  
  execute()  
  {  
    destinations\['A0'\] = hold;  
    destinations\['A2'\] = spaceStation;  
    destinations\['C9'\] = redDesert;  
    destinations\['T5'\] = outsideCave;  
  }  
  maxDestinationsToCreate = 50  
  destinationsCreated = 0  
  destination(destcode)  
  {  
    local dest = destinations\[destcode\];  
    if(dest != nil) return dest;  
    if(rand(101) \<= (destinationsCreated \* 100)/maxDestinationsToCreate )  
      return nil;  
    else  
    {  
      dest = new TardisDestination;  
      destinationsCreated ++;  
    }  
    tardisDestinations.destinations\[destcode\] = dest;  
    return dest;  
  }  
;  
  
There was strictly speaking no need to make tardisDestinations a
SecretFixture as well as a PreinitObject here, but it is convenient to
fit it into the containment hierarchy (notionally as another part of the
tardisConsole). An alternative would have been to have made
tardisDestinations purely a SecretFixture, and to have defined its
destinations (or called a custom method which did so) within its
initializeThing method.  
  
We next need to go on to define the TardisDestination class. This will
be a subclass of OutdoorRoom. All we'll create with it is a set of
fairly barren and boring outdoor locations, but it would be good to
provide some superficial variation between them. To do this we'll use
TardisDestination's **construct** method, which is called whenever a
dynamic object is created with the new statement. In this particular
construct method we'll randomly assign an epithet, a colour and a
terrain which in combination will make up the name of the room, and use
those together with a randomized sky description and a random synonym of
'stretches' to vary the room description. Finally, we'll want to give
the player the illusion of being able to wander around, so we'll point
the cardinal direction properties to a series of FakeConnectors (which
we'll define separately rather than trying to create dynamically). The
definition of the TardisDestination then becomes:  
  
class TardisDestination : OutdoorRoom  
  construct()  
  {  
   epithet = rand('vast','barren', 'desolate', 'empty', 'lonely' , 'spooky', 'dead', 'grim');  
   colour = rand('ochre' , 'red', 'green' , 'black' , 'brown', 'blue' , 'grey', 'white');  
   terrain = rand('plain', 'forest', 'wilderness', 'swamp', 'jungle', 'tundra', 'desert',  
               'grassland' , 'wasteland', 'prairie');  
   name = '\\'+ epithet + ' \\'+ colour + ' \\' + terrain;     
   stretches = rand('stretches', 'extends', 'rolls', 'ranges', 'spreads', 'reaches');  
   sky = rand('clear blue sky', 'threatening dark clouds', 'weird orange sky',  
    'lurid green heavens', 'fluffy white clouds', 'black thunderclouds', 'reddening sky');  
   inherited();  
  }  
  desc = "This \<\<epithet\>\> \<\<colour\>\> \<\<terrain\>\> \<\<stretches\>\> as far as the eye can see  
   in all directions, one direction looking much like another under the \<\<sky\>\>. "  
  destName = ('the ' + epithet + ' ' + colour + ' ' + terrain)  
  north = wanderNorth  
  east = wanderEast  
  south = wanderSouth  
  west = wanderWest  
  epithet = nil  
  colour = nil  
  terrain = nil  
  stretches = nil  
  sky = nil  
;  
  
One point to note here is the use of the **construct** method; this is a
special method that's called on any object created dynamically through a
new statement at the point of creation. Note that a constructor can take
parameters like any other method, in which case you would include them
in the new statement. For example, instead of having TardisDestination
constructor randomly choose an epithet, colour and terrain for itself,
we could have these passed as parameters to the constructor:  
  
class TardisDestination : OutdoorRoom  
  construct(myEpithet, myColour, myTerrain)  
  {  
   epithet = myEpithet;  
   colour = myColour;  
   terrain = myTerrain;  
    ...  
   }  
   ...  
;  
  
Then you could have set up a particular kind of dynamic
TardisDestination with a statement like:  
  
new TardisDestination('broad', 'purple', 'steppe');  
  
However, in this game, we shall stick with the way we've done it. Of
course it would be possible to elaborate this to add further variety
still, but the above definition suffices to show the principle. Next we
need to define the four FakeConnectors that all members of the
TardisDestination will use:  
  
wanderNorth : FakeConnector { "You wander off to the north for a while, but finding  
               nothing of interest you eventually turn round and come back. " }  
                 
wanderEast : FakeConnector { "You stride confidently off to the east, but the further  
              you go, the more it all looks the same, so after a while you  
              retrace your steps. " }  
                
wanderSouth : FakeConnector { "The further south you go, the more you wish you hadn't  
             bothered, so in the end you give it up as a bad job and head back. " }  
               
wanderWest : FakeConnector { "You carry on westwards as far as your legs will carry you,  
              but eventually you are forced to rest. Having rested, you decide you  
                  really don't want to go any further that way, so you return the way  
              you came. " }  
              
Again, these really all say the same thing in slightly different words,
but some illusion of variety may be created thereby.  
  
Two of the preset destinations have already been created, the hold (in
which the Tardis starts) and outsideCave (where we need to return to win
the game - having completed various other tasks). We need to define the
other two (we'll eventually be adding more than two, but two will do for
now, just to demonstrate the principle). First, we'll add the space
station just as a stub to be filled in later:  
  
spaceStation : Room 'Space Station - Observation Deck' 'the observation deck'  
;  
  
Then we'll add the redDesert, which we'll teasingly make resemble the
randomly generated locations. We'll reward the player who bothers to
explore with another of the mysterious tablets, however, although we'll
make it the least valuable one so that players who don't find it won't
miss too much.  
  
/\* The Red Desert World\*/  
  
redDesert : Room 'Vast Red Desert' 'the vast red desert'  
  "This huge red desert stretches to the horizon in all directions, all directions  
   looking much the same under the brassy sky, except that a faint trail leads east. "  
   north = wanderNorth  
   west = wanderWest  
   south = wanderSouth  
   east = redRavine  
;  
  
redRavine : Room 'Narrow Red Ravine' 'the narrow red ravine'  
  "The faint trail from the west comes to the end in this narrow red ravine. Apart  
   from the narrow path leading east, rocky hillsides tower up on every side. On  
   the south side is a narrow hole, which perhaps leads into a cave. "  
   west = redDesert  
   south = redCave  
   in asExit(south)  
;  
  
+ Enterable -\>redCave 'narrow (south) hole/cave/rockface' 'narrow hole'  
  "The narrow hole in the south rockface looks just big enough to squeeze through. "  
;  
  
redCave : DarkRoom 'Red Cave' 'the red cave'  
   "There is just enough room to stand in this small cave; the dark, rough red  
    walls press in on every side, and the roof rapidly dips to meet the floor  
    at the rear. The only way out is through a narrow exit to the north. "  
    north = redRavine  
    out asExit(north)  
;  
  
plasticTablet : Tablet 'plastic tablet\*tablets' 'plastic tablet' @redCave  
  inscription = "S M I L E\nP I P E R\nR O X L N\nA N T L E\nT R U S S"  
  weight = 1  
  initSpecialDesc = "A plastic tablet lies on the floor towards the rear of the cave. "  
;  
  
There's still one more task we need to perform before recompiling the
game and trying all this out. The way we have defined
tardisDestinations.destination means that it could return nil,
especially if a lot of dynamic destinations have been created already.
This in turn means that pressing the big red button could end up sending
the Tardis into nil (via the tardis.moveInto(dest) statement in
tardisButton.actionDobjFor(Press)). This in itself is not too
problematic - unless the player tries to leave the Tardis while it's in
nil, which he or she could very well try to do. This *does* need to be
prevented, since once the player character is moved into nil, there is
nothing the player character can do to get out it, other than type UNDO,
which is a bit mimesis-breaking. What we need to do is to prevent the
player leaving the Tardis if it's in nil, providing a convincing (or at
least reasonably plausible) reason for doing so. This is quite easy to
do, since leaving the Tardis requires travel via a Door, and a Door is a
type of TravelConnector, and we can simply override its canTravelerPass
and explainTravelBarrier methods to disallow travel when the Tardis is
in nil and explain why we're doing so:  
  
+ tardisDoorInside : Lockable, Door -\>tardisDoor 'outer white door\*doors' 'white door'  
  **canTravelerPass(traveler) { return tardis.location != nil; }  
  explainTravelBarrier(traveler)   
   { "You can't go out: the Tardis hasn't materialized properly and there's nothing  
      out there but the grey limbo, where nothing can exist. "; }  
**;  
  
Now at last you should be in a position to recompile the game and take
your Tardis for a spin.  
  
