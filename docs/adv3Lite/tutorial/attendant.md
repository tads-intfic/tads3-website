::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Character
Building](character.htm){.nav} \> The Flight Attendant\
[[*Prev:* Pablo Cortez](cortes.htm){.nav}     [*Next:* The Art of
Conversation](conversation.htm){.nav}     ]{.navnp}
:::

::: main
# The Flight Attendant --- Getting in a State

The third and final NPC we\'ll implement is the flight attendant,
who\'ll also be the most complex of the three. For a change we\'ll
implement her as a female NPC, and her name, which the player character
may or may not learn, will be Angela. Once again we\'ll start by
defining the basic Actor object:

::: code
    angela: Actor 'flight attendant; statuesque young; woman angela; her'
        @planeFront
        "She's a statuesque and by no means unattractive young woman. "
        
        checkAttackMsg = 'That would be cruel and unnecessary. '
        
        globalParamName = 'angela'
    ;
:::

The one new feature we\'ve introduced here is the **globalParamName**
property. Because the player character may learn the flight attendant\'s
name at some point during the course of the game, it\'s hard to know
when text that mentions her should call her \'the flight attendant\' and
when it should call her \'Angela\'. By giving her a
[globalParamName]{.code} we can use a message substitution parameter
like \'{the subj angela}\' whenever we need to refer to her, and either
\'the flight attendant\' or \'Angela\' will be substituted for it,
according to the current value of her name property. At the start of the
game, she starts out as \'The flight attendant\'. The player character
can only learn her name once we\'ve implemented some conversational
responses, which we\'ll leave until Chapter 11.

Note that the value we give to the globalParamName can be any
single-quoted string we like, so long as it\'s not the same as any other
globalParamName in the game. In particular, we didn\'t have to give
Angela a globalParamName of \'angela\' just because that\'s what her
name is. It\'s usually a good idea, however, to use a globalParamName
that corresponds to the object name, since that generally helps makes
your code more readable. If we see \'{The subj angela}\' in a message
somewhere, it\'ll be pretty obvious it refers to the angela NPC. If we
saw \'{The subj attendant}\' we\'d probably make the same deduction, but
it would then be a bit too easy to get confused and write {The subj
angela} somewhere else, because we wouldn\'t be following such a
consistent convention. If we wrote \'{The subj blonde}\' or \'{The subj
foo}\' we might rather too easily lose track of who it was meant to
refer to.

Thus [globalParamName]{.code} creates a label that can be used in
message substitutions, and later we\'ll see how we can change in the
middle of the game what that label refers to.

Otherwise this definition looks even simpler than those of the previous
two NPCs, but that\'s because most of the complexity is going to be
farmed out to **ActorState** objects. While Pablo Cortez and the
security guard don\'t change much over the course of the game --- Cortez
only makes a relatively fleeting appearance in one scene, and the guard
just keeps on guarding --- the flight attendant will be in different
states at different points in the game. When we first meet her she\'ll
be greeting passengers as they board the plane and asking to see their
tickets. During the takeover scene she\'ll be standing in the jetway
seeing to the disembarking passengers, or else talking with the player
character. Finally, she\'ll be back aboard the plane to look after the
new passengers, effectively as their hostage.

Rather than trying to represent these four different states with a lot
of if-statements or switch-statements on the Actor object, we\'ll
represent each of them with an **ActorState**. As its name hopefully
implies, an [ActorState]{.code} is a special kind of object used to
track the state of an Actor. During the course of a game, an NPC may
change from doing one thing to another, stacking cans at one moment,
sweeping the floor at another, talking with the player character at
another, and maybe walking down the street at another. The NPC needs to
be described differently on each occasion. In a room description one
would need to see \"Bob is busily stacking cans\" or \"Bob is sweeping
the floor\" or \"Bob is watching you, waiting for you to speak\" or
\"Bob is walking rapidly down the street\". Ordinarily such paragraphs
would come from an object\'s [specialDesc()]{.code} property, but in the
case of Bob we\'d need to write quite a complex specialDesc that varied
according to state. This would become more complicated (and messier) the
more different activities Bob could be engaged in over the course of the
game. And it isn\'t just his specialDesc that needs to vary with what
Bob is doing or the state he\'s in. The way he reacts to things
(including attempts by the player character to talk with him) may differ
quite a lot depending on whether he\'s calmly stacking cans, desperately
trying to put a fire out, or sound asleep in an alcoholic stupor. Rather
than writing lots of complex code on the Bob object to cater for these
differences, we can encapsulate Bob\'s different activities or states by
representing each one of them by an ActorState object. The Actor then
uses its current ActorState object to decide how to respond.

Every Actor contains a property called **curState** that serves as a
slot to point to the ActorState object corresponding to its current
state. You can think of an ActorState object as a bundle of methods (and
properties) meant to replace the usual Actor methods while the Actor is
in that state.

You don\'t have to use ActorState objects. For really simple NPCs like
the security guard and Pablo Cortez, they aren\'t really needed. But if
an Actor does have a current ActorState then the Actor object gets the
value of various of its properties and methods from the corresponding
property on its current ActorState object. For example,
[Actor.specialDesc()]{.code} simply calls curState.specialDesc() if
curState is not nil (if it is nil it calls [actorSpecialDesc]{.code}
instead). To illustrate this by means of a crude flowchart:


                          +--------------------+   
                          | Actor.specialDesc  |
                          +--------------------+  
                                    |
                                   / \
                                  /   \
                                 /     \  
                                /       \
                               /         \
                              /  Does the \
    +------------------+  NO /  actor have \  YES   +-----------------------+
    |      Use         |<---<   a current   > ----> |        Use            |
    | actorSpecialDesc |     \ ActorState? /        |  curState.specialDesc |
    +------------------+      \           /         +-----------------------+
                               \         /
                                \       /
                                 \     /
                                  \   /
                                   \ /
                                    V

You can see from this flowchart that it\'s a bad idea to override
[actor.specialDesc]{.code} because that\'s where the switching logic
resides and if you override it you\'ll break the code that reroutes
[specialDesc]{.code} to the [curState]{.code} when available.
Furthermore, you can see that [actor.actorSpecialDesc]{.code} is where
you want to place the fallback special description that should hold
whenever no special state is in effect. The same pattern holds for the
following properties and methods of actor:

-   **specialDesc**
-   **stateDesc** (an extra description that can be tacked on to the
    desc defined on the Actor)
-   **beforeAction()**
-   **afterAction()**
-   **beforeTravel()**
-   **afterTravel()**

As previously mentioned, we can see what ActorState an Actor is
currently in from the value of its **curState** property (which is
allowed to be nil, if there is no ActorState currently associated with
the Actor). If you want an Actor to start out in a particular state, you
can just set [isInitState = true]{.code} on the ActorState in question.
Like AgendaItems, ActorStates are associated with their Actor by being
located within them using the + syntax. We can thus define Angela\'s
initial ActorState like this:

::: code
    + angelaGreetingState: ActorState
        isInitState = true
        specialDesc = "{The subj angela} {is} standing just inside the entrance
            greeting passengers as they board. "
        stateDesc = "Right now, she's wearing a fixed professional smile. "
        
        beforeTravel(traveler, connector)
        {
            if(traveler == me)
            {
                switch(connector)
                {
                case cockpitDoor:
                    "<q>I'm afraid you can't go in there, sir,</q> {the subj angela}
                    stops you. <q>Only flight crew are allowed in the cockpit.</q>.
                    ";
                    
                    exit;
                   
                case planeRear:
                    if(!ticketSeen)
                    {
                        "<q>I'm afraid I can\'t let you board the plane till I\'ve
                        seen your ticket, sir,</q> {the subj angela} insists. ";
                        exit;
                    }
                    break;
                default:
                    break;
                }
            }
        }
        
        ticketSeen = nil
    ;
:::

The [specialDesc]{.code} defined on this ActorState is how the flight
attendant will be shown in the room description when the player
character first encounters her. The stateDesc will be added to the
Actor\'s desc when she\'s examined, so that X FLIGHT ATTENDANT will
initially produce \"She\'s a statuesque and by no means unattractive
young woman. Right now, she\'s wearing a fixed professional smile.\" We
use the [beforeTravel()]{.code} method on this ActorState to make Angela
prevent the player character from venturing into the cockpit, or moving
further into the plane until Angela has seen his ticket, for which
purpose we define a custom [ticketSeen]{.code} property on the
ActorState object.

Angela\'s other three ActorStates can be defined in like manner, though
obviously without defining [isInitState = true]{.code} on any of them,
and without any need for a beforeTravel() method:

::: code
    + angelaAssistingState: ActorState
        specialDesc = "{The subj angela} {is} standing in the middle of the jetway,
            trying to calm the passengers who have just been forced off the plane. "
        
        stateDesc = "Right now, she's looking rather harrassed. "
    ;

    + angelaTalkingState: ActorState
        specialDesc = "{The subj angela} {is} facing you, waiting for you to speak.
            "    
    ;

    + angelaSeatedState: ActorState
        specialDesc = "{The subj angela} {is} sitting near the front of the plane. "
        stateDesc = "Right now, though, she's looking worried and afraid. "
    ;
:::

Our final task in this chapter is to make sure that the flight attendant
ends up in the right state (and the right place) at the right time. To
change an Actor\'s current ActorState you should always call its
**setState(*state*)** method. We could do this in the
[whenStarting()]{.code} and [whenEnding(]{.code}) methods of the
takeover scene, but we\'ll once again use a couple of AgendaItems to do
the job:

::: code
    + angelaAssistingAgenda: AgendaItem
        initiallyActive = true
        isReady = (takeover.isHappening)
        
        invokeItem()
        {
            isDone = true;
            getActor.moveInto(jetway);
            getActor.setState(angelaAssistingState);
            getActor.addToAgenda(angelaReboardingAgenda);
        }
    ;

    + angelaReboardingAgenda: AgendaItem
        isReady = (takeover.hasHappened)
        
        invokeItem()
        {
            isDone = true;
            getActor.moveInto(planeFront);
            getActor.setState(angelaSeatedState);
        }
        
    ;
:::

If you compile and run the game now, you\'ll find that there\'s now no
way for the player character to reach the rear of the plane and trigger
the takeover scene, other than by using debugging commands to teleport
around the map. What we need is one more AgendaItem that is triggered
when the player character first boards the plane that causes the flight
attendant to ask for the player character\'s ticket. At the moment we
don\'t have the means for him to show her the ticket, so we\'ll
temporarily assume that the attendant is satisfied if she can see it.
For this purpose we\'ll use a **ConvAgendaItem**, which is triggered as
soon as the player character is in a position to speak to the actor
concerned, which in this case will happen as soon as he enters the front
of the plane:

::: code
    + angelaTicketAgenda: ConvAgendaItem
        initiallyActive = true
        
        invokeItem()
        {
            isDone = true;
            "<q>Welcome aboard, sir,</q> {the subj angela} greets you with a smile.
            <q>May I see your ticket please?</q> ";
            
            /* Temporary code until we reach Chapter 11 */
            if(ticket.isDirectlyIn(me))
            {
                "She glances down at the ticket in your hand, and temporarily takes
                it off you to check it. <q>That's fine, sir,</q> she assures you as
                she returns it to you. <q>Please move to the rear of the plane to
                find a seat.</q> ";
                angelaGreetingState.ticketSeen = true;
            }
            
        }
    ;
:::

That\'s fine apart from one thing: if the player character boards the
plane without the ticket, he won\'t get a second chance to show it to
the flight attendant and the game will be in an unwinnable state. The
best way to cure that is to have the [beforeTravel()]{.code} method of
angelaGreetingState reset angelaTicketAgenda (i.e. add it to Angela\'s
agendaList again) if the player character leaves the plane when Angela
hasn\'t seen the ticket:

::: code
    + angelaGreetingState: ActorState
        isInitState = true
        specialDesc = "{The subj angela} {is} standing just inside the entrance
            greeting passengers as they board. "
        stateDesc = "Right now, she's wearing a fixed professional smile. "
        
        beforeTravel(traveler, connector)
        {
            if(traveler == me)
            {
                switch(connector)
                {
                case cockpitDoor:
                    "<q>I'm afraid you can't go in there, sir,</q> {the subj angela}
                    stops you. <q>Only flight crew are allowed in the cockpit.</q>.
                    ";
                    
                    exit;
                   
                case planeRear:
                    if(!ticketSeen)
                    {
                        "<q>I'm afraid I can\'t let you board the plane till I\'ve
                        seen your ticket, sir,</q> {the subj angela} insists. ";
                        exit;
                    }
                    break;
                case jetway:
                    if(!ticketSeen)
                        getActor.addToAgenda(angelaTicketAgenda);
                    break;
                default:
                    break;
                }
            }
        }
        
        ticketSeen = nil
    ;
:::

And that\'s where we\'ll leave Angela and her ActorStates for now,
although we\'ll find further uses for them in the next chapter when we
come to implement some conversation. In the meantime, if you\'d like
more information on [ActorStates](../manual/actorstate.htm), see the
*adv3Lite Library Manual*.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Character
Building](character.htm){.nav} \> The Flight Attendant\
[[*Prev:* Pablo Cortez](cortes.htm){.nav}     [*Next:* The Art of
Conversation](conversation.htm){.nav}     ]{.navnp}
:::
