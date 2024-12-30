::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Exits\
[[*Prev:* EventLists](eventlist.htm){.nav}     [*Next:*
Extras](extra.htm){.nav}     ]{.navnp}
:::

::: main
# Exits

The exits.t module provides the status line exit lister and a list of
exits in response to an EXITS command or when the player character
attempts to travel in a direction where there isn\'t an exit. There
normally isn\'t any need to exclude the exits module, since the player
can always disable the status line exit listing if s/he wishes with an
EXITS OFF command. There usually won\'t be much need for game authors to
intervene with the functions of the Exits module either, since they
should just work if the module is present. But there are a few features
it could be useful for game authors to know about.

One feature the adv3Lite exit lister introduces is the ability to have
the status line exit lister show exits that lead to unvisited locations
in a different colour (currently the options are red, blue, green and
yellow, with green as the current default). The player can enable or
disable this feature with the commands [EXIT COLOUR\|COLOR
ON\|OFF]{.cmdline} and can select the colour to be used with the command
[EXIT COLOUR\|COLOR RED\|BLUE\|GREEN\|YELLOW]{.cmdline}. The game author
can also change these settings programmatically (or, more usefully, set
the initial values of these setting for a game) by overriding or
changing the **highlightUnvisitedExits** (true or nil) and
**unvisitedExitColour** (\'red\', \'blue\', \'green\' or \'yellow\')
properties on the statuslineExitLister object. (In fact
unvisitedExitColour can be set to any value that would be legal in a
\<FONT COLOR=*color*\> tag).

A room is considered to have been visited if the player character has
seen it (i.e., has seen a description of the room when the room was
illuminated). Normally it will be clear enough what this means, but one
special case may need explaining further. If a direction property of a
room is implemented as a method (instead of pointing to a
TravelConnector, Door or Room), the exit will be shown in the status
line exit lister, and originally shown as unvisited. Once the player
character has attempted to traverse the exit, its destination will be
shown as visited, even if the exit doesn\'t actually lead anywhere. In
practice, this is normally the desired behaviour, since the distinctive
colouring of unvisited exits in the status line exit lister is intended
as an indication of which exits might still need exploring, and an exit
that doesn\'t lead anywhere doesn\'t need any further exploration.

Internally, the library keeps a record of where exits implemented as
methods lead to in a LookupTable on libGlobal.extraDestInfo. It adds
entries to this table whenever an exit implemented as a method is
traversed, noting where the player character actually ends up. By
default (when there\'s no entry) this LookupTable returns a value of
unknownDest\_, which is a dummy destination that is never visited (so
that initially any exit implemented as a method will be shown as leading
to an unvisited location, since the library will regard it as leading to
unknownDest\_). Once the player character tries to go via such an exit,
the actual destination where the player character ends up is stored in
libGlobal.extraDestInfo, even if the player in fact stays put (in which
case his current location will be recorded as the destination). Since
the player character current location (or indeed, anywhere else the
player character ends up) always counts as visited (unless it\'s dark),
from then on the corresponding exit will be shown as leading to a
visited location.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Exits\
[[*Prev:* EventLists](eventlist.htm){.nav}    
[*Next:*Extras](extra.htm){.nav}     ]{.navnp}
:::
