::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Implicit Actions\
[[*Prev:* Doers](doer.htm){.nav}     [*Next:* Reacting to
Actions](react.htm){.nav}     ]{.navnp}
:::

::: main
# Implicit Actions

An implicit action is an action that the game carries out for the player
to allow the explicitly commanded action to proceed. For example, if the
player types THROW BALL AT STONE when the player character is not
holding the ball, but the ball is within reach, rather than having the
parser respond with \"You need to be holding the ball before you can
throw it\", the game simply has the player character take the ball as an
*implicit action* (i.e. an action not explicitly requested by the player
but necessary to carry out the command the player did type), and reports
the result with a message like \'(first taking the ball)\'. Similarly,
LOOK IN BOX when the box is closed would result in an implicit open
action and the report \'(first opening the box)\'. If, however, the box
can\'t be opened, because it\'s locked, say, the parser will instead
report the failed attempt to perform the requisite implicit action
(opening the box) with a message like \'(first trying to open the
box)\'. Here the word \'trying\' is intended to convey to the player
that it is necessary to open the box before looking inside it, but that
in this instance the attempt to open it did not succeed.

\
[]{#trigger}

## Triggering Implicit Actions

The commonest way for an implicit action to be triggered is via a
[PreCondition](actres.htm#precond), that is an object used to define
what conditions must hold in order for a particular action to go ahead
(as discussed in the section on [Action Results](actres.htm#precond)).
You can, however, trigger an implicit action explicitly in your own code
using the **tryImplicitAction()** macro. This takes the form
[tryImplicitAction(*action-name*, *objs\...*)]{.code}, where
*action-name* is the name of the action you wish to be explicitly
performed, such as [Take]{.code}, and objs\... is the object or objects
you want the implicit action to apply to. So, for example, to trigger an
implicit TAKE RED BALL action in your own code you might write:

::: code
     tryImplicitAction(Take, redBall); 
     
:::

The place where you might typically write such code is in the action
section of a dobjFor() or iobjFor() block in your own code. For example,
suppose that you are implementing the response to the WriteOn action for
a sheet of paper, but in order to write on the piece of paper the player
character has to be holding a pen. Rather than just preventing the
action if the pen isn\'t held, you could make the player character take
the pen automatically via an implicit action provided the pen is within
reach, something like:

::: code
     pieceOfPaper: Thing 'piece of paper'
        ...
        dobjFor(WriteOn)
        {
            check()
            {
               if(!gActor.canReach(pen))
                 "You need a pen to do that. ";
            }
            
            action()
            {
               if(!pen.isDirectlyHeldBy(gActor))
                 tryImplicitAction(Take, pen);
                 
               ...  
            }
        }
     
:::

\
[]{#reporting}

## Reporting Implicit Actions

As stated above, the library normally reports implicit actions with text
such as \'(first taking the pen)\' (when the implicit action succeeds)
or \'(first trying to take the pen)\' (when the implicit action fails.
The library also attempts to group implicit action reports as far as
possible, to give reports like \'(first taking the gold key, then
unlocking the small box with the gold key, then opening the small box)\'
rather than giving three separate implicit action reports relating to
the same command. To do this it stores the implicit action reports it
needs to produce in the **implicitActionReports** of the current Command
object ([gCommand]{.code}) until they are ready (or need) to be
displayed. This mechanism make the handling of implicit action reports
by the library a fairly complex matter, the details of which most game
authors probably won\'t want to concern themselves with.

On the other hand, game authors may wish to customize these reports or
control whether and when they appear. Whether an implicit action report
is produced at all is controlled by the **reportImplicitActions**
property of the [Action]{.code} class. Usually, it\'s a good idea to
display implicit action reports so that players can see what actions
have been performed on their behalf, otherwise they may not be aware
that the pen has been taken or the box opened as a side-effect of the
command they actually entered, but some game authors dislike implicit
action reports, and since it\'s your game you\'re writing you can, if
you like, banish all implicit action reports with the following few
lines of code:

::: code
    modify Take
        reportImplicitActions = nil
    ;
:::

You can also do this on a per action basis. For example, the following
code would suppress implicit take reports but allow all other implicit
actions to be reported:

::: code
     modify Take
        reportImplicitActions = nil
    ;
     
:::

To suppress the implicit action reports that would stem from a
particular action applied to particular objects, we can use a
[Doer](doer.htm), like so:

::: code
     Doer 'look in octopusTank'
        execAction(c)
        {
            try
            {
                Action.reportImplicitActions = nil;
                inherited(c);
            }
            finally
            {
                Action.reportImplicitActions = true;
            }
        }       
    ;
     
:::

This would prevent any implicit action reports appearing in response to
the command LOOK IN OCTOPUS TANK. We could also, of course, use a Doer
in a similar way with a class (such as [Thing]{.code}) in place of a
particular object (such as [octopusTank]{.code}) to suppress the
implicit actions reports for an action applied to a whole class of
objects. Note the use of the try\...finally blocks here to ensure that
[Action.reportImplicitActions]{.code} is restored to true at the end of
the action even if it throws an exception.

Finally, we can customize some of the fragments of text that go to build
up implicit action reports by using a
[CustomMessages](message.htm#custmessage_idx) object like so:

::: code
     CustomMessages
        messages = [
            Msg(implicit action report start, '[after '),
            Msg(implicit action report failure, 'failing to '),
            Msg(implicit action report separator, ' and next '),
            Msg(implicit action report terminator, ']\n')   
        ]
    ;
     
:::

This example would turn a report like \'(first taking the ball)\' into
\'\[after taking the ball\]\', \'(first trying to open the box)\' into
\'\[after failing to open the box\]\' and \'(first opening the box then
taking the ball)\' into \'\[after opening the box and next taking the
ball\]\'. Note where the spaces need to occur in these textual
fragments.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Implicit Actions\
[[*Prev:* Doers](doer.htm){.nav}     [*Next:* Reacting to
Actions](react.htm){.nav}     ]{.navnp}
:::
:::
