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
<td style="text-align: left;"><strong>BagOfHolding: object<br />
</strong></td>
<td style="text-align: right;"><a
href="singlecontainer.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="locks+keys-introduction.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
BagOfHolding is a mix-in class that can be used for an object to which
an actor (usually the player character) automatically moves objects when
his or her hands become full, provided the BagOfHolding object is in the
player's inventory. This provides a measure of realism (there's a limit
to how many objects an actor could really hold in his or her hand)
without making inventory management too burdensome to the player.  
  
All that's necessary to make an object a BagOfHolding is to add
BagOfHolding to the start of its class list; a good candidate for a
BagOfHolding in the *Quest of the Golden Banana* might be the sack we
defined earlier:  
  
sack : **BagOfHolding**, StretchyContainer 'coarse brown sack' 'coarse brown sack' @squareCave  
  initSpecialDesc = "A coarse brown sack lies crumpled in the corner. "  
  bulkCapacity = **3000**  
  minBulk = 1  
  
  **affinityFor(obj)  
  {  
    return obj.ofKind(Tablet) ? 200 : inherited(obj);  
  }**  
;  
  
If it's to be much use as a BagOfHolding the sack will need a
bulkCapacity much larger than the one we initially gave it, so here we
increase its bulkCapacity to 3000.  
  
Although there's no particular reason for doing it in this case, we
define the sack's affinityFor() method just to illustrate its use. This
should return a number between 0 (meaning that the BagOfHolding will
refuse to hold the object) to 200 (meaning that the bag is particular
keen to hold the object), with 100 being the default. In this case we'll
make the sack particularly suitable for carrying the various tablets in
(there's no really *logical* reason for this beyond player convenience -
the tablets are relatively bulky objects that the player needs to
collect a number of but not to use very often).  
  
Note that we won't see the BagOfHolding doing much unless we also reduce
the bulk capacity of the player character. You could try reducing it to
100; add the following to the definition of the me object:  
  
bulkCapacity = 100  
  
  
  
  
  
