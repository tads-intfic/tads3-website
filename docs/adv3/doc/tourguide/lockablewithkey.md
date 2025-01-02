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
<td style="text-align: left;"><strong>LockableWithKey : <a
href="lockable.html">Lockable</a><br />
</strong></td>
<td style="text-align: right;"><a
href="keyedcontainer.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="keyring.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
You may recall a little way back that we defined a
[tardisKey](complexcontainer.html) to be found inside the desk in the
cabin. Where there's a key to a Tardis, there should be a Tardis
somewhere, so we'll set about defining one and giving it a lockable
door.  
  
tardis : Enterable -\> tardisDoor 'dark blue police box/tardis' 'Tardis' @hold  
  "It's a small dark blue booth, with a blue light on the top and  
   the words POLICE BOX above the door. "  
   initSpecialDesc = "A dark blue police box stands in the corner. "  
   specialDesc = "A Tardis, conspicuously disguised as a police box, stands here. "      
;  
  
+ tardisDoor : LockableWithKey, Door '(tardis) door' 'door'  
  disambigName = 'Tardis door'  
  keyList = \[tardisKey\]  
;  
  
For those not familiar with the BBC TV series "Dr Who", a Tardis is a
type of time machine (the name is meant to be an acronym of Time And
Relative Dimensions In Space). The main ability of a Tardis is to
dematerialize at one point in time and space and rematerialize in
another location in time and space. A Tardis is also larger inside than
out. Finally, a Tardis is meant to blend in with its surroundings on
rematerialization, but Dr Who's Tardis became stuck in its 1960s London
appearance, and so always looks like a Police Box (a kind of dark blue
phone booth) from the outside.  
  
At this point we need to define the interior of the Tardis, so that
there's somewhere to go to if the player attempts to enter it or go
through its door. As is well known, a Tardis is bigger inside than out,
so we could give it as many rooms as we liked. We'll stick to just two,
but then there's the question of how to describe their relative
positions. Compass directions won't mean much inside the Tardis, and
it's not obvious that shipboard directions like port and starboard would
mean much either. On the other hand, from the outside one would probably
regard the side of the Tardis with the door as its front, so there would
be some justification for regarding movement towards this door as "fore"
and away from it as "aft", which means that shipboard directions might
just about do. We don't want the customizations of the Cabin class
aboard the Tardis though, so we'll simply use the ShipboardRoom class:  
  
  
tardisControlRoom : ShipboardRoom 'Tardis control room' 'the Tardis control room'  
  "The room is, of course, much larger than the Tardis looks from the outside.  
   Its walls are white, with curious circular indentations.  
   A white door leads out to the outside world (wherever or whatever that may be)  
   and an inner door leads further into the vessel.   
   At the centre of the control room stands a hexagonal control console. "  
  fore = tardisDoorInside  
  out asExit(fore)    
  aft = tardisInnerDoor  
  in asExit(aft)  
;  
  
+ tardisDoorInside : Lockable, Door -\>tardisDoor 'outer white door\*doors' 'white door';  
  
+ tardisInnerDoor : Door 'inner door\*doors' 'inner door';  
  
tardisLivingQuarters : ShipboardRoom 'Tardis Living Quarters' 'the living quarters'  
  "There's not much here at the moment, but a door leads out. "  
  out = tardisLivingQuartersDoor  
  fore asExit(out)  
;  
  
+ tardisLivingQuartersDoor : Door -\> tardisInnerDoor 'door' 'door';  
  
The beauty of the way tardisDoorInside points to tardisDoor is that
whenever we move the Tardis to a new location, the player character will
automatically emerge in that location on leaving the Tardis.  
  
Once again, LockableWithKey is a mix-in class, so it should become
before any Thing-derived class in an object or class definition.  
