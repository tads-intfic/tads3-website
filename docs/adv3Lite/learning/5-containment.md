---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 5. Containment

## 5.1. Containers and the Containment Hierarchy

### 5.1.1. The Containment Hierarchy

As we've already seen, we can locate objects (and the player) in rooms by setting their location property, initially in one of three (functionally equivalent ways):

 
    redBall: Thing 'red ball'
    location = hall
 
    ;

 
    redBall: Thing 'red ball' @hall; 
 
    hall: Room 'Hall'
 
    ;

 
    + redBall: Thing 'red ball'; 

Things can also be picked up and moved to other rooms, or moved by authorial fiat using the `moveInto(newLoc)` method. But there's more to containment than this;  both in the real world and in Interactive Fiction objects can be in, on, under or behind other objects, not just in rooms. For now we'll concentrate on objects being inside other objects;  we'll expand this to on, under and behind in the next section.

Concretely, objects can be inside certain kinds of other object such as boxes, packing cases, cabinets, drawers, sacks, bags, suitcases and any other kind of object capable of containing other objects. In adv3Lite, to allow an object to have other things put in, on, under or behind it we can change its `contType` property to `In`, `On`, `Under` or `Behind`. More normally, though, we'll use a subclass of Thing that does that for us.

 In adv3Lite an object that can contain other objects will usually be of class `Container`. `Containers` can be nested, that is one `Container` can contain another `Container` which can itself contain other things (including other `Containers`).

Slightly more abstractly, every physical object (i.e. a `Thing` or something derived from `Thing`) in an adv3Lite game has a location property (at least as a first approximation;
 
    MultiLocs` can be in several places at once, but we'll meet them in a later chapter) which defines where it is. This location property will hold either another object or `nil`. If it's nil then either the object is a top-level room, or the object is off the map (we can, for example, use `moveInto(nil)` to move an object out of play). If it's another object then that second object will be a room, an actor (if the actor is carrying or wearing the object) or a `Container` (or one of the other classes we'll meet in the next section).

### 5.1.2. Moving Objects Around the Hierarchy

During game-play, one object can be placed inside another using the PUT IN command, e.g.` put red ball in blue box`. We can also move objects in and out containers in the same way as we move then in and out of rooms, e.g. `redBall.moveInto(blueBox)`. We can use the same technique to move objects in and out of the player's (or another actor's) inventory. For example, `redBall.moveInto(me)`;  would cause the player character to end up holding the red ball (assuming the player character has been defined as `me`).

In some cases you might want to move objects around using the more elaborate `actionMoveInto(dest) `method. This would normally be the case where you're moving an object in direct response to a player's command and you need to carry out more checks on the possibility of the move. If, however, you want to move an object around by sheer authorial fiat, `moveInto(dest)` is good enough.

### 5.1.3. Defining the Initial Location of Objects

We can use one of three methods to define the initial location of objects that are inside `Containers`. Suppose that a small red pen is in a small yellow box which is inside a large blue box which is in the hall. We can first of all set this up by explicitly defining the location property of each of the objects:

 
    hall: Room 'Hall'
 
    ;

 
    blueBox: Container 'large blue box'
    location = hall
 
    ;

 
    yellowBox: Container 'small yellow box'
    location = blue box
 
    ;

 
    redPen: Thing 'small red pen'
    location = yellowBox
 
    ;

Or we can do the same thing more compactly using the @ notation in the template:

 
    hall: Room 'Hall'; 
 
    blueBox: Container 'large blue box' @hall; 
 
    yellowBox: Container 'small yellow box' @blueBox; 
 
    redPen: Thing 'small red pen' @yellowBox; 
Or we can do it, slightly more compactly still, using an extension of the + notation:

 
    hall: Room 'Hall'; 
 
    + blueBox: Container 'large blue box'; 
 
    ++ yellowBox: Container 'small yellow box'; 
 
    +++ redPen: Thing 'small red pen'; 
This last notation is particularly convenient, and also gives quite a good visual representation of what's inside what;  it is therefore the containment notation that will be most commonly used in this manual. Another minor advantage of this notation is that if you decide to change the name of an object, you don't need to change the reference to it on all the objects it contains.

Since we'll be seeing a lot of this notation from now on, it's worth explaining it a bit more fully. In general, an object preceded by *n* plus signs is contained within the nearest object above it in the same source file preceded by *n-1* plus signs. The example above is fairly straightforward, since each object has more one plus sign than the object before it, so that each object contains the next. A slightly more complicated example might be this:

 
    hall: Room 'Hall'; 
 
    + blueBox: Container 'large blue box'; 
 
    ++ yellowBox: Container 'small yellow box'; 
 
    +++ redPen: Thing 'small red pen'; 
 
    ++ greenBox: Container 'green box'; 
 
    +++ blackPencil: Thing 'black pencil'; 
 
    +++ whiteFeather: Thing 'white feather'; 
 
    ++ orangeBall: Thing 'orange ball'; 
 
    + oldHat: Wearable 'old hat'; 
In this example, the blue box and the old hat are both directly in the hall. The yellow box, the green box and the orange ball are all directly in the blue box. The red pen is directly in the yellow box, and the black pencil and white feather are directly in the green box.

While the + notation is very useful for setting up the containment hierarchy, it needs to be used with some care. For example, if we move an object from one place to another in our source code (using cut and paste), we need to make very sure that any + signs still mean what we intend them to mean. Also, it can become tricky to ensure that a containment hierarchy defined with + signs is actually the one we want once it includes long and complex objects, or once we start adding other objects in between the existing ones in our source. While it's generally safe to use the + notation for doors, passages, decorations and simple fixtures in a location, some authors may

prefer to define long and complex objects elsewhere in their source code using the @ notation. When it comes to defining all but the very simplest NPCs (non-player characters) this becomes almost essential.

### 5.1.4. Testing for Containment

We often want to test for containment, and there are six methods (defined on `Thing`, and hence available for all `Things` and anything derived from `Thing`) that help us to do this:

- `isIn(obj)` -- determines whether the object this is called on is in *obj*, either directly or indirectly (so in the above example `isIn(hall)` would be true for every object except the hall and `isIn(blueBox) `would be true for the yellow box, the red pen, the green box, the black pencil, the white feather and orange ball.

- `isDirectlyIn(obj) `-- determines whether the object this is called on is *directly* in *obj*. In the above example `isDirectlyIn(hall)` would be true for the blue box and the old hat, while `isDirectlyIn(blueBox)` would be true for the yellow box and the red pen.

- `isOrIsIn(obj)` -- determines whether the object is either *obj* itself or is directly or indirectly in *obj*. In the above example, `isOrIsIn(hall)` would be true for everything;
 
    isOrIsIn(yellowBox) `would be true for the yellow box and the red pen.

- `isHeldBy(actor)` -- determines whether the object is being directly or indirectly held by *actor*.

- `isDirectlyHeldBy(actor)` -- determines whether the object is being directly held by *actor *(i.e. it's notionally in his/her hands rather than inside something else s/he may be carrying). For most things this is the same as testing whether the object `isDirectlyIn(actor)`;  the difference is that something currently worn by the actor is treated as not held by the actor. So, for example, if the actor is wearing the old hat, `oldHat.isDirectlyHeldBy(actor)` is `nil` (though `oldHat.isDirectlyWornBy(actor)` would then be true), but if the actor takes the hat off and continues to carry it `oldHat.isDirectlyHeldBy(actor)` becomes true. If the actor were to pick up the red pen directly (taking it out of the box) then `redPen.isDirectlyHeldBy(actor)` would be `true`, but if the actor took either the blue box or the yellow box, leaving the red pen in the yellow box, then `redPen.isDirectlyHeldBy(actor)` would be `nil,` while `redPen.isHeldBy(actor) `would remain true.

- `isDirectlyWornBy(actor)` -- determines whether the object is being directly worn by the actor. Note that an object that's being worn is not considered as being carried, and *vice versa*.

We'd typically use these methods in conditional statements, such as:

 
    if(!orangeBall.isDirectlyHeldBy(me))

 
        "You need to be holding the orange ball before you can throw itanywhere. ";

 
    if(whiteFeather.isIn(hall))

 
        "The white feather must be around here somewhere. ";

Just as we can test whether one object is inside another, we can also test what other objects an object directly or indirectly contains. For this we use four properties/methods:

- `contents` -- a list of objects *directly* contained by this object.

- `allContents `-- a list (technically a `Vector`) of objects directly or indirectly contained by this object.

- `directlyHeld` -- a list of objects directly held by the object.

- `directlyWorn` -- a list of objects directly worn by the object.

So, in the above example, `blueBox.contents` would be a list consisting of `yellowBox` and `orangeBall`, whereas `blueBox.allContents` would be a Vector containing everything except the hall, the old hat and the blue box (at this point the difference between a list and a Vector need not detain us;
 we'll deal with it later on).

Conversely, we may want to know which room an object is in, even though it may be in a container inside a container. For this we use the `getOutermostRoom` method. Everything in the hall would have returned hall as the value of `getOutermostRoom`.

### 5.1.5. Containment and Class Definitions

There's just one more thing to note about the plus notation before we move on to a slightly different topic, and that is how it interacts with class definitions. The short answer is that class definitions are ignored for purposes of the object containment hierarchy, so if we were to write:

 
    hall: Room 'Hall'; 
 
    + blueBox: Container 'large blue box'; 
 
    ++ yellowBox: Container 'small yellow box'; 
 
    class Pen: Thing
     bulk = 2
 
    ;

 
    +++ redPen: Pen 'small red pen'; 
The red pen would still end up inside the yellow box, and the Pen class would be

nowhere (it can't be anywhere, since it's not a physical object;  it's more akin to the Platonic idea of a Pen, or an abstract specification of what we want all Pens to have in common).

### 5.1.6. Bulk and Container Capacity

In this example we defined `bulk =2` on the Pen class, and this conveniently leads us into the next point to make about containment. It's unrealistic to allow a large chair to fit inside a small purse, and there may be a limit to the total bulk an actor can carry. To model this adv3Lite defines a `bulk` property and a `bulkCapacity` property on every `Thing`. A player cannot insert an object inside a container if doing so would make the total bulk of all objects in that container exceed the `bulkCapacity` of that object. Likewise, an actor cannot pick up an object if doing so would mean that the total `bulkCapacity` of the actor would be exceeded. Since inventory limits are often considered something of an unnecessary nuisance by many players of IF, the library defaults make it very unlikely that either the `bulkCapacity` of an actor (or anything else) would be exceeded, since the default value is 10,000, but we can, of course, set it to something rather smaller if we wish.
By default the library defines the bulk of every `Thing` as 0, so if we want to track the total bulk being carried by actors or placed inside containers, it's up to us to give a meaningful bulk to (usually only portable) items according to whatever scale we deem appropriate, which depends on whether we want to regard the largest object in our game as being ten, a hundred or a thousand times bulkier than the smallest (say). If we also want to track the bulk of the player character and other actors (to limit what they can get inside) we'll probably need to use a scale with a larger range;  a person is rather more than ten times bulkier than a pin.

There is one more property that can limit the bulk of things a player can pick up or put into containers, namely `maxSingleBulk`. Regardless of whether the container would become full, or the player character still has room in his or her notional hands, an object can't be inserted into a container (or picked up by a player) if its bulk exceeds the `maxSingleBulk` for that container or actor. By default `maxSingleBulk` is set to `bulkCapacity`, but it can be changed to something smaller if desired.

There's a further couple of points to note about bulk. To get the total bulk of the objects contained within something, we can call its `getBulkWithin()` method. To get the total bulk of all the items carried by an actor, however, we should use its `getCarriedBulk()` method. One difference is that anything being worn by an actor is not reckoned as being carried, so it doesn't contribute to the carried bulk. Another is that anything fixed in place is also not reckoned as being carried, so that too won't contribute to the total carried bulk;  anything fixed in place in an actor's contents is likely to be a body part, not something carried.

### 5.1.7. Items Hidden in Containers

Sometimes an object inside a container may not be visible until we look inside the container (e.g. a small pin inside a large jar). One way we could represent this might be to define `isHidden =true` on the pin and then make looking inside the jar call the pin's `discover()` method. But adv3Lite offers an easier way of dealing with this kind of situation by using the `hiddenIn` property. To hide one object in another, just list the hidden object in the `hiddenIn` list of the concealing object, while making the hidden object start out located nowhere (i.e. in nil, off-stage).
For example, suppose we decided that the player shouldn't notice the red pen till s/he explicitly looked in the yellow box;  we could handle that by defining:

 
    ++ yellowBox: Container 'small yellow box'
 
        hiddenIn = [redPen];

 
    redPen: Thing 'small red pen'; 
The containing object doesn't even have to be a container for this to work. For example, if we want to allow the player to find a gold coin hidden in a pile of junk we could just do this:

 
    cellar: Room 'Cellar'
 
        "There's not much here but a pile of junk. "
 
    ;

 
    + junk: Fixture 'pile of junk[n];  rusty;  bits metal;
 it them'
 
        "Rusty old bits of metal, mostly, but you never know what may lieconcealed

 
        within. "
     cannotTakeMsg =' You certainly don\'t want to carry all thatstuff around! '

 
        hiddenIn = [goldCoin];

 
    goldCoin: Thing 'gold coin'
 
    ;

There is a slight difference in the way these two cases will behave, however. The command `look in yellow box `will result in the pen's being discovered and moved into the yellow box, while the command `look in junk`, or `search junk`, will result in the gold coin's being discovered and taken by the player character, since there's nowhere for it to go inside the junk. This behaviour can be controlled by two further properties, `findHiddenDest` and `autoTakeOnFindHidden`. If something isn't a Container but has a `hiddenIn` list, then the objects in the `hiddenIn` list are moved to `findHiddenDest` when they are discovered. By default, `findHiddenDest` is the actor doing the searching if `autoTakeOnFindHidden` is `true`, and the location of the concealing object otherwise, while `autoTakeOnFindHidden` is `true` if the concealing object is fixed in place and `nil` otherwise.

### 5.1.8. Notifications

There are two further methods of `Thing `it's useful to be aware of at this stage, namely `notifyInsert(obj)` and `notifyRemove(obj)`. These are both called when we use `actorMoveInto() `to move an object to a new location;  if we need to we can bypass them by using `moveInto()` instead.

Of these, `notifyRemove()` is the simpler, so we'll deal with it first. Whenever an object is about to be removed from inside another object , `notifyRemove(obj)` is called on the containing object with the object about to be removed from it as the *obj* parameter. By default this does nothing, but a trivial example will help make it clear how it can be used:

 
    blackBox: Container 'black box' @hall
     notifyRemove(obj)
    
 
    {    
 
        "Removing <<obj.theName>> from<<obj.location.theName>>! ";
    

 
        }
;

 
    + greenBox: Container 'green box'
 
    ;

 
    ++ pebble: Thing 'pebble'; 
If the player were to issue the command `take green box` the game would respond with "Removing the green box from the black box." Note then, that this method is called just before the movement is carried out. This means that we could, if we wished, use `notifyRemove()` to stop an object being removed from a container:

 
    modify Container
 
        notifyRemove(obj)
     {
 
        
        if(obj == pebble)    
 
    {
 
        
        
 
        "The pebble refuses to leave<<obj.location.theName>>! ";
 
        
        exit;
    
 
        
        }
 
        else
 
        
        
 
        "Removing <<obj.theName>> from<<obj.location.theName>>! ";
 
    }
    
 
    ;

 
    blackBox: Container 'black box' @hall
 
    ;

 
    + greenBox: Container 'green box'; 
 
    ++ pebble: Thing 'pebble; ;  stone'
 
    ;

This could result in the following transcript:

 
    >take pebble`The pebble refuses to leave the green box!

 
    >take green box`Removing the green box from the black box!

One new feature we've just introduced here is `exit`. Technically speaking this is a *macro*, but we haven't met macros yet, so for now we can just think of it as a special statement that stops an action in its tracks.

The other method, `notifyInsert()`, works in much the same way.  This can be illustrated via an extension to our previous example:

 
    modify Container
 
        notifyInsert(obj)
     {
 
        
 
        "Putting <<obj.theName>> in <<theName>>. ";
 
    }

 
        notifyRemove(obj)
    
 
    {    
 
        "Removing <<obj.theName>> from <<theName>>. ";

 
        }

 
    blackBox: Container 'black box' @hall
 
        ;

 
    + greenBox: Container 'green box'
 
    ;

 
    ++ pebble: Thing 'pebble; ;  stone'; 
Which could give us a transcript like:

You see a black box (which contains a green box (which
contains a pebble)) here.

 
    >take pebble`Removing the pebble from the green box.

 
    >take green box`Removing the green box from the black box.

 
    >put green box in black box`Putting the green box in the black box.

 
    >put pebble in green box
Putting the pebble in the green box.

This notification occurs just before the object being moved is inserted into its new container, so once again it could be used to prevent the insertion from going ahead.

## 5.2. Coding Excursus 7 -- Overriding and Inheritance

We briefly introduced the concept of inheritance in Coding Excursus 2. The time has come to delve into it a little deeper.

As we have seen, an object can inherit from one or more classes. If we define a new class, that too can inherit from one or more classes. In the TADS 3 inheritance model, it's even possible for an object to inherit from another object, or for a class to inherit from an object. The following are all perfectly legal definitions:

 
    myObj: PresentLater, Thing
 
    ;

 
    mySecondObj: myObj;

 
    class myClass: Container, Fixture
 
    ;

 
    class mySecondClass: myObj;

There is, indeed, very little difference between objects and classes in TADS 3, except that:

- classes are not included in the object containment hierarchy (as we have just seen).

- if we write code to iterate over objects, classes will not be included (as we'll see some way below).

- classes are declared using the keyword `class (`as shown in the above example).

Nonetheless, it is still worth observing the distinction between classes and objects;
 we use classes to define behaviour we want to apply to several relevantly similar objects, and objects to represent concrete instantiations of those classes.

The power of this model lies in the fact that we can not only just inherit the behaviour of classes (or objects), we can also modify and override that behaviour on particular objects and subclasses. If you have not yet done so, now might be a good time to read the article 'Object-Oriented Programming Overview' in the *TADS 3 Technical Manual, *which explains this all in a bit more detail.

The basic procedure for overriding a property or method is straightforward;
 we simply

redefine the property or method on the inheriting object. We effectively do this every time we define a standard property on an object;
 for example, when we define the `desc` property of a `Thing` we're overriding the library default that would otherwise say "You see nothing unusual about the whatsit." More generally, suppose we define (or use) `MyClass` and then derive `myObj` from it, overriding its `name` and `bulk` properties and its `makeBigger()` method:

 
    class Blob: Thing
 
    bulk = 2weight = 2
 
    makeBigger(inc)  { bulk += inc;
 }
makeLighter()
 
    {
 
    if(weight > 0)
 
    weight-- ;

 
    }

 
    name = 'blob'
 
    ;

 
    greenBlob: Blob
 
    bulk = 3name = 'green blob'
 
    makeBigger(inc){
    
 
        "\^<<theName>> just got bigger! ";
}

 
    ;

With this definition, `greenBlob.bulk` is 3, `greenBlob.weight` is 2, and `greenBlob.name` is 'green blob'. After executing `greenBlob.makeLighter()` once, `greenBlob.weight` will be 1. When we call `greenBlob.makeBigger(2)`, however, the bulk of `greenBlob `won't change, even though we'll see the message "The green blob just got bigger!".

This probably wasn't what we wanted;  we probably wanted the message to display *and* the bulk of `greenBlob` to grow by 2. We could, of course, just repeat the statement `bulk +=inc` in our overridden `makeBigger()` method, but this negates much of the point of inheritance, and could become very tedious and potentially error-prone if we were overriding a more complicated method comprising many statements. A better way to handle it is to use the `inherited` keyword;  
    inherited` does whatever the method (or property) we're overriding would have done if we hadn't just overridden it. So, using `inherited`, a better way to define `greenBlob` would be:
 
    greenBlob: Blob
 
    bulk = 3name = ('green ' + inherited)
 
    makeBigger(inc){
 
        inherited(inc);

 
        "\^<<theName>> just got bigger! ";

 
    }

 
    ;

There are a couple of things to note here. The first (to reiterate a point made previously) is that when we use the `inherited` keyword in a method, we must use it with the same argument list as the method we're overriding;  though not necessarily with the same argument list as the method we're defining: the following would be legal:

 
    makeBigger()
 
    {    inherited(2);

    
 
        "\^<<theName>> just got bigger! ";
}

The other thing to note is that we can also use the `inherited` keyword to retrieve the value of an inherited property (in this case the name 'blob' from `Blob`). Note also the syntax we employed here, setting the name property of `greenBlob` to an expression in brackets. This is *exactly* equivalent to writing:

 
    name  { return 'green ' + inherited;  }

A further advantage of using the `inherited` keyword in situations like these is that if we subsequently realize we want to make changes to the base class (in this case Blob), the changes will then automatically be carried through to all the classes and objects that inherit from it. Suppose, for example, that we later decide that all the Blobs in our game should be called gooey blobs, and that no Blob should be allowed to grow beyond a certain maximum bulk. We might then rewrite our definition of the Blob class thus:

 
    class Blob: Thing
 
    bulk = 2weight = 2
 
    maxBulk = 10makeBigger(inc)
 
    {
 
    if(bulk + inc <= maxBulk)
 
    bulk += inc;

 
    else
 
    bulk = maxBulk;

 
    }

 
    makeLighter(){
 
    if(weight > 0)
 
    weight-- ;

 
    }
name = 'gooey blob'
 
    ;

Then the enforcement of a maximum bulk will now also apply to the `greenBlob` object, whose name will now automatically become 'green gooey blob'. Furthermore, when we spot the obvious bug (namely that we hadn't allowed for the possibility that the *inc* parameter to `makeBigger(inc)` might be a negative number), whatever fix we apply to the `Blob` class will automatically apply to the `greenBlob` object and to any

other class or object derived from the `Blob` class -- provided we've used the `inherited` keyword when overriding the `makeBigger()` method (of course, it's also perfectly all right *not* to use the `inherited` keyword when we want the overridden method to do something substantially different from its behaviour on the class we're inheriting from, so that the inherited behaviour is of no use to us).

In addition to overriding methods and properties, we can also modify classes (and objects). Suppose that instead of defining a new `Blob` class, what we really wanted to do was to add the `makeBigger() `functionality to the library's `Thing` class. We could do this quite straightforwardly by modifying `Thing`:

 
    modify Thing
     maxBulk = 10
 
        minBulk = 0
     makeBigger(inc)
    
 
    { 
        bulk += inc;

 
    if(bulk > maxBulk)
 
    bulk = maxBulk;

 
    if(bulk < minBulk)
 
    bulk = minBulk;

 
        }
;

What this actually does is rename the existing `Thing` class to some strange internal name like `ae45` and then create a new `Thing` class which inherits everything from it apart from the bits we've changed or overridden. Anything defined to be of class `Thing` or as inheriting from `Thing` now uses our new `Thing` class.

Note that we can also use the `inherited` keyword in a modified class, and that it works just the same way as it does in a class or object definition;
 that is it does whatever the method we're inheriting from would have done if we hadn't overridden it. For example, suppose the `makeBigger()` method were defined on a modification of `Thing` in some extension we were using, and we wanted to make a further modification to make the `makeBigger()` method display a message. We could then do this:

 
    modify Thing
 
    makeBigger(inc)
 
    {
 
    inherited(inc);

 
    if(inc != 0)
 
    "\^<<theName>> just got <<inc > 0 ? 'bigger' :
'smaller'>>! ";     

 
    }

 
    ;

This shows that we can modify the same class (or object) as many times as we like, in which case the modifications take effect in the same order as they appear in the source code (which is one major reason why the library files always need to come first in our build: we can't modify a library class before the library defines it!). It should

also be noted that we can, of course, equally well use `inherited` to inherit the behaviour of a method (or property) defined in the library, e.g., to make every `Openable` object remember if it has ever been opened:

 
    modify Openable
 
    hasBeenOpened = nilmakeOpen(stat)
 
    {
 
    inherited(stat);

 
    if(stat)
 
    hasBeenOpened = true;

 
    }

 
    ;

We wouldn't have to make this particular modification in practice since Thing already defines an `opened` property that does it for us, but it serves to illustrate the principle.

We sometimes need more control over where we inherit from. For example, suppose we want to define an object that behaves like a `Door `in just about every respect, except that we don't want opening one side to open the other side (perhaps because it's some special kind of double door). In that case we may want our custom door to used Thing's makeOpen method instead of Door's. We can do that by specifying which class we want to inherit from:

 
    class CustomDoor: Door
     makeOpen(stat) {  inherited Thing(stat);
 }

 
    ;

Without that `Thing` following inherited we'd just inherit Door's `makeOpen()` method, which is precisely what we're trying to circumvent here.

Note, however, that we can only do this with a class that the object (or class) we're defining actually inherits from at some point (however indirectly). If we want to borrow a method (or property) from some class that's nowhere in the inheritance tree of the class or object we're defining, we can use the `delegated` keyword instead, for example:

 
    modify Topic
 
        owner = []
     nominalOwner() { return delegated Thing;
 }

 
        ownedBy(obj) { return delegated Thing(obj);
 }
 ;

The `Topic` class (which we'll encounter again later) inherits from the `Mentionable` class, but not from the `Thing` class, which defines `nominalOwner` and `ownedBy()`. So if (for whatever obscure reason) we wanted to `Topic` to be able to use the `nominalOwner()` and `ownedBy()` methods defined on Thing, we should need to borrow both these methods from `Thing`. The above example illustrates how we can do this using the `delegated` keyword.

The `modify` keyword lets us change an object or class definition, but only within certain limits. In particular it doesn't let us change the superclass list of the object or class we're modifying. For example, if we use `modify` to change the behaviour of the `OpenableContainer` class the one thing we can't modify is the fact that it inherits from the  `Container `class. If we want to start completely from scratch with the definition of an object that's been previously defined, we can do so using the `replace` keyword. For example, the following would be possible (though not particularly useful):

 
    replace OpenableContainer: Thing
 
        verifyDobjOpen() { illogical('Just because this looks openable
doesn\'t mean
        I'm going to let you open it! ');  }
    
 
    ;

Following the `replace` keyword we go on to define the class (or object) just as if we were defining it completely from scratch. The `replace` keyword can also be use to replace functions that have been previously defined.

For more information about the topics covered in this excursus, read the relevant parts of the articles 'The Object Inheritance Model', 'Object Definitions', 'Expressions and Operators' and 'Procedural Code' in the *TADS 3 System Manual*.

## 5.3. In, On, Under, Behind

### 5.3.1. Kinds of Container

After that somewhat lengthy (but nevertheless important) excursus, we can return to the main topic of this chapter, namely containment. We have already seen that we can use the `Container` class to put things in;
 we should now look at some related classes. First, here is the list of classes for things than can contain other things within them:

- `Container` -- the standard container type we've met already. This is a straightforward container like a bin, bag or sack that we can put things in.

- `Booth` -- a container that can also hold people, and that actors can get in and out of (we'll come back to this kind of container in Chapter 11).

- `OpenableContainer` -- a container that can be opened or closed, and usually hides its contents when closed (but we can make it transparent if we wish by defining `isTransparent =true` on it). As with doors we can use the `isOpen` property to test whether an `OpenableContainer` is open or closed, but should use the `makeOpen(stat)` method to open or close it under programmatic control. If we want an `OpenableContainer` to start out open, set its `isOpen` property to true in the object definition.
- `LockableContainer` -- a kind of `OpenableContainer` that can be locked or unlocked. Note, however, that a `LockableContainer` doesn't need a key;  a

 
    LockableContainer` models a container that can be locked or unlocked with some kind of catch. There's thus little obstacle to a player opening a `LockableContainer`. The `isLocked` property (true by default) defines whether the container starts out locked. Use the `makeLocked(stat)` method to lock or unlock a `LockableContainer` under program control.

- `KeyedContainer` -- a kind of `LockableContainer` that needs a key to unlock it. We'll discuss this further when we come to the chapter on locks and keys.

The use of these various classes shouldn't present any particular problems, but an example may be helpful here:

 
    + briefcase: LockableContainer 'briefcase;  large leather;  case'
 
        "It's quite large, and made of leather. "
 
    ;

 
    ++ document: Thing 'document'
    
 
        "It's marked <FONT COLOR=RED>TOP SECRET</FONT> at the top.The 

 
        rest seems to be in code. "
     readDesc()
    
 
    { 
        if(codeBook.seen)
    
 
        "It looks like the secret plans for a new IF language thatwill 

 
        
        
        
    revolutionize the production of Interactive Fiction!";
    

 
        
        else
        
 
        "It's in code;  you won't be able to decipher it until youfind 

 
        
        
     the key. ";
 
    }

 
    ;

Here the briefcase is portable, and has a lock, but the lock is a simple catch that can be unlocked without a key. Inside the briefcase is a document that will be found once the briefcase is open, but which won't be visible while the briefcase is closed.

### 5.3.2. Other Kinds of Containment

So far we've concentrated on containers we can put things *in. *But it's also common in Interactive Fiction to have things we can put things *on*: tables, desks, trays and things like that. For this we use the `Surface` class. As with containers, Surfaces are portable unless we make them otherwise by mixing them in with a `Fixture` class. So, for example, we might have:

 
    + table: Surface, Heavy 'table'
 
    ;

 
    ++ tray: Surface 'tray'; 
 
    +++ mat: Surface 'mat'
 
    ;

 
    ++++ bowl: Container 'bowl'
 
    ;

 
    +++++ grape: Food 'grape; ;  fruit' ; 
In this example the grape is in a bowl which is resting on a mat which is resting on a tray which is resting on the table. The table can't be moved (because it's too heavy), but the tray and the mat can both be taken (as, of course, can the bowl and the grape).

Just as there's a `Booth` class corresponding to the `Container` class, so there's a `Platform` class corresponding to the `Surface` class;  a `Platform` is a `Surface` that actors can get on and off.

Putting things in and on other things is pretty common in IF. Less common, but still useful, is putting things under or behind other things. For this adv3Lite defines the following classes:

- `Underside` -- something we can put things under.

- `RearContainer` -- something we can put things behind.

To hide things under or behind other things we can use the `hiddenUnder` and `hiddenBehind` properties in just the same way we use `hiddenIn`. Just as `hiddenIn` can be used with a `Container`, but needn't be, so `hiddenUnder` and `hiddenBehind` can be used with an `Underside` or `RearContainer`, but needn't be. This can be very handy when we want to hide things under or behind other things that we otherwise don't really want to make Undersides or `RearContainers`.

For example, we might have silver coin hidden under a rug. Ideally we'd like to make the rug a `Platform`, since it's clearly something the player could stand on, but it can't be both a `Platform` and an `Underside` at the same time. Fortunately, since we can use the `hiddenUnder` property, that's no problem:

 
    + rug: Platform 'rug;  small dark'
     initSpecialDesc = "A small dark rug lies on the floor. "
 
        
        hiddenUnder = [silverCoin]
 
    ;

 
    + mirror: Thing 'mirror'
     initSpecialDesc = "A square mirror is hanging on the wall. "
 
        
    hiddenBehind = [bankNote]
 
    ;

 
    silverCoin: Thing 'silver coin'; 
 
    bankNote: Thing 'banknote;  bank;  note'
 
    ;

There's a further point to note about this example. If the player takes the rug, the silver coin will be revealed in any case (because it's assumed to have been left lying on the floor). If the player takes the mirror, the banknote is likewise revealed.

We have now met four types of containment: in, on, under and behind. `Thing`, and hence all these classes that descend from `Thing`, provide the property `objInPrep`, which defines the preposition to be used for objects located within. By default `objInPrep` takes its value from the `prep` property of the Thing's `contType`, (e.g. 'in' for `In`, 'on' for `On`, 'under' for `Under`, and 'behind' for `Behind`). This property can be used to tweak certain kinds of message describing the whereabouts of an object. For example we could make things be listed as 'beneath' something rather than 'under' something, say, simply by changing `Underside.objInPrep `to 'beneath'.

Finally, although we have now seen four types of containment (in, on, under and behind), apart from the minor differences between them that we have noted, they all basically use the same containment mechanism. That is the containing object (whether a `Container`, `Surface`, `Underside` or `RearContainer`) maintains a list of the things it contains (in, on, under or behind) in its `contents` property, and the contained objects keep a note of what they're contained by in their `location` property. This means that a given object can support only one kind of containment relation. If it's a `Container`, we can put things in it, but not on it. If it's a `Surface`, we can put things on it, but not in it, under it or behind it. For some things that's okay, but for others it's an unrealistic restriction. We can often put things under a bed or table as well as on top of it. A desk next to a wall might have things on it, under it, in it and behind it. At first sight the adv3Lite world model seems not to allow for this. It turns out that adv3Lite does provide a means of dealing with this kind of situation, but before we go on to look at it, we first need to take a closer look an anonymous objects.

## 5.4. Coding Excursus 8 -- Anonymous and Nested Objects

Hitherto, we've given virtually every object a name when we've defined it (here 'name' refers to the object identifier that comes before the class list, not to the `name` property). For example, suppose the room description mentioned faded pink wallpaper, so we decided to implement the wallpaper as a `Decoration`:

 
    + wallPaper: Decoration 'wallpaper;  faded pink'
    
 
        "It looks like the kind of thing you'd associate with aVictorian nursery;  
     it's almost faded enough to be that old. "
 
    ;

The only real function of this object is to provide a response to `examine wallpaper `that doesn't deny the wallpaper's existence. We'll never need to refer to the wallpaper object in any other piece of code. In such an instance there's actually no need to give

the wallpaper object an identifying name, we can instead declare it as an *anonymous* object:

 
    + Decoration 'wallpaper;  faded pink'
    
 
        "It looks like the kind of thing you'd associate with aVictorian nursery;  
     it's almost faded enough to be that old. "
;
Although this kind of anonymous object declaration is particularly useful with decoration-type objects, it's by no means restricted to them;  we can use it for absolutely any object that we don't need to refer to by its identifier elsewhere. This can make our code a bit more compact, and also spares us the trouble of having to think up lots of identifying names for unimportant objects. In any case, if we declare an anonymous object and later find that we do need to refer to it in some other part of code, we can always go back and give it an identifying name.

Another use of anonymous objects is as *nested* objects. A nested object (which is necessarily anonymous) is one that is defined directly on the property of another object. We have already seen examples of this in defining various kinds of `TravelConnector` on the directional properties of rooms, e.g.:

 
    meadow: Room 'meadow'
    
 
        "The ground becomes distinctly marshier to the north. "
     north: TravelConnector
    
 
    { 
        destination = marsh
 
        
        travelDesc = "You step cautiously into the marsh. "
        }

 
    ;

We should note several points about this kind of definition.

First, we can always *refer* to a nested object using the name and relevant property of the enclosing object;
 in this instance `meadow.north` will give us a reference to the `TravelConnector` object. But the nested object remains anonymous;
 meadow.north is the name of the north property of the meadow, which just happens to contain a `TravelConnector` object right now (but which in principle could later be changed to contain something else, even if we're unlikely ever to change it in practice);  it's not the name of the `TravelConnector` object.

Second, when defining a nested object, we use exactly the same syntax (following the colon) as we would for defining an ordinary object, starting with the class list, except that we can't give it a name and that we must use the brace notation ( `{}
 `) to delimit the object definition.
Third, when defining a nested object using a template, we can either put the bits belonging to the template inside the braces or between the class list and the opening brace (as is also the case when defining an ordinary object with the brace notation).

A nested object can be defined with properties and methods just like any ordinary

object, for example:

 
    desk: Surface, Heavy 'desk; ; furniture'
 
        
    underDesk: Underside
 
    {
 
        
        
    name = 'desk'
        
        bulkCapacity = 5
 
        
        
    notifyRemove(obj)
        
 
    {
 
        
        
     
 
        "You pull <<obj.theName>> out from under the desk.";
 
        
     }
    
 
        
    }
;

It's often useful for a nested object's methods and properties to refer to its enclosing object. For this purpose we can use the special property `lexicalParent`. For example, we could slightly amend our first example to:

 
    meadow: Room 'meadow' 
 
        "The ground becomes distinctly marshier to the north. "
 
        north: TravelConnector
 
    {
 
        
        destination = marsh
        travelDesc ="You step cautiously from<<lexicalParent.theName>> 

 
        
        
    into the marsh. "
        }

 
    ;

Going north from the meadow to the marsh would then result in the display of the message "You step cautiously from the meadow into the marsh."

*Note that it is very easy to forget to use `lexicalParent` to refer to the enclosing object when working with nested objects. This is a very common potential source of bugs!*

For further information on anonymous and nested objects see the 'Object Definitions' article in the *TADS 3 System Manual*.

## 5.5. Multiple Containment

We left our discussion of containers at the point of talking about how to implement objects that need more than one kind of containment, for example a table we can put things both on and under, or a floor-standing cabinet one can put things both on and inside. The adv3Lite solution is the use of remapXX properties: `remapIn`, `remapOn`, `remapUnder` and `remapBehind`. Each of these can be used to refer to an object to which actions appropriate to a `Container`, `Surface`, `Underside` or `RearContainer` should be redirected or *remapped*.

This could be used to set up a desk with a drawer, for example:

 
    desk: Heavy, Surface 'desk' @study
    
 
        "It has a single drawer. "
        remapIn = drawer
 
    ;

 
    + drawer: Fixture, OpenableContainer 'drawer'
 
        cannotTakeMsg = 'You can't take the drawer;  it\'s part of the
desk. ';     

With this set-up you can put things on the desk, but any attempt to put something in the desk, look in the desk, open the desk or close the desk will result in the corresponding action being remapped to the drawer.

This is all very well for the situation of the desk with a semi-separate drawer, but what happens if we want to be able to put things in, on, under and behind the same object, such as a low free-standing cabinet? In this case we can define some or all of the remapXXX properties as nested anonymous objects of the `SubComponent` class, like this:

 
    + cabinet: Heavy 'cabinet'
     remapOn: SubComponent { }

 
        remapIn: SubComponent
     {
 
        
        bulkCapacity = 10
        
    isOpenable = true
 
        }
 
    remapBehind: SubComponent { }

 
        remapUnder: SubComponent { bulkCapacity = 10 }
;

From the player's point of view, this will appear to be a cabinet that the player can put things in, on, under or behind. What actually happens is that there are five objects: the cabinet itself, and four `SubComponents` representing the spaces in, on, under and behind the cabinet. Each of these `SubComponents` automatically takes its name from its `lexicalParent`, the cabinet, so that objects within these `SubComponents` are described as being in, on, under or behind the cabinet. None of these `SubComponents` has any `vocab`, so any commands targeted at the cabinet will be fielded by the `cabinet` object;  but since the cabinet has a the appropriate `remapXXX` properties, it automatically redirects certain actions to the objects defined on its `remapXXX` properties, provided they're present. For example, `open, close, lock, unlock, put in `and `look in` are all directed to the `remapIn `object;  
    put on` is redirected to the `remapOn`;
 
    put under` and `look under` are redirected to the `remapUnder`;
 and `look behind` and `put behind` to the `remapUnder` (provided objects have been defined on the relevant properties). Note also that we don't have to specify that these four objects are respectively a `Surface`, `Container`, `Underside` and `RearContainer`;  the library can work that out for itself from the properties to which our nested anonymous objects are attached. If we want the container to be openable, however, we do have to specify that (as in the example above);  note that it would have been a mistake to make the `cabinet` object itself an `OpenableContainer` in this situation.

We may often want some objects to start out in one or other part of a multiply-containing object of this sort. For example we might want a piece of paper to have slipped down behind the cabinet, an ornamental vase to be on top of the cabinet, a mat to be inside the cabinet, and a coin to be on the floor under the cabinet. One way of doing this would be to define the location property of each of these explicitly:

 
    vase: Container 'vase'
 
        location = cabinet.remapOn;

 
    paper: Thing 'piece of paper'
 
        location = cabinet.remapBehind;

 
    mat: Surface 'mat'
 
        location = cabinet.remapIn;

 
    coin: Thing 'coin'
 
        location = cabinet.remapUnder;

But there is another way of doing this, which may often be more convenient. We can instead use the + notation in the normal way, and use a special notation involving the `subLocation` property and a property pointer, which (as we have seen before) is a property name preceded by an ampersand (&);
 this gives a reference to the property rather than the value of the property, a way of saying "we want to note that we want to do something with this property but we don't want to evaluate it just yet". The above example would then become:

 
    + cabinet: Heavy 'cabinet'
     remapOn: SubComponent { }

 
        remapIn: SubComponent
     {
 
        
        bulkCapacity = 10
        
    isOpenable = true
 
        }
 
    remapBehind: SubComponent { }

 
        remapUnder: SubComponent { bulkCapacity = 10 }
 
    ;

 
    ++ vase: Container 'vase'
 
        subLocation = &remapOn;

 
    ++ paper: Thing 'piece of paper'
 
        subLocation = &remapBehind;

 
    ++ mat: Surface 'mat'
 
        subLocation = &remapIn;

 
    ++ coin: Thing 'coin'
 
        subLocation = &remapUnder;

While this doesn't save a huge amount of typing, it does make it easier to associate objects contained in a multiply-containing object with that object in the way we lay out the code.

Note that we don't need to define all four `remapXXX` properties on any given object;  we simply define whatever combination we want. So if all we want is a table we can put things on and under and a washing machine we can put things on and in, we'd define:

 
    + table: Heavy 'table;  kitchen'
        remapOn: SubComponent { }

 
        
    remapUnder: SubComponent { }
;

 
    + washingMachine: Heavy 'washing machine'
 
        remapOn: SubComponent { }
 
    remapIn: SubComponent
    
 
    { 
        notifyInsert(obj)
 
        
 
    { 
        
        if(!obj.ofKind(Wearable))
 
        
     
 
    { 
        
        
 
        "You're only meant to put clothes in there! "; 
 
        
        
        
     exit;
 
        
        }

 
        
        }
 
        bulkCapacity = 15
 
        }
    ;

Note too that it's sometimes necessary to use multiple containment when at first sight it looks as if an `OpenableContainer` should do the job. This is normally the case whenever we want to give a container any components, since its components are considered to be *inside* the container, and so will disappear from scope when the container is closed. For example, suppose we wanted a briefcase with a handle and a combination lock;  we might (erroneously) try something like this:

 
    briefcase: LockableContainer 'briefcase;  light brown' 
 
        "It's a light brown case with a handle and combination lock. "
 
    ;

 
    + Fixture 'handle' //
 
    DON'T DO THIS!
 
    ;

 
    + Fixture 'lock;  combination' //
 
    OR THIS!
 
    ;

The problem with this is that both the handle and the lock start out *inside* the briefcase, so the player can't interact with them when the briefcase is closed (which probably isn't what we want at all!). Even worse, once this code is developed a little further to make the combination lock the mechanism for unlocking the case, it'll

become impossible to unlock it, since the combination lock will be locked inside the very case it's meant to unlock.

The way round this kind of situation is to use `remapIn` to represent the inside of the briefcase;
 we should start out with something like this:

 
    briefcase: Thing 'briefcase;  light brown'
 
     
 
        "It's a light brown case with a handle and combination lock."
        remapIn: SubComponent, LockableContainer { }
    
 
    ;

 
    + Fixture 'handle' ; 
 
    + Fixture 'lock;  combination'
 
    ;

This will then work as intended, since the handle and the lock aren't in the `remapIn LockableContainer`;  they'll now appear effectively on the outside of the briefcase.

Exercise 12:  One place where you might expect to find quite a few containers of different types in a kitchen, so try implementing one now. Your kitchen should include a work top (fixed in place, of course), on which is a cookery book hiding a note underneath, an apron hanging from a peg, a box full of cutlery lying in the corner, a cooker (with a door), you can put things in, on or behind;
 there's a cake in the oven, and the instruction leaflet for the cooker has fallen down behind. On the cooker (or stove) is a pot and a saucepan with a handle. The kitchen has a table you can put things on or under, and under it is a red box containing a can opener (or tin opener). Fastened to the wall is a cabinet containing a glass jar with a number of sugar cubes in it. There's also a soup can in it, but the full implementation of that may have to wait. On the wall is a clock with a manufacturer's label stuck on its back. When you've got as far as you can, compare your version with the Containers example. To complete this exercise, you'll need material from the following chapter.

[&laquo; Go to previous chapter](4-doors-and-connectors.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](6-actions.html)
