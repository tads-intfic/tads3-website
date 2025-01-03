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
<td style="text-align: left;"><strong>Goal : MenuTopicItem,
HintMenuObject<br />
</strong></td>
<td style="text-align: right;"><a href="hintmenu.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="hint.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Goals are the main building blocks of your hint system. They comprise an
objective the player is trying to establish, together with a list of
hints to help the player towards that goal.  
  
The first thing to appreciate about Goals is that they may be in one of
three states: **Undiscovered**, **Open** or **Closed**. A Goal is in the
*Undiscovered* state before the player has got to the point where s/he
knows that it might be an objective s/he needs to pursue. It is *Open*
once the player is (or should be) aware that this is something s/he may
need to achieve, and may require hints on it. It becomes *Closed* once
the player has achieved this particular objective (and so no longer
needs any hints for it). The hints relating to a Goal are offered to the
player only when the Goal is Open. While the Goal is undiscovered,
displaying even the name of the goal may be giving away information
prematurely, and once the Goal is fulfilled, continuing to display it is
unnecessary.  
  
Obviously it is up to you, the author, to define when a Goal changes
from being *Undiscovered* to being *Open*, and from being *Open* to
being *Closed*. But the Goal class defines a number of properties to
help you do this:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>closeWhen</strong> - Determine if there's any condition that
should close this goal. We'll check closeWhenSeen, closeWhenDescribed,
and all of the other closeWhenXxx conditions; if any of these return
true, then we'll return true. See OpenWhen.  <br />
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
<td><strong>closeWhenAchieved</strong> - An optional Achievement object
that closes this goal. Once the achievement is completed, this goal's
state will automatically be set to Closed. This makes it easy to
associate the goal with a puzzle: once the puzzle is solved, there's no
need to show hints for the goal any more.  <br />
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
<td><strong>closeWhenDescribed</strong> - close the goal when the given
object is described (by EXAMINE).  <br />
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
<td><strong>closeWhenKnown</strong> - an optional Topic or Thing that
closes this goal when known  <br />
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
<td><strong>closeWhenRevealed</strong> - an optional &lt;.reveal&gt; tag
that closes this goal when revealed  <br />
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
<td><strong>closeWhenSeen</strong> - An option object that, when seen by
the player character, closes this goal. Many goals will be things like
"how do I find the X?", in which case it's nice to close the goal when
the X is found. See openWhenSeen.  <br />
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
<td><strong>closeWhenTrue</strong> - an optional general-purpose check
that closes the goal  <br />
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
<td><strong>openWhen</strong> - Determine if there's any condition that
should open this goal. This checks openWhenSeen, openWhenDescribed, and
all of the other openWhenXxx conditions; if any of these return true,
then it returns true. Note that this should generally NOT be overridden
in individual instances; normally, instances would define openWhenTrue
instead. However, some games might find that they use the same special
condition over and over in many goals, often enough to warrant adding a
new openWhenXxx property to Goal. In these cases, you can use 'modify
Goal' to override openWhen to add the new condition: simply define
openWhen as (inherited || newCondition), where 'newCondition' is the new
special condition you want to add.  <br />
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
<td><strong>openWhenAchieved</strong> - An optional Achievement object
that opens this goal. This goal will be opened automatically once the
goal is achieved, if the goal was previously undiscovered. This makes it
easy to set up a hint topic that becomes available after a particular
puzzle is solved, which is useful when a new puzzle only becomes known
to the player after a gating puzzle has been solved.  <br />
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
<td><strong>openWhenDescribed</strong> - this is like openWhenSeen, but
opens the topic when the given object is described (with EXAMINE) .
 <br />
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
<td><strong>openWhenKnown</strong> - An optional Topic or Thing that
opens this goal when the object becomes "known" to the player character.
This will open the goal as soon as gPlayerChar.knowsAbout(openWhenKnown)
returns true. This makes it easy to open a goal as soon as the player
comes across some information in the game.  <br />
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
<td><strong>openWhenRevealed</strong> - An optional &lt;.reveal&gt; tag
name that opens this goal. If this is set to a non-nil string, we'll
automatically open this goal when the tag has been revealed via
&lt;.reveal&gt; (or gReveal()).  <br />
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
<td><strong>openWhenSeen</strong> - An optional object that, when seen
by the player character, opens this goal. It's often convenient to
declare a goal open as soon as the player enters a particular area or
has encountered a particular object. For such cases, simply set this
property to the room or object that opens the goal, and the goal will
automatically be marked as Open the next time the player asks for a hint
after seeing the referenced object. Note that this may not always work
as expected, since there may be some forms of discovery (e.g. where an
action by the player causes an object to be moved into scope via
moveInto and a custom report) that do not result in marking the object
as seen, so that openWhenSeen (and closedWhenSeen) may not become true
as expected.  <br />
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
<td><strong>openWhenTrue</strong> An optional arbitrary check that opens
the goal. If this returns true, we'll open the goal. This check is made
in addition to the other checks (openWhenSeen, openWhenDescribed, etc).
This can be used for any custom check that doesn't fit into one of the
standard openWhenXxx properties.  <br />
</td>
</tr>
</tbody>
</table>




 


To illustrate the use of openWhen and closedWhen, we'll modify Goal to
add our custom openWhenMoved and closeWhenMoved conditions. These can be
useful alternatives to openWhenSeen and closeWhenSeen in situations
where the library may not mark an object as seen, but either the act of
moving it into scope or that of the player character taking it can be
relied upon to set moved = true.  
  
modify Goal  
  openWhenMoved = nil  
  closeWhenMoved = nil  
  openWhen = (inherited \|\| (openWhenMoved != nil && openWhenMoved.moved))  
                  
  closeWhen = (inherited \|\| (closeWhenMoved != nil && closeWhenMoved.moved))  
;  


 


Next we should list the other properties of Goal:  


 


<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>title</strong> - The topic question associated with the
goal. The hint system shows a list of the topics for the goals that are
currently open, so that the player can decide what area they want help
on.  <br />
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
<td><strong>goalState</strong> - This goal's current state. We'll start
off undiscovered. When a goal should be open from the very start of the
game, this should be overridden and set to OpenGoal.  <br />
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
<td><strong>isActiveInMenu</strong> - we're active in our parent menu if
our goal state is Open  <br />
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
<td><strong>location</strong> - The goal's parent menu - this is usually
a HintMenu object. In very simple hint systems, this could simply be a
top-level hint menu container; more typically, the hint system will be
structured into a menu tree that organizes the hint topics into several
different submenus, for easier navigation.  <br />
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
<td><strong>menuContents</strong> - The list of hints for this topic.
This should be ordered from most general to most specific; we offer the
hints in the order they appear in this list, so the earlier hints should
give away as little as possible, while the later hints should get
progressively closer to just outright giving away the answer. Each entry
in the list can be a simple (single-quoted) string, or it can be a Hint
object. In most cases, a string will do. A Hint object is only needed
when displaying the hint has some side effect, such as opening a new
Goal.  <br />
</td>
</tr>
</tbody>
</table>



  
Normally the only properties you will need to worry about when
constructing your hints are *title*, *menuContents* and the various
*OpenWhenXXX* and *CloseWhenXXX* conditions. Since the first two are
common to all Goal objects, they are defined on the Goal template, so
that:  
  
+ Goal   
    title = 'How do I open the door?'  
    menuContents =  
    \[  
       'First find the key. ',  
       'Then try unlocking the door with the key. ',  
       'Now open the door. '  
    \]  
;  
  
Can be written simply as:  
  
+ Goal 'How do I open the door?'  
    \[  
       'First find the key. ',  
       'Then try unlocking the door with the key. ',  
       'Now open the door. '  
    \]  
;  
  
(The [Goal template](goaltemplate.html) has a couple of extra optional
elements, but we'll try to keep things simple here).  
  
After all these preliminaries, we can at last proceed to give a few
examples. The first even faintly puzzling obstacle the player is likely
to encounter is the large boulder preventing egress west from the main
cave. It may be a good idea to provide two sets of hints for this, one
pointing the player towards finding the dynamite, and the second
prompting the player how to make good use of the dynamite once it's
found. The boulder problem will become apparent as soon as the boulder
is seen. We want to close one Goal and move on to the next once the
dynamite is found, but this won't necessarily work with
open/closedWhenSeen since the dynamite isn't necessarily marked as seen
when the player discovers it. Instead we'll use our custom
open/closedWhenMoved to do the job. CloseWhenMoved will also work nicely
to close the second goal, since once the boulder's blown up it's moved
into nil, but it cannot be moved by any other means:  
  
  
+ HintMenu 'In the First Set of Caves'  
;  
  
++ Goal 'How do I get past the boulder in the main cave?'  
  \[   
    'Well, you won\\t be able to push it. ',  
    'You\\ll need to find some way of making it disappear. ',  
    'Try blowing it up. ',  
    'You\\ll need some dynamite. ',  
    'There\\s some dynamite not far away. ',  
    'But it\\s buried. ',  
    'Seen a spade anywhere? '  
  \]  
  openWhenSeen = boulder  
  closeWhenMoved = dynamite  
;  
  
++ Goal 'How do I get rid of that boulder in the main cave?'  
 \[  
   'What did you find in the small sandy cave at the end of the secret passage? ',  
   'What might you use dynamite for? ',  
   'Are there any fire sources to hand near the boulder? ',  
   'Do you want to be holding the dynamite when it detonates? ',  
   'Examine the boulder closely. ',  
   'Does examining the boulder suggest where you might put the dynamite?',  
   'Light the dynamite from the torch on the wall, put in the boulder,  
    then scarper until you hear the explosion. '  
 \]  
 openWhenMoved = dynamite  
 closeWhenMoved = boulder  
;  
  
A slightly trickier Goal to deal with is that for opening the trunk. On
the one hand, at what point does the player become aware that unlocking
the trunk might be a problem? It's hardly necessary to provide a hint
telling the player to go and find the key as soon as s/he sees the trunk
. On the other hand, once the key's been found and tried and it fails to
open the trunk, the player will recognize that the problem is more
complicated than it seemed. This might be a good point at which to open
the Goal. But how can the Goal tell that this point has been reached?
The neatest way might might be to stick a \<.reveal\> tag in the message
that reports that the key fits the lock but won't turn and test for that
in the openWhenRevealed property.  
  
On the other hand, when should this goal be closed? The tempting thing
would be to test for the trunk being open or unlocked, but this *might*
not work, since the player *could* close and lock the trunk again, and
if the next time the library checked (i.e. the next time the player
asked for hints) the trunk was re-closed or re-locked, the Goal would
not be closed. But once the player has opened the trunk s/he will see
its contents, so we can test for one of the items inside the trunk being
seen:  
  
++ Goal 'How do I unlock the trunk? '     
  \[  
    'Well, you\\ve already found the right key. ',  
    'You\\ll have to do something to make the key work. ',  
    'It will take a long journey to find what you need. ',      
    'How might you gain access to future technology?'  
  \]  
  openWhenRevealed = 'trunk-lock'  
  closeWhenSeen = glassJar  
;  
  
The list of hints here is only partial, and would ideally need to be
expanded, but instead we'll conclude with a more urgent task, namely
ensuring that the appropriate \<.reveal\> tag actually gets revealed
when it's meant to:  
  
trunk : KeyedContainer, Heavy 'large black trunk' 'large black trunk' @mainCave  
  initSpecialDesc = "A large black trunk rests in the middle of the cave. "  
  initiallyLocked = true  
  keyList = \[brassKey\]    
  lockOrUnlockAction(lock)  
  {  
    if(gIobj.isBent)      
       reportFailure('{The iobj/he} fits the lock but won\\t   
          quite turn in it.**\<.reveal trunk-lock\>** ');      
    else  
      inherited(lock);  
  }    
;  
  
  
