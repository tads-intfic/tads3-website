<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](settingthescene.htm)   [\[Next\]](endingthegame.htm)*

## A Basic Burner

Now that we have set the scene, we can introduce our NPC, a charcoal
burner who will be tending the fire. We may start by defining him thus:

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

burner : Person 'charcoal burner' 'charcoal burner'  
  @fireClearing  
  "It's rather difficult to make out his features under all the grime and  
    soot. "  
  properName = 'Joe Black'   
  globalParamName = 'burner'  
  isHim = true  
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

This may seem very simple code for such a potentially complicated
object, and it certainly doesn't look like the charcoal burner will do
very much. The main reason for the simplicity of this object definition
is that most of the complexity of NPCs will be handled through
ActorState and TopicEntry objects, which we'll be encountering shortly.
Strictly speaking, the TADS 3 library doesn't *force* you to use
ActorStates and TopicEntries; you are free if you wish to code your NPC
with dobjFor(This) and iobjFor(That) and a host of switch and if
statements, but unless your NPC is fairly simple, this is likely to
result in tangled spaghetti code that becomes harder and harder to
maintain. Since we're not trying to create Burner Bolognese we'll stick
to the means provided by the library, which allows highly sophisticated
NPC behaviour with code that's both much cleaner and easier to
understand and maintain. The secret is that we go about coding our NPC
using a largely *declarative* rather than a largely *procedural*
approach; in other words we define the NPC's behaviour through a series
of object definitions rather than through a mass of code controlled by
state variables, switch statements and the like.  
  
But before moving on to see how this declarative approach works, let's
stop and look at our basic burner object. The first thing to note is
that he's of class Person, which seems pretty reasonable. Person is
(indirectly) a subclass of the more generic Actor class; we use Person
rather that Actor since an Actor could be a small furry animal you could
pick up and carry around with you, which our charcoal burner certainly
isn't.  
  
Secondly, we have defined the initial location of our burner object
using @fireClearing rather than the + syntax (which would have worked
perfectly well). There are two reasons for doing it this way: (a)
ActorStates and TopicEntries are all objects that will be located in
their Actor (either directly, or more deeply nested to several levels);
had we put a + before the definition of our actor that would be one
more + we'd have to put before each and every ActorState and TopicEntry
object - not that much more typing, perhaps, but something that would
make our code that much less readable and more error-prone, especially
if we end up having to nest to ++++ or +++++; (b) in a more complex game
we might want to move our NPC definition (together with all its
associated objects) to a different place in our code, or even into a
different source file; if we had defined the NPC's starting location
with the + syntax we'd then not only have to remove the + from in front
of the NPC, but remove one + from each and every ActorState and
TopicEntry we'd nested inside it.  
  
Thirdly, the properName property is not part of the TADS 3 library at
all; it's a property we've defined on the object for our own use. At the
moment this simply illustrates that this is something we can do. What
this new property is for hardly needs explaining; how we are going to
use it is something we shall reveal shortly.  
  
Fourthly, the globalParamName is just a convenience feature that we
shall use shortly. What it allows us to do is to use parameter
substitution strings like {the burner/he} when we want to display the
current name of the burner (which will change from "the charcoal burner"
to "Joe Black" once he's introduced himself). Finally, defining
isHim = true means that the charcoal burner can be referred to as 'him'.
For a female NPC you'd define isHer = true.  
  
Both TopicEntry and ActorState are generic classes with several
subclasses that tend to be the classes one uses in practice. At some
point you should look at the more detailed explanation of their use in
the "<a href="../techman/t3actor.htm" target="_top">Creating Dynamic
Characters</a>" articles in the *Technical Manual*, but for now you can
just follow the discussion here.  
  
Since the main objective of the game is to return the diamond ring to
the charcoal burner (for reasons that will become apparent later), we
may as well start by making our burner respond when Heidi gives him the
ring. In the bad old days we should have had to do that by writing
dobjFor(Give) methods on the ring and iobjFor(Give) methods on the
burner (and likewise for Show, if we wanted the burner to respond to
being shown the ring). Fortunately, this can now all be handled by
TopicEntries, more specifically, by the subclasses of TopicEntry called
GiveTopic, ShowTopic and GiveShowTopic. As their names suggests, a
GiveTopic defines its actor's response to a Give command, a ShowTopic to
a Show command, and a GiveShowTopic to either a Give or a Show command.
For our purposes, we may as well use a GiveShowTopic.  

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

+ GiveShowTopic @ring  
  "As you hand the ring over to {the burner/him}, his eyes light up in   
    delight and his jaws drop in amazement. \<q\>You found it!\</q\> he   
    declares, \<q\>God bless you, you really found it! Now I can go and call   
    on my sweetheart after all! Thank you, my dear, that's absolutely   
    wonderful!\</q\>"  
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

Once again, using a template makes defining this object very simple. The
object following the @ symbol is not the location but in fact the value
of the GiveShowTopic's matchObj property, which means the object that is
the direct object of the Give or Show command matched by this
TopicEntry. In other words, this GiveShowTopic will be invoked in
response to the commands **give ring to burner** or **show ring to
burner**. The double quoted string is the value of the GiveShowTopic's
topicResponse property, which is displayed when the GiveShowTopic is
invoked. We precede the object definition with a + sign because a
TopicEntry has to be contained within its Actor (or one of its Actor's
ActorStates or TopicGroups). The \<q\> and \</q\> sequences within the
topicResponse string are codes for opening and closing smart quotes:
when the game is run they should be displayed thus: "You found it!" he
declares, "God bless you…" Likewise {the burner/him} is a parameter
string that should display as either 'the charcoal burner' or 'Joe
Black' depending on whether we know his name at that point (how we learn
his name is something we'll be seeing later).  
  
That will work if Heidi hands Joe his ring, but what happens if she
tries to give or show him anything else? For now, the only thing he's
interested in receiving from Heidi is his ring, so if she tries to give
him anything else, he should refuse. But if he always refuses in
precisely the same way he'll begin to look a bit wooden. The best way to
handle this, then, is through a combination of a DefaultGiveShowTopic
(which defines the response to Joe's being shown or given anything not
otherwise specifically defined) and a ShuffledEventList, which picks a
random response from a list (more on which shortly).  

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

+ DefaultGiveShowTopic, ShuffledEventList  
  \[  
    '{The burner/he} shakes his head. \<q\>No thanks, love.\</q\>',  
    'He looks at it and grins. \<q\>That\\s nice, my dear,\</q\> he remarks,  
     handing it back. ',  
    '\<q\>I\\d hang on to that if I were you,\</q\> he advises. '  
  \]  
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

This definition means that the object is both a DefaultGiveShowTopic and
a ShuffledEventList. The list of single-quoted strings between the
square brackets is the eventList property of the ShuffledEventList (via
the DefaultTopic template). Notice that these strings must be separated
by commas, and they must be single-quoted, not double-quoted, strings.
This, incidentally, is another reason why the {The burner/he} syntax is
valuable, it can be used in both types of string, whereas the
alternative way of achieving the same effect, \<\<burner.theName\>\>,
can only be used in double-quoted strings. Since the strings are
single-quoted we have to use the backslash character (\\ before any
apostrophes we want to use inside them (hence "That\\s nice" for "That's
nice").  
  
The ShuffledEventList uses the strings from its list in random order,
but does not repeat any one string until it has used all of them; it is
thus like shuffling a pack of cards, turning each card over in turn,
then repeating the process (as often as desired). This is better for the
purpose than a RandomEventList which could in principle print the same
string two (or more) times in succession.  
  
You can now try recompiling the game and playing it through to the point
where you hand the ring to the burner (you can try handing him other
objects first to see what happens). Everything should work fine apart
from one thing - returning the ring to the charcoal burner is meant to
be the object of the game, but apart from the burner's effusive thanks,
nothing much happens when the ring is handed over. The game just carries
on and the player isn't even awarded any extra points. In order to fix
this, we'll take a brief detour through a special function for ending
games.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](settingthescene.htm)   [\[Next\]](endingthegame.htm)*

</div>
