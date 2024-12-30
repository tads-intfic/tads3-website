::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Scenes\
[[*Prev:* Pathfinding](hint.htm){.nav}     [*Next:*
Scoring](score.htm){.nav}     ]{.navnp}
:::

::: main
# Scenes

The scenes.t module is used to implement Scenes, which are somewhat
similar to their Inform 7 counterpart. A Scene is mainly a way of
checking whether a particular phase of your interactive story is
currently in progress or has already occurred, and can be used to
control how some other aspects of the game work (for example a
[Doer](doer) can be conditional on a certain scene being in progress).
To set up a scene, simply define an object of class **Scene** with the
following properties:

-   **startsWhen**: an expression or method that evaluates to true when
    you want the scene to start.
-   **endsWhen**: an expression or method that evaluates to something
    other than nil when you want the scene to end. Often you would
    simply make this return true when you want the scene to end, but if
    you wanted to note different kinds of scene ending you could return
    some other value (which could be a number, a single-quoted string,
    an enum or an object) to represent how the scene ends.
-   **recurring**: Normally a scene will only occur once. Set recurring
    to true if you want the scene to start again every time its
    startsWhen condition is true.
-   **whenStarting**: A method that executes when the scene starts; you
    can use it to define what happens at the start of the scene.
-   **whenEnding**: A method that executes when the scene ends; you can
    use it to define what happens at the end of the scene.
-   **eachTurn**: A method that executes every turn that the scene is
    active.
-   **beforeAction**: A method that executes on every active scene just
    before an action is about to take place. This method can veto the
    action with the [exit]{.code} macro.
-   **afterAction**: A method that executes on every active scene just
    after an action has taken place (and so can be used to provide an
    appropriate response to the action during the scene).

In addition your code can query the following properties of a Scene
object (which should be treated as read-only by game-code since they\'re
updated by library code):

-   **isHappening**: Flag (true or nil) to indicate whether this scene
    is currently taking place.
-   **hasHappened**: Flag (true or nil) to indicate whether this scene
    has ever happened (and ended).
-   **startedAt**: The turn number at which this scene started (or nil
    if this scene is yet to happen).
-   **endedAt**: The turn number at which this scene ended (or nil if
    this scene is yet to end).
-   **timesHappened**: The number of times this scene has happened.
-   **howEnded**: An optional author-defined flag indicating how the
    scene ended (this could be a number, a single-quoted string, an enum
    or an object).

The **howEnded** property perhaps deserves a further word of
explanation. You can use this more or less how you like, but one coding
pattern might be to use custom objects to represent different endings
and then make use of the methods and properties of your custom objects.
For example, suppose a certain scene ends tragically if Martha is dead
but happily if you give Martha the gold ring, you might do something
like this:

::: code
    class SceneEnding: object
       whenEnding() { }
    ;

    happyEnding: SceneEnding
       whenEnding() { "A surge of happiness washes over you..."; }
    ;

    tragicEnding: SceneEnding
       whenEnding() { "You feel inconsolable at your loss..."; }
    ;

    marthaScene: Scene
       startsWhen = Q.canSee(me, martha)
       
       endsWhen()
       {
            if(martha.isDead)
               return tragicEnding;
             
            if(goldRing.isIn(martha))
               return happyEnding;
             
            return nil;      
       }
       
       whenEnding() 
       {
          if(howEnded != nil)
             howEnded.whenEnding();
       }
    ;
:::

One special point to note: if you define the startsWhen condition of a
Scene so that it is true right at the start of play (e.g. [startsWhen =
true]{.code}), the Scene will indeed start out active, but its
[whenStarting()]{.code} method will execute just *after* the first room
description is displayed. If you want it to display something just
after, you can use its whenStarting method to display some text, e.g.:

::: code
     introScene: Scene
        startsWhen = (harry.isIn(harrysBed))
        endsWhen = (!harry.isIn(harrysBed))
        
        
        whenEnding()
        {
            "Harry stretches and yawns, before staggering uncertainly across the
            room. ";
        }
       
        whenStarting = "Harry groans. "    
    ;
     
     
:::

This is normally what you would want, but note that this means that you
can\'t use a Scene to display any text prior to the first room
description. For that purpose you need to use an
[InitObject](beginning.htm#tenses) or the showIntro() method of
[gameMain](beginning.htm#gamemain).

\

## Keeping Track of [Time]{#time_idx}

In a sense, Scenes can be said to divide your game into different times
just as Rooms and Regions divide it into different places, but Scenes
don\'t actually keep track of time (in the sense of the date or the time
of day). If your game needs to do this you may want to look at either
the [Subjective Time](../../extensions/docs/subtime.htm) extensions or
the [Objective Time](../../extensions/docs/objtime.htm) extension. The
first of these allows you to define the time at which certain events
(which could well include the beginning and end of certain Scenes)
occur. If the player character then occasionally consults a clock or
watch, the subjective time extension can then report a suitable time of
day (based on the number of terms elapsed since the last event, the time
attached to the next event, and a number of other factors). This
extension is not suitable, however, if you want a frequent or continuous
display of the time of day (in the status line, for example); for that
purpose you should use the objective time extension which advances the
clock by so many seconds per turn (the actual number of seconds can be
customized in as fine a grained manner as you wish, e.g. to differ for
different actions).

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Scenes\
[[*Prev:* Pathfinding](pathfind.htm){.nav}     [*Next:*
Scoring](score.htm){.nav}     ]{.navnp}
:::
:::
