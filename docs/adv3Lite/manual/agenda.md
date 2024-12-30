::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
AgendaItems\
[[*Prev:* Actor States](actorstate.htm){.nav}     [*Next:* Basic
Ask/Tell](asktell.htm){.nav}     ]{.navnp}
:::

::: main
# AgendaItems

[]{#purpose}

## The Purpose of AgendaItems

Some NPCs can afford to be fairly passive, at most reacting to what the
player character says or does, but you may want at least some of the
NPCs in your game to be a bit more life-like, pursuing agendas and goals
of their own. One way to implement this in the adv3Lite library is
through the use of AgendaItems, objects that encapsulate some action
that your NPC takes when certain conditions become true. By adding and
removing AgendaItems from your actors at appropriate moments, and
defining the conditions under which they are invoked, you can create the
appearance of NPCs who act more independently, not just reacting to what
the player character says and does.

Each actor can thus have its own \"agenda,\" which is a list of
AgendaItems. Each AgendaItem represents an action that the actor wants
to perform - this is usually a goal the actor wants to achieve, or a
conversational topic the actor wants to pursue.

On any given turn, an actor can carry out only one agenda item.

AgendaItems are a convenient way of controlling complex behaviour. Each
agenda item defines its own condition for when the actor can pursue the
item, and each item defines what the actor does when pursuing the item.
AgendaItems can improve the code structure for an NPC\'s behaviour,
since they nicely isolate a single background action and group it with
the conditions that trigger it. But the main benefit of agenda items is
the one-per-turn pacing - by executing at most one agenda item per turn,
we ensure that the NPC will carry out its self-initiated actions at a
measured pace, rather than as a jumble of random actions on a single
turn.

Note that AgendaItems are not invoked when conversation has taken place
on the same turn, except in the special case of a
[DefaultAgendaTopic](initiate.htm#defaultagenda) which can be used to
allow an NPC to pursue its own conversational agenda rather than giving
a bland default response to something the player character says (this
will be discussed more fully in a later section). Apart from the special
cases of DefaultAgendaTopics and FollowAgendaItems (to be discussed
below), AgendaItems in adv3Lite work identically to those in adv3.

\
[]{#defining}

## Defining AgendaItems

At an absolute minimum, an AgendaItem must be defined with an
**invokeItem()** method that defines what happens when the AgendaItem is
invoked. The invokeItem() method will usually at some point set the
AgendaItem\'s **isDone** property to true to indicate that the
AgendaItem has now finished its work (and so can be removed from the
actor\'s agenda). AgendaItems often also define their **isReady**
property (which is simply true by default) to contain an expression that
evaluates to true (or a method that returns true) when the time is right
for the AgendaItem to be invoked. In addition, AgendaItems should always
be located directly in the Actor to which they relate. For example:

::: code
    guard: Actor 'burly guard; strong powerful; man; him' @doorway
        "He looks incredibly strong and powerful. "
    ;

    + guardWarnAgenda: AgendaItem
        isReady = Q.canSee(guard, gPlayerChar)
        
        invokeItem()
        {
            "The guard straightens up at your approach, tightening his grip on his spear
             and letting out a fierce growl, as if to say, <q>Don't you even dare 
             <i>think</i> about going through this door!</q> ";
             
             isDone = true;
        }
    ;
:::

Here we\'ve defined an AgendaItem that will be invoked as soon as the
guard can see the player character, but which will only be invoked once
(since isDone is set to true at the end of the first invocation).
However, it won\'t be invoked at all unless we also do one of two
things:

1.  Also define [isInitiallyActive = true]{.code} on the AgendaItem; or
2.  Previously call the **addToAgenda(item)** method on the actor, e.g.
    [guard.addToAgenda(guardWarnAgenda)]{.code}, to add it to the
    actor\'s agendaList property.

Note that we could also call the addToAgenda() method indirectly via the
\<.agenda item\> tag, e.g. [\<.agenda guardWarnAgenda\>]{.code}, though
this also adds the item to the agendaLists of any
[DefaultAgendaTopics](defaultagendatopic.htm) associated with the Actor,
which may or may not be what we want to do (we shall describe
DefaultAgendaTopics more fully in a later section). If for some reason
we want to prevent an AgendaItem from being invoked after we\'ve added
it to the actor\'s agendaList we can use the actor\'s removeFromAgenda()
method, e.g. [guard.removeFromAgenda(guardWarnAgenda)]{.code}, for which
there\'s also a corresponding \<.remove item\> tag, e.g. [\<.remove
guardWarnAgenda\>]{.code}. In adv3Lite the addToAgenda(item) and
removeFromAgenda(item) can also be called with a list of items (a list
enclosed in square brackets); this is one difference from the adv3
library, which does not allow this (and even in adv3Lite you can\'t do
it with the \<.agenda\> and \<.remove\> tags).

[]{#propertylist}

The complete list of methods and properties on AgendaItem that are
likely to be of interest to game authors includes:

-   **getActor()**: returns the Actor this AgendaItem belongs to.
-   **initiallyActive**: set this to true to have this AgendaItem added
    to its actor\'s agendaList from the start of the game.
-   **isReady**: Is this item ready to execute? The actor will only
    execute an agenda item when this condition is met. By default,
    we\'re ready to execute. Items can override this to provide a
    declarative condition of readiness if desired.
-   **isDone**: Is this item done? On each turn, we\'ll remove any items
    marked as done from the actor\'s agenda list. We remove items marked
    as done before executing any items, so done-ness overrides
    readiness; in other words, if an item is both \'done\' and
    \'ready\', it\'ll simply be removed from the list and will not be
    executed. By default, we simply return nil. Items can override this
    to provide a declarative condition of done-ness, or they can simply
    set the property to true when they finish their work. For example,
    an item that only needs to execute once can simply set isDone to
    true in its invokeItem() method; an item that\'s to be repeated
    until some success condition obtains can override isDone to return
    the success condition.
-   **agendaOrder**: The ordering of the item relative to other agenda
    items. When we choose an agenda item to execute, we always choose
    the lowest numbered item that\'s ready to run. You can leave this
    with the default value (100) if you don\'t care about the order.
-   **invokedByActor**: was this AgendaItem invoked by the Actor (true)
    or by a DefaultAgendaTopic (nil)? invokeItem() can test the
    invokedByActor property to decide whether what the actor says should
    be a conversational gambit started on the actor\'s own initiative or
    as a (default) response to something the player character has just
    tried to say.
-   **invokeItem()**: Execute this item. This is invoked during the
    actor\'s turn when the item is the first item that\'s ready to
    execute in the actor\'s agenda list.
-   **resetItem()**: Reset the item. This is invoked whenever the item
    is added to an actor\'s agenda. By default, we\'ll set isDone to nil
    as long as isDone isn\'t a method; this makes it easier to reuse
    agenda items, since we don\'t have to worry about clearing out the
    isDone flag when reusing an item.
-   **report(msg)**: Displays *msg* only if the player character can see
    the actor for whom this AgendaItem is executing. This can be useful
    when an AgendaItem may or may not be executed out of sight of the
    player character, and the player should only see a report of what
    the actor is doing if the actor is visible to the player character.
    Normally this method can be called with a single argument, but an
    optional second parameter is provided in case you want the display
    of the report to depend on some sense other than sight, in which
    case the second argument would be passed as a pointer to the
    appropriate property of the Query object, e.g. [report(\'Bob coughs
    loudly. \', &canHear)]{.code}.

\
[]{#other}

## Other Kinds of AgendaItem

In addition to the AgendaItem class, the adv3Lite library defines three
subclasses of AgendaItem for specialized use.

A **DelayedAgendaItem** is just like an AgendaItem, except that it is
invoked a set number of turns after it is added to its actor\'s
agendaList. The delay is set by calling the DelayedAgendaItem\'s
**setDelay(*turns*)** method, which returns a reference to the
DelayedAgendaItem. This allows you to add a DelayedAgendaItem to the
actor\'s agendaList and set the delay in a single statement, e.g.:

::: code
        bob.addToAgenda(someDelayedAgendaItem.setDelay(3));
:::

Note that the delay is enforced on the isReady property of the
DelayedAgendaItem, so that if you want to enforce some other condition
as well you need to *and* it with the inherited condition, e.g.:

::: code
    + guardReactionAgenda: DelayedAgendaItem
         isReady = inherited && canSee(guard, gPlayerChar)
         
         invokeItem()
         {
             isDone = true;
             "The guard hefts his spear threateningly and prods you in the stomach,
               as if to say, <q>Go now, while you still can!</q> ";
         }
    ;
:::

\
[]{#convagenda}

The second specialized kind of AgendaItem is the **ConvAgendaItem**,
which can be used to allow an NPC either to initiate a conversation or
to seize the conversational initiative during a lull in the
conversation. By default it is invoked when the actor can speak to the
player character (they\'re within audible distance of each other), and
there isn\'t a current [conversation node](convnode.htm), and either the
player character hasn\'t conversed on the same turn or the play
character has said something that triggers a
[DefaultAgendaTopic](initiate.htm#defaultagenda) (for which see below).
Once again, if you need to define a further condition on the isReady
property of a ConvAgendaItem you need to *and* it with the inherited
handling, for example:

::: code
    + clerkPartyAgenda: ConvAgendaItem
        isReady = inherited && gRevealed('office-party')

        invokeItem()
        {
            isDone = true;
            "<q>By the way, I hope I didn't give you the wrong impression,</q>
            the clerk tells you cautiously. <q>Our office party last week 
            wasn't <i>that</i> wild. ";
        }
    ;
:::

Note that if you want something to behave as both a DelayedAgendaItem
and a ConvAgendaItem you can just define it with both classes,e.g.:

::: code
    + clerkJacketAgenda: DelayedAgendaItem, ConvAgendaItem
       invokeItem()
       {
          isDone = true;
          "<q>I've been meaning to ask you,</q> says the clerk. <q>Where <i>did</i>
           you buy that jacket?</q> ";
       }
    ;

     ...
     
     /* Somewhere else in the code */
     
        clerk.addToAgenda(clerkJacketAgenda.setDelay(10));
:::

[]{#followagenda}

The third special kind of AgendaItem is the
**[FollowAgendaItem]{#followagenda}**. This is used when an actor want
the player character to follow him/her/it. To define a
[FollowAgendaItem]{.code} you need to define its **connectorList**
property, which is a list of connectors (which in the simplest case
could just be rooms, but might need to include doors, stairways and
other TravelConnectors) through which the actor wishes to lead the
player character. You can optionally also override the **specialDesc**
method to provide a description of where the actor wants to lead the
player character, and an **arrivingDesc** method to describe the leading
actor arriving in a new destination having just led the player character
there; for example:

::: code
        
    + FollowAgendaItem
        initiallyActive = true
        
        connectorList = [hall, kitchen, diningRoom]
        
        specialDesc()
        {
           "Bob is waiting for you to follow him ";
           switch(getActor.getOutermostRoom)
           {
              case study:
                "north into the hall. ";
                break;
              case hall:
                "east into the kitchen. ";
                break;
              case kitchen:
                "north into the diningRoom. ";
                break;
           }
        }
        
        arrivingDesc()
        {
           "Bob crosses the room and waits for you to follow him
            <<nextDirection.departureName>>. ";
        }
    ;
:::

[]{#followprops}

The full list of additional properties and methods that FollowAgendaItem
defines is as follows:

-   **connectorList**: the list of connectors via which the NPC wants to
    lead the player character.
-   **nextConnNum**: an index into the list of connectors indicating the
    next one to be used; this is used internally by the invokeItem
    method but it could also be used in specialDesc and arrivingDesc to
    determine how far along the path the NPC has traveled and customize
    the description accordingly.
-   **nextConnector**: the connector the NPC is currently waiting to
    lead the Player Character through.
-   **nextDirection**: the direction the NPC is currently waiting to
    lead the Player Character to (e.g. northDir).
-   **specialDesc**: while this FollowAgendaItem is active its
    specialDesc property is used instead of that on the current
    ActorState (or the actor\'s actorSpecialDesc). It can be used to
    describe the fact that the actor is waiting for the Player Character
    to follow him/her; e.g. \"Bob is waiting for you to follow him north
    through the blue door\". You can use [nextConnector]{.code} or
    [nextConnNum]{.code} or [getActor.getOutermostRoom]{.code} to
    determine where along the path the actor is and so customize this
    property accordingly. By default specialDesc displays a \'plain
    vanilla\' description (\"Bob is waiting for you to follow him to the
    north\") but game code will usually want to override this.
-   **arrivingDesc**: this is displayed instead of [specialDesc]{.code}
    on the turn on which the lead actor arrives in a new destination
    when the Player Character is following him/her. By default the
    method just displays the [specialDesc]{.code}, but game code will
    generally want to override it to something more appropriate, e.g.
    \"Bob crosses the lounge and waits for you to follow him out through
    the french windows.\"
-   **traveledThisTurn**: the last turn on which this FollowAgendaItem
    caused the NPC to travel; this is used by [showSpecialDesc()]{.code}
    to decide whether to display [specialDesc]{.code} or
    [arrivingDesc]{.code}.
-   **sayDeparting(conn)**: Display a message announcing our actor\'s
    travel; by default we simply use conn\'s sayActorFollowing() method,
    but we make this a separate method on the FollowAgendaItem to make
    it easy to customise.
-   **noteArrival()**: This method is invoked when our NPC arrives at
    his/her final destination (having traveled via the last connector in
    [connectorList]{.code}). By default we do nothing, but instances can
    override to provide code to handle the arrival, e.g. by changing the
    NPC\'s ActorState.
-   **cancel()**: Cancel this FollowAgendaItem before its normal
    termination (and remove it from all AgendaLists). Use this method
    rather than [Actor.removeAgendaItem()]{.code} for a
    FollowAgendaItem.
-   **beforeTravel(traveler, connector)**: Notification that *traveler*
    is about to travel via *connector* while this FollowAgendaItem is
    active. Game code could use this, for example, to have the actor
    complain if the Player Character tries to travel in some direction
    other than the one the actor is trying to lead the PC.
-   **travelBlocked(conn)**: This method is called when our NPC attempts
    to travel via *conn* but the travel is blocked (by a locked door,
    for example). By default we do nothing here but game code can
    override this method to display an appropriate message or take any
    other action that might be needed in this situation. If this method
    displays anything, the default \"You wait in vain for the traveler
    to go anywhere\" message will be suppressed.

\

Note that a FollowAgendaItem can be mixed in with an EventList class to
allow a series of messages to be defined on its eventList property
describing what that actor is doing while the FollowAgendaItem is
active. One of these messages will then be displayed each turn on which
no conversation takes place (with that actor) and on which the player
character does not attempt to follow the actor anywhere. The messages
defined on the FollowAgendaItem will take precedence over any defined on
the current ActorState.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
AgendaItems\
[[*Prev:* Actor States](actorstate.htm){.nav}     [*Next:* Basic
Ask/Tell](asktell.htm){.nav}     ]{.navnp}
:::
