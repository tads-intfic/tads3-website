::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Airport](airport.htm){.nav} \>
Describing the game\
[[*Prev:* Airport](airport.htm){.nav}     [*Next:* Starting the
Map](airmap1.htm){.nav}     ]{.navnp}
:::

::: main
# Describing the game

Over the last four chapters we have developed a pair of very simple
games together, designed to introduce the basic concepts of writing
Interactive Fiction using TADS 3 with the adv3Lite library. In the
remaining chapters we shall develop one rather more substantial game,
\"Airport\". The basic design for this game is taken from Mike Roberts\'
article on \"IF Design: In Practice\" in the *TADS 3 Technical Manual*.
You might like to read both that article, and the companion \"IF Design:
In Theory\" article in their entirety, but for the sake of convenience
I\'ll reproduce Mike Roberts\' description of the Airport game here:

*As an example, we\'ll implement a game that takes place in a small
airport. Our airport will have a terminal area, a concourse, and a gate
area. We\'ll also have a plane parked at one of the gates. The terminal
area will have a ticket counter, and a metal detector leading into the
concourse. In the concourse, there will be a snack bar, and a locked
door leading off into a security area. The gate area will have a couple
of gates, plus a locked maintenance room. Here\'s the basic map we\'ll
be implementing.*

\
[![\[ Map \]](map1.gif){border="0" height="409"
width="527\""}](map1.gif)

\

*This map conveniently has a couple of locked areas, which we can use
for puzzles. In addition, we can probably find some use for the metal
detector, since it will prevent the player from carrying any objects
through it. The plane can also be a puzzle, since you\'d normally need a
ticket to board a plane. Plus, the cockpit should be restricted to
airline personnel.*

*Let\'s make the goal of the airport segment be getting out of the
airport. The player will start off in the main terminal area, but won\'t
be able to go outside the terminal - we\'ll make up some excuse, such as
heavy traffic that always pushes the player back into the terminal, to
prevent exiting that way. (If this were an actual game, we\'d probably
have more game outside the airport, so we wouldn\'t use such an
artificial boundary as having heavy traffic that pushes the player back
in. For this example, though, we want to keep things fairly small.) The
only other obvious way to get out of the airport is to fly out on a
plane; so, let\'s make the goal be to fly the plane.*

*To take the plane out of the airport, the player will have to get into
the cockpit. (We\'ll implement this example up to the point that the
player makes it into the cockpit; in a full game, we\'d go on to let the
player fly the plane somewhere else.) Now, only the pilot can go into
the cockpit - the flight attendant wouldn\'t let a passenger into the
cockpit. So, we\'ll need some way to get past the flight attendant. One
way would be to create a diversion that distracts the flight attendant
long enough to slip by; for this example, though, we\'ll require the
player to find a pilot\'s uniform.*

*Where would the pilot\'s uniform be? The pilot\'s lounge would be a
logical place; we\'ll put a suitcase in the pilot\'s lounge that
contains a uniform. Fortunately, the lounge is behind a locked door,
which creates a secondary puzzle. To get into the security area that
contains the pilot\'s lounge, the player needs a magnetic ID card to put
into a slot outside the security area.*

*We\'ll put the ID card out in the open, on the ticket counter in the
terminal area. However, we\'ll make it impossible to carry the ID card
past the metal detector - the card will set off the metal detector, and
the security guard will confiscate it (and place it back on the counter
so that the player can try again). To get the card by the metal
detector, you\'ll have to turn off the power to the metal detector.*

*The power switch will be in the maintenance room, which is locked with
a key. We\'ll leave the key with some other maintenance items in the
plane\'s bathroom - we\'ll also leave a pail, sponge, and garbage bag,
so that it\'s clear by association that the key is probably for the
maintenance room.*

*To get into the plane\'s bathroom, you\'ll need a ticket to board the
plane. We\'ll make the ticket fairly simple to find: we\'ll leave it
hidden inside a newspaper in the snack bar. As soon as you pick up the
newspaper, the ticket will fall out.*

*So, that\'s about the whole game: you go to the snack bar, pick up the
newspaper, and find the ticket. You take the ticket and board the plane,
then go to the plane\'s bathroom and get the key. Take the key to the
maintenance room, unlock the door, enter, and turn off the power to the
metal detector. Go back to the ticket counter, pick up the ID card, go
to the security door, put the magnetic card in the slot, and enter the
security area. Go to the pilot\'s lounge, get the pilot\'s uniform out
of the suitcase, and wear it. Go to the plane, and stroll right past the
flight attendant and into the cockpit.*

*We should draw a new map now, which includes annotations for the main
objects and actions that make up the game.*

\
[![\[ Detailed Map \]](map2.gif){border="0" height="443"
width="605\""}](map2.gif)

This should give us plenty to work with, although we may want to make a
few tweaks along the way. It might also be a good idea to sketch out a
few more details of the plot. On the face of it a protagonist who steals
a uniform to impersonate a pilot and then makes off with a plane could
be someone with horrendously sinister motives, and the notion that
anyone would be allowed to do so quite so easily in our post 9/11 world
might also stretch credulity. So, to alleviate these two difficulties
just a little, let\'s move the airport from its ostensible North
American setting (implied by the way Mike Roberts goes on to implement
the newspaper, if nothing else) to a fictitious Central American
republic rife with corruption and almost overrun with drug cartels. To
give our protagonist something at least plausibly resembling a
creditable motive, we\'ll make him an operative of a western
intelligence agency who has just collected the evidence that will blow
the drug cartels apart and undermine the local drug barons. One of these
(or his henchman) has just pursued our agent to Narcosia Airport, which
now represents his only chance of escape. Unfortunately, somewhere in
the chase our agent has lost his wallet, so has no means of paying for a
reservation (even if he had time to make one). Stealing an aeroplane is
thus his only means of escaping with his life and the vital evidence
he\'s collected. Conversely, if he tries to leave the airport anyway
he\'s likely to walk into a hail of bullets (a slightly more pressing
reason than the heavy traffic pushing him through the doors if he tries
to leave, which Mike Roberts recognized as unsatisfactory).

Rather than making our protagonist a CIA agent, I\'ll make him a member
of the British Secret Service, both as a concession to my own
nationality, and as an opportunity for a slightly tongue-in-cheek touch
that indicates that this game doesn\'t take itself too seriously: our
player character will be special agent 008, Sherlock Pond. As a further
twist we\'ll make the plane he\'s about to steal (or so he\'ll discover)
not a regular passenger plane on a scheduled flight but a plane that\'s
taken over by some of the drug barons and their henchpersons to take
them to some meeting or other; by stealing the plane with them aboard
and flying it to, say, Miami Airport, Agent Pond can arrange to have a
reception committee of the FBI, National Guard, US Marine Corps, and
anyone else his buddies in the CIA can summon up, on hand to take the
villains into custody on touchdown, thereby triumphantly concluding his
mission without kidnapping a bunch of innocent tourists into the
bargain.

We may find there\'s rather more here than we can fully implement over
the remainder of this tutorial, but it will at least give us plenty to
get our teeth into, and should offer ample opportunity both to practice
what we\'ve learned in previous chapters and introduce further features
of the adv3Lite library.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Airport](airport.htm){.nav} \>
Describing the game\
[[*Prev:* Airport](airport.htm){.nav}     [*Next:* Starting the
Map](airmap1.htm){.nav}     ]{.navnp}
:::
