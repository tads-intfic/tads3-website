---
layout: docs
---


<img src="../../docs/manual/topbar.jpg" data-border="0" />
<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
Sensory  
<span class="navnp"><a href="scenetopic.html" class="nav"><em>Prev:</em> SceneTopic</a>
    <a href="signals.html" class="nav"><em>Next:</em> Signals</a>    
</span>
# Sensory

## Overview

The purpose of the [sensory.t](../sensory.t) extension is first to
provide more sophisticated handling of sounds and smells, and second to
add SensoryEvents, which can represent sudden noises, smells or visible
events that nearby objects (and actors) can react to.

  
<span id="classes"></span>

## New Classes, Objects and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new classes, objects and
properties:

- *Classes*: **SensoryEvent**, **SimpleNoise**, **SimpleOdor**,
  **SoundEvent**, **SmellEvent** and **SightEvent**.
- *Expanded Classes*: **SensoryEmanation**, **Noise** and **Odor**
- *Objects*: emanationControl.
- *Additional properties/methods on Thing*:
  `smellDescWithSource`,
  `smellDescWithoutSource`,
  `listenDescWithSource`,
  `listenDescWithoutSource`,
  `notifySoundEvent(event, source)`,
  `notifySmellEvent(event, source)`,
  `notifySightEvent(event, source)`,
  `notifyEvent(event, source)`.
- *Properties/methods on SensoryEmanation*:
  `descWithSource`,
  `descWithoutSource`,
  `isEmanating`,
  `emanationDesc()`,
  `schedule`.
- *Methods on SensoryEvent*: `triggerEvent(obj)`

<span id="usage"></span>

## Usage

Include the sensory.t file after the library files but before your game
source files.

### Noises and Odors

With this extension in place you now have more control over the workings
of sounds and smells in your game.

First, if the player characters smells or listens to an object, you can
distinguish the response the player gets depending on whether the object
being smelt or listened to is visible to the player character, for
example "The clock is ticking loudly" when the clock is visible and "The
sound of loud ticking is coming from somewhere" when it's not. To do
this, use **smellDescWithSource** or **soundDescWithSource** to describe
the smell or sound when the object is visible, and
**smellDescWithoutSource** or **soundDescWithoutSource** to describe the
smell or sound when it's not. Where you don't need to make this
distinction, you can just define the **soundDesc** and/or **smellDesc**
directly as before.

You can make a similar distinction on `Odor` and
`Noise` objects by using the **descWithSource**
and **descWithoutSource** properties. Remember these are the responses
to examining or listening to/smelling the Noise/Odor itself, rather than
the object that's causing the smell or sound. Here the with or without
source distinction refers to whether the source of the smell or sound is
visible to the player character, this source being the location of the
Odor or Noise. Again, if you don't need this distinction, you can just
define the **desc** property directly as before.

You can control whether the Noise or Odor is effectively present at all
through its **isEmanating** property. If
`isEmanating` is nil then the Noise or Odor
can't be sensed and, moreover, the object in which the Noise or Odor is
located will be treated as no longer having a noise/smell. Note, for
this to work, ***don't*** override the **isProminentNoise** or
**isProminentSmell** properties of an object to be just true, though
it's safe to override these properties to be nil if you never want the
object to show up in response to an intransitive LISTEN or SMELL
command. (Remember that isProminentNoise and isProminentSmell are
properties of ordinary Things that might be listened to or smelled, not
of Noise or Odor).

The other thing a Noise or Odor can do is to display a message every so
many turns announcing the presence of a noise or smell. The message
that's shown is that defined in the **emanationDesc** property. You can
override this with your own message if you wish, or you may find the
default perfectly acceptable. The default is either to show the
smellDesc/listenDesc of the Odor's/Noise's location, or to display the
next item in the Odor's/Noise's **eventList** if the Odor/Noise is also
an EventList of some sort.

The frequency with which the `emanationDesc` is
displayed is controlled by the **schedule** property. This can either be
nil (in which case no emanation messages are displayed at all) or a list
of numbers, which can optionally end in nil. If schedule were defined,
say, as \[1, 1, 2, 2, 4\] then the interval between the display of the
emanationDesc would be one turn each for the first two times it was
displayed, then two turns each for the next two turns, and then four
turns thereafter. If the schedule list ends in nil then the
emanationDesc will stop being displayed when the end of the schedule is
reached.

Emanation desc messages are only displayed when the player is in a
position to hear/smell the object in question. Once the player character
leaves the room, all SensoryEmanations in the room are reset to their
initial state (this works a little differently if there's a SenseRegion
present, in which case it's all the SensoryEmanations the player can no
longer sense that are reset).

<span id="simple"></span>

The **SimpleNoise** and **SimpleOdor** classes can be used for sounds
and smells associated with a location rather than with any particular
object within that location. These may be particularly helpful for
defining atmospheric sounds and smells. For a
`SimpleNoise` or
`SimpleOdor` we simply define either the
`desc` property (for a noise or smell whose
description never varies) or the `eventList`
property (for a SimpleNoise or SimpleOdor that's mixed in with an
EventList class, to display a range of messages). The desc or messages
in the eventList will then be displayed as atmospheric messages (in
accordance with the `schedule` property) or in
response to a LISTEN or SMELL command as appropriate. Either way we can
use the SensoryEmanation template to define the
`desc` property or
`eventList` property implicitly, for example:

```
    + SimpleOdor 'smell of fresh pine needles'
       "There's a smell of fresh pine needles in the air. "
    ;

    + SimpleNoise, ShuffledEventList 'noise;;;noises sound sounds'
      [
         'There\'s a brief scampering in the undergrowth. ',
         'You hear wood-pigeons cooing off to the right. ',
         'From somewhere in the forest comes the sound of a barking fox. '
      ]
      
      schedule = [1, 1, 2]
    ; 
     
```

For a `SimpleNoise` or
`SimpleOdor` that can be sensed from elsewhere
in a [SenseRegion](../../docs/manual/senseregion.html) you may also want
to define the `remoteListenDesc(pov)` method or
`remoteSmellDesc(pov)` method as appropriate, to
describe its presence at a distance.

`SimpleNoise` and
`SimpleOdor` can also be mixed in with
[MultiLoc](../../docs/manual/multiloc.html) (which must then come first
in the class list) to define an atmospheric sound or smell that's
present in more than one location.

  
<span id="events"></span>

### SensoryEvents

A SensoryEvent is an event that occurs at a particular point in time and
which can cause objects and actors that can sense the event to react to
it. There are three kinds of SensoryEvent: **SoundEvent**,
**SmellEvent** and **SightEvent**. To define such events we just need to
give them a name and class, e.g.:

```
     bangEvent: SoundEvent;
     stinkEvent: SmellEvent;
     doorOpeningEvent: SightEvent; 
     
```

It's up to game code to define when SensoryEvents actually take place;
we do this by calling their triggerEvent(obj) method, where obj is the
physical game object with which the event is associated, for example:

```
     bangEvent.triggerEvent(table); // the player just struck the table
     stinkEvent.triggerEvent(stinkBomb);
     doorOpeningEvent.triggerEvent(self);
     
     ...
     + loungeDoor: Door 'door'
        ...
        makeOpen(stat)
        {
           inherited(stat);
           if(stat)
              doorOpeningEvent.triggerEvent(self);
        }
    ;    
     
```

When any of these events is triggered, the appropriate notify routine is
called on any object that can sense them. In particular:

- **notifySoundEvent(event, source)** is called on every object that can
  hear *source* when *event* is the SoundEvent that's just been
  triggered.
- **notifySmellEvent(event, source)** is called on every object that can
  smell *source* when *event* is the SmellEvent that's just been
  triggered.
- **notifySightEvent(event, source)** is called on every object that can
  see *source* when *event* is the SightEvent that's just been
  triggered.

The default behaviour of each of these notify methods is simply to call
notifyEvent(event, source), so, if you want, you can have a single
handler for all of them. One pattern might be to use the event to
trigger an InitiateTopic on the sensing actor, for example:

```
    mavis: Actor 'Aunt Mavis; old; woman; her' @lounge
      ...
      notifyEvent(event, source)
      {
          initiateTopic(event);
      }

    ;

    + InitiateTopic @doorOpeningEvent
       "<q>Close that door! There's a draft in here!</q> Aunt Mavis commands
        imperiously. "
    ;
      
      
```

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[sensory.t](../sensory.t) file.



------------------------------------------------------------------------



*Adv3Lite Manual*  
<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
Sensory  
<span class="navnp"><a href="scenetopic.html" class="nav"><em>Prev:</em> SceneTopic</a>
    <a href="signals.html" class="nav"><em>Next:</em> Signals</a>    
</span>


