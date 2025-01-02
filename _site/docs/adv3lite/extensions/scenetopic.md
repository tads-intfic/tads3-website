<div class="topbar">

<img src="../../docs/manual/topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../../docs/manual/toc.htm" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.htm" class="nav">Extensions</a> \>
SceneTopic  
<span class="navnp"><a href="rules.htm" class="nav"><em>Prev:</em> Rules</a>
    <a href="sensory.htm" class="nav"><em>Next:</em> Sensory</a>    
</span>

</div>

<div class="main">

# SceneTopic

## Overview

The purpose of this extension is to allow the definition of
ActorTopicEntries that are triggered when Scenes begin or end.

This extension is based on work by Donald Smith.

  
<span id="classes"></span>

## New Classes, Methods and Properties

In addition to a number of objects, properties and methods intended
purely for internal use, this extension defines the following new
classes, methods and properties:

- *Classes*: **SceneTopic**, **SceneStartTopic**, **SceneEndTopic**.
- *Methods on SceneTopic*: <span class="code">beforeResponse()</span>,
  <span class="code">afterResponse()</span>.
- *New Property on Scene*: <span class="code">notifySingleActor</span>.
- *Otherwise Unused Property on Actor*:
  <span class="code">notificationOrder</span>

  
<span id="usage"></span>

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
<span class="code">SceneStartTopic</span> for a topic entry that is to
be triggered by the start of a scene, and
<span class="code">SceneEndTopic</span> for one that is to be triggered
by the end of the scene. In either case, the scene or scenes whose
beginning or ending is to trigger the SceneTopic are defined on its
<span class="code">matchObj</span> property in the normal way, e.g.

<div class="code">

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
     

</div>

<span id="before"></span>

Additional control over how a SceneTopic responds to the beginning or
ending of a scene is provided by its **beforeResponse()** and
**afterResponse()** methods, which can be used to define additional
behaviour that is to occur before or after the response displayed by the
SceneTopic. By default the <span class="code">beforeResponse()</span>
simply outputs a spacing paragraph break and the
<span class="code">afterResponse()</span> method does nothing.

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
Actor's SceneTopic is triggered, but this can be changed by overriding
the Scene's **notifySingleActor** property to nil. In any case before
any Actor's SceneTopic is triggered the relevant Actors are sorted in
ascending order of their **notificationOrder** property. This means that
if only one Actor's SceneTopic is used, it will be the one that has the
lowest <span class="code">notificationOrder</span> (out of those that
have a matching SceneTopic), while if every relevant Actor with a
matching SceneTopic is allowed to respond, they will respond in order of
their <span class="code">notificationOrder</span> property.

  

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[scenetopic.t](../scenetopic.t) file.

</div>

------------------------------------------------------------------------

<div class="navb">

*Adv3Lite Manual*  
<a href="../../docs/manual/toc.htm" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.htm" class="nav">Extensions</a> \>
Room Parts  
<span class="navnp"><a href="rules.htm" class="nav"><em>Prev:</em> Rules</a>
    <a href="sensory.htm" class="nav"><em>Next:</em> Sensory</a>    
</span>

</div>
