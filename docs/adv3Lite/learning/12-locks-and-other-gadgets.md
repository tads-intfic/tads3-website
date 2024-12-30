---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 12. Locks and Other Gadgets

## 12.1. Locks and Keys

We've come across several things than can be open and closed: doors, some containers, and some booths. When we're writing IF we often want to make such things lockable too. On analogy with things we've covered previously, you may suppose that we can do this by simply defining `isLockable =true` on an object. But it's actually a bit more complicated than that, since we need to determine not only whether something is lockable, but if so how. So there is, in fact no `isLockable` property in adv3Lite. Instead, there's a `lockability` property which can take one of four values:
- `notLockable` -- this object can't be locked and unlocked at all (this is the default)

- `lockableWithoutKey` -- this object can be locked and unlocked using the `lock `and` unlock `commands without the need of any key or any other mechanism (this might represent a door with a simple paddle lock, for example).

- `lockableWithKey` -- this object can be locked and unlocked with a suitable key.

- `indirectLockable` -- this object can be locked and unlocked, but only by means of some external mechanism (such a pulling a lever or pushing a button or entering a code on a keypad).

The first two cases are completely straightforward and don't really require any further comment, beyond the fact that in all four cases whether something is currently locked is determined by the value of its `isLocked` property, and that to lock or unlock something programmatically you should call its `makeLocked(stat)` method (with *stat* = true to lock and nil to unlock). If this is called on one side of a door the Door class will ensure that the other side is kept in sync.

The third case is more complex, however, since we need to determine which keys fit which locks. This is determined, not by the lockable objects, but by the keys that can lock and unlock them. A key must be of the `Key` class, and can define one or more of the following properties in relation to what it can lock and unlock:

- `actualLockList` -- a list of the objects this key can in fact lock and unlock;
 this must be defined if the key is to be of any actual use. Note that if a key works on both sides of a door, both sides of the door must be included in this list.

- `plausibleLockList` -- a list of the other objects this key looks like it might be able to lock and unlock (because the lock is of the same size and type). You don't have to define this but it can make the parser behave more intelligently if

you do, for example by not attempting to unlock a Yale lock with a card key.

- `knownLockList` -  a list of the objects the player character knows that this key can lock and unlock. This is maintained automatically by the library in that once a key has successfully been used to lock or unlock something, the object just locked or unlocked is added to this list;
 but game code may occasionally also want to define this for keys the player character would start out knowing about, such as his/her own front door key.

- `notAPlausibleKeyMsg` -- a single-quoted string giving the message to display if the player attempts to use this key on a lock it obviously won't fit (i.e. an object that's in neither the `actualLockList` nor the `plausibleLockList`).

- `keyDoesntFitMsg` -- a single-quoted string giving the message to display if the player attempts to use this key on a lock it in fact doesn't fit.

So, for example, to define a key that in fact locks and unlocks the front door of a house but looks as it might also work on the back door we might write:

 
    brassKey: Key 'chunk brass key'
 
        actualLockList = [frontDoorInside, frontDoorOutside]
    plausibleLockList = [backDoorInside, backDoorOutside[]
 
    ;

Since containers with locks are relatively common the library defines the `LockableContainer` class to mean an openable container with `lockability` = `lockableWithoutKey`, and the `KeyedContainer` class to mean an openable container with `lockability` = `lockableWithKey`.

This leaves only the fourth case, objects with a `lockability` of `indirectLockable`. These are objects (such as containers and doors) that can be locked and unlocked, but which need some kind of external mechanism to lock or unlock them. We can't generalize about this case, except to say that any external mechanism would need to call `makeLocked(nil)` on such an object to unlock it, and `makeLocked(true)` to lock it. In the next section we'll look at some of the gadgets and devices that could be used to lock and unlock indirectly lockable items, as well as for a number of other purposes. In the meantime the one other thing to note about indirectly lockable objects is that any attempt to lock or unlock them via a `lock `or` unlock `command will result in nothing happening beyond a display of their `indirectLockableMsg`, which is defined as a single-quoted string.

## 12.2. Control Gadgets

As we've just seen, if we define something (typically a door or container) with a `lockability` of `indirectLockable` we need to provide some kind of external mechanism to lock or unlock it. For this purpose we might use one of the control gadget classes provided by the library, which include `Button`, `Lever`, `Switch`, `Settable` and `Dial`. Of course we can also use these classes to control any other kind of contraption we like.

### 12.2.1. Buttons, Levers and Switches

The simplest of these classes is probably `Button`. By default a Button simply goes *click* when it's pushed;  to make it do anything more interesting we need to override its `makePushed()` method, for example:

 
    study: Room 'Study'
 
        "There seems to be some sort of door in the oak-panelling on thenorth 

 
        
    wall. Next to this is large brown button. "
     north = panelDoor
 
    ;

 
    + panelDoor: Door 'door'
    indirectLockableMsg = 'Maybe that's what's the brown button is
for. '    

 
    ;

 
    + Button 'brown button;  large'
        makePushed()
    
 
    {    
 
        "A loud <i>click</i> comes from the door in the panelling.";
    

 
        
        panelDoor.makeLocked(!panelDoor.isLocked);
 
     }

 
        }
;

A Button is assumed to be fixed in place by default, so there's no need to make it a Fixture too.

A `Lever` is slightly more complicated in that it has two states, pulled or pushed (determined by the value of its `isPulled` and `isPushed` properties;
 by default `isPushed` is simply the opposite of whatever `isPulled` is, but we define both properties in case we want to override this to make a lever that can be in more than two states. When `isPulled` is true the player has to `push` the lever to move it;
 when `isPushed` is true the player must `pull` the lever to move it. The player can also simply `move` the lever to toggle between one state and the other. Any of these actions uses the `makePulled(pulled) `method to switch states, and this is probably the most convenient method to override to make the lever actually do anything. For example, suppose instead of an indirectly lockable door in the wood panelling, we have a hidden door that only becomes apparent when it is operated by a concealed lever. We could do this with:

 
    study: Room 'Study'
    
 
        "Oak panelling covers the walls. A matching oak desk stands inthe middle
        of the room. "
 
        north = panelDoor;

 
    + panelDoor: Door 'secret door; ;  panel'
 
        isHidden = isOpen;

 
    + desk: Heavy 'oak desk;  wooden'
    remapOn: SubComponent { }

 
        remapUnder: SubComponent
    {
 
        
     dobjFor(LookUnder) 
 
    {
 
        
        action()
     
 
    {
 
        
        
        if(hiddenLever.isHidden)
        
 
    {
 
        
          
 
        "You find a small concealed lever fixed to theunderside of the
        
        
        desk. ";
    
 
        
        
        
    hiddenLever.discover();
 
        
        }

 
        
        }
 
        }

 
        }
;

 
    ++ hiddenLever: Lever 'small lever;  hidden concealed'
    subLocation = &subUnderside
 
        
        isHidden = true
 
        makePulled(pulled)
  
 
    { 
        inherited(pulled);

 
        
     panelDoor.makeOpen(pulled);
 
        if(pulled)
 
        
 
        "A secret door slides open in the north wall. ";
 
        else
 
        
 
        "The secret door in the panelling slides shut. ";
    }

 
    ;

A slightly different kind of control is the `Switch`,  which, as its name suggests, is a control the player can `turn on `or `turn off `(or `switch` on and off). A Switch has an `isOn` property that determines whether it's on or off. Changing a Switch between its on and off states is handled in its `makeOn(val)` method, which is probably the most convenient method to override to make the `Switch` do something interesting (in fact, both these properties/methods are defined on Thing).

For example, suppose we wanted to implement a light switch that controls a light bulb in some other part of the room. We could define:

 
    + Switch, Fixture 'light switch'
 
        makeOn(val)
     {
 
        
        inherited(val);
 
        lightBulb.makeLit(val);

 
        
 
        "The light bulb <<val ? 'comes on' : 'goes out'>>.";  
    }
 
 
    ;

The player can additionally use the command `flip `and `switch` to toggle a Switch between its on and off states (i.e. isOn being true or nil). A `Flashlight`, which we have already met, is a `Switch` suitably defined so that its `isOn` and `isLit` properties remain in sync.

### 12.2.2. Controls With Multiple Settings

The various types of control gadgets we have met so far have at most two states, but there are various kinds of control (e.g. the slider on a thermostat or a dial on a radio) that can have multiple settings. The ancestor class for all such multiple-setting classes in adv3Lite is the `Settable` class, which is a possible class to use for slider-like controls.

The principal properties and methods of the `Settable` class are:

- `curSetting -- `the item's current setting, which can be any (single-quoted) string value. This is updated as the item is set to a different setting.

- `canonicalizeSetting(val)` -- by default this just returns *val* converted to lower case, to make it easier to test whether or not it's a valid setting for this item.

- `validSettings` -- a list of the settings that are valid for this Settable item, expressed as a list of singe-quoted strings, normally in lower case.

- `isValidSetting(val)` -- by default this returns true if and only if *val* converted to canonical form by `canonicalizeSetting() `is among the values listed in the `validSettings` property, but we can override this to follow some other rule if we wish (as `NumberedDial` does;
 see below).

- `makeSetting(val)` -- this is the method that changes the setting, by changing `curSetting` to *val*. Note that when this is called *val* has already been converted to canonical form by `canonicalizeSetting()`. This is probably the most convenient method to override if you want changing the setting of this item to have any interesting effect, but if you do override it, remember to call `inherited(val) `in your overridden version.

Two further properties of possible interest are `okaySetMsg` and `invalidSettingMsg

which can be overridden to single-quoted strings to be used either to acknowledge the change of setting or to complain that the proposed new setting is invalid.

In most cases the settings we can set a `Settable` to will either be a range of numbers or a finite set of strings. For a labeled slider we can simply define:

 
    + Settable 'slider'
    
 
        "The slider can be set <<orList(validSettings)>>. It's
currently set to
    <<curSetting>>. "

 
        validSettings = ['red', 'yellow', 'blue' ]
 
        makeSetting(val)
    {
 
        
     inherited(val);
 
        if(val == 'red')
 
        
 
        "A klaxon starts to sound. ";
    }

 
    ;

If we're implementing a Settable that isn't a dial (it's a slider, say), but we want to be able to set it to one of a range of numbers, the simplest thing to do is to "borrow" the  `isValidSetting() `method from the `NumberedDial` class (which we'll meet shortly below). Or we might simply *use* this class for our slider or whatever without worrying that the player can also use commands like `turn slider to 10 `or `turn slider to amber` to set the slider. To "borrow" the method we could define a numbered slider like this:

 
    + Settable 'slider'
    
 
        "It can be set to any number between <<minSetting>> and<<maxSetting>>.
        It's currently set to <<curSetting>>. "
 
        minSetting = 0
     maxSetting = 70
 
        curSetting = '60'
 
        isValidSetting(val) { return delegated NumberedDial(val);
 }
 
    makeSetting(val)
    
 
    { 
        inherited(val);

 
        
        val = toInteger(val);
 
        if(val < 40)
 
          
 
        "Gosh it's becoming cold in here! ";  
        if(val > 70)
 
          
 
        "It's starting to become rather too warm! ";  
    }

 
    ;

Note that by default a `Settable` can be set only with commands like `set slider to whatever`. If our Settable is a slider, the player might reasonably try to `move slider to 10` or `push slider to green`. The easiest way to cater for that is simply to modify the grammar of the SetTo command:

 
    modify VerbRule(SetTo)
 
        ('set' | 'slide' | 'move' | 'push' | 'pull')
singleDobj 'to' literalDobj
     :
 
    ;

A specializiation of `Settable` is the `Dial` class, which simply allows `turn dial to x` as well as `set dial to x`. Otherwise it behaves in exactly the same way.

A `NumberedDial` is a dial that can be set to any one of a range of integer settings. The range of settings is specified by the `minSetting` and `maxSetting` properties. The one tricky thing to look out for is that the `minSetting` and `maxSetting` properties must be specified as *numbers* while the `curSetting` property is a (single-quoted) *string*.

A typical use for a NumberedDial might be as a combination lock. For example:

 
    ++ NumberedDial 'black dial'
 
        "The dial can be turned to any number from 0 to 99;
 it's currentlyat 

 
        
    <<curSetting>>. "
    minSetting = 0
 
        maxSetting = 99
    combination = [21, 34, 45]
 
        storedSettings = []
    makeSetting(val)
  
 
    { 
        inherited(val);

 
        
     storedSettings += toInteger(val);
 
        if(storedSettings.length > 3)
 
        
        storedSettings = storedSettings.sublist(storedSettings.length-- 2);
    

 
        
     if(storedSettings == combination) 
 
    {
 
        
        location.makeLocked(nil);
 
     
 
        "As you turn the dial to <<val>>, a quiet click comesfrom 

 
        
        
     <<location.theName>>. ";
 
        }

 
        
     else
        
     location.makeLocked(true);

 
        }
;

This assumes, of course, that this `NumberedDial` is attached to something (like a safe or strongbox) that can be locked or unlocked.

Exercise 19:  Try implementing the following game. The player character is outside the home of a blackmailer. Knowing him to be out, the player wants to burgle his house to recover an incriminating letter. The player character carries a small black case holding a skeleton key and a key-ring, and also has a small flashlight (if you want to be really sophisticated you can try to see whether the player refers to it as a 'flashlight' or a 'torch' and then use American or British English from then on accordingly). The front door can be unlocked either with the skeleton key or with the key hidden under a nearby flowerpot. Once inside the hall the player character must disable the burglar alarm before going any further into the house. The alarm is controlled by a numeric keypad inside a box by the front door. The correct combination is the date (year) that was written over the outside of the front door. To

unlock the box containing the keypad requires either the skeleton key or a small silver key that falls to the ground when the player character pulls a peg on the nearby hat-stand. Once the alarm has been turned off, the player character can go into the study. On one wall of the study is a panel than needs to be opened to gain access to the safe. In the study is a desk on which is a small wooden box. On the side of the box is a slider, which can be set to the names of four different composers;
 the box is unlocked when the slider is used to spell out the word OPEN from the initial letters of these composers. Inside the box is a key that can be unused to unlock the drawer of the desk. This contains a notebook in which is written the cryptic message "Advertising is safe" together with the combination of the safe. There's a TV in the study which can be turned on and off with a switch, and changed to different channels with a dial. Turning it on and switching it to the advertising channel will open the panel in the wall. The player character can then go through the open panel into a small cubby-hole containing the safe. From inside the cubby-hole the panel can be opened and closed by means of a lever. The safe has dial which must be turned to each of the numbers in the combination for the safe to be unlocked. Once the safe is unlocked it can be opened and the letter retrieved. The game is won when the player character walks away from the house carrying the letter.

[&laquo; Go to previous chapter](11-nested-rooms.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](13-more-about-actions.html)