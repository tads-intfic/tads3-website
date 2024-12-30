::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Changing the Player Character\
[[*Prev:* NPC-Initiated Conversation](initiate.htm){.nav}     [*Next:*
Final Moves](final.htm){.nav}     ]{.navnp}
:::

::: main
# Changing the Player Character

Many, perhaps most, works of Interactive Fiction stick to the same
player character throughout. There are some games, however, in which the
player character changes to another character during the course of the
game, perhaps more than once, or perhaps swapping between two or more
characters.

If the various characters never met, that is, none of the player
characters never functioned as an NPC and were never in scope while the
player was playing as another character, then changing from one player
character to another would be almost as simple as setting
**gPlayerChar** to the new player character and letting the player know
what had happened. Where, however, the same Actor object may function as
the player character at one point in the game and an NPC at another
point, it becomes more complicated.

In this case we need to call **setPlayer(actor)**, where *actor* is the
Actor object we want to become the new player character. This will
become the actor from whose perspective the game is played from then
one, and the one referred to by the parser as \'you\'. If we want our
new player character to be referred to in the first or third person, we
have to supply setPlayer() with a second parameter, 1 or 3 respectively,
for example [setPlayer(bob, 1)]{.code} to make bob the new player
character referred to as \'I\' or \'me\'.

If we do this we probably also want to let the player know what\'s just
happened. To assist with this setPlayer() returns the previous name of
the new player character, so when the player becomes Bob you could use
code like this:

::: code
     "You are now <<setPlayer(bob)>>. ";
     bob.getOutermostRoom.lookAroundWithin(); 
     
:::

Something else you can do to help players keep track of who they\'re now
meant to be is to include the name of the player character in the status
line. One way to do that might be to include it in parentheses after the
room name, which we can do like this:

::: code
     modify Room
        statusName(actor)
        {
            inherited(actor);
            if(libGlobal.playerCharName != nil)
                " (as <<libGlobal.playerCharName>>) ";
        }
    ;
     
:::

Or, alternatively, if we prefer it:

::: code
     
    modify statusLine
        showStatusLeft()
        {
            inherited;
            if(libGlobal.playerCharName != nil)
                " [as <<libGlobal.playerCharName>>] ";
        }
    ; 
:::

Or again, if we didn\'t want the score and turn count at the right hand
end of the status line we could do this:

::: code
    modify statusLine
        showStatusRight()
        {        
            if(libGlobal.playerCharName != nil)
                " [as <<libGlobal.playerCharName>>] ";
        }
    ;
:::

You can use whichever of these you prefer, or devise your own variant.

[]{#pcname}

Note the use of [libGlobal.**playerCharName**]{.code} here. This is set
by [setPlayer()]{.code}, so that if we\'ve never called
[setPlayer()]{.code} it will be nil (unless, of course, we set it
ourselves, which we might want to do at the start of the game). We need
it because we can\'t just use [gPlayerChar.theName]{.code} to get at the
player characters\'s name, since unless it\'s a third-person player
character that would just be \'I\' or \'you\' (which is not very
informative).

Another thing to bear in mind is that if the same object is going to act
as the player character at one time and an NPC at another, it should be
defined as being of class Actor; the player character can be of class
Thing, but this wouldn\'t be appropriate for an NPC. Again, when you\'re
defining an actual or potential player character who might also become
an NPC at some point, you should define it more or less as if it was an
NPC, except for the [person]{.code} property which may be 1 or 2 if this
is the Actor that\'s starting out as the player character; for example:

::: code
     
    + joan: Actor 'Joan; large; woman; her'
        "She's quite a large woman. "
        
        person =  2
    ;
:::

[]{#ispc}

One more point: the description you want in response to X ME when Joan
is the player character will probably be a bit different from the
description you want in response to X ME when Joan is an NPC. You can
test for which is applicable using the **isPlayerChar** property of the
Actor and write the desc property accordingly. A minimally varying one
might look like this:

::: code
     
    + joan: Actor 'Joan; large; woman; her'
        "<<if isPlayerChar>>You're<<else>>She's<<end>> quite a large woman. "
        
        person =  2
    ;
:::

In practice, you\'d probably want to vary the two descriptions by more
than this.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Changing the Player Character\
[[*Prev:* NPC-Initiated Conversation](initiate.htm){.nav}     [*Next:*
Final Moves](final.htm){.nav}     ]{.navnp}
:::
