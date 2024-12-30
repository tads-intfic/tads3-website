---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 2. Map-Making -- Rooms

## 2.1. Rooms

No game can take place without a room, so the very first thing we have to learn to define is precisely that -- a room. Let's suppose our game starts in a bedroom, so that this is the room we want to define. It might look something like this:

 
    bedroom: Room
        roomTitle = 'Bedroom'
        desc = "Your bed lurks in one corner, the clothes a heap from a restless night. The only way out is to the east. "
    ;
Note that we have defined two properties of the bedroom object: roomTitle (what the room is called) and desc (its description). These two properties are so common that we can define a room without stipulating them explicitly, by means of what's known as a *template*. A template is simply a convenience feature of TADS 3 that lets us define commonly-used properties without explicitly stating which properties we're defining;  this works by defining these common properties in a particular order (sometimes with additional symbols like + or @ or -> to identify parts of the template). The Room template is a very straightforward one;  using the room template our room definition becomes:

 
    bedroom: Room 'Bedroom'
        "Your bed lurks in one corner, the clothes a heap from a restless night. The only way out is to the east. "
    ;

We've mentioned a way out to the east, so presumably that must go somewhere. Let's suppose is goes out to the landing. To allow movement between rooms we can define the `east` property of the bedroom to point to the landing, then define a new room, the landing, with its `west` property pointing back to the bedroom.

 
    bedroom: Room 'Bedroom'  
        "Your bed lurks in one corner, the clothes a heap from a restless night. The only way out is to the east. "
        
        east = landing
    ;

 
    landing: Room 'Landing'
        "The landing runs from west to east; your bedroom lies west. "
        west = bedroom
    ;

If you compiled this game, it wouldn't be terribly exciting, but it would at least let you move backwards and forwards (or rather east and west) between the two rooms.

When we wrote `east = landing` and `west = bedroom`, we were adding properties to the room which describe where the player character goes when the player attempts to

move in the corresponding direction. The standard directional properties available in adv3Lite are the eight compass directions: `north`, `south`, `east`, `west`, `northeast`, `northwest`, `southeast`, `southwest`, together with the four special directions: `up`, `down`, `in` and `out, `and the four shipboard directions `port`, `starboard`, `fore` and `aft`.

Exercise 1:  See if you can create a larger map, using the tools we have seen so far. Traditionally people start by creating a map of their own home or place of work, and you could do that. But by all means feel free to use your own imagination if you'd like to try something more adventurous.

## 2.2. Coding Excursus 1: Defining Objects

The rooms we have been creating are examples of *objects*. A great deal of programming in TADS 3 consists in defining objects. A typical object definition in TADS 3 looks something like:

 
    objectName: ClassList
        property1 = 'some text'
        property2 = somethingElse
    ;

The *objectName* is simply a name we give to the object so that we can identify it elsewhere in our code (for example we used the name `landing` which enable us to attach the `landing` to the `east` property of the `bedroom`).

The *ClassList* is a list of one or more *classes* to which the object we're defining belongs. A *class* defines the kind of object it is;  objects belonging to the same class generally have quite a bit of behaviour in common, so we use classes to define that common behaviour. So far the only class we've met is `Room`, but adv3Lite has many other classes we can use, and we can also define our own. We'll soon be meeting some more.

Each object (and class) can have a number of *properties*. These are pieces of data associated with the object, for example the `name` and `desc` of a Room. These pieces of data can be of many kinds, such as strings (pieces of text), numbers, lists, and other objects. Objects (and classes) can also have *methods*, but we'll talk about those later.

In the example above the object definition is terminated with a semicolon (;
). An alternative form of object definition uses braces, like this:

 
    objectName: ClassList
    {
        property1 = 'some text'
        property2 = somethingElse
    }

Some kinds of object have properties we use so often that there's a short-cut method of defining them, using what TADS 3 calls a *template*. The only template we've met so far is that for the `Room` class, which defines a short-cut means of defining the `roomTitle` and `desc` properties.

Templates can be a great time-saver when defining objects, but how do we know which properties they define? One way is to look them up in the *Library Reference Manual. *This is a tool all TADS 3 authors need to get to grips with sooner or later, so we may as well start now.

Open the *Adv3Lite Library Reference Manual*  (it's best if you can open it in a web browser and keep it available all the time). Along the top of the *LRM* you should see a row of links looking like:

[*Intro*  ](http://Intro.html/)[*Classes*  ](http://ClassIndex.html/)[*Actions*  ](http://ActionIndex.html/)[*Grammar*  ](http://GrammarIndex.html/)[*Objects*  ](http://ObjectIndex.html/)[*Functions*  ](http://FunctionIndex.html/)[*Macros*  ](http://MacroIndex.html/)[*Enums*  ](http://EnumIndex.html/)[*Templates*](http://TemplateIndex.html/)[* all symbols* ](http://index/TOC.html)

Click on the *Templates* link near the right hand end. The bottom left-hand frame of the *LRM* should then change to a list headed with the title Templates. Scroll down the list till you find *Room*, and then click on the *Room* link. A definition of the Room template should then appear near the top of the main frame, looking like this:

 
    Room 'roomTitle' 'vocab' "desc"? ;

    Room 'roomTitle' "desc"? ;

Anything followed by a question-mark is an optional part of the template. This tells us that when we define a room with a template, the item in single-quote marks will be the `roomTitle` property. If there's a second item in single-quote marks it will be the `vocab.` Whether we define the Room with one or two items in single-quoted strings, the item that appears between double-quotes will be the `desc` property.

So, for example, if we defined:

 
    auditorium: Room 'Auditorium of Albert Hall' 'auditorium'
        "The auditorium is thronged with a great press of people. "
    ;

Then 'Auditorium of Albert Hall' would the `roomTitle`, 'auditorium' would be the `vocab`, and "The auditorium is thronged with a great press of people. " would be the `desc`.

After a while, the common templates (e.g. for `Room`) quickly become familiar, and you shouldn't need to look them up any more. Some beginners find templates a little confusing, however, since until they become familiar it isn't always clear what properties they're defining. For that reason we'll be careful to introduce each template as we first use it, and to give at least one example of each new class where where the

properties are all defined explicitly.

For a fuller explanation of the material covered in this Coding Excursus, see the chapter on "Object Definitions" in Part III of the *TADS 3 System Manual*. Note, however, that some of the material in that chapter relates to concepts we shall be meeting in later Coding Excursuses.

## 2.3. Rooms and Regions

So far we've only met one kind of room, defined with the `Room` class. In adv3Lite, that's the only kind of Room there is.

We can, however, do several things to customize a room. For example, by default rooms all start out lit, but it we want a dark room we can simply define it isLit property as nil:

 
    cellar: Room 'Cellar'
        "If you could see anything in here it would all look rather dusty."
        isLit = nil
    ;

But in fact, unless the player character has a light source, you won't see anything in there, so you'll just get a message saying it's too dark to see anything. We'll return to that in Chapter 10 when we come to consider Darkness and Light.

If you had a whole lot of dark rooms in your game you might want to define a DarkRoom class like so:
 
    class DarkRoom: Room
        isLit = nil
    ;

Then you could make definitions like:

 
    cellar: DarkRoom 'Cellar'
        "A dusty passage leads off to the east. "
        east = dustyPassage
    ;
 
    dustyPassage: DarkRoom 'Dusty Passage'
        "This passage seems to run forever from west to east. "
        west = cellar
        east = self
    ;

This is known as making use of *inheritance* which we'll talk about in more detail below.

Something else we can do with a room is to put it in a *Region*. A Region is a set of rooms that belong together in some way, like all the rooms in a house, or all the rooms on the ground floor, or all the rooms outdoors. A room can belong to more than one region, and regions can belong to other regions, so that, for example, we could

have a hall that's in the downstairs region of a myHome region, thus:

 
    downstairs: Region
        regions = [myHome]
    ;
 
    myHome: Region ;
 
    hall: Room 'Hall'
        "The front door lies just to the north..."
 
        regions = [downstairs]
    ;

This puts the hall in both the downstairs region and the myHome region. Notice how we define what regions a room or region is in: we list those regions in the `regions` property. Anything in square brackets [] denotes a *list*, the elements of which must be separated by commas. Don't worry about that too much for the moment, however;  we'll talk about lists in more detail in a later chapter.

You may be wondering what Regions are actually good for. They can in fact be used for a variety of purposes. We can test whether something or someone is in a region;
 we can make things happen when someone leaves or enters a region;
 or we can restrict what happens according to region (so that, for example, we could restrict the use of the shipboard directions port, starboard, fore and aft to a shipboard region). But how to do all this depends on concepts we haven't met yet.

At this point, we'll introduce another property you can use with rooms:  `cannotGoThatWayMsg.` This is the message that would be displayed if the player tried to go in any direction we haven't explicitly defined an exit for. For example, we might expand our definition of the hall a bit like this:

 
    hall: Room 'Hall'
        "The front door lies just to the north. Other exits lead east and west, while a flight of stairs runs up to the south. "
        
        regions = [downstairs]
 
        north = drive
        south = landing
 
        east = livingRoom
        west = kitchen
 
        cannotGoThatWayMsg = 'You\'d just end up in a corner! '
    ;

Note how we use the backslash (\) immediately before single-quote marks that we want to appear within a single-quoted string property. An alternative would have been to use three single-quote marks to start and end the string value:

 
     cannotGoThatWayMsg = '''You'd just end up in a corner! '''

This avoids the need to type the awkward backslash (\) character before the single

quote marks (or apostrophes) that appear in the body of the string, but the meaning is otherwise identical. (If you find it confusing to have different ways of doing the same thing, then you can always ignore this alternative for now).

Exercise 2:  Now that we've learned a bit more about rooms, try to construct a more adventurous map using examples of the new properties we've just seen. This might, for example, include the inside of a house and part of its garden. Even though we haven't really discussed what you can do with Regions much yet, try putting each room in an appropriate region.

## 2.4. Coding Excursus 2 -- Inheritance

In the previous coding excursus we showed how objects are defined, and noted that each object definition had to contain a list of one or more classes. These are the classes from which the object *inherits*. Classes can also inherit from one or more other classes. For example, our custom-made `DarkRoom` class inherited from `Room`. Although we haven't met either class yet, `Room` in turn inherits from both `TravelConnector` and `Thing`. Inheriting from more than one class is called *multiple inheritance*.

Classes are extremely useful when we want to define several objects (or maybe a whole lot of objects) that basically behave alike. All rooms are basically similar: they can contain actors and other objects;
 we can move from one room to another using compass directions;
 when we enter a room we see its room name and its description;
 all rooms can be light or dark;
 using the `look `command in a room works in basically the same way for all rooms;
 and so on. It would be tedious to have to define all this behaviour for each and every room in our game, but fortunately the `Room` class does it all for us;
 we can just define our rooms to be of class `Room` and leave the library to do all the rest. The rooms we define in our game all inherit from the `Room` class.

But as we've also seen, we might want to make another kind of room (although this may not often be necessary with adv3Lite). An example we gave before was that of defining a `DarkRoom` class for a room without any light:

 
    class DarkRoom: Room
        isLit = nil
    ;

Note the use of the `class` keyword here when we're defining a new class instead of a new object. TADS 3 treats classes and objects in fairly similar ways, but there are differences, so if we mean something to be used as a class, we should define it as a class.

Since Rooms aren't the only kind of object that have the `isLit` property, we could have gone about this a different way by defining a `Dark` class, like this:

 
    Dark: object
        isLit = nil
    ;

We could then have defined our DarkRoom class using multiple inheritance, like this:

 
    class DarkRoom: Dark, Room` ;

To be sure this is such a trivial example that it's unlikely that anyone would ever define this particular set of classes in practice, but it serves to illustrate the principle, and the principle is this: Where we want to combine the functionality of more than one class, we simply include all the classes we want to inherit from in our class list (whether we're defining an object or a new class). For the most part we can simply define our object as inheriting from multiple classes and leave TADS 3 to work out how all the classes will actually work together, and 99 times out of 100 we'll get the behaviour we expect, provided we observe the one golden rule of multiple inheritance: *mix-in classes must always come first*.

A mix-in class is something like `Dark` that modifies the behaviour of other classes but doesn't define a full set of behaviour itself. A mix-in class is generally any class that doesn't (directly or indirectly) inherit from `Thing`. We'll investigate the `Thing` class in the next chapter.

For more information on object-orientation and inheritance read the article on "Object-Oriented Programming Overview" in the *TADS 3 Technical Manual*, and the chapter on "The Object Inheritance Model" in the Part III of the* TADS 3 System Manual*.

## 2.5. A Bit More About Rooms

Rooms have quite a few more commonly-used properties beyond those we've mentioned so far. Quite a few of these will be mentioned in later chapters as they become relevant, but there are two we may as well mention here.

Sometimes it's nice to be able to give a room a different description the first time it's examined, perhaps emphasizing the things that first strike the player character's eye or including a reference to how the player character came to be there (something we shouldn't normally do in a room description that could be repeated under other circumstances). For this purpose we can use a special kind of *embedded expression*, which is something inside a string enclosed in `<<>>` (we'll say more about these in general later). Two varieties of embedded expressions that can be useful in room descriptions are `<<first time>>...<<only>>` and `<<one of>> ... <<or>> ... <<stopping>>`. For example, suppose you have a room that's initially described as "The first thing you notice about this hall is that it continues to the east" and subsequently as "This large hall continues to the east." We could use the `<<one of>> ... <<or>> ... <<stopping>>` to deal with this for us, thus:

 
    hallWest: Room 'Hall (west)'
         "<<one of>>The first thing you notice about this hall is thatit <<or>>This large hall<<stopping>> continues to the east. "

        east = hallEast
    ;

There's just a couple more points we'll make about rooms for now before we move onto other things. A name like 'Hall (west)' is fine for the display name of a room in the status line or as the heading of a room description, but it doesn't work quite so well as a name for the room in other contexts, such as "You see Richard over in Hall (west)" or "A walking stick lies abandoned on the ground in Hall (west)." In such cases it would be more natural to refer to the room as something like 'the west end of the hall'. We can do this by defining the room's `vocab` property, which incidentally sets its `name` property at the same time (don't worry, we'll come to a fuller explanation of that when we come to discuss Things in the next chapter). For a room, we can achieve that simply by using a second single-quoted string in the Room template, like this:

 
    hallWest: Room 'Hall (west)' 'west end of the hall'
        "<<one of>>The first thing you notice about this hall is thatit <<or>>This large hall<<stopping>> continues to the east. "

        east = hallEast
    ;

This actually achieves two things: first, it ensures that the game will use the name 'west end of the hall' if and when it ever needs to construct a sentence about this Room, and second, it means that the player can refer to this room as 'west end of the hall' in commands like GO TO WEST END OF HALL.

Much of the time, though, we'll be defining rooms where the `roomTitle`, name and `vocab` are effectively all the same, rooms with name like 'kitchen', 'dining room', or 'large meadow'. In such a case adv3Lite will take both the `vocab` and the name to be the `roomTitle` in lower case (e.g. a `roomTitle` of 'Kitchen' becomes a name and `vocab` of 'kitchen'). This takes place for any room that doesn't explicitly define a `vocab `property of its own, provided the room's `autoName` property is set to true (as it is by default). If you don't want this behaviour, you can can set `autoName` to `nil` (meaning false in this context). A further complication is that you may have a room name (i.e. `roomTitle`) like 'West Street', that's effectively a proper name, i.e. one that shouldn't be turned into lower case when converted into the name property, and one that shouldn't be preceded by articles like 'the' or 'an' when it appears in a sentence ('You last saw Martin in West Street', not, 'You last saw Martin in the west street'). In such a case, we need to define `proper = true` on the room, like so:

 
    westStreet: Room 'West Street'
        "West Street runs straight east-west along a row of old-fashionedshop fronts..."
        proper = true
    ;

There's one last thing to say about rooms at this stage. You'll have seen that we can define shipboard directions (like port, starboard, fore and aft) on any room, but on most rooms they probably won't be meaningful, and in a game where there are no rooms aboard a ship or comparable vessel, they may never be meaningful. In such a case the default responses to commands like `go port `or` push trolley aft `or` throw knife starboard `may seem less than fully appropriate;  what's really needed in such cases is a message saying that these directions are meaningless in this context.

You can control which directions are considered meaningful on any given room by using the properties/methods `allowShipboardDirections` and `allowCompassDirections`. If one or the other of these is nil the command will be stopped in its tracks with a message like "Shipboard/compass directions have no meaning here." You might want to block compass directions, for example, for rooms that are meant to be aboard a ship.

In the library `allowCompassDirections` is simply defined as true, leaving you to set it to nil if and where you deem it appropriate on particular rooms. It's a bit different with `allowShipboardDirections`, however. In this case, the game looks to see if any of the shipboard directions (port, starboard, fore or aft) have been defined on the room in question;  if they have, then `allowShipboardDirections`  will be true;  otherwise it will be nil. For the most part this means you can just leave `allowShipboardDirections`  to look after itself, but there may occasionally be rooms where you might want to override it. For example, if a room represents the hold of a ship from which the only way out is up, you may want to make `allowShipboardDirections` true on the grounds that the shipboard directions are still meaningful in the hold (we know which way port, starboard, fore and aft are) even if we can't actually travel in any of them;  in such a case you might want to do something like this:

 
    hold: Room 'Hold'
        "The ship's hold is dark and dank, with water seeping in between the planking. The only way out is back up to the main deck. "

        up = mainDeck
        allowShipboardDirections = true

    ;

[&laquo; Go to previous chapter](1-introduction.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](3-putting-things-on-the-map.html)
