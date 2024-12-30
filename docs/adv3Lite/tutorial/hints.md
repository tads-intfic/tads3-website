::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Finishing
Touches](finish.htm){.nav} \> Hints\
[[*Prev:* Scoring](scoring.htm){.nav}     [*Next:* What
More?](whatmore.htm){.nav}     ]{.navnp}
:::

::: main
# Hints

While not always strictly necessary, it\'s often a good idea for a game
to include in-game hints. The adv3Lite library provides an
invisiclues-like hint system (virtually identical to that provided in
the adv3 library), i.e. one that allows the user to select a topic from
a menu of current problems and then reveal hints one at a time; such
hints should generally start as vague nudges and become increasingly
specific, so that on the one hand the player doesn\'t get stuck but on
the other s/he\'s given every opportunity to solve the problem for
him/herself. How this hint system is implemented is described in the
section on [Hints](../manual/hint.htm) in the *adv3Lite Library Manual*.

For the Airport game we\'ll illustrate this with the beginnings of a
fairly simple (one-level) hints system. For this purpose we need to
define an object (which can be anonymous) of the **TopHintMenu** class.
In a larger game we\'d probably put the hints in a file of their own,
but for the purposes of this tutorial we can put them at the end of the
start.t file, so that\'s where we\'ll put the [TopHintMenu]{.code}.
Then, under the [TopHintMenu]{.code} and located within it (with the +
syntax) we need to define a number of **Goal** objects. Each
[Goal]{.code} object represents a problem or goal the player may be
currently working on. By defining the conditions under which the Goal is
opened and closed we can ensure that when the player requests hints,
s/he only sees a menu containing goals that are currently relevant.
Goals relating to problems that have already been solved will be removed
from the list, and Goals relating to problems yet to be encountered
won\'t be shown yet (thereby avoiding the risk of spoilers).

In addition to defining the conditions under which a Goal becomes
available and ceases to be relevant, we need to define two further
properties for each Goal:

1.  The name or description of the Goal, in terms of what the player
    might be trying to achieve (e.g. \'Where can I find a ticket?\')
2.  A list of progressively more explicit hints that nudge the player
    towards the achievement of the Goal.

As ever, this should become clearer with a concrete example. Perhaps the
first thing the player will need a hint for is indeed where to find a
plane ticket, since it\'s not exactly obvious that there\'ll be one
conveniently left around inside a newspaper left in the snack bar. The
player may first become aware of the need for a ticket when Angela asks
the player character for one, which takes place the first time the
player character visits the front of the plane and sees Angela.
Conversely we know that the player character has found the ticket when
he has taken it, which is also when he\'s awarded points for the
ticketAchievement (a condition that the Goal class happens to make it
easy to test for). We might accordingly define the start of our hint
system thus:

::: code
    TopHintMenu;

    + Goal 'Where can I find a plane ticket?'
        [
            'You don\'t have the wherewithal to buy one. ',
            'But perhaps someone else may have mislaid theirs. ',
            'If you hunt around a bit you may find it. ',
            'Where might people go in an airport when awaiting a flight? ',
            'Especially if they\'re a bit peckish. ',
            'Have you visited the snack bar? ',
            'Has anything been left lying around there? ',
            'Try taking a closer look at that newspaper. '
        ]
        
        openWhenSeen = angela
        closeWhenAchieved = ticketAchievement
    ;
:::

Note that we can use the Goal template to specify both its
[title]{.code} property (\'Where can I find a plane ticket?\') and its
[menuContents]{.code} property (the list of hints), but we need to
define its [openWhenSeen]{.code} and [closeWhenAchieved]{.code}
properties explicitly (actually you could define the second of these
through the template too, but let\'s ignore that for now). For a
complete list of the properties that can be used to open and close goals
consult the section on [Hints](../manual/hint.htm) in the *adv3Lite
Library Manual*.

Another problem the player might encounter quite early on is trying to
take the ID card through the metal detector. We\'ve already used the tag
[\<.reveal card-confiscated\>]{.code} to note when the security guard
confiscates the ID card, so it\'s easy enough to test for that. The
condition for closing the Goal may need a little more thought, though.
The obvious point at which to close it might be when powerAchievement
has been achieved, but if we started to write a set of hints on that
basis we\'d soon run into trouble. Once we\'d got as far as hinting that
the switch might be in the maintenance area, we\'d run up against the
problem that the maintenance door was locked, which effectively sets up
another Goal. Moreover, if we were to write a set of hints to tell the
player how to find the switch once the player character was in the
Maintenance Room, they\'d all be a bit premature until the player
character was actually there. So we actually need to break this goal
down into a number of sub-goals, and at one point at least we\'ll need
one of the hints in the primary Goal (getting the card through the metal
detector) to open the secondary goal of getting through the maintenance
room door. We can do that by defining a separate **Hint** object that
opens the secondary Goal when the corresponding hint is displayed, like
this:

::: code
    + Goal 'How do I get the ID card through the metal detector?'
        [
            'Did you take a good look at the ID card? ',
            'Have you found it again after it was confiscated? ',
            'If not, where do you think the other security guard may have taken it?
            ',
            'Might it have been left for its owner to collect? ',
            'Might that be why it was left there in the first place? ',
            'What might the magnetic stripe on the card do to the metal detector? ',
            'How closely have you examined the metal detector? ',
            'What does the power cable leading to the metal detector suggest? ',
            powerHint
            
        ]

        openWhenRevealed = 'card-confiscated'
        closeWhenAchieved = powerAchievement
    ;

    ++ powerHint: Hint 
        'Might there be a way of cutting the power to the metal detector?'
        [powerGoal]
    ;

    + powerGoal: Goal 'How do I cut the power to the metal detector? '
        [
            'Which direction does the power cable lead in? ',
            'What else lies in roughly that direction? ',
            'What lies beyond the metal detector? ',
            'Where might the power be controlled from? ',
            maintenanceHint
        ]
        
        closeWhenAchieved = powerAchievement
    ;

    ++ maintenanceHint: Hint
        'What might the Maintenance Room be for? '
        [maintenanceGoal]
    ;

    + maintenanceGoal: Goal 'How do I open the door to the Maintenance Room?'
        [
            'What\'s preventing the door from being opened? ',
            'Who might have the key to it? ',
            'What sort of places might such a person visit in his work? ',
            'Where might he clean? ',
            'Where might you find a bathroom or toilet? ',
            'Could there be one aboard the plane? '    
        ]
        openWhenRevealed = 'maintenance-door-locked'
        closeWhenSeen = maintenanceRoom
    ;

    + Goal 'Where can I find the power switch for the metal detector?'
        [
            'Which room might you expect to find it in? ',
            'What can you see in that room? ',
            'You are looking in the Maintenance Room, aren\'t you? ',
            'What might be in those cabinets? ',
            'Where might someone hide the cabinet key? ',
            'What\'s on top of the shorter cabinet? ',
            'What might be under the pot plant? ',
            'What\'s inside the shorter cabinet? '
        ]
        
        openWhenTrue = maintenanceRoom.seen && gRevealed('card-confiscated') 
        && (powerCable.examined || powerGoal.goalState == OpenGoal)
        
        closeWhenAchieved = powerAchievement
    ;
:::

There\'s nothing magical about locating the Hint objects within the Goal
objects like this; it doesn\'t associate the Hint with the Goal, it
simply ensures that the Hint objects don\'t get in the way of the Goal
containment hierarchy, i.e. the location of the Goals within the
TopHintMenu object. The first property we define on Hint objects (in the
single-quoted string) is simply the text of the Hint when it\'s
displayed. The second is the list of Goals that are opened when the Hint
is displayed. So here, when the \'What might the Maintenance Room be
for?\' Hint is displayed, the \'How do I cut the power to the metal
detector?\' Goal is automatically opened, and when the \'Might there be
a way of cutting the power to the metal detector?\' Hint is displayed,
the \'How do I open the door to the Maintenance Room?\' Goal is
automatically opened.

The condition for opening the \'Where can I find the power switch for
the metal detector?\' is a bit more complicated. We can\'t assume that
the player has used any of the previous hints to arrive at this point,
but we want to try to ensure that s/he\'s arrived at a point where the
hint is relevant. We assume this is the case when the player has gained
access to the Maintenance Room, and the ID card has been confiscated (so
the player has a motive for wanting to cut the power to the metal
detector) and either the power cable has been examined (so that the
player has some reason for supposing that cutting the power might be a
solution) or the powerGoal is currently open (so that the player has
clearly been given a hint to that effect). This isn\'t entirely
foolproof, but since there\'s no absolutely sure way of reading the
player\'s mind here, it\'s probably the best we can do.

Note that we\'ve provided an alternative means of opening the \'How do I
open the door to the Maintenance Room?\' Goal, namely when the player
character discovers the door to be locked. For this to work we need to
arrange for the attempt to open the locked door to cause the
\'maintenance-door-locked\' key to be revealed. The easiest way to do
that is to add a [\<.reveal maintenance-door-locked\>]{.code} tag to the
end of the message that says the door is locked:

::: code
    + maintenanceRoomDoor: Door 'metal door'
        "It's marked <q>Personal de Mantenimiento S&oacute;lo</q>, and <<if isOpen>>
        is currently open<<else>> looks firmly closed<<end>>. "
        
        otherSide = mrDoorOut
        lockability = lockableWithKey
        isLocked = true
        
        lockedMsg = (inherited + '<.reveal maintenance-door-locked>')
    ;
:::

We have gone far enough now to illustrate the main principles of
implementing a hint system in adv3Lite; completing the hints for the
Airport game can once again be left as an exercise for the interested
reader.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Finishing
Touches](finish.htm){.nav} \> Hints\
[[*Prev:* Scoring](scoring.htm){.nav}     [*Next:* What
More?](whatmore.htm){.nav}     ]{.navnp}
:::
:::
