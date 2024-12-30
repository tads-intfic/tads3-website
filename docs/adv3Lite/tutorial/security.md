::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> The Security Area\
[[*Prev:* The Maintenance Room](maintenance.htm){.nav}     [*Next:*
Making a Scene](scene.htm){.nav}     ]{.navnp}
:::

::: main
# The Security Area

So far the implementation of the Security Area is a little sparse.
We\'ll use this area of the map to introduce a couple of new puzzles,
not because they\'re terribly good puzzles, but in order to illustrate
some further features of the library. In particular we\'ll add a
combination lock to the suitcase containing the pilot\'s uniform. The
combination to the suitcase will be 1789, and as a clue we\'ll have a
sticker on the suitcase mentioning the French Revolution. In case some
players don\'t know that the French Revolution began in 1789 we\'ll also
provide a computer on which the player character can look this up. The
computer will be password protected but we\'ll make it easy to find the
password, by putting it in a notebook in the drawer of the desk on which
the computer stands. We\'ll start with the combination lock.

## Adding a Combination Lock to the Suitcase

Here\'s a first initial attempt at adding a sticker and a lock to the
suitcase:

::: code
    + suitcase: OpenableContainer 'suitcase;;case' 
        "It's a black suitcase with a combination lock and a prominent sticker
        bearing a French tricolor and the slogan <q>Vive la revolution
        francaise!</q>. "
        initSpecialDesc = "A suitcase stands neatly placed next to the settee. "  
        
        bulk = 8
    ;

    ++ Fixture 'sticker; prominent french; tricolor'
        "The sticker is prominently marked with a tricolor and bears the slogan
        <q>Vive la revolution francaise!</q> &mdash; Long Live the French
        Revolution! "  
        
        readDesc = (desc)
    ;

    ++ comboLock: Fixture 'combination lock'
        "The combination lock consists of four small brass wheels, each of which
        can be turned to any number between 0 and 9. "
    ;
:::

If you compile and run this, however, you\'ll quickly discover a
problem. You can use the debugging command GONEAR SUITCASE to teleport
straight to the location of the suitcase and then try examining the lock
and the sticker; you\'ll be told they\'re not there. The reason should
be reasonably obvious: the way we\'ve set things up puts the sticker and
the lock inside the suitcase, out of sight. Obviously that\'s not much
good, especially since once we actually lock the suitcase the lock will
be inaccessibly contained within the suitcase\'s interior, making it
impossible ever to unlock the suitcase. We need the lock and the sticker
to be on the outside of the container, while the uniform goes inside. To
do that we need to define a separate object to represent the lockable
interior of the suitcase and attach it to the suitcase\'s remapIn
property, just as we did when giving the short cabinet both an interior
and a top:

::: code
    + suitcase: Thing 'suitcase;;case' 
        "It's a black suitcase with a combination lock and a prominent sticker
        bearing a French tricolor and the slogan <q>Vive la revolution
        francaise!</q>. "
        initSpecialDesc = "A suitcase stands neatly placed next to the settee. "  
        
        bulk = 8
        
        remapIn: SubComponent
        {
            isOpenable = true
            lockability = indirectLockable
            isLocked = true
            bulkCapacity = 8
            indirectLockableMsg = 'You\'ll have to use the combination lock for
                that. '
        }
    ;
:::

Note that in adding the remapIn SubComponent to the suitcase, we also
need to change the superclass of the suitcase itself from
OpenableContainer to Thing. We\'ve also added an
[indirectLockableMsg]{.code} to the container defined on remapIn to
respond to attempts to UNLOCK SUITCASE and the like. One other thing we
have to do is to tweak the definition of the uniform so that it ends up
back inside the suitcase, by adding [subLocation = &remapIn]{.code}:

::: code
    ++ uniform: Wearable 'pilot\'s uniform; timo large'  
        "It's a uniform for a Timo Airlines pilot. It's a little large for you, but
        you could probably wear it. "
        
        bulk = 6
        subLocation = &remapIn
    ;
:::

We still don\'t have a working lock, however. To do that we need a set
of four brass wheels, each of which can be turned to any number from 0
to 9. Much of the behaviour we need is already defined on the
**NumberedDial** class, which you can read all about in the
[Gadgets](../manual/gadget.htm) section of the *adv3Lite Library
Manual*. A NumberedDial can be turned to any number between its
[minSetting]{.code} and its [maxSetting]{.code}, using the TURN TO or
SET TO commands.

This already does quite a bit of what we want our four brass combination
lock wheels to do, but not everything. In particular, each of the wheels
should have a similar description that includes a note of its current
setting; each should report that it\'s part of the combination lock if
the player attempts to take it; each should have a minSetting of 0 and a
maxSetting of 9; and when any of them is turned to a new setting we want
to check whether the combination lock is now set to the correct
combination. We can save ourselves quite a bit of repetitive coding if
we define this behaviour on a custom class:

::: code
    class ComboWheel: NumberedDial
        desc = "It's a small brass wheel that can be turned to any number between 0
            and 9, and is currently at <<curSetting>>. "
        
        maxSetting = 9
        
        cannotTakeMsg = 'You can\'t; it\'s part of the combination lock. '
            
        makeSetting(val)
        {
            inherited(val);
            location.checkCombo();
        }
    ;
:::

We don\'t need to define [minSetting = 0]{.code} on this class since
this is already the default for the NumberedDial class. The
[makeSetting(val)]{.code} is called whenever a NumberedDial is set to a
new value, so it\'s a convenient place to call the method that checks
whether the player now has the correct combination, a method we\'ll
actually define on the comboLock object in which the four wheels will be
located:

::: code
    ++ comboLock: Fixture 'combination lock'
        "The combination lock consists of four small brass wheels, each of which
        can be turned to any number between 0 and 9. They're currently showing
        the combination <<currentCombo>>. "
        
        currentCombo = (wheel1.curSetting + wheel2.curSetting + wheel3.curSetting +
                        wheel4.curSetting)
        
        correctCombo = '1789'
        
        checkCombo()
        {
            if(currentCombo == correctCombo)
            {
                reportAfter('You fancy you hear a slight click from the lock. ');
                location.remapIn.makeLocked(nil);            
            }
            else
                location.remapIn.makeLocked(true);
        }
        
    ;



    +++ wheel1: ComboWheel 'first wheel; small brass 1'
        curSetting = '3'
        listOrder = 1
    ;

    +++ wheel2: ComboWheel 'second wheel; small brass 2'
        curSetting = '5'
        listOrder = 2
    ;

    +++ wheel3: ComboWheel 'third wheel; small brass 3'
        curSetting = '9'
        listOrder = 3
    ;

    +++ wheel4: ComboWheel 'fourth wheel; small brass 4'
        curSetting = '2'
        listOrder = 4
    ;
:::

We\'ve done several things to the comboLock object here. First we\'ve
added a sentence to its description to show the combination it\'s
currently set at. Then we\'ve defined a [currentCombo]{.code} property
which yields the current combination by concatenating the current
settings of each of the four individual wheels. We also define a
[correctCombo]{.code} property to hold the combination that will
actually unlock the suitcase. Finally we define the
[checkCombo()]{.code} method that\'s called each time any wheel is
turned to a new number. This first checks whether the currentCombo is
the correctCombo; if it is it unlocks the suitcase (or rather the
container defined on the suitcase\'s remapIn property) and displays a
message hinting at success. We use [reportAfter()]{.code} to display
this message so that the report of the click comes *after* the standard
report of the wheel being turned to a new number. If the currentCombo
isn\'t the correctCombo, then the method locks the suitcase (even if
it\'s already locked); this ensures that setting the combination lock to
anything but the correct combination will lock the suitcase again.

The four wheels can then be easily defined, since most of their required
behaviour has already been defined on the ComboWheel class. We need to
give each wheel its own vocab and its own curSetting. We also give the
four wheels a listOrder in ascending sequence to ensure that whenever
the wheels are listed as a group (in response to X WHEELS, say, or in a
disambiguation prompt) they are shown in the right order. The numbers in
the adjective section of the vocab properties are simply to allow the
wheels to be referred to as \'wheel 1\', \'wheel 2\' etc.

If you compile and run the game again, you should find that the
combination lock now works as expected.

\

## The Desk and the Notebook

We\'ll put the desk for the computer in the security centre room, which
up to now has been left almost totally bare. We\'ll start by giving the
room a description:

::: code
    securityCentre: Room 'Security Centre' 'security centre'
        "Judging by the monitors on the walls, this must be some sort of security
        centre. Otherwise the room is mostly bare apart from the utilitarian desk
        located somewhere in the middle. The only way out is to the east. "
        
        east = securityArea
        out asExit(east)
    ;
:::

The security monitors are merely scenery; we can implement them briskly
as a Decoration:

::: code
    + Decoration 'security monitors; blank; screens ;them'
        "They're all blank; either they're switched off or they're not working. "
        
        notImportantMsg = 'You really don\'t have time to play around with the
            monitors. '
    ;
:::

The desk requires a little more thought, since this is to have a drawer.
The drawer can be implemented as a separate object, but we still want
OPEN DESK and the like to refer to the drawer. We can do that by having
the desk\'s remapIn property refer to the drawer while using its remapOn
property to provide it with a surface as a desktop:

::: code
    + desk: Heavy 'desk; utilitarian metal'
        "It's a utilitarian metal desk with a single drawer. "
        
        remapIn = drawer
        remapOn: SubComponent { }    
    ;

    ++ drawer: Fixture, OpenableContainer 'drawer'
        
        bulkCapacity = 5
        
        cannotTakeMsg = 'The drawer is part of the desk. '
    ;
:::

The only thing new here is the use of the **Heavy** class to define the
desk. This is almost the same as making it a Fixture, except that it
provides a custom [cannotTakeMsg]{.code}, \'The desk is too heavy to
move around\'. Next we add the notebook in the drawer:

::: code
    +++ notebook: Thing 'notebook; little green book; writing'
        "It's just a little green book with writing in it. "
        
        readDesc = "It turns to be full of lots of sets of random-looking
            characters, all crossed out apart from the last, which reads
            <<password>>. "

        password = 'B49qJt0'
        
        dobjFor(Open) asDobjFor(Read)
    ;
:::

There\'s just a couple of points to note about this object definition.
The first, a minor one, is that we\'ve given the notebook a
[password]{.code} property to make it easy to refer to the password
elsewhere (as we soon shall), and to ensure that everything still works
if we decide we want to change the password (in a more elaborate version
we might choose a new random password at the start of each game, for
example).

Of more note is the line [dobjFor(Open) asDobjFor(Read)]{.code}, which
means \"treat OPEN NOTEBOOK the same as READ NOTEBOOK\", or to put it
slightly more technically, \"when this object is the direct object of an
OPEN command, treat it as if it were the direct object of a READ
command.\" OPEN NOTEBOOK is certainly a reasonable thing for the player
to try, and this gives a perfectly good response for very little effort;
it\'s about the easiest way to provide a custom response to a command.

If you like, you can try compiling and running the game again, using
GONEAR SECURITY CENTRE to teleport straight to our newly-furnished room,
and then try finding and reading the notebook.

\

## [Looking Things up on the Computer]{#consult}

Finally, we need to implement the computer, so that the player can look
up the French Revolution on it. The adv3Lite library defines a
**Consultable** class for this kind of thing. A Consultable responds to
commands like CONSULT *something* ABOUT *sometopic* or LOOK UP
*sometopic* IN *something* or LOOK UP *sometopic* ON *something*, and
several other such equivalent variants. We\'ll also make the computer
inherit from the Heavy class (which we also used for the desk) so the
player character can\'t pick it up and carry it around, and we\'ll give
it a specialDesc to make sure that the player knows that it\'s there:

::: code
    ++ computer: Heavy, Consultable 'computer;; pc keyboard screen'
        
        specialDesc = "A computer sits squarely on top of the desk. "
        subLocation = &remapOn
    ;
:::

That\'s all very well, but this definition doesn\'t tell the computer
how to respond to specific requests for information. To do that we have
to supply it with a number of **ConsultTopic** objects which we locate
directly within the computer (i.e. in this case we precede them with +++
to indicate a further level of containment nesting). But before we can
do that, we have to take a prior step. You\'ll recall we said that a
Consultable responds to commands like LOOK UP *sometopic* ON
*something*. Well, the computer is certainly *something* but what about
the French Revolution? That\'s hardly a thing in the normal sense of the
term, and it\'s certainly not an object implemented in our airport game,
so how are we going to refer to it?

The answer is to define it not as a [Thing]{.code} but a *Topic*. A
Topic is a game object that doesn\'t represent a physical object, or at
least, doesn\'t represent a physical object implemented in the game, but
instead represents something more abstract, such as liberty, equality,
fraternity or, as here, the French Revolution. To define a Topic we
simply define an object of the Topic class and give it a vocab property:

::: code
    tFrenchRevolution: Topic 'french revolution';
:::

A convenient place to put this definition might be right at the end of
the start.t file, out of the way of anything else. Since the player
might reasonably use our simulated computer to look up flight
departures, we might as well define a topic for that while we\'re at it
too:

::: code
    tFlightDepartures: Topic 'flight departures; plane; times';
:::

The vocab property of a Topic is defined just like that for a Thing, so
here we\'ve ensured that the tFlightDepartures Topic will match FLIGHT
TIMES, PLANE DEPARTURES and PLANE TIMES as well as FLIGHT DEPARTURES.
Note that there\'s nothing magical about prefacing the object names of
these Topics with t, that\'s just a convention I employ to make Topics
easily recognizable as such when I reference them elsewhere in my code.
For the full story on Topics see the section on
[Topics](../manual/topic.htm) in the *adv3Lite Library Manual*.

The next step is to associate these topics with appropriate responses
from our computer. As mentioned the way to do that is to define a couple
of ConsultTopic objects located directly in the computer. The template
notation makes this quick and easy:

::: code
    +++ ConsultTopic @tFrenchRevolution
        "According to Wikipedia, the French Revolution began in 1789. The article
        goes on to tell you quite a bit more about it, but you don't have time to
        read it all now. "
    ;

    +++ ConsultTopic @tFlightDepartures
        "So far as you can tell from the information displayed, Timo Flight 179 to
        Buenos Aires is likely to be the only one out of here for the next several
        hours, all the others being delayed for a variety of annoying reasons such
        as strikes, illness and inclement weather. "
    ;
:::

Here we define the topic we want the ConsultTopic to respond to after an
@ sign as the first element of the template, and the response we get as
a double-quoted string as the second element. Note that the object
following the @ sign doesn\'t have to be a Topic; it could also be a
Thing defined elsewhere in our game if we wanted to look it up in/on
something.

We also need to define what response the computer gives (or in this
case, a reason for not even trying to get a response) when the player
tries to look up something we haven\'t supplied a specific response for.
We can do this by means of a **DefaultConsultTopic**, which is what the
game will resort to if it can\'t find a more specific ConsultTopic that
matches what the player asked for:

::: code
    +++ DefaultConsultTopic
        "That's of no immediate interest to you right now; you have more urgent
        things to attend to. "
    ;
:::

For the full story on Consultables and ConsultTopics, see the section on
[Topic Entries](../manual/topicentry.htm) in the *adv3Lite Library
Manual*.

\

## Complicating the Computer

The computer now works to provide the player with a strong clue about
the combination needed to open the suitcase, together with the
information about the lack of alternative flights out of the airport at
any time in the near future, but we did say we\'d make things a little
more difficult. In particular, before the player character can look
anything up on the computer he first needs to switch it on and then
enter a password. This will make the computer the most complex object
we\'ve defined so far, so we\'ll take it step-by-step.

The first step is to define a couple of properties to keep track of the
computer\'s state. We\'ll use the standard [isOn]{.code} property to
keep track of whether it\'s on or off, and set [isSwitchable =
true]{.code} so that the player character can turn it on and off. Then
we\'ll define a custom [passwordEntered]{.code} property to keep track
of whether the password has been entered since turning the computer on.
We can use the [makeOn(stat)]{.code} method to reset
[passwordEntered]{.code} to nil each time we turn the computer on, and
also to display appropriate messages about the computer being turned on
and off. We can also use the [isOn]{.code} and [passwordEntered]{.code}
properties to change the description of the computer according to its
state:

::: code
    ++ computer: Heavy, Consultable 'computer;; pc keyboard screen'
        "The computer is currently <<if isOn>>on and <<if passwordEntered>> ready
        for use<<else>> waiting for you to enter a password<<end>> <<else>>
        off<<end>>."
        
        specialDesc = "A computer sits squarely on top of the desk. "
        subLocation = &remapOn
        
        isSwitchable = true
        
        makeOn(stat)
        {
            inherited(stat);
            if(stat)
            {
                "The computer rapidly boots up and displays a screen asking you
                to enter a password. ";
                passwordEntered = nil;
            }
            else
                "The computer rapidly powers down. ";
        }
        
        passwordEntered = nil
:::

For the next step, we need to prevent the player from looking anything
up on the computer either if it isn\'t switched on or if it\'s still
waiting for a password. For this we need to override its handling of the
[ConsultAbout]{.code} command, which handles commands of the form
CONSULT COMPUTER ABOUT DEPARTURES or LOOK UP FRENCH REVOLUTION ON
COMPUTER. We\'ve already seen a couple of examples of customizing what
commands do by using an [action()]{.code} method within a
[dobjFor(SomeAction)]{.code} block. Actually, this is just a convenient
way of defining a method called actionDobjSomeAction(), but if you find
that a little puzzling you can either ignore it totally for now or read
about *Property Sets* in the section on \"Object Definitions\" in Part
III of the *TADS 3 System Manual*. What\'s more to the immediate point
is that it isn\'t the action stage we want to override here, because we
don\'t want to change what the ConsultAbout action *does*, but when
it\'s allowed to do it.

There are earlier stages at which we can intervene to prevent an action
from taking place, the **verify** stage and the **check** stage. We
don\'t often have to override a verify() method in adv3Lite games, since
we can normally override properties like [isEnterable]{.code} and
[canPutBehindMe]{.code} instead, which properties affect the way the
verify method works. Each action has a verify method that is used to
check for certain obvious illogicalities, such as trying to put an
object into itself. The verify method also checks the boolean property
is*Blankable* so this gives you easy control over whether the action is
considered sensible. If you want to rule out an action as illogical for
a given object, just set is*Blank*able to nil, and then set the
cannot*Blank*Message to customize the reason that is given to the player
when that action is attempted.

Because the verify method respects the is*Blank*able and
cannot*Blank*Message properties, you are unlikely to need to override
the verify method. However, if for some reason you do need to override
the verify method, it is recommended that you also call the inherited
method so that the basic sanity tests on the action will also be
performed.

We shan\'t override a verify method now, since it wouldn\'t be a good
choice here. A verify method affects the parser\'s choice of objects; if
we prevent an action from going ahead in a verify routine we\'re telling
the parser that this object is a bad choice for this action; but the
computer is a good choice for the ConsultAbout action, so stopping the
action at the check stage would be a much better choice. If you want to
do other kinds of checks that potentially block an action from
happening, without affecting the parser\'s choice of objects, the check
method is your hook for accomplishing this. Printing any message in the
check method will block the action, so simply override the check method
with the tests you want to perform and the corresponding blocking
messages you want to display. In this case we want to stop the action
from going ahead either if the computer hasn\'t been turned on yet
([isOn == nil]{.code}) or if the password hasn\'t been entered yet
([passwordEntered == nil]{.code}). Our check routine should therefore
look like this:

::: code
        dobjFor(ConsultAbout)
        {
            check()
            {
                if(!isOn)
                    "You can't do that until the computer is switched on. ";
                else if(!passwordEntered)
                    "You'll need to enter a password first. ";
            }
        }
:::

For further information on the check() stage in general, see the [Action
Responses](../manual/actres.htm#check) section of the *adv3Lite Library
Manual*.

Finally, we need to provide a way for the player to enter the password
on the computer. The EnterOn action does what we want: it accepts
commands of the form ENTER *someliteral* ON *someobject* (e.g. ENTER
P345 ON COMPUTER). *Someobject* is then the direct object of the
command, while we can get the value of *someliteral* (i.e. what the
player wants to enter on the computer) from the pseudo-global variable
[gLiteral]{.code}.

The library provides no default handling for the EnterOn action apart
from ruling it out at the verify stage. To allow the action to go ahead
at all we therefore first need to define [canEnterOnMe = true]{.code} on
the computer.

To make something happen when the player tries to enter something on the
computer, we need to define what we want to happen at the action stage.
Our routine should first check whether the password entered by the
player matches the password in the notebook. If it does, then the
routine should tell the player that s/he\'s been successful and set
[passwordEntered]{.code} to true, to signal that the correct password
has now been entered. If it doesn\'t, then we just need to display a
message telling the player that the password s/he just tried to enter is
incorrect.

We probably don\'t want to allow the player to keep entering commands
once the password has been accepted since we\'re not trying to emulate a
complete PC here; a good solution would be a check method that doesn\'t
allow the EnterOn action to go ahead once [passwordEntered]{.code} is
true.

Our handling for the EnterOn action, which allows the player character
to enter a password on the computer (once it is switched on), thus looks
like this:

::: code
       
        canEnterOnMe = true
        
        dobjFor(EnterOn)
        {
            check()
            {
                if(!isOn)
                    "You can't do that until the computer is switched on. ";
                else if(passwordEntered)
                    "You've already entered the password; this is no time to start
                    playing around with random commands. ";
            }
            
            action()
            {
                if(gLiteral == notebook.password)
                {
                    "The computer displays WELCOME for a few seconds, and then
                    clears to allow you to enter commands. ";
                    
                    passwordEntered  = true;
                }
                else
                    "The computer flashes PASSWORD NOT RECOGNIZED at you. ";
                    
            }
        }
:::

One additional refinement we could add is to make TYPE PASSWORD ON
COMPUTER work the same as ENTER PASSWORD ON COMPUTER, which we can do
easily enough by defining [dobjFor(TypeOn) asDobjFor(EnterOn)]{.code}.
The complete object definition for the computer then looks like this:

::: code
    ++ computer: Heavy, Consultable 'computer;; pc keyboard screen'
        "The computer is currently <<if isOn>>on and <<if passwordEntered>> ready
        for use<<else>> waiting for you to enter a password<<end>><<else>>
        off<<end>>. "
        
        specialDesc = "A computer sits squarely on top of the desk. "
        subLocation = &remapOn
        
        isSwitchable = true
        
        makeOn(stat)
        {
            inherited(stat);
            if(stat)
            {
                "The computer rapidly boots up and displays a screen asking you
                to enter a password. ";
                passwordEntered = nil;
            }
            else
                "The computer rapidly powers down. ";
        }
        
        passwordEntered = nil
        
        dobjFor(ConsultAbout)
        {
            check()
            {
                if(!isOn)
                    "You can't do that until the computer is switched on. ";
                else if(!passwordEntered)
                    "You'll need to enter a password first. ";
            }
        }
        
        canEnterOnMe = true
        
        dobjFor(EnterOn)
        {
            check()
            {
                if(!isOn)
                    "You can't do that until the computer is switched on. ";
                else if(passwordEntered)
                    "You've already entered the password; this is no time to start
                    playing around with random commands. ";
            }
            
            action()
            {
                if(gLiteral == notebook.password)
                {
                    "The computer displays WELCOME for a few seconds, and then
                    clears to allow you to enter commands. ";
                    
                    passwordEntered  = true;
                }
                else
                    "The computer flashes PASSWORD NOT RECOGNIZED at you. ";
                    
            }
        }
     
        dobjFor(TypeOn) asDobjFor(EnterOn)
        
    ;
:::

You might once again like to compile and run the game to ensure that all
works as expected.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> The Security Area\
[[*Prev:* The Maintenance Room](maintenance.htm){.nav}     [*Next:*
Making a Scene](scene.htm){.nav}     ]{.navnp}
:::
