---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 17. Attachables

## 17.1. What Attachable Means

In adv3Lite an Attachable is something that can be temporarily attached to something else and later detached from it again. Attachables are potentially one of the trickiest kinds of thing to deal with in IF, not least because after one thing is attached to another, there are so many ways in which the resulting attachment might behave. For example, suppose the player character attaches a rope to a particular object in the current location, and then tries to go to another location while still holding the rope. A number of different outcomes could result, including:

- The object tied to the rope is dragged along behind the player character, so that it ends up in the new location along with the rope.

- The rope is long enough to allow the player character to walk into the new location without dragging the object at the other end of the rope, so that the player character ends up in the new location, with one end of the rope in the player character's hand and the other attached to the rope in the old location.

- The rope is quite short but the object is too heavy to be dragged, so the player character is jerked to a halt as s/he tries to leave the location.

- The rope is quite short but the object is too heavy to be dragged, so that the rope is snatched from the player character's grasp as s/he leaves the location.

- The rope is quite short but the object is too heavy to be dragged, so that the rope breaks as the player character leaves grasping one end of it and enters the new location.

Doubtless one could think of other possibilities, just as one could think of other types of situation in which one object is attached to another. The upshot is that the adv3Lite library can scarcely define a straightforward Attachable class that works absolutely fine straight out of the box;
 instead it provides a number of classes to deal with the simpler cases. In adv3Lite the attachable relationship is always asymmetric and usually many-to-one. This means that in a command like `attach x to y`, x is regarded as something that is moved to the vicinity of y in order to be attached to it, and many different things can be attached to y, without the reverse being true. For example, I could attach many small metal objects to a magnet, and I could then attach the magnet to the fridge, but I could not attach the magnet to many objects at once (though there may be many objects attached to the magnet).

Hopefully this will all become clearer when we look at each of the Attachable classes in turn.

## 17.2. SimpleAttachable

 
    SimpleAttachable` is the principal Attachable class defined in the adv3Lite library, in that all the other types of Attachable descend from it or depend on it in some way. The `SimpleAttachable `class is meant to make handling one common case easy, in particular the case where a smaller object is attached to a larger object and then moves round with it.

More formally, a `SimpleAttachable` enforces the following rules:

1. In any attachment relationship between SimpleAttachables, one object must be

the major attachment, and all the others will be that object's minor attachments (if there's a fridge with a red magnet and a blue magnet attached, the fridge is the major attachment and the magnets are its minor attachments).

2. A major attachment can have many minor attachments attached to it at once,

but a minor attachment can only be attached to one major attachment at a time (this is a consequence of (3) below).

3. When a minor attachment is attached to a major attachment, the minor

attachment is moved into the major attachment. This automatically enforces (4) below.

4. When a major attachment is moved (e.g. by being taken or pushed around), its

minor attachments automatically move with it.

5. When a minor attachment is taken, it is automatically detached from its major

attachment (if I take a magnet, I leave the fridge behind).

6. When a minor attachment is detached from a major attachment it is moved into

the major attachment's location.

7. The same `SimpleAttachable` can be simultaneously a minor item for one

object and a major item for one or more other objects (we could attach a metal paper clip to the magnet while the magnet is attached to the fridge;
 if we take the magnet the paper clip comes with it while the fridge is left behind).

8. If a `SimpleAttachable` is attached to a major attachment while it's already

attached to another major attachment, it will first be detached from its existing major attachment before being attached to the new one (ATTACH MAGNET TO OVEN will trigger an implicit DETACH MAGNET FROM FRIDGE if the magnet was attached to the fridge).

9. Normally, both the major and the minor attachments should be of class

 
    SimpleAttachable`.

Setting up a `SimpleAttachable` is then straightforward, since all the complications are handled on the class. In the simplest case all the game author needs to do is to define the `allowableAttachments `property on the major `SimpleAttachable` to hold a list of

items that can be attached to it, e.g.:

 
        
    allowableAttachments = [redMagnet, blueMagnet]
If a more complex way of deciding what can be attached to a major `SimpleAttachable` is required, override its `allowAttach(obj)` method instead, so that it returns true for any *obj* that can be attached, e.g.:

 
        
    allowAttach(obj) { return obj.ofKind(Magnet);
 }
    
The other properties and methods of SimpleAttachable you may want to use from time to time include:

- `attachments` -- a list of the objects that are currently attached to me

- `attachedTo` -- the object I'm currently attached to

- `isAttachedToMe(obj)` -- returns true if *obj* is attached to me and nil otherwise

- `isAttachedTo(obj)` -- returns true either if *obj* is attached to me or I'm attached to *obj*.

- `isFirmAttachment` -- if true (the default) then I must be detached from anything I'm attached to before I can be moved

- `allowOtherToMoveWhileAttached` -- if and only if true (the default) then the object I'm attached to can be moved while I'm still attached to it.

Remember the distinction to the objects I'm attached to and the objects attached to me. If I'm a magnet then I may be attached to a fridge while having any number of paper-clips attached to me.

One other thing the SimpleAttachable class does is to treat `fasten` and `unfasten` as equivalent to `attach` and `detach`, since in this case it's hard to see what the distinction between attaching and fastening could be.

## 17.3. NearbyAttachable

A common requirement with Attachables is that if we attach one object to another, the two objects should be in the same place (that is, within the same container). The `NearbyAttachable` class is a special kind of `SimpleAttachable` that enforces this condition. More specifically it enforces:

- When one `NearbyAttachable `is attached to another, the item that's being attached is moved to the location of the object it's being attached to.

- When one `NearbyAttachable` is detached from another it ends up still in the same location (the location of the object it's just been detached from).

- If the object a `NearbyAttachable` is attached to is moved, that object is moved to the location of the object to which it's attached.

If `NearbyAttachable` does more or less what we want, but not quite, there are ways in which can customize how it behaves. In particular, we can override the `attachedLocation` and `detachedLocation` properties that define where the `NearbyAttachable` should end up when its attached to or detached from another object. For example, suppose we want a LegoBrick class so that if the player character is detached one brick from another, the detached brick ends up being held by the player character:

 
    class LegoBrick: NearbyAttachable
 
        canAttachTo(obj) { return obj.ofKind(LegoBrick);
 }
 
    detachedLocation = gActor
 
    ;

A more common use of `NearbyAttachable` might be to join two lengths of cable together, for example. When a first length of cable is attached to a second, it ends up in the same location as the second. If we detach the first length of cable again, it's no longer attached (obviously), but it doesn't move to a new location. For this kind of situation NearbyAttachable should work straight out of the box without any further customization.

## 17.4. AttachableComponent

An `Attachablecomponent` is a `SimpleAttachable` that represents a part of the object to which it's attached, for example the handle of a knife. We could often use a simple `Component `to do this job, but the potential advantage of using an `AttachableComponent` is that if it is detachable by some means (unscrewing, perhaps) it automatically becomes portable, and that if we like we can make it readily re-attachable. For example, suppose we want a mobile phone which has a button which can be unscrewed and reattached;  an outline implementation might look like this:

 
    + mobilePhone: SimpleAttachable 'mobile phone;  cell;  cellphone'
 
        allowableAttachments = [button]
     ;

 
    ++ button: AttachableComponent, Button 'button'
 
        isUnscrewable = (attachedTo == mobilePhone)
 
        dobjFor(Unscrew)
     {
 
        
        action()    
 
    {
 
        
        
 
        "{I}
 unscrew{s/ed}
 the button from the mobile phone. ";
 
        
        detachFrom(location);

 
        
        
        actionMoveInto(gActor);
 
        }

 
        }
;

Note that this is a rare instance where the order of classes in the declaration of an object is important. In this case `AttachableComponent` *must* come before `Button` in the declaration of the button object to ensure that we get AttachableComponent's version of the `isFixed` property (which switches between nil and true according to whether or not the button is detached). Note also that we need to specify button in the `allowableAttachments` list of the `mobilePhone` object to ensure that we can reattach it.

## 17.5. Attachable

The `SimpleAttachable` class in adv3Lite is designed to be easy to use in a number of common cases, but there are a few cases it's not so well equipped to handle, in particular where we want to be able to attach the same object to more than one other thing (as opposed to having several things attached to it). Examples might include a length of cable used to make an electrical connection between two separate objects, or a rope used to tie two mountaineers together. Although it may sometimes be possible to shoehorn such cases into the many-to-one relationship allowed by a `SimpleAttachable`, sometimes it may not, and other times it may be awkward to do so since it could lead to a counter-intuitive order of attachment (`attach outlet to cable` instead of the more intuitive `attach cable to outlet` for instance). To allow for such cases adv3Lite provides an `Attachable` class, which can be used in many-to-many attachment relationships. `Attachable` inherits directly from `NearbyAttachable`, and works in a similar way, but instead of making use of an `attachedTo` property that points to the single thing it's attached to, it uses an `attachedToList` property that contains list of the things it's attached to (which remains distinct from the `attachments` property that contain a list of the items attached to it -- remember that attachment is always considered asymmetric in adv3Lite). The Attachable class also defines the following additional properties:

- `maxAttachedTo`: the maximum number of items to which this object can be attached at once. The default value is 2, on the basis that this is likely to be the most common case. If you don't want there to be any limit at all, you can set this property to nil. Note that the `maxAttachedTo` property does not impose any limit on the number of items that can be attached to the objects it's defined on (the number of items in the `attachments` property);  it merely limits the maximum length of the `attachedToList` property.

- `reverseConnect(obj)`: If this method returns true for *obj* then this reverses the order of connection between self and *obj* when *obj* is the direct object of the command;
 i.e. `connect obj to self`, will be treated as `connect self to obj`. Since the adv3Lite attachment relationship is asymmetric, this method can be used to help enforce the attachment hierarchy intended by the game author.

- `multiPluggable`: if this property is true (the default) then this allows an `Attachable` that's also a `PlugAttachable` to be plugged into more than one thing at a time (e.g. to implement a cable that's needed to make an electrical connection between two different items).

## 17.6. PlugAttachable

 
    PlugAttachable` is a mix-in class we can use with `SimpleAttachable,` `NearbyAttachable` or `Attachable` to make the command `plug into` and `unplug` or `unplug from` behave like `attach to` and `detach` or `detach from`. For example, to make a plug that can be plugged into an electrical socket, we could just do this:

 
    + socket: PlugAttachable, NearbyAttachable, Fixture 'socket'
 
        allowableAttachments = [plug];

 
    + plug: PlugAttachable, NearbyAttachable 'plug'
 
        
        ;

Often this is all that is needed. Note, however, that since `PlugAttachable`  is a mix-in class it must come first in the class list.

There are a few things we can tweak if we need to. The `socketCapacity` property on the socket object (more generally, the object plugged into) controls how many objects can be plugged into it at once;
 the default is 1. The `needsExplicitSocket` property (by default true) specifies whether a `plug in` command needs to specify a socket. If this is nil, the player can issue a command like `plug in the tv `without needing to specify what to plug the tv into (and without the game even needing to define a corresponding socket object).

Exercise 22:  The player character is the only survivor aboard a small scouting space-ship that has just been attacked, holing its hull so that all the air is evacuated, killing everyone else aboard. The player character has survived since he was suited up making repairs to the antenna on the outside of the ship when the attack occurred. The attacking vessel has departed, but now the player character must effect repairs to take his own ship to safety.

The player character starts the game in the airlock. He is wearing a space suit to which is attached an air cylinder (nearly exhausted) and a helmet;
 a lamp is currently plugged into the helmet but can be unplugged from it and plugged in elsewhere for recharging. Just as the game begins, the lights aboard ship go out, indicating a power failure. The outer and inner airlock doors are operated by levers, with dials indicating the air pressure outside the hull, inside the airlock, and inside the ship.

Just inboard of the airlock is a storage chamber with a rack containing a spare air cylinder (full enough to last the whole game and more), a charging socket, an

equipment locker, a freezer, and a winch (fixed in place). Inside the equipment locker are two connectors (for joining lengths of cable), a short length of cable, and a roll of hull repair fabric. To operate the winch while the main power supply is out, it is necessary to attach one end of the cable to the winch and the other to the charging socket. The charging socket can also be used to recharge the lamp, when the lamp is plugged into it. A hawser runs from the winch;
 one end of the hawser can be carried by the player character into other locations (in which case there'll be a length of hawser running all the way back to the winch);  if the free end of the hawser is attached to something (such as a pile of debris) and the winch then operated (by pressing a button on it while the winch has power), the hawser will be rewound, dragging whatever's attached to the other end with it.

Aft of the storage hold is the Engine Room. Here there's a power switch that can be turned on to restore power to the whole ship, but only once the main fault has been repaired, and an airflow control lever than can be pulled to repressurize the ship, but only once the hole in the hull has been repaired.

Forward of the Storage Hold is the Living Quarters, which took the brunt of the blast from the attacking vessel, and now has a large hole in part of the hull. This can be repaired by attaching a square of fabric from the locker to the hull. To one side of the Living Quarters is the door into a cabin, but this won't open until pressure has been restored to the ship. Along the floor of the Living Quarters is an electrical conduit which contains the main power cable for the ship (now exposed by the same blast that tore through the hull). A length of the cable has been burned away, and must be repaired by attaching the short length of cable from the locker to the two ends of the severed cable by means of the electrical connectors (also from the locker). Unfortunately, the mass of debris left over from the blast blocks access to the conduit to repair the cable, and can only be removed by using the winch and hawser.

Once the hull has been patched the ship can be repressurized (using the lever in the Engine Room), and once the ship has been repressurized the cabin door can be opened, allowing access to the cabin. Inside the cabin is a bed and a cabinet, the latter containing a security card.

Forward of the Living Quarters is the Bridge, containing (amongst anything else you think should be on the Bridge of a scouting space-ship) a card reader and green button. If the green button is pressed once main power has been restored and the security card is attached to the card reader, the controls come back to life, and the game is won.

[&laquo; Go to previous chapter](16-senses-and-sensory-connections.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](18-menus-hints-and-scoring.html)