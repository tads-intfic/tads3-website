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
<td style="text-align: left;"><strong>Basic Actors<br />
</strong></td>
<td style="text-align: right;"><a
href="overview-actors+npcs.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="actorcustomization.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Without further ado, we'll start defining the basic Actor (actually
Person) objects we'll be needing in this game. Because, with all their
associated helper objects (ActorStates, TopicEntries, ConvNodes,
TopicGroups and AgendaItems) actor definitions can end up getting long
and complicated, it is generally worth defining each but the very
simplest NPC in its own source file. We'll begin the Sarah, the young
lady who will become the player character's companion and helper:  
  
sarah : Person 'attractive young woman/brunette' 'young woman' @lakeRoom  
  "She's an attractive brunette, somewhere in her mid-twenties. "  
  isHer = true  
  properName = 'Sarah'  
  globalParamName = 'sarah'  
;  
  
Often, this is all that is needed in the definition of the basic Actor
object. We define **isHer** = true so that the parser knows this NPC is
female (and can be referred to with feminine pronouns such as 'she' and
'her'). Adding a **globalParamName** to an actor is nearly always
useful, particularly in a case like this where the woman will change
from 'the young woman' to 'Sarah' once we get to know her; it allows us
to use whatever we have defined as the globalParamName in parameterised
strings like "{The sarah/she} smiles at you warmly" and have the game
display "The young woman smiles at you warmly" or "Sarah smiles at you
warmly" as appropriate to our knowledge of her name. The other property
we have define, **properName**, is not a library property at all, but
one we are using for our own purposes to store the name the young woman
will eventually be known by. To make this useful we need to add a
corresponding custom method to the actor class:  
  
modify Actor  
  makeProper()  
  {  
    if(properName != nil)  
    {  
      name = properName;  
      initializeVocabWith(properName);  
      isProperName = true;  
    }  
    return name;  
  }  
;  
  
What the makeProper method does is (provided properName is non nil)
change the name property to the properName (e.g. "young woman" to
"Sarah"), add properName to the vocabulary words for the actor (so
henceforth we can also refer to the young woman as "sarah" in commands),
and sets the library property **isProperName** to true so that the game
knows that the actor's name is now a proper name and will display
messages like "Sarah is here" rather than "The Sarah is here". Finally
the method returns the name of the actor as it now is; this means it can
be used in conversational text such us "\<q\>Hello, I'm
\<\<sarah.makeProper\>\>.\</q\> the young woman introduces herself" both
to display the name and to update the Actor object appropriately at the
same time. Unfortunately, we'll have to wait till we get into
programming conversations to see this in action (unless you want to add
some temporary code to try it out, e.g. by making it a response in
sarah.actionDobjKiss).  
  
We have already made a temporary definition of the curator, but let's
move him to his own file and set him up similarly:  
  
curator : Person 'curator' 'curator' @behindTable  
  "The curator is a ferret-faced little man in is mid-forties. "  
  isHim = true        
  properName = 'Professor Altmeister'  
  globalParamName = 'curator'  
;  
  
Note that we have stripped out the code that moves him around, as we'll
be implementing it differently. Obviously, for the male curator we set
**isHim** = true. Once again we add a globalParamName.  
  
The other character we've already met is King Solomon; here he is as
we'll now create him:  
  
solomon : Person 'middle-aged middle aged man/king' 'middle-aged man' @solomonChair  
  "He's quite good-looking in a middle-eastern sort of way, with long curly  
   black hair that's just starting to go grey, and a neatly kept beard. He's  
   dressed in a purple cloak. "  
  isHim = true      
  posture = sitting  
  properName = 'King Solomon'  
  globalParamName = 'solomon'  
;  
  
We can also use a single Person object to represent a group of NPCs,
especially when there's no particular need to distinguish one from
another:  
  
demons : Person 'bunch crowd gaggle demons' 'demons' @hellPath  
  "They're an ugly bunch of mis-shapen, semi-substantial beings, slightly  
   green in tinge with glaring red eyes and tiny forked tails. "         
  isPlural = true  
  globalParamName = 'demons'  
;  
  
Since we've put the demons in a location we haven't created yet, we'd
better add this new location:  
  
hellPath : OutdoorRoom 'Path down Hell Fire Cavern' 'the path'  
  "About halfway down the track from the summit to the basalt plain below the track   
   flattens to a small ledge. Stone steps continue upwards towards the top and down  
   to the bleak basalt plain below, while across the plain to the north Mount Gloom  
   continues to belch smoke and flame. "  
  up = hellPathUp  
  down = hellPathDown  
;  
  
+ hellPathUp : StairwayUp -\>roughStaircase 'stone upward up steps' 'upward steps'  
  "It looks a rough ascent, possibly treacherous in places, but probably passable  
   with care. "  
  isPlural = true  
;  
  
+ hellPathDown : StairwayDown 'stone downward down steps' 'downward steps'  
  "The rough steps downwards to the basalt plain look even less inviting than those  
   leading up, but they appear to be just about negotiable. "  
  isPlural = true  
;  
  
You might also want to add hellPath to the locationList property of the
MultiLoc, Distant volcano object defined earlier.  
  
While we're in the business of the inhuman NPC, here's our final
actor:  
  
ghost : Person 'ghost' 'ghost'   
  "It's as insubstantial as you'd expect a ghost to be, a pale white shape you can  
   almost see through, with just a hint of washed-out colour. The wan face bears  
   a once-regal demeanour, and its features vaguely resemble those on the golden  
   statue in the grotto. "  
  isHim = true         
  isIt = true   
  properName = 'Benedict'  
  globalParamName = 'ghost'  
;  
  
We have deliberately not given this ghost a location, since it will only
appear (in the cemetery) after the gold statue has been toppled (which
is why we can be sure it's safe to refer to the statue in the
description). Note that we can make the ghost both a "him" and an "it"
by setting both isHim and isIt to true, since players may think of the
ghost as being either neuter or masculine (or may change from one to the
other once the ghost introduces himself as Benedict).  
  
Five NPCs may constitute a fairly sparse population for the size of game
world we are implementing, but they will suffice for the plot (such as
it is) and to illustrate how NPCs can be implemented. Over the course of
the next several sections we shall gradually bring them to life.  
