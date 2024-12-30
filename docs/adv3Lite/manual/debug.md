::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Scope\
[[*Prev:* Scope](scope.htm){.nav}     [*Next:* Action
Reference](actionref.htm){.nav}     ]{.navnp}
:::

::: main
# Debugging Commands

When testing and debugging a work of interactive fiction it is sometimes
useful to be able to make use of a set of speoial commands not available
to normal players of your game. These special commands are known as
*debugging commands* and should only be included in the debug build of
your game, not the release build. This section describes the built-in
debugging commands and briefly discusses how you might add your own.

[]{#built-in}

## Built-In Debugging Commands

The following debugging commands are included in the adv3Lite library.
They are only included in your game when you compile for debugging, and
not when you compile for release.

**PURLOIN**: The command PURLOIN FOO (which can be abbreviated to PN
FOO) can be used to add any object to the player\'s inventory; e.g.
PURLOIN BRASS KEY causes the brass key to jump magically into the
player\'s possession from wherever the brass key is in the game world.
The PURLOIN command does impose certain sanity checks, so that, for
example, you can\'t purloin yourself, or a room, or anything that
currently contains the player character, but you can purloin things that
would normally be fixed in place.

**GONEAR**: The command GONEAR FOO (which can be abbreviated to GN FOO
or spelt as GO NEAR FOO) teleports the player character to FOO. If FOO
is a room the player character is taken to that room, otherwise the
player character is taken to the Room that encloses FOO. If FOO is
off-stage (i.e. if its location is nil) the command is not allowed to go
ahead. If FOO is a multiloc the destination the player character is
taken to may not be well defined.

**FIAT LUX**: The command FIAT LUX (or alternatively LET THERE BE LIGHT)
causes the player character to light up so s/he can see in an otherwise
dark place. Repeating the command toggles the illumination off again.

**DEBUG**: The command DEBUG simply breaks into the debugger.

**DEBUG ACTIONS**: The command DEBUG ACTIONS toggles the display of
debugging information about actions on and off. The information
displayed is simply the name of the action (e.g. PutOn) followed by the
names of any objects, topics or literals involved in the action,
separated by colons. The information is displayed at the start of the
action execution cycle.

**DEBUG DOERS**: The command DEBUG DOERS toggles the display of
debugging information about doers on and off. The information displayed
is simply the cmd string of the Doer (e.g. \'put Thing in casket\') .
The information is displayed just before Doer.exec() is called.

**DEBUG MESSAGES**: The command DEBUG MESSAGES toggles the display of
debugging information about messages on and off. The information
displayed is the id and pre-processed string of any
[messages](message.htm) output via DMsg() or BMsg() that have a
non-empty id. This may be helpful in identifying where the library is
getting many of its default messages from.

**DEBUG SPELLING**: The command DEBUG SPELLING simply toggles the
display of information about how long the spelling corrector took to
make a correction.

**DEBUG STOP** or **DEBUG OFF**: These commands are synonymous and
simply turn all the other debugging options (the three above) off at
once.

**DEBUG STATUS**: the command DEBUG STATUS lists whether the various
debugging options are currently on or off.

**TEST *XXX***: the TEST command can be used to run test scripts, on
which see further [below](#tests).

**EVAL**: The command EVAL *expression* (where *expression* is any valid
TADS 3 expression) evaluates the expression and displays the result. If
the expression evaluates to an object EVAL diplays the name property of
the object (if it has one) together with its superclass list. For
example:

::: cmdline
    >eval 2 + 5
    7

    >eval me.location
    hall [Room, ShuffledEventList]

    >eval hall.contents
    you [Thing],George [Actor],red ball [Thing],front door [Door],pictures [Thing],stairs [Thing],dial [NumberedDial],
      floor [MultiLoc,Decoration],ceiling [MultiLoc,Decoration]

    >eval frontDoor.isLocked
    true

    >open front door
    The front door is locked. 

    >eval frontDoor.makeLocked(nil)
    nil

    >open front door
    You open the front door.
:::

The final example of EVAL above illustrates that it is perfectly
possible to use the EVAL command with an expression that changes the
game state.

\
[]{#defining}

## Defining New Debugging Commands

If you want to define additional debugging commands for your particular
game, you can do so using the same means as described in the section on
[Defining New Actions](define.htm) above, with a couple of extra steps:

1.  Enclose the complete definition between [#ifdef \_\_DEBUG]{.code}
    and [#endif]{.code} preprocessor commands to ensure that your custom
    debugging commands are included only when you compiple for
    debugging.
2.  Ensure your action definition allows for universal scope if it needs
    to be able to act on any item in the game (and not just those that
    would normally be available to the player character).

For example, if in addition to the PURLOIN command which magically
transports objects into the player character\'s inventory, we\'d like to
have a SUMMON command which can summon any object into the player
character\'s presence (i.e. the same room as the player character) we
could do it like this:

::: code
     
    #ifdef __DEBUG

    VerbRule(Summon)
        'summon' multiDobj
        : VerbProduction
        action = Summon
        verbPhrase = 'summon/summoning (what)'
        missingQ = 'what do you want to summon'
    ;

    DefineTAction(Summon)
        addExtraScopeItems(role) { makeScopeUniversal(); }
        beforeAction() { }
        afterAction() { }
        turnSequence() { }
    ;

    modify Thing
        dobjFor(Summon)
        {
            verify()
            {
                if(isIn(gActor.getOutermostRoom))
                    illogicalNow('{The subj dobj} {is} already here. ' );
            }
            
            action()
            {
                moveInto(gActor.getOutermostRoom);
            }
            
            report()
            {
                "\^<<gActionListStr>> appears before you! ";
            }
        }
    ;
    #endif
:::

Note that since we probably don\'t want our debugging action to count as
normal turn we override beforeAction(), afterAction() and turnSequence()
on Summon to do nothing, thereby suppressing the before and after
notifications, daemons and advancing the turn count.(I\'m assuming that
since this is a debugging command the fact that \'appears\' may not
agree with its subject is not too much of problem, but if it bothers you
correcting it is left as an exercise for the reader.)

\

## [Test Scripts]{#tests}

When testing a game it\'s often useful to be able to run a set of
commands to test a particular feature. In adv3Lite you can set up named
test scripts to help automate this task. To define a test script, define
an object of the Test class (it can be an anonymous object). Use the
**testName** property to give the test script a name by which it can be
referred to with a TEST command. Then define the list of commands to be
performed by the test script in the **testList** property. For example:

::: code
     Test 
        testName = 'foo'
        testList = ['x me', 'i', 'look']
     ; 
     
:::

With this definition in place you can use the command TEST FOO to carry
out X ME followed by I followed by LOOK. You can also abbreviate the
definition of the Test object by using the built-in template, so:

::: code
     
     Test 'foo' ['x me', 'i', 'look'];
:::

For some scripts to work as required it may be necessary for the actor
to be in a particular location, or to have particular items in his/her
inventory. For example, to have the player character unlock the golden
door with the diamond key and then enter the throne room of the mystic
queen, you may first need to move the player character to the tulip
passage and ensure that the right key is in his inventory. The player
character may also need to have the yellow rose in his inventory if he
is then to present it to the mystic queen. We could set up these
conditions by using gonear and purloin commands in the script, but we
can also do so using the **location** and **testHolding** properties of
our Test object, thus:

::: code
    Test 
       testName = 'queen'
       testList = ['unlock golden door with diamond key', 'n', 'x queen', 'give yellow rose to queen']
       location = tulipPassage
       testHolding = [diamondKey, yellowRose]   
    ;
:::

Again, this may be abbreviated via use of the template to:

::: code
    Test 'queen' ['unlock golden door with diamond key', 'n', 'x queen', 'give yellow rose to queen']
      @tulipPassage [diamondKey, yellowRose]
    ;
:::

The command TEST QUEEN will then move the player character to
tulipPassage, move the diamondKey and the yellowRose into his inventory,
and then execute the defined sequence of commands. By default a room
description will be displayed following the move, but if you wish you
can disable this by setting the **reportMove** property of the Test to
nil (it\'s true by default to remind you of the effect of the TEST
command). Similarly, by default the TEST command will notify you of
items it moves into the player character\'s inventory, but this
notification can be suppressed by setting the **reportHolding** property
to nil.

You can remind yourself of what Tests you\'ve defined in your game by
using the LIST TESTS command. The command LIST TESTS FULLY also shows
the list of commands associated with each test name.

Finally, the TEST class and its associated actions are only defined in a
debug build, so you need to make sure that you surround any TEST
definitions with [#ifdef \_DEBUG]{.code} and [#endif]{.code} so that
they don\'t cause compilation errors in a release build; for example:

::: code
    #ifdef __DEBUG

    Test 'foo' ['x me', 'i', 'look'];

    Test 'queen' ['unlock golden door with diamond key', 'n', 'x queen', 'give yellow rose to queen']
      @tulipPassage [diamondKey, yellowRose]
    ;
     
    #endif 
     
:::

\
[]{#additional}

## Additional Debugging Resources

The adv3Library has one or two built-in checks to help with various
kinds of common situations. For example, when writing conversational
responses it\'s very easy to mismatch the smart quote tags \<q\> and
\</q\>; the adv3Lite thus looks out for any smart quotes that are
mismatched over the course of a single turn and displays a warning
whenever mismatched smart quotes are displayed, so the game author can
correct them (it also tries to prevent the effect of mismatched smart
quotes propagating to successive turns). If you want to suppress the
warning messages in the released version of your game you can override
quoteFilter.showWarnings to nil; however, you might find it useful to
leave the warnings on for versions of the game you sent to beta-testers,
which is why this isn\'t simply tied to whether or not you compiled for
debugging.

When your [beta-testers]{#beta_idx} test your game, it is often helpful
to get them to record a transcript of it (using the SCRIPT command), in
the course of which they can type comments such as:

::: cmdline
     >* TYPO elehpant -> elephant
     ...
     >* BUG! The brass key won't work on the inside of the tower door
     
:::

By default such comments are commands that start with an asterisk (\*).
To change how comments should be prefixed, see the discussion of the
[commentPreParser](output.htm#comment).
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Debugging Commands\
[[*Prev:* Scope](scope.htm){.nav}     [*Next:* Action
Reference](actionref.htm){.nav}     ]{.navnp}
:::
