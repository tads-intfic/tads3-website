---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="action.html" class="nav">Actions</a> \> Overview  
<span class="navnp"><a href="action.html" class="nav"><em>Prev:</em> Actions</a>
    <a href="actres.html" class="nav"><em>Next:</em> Action Results</a>
    </span>





# Overview

So far we have seen how to populate the game world with a wide variety
of objects, but not how to alter their default behaviour. Yet in a work
of Interactive Fiction it's the non-default behaviour and non-standard
responses that make the game interesting. In this part we shall look at
how to customize the way actions behave and objects respond to them, and
how to define new actions. Game authors familiar with the adv3 library
will find the adv3Lite way of doing things familiar but not quite the
same.

<span id="taxonomy"></span>

## A Taxonomy of Actions

There are broadly three types of action common in Interactive Fiction.
Intransitive actions consisting of a verb and no object (such as JUMP),
transitive actions involving a verb and one object such as TAKE RED
BALL, and transitive actions involving a verb and two objects such as
PUT RED BALL IN BOX. The first object (the red ball in both cases) is
referred to as the *direct object*, often abbreviated to dobj in various
variable and property names. For example, gDobj refers to the current
direct object of the current action. The second object, where there is
one, is referred to the *indirect object*, often abbreviated to iobj (so
that, for example, gIobj refers to the current indirect object of the
current action). (Note, the Mercury parser also provides support for
three-object commands like PUT THE PIN IN THE SLOT WITH THE TWEEZERS,
but few games are likely to need this, so it is not fully supported in
the standard adv3Lite library; however, it can be supported if you
include the [TIAAction](../../extensions/docs/tiaaction.html) extension).

The grammatical form of a command can, however, sometimes be a bit
misleading when it comes to identifying the kind of action. A command
like GO NORTH may look like a transitive action with NORTH as its direct
object, but it fact it's a TravelAction without a direct object.
Similarly a command like THINK ABOUT NAPOLEON is a TopicAction, in this
contect Napoleon is the *topic* associated with the command, not its
direct object. Similarly in commands like ASK BOB ABOUT NAPOLEON or LOOK
UP NAPOLEON IN DICTIONARY, Napoleon in the topic, not the indirect
object (in the first case) or the direct object (in the second). In
these last two commands, BOB and DICTIONARY are the direct objects, and
there's no indirect object (at least, not in the normal sense). In
general, the direct and indirect objects of a command have to be objects
physically present in the game world, not just things or topics being
thought about or talked about.

This distinction is important when we come to consider the various
classes of Action implemented in the adv3Lite library:

- **IAction** An intransitive action, one which takes no objects (e.g.
  JUMP).
- **TAction** A transitive action that takes one object (e.g. TAKE
  BALL).
- **TIAction** A transitive action that takes two objects (e.g. PUT BALL
  IN BOX).
- **TopicAction** An action that takes one topic (e.g. THINK ABOUT
  DEMOCRACY).
- **TopicTAction** An action that takes one topic and a direct object
  (e.g. ASK LINCOLN ABOUT DEMOCRACY).
- **LiteralAction** An action that takes one literal string (e.g. WRITE
  FOO).
- **LiteralTAction** An action that takes a literal string and a direct
  object (e.g. TURN DIAL TO PLAY).
- **NumericAction** An action that takes a single number (e.g. FOOTNOTE
  4).
- **NumericTAction** An action that takes a single number and a direct
  object (e.g. DIAL 83272 ON PHONE).
- **TravelAction** An action that takes a direction and is a command to
  go somewhere (e.g. GO NORTH or just EAST).
- **SystemAction** An action that carries out system commands such as
  SAVE and QUIT.

The important thing to note here is that the behaviour of actions that
take one or more physical object (TAction, TIAction, TopicTAction,
LiteralTAction and NumericTAction) is normally defined and customized on
their direct (and if present) indirect objects, while the behaviour of
other kinds of action has to be defined and customized on the action
object itself.

<span id="actioncycle"></span>

## The Action Cycle in Brief

What happens when a player enters a command? In brief, and with some
simplifications the cycle goes like this:

1.  The library displays a command prompt.
2.  The player enters a command (and presses return to confirm it).
3.  Any [StringPreparsers](stringpreparser.t) that have been defined get
    a chance to alter the text of the command.
4.  The Parser object parses the player's input by matching it to an
    action and (if there are any objects) resolving the objects.
5.  In the course of parsing the player's input the Parser creates a
    Command object which handles the execution of the command.
6.  The Command object starts by noting some initial values (such as
    installing itself in the gCommand pseudo-variable).
7.  The Command object selects the [Doer](doer.html) that's the best
    match to the command and calls its exec(curCmd) method once for each
    set of objects involved in the command (if the command involves
    multiple direct objects, a Doer's exec() method will be called once
    for each direct object).
8.  By default the Doer checks whether the action is to be performed by
    the player character or is a command directed at someone or
    something else. In the latter case it calls the handleCommand()
    method of the recipient of the command. In the former it calls the
    exec() method of the appropriate action.
9.  The exec() method of the action does some housekeeping and then
    calls the execAction method.
10. If the action has a direct object the execAction() works through the
    appropriate methods of that object (which will be described in the
    section on action stages). If the action has an indirect object as
    well, it calls the appropriate methods on all its objects. If it has
    no objects, the execAction() handles the action in its entirety.
11. The Command then calls the action's reportAction() method, which in
    turn calls the appropriate report method on the last direct object
    involved in the command; this allows the Command object (via the
    appropriate action) to display a summary of the action just
    completed (e.g. 'You take the red ball, the blue pen and the
    paperclip.').
12. The Command then calls the action's afterReport() method, which
    displays any additional reports created during the course of the
    action through the use of the reportAfter() macro.
13. The Command finally calls the action's afterAction() method, which
    does nothing if the action is a SystemAction, but which otherwise
    carries out the following steps:
    1.  Announces the onset of darkness, or displays a room description,
        if the player character's location has just lost or gained
        illumination.
    2.  Calls roomAfterAction() on the player's current location and
        regionAfterAction() on all the regions that location is in.
    3.  Calls afterAction() on every object in scope.
    4.  Calls roomDaemon() on the player's current location.
    5.  If the events.t module is included, calls
        eventManager.executeTurn() to execute any current Fuses and
        Daemons.
    6.  Adds one to the turn count.
14. The status line display is updated.
15. If the score.t module is present, the scoreNotifier is called to
    report on any changes in score.
16. If the events.t module is present, any current PromptDaemons are now
    executed.
17. Return to step 1 to execute the next command.

The above is something of an over-simplification. For example if the
player enters multiple commands on the one command line then the Parser
generates multiple Command objects to deal with each in turn. But the
above summary will do as a first approximation, so you can get a rough
idea of how the action processing cycle all fits together. Don't worry
if it doesn't all make sense yet; the relevant details will be explained
in the sections that follow. Three further points may be worth a brief
explanation at this stage however.

First, the mechanism of Parser, Commands, Doers and Actions may seem a
bit over-complicated (they are in fact the mechanism taken over from
Mercury code), but the various parts do all serve a purpose. In
particular, one player command is handled by one Command object, but may
involve many Actions, as one action passes control to another either
temporarily (as a nested or implicit action) or permanently (as a
remapped or replacement action). The Command object thus serves to
co-ordinate the entire command over what may be a number of actions.

Secondly, at first sight the [Doer](doer.html) may not seem to do very
much in this scheme of things. By default it does very little except
decide whether the command is to be handled by the appropriate Action
(if the actor is the player character) or some other object (in the case
of a command directed to another object or actor). But Doers can do far
more than this; they can intervene in special cases to interrupt the
normal course of events and do something quite different, or simply stop
the action in its tracks. In this way they are quite like instead rules
in Inform 7 (in more ways than one, as we shall come to see when we look
at them in more detail), and can perform a very similar function.

Thirdly, the most common way of customizing responses to actions is by
overriding the appropriate methods on the objects they involve, and this
is therefore what we shall look at in the next section.

  
<span id="variables"></span>

## Global Action Variables

When an action is in progress, certain pseudo-global variables (actually
macros that evaluate to the relevant object properties) are available to
be queried (and sometimes set). You will often need to refer to these.
The main ones are:

- **gCommand**: the current Command object.
- **gAction**: the current Action object.
- **gActor**: the current Actor (which is usually but not necessarily
  gPlayerChar).
- **gDobj**: the current direct object of gAction (if there is one).
- **gIobj**: the current indirect object of gAction (if there is one).
- **gLiteral**: the text of the current literal object (if there is
  one). E.g. in the command TURN DIAL TO OFF gLiteral would be 'OFF'.
- **gNumber**: the numeric value of the current numeric object (if there
  is one). E.g. in the command FOOTNOTE 4 gNumber would be 4. For a
  LiteralAction or LiteralTAction, gNumber gives the numeric equivalent
  of gLiteral (if there is one) or nil if the gLiteral string cannot be
  interpreted as a number.
- **gTopic**: the current [ResolvedTopic](topicact.html#resolvedtopic)
  (if there is one, i.e. if the current action is a TopicAction or a
  TopicTAction).
- **gLocation**: the player character's current location.
- **gRoom**: the player character's current room (which is often the
  same as his/her current location, but need not be if the player char
  is in some other object).

Note that since a Command may involve more than one action (where there
implicit actions, nested actions, remapped actions and so forth),
gCommand and gAction may not be in agreement. The current Command
(gCommand) had its own ideas about the current action, actor, direct
object and indirect object (gCommand.action, gCommand.actor,
gCommand.dobj, gCommand.iobj) which should usually agree with the values
of the pseudo-global variables listed above, but may not always do so if
the original action gets transformed into another.

  
<span id="macros"></span>

## Other Useful Action Macros

It is sometimes useful to be able to distinguish exactly what the player
entered. For example, you may want the responses to HIT JIM, KICK JIM
and KILL JIM to be different, even though they'd all trigger the Attack
action. To help with this kind of situation the library defines a
further three macros, each of which can be used to help ascertain what
the player actually typed.

- **gVerbWord**: This returns the first word of the command that the
  player entered, e.g. 'hit', 'kick', 'attack' or 'kill'. Often that's
  enough to determine what you want the action to do, assuming you want
  it to do something different in each case.
- **gVerbPhrase**: This returns the complete command, with the actual
  object names replaced by place-holders: '(dobj)' for the direct object
  and '(iobj)' for the indirect object. So if the command were ATTACK
  BIG JIM WITH SHARP SWORD, `gVerbPhrase` would
  be 'attack (dobj) with (iobj)'. This can provide additional useful
  information if the meaning of the command depends on more than one
  word (e.g. PUT ON versus PUT IN).
- **gCommandToks**: This returns the player's entire command as a list
  of tokens, e.g. \['attack', 'big', 'jim', 'with', 'sharp', 'sword'\]

  

## <span id="default">The Default Action</span>

When a player enters a command the parser cannot resolve to an action
because it cannot find a verb in the command line, it next attempts to
interpret the command line as as the single object of the default
action. What the default action is depends on the context. It also
depends on the setting of
`Parser.defaultActions`, which is true by
default.

If the player character is not currently conversing with anyone, and if
`Parser.defaultActions` is true, the default
action is whatever is defined as such in the DefaultAction property of
Parser. Normally this is ExamineOrGoTo, which normally behaves just like
Examine, so that, for example, the command ME would be interpreted as
EXAMINE ME. If there's nothing in scope that matches the command line
interpreted as an object, the command will of course fail ('You see no
foo here'). If, however, the player enters the name of a room that's
known to the player character, and the player character is not in that
room already, and the pathfind module is present, then the command will
be treated as a GoTo command; so, for example KITCHEN might be handled
as GO TO KITCHEN. This allows the player to navigate the map by simply
entering the name of the room s/he wants the player character to head
for.

If the player character is currently conversing with another character,
then a command without an explicit verb is treated as the topic of a SAY
command; i.e. WHATEVER is treated as SAY WHATEVER if WHATEVER doesn't
make sense as an ordinary command. This takes place regardless of the
value of `Parser.defaultActions`, since it's
vital to the conversation system. (For further details about what this
means, see under [SayTopic](specialtopic.html#saytopic) below).

------------------------------------------------------------------------



*adv3Lite Library Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="action.html" class="nav">Actions</a> \> Overview  
<span class="navnp"><a href="action.html" class="nav"><em>Prev:</em> Actions</a>
    <a href="actres.html" class="nav"><em>Next:</em> Action Results</a>
    </span>




