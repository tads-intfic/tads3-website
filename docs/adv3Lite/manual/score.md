::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Scoring\
[[*Prev:* Scenes](scene.htm){.nav}     [*Next:*
SenseRegion](senseregion.htm){.nav}     ]{.navnp}
:::

::: main
# Scoring

The score.t implements a scoring system that is identical to that in the
adv3 library (and uses exactly the same code). If your game doesn\'t use
scoring, exclude the score.t module from your build.

The quick and dirty way to keep score is to use the
**addToScore(*points*, *desc*)** function to add points to the player\'s
total score along with a description of what you\'re awarding points
for. A cleaner and more secure way (secure, for example, in that it
makes it easier to ensure you don\'t keep awarding point for the same
deed) is to use **Achievement** objects.

An Achievement is an object used to award points in the score. For most
purposes, an achievement can be described simply by a string, but the
Achievement object provides more flexibility in describing combined
scores when a set of similar achievements are to be grouped.

There are two ways to use the scoring system.

1.  You can use a mix of string names and Achievement objects for
    scoring items; each time you award a scoring item, you call the
    function addToScore(*points*, *desc*) to specify the achievement (by
    name or by Achievement object) and the number of points to award.
    You can also call the method addToScoreOnce() on an Achievement
    object to award the scoring item, ensuring that the item is only
    awarded once in the entire game (saving you the trouble of checking
    to see if the event that triggered the scoring item has happened
    before already in the same game). If you do this, you MUST set the
    property gameMain.maxScore to reflect the maximum score possible in
    the game.
2.  You can use EXCLUSIVELY Achievement objects to represents scoring
    items, and give each Achievement object a \'points\' property
    indicating the number of points it\'s worth. To award a scoring
    item, you call the method awardPoints() on an Achievement object. If
    you use this style of scoring, the library AUTOMATICALLY computes
    the gameMain.maxScore value, by adding up the \'points\' values of
    all of the Achievement objects in the game. For this to work
    properly, you have to obey the following rules:
3.  use ONLY Achievement objects (never strings) to award points;
4.  set the \'points\' property of each Achievement to its score;
5.  define Achievement objects statically only (never use \'new\' to
    create an Achievement dynamically)
6.  if an Achievement can be awarded more than once, you must override
    its \'maxPoints\' property to reflect the total number of points it
    will be worth when it is awarded the maximum number of times;
7.  always award an Achievement through its awardPoints() or
    awardPointsOnce() method;
8.  there exists at least one solution of the game in which every
    Achievement object is awarded

If there is more than one route through your game, it may be a bit
tricky using the second of these approaches. One possible workaround is
to use method 2 for the main route through your game (which you count as
the \'main\' route may, of course, be an arbitrary choice: you could
choose the longest route, the shortest route, the most interesting route
or anything else that makes sense to you). Then use Achievement objects
for the other routes but call their **addToScoreOnce(*points*)** method
instead of awardPoints() or awardPointsOnce() if they\'re not on the
main route; and don\'t define their points property. That way the points
from these additional off-the-main-route Achievements won\'t be included
the calculation of the maximum available points.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Scoring\
[[*Prev:* Scenes](scene.htm){.nav}     [*Next:*
SenseRegion](senseregion.htm){.nav}     ]{.navnp}
:::
:::
