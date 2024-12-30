::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Change Log](final.htm){.nav} \>
Change Log\
[[*Prev:* Conclusion](conclusion.htm){.nav}     [*Next:*
Index](manual_idx.html){.nav}    ]{.navnp}
:::

::: main
# Change Log

-   [Version 1.6.1](#v1.6-1)
-   [Version 1.6](#v1.6)
-   [Version 1.5](#v1.5)
-   [Version 1.4](#v1.4)
-   [Version 1.3](#v1.3)
-   [Version 1.2](#v1.2)
-   [Version 1.1](#v1.1)
-   [Version 1.0](#v1.0)
-   [Version 0.92](#v0.92)
-   [Version 0.91](#v0.91)
-   [Version 0.9](#v0.9)
-   [Version 0.8](#v0.8)
-   [Version 0.7](#v0.7)
-   [Version 0.6](#v0.6)
-   [Version 0.5](#v0.5)
-   [Version 0.4](#v0.4)
-   [Version 0.3](#v0.3)
-   [Version 0.2](#v0.2)

\

------------------------------------------------------------------------

## [Version 1.6.1]{#v1.6-1} (15-Mar-2023)

The default value of **ParseErrorQuestion.priority** has been changed to
true. This means that player input in response to a parser query will be
understood as a response to that query before being interpreted as a new
command (if the latter is possible). So, for example, if the parser
responds to X WALL, which \'Which do you mean, the east wall or the west
wall?\', the response EAST will be taken as meaning the player meant to
refer to the east wall rather than being interpreted as a GO EAST
command (as it previously would have been).

------------------------------------------------------------------------

The okaySetMsg property has been moved from the Settable class to the
Thing class, and is now used On Thing in place of the DMsg() previously
used to report the effect of setting something to somethinq. This
ensures that overriding okaySetMsg should consistently behave as
expected.

------------------------------------------------------------------------

All the occurrences of gDobj and gIobj within verify routines have been
replaced with [gVerifyDobj and gVerifyIobj](actres.htm#gTentative)
(respectively). This should help guard against any further run-time
error bugs of the kind noted below in relation to locks and keys (that
is, run-time errors resulting from attempts by verify routines to
reference gDobj or gIobj before the parser has determined what their
values are).

------------------------------------------------------------------------

The new Action property [failedActionCountsAsTurn](actres.htm#failturn)
allows game code to optionally make actions that fail at the verify
stage not count as a turn (so that no further turn processing takes
place).

------------------------------------------------------------------------

There is now a new
[EventListItem](../../extensions/docs/eventlistitem.html) extension,
which allows the definition of items in EventLists that can be used
conditionally, a little like AgendaItems.

------------------------------------------------------------------------

The library module extras.t now defines a
[MinorItem](extra.htm#minoritem) class (based on work by Joey Cramsey)
which can be used to define unobtrusive items that should only be
mentioned in response to LOOK or WHATEVER ALL under certain
circumstances (such as being directly in the outermost room, the
actor\'s location, or the player character\'s inventory).

------------------------------------------------------------------------

The SensoryEmanation class has been changed so that SensoryEmanations
are by default hidden from actions applied to ALL that are not relevant
to the kind of SensoryEmanation involved (in other words, a
SensoryEmanation will not respond to FOO ALL unless FOO is either
EXAMINE or whichever is appropriate of SMELL or LISTEN TO). Hopefully,
this is a minor improvement (avoiding unnecessary clutter in respose to
FOO ALL commands) that will not cause any problematic issues with
backward compatibility, but any games that wish to reinstate the old
behaviour can do so by overriding the [hideFromAll(action)]{.code}
method on the SensoryEmanation class.

------------------------------------------------------------------------

The header file advlite.h now defines the constant ADV3LITE_H
(previously it instead defined ADV3_H).In theory this could allow game
code to detect whether the game is written using adv3Lite or adv3 (which
defines the constant ADV3_H in its header file(. This may, however, be
of limited use since the constant is only defined for source files which
in any case include the appropriate header file.

------------------------------------------------------------------------

The Room class now defines a new **noScriptAfterListen** property which,
if true (the default) prevents the room\'s
[roomDaemon()](room.htm#roomdaemon) method calling the room\'s
doScript() method on the same turn as an intransitive LISTEN command.
The purpose of this is to prevent the clash that might otherwise occur
between the output of a LISTEN command and an atmospheric message
describing a sound, thereby avoiding output like:

    >LISTEN
    You hear nothing out of the ordinary.
    You hear the hoot of a distant owl.

------------------------------------------------------------------------

The Action class now has an
[isConversational](actoroverview.htm#conversational) property that can
be used to test whether an action is conversational. This is defined as
true on all the conversational actions such as TalkTo, AskAbout,
TellAbout and so on.

------------------------------------------------------------------------

The [statuslineExitLister.showListEmpty()]{.code} method now uses
[BMsg(status line noexits, \'\<i\>None\</i\>\']{.code} instead of just
[\'\<i\>None\</i\>\']{.code} to display an empty list of exits in the
status line. This makes it easier to customize what\'s shown by using a
CustomMessages object, which may, for example, be useful in situations
where there is a way of moving from the current location but not by
using the usual direction commands. Note that the other types of exit
lister already use BMsg or DMsg for this purpose.

------------------------------------------------------------------------

According to the manual, the actor\'s current room should be included in
the list of objects whose smellDesc or listenDesc is displayed in
response to an intransitive SMELL or LISTEN command, but this wasn\'t
happening. This has now been fixed so that the room is included in the
list of objects, making it easier to associate an atmospheric smell or
noise to a location.

------------------------------------------------------------------------

Fixed bugs that could caused run-time errors when trying to unlock a
door while holding the wrong key.

------------------------------------------------------------------------

Fixed bug that could cause a run-time error or inappropriate messge with
tryng to unlock a door without the right key (by changing
cannotUnlockWithMsg from incorrectly referencing the direct object to
correctly referencing the indirect object of the command).

------------------------------------------------------------------------

Fixed bug that could upset subject-verb agreement in a string of verbs
following the use of the {s/?ed} parameter substitution. Also added a
new {aac} parameter substition (devised by Joey \"Jess\" Cramsey) as a
workaround for any similar problems that might occur.

------------------------------------------------------------------------

Fixed bug that prevented the names of responding objects to be listed in
respond to a LISTEN TO command applied to multiple objects.

------------------------------------------------------------------------

Fixed bug in askMissingObject() that could cause run-time errors by
resetting objects to nil at the wrong point. This might manifest, for
example, when issuing a LOCK command without specifying a key.

------------------------------------------------------------------------

\

## [Version 1.6]{#v1.6} (12-Dec-2022)

The **Thing** class now defines a new **checkRemove(obj)** which can be
used to allow the Thing in question to object to the removal of obj.
This is intended to be called at the check stage of action handling, so
that checkRemove(obj) can prevent the removal of obj simply by
displaying a message. Currently, the library only calls checkRemove(obj)
from the check stage of the TAKE action (which covers most cases where
an object is likely to be removed from a container, including commands
that would result in an implicit TAKE). Game code may, however, wish to
call checkRemove() from the check stage of other actions, depending on
how they are implemented, if they could result in the removal of an
object from its container without the actor taking the object. In some
cases it may be easier to use the
[checkReach(actor)](thing.htm#reaching) method to do this, especially
where what is being modelled is the inaccessibility of the object to the
player character\'s touch.

This method was originally removed to correct a problem that had arisen
with using **exit** or **abort** at the action stage of command
handling, since at one point this was suppressing the output of any text
from the action stage (resulting in silent failure of the command). This
in turn made it appear unsafe to use notifyRemove() to prevent an object
being removed from its container, since this would be called at the
action stage (via actionMoveInto()). With luck, this should no longer be
a problem, so it should be safe to use notifyRemove() and prevent the
removal with **exit**. Using checkRemove() provides an alternative if
its needed, or where it seems more logical to halt the action at the
check stage before it gets going at the action stage.

------------------------------------------------------------------------

The library now defines a [noHalt()](actres.htm#nohalt) function which
can be used in check methods to allow an action to proceed even if the
check method needs to display some text.

------------------------------------------------------------------------

The [Special](query.htm#special) class now invalidates the cached list
of active Specials ([Special.allActive\_]{.code}) each time its
[first()]{.code} method is called. This ensures that the list of active
Specials is recalculated every time the Q object is queried, which is
useful if Specials become active or inactive during the course of the
game. If this behaviour is not wanted, it can be switched off by setting
[Q.dynamicSpecials]{.code} to [nil]{.code}.

------------------------------------------------------------------------

The library now defines four new macros:
[**gVerifyDobj**](actres.htm#gTentative), **gVerifyIobj**,
**gTentativeDobjIn(lst)** and **gTentativeIobjIn(lst)**. These are
principally for use in verify routines of TIActions which want to depend
on the identity of the other object (for example, of the direct object
when the action handling is being written on the indirect object) before
the other object has been resolved (so that, gDobj, for example, may
still be nil,leading to possible run-time errors). **gVerifyDobj**,
**gVerifyIobj** evaluate to gDobj and gIobj respectively if gDobj/gIobj
is not nil, and to the first object in the list of tentative
direct/indirect objects (gTentativeDobj\[1\]/gTentativeIobj\[1))
otherwise. **gTentativeDobjIn(*lst*)** and **gTentativeIobjIn(*lst*)**
return true if *lst* contains any items in common with gTentativeDobj or
gTentativeIobj respectively.

------------------------------------------------------------------------

The library now defines INVENTORY TALL and INVENTORY WIDE commands to
switch between inventory listing formats (along with a lister to show
the inventory in the tall, columnar format as an alternative to the
existing wide, sentence-style one).

------------------------------------------------------------------------

The VerbRule for the ClimbUpWhat action has been changed to match only
CLIMB UP in order to avoid clashing with commands like GO UP or WALK UP
that should triggle a Travel Action instead. The VerbRules for both
ClimbUpWhat and ClimbDownWhat have had the \[badness\] tag removed so
that the commands CLIMB UP and CLIMB DOWN will either choose an
appropriate direct object or ask for one. This is princiapply to prevent
the parser understanding UP or DOWN as the names of the object the
player wants to climb.

------------------------------------------------------------------------

The handling of PushTravel has been substantially overhauled to make it
more robust, fix some bugs, and handle the possible barriers to
PushTravel in a more logical order. This should not necessitate any
changes to game code, but should enable game code to behave more in the
way game authors are likely to expect. A main feature of this overhaul
is that any PushTravelDir commands are now converted into the
appropriate action (ClimbUp, ClimbDown, or GoThrough) the appropriate
TravelConnector object.

------------------------------------------------------------------------

The library now defines a new **travelPermitted** PreCondition. This
calls the beforeTravel notifications on every object in scope so that
they can rule out Travel or PushTravel at the PreCondition stage before
it is attempted (for example, before travel is even attempted through a
closed door). It was primarily introduced as part of the overhaul of
PushTravel handling but has also been added to the preconditions of
travel via physical connectors such as doors, passages and stairways,
and indeed on dobjFor(TravelVia) on the abstract TravelConnector class.

------------------------------------------------------------------------

As part of the same overhaul, some substantial changes have been made to
the inner workings of the **UnlistedProxyConnector** class. Some of
these have a future overhaul of further travel handling in mind (along
the same lines as for PushTravel), should this prove necessary or
desirable (although I\'ve delayed doing this completely for now on the
\"if it ain\'t broke, don\'t fix it\" principle). But it should now be
possible (though probably not necessary) to make an
UnlistedProxyConnector the direct object of a GoThrough action and have
it work as expected.

------------------------------------------------------------------------

There is now a new **nonTravel(loc, direction)** function which contains
the common handling of attempts to travel from loc in a direction that
does not lead to at TravelConnector (e.g. where a direction property
points to a string or method). This is used in the library as part of
the new implementation of both PushTravel and Travel, and probably
isn\'t directly useful for game code. There is also a new
**objOfKind(obj, cls)** function which returns true if obj is indeed an
object and that object is ofKind(cls) and nil otherwise. It was
introduced to help with testing whether a direction property points to a
TravelConnector when it might not even point to an object, but may have
other uses in game code when the data type of a given value at run-time
is uncertain.

------------------------------------------------------------------------

The Actor class now has a **physicalTopicObjs** property containing a
list of topic entry topic objects (by default \[hitTopicObj,
kissTopicObj, touchTopicObj\]) for which an actor\'s **noResponse**
message should not be invoked. This is to prevent actions like KISS MARY
or HIT FRED being treated as conversational when a noResponse property
is defined and to allow user code to extend the range of such
non-conversational topic types, for example if game code wants to define
a HugTopic to respond to a HUG command.

------------------------------------------------------------------------

The English-specific LMentionable properties **possAdj** and
**possNoun** (which determine the possessive forms of object names used
by library messages) have been tweaked to provide better defaults for
plural nouns. The previous handling simply added apostrophe-S to the
theName property of the object in question, which could result in output
like, \"You now have the clerks\'s attention.\" The new behaviour now
adds apostrophe-S to singular nouns or plurals that\'s don\'t end in S
(such as men and women) but only an apostrophe to plurals that do end in
S. This is defined in the new LMentionable property **possEnding** which
can be overriden by game code to deal with exceptions (you could, for
example, define possEnding on an npc called Moses to be just an
apostrophe).

------------------------------------------------------------------------

There has been a substantial overhaul of how implicit **SAY** commands
are handled. The previous behaviour was that the parser would interpret
any command not otherwise understood as something the player wants to
say to the NPC the player character is currently in conversation with
(assuming a conversation is currently in progress). This might well be
the appropriate behaviour in a game that makes substantial use of
SayTopics, but might be quite inappropriate (and potentially confusing
to players) in a game that makes little or no use of SayTopics. The
default behaviour is now that the parser will only understand otherwise
unparseable input as an implicit SAY command if the current interlocutor
(the NPC the player character is currently in conversation with) has
SayTopics defined on the corresponding Actor object or its current
ActorState. Moreover, several methods and properties are now available
on the Actor class to tweak this behaviour as game authors wish. For
full details see the relevant section of this manual on [when implicit
say happens](specialtopic.htm#implicitsay).

------------------------------------------------------------------------

The way the library handles (implicit or explicit) SAY commands when
there is no matching SayTopic (or DefaultSayTopic) has also been tweaked
to make it clearer to the player how their command has been understood
(which is particularly important when SAY is implicit, that is, when the
player\'s input has been interpreted as something the player character
shoud say to the current interlocutor even when SAY is not explicitly
included in the command. The default behaviour is now to echo the
player\'s input back as something the player char has said, followed by
the Actor\'s noResponse message, for example \'\"I like carrots,\" you
say. / The pink rabbit does not respond.\' While this may not look very
elegant, it at least makes it clear to the player how the parser has
interpreted their input, which could otherwise be a bit mysterious in
the case of an implicit SAY. Game code can modify this behaviour either
by overriding the **defaultSayResponse** property on the Actor class or
object (to customize the entire message) or the **pcDefaultSayQuip**
property (which defines the first part of this response reporting what
the player character supposedly just said).

Note, however, that this behaviour (defined on the Actor) may be
defeated by the presence a DefaultAnyTopic or DefaultConversationTopic,
both of which may be triggered by a SAY command. This problem can be
circumvented either by using a DefaultAnyNonSayTopic or
DefaultNonSayTopic instead, or by including a DefaultSayTopic (which, if
its topicResponse is not overriden, will now display its actor\'s
defaultSayResponse, thus producing the same effect.

------------------------------------------------------------------------

The default value of **Parser.autoSpell** has been changed from true to
[(gPlayerChar.currentInterlocutor == nil)]{.code}. This is because the
spelling corrector can often appear inappropriately intrusive in
conversational contexts, so not attempting spelling corrections during
an ongoing conversation seems to give better results. Game code can
easily override the value of Parser.autoSpell to true or nil or some
other expression if that better suits game author preference.

------------------------------------------------------------------------

If calling the **moveInto()** method on a Thing results in its changing
location, its **wornBy** property is automatically set to nil (since it
is then no longer being worn by its previous container)

------------------------------------------------------------------------

The Quit action now uses the **yesOrNo()** method to ask players to
confirm that they wish to quit, rather than looking for a response
beginning with \'y\', which is applicable only in English.

------------------------------------------------------------------------

The new [ProxyActor](actorobj.htm#proxy) class can be used to continue
the definition of a complex actor over more than one source file. Minor
changes have also been made to the ActorState and AgendaItem classes to
work with ProxyActor. Set the location property of a ProxyActor to the
Actor object it is standing in for, and you can then locate everything
in the ProxyActor just as you would in the original Actor.

------------------------------------------------------------------------

The **DefaultAgendaTopic** class has been slightly tweaked so that a
DefaultAgendaTopic is only active when there are any AgendaItems ready
to execute. Previously it would be active if there were any AgendaItems
in the DefaultAgendaTopic\'s agendaList at all, regardless of whether
they might be executed.

------------------------------------------------------------------------

The [outermostVisibleParent(]{.code}) and [outermostParent]{.code}
properties of **Room** are now defined as [self]{.code} (rather than
nil, as previously). This avoids run-time errors that could otherwise
occur in attempting to construct a scope list for a Room.

------------------------------------------------------------------------

It is now possible to define a list of exceptions that a
[DefaultTopic](actortopicentry.htm#exceptions) will not match (allowing
fallthrough to handling these topics elsewhere).

------------------------------------------------------------------------

The library now defines a [Player](beginning.htm#definingpc) class that
can be used to define the player character (although the previous way of
doing so still works perfectly well). This makes very little practical
difference but is provided for game authors who feel that defining the
player character as a Thing with various properties that also have to be
defined looks needlessly complex.

------------------------------------------------------------------------

Previously, an active FollowAgendaItem prevented the running of a script
on the current ActorState, even when no following was taking place (so
that the FollowAgendaItem appeared not to be doing anything). This
potentially frustrated the triggering of an event list defined on the
ActorState to make an actor seem more lively while travel was not taking
place. This has now been changed so that if an ActorState defines an
event list (and combines a Script class in its definition) that event
list will now be triggered even if there is an active FollowAgendaItem,
provided that no following or conversation is taking place on the turn
in question. Game authors also have the option to define an event list
on the FollowAgendaItem instead (by mixing it in with a Script class),
in which case the FollowAgendaItem\'s event list will take precedence
over any defines on the ActorState.

------------------------------------------------------------------------

The **Region** class now defines a new
[regionDaemon()](room.htm#regionprops) method that\'s called each turn
on all the regions in which the player character is currently located.

------------------------------------------------------------------------

Displaying the description of a Room now sets its **examined** property
to true (as well as its **visited** property, as previously). This means
that examined and visited nearly always mean the same thing, but there
is one exception: when the player character enters a dark room for which
recognizableInDark is true, it will considered as visited but not
examined.

------------------------------------------------------------------------

The **Room** class now defines a **roomFirstDesc** property, which, if
used (i.e., not left as nil), will be used the first time a Room is
described in place of its desc property, the desc property being used
thereafter. If roomFirstDesc is not defined then the desc property will
also be used the first time the room has been described.

------------------------------------------------------------------------

The usePreParser in the English-language newbie.t file previously
intercepted any command beginning USE with a message saying this was too
vague and suggesting the player try something more specific, but this
could get in the way of a USE command defined in game code that actually
wants it. The usePreparser now checks whether the game defines an action
called Use and only intervenes if there is no Use action defined in game
code.

------------------------------------------------------------------------

TAction now defines a **reportFailureAfterSuccess** property. If this is
set to true, then on any command that acts on multiple direct objects,
any messages that report failure at the check stage will be displayed
after any messages that report successful attempts. This may give better
results when, for example, a TAKE ALL command results in the player
character trying to pick up more objects than the PC can carry. For now,
the default value of reportFailureAfterSuccess is nil, both for
backwards compatibility and because this feature is somewhat
experimental; there may be situations in which it doesn\'t produce
desirable results. Game code can, of course, override this property
either on the TAction class or on individual Actions.

------------------------------------------------------------------------

The [SymConn](../../extensions/docs/symconn.htm) extension has been
significantly enhanced to make it easier to define connections that are
two-way (using only single doors, passages and the like) but not
necessarily strictly symmetrical. The extension also adds new
[SymStairway](../../extensions/docs/symconn.htm#symstair) and
[SymPathPassage](../../extensions/docs/symconn.htm#sympathpassage)
classes, as well as number of properties and methods to facilitate
varying the description of SymConnectors from either side.

------------------------------------------------------------------------

The library now provides a new
[Brightness](../../extensions/docs/brightness.htm) extension which can
be used to model different lighting levels. This is based on, but not
identical to, the implementation of different levels of lighting in the
adv3 library and is intended to supply what was previously the lack of
any implementation of this feature in adv3Lite.

------------------------------------------------------------------------

The library previously defined the objHeld precondition for
iobjFor(LockWith) and iobjFor(UnlockWith) on Key but no preconditions
for these actions on Thing. Thing now defines the touchObj precondition
for the iobj of these two actions.

------------------------------------------------------------------------

The library previously defined the objHeld precondition for the dobj on
the various ThrowXXX actions and the GiveTo action. It now defines the
objHeld precondition for these actions in addition.

------------------------------------------------------------------------

The incorrect comma at the end of the \"Shipboard directions have no
meaning here\" message in Doer has been replaced with a full stop.

------------------------------------------------------------------------

Tweaked the order in which the verify routine for locking or unlocking
an indirectLockable object rules out failed attempts to do so, so that
it reports that the object is already locked when attempting to lock it
or unlocked when attempting to unlock it rather than displaying the
message saying that the object is locked/unlocked by some other means.

------------------------------------------------------------------------

There is now a \<.unreveal key\> tag which reverses the effect of a
\<.reveal key\> tag, along with a gUnrevealed(*key*) macro that undoes
the effect of gRevealed(*key*). This is primarily intended for use
outside conversational contexts where game authors want to use the
revealed/unrevealed mechanism as a covenient way to set and unset flags.

------------------------------------------------------------------------

It is now possible to control the order in which rooms in a SenseRegion
have their contents listed/described in response to an intransitive
LOOK, LISTEN or SMELL command by using either the room\'s **listOrder**
property, or, for finer-grained control, its
[remoteRoomListOrder(pov)](senseregion.htm#listorder) method (based on a
suggestion posted on intfiction.org by Joey \"Jess\" Cramsey).

------------------------------------------------------------------------

The [TravelConnector](travel.htm) class now maintains a list of actors,
vehicles and push-travelers that have traversed the TravelConnector over
the course of the game. This list is stored in the new **traversedBy**
property, which can be queried by the new
**hasBeenTraversedBy(*actor*)** method. The common case of testing
whether the TravelConnector has been traversed by the player character
can be carried out by simply querying the **traversed** property.

------------------------------------------------------------------------

Fixed bug that caused spurious implicit action reports when trying to go
through a locked door (with a GO THROUGH DOOR command).

------------------------------------------------------------------------

Fixed bug that prevented proper execution of Daemons and added facility
to allow a Daemon to be created with an interval of zero, which causes
it to he executed on the same turn and then every turn thereafter.

------------------------------------------------------------------------

Fixed bug that could make an actor get out of a vehicle before
travelling to a new location (instead of travelling in/on the vehicle).
Note, however, that this fix does not change what happens in response to
commands like ENTER that might trigger travel but are not themselves
travel commands; in such cses the actor will still leave the vehicle
(since this is probably the most sensible default). If you want to
change this behaviour for a particular vehicle (say a bike that can be
ridden into a wood in response to ENTER WOOD) the simplest way to
accomplish it is almost certainly via a [Doer](doer.htm#enterdoer).

------------------------------------------------------------------------

Fixed bug that could cause a crash if the TEST debugging command was
used with a very long list of commands.

------------------------------------------------------------------------

Fixed bug that could cause a run-time error when directing a command to
an ambiguous actor (or object), such as \"glove, hello\" when there are
two gloves in scope.

------------------------------------------------------------------------

Fixed bug that could cause a run-time error when the parser tries to
lock or unlock something with a key that doesn\'t fit (caused by the
direct object not yet having been definitively identified when the
verify routine was run on the indirect object).

------------------------------------------------------------------------

Fixed bug that could cause nothing to be displayed when the parser
should be asking for a missing (usually indirect) object.

------------------------------------------------------------------------

Fixed bug in the VerbRule for the Cut action (from which the missingQ
was missing).

------------------------------------------------------------------------

Fixed bug that could cause a run-time error when attempting to attach
one object to another (this could occur in the verify method on the iobj
when the dobj had not yet been determined). At the same time replaced a
couple of instances of += with appendUnique() for adding at item to a
list of attached objects to ensure greater protection against
unintentional duplication.

------------------------------------------------------------------------

Fixed (hopefully!) an obscure bug that could result in a game not
reporting anything when the player character opens an openable container
from the inside.

------------------------------------------------------------------------

Fixed bug that prevented the display of an implicit action report, such
as \"(first taking the doodah)\", if the main action failed at the check
stage.

------------------------------------------------------------------------

Changed the English language grammar for the implicit TELL ABOUT command
to avoid the parser misinterpreting commands of the form TELL HER ABOUT
FOO (for which the parser was misinterpreting HER as a possessive and
replying with contextually inappropriate statements such as \"Martha
doesn\'t appear to have any about foo.\")

------------------------------------------------------------------------

\

## [Version 1.5 (28-Mar-2016)]{#v1.5}

There is now a [Weight](../../extensions/docs/weight.htm) extension that
can be used to track object weights in much the same way as the standard
library already tracks bulk.

------------------------------------------------------------------------

There is now a [SymConn](../../extensions/docs/symconn.htm) (Symmetrical
Connectors) extension. This does two things. First, if a direction
property of a room points to another room, it automatically sets up the
connection back in the reverse direction (so, for example, if you
defined [hall.east = study]{.code} it would automatically set
[study.west = hall]{.code}). Second, it defines **SymConnector**,
**SymPassage** and **SymDoor** classes which can be used to set up
symmetrical connections between rooms requiring one object instead of
the normal two (so that, for example, a single [SymDoor]{.code} object
can be used to represent both sides of a door, instead of needing two
Door objects).

------------------------------------------------------------------------

The **Direction** class now has an **opposite** property, which
specifies the direction object corresponding to the opposite direction
(e.g. [eastDir.opposite]{.code} would be [westDir]{.code}). It also has
an **oppositeProp(prop)** method which returns the direction property
corresponding to the opposite of *prop* (for example
[Direction.oppositeProp(&east)]{.code} would return [&west]{.code}).
Both these changes are principally to facilitate the implementation of
the SymConn extension, but are also available for use by game code.

------------------------------------------------------------------------

The **TravelConnector** class now has a **getDestination(origin)**
method which returns the destination to which the connector leads for an
actor starting from *origin*. For all TravelConnectors defined in the
main library this simply returns [direction]{.code}, so existing user
code should be unaffected by this change, although a number of library
methods that used to use the value of the [direction]{.code} property
now use the value returned by [getDirection()]{.code} instead. Again,
this change is principally to facilitate implementation of the SymConn
extension.

------------------------------------------------------------------------

The **Viewport** class in the
[viewport](../../extensions/docs/viewport.htm#setrooms) extension now
has a **setRooms()** method that can be called to change the rooms
overlooked by the Viewport.

------------------------------------------------------------------------

The new Thing property **inDarkDesc** can be used to give an alternative
description for an object that is [visibleInDark]{.code} in an unlit
room.

------------------------------------------------------------------------

The Thing class now has a travelVia() method (which simply calls the
travelVia method on the appropriate TravelConnector). This is mainly to
provide minimal handling in case user code ends up trying to call this
method on a Thing that isn\'t an Actor, although this should not
normally occur.

------------------------------------------------------------------------

The handling of PUT ALL *prep* XXX has been changed to make a more
intelligent selection of the list of direct objects corresponding to
ALL. The library first attempts to restrict the choice to all portable
objects that are not already in/on/under/behind XXX and are not XXX
themselves (a container can\'t be put in/on/under/behind itself); if it
finds any it applies the command to those. If not it next takes ALL to
apply to all the portable objects in scope. If there are none it takes
ALL to apply to all objects in scope apart from the actor and the room.
The idea is to make PUT ALL *prep* XXX do what the player most likely
wants it to do, or else explain why none of the objects to which ALL
might otherwise most plausibly apply can be placed in/on/under/behind
XXX.

At the same time the message explaining that something can\'t be put
in/on/under/behind itself has been changed from \"You can\'t put
anything in/on/under/behind itself\" to \"You can\'t put {the dobj}
in/on/under/behind itself.\" This is to make it clearer which object the
parser is complaining about if it issues several messages about objects
that can\'t be put somewhere on the same turn; e.g. PUT ALL IN BOX when
there\'s no portable objects in scope not already in the box so the
parser has to explain why each of the other available objects can\'t be
put in the box (\"The table is too heavy, the door is fixed in place,
you can\'t put the box in itself\").

------------------------------------------------------------------------

The definition of *gActionListObj* has been changed so that it correctly
picks up the gender of the first object in the list, if that\'s the only
object in the list (so that an appropriate pronoun can be used to
reflect it). This is particularly helpful for languages where gendered
nouns are more common than in English.

------------------------------------------------------------------------

The message that generates the report \"You seen nothing special about
the whatever\" has been changed to reference the self object rather than
its theName property to ease translation into languages where the case
of a noun may be signficant.

------------------------------------------------------------------------

Three message ID names have been changed: [already plugged in
vagaue]{.code} is now [already plugged in vague]{.code} (thereby
correcting the obvious typo), and [cannot smell]{.code} used as the ID
name of an error message in the objSmellable Precondition is now [cannot
smell through]{.code} to avoid collision with the [cannot smell]{.code}
message ID used elsewhere; finally one instance of [game now
brief]{.code} (it was used twice) has been changed to (the more
obviously correct) [game now verbose]{.code}.

------------------------------------------------------------------------

There is now a new **tryImplicitActorAction()** function to allow an
implicit action to be attempted by an actor other than that of the main
action (typically an NPC performing an independent action).

------------------------------------------------------------------------

Some tweaks have been made to VerbRules involving TURN to improve the
response in certain cases (such as TURN ON with no object specified).

------------------------------------------------------------------------

A few library messages have been tweaked to fix missing full stops and
the like.

------------------------------------------------------------------------

The order of events in the travelVia() method of the actor class has
been tweaked to improve the order in which messages are displayed.

------------------------------------------------------------------------

Bug fixed whereby the setting of the various contentsListedInXXXX
properties was ignored.

------------------------------------------------------------------------

Bug fixed whereby a TopicEntry matching on a regular expression
wouldn\'t be matched if the same topic vocab would also match an object
in the game.

------------------------------------------------------------------------

Bug fixed whereby the **writeToStream(val)** method of OutputStream
didn\'t cater for the case where *val* was the Boolean value
[true]{.code}. This could cause run-time errors with embedded
expressions that called a function or method for its side-effects when
that function returned true. OutputStream.writeToStream(val) now treats
[true]{.code} the same way as [nil]{.code}; i.e. it outputs nothing in
either case (which is intended to cater for the embedded expression
situation).

------------------------------------------------------------------------

Bug fixed whereby a plural pronoun was not recognized as referring to a
plural interlocutor (e.g. in a command like ASK GUARDS ABOUT
THEMSELVES), in situations where a single Actor object is used to
represent multiple characters.

------------------------------------------------------------------------

Bug(s) (hopefully) fixed whereby implicit action reports were not always
shown when **tryImplicitAction()** was called in author code. Getting
implicit action reports to appear in the right place is proving to be
one of the trickiest areas of the library. This latest version employs a
new **ImplicitActionFilter** to do the job; this is an OutputFilter that
prepends any pending implicit action reports to whatever is output next
(and so can be use to display a implicit action report just before any
text output by the current main action).

------------------------------------------------------------------------

Bug fixed whereby items contained in remapXXX items weren\'t being
listed as part of the contents of the parent item.

------------------------------------------------------------------------

Bug fixed whereby responding to a prompt for the topic of an incomplete
conversational command (e.g. typing ASK BRIAN and then LIFE in response
to \"What do you want to ask him about?\") resulted in a run-time error
instead of processing the command.

------------------------------------------------------------------------

Bug fixed whereby no travel notifications were displayed when an NPC
carried out a travel action (e.g. in response to a player command), even
though the NPC was visible to the player character.

------------------------------------------------------------------------

Bug fixed whereby an NPC travelling according to some user-supplied
script might be blocked by a door the NPC ought to be able to open.

------------------------------------------------------------------------

\

## [Version 1.4 (12-Sept-2014)]{#v1.4}

**Minor Risk of Incompatibility**: The identifier **stop** is now
defined as a macro (for use with the Rules extension), so any methods,
properties, functions or other identifiers in game code called
[stop]{.code} will need to be changed to something else. In particular
this will effect the Airport sample game developed in the Tutorial. The
same applies to **nostop**, **rnull** and **nextrule**, which have also
been defined as macros, and to **null**, which is now an enum, though
these are less likely to have been used as identifiers in user code.

------------------------------------------------------------------------

The [nameDistinguisher]{.code} in parser.t has been altered so that it
now considers two object names to be \'equal\' not just if they are the
same, but if one is wholly contained within the other. The effect of
this is that when the parser wishes to disambiguate between two objects
with names one of which is a subset of the other, it will now resort to
using their disambigNames rather than displaying a message like \"Which
do you mean, the red ball or the ball?\" when use of the
[disambigName]{.code} might have avoided this. This may lead to a few
\'false positives\' (e.g. the name \'ant\' is contained in \'pants\',
which would now trigger use of the disambigName of both objects were
there a need to disambiguate between them), but since by default the
disambigName is the same as the name, and the need to disambiguate
between in cases of contained names like \'ant\' and \'pants\' will be
fairly rare, such \'false positives\' will seldom result in any
noticeable difference.

------------------------------------------------------------------------

The rules for scope and for matching objects in remote locations have
been tightened up, especially in relation to SenseRegions which do not
allow line of sight (i.e. for which [canSeeAcross = nil]{.code}).
Objects the player character does not yet know about in remote locations
are not added to scope, and objects in remote locations are excluded
from plural matches if there are also matches in the player character\'s
current location (which is more likely to be what the player intended to
refer to). For details, see the section on [Special Remote Scope
Considerations](senseregion.htm#specialscope) in the SenseRegion
chapter.

------------------------------------------------------------------------

Several new extensions have been added.
[Relations](../../extensions/docs/relations.htm) and
[Rules](../../extensions/docs/rules.htm) both provide functionality
similar to their Inform 7 equivalents.
[Sysrules](../../extensions/docs/sysrules.htm) (which needs the Rules
extension to work) defines a number of rulebooks and rules which can be
used to fine-tune certain aspects of the turn-cycle.

There is also a new [Collective](../../extensions/docs/collective.htm)
extension which can help manage the relations between a collective and
its individual items, for example a bunch of grapes from which a number
of individual grapes may be taken.

There is also a new [SceneTopic](../../extensions/docs/scenetopic.htm)
extension, based on work by Donald Smith, that allows the use of
ActorTopicEntries that are triggered by the beginning and ending of
particular scenes: **SceneEndTopic** and **SceneEndTopic**.

The new [Signals](../../extensions/docs/signals.htm) extension builds on
the new Relations extensions to provide a framework for objects to send
signals to other objects and handle them in user-defined ways.

The new [Command Help](../../extensions/docs/cmdhelp.htm) extension
provides an alternative response to an empty command. Instead of
executing a LOOK command, the extension will offer the player a short
menu of options asking what he or she wants to do. If the player
responds by selecting one of the options the extension will display a
list of suggested commands. On an HTML-capable interpreter these will be
hyperlinked so that a command can be selected by clicking on it.

------------------------------------------------------------------------

The Actor method **handleTopic()** can now take [nil]{.code} as its
third parameter. This means that nothing will be displayed, and nil
returned to the caller, if no matching topic is found (rather than the
display of a default message). The new SceneTopic extension takes
advantage of this, and the workings of [InitTopic]{.code} and some
greeting topics have also been changed to take advantage of it. This is
a change that mainly affects the internal workings of the library, but
might be relevant to game code that wants to call this method directly.

------------------------------------------------------------------------

Three new macros have been added to the library to assist with the
interpretation of commands: **gVerbWord**, **gVerbPhrase** and
**gCommandToks**. If the player entered the command PUT RED BALL ON
TABLE then [gVerbWord]{.code} would be \'put\' (i.e. the first word of
the command), [gVerbPhrase]{.code} would be \'put (dobj) on (iobj)\'
(i.e. the command entered by the player with (dobj) and (iobj) replacing
the words used to describe the direct and indirect objects) and
[gCommandToks]{.code} would be \[\'put\', \'red\', \'ball\', \'on\',
\'table\'\].

------------------------------------------------------------------------

The various **PushTravel** actions (such as PUSH TROLLEY EAST, PUSH
TROLLEY UP RAMP and PUSH TROLLEY THROUGH DOOR) are now able to
distinguish between pushing and pulling if desired. Previously PUSH
SOMETHING SOMEWHERE, PULL SOMETHING SOMEWHERE, DRAG SOMETHING SOMEWHERE
and MOVE SOMETHING SOMEWHERE were all treated as synonymous. This is
still the default behaviour, but there is now a **canPullTravel**
property that can be set separately from [canPushTravel]{.code}. By
default [canPullTravel]{.code} takes its value from
[canPushTravel]{.code}, but if one is set to true and the other to nil
it\'s possible to define an object that can be pulled from one place to
another but not pushed, or pushed from one place another put not pulled.
In addition, where appropriate the descriptions of PushTravel now
reflect whether the object was pushed or pulled.

------------------------------------------------------------------------

The **Noise** and **Odor** classes have been refactored, so that they
are now defined as belonging to the [SensoryEmanation]{.code} class in
the main library. This makes it possible to tidy up the way they are
enhanced in the sensory.t extension without having to replace classes
and duplicate existing definitions. No functionality should be affected.

------------------------------------------------------------------------

The [Sensory](../../extensions/docs/sensory.htm#simple) extension now
defines **SimpleNoise** and **SimpleOdor** classes for sounds and smells
associated with a location rather than with any particular object within
that location. These may be particularly helpful for defining
atmospheric sounds and smells. There is also a new SensoryEmanation
template that can be used with these classes.

------------------------------------------------------------------------

The **Doer** class now has a new **handleAction** property. This should
be set to true if the Doer\'s [execAction()]{.code} method handles the
complete action instead of either stopping it or replacing it with
another one. The effect is to ensure that the proper beforeAction
notifications are called.

------------------------------------------------------------------------

The [Wear]{.code} action now calls **makeWorn(gActor)** rather than
[makeWorn(true)]{.code}, while [makeWorn(stat)]{.code} now just sets
[wornBy]{.code} to *stat*. This ends up having the same effect as
before; it just does it more directly.

------------------------------------------------------------------------

The [NumberPhrase]{.code} class in parser.t has now been fully
implemented. This has allowed two new action classes to be added:
**NumericAction** and **NumericTAction** (see the manual section on
[Numeric Actions](literalact.htm#numeric) for details). The Footnote
action (in the [Footnote](..\..\extensions\docs\footnotes.htm)
extension) has accordingly been redefined as a [NumericAction]{.code}.

------------------------------------------------------------------------

The [suggestedTopicLister]{.code} now has a **hyperlinkSuggestions**
property. If this is set to true then (provided the player is using an
HTML-capable interpreter) the list of topic suggestions will be
hyperlinked, allowing players to select a suggested topic just by
clicking on the link. By default this property is nil unless the cmdhelp
extension is present.

------------------------------------------------------------------------

The Thing class now has a **sayFindHidden()** method to make it easier
to customize the message displayed when items are discovered hidden in
particular objects.

------------------------------------------------------------------------

There is now an **illogicalAlready()** macro. This doesn\'t do anything
different from [IllogicalNow()]{.code} in adv3Lite, but is supplied so
that game authors familiar with adv3 can use it without getting a
compilation error. It may also be slightly useful for documentary
purposes to clarify why a verify routine in game code is ruling out an
action.

------------------------------------------------------------------------

Extensions are now included in the manual index and in the Library
Reference Manual. It is made as clear as possible where material relates
to an extension rather than the main library.

------------------------------------------------------------------------

In the objtime extension, both [GoTo.timeTaken]{.code} and
[Continue.timeTaken]{.code} are now defined to be
[TravelAction.timeTaken]{.code}. This makes it possible to change the
time taken for all travel-related actions in one place (and in
particular, set to zero in one place if you want to use the
TravelConnector traversalTime mechanism instead).

------------------------------------------------------------------------

A few more message substitution parameters have been added to the
message system to deal with contracted versions of the verb \'to have\',
e.g. {\\\'ve} and {haven\\\'t}.

------------------------------------------------------------------------

Some changes have been made to the messages displayed when greetings
(including TALK TO X) are used but no suitable HelloTopics or
GoodbyeTopics are available to respond to them. Previously this would
result in the display of the **noResponseMsg** if a conversation was
being started or ended, or nothing at all if HELLO or TALK TO X was used
in the middle of a conversation (see report of bug fix immediately
below). In no case was this fully satisfactory. The library thus now
defines three new message properties to cater for these situations. If
HELLO or TALK TO is issued at the start of a conversation, then the
**noHelloResponseMsg** will be used in default of any available
HelpTopic. If HELLO or TALK TO is used while a conversation is already
in progress, then the **alreadyTalkingMsg** will be used. Finally, if
there\'s no ByeTopic to deal with a BYE command then the actor\'s
**noGoodbyeResponseMsg** will be used.

------------------------------------------------------------------------

The new Thing property **autoUnlock** (nil by default) can be used to
make the actor attempt to unlock a locked item (door or container)
before attempting to open it, provided unlocking is straightforwardly
possible (in other words it adds the [objUnlocked]{.code} Precondition
to the opening action).

------------------------------------------------------------------------

The new Thing method **abcName(action, role)** can be used in those rare
cases where you want to override the name the parser uses to describe an
object when announcing its best choice of object. For example, if you
have a bottle of wine from which you can fill a glass, you might prefer
\'(with wine from the bottle)\' to \'(with the bottle of wine)\'
following FILL GLASS.

------------------------------------------------------------------------

The order of events in the Actor **setState()** method has been changed
so that the [curState]{.code} property of the actor is set to the new
state before the new state\'s [activateState()]{.code} method is called
(instead of after, as previously). This removes a potential problem that
might otherwise occur if an activateState() method wants to change the
state of another actor, and the other actor needs to know what state the
first actor is in.

------------------------------------------------------------------------

The new Actor methods **curNodeIdx()**, **curNodeKey()** and
**curNodeObj()** can be used to test whether the actor is currently at a
Conversation Node, and, if so, what it is. If you simply want to test
whether there is an active ConvNode, test whether [curNodeIdx()]{.code}
returns a number (meaning there is one) or nil (meaning there isn\'t).
The [curNodeKey()]{.code} method returns the convKeys value associated
with the current ConvNode (if there is one) or nil otherwise, while the
[curNodeObj()]{.code} method returns the current ConvNode object, if
there is one.

------------------------------------------------------------------------

The new TravelConnector property **transmitsLight** can be used to
control whether or not a connector (typically a door) that leads to a
lit room is visible from a dark room. This can be used, for example, to
determine whether or not the player character can use a door from a dark
room to a lit one.

------------------------------------------------------------------------

The code for executing travel via TravelConnectors has been
substantially refactored. Most of the actual work is now done by the
execTravel() method of the room to which travel is taking place,
although this delegates certain appropriate tasks to the connector via
which travel is occurring (which may or may not be the same as the room
being travelled to). User code should not be affected, though internally
the implementation is now both simpler and more robust, not least in
avoiding duplicate travel notifications. The particular bug that
triggered this refactoring is listed [below](#locked-door-bug), but the
entire TravelConnector mechanism should now be easier to maintain.

------------------------------------------------------------------------

The new actor property **pcArrivalTurn** is used to note the turn on
which the player character arrived in the location of the actor. This in
turn is used by the new **pcJustArrived** property on both Actor and
ActorState which can be used, for example, to vary the specialDesc of an
Actor to reflect its reaction to the player character\'s arrival.

------------------------------------------------------------------------

In the English language library the **makeLit()**method of Thing now
checks whether the [LitUnlit]{.code} state needs to be added/subtracted
from the list of states on the object concerned.

------------------------------------------------------------------------

The working of the **noResponse** property of ActorState has been
improved so that its presence no longer blocks ATTACK, KISS and FEEL
actions.

------------------------------------------------------------------------

There is now an ActorState [template](actorstate.htm#template).

------------------------------------------------------------------------

The way the Examine action works has been slightly changed internally to
ensure that embedded strings in state descriptions are better handled.

------------------------------------------------------------------------

Bug fixed whereby greeting an actor when a conversation with that actor
was already in progress and there were no topics suggested resulted in
no response at all. This relates to the immediately preceding change.

------------------------------------------------------------------------

Bug fixed with the definition of VerbRule(QueryAbout) which could cause
it inappropriately to interpret commands like A WHY AM I HERE as ASK A
WHY I AM HERE when there\'s an object that matches A in its vocab (such
as \'Door A\').

------------------------------------------------------------------------

Bug fixed whereby a [takeObj]{.code} precondition on an immovable
indirect object wrongly reported that it was the direct object that
couldn\'t be taken. To fix this the various cannotTakeMsg properties
that referred to {the dobj} now refer to {the cobj} instead.

------------------------------------------------------------------------

Bug fixed whereby the response ALL to a disambiguation prompt was not
properly handled (it was effectively being ignored).

------------------------------------------------------------------------

Bug fixed whereby issuing a movement command on the turn following a
FollowAgendaItem being added to an actor\'s agenda might result in that
actor being left behind instead of moving with the player character.

------------------------------------------------------------------------

Bug fixed with **FollowAgendaItem** assuming that travel was always
successful: a FollowAgendaItem causes an actor to lead the player
character through a series of connectors, but previously it was not
checking whether the travel actually succeeded, leading to odd results
if progress was barred by a locked door or some other such obstacle.
This is now fixed, and the new FollowAgendaItem method
[travelBlocked(conn)](agenda.htm#followprops) allows game code to
respond to the blockage.

------------------------------------------------------------------------

Bug fixed whereby after travel notifications were being sent even if no
travel took place (e.g. in a failed attempt to go through a locked
door).

------------------------------------------------------------------------

Bug fixed whereby a space was lacking before \'then\' in an implicit
action report.

------------------------------------------------------------------------

Bug fixed whereby a topic inventory listing that followed giving a
command to an actor would say that that actor could say such and such,
instead of saying that the player character could do so.

------------------------------------------------------------------------

Bug fixed whereby \'were\' had been omitted as a possible way of
starting a command meant to trigger a query topic with qType = if or
whether (e.g. WERE YOU THINKING OF COMING TO THE BALL).

------------------------------------------------------------------------

Bug fixed in TopicGroup template (which wrongly referred to the
boostScore property instead of the scoreBoost property).

------------------------------------------------------------------------

Bug fixed with the way TopicGroups applied their score boosts to
SlaveTopics. The score boost mechanism has been reworked to make use of
a new [scoreBooster()]{.code} method on TopicEntry and TopicGroup; this
is for internal use only and should not affect user code.

------------------------------------------------------------------------

Bug fixed whereby the word \'the\' was trimmed from the beginning of an
object name created via the vocab property even when it was an
appropriate part of the name (e.g. \'the king\' or \'the Hague\').

------------------------------------------------------------------------

Bug fixed with [setPlayer()]{.code} that could cause messages using the
parameter substitution {I} to conjugate the verb in the wrong person
(e.g. \'you sees\') just after [setPlayer()]{.code} has been called.

------------------------------------------------------------------------

Bug fixed whereby ImplicitConversationActions were failing to set their
curTopic property (so that gTopic would be left at nil)

------------------------------------------------------------------------

Bug fixed with typo in [goInstead]{.code} macro.

------------------------------------------------------------------------

Bug fixed whereby it was not possible to use the debugging command
GONEAR with a decoration even when the game was compiled for debugging
(due to a typo in a compiler directive).

------------------------------------------------------------------------

[]{#locked-door-bug}

Bug fixed whereby a failed attempt to travel through a locked door
generated travel notifications as if the attempt had succeeded.

------------------------------------------------------------------------

\

## [Version 1.3 (11-July-2014)]{#v1.3}

**Minor Risk of Incompatibility**: In the Thing methods
**listContents(*lister*)** and **listSubcontentsOf(contList,
*lister*)**, the optional *lister* parameter is now a property pointer
(to a property holding a Lister object) instead of a Lister object. This
is to enable contents of contents to be listed using the appropriate
Lister for their immediate container, rather than using the same Lister
all the way down the containment chain. Most game code is likely to be
unaffected, since it isn\'t usually necessary to call these methods
directly, but if you do use either of the methods in your own game code
you will need to make the appropriate change. The new Thing property
**roomSubContentsLister** has been added to hold the
[lookContentsLister]{.code} so that this can be passed via a property
pointer (although this is mainly for the internal use of the library).

------------------------------------------------------------------------

**Minor Risk of Incompatibility**: Previously **DefaultAnyTopic** worked
a little inconsistently with regard to greetings, in that it would
respond to HELLO if no HlelpTopic was defined but not to BYE. The
DefaultAnyTopic class now has a **matchGreetings** property; if this is
true, then it will match HELLO and BYE; if it is nil (the default), then
it won\'t.

------------------------------------------------------------------------

The [SenseRegion]{.code} class now has an **autoGoTo** property. If this
is true, then an attempt to touch an object from a different room in the
same SenseRegion will trigger an implicit GoTo action attempting to move
the actor to the location of the object to be touched.

------------------------------------------------------------------------

The **fastGoTo** property can now be set on an individual Region as well
as globally on gameMain. Note that if [gameMain.fastGoTo]{.code} is
true, the setting of fastGoTo on individual regions will have no effect,
since fast GoTo (GoTo without stopping for CONTINUE commands) will then
be in effect globally. If [gameMain.fastGoTo]{.code} is nil, however,
setting it to true on an individual region will allow fast GoTo travel
within that Region.

------------------------------------------------------------------------

The [SenseRegion]{.code} class also has a new **contSpace** property. If
this is true (it\'s nil by default) then moving from one room to another
within the SenseRegion does not cause a LOOK AROUND to be performed (and
hence a description of the new room to be displayed). This may be useful
in situations where a SenseRegion is used to model a small continuous
space such a room in a house divided into subsections which are modelled
as the Rooms within the SenseRegion.

------------------------------------------------------------------------

The **Scene** class now has the new methods **beforeAction()** and
**afterAction()**, which work analogously to the similarly-named methods
on Rooms, Regions and objects in scope. The [beforeAction()]{.code} and
[afterAction()]{.code} method of every currently active Scene is called
just before and after an action is about to take place or has taken
place. The [beforeAction()]{.code} method can veto the proposed action
with the [exit]{.code} macro.

------------------------------------------------------------------------

The **MultiLoc** methods **moveInto(loc)**, **moveIntoAdd(loc)** and
**moveOutOf(loc)** now work if *loc* is a Region (as well as if it is a
Thing or Room); previously *loc* had to be a Thing or Room. If *loc* is
a Region then [moveIntoAdd(loc)]{.code} or [moveInto(loc)]{.code} adds
the MultiLoc to every room in the Region while [moveOutOf(loc)]{.code}
removes it from every room in the Region.

------------------------------------------------------------------------

The Action class now has a **preCond** property to allow PreConditions
to be specified for the action as a whole rather than for the action
applied to particular objects. It is principally intended for IActions
to allow PreConditions that apply to the actor, such as the new
**actorOutOfNested** PreCondition, which tries to take the actor out of
any nested room that it\'s in before carrying out the action. This is
now applied to the [Jump]{.code} action, so that a JUMP command will try
to take the actor out of any nested room (e.g. a bed or chair) that
it\'s in before attempting to Jump. If this behaviour is not wanted
(e.g. because while on a nested room such as a high ladder is the
solution to a puzzle) the new **getOutToJump** property can be set to
nil on the nested room object in question.

------------------------------------------------------------------------

The [ActorTopicEntry]{.code} class now has a new **listOrder** property
that gives some control over the order in which topic suggestions are
listed within each group (e.g. an AskTopic with a listOrder of 110 will
be listed after an AskTopic with a listOrder of 100). It is also now
possible in principle to alter the order of the groups of topic
suggestions (ask, tell, show etc.) by overriding the [typeInfo]{.code}
property of [suggestedTopicLister]{.code} to list things in a different
order.

------------------------------------------------------------------------

There are now three additional extensions, two of which have been
\"borrowed\" from their adv3 equivalents:
[footnotes](../../extensions/docs/footnotes.htm),
[subtime](../../extensions/docs/subtime.htm) (subjective time) and
[objtime](../../extensions/docs/objtime.htm) (objective time).

------------------------------------------------------------------------

The advLite.h header file now includes the date.h header, to facilitate
using the Date intrinsic class in game code (and in two of the
extensions just noted above).

------------------------------------------------------------------------

The **Command** class now sets provisional values for **gDobj** and
**gIobj** (if [dobj]{.code} and [iobj]{.code} are defined for the
current Command) just before searching for matching Doers; this avoids
problems that might otherwise occur if game authors reference
[gDobj]{.code} and/or [gIobj]{.code} in conditions (such as
[when]{.code}) applied to particular Doers.

------------------------------------------------------------------------

The library now sets the value of the [which]{.code} parameter when
calling the **StringPreParser** [doParsing(str, which)]{.code} method.
If the game is requesting disambiguation, [which]{.code} is set to
[rmcDisambig]{.code}; if the parser is asking for a missing noun,
[which]{.code} is set to [rmcAskObject]{.code}; otherwise [which]{.code}
is set to [rmcCommand]{.code} (rmcDisambing, rmcAskObject and rmcCommand
are enums).

------------------------------------------------------------------------

The previous change to the [checkDisplay()]{.code} method caused one
problem while solving another; in particular the new version of
[checkDisplay()]{.code} is no longer able to prevent a LISTEN or SMELL
command sometimes giving an empty response when [listenDesc]{.code} or
[smellDesc]{.code} don\'t actually display anything. To solve this
problem without reintroducing the problem afflicted embedded expressions
in [listenDesc]{.code} and [smellDesc]{.code}, a new Thing method
[displayAlt()]{.code} has been added to the library and the handling of
LISTEN and SMELL actions refactored to make use of it. This works by
avoiding the need to predict whether [listenDesc]{.code} and
[smellDesc]{.code} will produce any output and instead checking to see
if they have. This is largely a purely internal change to the library
that should not effect game code except by making [listenDesc]{.code}
and [smellDesc]{.code} work more reliably.

------------------------------------------------------------------------

Bug fixed that failed to reset the current actor to the player character
early enough in the parsing routine after giving an order to an NPC on
the previous turn, which could lead to trying to build the scope list
for the wrong actor (possibly causing a run-time error if the NPC just
commanded had meanwhile been moved into nil).

------------------------------------------------------------------------

Bug fixed that gave an inappropriate response to trying to give an order
to an **Unthing**. Attempting to give an order to an [Unthing]{.code}
now causes its [notHereMsg]{.code} to be displayed, which is consistent
with the way an Unthing responds to any other commands.

------------------------------------------------------------------------

Bug fixed with the **setKnown()** method of Thing and Topic; previously,
calling this method would cause a run-time error due to a typo in its
definition.

------------------------------------------------------------------------

Small bug fixed with the wrong kind of bracket terminating a message
parameter in the \'no room\' DMsg.

------------------------------------------------------------------------

Bug fixed with **setPlayer()** function, which now sets [gActor]{.code}
to the new player character to ensure that an action like looking around
immediately after changing the player character now works as expected.

------------------------------------------------------------------------

Bug fix whereby all the objects of a command were being resolved again
when the parser asked the player to supply one missing object (for
example, in a TIAction). In certain odd cases, such as when one object
(the direct object, say) has already been established via a
disambiguation prompt, this could cause the parser to re-resolved the
previously resolved object (the direct object, say) to another,
erroneous object when the player supplied another missing object (the
indirect object) say. For example:

::: cmdline
     >UNLOCK DOOR
     Which door do you mean, the red door or the blue door?
     
     >BLUE
     What do you want to unlock it with?
     
     >KEY
     You unlock the red door with the key.
     
:::

The code that asks the player to supply a missing object now prevents
the parser from re-resolving existing objects so that this sort of thing
should no longer occur.

------------------------------------------------------------------------

A number of bugs fixed relating to the listing of suggested topics: Yes
topics and No Topics are now separated correctly into different lists,
and ShowTopics and CommandTopics should now be listed when they\'re
meant to be suggested (they weren\'t before).

------------------------------------------------------------------------

\

## [Version 1.2 (17-May-2014)]{#v1.2}

**Risk of Incompatibility**: The code for the **inputManager** object
was largely copied from the adv3 library, but this included provisions
for handling real-time processing, which adv3Lite doesn\'t have. This in
turn resulted in several methods of [inputManager]{.code} taking a
wholly redundant [allowRealTime]{.code} argument. This argument has now
been removed from all the affected methods. Since the arguments to these
methods were optional, some code may not be affected by the change, but
any code that calls these methods with the arguments supplied will need
to change them to match the new argument signature:

-   [getInputLine(allowRealTime?, promptFunc?)]{.code} becomes
    [getInputLine(promptFunc?)]{.code}.
-   [getEvent(allowRealTime?, promptFunc?)]{.code} becomes
    [getEvent(promptFunc?)]{.code}.
-   [getKey(allowRealTime?, promptFunc?)]{.code} becomes
    [getKey(promptFunc?)]{.code}.
-   [getEventOrKey(allowRealTime, promptFunc, keyOnly)]{.code} becomes
    [getEventOrKey(promptFunc, keyOnly)]{.code}.

The [promptFunc]{.code} parameter can now be supplied as a single-quoted
string instead of a function pointer (previously it could only be a
function pointer; now it can be either).

The inputManager method processRealTimeEvents() has been removed (it
didn\'t do anything and wasn\'t used anyway).

The library now defines a number of macros that can be used as
abbreviations for inputManager methods:

-   #define **more** [inputManager.pauseForMore()]{.code}
-   #define **input(x)** [inputManager.getInputLine(x)]{.code}
-   #define **waitKey(x)** [inputManager.getKey(x)]{.code}

\

------------------------------------------------------------------------

**Risk of Incompatibility**: the way the ATTACK and KISS commands are
handled has been slightly altered, mainly to remove an inconsistency
that had crept into the library. Previously ATTACK could be ruled on
Thing by setting **isAttackable** to nil, but on Actor by setting
**allowAttack** to nil; likewise KISS previously used **isKissable** and
**allowKiss**. The properties **allowAttack** and **allowKiss** have now
been abolished, so that Actor uses the same **isAttackable** and
**isKissable** properties as Thing. Moreover, in the interests of
consistency, the **shouldNotAttackMsg** property of Actor has been
renamed **attackResponseMsg**.

At the same time two new properties have been introduced on Thing:
**checkAttackMsg** and **checkKissMsg**. These provide an easy way to
stop ATTACK or KISS at the check stage. By default they are both nil,
but if they are defined (typically as a single-quoted string, though a
double-quoted string or a method that displays some text should also
work) then the message they define is displayed at the check stage,
causing the action to halt there.

Thing also now defines a **kissRank** property. This is basically to
allow the verify routine for KISS to give a higher logical rank to an
Actor than to a Thing without having to override Thing\'s verify routine
on Actor. It could also be used in game code if there are certain Actors
the PC is more likely to want to kiss than others; these more
kiss-desirable Actors could be given a higher [kissRank]{.code}, making
the parser more likely to choose them in case of ambiguity.

The rationale for the slightly special treatment of ATTACK and KISS is
that they are forms of interpersonal interaction that may require more
nuanced treatment than most typical IF actions, even though they are not
exactly conversational. The same would seem to apply to TOUCH, so this
is now handled in an analogous fashion, and a new **TouchTopic** class
has been added to allow the handling of TOUCH commands in a similar
manner to [HitTopic]{.code} and [KissTopic]{.code} for ATTACK and KISS.
There is likewise a corresponding new checkFeelMsg property on Thing
(and hence on Actor) and a new **touchResponseMsg** property on Actor,
both of which work in the same way as [checkAttackMsg]{.code} and
[attackResponseMsg]{.code}.

To help cover possible confusion between HIT and ATTACK and between
TOUCH and FEEL the library now defines seven macros which convert:

-   [checkTouchMsg]{.code} into [checkFeelMsg]{.code}
-   [feelResponseMsg]{.code} into [touchResponseMsg]{.code}
-   [isTouchable]{.code} into [isFeelable]{.code}
-   [cannotTouchMsg]{.code} into [cannotFeelMsg]{.code}
-   [touchDesc]{.code} into [feelDesc]{.code}
-   [checkHitMsg]{.code} into [checkAttackMsg]{.code}
-   [hitResponseMsg]{.code} [attackResponseMsg]{.code}

For the full story see the section on [Attacking, Touching and
Kissing](actorobj.htm#hitkiss) in the chapter on the Actor object.

------------------------------------------------------------------------

The library now defines the macro **gTurns**, which expands to
[libGlobal.totalTurns]{.code}, as a convenient abbreviation for getting
at the current turn count.

------------------------------------------------------------------------

Various changes have been made to improve the way the GO TO command
works in some less common cases. A new [ProxyDest](pathfind.htm#proxy)
class has been defined to prevent the parser perversely choosing an
Enterable or Distant object as the target of a GO TO command when, for
instance, the player is already at the destination specified, and the
handling of the GoTo action on the [Distant](pathfind.htm#distant) class
has been altered so that an attempt to GO TO a Distant object can be
interpreted as a request to go to the location specified in the Distant
object\'s **destination** property.

The [familiar](pathfind.htm#senseregion) property of **SenseRegion** has
been changed so that it now becomes true once the player character has
visited any room in the SenseRegion. This allows the player character to
navigate to other objects in the SenseRegion using the GO TO command
even without having previously visited their locations; this models the
fact that the PC can presumably see how to get there since there\'s a
line-of-sight connection between all the rooms in the SenseRegion.

The [gameMain]{.code} object has a new property **fastGoTo**; if this is
true then the GO TO X command will carry on moving the player character
either until s/he reaches the destination or until some obstacle
prevents it. This allows players to go straight to the desired
destination without needing to use the CONTINUE command (unless
something blocks their journey). The default value of [fastGoTo]{.code}
is nil, so that by default the behaviour of the GO TO command remains as
before.

------------------------------------------------------------------------

The TopicEntry class now as a **topicMatched** property which is set to
the topic being tested for a match by the [matchTopic()]{.code} method.
This is intended for use by the [topicResponse()]{.code} method which
can then access the Topic that was actually matched.

------------------------------------------------------------------------

A BMSg(), DMsg() or Msg() can now be defined with an anonymous function
that returns a single-quoted string as its second parameter, as well as
just with a single-quoted string. This is primarily to allow
CustomMessages objects to define messages with variable text in embedded
expressions.

------------------------------------------------------------------------

The [StairwayDown]{.code} class now has its own [cannotClimbMsg]{.code}
to give a more appropriate response to CLIMB STAIRS or CLIMB UP STAIRS
when the stairs lead down.

------------------------------------------------------------------------

The **purloin** action now works on an item even it if is hidden. To
achieve this the [Action]{.code} class now has a new **unhides**
property which, if true, allows the action to proceed even on an item
for which [isHidden]{.code} is true. Additionally, the PURLOIN action
sets isHidden to nil on anything it takes (otherwise the player
character would still not be able to interact with it).

------------------------------------------------------------------------

Some errors in the Quick Start Guide have been corrected and some brief
guidance added to the adv3Lite Bookshelf page to help users find the
best piece of documentation to start with.

------------------------------------------------------------------------

Commands of the form TELL X TO Y, which are translated into X, Y (i.e.
telling the NPC X to carry out the command Y) before being executed now
use the name property of X rather than the theName property of X to form
the translated command. This is both less accident-prone and less
language-dependent. In particular it avoids the problem that could occur
if X is an object that has been defined with a theName property that
uses the indefinite article, since if TELL X TO Y is translated into A
X, Y the parser will interpret the translated command as implicitly
asking about X and Y, and then complain about an illegal use of multiple
objects.

------------------------------------------------------------------------

Previously the library was a bit over-zealous in suppressing the display
of zero-length strings that might result from SMELL or LISTEN commands;
the test applied to achieve this meant that embedded expressions (such
as \<\<one of\>\>\... constructions) in properties like
[smellDesc]{.code} and [listenDesc]{.code} would not work as expected.
The library now applies a less stringent test, which appears to have no
adverse effects, and which allows embedded expressions to work with such
properties as game authors would expect.

------------------------------------------------------------------------

Bug fixed which could a run-time error when moving into a SenseRegion
within or from a DynamicRegion.

------------------------------------------------------------------------

Bug fixed which could cause inappropriate recursive listing (attempted
listing of contents of contents) when using a user-defined
openingContentsLister.

------------------------------------------------------------------------

Bug fixed which would case an invalid command directed to the current
interlocutor to be misinterpreted as two implicit SAY commands (e.g.
BOB, FLY would be misinterpreted as SAY BOB followed by SAY FLY). Now no
command containing a comma will be treated as potential implicit SAY
command.

------------------------------------------------------------------------

Bug fixed whereby ending a command with a comma (e.g. Z,Z,) would cause
a spurious \"You can\'t use multiple objects with that command\"
response. If the last token in a command string is a punctuation mark,
it is now removed from the list of tokens before the command is
processed.

------------------------------------------------------------------------

\

## [Version 1.1 (04-Apr-2014)]{#v1.1}

**Slight risk of Incompatibility**: Previously, when the contents of a
room were listed in response to a LOOK command (or when entering a new
room), all its visible contents were listed as having been seen by the
player character *except* for the contents of actors (which might be
their body parts but would more usually be their inventory), on the
basis that these contents were not explicitly listed. This could lead to
counter-intuitive results, however, since in most cases the
contents/inventory of actors (including the player character) would be
in plain sight, and therefore game authors would probably expect them to
have been seen by the player character. This new behaviour can however
be changed by setting the new Thing property **markInventoryAsSeen** to
nil (the default value is true).

------------------------------------------------------------------------

**Slight risk of Incompatibility**: There has been a slight change to
the timing of **Scenes** to make it easier to define a Scene that starts
when the game starts. The scene manager now first executes just after
the initial display of the starting location, rather than at the Init
stage (before anything is displayed). This means that the
[whenStarting()]{.code} method of a [Scene]{.code} whose
[startsWhen]{.code} condition is simply [true]{.code} no longer needs to
use a [OneTimePromptDaemon]{.code} to display text; it can simply
display the text using a double-quoted string.

------------------------------------------------------------------------

Examining an object now marks it as having been seen by the player
character (provided the actor is the player character). In 99 cases out
of a 100 this probably isn\'t necessary, but it may help to catch the
odd case where an object is examined without having previously been
marked as seen, since once the player character has examined an object,
s/he has certainly seen it.

------------------------------------------------------------------------

The **canSee(a, b)** methods of [QDefaults]{.code} and
[QSenseRegion]{.code} now return nil if b.isHidden is true (reflecting
the fact that if b is explicitly hidden, a shouldn\'t be able to see
it).

------------------------------------------------------------------------

The **discover()** method of Thing now marks the object as seen by the
player character if the player character can see it when its
[discover()]{.code} method is called.

------------------------------------------------------------------------

The `#charset us-ascii` directive has been added to a number of source
files from which it was previously missing. This corrects a problem some
users may experience when compiling adv3Lite code with non-Western
versions of Windows.

------------------------------------------------------------------------

The Thing class now has new method **reachBlockedMsg(target)** that can
be used to define the message that\'s displayed when the Thing in
question (which would typically be a closed transparent container) is
blocking reach (touch) access to *target* (typically an object that\'s
inside a closed transparent container). Previously this message was
defined on the ReachProblemBlocker class, which made it awkward to
customize the message for particular blocking objects; the
ReachProblemBlocker class now delegates the message to the object
that\'s blocking access. For further explanations of this and the next
two changes see the [Querying the World Model](query.htm#touchobj)
section of this manual.

------------------------------------------------------------------------

For similar reasons Thing now has a **tooFarAwayMsg** method that\'s
called by a ReachProblemDistance object when the Thing in question is
too far away (generally because it\'s in a remote Room). Like
reachedBlockedMsg() this would normally be triggered (ultimately) from
the touchObj PreCondition via the QDefaults object. Again the purpose is
to make it easier to customize this message on a per object basis if
desired. Alternatively you may prefer to customize this message on a per
Room basis, in which case you can use the new Room method
**cannotReachTargetMsg(target)** where *target* is the object the actor
is trying to reach from the room the method is called on. (The default
behaviour is to return the target\'s tooFarAwayMsg, so overriding
cannotReachTargetMsg() will normally suppress the target\'s
tooFarAwayMsg).

------------------------------------------------------------------------

Completing this related trio of changes, Thing now also has a
**cannotReachOutMsg(target)** method that returns a single quoted string
explaining why the actor cannot reach *target* from within the Thing in
question when reaching out is disallowed (for example when the player
character is on a chair and the chair has defined both
[allowReachOut(obj)]{.code} and [autoGetOutToReach]{.code} as nil).

------------------------------------------------------------------------

The SEARCH command now works a little differently on the Surface class.
It attempts to report both what is on the Surface and what is hidden in
the Surface (i.e. in its hiddenIn list). If there is nothing listable
either in or on the Surface it reports \"You find nothing of interest on
the X\" rather than \"You find nothing of interest in the X\" as
previously.

------------------------------------------------------------------------

It probably doesn\'t make sense for a SEARCH command to look behind a
RearContainer or under an Underside, since this is arguably doing too
much for the player, but the grammar for LookBehind and LookUnder now
accepts SEARCH BEHIND X and SEARCH UNDER X as equivalent to LOOK BEHIND
X and LOOK UNDER X respectively, since these seem reasonable phrasings.

------------------------------------------------------------------------

The library now defines two additional [utility functions](utility.htm)
**tryInt(val)** and **tryNum(val)**. The first of these tries to
interpret *val* as an integer and returns an integer result if it can
and nil otherwise; the second is similar but may return a BigNumber if
*val* is a valid number but can\'t be fitted into the integer type. Both
these functions will always return nil if val is neither a number nor a
string that can be converted into a number (such as \'2\' or \'3.4\' or
\'-10\'). The main difference between these functions and the intrinsic
functions toInteger() and toNumber() is that toInteger() and toNumber()
return 0 (instead of nil) from an unsuccessful conversion (and 1 for a
val of true), making it unclear if the function was passed a valid
numerical value of zero or some invalid input like \'foobar\'.

------------------------------------------------------------------------

The [checkDirection()]{.code} method of the Doer class now sets the
current command\'s [action.direction]{.code} to the value of the current
command\'s [verbProd.dirMatch.dir]{.code} in case game authors attempt
to use the former instead of the latter to get at the direction entered
in a player\'s command. Note, however, that this is not guaranteed to be
totally failsafe; game authors are advised to use the current command\'s
[verbProd.dirMatch.dir]{.code} property chain to get at the direction
associated with a command, and to first ensure that
[verbProd.dirMatch]{.code} is not nil to avoid a run-time error.

------------------------------------------------------------------------

When a game has been compiled for debugging, it now attempts to check
for obvious errors in vocab strings and issues warnings for any it finds
at the start of the game.

------------------------------------------------------------------------

It is now slightly easier to customise [implicit action](implicit.htm)
reports (using a CustomMessages object) or to suppress them altogether
for all actions or specific actions.

------------------------------------------------------------------------

A Doer with a command string of \'foo bar\' will now match when the FOO
action is applied to an object whose lexicalParent is [bar]{.code} (as
well as [bar]{.code} itself). This makes it easier to get a Doer to
match a command to a multiple-containment object where a command like
OPEN WASHING MACHINE might be redirected to the remapIn SubComponent of
the object specified (such as the washing machine). This is likely to be
what game authors will expect to happen; as things stood before a Doer
with a command string of \'open washingMachine\' would not have matched
the command OPEN WASHING MACHINE when the washing machine had a remapIn
SubComponent, a failure that many game authors are likely to have found
potentially puzzling (and one it would have been a little cumbersome to
program around). The new behaviour should be both rather more intuitive
and rather easier to work with.

------------------------------------------------------------------------

The **Region** class has acquired two new methods:
**regionBeforeTravel(traveler, connector)** and
**regionAfterTravel(travel, connector)**. The former of these is called
when a traveler in the region is about to travel via connector; the
latter when a traveler in the region has just traveled via connector.
Note that these travel notifications are called after those on rooms and
other objects in scope.

------------------------------------------------------------------------

There is now a [DynamicRegion](../../extensions/docs/dynregion.htm)
extension that allows game code to define Regions that can expand or
contract over the course of a game (ordinary Regions can\'t do this).

------------------------------------------------------------------------

There is now more control over what listers are used to list the
contents of objects in response to player commands. The new Thing
property **myOpeningContentsLister** determines which lister is to be
used to list the contents of a container when it is opened (the default
value is [openingContentsLister]{.code}). The new Thing properties
**myLookInLister**, **myLookUnderLister** and **myLookBehindLister**
allow you to define which listers are to be used to list what is inside,
under or behind an object in response to LOOK IN, LOOK UNDER and LOOK
BEHIND commands; all three of these properties default to
[lookInLister]{.code}. The new properties **myInventoryLister** and
**myWornLister** can similarly be used to define which listers are used
to list what an actor is carrying or wearing in response to an INVENTORY
command.

------------------------------------------------------------------------

The library now implements **BRIEF** and **VERBOSE** commands. The
current setting is controlled by the new [gameMain]{.code} property
**verbose**, which is true by default.

------------------------------------------------------------------------

The English-specific file english.t now contains a new
**decimalPreParser** that traps numbers entered with a decimal point
(e.g. 2.4) in the player\'s input and wraps them in double-quotes to
prevent the decimal point from being interpreted as a sentence-ending
full stop (such that TURN DIAL TO 2.4 would previously have been parsed
as the command TURN DIAL TO 2 followed by the meaningless command 4).

------------------------------------------------------------------------

The [NumberedDial]{.code} class now has a new property **allowDecimal**.
By default this is nil, but if it is true then the dial can be
turned/set to numbers that include a decimal point. If it is nil only
integer numbers will be accepted as valid settings for the dial.

------------------------------------------------------------------------

The new function **spelledToInt(val)** in english.t converts a string
containing a spelled-out number (e.g. \'forty-three\') into an integer
value (e.g. 43), or returns nil if the conversion is not possible.

------------------------------------------------------------------------

The **NumberedDial** class now allows the player to used spelt-out
numbers as well as digits in commands; e.g. TURN DIAL TO FORTY-THREE is
treated as equivalent to TURN DIAL TO 43.

------------------------------------------------------------------------

A number of bugs have been fixed with the [spelledXXXNumber]{.code}
grammar productions which caused run-time errors when trying to use them
to convert a spelt-out number into its integer equivalent.

------------------------------------------------------------------------

Bug fixed that allowed the player to enter multiple objects even when a
VerbRule restricted a particular slot to a single object (thereby
allowing commands like SIT ON RED CHAIR AND BED or PUT BALL IN BOX AND
BASKET).

------------------------------------------------------------------------

Bug fixed that could cause a run-time error in objects of the Floor
class at game start-up under certain conditions (such as if a Component
is part of the floor).

------------------------------------------------------------------------

Bug fixed whereby the name of a SubComponent might not completely match
that of its lexicalParent, for example when the latter is proper or
qualified, such as \'Locker A\'.

------------------------------------------------------------------------

Big fixed with the definition of the **directlyWorn** property of Thing.

------------------------------------------------------------------------

Bug fixed whereby the parser interpreted commands such a LOOK UP X IN Y
as LOOK UP \"X IN Y\" rather than LOOK UP \"X\" IN Y (e.g. LOOK UP
TRAINS IN BOOK would be interpreted as a command to look up a \"trains
in book\" topic). This occurred when no X (e.g. \"trains in book\")
topic object was defined in the game for the parser to match. Hopefully
the parser will now interpret such commands more intelligently.

------------------------------------------------------------------------

Bug fixed with the **SingletonInterator** class that prevented foreach
from iterating properly over a singleton [Object](utility.htm#object).

------------------------------------------------------------------------

Bug fixed that caused incorrect \"no response\" messages with commands
like FRED, GIVE THE BOOK or FRED, TELL ME ABOUT THE BOOK.

------------------------------------------------------------------------

Bug fixed that caused command strings stored for use with AGAIN or UNDO
to store words ending in apostrophe-S as two words (so that, for
example, BOB\'S would be stored as BOB \'S).

------------------------------------------------------------------------

Bug fixed that caused the exit and exitAction macros to be treated the
same way, so that [exitAction]{.code} caused an action to be considered
a failure (thereby bypassing the [afterAction]{.code} handling). Now
only [exit]{.code} does this, while [exitAction]{.code} stops the action
but allows the [afterAction]{.code} handling to go ahead.

------------------------------------------------------------------------

Bug fixed with the (mis)definition of the [isDirectlyHeldBy()]{.code}
method of Thing.

------------------------------------------------------------------------

Bug fixed with the **setSeen()** method of Thing causing a run-time
error.

------------------------------------------------------------------------

Bug fixed with the VerbRule for the ATTACH command (when no indirect
object was specified) that would cause a run-time error when issuing a
command like ATTACH WIDGET and then responding to the question \"What do
you want to attach it to?\". ATTACH WIDGET now correctly rules out the
action if the widget is not attachable, or else responds correctly to
the answer to \"What do you want to attach it to?\"

------------------------------------------------------------------------

Bug fixed (or at least alleviated) that prematurely triggered the
activation of topics keyed from another topic when deciding whether the
keying topic should itself be listed as a suggestion. The premature
triggering no longer occurs, but the keying topic may now be sometimes
be suggested when there is in fact nothing for it to key.

------------------------------------------------------------------------

Bug fixed that could cause a run-time error in the
[checkPreCondition()]{.code} method of the **actorInStagingLocation**
PreCondition.

------------------------------------------------------------------------

Bug fixed whereby the message describing an actor following the player
character could occasionally state that the actor was following someone
else instead, for example if an order had just been given to someone
else.

------------------------------------------------------------------------

The missing full stop (period) has been added to the message \"Done\"
used as the laconic response to a CLOSE command.

------------------------------------------------------------------------

\

## [Version 1.0 (30 Nov 2013)]{#v1.0}

The specialDesc method of the actor class now has an additional check
for an active FollowAgendaItem to avoid an unnecessary lag between the
turn on which a FollowAgendaItem becomes ready and the turn on which its
specialDesc is first used.

------------------------------------------------------------------------

When a game is compiled for debugging, the library now automatically
checks that the use of the canSitOnMe, canStandOnMe and canLieOn me
properties is consistent with the values of isBoardable and contType on
the same object, and issues a warning if it is not.

------------------------------------------------------------------------

DefaultAnyTopic now traps attempts to give orders to NPCs (e.g. BOB,
JUMP) along with other conversational commands.

------------------------------------------------------------------------

The grammar for TellAboutImplicit has been changed so that it will now
accept T TOPIC or or TELL TOPIC or TELL ABOUT TOPIC or T ABOUT TOPIC.

------------------------------------------------------------------------

The Settable class is now defined as a Thing with isFixed = true rather
than a Fixture. This (a) makes it consistent with the other gadget
classes and (b) makes it possible to use gadget.t without extras.t.

------------------------------------------------------------------------

A number of minor errors and typos in the documentation have been
corrected.

------------------------------------------------------------------------

Bug fixed whereby the debugging TEST command wouldn\'t move the player
character to a new location even if the test required it.

------------------------------------------------------------------------

Bug fixed which cause the output from DEBUG DOERS to display incorrectly
for Doers whose cmd string property included a vertical bar (\|).

------------------------------------------------------------------------

Bug fixed whereby a plural annotation like {-ren} or {mice} at the end
of the name section of a vocab string would be included in the name
property.

------------------------------------------------------------------------

Bugs fixed whereby entering the debugging commands GONEAR or EVAL by
themselves (without any objects) would cause a run-time error.

------------------------------------------------------------------------

Bugs fixed which prevented the DEBUG MESSAGES command from working
properly.

------------------------------------------------------------------------

Bug fixed whereby a command of the form ACTOR, GOODBYE would bypass the
check whether ending the conversation is permissible (so that, for
example, a NodeEndCheck would be ignored).

------------------------------------------------------------------------

Bug fixed whereby a Doer might not be matched if an alternative phrasing
of a command listed the objects involved in a non-standard order (such
as the indirect object before the direct object). For example a Doer
with a command string of \'give Thing to Actor\' matched GIVE FORK TO
MAX but not GIVE MAX THE FORK.

------------------------------------------------------------------------

Bug fixed in which the TEST debugging command was omitting the PreParser
phase of command interpretation, which could lead to errors in executing
commands (such as EVAL) that rely on preparsing before execution.

------------------------------------------------------------------------

\

## [Version 0.92 (24 Aug 2013)]{#v0.92}

**Risk of incompatibility:** Objects that are lockable (i.e. with a
lockability other than notLockable) now start out locked by default.
This is probably the more natural assumption since most game authors
defining lockable objects generally want them to start out locked, and
it can be all too easy to forget to explicitly make them locked. Game
code that already defines [isLocked = true]{.code} on such objects will
not be affected, but if you have any lockable objects that you want to
start out unlocked you\'ll need to define [isLocked = nil]{.code} on
them (as is the case for the subclasses of Door defined for the plane in
the [Airport](../tutorial/doors.htm#planedoors) game example in the
Tutorial).

------------------------------------------------------------------------

**Risk of incompatibility:** The **sayFollowing()** method of Actor and
ActorState, along with **actorSayFollowing()**, now takes two arguments
instead of one: [sayFollowing(oldLoc, conn)]{.code} where conn is the
TravelConnector just traversed.

------------------------------------------------------------------------

The three new Thing methods **describePushTravel(via)**,
**beforeMovePushable(connector, dir)** and **describeMovePushable
(connector, dest)** make it easier to customize the message that\'s
displayed to describe [push-travel](Thing.htm#pushing). The first of
these is called on the direct object (the object pushed) when
push-travel is via another object (up the stairs or through the door)
for example, and is displayed just before the move; *via* is the
preposition (e.g. Through, Up) relevant to the travel. The second,
[beforeMovePushable(connector, dir)]{.code}, is called on the direct
object in response to push-travelling in a particular direction (e.g.
PUSH TROLLEY EAST), and again displays a message just before the move.
Here *connector* is the TravelConnector being pushed through and *dir*
(e.g. northDir) is the direction the object is being pushed in. The
third of these methods, [describeMovePushable(connector, dest)]{.code}
is called on the direct object after the actor arrives in the new room
to describe the arrival of the object in its new location (dest) after
being pushed via connector.

------------------------------------------------------------------------

The new Thing properties **objIntoPrep** and **objIntoName** can be used
to defined the preposition and prepositional phrase used to describe
motion into an object (e.g. \'onto\' and \'onto the lawn\'). By default
[objIntoName]{.code} uses [objIntoPrep]{.code} and [theName]{.code} to
construct the appropriate phrase. This was introduced to help push
travel messages read more naturally (\'You push the trolley onto the
lawn\' rather than \'You push the trolley into the lawn\') but may have
other uses.

------------------------------------------------------------------------

The two new [Thing](thing.htm#containmentprops) properties
**dropItemsBehind** and **dropItemsUnder** (both true by default)
control what happens to items behind or under an object when that object
is moved. The previous behaviour was inconsistent, in that objects
hidden behind or under something would be left behind, while objects
otherwise located behind or under (in an Underside or RearContainer)
would move with the item being moved. Now if [dropItemsBehind]{.code}
and/or [dropItemsUnder]{.code} is true, all such objects notionally
behind and/or under are left behind, while if [dropItemsBehind]{.code}
and/or [dropItemsUnder]{.code} are nil, items notionally behind and/or
under the item being moved are moved with it.

------------------------------------------------------------------------

There is now a new [BagOfHolding](gadget.htm#bag) mix-in class which can
be used to define objects into which items in the player character\'s
inventory will automatically be moved if his/her hands become too full
to take anything else.

------------------------------------------------------------------------

The new [ContainerDoor](extra.htm#containerdoor) class can be used to
represent the door of a container defined on the remapIn property of a
multiply-containing object.

------------------------------------------------------------------------

Some improvements have been made to the listing of contents of items in
[remote locations](senseregion.htm#remoteprops), and in particular a
**remoteObjInName(pov)** method has been added to Thing (so that the
listing of things in a remote object can be introduced with something
like \'In the bucket at the far end of the room are\...\' instead of
just \'In the bucket are\...\').

------------------------------------------------------------------------

The definition of Actor.actorRemoteSpecialDesc() has been changed so
that it now more clearly reports that the actor is in a remote location.

------------------------------------------------------------------------

There is now a new **stagingLocation** property on Thing and a new
**actorInStagingLocation** PreCondition. Previously when an actor was in
one nested room and entered another, s/he would be effectively
teleported from one to the other, thereby passing any restrictions there
might be on leaving the current nested room or entering the new one. Now
the actor must be in the nested room\'s stagingLocation (typically its
location) in order to enter it, and the appropriate GetOut/GetOff/Board
and/or Enter actions will be implicitly peformed to bring the actor
there.

------------------------------------------------------------------------

Three new [ActorTopicEntry](actortopicentry.htm#types) classes have been
added: **AltTopic**, **AskTellShowTopic** and **AskTellGiveShowTopic**.
Of these the most significant is
[AltTopic](actortopicentry.htm#alttopic), which makes it easier to
define alternative responses to conversational commands (just like its
adv3 equivalent).

------------------------------------------------------------------------

A **noResponse** property has been added to
[ActorState](actorstate.htm#peculiar). If this is defined it makes the
ActorState behave just like an adv3 HermitActorState, i.e. the
noResponse is displayed in response to any and all conversational
commands (and no attempt is made to find a matching ActorTopicEntry).

------------------------------------------------------------------------

The execution of Scenes has been moved from the normal list of events to
schedulableList to avoid the same problem that previously occurred with
AgendaItems, and the eventManager now makes an additional check to see
whether an Event (Fuse or Daemon) has ever been executed in deciding
whether it\'s now due to be executed (an Event that hasn\'t been
executed will now be executed if the current turn count has gone beyond
its next execution time --- previously such an Event would never be
executed). The purpose of these changes is to alleviate the problems
that could otherwise occur when one Daemon or Fuse is set by the
execution of another, which can happen under circumstances that may not
be immediately obvious to the game author, for example by calling
[startFollowing()]{.code} from a Scene or AgendaItem. Now that Scenes
(as well as AgendaItems) are executed at an earlier and seperate phase
from Daemons and Fuses, it should in future be safe to set Fuses and
Daemons from them. The test for whether an Event has ever been executed
should also prevent an Event from being forever passed over because its
next execution time already lies in the past the first time it\'s looked
at (as could otherwise happen when setting up a new Fuse or Daemon from
another Fuse or Daemon).

------------------------------------------------------------------------

The **Component** class has now been renamed **AttachableComponent**,
which better reflects its function (as representing an object that
become or cease to be a Component during the course of the game). There
is now a new simple Component class (defined in extras.t) that can be
used for permanent components (almost certainly the more common case).

------------------------------------------------------------------------

There is now also a new [Attachable](attachable.htm#attachable) class,
which can be used to define objects that can be attached to more than
one thing at a time (as well has having more than one thing attached to
them at a time). This is intended for more complex cases than the
SimpleAttachable model can handle, such as a cable that\'s needed to
connect a piece of electrical equipment to a power outlet (and so needs
to be plugged into both) or a rope used to tie two or more objects
together (which needs to be attached to all of them).

------------------------------------------------------------------------

The relationship between locks and keys can now also be defined via the
new [keyList](key.htm#keylist) property of Thing. Giving a Thing a
[keyList]{.code} property automatically makes it
[lockableWithKey]{.code}, and thereby makes it start out locked. This is
in addition to the existing method of defining what items a Key unlocks
on its [actualLockList]{.code} property.

------------------------------------------------------------------------

Similarly, the rooms in a Region can now be initially specified in the
**roomList** property of a [Region](room.htm#regionprops), which can in
turn be specified via a template.

------------------------------------------------------------------------

The infrastructure for defining actions involving [three
objects](define.htm#threeobjects) has been improved, although to define
an action involving a direct object, indirect object and accessory
object requires the new [TIAAction](../../extensions/docs/tiaaction.htm)
extension. Note that actions involving, say, two objects and a literal,
or two objects and a topic, such as WRITE TEXT IN NOTEBOOK WITH PEN can
now be defined without the use of an extension.

------------------------------------------------------------------------

The Room class now has a number of methods like **canSeeOutTo(loc)**,
and **canSeeInFrom(loc)** (and equivalents for hearing and smelling)
that can be used to fine-tune sensory connections within
[SenseRegions](senseregion.htm#inoutprops), in particular in cases where
connections may be established or cut dynamically during the course of a
game (e.g. when opening or shutting a window allows sound to pass or
prevents it from passing).

------------------------------------------------------------------------

There is now a collection of [sample games](../learning/exercises.htm)
that can either be used in conjunction with the exercises in *Learning
TADS 3 With Adv3Lite* or simply perused on their own as illustrations of
various aspects of the library.

------------------------------------------------------------------------

Adv3Lite now comes with a small collection of
[extensions](extensions.htm), which can be used to add functionality not
provided in the main library.

------------------------------------------------------------------------

Conversely, there is now also a second version of the library called
[adv3Liter](modules.htm#liter) which contains only the core modules.
This may be useful for educational purposes (perhaps to start teaching
people how to write in TAD3 3 with only a much reduced version of the
library to learn to start off with) or for authors who want to opt in to
additional library features they need rather than opting out of those
they don\'t. There is a sense in which adv3Liter is more truly a
\"lite\" version of adv3 than adv3Lite has now become.

------------------------------------------------------------------------

Various bugs fixed that caused problems when optional modules were
excluded from the build.

------------------------------------------------------------------------

Bug fixed whereby the subLister did not use the plural form of \'to be\'
to introduce a plural list; e.g. it would say \"(in which is five
matches)\" instead of \"(in which are five matches)\".

------------------------------------------------------------------------

Bug fixed whereby a command consisting purely of a noun could cause a
run-time error (instead of examining the noun).

------------------------------------------------------------------------

Bug fixes whereby QDefaults would consider there to be no sense path to
a Room from an object within that room. Note that this bug would only
manifest itself when senseRegion.t was excluded from the build, since
when senseRegion.t is present, its QSenseRegion is used in place of
QDefaults for many of these calculations, and QSenseRegion was doing
them correctly.

------------------------------------------------------------------------

Bug fixed whereby an implicit Board action was reported as \'(first
getting **in** the whatever)\' instead of \'(first getting **on** the
whatever)\'

------------------------------------------------------------------------

Bug fixed whereby the eval command could cause a run-time error when
used on an object that didn\'t define a name property.

------------------------------------------------------------------------

Bug fixed whereby SitOn, StandOn and LieOn weren\'t ruling out the
attempt to get on something carried by the actor as illogical.

------------------------------------------------------------------------

Another attempt made to fix the message parameter substitution system\'s
tendency to use reflexive pronouns inappropriately (e.g. {my} was coming
out as \'yourself\' rather than \'your\' when used following {I}).

------------------------------------------------------------------------

Bug (or design flaw) fixed whereby addressing a conversation command to
an actor could cause a \'no response\' message instead of triggering an
implied hello followed by the response from the new state the implied
hello changed the actor into.

------------------------------------------------------------------------

Bug fixed whereby CommandTopic.actionPhrase displayed \'(direction)\'
rather than the name of the direction involved in the command given to
the actor.

------------------------------------------------------------------------

Bug fixed whereby objects in closed containers couldn\'t be heard or
smelled even if the container allowed sound or smell through.

------------------------------------------------------------------------

Bug fixed whereby the allContents method of Thing was listing some
objects more than once.

------------------------------------------------------------------------

Bug fixed whereby a Thing was counted as emitting a smell or noise even
if its smellDesc or listenDesc didn\'t actually display anything (but
weren\'t defined as nil); this made it difficult to define these
properties conditionally, e.g. a music emitting sound only when it was
on.

------------------------------------------------------------------------

Bug fixed whereby a Noise couldn\'t be listened to and a Smell couldn\'t
be smelt unless they were visible.

------------------------------------------------------------------------

Bug fixed whereby items might be listed in room descriptions even when
their isHidden property was nil.

------------------------------------------------------------------------

Bug fixed whereby an object marked as mentioned might still show up in a
room description listing.

------------------------------------------------------------------------

Bug fixed whereby a command like ASK HER ABOUT THE WEATHER might be
perversely interpreted by the parser as an AskAboutImplicit command
meaning ASK HER ABOUT HER ABOUT THE WEATHER; the fix applied is to
reverse the priorities of the AskAbout and AskAboutImplicit VerbRules;
hopefully this won\'t create other problems in the course of solving
this one.

------------------------------------------------------------------------

Bug fixed which caused the specialDesc from a FollowAgendaItem to be
used once the FollowAgendaItem was added to an Actor\'s agenda even if
its isReady condition had not yet been met.

------------------------------------------------------------------------

Thing.okayOpenMsg has been corrected.

------------------------------------------------------------------------

\

## [Version 0.91 (05 July 2013)]{#v0.91}

**Risk of incompatibility:** The second parameter in the
travelerEntering() method of Room and Region has been changed from
*dest* to *origin*, on the grounds that this is likely to be more useful
(the *dest* parameter was entirely redundant on a Room, and it seems as
well to make Region consistent with it). The method thus becomes
[travelerEntering(traveler, origin)]{.code}, where *origin* is the Room
that the traveler is on the point of leaving.

------------------------------------------------------------------------

**Risk of incompatibility:** The method of indicating plurals in a vocab
string has changed from using parentheses [()]{.code} to braces
[{}]{.code}, so, for example, one would now use \'child{-ren}\' rather
than \'child(-ren)\' or \'mouse{mice}\' in place of \'mouse(mice)\'. The
reason for the change is to avoid a potential clash with the use of
parentheses to indicate weak tokens, introduced in version 0.9. It may
be that no existing game code will be affected at all, since the need to
specify plurals in this way seldom arises (the library already
recognizes many common irregular plurals). This is one reason why we
changed the notation for plurals rather than for weak tokens, since weak
tokens are likely to be used more frequently; the use of parentheses
with weak tokens is also consistent with adv3.

One piece of code that will be affected is the definition of the red
switch in the maintenance room in the tutorial example, where (-zz) will
need to be replaced with {-zz} if you are in the process of following
the tutorial and have got beyond that point. Otherwise you will only
need to make changes to existing code if you have used the (xxx)
notation to define any custom plurals anywhere in your own vocab
strings.

------------------------------------------------------------------------

**Slight Risk of incompatibility:** The order of end-of-turn events has
now changed, so that Actors\' AgendaItems and the like are run before
Fuses and Daemons. This allows an AgendaItem to set a Fuse or Daemon
(for example via a call to [startFollowing()]{.code}) without the risk
of errors due to timing issues. One knock-on effect of this change is
that AgendaItems that executed on the same turn as an NPC moved from one
location to another (for example, as a result of following the player
character) may not now execute until the following turn. If this creates
problems, you can call [getActor.executeAgenda()]{.code} from the
[arrivingTurn()]{.code} method of the actor\'s current ActorState, or,
if there is none, [executeAgenda()]{.code} from the actor\'s
[actorArrivingTurn(]{.code}) method.

------------------------------------------------------------------------

The documentation has undergone a bit of reordering. For one thing, it
has all been moved under a docs folder in the adv3Lite directory to make
for a cleaner separation between from the library source files. There is
now an [Adv3Lite Bookshelf](../index.htm) (similar to the TADS 3
Bookshelf that comes with the standard TADS 3 documentation), a [Quick
Start Guide](../t3QuickStart.htm) for adv3Lite, and a new book,
[Learning TADS 3 With Adv3Lite](../learning/LearningT3Lite.pdf). This is
very similar in format and content to the *Learning TADS 3* book that
comes standard with TADS 3, but has been adapted for use with the
adv3Lite library. It is provided as a PDF and provides an alternative
tutorial, based on a reasonably systematic tour of the adv3Lite library
and TADS 3 language, rather than on the creation of a number of tutorial
games (the examples in this book may need further work, since they were
taken more or less intact from *Learning TADS 3* and may need some
adapting for use with adv3Lite).

------------------------------------------------------------------------

**NodeEndCheck** and **NodeContinuationTopic** now have the
[nodeActive]{.code} condition as part of their [active]{.code} property
instead of their [isActive]{.code} property. The reason for the change
is that game authors could easily override the isActive property without
realizing that they needed to add the inherited condition to their own.
Now they don\'t have to worry.

------------------------------------------------------------------------

The grammar for the TELL command has been tweaked so that TELL X is
parsed as TELL \[topic matching X\] rather than TELL \[actor matching
X\]. This is probably more useful as a command like TELL BOB (with no
more specified) is seldom useful whereas it may well be useful to be
able to use a TellTopic to match commands like TELL A LIE or TELL THE
TRUTH. A similar change has been made to the grammar for ASK X.

------------------------------------------------------------------------

The definition of **blockEndConv** has been moved from NodeEndCheck to a
new EndConvBlocker mix-in class, which has been added to the classlist
of the Actor, ActorState and NodeEndCheck classes. This allows the
[canEndConversation()]{.code} methods of all three classes to use
[blockEndConv]{.code} as a possible return value.

------------------------------------------------------------------------

The library now has a **commLink** object that can be used to establish
remote communications between the player character and one or more other
actors in remote locations. You can use
[commLink.connectTo(other)]{.code} to establish a remote audio link with
other, or [commLink.connectTo(other, true)]{.code} to establish a remote
audiovisual link. Use [commLink.disconnect()]{.code} to sever the
connection again. For further details read about the [Communications
Link Special](query.htm#commlink) in the chapter on Querying the World
Model.

------------------------------------------------------------------------

The new **setPlayer(actor, person)** function can be used to [change the
player character](changepc.htm) to another *actor*. The *person*
parameter is used to determine whether the new player character will be
referred to in the first, second or third person; it should be supplied
as either 1, 2 or 3; if it is not supplied it defaults to 2.

------------------------------------------------------------------------

The temporary fix for the problem with the parser matching possessives
has now been replaced with a more robust solution provided by Mike
Roberts (this may be invisible to game code).

------------------------------------------------------------------------

The new Mentionable method [filterResolveList()](thing.htm#filter)
allows objects to adjust the list of matched objects while the parser is
deciding which objects to match to a player command. This can be used
for an object to exclude itself or other objects from the match list.
The [Unthing]{.code} class now uses this to exclude any Unthings from
the match list when any other objects are present; it is also used by
the new [CollectiveGroup]{.code} class.

------------------------------------------------------------------------

The new [CollectiveGroup](extra.htm#collective) class can be used to
represent (and stand in for) a group of similarly-named objects for
selected actions.

------------------------------------------------------------------------

The Actor method **startFollowing()** now checks whether there\'s
already a following Daemon running for that actor before creating a new
one; this should prevent problems that could otherwise occur if
[startFollowing()]{.code} were called while the actor was already
following the player character.

------------------------------------------------------------------------

There is now an **objSmellable** PreCondition which is used to enforce
smellability (i.e. the existence of a scent sense-path) on the
SmellSomething action.

------------------------------------------------------------------------

Bug fixed whereby an actor would never end a conversation through
boredom (the boredomAgendaItem was never being added to Actors\'
agendaLists)

------------------------------------------------------------------------

Bug fixed whereby issuing a CONTINUE command could cause a run-time
error when there wasn\'t any journey to continue on.

------------------------------------------------------------------------

Bug fixed whereby [askMissingObject()]{.code} could cause a run-time
error when an existing direct object was needed to help choose a new
indirect object.

------------------------------------------------------------------------

Bug fixed whereby [askMissingObject()]{.code} was allowing the action
that called it to continue instead of stopping it in the case where it
executed a replacement command. A [return]{.code} statement was being
used where an [exit]{.code} statement was needed to terminate the
original action.

------------------------------------------------------------------------

Bug fixed whereby a Component could be detached with a simple DETACH
command (whereas a Component is normally a permanent attachement, unless
something more specific is done to detach it).

------------------------------------------------------------------------

Bug fixed whereby anything could be attached to a SimpleAttachable even
if it was not in its allowableAttachments list.

------------------------------------------------------------------------

Bug fixed whereby plugging something in could cause a run-time error
(because the PlugInto action needed to resolve the direct object before
the indirect object).

------------------------------------------------------------------------

Bug fixed whereby the second half of a split inventory listing would
start with a lower case letter even when its initial word should be
capitalized.

------------------------------------------------------------------------

Bug fixed whereby the automatic calculation of the **timesToSuggest**
property of an ActorTopicEntry that\'s also an EventList was not working
properly.

------------------------------------------------------------------------

Bugs fixed whereby excluding actor.t from the build would cause
compilation errors and warnings even if the game didn\'t require this
module.

------------------------------------------------------------------------

\

## [Version 0.9 (08 June 2013)]{#v0.9}

**Slight risk of incompatibility:** The **mentionsAll()** function has
been withdrawn, since it\'s no longer needed, and it wasn\'t a good way
of doing what in did anyway. Instead of testing
[mentionsAll(cmd)]{.code} test [cmd.matchedAll]{.code}.

------------------------------------------------------------------------

**Slight risk of incompatibility:** The regular verbs have been removed
from the [englishCustomVocab.verbParams]{.code} list, since they are no
longer needed. If you have any code that still uses message parameters
like [{appears}]{.code} or [{opens}]{.code} with regular verbs, you\'ll
need to change them to the regular form ([appear{s/ed}]{.code} or
open[{s/ed}]{.code}). Irregular verbs like [{think}]{.code} or
[{take}]{.code} are not affected.

------------------------------------------------------------------------

**Very slight risk of incompatibility:** In a few cases the withdrawal
of regular verbs from the verbParams list might have caused problems
with the [{don\'t verb}]{.code} and [{must verb}]{.code} parameter
substitutions that required the past participle of *verb* in some
tenses. To deal with this regular verbs in these constructions should
now be followed by the appropriate past participle in square brackets;
e.g. [{don\'t open\[ed\]}]{.code} or [{don\'t close\[d\]}]{.code} or
[{must stop\[?ed\]}]{.code}. This will only effect games in fairly
unusual tenses, so it\'s quite likely that know existing game will
actually be affected, although it has been necessary to change a few
library messages to cater for this. Once again, irregular verbs (e.g.
[{must take}]{.code} or [{don\'t know}]{.code}) are not affected.

------------------------------------------------------------------------

**Very slight risk of incompatibility:** The properties **showReport**
and **giveReport** have both been renamed to **summaryReport**, in the
interests of consistency and ease of use. Since the use of these
properties wasn\'t documented anywhere and they didn\'t quite work
properly anyway, it\'s unlikely that any existing game code will be
affected, but if any existing game code does make use of them it will
need to rename them accordingly.

------------------------------------------------------------------------

It is now possible to summarize the results of a GIVE or SHOW command
acting on a set of objects, rather than getting an individual report for
each object. The newly-named **summaryReport** property is now correctly
reset in the [execGroup()]{.code} method of Give, Show, GiveImplicit and
ShowImplicit and correctly used in the report phases of dobjFor(Give),
dobjFor(Show), dobjFor(GiveImplicit) and dobjFor(ShowImplicit) on Thing.
It is joined by a new property **summaryProp** defined and deployed in
the same places. [summaryProp]{.code} can be set to a property pointer
to execute a method on the current interlocutor at the end of a GIVE or
SHOW command executed on a set of objects. Instructions on how to use
these properties can be found in the new section on [Summarizing Give
and Show.](actortopicentry.htm#summarizing)

------------------------------------------------------------------------

A number of library messages that were found to be erroneous when making
the foregoing changes have now been corrected.

------------------------------------------------------------------------

In previous versions the **extraReport()** macro did not carry out any
message parameter substitutions. This may not be what all game code
expects. extraReport() has accordingly be changed from a macro to a
function, and unless the second, optional, parameter is specified as nil
it will carry out message parameter substitutions before displaying its
text.

------------------------------------------------------------------------

The message parameter substitutions [{donot *verb*}]{.code} and
(equivalently) [{doesnot verb}]{.code} have been added. These work just
like [{dont *verb*}]{.code} and [{doesnt verb}]{.code}, except that the
negation isn\'t contracted (e.g. \"Fred does not respond\" instead of
\"Fred doesn\'t respond\").

------------------------------------------------------------------------

An [Instructions](instruct.htm) module has been added to the
English-specific part of the library. This allows games to provide a set
of standard set of instructions for playing Interactive Fiction. It\'s
based closely on the adv3 equivalent (from which it\'s largely taken),
with one or two minor adaptations for adv3Lite. This is the first of
several new features aimed at making adv3Lite more approachable to new
players.

------------------------------------------------------------------------

A second feature aimed at new players is the optional module
[newbie.t](newbie.htm) in the English-specific part of the library. This
looks out for various kinds of malformed commands that new players often
attempt to use and provides more helpful responses than the standard
parser error messages, in an attempt to nudge new players in the right
direction. It also allows the game to watch out for when players seem to
be getting stuck, particularly at the start of the game, so it can offer
them some help.

------------------------------------------------------------------------

The third newbie-friendly feature that\'s been added is the
[ExtraHint](hint.htm#extra) mechanism, which allows game authors to
display hints to players who look as if they may be getting stuck.

------------------------------------------------------------------------

The English part of the library now contains a **yesOrNo()** function
which simply reads a command-line response and returns true for an
affirmative response and nil otherwise. The Instructions module makes
use of this, and it seemed worth adding it for general use.

------------------------------------------------------------------------

The SimpleAttachable class now has **attachTo(obj)** and
**detachFrom(obj)** methods, which should make it easier and to attach
and detach objects by programmatic fiat (e.g. when a magnet attracts a
small item to itself).

------------------------------------------------------------------------

Thing now has a new **hideFromAll(action)** method, which can be used to
exclude an object from the list of things the parser chooses in response
to *ACTION* ALL.

------------------------------------------------------------------------

Thing now has a new **ownerNamed** property (in the English-specific
part of the library). If this is true then the theName (but not the
aName) property of this object will be followed by its name preceded by
the possessive form of its owner\'s name, e.g. \"Bob\'s wallet\" or
\"Jane\'s mouth\". This may be particularly useful in defining body
parts, but is potentially useful in any situation where an object has a
specific owner (do can in any case be referred to as \"Bob\'s wallet\"
or \"Jane\'s mouth\" by the player) and we want to include the name of
the owner when referring to the specific object in game output, e.g.
\"You take Bob\'s wallet\" (it was lying on the table) but \"Bob is
carrying a wallet\".

------------------------------------------------------------------------

The library now defines a new **objUnlocked** PreCondition. This isn\'t
actually used anywhere in the library, but game code is free to use it.
It would normally only be meaningful to do so in the dobjFor(Open)
preCond list of objects with a lockability of either lockableWithoutKey
or lockableWithKey. In the latter case the objUnlocked PreCondition will
only attempt to unlock the object if the actor is carrying a key that
might plausibly work.

------------------------------------------------------------------------

There is now an [Unthing](extra.htm#unthing) class which can be used to
represent objects that are absent.

------------------------------------------------------------------------

The Thing class now as an **isHidden** property which can be used to
hide things from view. TravelConnector now accordingly defines
[isConnectorApparent = !isHidden]{.code}, so that a hidden
TravelConnector (such as a concealed Door) is automatically not
apparent.

------------------------------------------------------------------------

It\'s now possible to define weak tokens in a vocab string by placing
them in parentheses. E.g. \'(her) foot\' would match \'her foot\' or
\'foot\' but not \'her\', or alternatively by following the word with
the special token \'\[weak\]\', e.g. \'her\[weak\] foot\'. These two
methods are currently functionally equivalent to defining the vocab as
\'her\[prep\] foot\' but having a special syntax for weak tokens looks
more intuitive and should allow for weak tokens and prepositions to be
treated differently in the future should this turn out to be necessary.

------------------------------------------------------------------------

The VerbProduction class (and hence VerbRules) now has an isActive
property, which can specify the conditions under which the VerbRule is
matched (this makes it possible, for example, for the newbie.t module to
switch off a whole lot of its VerbRules when a conversation is in
progress so as not to intercept potentially valid conversational
commands). An isActive property has also been added to the
StringPreParser class, for similar reasons.

------------------------------------------------------------------------

The library defines two new macros **gLocation** and **gRoom** to get
the player character\'s current location and current room respectively
(often these will be the same, but they need not be if the player
character\'s immediate location is something other than a Room, such as
a bed or chair). It also defines a new trio of macros **gTopic**,
**gTopicText** and **gTopicMatch**, which give the ResolvedTopic of any
current TopicAction or TopicTAction, the text corresponding to that
ResolvedTopic (i.e. the text it attempted to match) and the getBestMatch
property of that ResolvedTopic (the Topic object it best matches).

------------------------------------------------------------------------

The library now attempts to be a bit smarter about combining implicit
action reports, so that, for example:

(first taking the coin)\
(first taking the coin)\
(first taking the coin)

should become:

(first taking three coins)

------------------------------------------------------------------------

The Actor class now provided some default output in
**actorSpecialDesc**. This is to ensure that NPCs are listed in room
descriptions even if the game author doesn\'t define this property or a
specialDesc.

------------------------------------------------------------------------

There has been some rearrangement of the verify methods of
conversational commands. These are now all defined on Thing and not
overridden on Actor. The new property [canTalkToMe]{.code} is nil on
Thing and true on Actor (and normally shouldn\'t be overridden by game
code); this allows conversational commands on Actor but not Thing. The
main purpose of this is to allow Actor to inherit the new verify tests
on Thing preventing people talking to themselves (or giving or showing
things to themselves).

------------------------------------------------------------------------

The new Thing property **opened** tracks whether an object has ever been
opened. This will be nil for an object that starts out open and has
never been closed and reopened.

------------------------------------------------------------------------

If one side of a Door starts out open, the library now assumes that the
other side should start out open too.

------------------------------------------------------------------------

Thing now has a **getFacets** property, which can be set to a list of
other Things that are facets of the object it\'s defined on (and which
can thus be regarded as potential pronoun antecedents of the same
object). The only objects for which this is automatically set by the
library are the two sides of the same door.

------------------------------------------------------------------------

The **getCarriedBulk()** method now excludes anything fixed in place
from its calculation of total bulk as well as anything worn. The reason
is that anything fixed in place inside an actor is likely to be a body
part, not something carried.

------------------------------------------------------------------------

The TravelConnector class now has a **noteTraversal(actor)** method
which is invoked when it is traversed by *actor*. The
[travelDesc]{.code} method is now called via [noteTraversal()]{.code}.
This gives game authors a little more flexibility in defining the
side-effects of travel when the traveler is not the player character.

------------------------------------------------------------------------

TravelConnector\'s **travelDesc()** method now calls [doScript()]{.code}
by default if the TravelConnector in question is also a Script (i.e.
EventList). This makes it straightforward to vary the message that is
shown when the player character traverses the connector.

------------------------------------------------------------------------

Room\'s **roomDaemon()** method now likewise calls [doScript()]{.code}
by default if the Room is also a Script. This makes it easy to define a
series of atmospheric messages on the Room (simply by mixing it in with
an EventList class and giving it an [eventList]{.code} property)

------------------------------------------------------------------------

The new Thing method **isVehicle** allows a Booth or Platform to be used
as a vehicle. If the player issues a travel command while the player
character is in (or on) an object for which isVehicle is true, then that
object will travel with the player character in (or on) it.

------------------------------------------------------------------------

It\'s now possible for Doer\'s cmd strings to match commands like \'go
south\' or \'go east\|west\' and to work as expected (i.e. matching GO
SOUTH in the first case and GO EAST or GO WEST in the second). The
former method of defining matching directions on the Doer\'s direction
property still remains, both for backward compatibility and because
internally the library still uses it (it simply scans the cmd string for
direction names and adds the corresponding directions to the Doer\'s
direction property).

------------------------------------------------------------------------

The Room class now defines two new properties/methods
**allowCompassDirections** and **allowShipboardDirections**. If either
of these is nil then referring to a compass or shipboard direction
respectively in a command will result in the command being blocked with
\"Compass/Shipboard directions have no meaning here.\" This check
enforced by the new Doer method **checkDirection()**, which is invoked
from [Doer.exec()]{.code} if the command refers to a direction. By
default allowCompassDirection is true for all rooms (although game code
can, of course, override this) whereas [allowShipboardDirections]{.code}
is true only on rooms that actually define a non-nil shipboard direction
exit (fore, aft, port or starboard). This should make it easier for
games to block the execution of seemingly meaningless commands like
THROW BALL PORT in locations where PORT has no meaning.

------------------------------------------------------------------------

The \<.roomdesc\> [style tag](room.htm#styletag) now works (it was
ignored before), and a new \<.roomcontents\> style tag has been added
for formatting the listing of a rooms\'s contents.

------------------------------------------------------------------------

Bug fixed whereby one got an inappropriate response to FOO ALL when
there was nothing available to foo.

------------------------------------------------------------------------

Bug fixed whereby an adjectival possessive (e.g. \"drivers\'s\" in a
name like \"driver\'s license\") couldn\'t be matched to the name of an
object.

------------------------------------------------------------------------

Bug fixed whereby the cquoteOutputFilter failed to recognize (and so
ignore) HTML tags containing double quote marks (e.g. \'\<a href=\"foo\"
\</a\>\'. It now does so does not attempt to replace any quotation marks
within them. This makes it easier to output strings using the aHref()
function or explicit anchor tags. HTML tags containing single quote
marks were already recognized before.

------------------------------------------------------------------------

Bug fixed whereby message parameter substitutions were still a bit too
eager to use reflexive pronouns. Reflexive pronouns should now occur
only (a) when the parameter explicitly requests them (e.g. {himself
dobj}) or when the noun/pronoun being substituted for refers to the same
object as the last grammatical subject encountered in the sentence.

------------------------------------------------------------------------

The subLister (responsible for messages like \'(in which was a gold
coin)\') previous omitted a space after the introductory text (thus
producing text like \'(in which wasa coin\').) This has now been
corrected.

------------------------------------------------------------------------

\

## [Version 0.8 (17 May 2013)]{#v0.8}

**Slight risk of incompatibility:** Some of the DMsg() and BMsg()
identifier names have been changed, or messages merged. This is mostly
to correct the occurrence of duplicate identifiers that had crept in,
but in one or two cases was in the interests of naming consistency (in
particular names beginning \'cant\' have been changed to names beginning
\'cannot\'). This will only affect game code if you have defined a
[CustomMessages]{.code} object to customize some of the library
messages, and even then only a few messages are affected.

------------------------------------------------------------------------

You can now control whether or not other actors in the vicinity
\"overhear\" information imparted to the current interlocutor. By
default a \<.inform tag\> tag calls the setInformed(tag) on every actor
within earshot. This can now be prevented by setting [informOverheard =
nil]{.code} on the current ActorState, or [actorInformOverheard =
nil]{.code} on the Actor (when the current ActorState is nil). To
prevent the overhearing behaviour globally, set [informOverheard =
nil]{.code} on the actor or on the whole Actor class.

------------------------------------------------------------------------

Templates have been added for EventList and ShuffledEventList.

------------------------------------------------------------------------

The English-language library now automatically sets the name of a thing
to the appropriate pronoun (\'I\', \'we\', or \'you\') if its
[person]{.code} is 1 or 2; this may make it slightly easier to define
the player-character object.

------------------------------------------------------------------------

The new Actor method **travelVia(conn)** makes the actor travel via the
TravelConnector *conn* and reports the actor\'s movement if it is
visible to the player character.

There is also a new Actor method **sayArriving(fromLoc)**, which is
called by Actor.travelVia() (as is sayDeparting()). By default
sayArriving(fromLoc) calls sayArriving(fromLoc) on the current
ActorState which by default in turn calls sayActorArriving(fromLoc) back
on the Actor. The sayArriving(fromLoc) method displays only the most
basic default message, which most games will probably want to customize.
It can also be suppressed altogether by supplying nil as the second
(optional announceArrival) parameter when calling travelVia(), since it
may sometimes be easier to call travelVia() followed by your own custom
arrival message than to customize sayArriving().

------------------------------------------------------------------------

Before Travel notifications are now triggered when an actor tries to
travel via a direction that\'s defined as a method or double-quoted
string. That means that when you define the direction property of a Room
as a method or double-quoted string, [beforeAction(gActor,
direction)]{.code} will be called on every object in scope (allowing any
one of them to veto the proposed travel with an exit macro if desired).
Note that normally before travel notifications are called as
[beforeAction(traveler, connector)]{.code}, but since in this case
there\'s no connector object to pass as a parameter we pass the
direction object (e.g. westDir if the actor is trying to go west)
instead.

Additionally, if the direction property is defined as a method, then the
current room\'s notifyDeparture(actor, destination) method will be
triggered, providing libGlobal.extraDestInfo has a non-nil destination
for the proposed travel.

------------------------------------------------------------------------

The Distant class now defines its [decorationActions]{.code} property as
[\[Examine\]]{.code} only, rather than inheriting [\[Examine,
GoTo\]]{.code} from Decoration. This is probably the better default
since most Distant objects are, by their nature, too far away for the
player character to go to them (e.f. the sun, moon, sky or a distant
mountain). In some cases a Distance object may be \'locally distant\',
however, such as a sign mounted too high up on the wall to touch. In
that case it may be appropriate for game code to override the
decorationActions property of the Distant object to include GoTo, since
the player might reasonably use GO TO SIGN to take the player character
to the location of the sign.

------------------------------------------------------------------------

It\'s now possible to set up test scripts for the purposes of debugging
which can be run with commands like TEST FOO. For further details see
the [Debugging Commands](debug.htm#tests) section of the manual.

------------------------------------------------------------------------

The Parser.defaultActions option has now been switched back on by
default. This is the option that allows a command that consists entirely
of a noun phrase (such as ME or RED BALL) to be treated as an examine
command with the noun as its object. It\'s now possible to restore this
behaviour since the bug that caused it to be a bit too wayward has now
been fixed (see below).

------------------------------------------------------------------------

Game code can now use the tense-switching message substitution
[{*present-str*\|*past-str*}]{.code}; this simply displays *past-str* if
the game is in the past tense and *present-str* otherwise. This does
much the same [tSel(\'present-str\', \'past-str\')]{.code}, but does it
more concisely.

------------------------------------------------------------------------

Previously, attempting to use a message parameter substitution verb
without a corresponding subject (e.g. \"There {is} not much here\")
would cause a run-time error. Now the English-library defaults to a
third-person singular dummy subject in such cases (so that \"There {is}
no much here\" is effectively equivalent to \"There {dummy} {is} not
much here\"). This change avoids the need to include an explicit {dummy}
subject in such cases. An explcit dummy {plural} subject is still needed
to make the verb take a plural form, however.

------------------------------------------------------------------------

A number of adv3-style verb conjugation parameters have been added to
the English library: {s/d}, {s/ed}, {es/ed}, {ies/ied} and {s/?ed}.
These can be use to conjugate regular verbs in message parameter
substitutions like \"{I} close{s/d} the door and cross{es/ed} the room.
\" In addition, over two hundred irregular verbs are now defined in the
English-specific part of the library. This should largely remove the
need to define CustomVocab objects (and to check whether they need
defining) in order to define new message parameter substitutions for
additional verbs, since all regular verbs can now be dealt with the
{s/d} type endings, and the library should now recognize most common
irregular verbs.

For further details see the sub-section on [Conjugations and
Tenses](message.htm#conjugate_idx) in the Messages chapter.

The **englishCustomVocab** currently defines a number of regular verbs
in its **verbParams** list (along with over 200 irregular ones). These
regular verbs are likely to be removed from the list in a future
version, since they are no longer needed there. now that the library has
an alternative means of conjugating regular verbs. The regular verbs
have been left in the list for the time being for backward
compatibility. In any case, library messages that make use of such
regular verbs will first need to be changed to use the alternative
conjugation method (e.g. [{achieves}]{.code} will need to become
[achieve{s/d}]{.code}). Game code that uses the old-style message
parameter substitutions for regular verb (e.g. [{achieves}]{.code}
rather than [achieve{s/d}]{.code}) will not be affected for now, but it
will be advisable to replace any such old-style substitutions with the
new-style ones in time for the next update.

------------------------------------------------------------------------

A tweak has been made to the way the message system handles reflexive
antecedents. The original Mercury library substituted a reflexive
pronoun wherever an object occurred more than once in successionin the
same sentence, but this could generate ungrammatical messages such as
\"You can\'t take the rug while you\'re standing on itself.\" This
feature was disabled altogether in an earlier version of adv3Lite, but
that meant one might get messages like \"You can\'t eat you\" rather
than the more grammatical \"You can\'t eat yourself.\" The reflexive
antecedent mechanism has now been tweaked again so that the reflexive
pronoun is automatically used when it refers back to the subject of the
sentence. There are cases where you might want to use a reflexive
pronoun to refer to the object of the sentence, such as the \"You can\'t
put the box in itself\" example originally envisaged by the Mercury
library, but these are usually particular cases where you can use the
{himself dobj} message parameter substitution to generate the reflexive
pronoun (because, for example, the message is being called from an
illogicalSelf() macro in a verify routine to prevent the same object
being used in two different and incompatible roles simultaneously).

------------------------------------------------------------------------

In TADS 3.1.3 and above, it should now be possible to create new
adv3Lite projects directly from Workbench\'s New Project wizard
(provided the adv3Lite library directory is where Workbench expects to
find it). For details, see the section on [Starting Out --- A Minimal
Game Definition](mingame.htm#including_idx)

------------------------------------------------------------------------

The new Actor method **actorSay(str)** can be used to output a string
representing all or part of a conversational exchange in contexts where
simply using [say()]{.code} or a double-quoted string could potentially
confuse the conversation system and give rise to hard-to-find bugs in
game code. For a fuller discussion see the subsections on
[Actor-Specific and General Tags](tags.htm#actor-tag-idx) and on the use
of [actorSay()](initiate.htm#actorsay_idx) to initiate NPC conversation.

------------------------------------------------------------------------

The [suggestedTopicLister]{.code} now separates out the methods
[showListPrefix(lst, pl, explicit]{.code}),[ showListSuffix(lst, pl,
explicit) ]{.code}and [showListEmpty(explicit)]{.code}. This brings it
more into line with the Lister class and also makes it easier for game
code to customize these parts of a list of suggested topics.

------------------------------------------------------------------------

The sceneManager now runs the scene-checking mechanism for the first
time at the Init stage, i.e. just before the first room description is
displayed. Previously, the scene-checking mechanism was run for the
first time at the end of the first turn, which made it difficult to
define a Scene that starts out active right at the start of play. Note
that this means that the [whenStarting()]{.code} method of a Scene whose
[startsWhen]{.code} condition starts out true will be executed *before*
the first room description is displayed.

------------------------------------------------------------------------

The [Library Reference Manual](../libref/index.htm) is now included as a
standard part of the documentation set. This is the adv3Lite equivalent
of the Library Reference Manual that comes with adv3, namely a fully
indexed and hyperlinked set of HTML files that allows you to look up
every class, object, macro, property, method, or function defined in the
library and see where it is defined in the source code, and, in the case
of a class or object, what classes it inherits from, and what properties
and methods it defines.

The adv3Lite version of the Library Reference Manual additionally
includes a Messages tab to help track down library messages and their
BMsg or DMsg IDs. Jerry Ford\'s discovery-tool-generated messages CSV
file is also included with the documentation set in order to provide an
additional means of searching for library messages. For further details
see [Finding Message IDs](message.htm#findingmsg) in the Messages
chapter.

------------------------------------------------------------------------

The Library Manual now has an [index](manual_idx.html), which
immediately follows this change log.

------------------------------------------------------------------------

The adv3Lite documentation now provides a link to the *TADS 3 System
Manual* in one or two places. This is done via the file **sysman.htm**
in the adv3Lite directory. By default this redirects to the on-line
version of the System Manual on www.tads.org, because the location of
your local version will vary according to what operating system you\'re
using. If you prefer you can edit sysman.htm to make it redirect to the
local copy of the System Manual on your system. For instructions see the
section on the [System Manual](mingame.htm#sysman) in the setup chapter.

------------------------------------------------------------------------

Bug fixed whereby every Actor was inadvertently sharing the same
informedAboutTab table (so that if one Actor was informed about
something, all Actors ended up being informed about it).

------------------------------------------------------------------------

Bug fixed in which the behaviour of [checkReachIn()]{.code} might not
have been what was expected. Previously, checkReachIn() might block
reaching from A to B even when A and B were on the same Platform (for
example) that defined the checkReachIn() method. That was because the
checkReachIn() method used the [commonInteriorParent()]{.code} method to
determine whether A was trying to reach inside the object in question,
but commonInteriorParent() only counts a parent as common if its a Room
or if its contType is In. The library now defines a new
**commonContainingParent()** method that finds the common parent in the
containment tree regardless of containment type;
QDefaults.reachProblemCheck() now uses commonContainingParent() rather
than commonInteriorParent() when checking checkReachIn() conditions,
which should produce more intuitive results.

------------------------------------------------------------------------

Bug fixed whereby the [sayDeparting()]{.code} method of FollowAgendaItem
did not work as stated in the manual (since it was never being invoked).

------------------------------------------------------------------------

Bug fixed whereby an apostrophe was incorrectly occurring in certains
plurals, e.g. \"20\'s\" instead of \"20s\".

------------------------------------------------------------------------

Bug fixed whereby responding to a What do you want to foo? prompt when
Foo is a LiteralAction might cause a run-time error if the player
responded with the name of an object in scope.

------------------------------------------------------------------------

Bug fixed whereby responding to a What do you want to foo? prompt when
Foo is a LiteralAction or TopicAction might cause the response \"I
don\'t understand that command\" instead of executing the command with
the specified literal or topic.

------------------------------------------------------------------------

Bug fixed whereby the compiler would create a couple of warnings if the
game contains no me object (because the player character object is
called something else).

------------------------------------------------------------------------

Bug fixed which could cause a run-time error in calculating scope when
the player character isn\'t the me object.

------------------------------------------------------------------------

Bug (or bugs?) fixed whereby odd interactions between the parser and the
spelling checker could cause seemingly inconsistent responses to
commands involving non-existent objects (e.g. X FOO when there\'s no FOO
in the game, or just FOO when defaultActions is true). Thanks are due to
Mike Roberts for providing the fix.

------------------------------------------------------------------------

Bug fixed which truncated the library message shown in the past tense to
say that there were no topics to suggest.

------------------------------------------------------------------------

\

## [Version 0.7 (10 April 2013)]{#v0.7}

**Risk of incompatibility:** The way the **activated** property of an
[ActorTopicEntry]{.code} works has been substantially changed. The
activated property now starts out true by default on all
ActorTopicEntries; if it becomes nil the ActorTopicEntry becomes
inactive regardless of the value of its [isActive]{.code} property.
Thus, for an ActorTopicEntry to be active, both its [isActive]{.code}
property and its [activated]{.code} property must be true.

The [\<.activate key\>]{.code} tag works as before, setting the
[activated]{.code} property to true of all ActorTopicEntries whose
convKeys match *tag*. There is now also a [\<.deactivate key\>]{.code}
tag which does the reverse, i.e. setting the [activated]{.code} property
to nil of all ActorTopicEntries whose convKeys match *tag*. The
[topicResponse]{.code} method of an ActorTopicEntry can also call the
new **deactivate()** method to deactivate itself, which may be useful,
for example, in making an ActorTopicEntry no longer available once it
has been viewed.

If you have used the [activated]{.code} property in existing code,
search for every ActorTopicEntry in your game that uses the activated
property as part of its isActive condition, then remove activated from
the [isActive]{.code} condition (or remove the [isActive]{.code}
condition altogether if it simply defines [isActive = activated]{.code})
and instead defined [activated = nil]{.code} on the ActorTopicEntry in
question.

While this change might be a minor nuisance, it should hopefully make it
easier to activate and deactivate ActorTopicEntries in future. For
further details see the discussion in the section on
[ActorTopicEntry](actortopicentry.htm#activated).

------------------------------------------------------------------------

**Risk of incompatibility:** As many library messages as can be have now
been moved off the libMessages object (to make use of BMsg() or DMsg()
at the points where they are actually needed in the library). This makes
the library message system more consistent, since the libMessages object
was largely a historical hang-over. Game code should not be affected
unless you have specifically referred to the libMessages object in your
code.

It has nevertheless proved necessary to retain the libMessages object
for use with the webUI (part of which expects it to be present) and the
menu system (which also makes use of it in ways that would be too fiddly
to be worth changing). It should not now be used for any other purpose.

------------------------------------------------------------------------

**Slight risk of incompatibility:** A number of redundant methods,
properties, and functions have been removed from the library, many of
them on Thing or LMentionable. These were methods etc. that were not
being used anywhere else in the library and looked unnecessary for
author game code. None of them was documented (in the manual or
tutorial) and so game code should not have used them.

------------------------------------------------------------------------

**Slight risk of incompatibility:**: At the check stage the
preconditions are now checked before the check routines on the
direct/indirect object. Previously it was the other way round, but
checking the preconditions first seems a more logical order (for
example, it means when the player character tries to open an obejct we
now check whether the object is touchable before determining whether
it\'s locked, which makes better sense since if the PC can\'t touch an
object s/he may not be able to determine whether it\'s locked by trying
to open it).

------------------------------------------------------------------------

A new **extraReport()** macro has been added, for use in action()
methods. This is to allow an action method to output a brief message
like \"(with the brass key)\" without suppressing the default message
from the report stage. It\'s now used on[ dobjFor(Lock)]{.code} and
[dobjFor(Unlock)]{.code} to allow the default messages for these actions
to be moved to the report stage, which is more consistent with how other
actions work.

------------------------------------------------------------------------

Actor-initiated conversation via a ConvAgendaItem or TopicEntry now
notes the initiating actor as a possible pronoun antecedent (so that,
for example, if Bob addresses the player character the player can refer
to Bob as \'him\' on the next turn).

------------------------------------------------------------------------

The mechanism by which \' (providing light)\' is added to the name of an
object in a listing has been made a bit more generalizable. Previously
this string was hard-coded into the English-language item lister; now
the item lister obtains it from the State object, and the same mechanism
could be used to add similar state-specific information from
user-defined State objects if so desired. This should make no difference
to existing code.

------------------------------------------------------------------------

GoTo has been added to the list of actions (previously only Examine)
that can be performed on a Decoration (since this seems a more natural
response to a GO TO command than seeing the notImportantMsg would be),
but going to a Decoration is regarded as slightly less logical
(logicalRank(90)) than going to a non-Decoration.

------------------------------------------------------------------------

Where a Room doesn\'t define a vocab property, it now takes its vocab
(and hence its name) from a lower case version of its roomTitle
property, provided its autoName property is true. This saves typing the
same name twice when the name and the roomTitle are the same (while
still allowing them to be different when required). If a Room\'s
roomTitle is meant to be a proper name (such as \'Market Street\'), you
can prevent the conversion to lower case by defining proper = true on
the Room.

------------------------------------------------------------------------

A **sayDeparting()** method has been added to several classes to provide
a default message describing the departure of an NPC. The
[sayDeparting(traveler)]{.code} method On [TravelConnector]{.code}
describes traveler leaving via that connector. On the base class this is
described as the traveler leaving in the appropriate compass direction.
On Door, StairwayUp and StairwayDown this is overridden to describe the
traveler leaving through the door or up or down the stairway.

The new Actor method **sayDeparting(conn)** calls **sayDeparting(conn)**
on the current ActorState which in turn calls
**sayActorDeparting(conn)** on the actor which in turn calls
[sayDeparting()]{.code} on conn, allowing customization at any point.

At the moment these methods are only used by the new FollowAgendaItem
(see below), but they can also be called by game code to describe actor
travel as desired.

------------------------------------------------------------------------

The new Actor methods **sayActorCatches(obj)** and
**sayActorDropsCatch(obj)** have been separated out from the action
handling of iobjFor(ThrowTo) to make it easier for game code to
customize the messages for an actor catching or failing to catch an
object thrown to that actor.

------------------------------------------------------------------------

The test for [Q.canThrowTo(gActor, self)]{.code} in the action handling
of Actor iobjFor(ThrowTo) has been moved from senseRegion.t to actor.t
to allow these two files to be included or not included in a project
independently of each other. Previously senseRegion.t modified the Actor
class, which means actor.t would have had to be present if senseRegion.t
was present.

------------------------------------------------------------------------

The new **FollowAgendaItem** class can be used to make an NPC move along
a predefined path in response to a FOLLOW command of which the NPC is
the direct object. For example, if Bob has an active
[FollowAgendaItem]{.code} then when the player types FOLLOW BOB, Bob
will move through the next connector in his FollowAgendaItem\'s
connectorList and the player character will follow him. For details see
the section on [AgendaItems](agenda.htm#followagenda).

------------------------------------------------------------------------

The Thing method **checkReachIn()** now has a second (optional)
parameter *target* which is the object the actor is trying to reach.

------------------------------------------------------------------------

The library now defines three new macros to act as named constants for
use with [ConvAgendaItems](initiate.htm#convagendaitem):
**InitiateConversationReason** (1), **ConversationLullReason** (2) and
**DefaultTopicReason** (3). This may help make code that uses these
constants a little more readable.

------------------------------------------------------------------------

The quoteFilter OutputFilter object has been moved from actor.r to
output.t, where it more logically belongs. This allows games to get the
benefit of the quoteFilter (which checks and corrects for unbalanced
smart quotes) even when actor.t is not present.

------------------------------------------------------------------------

When a SpecialTopic is about to create a new Topic object from its
matchPattern property (to allow matching Topics to be created on the fly
in game code), it first checks that that an equivalent Topic doesn\'t
already exist; if one does exist, the SpecialTopic uses it as its
matchObj instead of creating a new Topic for the purpose. This may make
for more efficient topic matching.

------------------------------------------------------------------------

The library now defines an **TellTalkShowTopic** class, which responds
to TELL X ABOUT Y or TALK ABOUT Y or SHOW Y

------------------------------------------------------------------------

The **keyTopics** list property of an ActorTopicEntry can now contain
control tags (such as \<.arouse key\> or \<.activate key\>) as well as
convKeys strings. This is to allow a group of topic entries to be
activated or aroused just prior to being suggested; e.g. [keyTopics =
\[\'\<.activate bob-info\>\', bob-info\]]{.code}.

------------------------------------------------------------------------

The library now defines an **ObjectPreCondition** class, which can be
used to construct custom preconditions that apply to specific,
pre-determined objects, rather than the direct/indirect object of the
command.

------------------------------------------------------------------------

The library now defines two new methods on the [Region]{.code} class:
**regionBeforeAction** and **regionAfterAction**. These methods are
called just before and just after an action takes place in any room in
the region.

------------------------------------------------------------------------

The [Mentionable]{.code} class now defines the **ambiguouslyPlural**
property which allows objects with names like \'pair of shoes\' or
\'flight of stairs\' to be referred to as either \'it\' or \'them\'.

In the English library the [ambiguouslyPlural]{.code} property can be
set automatically from the vocab property by including both \'it\' and
\'them\' in the pronoun property. To make the object actually plural,
put \'them\' first.

------------------------------------------------------------------------

The new Room method **getDirection(conn)** returns the direction in
which one would have to travel from the room in order to travel via
*conn* (i.e. the direction corresponding to the direction property on
which *conn* is defined). For example, if frontDoor was assigned to the
north property of a room called hall,
[hall.getDirection(frontDoor)]{.code} would return northDir.

------------------------------------------------------------------------

The new outputFilter method **captureOutputIgnoreExit()** works the same
as [captureOutput()]{.code} but attempts to ignore any exit signal
thrown by the function whose output it\'s capturing. This is principally
to allow for the use of [exit]{.code} macros in check routines, where
they are not needed but may be used by authors used to adv3.

------------------------------------------------------------------------

The handling of the LookIn, LookUnder and LookBehind actions has been
streamlined slightly, to make them more consistent with one another, to
make proper use of remapping to appropriate remapXXX objects and
refactor some common code into shared methods. Also, [lookInMsg]{.code},
[lookUnderMsg]{.code} and [lookBehindMsg]{.code} are now displayed using
the display() method, which means they can be specified as double-quoted
strings or methods in addition to single-quoted strings.

------------------------------------------------------------------------

The Q.reachProblem() method now builds its list of reach problems by
calling two new Query methods in succession: reachProblemVerify() and
reachProblemCheck(). This allows the touchObj PreCondition to call
Q.reachProblemVerify() at the verify stage and Q.reachProblemCheck() at
the check stage, which avoids the code relating to the check stage being
called twice (with possibly undesirable side-effects). The check code
was called twice before since it was part of reachProblem, which was
called from the verify stage of touchObj, which is called twice (once
for disambiguation, and once when seeing if the action can go ahead).

------------------------------------------------------------------------

Bug fixed in which included an article (\'a\' or \'the\') in the name of
a topic (e.g. ASK BILL FOR THE TIME) could confuse the parser. The
English library now strips any articles from the tokens it\'s trying to
match before attempting to match a Topic.

------------------------------------------------------------------------

Bug fixed whereby \"forward\" was not recognized by the parser as the
name of a direction even though it might be shown in the exit lister.
\"Fore\", \"forward\" and \"f\" are now all recognized as referring to
the forward direction.

------------------------------------------------------------------------

Bug fixed whereby the LOCK and UNLOCK commands would ask for a key even
when an item was defined as lockableWithoutKey (this bug was introduced
in version 0.6).

------------------------------------------------------------------------

Bug fixed with the capitalization of \'You\' in the standard library
message for setting something to.

------------------------------------------------------------------------

Bug fixed whereby attempting to travel through a closed door which may
not be opened via an implicit action (because opening the door verifies
to [nonObvious]{.code} or [dangerous]{.code}) would display nothing at
all, leaving it unclear what had happened. Such travel now results in a
message saying that the door is in the way.

------------------------------------------------------------------------

Bug fixed in the Thing method [display(prop)]{.code}, which failed to
display anything if [prop]{.code} was a method that returned a
single-quoted string; now the single-quoted string is displayed.

------------------------------------------------------------------------

Bug fixed whereby using OOPS caused a run-time error.

------------------------------------------------------------------------

Bug fixed that caused a run-time error with the \<.topics\> tag.

------------------------------------------------------------------------

Bug fixed whereby a \<.convnode\> tag in the invokeItem() method of a
ConvAgendaItem didn\'t work properly when the ConvAgendaItem was
triggered by a DefaultAgendaTopic.

------------------------------------------------------------------------

Bug fixed whereby a QueryTopic template could be misinterpreted (by the
compiler) if the QueryTopic was combined with an EventList and the qType
and matchPattern were combined in a single string.

------------------------------------------------------------------------

Bug fixed whereby the suggestedTopicLister would have output a list of
AskForTopics twice instead of a list of suggested AskForTopics followed
by a list of suggested CommandTopics.

------------------------------------------------------------------------

Bug fixed whereby making a Component part of something that\'s not a
SimpleAttachment could cause a run-time error at preinit.

------------------------------------------------------------------------

Bug fixed which stopped the verifyReach() method working properly.

------------------------------------------------------------------------

Bug fixed whereby an UnlistedProxyConnector (one created using the
[asExit()]{.code} macro) might be treated as invisible in the dark even
when the connector it was a proxy for was visible.

------------------------------------------------------------------------

Bug fixed which prevented inheritance of vocab from superclasses after
the first member of the class.

------------------------------------------------------------------------

Bug fixed whereby nothing at all (not even a contents listing) would be
shown after the room name for a Room whose desc property had not been
defined.

------------------------------------------------------------------------

Bug fixed whereby the valToList() function failed to return the correct
value when its argument was a Vector; it now converts a Vector to a
List.

------------------------------------------------------------------------

Bug fixed whereby use of the [exit]{.code} macro in the
checkPreCondition method of a PreCondition would cause the game to
terminate with an unknown exception. There is actually no need to use an
[exit]{.code} macro in this situation, and game code should avoid doing
so, but authors used to adv3 might include one and it is as well for the
adv3Lite library to handle it gracefully.

------------------------------------------------------------------------

Bug fixed whereby **isChild(obj, typ)** and **isDirectChild(obj, typ)**
ignored the value of the *typ* (containment type) parameter. (The
Mercury parser uses these methods in a couple of places in contexts
where the correction is unlikely to make much practical difference, but
the fix has been made just in case, and also just in case game code
wants to make direct use of these methods).

------------------------------------------------------------------------

Bug fixed in the location method of MultiLoc which could have returned
false results when a MultiLoc was located in something other than a
top-level room. At the same time the logic of MultiLoc.location() has
been overhauled to give more meaningful results in certain other cases.

------------------------------------------------------------------------

Bug fixed whereby the parser might fail to recognize a response to a
disambiguation request as referring to one of the options offered when
one of the options is actually a SubComponent (e.g. because a command
like LOOK IN BOX has been redirected to the remapIn object of the box,
which doesn\'t have any vocab to match). The matchNameDisambig() method
of SubComponent now calls the equivalent method on its lexicalParent to
circumvent this problem.

------------------------------------------------------------------------

\

## [Version 0.6]{#v0.6} (2 March 2013)

**Risk of incompatibility:** The long form of remap (using
[remapTo()]{.code} or [maybeRemapTo()]{.code} or a list defined on a
remap property) has been withdrawn. This feature was deprecated from the
first, and we said we might withdraw it all along. The same
functionality is better implemented using a Doer (see below on the new
Doer [doInstead()]{.code} method).

Note that the short form of remap (where remap simply evaluates to
another object that replaces the current object in the same command)
remains unaffected. The short form remap will remain a permanent part of
the library.

------------------------------------------------------------------------

**Risk of incompatibility:** The Doer method **travel()** has been
withdrawn, as it is no longer needed. Use the new **doInstead()** method
with the new **Go** action instead (see below), e.g. [doInstead(Go,
northDir)]{.code}, or, if you prefer, the new [goInstead()]{.code}
macro, e.g. [goInstead(north)]{.code}

------------------------------------------------------------------------

**Risk of incompatibility:** Some isXXXable properties have been renamed
as canXXXMe properties where XXX contains a preposition and the
isXXXable form looks too barbarous: e.g. isJumpOffable has been changed
to canJumpOffMe.

------------------------------------------------------------------------

**Slight risk of incompatibility:** The **touchObj** PreCondition has
been reconfigured to make use of the new Query method **reachProblem(a,
b)**. This ensures that almost the entire logic of checking for
reachability is handled by the Query object, rather than duplicated
between the Query object and the touchObj PreCondition, so that if a
Special wants to enforce different reachability rules these will be
respected by touchObj without game authors needing to modify touchObj.

The [reachProblem()]{.code} method must return either an empty list
(meaning that there\'s no difficulty with A reaching B) or a list of one
or more **ReachProblem** objects. A ReachProblem object must define a
[verify()]{.code} method and a [check(allowImplicit)]{.code} method
(which can be called by touchObj.verifyPreCondition and
touchObj.checkPreCondition respectively). The [verify]{.code} method
must either do nothing, or else use the same macros
([inaccessible]{.code}, [illogical]{.code}, [implausible]{.code}, etc.)
that are used elsewhere in verify routines. The [check]{.code} method
should return true to allow the action to proceed or nil to fail it at
the check stage; if it returns nil it should display a message
explaining the problem. The check method may optionally also attempt to
rectify the problem by carrying out an implicit action.

The [reachProblem()]{.code} method on QDefaults carries out the same
checks that were formerly coded directly on [touchObj]{.code}, so game
behaviour should not be altered in any way unless your game modifies
touchObj.

[QDefault.canReach(a, b)]{.code} now returns true if [Q.reachProblem(a,
b)]{.code} returns an empty list.

------------------------------------------------------------------------

**Slight risk of incompatibility:** Previously an implicit SAY command
(text interpreted as a SAY command during a conversation when the
player\'s command did not explicitly start with SAY) would attempt to
match an AskTopic or a TellTopic if it failed to match a SayTopic. This
is probably needlessly complex, and may not be altogether intuitive to
players. The handling of implicit SAY commands has thus been changed so
that the game will only attempt to match SayTopics (including
DefaultTopic types that include SayTopics).

------------------------------------------------------------------------

**Slight risk of incompatibility:** The Action methods **getDobj()** and
**getIobj()** have been removed. Since all they did was to return
[curDobj]{.code} and [curIobj]{.code} respectively, they seemed an
unnecessary piece of indirection. It is unlikely that game code would
call these methods directly, but if it does, just use [curDobj]{.code}
(or [gDobj]{.code}) and [curIobj]{.code} (or [gIobj]{.code}) instead.

------------------------------------------------------------------------

**Slight risk of incompatibility:** A few message properties
(particularly relating to scoring) have been moved off the libMessages
object and replaced with DMsg/BMsg constructs. The intention is to
complete this process in the next release.

------------------------------------------------------------------------

**Slight risk of incompatibility:** A new **isConnectorVisible**
property has been added to [TravelConnector]{.code}. This functions
rather like [isConnectorApparent]{.code} did before, but allows
isConnectorApparent to be defined as nil or true directly by game
authors (instead of being derived from other properties, like
[isConnectorListed]{.code} and the lighting conditions. The new set of
relationships is now as follows: [isConnectorApparent]{.code} is true by
default but can be overridden by game authors.
[isConnectorListed]{.code} is [(isConnectorApparent)]{.code} by default
but can be separately overridden by game authors.
[isConnectorVisible]{.code} is a derived property dependent on the value
of [isConnectorApparent]{.code} and the lighting conditions, and should
not normally be overridden by game authors (though it obviously can be
if special effects are desired). This change is intended to make it
easier to make whether or not a connector is listed independent of
whether or not it is available for attempted traversal.

Game code that doesn\'t override any of these properties shouldn\'t be
affected, but if you\'ve overridden isConnectorListed anywhere in your
game code you may want to check whether it would be better to override
[isConnectorApparent]{.code} instead (since previously the value of
[isConnectorListed]{.code} determined the value of
[isConnectorApparent]{.code}, but that\'s no longer the case).

------------------------------------------------------------------------

**Slight risk of incompatibility:** The behaviour of GetOff and GetOutOf
has now been decoupled. Previously a GetOff action was simply redirected
to a GetOutOf action. The two actions now work very slightly
differently, respecting the difference between something an actor is on
and something an actor is in. This gives slightly better implicit action
reports; it also allows these two (now separate) actions to make proper
use of the remapIn and remapOn properties (as Board and Enter now do
also) in cases where the object in question implements multiple
containment. The TravelAction has also been modified to choose the
appropriate action (GetOff or GetOutOf) when responding to an OUT
commmand or using an implicit action to get the actor out of his or her
immediate container before attempting travel.

------------------------------------------------------------------------

**Very slight risk of incompatibility:** The action handling for a TI
action now adds the direct object of a command to it actionList even if
the action is dealt with on the indirect object. This is probably better
behaviour that what was there before, and means that
[gActionListStr]{.code} returns a useful value for report() methods
(usually defined on the direct object) even when the action handling has
taken place on the indirect object (as may sometimes be more
appropriate).

------------------------------------------------------------------------

**Very slight risk of incompatibility:** The action handling for PutIn,
PutOn, PutUnder and PutBehind has been moved from the direct object to
the indirect object of the action, since game code is more likely to
want to customize the effects of the action there (for example, a
Container is more likely to behave in a non-standard way to having
things inserted in it than the things being inserted in it are).

------------------------------------------------------------------------

**Very slight risk of incompatibility:** The action handling for a
number of actions on Thing and one or two other classes has been tweaked
to produce a more consistent scheme. Wherever possible, actions that
need to be blocked are blocked at the verify stage rather than the check
stage, and actions are reported on at the report stage rather than the
action stage. This scheme was more or less followed before, but not
quite as consistently as it might have been.

Note that there are still some exceptions where (in the first case) it
still seems appropriate to perform some additional checks at the check
stage and perhaps rule an action out there and (in the second case)
where the main point of an action (e.g. EXAMINE, LOOK IN) is the output
it produces, which is then best left at the action stage.

------------------------------------------------------------------------

**Very slight risk of incompatibility:** The **scoreObjects()** method
of Action now multiplies the verify score by 100 when calculating the
overall score for each object in its matchList. This is to allow other
scoreObject() methods along the way to tweak the scores of particular
objects by small amounts to allow fine tuning of the parser\'s choice of
object while giving priority to the verify results.

------------------------------------------------------------------------

[replaceAction()]{.code} and [nestedAction()]{.code} are now functions,
not macros, although they still do exactly the same thing. They are
joined by two new functions [replaceActorAction()]{.code} and
[nestedActorAction()]{.code}, which can be used when you wish to specify
the actor. Game authors are, however, encouraged to use the new methods
[doInstead()]{.code} and [doNested(]{.code}) (see below) in place of
[replaceAction()]{.code} and [nestedAction()]{.code} since these provide
greater functionality and a more consistent interface.

------------------------------------------------------------------------

Doer, Action, Thing and ActorTopicEntry all define two methods,
**doInstead()** and **doNested()** which can be used to divert one
action to another (in the first case) or to execute one action in the
course of another (in the second case), e.g. [doInstead(PutIn, redBall,
greenBox)]{.code} or [doNested(Drop, gDobj)]{.code}. See the discussion
on [Doer](doer.htm) for details.

Note that the existing Doer method [redirect()]{.code} still exists and
works as before, but is now a service method used by
[doInstead()]{.code}. Existing code that uses [redirect()]{.code} will
still work, but game authors are encouraged to use [doInstead()]{.code}
instead.

------------------------------------------------------------------------

There is now a new **Go** action to make it easier to synthesize travel
commands. This action is never triggered directly by a player command,
but can be used in doInstead(), doNested, replaceAction(),
replaceActorAction, nestedAction() and nestedActorAction() in the form
[doInstead(Go, northDir)]{.code}.

If you prefer, you can use the new macros **goInstead()** and
**goNested()** instead. For example, [goInstead(north)]{.code} would be
exactly equivalent to [doInstead(Go, northDir)]{.code}.

------------------------------------------------------------------------

A new macro **gActionListObj** has been added for use in report()
methods. It evaluates to an object that can be used in situations where
we want gActionListStr to be the subject of a sentence (so that any
verbs need to agree with it in number depending on whether gReportList
represents one or more objects). Consult the section on the
[Report](actres.htm#report) phase of Actions Results for further
details.

------------------------------------------------------------------------

Two new verification macros have been added: **dangerous** and
**nonObvious**. Both of these allow the action to go ahead unless it\'s
an implicit action, but [nonObvious]{.code} is given the same logical
rank as [illogical]{.code}. For further details see the
[Verify](actres.htm#verify) section of the Action Results article.

To allow these two new verification results to work, parts of the
verification and implicit action handling have had to be tweaked along
with the checkPreCondition methods of most PreConditions. As things
stood before it was possible to create a VerifyResult with
[allowImplicit = nil]{.code}, but nothing took any notice of this value.

------------------------------------------------------------------------

Two new macros have been added to assist with verification:
**gTentativeDobj** and **gTentativeIobj**. These contain the lists of
objects that the current Command is considering as possible direct and
indirect objects. These can be used in the verify routines of TIActions
on the first object to be resolved when it would be helpful to know what
the other object might turn out to be before it has been fully resolved.
Note that unlike the similarly named macros in adv3, these ones do
actually results in lists of actual objects, not npMatches or the like.

------------------------------------------------------------------------

A new function **askMissingObject(action, role)** has been added, which
may be called via the new macros **askForDobj(action)** and
**askForIobj(action)**. This function (or the macros that translate to
it) causes the player to be prompted to supply the missing object for
*action* (unless it can find the object for itself, see below), and the
input is then parsed in the normal way, as if the query had arisen from
the parser; meaning that if the player supplies a valid object *action*
will be executed with that object.

The [askMissingObject()]{.code} function first attempts to find the
missing object before prompting the player to supply one. It does so by
finding the highest scoring object in scope for the requested role in
the requested action. It uses this object if and only if (a) no other
object it finds has so high a score and (b) if the action were tried
with the object found it would pass the verify stage and would be
allowed as an implicitAction (so we don\'t pick an object with a
[dangerous]{.code} or [nonObvious]{.code} verify result, for example).
If these conditions are met the requested action is executed with the
best match object in the request role without the player being prompted
to supply an object.

------------------------------------------------------------------------

The behaviour of the **Lock** and **Unlock** actions (LOCK DOOR or
UNLOCK DOOR without specifying a key) has been altered slightly to take
advantage of [askForDobj()]{.code}. Now if the player attempts to lock
or unlock something without specifying a key and the player character
isn\'t holding an appropriate key the player is asked to specify a key;
previous s/he was told the player character wasn\'t holding an
appropriate key. This seems better behaviour in general, but also in
particular when a puzzle requires using something unobvious to unlock
(or lock) something with.

------------------------------------------------------------------------

The behaviour of several other actions have also been tweaked to take
advantage of [askMissingObject()]{.code}, namely Sit, Lie (as in Lie
down), Write, Type, and Look up (as in Consult).

------------------------------------------------------------------------

A number of new actions have now been implemented (more or less
completing the set envisaged in the Mercury version of grammar.t apart
from some system actions that are being left out on purpose as probably
not needed). The new actions include **Lie** (as in lie down, not as in
tell an untruth), **PlugIn**, **PlugInto**, **Unplug** and
**UnplugFrom**, together with the rest of the PushTravel actions:
**PushTravelThrough**, **PushTravelEnter**, **PushTravelGetOutOf**,
**PushTravelClimbUp** and **PushTravelClimbDown**.

------------------------------------------------------------------------

In order to facilitate the implementation of the [Plug]{.code} set of
actions a new **PlugAttachable** mix-in class has been added. For
details see the appropriate part of the
[Attachables](attachable.htm#plug) section.

In order to facilitate the implementation of the [PlugAttachable]{.code}
class there has been some tweaking of the [SimpleAttachable]{.code} and
[NearbyAttachable]{.code} classes, including some changes to the
NearbyAttachable class that now make it usable (it was fundamentally
broken before).

------------------------------------------------------------------------

Two new macros **asDobjWithoutVerifyFor()** and
**asIobjWithoutVerifyFor()** have been added, which do what they say,
namely make one set of action handling routines behave like those of
another on the same object, apart from the verify stage.

The main purpose of these new macros is to facilitate a slight tweak in
the way the **SitOn**, **StandOn** and **LieOn** actions are
implemented. Previously these were treated as synonyms of
[Board]{.code}. They still are, except at the verify stage, so that game
authors have more control over which items actors can apparently sit,
stand or lie on (although there is no difference in the end result). For
details see the new paragraph on [Pseudo-Postural
Properties](thing.htm#posture) in the section on Thing.

------------------------------------------------------------------------

Four methods have been added to the LMentionable class in the
English-specific library to facilitate the manipulation of the
vocabulary that can be used to refer to objects (and optionally the name
as well): **replaceVocab(voc)**, **addVocab(voc)**,
**removeVocabWord(word, matchFlags?)** and **addVocabWord(word,
matchFlags)**. For details see the paragraph on [Manipulating vocab at
run-time](thing.htm#manipulatevocab) in the section on Thing.

------------------------------------------------------------------------

It\'s now possible to specify a **matchPhrase** (and, if desired, a
separate **disambigMatchPhrase**) that the player\'s input must match in
order to refer to a particular object. For example, if an object with
vocab \'dark green bottle; glass\' is given a [matchPhrase]{.code} of
\'dark green\', then it will match DARK GREEN BOTTLE but not just GREEN
BOTTLE. For the full story see the paragraph on [Phrase
Matching](thing.htm#phrase) in the section on Thing.

------------------------------------------------------------------------

Sections of the vocab property can now be selectively inherited from
superclasses. For details, see the explanation of the
[vocab](thing.htm#inherit) property in the Thing section of the manual.

------------------------------------------------------------------------

The new Thing property **vocabLikelihood** can be used to make the
parser prefer one object over another, other things (notably verify
results) being equal. It is recommended that the value given to this
property (if it is used at all) be relatively small, say in the range 0
to 10, to ensure that verify results take precedence.

------------------------------------------------------------------------

There is now a **SecretDoor** class. A SecretDoor is a kind of Door that
only acts as a Door when it\'s open. For details see the
[Extras](extra.htm#secretdoor) section.

------------------------------------------------------------------------

Two new classes have been added to the conversation system:
[TopicGroup](topicgroup.htm) and [ConvNode](convnode.htm#convnode) These
don\'t enable game authors to do anything that couldn\'t be done before,
but they may make it more convenient, especially when definining
Conversation Nodes.

------------------------------------------------------------------------

Four new types of DefaultTopic have been added to the conversation
system: **DefaultSayTellTopic**, **DefaultTalkTellTopic**,
**DefaultSayTellTalkTopic** and **DefaultAskQueryTopic**, since these
seem natural groupings for DefaultTopics responding to attempts to
impart information or ask questions respectively.

------------------------------------------------------------------------

The query type and topic vocab of a QueryTopic may now be given together
in a single single-quoted string (in the QueryTopic template), e.g.
\'where he was born\' as an alternative to \'where\' \'he was born\'.

------------------------------------------------------------------------

The behaviour of ActorTopicEntry.curiositySatisfied has been changed so
that if an ActorTopicEntry defines a non-nil keyTopics property, its
curiositySatisfied becomes true if and only if showing a list of the
topics it keys would show an empty list (that is, it in effect has no
subtopics to suggest). This ensures that ActorTopicEntries whose
function is to suggest subtopics are suggested for as long as they have
subtopics to suggest.

------------------------------------------------------------------------

The new gameMain option **againRepeatsParse** controls how the AGAIN
command is interpreted. If it is nil AGAIN repeats the resolved command,
that is, the command as it was interpreted on the previous turn, with
the same objects. If it is true (the default), then the text of the
previous command is reparsed, which may result in a different
interpretation involving different objects. For example, suppose there
are two coins on the floor. If [againRepeatsParse]{.code} is nil then
TAKE COIN followed by AGAIN will result in one of the coins beingtaken,
followed by an attempt to take the *same coin* again (which will fail
with a message that you\'re already holding the coin. If
[againRepeatsParse]{.code} is true, however, than TAKE COIN followed by
AGAIN will result in one coin being taken, and then the other, just as
if the player had typed TAKE COIN twice. Which is the better behaviour
depends on context; while in the coin example the second interpretation
seems better, if a player were to type EXAMINE BOOK and be prompted to
say which one, the second interpretation would result in the
disambiguation prompt being repeated, which might seem perverse.

There is thus an additional gameMain option **autoSwitchAgain** which
tries to give the player the best of both worlds by switching
[againRepeatsParse]{.code} between true and nil depending on whether the
command to be repeated is the kind of command it would make sense to
repeat with the same objects (if it isn\'t, the command is reparsed in
the hope of finding a more sensible match). This is far from absolutely
foolproof, and should be regarded as experimental. It is true (switched
on) by default, but game authors may wish to set it to nil if it proves
troublesome.

------------------------------------------------------------------------

The new Thing method **fluidName** makes it easier to produce
satisfactory messages relating to objects doing duty both as fluid
containers and the fluid they contain (e.g. an oilcan notionally
containing oil). Library messages referring to drinking and pouring now
use the new [fluidName]{.code} property to refer to the direct object of
such actions rather than the [theName]{.code} property (although
[fluidName]{.code} is set to [theName]{.code} by default).

------------------------------------------------------------------------

There is now an additional debugging command, DEBUG DOER, which shows
which doer (identified by its cmd string) is being executed.

------------------------------------------------------------------------

The behaviour of the FOLLOW command with an actor as its target has now
been enhanced. If the command FOLLOW X is issued and X is not in sight,
but the player character is in the location from where s/he last saw X
depart, the FOLLOW X command will cause the player character to take the
same exit that the player character saw X leave by (i.e. the player
character will follow X\'s last known move). Otherwise, if FOLLOW X is
issued when the player character is in the same room as X, then the
player character will follow X if X subsequently moves on the same turn.

------------------------------------------------------------------------

The new function **senseSay(val, obj, prop=&canSee)** can be used to
output text only when *obj* is visible to the player character. This may
be particularly useful when reporting the movements and other actions of
NPCs who may or may not be visible to the player character.

The new AgendaItem method **report(msg)** simply calls [senseSay(msg,
getActor)]{.code}, thereby saving a bit of typing in this commonly
useful case. If required *report()* can pass a property pointer as a
second optional parameter (e.g. &canHear) to use a different sense from
sight.

------------------------------------------------------------------------

The draft [Tutorial](../tutorial/toc.htm) has now been completed.

------------------------------------------------------------------------

Work has begun on an [Action Reference](actionref.htm). This is
currently still work in progress, but once it is complete it will list
all the actions defined in the library referenced by an alphabetical
list of the commands used to invoke those actions. Eventually it will
also contain summary information about key properties relating to each
action and links to further information.

------------------------------------------------------------------------

Bug fixed whereby the command GO TO X could cause a run-time error when
X was last seen in the current location but was no longer there.

------------------------------------------------------------------------

Bug fixed whereby using an implicit ASK FOR, SHOW or GIVE command (e.g.
ASK FOR HELP or SHOW TICKET, without specifiying the addressee) could
cause a run-time error: the problem was that no implicit ask for, give
to or show to actions had been defined; this has now been remedied.

------------------------------------------------------------------------

Bug fixed in conversation method Actor.showSuggestions(explicit, tag),
where the tag parameter wasn\'t handled property (leading to bugs and
possible run-time errors in handling a TOPICS command).

------------------------------------------------------------------------

Bug fixed whereby an implicit TOPICS command (e.g. from TALK TO
SO-AND-SO) didn\'t respect the value of the suggestionKey property.

------------------------------------------------------------------------

Bug fixed whereby a word ending \"\'s\" (apostrophe-S) in the vocab of a
Topic would never be matched, because the tokenizer separates the
apostrophe-S into a separate token, while the initVocab() routine
suppresses it altogether. TopicPhrase now strips any apostrophe-S out of
the player\'s input for the purposes of matching it to a topic so that
it doesn\'t cause a mismatch.

------------------------------------------------------------------------

Bug fixed whereby trying to UNDOing a SAY command entered without an
explicit SAY would undo a previous command instead (since the implicit
form of SAY didn\'t set a savepoint).

------------------------------------------------------------------------

Bug fixed whereby an AskTopic or TellTopic might be preferred to a
SayTopic with the implicit form of the SAY command where the vocabulary
overlapped, because only the strongest vocab match was being obtained
(which is not necessarily the appropriate behaviour for Topic matches).

------------------------------------------------------------------------

Bug fixed whereby TopicEntries corresponding to the actors activeKeys
list weren\'t prioritized when the Actor\'s current ActorState was
non-nil.

------------------------------------------------------------------------

Bug fixed whereby certain forms of Give and Show had the wrong
PreConditions. Now GIVE (or GIVE TO) always has an objHeld PreCondition
on its direct object, while SHOW and SHOW TO enforce objHeld on portable
objects and objVisible on fixed ones.

------------------------------------------------------------------------

Bug fixed whereby finishOptionScore and finishOptionFullScore weren\'t
causing a display of the final score, but finishOptionScore was
generating a spurious additional comma in the list of post-game options.

------------------------------------------------------------------------

Bug fixed whereby the TAKE FROM command might result in an object being
taken even if it was fixed in place.

------------------------------------------------------------------------

Bug fixed whereby the TAKE FROM command might result in an object being
taken even if the actor didn\'t have room to hold it. The dobj handling
of TakeFrom now used the [asDobjWithoutVerify()]{.code} macro to copy
all its direct object handling apart from the verify stage from Take,
while retaining its own verify handling.

------------------------------------------------------------------------

Various bugs fixed that could occur when the player character was inside
a SubComponent, especially when the SubComponent was closed (thereby
preventing the player from referring to the enclosing lexicalParent).

------------------------------------------------------------------------

Bug fixed whereby the default \"You see nothing special\...\"
description was not always shown for objects that lacked a description,
so that examining such objects might result in there being no output at
all.

------------------------------------------------------------------------

\

## [Version 0.5]{#v0.5} (16 January 2013)

Several changes have been made to the [MultiLoc](multiloc.htm) class,
partly to fix a bug, and partly to enhance its flexibility.

The problem was that the locationList property was being used for
slightly conflicting purposes: both as way to set the initial list of
locations in which the MultiLoc should start out and to keep track of
the list of locations in which the MultiLoc currently resides. The
conflict arose from the fact that it made sense to allow Regions in the
list for the first purpose, but not for the second, one slightly obscure
consequence of which being that the isDirectlyIn(loc) and isIn(loc)
methods behaved unreliably when loc was nil.

MultiLoc now defines a separate **initialLocationList** property for
specifying the initial list of locations in which a MultiLoc starts out
(which can include Regions), and reserves the locationList property for
keeping track of the MultiLoc\'s current list of locations (rooms and/or
objects within rooms, but not Regions; i.e. any Regions specified in the
initialLocationList are expanded into their constituent rooms in
locationList). However, to maintain backward compatibility and ease of
use it is still legal to define an initial list of locations (including
Regions) on the locationList property. If the library finds that
initialLocationList is empty when it initializes a MultiLoc, it will
simply copy the locationList to the initialLocationList before
proceeding.

MultiLoc now also defines an **initialLocationClass** property and an
**isInitiallyIn(obj)** method, which are intended to work together. If
[initialLocationClass]{.code} is not nil then every instance of that
class will be added to the MultiLoc\'s locationList provided
[isInitiallyIn(obj)]{.code} returns true for that instance (where *obj*
is the instance in question). This introduces an existing adv3 feature
into adv3Lite; the main reason for doing so at this stage is to
facilitate the implementation of the new [Floor]{.code} class (see
below).

Note that any locations added to the location list via
[initialLocationClass]{.code} will be in addition to those defined on
[initialLocationList]{.code}, and that any locations defined in the
exceptions list will be removed from the location list after those
defined in both [initialLocationList]{.code} and
[initialLocationClass]{.code} have been added.

------------------------------------------------------------------------

The [addToContents()]{.code} method of [Thing]{.code} and
[Region]{.code} now has a second, optional, parameter *vec*. This is
intended purely for internal use by the library to facilitate initiating
the locationList of a MultiLoc from its initialLocationList and
initialLocationClass, and shouldn\'t directly impact on user code.

------------------------------------------------------------------------

The library now defines a **Floor** class, and one instance of it,
**defaultGround**. This is basically a MultiLoc, Decoration that is
added into every [Room](room.htm#roomfloor). Its main purpose is to
facilitate the parser\'s ability to disambiguate items by their
locations. Formely, if, say, there were two identical coins, one on a
table and one directly in the room, the parser would have to ask \"Which
do you mean, the coin on the table or the coin?\", which is unclear and
fails to give the player an easy way of selecting the latter. Now the
parser can ask \"Which do you mean, the coin on the table or the coin on
the ground?\" and the player can refer to \"the coin on the ground\" to
disambiguate.

The defaultGround object now present in every room does incidentally
perform the secondary purpose of allowing players to refer to \'the
ground\' or \'the floor\' which must be implicitly present in nearly
every room, but its implementation is deliberately minimalistic to
discouraage players from trying to interact with it. The library will
translate PUT SOMETHING ON FLOOR or THROW SOMETHING AT FLOOR to DROP
SOMETHING, and X GROUND/FLOOR will of course work, as will TAKE X FROM
FLOOR, and, in a limited fashion, STAND ON FLOOR or GET ON FLOOR, but
that\'s about it (everything else gets the standard decoration response
\'The ground is not important\'). STAND ON FLOOR or GET ON FLOOR will
either report \"You are standing on the floor\" (if the player char is
in the outermost room) or else be translated into a GetOut action.

If you want to define a custom Floor object for a particular location,
or omit it altogether (e.g. for a room at the top of a tree), you can do
so by overring the **floorObj** property, either to point to your custom
Floor object, or to nil (in the case of a room without a floor). You
should do this even if you implement your custom floor object as a
Fixture in a single location rather than using the custom Floor class,
but you might find it better to use the Floor class even for a custom
floor that appears only in one room, since it\'s designed to facilitate
the parser disambiguation just described. If you do decide to define
your own Fixture, you\'ll need to copy most of the methods and
properties of the Floor class onto it to make it work properly as a
floor.

------------------------------------------------------------------------

The gameMain option **storeWholeObjectTable** has been removed (and
attempting to set it will no longer have any effect). Tests showed that
the resources saved by setting this value to nil were negligible. The
alternative to storing the whole object table (for use with tags in the
conversation system) was always complex and unreliable, and it seemed
best just to get rid of it.

------------------------------------------------------------------------

There are now options to precede the failure messages at produced by
check and verify routines with the name of the object they refer to in
commands applying to multiple direct objects (e.g. TAKE ALL), in case it
isn\'t clear which objects the messages apply to. These options are
controlled by the properties **announceMultiVerify** and
**announceMultiCheck**, which can be overridden globally on TAction, or
else on individual actions. By default **announceMultiVerify** is nil
(most library verify messages make it clear what they refer to) and
**announceMultiCheck** is true.

------------------------------------------------------------------------

Multiple identical verify reports are now suppressed (i.e. only the
first is shown). This most commonly pertains when an action applying to
multiple direct objects fails the verify test on the indirect object, so
that, for example, a command like PUT ALL ON WALLPAPER where the
wallpaper is a Decoration would result in multiple displays of \"The
wallpaper is not important\"; clearly the player only needs to see this
message once. Note that this repetition suppression only takes place if
announceMultiVerify is nil.

------------------------------------------------------------------------

There is now a DEBUG command that breaks into the debugger, just as it
does in adv3. There are also DEBUG ACTIONS, DEBUG MESSAGES and DEBUG
SPELLING options. For details see the section in the manual on
[Debugging Commands](debug.htm).

------------------------------------------------------------------------

Thing now has two properties controlling whether you can pour something
onto or into the Thing. canPourIntoMe and canPourOntoMe control whether
it\'s possible; by default canPourIntoMe is true if ContType is In and
nil otherwise, and canPourOntoMe is true. The properties allowPourIntoMe
and allowPourOntoMe control whether you actually want to allow pouring
into or onto this object; both are nil by default. This ensures that a
game will give a reasonably sensible response where the canPour property
of some object has been set to true and there\'s no other specific
handling on objects that might be poured into or onto.

------------------------------------------------------------------------

The {I} and {me} message parameter substitutions now use the theName and
theObjName properties of the actor rather than the name and objName
properties; this generally reads more naturally.

------------------------------------------------------------------------

Bug fixed that caused a run-time error in the GoOut action (the action
triggered by EXIT or LEAVE), and in the GoIn action (triggered by ENTER
without an object).

------------------------------------------------------------------------

Bug fixed that caused a run-time when the player attempted to issue an
order to an NPC (or even the PC) with the \"bob, whatever\" syntax.

------------------------------------------------------------------------

Bug fixed that caused things with [visibleInDark = true]{.code} not to
be visible in the dark.

------------------------------------------------------------------------

Bug fixed that could wrongly suppress action reports at the report()
stage when Doer.redirect() was used.

------------------------------------------------------------------------

Bug fixed that placed the player character\'s immediate container out of
reach of the player character.

------------------------------------------------------------------------

Bug fixed whereby the actionPhrase() method used to reconstruct the text
of a command in a CommandTopic or DefaultCommandTopic failed to use the
correct pronouns when one of the objects of the command was either the
player character or the actor at whom the command was targeted. These
are now rendered as \'me\' or \'yourself\' respectively, since the text
output by actionPhrase() is intended to be used in the representation of
the direct speech of the player character to the target actor.

------------------------------------------------------------------------

Bug fixed whereby a Doer redirect aimed at a specific object would apply
to all successive objects on the same command (for example if a Doer
redirected TAKE BLUE BALL to the Examine action, TAKE ALL would result
in everything processed after the blue ball in the same command being
examined as well).

------------------------------------------------------------------------

Bug fixed whereby detaching an object from another object left it
located in the other object (and thus seemingly still attached); the
detached object was being move to its own location (which left it where
it was) instead of the location of the object it had just been detached
from.

------------------------------------------------------------------------

Bug fixed whereby opening a container would report \"Opening the X
reveals Y\" followed by an unnecessary \"You open the X\" (due to
inappropriate recursive sublisting).

------------------------------------------------------------------------

Bug fixed whereby trying to drop a fixture would result in the odd
message \"The whatever is part of you\" instead of \"You aren\'t holding
the whatever\".

------------------------------------------------------------------------

Bug fixed whereby the message reporting that a particular key wouldn\'t
work on a particular objecty caused a run-time error.

------------------------------------------------------------------------

Bug fixed whereby the antecedent of a pronoun could become a
SubComponent rather than the object of which it is a part. For example
the sequence OPEN SUITCASE. TAKE IT. Might mysteriously generate the
response \"The suitcase is fixed in place\" because IT now referred to
the SubComponent representing the suitcase\'s interior rather than the
suitcase itself.

\

## [Version 0.4]{#v0.4} (12 January 2013)

**Risk of incompatibility:** The properties [allowPutIn]{.code},
[allowPutUnder]{.code} and [allowPutBehind]{.code} have been renamed
**canPutInMe**, **canPutUnderMe** and **canPutBehindMe** to make these
names more consistent with the naming scheme used elsewhere in the
library. By default these properties are true if the contType is of the
appropriate type (In, Under or Behind respectively). If one of these
properties is overridden to true and the contType is not of the
appropriate type, any item put in, under or behind the object in
question will be stored in its hiddenIn, hiddenUnder or hiddenBehind
property and moved into nil. Note that there is no canPutOnMe property,
since the hiddenOn property that would then be needed wouldn\'t make
much sense, and it wouldn\'t make any sense to allow game authors to
override the rule that items can be put on an object if and only if its
contType is On.

------------------------------------------------------------------------

**Risk of incompatibility:** The Thing property transparent has been
renamed **isTransparent** to bring its name into line with similar
properties of Thing.

------------------------------------------------------------------------

**Risk of incompatibility:** The default value of the
**specialDescBeforeContents** property of Thing has been hanged from
true to [(location && location.ofKind(Room))]{.code}. In other words the
default is true for an object directly in a room and nil otherwise. This
gives more satisfactory results for specialDescs shown as part of the
listing of the contents of some other item, where the contents lister
for that item may already have introduced the fact that its contents are
about to be shown.

------------------------------------------------------------------------

Correspondingly, the specialDescs of items contained in other objects
are now listed (as well as the listing of any other items). Previously
this was not the case, which was arguably a bug.

------------------------------------------------------------------------

**Risk of incompatibility:** The handling of KISS and ATTACK on the
Actor class has changed. The default behaviour is now to display the
actor\'s shouldNotKissMsg or shouldNotAttackMsg (at the check stage). If
you want to use KissTopics and HitTopics (or you want to define your own
handling at the action stage), set [allowKiss]{.code} and/or
[allowAttack]{.code} to true.

The reason for this change is that defining a shouldNotKissMsg and/or
shouldNotAttackMsg is more straightfoward than having to define a
complete KissTopic or HitTopic for the great majority of actors who do
not need this kind of fine tuning.

------------------------------------------------------------------------

**Minor risk of incompatibility:** The Thing properties
**openingContainerMsg** has been withdrawn, since its function is now
performed by **openingContentsLister**. The **okayOpenMsg** property is
now employed at the report() stage of dobjFor(Open) and is intended
primarily for doors.

------------------------------------------------------------------------

An optional parameter, [paraBrk]{.code}, has been added to the show()
method of Lister. The default value of this parameter is true, but if it
is passed as nil the paragraph break at the end of the list is
suppressed. This change has been introduced mainly to facilitate several
of the listing changes that follow, and may not have much effect on game
code.

------------------------------------------------------------------------

The Thing method listSubcontentsOf() now takes a second parameter,
namely the lister to be used for the listing of any miscellaneous items.
The default is examineLister (which is now a property of Thing). Since
this method is mainly used internally in the library this change may
have little direct on game code, but in principle the method is also
available to be called from game code.

------------------------------------------------------------------------

The inventory lister now splits worn items and carried items into two
different lists (e.g. \"You are wearing an old coat and a silly hat, and
you are carrying a walking stick and a pencil.\") If you prefer the
single listing style, override Inventory.splitListing to nil.

------------------------------------------------------------------------

The depth of listing contents of contents in inventory listings can now
be controlled by the value of **subLister.maxNestingDepth**. The default
is 1, which gives results like \"You are carrying a glass box (in which
is a red box)\". A value of 2, for example, would give \"You are
carrying a glass box (in which is a red box (in which is a battery)).\"

------------------------------------------------------------------------

Miscellaneous items in room listings and items that are examined and
have visible contents may now list their contents in parentheses
immediately after their name to the depth defined in
subLister.maxNestingDepth. To enable this style of listing set
**gameMain.useParentheticalListing** to true. To change the behaviour of
individual listers (examineLister, openableContentsLister and
RoomContentsLister) override their showSubListing property to true or
nil (rather than having them pick it up from
gameMain.useParentheticalListing).

------------------------------------------------------------------------

Paragraph breaks between the sentences listing the contents of items in
a room description can be suppressed by setting
**paraBrksBtwnSubcontents** to nil, either on a room-by-room basis or
globally on gameMain. For further details on this and the previous
change consult the section on [Room Descriptions](roomdesc.htm#further).

------------------------------------------------------------------------

The room contents listing has been tweaked so that if the actor looking
around is not directly in a room, the actor\'s immediate location is
mentioned first (e.g. \"You are in a big wooden box\") followed by a
listing of the location\'s contents.

------------------------------------------------------------------------

The listing mechanism has been thoroughly overhauled to make fuller use
of Lister objects. A new subclass of Lister, [ItemLister]{.code}, is now
used as the base class for several kinds of lister used in room, examine
and search listings. The ItemLister class defines a
[contentsListedProp]{.code}, the default value of which is
[&contentsListed]{.code}; this is the property defined on the object
whose contents are to be listed that determines whether that object
wishes to allow its contents to be listed.

As a result of these changes the library should now respect the values
of the Thing properties **lookListed**, **examineListed**,
**searchListed**, **contentsListedInLook**, **contentsListedInExamine**
and **contentsListedInSearch**. The first three of these determine
whether an item is listed as part of the miscellaneous contents of its
parent in response to a LOOK command, or when its parent is EXAMINED, or
when its parent is searched (with SEARCH or LOOK IN/UNDER/BEHIND)
respectively. The second three determine whether the contents of the
item on which it is defined are listed in response to a LOOK, EXAMINE or
SEARCH command. By default [examineListed]{.code}, [lookListed]{.code}
and [searchListed]{.code} all take their value from the
[isListed]{.code} property. The [contentsListedInLook]{.code} and
[contentsListedInExamine]{.code} properties both take their default
values from the [contentsListed]{.code} property (which is true by
default). The default value of [contentsListedInSearch]{.code}, however,
is simply [true]{.code}, since it\'s hard to think of many cases where
you wouldn\'t want an object to reveal its contents when explicitly
searched; the property is nevertheless provided for completeness.

The new Thing property **examineLister** defines the lister to be used
to list an object\'s contents when it is examined. The default value is
[descContentsLister]{.code}.

------------------------------------------------------------------------

Perhaps somewhat experimentally, the various listers now attempt two
consolidate multiple identical items in a list into a single enumerated
occurrence, so that, for example, instead of \"You are carrying a gold
coin, a gold coin and a gold coin\" the game will output \"You are
carrying three gold coins.\" I have marked this as experimental in case
there are instances where it does not work appropriately.

------------------------------------------------------------------------

A new function, **makeMentioned(obj)**, has been added that simply makes
obj.mentioned true. The obj parameter can also be a list of Things, in
which case each item in the list will be marked as mentioned. With a
embedded expression the same function can be written as \<\< exclude obj
\>\>. The purpose of the function is to allow game authors to exclude
certain items from room (and other listings), perhaps because they\'ve
already mentioned them under another name or description.

------------------------------------------------------------------------

Two new Thing properties **allowReachOut(obj)** and
**autoGetOutToReach** have been added to allow game authors to control
what happens when an actor tries to reach one object from within another
(e.g. while the actor is on a bed or chair and tries to reach something
elsewhere in the room). These properties should be defined on the object
the actor is in. If [allowReachOut(obj)]{.code} returns true for the obj
the actor is trying to reach (the default), then reaching is allowed.
Otherwise, if [autoGetOutToReach]{.code} is true (the default) the actor
will try to get out of his/her immediate container to reach the object.
Otherwise (if [autoGetOutToReach]{.code} is nil) reaching is prohibited
and a message is displayed saying that the actor can\'t reach the target
object from his/her present location.

------------------------------------------------------------------------

The new Thing method **checkReachIn(actor)** can be used to put the
contents of an object out of reach of an actor outside the object (for
reasons other than enclosure), e.g. if the object is meant to be out of
reach. The default behaviour is to put the contents of an object out of
reach if its own [checkReach(actor)]{.code} method puts it out of reach;
[checkReachIn(actor)]{.code} simply calls [checkReach(actor)]{.code}.
The contents of the object are considered out of reach if its
[checkReachIn()]{.code} method dislays anything at all.

------------------------------------------------------------------------

Thing now defines three new properties, **maxBulkHiddenIn**,
**maxBulkHiddenUnder** and **maxBulkHiddenBehind** that limit the amount
that can be but in, under or behind an object that ends up in hiddenIn,
hiddenUnder or hiddenBehind list. The corresponding methods
[getBulkHiddenIn]{.code}, [getBulkHiddenUnder]{.code} and
[getBulkHiddenBehind]{.code} return the total bulk of the items
currently contained in the corresponding lists.

------------------------------------------------------------------------

It\'s now legal to use the name of the lexicalParent instead of its
remapIn property when defining the objects a Key locks and unlocks in
the plausibleKeyList and actualKeyList properties of a Key. For example,
in the following definition the silver key will work as presumably
intended:

::: code
    cabinet: Fixture 'cabinet'
       remapIn: SubComponent
       {
          lockability = lockableWithKey
          isLocked = true
          isOpenable = true
        }
        
        remapOn: SubComponent {}
    ;

    silverKey: Key 'silver key'
       plausibleLockList = [cabinet]
       actualLockList = [cabinet]
    ;
:::

------------------------------------------------------------------------

[QDefaults.canReach(a, b)]{.code} has been amended to take account of
the checkReach() and checkReachIn() methods of the objects along the
containment path from a to b.

------------------------------------------------------------------------

Room and Region both now define two new methods:
**travelerLeaving(traveler, dest)** and **travelerEntering(traveler,
dest)**. These are both invoked just before travel actually takes place,
the first on the room or region that\'s about to be left, and the second
on the room or region that\'s about to be entered. The traveler
parameter is the actor doing the traveling, while dest is the room
that\'s about to be entered. These methods are only called on regions
when the starting room and destination rooms are in one or more regions
that are not common to them both.

------------------------------------------------------------------------

The checkRoomToHold() method (used by the TAKE action to enforce
inventory limits) now uses the new method getBulkCarried() instead of
getBulkWithin() as before; getBulkCarried() excludes items that are
being worn from the total, since these presumably do not contribute to
the total bulk carried in an actor\'s hands. The Doff action therefore
now also enforces checkRoomToHold() in its check() method.

------------------------------------------------------------------------

The default value of **disambigOrder** (a property of Mentionable) has
been changed to [(listOrder)]{.code}, and that of **disambigGroup** has
been changed from nil to 0 (zero). This means that the default behaviour
of the library will be to list items in disambiguation prompts in the
order of their listOrder property, which is probably what\'s most
frequently required when a listOrder has been specified.

------------------------------------------------------------------------

The attempt to implicitly open a closed door before travelling through
it has been moved from the travelVia() method to the execTravel() method
of the Door class. This means that the before travel notifications are
carried out before any attempt is made to open the door, which gives
better results when travel via the door is prohibited (by an NPC, for
example).

------------------------------------------------------------------------

The function [makeListStr(lst)]{.code} now sorts the objects in lst in
ascending order of their listOrder property before constructing the
string version of the list.

------------------------------------------------------------------------

The handling of the PURLOIN debugging verb has been changed so that
it\'s no longer possible to purloin objects that are fixed in place.
Purloining a fixed object causes it to become a component of the player
character (which probably isn\'t what\'s intended) and risks playing
havoc with the world model, so it seems better to rule it out. If
authors/testers really need to move fixed objects around this can be
done with EVAL obj.moveInto(wherever).

------------------------------------------------------------------------

The grammar for the EXAMINE verb has been extended so that it will look
accept LOOK X or L X as well as LOOK AT X or L AT X (plus the other
various valid forms).

------------------------------------------------------------------------

The Lever class now as an [isPushed]{.code} property as well as an
[isPulled]{.code} property. By default isPushed = !isPulled, but the
existence of the separate isPushed property makes it easier to decouple
the two if you want a lever that can also be in a position between the
two extremes (when both isPushed and isPulled would be nil). The verify
routine for dobjFor(Push) on the Lever thus now tests for isPushed
rather than !isPulled.

------------------------------------------------------------------------

GameMainDef.newGame() now sets gAction to a new Look action (the action
effectively about to be performed just before the first turn) and gActor
to the player character. This makes it more likely that any user startup
code that assumes the existence of an action context, such as using
[gMessageParams()]{.code} in gameMain.showIntro() or within the initial
room description, will work as expected rather than causing a run-time
error.

------------------------------------------------------------------------

The message parameter substitutions {a obj}, {an obj}, {a subj obj} and
{an subj obj} have been added; these work just like {the obj} and {the
subj obj} but use the indefinite article instead of the definite article
(or rather the aName property of obj rather than the theName property).

------------------------------------------------------------------------

Parser.defaultActions is now nil by default. This means that the parser
no longer tries to treat commands it doesn\'t understand as possible
noun phrases referring to the direct object of an EXAMINE command (or a
GO TO command for rooms). The behaviour during conversations is not
affected; any command the parser can\'t make sense of during a
conversation is still taken as a SAY command. The former behaviour (i.e.
with FOO treated as EXAMINE FOO) was causing inconsistent behaviour
(sometimes reporting \'You see no foo here\' and sometimes reporting \'I
don\'t understand that command\' with no apparent rhyme or reason).
Since it is not normal IF parser behaviour (to treat a command
consisting purely as a noun phrase as the target of an unstated EXAMINE
or other default command), it seems reasonable to turn this behaviour
off by default. Game authors who want this behaviour can restore it by
setting Parser.defaultActions to true (or could provide a custom command
to allow players to turn it on and off).

------------------------------------------------------------------------

The [StairwayUp]{.code}, [StairwayDown]{.code} and [Passage]{.code}
classes have been amended to respect the values ot the
[isClimbable]{.code}, [isClimbDownable]{.code} and
[isGoThroughable]{.code} properties respectively (these properties now
being true by default for each of these classes in turn). Previously
these classes overrid the verify() methods supplied by Thing so that
these properties were effectively ignored, which made the behaviour of
these classes inconsistent with what users might reasonably expect.

------------------------------------------------------------------------

Bug fixed in which a dropped object was moved into the actor\'s
outermost room instead of the immediate location. The new Thing property
**dropLocation** now defines where an object dropped in a location
should land. By default dropLocation is simply self.

------------------------------------------------------------------------

Bug fixed which could cause a run-time error when the player supplied
the missing noun of a command in response to a parser query.

------------------------------------------------------------------------

The bug that prevented a Doer from always matching a command
specification involving specific problems has re-emerged, and has once
again been fixed.

------------------------------------------------------------------------

Bug fixed in which the HTML entities &rdquo; and &ldquo; used to replace
double-quote marks in textual outpit lacked the terminating semilcolon.

------------------------------------------------------------------------

Bug fixed whereby the parser would ask a pointless disambiguation
question in response to a command involving one of a number of identical
objects; e.g. TAKE COIN would result in the message, \"Which to do mean,
a coin?\".

------------------------------------------------------------------------

Bug fixed whereby commands involving a specified number of objects would
sometimes result in the parser making perverse choices; for example, if
there were two coins on the floor and a third being carried by the
player, TAKE TWO COINS might be interpreted to mean taking one of the
coins on the floor plus the one the player character already holds,
instead of the two on the floor as the player presumably intended.

------------------------------------------------------------------------

Bug fixed whereby commands involving a specified number of objects would
result in the wrong error message if more objects were specified than
were available; for example TAKE FOUR COINS might result in \"You see no
four coins here\" instead of \"There aren\'t that many available.\"

------------------------------------------------------------------------

Various bugs fixed concerning the resolution of the pronouns \'you\' and
\'your\', including the bug that caused a crash when \'your\' was used
in a command and the failure of the parser to recognize that \'you\' and
\'your\' referred to the player character in contexts where this would
be the player\'s clear intention.

------------------------------------------------------------------------

Various bugs fixed concerning inappropriate or run-time-error-causing
error-messages when a command referred to something by its owner (e.g. X
BOB\'S COIN when Bob doesn\'t have a coin).

------------------------------------------------------------------------

\

## [Version 0.3]{#v0.3} (18 December 2012)

**Risk of incompatibility:** The Thing property **nothingThroughMsg**
has been renamed **lookThroughMsg**, which better reflects its function.
The default text of this message remains unchanged.

Similarly nothingInMsg, nothingUnderMsg and nothingBehindMsg have been
renamed lookInMsg, lookUnderMsg and lookBehindMsg.

------------------------------------------------------------------------

**Risk of incompatibility:** The Thing properties
**autoTakeOnLookUnder** and **autoTakeOnLookBehind** have been
abolished, and the behaviour of LOOK BEHIND and LOOK UNDER slightly
changed. Two new properties and three new methods have been introduced
instead. Tne new **autoTakeOnFindHidden** property determines whether an
object may be automatically taken when it\'s moved from a hiddenXXXX
list. The default value of autoTakeOnFindHidden is (isFixed), the idea
being that if we look in, under, or behind something fixed (like a pile
of junk or a piece of furniture) and there\'s nowhere else for the
objects discovered to go, we\'ll probably take them, but that if we look
under or behind something portable, like a rug or a blanket, we probably
move the rug or blanket a little to do so and leave the item discovered
where it notionally was all along (in the same location as the portable
item we\'ve just looked under/behind). The new property
**findHiddenDest** determines where an object is moved to from a
hiddenXXXX list (when there\'s no obvious container for it); by default
if autoTakeOnFindHidden is true, then findHiddenDest is gActor (the
actor who will take the items discovered), otherwise it\'s the location
of the object that\'s just been looked in/under/behind. These properties
are actually used in the three new methods **findHiddenIn()**,
**findHiddenUnder()**, and **findHiddenBehind()**.

The sequence of events with LOOK UNDER X is now as follows:

1.  If X has a contType of Under then this is the target object we\'ll
    work with.
2.  Otherwise, if it has an associated remapUnder object, we\'ll work
    with that.
3.  If the target object has a contType of Under then move everything
    from the hiddenUnder list to the target object and then list the
    contents of the target object as being underneath it (or say
    there\'s nothing under it if there\'s nothing there).
4.  Otherwise, if there\'s anything in the hiddenUnder list, call
    findHiddenUnder().
5.  Otherwise, say there\'s nothing there.

The findHiddenUnder() method then moves everything from the hiddenUnder
list to findHiddenDest and displays an appropriate message.

LOOK IN X and LOOK BEHIND X work in much the same way (except with
hiddenIn and hiddenBehind respectively and contTypes of In and Behind
respectively).

This may all seem a bit complicated, but it should provide reasonable
default behaviour most of the time, while being relatively easy to
customize for exceptional cases.

------------------------------------------------------------------------

A **hiddenIn** property has been added to Thing. It can be used in much
the same way as hiddenUnder or hiddenBehind now do. It can be used
either for objects in a container that won\'t be noticed until the
container is explicitly searched or for objects hidden in things like
piles of junk or haystacks that aren\'t containers in the normal sense.

------------------------------------------------------------------------

The action handling for ENTER has been decoupled from that for BOARD
(along with the vocabulary used to trigger these actions). ENTER now
handles getting inside something that has a contType of In. BOARD
handles getting on something that has a contType of On. The new
isEnterable flag determines whether an actor can get inside something
(the contType must also be In). Note that this does not effect the
Enterable class (which is used for things like buildings which can be
entered by traveling to a new room representing their interior), but
that the Booth class is now defined with isEnterable = true rather than
isBoardable = true.

------------------------------------------------------------------------

A number of methods (such as lookAroundWithin() and methods it calls)
have been moved from Room to Thing. This is to allow a Thing
(particularly a closed Booth) to describe its interior properly when the
player character is contained within it. Since Room inherits from Thing,
this should not affect any existing code.

------------------------------------------------------------------------

In several places getOutermostRoom (in particular
gPlayerChar.getOutermostRoom) has been replaced with
outermostVisibleParent() (e.g. in the implementation of the LOOK
command, and in other places where a look around is performed) to ensure
that the right description is presented when looking around from within
a closed container (such as a booth).

------------------------------------------------------------------------

Thing.statusName(actor) has been amended to give sensible results when
looking around from within a closed container.

------------------------------------------------------------------------

A new **interiorDesc** property has been added to Thing. This is used as
the room description when looking around from inside a closed container.

------------------------------------------------------------------------

The touchObj precondition and the QDefaults.canReach() method have been
changed so that if the object that one is trying to reach is the object
that\'s blocking the reach path, it\'s now considered touchable. This is
to allow, for example, an actor to open a closed container from the
inside (previously you would have got a message like \"You can\'t reach
the large wooden box through the large wooden box.\")

------------------------------------------------------------------------

The default value of Thing.isOpen has been changed from nil to
(!isOpenable). This makes the definition of a simple container (by
adding contType = In) just a little easier and more intuitive, and so is
probably the better default case. Note that this doesn\'t effect the
Container class (which already defines isOpen = true) or the
OpenableContainer class (which defines isOpen = nil). The isOpen
property of Door is now explicitly nil by default to ensure that doors
normally start out closed.

------------------------------------------------------------------------

The handling of the INVENTORY command has been changed to make use of
inventoryLister. inventoryLister has been changed to optionally allow
the display of additional information (such as \'providing light\')
after the names of items in an inventory list, and to optionally display
the contents of items in an inventory list (e.g. \'You are carrying a
big bag (in which is a blue ball). \'). To facilitate the latter a new
subLister has been created and a new buildList() method added to the
Lister class. The buildList(lst) method returns a single-quoted string
containing what show(list, 0) would have displayed, minus the
terminating paragraph break.

------------------------------------------------------------------------

Two new properties **isProminentSmell** and **isProminentNoise** have
been added to Thing, both true by default. The smellDesc and listenDesc
properties of an object are only displayed in response to an
*intransitive* SMELL or LISTEN command respectively if these properties
are true. These properties have no effect on the transitive SMELL
SOMETHING and LISTEN TO SOMETHING commands. This allows game authors to
exclude items being listed in response to an intransitve LISTEN or SMELL
while still making them respond to being explicitly listened to or
smelled.

------------------------------------------------------------------------

A number of redundant methods (that aren\'t actually used anywhere) have
been removed, such as Thing.lookAround(pov). These are generally methods
that were defined in Mercury or adv3 but which are not needed in
adv3Lite, either because they have no function in adv3Lite at all (such
as some of the methods and properties relating to senseCache on
libGlobal) or because adv3Lite defines its own version to perform the
appropriate function (e.g. lookAround(pov) is not needed because
adv3Lite defines lookAroundWithin()).

------------------------------------------------------------------------

The Actor class now defines [contType = Carrier]{.code} by default (as
it should have done all along).

------------------------------------------------------------------------

The Thing class now has a new [display(prop)]{.code} method, where prop
is a property pointer. If prop contains a double-quoted string or a
method, the display() method simply calls [self.(prop)]{.code}. If prop
contains a single-quoted string or integer, display calls
[say(self.(prop))]{.code}. This simplifies the creation of code that
will display a text property correctly whether it has been defines as a
single-quoted string, a double-quoted string and a method, and several
routines have been adapted to take advantage of it.

------------------------------------------------------------------------

It\'s now possible to prevent the use of ALL (e.g. EXAMINE ALL) with all
but basic inventory handling verbs (TAKE, DROP, PUT and DOFF). Some
people feel that the use of ALL with all the other verbs (EXAMINE ALL,
SHOW ALL TO FRED etc.) allows a bit too much of a blunderbus approach to
playing Interactive Fiction. If you wish to disable it, you can define
the new **allVerbsAllowAll** property on gameMain to be nil (the default
is true). You can also allow and disallow ALL for individual actions by
setting their **allowAll** property to true or nil (which takes
precedence over the allVerbsAllowAll setting).

------------------------------------------------------------------------

The library now defines SIT ON and LIE ON actions. The default behaviour
is simply to BOARD the object in question, since avd3Lite does not
provide any support for postures. Games can override SIT ON and LIE ON
to do something different if they need to. STAND IN, SIT IN and LIE IN
actions have also been added; by default they\'re all equivalent to
ENTER (although again this can be overridden). If you want SIT ON & SIT
IN (or LIE ON and LIE IN) to act equivalently, e.g. for a chair or bed,
define the chair or bed as a Surface with [isBoardable = true]{.code}and
[dobjFor(Enter) asDobjFor(Board)]{.code}.

------------------------------------------------------------------------

The library now suppresses the default \"You see nothing special about
the whatever\" description of an object when the object has any
state-specific information to add to its description. (This only makes a
difference to objects where the author hasn\'t explicitly defined the
desc property).

------------------------------------------------------------------------

If the actor is in a \"NestedRoom\" (i.e. a Container or Surface rather
than a Room) then the command OUT now takes the actor out of the
actor\'s immediate location; previously it was taken to be a command to
leave the Room.

------------------------------------------------------------------------

Bug fixed whereby at several places in the library the non-existent
property isPlural was referenced instead of the correct property,
plural. Note however that this may change in a future release where
\'is\' may be prefixed to several property names (plural, transparent
etc.) to provide a more consistent naming scheme across the library.

------------------------------------------------------------------------

Bug fixed whereby opening a container caused all its contents to be
listed, instead of only its listable contents.

------------------------------------------------------------------------

Bug fixed that could prevent a Doer properly matching certain TI Actions
for which resolveIobjFirst = true (since this caused the Doer matching
mechanism to see the direct and indirect objects in reverse order).

------------------------------------------------------------------------

Bug fixed whereby a light source in a closed transparent container
failed to illuminate a room.

------------------------------------------------------------------------

Bug fixed whereby when an action was applied to multiple objects and the
name of each object was announced, any implied action reports came
before the name of the object instead of after.

------------------------------------------------------------------------

Bug fixed whereby a run-time error could occur when verifying the second
object of a TIAction when the verify routine depended on the first
object having been identified but the first object had been selected
without any need for disambiguation.

------------------------------------------------------------------------

Bug fixed whereby an actor getting off something that had an associated
container attached (a table with a drawer, say) would cause an implied
action opening the associated container.

------------------------------------------------------------------------

\

## [Version 0.2]{#v0.2} (November 2012)

Facilities added to allow better control over the way items are
displayed in room descriptions. The **specialDescOrder** property can
now be used to control the order in which specialDescs are shown. The
**specialDescBeforeContents** property can be used to show whether an
item\'s specialDesc should be shown before or after the listing of
miscellaneous items in the the room description. The \<\<list of\>\>
\<\<list of is\>\> and \<\<is list of\>\> embedded expressions can be
used to customize the way an item\'s contents are listed in a room
description. The \<\<mention a\>\> and \<\<mention the\>\> embedded
expressions can be used to have one item in a room description listing
mention another (and thereby suppress the subsequent listing of the same
item). For full details see the new section on [Room
Descriptions](roomdesc.htm).

------------------------------------------------------------------------

The new **SenseRegion** class can be used to define regions with sensory
connections, that is regions where it is possible to see (and possibly
smell and hear) ojects in one room from another. For details see the new
[SenseRegion](senseregion.htm) section of the manual.

------------------------------------------------------------------------

It is now possible to compile adv3Lite games for use with the
[WebUI](webui.htm) (i.e. for playing on-line via a browser).

------------------------------------------------------------------------

Mainly to support the WebUI, a number of
[inputManager](webui.htm#inputmanager) methods have been implemented
(which are analogous to their adv3 counterparts). It is recommended that
you always use these rather than the interpreter console i/o function
equivalents. Note that in the adv3Lite version of these methods, there
is no need to supply any arguments to inputManager.getInputLine() or
inputManager.getKey() (since adv3Lite does not support real-time
processing).

------------------------------------------------------------------------

The Parser\'s [DefaultAction](actionoverview.htm#default) (for a command
that consists purely of a noun) has been changed to the new
ExamineOrGoToAction. This works exactly like the Examine action unless
(a) the noun entered by the player is a room known to the player
character; (b) the player character is not already in that room; and (c)
the pathfind module is included in the build. If all these three
conditions are fulfilled the ExamineOrGoTo action behaves like a GoTo
action, thereby allowing the player to navigate the map just by entering
the name of the location s/he wants the player character to head
towards.

------------------------------------------------------------------------

The default value of **GameMainDef.storeWholeObjectTable** has been
changed to true, since this is the safer option, and the memory
requirement of storing the complete object table is unlikely to be an
issue on a modern computer. If it is set to nil an additional setting
now comes into effect: **objTablePreinit.lookInMethods**. If this is nil
(the default), then objTablePreinit won\'t attempt to execute code (i.e.
methods) to find conversation [tags](tags.htm) indicating objects it
needs to store in the object table; this is the safer option since
executing methods out of context at preinit can easily cause run-time
errors. For now, lookInMethods can be set to true to restore the
previous behaviour, but this should be regarded as provisionally
deprecated.

------------------------------------------------------------------------

The library preinit now marks the player character\'s immediate contents
as known to the player character. This avoids the otherwise seemingly
odd situation whereby a player familiar with the game tries to refer to
something the player character is holding in conversation and it\'s not
recognized by the parser as a valid topic (because the player has not
yet taken inventory or performed any other action that would normally
mark what the player character is holding as seen or known).

------------------------------------------------------------------------

A minor change has been made to the way the [hiddenUnder and
hiddenBehind](thing.htm#hidden) properties work. The new thing
properties **autoTakeOnLookUnder** and **autoTakeOnLookBehind** allow
you to specify that anything hidden under or behind the object in
question should be taken by the actor when s/he looks under or behind
it. If a look behind or look command action results in one or more
objects being moved into the location of the object that has just been
looked under/behind, then the message displayed now makes it clearer
that the objects that have just been moved have been left in plain sight
(rather than remaining concealed under or behind something else).

------------------------------------------------------------------------

An objOpen PreCondition has been added. This isn\'t (currently) used in
the library (which uses containerOpen) but might prove useful to some
game code.

------------------------------------------------------------------------

The documentation of the [Thing](thing.htm) class now explains the use
of the **owner** and **ownsContents** properties. These properties were
present before but weren\'t previously documented in the manual.

------------------------------------------------------------------------

The setRevealed(tag) method of conversationManager so that the
notification of other actors when a \<.revealed\> tag now only takes
place when there\'s a respondingActor (i.e., when the \<.revealed\> tag
is used in conversation). This corrects a bug whereby using a
\<.reveal\> tag outside a conversation (e.g. to have an object
description set a flag to trigger some other event) would cause a
run-time error.

------------------------------------------------------------------------

The message \"You find nothing of interest under the whatever\" has been
corrected (it did not display correctly before).

------------------------------------------------------------------------

Bug fixed whereby the player character\'s enclosing room was declared to
be not visible when attempting to examine it.

------------------------------------------------------------------------

Bug fixed whereby the default action (i.e. entering a noun without a
verb as a command) was taken to be a conversational command just after
the current interlocutor had gone out of scope.

------------------------------------------------------------------------

Bug fixed whereby using a \<.convnode\> tag while a Conversation Node is
active leaves the first Conversation Node still active (while activating
the second one as well). A \<.convnode\> tag now overwrites the effect
of any \<.convnode\> tag issued on a previous turn.

------------------------------------------------------------------------

Bug fixed in which the name of canEndConversation() method of ActorState
was mis-spelled, so that ActorStates always tried to prevent
conversations ending by default (since the non-existent method was
deemed to be returning nil).

------------------------------------------------------------------------

Bugs fixed whereby a conversational command that triggered an implicit
greeting would display a spurious \"The x does not respond\" message
when no HelloTopic was found, or when a conversation was ended
implicitly and no ByeTopic was found.

------------------------------------------------------------------------

Bugs fixed whereby HELLO and BYE commands (not explicitly directed to a
specific actor) might either result in no response at all, or the
response \"The \[cobj\] does not respond\" (where \[cobj\] should have
been the name of the actor in question).

------------------------------------------------------------------------

Bug fixed in which the condition for deciding whether a SimpleAttachable
should be listed separately was the wrong way round.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Final Moves](final.htm){.nav} \>
Change Log\
[[*Prev:* Conclusion](conclusion.htm){.nav}    [*Next:*
Index](manual_idx.html){.nav}     ]{.navnp}
:::

\>
