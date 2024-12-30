::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Finishing
Touches](finish.htm){.nav} \> What More?\
[[*Prev:* Hints](hints.htm){.nav}     [*Next:*
Conclusion](conclusion.htm){.nav}     ]{.navnp}
:::

::: main
# What More?

## What More Might Go in the Airport Game?

We\'ve taken the Airport game as far as we need to for the purposes of
this tutorial, and it can now be played through from beginning to end,
but it\'s not exactly finished in the sense of being a fully-polished
product. Quite apart from finishing off the scoring and the hints and
maybe broadening the range of conversational responses there\'s quite a
bit more that could be done if you wanted to practise your adv3Lite
skills on it. For example, the description of the power cable running
off from the metal detector mentions a desk, but we haven\'t implemented
the desk. In a properly polished game there should at least be a
Decoration object to represent it. Then there\'s the issue of where the
original passengers from the plane disappear to once the player dons the
pilot\'s uniform; perhaps they\'d all go to the snack bar? The room
description for the gate3 room is certainly inappropriate once the
original passengers have been booted off the plane, so ideally it should
be made to change according to circumstances. And why is Passenger
Quixote always called to the information desk? Might we want to arrange
for the name to be varied?

Again, more could be done with flying the plane. What happens if the
player character leaves the cockpit to go and chat to Angela again while
the plane is careering down the runway? Should we take steps to prevent
this happening (perhaps by not allowing the player character to leave
his seat while the plane is in motion?). Should Angela join the player
character in the cockpit, perhaps, and what might happen if she does?
Should it be necessary for the player character to take more precautions
against the drug barons when he goes to fly the plane, e.g. by locking
the cockpit door from the inside to prevent Pablo Cortez bursting in on
him? That is, should we make Cortez burst in and upset things if the
player character doesn\'t lock the cockpit door before attempting to fly
the plane? How might we clue the player that he needs to do this? Could
we extend the game a few turns beyond takeoff so that the player
character actually has to turn the plane onto a certain course and radio
ahead in order to win?

There\'s no compulsion for you or any other reader of this tutorial to
pursue any of these questions. By now, you might well prefer to get on
with your own game. But if you did want to play around with the Airport
game a bit more to practise what you\'ve learned and try out some other
things, there\'s certainly plenty of scope.

\

## What More is There in adv3Lite?

While we\'ve covered most of the features of adv3Lite you\'re likely to
use, we haven\'t covered absolutely everything, so for the sake of
completeness we should mention the main features we haven\'t looked at
in this tutorial and point out where you can read about them in the
*adv3Lite Library Manual*.

Perhaps the most common IF trope we haven\'t even mentioned yet is that
of **light and darkness**, i.e. creating one or more rooms that are in
darkness, to which the player character has to bring a light source in
order to find his/her way around. In some circles such light/darkness
puzzles are rather frowned on as being tired and hackneyed, but there\'s
nothing wrong with them if they form a natural and integral part of your
story, rather than just being thrown in for the sake of a puzzle. To
make a room dark in adv3Lite you just define its [isLit]{.code} property
to be nil. You may then want to define its [darkName]{.code} and
[darkDesc]{.code} properties to give the name and description of the
room that will be displayed while it is in darkness. There are also
methods and properties you can define to determine what happens when the
player character tries to travel around in the dark. For details, read
the section on [Rooms and Regions](../manual/room.htm) in the *adv3Lite
Library Manual*. If you define one or more dark rooms your game will
probably need a light source or two. The simplest way to make a Thing a
light source is to define its [isLit]{.code} property to be true. For a
light source you can switch on and off you can use the
[Flashlight]{.code} class. If you want an object to be visible in the
dark without illuminating anything else (the stars in the night sky, for
example, or the shadowy outline of a staircase leading up out of a
darkened cellar), you can set its [visibleInDark]{.code} property to
true.

Another fairly major adv3Lite feature we haven\'t touched on at all in
this tutorial is the **SenseRegion**. Traditionally in IF, and in all
the examples we have seen in this tutorial, the only items that are in
scope for the player character are those in his or her immediate
location. An actor in IF can usually only sense and interact with
objects that are in the same room. The
[SenseRegion](../manual/senseregion.htm) class allows you to define a
set of rooms between which sensory information can pass. This means
that, depending on how exactly you set things up, an actor (including
the player character) located in one room of the SenseRegion may be able
to see, hear and/or smell objects in another room in the same
SenseRegion.

It\'s not that uncommon to see requests on IF fora from time to time
asking how to implement a **THINK ABOUT** command (i.e. a command that
allows the player to type commands like THINK ABOUT MARTIN and get a
sensible response). The adv3Lite library has built-in handling for this,
which represents [Thoughts]{.code} as TopicEntries rather in the manner
of ConsultTopics used with a Consultable. You can read about it in the
section on [Thoughts](../manual/thought.htm) in the manual.

We introduced (and employed) the concept of [TravelConnectors]{.code} in
the course of the tutorial, but made no mention of the
**TravelBarriers**, which it is sometimes useful to define in
conjunction with them (especially when the same conditions prohibiting
travel potentially apply to more than one TravelConnector). For more
details, refer to the section on [Travel Connectors and
Barriers](../manual/travel.htm) in the manual.

One of the trickiest things to handle in IF can be **attaching** one
object to another. It\'s tricky because attachment can have so many
consequences. If I attach the widget to the spungler, should the widget
move with the spungler if I attempt to move the spungler, or should it
prevent me from moving the spungler or what? If I take hold of the
widget while it\'s attached to the spungler and try to take it into
another room, do I drag the spungler along with it, or do I
automatically detach it from the spungler, or does the spungler snatch
the widget from my grasp, or am I prevented from moving to another
location while holding the widget that\'s attached to the spungler, or
does the widget unravel so that I\'m left holding one of it in my new
location while the other end is still attached to the spungler? There
are so many different possibilities that it\'s virtually impossible for
an IF library to cover them all, and adv3Lite doesn\'t even try to. It
does, however, try to offer some support for a few simple, common cases,
and you can read about this in the
[Attachables](../manual/attachable.htm) section of the manual.

A common feature of many IF languages is **Fuses** and **Daemons** (or
something that provides similar functionality under a different name). A
Fuse provides a means of making something happen after so many turns,
while a Daemon provides a way of making something happen each turn (or
every so many turns). For details see the section on
[Events](../manual/event.htm) in the manual.

At various points in the tutorial we\'ve made use of a
[StopEventList]{.code} or [ShuffledEventList]{.code}, but we haven\'t
covered **EventLists** in any systematic fashion. For the full story see
the section on [EventList](../manual/eventlist.htm) in the manual.

Most of what we\'ve covered in this tutorial has assumed that the chief
sense being used is the sense of sight. But the adv3Lite library does
provide some support for **other senses**. You can read about the
[listenDesc]{.code}, [feelDesc]{.code}, [smellDesc]{.code} and other
sensory properties of Things in the
[Things](../manual/thing.htm#sensory) section of the manual. There\'s
also a [Noise]{.code} class and an [Odor]{.code} class you can read
about in the [Extras](../manual/extra.htm#emanation) section.

Finally, adv3Lite provides the facility for you to display custom
**menus** in your game (the hint system makes use of this). For details
consult the [Menus](../manual/menu.htm) section of the manual.

\

## What More Might You Need to Know?

This tutorial has tried to cover most of the basics, but there are a
couple of areas where it may have left some gaps in your knowledge.

First, we really only have covered the basics of dealing with actions.
In particular, we\'ve largely only dealt with one kind of action, the
kind that simply takes a direct object (e.g. PULL STICK). But in writing
IF it is often necessary to deal with many other kinds of action: those
that act on both a direct and an indirect object (e.g. TURN BOLT WITH
WRENCH) or those that act on no object at all (e.g. THINK), or those
that act on Topics or Literals. Before you can get very far with writing
your own game you will need to understand the differences between these
various kinds of action and how to deal with them. The Action
[Overview](../manual/actionoverview.htm) section of the manual is vital
reading in this regard, but you\'ll really need to study the entire
Chapter on [Actions](../manual/action.htm) sooner rather than later.

Second, while this tutorial has made some attempt to introduce features
of the TADS 3 *language*, it has only introduced some of the most common
ones, and even then not in an entirely systematic fashion. More detailed
and systematic information on the TADS 3 language is contained in the
*TADS 3 System Manual*, and it really is information you need to know to
be effective as a TADS 3 programmer. Unfortunately (or fortunately,
perhaps, depending on your point of view) not all the information in the
*TADS 3 System Manual* is equally relevant to the day-to-day tasks of
the TADS 3 game author, so you certainly don\'t need to read all of it
to start out with.

The following sections of the [TADS 3 System Manual](../sysman.htm) are
probably the ones you\'ll need to become familiar with sooner rather
than later:

### Part III: The Language

Source Code Structure\
Fundamental Datatypes\
String Literals\
Object Definitions\
Expressions and Operators\
Procedural Code

### Part IV: The Intrinsics

tads-gen Function Set\
Object\
List\
String\
TadsObject\
Vector

### Part V: The System Library

Program Initialization

\

By the way, when I say \"need to become familiar with\" I certainly
*don\'t* mean \"learn off by heart\" but rather read through a couple of
times so you become generally familiar with the contents, learn the bits
you commonly need to use every day, and know where to look up the rest.

Once you\'ve got going you may also find it worthwhile to read the
following sections:

### Part III: The Language

The Preprocessor\
Enumerators\
The Object Inheritance Model\
Inline Objects\
Multi-Methods\
Dynamic Object Creation\
Optional Parameters\
Named Arguments\
Exceptions and Error Handling\
Reflection

### Part IV: The Intrinsics

t3vm Function Set\
Regular Expressions\
tads-io Function Set\
Input Scripts\
Collection\
LookupTable\
RexPattern\
StringBuffer

In addition, if you want to develop games for the Web UI you\'ll
obviously want to read [Part VII: Playing on the Web]{.code}.

While none of the material in this second list is vital to writing a
game in TADS 3 when you\'re starting out, it does discuss features of
the system which will help you to make the best use of it, so it\'s well
worth getting to know some of it and at least being aware of the
existence of the rest so you can come back to it again when you hit a
situation it may be helpful for.

The other sections of the *TADS 3 System Manual* can probably be left
until you specifically need them or you\'re overwhelmed by curiosity to
know what\'s there (it\'ll be worth succumbing to such curiosity at some
stage, since even a relatively obscure feature may turn out to be just
the one you want for your particular game).

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Finishing
Touches](finish.htm){.nav} \> What More?\
[[*Prev:* Hints](hints.htm){.nav}     [*Next:*
Conclusion](conclusion.htm){.nav}     ]{.navnp}
:::
:::
