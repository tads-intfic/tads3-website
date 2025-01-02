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
<td style="text-align: left;"><strong>IndirectLockable : <a
href="lockable.html">Lockable</a><br />
</strong></td>
<td style="text-align: right;"><a href="lockable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="keyedcontainer.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
IndirectLockable is another mix-in class for use with objects such as
doors that cannot be unlocked with a simple UNLOCK command, but do not
use a key; that is something that must be unlocked by some other
mechanism such as a lever or switch. To make things more interesting
we'll change the door into the lakeRoom into an indirectLockable, which
is unlocked by inserting the brass coin into a slot:  
  
+ lakeDoor : **IndirectLockable**, Door 'smart new door' 'smart new door'  
   **"The door is completely plain apart from a small vertical slot. "**  
   cannotUnlockMsg = 'The door does not appear to have a conventional lock. '  
;  
  
++ RestrictedContainer, Component 'small vertical slot' 'slot'  
   "It's about half an inch long; next to it is some faded writing that  
    just about still says\nENTRANCE TO LAKE\nONE GROAT. "  
   validContents = \[silverCoin, brassCoin\]  
   notifyInsert(obj, newCont)  
   {  
     if(obj==brassCoin)  
     {  
       "As the brass coin disappears into the slot you hear a click from the door. ";  
       obj.moveInto(nil);  
       lakeDoor.makeLocked(nil);  
     }  
     else  
     {  
       "Despite initial appearances \<\<obj.theName\>\> doesn't seem to be quite  
        right for the slot. ";         
     }  
     exit;  
   }  
;  
  
We make use of a RestrictedContainer to accept the coin, but since we
have left a silver coin in plain sight next to the door the player is
almost bound to try it, so we include it in the list of validContents so
that we can display a custom message for it. We handle the insertion of
either coin in the notifyInsert method. If the coin is the brass one, we
display a suitable message, move the coin into nil (since it presumably
disappears into some repository) and unlock the lakeDoor by calling is
**makeLocked** method: makeLocked(nil) unlocks the door, whereas
makeLocked(true) would lock it again (which is not something we want to
do here). Whichever coin was inserted we end notifyInsert with an exit
statement since we do not in fact want the rest of the default command
handling, which would move the coin into the slot.  
  
Note also the use of the **cannotUnlockMsg** property to provide a
customized response to attempts to unlock the door other than by
inserting the coin.  
  
The **initiallyLocked** property of an IndirectLockable controls whether
it starts life locked (if this property is true) or unlocked (if its
nil). By default, initiallyLocked is true.  
  
Like Lockable, IndirectLockable is a mix-in class that *must* precede
any Thing-derived class it is mixed in with, as in:  
  
+ lakeDoor : **IndirectLockable**, Door 'smart new door' 'smart new door'  
   **"The door is completely plain apart from a small vertical slot. "**  
   cannotUnlockMsg = 'The door does not appear to have a conventional lock. '  
;  
  
The following would have been wrong (since the door would not have
started out locked):  
  
+ lakeDoor : Door, **IndirectLockable** 'smart new door' 'smart new door'  
   **"The door is completely plain apart from a small vertical slot. "**  
   cannotUnlockMsg = 'The door does not appear to have a conventional lock. '  
;  
  
  
