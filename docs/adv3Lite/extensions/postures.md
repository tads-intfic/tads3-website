::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Postures\
[[*Prev:* Objective Time](objtime.htm){.nav}     [*Next:*
Relations](relations.htm){.nav}     ]{.navnp}
:::

::: main
# Postures

## Overview

The purpose of the [postures.t](../postures.t) extension is to allow
actors to adopt different postures (standing, sitting or lying) and to
enforce a number of rules about what postures are permitted in what
nested rooms, and what postures are adopted when entering or leaving a
nested room. One effect of this is that the commands STAND, SIT and LIE
work differently with this extension from the way in which they work in
the standard adv3Lite library. Instead of moving the actor to a new
location (as they may in the standard library) they will try to make the
actor adopt a new posture in the actor\'s current location (assuming the
posture is allowed in that location). The commands STAND ON, SIT ON, LIE
ON, STAND IN, SIT IN and LIE IN all change the actor\'s posture as well
as moving the actor to the location specified, while the commands BOARD
(or GET ON), ENTER (or GET ON), GET OFF and GET OUT OF all change the
actor\'s posture to the default posture for the new location as well as
moving the actor there.

The implementation of postures in this extension is a little simpler
than that in the adv3 library, and hopefully a bit easier to use.
Nonetheless, before adding it to your game, you may want to ask yourself
if your game really needs it. In most games most players won\'t miss it
if it isn\'t there, and if your only reason for wanting it is to force
the player to type STAND ON CHAIR rather than just GET ON CHAIR at one
point in your game, you should probably think again. On the other hand,
if there are several places in your game where postures are important,
or you feel for artistic reasons that your game will gain from the added
realism of keeping track of postures, then hopefully this extension will
do the job for you. Of course it\'s your game, so ultimately your
decision, but do bear in mind that the great majority of IF seems to get
on perfectly well without postures.

\
[]{#classes}

## New Classes, Objects and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new classes, objects and
properties:

-   *Classes*: **Posture**, **Bed** and **Chair**
-   *Objects*: **standing**, **sitting** and **lying** (all Postures)
-   *Additional properties on Thing*: [canStandInMe]{.code},
    [canSitInMe]{.code}, [canLieInMe]{.code}, [posture]{.code},
    [defaultPosture]{.code}, [okayStandOnMsg]{.code},
    [okaySitOnMsg]{.code}, [okayLieOnMsg]{.code},
    [okayStandInMsg]{.code}, [okaySitInMsg]{.code},
    [okayLieInMsg]{.code}, [cannotStandInMsg]{.code},
    [cannotSitInMsg]{.code}, [cannotLieInMsg]{.code},
    [tryMakingPosture(pos)]{.code}, [verifyEnterPosture(pos)]{.code}

\
[]{#usage}

## Usage

Include the postures.t file after the library files but before your game
source files.

You should now find that the player character can STAND, SIT and LIE
DOWN, can STAND ON, SIT ON and LIE ON any Platform you\'ve already
defined in your game and STAND IN, SIT IN or LIE IN any Booth. You\'ll
also find that the player character\'s posture changes to standing when
s/he gets off or out of something s/he was previously sitting or lying
on back into the outermost room.

You can customize this behaviour by use of the **canStandOn**,
**canSitOn**, **canLieOn**, **canStandIn**, **canSitIn**, and
**canLieOn** in properties, as well as **standOnScore**, **sitOnScore**
and **lieOnScore**, which all work as they did before (for which see the
discussion of [Pseudo-Postural
Properties](../../docs/manual/thing.htm#posture) on Thing). You can also
give an object a **defaultPosture** property (which should be one of
[standing]{.code}, [sitting]{.code} or [lying]{.code}) to define the
posture adopted by an actor in response to a BOARD/GET ON or ENTER/GET
IN command with this object (or in response to a GET OFF or GET OUT OF
command that results in the actor being in/on this object)

The new **Chair** and **Bed** classes can do some of this work for you,
by defining combinations of these properties that are typically suitable
for chairs and beds. A [Chair]{.code} is an object an actor can sit on
or stand on (but not by default lie on), but for which sitting is the
both the default and the preferred posture. (To make a chair you can
also lie on, like a long settee, just override its [canLieOn]{.code}
property to true). A [Bed]{.code} is something you can stand, lie or sit
on, but which has lying as its default posture. For the already existing
[Platform]{.code} class the default posture is standing, but you can
also sit or lie on a Platform.

An actor\'s (or the player character\'s) current posture is given in its
**posture** property, which can be one of [standing]{.code},
[sitting]{.code} or [lying]{.code}. To get at a textual description of
an actor\'s current posture you can use the posture\'s **participle**
property. You should always do this in a description that mentions the
player character\'s posture, for example:

::: code
    startRoom: Room 'Outside Building'
       "You are <<gPlayerChar.posture.participle>> outside a small brick building
        just to the north. "
    ;
     
:::

If you don\'t do this, but simply write \"You are standing
outside\...\", the player can instantly make you a liar by typing LIE
DOWN or SIT (having to worry about this sort of thing is an example of
the sort of additional busy-work you create for yourself by including
this extension).

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[postures.t](../postures.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Postures\
[[*Prev:* Objective Time](objtime.htm){.nav}     [*Next:*
Relations](relations.htm){.nav}     ]{.navnp}
:::
