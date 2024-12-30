---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 15. MultiLocs and Scenes

## 15.1. MultiLocs

At a stretch we could regard MultiLocs and Scenes as complementary: MultiLocs cater for one object being in several places at the same time, while Scenes divide up time rather than space. In reality, though, the only reason for putting them both in the same chapter is that we need to cover them both but neither merits a whole chapter to itself. We'll start with MultiLocs.

Generally, the whereabouts of an object in an adv3Lite game is defined by its `location` property, which would suggest that, like most objects in the real world, an object can only be in one place at a time. But there are three situations where we really do want a game object to be in several places at once:

1. The object in question straddles the border of several rooms, such as a fountain

that stands at the centre of a square we've implemented as four different rooms.

2. The object is a distant object (like the sun, the moon, or a faraway mountain)

that's visible from many different locations.

3. The object is a Decoration (a bunch of trees in a forest, say, or a plain vanilla

ceiling in a house) identical instances of which occur in several places.

For these three situations we can use the `MultiLoc` class. `MultiLoc` is a mix-in class which generally needs to precede one or more Thing-derived classes in any class list. There are a number of ways in which we can specify which locations a MultiLoc object is present in:

1. We can simply list its locations in its `locationList `property;
 so, for example,

for the fountain at the centre of a square we might define l`ocationList= [squareNE, squareNW, squareSE,
squareSW]`. Note that this property (or `initialLocationList`, which we can use for the same purpose) can contain Regions as well as Rooms and Things.
2. We can define its `initialLocationClass` to be a class of object every member

of which contains the MultiLoc in question. For example, if we were implementing an object to represent the sun we'd probably define `initialLocationClass =OutdoorRoom `(supposing we had defined a suitable OutdoorRoom class)`.` We can refine this further, if we wish, by overriding the `isInitiallyIn(obj)` method; for example if we wanted the sun to appear in every OutdoorRoom *except* those of the our ForestRoom class (where the leafy canopy obscures the sun) we could additionally define i`sInitiallyIn(obj) 

 
    { return !obj.ofKind(ForestRoom);
 }
 
    .

3. We can simply also define an `exceptions` list so that the MultiLoc will start out

in every location defined by either of the first two methods except for those listed in `exceptions`.

So, for example, if we'd defined OutdoorRoom and ForestRoom classes, where ForestRoom was a subclass of OutdoorRoom, we might define a Distant object to represent the sun in all those places like so:

 
    sun: MultiLoc, Distant 'sun;  bright'
    
 
        "It's too bright to look at for long. "
    initialLocationClass = OutdoorRoom
 
        isInitiallyIn(obj) { return !obj.ofKind(ForestRoom);
 }
 ;

Similarly, if we wanted a fountain to stand at the centre of a square comprising four different rooms, we could define it thus:

 
    fountain: MultiLoc, Container, Fixture 'fountain;  ornamental'
 
        "It's in the form of some improbable mythical beast gushing water
out

 
        of an unmentionable orifice. "
    locationList = [squareNE, squareNW, squareSE, squareSW]
 
    ;

We've made the fountain a Container because we're envisaging it as the kind of fountain people could throw coins into. Note that if the player character were to throw a coin into the fountain, s/he'd be able to retrieve it equally well from any of the four corners of the square, since the fountain is in all of them.

Note also that although in this example (and in many common uses of MultiLoc) the locations the MultiLoc is present in are all Rooms, there's no rule restricting us to using Rooms;  it's legal to use *any* Thing-derived object as a MultiLoc location (as it is for the location of any Thing). It's also legal to use one or more Regions.

These two uses of MultiLoc are quite safe, because both the sun and the fountain are the same sun or fountain from whichever location they're viewed. If we're going to use MultiLoc to represent qualitatively similar but numerically distinct items like trees in a forest or ceilings in the room of a house we have to be a bit more careful. Normally we should only implement simple Decoration objects in this way, that is, objects that allow only the very minimum of interaction (examining, and perhaps smelling, listening to or feeling). We certainly shouldn't use MultiLocs to represent any set of similar objects where one of those objects might change state independently of the others. Don't, for example, use a MultiLoc, Decoration to represent trees in the forest and then allow the player to start cutting down trees, since once one tree is cut down, they all will be! In such a case it's better to create a custom Tree class and arrange for one instance of it to be in each forest location.

We can use the `isIn(loc)`, `isDirectlyIn(loc)` and `isOrIsIn(loc)` methods to test whether a MultiLoc is in *loc* (these methods are overridden on MultiLoc to give

sensible results). To a limited extent we can also determine the location of a MultiLoc by inspecting its `location` property. Strictly speaking this should be meaningless, because a MultiLoc is normally in several locations at once, but for many purposes what we're actually interested in is whether the MultiLoc is in the same location as the actor, or at least a location in the same room as the actor, so MultiLoc's location property will return nil if the MultiLoc isn't anywhere at all, a location within the current actor's current room (or the actor's current room itself) if the Multiloc is present there, or the location the MultiLoc was last seen at, if there is one, or, failing all that, the first location in the MultiLoc's `locationList` (which may have been updated since it was originally defined). This should generally give a usable result, provided that it's used with reasonable awareness of its limitations.

We can use `moveInto(loc) `to move a MultiLoc, but the effect will be to move it out of all its existing locations leaving it only in *loc*. In some cases this may be just what we want, of course;
 for example, at sunset we could call `sun.moveInto(nil)` to remove the sun from everywhere at once. On other occasions we might want to be more selective what we're moving a MultiLoc in and out of, in which case we can use:

- `moveIntoAdd(loc)` -- make the MultiLoc present in *loc* without removing it from any of its existing locations.

- `moveOutOf(loc)` -- remove the MultiLoc from *loc* (without affecting the MultiLoc's presence anywhere else).

## 15.2. Scenes

Rooms and Regions can be used to divide up a game spatially. If we want to divide it up temporally we can use Scenes. A `Scene` is simply an object that represents a state of affairs that is ongoing for the time being, but which may have a definite start-point and end-point within the game. (Users familiar with Inform 7 might like to know that adv3Lite Scenes are very similar to Inform 7 Scenes, from which they are shamelessly 'borrowed').

To expand on that slightly, we can define a `Scene` such that it starts when a particular condition becomes true, and ends when another condition becomes true. We can also define what happens when the Scene starts and ends, and what happens each turn when it is current. We can test how long a Scene has been going on for, whether it's currently happening or whether it has happened and how it ended, and we can use the currency of a particular Scene on the during condition of a Doer (as explained in Chapter 6 above).

The properties and methods we can define on Scene are as follows:

- `startsWhen`: an expression or method that evaluates to true when you want the scene to start.

- `endsWhen`: an expression or method that evaluates to something other than nil when you want the scene to end. Often you would simply make this return true when you want the scene to end, but if you wanted to note different kinds of scene ending you could return some other value (which could be a number, a single-quoted string, an enum or an object) to represent how the scene ends.

- `isRecurring`: Normally a scene will only occur once. Set `isRecurring` to true if you want the scene to start again every time its startsWhen condition is true.

- `whenStarting`: A method that executes when the scene starts;
 you can use it to define what happens at the start of the scene.

- `whenEnding`: A method that executes when the scene ends;
 you can use it to define what happens at the end of the scene.

- `eachTurn`: A method that executes every turn that the scene is active.

In addition your code can query the following properties of a Scene object (which should be treated as read-only by game-code since they're updated by library code):

- `isHappening`: Flag (true or nil) to indicate whether this scene is currently taking place.

- `hasHappened`: Flag (true or nil) to indicate whether this scene has ever happened (and ended).

- `startedAt`: The turn number at which this scene started (or nil if this scene is yet to happen).

- `endedAt`: The turn number at which this scene ended (or nil if this scene is yet to end).

- `timesHappened`: The number of times this scene has happened.

- `howEnded`: An optional author-defined flag indicating how the scene ended (this could be a number, a single-quoted string, an enum or an object).

The `howEnded` property deserves a further word of explanation. You can use this more or less how you like, but one coding pattern might be to use custom objects to represent different endings and then make use of the methods and properties of your custom objects. For example, suppose a certain scene ends tragically if Martha is dead but happily if you give Martha the gold ring, you might do something like this:

 
    class SceneEnding: object
 
        whenEnding() { }
;

 
    happyEnding: SceneEnding
 
        whenEnding() { "A surge of happiness washes over you...";
 }
;

 
    tragicEnding: SceneEnding
 
        whenEnding() { "You feel inconsolable at your loss...";
 }
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

One special point to note: if you define the `startsWhen` condition of a Scene so that it is true right at the start of play (e.g. `startsWhen =true`), the Scene will become  active, and its `whenStarting()` method will execute, just *after *the first room description is displayed. This makes it easy to use the Scene to display some initial text after the first room description using its `whenStarting` method, e.g.:

 
     introScene: Scene
     startsWhen = (harry.isIn(harrysBed))
 
        endsWhen = (!harry.isIn(harrysBed))
 
        
        whenEnding()
    
 
    {    
 
        "Harry stretches and yawns, before staggering uncertainlyacross the

 
        
        room. ";
 
    }

 
        
        whenStarting = "Harry groans. "
 
    ;

Note that when we just want a method to display some text, we *can* define it as a full-blown method, like `whenEnding()` in the above example, or we can just use a double-quoted string, as in the `whenStarting `method. Both have the same effect here.

[&laquo; Go to previous chapter](14-non-player-characters.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](16-senses-and-sensory-connections.html)