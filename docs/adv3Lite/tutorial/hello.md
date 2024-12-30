::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Hello and Goodbye\
[[*Prev:* Queries and Suggestions](query.htm){.nav}     [*Next:* Angela
Wants Answers](convnode.htm){.nav}     ]{.navnp}
:::

::: main
# Hello and Goodbye

You may recall that in setting up Angela\'s ActorStates in the previous
chapter we defined two different ActorStates for her while she\'s out in
the Jetway: one (angelaAssistingState) for when Angela is assisting the
other passengers, and the other (angelaTalkingState) for when Angela is
actually talking with the player character out on the Jetway. So far,
however, we\'ve provided no mechanism for switching between these two
states. We\'ve located a QueryTopic in angelaTalkingState, but as things
stand at the moment it will never be activated because nothing we\'ve
done so far will ever cause Angela to go into the angelaTalkingState.

The two different states do nevertheless serve a purpose. Engaging
someone in conversation may well result in a change of state from what
they were doing before. When Angela is in angelaAssistingState she\'s
dealing with other passengers. When she\'s in angelaTalkingState her
attention is focused on the player character. Once the player character
has finished speaking with her, she\'ll return her attention to the
other passengers; in other words she should go back into the
angelaAssistingState.

These state transitions model what may well happen in real life when we
start and end a conversation. Our conversation partner will stop
whatever he or she was doing before to talk with us, and resume doing it
(or else start doing something else, such as leaving the room) when
we\'ve finished. To mark the boundaries between states we normally use
some form of *greeting protocols*, like saying hello and goodbye, partly
to attract the attention of the other person, perhaps, but also to mark
the beginning and end of the conversation, both as a matter of
politeness and social convention, and for the practical purpose of
ensuring that the conversation partners know when to \'switch states\'.
There may be some occasions when it\'s appropriate to begin and end a
conversation abruptly, but on many occasions it would seem rather odd,
if not quite impolite, to do so (although the formula employed may not
be an explicit \'hello\' or \'goodbye\'; in England, for example, either
\'Excuse me\' or commenting on the weather is regarded as an acceptable
way to open a conversation with a stranger).

In adv3Lite, these *greeting protocols* can be modelled with a
**HelloTopic** to start the conversation and a **ByeTopic** to end it.
Neither of these special types of TopicEntry (or their subtypes) causes
the actor to switch state automatically unless you instruct it to, but
if you do switch states the rule is this: both types of greeting
TopicEntry must be located either directly in the Actor or in the
ActorState the actor is in at the point at which the Hello or Goodbye
occurs. This means that if there is a switch of state, the
[HelloTopic]{.code} should be located in the ActorState the actor is in
immediately prior to the conversation, while the [ByeTopic]{.code}
should be in the state the actor is in while conversing. To make a
HelloTopic or ByeTopic switch states you define its **changeToState**
property to point to the ActorState you want it to change to.

To see how this works in practice, let\'s add a HelloTopic that switches
Angela to the [angelaTalkingState]{.code} when the player character
starts addressing her on the Jetway. The following definition should be
placed immediately after that of the [angelaAssistingState]{.code}
object:

::: code
    ++ HelloTopic, StopEventList
        [
            '<q>Excuse me, might I have a word?</q> you say.\b
            {The subj angela} turns to you with a fixed smile, no doubt mentally
            preparing herself for another barrage of complaints. <q>Yes; how can I
            help?</q> she replies. ',
            
            '<q>Might I have another word?</q> you ask.\b
            <q>Yes?</q> she replies, turning to you just a little warily. '
        ]
        
        changeToState = angelaTalkingState
    ;
:::

Here we\'ve combined the HelloTopic with a StopEventList to vary the
greeting used on the first and subsequent occasions. Note that this
HelloTopic will be triggered whether the player types a conversational
command like ASK ANGELA ABOUT FLIGHT DEPARTURES or whether s/he types an
explicit greeting like TALK TO ANGELA. What happens next will differ in
the two cases, though. If the player types a conversational command like
ASK ANGELA ABOUT FLIGHT DEPARTURES, this will be dealt with immediately
after the greeting exchange. If the player types TALK TO ANGELA a list
of suggested conversation topics will be displayed immediately after the
exchange of greetings. If we wanted a different exchange of greetings in
the first case (where the player doesn\'t explicitly ask for it), we
could define a separate **ImpHelloTopic** (implicit HelloTopic) to deal
with it, but we hardly need one here.

To end the conversation we can define a [ByeTopic]{.code} in much the
same way, except that the ByeTopic needs to be located in the
[angelaTalkingState]{.code} and to define [changeToState =
angelaAssistingState]{.code} to ensure that Angela switches back to her
former ActorState at the end of the conversation:

::: code
    ++ ByeTopic
        "<q>Well, cheerio for now then,</q> you say.\b
        <q>Goodbye,</q> she replies with a brisk nod, before turning to yet another
        importuning displaced passenger anxious for her attention. "
        
        changeToState = angelaAssistingState
    ;
:::

As we\'ve defined it this ByeTopic will be triggered however the player
character ends the conversation, whether via an explicit BYE command or
simply if the player character walks away. It may be that we\'d rather
the latter case was handled a bit differently, in which case we can
define a separate LeaveByeTopic to handle it:

::: code
    ++ LeaveByeTopic
        "{The subj angela} looks momentarily taken aback at your somewhat abrupt
        departure, but quickly turns back to the other passengers clamouring for
        her attention. "
        
        changeToState = angelaAssistingState
    ;
:::

That covers most of what you need to know about Greeting Protocols in
adv3Lite, but for the full story you can consult the section on [Hello
and Goodbye](../manual/hello.htm) in the *adv3Lite Library Manual*.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Hello and Goodbye\
[[*Prev:* Queries and Suggestions](query.htm){.nav}     [*Next:* Angela
Wants Answers](convnode.htm){.nav}     ]{.navnp}
:::
