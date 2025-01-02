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
<td style="text-align: left;"><strong>SenseFuse : <a
href="fuse.html">Fuse</a><br />
</strong></td>
<td style="text-align: right;"><a href="daemon.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="sensedaemon.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
One problem you may have with a [Fuse](fuse.html) is that it could go off
when the player character is not near enough to perceive the result, but
that any text defined in the method that's executed when the Fuse fires
will be displayed whether it describes something the player character
could witness or not. This wasn't a problem with the Daemon and Fuse we
defined on the gold tablet, but in other situations in might be. In such
situations what you need is a SenseFuse - a special type of Fuse that
won't display any messages if the player character isn't there to see
(or hear, or smell) what happens.  
  
The way to set up a SenseFuse is very similar to the way you set up a
Fuse, except that there are a couple of extra properties:  
  
new SenseFuse(obj, &prop, turns, source, sense);  
  
This definition will cause obj.prop to be executed after *turns* turns,
as with a Fuse. The difference is that the player will only see any
messages displayed by obj.prop if, at that point in time, the player
character can sense the *source* object (which in practice may often be
the same as the obj object, but need not be) using the sense *sense*
(which could be sight, sound, smell or touch - most likely one of the
first two).  
  
As an example we'll put a SenseFuse on an exploded bomb hidden under a
pile of rubble. Once the player finds the bomb in the rubble, a new fuse
is created that will cause the bomb to explode in three turns (killing
the player if s/he is still rash enough to be around). Obviously, we'll
also need to create an environment for the bomb, so we'll start by
adding a new location the Tardis can reach:  
  
+ tardisDestinations : SecretFixture, PreinitObject  
  destinations = static new LookupTable  
  execute()  
  {  
    destinations\['A0'\] = hold;  
    destinations\['A2'\] = spaceStation;  
    destinations\['C9'\] = redDesert;  
    destinations\['T5'\] = outsideCave;  
    **destinations\['Q7'\] = londonStreet;**  
  }  
  ...  
;  
  
Then we can proceed to define a couple of locations, some rubble, and a
bomb:  
  
/\* London - 1940 \*/  
  
londonStreet : OutdoorRoom 'City Street' 'the city street'  
   "Several burned-out and half-destroyed buildings line this section of   
    the city street along with the ones that are still standing. The destruction  
    seems to have been fairly recent, since the rubble of fallen masonry still  
    spills out onto the street, blocking the way south. The road continues to  
    the north. "  
    south : NoTravelMessage { "The rubble blocks your path. "; }  
    east : NoTravelMessage { "The houses directly to the east are burned-out  
     shells; they don't look safe to enter. "; }  
    north = streetJunction   
;  
  
+ rubble : Immovable 'pile rubble' 'rubble'  
  "The largest pile of rubble spills out into the street and blocks progress south.   
   \<\<bomb.isIn(nil) ? specialDesc : nil\>\> "  
  dobjFor(LookUnder)  
  {  
    action()  
    {        
      if(bomb.moved)  
        "There's nothing much there but rubble. ";  
      else if(bomb.discovered)  
        "The bomb is still there. ";  
      else  
      {  
        bomb.discover();  
        "You find a metal cylinder buried among the rubble. It looks horribly  
         like a bomb. ";  
      }  
    }  
  }  
  dobjFor(LookIn) asDobjFor(LookUnder)  
  specialDesc = "Pieces of rubble have been blown all over the street, surrounding  
    a fresh bomb crater. "  
  specialDescOrder = 70  
  useSpecialDesc() { return bomb.isIn(nil); }  
;  
  
+ bomb : Hidden, Immovable 'unexploded bomb/cylinder' 'bomb'  
  "It's a fat, round-nosed cylinder with tail fins, on a couple of which  
    are painted tiny swastikas. "  
  discover()  
  {  
    inherited;  
    new SenseFuse(self, &explode, 3, self, sight);  
  }  
  explode()  
  {  
    "The bomb explodes, the blast sending chunks of masonry flying in all  
     directions, one piece of
which strikes you squarely on the head. ";  
     if(gPlayerChar.isIn(location))  
       endGame(ftDeath);  
     moveInto(nil);  
  }  
  cannotTakeMsg = 'You must be joking! '  
  cannotPushMsg = 'That might set it off. '  
  cannotMoveMsg = 'It\\s probably safest to leave it just where it is. '  
;  
  
streetJunction : OutdoorRoom 'Street Junction' 'the junction'  
   "The street from the south meets another running east-west. A short way down  
    to the street to the east a fire crew is fighting a blazing fire. "  
   south = londonStreet  
   east : FakeConnector { "After taking a few steps east you recall that   
     discretion is the better part of valour and decide to keep out of the  
     way of the fire crew. "}  
   atmosphereList : ShuffledEventList  
     
   {  
     \[ 'The drone of aircraft engines can be heard overhead. ',  
       'From somewhere across the city comes the wail of a distant siren. ',  
       'From somewhere to the \<\<dirn\>\> comes the bark of anti-aircraft fire. ',  
       'Off to the \<\<dirn\>\>
you hear the blast of a whistle and the sound   
        of running feet. ',  
       'A fire engine races down a street somewhere to the \<\<dirn\>\>
.',  
       'There\\s a sudden explosion somewhere off to the
\<\<dirn\>\>, as   
        another bomb finds a target. '      
     \]  
     dirn = (rand('north' , 'south' , 'east' , 'west'))  
   }  
;  
  
Note that this is a case where we can safely use an embedded expression
within a single-quoted string in an EventList. Although it will result
in the dirn property being evaluated several times per turn (somewhere
around six), the fact that there are six calls to rand() for every time
we see one of these atmosphere strings won't matter much in practice.  
  
We override the discover() method of the bomb to set up the new
SenseFuse, in such a way that the player character must be in a position
to see it for the messages in explode() to be displayed to the player.
In this case we could have achieved much the same effect by
incorporating the message that's displayed into the group of statements
governed by the if(gPlayerChar.isIn(location)) statement, but that would
not always be so convenient, and we're trying to illustrate a
SenseFuse!  
  
Later on we'll make this bomb a bit more interesting, for example by
adding a [Noise](noise.html) object to make it tick. In the meantime note
the use of the specialDesc property on the rubble; we override
useSpecialDesc so that this specialDesc is displayed only after the bomb
has gone off, and we set specialDescOrder to 70 (lower than the default
of 100) so that the description of the new bomb crater etc. will come
earlier in the listing of the room contents than other specialDescs and
initDescs.  
