<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Conversation Nodes -
Overview<br />
</strong></td>
<td style="text-align: right;"><a
href="limitsuggestions.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="convnode.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The mechanisms we have seen so far, TopicEntries optionally combined
with EventLists, allow some control over the how NPCs respond to
conversational commands, but they don't really allow a conversation to
develop in a structured fashion. It's true that with the use of
AltTopics, the isActive property, \<.reveal\> tags and setKnowsAbout
commands one can give *some* direction to a conversation, in that the
game can keep track of what's been talked about and who knows what and
adjust NPC responses accordingly, but this only gives a limited sense of
progression to a conversation. One reason for this is that (with the
partial exception of [InitiateTopic](initiatetopic.htm)) every mechanism
we've looked at so far is a mechanism for programming NPC *response*;
our NPC's can respond to ASK, TELL, GIVE and SHOW commands, but they
don't seem to have any real way of asking questions of their own, let
alone of starting an entire conversation on their own initiative.  
  
This is where Conversation Nodes come in. With Conversation Nodes we can
achieve the following:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Have an NPC pose a question to the Player Character (and insist on
an appropriate response)  <br />
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
<td width="14">·</td>
<td>Have an NPC initiate a conversation with the Player Character
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
<td width="14">·</td>
<td>Program a conversation that follows a definite thread (or branching
threads), rather than merely have the NPC respond to a series of ASK and
TELL commands.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
The basic mechanism for this is the [ConvNode](convnode.htm) class,
which defines a Conversation node. When a Conversation node is active,
the player can (optionally) be restricted to employing only the
TopicEntries within that Conversation node (although, if you wish, you
can also make the TopicEntries belonging to the current ActorState and
the Actor available as well).  
  
There are basically two ways to enter a Conversation Node. The simplest
is via the use of a **\<.convode name\>** tag in the text of an ordinary
TopicEntry's response. For example, if I want my NPC to enter the
banana-talk Conversation Node in response to ASK ABOUT BANANA I could
define an AskTopic thus:  
  
++ AskTopic @goldenBanana  
   "\<q\>What you think about this banana thing?\</q\> you ask.\b  
    \<q\>Banana?\</q\> he queries, \<q\>Do you mean \<i\>the\</i\> Banana - the Golden Banana of Discord?\</q\>  
    \<.convnode banana-talk\>"  
;  
  
The corresponding Conversation Node object could then be defined as
simply as  
  
+ ConvNode 'banana-talk';  
  
With the appropriate TopicEntries located within the ConvNode. Note that
a ConvNode must always be located either directly within the *Actor* to
which it belongs, or (from TADS 3.0.9 onwards) within one of its
ActorStates. Here we'll stick to putting ConvNodes directly within the
Actor.  
  
The second method of entering a Conversation Node is to call the
**initiateConversation(ActorState, 'name')** method on the actor. For
example, if I want an actor called fred to enter his fredChatting state
and his 'fred-fuming' Conversation Node, I could call:  
  
fred.initiateConversation(fredChatting, 'fred-fuming');  
  
If I want to use this method to put an Actor into a Conversation Node
*without* changing its ActorState, I simply call the method with nil as
the first parameter, e.g.  
  
fred.initiateConversation(nil, 'fred-fuming');  
  
Alternatively, you can just call the setConvNode('name') method on the
Actor:  
  
fred.setConvNode('fred-fuming');  
  
One way to *leave* a Conversation Node is to change to another
Conversation Node using one of these methods. Another way is to do
nothing, since, unless you arrange things to the contrary, the
Conversation Node will only apply for one turn, and the game will leave
the node after a single response. If you want the Actor to *stay* in the
current Conversation Node (as you may), then you need to use a
**\<.convstay\>** tag in the appropriate response or responses. For
example, if the fuming Fred is forcing you to give a Yes or No answer to
his irate question, you might put this in a DefaultAnyTopic that traps
any other response other than Yes or No:  
  
+ ConvNode 'fred-fuming';  
  
...  
  
++ DefaultAnyTopic  
   "\<q\>Don't try to change the subject!\</q\> Fred snaps, \<q\>Have   
   you stopped sleeping with my wife, yes or no?\</q\> \<.convstay\>"  
;  
  
Since this type of situation requires the player to be able to give a
yes or no answer, the library defines a [YesTopic](yestopic.htm) and a
[NoTopic](notopic.htm) for the purpose (you can put a YesTopic or a
NoTopic anywhere you can put any other kind of TopicEntry, but a Yes or
No response will normally only make sense in the context of a
Conversation Node).  
  
This may seem a little unfair on the player, who may wish to deny
sleeping with Fred's wife altogether. Well, we can handle this too, by
means of a [SpecialTopic](specialtopic.htm) (which can only be used
within a ConvNode).  
  
++ SpecialTopic 'deny sleeping with his wife' \['deny', 'sleeping', 'with', 'his', wife'\]  
    "\<q\>I have never slept with your wife!\</q\> you reply, \<q\>Good grief, man, I've got   
     better taste than that!\</q\>\b  
     \<q\>So you're insulting her now, are you, you ungrateful wretch!\</q\>   
      he cries, \<q\>Are you trying to tell me you find my wife so unattractive   
     you don't \<i\>want\</i\> to sleep with her?\</q\>\<.convode 'fred-wife-insulted'\> "      
;  
  
If this doesn't seem entirely clear yet, don't worry. We'll go over it
all step-by-step and in more detail as we explore how to use these
features in *The Quest of the Golden Banana*.  
  
Note that as from TADS 3.0.10 the name we give to a Conversation Node
(the quoted string name, that is, like 'fred-fuming' in the above
example) only needs to be unique to the particular *actor*. We could
give the name 'fred-fuming' to Conversation Nodes in two (or more)
different actors, and the system would know which one we meant in any
given context (namely the one that belongs to the actor who's being
addressed).  
  
  
  
  
  
  
  
  
