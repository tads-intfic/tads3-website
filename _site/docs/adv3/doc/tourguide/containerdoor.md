<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>ContainerDoor : <a
href="component.htm">Component</a><br />
</strong></td>
<td style="text-align: right;"><a
href="complexcontainer.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="singlecontainer.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The purpose of a ContainerDoor is to represent the door of a Container,
when the player might want to refer to it separately. A container's door
cannot be straightforwardly made a component of its container (located
in the container), since this would have the effect of putting the door
*inside* the container, where it would vanish out of sight when the
container was closed. You would therefore normally use a ContainerDoor
as a component of (located in) a
[ComplexContainer](complexcontainer.htm); it then maps OPEN, CLOSE,
LOCK, UNLOCK, LOOK IN and LOOK BEHIND commands to the subContainer of
that ComplexContainer.  
  
For example, the dressing table we've just defined mentions in its
description that it has a pair of doors. To implement those doors we
just need to define the following, immediately after the definition of
the dressing table ComplexContainer object:  
  
+ ContainerDoor '(dressing) (table) door/pair/doors' 'dressing table door'  
  "They're made of the same scratched, stained wood as the dressing table  
   to which they're attached, and perfectly match its generally battered  
   appearance. "  
  isPlural = true  
;  
  
It's also possible to set up a ContainerDoor to act as the door to any
kind of openable container, by setting its **subContainer** property to
point to that container. For example, we could add a door to the locker
in the crew quarters by this means:  
  
locker : LockableContainer, Fixture '(crew) locker' 'locker' @crewQuarters  
  "The locker is fixed firmly to the bulkhead. Its door is fastened by a simple  
   latch mechanism, though the latch looks a bit rusty. "  
  bulkCapacity = 15  
  disambigName = 'crew locker'  
  initiallyLocked = true    
  makeLocked(stat)  
  {  
    if(!lockerLatch.oiled)  
    {  
      reportFailure('The latch is stuck fast. ');  
      exit;  
    }  
    inherited(stat);  
  }    
;  
  
NameAsOther, SecretFixture targetObj = locker location = crewQuarters;  
  
**+ ContainerDoor '(locker) door' 'locker door'  
  "The locker door is a plain wooden front, fastened by a latch. "  
  subContainer = locker  
;**  
  
**++** lockerLatch : Component '(locker) latch' 'latch'  
  "The latch looks a bit rusty. It's currently in the \<\<locker.isLocked  
   ? nil : 'un' \>\>locked position. "  
   ...  
;  
  
Of course, it would probably have been easier to make the locker a
ComplexContainer and attach the ContainerDoor to that; but at least this
shows that other arrangements are possible.  
  
