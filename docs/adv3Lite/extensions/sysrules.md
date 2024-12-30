::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Sysrules\
[[*Prev:* Symconn](symconn.htm){.nav}     [*Next:*
TIAAction](tiaaction.htm){.nav}     ]{.navnp}
:::

::: main
# Sysrules

## Overview

\"System Rules\" module. This implements a number of rules and rulebooks
to allow game authors to tailor various aspects of the library\'s
behaviour. The Rules extension is also needed to make use of Sysrules.

\
[]{#classes}

## New RuleBooks and classes

This extension defines the following RuleBooks:

-   *[Start-up rulebooks](#startup)*: [preinitRules](#preinit),
    [initRules](#init).
-   *[Action rulebooks](#action)*: [beforeRules](#before),
    [reportRules](#report), [afterRules](#after).
-   *[Turn Sequence rulebooks](#sequence)*: [turnStartRules](#start),
    [turnEndRules](#end).

Each of these RuleBooks has a similarly-named rule class associated with
it; for example the [BeforeRule]{.code} class is used to define rules
belonging to the [beforeRules]{.code} Rulebook. When using these
specialized subclasses of Rule, there\'s no need also to specify which
RuleBook they belong to, since this is taken care of in the class
definitions (e.g. if you define something as an [InitRule]{.code} it\'s
redundant to go on to define its location property as
[initRules]{.code}).

\
[]{#usage}

## Usage

Include the rules.t and sysrules.t files after the library files but
before your game source files (the rules extension is required for this
one to work). If you are not already familiar with the workings of the
rules extension you should first read its [documentation](rules.htm)
before attempting to use this one.

None of the rulebooks defined in this extension expects any parameters
to be passed to its [follow()]{.code} method. This means that when you
define rules belonging to any of these rulebooks, you do not need to
worry about defining any arguments for their [follow()]{.code} methods.
With the exception of the reportRules, all the RuleBooks defined in this
extension have a [contValue]{.code} of nil; this means that the default
behaviour is for these RuleBooks to execute all the matching Rules they
find, rather than stopping at the first one.

By default this extension does not alter the way the adv3lite library
behaves (from a player\'s perspective), but by effectively replacing one
or two methods and functions with rulebooks it makes the library\'s
behaviour more customizable (by game authors) as well as providing a
number of hooks for additional author-defined rules. This is best
explained by discussing each of the rulebooks in turn.

\
[]{#startup}

## Startup Rules

[]{#preinit}

### PreinitRules

The **preinitRules** RuleBook starts out empty, but may be used to
define rules that run at the pre-init stage (basically as an alternative
to definining PreInit objects). Such rules may be defined by explicitly
locating them in the preinitRules Rulebook using either form of syntax:

::: code
     preinitRule1: Rule
        location = preinitRules
        follow()
        {
           me.name = 'Joe Bloggs';
        }
    ;

    preinitRule2: Rule @preinitRules
       follow()
       {
          ...
       }
    ;
     
:::

Or alternatively, they may simply be defined as belonging to the
**PreinitRule** class:

::: code
     preinitRule1: PreinitRule    
        follow()
        {
           me.name = 'Joe Bloggs';
        }
    ;
     
:::

\
[]{#init}

### InitRules

The **initRules** rulebook likewise starts out empty, and can be used to
define rules that run at start of play (at the init stage). These can
again be defined as Rules which you explicitly locate in the initRules
rulebook, but it is probably more convenient to define them as rules of
the **InitRule** class (which are automatically located in the
[initRules]{.code} rulebook). InitRules are used in very much the same
way as PreinitRules, and effectively provide an alternative to defining
InitObjects. They are thus quite closely equivalent to \"when play
begins\" rules in Inform 7.

\
[]{#action}

## Action-Related Rules

The function of the action-related rulebooks in this extension is *not*
not replace the TADS 3 style action handling with a set of Inform 7 like
rulebooks, but rather to provide some convenient rule-oriented hooks for
certain aspects of the action-processing cycle, in particular the before
and after notifications. Authors familiar with Inform 7 should therefore
not expect the three rulebooks described below to work in the same way
as the similarly-named rules in I7 (although the ReportRules are fairly
analogous).

Rules intended for one of these three rulebooks should be defined using
the [BeforeRule]{.code}, [ReportRule]{.code} or [AfterRule]{.code} class
as appropriate. Each of these has a **currentAction** property which
identifies the particular action that triggered the associated rulebook.

Rules that need to match particular actions can be defined using the
Rule template, e.g.:

::: code
     BeforeRule &Jump
        // A BeforeRule that matches the Jump action
     ;
     
     AfterRule [Throw, ThrowDir]
        // An AfterRule that matches either the Throw or the ThrowDir action.
     ;
     
     
:::

If the verify(), check() or action() stages of an action would benefit
from rule-like behaviour, you can define a custom RuleBook to handle
this and call it from within the appropriate verify(), check() or
action() method, as in the [Jump](rules.htm#jump) and
[DigWith](rules.htm#digwith) examples given in the documentation for the
Rules extension.

The description of the individual rulebooks below will list the rules
they contain along with their priorities. The ordering of rules within
rulebooks can then be changed (if desired) by overriding these
priorities, and additional rules inserted where required. Remember that
a rule with a higher priority is executed before one with a lower one.
Note that as far as possible the priorities of the library-defined rules
have been assigned so that additional rules with the default priority of
100 should normally come at a sensible place in the rulebook, although
you are, of course, free to assign whatever priority you wish to your
own rules to make them execute when you want them to.

\
[]{#before}

### Before Rules

The main purpose of the **beforeRules** rulebook is to handle before
action notifications. The [beforeRules]{.code} rulebook is defined in
this extension with the following rules, which are executed in the order
shown:

1.  **checkActionPreconditionsRule**: (priority 10000). Checks the
    preconditions relating to the action (as opposed to those defined on
    its objects).
2.  **actorActionRule**: (priority 9000). Calls the
    [actorAction()]{.code} method on [gActor]{.code} (the current
    actor).
3.  **sceneNotifyBeforeRule**: (priority 8000). Calls the
    [beforeAction()]{.code} method on any current scenes.
4.  **roomNotifyBeforeRule**: (priority 7000). Calls the
    [roomBeforeAction()]{.code} method on the actor\'s current room
    (which in turn calls the [regionBeforeAction()]{.code} method on any
    regions that room is in).
5.  **scopeListNotifyBeforeRule**: (priority 6000). Calls the
    [beforeAction()]{.code} methods of all the objects in scope.

To define additional rules for this rulebook, use the **BeforeRule**
class. This inherits from [ReplaceRedirector]{.code} as well as
[Rule]{.code} and so provides the [doInstead()]{.code} method, should
you need to use it. Probably the best use for BeforeRules, however, is
as an alternative method of handling before notifications that don\'t
fit neatly into existing [beforeAction()]{.code} methods, either because
they apply to multiple objects, or because they apply conditionally, and
it\'s neater to handle the conditions in a series of rules than via a
complex if statement. For example, you might write:

::: code
    BeforeRule &Take  
       during = desperateHurryScene  
       dobj = [comb, penny, paperclip]
       
       follow()
       {
           "You don't have time to gather up petty items
           right now. ";
           exit;
       }   
       
       priority = 8500
    ;
:::

Note three things here: first the use of the [exit]{.code} macro to stop
the action, and second the priority given to this rule so that it comes
after the [actorActionRule]{.code} but before the notification rules;
there\'s no point notifying scenes, rooms and other objects of an action
that isn\'t going to take place. Third and finally, there\'s no need to
use the @ part of the template here to specify that your
[BeforeRule]{.code} is located in the beforeRules RuleBook; in common
with all the specialized Rule classes defined in this extension, a
[BeforeRule]{.code} is automatically located in the appropriate
RuleBook.

Note finally that whether the beforeRules are executed before or after
the check phase will depend on the value of
[gameMain.beforeRunsBeforeCheck.]{.code}

\
[]{#report}

### Report Rules

The ReportRules perform the same function as the
[report](../../docs/manual/actres.htm#report) phase of a TAction or
TIAction, namely to summarize the action across all the direct objects
it applied to in the course of executing a single command (e.g. \"You
take the bath bun, the red brick, and the jar of olive oil.\"). By
default, the **reportRules** rulebook contains two rules:

1.  **reportImplicitActionsRule**: (priority 10000). Displays any
    pending implicit action reports (the [follow()]{.code} method of
    this rule ends with [nostop]{.code} to ensure that the subsequent
    rules are considered).
2.  **standardReportRule**: (priority 0). Displays the output of the
    appropriate report() method from the final direct object in the
    batch (i.e. carries out the normal library behaviour you\'d get if
    this extension wasn\'t present).

Note that unlike all the other RuleBooks defined in this extension, the
[reportRules]{.code} are defined with [contVal = null]{.code} rather
than [contVal = nil]{.code}, which means that the rulebook will stop
after the first matching rule it finds. This enables you to write custom
a custom **ReportRule** without needing to remember to use [stop]{.code}
to ensure that the [reportRules]{.code} rulebook doesn\'t go on to
display the standard report as well as your custom one. You\'d typically
write a ReportRule to customize the way an action is reported under
specific circumstances, for example:

::: code
    ReportRule &Take
       during = desperateHurryScene

       follow()
       {
          "{I} hastily snatch{es/ed} <<gActionListStr>>. ";
       }   
    ;
     
:::

Note the use of the [gActionListStr]{.code} macro here to provide a list
of all the direct objects to which the current Take command applied;
your report rules should always include this macro where you want to
mention the direct object of the command to ensure that all the relevant
direct objects are listed.

Finally, note that the reportRules will only run if no text was
displayed at the action() stage of the action in question for the
objects concerned.

\
[]{#after}

### After Rules

The **afterRules** RuleBook is used principally to perform the various
[after action notifications]{#afterac_idx}. If you are familiar with
Inform 7, you should note that this quite different from an I7 after
rule (which takes place between the carry out rules and the report
rules). The [afterRules]{.code} in this extension are executed after the
action is fully complete, and hence [after]{.code} the
[reportRules](#report). They cannot be used to change the outcome of the
action in any way, but only how the action is responded to. Moreover, if
an action is considered a failure, the [afterRules]{.code} won\'t be run
(since you can\'t react to an action that didn\'t take place).

The [afterRules]{.code} Rulebook starts out containing the following
rules:

1.  **checkIlluminationRule** (priority 10000): checks whether the
    action has changed the actor\'s location from lit to unlit or *vice
    versa* and, if so, either announces the onset of darkness (if it is
    now dark) or displays a room description (if it is now light).
2.  **notifyScenesAfterRule** (priority 9000): calls the
    [afterAction()]{.code} method on any current scenes.
3.  **roomNotifyAfterRule** (priority 8000): calls the
    [roomAfterAction()]{.code} method on the actor\'s current room, and
    the [regionAfterAction()]{.code} methods of any Regions that contain
    that room.
4.  **scopeListNotifyAfterRule** (priority 7000): calls the
    [beforeAction()]{.code} method on every object in scope.

There are basically two ways in which game code can make use of this
rulebook. The first is to reorder the existing rules by reassigning
their priorities, so that after action notifications take place in a
different order. The second is to define additional **AfterRule** rules
which implement additional responses to an action that has just taken
place.

\
[]{#sequence}

## Turn Sequence Rules

The two turn sequence rulebooks contain rules governing what takes place
at the beginning and end of each turn. In addition, they provide
convenient places to define [TurnStartRules]{.code} or
[TurnEndRules]{.code} to be executed on every turn, either near the
start or near the end of the turn, depending on which of the two
rulebooks you use. In some respects this duplicates the function of a
[Daemon](../../docs/manual/event.htm#daemon-idx), but at the same time
it gives you more control over precisely where in the turn cycle and
under what conditions your code is run.

\
[]{#start}

### TurnStart Rules

The turnStartRules rulebook starts out containing the following rules:

1.  **updateStatusLineRule** (priority 10000): updates the status line.
2.  **scoreNotificationRule** (priority 9000): displays any applicable
    score notification.
3.  **promptDaemonRule** (priority 8000): runs any
    [PromptDaemons](../../docs/manual/event.htm#promptdaemon) that are
    due to fire.
4.  **commandSpacingRule** (priority 20): displays a blank line,
    preparatory to displaying the next command prompt.
5.  **startInputLineRule** (priority 10): outputs an
    [\<.inputline\>]{.code} tag preparatory to displaying the next
    command prompt.
6.  **displayCommandPromptRule** (priority 0): displays the command
    prompt (by default \"\>\").

This rulebook does not go on to encompass the actual inputting and
parsing of the command (a) because these operations are protected by a
[try\... catch]{.code} block that cannot readily be replicated within
the same rulebook and (b) because it is in any case probably not a good
idea for game code to modify that particular part of the cycle.

To define additional rules to be run in the turnStartRules rulebook, use
the **TurnStartRule** class. For example, to customize the command
prompt during the [desparateHurryScene]{.code} you might write:

::: code
     TurnStartRule
        during =  desperateHurryScene  
        follow()
        {
            "Hurry! ";
        }
        priority = 5
    ; 
     
:::

Note that with this definition the rulebook will continue to execute the
[displayCommandPromptRule]{.code} after our custom rule, so the complete
command prompt will appear as **Hurry! \>**. If we wanted to *replace*
the standard command prompt entirely we\'d need to add a [stop]{.code}
statement to the end of the [follow()]{.code} method of our custom rule.

\
[]{#end}

### TurnEnd Rules

The **turnEndRules** rulebook deals with end-of-turn processing such as
running daemons and fuses and advancing the turn count. It starts out
containing the following rules:

1.  **turnEndSpacerRule** (priority 10000): adds a blank line to the end
    of the previous command output.
2.  **roomDaemonRule** (priority 9000): executes the
    [roomDaemon()]{.code} method on the player character\'s current
    room.
3.  **executeEventsRule** (priority 8000): executes any pending Fuses or
    Daemons.
4.  **advanceTurnCounterRule** (priority 50): advances the turn counter.

To define additional rules to go into the [turnEndRules]{.code}
rulebook, use the **TurnEndRule** class.

\
[]{#performance}

## A Note on Performance

Employing the sysrules extension in principle gives the library quite a
lot of extra work to do, since it has to run through a number of
rulebooks where it would otherwise have simply executed successive
statements in a method or function. This is unlikely to result in any
noticeable degradation of performance from the perspective of a player,
at least any player using a reasonably modern computer, but could
conceivably make test scripts run a little slower. It is completely
pointless to install this extension in your game unless you actually
intend making use of it by defining new rules or reordering existing
ones, since this would be to make the library do a whole lot of extra
work for nothing. It may also be overkill to use this extension to
achieve something that could be achieved more simply (or just as simply)
by some other means (such as defining an [InitObject]{.code} or using a
[CustomMessages](../../docs/manual/message.htm#custmessage_idx) object
to change the prompt). On the other hand there is no reason why you
should not use this extension if you think it may prove useful or if you
want to experiment with it; in practice any slowdown in performance is
likely to be imperceptible (especially to players).

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[systime.t](../systime.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Sysrules\
[[*Prev:* Symconn](symconn.htm){.nav}     [*Next:*
TIAAction](tiaaction.htm){.nav}     ]{.navnp}
:::
