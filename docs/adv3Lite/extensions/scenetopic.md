::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> SceneTopic\
[[*Prev:* Rules](rules.htm){.nav}     [*Next:*
Sensory](sensory.htm){.nav}     ]{.navnp}
:::

::: main
# SceneTopic

## Overview

The purpose of this extension is to allow the definition of
ActorTopicEntries that are triggered when Scenes begin or end.

This extension is based on work by Donald Smith.

\
[]{#classes}

## New Classes, Methods and Properties

In addition to a number of objects, properties and methods intended
purely for internal use, this extension defines the following new
classes, methods and properties:

-   *Classes*: **SceneTopic**, **SceneStartTopic**, **SceneEndTopic**.
-   *Methods on SceneTopic*: [beforeResponse()]{.code},
    [afterResponse()]{.code}.
-   *New Property on Scene*: [notifySingleActor]{.code}.
-   *Otherwise Unused Property on Actor*: [notificationOrder]{.code}

\
[]{#usage}

## Usage

Include the scenetopic.t file after the library files but before your
game source files. Your game must also contain the actor.t and scene.t
modules.

SceneTopics can be used very much like other
[ActorTopicEntries](../../docs/manual/actortopicentry.htm). The main
difference is that they are triggered by the start or end of a scene
that takes place when the player character can talk to the actor for
whom the SceneTopic is defined.

The SceneTopic class is not used directly. Instead use
[SceneStartTopic]{.code} for a topic entry that is to be triggered by
the start of a scene, and [SceneEndTopic]{.code} for one that is to be
triggered by the end of the scene. In either case, the scene or scenes
whose beginning or ending is to trigger the SceneTopic are defined on
its [matchObj]{.code} property in the normal way, e.g.

::: code
     jane: Actor 'Jane;;;her' @hall;

    + janeState: ActorState
        isInitState = true
        specialDesc = "Jane is standing in the middle of the hall. "
    ;

    ++ SceneStartTopic @scene1
        "<q>So, the scene has started,</q> Jane remarks. "
    ;
     
    ++ SceneEndTopic [scene1, scene2]
        "<q>Well, that was quite a scene!</q> Jane declares. "
    ; 
     
:::

[]{#before}

Additional control over how a SceneTopic responds to the beginning or
ending of a scene is provided by its **beforeResponse()** and
**afterResponse()** methods, which can be used to define additional
behaviour that is to occur before or after the response displayed by the
SceneTopic. By default the [beforeResponse()]{.code} simply outputs a
spacing paragraph break and the [afterResponse()]{.code} method does
nothing.

Note that the same matching rules apply to SceneTopics as to other
TopicEntries; that is, if an Actor has several SceneTopics that could
match the start or end of a scene, only one will be triggered, namely
the one that is considered the best match according to the same
principles as any other TopicEntry. One slight complication, however, is
that when a scene starts or ends there may be several Actors in scope
(or rather, to whom the player character can talk). In that case, more
than one of those Actors could have a SceneTopic that would be triggered
by the beginning or ending of the Scene, but should all these Actors
respond, or only one of them, and if so, which one? By default, only one
Actor\'s SceneTopic is triggered, but this can be changed by overriding
the Scene\'s **notifySingleActor** property to nil. In any case before
any Actor\'s SceneTopic is triggered the relevant Actors are sorted in
ascending order of their **notificationOrder** property. This means that
if only one Actor\'s SceneTopic is used, it will be the one that has the
lowest [notificationOrder]{.code} (out of those that have a matching
SceneTopic), while if every relevant Actor with a matching SceneTopic is
allowed to respond, they will respond in order of their
[notificationOrder]{.code} property.

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[scenetopic.t](../scenetopic.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Room Parts\
[[*Prev:* Rules](rules.htm){.nav}     [*Next:*
Sensory](sensory.htm){.nav}     ]{.navnp}
:::
