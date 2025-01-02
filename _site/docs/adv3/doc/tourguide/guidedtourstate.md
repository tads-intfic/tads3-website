<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>GuidedTourState : <a
href="accompanyingstate.htm">AccompanyingState</a><br />
</strong></td>
<td style="text-align: right;"><a
href="accompanyingintravelstate.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="guidedintravelstate.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
There may be occasions when you want an NPC to take the lead and have
the player character invited to follow him or her. First, we'll give a
brief description of how it works.  
  
According to the comments in the library code:  
  
*Guided Tour state. This provides a simple way of defining a "guided
tour," which is a series of locations to which we try to guide the
player character. We don't force the player character to travel as
specified; we merely try to lead the player. The actual travel is up to
the player.  
  
Here's how this works. For each location on the guided tour, create one
of these state objects. Set escortDest to the travel connector to which
we're attempting to guide the player character from the current
location. Set stateAfterEscort to the state object for the next location
on the tour. Set stateDesc to something indicating that we're trying to
show the player to the next stop - something along the lines of "Bob
waits for you by the door." Set arrivingWithDesc to a message indicating
that we just showed up in the current location and are ready to show the
player to the next - "Bob goes to the door and waits for you to follow
him."*  
  
The significant new properties defined on GuidedTourState are:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>escortActor</strong> - the actor being escorted - this is
usually the player character  <br />
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
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>escortDest</strong> - the travel connector we're trying to
show the player character into  <br />
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
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>escortStateClass</strong> - The class we use for our actor
state during the escort travel. By default, we use the basic guided-tour
accompanying travel state class (<a
href="guidedintravelstate.htm">GuidedInTravelState</a>), but games will
probably want to use a customized subclass of this basic class in most
cases. The main reason to use a custom subclass is to provide customized
messages to describe the departure of the escorting actor.  <br />
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
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>stateAfterEscort</strong> - The next state for our actor to
assume after the travel. This should be overridden and set to the state
object for the next stop on the tour.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Now we'll give a very simple example. Sarah has lost her ring, and if
the player character asks her about it enough times, she'll lead him
back inside the cave to look for it, decide she can't find it, and then
lead him back out to the lakeside again. We can define a series of
GuidedTourStates (which must obviously be located in Sarah), that define
her leading the playing character on a brief and futile search for her
lost ring:  
  
+ sarahGuide1 : GuidedTourState  
  stateAfterEscort = sarahGuide2  
  escortDest = lakeDoor2  
  stateDesc = "She's waiting for you by the door. "  
  specialDesc { inherited; stateDesc;}  
;  
  
+ sarahGuide2 : GuidedTourState  
  stateAfterEscort = sarahGuide3  
  escortDest = mainCave  
  arrivingWithDesc = "{The sarah/she} walks round the cave, scanning the  
   floor and the furniture with a deep frown on her face, then shakes  
   her head and walks back over to the door.\<.p\>  
   \<q\>I can't see it here,\</q\> she says, \<q\>Perhaps it's in that  
   big cave over there.\</q\> She starts walking north, then stops  
   and turns, waiting for you to follow.\<.p\>"  
  stateDesc = "She's standing looking at you, waiting for you  
   to follow her into the large cave to the north. "  
  specialDesc { inherited; stateDesc;}   
;  
  
+ sarahGuide3 : GuidedTourState  
  stateAfterEscort = sarahGuide4  
  escortDest = anotherCave  
  arrivingWithDesc = "{The sarah/she} hunts round the cave, peering at  
   the torch on the wall, the trunk on the floor, and the various  
   ways out. Then she lets out a heavy sigh and declares, \<q\>Oh, it's  
   \<i\>hopeless\</i\>! How can I find such a small thing here? Anyway,  
   I'm sure he ran outside with it. Let's go back out by the lake.\</q\>\b  
   So saying, she walks back towards the cave to the south, then stops,  
   waiting for you to follow.\<.p\>"  
  stateDesc = "She's waiting for you by the opening to the cave to  
   the south. "  
  specialDesc {inherited; stateDesc; }  
;  
  
+ sarahGuide4 : GuidedTourState  
  stateAfterEscort = sarahTalking  
  escortDest = lakeDoor  
  arrivingWithDesc = "{The sarah/she} walks briskly over to the door,  
   then stops to wait for you. "  
  stateDesc = "She's waiting for you by the door. "  
  specialDesc {inherited; stateDesc; }  
;  
  
There's one other refinement we can add her, and that's to add
**TourGuide** to Sarah's class list, ahead of Person:  
  
sarah : **TourGuide**, Person 'attractive young woman/brunette' 'young woman' @lakeRoom  
  ...  
;  
  
This will allow the player to type FOLLOW SARAH or FOLLOW WOMAN and have
her lead the way while she's in one of her GuidedTourStates.  
  
There's only one problem: so far we've provided no means for her to
*get* into these GuidedTourStates. Since in this case it will require a
mechanism we haven't yet come to, we'll have to wait until we do, which
will be when we start defining some [AskTopics](asktopic.htm) for
Sarah.  
