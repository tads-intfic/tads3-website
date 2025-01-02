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
<td style="text-align: left;"><strong>ConvNode :
ActorTopicDatabase<br />
</strong></td>
<td style="text-align: right;"><a
href="conversationnodes-overview.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="yestopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
ConvNode is the class used to set up a
[ConversationNode](conversationnodes-overview.html) in an NPC's
conversational responses. We'll discuss the principal methods and
properties of the ConvNode class below, but first we'll clarify the
concept by means of an example.  
  
Once the player character (PC) gains access to the Benefactors' Room
where the Golden Banana is stored, he'll find it enclosed in a glass
case. To get at it, he'll need to cut the glass case open with a
diamond. If Sarah is with him, she'll have the diamond in her ring, and
he'll need to ask her for it (just as he did when he wanted to cut open
the glass jar containing the [crystal](askfortopic.html)). This time,
however, there's a catch; although Sarah can cut open the case, if she
goes ahead and does so the microphone embedded in the pedestal under the
case will pick up the sound, causing the curator to come in and discover
the attempted theft. The solution to this will be for the PC to attach
the sticking plaster (found in the first aid kit) over the microphone to
prevent it from registering the sound. So if Sarah goes ahead and cuts
open the glass case in response simply to being asked for her ring, the
game will be lost in a way the player could not really have predicted.
To prevent this from happening it would be better if Sarah offered to
cut open the case and gave the player the choice whether she should go
ahead or not. For this we need a ConvNode.  
  
The first stage is to add a second AltTopic after the AskForTopic
@diamondRing, an AltTopic that is triggered if Sarah is asked for the
ring while she can see the glass case but the case is not yet open:  
  
+++ AltTopic      
     "\<q\>Can I borrow your diamond ring again?\</q\> you ask.\b  
      \<q\>Don't tell me,\</q\> {the sarah/she} surmises, \<q\>you\\re  
      thinking of cutting open that glass case - right?\</q\>   
      \<.convnode banana-case\>"     
   isActive = (getActor.canSee(bananaCase) && !bananaCase.isOpen)  
;  
  
The important thing to note here is the use of \<.convnode banana-case\>
to move Sarah into the Conversation Node after she's asked her question
about cutting open the case. We now need to define the corresponding
ConvNode (which must be located inside Sarah, *not* one of her
ActorStates):  
  
+ ConvNode 'banana-case'  
  npcContinueList : ShuffledEventList  
  {  
   \[ '{The sarah/she} looks at you expectantly. ',  
     '\<q\>Well, are we going to cut this thing open or aren\\t we?\</q\>  
      she asks. ',  
     '\<q\>Did you want me to cut it open?\</q\> {the sarah/she} asks. ',   
     '\<q\>You asked me for my ring,\</q\> {the sarah/she} reminds you,  
     \<q\>Assuming you didn\\t just want to wear it, was it for some  
     purpose, like trying to cut open that case?\</q\>'  
   \]  
  }  
  limitSuggestions = true  
;  
  
The npcContinueList provides a list of messages that will be displayed
if the PC fails to reply to Sarah's question at all but issues a
non-conversational command (such as LOOK or EXAMINE BANANA). This
reminds the player that Sarah has asked a question and is expecting a
reply: it also makes her a bit more life-like, by having her show some
human impatience for a reply. We set limitSuggestion to true to prevent
a TOPICS command from listing any SuggestedTopics apart from the ones
listed under the ConvNode (because we'll be blocking access to all other
topics via a DefaultAnyTopic).  
  
It's possible that the player may reply by trying changing the subject
inconsequentially, e.g. by ASK SARAH ABOUT HERSELF or SHOW LAMP TO
SARAH, which doesn't make for a very realistic conversation at this
point. To trap this, we can use a DefaultAnyTopic which simply has Sarah
repeat her question more insistently and then uses the \<.convstay\> tag
to ensure that Sarah remains in this Conversation Node, still expecting
a reply:  
  
++ DefaultAnyTopic   
   "\<q\>That glass case,\</q\> {the sarah/she} insists, \<q\>Should I try to cut it  
    open, yes or no?\</q\>\<.convstay\>"  
;  
  
This traps the invalid responses the player might make; we'll go on to
give the valid ones when we come to look at [YesTopic](yestopic.html),
[NoTopic](notopic.html) and [SpecialTopic](specialtopic.html). But before
we do that we need to look at the ConvNode class in a bit more detail.
The principal properties and methods you may want to use on ConvNode
are:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>npcGreetingMsg</strong> - use this to display a message when
the NPC initiates a conversation (normally via a call to <a
href="initiateconversation.html">initiateConversation()</a>).  <br />
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
<td><strong>npcGreetingList</strong> - use this as an alternative to
npcGreetingMsg to provide a list of messages where the ConvNode may be
initiated more than once.  <br />
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
<td><strong>npcContinueMsg</strong> or <strong>npcContinueList</strong>
- the <a href="overview-actorstates.html">ActorState</a> class
automatically displays the current ConvNode's continuation message
(using either npcContinueMsg or npcContinueList, as appropriate) on each
turn on which the ConvNode is active, and the player didn't address a
conversational command to the NPC on the same turn.  <br />
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
<td><strong>noteLeaving()</strong> - Note that we're leaving this
conversation node. This doesn't do anything by default, but individual
instances might find the notification useful for triggering side
effects.  <br />
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
<td><strong>noteActive()</strong> - Note that this ConvNode is becoming
active. Our actor will call this method when the ConvNode is becoming
active, as long as it wasn't already active. By default this schedules
the topic inventory (to display the list of SuggestedTopics) if there
are any SpecialTopics in the ConvNode (so if you want to insert any code
here, you should remember to call inherited).  <br />
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
<td><strong>endConversation(actor, reason)</strong> - Instances can
override this for special behaviour on terminating a conversation (e.g.
if the Player Character walks away while we're in the ConvNode we could
have the NPC complain of his rudeness).  <br />
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
<td><strong>canEndConversation(actor, reason)</strong> - lets a ConvNode
prevent a conversation ending, by returning nil; in this and
endConversation reason can be one of endConvBye, endConvTravel, or
endConvBoredom. From TADS 3.0.10 canEndConversation can also prevent a
conversation ending by returning the special value blockEndConv; this
has the additional side effect that the caller will call
noteConvAction() on the other actor, to prevent this actor from
generating any further scripted remarks on the same turn. You should
therefore return blockEndConv rather than nil if you display a message
in canEndConversation that takes the form of the NPC explaining why s/he
won't let you end the conversation, since if such a message has been
displayed, you don't want to see one from npcContinueMsg or
npcContinueList as well.  <br />
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
<td><strong>isSticky</strong> - if true then the conversation remains in
this node until a &lt;.convnode&gt; tag explicitly changes to another
node (or no node at all). This can be useful when you are constructing a
ConvNode where the NPC is insisting on an answer and won't give up till
the PC gives one. By default isSticky is nil.  <br />
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
<td><strong>limitSuggestions</strong> - if true then the only topics
that will be suggested while the conversation is in this node are the
topic entries that are actually within the node; otherwise (if nil, the
default), a topic inventory request will list all the SuggestedTopics
available from the actor's current ActorState as well. You'll normally
want to set this property to true if you give the node one or more
default topics that prevent topics from outside the node being
reachable.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Note that the last two methods are only operative if the NPC's current
ActorState is an [InConversationState](inconversationstate.html), since
the notion of a conversation ending is only meaningful programmatically
as an NPC switching out of an InConversationState. Thus, in the present
example, where Sarah enters a ConvNode while in an AccompanyingState,
these methods will never be called. We'll use an example where these
methods are relevant [later](initiateconversation.html). Basically,
though, the three reasons a conversation might be terminated (when the
NPC is in an InConversationState) are (a) if the player explicitly says
goodbye (with a BYE command), corresponding to endCondBye; (b) if the
player character walks away (the player types a movement command),
corresponding to endConvTravel; or (c) if the player fails to issue a
conversational command for long enough to exhaust the NPC's
attentionSpan (endConvBoredom). The last two methods allow each of these
situations to be handled differently, if required.  
  
We'll see some more examples of ConvNodes when we come to look at the
[initiateConversation](initiateconversation.html) method.  
  
  
