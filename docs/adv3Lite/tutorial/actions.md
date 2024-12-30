::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Cockpit
Controls](cockpit.htm){.nav} \> Defining Actions\
[[*Prev:* Furnishing the Cockpit](furnishing.htm){.nav}     [*Next:*
Responding to Actions](responding.htm){.nav}     ]{.navnp}
:::

::: main
# Defining Actions

The descriptions of the control column and the thrust lever clearly
suggest that these items can be pushed forward or pulled back, while
that of the wheel suggests it can be turned to port or starboard.
Players are therefore very likely to try commands like PUSH STICK
FORWARD or TURN WHEEL TO PORT, but at the moment the game won\'t
understand these commands. Our next task is to ensure that it does.
We\'ll start with PUSH FORWARD and PULL BACK, since this is the easier
part of the task.

## New Grammar for Old Actions

Although the descriptions of the stick and the thrust lever both suggest
commands of the form PUSH STICK FORWARD and PULL LEVER BACK, there\'s
really no reason why these shouldn\'t behave just the same as PUSH STICK
and PULL LEVER. So we don\'t really need any new *actions* for either of
these cases, we just need to add new ways in which the player can phrase
commands that trigger the existing actions. There are basically two ways
we can do this, and though there\'s no reason to handle PULL and PUSH
differently here, we\'ll use one method on PUSH and the other on PULL
just to illustrate both ways of doing things. We\'ll start with the more
difficult way on PUSH and then illustrate the easier way on PULL.

Let\'s suppose we want PUSH X, PUSH X FORWARD and PUSH FORWARD ON X to
all do the same thing. One way to do this is to define a new
**VerbRule** that recognizes PUSH X FORWARD and PUSH FORWARD ON X and
makes either trigger the Push action. This is what it might look like:

::: code
    VerbRule(PushForward)
        'push' multiDobj 'forward'
        | 'push' 'forward' 'on' multiDobj
        : VerbProduction
        action = Push
        verbPhrase = 'push/pushing forward (what)'
        missingQ = 'what do you want to push forward'
    ;
:::

Let\'s take this piece by piece. First we begin our specification of the
new grammar for the Push action with [VerbRule(PushForward)]{.code}.
[VerbRule()]{.code} tells the compiler we\'re defining some new grammar
for an action. [PushForward]{.code} is an arbitrary tag that\'s used to
identify this VerbRule. It could have been anything we liked, so long as
it\'s not something already used to identify another VerbRule (each
VerbRule tag has to be unique), but it helps make our game code more
readable if we use something meaningful.

The next part of the definition specifies the grammar that triggers this
rule, in other words what the player has to type in order to match this
VerbRule. Here it\'s specified as [\'push\' multiDobj \'forward\' \|
\'push\' \'forward\' \'on\' multiDobj]{.code} The vertical bar is simply
used to separate options, so this is equivalent to saying that the
VerbRule will be matched either by [\'push\' multiDobj
\'forward\']{.code} or by [\'push\' \'forward\' \'on\'
multiDobj]{.code}. In both cases [multiDobj]{.code} is a placeholder for
the names of one or more direct objects (the thing or things to be
pushed) in the player\'s command. If we wanted to restrict the player to
pushing one thing at a time we could specify [singleDobj]{.code} here,
but since the standard VerbRule for Push allows multiple direct objects,
we may as well do the same here. For the rest, the strings in
single-quotes (\'push\', \'forward\' and \'on\') represent what the
player must actually type at this point in the command; although we
specify them in lower case, the player can use either upper case or
lower case or a mixture of the two.

The next line, [: VerbProduction]{.code}, simply defines the VerbRule as
being of the VerbProduction class. This will be true of every VerbRule
you ever define.

This is followed by [action = Push]{.code}. This defines which action is
triggered by a command that matches this VerbRule. In this case we want
to use the existing Push action.

The next line, [verbPhrase = \'push/pushing forward (what)\']{.code}, is
used by the library to construct messages like \'first pushing forward
the stick\' or \'first trying to push the stick\'. Even if you don\'t
think your game will ever use such messages, you should always define
this property just in case, otherwise you risk getting run-time errors
further down the line.

Finally, [missingQ = \'what do you want to push forward\']{.code}
defines the text of the question the parser should ask if the player
neglects to supply a direct object when entering this command. (In fact,
in this case, the question will never be asked, since if the player
types PUSH FORWARD ON the parser will respond with \"You see no forward
on here\" because it interprets FORWARD ON as the direct object of a
PUSH command, but in principle this property should always be defined).

We\'ll now handle PULL BACK the easier way, by modifying an existing
VerbRule:

::: code
    modify VerbRule(Pull)
        ('pull' multiDobj ( | 'back')) |
        'pull' 'back' 'on' multiDobj    
        : 
    ;
:::

Note how we end this definition with a colon, and then the terminating
semicolon. This is just a syntactic quirk of how a VerbRule is modified
in TADS 3, but in essence what we\'re doing is modifying an object, so
we don\'t specify its class list again (VerbProduction) and we\'re
leaving most of its properties (action, verbPhrase and missingQ)
unchanged. What we are doing is replacing the existing grammar
specification with one of our own: [(\'pull\' multiDobj ( \| \'back\'))
\| \'pull\' \'back\' \'on\' multiDobj]{.code}. This follows exactly the
same principles as before, except that we\'re using parentheses to group
the various alternatives. The group [( \| \'back\')]{.code} can match
either \'back\' or nothing at all, so that [(\'pull\' multiDobj ( \|
\'back\'))]{.code} can match either PULL X or PULL X BACK. The second
half of the specification matches PULL BACK ON X.

Whether you prefer to define a new VerbRule or modify an existing one is
generally up to you. Modifying an existing rule is usually easier, but
there may be cases where doing so would result in such a tangle of
bracketed alternatives that defining a new VerbRule might seem simpler.

\

## Defining New Actions

Although the library defines a Turn action (e.g. TURN WHEEL) and a
TurnTo action for dials (e.g. TURN DIAL TO 23), it doesn\'t define
actions corresponding to TURN WHEEL LEFT or TURN WHEEL TO STARBOARD, so
we now need to define these ourselves.

The first part of this task is to define a pair of objects representing
the two new actions, which we\'ll call TurnLeft and TurnRight (by
convention the names of action objects in adv3Lite start with a capital
letter, even though they\'re objects and not classes). Both actions will
take a direct object (the wheel, principally), so they need to be of the
TAction class (think of TAction as meaning \'Transitive Action\' --- an
action that takes an object). The library provides a DefineTAction()
macro that makes it simple to define such objects:

::: code
    DefineTAction(TurnLeft)
    ;

    DefineTAction(TurnRight)
    ;
:::

The next job is to define the grammar that will trigger these actions.
We\'ve already seen how to do this, using the VerbRule construct:

::: code
    VerbRule(TurnLeft)
        'turn' singleDobj (| 'to' (| 'the')) ('left' | 'port')
        : VerbProduction
        action = TurnLeft
        verbPhrase = 'turn/turning (what) left'
        missinqQ = 'what do you want to turn left'
        priority = 60
    ;

    VerbRule(TurnRight)
        'turn' singleDobj (| 'to' (| 'the')) ('right' | 'starboard')
        : VerbProduction
        action = TurnRight
        verbPhrase = 'turn/turning (what) right'
        missinqQ = 'what do you want to turn right'
        priority = 60
    ;
:::

The one extra thing we\'ve added here to both definitions is [priority =
60]{.code}. This is to ensure that both these VerbRules will take
priority over the VerbRule for TURN X TO *setting*, where *setting* is a
literal value that could be anything, including \'left\', \'right\',
\'port\' or \'starboard\'. The default priority for a VerbRule is 50, so
by giving these two VerbRules a priority of 60 we\'re ensuring that
they\'re matched in preference to [VerbRule(TurnTo)]{.code} for commands
like TURN WHEEL TO PORT.

If you compile and run the game now, you\'ll find that it now accepts
commands like TURN WHEEL TO PORT or TURN WHEEL RIGHT (provided the wheel
is in scope) but that absolutely nothing happens in response. That\'s
because we haven\'t yet defined what we want either of these commands to
do. It\'s no good starting by defining what we want them to do on the
wheel, since players might try to use them on any object in the game.
Our next job, therefore, is to define what we want them to do on Thing.
We can then customize the response on particular objects (such as the
wheel) where we want the commands to do something special.

To do this, we need to modify the Thing class and then specify the
handling of the TurnLeft and TurnRight actions in blocks marked
[dobjFor(TurnLeft)]{.code} and [dobjFor(TurnRight)]{.code}, meaning
\"What do I do when I\'m the direct object of TurnLeft or TurnRight
command?\". All we need is something like this:

::: code
    modify Thing
        dobjFor(TurnLeft)
        {
            preCond = [touchObj]
            
            verify()
            {
                if(!isTurnable)
                    illogical(cannotTurnMsg);
            }
                    
            report()
            {
                "Turning <<gActionListStr>> to the left has no effect. ";
            }
            
        }
        
        dobjFor(TurnRight)
        {
            preCond = [touchObj]
            
            verify()
            {
                if(!isTurnable)
                    illogical(cannotTurnMsg);
            }
            
            report()
            {
                "Turning <<gActionListStr>> to the right has no effect. ";
            }
            
        }
    ;
:::

Again, let\'s work through this step by step.

First, we define [preCond = \[touchObj\]]{.code}. [preCond]{.code} is
short for preCondition. The idea is that actions often require one or
more preconditions to be fulfilled before they can be carried out. A
door must be open before we can go through it, a book must be visible
before we can read it, we must be holding a ball before we can put it
anywhere, and so on. Since such preconditions are so common, it would be
tedious to have to code them every single time, so instead the library
provides a number of ready-made preconditions prepackaged as
PreCondition objects. One of these is [touchObj]{.code}, which means the
actor must be able to touch the object in order to carry out the action.
This is obviously needed here, since you clearly can\'t turn anything
one way or another without touching it. We could list more than one
PreCondition here if we needed to, but for these two actions
[touchObj]{.code} will suffice.

The next piece of code is the verify() method in each section:

::: code
            verify()
            {
                if(!isTurnable)
                    illogical(cannotTurnMsg);
            }
:::

As has been intimated previously, verify() methods perform two
functions:

1.  Guiding the parser\'s choice of objects in cases of ambiguity;
2.  Ruling out actions that are obviously impossible or inappropriate.

These two functions are handled together because if a given action on a
given object is obviously impossible or inappropriate, then that object
will be a poor choice for the parser to select. For example, if there\'s
a green wheel and a green mountain, we\'d like TURN GREEN to select the
wheel rather than the mountain, which is what would happen if the
wheel\'s verify() method allowed the Turn action to go ahead and the
mountain\'s didn\'t.

The library already defines [isTurnable]{.code} and
[cannotTurnMsg]{.code} properties for use with the Turn action, so we
may as well use them here, but if they didn\'t exist it would be a good
idea to invent them, for example if we\'d implementing a Cross verb (as
in CROSS BRIDGE or CROSS RIVER):

::: code
    modify Thing
        dobjFor(Cross)
        {
            preCond = [touchObj]
            verify()
            {
                if(!isCrossable)
                   illogical(cannotCrossMsg);
            }
        }
        
        isCrossable = nil
        cannotCrossMsg = '{The subj dobj} {is} not something {i} {can} cross. '
    ;
:::

The advantage of this coding pattern is that I don\'t then need to
override the verify() method either to make something crossable or to
customize the message refusing to allow it; e.g. I could just define
[cannotCrossMsg = \'It\\\'s flowing far too fast; you\\\'d drown if you
tried\']{.code} on a river object. This becomes particularly helpful for
more complex verify() methods that need to check for more conditions,
such as not allowing an object to be put inside itself or anything it
already contains, or not allowing an actor to pick up something he\'s
standing on.

The final section we\'ve defined on the modified Thing for TurnLeft is:

::: code
            report()
            {
                "Turning <<gActionListStr>> to the left has no effect. ";
            }
:::

What this does is probably fairly obvious: it displays a message like,
\"Turning the doodah to the left has no effect.\" How it works is rather
subtler, however, and requires quite a bit of further explanation.

First of all, the report() phase is only called for the last object in
the series of objects the command applies to. Often a command only
refers to a single object (e.g. TURN WHEEL), but sometimes a command
specifies more than one direct object (e.g. TAKE THE PEN AND THE CARD).
In the first case the report() phase would be called on the wheel; in
the second it would be called only on the card, but would be responsible
for reporting the taking of the pen as well. So, if the grammar for
TurnLeft allowed multiple direct objects, and the player typed TURN RED
WHEEL, GREEN WHEEL AND BLUE WHEEL LEFT the response would be \"Turning
the red wheel, the green wheel and the blue wheel to the left has no
effect.\" It does this by means of the special macro
[gActionListStr]{.code}.

Second, [gActionListStr]{.code} only lists those objects that (a) made
it to the action stage (i.e. which passed verify() and check() and met
any preconditions) but (b) for which the action stage displayed no
messages at all. That means that if you want any object to display a
custom message of its own in response to an action, you can simply get
your action() method (or any method it calls) to display it, and the
report() message will be suppressed for that object. The message defined
in a report() method is thus only used as a kind of fall-back default if
the game doesn\'t supply anything more specific.

Third, the report() phase won\'t be executed at all if either (a)
[gActionListStr]{.code} would be empty (i.e., if there are no direct
objects left to report on) or (b) the action is an implicit one
(reported via a message like \"(first opening the door)\").

From this follow a number of rules about defining a report() method:

1.  A report method should normally only be defined on a class, and
    normally only the Thing class, not on an object or a subclass of
    Thing (one reason being that if an action allows multiple direct
    objects you can never be sure what object the report method will be
    called on; if you know an action will only ever be called on a
    single direct object at a time you can relax this rule).
2.  The message displayed by a report() method should be as general as
    possible, since it might apply to anything.
3.  Any message displayed by a report() method should use the special
    pseudo-global string variable [gActionListStr]{.code} to list the
    direct objects of the action that\'s just been executed.
4.  [gActionListStr]{.code} is probably only useful in a report()
    method.

preCond, verify() and report() are only three of the six possible phases
we can use in a dobjFor() block, the other three being remap, check()
and action(). In this particular case we don\'t need to define the
remap, check() and action() stages on Thing, but in the next section
we\'ll be seeing how to use them to customize the behaviour of
particular objects (such as the wheel, the control stick and the thrust
lever). In the meantime, if you want to learn more about defining
actions you can read the sections on [Action
Results](../manual/actres.htm) and [Defining New
Actions](../manual/define.htm) in the *adv3Lite Library Manual*.

One further question may be occurring to you at this point, if it
hasn\'t already: How do I know if the library already defines an action
I might want to use, and if it does, how do I find out what the library
calls it? It may seem reasonably intuitive that the action corresponding
to PUSH SOMETHING is called Push, but it may be slightly less obvious
that Push also responds to PRESS SOMETHING, and not at all obvious that
the Attack action responds to KILL SOMETHING (as well as HIT SOMETHING,
KICK SOMETHING and, of course, ATTACK SOMETHING). To be sure, you\'ll
quite quickly become familiar with the names of the more common actions
and the commands that correspond to them, but there are always the less
familiar commands, and when you\'re just starting out, few if any of the
action names will be familiar to you.

Fortunately help is at hand in the form of the [Action
Reference](../manual/actionref.htm), which lists all the actions defined
in the adv3Lite library together with an alphabetical list of all the
commands that can trigger them. This list also supplies the names of
some of the properties you\'ll most commonly want to customize when
defining your own action handling together with additional information
to help you on your way.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Cockpit
Controls](cockpit.htm){.nav} \> Defining Actions\
[[*Prev:* Furnishing the Cockpit](furnishing.htm){.nav}     [*Next:*
Responding to Actions](responding.htm){.nav}     ]{.navnp}
:::
