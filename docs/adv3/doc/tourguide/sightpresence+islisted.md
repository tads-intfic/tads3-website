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
<td style="text-align: left;"><strong>sightPresence &amp; isListed<br />
</strong></td>
<td style="text-align: right;"><a
href="findingincode.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="hidden.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Perhaps an even simpler way to hide an object and then reveal it is to
set its **sightPresence** and **isListed** properties to nil. The former
effectively put the object out of scope for any commands (such as TAKE
or EXAMINE) and the latter prevents it being listed in the room
description until sightPresence is set to true. We'll see how this works
by hiding another of our coded tablets in the squareCave:  
  
stoneTablet : Tablet '(loose) stone tablet\*tablets' 'stone tablet' @squareCave  
  inscription = "O P E R A\nY N U E R\nS T E T S\nI N F E F\nP A N I C"  
  weight = 16  
  sightPresence = nil  
  isListed = (moved)    
;  
  
You may recall that the way out of this cave is through a stone archway
we defined someway back as example of an [ExitPortal](exitportal.html).
This would seem a good place to hide the stone tablet; the player will
only learn of the tablet's existence if he or she examines this arch. We
don't want the stone tablet listed separately until it's free of the
arch, which is why we set isListed = (moved) here, but we'll want the
player to be able to interact with the tablet once he or she has
examined the arch, so we set sightPresence to nil initially and let the
archway set it to true when it's examined:  
  
+ ExitPortal -\> mainCave 'ashlar arch/archway' 'archway'  
  "The archway is beautifully constructed from dressed stones.** \<\<looseStone\>\> "  
  looseStone()  
  {  
    if(!stoneTablet.moved)  
    {  
      stoneTablet.sightPresence = true;  
      "One of them seems a bit loose. ";  
    }  
    else  
      "There's a gap in the stonework where one of them is missing. ";  
  }**  
;  
  
  
There's one further complication we have to bear in mind with this
method, however, and that is if we had put the stone tablet in a
container (e.g. making the archway a container from which the tablet
could be removed and then reinserted) we should also need to add
isListedInContents = (sightPresence), otherwise the tablet would
announce its presence when its container was examined, even if this
wasn't what we wanted.  
  
In the case of the stone tablet, manipulating sightPresence and isListed
works reasonably well, not least because we want them to become true
under slightly different conditions. Again, with items that descend from
NonPortable, which would not normally be listed anyway, manipulating
sightPresence can often be the most efficient means of bringing
something to light (as in the example of the [hole at the end of the
fluid link](lever(2).html#tinyhole), which we'll come to eventually).
Otherwise, though, it is usually simpler to use the [Hidden](hidden.html)
class, which we shall look at next.  
  
  
  
  
