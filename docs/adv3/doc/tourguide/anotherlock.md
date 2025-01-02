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
<td style="text-align: left;"><strong>A Card Lock<br />
</strong></td>
<td style="text-align: right;"><a href="lever(2).html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="fuse.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
We'll finish off the space station section by adding another lockable
compartment, but this time one that uses a card key to open it. First
we'll leave the card key lying around to be picked up - but we'll also
damage it:  
  
class CardKey : Key;  
  
cardKey : CardKey 'white plastic card' 'white plastic card' @spaceStation  
  "It's a piece of white plastic, about 80 x 30mm, with some blue letters  
   printed on it that are now too indistinct to read. \<\<isBent ? 'Unfortunately,  
   it also looks a bit bent. ' : nil\>\>"  
  initSpecialDesc = "On the floor lies a white plastic card. "  
  isBent = true  
;  
  
Now in the other accessible half of the space station we'll place the
cabinet this key's designed to unlock, and put yet another of our
tablets inside it. We'll make it a LockableWithKey, defining the cardKey
as the key, but since the player may also try to insert the card, we'll
remap a PutIn command to the appropriate UnlockWith command (so that PUT
CARD IN SLOT is treated as UNLOCK CABINET WITH CARD):  
  
ssCabinet : KeyedContainer, Fixture 'small cabinet/slot' 'small cabinet' @ssLivingQuarters  
  "The front of the cabinet is flush with the bulkhead and contains a small slot. "  
  inRoomDesc = "A small metal cabinet is set into another of the bulkheads. "  
  keyList = \[cardKey\]  
  keyIsPlausible(key) { return key.ofKind(CardKey); }  
  initiallyLocked = true  
  lockOrUnlockAction(lock)  
  {  
    if(gIobj.isBent)  
    {  
      reportFailure('{The iobj/he} won\\t fit in the slot. ');  
      exit;  
    }  
    inherited(lock);  
  }  
  iobjFor(PutIn) remapTo(UnlockWith, self, DirectObject)  
;  
  
+ silverTablet : Tablet 'silver tablet' 'silver tablet'  
  inscription = "F R A N K\nE I I O I\nO T V N L\nF L E E T\nF O R H S"  
  weight = 8  
;  
  
Note that we have introduced a new (to the reader) method of
KeyedContainer (and other LockableWithKey objects), namely
**keyIsPlausible**. This should return true if and only if a key might
plausibly fit the lock; in this case the card key might but a
conventional key obviously wouldn't. Only if keyIsPlausible(key) returns
true for a certain key will that key be tried in an implicit action. The
keyList property narrows down the list of keys that will actually
operate the lock to the card key alone, but we override
lockOrUnlockAction to prevent even this key from working if it is
bent.  
  
At this point we had best move our autoRectifier into its proper,
futuristic, initial setting, so that the player has an immediate means
of repairing the bent card key:  
  
autoRectifier : ComplexContainer 'silver cylinder' 'silver cylinder' **@ssTable**  
  "It's about a foot high and five inches in diameter. A black ring surrounds  
   the opening at one end. The only other feature of interest are a conspicuous  
   orange button and the manufacturer's name inscribed just below the ring. "  
   subContainer : ComplexComponent, SingleContainer {  bulkCapacity = 3 }  
   bulk = 4  
   weight = 3  
;  
  
If you move this definition in your source code, remember to move the
component object definitions (the black ring, manufacturer's name, and
orange button) with it. It probably won't take the player long to figure
out that the autorectifier solves the problem of the bent card key, but
this is then a reasonable clue that it might do the same for the bent
brass key found elsewhere.  
  
The introduction of the card key leaves us with one or two pieces of
tidying up to do. First of all, a card key is not the sort of thing that
should be added to our keyring, so we need to override its isMyKey
method as envisaged when we first encountered the [Keyring](keyring.html)
class:  
  
Keyring 'silver (key) keyring/ring' 'silver keyring' @firstAidKit  
  isMyKey(key)  
  {    
     return key.ofKind(Key) && !key.ofKind(CardKey);  
  }  
;  
  
Finally, we have a couple of lockable objects (the trunk and the Tardis
door) for which the card key is quite obviously not the right kind of
key. Rather than deal with them individually, it's easier simply to
override keyIsPlausible on the class:  
  
modify LockableWithKey  
  keyIsPlausible(key) { return key.ofKind(Key) && !key.ofKind(CardKey) ; }  
;  
  
Since the ssCabinet object overrides this method in its own way, it
won't be affected by this change.  
  
