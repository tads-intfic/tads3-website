---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 11. Nested Rooms

## 11.1. Nested Room Basics

Back in chapter 5 we discussed the containment model in adv3Lite, and saw how various classes such as `Container` and `Surface` can be used to put things in and on. But while these classes can contain *things*, they can't contain *actors*, and, in particular they can't contain the player character;  or rather they don't provide any handling for the player character and other actors to get in and out of them.

It doesn't take much to change that in adv3Lite. In order to make an object an actor can get on, all we need to do is to give it a `contType` of `On` and then define `isBoardable =true`. In most cases, though, it will be easier just to use the `Platform` class, which does all that for us (a Platform is a `Surface` with `isBoardable =
true`). Similarly to make something an actor can get in, we just need an object with `contType = In` and `isEnterable =
true`, and again there's a `Booth` class that does that for us (a `Booth` is a `Container` with `contType = In`).
Platforms and Booths are objects that aren't rooms but which can contain an actor;  they're typically used to implement items of furniture and the like. Getting on or off a Platform or in or out of a Booth doesn't count as travel and doesn't trigger any travel notifications. If the player types OUT when the player character is on a Platform or in a Booth, it's taken as a command to get off or out.

For the most part, we can use Nested Rooms in a fairly straightforward, intuitive way. For example, to set up a small bedroom with a single bed and a wooden chair, we could just do this:

 
    bedroom: Room 'Bedroom'
 
        "This bedroom is so small that there's little space for anything
apart

 
        from the single bed crammed hard against the wall. The only wayout is
     via the door to the east. "
 
        east = bedroomDoor
    out asExit(east)
 
    ;

 
    + bedroomDoor: Door ''door'; 
 
    + bed: Platform, Heavy 'single bed'
 
    ;

 
    + woodenChair: Platform 'wooden chair;  small'  initSpecialDesc = "A small wooden chair next to the bed takes up
most

 
        of the spare space in the room. ";

With this definition, the player could get on the chair, or on the bed.  The bed is too heavy to pick up, but the player character can pick up the chair and can also put it on

the bed. It's also possible to get on the chair while the chair is on the bed. There is one subtlety: if the player types `out` while the player character is on the bed, the player character will get off the bed;  if the player then types `out` again the player character will go through the door. If, however the player types `east` while the player character is on the bed, the player character will get off the bed (via an implicit action) and then go through the door.

That's *almost* all you need to know about Nested Rooms in adv3Lite;  but not quite. In the remainder of the chapter we'll look at some of the potential complications.

The first one is this: what happens when there's something you want to be able to both get on and get in? Well, that depends on what exactly you have in mind. If what you want is a bed, say, that responds to GET ON BED or GET IN BED in exactly the same way, then you could simply define the bed as a Platform and then make GET IN behave like GET ON  and GET OUT like GET OFF using the `asDobjFor()` macro, like this:

 
    bed: Platform, Heavy 'bed'
 
        dobjFor(Enter) asDobjFor(Board)
    dobjFor(GetOutOf) asDobjFor(GetOff)
 
    ;

If, on the other hand, what you have in mind is something like a large cabinet the player character could either squeeze inside or get on top of, then you need to use the kind of multiple containment techniques we met in chapter 5, for example:

 
    cabinet: Heavy 'tall metal cabinet;  green'
 
     
 
        "It's just tall enough for you to squeeze inside, but not sotall
        that you couldn't climb on top of it. "
 
        
    remapOn: SubComponent { isBoardable = true }
 
     remapIn: SubComponent { isEnterable = true }

 
    ;

## 11.2. Nested Rooms and Postures

Adv3Lite makes no attempt to track the postures of actors so STAND ON BED, SIT ON BED and LIE ON BED all mean the same as GET ON BED, just as SIT IN CABINET, LIE IN CABINET, and STAND IN CABINET would all mean the same as GET IN CABINET.[^1]

[^1]: If you really need to track the postures of actors, there's a postures.t extension that comes in the extensions directory of your adv3Lite installation;  but for most games this is unlikely to be either necessary or beneficial.

That's true, at least, unless the game author wants to make a slight distinction between them. While the *effects* of STAND ON BED, SIT ON BED, LIE ON BED and GET ON BED are all the same, we can, if we wish, treat them slightly differently in terms of which we're prepared to allow, and which we may prefer. A small wooden chair is probably something the player character couldn't actually lie on, so although in one sense LIE ON CHAIR means the same as GET ON CHAIR, we might just want to disallow the former and allow the latter for the sake of slightly greater realism. If we want to do this, we can do so by setting `canLieOnMe` to nil (and likewise for `canStandOnMe` and `canSitOnMe`). The effect is a subtle one, but it may be worthwhile.

It's also one that may have a desirable knock-on effect. If the player types the command `lie down`, since adv3Lite provides no means for the player character to change posture, the command will be treated as meaning `lie on` with a missing direct object. The game will then prompt the player for the missing direct object ("What do you want to lie on?") *unless* there's one object in scope that scores better for this action than any other. If we rule out lying down on the chair, then the bed is the only candidate, so `lie down` will be taken to mean `lie on bed` without the player being prompted for the missing direct object.

But what happens if the player types `sit`? Presumably it should be possible to sit on either the bed or the chair, but other things being equal we might think the chair is the better choice. We can signal this by giving it a higher `sitOnScore` than the bed (the default being 100;
 we could also use `standOnScore` and `lieOnScore` in the same way).

So, with these minor refinements, our little bedroom might become:

 
    bedroom: Room 'Bedroom'
    
 
        "This bedroom is so small that there's little space for anything
apart
     from the single bed crammed hard against the wall. The only way outis

 
        via the door to the east. "
    east = bedroomDoor
 
        out asExit(east);

 
    + bedroomDoor: Door ''door'
 
    ;

 
    + bed: Platform, Heavy 'single bed'
    ;

 
    + woodenChair: Chair 'wooden chair;  small'
 
        initSpecialDesc = "A small wooden chair next to the bed takes up
most  of the spare space in the room. "

 
        canLieOnMe = nil
 
        sitOnScore = 120`;
## 11.3. Other Features of Nested Rooms

### 11.3.1. Nested Rooms and Bulk

It's worth bearing in mind that actors have bulk and Nested Rooms have a `bulkCapacity`;  in other words, who or what can fit into a NestedRoom may be limited by bulk.

Since by default everything has a `bulk` of 0 and a `bulkCapacity` of 10000, this won't present any limitations unless you start defining the `bulk`, `bulkCapacity` and  `maxSingleBulk` of various objects. In the case of nested rooms you may wish to do so, for example, if you want a chair that's just big enough for one person to sit on. Giving the chair the same bulkCapacity as the bulk you assigned to actors would then prevent the player character from sitting on Aunt Florence's favourite armchair while it was occupied by Aunt Florence. It could also be used to prevent the player from getting in a trunk that was already filled with junk, for example.

### 11.3.2. Dropping Things in Nested Rooms

If the player character drops an object while in a Nested Room the game must decide whether the thing that has just been dropped ends up in the Nested Room or in the Nested Room's location. Dropping something while on a large rug is likely to result in the object's falling onto the Platform. Dropping something while on a small chair is likely to result in the object's falling into the chair's enclosing room.

Which of these is chosen depends on the value of the `dropLocation` property of the actor's immediate container. By default this is `self`, meaning that an object dropped while an actor is in a nested room will end up in or on that nested room (Booth or Platform). For a small nested room like a small chair, you could change this so that, for example, the `dropLocation` is the location of the chair, for example:

 
    + woodenChair: Chair 'wooden chair;  small'  initSpecialDesc = "A small wooden chair next to the bed takes up
most

 
        of the spare space in the room. "
 
        canLieOnMe = nil  sitOnScore = 120
 
        dropLocation = location `;
Note that you can also define the `dropLocation` property on a Room, if you wish. This might be useful if you have a room representing a space well off the ground, such as the top of a tree or the top of a mast. You could then define the dropLocation to be the ground or deck below, so that items dropped at the top of the tree or mast ended up falling to the room below and rather than suspended in mid-air.

### 11.3.3. Enclosed Nested Rooms

By default a Nested Room is open to its immediate surroundings;
 an actor sitting on a chair in the lounge is still treated as being in the lounge;
 a `look `command will describe the lounge, and everything in the lounge is reachable from the chair. If, however, the player character goes inside an openable Booth and closes it, then unless the Booth is transparent, s/he will not be able to see out into the enclosing room.  In such a case the Nested Room's `roomTitle` property will be used as the name of the player character's current location, and the `interiorDesc` property used to provide an

internal description of the NestedRoom for the purposes of a `look` command. Of course, if the player character shuts himself inside an opaque Booth with no source of light, he won't be able to see anything at all;  but we can then override the `darkName` and `darkDesc` properties of the Booth to provide custom versions just as we can for a Room. By default, the `roomTitle` of a Nested Room is simply its name.

### 11.3.4. Staging and Exit Locations

If the player character is on a bed and wants to get on a chair elsewhere in the same room, the command `get on chair `shouldn't just teleport him from one nested room to the other. The player character first needs to leave the bed before s/he can get on the chair. To enforce this adv3Lite uses the `stagingLocation` property, which contains the location an actor needs to be in in order to enter or board the nested room in question. For most nested rooms the `stagingLocation` will simply be the same as the location, although for nested rooms that are SubComponents of some multiply-containing objects the `stagingLocation` will be the lexicalParent's location, i.e. the location of the mutliply-containing object.

The rule that an actor must be in a nested room's `stagingLocation` before entering or boarding it is enforced in the `actorInStagingLocation` precondition, which will attempt to move the actor into the staging location via one or more implicit actions. Note that this is only enforced if the actor is outside the nested room. If the actor is on a chair that's resting on a stage, for example, then `get on stage `will not trigger an attempt to move the actor to the stage's `stagingLocation`;  the actor will simply be moved straight to the stage.

The converse of the `stagingLocation` is the `exitLocation`, which is where the actor is moved to in response to a command to `get off `or` get out of` the object in question. The `exitLocation` is also defined by default to be either the object's location or, if appropriate, the location of its lexicalParent, whereas by default the `stagingLocation` is the same as the `exitLocation`.

## 11.4. Vehicles

Occasionally you may want a nested room the player character can move around in or on, like a bicycle, a magic carpet or a cart. Such objects are often called *vehicles* in Interactive Fiction. To create a vehicle in adv3Lite you just define a Booth or Platform in the normal way and then define `isVehicle =true` on it. For example, to make a basic bicycle you might do this:
 
    bike: Platform 'bicycle;  old battered;  bike'
 
        "It's your old battered bike, still serviceable though. "
 
        isVehicle = true
    canLieOnMe = nil
 
        canStandOnMe = nil;

The player can now issue the commands `get on bike` or `sit on bike` to get the player character on the bicycle. Once the player character is on the bike, any movement commands like `north` or `climb stairs` will move the bicycle with the player character on it.

That, of course, raises the question whether the player character *ought* to be allowed to climb the stairs while riding the bike. The solution to this potential problem lies in the fact that when an actor is moving around in or on a vehicle, it's the vehicle rather than the actor that passed as the *traveler* parameter to the various methods that take a traveler parameter. We could thus define a `bikeBarrier` `TravelBarrier` to put on any TravelConnectors we don't think the bike should be allowed to traverse.

 
    bikeBarrier: TravelBarrier
 
        canTravelerPass(traveler, connector) { return traveler != bike;
 }
  explainTravelBarrier(traveler, connector)
 
 
    {    
 
        "{I}
 {can\'t}
 ride the bike <<connector.traversalMsg>>.";
    

 
        }
;

This, incidentally, illustrates why the TravelBarrier class takes a *connector* parameter in its methods. Since our bikeBarrier could be used on any number of TravelConnectors, we need to be able to phrase the message in `explainTravelBarrier()` in such a way that it will suit any one of them. The *connector* parameter of `explainTravelBarrier` gives us the TravelConnector that's being attempted, and its `traversalMsg` property gives us a snippet of text like 'up the staircase' or 'through the front door' that can be used to complete a sentence of the type shown above.

## 11.5. Reaching In and Out

The normal convention in Interactive Fiction is that everything in the current room is within reach of an actor located there, possibly on the assumption that the actor will unobtrusively move round the space delineated by the 'room' to interact with whatever's needed. This assumption becomes a bit less plausible, however, if the actor is located in a nested room, sitting on a chair, for example. In such a case, one of three things could happen. First, if the player character needs to reach an object that's across the room we could just ignore the lack of realism involved and let the player character take it without moving from the chair. Second, we could block the player character's access to objects outside the chair by saying something like "You can't reach the green book from the chair." Or third, we could enforce the rule that the player character can't reach across the room from the chair, but automate making the player character leave the chair in order to reach an object placed elsewhere in the room.

None of these solutions is obviously the 'right' one to be preferred above the others, and adv3Lite allows us to choose which we want to use in any given case. We can do so by taking advantage of the following properties/methods (which we would need to defined on the chair or other nested room the player character might be occupying): `allowReachOut(obj)` and `autoGetOutToReach`. If `allowReachOut(obj)` returns true, then an actor on the chair or other nested room can reach out to touch *obj* without leaving the nested room;  if it returns nil then s/he can't. This allows us to treat different objects differently, depending on how we envisage them being spatially related to the nested room. Note that adv3Lite assumes that an actor can always reach the nested room or objects inside the nested room in any case, so we don't need to cater for such obviously accessible objects in our `allowReachOut(obj)` method. If `allowReachOut(obj)` returns nil, then if `autoGetOutToReach` is true, the actor will automatically leave the nested room in order to reach *obj*;  otherwise if `autoGetOutToReach` is nil the attempt to reach obj will fail with a suitable message explaining that *obj* can't be reached.

So, for example, if the player character starts out on bed and we want him/her to have to leave the bed in order to touch anything else in the room we might do something like this:

 
    me: Thing
 
        location = bed
     isFixed = true
 
        person = 2
        
        contType = Carrier
 
    ;

 
    bedroom: Room 'bedroom'
  
 
        "This is your bedroom...";

 
    + bed: Platform, Heavy 'bed'
        allowReachOut(obj) { return nil;
 }

 
        
    autoGetOutToReach = true;
;

 
    + table: Surface 'table'
 
    ;

 
    ++ note: Thing 'note'
 
        "You suspect it may be important, but you'd need to read it
 
        to be sure. "
 
        readDesc = "You have five minutes to get out of here before
        this house burns down around you! "
 
        dobjFor(Read)
    
 
    { 
        
    preCond = [objHeld]
 
        }
;

In this case the player can see that there's an important note on the table, but the player character can't actually read the note without holding it, and to do that s/he needs to leave the bed. In this case an attempt to read the note will trigger an implicit take action which in turn will trigger an attempt to get off the bed in order to reach the note.

The complement to reaching out is reaching in, and we can also control that, or indeed, just reaching. This may or may not involve nested rooms, and in any case works a little differently from the `allowReachOut` mechanism we have just seen. Reaching and reaching in are controlled by two methods, `checkReach(actor)` and `checkReachIn(actor,target)`. The `checkReach(actor)` method determines whether *actor* can reach the object `checkReach()` is defined on;
 `checkReachIn(actor,target)` determines whether *actor* can reach inside the object on which it's defined to reach *target*. By default `checkReachIn(actor,
target)` simply calls `checkReach(actor)`, on the assumption that if an actor can't reach an object, that actor will also be unable to reach that object's contents.
Unlike `allowReachOut()`, these two methods should not return true or nil;
 instead they should either do nothing or else display a message explaining why the object on which they're defined can't be reached. If they display anything it will be assumed that reaching is not possible;  if they don't then it will be assumed that they're not objecting to the reach.

This mechanism can be used for a number of purposes, for example to make an object too hot to touch (perhaps until it cools down) or else out of reach on a high shelf (until the player character gets on a chair to reach it, say).

We could implement the second of these scenarios like so:

 
    + Surface, Fixture 'high shelf'
    checkReach
 
    (actor)
  
 
    {
 
        
     if(!actor.isIn(woodenChair))
     
 
        "The shelf is too high up for you to reach. ";

 
        }
;

 
    ++ torch: Flashlight 'flashlight; ;  torch'
 
    ;

 
    + woodenChair: Platform 'wooden chair' ; 
In this example, there's a flashlight (which the player presumably needs in order to visit some dark room or other) resting on the high shelf. In order to reach either the high shelf or anything on it (such as the flashlight) the player character needs to stand on the wooden chair.

As previously indicated, we're not restricted to using this mechanism for situations where an object may be too far away;  we can use it for *any *situation in which an object might become untouchable. For example, suppose we have an iron poker which we can put in a fire, which gets hotter the longer we leave it there, and which eventually becomes too hot to touch. Rather than trying to trap every action that involves touching the poker, we can simply make it out of reach with the `checkReach()` method:

 
    poker: Thing 'iron poker'
 
        "It's <<isRedHot ? 'glowing red hot' : 'just an iron
poker'>>. "  isRedHot = nil

 
        checkReach(actor)
 
 
    { 
    if(isRedHot)
 
        
 
        "It's too hot to touch! ";   }

 
    ;

All the methods and properties we have defined in this section are defined on Thing, so they're not restricted to being used with nested rooms.

Exercise 18:  Create a one-room game consisting of the Player Character's bedsit. This will contain a bed (of course) under which is a drawer containing a pillow. There's also a desk, a swivel chair (too unstable to stand on) and an armchair (too heavy to move), as well as a large sofa that's large enough to lie on. Above the desk is a high bookshelf on which is a solitary book. To reach the shelf or the book the player character must stand on the desk. On another wall is a high bunk bed which can only be reached via a ladder that's currently stored under the desk. Beneath the bunk bed is a wooden bench seat, attached to the wall;  there's insufficient headroom under the bunk bed to stand on the bench, and insufficient headroom above it to stand on the bunk. Also on the floor under the bunk is a sleeping cat. Finally, there's an openable wardrobe that's large enough to walk into;  inside the wardrobe is a hanging rail on which is a solitary coat-hanger. If you're feeling really adventurous make it so that in general an actor inside a Nested Room can't reach outside it (there will need to be exceptions to this), and will automatically be taken out of the Nested Room if s/he tries.

[&laquo; Go to previous chapter](10-darkness-and-light.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](12-locks-and-other-gadgets.html)