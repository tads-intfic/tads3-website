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
<td style="text-align: left;"><strong>LockableContainer : <a
href="lockable.html">Lockable</a>, <a
href="openablecontainer.html">OpenableContainer</a><br />
</strong></td>
<td style="text-align: right;"><a
href="notifyinsert+notifyremove.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="restrictedcontainer.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A LockableContainer is simply an OpenableContainer that can also be
locked and unlocked. This is not as useful as it might sound since a
LockableContainer can be locked and unlocked simply by the player
issuing LOCK LOCKER and UNLOCK LOCKER commands. Moreover, even if a
LockableContainer starts locked, an attempt to OPEN it will result in an
implicit UNLOCK command, so that in practice, a LockableContainer
behaves much like an OpenableContainer. If you want a container that's
locked and unlocked with a key you need to use KeyedContainer, which
we'll come to presently.  
  
A simple example of LockableContainer might be locker, which we'll put
in the crew quarters:  
  
locker : LockableContainer, Fixture '(crew) locker' 'locker' @crewQuarters  
  "The locker is fixed firmly to the bulkhead. "  
  bulkCapacity = 15  
  disambigName = 'crew locker'  
  initiallyLocked = true  
;  
  
Note that if we want a LockableContainer to start locked, we need to set
its **initiallyLocked** property to true. The library does this for
[Door](door.html) and IndirectLockable, but you need to do it for
anything else (except subclasses of Door, of course).  
  
The sailor's cap would be a good thing to put in the locker, so let's
amend its starting location:  
  
cap : Wearable, Container 'sailor\\s cap' 'sailor\\s cap' **@locker**  
  "It's a large round hat with a white top and a small blue peak. "  
  bulkCapacity = 3  
  isOpen { return !isWorn(); }  
  iobjFor(PutIn) { preCond = static inherited + objNotWorn }  
;  
  
  
At this point we should update the definition of crewQuarters to reflect
the presence of the locker and the galley further forward:  
  
crewQuarters : DarkCabin 'Crew Quarters' 'the crew quarters'  
  "The crew quarters seem largely deserted**, apart from a single locker  
   fixed to the bulkhead**. There's an exit back aft and a ladder leading down into   
   the hold. **Another exit leads foreward.** "  
   down = holdLadderDown  
   aft = greatCabin  
   **fore = galley**  
   cannotGoThatWayInDark()   
     ...  
;  
  
To make the lock on the locker a bit more worthwhile, we'll suppose that
it's fastened by a latch that's rusted shut, and which will only open
once we have poured some oil on it. To do this we add a custom oiled
property, which we use in the **makeLocked** method. This method is
called in response both to a LOCK and an UNLOCK command; its *stat*
parameter is true if we want to lock something and nil if we want to
unlock it. We can use this method to abort any attempt to lock or unlock
the locker until the latch has been oiled. Finally, we add some handling
for the PourOnto command on the latch, so that if this latch is the
indirect object of PourOnto and the direct object is the oilcan, the
oiled property is set to true (which will then allow the locker to be
unlocked and opened). Since the player may also try to PULL or PUSH the
latch, we add handling for that, making the two commands equivalent. We
also redirect any attempts to OPEN, CLOSE, LOCK or UNLOCK the latch back
to the locker object.  
  
locker : LockableContainer, Fixture '(crew) locker' 'locker' @crewQuarters  
  "The locker is fixed firmly to the bulkhead. **Its door is fastened by a simple  
   latch mechanism, though the latch looks a bit rusty.** "  
  bulkCapacity = 15  
  disambigName = 'crew locker'  
  initiallyLocked = true    
  **makeLocked(stat)  
  {  
    if(!lockerLatch.oiled)  
    {  
      reportFailure('The latch is stuck fast. ');  
      exit;  
    }  
    inherited(stat);  
  }**    
;  
  
NameAsOther, <span id="secretfixture">SecretFixture targetObj = locker location = crewQuarters;  
  
+ lockerLatch : Component '(locker) latch' 'latch'  
  "The latch looks a bit rusty. It's currently in the \<\<locker.isLocked  
   ? nil : 'un' \>\>locked position. "  
  iobjFor(PourOnto)  
  {  
    verify() { }  
    action()  
    {  
      if(gDobj == oilCan)  
      {  
        "You pour some oil onto the latch. ";  
        oiled = true;  
      }  
      else  
        "It doesn't seem to do much. ";  
    }  
  }  
  dobjFor(Push) asDobjFor(Pull)  
  dobjFor(Pull)  
  {  
    verify() {}  
    action()   
    {         
      locker.makeLocked(!locker.isLocked);  
      "This \<\<locker.isLocked ? nil : 'un'\>\>locks the locker. ";  
    }  
  }  
  oiled = nil  
  disambigName = 'locker latch'  
  dobjFor(Open) remapTo(Open, locker)  
  dobjFor(Close) remapTo(Close, locker)  
  dobjFor(Lock) remapTo(Lock, locker)  
  dobjFor(Unlock) remapTo(Unlock, locker)  
;  
    
A fatally easy mistake to have made here would have been to have made
the latch a Component of the locker object. The problem with this would
have been that this would have placed the latch *inside* the locker, and
therefore not available until the locker was opened (and it's impossible
to open the locker without access to the latch, so we'd be in a pretty
fix!). For that reason we define another object for the latch to be a
Component of (a better way would have been to make the locker a</span>
[ComplexContainer](complexcontainer.html), but we haven't come to those
yet). The player will never interact with this object directly, so it
needs no vocabulary. We want it to appear to be the locker when, for
example, the player attempts to TAKE THE LATCH, so we make it a
**NameAsOther** (a mix-in class) and set its **targetObj** property to
the locker; the effect of this is that any parser messages referring to
this object will describe it in exactly the same way as the locker. We
also make the object a **SecretFixture**, since it is an object we need
for internal implementation, but not one the player will ever interact
with directly.  
  
Note that on the locker we use exit to abort the UNLOCK command if
latch.oiled is nil, and the reportFailure macro to explain why the
unlock command has failed. The latter is important since the UNLOCK
might be an implicit action when the player tries to OPEN the locker;
using reportFailure here ensures that the implicit action report the
player sees then says "(first trying to unlock the locker)" rather than
"(first unlocking the locker)". The PourOnto handling is fairly
straightforward: it tests whether the direct object (gDobj) is the oil
can, and if so displays an appropriate message and sets the oiled
property to true, otherwise it displays a non-commital message about not
much happening.  
  
We also need to define the oil can. Here we'll provide the minimal
definition to do the job. We'll elaborate it later when we use the oil
for other purposes (such as fuel for a lamp).  
  
oilCan : Thing 'oil can/oilcan' 'can of oil' @secretPassage  
  "It's a can full of oil. "  
  initSpecialDesc = "An old oil can lies abandoned on the ground. "  
  dobjFor(PourOnto) { verify() { } }  
;  
  
  
  
