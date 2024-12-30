---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 10. Darkness and Light

## 10.1. Dark Rooms

As we've already seen, we can make a room dark by setting its `isLit` property to nil. If we wanted a lot of dark rooms in our game we could even define a `DarkRoom` class which did this, but for most games that would probably be overkill. Either way the effect is to create rooms that are dark unless the player manages to provide a light source. When the player character enters such a dark place, the player will see it described thus:

 
    In the dark`It is pitch black;
 you can't see a thing.

If this isn't quite what we want, it's easy enough to customize. We can override the `darkName` and `darkDesc` to change the way the name and the description of the dark room is shown. For example, if the player character descends a flight of stairs into what's obviously a cellar (even though it's dark), it might be better if both the room name and its description reflected that:

 
    cellar: Room 'Cellar'
    
 
        "This cellar is relatively cramped, with most of the space taken
up by
        the rusty old cabinet in one corner and the pile of junk in theother. 

 
        A flight of stairs leads back up. "
 
        darkName = 'Cellar (in the dark)'
     darkDesc = "It's too dark to make out much in here apart fromthe 

 
        
    dim outline of the stairs leading back up out of the cellar." 

 
        up = cellarStairs
     isLit = nil
 
    ;

Then, when the player character enters the darkened cellar, it would appear as:

 
    Cellar (in the dark)`It's too dark to make out much in here apart from the dim outline of
the stairs leading back up out of the cellar.

This is fine, but we've now given ourselves another problem: we've mentioned the stairs leading back up out of the cellar, but while the cellar is in darkness the player won't be able to interact with them, either to examine them or to climb them (both of which would be perfectly reasonable actions under the circumstances). The solution is to define `visibleInDark =true` on the staircase object; this makes the staircase visible in the dark without its providing light to see anything else by.

It may be that we'd want such objects described differently (specifically in response to

 
    examine`) when the room is dark from when it is light. To that end we need to know how light or dark the room is. We can't just test the `isLit` property of the Room, since that won't tell us whether the player is carrying a lamp, or whether there's a candle burning nearby, or whether there's some other source of light. The best way to test this is by using the `litWithin()` method of the Room, which will tell us if there's enough light to see by. For example, in the case of the flight of stairs leading out of the cellar, we might define:

 
    + cellarStairs: StairwayUp 'flight of stairs;  dim;  outline'
 
        desc()  {
 
        if(location.litWithin)    
 
        "The stairs look well worn, but solid enough. ";

 
        else    
 
        "It's just a dim outline in the dark;  you as much sense assee

 
        
        that there's a flight of stairs there, and that only because
        
    you've just come down them. "; 
 
        }

 
        visibleInDark = true;

An alternative to making `visibleInDarktrue `on the `cellarStairs` (or other such objects) is to use the `extraScopeItems `property to add them to scope. The standard library already puts the floor of a dark room in scope, so we don't need to do that, but we can list any other items we want added to scope in the dark:
 
    cellar: DarkRoom 'Cellar'
 
        "This cellar is relatively cramped, with most of the space taken up
by 

 
        the rusty old cabinet in one corner and the pile of junk in theother.
        A flight of stairs leads back up. "
 
        darkName = 'Cellar (in the dark)'
 
        darkDesc = "It's too dark to make out much in here apart fromthe
        dim outline of the stairs leading back up out of the cellar. " 
 
        up = cellarStairs
 
        extraScopeItems = [cellarStairs]
 
    ;

This behaves a little differently from making the `cellarStairs` `visibleInDark`. It should still allow the player character to climb the stairs, but an attempt to examine them will be met with the response "It's too dark to see anything." Neither method is necessarily better than the other, it depends what effect we want, but if we're implementing a room that's in near-total darkness, and we don't particularly want to provide a separate description for the objects we want to be in scope when it's dark, `extraScopeItems `may be the way to go.

One other action that behaves differently in the dark is moving around. The library applies the convention that a `TravelConnector` is visible in the dark if and only if its destination is lit (if I'm standing in a dark room I should be able to see the door if

there's light on the other side of it). Moreover, when the player character attempts to move from one dark location to another, this is generally disallowed. This behaviour is controlled by the `allowDarkTravel` method of the current Room, which is nil by default (meaning travel in the dark to an unlit destination is not allowed). If `allowDarkTravel` is nil, and both the current location and the potential destination are unlit, then an attempt to travel to an unlit destination will result in calling the Room's `cannotGoThatWayInDark(dir)` method, where *dir* is the attempted direction of travel (given as a direction object, e.g. `northDir`). This in turn (unless it's overridden) displays the Room's `cannotGoThatWayInDarkMsg`, which by default is "It's too dark to see where you're going. ", followed by a listing of the exits that are visible (note that `cannotGoThatWayInDarkMsg` should be defined as a singe-quoted string). We can thus override any of these methods or properties if we wish, either to allow dark-to-dark travel through a specific connector, or to allow dark-to-dark travel in a specific location, or to change the message that's displayed when dark travel is not allowed. For example, we might do this:

 
    modify Room
 
        cannotGoThatWayInDarkMsg = 'You\'d better not go blundering
around in the
        dark;
 you might be eaten by a grue! '    
 
    ;
    

Or, if we were feeling a bit meaner:

 
    class UndergroundRoom: Room
 
        cannotGoThatWayInDark(dir)
    {
 
        
 
        "Blundering around in the dark is a perilous business. You areeaten
        
    by a grue!<.p>";
    
 
        
        finishGame(ftDeath, [finishOptionUndo,finishOptionFullScore]);
    }
    

 
        isLit = nil;

If you want to allow travel from a dark room in some directions but not others, you can define `visibleInDark =true` on the associated TravelConnector, for example:
 
    boxRoom: Room 'Box Room'
 
        "There's an exit to the south and a door leads north. "
 
        darkDesc = "You can just about make out exits to north and south."
     south = landing
 
        north = boxDoor
     isLit = nil
 
    ;

 
    + boxDoor: Door 'door'
     otherSide = bathDoor
 
        visibleInDark = true;

## 10.2. Coding Excursus 16 -- Adjusting Vocabulary

We'll shortly be looking at a number of ways of providing light. Many light sources can be either lit or unlit;  when lit the player should be able to refer to them as 'lit';  when unlit the player should be able to refer to them as 'unlit'. We therefore need some mechanism for adjusting an object's vocabulary during the course of play. This excursus will explore three ways of doing it.

### 10.2.1. Adding Vocabulary the Easy Way

As we've seen, we can define the initial vocabulary of an object (the words the player can use to refer to the object) by assigning it to the object's `vocab` property.  But what happens if we need to change an object's vocabulary during the course of play? If the fox is killed we might want to add 'dead' to its vocabulary;  if a vase were dropped on the floor we might want to add 'broken' to its vocabulary;  when the tall dark stranger eventually introduces himself we might want to add 'bob' to his vocabulary;  how can we go about it?

One thing we can't do is simply change the `vocab` property directly at run-time. At least, we can change it, but doing so won't do any good, since once the game is running we're beyond the point where the library does anything with it.

The easiest way to add new vocabulary to an object is by calling its `addVocab()` method. This takes one argument, a string in the same format as that used for `vocab`. If we supply a name part to this string (any text before the first semicolon) then this will be used to change the name of the object at the same time. Otherwise the string we pass to `addVocab()` will just add some additional vocab words to the object. So, for example, calling `addVocab('; red; 
ball')` will add the word 'red' as an adjective and 'ball' as a noun to the vocabulary by which the object can be referred to, whereas calling `addVocab('red
ball')` would additionally change the name of the object to 'red ball'. So, in the three examples we started with we might call `fox.addVocab(';  dead')`, `vase.addVocab('; 
broken')` and (because we now know the stranger as 'Bob') `bob.addVocab('Bob')`.
On occasion the transformation an object undergoes may be so thorough that you need to change both its name and all or most of its vocabulary. In such a case you can use the `replaceVocab()` method, which does what it says, namely replacing the original vocab string with the one supplied as an argument, and then building the name and other vocab words all over again from scratch. Thus, for example, when the ugly duckling becomes a beautiful swan you might call `duckling.replaceVocab('beautiful swan;  elegant graceful;  bird').

For most purposes `addVocab()` or `replaceVocab()` should suffice, but if you need finer control over individual words you can use `addVocabWord(word,matchFlags)` or `removeVocabWord(word,
matchFlags?)`. These respectively add or remove *word* from the vocabulary that can be used to refer to the object on which they're called. The
*matchFlags* parameter must be one of `MatchNoun`, `MatchAdj`,  `MatchPrep` or `MatchPlural` to indicate the part of speech the word we're adding or removing is meant to match. If we're adding a word, this parameter is mandatory. If we're removing a word, it's optional;  if supplied the word will only be removed as that part of speech, otherwise it will be removed regardless.

### 10.2.2. State

Some kinds of object, such as light sources which can be either lit or unlit, may switch states quite frequently. In such cases we may want particular vocabulary (such as 'lit' and 'unlit') associated with particular states. We could write code to add and remove words from the dictionary each time such objects change state, but this is perhaps a little cumbersome, and the library provides a neater mechanism for handling such cases, the `State` class.

When an object can be in one of several states, we can define these states as `State` objects. For example, for light sources the library defines `LitUnlit `State, while for objects that can be opened and closed there's an `OpenClosed` State. The `appliesTo(obj)` method of a State determines what objects that State is applicable to;  the method should return true for any applicable *obj*. By default it does so if obj defines the `stateProp` property, where `stateProp` is a property pointer defined on the State object. For example the `OpenClosed` State defines `stateProp =&isOpen`, meaning (if `appliesTo() `hadn't been overridden) that it would have applied to every object that defines an `isOpen` property (but that would have made `OpenClosed` apply to every Thing). Nonetheless, the `OpenClosed` State still needs to know that it's associated with the `isOpen` property, just as the `LitUnlit` State needs to know it's associated with the `isLit` property, since this affects how both States behave.
This may start to become a little clearer if we show how the two State objects provided by the library are in fact defined:

 
    LitUnlit: State
     stateProp = &isLit
 
        adjectives = [[nil, ['unlit']], [true, ['lit']]]
     appliesTo(obj) { return obj.isLightable || obj.isLit;
 }

 
        additionalInfo = [[true, ' (providing light)']]; 
 
    OpenClosed: State
 
        stateProp = &isOpen
     adjectives = [[nil, ['closed']], [true, ['open']]]
 
        appliesTo(obj) { return obj.isOpenable;
 }
;

The `appliesTo()` method of the `LitUnlit` State means that this State is applicable to any object for which either `isLit` is true or `isLightable` is true, i.e. anything that is either lit or capable of being lit. The list in the `adjectives` property defines the

adjectives that can be applied to applicable objects when the `stateProp` takes the corresponding values. So, the first entry, `[nil,['unlit']]` means that when `isLit` is nil on an applicable object, that object can be referred to as 'unlit'. Likewise, the second entry, `[true,
['lit']]` means that when `isLit` is true on an applicable object, that object can be referred to as 'lit'. Here an object that can be lit can be in only two states: lit or unlit, but in principle we could use the State mechanism to cater for any number of states by extending the list, e.g.:
 
    Colour: State
 
        stateProp = &colour
    adjectives = [['red', ['red', 'scarlet']], ['blue',
['blue']], 

 
        ['green', ['green']], ['yellow',['yellow']]]; 
Here we're envisaging one or more game object that have a `colour` property which can take one of four values;  the Colour State would allow such objects to be referred to by their current colour (as well as described by it). As an example of why the second element in each sublist is itself a sublist, we show how red objects could be referred to as either 'red' or 'scarlet'.

To return to the `LitUnlit` State, you may have noticed that this also defines an `additionalInfo` property. This defines the additional information that should be displayed after the name of an object in certain listings (e.g. inventory lists or lists of objects in a room) when in a given state. The definition on `LitUnlit` means that the name of an object that's lit will be followed by ' (providing light)' e.g. 'a flashlight (providing light)'. So, if you want to change such messages, one way to do it would be to override the corresponding State object (i.e. `LitUnlit`, since this is the only one in the library that defines this property).

For further details, look up `State` in the *Library Reference Manual*.

## 10.3. Sources of Light

If we define one or more dark rooms in our game, the chances are we're expecting our players to find some way of bringing light to them. Our next task, then, is to look at the various ways the adv3Lite library provides support for this.

The most basic way of providing a light source in TADS 3 would be to change the `isLit` property` `of some Thing to true. So, for example, we might define:

 
    magicCrystal: 'magic crystal;  glowing eerie pure;  light'  
 
        "The crystal glows with a pure but eerie light. "
 
        isLit = true;

Once the player character has this magic crystal and is carrying it around with him or her, it'll provide light to see by wherever he or she goes.

A very common kind of light source both in IF games and in real life is a flashlight (or "torch" in British parlance) which can be switched on and off. Adv3Lite provides the `Flashlight` class for this kind of light source. `Flashlight` inherits from `Switch` and so can be turned on and off by the player (through commands like `switch flashlight on`). A Flashlight also has an `isOn` property to determine whether or not it is switched on, and a `makeOn(stat)` method to turn it on and off programmatically;
 this method also takes care of keeping the `isLit` property in sync with the `isOn` property, so if we want to change the on/off or lit/unlit status of a `Flashlight` in our program code we should always do so using `makeOn()` (as opposed to manipulating the `isOn` or `isLit` properties directly or by using `makeLit()`). By default a Flashlight starts switched off and unlit;
 if we want a `Flashlight` to start switched on and lit we can set the initial value of its `isOn` and `isLit` properties to true. A `Flashlight` also responds to the LIGHT and EXTINGUISH commands (meaning switch on and off respectively).

Although, as its name suggest, the `Flashlight` class can most obviously be used for portable flashlights/torches, it can of course be used for any kind of light source we want the player to be able to switch on and off, including lamps, lanterns, searchlights, and light-switches.

If we want to enforce the condition that the flashlight should only work when it has a battery in it, we have to write our own code to do it. One approach would be to make the flashlight a `Container` that can contain only the battery, and then apply the appropriate checks for the presence and removal of the battery, something along the lines of:

 
    flashlight: Container, Flashlight 'flashlight; ; torch'
 
        makeLit(stat)
    {
 
        
        if(stat && !battery.isIn(self))
        
 
        "Nothing happens;
 presumably because there's no battery.";     

 
        
        else
        
        inherited(stat);

 
        }

 
        notifyRemove(obj)
    {
 
        
        if(obj == battery && isLit)  
 
    {
 
        
        
        makeLit(nil);
 
        
 
        "Removing the battery makes the flashlight go out. ";

 
        
        }
    }

 
        notifyInsert(obj)
  
 
    { 
        if(obj != battery)
 
        
 
    { 
        
 
        "\^<<obj.theName>> won't fit in the flashlight. "; 
 
        
        
    exit;
 
        }

 
        
        else if(isOn)
 
        
 
    {
 
        
        
        /*
        
        
    * We can't use makeLit(true) here because it would have
 
        
        
        * undesirable side-effects.
        
        
    */
 
        
        
        isLit = true;
 
          
 
        "The flashlight comes on as you insert the battery. ";

 
        
        }
 
        }

 
    ;

In this case we allow `isLit` to become decoupled from `isOn`, since removing the battery (say) will stop the flashlight from being lit, but it won't move the on-off switch;  and if the switch is left in the 'on' position then presumably the flashlight should light as soon as the battery is re-inserted.

In this example, we assume a battery with an effectively infinite life. If we wanted to implement a battery with a finite life, we would have to make our code more sophisticated still, but that can be left as an exercise for the reader. In essence we'd need some kind of Daemon to reduce the battery power each turn the flashlight was on until the battery was drained (or we could use the FueledLightSource extension).

Exercise 17:  Write a short game in which the player character has to explore a small network of dark caves to find a magic glowing crystal. Implement the full variety of different kinds of light sources for exploring the caves. The player character starts only with a book of matches, each of which only stays lit for a couple of turns before burning out. There's a candle in the first cave (but only with a limited life). Another cave contains an oil lamp, but it's low on oil. Yet another cave contains an oil can you can refill it from, and another cave contains a flashlight. The final cave contains a rusty old box containing the crystal.

[&laquo; Go to previous chapter](9-beginnings-and-endings.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](11-nested-rooms.html)