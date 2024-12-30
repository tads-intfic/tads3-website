::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Cockpit
Controls](cockpit.htm){.nav} \> Responding to Actions\
[[*Prev:* Defining Actions](actions.htm){.nav}     [*Next:* Taking
Off](takeoff.htm){.nav}     ]{.navnp}
:::

::: main
# Responding to Actions

In the previous section we taught the game how to respond in general to
commands like PUSH STICK FORWARD and TURN WHEEL TO PORT, but we\'ve yet
to get the wheel and the stick to respond in a customized way
appropriate to their role in the game. This will be our next task.

## Turning the Wheel

For the moment we\'ll just worry about what effect turning the wheel has
on the wheel. We\'ll worry about what it might do to the plane later.

To keep things reasonably but not absurdly simple, we\'ll assume the
wheel can be turned to one of five positions: amidships, 30 degrees to
port or starboard, or 60 degrees to port or starboard. We\'ll also
assume that a TURN WHEEL LEFT/RIGHT command should turn it 30 degrees at
a time. To keep track of where the wheel is currently turned to we\'ll
define a custom [angle]{.code} property on the wheel object, which will
be allowed to vary from -60 (hard to port) to +60 (hard to starboard).
To help the player keep track of the wheel we\'ll also define a custom
angleDesc() method that turns this angle into a description that can be
used both in the description of the wheel (in response to EXAMINE WHEEL)
and in the response to a TURN WHEEL LEFT or TURN WHEEL RIGHT command.

To prevent the wheel from being turned too far to the right or left,
we\'ll use the check() phase of [dobjFor(TurnRight)]{.code} and
[dobjFor(TurnLeft)]{.code}. The former will stop the action if angle is
already greater than or equal to 60, and the latter will stop the action
if angle is already less than or equal to -60.

In the action() stages of [dobjFor(TurnRight)]{.code} or
do[bjFor(TurnLeft)]{.code} we then merely need to add or subtract 30 to
or from angle and report the result. You will recall that displaying
text at the action() stage suppresses the display of the default message
we defined for the report() stage.

The code to do all this is quite lengthy, but basically quite
straightforward:

::: code
    +++ wheel: Fixture 'wheel'
        "The wheel can be turned to port or starboard to steer the aircraft. It's
        currently <<angleDesc>>. "
        
        isTurnable = true
        angle = 0
        
        angleDesc()
        {
            switch(angle)
            {
            case -60:
                "hard to port";
                break;
            case -30:
                "slightly to port";
                break;
            case 0:
                "amidships";
                break;
            case 30:
                "slightly to starboard";
                break;
            case 60:
                "hard to starboard";
                break;
            }
        }
        
        dobjFor(TurnRight)
        {
            check()
            {
                if(angle >= 60)
                    "It's already turned as far to starboard as it will go. ";
            }
            
            action()
            {
                angle += 30;
                "You turn the wheel 30 degrees to starboard so that it ends up
                <<angleDesc>>. ";
            }
        }
        
        dobjFor(TurnLeft)
        {
            check()
            {
                if(angle <= -60)
                    "It's already turned as far to port as it will go. ";            
            }
            
            action()
            {
                angle -= 30;
                "You turn the wheel 30 degrees to port so that it ends up
                <<angleDesc>>. ";
            }
        }
    ;
:::

One new feature to note here is the use of [angle += 30]{.code} and
[angle -= 30]{.code} as a convenient shorthand way of adding 30 to angle
and subtracting 30 from angle. As previously mentioned, all a check()
method needs to do to stop an action is to display some text, which
these check methods do if the wheel\'s already turned one way or the
other as far as it will go. We\'re better off using check() rather than
verify() not only because it happens to be a bit more convenient, but
also because even when the wheel\'s turned as far as it will go it\'s
still the best choice of object for a TurnRight or TurnLeft command, so
we don\'t actually want to rule it out as illogical at the verify()
stage.

There\'s one further refinement we could add here, since the player
might reasonably try PUSH WHEEL or PULL WHEEL to mean PUSH CONTROL
COLUMN or PULL CONTROL COLUMN. It would therefore make sense to redirect
pushing or pulling the wheel to pushing or pulling the control column
(of which it is in any case a part), which we can do quite simply with
remap:

::: code
        dobjFor(Push)
        {
            remap = controlColumn
        }
        
        dobjFor(Pull)
        {
            remap = controlColumn
        }
:::

What [remap = controlColumn]{.code} does is simply to tell the game to
use controlColumn rather than the object actually specified (in this
case, the wheel) as the direct object of a Push or Pull command.

\

## Pulling and Pushing the Stick

To keep things reasonably simple we\'ll allow the control column to take
one of only three different positions: pulled back, vertical or pushed
forward. For the purposes of this game this should be quite sufficient.
The implementation of the Push and Pull actions on the control column
can then proceed in a very similar manner to that of the turning actions
on the wheel:

::: code
    ++ controlColumn: Fixture 'control column;;stick'
        "It's basically a stick that can be pushed forward or pulled back, with a
        wheel attached at the top. It's currently <<positionDesc>>. "
        listOrder = 10
        
        position = 0
        
        positionDesc = ['pulled right back', 'vertical', 
          'pushed all the way forward'][position + 2]
        
        dobjFor(Push)
        {
            check()
            {
                if(position > 0)
                    "It's already pushed forward as far as it will go. ";
            }
            
            action()
            {
                position++;
                "You push the control column so that it's now <<positionDesc>>. ";
            }
        }
        
        dobjFor(Pull)
        {
            check()
            {
                if(position < 0)
                    "It's already pulled back as far as it will go. ";
            }
            
            action()
            {
                position--;
                "You pull the control column so that it's now <<positionDesc>>. ";
            }
        }
    ;
:::

This shouldn\'t require a lot of comment. Note the use of
[position++]{.code} and [position\--]{.code} to increment and decrement
the value of the position property by 1. You\'ll probably have already
guessed that [position]{.code} is a custom property we\'ve defined on
the controlColumn object for the purpose of registering its position.
The [positionDesc]{.code} property uses a neat trick to turn the value
of the [position]{.code} property into a string describing it.
[\[\'pulled back\', \'vertical\', \'pushed forward\'\]]{.code} is a list
containing three elements. [\[\'pulled back\', \'vertical\', \'pushed
forward\'\]\[*index*\]]{.code} returns the *index*th element from that
list. By adding 2 to [position]{.code} we get an index that varies from
1 to 3 as [position]{.code} varies from -1 to 1. With just a little more
arithmetical manipulation we could have used a similar device to turn
the wheel angle into a description instead of using the switch statement
on the wheel.

At the moment pushing and pulling the stick doesn\'t affect anything but
the stick. We\'ll come back to its effect on the plane in the next
section.

## Pulling and Pushing the Thrust Lever

Finally, we come to the thrust lever, which is notionally meant to
control the power output of the aircraft\'s engine(s). We could simply
more or less repeat what we did in the implementation of the control
column, but it would be more interesting to do something a little
different. Let\'s suppose that the thrust lever can be in one of six
positions, arbitrarily labeled 0 to 5. Rather than making the player
type PUSH LEVER five times in succession to move the lever all the way
forward (surely rather unrealistic in any case), let\'s suppose that the
lever can be moved to the desired position directly with a command like
MOVE LEVER TO 2 or PUSH LEVER TO 4. But let\'s suppose that we also want
PUSH LEVER (by itself, without any particular position specified) to
push the lever all the way forward to full thrust, i.e. the 5 setting,
and PULL LEVER to move it all the way back to 0.

With this setup, the thrust lever has a kind of binary mode with just
PULL and PUSH (all the way back or all the way forward) and also a
multi-setting mode in which it can be moved to any setting between 0 and
5. The library defines a Lever class for a binary kind of lever and a
Settable class for a control that can be set to a number of different
settings. Fortunately we can combine the two through multiple
inheritance:

::: code
    ++ thrustLever: Settable, Lever 'thrust lever'
        "It's a lever that can be pushed forward or pulled back. It's currently
        <<settingDesc>>. "
        listOrder = 20
        
        settingDesc()
        {
            switch(curSetting)
            {
            case '0':
                return 'pulled all the way back to 0';
            case '5':
                return 'pushed all the way forward to 5';
            default:
                return 'in the <<curSetting>> position';
            }
        }
        
        curSetting = '0'
    ;
:::

Note that we use the [curSetting]{.code} property (a property of
[Settable]{.code}) to hold the current setting (which Settable expects
to find as a single-quoted string) and define a custom
[settingDesc()]{.code} method to use a [switch]{.code} statement that
translates the [curSetting]{.code} value into a fuller textual
description of the current position of the lever.

We want to restrict the possible settings of the lever to numbers
between 0 and 5. A NumberedDial will do that for us, but a Lever isn\'t
a NumberedDial, and neither is a Settable. Fortunately there\'s a little
trick TADS 3 lets us play if we want to \"borrow\" a method from a class
the object we\'re defining doesn\'t inherit from. We can do so using the
**delegated** keyword, followed by the name of the class whose method we
want to borrow. Here we want to borrow the [isValidSetting()]{.code}
method of the NumberedDial class to ensure that the lever can only be
moved to numbers between 0 and 5. We don\'t need to use delegated with
the [minSetting]{.code} and [maxSetting]{.code} properties we\'re also
\"borrowing\" from NumberedDial, since they\'re just straightforward
numerical properties we can define directly on our thrustLever. The
definition of thrustLever can thus continue like this:

::: code
        minSetting = 0
        maxSetting = 5
        
        isValidSetting(val)
        {
            return delegated NumberedDial(val);
        }
:::

For more information on the [delegated]{.code} keyword, refer to the
\"Expressions and Operators\" section of Part III of the *TADS 3 System
Manual*.

Next, we\'ll probably want moving the thrust lever to be reported with
something a little less bland than \"You set the thrust lever to n\",
especially if the engine is running. We can do that by providing our
custom message in the makeSetting() method:

::: code
        makeSetting(val)
        {
            local oldVal = curSetting;
            inherited(val);
            "You <<if oldVal < val>> push the thrust lever forward<<else>> pull the
            lever back<<end>> to <<curSetting>>. ";
            
            if(ignitionButton.isOn)
            {
                "The whine of the engine <<if oldVal < val>>increases <<else>>
                decreases<<end>> in pitch and volume<<if val=='0'>>, dying away to
                a barely perceptible whisper<<end>>. ";
            }
            
        }
:::

Here we use the [oldVal]{.code} local variable to store the previous
setting so we can test which way the player has just moved the lever
when we want to display an appropriate message. We also use the value of
[ignitionButton.isOn]{.code} to test whether the engine is running, so
that if it is we can display a description of the change in engine noise
that results from moving the thrust lever. We don\'t need to worry about
the case where the player tries to move the lever to the same setting
it\'s already at, since the verify() stage of SetTo will rule that out
anyway. Also we don\'t need to worry about the default message the
action would have displayed, since our custom message automatically
suppresses anything that would have been displayed at the
[report]{.code} stage.

The next job is to tie in the Lever\'s push/pull behaviour with the
Settable behaviour we\'ve just implemented. A Lever can be in one of two
states, [isPulled = nil]{.code} or [isPulled = true]{.code}. For this
Lever we want the [isPulled = true]{.code} state (when the thrust lever
is pulled all the way back) to correspond to curSetting of \'0\', and
the [isPushed = true]{.code} state (when the lever is pushed all the way
forward) to correspond to a curSetting of \'5\'. By default the Lever
class assumes that [isPushed]{.code} is true when [isPulled]{.code} is
nil and *vice versa*, so we need to override those two properties to
cancel that assumption, and completely change what the Lever\'s
[makePulled()]{.code} method normally does:

::: code
        makePulled(stat)
        {        
            makeSetting(stat ? '0' : '5');
        }
        
        isPulled = (curSetting == '0')
        isPushed = (curSetting == '5')
:::

The complete definition of the thrustLever object now looks as follows:

::: code
    ++ thrustLever: Settable, Lever 'thrust lever'
        "It's a lever that can be pushed forward or pulled back. It's currently
        <<settingDesc>>. "
        listOrder = 20
        
        settingDesc()
        {
            switch(curSetting)
            {
            case '0':
                return 'pulled all the way back to 0';
            case '5':
                return 'pushed all the way forward to 5';
            default:
                return 'in the <<curSetting>> position';
            }
        }
        
        curSetting = '0'
        minSetting = 0
        maxSetting = 5
        
        isValidSetting(val)
        {
            return delegated NumberedDial(val);
        }
        
        makeSetting(val)
        {
            local oldVal = curSetting;
            inherited(val);
            "You <<if oldVal < val>> push the thrust lever forward<<else>> pull the
            lever back<<end>> to <<curSetting>>. ";
            
            if(ignitionButton.isOn)
            {
                "The whine of the engine <<if oldVal < val>>increases <<else>>
                decreases<<end>> in pitch and volume<<if val=='0'>>, dying away to
                a barely perceptible whisper<<end>>. ";
            }
            
        }
        
        makePulled(stat)
        {        
            makeSetting(stat ? '0' : '5');
        }
        
        isPulled = (curSetting == '0')
        isPushed = (curSetting == '5')
    ;
:::

We still have one further job to do. At the moment the thrust lever will
respond to commands like SET LEVER TO 3 but we\'d also like to respond
to MOVE LEVER TO 3, or PUSH LEVER TO 3 or PULL LEVER TO 3. We\'ve
already seen how to accomplish that sort of thing in another context,
namely by modifying the appropriate VerbRule:

::: code
    modify VerbRule(SetTo)
        ('set' | 'move' | 'push' | 'pull') singleDobj 'to' literalIobj
        :
    ;
:::

We\'ve now got the controls to the point where they can be operated,
even if we can\'t yet fly the plane with them. In the next section
we\'ll make it possible for the plane to take off.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Cockpit
Controls](cockpit.htm){.nav} \> Responding to Actions\
[[*Prev:* Defining Actions](actions.htm){.nav}     [*Next:* Taking
Off](takeoff.htm){.nav}     ]{.navnp}
:::
