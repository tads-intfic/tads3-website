---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)





[\[Main\]](index.html)  
*[\[Previous\]](rowmyboat.html)
  [\[Next\]](handlingcashtransactions.html)*

## Going Shopping

The next task is to add the shop. The definition can go straight after
the code listed above (so that the shop exterior is placed in the jetty
room). If you haven't already tried defining your own shop interior, you
could do so now, remembering to add a counter and maybe some items for
sale (which could just be Decoration objects for now). You could also
try adding a bell on the shop's counter, which Heidi can ring for
service.  
  
Here's our version  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

+ Enterable -\> insideShop 'small shop/store' 'shop'  
  "The small, timber-clad shop has an open door, above which is a sign   
   reading GENERAL STORE"  
;  
  
insideShop : Room 'Inside Shop'  
 "The interior of the shop is lined with shelves containing all sorts of   
  items, including basic foodstuffs, sweets, snacks, stationery, batteries,  
  soft drinks and tissues. Behind the counter is a door marked 'PRIVATE'. "  
 out = jetty  
 north asExit(out)  
 south : OneWayRoomConnector  
     {  
       destination = backRoom  
       canTravelerPass(traveler) { return traveler != gPlayerChar; }  
       explainTravelBarrier(traveler)   
        { "The counter bars your way to the door. "; }      
     }  
;  
  
+ Decoration 'private door\*doors' 'door'  
  "The door marked 'PRIVATE' is on the far side of the counter, and there   
  seems to be no way you can reach it. The other door out to the jetty is to   
  the north. "  
;  
  
+ Fixture, Surface 'counter' 'counter'  
  "The counter is about four feet long and eighteen inches wide. "  
;  
  
++ bell : Thing 'small brass bell' 'small brass bell'  
  "The bell comprises an inverted hemisphere with a small brass knob   
   protruding through the top. Attached to the bell is a small sign. "  
  dobjFor(Ring)  
  {  
    verify() {}  
    check() {}  
    action() {"TING!";}  
  }  
;  
  
+++ Component, Readable 'sign' 'sign'  
 "The sign reads RING BELL FOR SERVICE. "  
;  
  
+++ Component 'knob/button' 'knob'  
  "The knob protrudes through the top of the brass hemisphere of the bell. "  
  dobjFor(Push) remapTo(Ring, bell)  
;  
  
backRoom: Room   
  north = insideShop  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Only a few things need any explanation here. The definition of backRoom
is minimal because the Player Character will never visit it - the
location exists solely as somewhere for the shopkeeper to be when she's
not in the shop. We thus define the OneWayRoomConnector south from the
shop interior so that the Player Character can't pass but the shopkeeper
can. Although two doors are mentioned (or at least implied) by the room
description, we supply a Decoration object to represent them; a fuller
implementation isn't necessary. The essential items are the counter and
the bell on the counter that the customer must ring to attract
attention. This introduces a new class, the Component class, which, as
its name suggests, treats objects of that class as components of the
object that contains them. The sign is also of class Readable, which
makes it a more likely target for a **read** command; it would also
allow **read sign** to produce a different description if we had
overridden the readDesc property on the object, but that would be rather
fussy here. We allow the player to ring the bell either with **ring
bell** or **push knob**, the latter command remapping to the former.
Since **ring** is not a verb defined in the library, we need to define
it, which we can do by copying the definition of Row and making the few
necessary changes:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

DefineTAction(Ring);  
  
VerbRule(Ring)  
  'ring' singleDobj  
  : RingAction  
  verbPhrase = 'ring/ring (what)'  
;  
  
modify Thing  
  dobjFor(Ring)   
  {  
    preCond = \[touchObj\]  
    verify() { illogical('{You/he} can\\t ring {that dobj/him}'); }  
  }  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

If we were designing this game for real, we'd probably want to populate
the shop with a few more decoration objects, e.g. for the shelves, the
items on the shelves, and a cash register on the counter; we'll be
adding some of these later, the rest can be left, yet again, as an
exercise for the reader. Right now we need to attend to what happens
when the bell is rung; obviously more than just displaying the string
'TING' is required; we need to summon the shopkeeper.  
  
There are several ways this could be done; the way we shall use here
probably isn't the simplest or the most elegant, it's simply one that
lets us try out some features of the library we haven't met yet. In
brief, we'll cause the ringing of the bell to trigger a SoundEvent.
We'll then add a SenseConnector between the inside of the shop and the
back room so that the SoundEvent can be detected by the shopkeeper even
when she's in the back room, but we also need to make the shopkeeper a
SoundObserver so she'll be receptive to the sound. We'll then have the
sound trigger a daemon on the shopkeeper to make her walk into the shop
one turn later (a fuse would have done just as well, so it doesn't much
matter which we use here.)  
  
This probably sounds rather complicated, if not downright
incomprehensible, so let's take it one step at a time. First, we need to
define the SoundEvent:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

bellRing : SoundEvent  
  triggerEvent(source)  
  {  
    "TING!\<.p\>";  
    inherited(source);  
  }  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

We have made the SoundEvent responsible for producing the "TING!" so
we've had to override its triggerEvent(source) method, otherwise the
definition of bellRing would have been even simpler. The call to
inherited(source) within triggerEvent(source) is absolutely vital here,
since it's the inherited method (i.e. the behaviour defined on the
class) that does all the work of notifying interested parties that the
sound event has just happened. The source parameter is the object from
which the sound is supposed to emanate. This is the bell, whose
dobjFor(Ring) now needs to its action method redefined thus:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>action()       {      bellRing.triggerEvent(self);     } <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Where self, of course, refers to the bell object. The next task is to
make sure that the bell ring can be heard in the back room as well as
the shop. To do that we need to define a SenseConnector between the
two:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

SenseConnector, Intangible 'wall' 'wall'  
  connectorMaterial = paper  
  locationList = \[backRoom, insideShop\]  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

If everything works as it should, giving the SenseConnector the name
'wall' should be unnecessary, but if something works unexpectedly and
the parser wants to refer to this object, it's as well that it should
have a recognizable name so we can see what's happening. Since the sound
does notionally travel through the wall, that's a sensible name to give
it. On the other hand, the player does not need to interact with this
object in any way, so we make it of class Intangible (as well as
SenseConnector), so that it does not have any physical presence. The
connectorMaterial defines the senses this SenseConnector will pass:
paper is predefined to be transparent to sound and smell but opaque to
sight and touch; in this case we don't care one way or the other about
smell, and since it does what we want with the other three senses, this
will do fine.  
  
Now all we have to do is to define the shopkeeper. At this point we
shan't program all her behaviour, just what's needed to get her to
respond to the bell ring:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

shopkeeper : SoundObserver, Person 'young shopkeeper/woman' 'young shopkeeper'  
   @backRoom  
"The shopkeeper is a jolly woman with rosy cheeks and fluffy blonde curls. "  
  isHer = true  
  properName = 'Sally'  
  notifySoundEvent(event, source, info)  
  {  
    if(event == bellRing && daemonID == nil && isIn(backRoom))  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>daemonID = new Daemon(self, &amp;daemon, 2);  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

    else if(isIn(insideShop) && event==bellRing)  
     "\<q\>All right, all right, here I am!\</q\> says {the   
        shopkeeper/she}.\<.p\>";  
  }  
  daemonID = nil  
  daemon  
  {  
     moveIntoForTravel(insideShop);  
    "{The shopkeeper/she} comes through the door and stands behind the   
      counter. ";  
    daemonID.removeEvent();  
    daemonID = nil;     
  }  
  globalParamName = 'shopkeeper'  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The first new feature to note here is the addition of SoundObserver to
the shopkeeper's class list. This allows us to define the
notifySoundEvent method, which will be triggered by the bell ring. Since
the bell ring is the only soundEvent in the game we hardly need to test
for it, but to be on the safe side we do so anyway
(if event == bellRing). At the same time we check that the shopkeeper is
still in the back room and that the daemon is not yet operative. We also
check to see if the bell is rung while she's in the shop so she can
simply respond with a suitable remark.  
  
The complicated part is setting up the daemon. A new daemon is created
with a call to new Daemon(obj, prop, interval), where obj is the object
it refers to, prop is the method on that object that is called each time
the daemon is invoked, and interval is the number of turns between each
invocation of the daemon. Here we define the daemon to run the daemon
method (note that the parameter is supplied as &daemon) on self (the
shopkeeper) every second turn (this means she won't come into the shop
until the turn after the bell is rung). Since we want to be able to stop
the daemon again we need to store a reference to the daemon, which we do
in the property daemonID (note that we could have called the daemon
method and the reference property anything we liked).  
  
The daemon method first moves the shopkeeper into the shop and displays
a suitable message to announce her arrival. We use moveIntoForTravel
rather than moveInto to move the shopkeeper since with the latter the
library code tries to find a path to move her through, and may well end
up moving her through the SenseConnector with dire consequences (i.e. a
runtime error); moveIntoForTravel avoids this problem. Once the
shopkeeper has moved the daemon has done its work, so we get it to tidy
up after itself, first by calling daemonID.removeEvent(), and finally by
resetting daemonID back to nil so we can easily test for there no longer
being an active daemon.  
  
In this particular case we could have achieved the same effect slightly
easier by using a fuse rather than a daemon. Instead of  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>daemonID = new Daemon(self, &amp;daemon, 2); <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

We could have written  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>daemonID = new Fuse(self, &amp;daemon, 1); <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

(Note the change in the number from 2 to 1 to produce the same effect of
the shopkeeper moving on the next turn). The use of the fuse would have
avoided the need for the line:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>daemonID.removeEvent(); <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

We should still need to keep track of whether we had an active fuse
(using daemonID, which we might rename fuseID had we used a fuse) in
order to make sure that a second ringing of the bell while the fuse was
still active did not cause the creation of a second fuse.  
  
Having reached this point, we can start expanding the definition of the
shopkeeper using ActorStates and TopicEntries as with Joe the Charcoal
Burner; you might like to try this out for yourself before reading this
guide's version over the page.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

+ sallyTalking : InConversationState  
   specialDesc = "{The shopkeeper/she} is standing behind the counter   
    talking with you. "  
   stateDesc = "She's standing behind the counter talking with you. "  
   nextState = sallyWaiting  
;  
  
++ sallyWaiting : ConversationReadyState  
  specialDesc = "{The shopkeeper/she} is standing behind the counter,  
    checking the stock on the shelves. "  
  stateDesc = "She's checking the stock on the shelves behind the counter. "  
  isInitState = true    
  takeTurn  
  {  
    if(!gPlayerChar.isIn(insideShop) && shopkeeper.isIn(insideShop))   
      shopkeeper.moveIntoForTravel(backRoom);  
    inherited;    
  }  
;  
  
+++ HelloTopic  
  "\<q\>Hello, \<\<getActor.isProperName ? properName : 'Mrs Shopkeeper'\>\>,\</q\>  
      you say.\<.p\>  
    \<q\>Hello, \<\<getActor.isProperName ? 'Heidi' : 'young lady'\>\>, what can  
    I do for you?\</q\> asks {the shopkeeper/she}."  
;  
  
+++ ByeTopic  
   "\<q\>'Bye, then!\</q\> you say.\<.p\>  
    \<q\>Goodbye\<\<getActor.isProperName ? ', Heidi' : nil\>\>.   
    See you again soon!\</q\> {the shopkeeper/she} beams in return. "  
;  
  
+++ ImpByeTopic  
  "{The shopkeeper/she} turns away and starts checking the stock on the   
     shelves.\<.p\>"  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

There is scarcely anything new here. Note the use of the double
angle-bracket construction in the HelloTopic and ByeTopic to vary what's
said according to whether Sally and Heidi have exchanged names yet, and
the separate ImpByeTopic to decide what should be displayed when the
conversation is ended; if the conversation ends because Heidi stops
conversing or walks out of the shop, Sally simply goes back to work.
Heidi will be considered to have stopped talking if she fails to address
a conversational command to Sally for the number of turns in the
attentionSpan of Sally's current InCoversationState. By default this is
four; it can be made effectively infinite by setting attentionSpan to
nil.  
  
The takeTurn() method is called once every turn that this is Sally's
current ActorState. Here we use it to check whether Heidi is still
inside the shop; if she isn't, and Sally still is, then we send Sally
back to her back room. It may occur to you that the takeTurn method is
effectively a kind of daemon; to produce the effect of Sally coming into
the shop the turn after the bell is rung, we could simply have added a
few extra lines of code to this takeTurn method, perhaps in conjunction
with a custom property. We could have dispensed with the whole mechanism
of SoundEvent and SenseConnector, and simply have added a line of code
in the dobjFor(Ring) method of the bell to change the value of the
custom property which the additional code in the takeTurn() method could
test for. But then we'd have lost the opportunity to look at sensory
events, sense connectors, fuses and daemons. If you want to try to do it
the simpler way, by all means experiment.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Since the shopkeeper has been summoned by the ringing of the bell, she
is likely to initiate the conversation rather than waiting to be
addressed by her customer. To handle this, add the following line after
daemonID = nil; at the end of the shopkeeper's daemon method:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>initiateConversation(sallyTalking, 'sally-1'); <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

And then add the definition of the appropriate conversation node; a good
place for it would be between the definition of the shopkeeper and the
definition of sallyTalking:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

+ ConvNode 'sally-1'  
  npcGreetingMsg = "\<q\>Right, what can I get you?\</q\> she asks. \<.p\>"  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

We don't need to put any topics under this conversation node; its only
function is to display the npcGreetingMsg. Any topics can then be
handled by the sallyTalking:InConversationState. Let's start by adding a
few now (put them after the definition of sallyWaiting):  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

++ AskTellTopic \[shopkeeper, gPlayerChar\]  
  "\<q\>I'm Heidi. What's your name?\</q\> you ask.\<.p\>  
  \<q\>Hello, Heidi; I'm \<\<shopkeeper.properName\>\>,\</q\> she smiles.  
  \<\<shopkeeper.makeProper\>\>"  
;  
  
+++ AltTopic  
 "\<q\>I'm feeling really \<i\>very\</i\> well today; how are you?\</q\> you   
  ask.\<.p\>  
 \<q\>I'm feeling very well too, thanks.\</q\> she tells you. "  
 isActive = (shopkeeper.isProperName)  
;  
  
++ AskTellTopic @burner  
  "\<q\>Do you know {the burner/him}, the old fellow who works in the   
   forest?\</q\> you enquire innocently.\<.p\>  
  \<q\>He's not \<i\>that\</i\> old,\</q\> she replies coyly. "  
;  
  
++ AskTellTopic @tWeather  
  "\<q\>Lovely weather we're having, don't you think?\</q\> you remark.\<.p\>  
  \<q\>Absolutely,\</q\> she agrees, \<q\>and with luck, it should stay fine   
   tomorrow.\</q\>"  
;  
  
++ DefaultAskTellTopic, ShuffledEventList  
  \[  
    '\<q\>What do you think about ' + gTopicText + '?\</q\> you ask.\<.p\>  
    \<q\>Frankly, not a lot.\</q\> she replies. ',  
    '\<q\>I think it\\s really interesting that...\</q\> you begin.\<.p\>  
    \<q\>Oh yes, really interesting.\</q\> she agrees. ',  
    'You make polite conversation about ' + gTopicText + ' and  
    {the shopkeeper/she} makes polite conversation in return. '  
  \]  
;  
  
Most of this should be fairly familiar. Note that placing a list in
square brackets, as in the \[shopkeeper, gPlayerChar\] in the first
AskTellTopic means that the topic can be triggered by any of the objects
in the list; so this topic will work equally well for **ask shopkeeper
about herself** or **tell shopkeeper about yourself**. Note also the use
of string concatenation (joining strings together with the + operator)
in the DefaultAskTellTopic to allow the use of a variable element
(gTopicText) in an EventList. The other slight novelty (unless you
already experimented with it at the end of the previous chapter) is the
use of a Topic object to talk about the weather; since the weather is
not a physical object defined anywhere in the game, we don't have a game
object to match it to. To cope with this type of situation, where you
want to be able to converse about things that are not game objects,
there is a special Topic class. In this case all we need define is:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

tWeather : Topic 'weather';  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

There's nothing magic about the 't' with which I started the object name
here; that's just a convention I use to mark it as a Topic object as
opposed to an ordinary game object. Note that, unlike game objects,
Topic objects are assumed to be known by default, so that they are
always available to **ask about** and **tell about** commands. This can
be changed by setting defining the isKnown property of the topic to nil
when it is defined, e.g. if a player is to be informed about a gruesome
murder during a conversation, but does not know of it when the game
begins, one might define the murder topic object thus:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

tMurder : Topic 'gruesome murder'  
    isKnown = nil  
;  
  
When the player then learns of the murder at a later point one could use
the gSetKnown(tMurder) macro to set tMurder.isKnown = true.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](rowmyboat.html)
  [\[Next\]](handlingcashtransactions.html)*


