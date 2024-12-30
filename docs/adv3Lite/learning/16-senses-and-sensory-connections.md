---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 16. Senses and Sensory Connections

## 16.1. The Four Other Senses

Adv3Lite comes with handling for five senses: sight, sound, smell, touch and taste. The most elaborate provision is made for sight;
 the provision for the other four senses is fairly basic, but slightly fuller for sound and smell than for taste and touch.

We *can* handle all four of the non-visual senses in a similar fashion by defining `listenDesc`, `smellDesc`, `feelDesc` and `tasteDesc` to provide responses to `listen to`, `smell`, `feel` and `taste` respectively;
 for example:

 
    apple: Food  'apple;  round green red sweet firm juicy; 
fruit[pl]'

    
 
        "It's round, with patches of both red and green. "
    feelDesc = "It feels reassuringly firm. "
 
        tasteDesc = "It tastes sweet at juicy. "
    listenDesc = "The apple is obstinately silent. "
 
        smellDesc = "There's the faintest sweet apple smell. "`; In order to be able to taste something the player character has to be able to touch it, and in order to be able to touch it the player character has to be in the same room as the object s/he wants to touch without any obstacles (such as a closed container, or a `checkReach()` method that forbids reaching) to prevent the object from being touched. As we shall see below, it's sometimes possible to see, smell and hear objects that are in remote locations, but it is never possible to touch or taste them.

Smell and sound are different from taste and touch in another respect. The commands `touch `and` taste `can't be used without specifying an object to be touched or tasted, e.g. `touch apple `or` taste apple`. But `smell` and `listen` can both be used intransitively, without specifying any particular object, in which case they'll list the `smellDesc` or `listenDesc` of every object in scope that defines a `smellDesc` or `listenDesc`. If we want to exclude an object from such a listing (because we reckon its sound or smell wouldn't obtrude on the player character unless s/he explicitly listened to or smelt that particular object), we could set its isProminentNoise and/or isProminentSmell properties to nil, e.g.:

 
    apple: Food  'apple;  round green red sweet firm juicy;  fruit[pl]'
 
        "It's round, with patches of both red and green. "
 
        feelDesc = "It feels reassuringly firm. "
    tasteDesc = "It tastes sweet at juicy. "
 
        listenDesc = "The apple is obstinately silent. "
    smellDesc = "There's the faintest sweet apple smell. "
 
        isProminentNoise = nil
    isProminentSmell = nil
;
One further respect in which sound and smell differ from the other three senses is

that we can define objects to represent a `Noise` or a `Odor` distinct from any physical object that may be giving off that noise or smell. For this we just define the `desc` property of the Noise or Smell to respond to `listen to noise` or `smell odor` (or to examining either of them). For example:

 
    cave: Room 'Large Cave'
    
 
        "There's general smell of dampness here, as well as the sound of
        dripping water. "
 
    ;
+ Odor 'smell of dampness;  pervasive musty;  damp'
    
 
        "It's a pervasive, musty smell. "; 
 
    + Noise 'sound of dripping water;  continuous'
 
        "You can't locate where it's coming from, but it's quitecontinuous. "

 
    ;

These objects will respond to `smell smell of dampness` and `listen to sound of dripping water`, but will refuse just about any other command with a message like "You can't do that to a smell/sound." They effectively work as decoration objects, which means that if there was another object representing water in the cave, say, a command like `taste water `would be directed to the water without disambiguation.

Note that `Odor` and `Noise` objects won't be listed in response to intransitive smell and listen commands unless you explicitly give them `smellDesc` and `listenDesc` properties, in which case the `smellDesc` or `listenDesc` will be used in response to the intransitive smell or listen, while the `desc` will be used in response to the transitive `smell smell` or `listen to noise`. So, for example, in the above case we might better have written:

 
    cave: Room 'Large Cave'
    
 
        "There's general smell of dampness here, as well as the sound of
        dripping water. "
 
    ;

 
    + Odor 'smell of dampness;  pervasive musty;  damp'
 
        "It's a pervasive, musty smell. "
 
        smellDesc = "There's a pervasive smell of damp in the cave. "; 
 
    + Noise 'sound of dripping water;  continuous'
    
 
        "You can't locate where it's coming from, but it's quitecontinuous. "
     listenDesc = "You can hear a continuous dripping sound. "
;
It's not always appropriate to do this, however, especially when the smell has already been mentioned on another object. For example, if on an oven object we defined `smellDesc = "There's a smell of burning coming from theoven"`, we might well want to define an `Odor` object to represent the smell of burning, but we wouldn't then give that `Odor` object a `smellDesc` as well.
## 16.2. Sensory Connections

Sound, light and smells all travel. In the standard IF model, the player character can only sense what's in the same room as s/he is, but this may not always be realistic. We may, for example, have implemented a very large hall as two or more rooms, perhaps one room representing the east end and the other the west. Or we may have done the same for a town square or a large field or a long corridor. In such cases, whereas it's perfectly reasonable that the player character cannot taste or touch anything in the other rooms, it's not so reasonable that s/he cannot see, hear or smell them, since in real life you'd be able to see the other end of the hall, the other corners of the square, the other parts of the field and so on. Ideally, we need a mechanism to provide sensory connections between rooms in such situations.

In adv3Lite this mechanism is provided by the `SenseRegion` class. A `SenseRegion` is a special kind of `Region`;
 in other words its something that several rooms can be defined as belonging to, in just the same way as they can be defined as belonging to any other kind of Region. But unlike the basic `Region` class, a `SenseRegion` provides sensory interconnections (by default for sight, sound and smell) across all the rooms it contains. You set up a `SenseRegion` in just the same way as you'd set up an ordinary `Region`, except that you declare it to be of the `SenseRegion` class. For example to create a large hall comprising two rooms with a sensory connection between the two ends of the hall you could do this:

 
    hallRegion: SenseRegion
 
    ;

 
    eastHall: Room 'Hall (east)'  'east end of the hall'
 
        "This large hall continues to the west. "
 
        west = westHall
    regions = [hallRegion]
 
    ;

 
    westHall: Room 'Hall (west)'  'west end of the hall'
 
        "This large hall continues to the east. "
 
        east = eastHall
    regions = [hallRegion]
 
    ;

We can customize the particular connections any given `SenseRegion` allows by overriding the following properties on it:

- `canSeeAcross` -- (true by default);
 is it possible to see something in one room in this SenseRegion from another room in this SenseRegion?

- `canHearAcross` -- (true by default);
 is it possible to hear something in one room in this SenseRegion from another room in this SenseRegion?

- `canSmellAcross` -- (true by default);
 is it possible to smell something in one room in this SenseRegion from another room in this SenseRegion?

- `canThrowAcross` -- (nil by default);
 is it possible to throw something from one room in this SenseRegion at a target in another room in this SenseRegion? (If not the projectile will fall short into the room it was thrown from).

- `canTalkAcross` -- (nil by default);
 is it possible for an actor in one room in this SenseRegion to talk to an actor in another room in this SenseRegion?

These properties are global, all-or-nothing, in that they allow either everything or nothing to be seen, heard or smelled in remote locations. This may not always be realistic;
 one might see a large scarecrow at the other end of a field, but not a small buttercup;
 one might smell a bonfire over the fence, but not a rose;
 one might hear the sound of drumming from the far end of the hall but not the ticking of a quiet clock. Adv3Lite allows us to model these situations by defining the remote sensory properties of individual objects.

The first way we can do this is via the `sightSize`, `soundSize` and `smellSize` properties of a Thing, each of which can be `small`, `medium` or `large `(the default is` medium`). How these properties behave depends on what else we do. Supposing we don't override or define any of the methods we're about to discuss below, then the default behaviour will be:

- `small` -- the object cannot be seen/heard/smelt from a remote location.

- `medium` -- the object can be detected in the relevant sense, but no detail can be made out (it will be described as 'too far away to make out any detail' or 'too far away to hear/smell distinctly).

- `large` -- the object can be detected in the relevant sense, and its normal desc, listenDesc or smellDesc will be shown in response to an attempt to examine, listen to, or smell it.

However, there's two more series of methods that may further affect this behaviour. Firstly, the set of methods (defined on Thing) that determine whether a particular object can be detected by a given sense:

- `isVisibleFrom(pov)` -- Is this object visible to pov? By default this is true if sightSize is not small, but can be overridden to give different results.

- `isAudibleFrom(pov)` -- Is this object audible to pov? By default this is true is soundSize is not small, but can be overridden to give different results.

- `isSmellableFrom(pov)` -- Is this object smellable to pov? By default this is true if smellSize if not small, but can be overridden to give different results.

- `isReadableFrom(pov)` -- Can pov read what's written on this object? By default this is true only if sightSize is large, but can be overridden to give different results.

In each case the *pov* parameter is the point-of-view object, i.e. the actor doing the

sensing (normally the player character). Each of these methods could therefore test for the location of the pov object before deciding whether the object they're defined on can be sensed from there. In other words, once we've defined a number of rooms as belonging to the same `SenseRegion` we can further refine which objects can be seen, heard, smelt or read from particular rooms within that `SenseRegion`. This probably works best on objects that are fixed in place, so that we can be sure which room it's in when we're writing isXxxableFrom(pov) routines to determine where it can be sensed from. Whereas it would be possible to do this with portable objects, it's probably easier to stick just to using their `sightSize`, `smellSize` and `soundSize` properties unless we really do need finer-grained control.

The other set of methods that can affect the behaviour of these properties are the remoteXxxDesc methods, namely:

- `remoteDesc(pov)` -- the description of this object when examined from pov

- `remoteListenDesc(pov)` -- the description of this object when listened to from pov

- `remoteSmellDesc(pov)` -- the description of this object when smelt from pov

Once again *pov* is the point-of-view object doing the sensing, normally the player character. These three methods can thus be used to describe what an object looks like, sounds like or smells like from a remote point-of-view. If any of these methods is defined on an object, it will be used regardless of the object's `sightSize`, `soundSize` or `smellSize` (as the case may be), provided that the corresponding `isVisibleFrom(pov)`, `isAudibleFrom(pov)` or `isSmellableFrom(pov)` method returns true (which, by default, they will if the corresponding size is not `small`).

## 16.3. Describing Things in Remote Locations

The properties and methods we have just discussed determine what can be sensed from a remote location and how remote objects are described when they are examined, listened to or smelled. One further point that remains to be discussed is how objects are listed in remote locations.

You may recall that we can give an object a paragraph of its own in the listing of objects in room descriptions by giving it a `specialDesc` and/or `initSpecialDesc`. The second of these, `initSpecialDesc` is used for as long as `isInInitState` is true which, by default, is until the object is moved (although we're free to change this if we want to use some other condition, such as until the item is described). Provided a `specialDesc` is defined we can also define  `remoteSpecialDesc(pov)`, where *pov* is the actor doing the viewing (usually the player character). Provided an `initSpecialDesc` is defined we can also correspondingly define `remoteInitSpecialDesc(pov)`. In both cases the remote version will be used when

the actor and the object being listed are in different top-level rooms, although their default behaviour is simply to use `specialDesc` and `initSpecialDesc`.

In the case of an Actor, the `remoteSpecialDesc(pov)` method is farmed out to the current ActorState, if there is one, otherwise `actorRemoteSpecialDesc(pov)` is used;
 this parallels the use of `specialDesc` on an Actor.

Where neighbouring locations are connected by a SenseRegion, we need to use `remoteSpecialDesc()` alongside `specialDesc` to make it clear when we're listing something that's not in the player character's immediate location, for example:

 
    + table: Surface, Heavy 'large wooden table'
 
        specialDesc = "A large wooden table occupies much of thefloor-space at
        this end of the room. "
 
        remoteSpecialDesc(pov)
     {
 
        
        switch(pov.getOutermostRoom)  
 
    {
 
        
        
    case hallSouth:
          
 
        "A large wooden table stands at the far end of the hall.";
    

 
        
        
        break;
 
        
     case carPark:
 
        
        
 
        "Through the window you can see a large wooden table inthe hall. ";
 
        
        break;
    
 
        
        }
 
    }

 
    ;

In addition to items that have a `specialDesc` or `initSpecialDesc` defined, which get their own paragraphs in room descriptions, are the miscellaneous portable items which are listed with a single sentence like "You see a glove, a rubber ball, a pair of green Wellington boots, and an old walking stick here". Once again, if some of these items are in a remote location, this needs to be made clear to the player. The library does try to take care of this, but the default results can be rather crude. For example, suppose we define a long hall as two rooms in the same SenseRegion, and we give the two ends of the hall the room name 'Hall (east end)' and 'Hall (west end)'. From the west end of the hall we might see a listing like:

In the hall (east end), you see a rubber duck.

This could be more elegantly phrased, and with other room names the effect can be even more jarring, e.g.:

In the in front of a cottage, you see a brass key.

There are a number of ways we can fix this. The first and simplest is to give rooms with award titles like these a name property as well as a roomTitle property, for example:

 
    hallEast: Room 'Hall (east)' 'east end of the hall'
 
    ;

This would suffice to give us the much improved:

In the east end of the hall, you see a rubber duck.

For slightly greater control, we could override the  `inRoomName(pov) `method of the remote room, for example:

 
    hallEast: Room 'Hall (east)' 'east end of the hall'
    inRoomName(pov) { return 'at the far end of the hall';  }

;
Which would give us the arguably even better (at least where there are only two rooms in the SenseRegion):

At the far end of the hall, you see a rubber duck.

On the other hand, if we had a long road with north, mid, and south sections, then we might well use` inRoomName(pov)` on the middle section to vary the name according to where we were being viewed from:

 
    roadMid: Room 'Long Road (middle)' 'the middle section of the
road'
 
        "The long road continues to north and south. "
 
        north = roadNorth
     south = roadSouth
 
        inRoomName(pov)
    
 
    { 
        return 'further down the road to the <<ifpov.isIn(roadNorth)>>south

 
        
        <<else>>north<<end>>';  
    }

 
    ;

Whichever way we choose to change the way the remote location is described, the list of miscellaneous portable items in the remote location will always take the form, "*Location phrase (e.g. at the far end of the hall) *you see *list of items*." If we want to change it further (that is, if we want the list introduced with something other than "you see"), we need to override` remoteContentsLister `on the room we're looking at*. *The simplest way to use this is to make it return a new `CustomRoomLister` to which we can pass the way we want a list of objects in the remote room to be introduced as the argument to its constructor;  for example:

 
    hallWest: Room 'Hall (West End)' 'the west end of the hall'
    
 
        "This large hall continues to the east. A flight of stairs leadsdown to the
     south. "
 
        east = hallEast
        south = hallStairsDown
 
        down asExit(south)
     remoteContentsLister =
 
        
        new CustomRoomLister('Right at the far end of the hall {i}
 
        
 
    {catch}
 sight of '); 
 
        ;

Note that if we do this, whatever we define here will take precedence over whatever we did with `inRoomName(pov)` on the remote room.

Even with this device, we have to introduce the list of items in the remote location with something more or less equivalent to "you see". If we want to introduce it with something equivalent to "there is" or "there are", we have to work a little harder. The constructor to `CustomRoomLister` can call a number of optional named arguments, one of which can be the definition of the method we want to use to prefix the list with. So we could do something like this:

 
    hall: Room 'Hall'
 
        west = startRoom
     regions = [hallRegion]
 
        inRoomName(pov) { return 'at the far end of the hall';  }
 
    remoteContentsLister =
 
        
        new CustomRoomLister('', prefixMethod: method(lst, pl,irName)
        
 
    { "At the far end of the hall <<if pl>>are<<else>>

 
        
        
        
    is<<end>> ";
 }
);
;

In brief `prefixMethod:` means that we're passing the name `prefixMethod` parameter here. This needs to be passed as a floating method, which is effectively defined here with the following syntax:

 
    method(lst, pl, irName){
    
 
        "At the far end of the hall <<if pl>>are<<else>> is<<end>> ";
 }
    

The `prefixMethod` for `CustomRoomLister` must be a method that takes three arguments: *lst* -- the list of objects to be listed;
 *pl* -- whether the list is grammatically singular or plural (true means it's plural) and *irName*, the `inRoomName(pov)` of the room it's being called on. Here we simply use the pl parameter to determine whether the list of objects is grammatically singular or plural (it's plural either if there's more than one item in the list, or if the first item in the list is itself plural, e.g. 'flowers') and then to use 'are' or 'is' in the prefix text accordingly.

If this seems a bit baffling at first, don't worry about it for now, it *is* quite an advanced technique, but it is at least worth being aware of.

There are a further pair of optional named parameters that can be passed to the CustomRoomLister constructor: `suffix` and `suffixMethod`. The former of these is just a piece of text in a singe-quoted string that appears at the end of the list in place of a plain full stop (or period). The latter is a floating method to append text to the end of a list, for example:

 
    hall: Room 'Hall'
     west = startRoom
 
        regions = [hallRegion]
 
        inRoomName(pov) { return 'at the far end of the hall';  }

 
        remoteContentsLister =
        
        
    new CustomRoomLister('\^', suffixMethod: method(lst, pl,irName)

 
        
 
    { 
        
 
        " <<if pl>>are <<else>> is<<end>> <<irName>>.";
 

 
        
        }
);
;

Which might yield:

A rubber duck is at the far end of the hall.

Note in this case how we passed a prefix string of '\^' to ensure that the resultant sentence would start with a capital letter.

## 16.4. Remote Communications

There's one further type of remote sensing that can sometimes turn up in Interactive Fiction, and that's where we want the player character to talk to another actor via telephone or videophone, particularly in a game set in the modern world where the protagonist is quite likely to be carrying a mobile phone (or cell phone). This situation would be awkward to model using a SenseRegion, so we instead use the `commLink` object for this kind of remote communication.

Using `commLink` is quite straightforward. Mostly, we just call one or other of its four commonly used methods:

- `connectTo(other)` -- establish an audio-link between the player character and *other*, where *other* will normally be another Actor. If this method is called as `connectTo(other,true)`, then we establish an audio-visual link with the other actor.
- `disconnect()` - disconnect all audio and audio-visual links between the player character and other actors.

- `disconnectFrom(other)` -- disconnect the audio or audio-visual link with *other* leaving any other communications links in place. The *other* parameter may be supplied as a single actor or as a list of actors.

- `isConnectedTo(other)` -- determines whether the player character currently has a communications link to *other*;
 returns nil if not, or `AudioLink` if there's an audio link, or `VideoLink` if there's an audio-visual link.

For example, a fairly basic implementation of a PHONE command that allows the player character to call other known actors using his/her mobile phone might look like this:

 
    DefineTAction(Phone)
 
        addExtraScopeItems(role)
     {
 
        
        inherited(role);

 
        
        scopeList =scopeList.appendUnique(Q.knownScopeList.subset({x:
        
        x.ofKind(Actor)}
));
    
 
        }
;

 
    VerbRule(Phone)
 
        ('phone' | 'call') singleDobj
     : VerbProduction
 
        action = Phone
     verbPhrase = 'phone/phoning (whom)'
 
        missinqQ = 'who do you want to phone'; 
 
    modify Thing
 
        dobjFor(Phone)
     {
 
        
        verify()    
 
    {
 
        
        
        illogical('{I}
 {can\'t}
 phone {that dobj}
. ');  
        }

 
        }
;

 
    modify Actor
 
        dobjFor(Phone)
     {
 
        
        preCond = new ObjectPreCondition(mobilePhone, objHeld)
 
        
        verify()
     
 
    {
 
        
        
        if(commLink.isConnectedTo(self))
        
        
        illogicalNow('{I}
 {am}
 already talking to {the dobj}
 onthe

 
        
        
        
        
    phone. ');  
        }

 
        
        
        
     action()
 
        
 
    { 
        
        commLink.connectTo(self);

 
        
        
        sayHello();
 
        }

 
        }

 
        endConversation(reason)
     {
 
        
        /* Don't end the conversation if we're on the phone and wewalk about */
        
    if(commLink.isConnectedTo(self) && reason == endConvLeave)
 
        
        
        return;

 
        
        if(canEndConversation(reason))    
 
    {
 
        
        
        sayGoodbye(reason);
 
        
        commLink.disconnectFrom(self);

 
        
        }

 
        
        /*
        
        *
    otherwise if the player char is about to depart and theactor won't

 
        
        *
    let the conversation end, block the travel
 
        
        */
        
    else if(reason == endConvLeave)
 
        
        
        exit;
 
    }

 
    ;

Exercise 21:  Try implementing a game along the following lines. A town has to be evacuated due to imminent flooding from a nearby river. In one corner of the town square an old woman is sleeping on a bench. The player character, a policeman, has to wake her and persuade her to leave, but she proves resistant to being woken up. The square is large enough to need implementing as four rooms (one for each corner), although they are all visible from one another. An ornamental fountain, into which someone has thrown a coin, stands in the centre of the square, and the water gushing from the fountain makes a sound that should be audible throughout the square. In another corner of the square stands a barrel organ that can be played or pushed around;
 the player can try playing the organ next to the old woman but this merely makes her wake up for a moment, complain about the noise, and then go back to sleep, as does shouting or blowing a whistle.

Along the north side of the square runs a building that can be entered from the northeast corner of the square. Inside the building are two rooms, a hall and a chamber;
 the hall is entered from the square, and the chamber has a window (too small to crawl through) overlooking the northwest corner of the square. The chamber contains a radio that can be heard in the hall (when it's switched on) and in the square (when the window is open). It also contains a whistle. The radio starts out inside a packing case which is opaque to sight but transparent to sound.

From the northwest corner of the square you can go west into a park, which consists of two locations visible from each other. A river (the one that's about to flood) runs alongside the west side of the park. In the south end of the park (nearest the square) a bonfire is smouldering by the river, letting off acrid-smelling smoke. In the north end of the park (furthest from the square) are a basket of rotting fish (stinking appropriately) and a tall tree with a trumpet caught out of reach in its branches. The branch holding the trumpet can be reached via the ladder that needs to be fetched from the hall. Playing the trumpet in the immediate vicinity of the old woman wakes her up fully and wins the game.

[&laquo; Go to previous chapter](15-multilocs-and-scenes.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](17-attachables.html)