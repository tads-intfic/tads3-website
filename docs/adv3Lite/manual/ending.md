::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Endings\
[[*Prev:* Beginnings](beginning.htm){.nav}     [*Next:* Part III:
Optional Modules](optional.htm){.nav}     ]{.navnp}
:::

::: main
# Endings

Most IF games need to have an ending somewhere (other than by the player
issuing a QUIT command); many have multiple endings, some of which may
count as more successful in others. In adv3Lite (as in adv3) the way to
end the game once the player has either won, died, lost, or otherwise
come to an ending is to use the **finishGameMsg(msg, \[extra\])**
function.

The *msg* parameter can be either nil (in which case nothing is
displayed), a single-quoted string, such as \'YOU HAVE REACHED THE END
OF YOUR QUEST\', or a FinishType object, which displays the message
associated with that message, of which the library defines four:

-   **ftVictory**: \'YOU HAVE WON\'
-   **ftDeath**: \'YOU HAVE DIED\'
-   **ftFailure**: \'YOU HAVE FAILED\'
-   **ftGameOver**: \'GAME OVER\'

Either way, the ending message is displayed surrounded by asterisks,
e.g. \*\*\* YOU HAVE REACHED THE END OR YOUR QUEST \*\*\* or \*\*\* YOU
HAVE DIED \*\*\*, following which the player is presented with a number
of options. These options always include QUIT, RESTART and RESTORE, but
may also include any additional options you specify in the *extra*
property, which is specified as a list that can contain any or all of
the following options:

-   **finishOptionUndo**: UNDO the last turn.
-   **finishOptionFullScore**: Show the full score (i.e. the total score
    and the achievements that go to make up that score).
-   **finishOptionScore**: This is simply a flag that causes the final
    score to be shown along with the other information at the end of the
    game.
-   **finishOptionCredits**: Show the credits for the game.
-   **finishOptionAmusing**: Offer the player some amusing (or at least,
    interesting) things to try.

For example, if the object of your game is to escape from a burning
house and reach the safety of the road, you might end the game when the
player character sets off down the drive from the front of the house.
The definition of the drive location to achieve this might then look
something like this:

::: code
    drive: Room 'Front Drive' 'front drive'
        "The front drive sweeps round from the northwest and comes to an end just in
        front of the house, which stands directly to the east. A narrow path runs
        round the side of the house to the southeast. "
        
        east = frontDoorOutside
        southeast = sidePath
        
        northwest()
        {
            "You stride off down the drive to safety. ";
            finishGameMsg(ftVictory, [finishOptionUndo, finishOptionFullScore, 
                     finishOptionCredits]);
        }
        
        regions = outdoors
    ;
:::

If your game offers the \"Amusing\" finish option you\'ll need to do a
bit more work to define what it actually does. This can be as basic as
offering a few suggestions like \"Have you tried feeding the chile soup
to the pet tiger, or asking Mavis about her underwear, or turning the
blender to \'superspin\' when the chocolate sponge is in it?\" to
displaying a full-blown [menu](menu.htm) with a whole range of options.
Whatever you want to do you do it by modifying the finishOptionAmusing
object to defining a doOption() method which should normally finish by
returning true (to tell the library that the option has successfully
completed and it should now show the list of options again). For
example:

::: code
    modify finishOptionAmusing
       doOption()
       {
           "Have you tried feeding the chile soup to the pet tiger?\n
           Or asking Mavis about her underwear?\n
           Or setting the blender to 'superspin' with the cholocolate sponge inside?";
           
           return true;
       }
    ;   
:::

Or:

::: code
    modify finishOptionAmusing
       doOption()
       {
           amusingMenu.display();
            
           "Done <.p>";      
           return true;
       }
    ;   
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Endings\
[[*Prev:* Beginnings](Beginning.htm){.nav}     [*Next:*Part III:
Optional Modules](optional.htm){.nav}     ]{.navnp}
:::
