::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Finishing
Touches](finish.htm){.nav} \> Starting Out Right\
[[*Prev:* Finishing Touches](finish.htm){.nav}     [*Next:*
Scoring](scoring.htm){.nav}     ]{.navnp}
:::

::: main
# Starting Out Right

One thing our Airport currently lacks is a decent introduction. The game
begins with a somewhat minimalist room description and that\'s it,
leaving the player no indication of what he should be trying to do or
what the game is actually about. We really need to add a proper
introduction, which we can do in the **showIntro()** method of the
[gameMain]{.code} object:

::: code
    gameMain: GameMainDef
        /* Define the initial player character; this is compulsory */
        initialPlayerChar = me
        paraBrksBtwnSubcontents = nil
        
        showIntro()
        {
           "<font size=+2><b>Airport</b></font>\b
           They're out to get you. No, they really are --- <q>they</q> being the
           local drug barons. You've just got the evidence that will put them behind
           bars for the rest of the century, and now you're desperate to leave with
           it while you still can, since El Diablo and his henchmen will be equally
           desperate to stop you --- for good. They've pursued you as far as the
           airport and now your only hope is to get the first plane out of here.\b";
        }       
    ;
:::

The [gameMain]{.code} object can also be used to define a number of
options that affect the whole game (for a complete list, see the section
on [Beginnings](../manual/beginning.htm) in the *adv3Lite Library
Manual*). Here we\'ve taken the opportunity to define
[paraBrksBtwnSubcontents = nil]{.code} (paragraph breaks between
subcontents); this can make room listings more compact by removing the,
possibly unnecessary, paragraph breaks between sentences like, \"In the
red box you see a pen and a notepad. On the desk you see a blotter and a
diary.\"

Another thing players commonly try at the start of the game is X ME
(EXAMINE ME), in order to get some idea about who the player character
is meant to be. It\'s generally a good idea to oblige them by providing
a custom description on the player character object:

::: code
    + me: Thing 'you'   
        "Secret agents are normally meant to be well equipped, but your quick
        getaway just now meant you had to leave just about everything behind
        except what you're wearing, and that's not much. You couldn't even go back
        to pick up your wallet or your credit card. "
        isFixed = true    
        proper = true
        ownsContents = true
        person = 2   
        contType = Carrier    
    ;
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Finishing
Touches](finish.htm){.nav} \> Starting Out Right\
[[*Prev:* Finishing Touches](finish.htm){.nav}     [*Next:*
Scoring](scoring.htm){.nav}     ]{.navnp}
:::
:::
