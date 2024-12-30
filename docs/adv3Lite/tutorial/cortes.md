::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Character
Building](character.htm){.nav} \> Pablo Cortez\
[[*Prev:* The Security Guard](guard.htm){.nav}     [*Next:* The Flight
Attendant](attendant.htm){.nav}     ]{.navnp}
:::

::: main
# Pablo Cortez --- A Man with Several Agendas

The second NPC we\'ll implement is Pablo Cortez, El Diablo\'s right-hand
man and the man whose threatening presence obliges our protagonist to
sneak off the plane pretending to be a cleaner. He only really needs to
be present during one scene, but during that scene he does need to be
something of a menacing presence.

Cortez needs to be moved on-stage, to the front of the plane, at the
start of the takeover scene, and moved off again when the takeover scene
ends. During the takeover scene he\'ll make some remarks that the player
character will overhear. If the player character attempts to enter the
cockpit, or hangs around too long, while Cortez can see him, Cortez will
shoot him.

We start by defining the basic Actor object as before:

::: code
    cortez: Actor 'Pablo Cortez; evil latinate;man;him'
        "He's really quite a handsome man, in a latinate sort of way; if you met him
        in a different context you might not realize quite what an evil devil he
        actually is. "
        
        actorSpecialDesc = "Pablo Cortez<<first time>>, El Diablo's right-hand man,
            <<only>> is standing by the main exit, hurrying the passengers off the
            plane with the muzzle of his machine-pistol. "
        
        checkAttackMsg = 'You know better than to attempt it; he\'s known to be
            quite deadly with that gun. '
            
    ;
:::

The only novelty here is the use of the \<\<first
time\>\>\...\<\<only\>\> construct to ensure that the explanation that
Cortez is El Diablo\'s right-hand man only appears the first time the
actorSpecialDesc is displayed.

Since the actorSpecialDesc rather pointedly mentions the gun Cortez is
holding, we should implement it as a separate object. To give an Actor
possessions that they\'re notionally carrying, we simply locate the
object or objects in question directly in the Actor object, and while
we\'re at it we\'ll customize the message that\'s otherwise shown when
the player character attempts to take another actor\'s possessions to
something a bit less bland than the library default:

::: code
    cortez: Actor 'Pablo Cortez; evil latinate;man;him'
        "He's really quite a handsome man, in a latinate sort of way; if you met him
        in a different context you might not realize quite what an evil devil he
        actually is. "
        
        actorSpecialDesc = "Pablo Cortez<<first time>>, El Diabo's right-hand man,
            <<only>> is standing by the main exit, hurrying the passengers off the
            plane with muzzle of his machine-pistol. "
        
        checkAttackMsg = 'You know better than to attempt it; he\'s known to be
            quite deadly with that gun. '
        
        cannotTakeFromActorMsg(obj)
        {
            return 'Cortez would shoot you dead before your hands got anywhere near
                it. ';
        }
    ;

    + gun: Thing 'gun; machine 93r beretta; pistol machine-pistol'
        "It's a Beretta 93R, capable of firing at a rate of more than a thousand
        rounds per minute. "
    ;
:::

To make Cortez shoot the player character if he tries to enter the
cockpit we can use a beforeTravel() notification on the Actor object.
Although we could use the beforeTravel() method in this case, we\'ll use
[actorBeforeTravel()]{.code}, again for reasons that will become clearer
when we come to look at ActorStates:

::: code
    cortez: Actor 'Pablo Cortez; evil latinate;man;him'
        "He's really quite a handsome man, in a latinate sort of way; if you met him
        in a different context you might not realize quite what an evil devil he
        actually is. "
        
        actorSpecialDesc = "Pablo Cortez<<first time>>, El Diabo's right-hand man,
            <<only>> is standing by the main exit, hurrying the passengers off the
            plane with muzzle of his machine-pistol. "
        
        checkAttackMsg = 'You know better than to attempt it; he\'s known to be
            quite deadly with that gun. '
        
        cannotTakeFromActorMsg(obj)
        {
            return 'Cortez would shoot you dead before your hands got anywhere near
                it. ';
        }
        
        actorBeforeTravel(traveler, connector)
        {
            if(traveler == gPlayerChar && connector == cockpitDoor)
            {
                "Cortez looks round at you suspiciously as you head for the cockpit
                door. <q>Hey, you, Pond!</q> he shouts. As you make a dash for the
                door he opens fire with his machine pistol, riddling your body with
                bullets. ";
                finishGameMsg(ftDeath, [finishOptionUndo]);
            }
            else if (traveler == gPlayerChar && connector == planeRear) 
            {
                "Your makeshift disguise won't fool Cortez for long; it's best
                to leave the plane as quickly as possible. ";
                exit;
            }        
        }
    ;
:::

Note the use of the [finishGameMsg(ftDeath,\...)]{.code} to kill the
player character. We supply [\[finishOptionUndo\]]{.code} as the second
parameter to allow the player to undo the fatal move. Note too that
since we defined the first part of the vocab property as \'Pablo
Cortez\', with every word starting with a capital letter, the library
will recognize it as a proper name and so refer to the actor as \'Pablo
Cortez\' not \'the Pablo Cortez\' or \'a Pablo Cortez\'. Note also that
we\'ve taken the opportunity to prevent the player character retreating
to the rear of the plane again once he\'s encountered Cortez; this will
prevent potential problems with the AgendaItems we\'re about to define
next.

The [cortez]{.code} Actor object is beginning to look a bit complicated,
but this is as complicated as it needs to get. To implement the rest of
Cortez\'s behaviour we\'ll use **AgendaItems**.

An AgendaItem is an object that can be used to define what an Actor does
when a certain condition is met. An AgendaItem is considered for
execution when its [isReady]{.code} property becomes true. When that
happens, its [invokeItem()]{.code} method is called. Its invokeItem()
method will continue to be executed every turn until the AgendaItem\'s
[isDone]{.code} property becomes true, so if you want an AgendaItem to
execute only once, make sure that it sets [isDone = true]{.code} in its
[invokeItem()]{.code} method. But to be considered for execution at all
an AgendaItem must be in its actor\'s [agendaList]{.code}. To put it
there you can either call a[ddToAgenda(*item*)]{.code} on the actor
object, where *item* is the AgendaItem in question, or define
[initiallyActive = true]{.code} on the AgendaItem to have it included in
the actor\'s agendaList at the start of the game.

An AgendaItem is associated with its actor by being located in its
actor, usually with the + syntax.

As a first example, we\'ll use an AgendaItem to move Pablo Cortez to the
front of the plane when the takeover scene starts. The following code
should be placed immediately after the definition of the gun object:

::: code
    + cortezArrivalAgenda: AgendaItem
        initiallyActive = true
        isReady = (takeover.isHappening)
        
        invokeItem()
        {
            isDone = true;
            getActor.moveInto(planeFront);
        }
    ;
:::

Note the use of [getActor]{.code} within the [invokeItem()]{.code}
method to get a reference to the actor this AgendaItem belongs to. We
could have written [cortez.moveInto(planeFront)]{.code}, but it\'s
better practice to use [getActor]{.code} in case, for example, you later
decided to change the name of the cortez object. Note too the use of
[isDone = true]{.code} at the start of the [invokeItem()]{.code} method
(it could equally well have come at the end, of course) to ensure this
AgendaItem only fires once.

You may be thinking it would have been simpler to have moved the
[cortez]{.code} object to the front of the plane in the
[whenStarting()]{.code} method of the takeover scene. We certainly could
have done it that way, and it may even have been better. It\'s a matter
of taste and opinion whether it\'s preferable to keep all the
Scene-related code with the Scene, or all the Actor-related code with
the Actor. Here we\'re doing it the latter way mainly to illustrate the
use of AgendaItems.

The next thing we want Cortez to do is to make some remarks in the
player character\'s hearing. Again, we can use an AgendaItem to
accomplish this, setting its isReady property to become true once the
player is in the front of the plane. But we don\'t want this AgendaItem
to fire until Cortez is also in the front of the plane. There are
several ways we could arrange this, but the one we\'ll use here is to
hold off adding our second AgendaItem to Cortez\'s agendaList until the
first one is invoked:

::: code
    + cortezArrivalAgenda: AgendaItem
        initiallyActive = true
        isReady = (takeover.isHappening)
        
        invokeItem()
        {
            isDone = true;
            getActor.moveInto(planeFront);
            getActor.addToAgenda(cortezTalkingAgenda);
        }
    ;

    + cortezTalkingAgenda: AgendaItem
        isReady = (me.isIn(planeFront))
        
        invokeItem()
        {
            isDone = true;
            "<q>Hurry up! Get off this plane! El Diablo is not a patient man and he
            needs it for important business!</q> you hear Cortez tell the
            passengers. <q>If the plane is not cleared by the time our pilot arrives
            I shall shoot any of you who are still aboard! Now, move, move!</q> ";
        }
    ;
:::

Note the use of [getActor.addToAgenda(cortezTalkingAgenda)]{.code} to
add the cortezTalkingAgenda AgendaItem to Cortez\'s agenda.

Let\'s say that if the player character hangs around for more than
another two turns, Cortez will spot him and instantly shoot him. For
that we can use a special kind of AgendaItem called a
**DelayedAgendaItem**. To set the delay of a DelayedAgendaItem we can
add it to its actor\'s agenda and call its [setDelay()]{.code} method at
the same time as adding to its actor\'s agendaList with a statement like
[getActor.addToAgenda(*item*.setDelay(*turns*))]{.code}. In the case of
this DelayedAgendaItem we must also make sure that the player is still
around to be shot:

::: code
    + cortezTalkingAgenda: AgendaItem
        isReady = (me.isIn(planeFront))
        
        invokeItem()
        {
            isDone = true;
            "<q>Hurry up! Get off this plane! El Diablo is not a patient man and he
            needs it for important business!</q> you hear Cortez tell the
            passengers. <q>If the plane is not cleared by the time our pilot arrives
            I shall shoot any of you who are still aboard! Now, move, move!</q> ";
            
            getActor.addToAgenda(cortezShootingAgenda.setDelay(2));
        }
    ;

    + cortezShootingAgenda: DelayedAgendaItem
        invokeItem()
        {
            isDone = true;
            if(me.isIn(planeFront))
            {
                "Cortez suddenly looks your way. For a split-second he seems frozen
                with astonishment, but only for a split-second.\b
                <q>Hey! You!</q> he cries. A moment later he raises his machine
                pistol and fires into your belly at point-blank range. ";
                finishGameMsg(ftDeath, [finishOptionUndo]);
            }
            else
                getActor.moveInto(nil);                
        }
    ;
:::

You may be wondering about that [getActor.moveInto(nil)]{.code} in the
[else]{.code} clause of [cortezShootingAgenda.invokeItem()]{.code}. Here
we\'re simply saving ourselves the additional AgendaItem that would
otherwise be needed to move Cortez off-stage again at the end of the
takeover scene. If the player character isn\'t around to be shot when
the cortezShootingAgenda is invoked, that must mean he\'s left the
plane, and since he can\'t get back aboard the plane again until he\'s
put on the pilot\'s uniform and so brought the takeover scene to an end,
we might as well remove Cortez right away. Although we\'re moving him
offstage altogether, presumably he notionally moves to the rear of the
plane to take a seat among his pals and buddies.

You may also be wondering about the lack of an [isReady]{.code} property
on cortezShootingAgenda. That\'s because it\'s already defined on the
DelayedAgendaClass; it\'s defined so that a DelayedAgendaItem becomes
ready when the delay specified in its setDelay() method has passed.

We\'ll see some more examples of AgendaItems in our implementation of
the flight attendant. In the meantime if you want the full story about
[AgendaItems](../manual/agenda.htm), you can read about them in the
*adv3Lite Library Manual*.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Character
Building](character.htm){.nav} \> Pablo Cortez\
[[*Prev:* The Security Guard](guard.htm){.nav}     [*Next:* The Flight
Attendant](attendant.htm){.nav}     ]{.navnp}
:::
