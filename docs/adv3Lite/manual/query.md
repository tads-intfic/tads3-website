::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Querying the World Model\
[[*Prev:* Topic Actions](topicact.htm){.nav}     [*Next:*
Scope](scope.htm){.nav}     ]{.navnp}
:::

::: main
# Querying the World Model

[]{#q}

## The Q Object

Just about every action (apart from SystemActions like SAVE, QUIT and
UNDO) needs to query the world model, in any case to check what objects
are in [scope](scope.htm), and often to check whether a given object can
be seen, heard, touched or smelled. In the adv3Lite library such queries
are made via a special query object called Q (which in this instance has
nothing to do with either Star Trek or the Synoptic Problem). The Q
object defines a number of methods that can be called to query the world
model, but then delegates to the appropriate [Special](#special) object
(which will be explained further below) to provide the answer.

Q is the general-purpose global Query object. Its various methods are
used to ask questions about the game state. The methods defined on Q
(which represent the questions we can put it) include:

-   **scopeList(actor)**: the list of items that are in scope for
    *actor*.
-   **topicScopeList()**: the list of all Things and Topics that are
    known to the player character (and thus in scope as potential
    topics)
-   **inLight(a)**: determines whether there is any light shining on the
    surface of *a*.
-   **canSee(a, b)**: determines whether *a* can see *b*.
-   **canHear(a, b)**: determines whether *a* can hear *b*.
-   **canSmell(a, b)**: determines whether *a* can smell *b*.
-   **canReach(a, b)**: determines whether *a* can reach (i.e. touch)
    *b*.
-   **sightBlocker(a, b)**: returns a list of all the objects (if there
    are any) that block the sight path from *a* to *b* (if there are
    none, returns an empty list).
-   **reachBlocker(a, b)**: returns a list of all the objects (if there
    are any) that block *a* from reaching *b* (if there are none,
    returns an empty list).
-   **soundBlocker(a, b)**: returns a list of all the objects (if there
    are any) that block the sound (hearing) path from *a* to *b* (if
    there are none, returns an empty list).
-   **scentBlocker(a, b)**: returns a list of all the objects (if there
    are any) that block the scent (smell) path from *a* to *b* (if there
    are none, returns an empty list).
-   **dynamicSpecials**: set this to [nil]{.code} to prevent the list of
    active Specials from being recalculated every time the Q object is
    queried. The default value is [true]{.code} to facilitate Specials
    that may become active or inactive over the course of a game.

Note that for your convenience Thing defines the methods canSee(obj),
canHear(obj), canSmell(obj) and canReach(obj) which all simply call the
corresponding methods on Q.

\

It is very unlikely that you would ever need to modify the Q object in
your own game code; you would simply call its various methods if you
needed to (or rely on other parts of the library to call them as needed
to perform the necessary reality checks). To modify what the Q object
does you might want to define an object of the Special class, which is
explained immediately below.

## [Specials]{#special}

A Special is an object that\'s used by the Q object to implement the
queries that might be put to it. The library-defined Special called
**QDefaults** provides the answers that result from the standard world
model and will be used if you don\'t define anything else; if your game
only needs to use the standard model you don\'t need to worry about
Specials.

For any query, there are two sources of answers. First, there\'s the
standard answer based on the basic \"physics\" of the adventure world
model. Second, there are any number of custom answers from Special
objects, which define customizations that apply to specific combinations
of actors, locations, objects, times, or just about anything else that
the game can model.

The standard physics-based answer (provided by the QDefaults object) is
the default. It provides the answer if there are no (other) active
Special objects that provide custom answers. The
[senseRegion](senseregion.htm) module defines its own Special object
called **QSenseRegion** which modifies the basic physics of QDefaults to
allow sensory connections between rooms in the same SenserRegion. Again
this is not normally something you will need to worry about as a game
author, since including the senseRegion.t module in your game will take
care of it for you. It is very unlikelt that you would ever need to
modify QDefaults or QSenseRegion, and it is (normally) best not to try,
since there would be a risk of breaking code elsewhere that relies on
how these two objects behave.

If there are other active Specials, the only ones that matter for a
particular query are the ones that define that query\'s method. If there
are any active Special objects that define a query method, calling
Q.foo() actually calls the highest-priority Special\'s version of the
foo() method. That Special method can in turn call the next lower
priority Special using next(). If there are no active Special objects
defining a query method, the default handler in QDefaults will be used
automatically.

A Special can thus define any or all of the methods that are defined on
Q (see the list above). It additionally defines:

**isActive**: At any given time, a Special is either active or inactive.
This is determined by the active() method. Each instance should
therefore override this to define the conditions that activate this
Special.

**priority**: The Special\'s priority. This is an integer value that
determines which Special takes precedence when two or more Specials are
active at the same time, and they both/all define a given query method.
In such a situation, Q calls the active Specials in ascending priority
order (lowest first, highest last), and takes the last one\'s answer as
the true answer to the question. This means that the Special with the
highest priority takes precedence, and can override any lower-ranking
Special that\'s active at the same time.

The library uses the following special priority values:

-   0 = the basic library defaults. The defaults must have the lowest
    priority, meaning that all Special objects defined by a game or
    extension must use priorities higher than 0.
-   Other than the special priorities listed above, the priority is
    simply a relative ordering, so games and extensions can use whatever
    range of values they like.

Note that priorities can\'t change while running. This is a permanent
feature of the object. The Mercury code incorporated into adv3Lite takes
advantage of this to avoid re-sorting the active list every time it
builds it. It sorts the master list at initialization and assume it
stays sorted, so that any subset is inherently sorted. If it\'s
important to the game to dynamically change priorities, you just need to
re-sort the allActive\_ list at appropriate times. If priorities can
only change when the game-world state changes, you can simply sort the
list in allActive() each time it\'s rebuilt. If priorities can change at
other times (which doesn\'t seem like it\'d be useful, but just in
case), you\'d need to re-sort the list on every call to allActive(),
even when the list isn\'t rebuilt.

\
[]{#touchobj}

## Specials and the touchObj PreCondition: Customizing Failure Messages

One place in the library where the workings of Specials becomes
particularly complicated is where they are used in conjunction with the
**touchObj** PreCondition. The touchObj
[PreCondition](actres.htm#precond) is used to enforce the need to be
able to touch an object before physically manipulating it (e.g. by
feeling it, picking it up, or hitting it with something). This is needed
to prevent players from physically manipulating objects they shouldn\'t
be able to touch, because they\'re too far away or enclosed within a
closed container. It\'s actually quite complicated to test whether the
player can touch any given object, since any of the following conditions
might prevent it:

1.  The object is in a remote location (a room other than that the
    player character is in).
2.  The object is in a closed (transparent) container; the player
    character can see it but can\'t touch it.
3.  The object is out of reach (because the game author has defined it
    to be so through its [checkReach()]{.code} or [verifyReach()]{.code}
    method).
4.  The player character is in a nested room (located on a chair, say)
    and the game author has made it so that an actor on the chair can\'t
    reach out to other objects in the room without leaving the chair.

The touchObj PreCondition has to test for all these possibilities and,
in the case of number 4, also has to test whether to take the player
character out of the nested room (say by standing up from the chair via
an implicit action). But in order to ensure everything works
consistently, the touchObj PreCondition has to do this via appropriate
methods of the Q object (which then farm the queries out to QDefaults or
QSenseRegion as appropriate). To complicate matters further, if reaching
from the actor to the object that needs to be touched is not possible,
the game needs to explain why, so it\'s not good enough just to call
Q.canReach(gActor, obj) and return nil if reaching is impossible.

To cater for this, the [verifyPreCondition()]{.code} and
[checkPreCondition()]{.code} call [Q.reachProblemVerify(gActor,
obj)]{.code} and [Q.reachProblemCheck(gActor, obj)]{.code} respectively
to build lists of issues that might prevent [gActor]{.code} from
reaching (i.e. touching) [obj]{.code}. These lists contain objects of
the **ReachProblem** class (or one of its subclasses) that define the
nature of the problem that prevents the actor from reaching the object.
The [verifyPreCondition()]{.code} method then calls the
[verify()]{.code} method of every item in the list it has built while
the [checkPreCondition()]{.code} method calls the [check()]{.code}
method on everything in its list. If the lists are empty, or the
verify()/check methods allow touching to go ahead, then the whole action
can go ahead; otherwise the action will be prevented and an appropriate
explanatory message displayed.

In the first instance, then, these explanatory messages come from the
[verify()]{.code} and/or [check()]{.code} methods of some
[ReachProblem]{.code} object. If you\'ve followed the discussion so far,
you may have surmised that this isn\'t the easiest place for such
messages to be customized if they aren\'t what you want in your game. If
you haven\'t followed the discussion all that well up to this point you
may be even more convinced that these messages aren\'t easy to
customize. But don\'t worry; to make things easier the relevant
[ReachProblem]{.code} objects farm the production of messages out to one
of the objects causing the problem where you can easily customize it.

This is perhaps best explained by listing the methods you can customize
(each of which should return a single-quoted string), together with the
default message they relate to and the game object\'s they\'re defined
on:

1.  **reachBlockedMsg(target)**: By default this generates the message
    \"**You can\'t reach the *target* through the *container***\", where
    *target* is the object the actor is trying to touch and *container*
    is the closed container that\'s getting in the way (because you
    can\'t reach through glass, or whatever other transparent material
    the container is made of). This method is defined on the
    *container*.
2.  **cannotReachOutMsg(target)**: By default this generates the message
    \"**You can\'t reach the *target* from the *loc***\", where *target*
    is the object the actor is trying to touch and *loc* is the nested
    room (e.g. a chair) the actor is trying to reach it from. This
    method needs to be defined on the *loc* object in question (e.g. the
    chair containing the actor).
3.  **tooFarAwayMsg**: By default this generates the message \"**The
    *target* is too far away**\", where *target* is the object the actor
    is trying to touch. It normally arises when the actor and the target
    are in different rooms. Note that this method takes no parameters,
    and could simply be defined as a property. Either way it should be
    defined on the *target* object.
4.  **cannotReachTargetMsg(target)**: By default this method (called on
    the actor\'s room) returns the value of
    [target.tooFarAwayMsg]{.code}, which in turn generates the message
    \"**The *target* is too far away**\" as in (3) above. This may be a
    more convenient point at which to customize messages of this sort,
    since this method allows you to customize the message on the room
    the actor is trying to reach the *target* from, rather than having
    to do so on each potential target. Note that overriding this method
    will normally suppress the use of the target\'s
    [tooFarAwayMsg]{.code}. As in (3) above this method will normally be
    invoked when the player character is trying to touch an object in a
    different room.

Don\'t worry if you don\'t follow all the details of this admittedly
somewhat complex mechanism. In all probability all you really need to
know is that if you want to customize one of the messages in the list
above, you can do so by overriding the corresponding method in that
list.

\
[]{#commlink}

## The Communications Link Special

The function of a Special is to change the rules that govern sensory
connections and scope. One pertinent situation that quite often occurs
in Interactive Fiction is where we want to establish a remote
communication link between the player character and another actor in a
remote location, typically to represent a telephone conversation or a
videolink. To facilitate this the library defines a **commLink** Special
which can be used for precisely this purpose.

The following methods of the commLink object are the ones you need to
know about to make use of it:

-   **connectTo(other, video?)**: establishes a remote communications
    link between the player character and *other*. The second, *video*,
    parameter is optional. If it is either not supplied or nil the link
    will be an audio one only. If it is true then the link with be an
    audiovisual one.
-   **disconnectFrom(other)**: removes the remote communications link
    between the player character and *other*, where *other* can either
    be a single actor or a list of actors.
-   **disconnect()**: severs the remote communications link between the
    player character and all the other actors it was established with.
-   **isConnectedTo(obj)**: returns the nature of the current remote
    comms link with *obj*. A value of nil means there\'s currently no
    link. A value of **AudioLink** means there\'s an audio connection
    only. A value of **VideoLink** means there\'s both an audio and a
    video connection. (Note: [AudioLink]{.code} and [VideoLink]{.code}
    are simply macros that expand to 1 and 2 respectively).

Note that this mechanism allows the player character to be in remote
communications with several actors at once and in audio communication
with some and audiovisual communication with others.

Further considerations may apply if the [SenseRegion](senseregion.htm)
module is present and you establish a remote audiovisual link. Since the
other actor will normally be in a remote location, the default response
to trying to examine him/her will be that s/he\'s too far away to make
out any detail, which probably isn\'t what you want for a remote
audiovisual link. To fix that you\'d either need to set [sightSize =
large]{.code} on the remote actor or define its [remoteDesc(pov)]{.code}
method. For further details see the discussion of [Remote
Communications](senseregion.htm#remotecomm) in the SenseRegion chapter.

As an example, suppose we want to define a Phone command that can be
used to phone other actors. We need to ensure that potential callees are
in scope, so we need to add all known actors to scope in our Phone
action\'s [addExtraScopeItems()]{.code} method. We then need a response
to attempts to trying to phone things that aren\'t actors, and another
response to phoning actors. Some actors may not be contactable by phone
so we need to defined a [canPhoneMe]{.code} property on the Actor class
that determines this. If phoning is allowed then we want it to establish
a link with the other actor and say hello to him or her. Conversely, we
want ending a conversation with another actor to sever any
communications link there may have been. A fairly basic scheme to do all
this might be as follows:

::: code
     DefineTAction(Phone)
        addExtraScopeItems(role)
        {
            inherited(role);
            
            scopeList = scopeList.appendUnique(Q.knownScopeList.subset({x:
                x.ofKind(Actor)}));
        }
    ;

    VerbRule(Phone)
        ('phone' | 'call') singleDobj
        : VerbProduction
        action = Phone
        verbPhrase = 'phone/phoning (whom)'
        missingQ = 'who do you want to phone'
    ;

    modify Thing
        dobjFor(Phone)
        {
            verify()
            {
                illogical('{I} {can\'t} phone {that dobj}. ');
            }
        }
    ;

    modify Actor
        dobjFor(Phone)
        {
            verify()
            {
                if(commLink.isConnectedTo(self))
                    illogicalNow('{I} {am} already connected to {the dobj}. ');
                
            }
            
            check()
            {
                if(!canBePhoned)
                    "{The dobj} {doesn\'t answer[ed]} {her actor} call. ";  
            }
            
            action()
            {
                commLink.connectTo(self);
                sayHello();
            }
        }
        
        sayGoodbye(reason = endConvBye)
        {
            inherited(reason);
            commLink.disconnectFrom(self);
        }
        
        canBePhoned = true
    ; 
     
:::

If you want to try this out for yourself, bear in mind that the way
we\'ve tried it allows the player character to phone only those actors
already known to him or her, so you may need to define [familiar =
true]{.code} on the remote actor for it to work.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Querying the World Model\
[[*Prev:* Topic Actions](topicact.htm){.nav}     [*Next:*
Scope](scope.htm){.nav}     ]{.navnp}
:::
