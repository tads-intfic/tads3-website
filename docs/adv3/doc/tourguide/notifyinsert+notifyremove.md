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
<td style="text-align: left;"><strong>notifyInsert &amp;
notifyRemove<br />
</strong></td>
<td style="text-align: right;"><a
href="openablecontainer.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="lockablecontainer.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
We are now in a position to implement the scales we can use for weighing
the various objects in the game (and so ultimately solve the altar
problem that is yet to come). Scales obviously register a new reading
each time something is put on them or removed from them, and the best
way to test for such occurrences in the TADS 3 library is by using the
**notifyInsert(obj, newCont)** and **notifyRemove(obj)** methods. These
have the advantage that they'll also respond to things being inserted
into or removed from contents of contents and so forth. In the case of
the scales, this means that if I place a box on the scales and then put
things in the box or take them out again, the scales' notifyInsert and
notifyRemove methods will still be called, so a change in the total
weight on the scales will still be registered, which is what we want.  
  
To get at the total weight on the scales we can simply use the
**getWeight** method. This returns the total weight of an object and all
its contents, so we need to subtract the scales own weight to get the
total weight of all the objects placed on it. Since the description of
the scales states that the maximum weight it can register is 100 pounds,
we need to ensure that it never registers more, however much is placed
on the scales. To get at the reading shown by the scales we should thus
define:  
  
reading = min((getWeight - weight), 100)  
  
There is one major complication, however, and that is that notifyInsert
and notifyRemove are called *before* the insert or remove action is
completed, so that at the time they are called, the reading property
will register the weight on the scales *before* the change, not *after*
it as we want. There are probably several ways round this, but the one
we have adopted here is to use the **afterAction()** method. This is
called on all objects (but not rooms) in scope after an action is
completed. To achieve the result we want here, we get afterAction to
test whether the weight on the scales has changed, and only if it has to
display the new weight (and record it as the current weight).  
  
The (somewhat complicated) definition of our set of scales is thus:  
  
scales : Surface 'large weighing scales/pan/dial/needle' 'scales' @entranceCave  
  "These scales comprise a large weighing pan fixed over a square body, on which  
   is a large dial with a needle that is currently pointing to \<\<reading\>\>. The  
   numbers round the dial range from 0 to 100, and according to the inscription  
   on the dials the unit of measure is pounds. "  
  reading = min((getWeight - weight), 100)  
  weight = 6  
  isPlural = true    
  bulk = 10  
  bulkCapacity = 50    
  iobjFor(PutIn) asIobjFor(PutOn)  
  notifyRemove (obj)    
  {    
    weighMsg = 'As you remove '+ obj.theName;      
  }  
  notifyInsert (obj, newCont)   
  {  
    inherited(obj, newCont);  
    weighMsg = 'As you put ' + obj.theName + ' ' + newCont.putInName();    
  }  
  showWeight()  
  {  
    "\<\<weighMsg\>\> the needle on the dial swings round to \<\<reading\>\>. ";  
  }  
  afterAction()   
  {   
    if (reading != oldWeight)  
    {  
      showWeight();  
      oldWeight = reading;  
    }  
  }  
  oldWeight = 0   
  weighMsg = nil  
;  
    
There are a number of other points to note here. The first is the use of
the **isPlural** property. Although the set of scales is in fact a
single object, its name property is 'scales', which is grammatically
plural; we therefore set isPlural to true to ensure that in any message
the parser generates about this object the verb will agree in number
with its grammatical subject (e.g. to ensure we don't get "The scales
does not appear to be edible" when what we want is "The scales do not
appear to be edible"). The second is that in this case we can reasonably
make the bulkCapacity bigger than the bulk; there's no reason why a
object placed on the scales should not be bigger than the scales. The
third is that since the scales are defined as having a pan the player
might reasonably PUT X IN PAN as well as PUT X ON SCALES; to handle that
we use iobjFor(PutIn) asIobjFor(PutOn) to translate a PUT IN command to
a PUT ON command. The notifyInsert() method is already defined on
BulkLimiter; it already contains code (which, among other things, checks
that the object can be inserted and aborts the action if, for example,
it is too bulky), so we must call the inherited method. We use the two
notifyXXX methods simply to start constructing a string that will be
displayed if the weight on the scales changes. The notifyInsert method
also makes use of the **putInName** property which returns something
like 'in the container' or 'on the surface' as appropriate. Finally, we
ensure that the afterAction() method only does anything if the weight on
the scales has actually changed. Note again that afterAction is called
after *any* action performed while the object is in scope - this ensures
that only actions that change the weight on the scales are acted upon
here.  
  
At this point it will be worthwhile to recompile and run the game to
test the scales out. Try putting the first-aid box on the scales, then
open the first aid box and take the bandage; then try PUT SYRINGE ON
SCALES; finally, obtain the brass tablet and try putting it first in the
first-aid box and then in the pan. Hopefully, everything should work as
expected.  
  
One small task remains, and that is to put the scales in a plausible
locations; we'll place them in a cupboard in a galley aboard the ship,
which means we first need to create the galley and the cupboard:  
  
galley : DarkCabin 'Galley' 'the galley'  
  "It looks like the galley has been more or less stripped bare. There's a work  
   surface with a cupboard underneath it, and not much else. "  
  aft = crewQuarters    
;  
  
+ Surface, Fixture 'work surface' 'work surface';  
  
+ galleyCupboard : OpenableContainer, Fixture '(galley) cupboard' 'cupboard';  
  
Then change the first line of the definition of the scales to read:  
  
scales : Surface 'large weighing scales/pan/dial/needle' 'scales' **@galleyCupboard**  
  
Clearly, the definition of crewQuarters needs to be changed to reflect
this new state of affairs, but we'll attend to that in the next
section.  
  
