::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Conversation Nodes\
[[*Prev:* Topic Groups](topicgroup.htm){.nav}     [*Next:* Hello and
Goodbye](hello.htm){.nav}     ]{.navnp}
:::

::: main
# Conversation Nodes

In a real conversation one party generally responds to what the other
has just said. The particular response given is then only appropriate,
and perhaps only meaningful, at that particular point in the
conversation. For example, an NPC may have asked a question demanding an
answer, perhaps yes or no. The replies YES and NO are then only
meaningful in that particular context. Or at least, in the context of a
different question they might have quite different meanings, and in
general they might have no meaning at all. Or as another example, a
remark by an NPC may make certain questions particularly appropriate. If
an NPC announces that his best friend has just died, you might want to
offer your condolences or ask how it happened. Again such responses are
particularly relevant just at that particular point in the conversation,
and might quickly become less relevant as the conversation moves on.

The adv3Lite library uses Conversation Nodes to model such moments in a
conversation between the player character and another actor. In
real-life conversation just about every moment in a conversation is a
node in this sense, unless and until someone deliberately decides to
change the subject. That is, in real-life conversation what has just
been said generally places some constraints on what can reasonably be
said next, even if we don\'t in fact choose what to say next from a
finite set of choices set out in a mental menu. To model this thoroughly
in IF conversation, i.e. to make every moment in the conversation a
node, could quickly become extremely laborious, but the presence of some
conversation nodes in a work of IF can lend some shape to the
conversation, and certain situations (such as supplying the player
character with appropriate Yes and No responses) would be quite
impossible without them.

Thus far, we have used the term \'Conversation Node\' to refer to the
abstract concept, not to its implementation. The adv3 library used
ConvNode objects to implement Conversation Nodes. You can also use
ConvNode objects in adv3Lite (see [below](#convnode)), but it is
possible to set up Conversation Nodes without them, and we\'ll first
explain how to do this before going on to explain the ConvNode class.

Conversation Nodes are implemented rather differently in adv3Lite from
the way they work in adv3, once again making use of the convKeys
property. In essence, using the tag **\<.convnode key\>** sets up a
Conversation Node in which the TopicEntries whose convKeys match *key*
are considered the most appropriate to use next. More specifically,
\<.convnode key\> gives TopicEntries whose convKey matches *key*
priority over all other TopicEntries in selecting the best match to the
player\'s next conversational command. It follows that if there\'s a
DefaultTopic with a convKeys property that matches *key*, then that
DefaultTopic will mask other TopicEntries of the same kind for as long
as the Conversation Node persists (by default, until the next
conversational command has been executed). Defining a DefaultAnyTopic
whose convKeys matches *key* is therefore a way of restricting the
possible responses to those that match the conversation node key. If you
want to list the conversational options open to the player on entering
the Conversation Node place a \<.topics\> tag immediately after the
\<.convnode\> tag (this isn\'t done by default since it may not always
be appropriate; for example just after an NPC has asked what might be a
purely rhetorical question) or use the \<.convnodet\> tag (which
combines the effects of \<.convnode\> and \<.topics\>).

If multiple \<.convnode\> tags are output in succession, e.g.
\<.convnode key1\>\<.convnode key1\>\<.convnode key3\>, the effect is to
set up a Conversation Node that includes all the TopicEntries whose
convKeys contain at least one of these keys (e.g. *key1* or *key2* or
*key3*). This would be equivalent to:

::: code
      someActor.addPendingKey('key1');
      someActor.addPendingKey('key2');
      someActor.addPendingKey('key3');
:::

Or just:

::: code
      someActor.pendingKeys = ['key1', 'key2', 'key3'];
:::

[]{#nodeactive}

While this shows how to restrict or at least encourage the conversation
to choose between a limited range of topics at a particular point (the
Conversation Node), it does not show how we can make certain
TopicEntries respond only at a given node (e.g., we may have several
YesTopics and NoTopics, and we want each one only to respond just after
the relevant question has been asked). We can restrict an
ActorTopicEntry\'s applicability to a specific node by setting its
isActive property to **nodeActive()**. An ActorTopicEntry\'s
nodeActive() method evaluates to true only if its convKeys overlaps with
the actor\'s current activeKeys (i.e. with the pendingKeys that were set
up on the previous turn).

Finally, to stay at the same Conversation Node for more than one
conversational turn we can use the **\<.convstay\>** tag (or set the
actors\'s keepPendingKeys property to true). Note that we\'d have to do
this on each additional turn we wanted to stay in the same Conversation
Node. If the conversation does stay at the same node, you may want the
NPC to be able to prompt the player character for a response if the
player does not issue a conversational command on any turn. For this
purpose you can define a **NodeContinuationTopic**, and set its convKeys
property to the current node (or to a list of all the nodes in which you
want it to be active.

Just to emphasize the point about the \<.convstay\> tag. If you want to
give the player more than one chance to choose one of the specific
options offered at a Conversation Node, then you *must* include a
DefaultTopic with a \<.convstay\> tag in that Node, otherwise any
conversational response that doesn\'t match one of your specific options
will move the conversation on beyond the Node and the player will
forever have lost the chance to pick one of your special responses.

This should all become clearer with the aid of a few examples.

\
[]{#examples}

## Examples

You may recall in the previous section we gave an example of a
QueryTopic that included a question at the end of the NPC\'s response:

::: code
    + QueryTopic 'how' 'old he is; are you'
        "<q>How old are you?</q> you ask.\b
        <q>None of your damned business,</q> he replies. <q>Would you like someone
        asking you about your age?</q> "
          
        askMatchObj = tAge    
    ;
:::

Perhaps the question \"Would you like someone asking you about your
age?\" is a purely rhetorical one, but it at least invites the player to
respond YES or NO; but clearly any YES or NO responses given would be
particular to this precise point in the conversation: they wouldn\'t be
relevant any sooner or any later. In other words, with this question the
conversation has arrived at a Conversation Node.

To implement the node we could simply add a \<.convnode\> tag to the end
of Bob\'s response, and then a YesTopic and a NoTopic keyed to the same
node:

::: code
    + QueryTopic 'how' 'old he is; are you'
        "<q>How old are you?</q> you ask.\b
        <q>None of your damned business,</q> he replies. <q>Would you like someone
        asking you about your age?</q> <.convnode age-node>"
          
        askMatchObj = tAge    
    ;


    + YesTopic
        "<q>Yes, sure, I wouldn't mind,</q> you reply.\b
        <q>Well, I do,</q> he grunts. "
        convKeys = ['age-node']     
    ;

    + NoTopic
        "<q>No, I suppose not,</q> you concede.\b
        <q>Well, there you are then!</q> he declares triumphantly. "
        convKeys = ['age-node']    
    ;
:::

There\'s nothing magic about the name \'age-node\' by the way. We don\'t
have to include \'node\' in the name just because we\'re setting up a
Conversation Node; doing so just makes the purpose of the convKey a bit
clearer.

The above implementation will work after a fashion, in that if the
player types YES or NO immediately after the NPC asks \"Would you like
someone asking you about your age?\" s/he\'ll get the expected response.
The trouble is, there\'s nothing that *restricts* these yes and no
responses to this particular Conversation Node. As we\'ve defined them,
they could be triggered by the player typing YES or NO at any point. To
restrict them to this particular Conversation Node we need to set their
isActive property to nodeActive:

::: code
    + YesTopic
        "<q>Yes, sure, I wouldn't mind,</q> you reply.\b
        <q>Well, I do,</q> he grunts. "
        convKeys = ['age-node']
        isActive = nodeActive    
    ;

    + NoTopic
        "<q>No, I suppose not,</q> you concede.\b
        <q>Well, there you are then!</q> he declares triumphantly. "
        convKeys = ['age-node']
        isActive = nodeActive    
    ;
:::

Note that if we had listed several keys in the convKeys property of
these TopicEntries, they would have been available in those other
Conversation Nodes as well; this makes such TopicEntries potentially
reusable. Note also that we could also include a response here that\'s
also available outside the ConversationNode. For example, suppose we
also wanted the player character to be able to respond at this point by
telling the NPC his age, but we wanted him to be able to do so elsewhere
as well. We could achieve that by defining a TellTopic that had
\'age-node\' in its convKeys property but didn\'t set its isActive
property to nodeActive:

::: code
    + TellTopic @tYourAge
        "I'm forty-three, you tell him.\b
        Well bully for you! he declares. "
        convKeys = ['age-node']
        autoName = true
    ;
:::

Note also that if you do set isActive to nodeActive, there is nothing to
stop you adding further conditions to the isActive property ([isActive =
nodeActive && whatever]{.code}) if you need them.

So far we have supposed that Bob intended his question rhetorically. But
if he actually expects an answser to \"Would you like someone asking you
about your age?\" we could make him prompt the player for one until he
receives it. For this purpose we can define a **NodeContinuationTopic**
and set its convKeys property to the appropriate node:

::: code
    + NodeContinuationTopic
        "<q>I thought I asked you a question,</q> Bob reminds you. "
        convKeys = ['age-node']
    ;
:::

There\'s no need to define the isActive property here, since
NodeContinuationTopic defines is as nodeActive by default. Note,
however, that we could have mixed NodeContinuationTopic in with an
EventList class and provided a list of different nudges for Bob to say.
Either way the NodeContinuationTopic will run on each turn that the
player does not enter a conversational command.

As things stand, the player still does not need to reply with one of the
topics belonging to the Conversation Node (even though these will be the
only ones listed in response to a TOPICS command or a \<.topics\> tag).
Any conversational command entered by the player will serve to move the
conversation on. But if Bob is really insistent on an answer to his
question, you may want to so arrange things that the conversation cannot
move on until the player has provided a satisfactory reply (i.e. one
matching a topic specifically belonging to the Conversation Node). The
way to do this is to define a DefaultTopic that\'s only active in the
node in question, but which blocks attempts to leave the node until a
satisfactory reply is given. For example:

::: code
        
    + DefaultAnyTopic
        "<q>Don't try to change the subject; I want to know whether you'd like
        someone asking about your age,</q> he insists. <q>Well, would you?</q>
        <.convstay> <.topics> "
        convKeys = ['age-node']
        isActive = nodeActive
    ;
:::

[]{#convstay}

It\'s very important that we remember to define [isActive =
nodeActive]{.code} here, otherwise this DefaultAnyTopic might be fired
at any time. Note the use of the \<.convstay\> tag to keep the
Conversation at the current node. The use of the \<.topics\> tag to
remind the player of what topics are available within the node is
optional here, but might serve as a useful reminder, as well as a nudge
to pick one of them. You can also combine the function of both tags at
once with a **\<.constayt\>** tag. Similarly, you can combine the
effects of a \<.convode node\> and a \<.topics\> tag with a single
**\<.convodet node\>** tag.

[]{#nodecheck}There\'s one further refinement we can add, if we want to,
and that\'s to prevent the conversation being terminated while it\'s at
this node. To do this we need to define a **NodeEndCheck** object (in
fact a special kind of InitiateTopic) with the appropriate convKeys and
then define its **canEndConversation(reason)** method to return nil, or
blockEndConv, if we want to disallow ending the conversation. For
example, to prevent the player character from saying goodbye while
we\'re at this node we could define:

::: code
    + NodeEndCheck
        canEndConversation(reason)
        {
            if(reason == endConvBye)
            {
                "<q><q>Goodbye,</q> isn't an answer,</q> Bob complains. <q>Would
                you like someone to ask you about your age or wouldn't you?</q> ";
                                  
                return blockEndConv;
            }
            
            return true;
        }
        
        convKeys = ['age-node']
    ;
:::

Once again we don\'t need to explicitly define the isActive property of
the NodeEndCheck object since the NodeEndCheck class already defines it
to be nodeActive. We have the canEndConversation() method return
**blockEndConv** rather than just nil here to suppress any output our
NodeContinuationTopic might otherwise produce on the same turn, which we
may not want if Bob has already just spoken (in adv3Lite blockEndConv()
is in fact a method of NodeContinuationTopic that calls noteConversed()
on the Actor and then returns nil; it\'s called blockEndConv for
consistency with adv3 although the implementation is quite different).
An alternative method would have been to have canEndConversation display
a much more generic refusal to accept a goodbye and then return nil,
leaving the NodeContinuationTopic to prompt the player with Bob\'s
specific question. That way we could list several conversation nodes in
the NodeEndCheck\'s convKeys property and have the one NodeEndCheck
object block saying goodbye in them all.

For a fuller explanation of the *reason* parameter, of saying goodbye,
and of checking whether conversations are allowed to end, see the
section on [Hello and Goodbye](hello.htm) below.

\

## [Using the ConvNode Class]{#convnode}

As we have just seen, it is perfectly possible to set up a Conversation
Node in adv3Lite without the use of a special ConvNode object. In some
cases, however, using a ConvNode object can save a bit of repetitive
typing and help to make the structure of the code clearer.

An adv3Lite ConvNode is a specialization of an adv3Lite TopicGroup. This
means that any TopicEntries located within a ConvNode have the
ConvNode\'s convKeys added to any they may define individually, and that
for them to be active both their own and the ConvNode\'s isActive
properties must be true. A ConvNode defines [isActive =
nodeActive]{.code}, which means that the ConvNode becomes active when
its convKeys are those of an active node.

This may all sound a bit complicated, but the practical upshot is that
to define a Conversation Node we can simply define its convKeys property
to be that corresponding to the node we want, and then locate the
associated TopicEntries within it. The TopicGroup template, which
ConvNode inherits, makes this even easier, since we can just put the
relevant convKey name in single quotes after [ConvNode]{.code}. ConvNode
objects themselves should be located directly in the Actors with which
they are meant to be associated.

Using a ConvNode object, the Conversation Node illustrated above could
be defined like this:

::: code
    + QueryTopic 'how' 'old he is; are you'
        "<q>How old are you?</q> you ask.\b
        <q>None of your damned business,</q> he replies. <q>Would you like someone
        asking you about your age?</q> <.convnode age-node>"
          
        askMatchObj = tAge    
    ;

    + ConvNode 'age-node';

    ++ YesTopic
        "<q>Yes, sure, I wouldn't mind,</q> you reply.\b
        <q>Well, I do,</q> he grunts. "         
    ;

    ++ NoTopic
        "<q>No, I suppose not,</q> you concede.\b
        <q>Well, there you are then!</q> he declares triumphantly. "        
    ;

    ++ DefaultAnyTopic
        "<q>Don't try to change the subject; I want to know whether you'd like
        someone asking about your age,</q> he insists. <q>Well, would you?</q>
        <.convstay> <.topics> "  
    ;

    ++ NodeContinuationTopic
        "<q>I thought I asked you a question,</q> Bob reminds you. "   
    ;

    ++ NodeEndCheck
        canEndConversation(reason)
        {
            if(reason == endConvBye)
            {
                "<q><q>Goodbye,</q> isn't an answer,</q> Bob complains. <q>Would
                you like someone to ask you about your age or wouldn't you?</q> ";
                                  
                return blockEndConv;
            }
            
            return true;
        }    
    ;
:::

[]{#curnode}

If you use the ConvNode class to set up your Conversation Nodes, you can
use various methods on the Actor object to test whether a ConvNode is
currently active for that actor and if so which one it is. If you simply
want to test whether there is an active ConvNode, test whether
**curNodeIdx()** returns a number (meaning there is one) or nil (meaning
there isn\'t). The **curNodeKey()** method returns the convKeys value
associated with the current ConvNode (if there is one) or nil otherwise,
while the **curNodeObj()** method returns the current ConvNode object,
if there is one.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Conversation Nodes\
[[*Prev:* Topic Groups](topicgroup.htm){.nav}     [*Next:* Hello and
Goodbye](hello.htm){.nav}     ]{.navnp}
:::
:::
