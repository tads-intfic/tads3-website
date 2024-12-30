::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Objtime\
[[*Prev:* MobileCollectiveGroup](mobilecollectivegroup.htm){.nav}    
[*Next:* Postures](postures.htm){.nav}     ]{.navnp}
:::

::: main
# Objective Time

## Overview

\"Objective Time\" module. This implements a form of in-game
time-keeping that advances the clock by so much per turn. By default
each turn is reckoned to take one minute, but this can be changed in as
fine-grained a manner as game authors wish, for example to make some
actions take longer than others.

\
[]{#classes}

## New Classes, Objects and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new classes, functions, objects and
properties for use by game authors:

-   *Classes*: **TimeFuse**, **SenseTimeFuse**.
-   *Objects*: **timeManager**.
-   *Properties/methods on timeManager*: [currentTime]{.code},
    [formatDate(fmt)]{.code}, [setTime(\[args\])]{.code},
    [addInterval(interval)]{.code}.
-   *Properties/methods added to Action*: [advanceOnFailure]{.code},
    [timeTaken]{.code}, [implicitTimeTaken]{.code}.
-   *Properties added to GameMainDef*: [gameStartTime]{.code}.
-   *Properties/methods added to TravelConnector*:
    [traversalTime]{.code}, [traversalTimeFrom(origin)]{.code}.
-   *Functions*: [addTime(secs)]{.code}, [takeTime(secs)]{.code}.

[]{#usage}

## Usage

Include the objtime.t file after the library files but before your game
source files.

When defining your **gameMain** object, you now need to define its
**gameStartTime** property to set the date and time of day at which your
game notionally starts. This should be set to a list of numbers in the
format [\[year, month, day, hour, minute, second, millisecond\]]{.code}.
Trailing zero elements may be omitted. For example setting
[gameStartTime]{.code} to [\[2014, 7, 23, 15, 30\]]{.code} would setting
the starting time of your game clock to 3.30pm on 23rd July 2014.
Alternatively the [gameStartTime]{.code} may be specified as a Date
object (for details of which consult the TADS 3 System Manual), for
example:

::: code
    gameMain: GameMainDef
        initialPlayerChar = me   
       
        gameStartTime = static new Date(2014, 6, 22, 15, 30, 0, 0)
    ;
     
:::

This is all you actually *need* to do to use the extension, but it
won\'t be very useful if it\'s simply updating the time each turn unless
you do something with the information. We shall now go on to discuss the
things you can do with it.

\
[]{#displaying}

### Displaying the Time

One of the most basic and obvious things you can do with the time is to
display it somewhere. To do this you can use the **formatDate(fmt)**
method of the [dateManager]{.code} to return a string containing the
date, time, or date and time in a suitable format defined by the *fmt*
parameter. For example, to display the date and time at the right-hand
end of the status line you could do this:

::: code
     modify statusLine
        showStatusRight()
        {
            "<<timeManager.formatDate('%c')>>";
        }
    ; 
     
:::

For a full list of possible format strings, consult the chapter on the
Date intrinsic class in the TADS 3 System Manual. A few of the more
convenient ones are listed below:

-   [%r]{.code} the full 12-hour clock time, e.g. \'3:30:00 PM\'
-   [%R]{.code} the 24-hour clock time with minutes, e.g. \'15:30\'
-   [%T]{.code} the 24-hour clock time with seconds, e.g. \'15:30:00\'
-   [%X]{.code} the preferred time representation according to the
    locale settings; e.g. \'15:30:00\'
-   [%c]{.code} the preferred date and time stamp for the locale,
    e.g.\'Sun Jun 22 15:30:00 2014\'
-   [%D]{.code} the short date (in American format), e.g. to
    \'06/22/14\'
-   [%d/%m/%y]{.code} the short date (in European format), e.g.
    \'22/06/14\'
-   [%d-%b-%y]{.code} the short date in dd-mmm-yy format, e,g,
    \'22-Jun-14\' (probably the best format to use to avoid USA/Europe
    ambiguity)
-   [%Y]{.code} the four-digit year number, e.g. 2014; use in place of
    [%y]{.code} in any of the above when a four-digit year is required.
-   [%I:%M %P]{.code} the 12-hour clock time with minutes, e.g. \'03:30
    PM\'
-   [%a ]{.code} the abbreviated weekday name (\'Mon\')
-   [%A]{.code} the full weekday name (\'Monday\')

Note that these can be combined as needed, for example
[timeManager.formatDate(\'%A, %d-%b-%y %I:%M %P\')]{.code} might return
the string \'Sunday, 22-Jun-14 03:30 PM\'. The [formatDate()]{.code}
method may, of course, be used wherever you like in your game code, not
just in the status line.

\
[]{#scheduling}

### Scheduling Events --- TimeFuse and SenseTimeFuse

We can use the standard [Fuse](../../docs/manual/event.htm) class to
make something happen so many turns in the future. But what if we want
something to occur not after so many turns, but after a certain amount
of time (or indeed, at a certain time)? Since the objtime extension
allows us to keep track of time, we may sometimes find this a more
useful way to specify when something should happen than in terms of so
many turns. To that end the objtime extension defines a **TimeFuse**
class that works just like a [Fuse]{.code}, but is specified in terms of
time rather than turns.

To create set up a TimeFuse, just create a new TimeFuse object thus:

[new TimeFuse(]{.synLit}[obj]{.synPar}[, ]{.synLit}[prop]{.synPar}[,
]{.synLit}[timespec]{.synPar}

[)]{.synLit}

This defines a TimeFuse that will call [obj.(prop)]{.code}, i.e. the
prop method of obj, after an timespec of *timespec* turns or at the time
specified by *timespec*. How *timespec* is interpreted depends on how it
is specified. It can be any of the following:

-   A list in the format [\[years, months, days, hours, minutes,
    seconds\]]{.code} (trailing elements can be omitted if they are
    zero). The TimeFuse will then execute *after* the timespec specified
    by the list.
-   An integer, in which case the TimeFuse will execute after that
    number of minutes.
-   A BigNumber (which can be specified by simply including a decimal
    point), in which case the TimeFuse will execute after than number of
    hours. For example, an [timespec]{.code} of 1.25 will cause the
    TimeFuse to execute 1 hour and 15 minutes after the TimeFuse is
    created. Note than an [timespec]{.code} of 1.0 thus means one hour
    an while [timespec]{.code} of 1 means one minute.
-   A Date (i.e. an object of the Date class), in which case the
    TimeFuse will execute at the Date specified.
-   A single-quoted string, in which case the TimeFuse will execute at
    the time specified by the string. This can be either in the format
    \'hh:mm\' (e.g. \'15:34\') or \'hh:mm:ss\' (e.g. \'15:34:30\') to
    specify a time in the current day, or the format \'yyyy:mm:dd
    hh:mm:ss\' (e.g. \'2014:06:22 15:34:00\', meaning 15:34 on 22nd June
    2014), or in any of the other formats accepted by the parseDate
    method of the Date class (for which see the SystemManual); in
    practice the examples just given here are probably the easiest to
    work with and should cover anything you\'re likely to need.

Note, therefore, that to specify how far into the future (the amount of
time *after which*) a TimeFuse should execute, the *timespec* parameter
needs to be a number or a list of numbers, while to specify the
date/time *at which* a TimeFuse should execute, the *timespec* parameter
needs to be a Date object or a string.

The SenseTimeFuse works just like a SenseFuse, except that the timespec
parameter works in the same way as for a TimeFuse, i.e.:

[new [SenseTimeFuse]{#sensefuse-idx}(]{.synLit}[obj]{.synPar}[,
]{.synLit}[prop]{.synPar}[, ]{.synLit}[timespec]{.synPar}[\[, senseProp,
senseObj\]]{.synMark}

[)]{.synLit}

Where *senseProp* must be one of &canSee, &canHear or &canSmell (or
conceivably &canReach) and *senseObj* is the object that must be sensed
appropriately. Note that you can just supply the *senseProp* parameter
if you want to test whether *obj* can be heard or smelled, but that if
you supply the *senseObj* parameter you have to supply the *senseProp*
parameter as well.

Finally, note that since Fuses (including TimeFuses and SenseTimeFuses)
are only checked for execution once per turn, a turn may conceivably
carry the game time beyond the time at which a TimeFuse (or
SenseTimeFuse) was set to execute. If that happens, it will still be
executed at the end of the turn. In other words, towards the end of turn
cycle, every TimeFuse (and SenseTimeFuse) that has either reached or
passed the time at which it is due to execute will be executed.

\
[]{#varying}

### Varying the Rate at which Time Passes

Used straight out of the box, the objtime extension simply advances the
game time by one minute every turn. This may not be want you want, in
which case there are several ways you can customize it to your
requirements.

#### Failed Actions

Probably the simplest of these is to prevent failed actions (e.g. those
that are stopped at the verify stage) from taking any time at all, since
in this case nothing has actually been accomplished and the player has
simply been informed why the proposed action can\'t be carried out. To
do this we simply need to set the Action property **advanceOnFailure**
to nil, e.g.:

::: code
    modify Action
        advanceOnFailure = nil
    ; 
     
:::

#### Action Times

The next simplest adjustment is to change the time taken by various
actions, by overriding their **timeTaken** property (which is specified
in seconds). You could do this globally for all actions, if you wished;
for example to make every action in the game take 20 seconds:

::: code
    modify Action
        timeTaken = 20
    ; 
     
:::

Or you may want different actions to take different amounts of time. For
example, to make examining something take 15 seconds and taking
something take 30 seconds you could do this:

::: code
    modify Examine
        timeTaken = 15
    ;
     
    modify Take
        timeTaken = 30
    ;    
     
:::

And so on for as many action times as you care to customize.

[]{#adjusting}

#### Adjusting Time Taken on Particular Turns

For even finer-grained control you can tweak the time taken for
particular actions with particular objects under particular
circumstances by using the **addTime(secs)** and **takeTime(secs)**
functions. The addTime(secs) function adds *secs* seconds to the time
taken for the turn. It can also reduce the time taken for the turn if
*secs* is negative, but it can never reduce it below zero. You can use
the [addTime(secs) ]{.code}function as many times as you like in the
course of a turn, and its effect will be cumulative.

The [takeTime(secs)]{.code} function, on the other hand,
[replaces]{.code} whatever the time taken for turn would have been with
*secs*. If [takeTime()]{.code} is used more than once in a turn, it will
be the latest one that takes effect, and if [takeTime()]{.code} is used
on a turn, both the [timeTaken]{.code} property for the action and any
calls to [addTime()]{.code} on the same turn will simply be ignored.

As an alternative to calling [addTime(n)]{.code} and [takeTime(n)
]{.code}from within an embedded expression you can use [\<\<add n
secs\>\>]{.code} and [\<\<take n secs\>\> ]{.code}respectively, together
with some obvious variants.

In particular all these do the same thing:

::: code
     "<<takeTime(n)>>";
     "<<take n seconds>>";
     "<<take n secs>>";
     "<<take n second>>";
     "<<take n sec>>"; 
     
:::

And all these do the same thing as one another:

::: code
     "<<addTime(n)>>";
     "<<add n seconds>>";
     "<<add n secs>>";
     "<<add n second>>";
     "<<add n sec>>"; 
     
:::

So, for example, if unlocking a door involves shifting a particularly
rusty bolt you could write:

::: code
     + oldDoor: Door 'old oak door'
       ...
       lockability = lockableWithoutKey
       isLocked = true
       
       dobjFor(Unlock)
       {
          inherited();
          "The bolt is covered with rust and feels incredibly stiff, but after 
          wrestling with it a while you finally manage to unlock the door.
          <<take 150 seconds>> ";
       }
     
     
:::

[]{#implicit}

#### Implicit Action Times

Another facet of time-keeping you may want to control is whether
implicit actions should count towards the time taken for the turn in
which they occur. By default they don\'t since the default behaviour is
simply to take one minute per turn, but you may think it perverse that
the commands TAKE BALL, PUT BALL IN BOX should take two minutes in total
if both are given explicitly, but only one minute in total if TAKE BOX
is performed as implicit action in response to PUT BALL IN BOX. To
change this behaviour you can override the **implicitTimeTaken**
property of an Action to be the number of seconds that Action should
take when performed implicitly. To have every Action take the same time
when performed implicitly as it does when carried out in response to an
explicit command you can simply write:

::: code
    modify Action    
        implicitTimeTaken = timeTaken
    ;
:::

Alternatively, you can override the [implicitTimeTaken]{.code} property
to any number of seconds you please, either globally or on individual
actions.

\
[]{#travel}

#### Travel Times

As things stand, every travel action will take one minute, whether it\'s
going from the kitchen to the hall or crossing a large field to enter a
wood on the far side. Moreover, if fastGoTo is enabled (either globally
or in a particular region) then a GO TO command could whip the player
character across the field, through the wood, up a path and over a
bridge all in one go, and the turn would still only take a minute.

If you want to change this, the best way is probably to turn off the
time taken by travel actions and instead make traversing
TravelConnectors take time instead, which you can do by setting their
**traversalTime** property. As a start you might do something like this:

::: code
    modify TravelAction
        timeTaken = 0    
    ;

    modify TravelConnector
        traversalTime = 120
    ;
     
:::

This assumes that you reckon that in your game world, travel from one
place to the next should typically take two minutes. If your map was on
a smaller scale, you\'d obviously choose a smaller number, perhaps only
30 seconds. Of course, it may be that not all distances on your game map
are equal. You can deal with this by assigning different
[traversalTime]{.code} values to different TravelConnectors. Note that
unless we\'ve explicitly changed them in our own code, we don\'t need to
override the [timeTaken]{.code} properties of the GoTo and Continue
actions (as we otherwise might), since by default these take their
values from [TravelAction.timeTaken]{.code}.

That\'s all very well up to a point, but what if many (if not most) of
your connections are direct from one room to another, without any other
TravelConnector object intervening? Since Room inherits from
TravelConnector, you can give a Room a [traversalTime]{.code}, but then
that will be the time taken to enter the room from any other room
(unless the travel is carried out via some intermediate TravelConnector
such as a Door, Stairway or Passage, in which case that intermediary
TravelConnector\'s [traversalTime]{.code} will apply instead). You
probably won\'t want to create a lot of extra TravelConnector objects
just to vary the TravelTime, however, so fortunately there\'s another
way to handle this situation. Instead of overriding the room\'s
[traversalTime]{.code} property, you can override its
**traversalTimeFrom(origin)** method (where *origin* is the other room
the traveler is coming from) to return different traversal times
depending on the origin. For example, suppose you think it should take
30 seconds to reach the meadow from the road, a minute to reach the
meadow from the river bank, and two minutes to reach it from the wood,
you could define the meadow\'s [traversalTimeFrom()]{.code} method
accordingly:

::: code
     meadow: Room 'Meadow'
        "The road lies just to the south..."
        south = road
        north = wood
        east = riverbank
        
        traversalTimeFrom(origin)
        {
            switch(origin)
            {
               case road:
                  return 30;
               case riverbank:
                  return 60;
               case wood:
                  return 120;
               default:
                  return traversalTime;
            }
        }
    ;    
     
:::

The default in the switch statement may not be strictly necessary, but
it may be as well to put in for safety; if you were later to add another
connection to the meadow and forget to change the
[traversalTimeFrom()]{.code} method, it would at least then handle it
reasonably gracefully. Perhaps a more serious problem is that this
method of specifying travel times between different rooms could quickly
become quite tedious and long-winded if there were a lot to specify. One
way to alleviate this would be to use some kind of data structure,
perhaps a LookupTable, to store the different traversal times between
pairs of rooms and then define the traversalTimeFrom() method to make
use of it, e.g.:

::: code
     modify Room
        traversalTab = static [
            [road, meadow] -> 30,
            [riverbank, meadow] -> 60,
            [wood, meadow] -> 120,
            ...
        ]
        
        traversalTimeFrom(origin)
        {
            local tim = traversalTab[[origin, self]];
            return tim == nil ? traversalTime : tim;
        }
    ; 
     
:::

One alternative would be to use a list defined on each room of the
travel times from other rooms, something like:

::: code
     modify Room
        timeFrom = []
        
        traversalTimeFrom(origin)
        {
            local idx = timeFrom.indexOf(origin);
            return idx == nil ? traversalTime : timeFrom[idx + 1];
        }
    ;

     meadow: Room 'Meadow'
        "The road lies just to the south..."
        south = road
        north = wood
        east = riverbank
        
        timeFrom = [road, 30, riverbank, 60, wood, 120]    
    ;    
     
:::

This may well be easier to work with, since the relevant data is kept
with the room it relates to. Either way you would, of course, only have
to specify the exceptions, since for any route not otherwise specified
the room\'s [traversalTime]{.code} would be used.

[]{#leaps}

#### Time Leaps

The final kind of time adjustment you may want to deal with is leaps in
time. These may occur in your game if it contains a flashback, for
example, or if you cut from one scene to another that takes place hours
or even days later. In principle this is simple enough to do: you just
call the **setTime()** method of the [timeManager]{.code} object, or
else update [timeManager.currentTime]{.code} directly. If you use the
[setTime()]{.code} method the arguments to pass to it are the same as
those you\'d pass to the Date constructor (for which see the TADS 3
System Manual). The two simplest formats to use are probably:

-   [timeManager.setTime(year, month, day, hour, minutes, seconds,
    ms)]{.code}: possibly the best bet if you want to change both the
    date and the time; *year* is the year number (e.g., 2012), *month*
    is the month (1 to 12), *day* is the day of the month (1 to 31),
    *hour* is the clock hour (0 for midnight to 23 for 11 PM), *minutes*
    is the number of minutes past the hour (0 to 59), *seconds* is the
    number of seconds past the minute (0 to 59), and *ms* is the number
    of milliseconds past the second (0 to 999).
-   [timeManager.setTime(\'hour:minutes:seconds\')]{.code} or
    [timeManager.setTime(\'hour:minutes\')]{.code}, where *hour*,
    *minutes* and *seconds* have the same meaning as before. This is
    probably the best option to use if you simply want to jump to a
    different time on the same day. (Note that if you were using the
    Date constructor directly you would need to supply a couple of extra
    arguments to make sure the day did stay the same, but the
    [setTime()]{.code} method takes care of this for you.)

If you want to jump *by* a certain amount you can use the
**addInterval(interval)** method of timeManager, where *interval* can be
one of:

-   A list of numbers in the form [\[years, months, days, hours,
    minutes, seconds\]]{.code}; trailing zero elements may be omitted.
-   A single integer, in which case this will be taken as the number of
    minutes to advance the time.
-   A single BigNumber (a number containing a decimal point), in which
    case this will be taken as the number of hours to advance the time.

Thus calling [timeManager.addInterval(15)]{.code} and
[timeManager.addInterval(0.25)]{.code} would both advance the time by a
quarter of an hour. Note that these numbers can be negative as well as
positive, so that, for example, [timeManager.addInterval(-24.0)]{.code}
would send the time a day into the past. A further subtlety to note is
that unless you do something to prevent it, calling
[timeManager.addInterval()]{.code} won\'t prevent the normal advance of
time that takes place in any case on each turn. So, for example, if each
turn would normally take one minute and you call
[timeManager.addInterval(1)]{.code} you\'ll find that the game time has
advanced by *two* minutes at the end of the turn, one minute from
[addInterval()]{.code} and the other from the normal turn handling.

\
[]{#final}

## Final Considerations

### Is it worth it?

The Objective Time extension is capable of providing you with extensive
control over the passage of time in your game, but to do so in any great
detail will probably involve you in a large amount of work. Do you
really need it? After all, most Interactive Fiction gets by perfectly
well without giving players any explicit notification of the passage of
time, and if all you need is a few vague indications of time, to mark
the occurrence of major plot events, say, you\'re probably better off
using the Subjective Time extension ([subtime](subtime.htm)), which will
cause you a lot less work. So why might you need to use objtime at all?

The kind of circumstance in which objtime might be useful are when:

-   You want to display the game time in the status line (subtime is
    quite unsuitable for this).
-   Your game contains a number of puzzles for which timing is crucial
    and needs to be measured with a plausible degree of accuracy.
-   For dramatic reasons you want to create a sense of urgency by making
    the player aware of the passage of time.

\
[]{#objandsub}

### Objective Time and Subjective Time

The objective time module is used, as we have seen, to keep track of
time based on the player\'s actions, either at a constant rate per turn,
or at a number of seconds per turn determined by the game author as
described above. The [subjective time](subtime.htm) module, on the other
hand can be used to assign times to particular events in the game (e.g.
once the player enters the throne room, it\'s three o\'clock in the
afternoon; when he first meets the princess it\'s half past four) and
then attempts to extrapolate between them if the player occasionally
consults the time (by looking at a clock in the hallway, for example).
The subjective time module also ensures that the time of the next event
is not reached prematurely. If the player character leaves the throne
room and wanders around for a while, the time will never reach half past
four until he meets the princess; if necessary the subjective time
module will slow down the passage of time to ensure that four thirty is
not reached prematurely (for a fuller explanation, see the explanation
of the [Rationale](subtime.htm#rationale) of the Subjective Time
module). This should work reasonably well so long as the player doesn\'t
try to check the time too often, since it relies on the player not being
fully aware of how much time ought to have passed.

Most games should not include both the subtime and objtime modules,
since they use different (and basically incompatible) methods of
reckoning the time. It is, however, possible to include both modules in
the sense that your game will still compile, and it will even attempt to
synchronize the two incompatible clocks, so far as that can be done.
This will produce some odd results, however, such as the time
occasionally (or even quite frequently) jumping backwards from what the
objective time module thinks it should be, and there can seldom be many
occasions when it\'s actually a good idea to include both modules. The
only good reason for doing do is if your game wants to use one method
for reckoning time in one segment of the game, and the other method in
another.

If both modules are present, the Subjective Time module attempts to
synchronize the two versions of time in the following ways:

-   When a ClockEvent occurs, the Subjective Time module sets the
    Objective Time module\'s time to the same time.
-   When the Subjective Time module commits to a time between two
    ClockEvents, the the Subjective Time module sets the Objective Time
    module\'s time to the same time.
-   When the Subjective Time module needs to calculate a time between
    two ClockEvents (since it\'s being asked to check the time), it will
    use the Objective Time\'s reckoning of time if and only if that
    would result in an earlier time than it would otherwise have used
    (since one of the main functions of the Subjective Time module is to
    prevent the time of the next ClockEvent being reached too quickly).
-   Once the last ClockEvent has been passed, the Subjective Time module
    simply takes its time from the Objective Time module (rather than
    its own reckoning of so many minutes per hundred turns).

Note, however, that these attempts to synchronize two basically
incompatible methods of reckoning time can only be partially successful
at best, and may well produce odd results. In particular, it would be a
bad idea to display the objective time anywhere (at least until the last
ClockEvent had been past), since it is likely to jump backwards and
forwards in strange ways as it is synchronized with the subjective time.

In sum, then, *don\'t include both the Objective Time module and the
Subjective Time module in the same game* unless you have a *very* good
reason for doing so and you\'re quite sure you know what you\'re doing.

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[objtime.t](../objtime.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Objtime\
[[*Prev:* MobileCollectiveGroup](mobilecollectivegroup.htm){.nav}    
[*Next:* Postures](postures.htm){.nav}     ]{.navnp}
:::
