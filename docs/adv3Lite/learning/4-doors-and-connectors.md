---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 4. Doors and Connectors

## 4.1. Doors

When we're creating a map in a work of Interactive Fiction, we quite often want to create doors. This may simply be for the sake of realism: rooms inside a house or office generally do have doors between them, and it would be a strange house that lacked a front door;  or it may be because we want the door to be some kind of barrier, preventing access to some area of the map until the player has obtained the relevant key or solved some other puzzle. We'll deal with doors as barriers later;  for now we'll concentrate on doors as connectors between locations.

A physical door has two sides;
 in adv3Lite the two sides of a door are implemented as separate objects and then linked together. One side of the door is located in the room the door leads from, and the other in the room the door leads to (of course the distinction is a bit arbitrary, since adv3Lite doors, like real doors, work perfectly well whichever way one goes through them). The two sides of the door are then linked by setting the `otherSide` property of each side to point to the other side. This not only determines where an actor ends up when he or she goes through the door, it also keeps the two sides of the door in sync when one side of the door is open or closed (or locked or unlocked).

To implement a door we use the `Door` class. This inherits from a two classes, namely `Thing` and `TravelConnector` (which we'll say more about later in this chapter). It also has `isFixed = true` by default, so it's not possible for the player to pick up a door and carry it around, and doors are not listed separately in room descriptions (unless we give them a `specialDesc`); it's generally assumed that we'll mention any relevant doors in the description of the room. The Door class also defines `isOpenable = true`, since doors can normally be opened and closed. The way to set up a pair of doors should become clearer with an example; suppose the front door of a house leads out from the hall to the drive:

 
    hall: Room 'Hall'
        "The front door leads out to the north. "
        north = frontDoor
    ;
 
    + frontDoor: Door 'front door'
        otherSide = frontDoorOutside;
        
    drive: Room 'Front Drive'
        "The front door into the house lies to the south. "

        south = frontDoorOutside
    ;
 
    + frontDoorOutside: Door 'front door'
        otherSide = frontDoor;

One important thing to notice here is that when we use a door between rooms, we point the relevant compass properties on the rooms in question (e.g. `north` and `south`) to the *door* objects and not to the rooms where the doors lead. Otherwise players would be able to move between rooms without using the doors at all!

Note also that because a `Door` is a kind of `Thing`, we can once again use the `Thing` template to define its `vocab`, and `desc. `Finally, note the use of the plus sign (+) to locate each side of the door in the room in which it belongs.

The doors we defined above will start out closed. If we want them to start out open, we should define `isOpen =true` on both sides of the door (actually it's usually enough to define this on one side of the door, since the library will assume that if one side of a door starts out open, the other side must too, but it may be as well to be explicit in your code).
As mentioned above, a `Door` defines i`sOpenable =true`. That means that the player can open and close it using the `open `and `close` commands (unless it's locked, of course, but we'll leave locks until a later chapter). It also means that we can test whether it's open or closed by looking at the value of its `isOpen` property. E.g.:

 
    hall: Room 'Hall'
        desc()
        {
            "The front door stands ";
            if(frontDoor.isOpen) "open"; else "closed";
            "to the north. ";
        }
        north = frontDoor
    ;

We could in fact produce this effect with much briefer code, but it demonstrates the principle (and also demonstrates again that the `desc` property can be a more complex method and not just a double-quoted string).

Note that although we can *test* the value of the `isOpen` property, we should never try to change it directly (with a statement like `isOpen =true;`, either on a `Door` or on any other `Openable` object (since doing so would be liable to break the mechanism that keeps both sides of the same door in sync). Instead we should use the `makeOpen()` method; `makeOpen(true)` to open something and `makeOpen(nil)` to close it.

Exercise 8:  Add some doors to the map you've been building (or make a new map and put some doors in it). Observe what happens when you try to make the player character go through a closed door without explicitly opening it first.

## 4.2. Coding Excursus 5 -- Two Kinds of String

So far we've been using double-quoted and single-quoted strings without explaining what the difference is between them, apart from simply stating that some properties need to use single-quoted strings and other properties need to use double-quoted strings. The time has come to explain the difference.

In a nutshell, it's this: *a single-quoted string is a piece of textual data, while a double-quoted string is an instruction to display a piece of text on the screen.*

The difference can be illustrated by the following fragment of code:

 
    myObj: object
        myMethod()
        {
            name = 'elephant water';  
            "That smells unpleasant! ";
        }
        name = 'green pea'
    ;

When the `myMethod` method of `myObj` is executed, the `name` property (of `myObj`) is changed to 'elephant water' and the text "That smells unpleasant!" is displayed on the screen.

We can also display the value of a single-quoted string on the screen by using the `say() `function:

 
    myObj: object
        myMethod()
        {
            name = 'elephant water';  
            say('That smells unpleasant! '); 
            say(name);
        }

        name = 'green pea'
    ; 

Note, by the way, how we generally leave a spare space at the end of a string that we plan to display;
 that's to ensure that if another piece of text is displayed immediately after it we have proper spacing between the two sentences.

But to return to the distinction between single and double-quoted strings, the apparent exception to the rule that a single-quoted string is a piece of data, while a double-quoted string is an instruction to display something is that object properties (such as `desc` and `specialDesc`) can be defined as double-quoted strings. But this anomaly is more apparent than real. Perhaps the best way to explain it is to say that a property defined as a double-quoted string is effectively a short-hand way of defining a method that displays that string;
 so for example:

 
        desc = "A humble abode, but mine own. "

is almost exactly equivalent to defining:

 
        desc() { "A humble abode, but mine own. "; }

or indeed:

        desc() { say('A humble abode, but mine own. '); }

And indeed, wherever any adv3Lite documentation suggests that we need to define an object property as a double-quoted string, it's always perfectly legal to define a method (which can be as complicated as we like) that displays something. (Actually, this is a slight oversimplification, since there are a few situations in which TADS 3 treats a double-quoted string property a little differently from a method, but the above account will serve as a first approximation).

Similarly whenever any documentation suggests that we need to define a property containing a single-quoted string, it's always perfectly legal to define a method (which can be as complicated as we like) that returns a single-quoted string;  e.g.:

 
        name() { 
            if (weight > 4)
                return 'heavy ball';  
            else
                return 'light ball';  
        }

Although we can define the initial value of a property to be a double-quoted string, we can't go on to change that property to be another double-quoted string (or anything else for that matter), at least, not in the obvious way. The following code is illegal:

 
        changeDesc()
        {
            desc = "It's a great big heavy ball. ";  // DON'T DO THIS!
        }

There is a way to change the value of a double-quoted string property;
 it can be done like this:

 
    changeDesc()
    {
        setMethod(&desc, 'It\'s a great big heavy ball. ');
    }

But the need to resort to this kind of thing will probably be rare, especially when you're just starting out in TADS 3, so for the moment we'll just note the possibility and move on.

On the other hand, it's always perfectly okay to change the value of a single-quoted string property. We can also manipulate single-quoted strings in all sorts of other ways. For example:

 
    name = 'black ' + 'ball'; 

Changes the value of name to 'black ball'. We can also write:

    name += ' pudding'; 

To append ' pudding' to the end of whatever was in `name`. Other things we can do with single-quoted strings include:

- `str1.endsWith(str2)` -- tests whether `str1` ends with `str2` (e.g. if `str1` is 'abcdef' and `str2` is 'def' this will return true).

- `str1.startsWith(str2)` -- tests whether `str1` starts with `str2` (e.g. if `str1` is 'abcdef' and `str2` is 'abc' this will return true).

- `str.length() `returns the number of characters in `str` (e.g. if `str` is 'abcdef' this would return 6).

- `str1.find(str2)` tests whether the string `str2` occurs within the string `str1`, and if so returns the starting position of `str2` within `str1` (e.g. if `str1` is 'antique dealer' then `str1.find('deal')` would return 9 while `str.find('money')` would return nil).

- `str.toUpper()` returns a string with all the characters in `str` converted to upper case (e.g. `'Fred Smith'.toUpper` returns 'FRED SMITH').

- `str.toLower()` returns a string with all the characters in `str` converted to lower case (e.g. `'Fred Smith'.toLower` returns 'fred smith').

- `str.substr(start) `returns a string starting at the *start* character of `str` and running on to the end of the string (e.g. if `str` is 'blotting paper' then `str.substr(5) `would return 'ting paper').

- `str.substr(start,
length)` returns a string starting at the *start* character of `str` and continuing for no more than *length *characters (e.g. if `str` is 'blotting paper' then `str.substr(5,4)` would return 'ting').

For a full list of the methods available for manipulating single-quoted strings, see the "String" chapter under in Part IV of the *TADS 3 System Manual*.

It may seem that while we can manipulate a single-quoted string in all sorts of ways, if we want to manipulate the contents of a double-quoted string then we're out of luck. That's almost true -- after all a double-quoted string is basically an instruction to display something, not a piece of data -- but there is a little trick we can use to convert a double-quoted string to a single-quoted one,. For example, suppose we wanted to do something with the `desc` property of some object;  we can use code like this to recover the single-quoted string equivalent of the `desc` property:

 
        local str = getMethod(&desc);

Note the ampersand (&) which is needed before the property name (desc) here;
 technically speaking `&desc` is a *property pointer. *If that doesn't mean much to you right now, don't worry;  just remember you need to use the ampersand before the property name in this kind of situation. Note also that `getMethod() `will only do what you want in this situation if the `desc` property has been defined as a double-quoted string rather than a method (this is one of the few situation in which it makes a difference). If the `desc `property (or whatever property it is you're interested in) might contain a method, you're better off capturing its single-quoted string equivalent with:

 
        local str = gOutStream.captureOutput({: desc });

We're then free to do whatever we like with `str` (which now contains the same characters as `desc`, but in a single-quoted string). If we want we can even set `desc` to the new value of `str` once we've finished manipulating it:

 
        setMethod(&desc, str);

## 4.3. Other Kinds of Physical Connector

It's quite common for a door to lead from one location to another, but doors are not the only kind of physical connection that can do this. Other examples include stairways, paths and passages, and adv3Lite has classes to model all of these. Unlike doors, these other kinds of connectors don't have to be used in pairs, and instead of defining their `otherSide` property we define their `destination` property to determine which room they lead to. The physical connector classes available in adv3Lite are:

- `StairwayUp -- `A `StairwayUp` is something we can climb up. Although we can (and often will) use these for flights of stairs, we can also them for anything that an actor might climb up, such as hillsides, trees and masts.

- `StairwayDown` -- Just like a `StairwayUp` except that we can climb down it instead of up it. We may often want to pair a `StairwayUp` with a `StairwayDown` to represent both ends of the same staircase at the lower and upper levels, but there's no necessity to.

- `Passage` -- This is a passage that an actor can go through with an `enter` or `go through` command. We might typically use this for passages, corridors and tunnels.

- `PathPassage` -- An object representing one end of a path, street, road or other unenclosed passage that one would think of travelling along rather than through. We can go along such passages with commands such as `follow path` or `take path`.

- `Door` -- We've already discussed `Doors` above, but we include them here for the

sake of completeness.

- `SecretDoor` -- An object that acts as a `Door` but doesn't look like a door until it's opened, for example a bookcase that can be opened to reveal a secret passage behind. In this case we may want both the name of the object and the vocabulary used to refer to it to change according to whether it's open or closed. We can do that by defining its `vocabWhenOpen` property. This should be defined in exactly the same way as the `vocab` property, but will be applied to the `SecretDoor` when it's opened. If it's closed again its original `vocab` will be restored. To make a door that's completely invisible when closed (for example a concealed panel in a wall), just use an ordinary `Door` and then define `isHidden = !isOpen `and` isConnectorApparent = isOpen `on it.

All these classes are used to represent physical objects at one or both ends of the connection, the kinds of object that would typically be listed in a room description but not listed separately, for example "A broad flight of stairs leads up to the east" or "A narrow passage leads off to the south" or "A path runs southwest round the side of the house". They are particularly useful when we want an object to represent these kinds of connection between locations without wanting to implement them as locations in their own right (perhaps nothing interesting happens in the passage, so we don't actually want a passage room). A further example might help to illustrate their use:

 
    cellar: Room 'Cellar'
        "This cellar is mainly empty apart from a pile of useless junk in the corner. The only way out is back up the stairs. "
        up = cellarStairs
    ;

 
    + cellarStairs: StairwayUp 'stairs; ; ; them'
        destination = hall
    ;

 
    + junk: Decoration 'pile of useless junk[n]'
        "The accumulated rubbish of decades. "
 
        notImportantMsg = 'None of it is of any conceivable use. '
    ; 
 
    hall: Room 'Hall'
        "The hall is large and bare. A flight of stairs leads down to the south, and a long passage leads off to the west. "

        south = hallStairs
        down asExit(south)
        west = hallPassage
    ;

 
    + hallPassage: PathPassage 'long passage'
        "The long passage leads off to the west. "
        destination = kitchen
        getFacets = [kitchenPassage]
    ;

 
    + hallStairs: StairwayDown 'flight of stairs'
        destination = cellar;
 
    kitchen: Room 'Kitchen'
        "This is pretty typical kitchen, if a little old-fashioned. A long passage leads off to the east. "
        east = kitchenPassage;
 
    + kitchenPassage: Passage 'long passage'
        destination = hall
        getFacets = [hallPassage]
    ;

There are a few extra points to note here. First, note the use of the `getFacets` property on the hall passage and the kitchen passage. This is a way of indicating that they are the two halves of the same object, namely the passage leading from the kitchen to the hall. This is only ever relevant if the player refers to one end of the passage in a command and then tries to refer to the other end with a pronoun, for example GO THROUGH PASSAGE;
 X IT. In this case also the 'passage' in the first command might have referred to the hall passage (say), the parser will recognize that IT might refer to the kitchen passage. In the case of the two sides of a Door, the library sets up this getFacets relationship for us;  if we want it anywhere else we have to do it ourselves.

Second, note the use of `asExit()` in the definition of the `hall`. This allows two or more exits (in this case south and down) to behave in the same way with only one of them being listed in the exit-lister. In this case the player might reasonably type either `down` or `south` to go down the stairs, so we want both to work, but we wouldn't want both `down` and `south `to appear in the list of exits, since this might mislead the player into supposing they were two separate exits.

There's one more class that at first sight may look rather like the kind of connector we've just been discussing, but is in fact something a little different. This is the `Enterable` class, which is typically used to represent something like the outside of a building, which a player may attempt to enter with a command like `go into building`. Where the player character then ends up can then be defined either using the `connector` property (which defines the connector, typically a Door, the player must travel via to get inside) or the `destination` property, which simply specifies the room the player will end up in.

We can illustrate all this by means of an example. Suppose we are defining a front drive location which mentions a large house to the south. We'd then use an `Enterable `to represent the outside of the house and point its `connector` property to the front door, something like this:

 
    frontDrive: OutdoorRoom 'Front Drive'
        "The drive is impressive, but not half as impressive as thelarge
        Georgian house that stands directly to the south. "
        south = frontDoor;

 
    + house: Enterable 'large Georgian house; ;  building'
        "It has a white-painted front door. "
        connector = frontDoor
    ;

 
    + frontDoor: Door 'front door;  white painted white-painted'
        "It has been painted white. "
        otherSide = frontDoorInside;

Exercise 9:  Now that we've covered both `Passages,Enterables` and the like, look up both these classes in the *Library Reference Manual*. Take a look at the properties and methods they define, and also the list of their subclasses. Then use the *Library Reference Manual* to explore these subclasses.
Exercise 10:  Add some stairs, passages and `Enterable` objects to your practice map (or create a new map for the purpose). Compile your game and try it out to make sure that everything works as you expect.

## 4.4. Coding Excursus 6 -- Special Things to Put in Strings

It may have occurred to you that there's a problem with putting a single-quote mark (or apostrophe) inside a single-quoted string, since if we write something like:

 
        local var = 'dog's dinner'; // THIS IS WRONG

The apostrophe in "dog's dinner" will look like the termination of the string, and the code simply won't compile. We can get round this problem in one of two ways. The first is by using an *escape* character, that is a character that warns the compiler to treat the character that follows it in a special way. In TADS 3 the escape character is the backslash (\). This lets us include a single-quote (or apostrophe) in a single-quoted string by preceding it with a backslash:

 
        
    local var = 'dog\'s dinner';  // but this is fine

We can similarly use the backslash to include a double-quote mark in a double-quoted string:

 
        "\"Right,\" says Fred. \"That's quite enough of that, I think!\"";     

Note that in this case there's absolutely no need to escape the apostrophe in "That's" because it occurs inside a *double*-quoted string (although it won't do any harm if we do escape it by preceding it with a backslash).

The alternative is to use triple-quoted strings, like this:

 
    local var = '''dog's dinner'''; 
 
    """"Right," says Fred. "That's quite enough of that, I
    think!"""";
    

Note that in the second example we have four double-quote marks in a row. Three of them mark the beginning and end of the string;
 the fourth is the double-quote mark we want displayed in the string.

There are a few other characters that have a special meaning when preceded by a backslash. Here's the complete list:

- `\"` - a double quote mark.

- `\'` - a single quote mark (or apostrophe).

- `\n` -- a newline character.

- `\b` -- a "blank" line (i.e. paragraph break).

- `\^` - a "capitalize" character;
 makes the next character capitalized.

- `\v` -  a "miniscule" character;
 makes the next character lower case.

- `\ `- a quoted space (useful if we want to force a certain number of spaces despite the output formatter's well-meaning attempts to tidy them up for us).

- `\t `-- a horizontal tab.

- `\uXXXX` -- the Unicode character XXXX (in hexadecimal digits)

There are also a number of special characters we can use in both single- and double-quoted strings:

- `<.p>` - single paragraph break

- `<.p0>` - cancel paragraph break

- `<./p0>` - cancel `<.p0>
- `<q>` - smart typographical opening quote ' or "

- `</q>` - smart typographical closing quote ' or "

These require a few words of further explanation. At first sight `<.p>` may appear to do the same thing as  `\b`, but there is a difference. A run of multiple  `\b` characters will produce multiple blank lines, whereas a run of consecutive `<.p>` tags will produce only a single blank line. This means, for example, we can end one string with  `<.p>`  and begin another with  `<.p>`  knowing that we'll only get one blank line between them even if the second is displayed directly after the first. The zero-spacing paragraph (or 'paragraph-swallowing tag') `<.p0>` suppresses any paragraph break that immediately follows. We can use it at the end of a string to force the next string to be displayed directly after it without a paragraph break even if the next string starts with  `<.p>`.

Finally, we can use `<./p0>` at the start of a string to force a paragraph break even if the immediately preceding string ended with a `<.p0>`.

The smart typographical tags `<q>` and `</q>` work by alternating between double and single quotation marks. So for example, if we included the following in our code:

        "<q>Right,</q> Fred declares. <q>That's quite enough <q>clever</q> talk for now.</q> ";

What we'd see displayed is:

    "Right," Fred declares. "That's quite enough 'clever' talk for now."

It's also worth mentioning that TADS 3 will convert a pair of dashes (--) in textual output to an n-dash , and three successive dashes to an m-dash.

Another special kind of thing we can put inside strings is HTML markup (or that version of HTML mark-up that TADS 3 recognizes). For a full account, see *Introduction to HTML TADS *(which is part of the standard TADS 3 documentation set). Some commonly used HTML tags are:

- `<b> ... </b>` - display text in `bold`
- `<i> ... </i>` - display text in *italics*

- `<u> ... </u>` display text underlined

- `<FONT COLOR=RED> ... </FONT>` - display text in red.

- `<a> ... </a>` display text as a hyperlink.

What the last of these actually does depends on what we put in the `href` parameter of the opening `<a>` tag. We *can *make it display a web page or any of the other things hyperlinks normally do, but the most common use in a TADS 3 game is to make it execute a command. For example, if the following statement were executed.

    
 
        "You could go <a href='go north'>north</a> from here. "; 

Then the player would see something like the following on screen:
 
    You could go north from here.

If the player then clicked on the north hyperlink, the command 'go north' would be copied to the command line and executed. This is so useful that TADS 3 defines a special function, aHref(), which helps us set this up. Instead of using the explicit HTML markup as in the previous example, we could obtain the same effect with:

        "You could go <<aHref('go north',' north')>> from here.";     

Or even with:
 
        "You could go <<aHref('go north',' north', 'Gonorth')>> from here. ";     

Which would cause the explanatory text 'Go north' to be displayed in the status bar at the bottom of the interpreter window when the player hovers the mouse over the hyperlink.

If you are planning for your game to be played over the web, you should always use `aHref()` rather than the `<a></a>` tags, since the latter will have their normal meaning when displayed in a browser (as a hyperlink to another web page, not a clickable shortcut to execute a command).

The above example introduces the final kind of special thing we can put inside strings, namely the special `<<>>` syntax . This is known as an *embedded expression *since it allows us to 'embed' (i.e. include) an expression inside a string. If the expression evaluates to a single-quoted string, or displays a string, then that string will be displayed at that point. If the expression evaluates to a number, then the number will be shown. It's not actually necessary for the expression to evaluate it to anything at all; it's perfectly legal (and often useful) for the embedded expression to be a function or method that we use at that point for its other effects (changing the game state in some way).

A typical use of the embedded expression syntax is in conjunction with the `?:` conditional operator, for example:

 
    hall: Room 'Hall'
        "The front door lies <<frontDoor.isOpen ? 'open' :'closed'>> to the north. "
        north = frontDoor;

But we could equally well embed a call to a method, property or function, e.g. (assuming we had defined an `openDesc` method on Door):

 
    hall: Room 'Hall'
        "The front door lies <<frontDoor.openDesc>> to the north. "
        north = frontDoor;

Strictly speaking, this doesn't do anything we couldn't do without it, since the previous example could be written as either:

 
    hall: Room 'Hall'
        desc()
        {
            "The front door lies;
            say(frontDoor.openDesc);
            "to the north. ";
        }
        north = frontDoor
    ;

Or:

 
    hall: Room 'Hall'
        desc()
        {
            say ('The front door lies' +  frontDoor.openDesc + 'to thenorth. ');  
        }
        north = frontDoor
    ;

But using the embedded expression is obviously more convenient. Indeed, it is so very convenient that it's a very frequently used feature of TADS 3.

In addition to embedding expressions, the `<<>>` syntax can be used to vary text in other ways. We can, for example, vary the text displayed using an `<<if>>
<<else if>> <<else>> <<end>>` construction such as:
 
    hall: Room 'Hall'
        "The front door lies <<iffrontDoor.isOpen>>open<<else>>closed<<end>> to the north. "
        north = frontDoor
    ;

We can also use various kind of `<<one of>> ...<<or>>` constructions to vary snippets of text randomly or cyclically, for example:
 
    multiColouredCrystal: Thing 'multi-coloured crystal'
        "As you glance at the crystal it seems to sparkle <<one of>>red<<or>>blue <<or>>green<<or>>orange<<or>>purple<<at random>>."
    ;

For a complete account of the `<<>>` constructs you can use in strings (and for further details of everything else we have covered in this section), see the String Literals chapter in the *TADS 3 System Manual*.
Although you can also use `<<>> `embedded expressions in single-quoted strings, there are one or two cases where they may not do exactly what you expect. For example, you should be aware of the difference between the property declaration:
 
    ball: Thing 'ball'
        "It's round, as most balls are, and looks <<colour>>. "

        colour = '<<if isDirty>>a kind of muddy brown<<else>>brightred<<end>>'
        isDirty = true
    ;

And the similar-looking property-assignment statement:
        
    ball.colour = '<<if isDirty>>a kind of muddybrown<<else>>bright red<<end>>';     

In the former case (the property declaration), the single-quoted string is evaluated every time the colour property is accessed, with the result that when `ball.isDirty

changes from `true` to `nil`, the change will be dynamically reflected in the description of the colour of the ball. In the latter case (the assignment statement) the string expression will be evaluated only once, at the point when the assignment is made, with the result that a *string constant* will be stored in the property `ball.colour.` In this latter case, the description of the colour of the ball will not change when the value of `ball.isDirty `is changed.

Provided you keep this distinction in mind, using embedded `<<>>` expressions in single-quoted strings should be perfectly safe. In most cases, they *will* do what you want. More vexing cases can occur when embedded expressions are used in single-quoted strings that are elements of an EventList, but we'll worry about that when we come to EventLists.

## 4.5. TravelConnectors

We've already seen that a `Door` is a special kind of `TravelConnector`. All the kinds of `TravelConnector` we've so far have been physical objects (doors, paths, stairs, corridors and the like), but it's perfectly possible (and often useful) to employ abstract `TravelConnectors` to control travel from one location to another even when there's no physical object involved. The common reasons for wanting to do this are:

- carrying out some side-effect of travel, such as displaying a message describing the travel.

- imposing some condition that determines whether or not the travel is to be allowed, e.g. the player might be able to squeeze through the narrow passage by himself, but not when he's carrying the bulky box or pushing the large trolley.

Except when the player character (or any other actor) is transported round the map by authorial fiat (e.g. using `me.moveInto(someDestination)`), travel round an adv3Lite game map is *always* via a `TravelConnector`. Whenever the player enters a movement command, whether it be a compass direction like `north` or `southwest`, or a command like `climb stairs` or `go through red door`, the library first determines what the relevant `TravelConnector` is and then translates the player's command into `conn`.`travelVia(gActor)` (where `conn` is the `TravelConnector` in question). This action in turn works out what the destination of the `TravelConnector` is and then moves the actor there (the full process is actually a bit more complicated than that, but the simple explanation will do for now).

A seeming exception to the rule that travel is always via a TravelConnector is where a directional property points directly to another room, e.g.:

 
    hall: Room 'Hall'
        "The kitchen lies to the south. "
 
        south = kitchen
    ;

    kitchen: Room 'Kitchen'
        "The hall lies to the north. "
        north = hall
    ;

But the exception is only an apparent one, since *`Rooms` are also `TravelConnectors`.* That is, `TravelConnector` is one of the classes from which `Room` inherits. A `Room` is a `TravelConnector` that always leads to itself.

 
`TravelConnector` defines a number of methods (and properties). The five most important ones to know about are:

- `destination --` the Room to which this TravelConnector leads.

- `canTravelerPass(traveler)` -- determines if the traveler is allowed to pass through this `TravelConnector` (return `nil` to disallow travel or `true` to allow it).

- `explainTravelBarrier(traveler)` -- if `canTravelPass()` prevents travel, this method is used to display a message explaining why the traveller can't pass.

- `noteTraversal(traveler)` -- carry out any side-effects of *traveler* traveling via this connector;
 by default we simply display the travelDesc if the traveler is the player character.

- `travelDesc` -- either a double-quoted string describing the travel or a method carrying out the side-effects of travel when the *traveler* is the player character;
 note that overriding `noteTraversal()` without calling `inherited` will disable this.

Some additional methods and properties it's also quite useful to know about are:

- `getDepartingDirection(traveler)` -- returns the direction in which *traveler* would need to go to travel via this connector from the traveler's current location.

- `travelVia(traveler)` -- causes *traveler* to travel via this connector. This can be useful to call on a Room, since in that case it also causes a display of the description of the room traveled to.

- `isConnectorListed` -- (true or nil) determines whether this `TravelConnector` is to be listed in any list of exits (by default it is if it's visible).

- `isConnectorApparent` -- (true or nil) determines whether this TravelConnector is apparent (i.e. not concealed and hence visible under proper lighting conditions).

- `IsConnectorVisible` -- (true or nil) determines whether this TravelConnector is visible;
 by default it is if it's apparent and the lighting conditions are adequate (i.e. either the location or the destination is lit).

- `travelBarriers` -- a single `TravelBarrier` object, or list of `TravelBarrier` objects, that applies to this `TravelConnector` (we'll say more about `TravelBarriers` below).

- `sayDeparting (traveler) `-- display a message saying that traveler (generally an NPC observed by the player character) is departing via this connector.

There are other methods and properties besides; if you want the full story look up `TravelConnector` in the *Library Reference Manual*.

Since `Passage` is a kind of `TravelConnector`, we can illustrate some of these methods on a `Passage` object:

 
    cave: Room 'Cave'
        "A narrow tunnel leads south. "
        south = narrowTunnel
    ;

 
    + narrowTunnel: Passage 'narrow passage'
        "It looks only just wide enough for you to squeeze through. "
        canTravelerPass(traveler)
        { 
            return !bigHeavyBox.isIn(traveler);
        }
 
        explainTravelBarrier(traveler)
        {
            "You'll never get through the narrow passage carrying thatbig heavy box! ";
        }
 
        travelDesc = "You just manage to squeeze through the narrowtunnel. "
    ;
    
Most of the time the direction properties of a room (north, east, south etc.) will point to TravelConnector objects of one sort or another (Rooms, Doors, Passages etc.), assuming they point to anything at all. But it's also legal for the direction property of a room to point to a double-quoted string, a single-quoted string or a method. If it points to a string, the string will be displayed (this can be used, for example, to explain why travel in that particular direction isn't possible). If it points to a method, the method will be executed (this could be used to carry out something other than standard travel, such as killing the player character if he sets off in a direction that leads him or her to fall down a mine shaft). If a direction property points to a method, that direction will be shown in the exit-lister, but if it points to a single-quoted or double-quoted string it won't be. If a direction property points to a method or double-quoted string then before travel notifications will be issued before the method is executed or the string displayed;  these may result in the display or method being forestalled (we'll return to travel notifications in Chapter 13 below);  but no travel notifications are issued when a direction property points to a single-quoted string. The three cases illustrated below are thus subtly different:

 
    ledge: Room 'Ledge'
        "This narrow ledge runs round the side of the mountain. "

        east()
        {
            "You walk a short way to the east but you're forced toturn back when the path narrows to nothing. ";
        }
        north = "Better not; there's a sheer drop that way. "
        south = 'You can\'t walk through solid rock! '
    ; 

In this example, east will show up as a possible direction of travel in the exit-lister, but north and south will not. Attempts to travel either east or north will result in before travel notifications being issued, but an attempt to travel south will not. This could make a difference if the player character were in the company of an NPC (non-player character) who might want to intervene in the player characters's travel attempts;  the NPC would have the opportunity to do so in the event that the player character attempted futile travel to the east or perilous travel to the north, but not if the player typed SOUTH, a direction which the player character could not even attempt.

Using a method that simply displays something as the value of a direction property can thus be a useful way to add "soft boundaries" to the map, by making it appear that the game map is bigger than it is while explaining why the player character either cannot or does not want to travel in a direction that would in fact take him or her off your map.

Using a string or method to curtail travel is fairly straightforward;
 at first sight it may seem a lot more cumbersome to use a TravelConnector for such a purpose, since (on analogy with the various `Passage` objects), you might suppose we would have to do this kind of thing:

 
    forestClearing: Room 'Forest Clearing'
        "A variety of paths runs of in all sorts of directions. "
        north = forestStreamConnector
    ;

    forestStreamConnector: TravelConnector
        destination = byStream
        canTravelerPass(traveler)
        {
            return boots.isWornBy(traveler);
        }

        explainTravelBarrier(traveler)
        {
            "That way is too muddy to walk down without a pair of sturdyboots. ";
        }
    ;

It would indeed be tedious and verbose to have to do this (although it would work), but fortunately we don't have to. The code can be made much more concise by using *anonymous nested objects*. We'll explain anonymous objects in more detail in the next chapter, but for now all we need to know is that we don't need to give every object a name (so it can be *anonymous*) and that we can define an anonymous object directly as the value of the property of another object, in which it is said to be *nested*. Using

these two techniques together we can compress the previous example to:

 
    forestClearing: Room 'Forest Clearing'
        "A variety of paths run off in all sorts of directions. "
        north: TravelConnector
        { 
            destination = byStream
            canTravelerPass(traveler) { return boots.isWornBy(traveler); }
 
            explainTravelBarrier(traveler)
            {
                "That way is too muddy to walk down without a pair of sturdyboots. ";
            }
        }
    ;

Contrary to possible appearance, we haven't actually reduced the numbers of objects involved by doing this, we've just defined them much more succinctly. Also, by keeping everything together on the `forestClearing` object, we've probably made it much easier to see what's going on.

In this example, the player character is preventing from going north from the clearing unless s/he's wearing the boots. If we had several muddy paths on which we wanted to impose the same condition, it would be tedious to have to code essentially the same thing on all the relevant `TravelConnectors`. An alternative is to define a `TravelBarrier` object, e.g.:

 
    bootBarrier: TravelBarrier
        canTravelerPass(traveler, connector) { returnboots.isWornBy(traveler); }
        explainTravelBarrier(traveler, connector)
        {    
            "That way is too muddy to walk down without a pair of sturdyboots. ";
        }
    ;

Then we can just attach this `bootBarrier` object to every `TravelConnector` to which it applies, e.g.:

 
    forestClearing: Room 'Forest Clearing'
        "A variety of paths run off in all sorts of directions. "
        north: TravelConnector
        {
            destination = byStream
            travelBarriers = bootBarrier
        }
    ;

Another reason to define `TravelBarriers` might be if there were several different reasons why we might want to block travel on the same connector. Suppose, for example, that we want to stop the player going north either if s/he's not wearing the boots or if s/he's left the map behind. Since we want the message explaining why travel isn't allowed to reflect the reason we're stopping it, it would be convenient to implement them as two different `TravelBarriers` (rather than putting a compound

condition in `canTravelerPass()` and then have `explainTravelBarrier()` work out which condition failed before displaying its message):

 
    mapBarrier: TravelBarrier
        canTravelerPass(traveler, connector) { returnmap.isIn(traveler); }
        explainTravelBarrier(traveler, connector)
        {
            "You'd better not go any further that way without a map. "; 
        }
    ;
 
    forestClearing: OutdoorRoom 'Forest Clearing'
        "A variety of paths run off in all sorts of directions. "
        north: TravelConnector
        { 
            destination = byStream
            travelBarriers = [bootBarrier, mapBarrier]
        }
    ;

This uses a feature of the TADS 3 language we haven't been formally introduced to yet, namely a list. All we need to know about lists at the moment is that they are special data type that allows us to group a number of items together, that they're enclosed in square brackets, and that list elements must be separated by commas. We'll fill in more details later.

One further point: in most cases the *traveler* parameter on the methods we've been considering will be the actor doing the travelling. But it's possible that the actor may be in or on a vehicle, in which case the *traveler* parameter will be the vehicle doing the travelling. To make something a vehicle we set its `isVehicle` property to `true`;  we also need to make it possible for actors to get on or in it, which is something we'll come to later.

Exercise 11:  Let's take it for granted now that you'll look up these `TravelConnectors` and `TravelBarriers` in the *Library Reference Manual*, and carry straight on with suggesting a game you can implement to try them out.

Try creating a game based on the following specification. The game starts in a hall, from which there are four exits. One exit leads down via a flight of stairs to a cellar. One leads south via a path to the kitchen. One leads north through the front door. And one leads east directly into the lounge, but the description of the hall suggests that you go through an archway to get there.

From the kitchen a passageway leads north back to the hall, but there's a secret panel to the east and a laundry chute to the west (you can go down the chute but not back up it). In the kitchen is a flashlight which can be used to explore dark rooms.

The cellar is a dark room, from which a flight of stairs leads back up into the hall. On the west side of the cellar is the bottom end of the laundry chute, from which the player can only emerge (but not go back up again).

In addition to the exit west back out to the hall (which should describe the player character returning to the hall when s/he goes that way), the lounge has an oak door leading south. On the other side of the oak door is a study. On the west wall of the study is a bookcase which is in fact the other side of the secret panel on the east wall of the kitchen (so that opening the bookcase allows direct access between the kitchen and the study). In the study is a pair of special shoes (make them of class Wearable).

The front door leads north into a drive. To the north of the drive is a road, but the player character doesn't want to go there. To the west lies a wood that's so dense that if the player character tries to enter it s/he soon has to turn back. An oak tree stands in the middle of the drive and the player can climb it.

From the drive a path leads east onto a lawn. To east and south the lawn is enclosed by a bend in the river, but a path leads west back to the drive. Also, there's a boat moored up on the river, and you can board the boat to the east. Boarding the boat from the lawn takes you to its main deck. From there you can go starboard back to the lawn or aft to the main cabin. Once in the main cabin you can go out or forward to the main deck, or port into the sleeping cabin.

Across the river is a meadow, but you can only walk across the river if you're wearing the special shoes, and of course you can't ride the bike across the river.

A bicycle is parked in the drive. The player character can ride the bicycle on the level, but not up the tree or up or down stairs or around the boat. The player character can carry the bicycle but can't climb the tree while carrying the bicycle.

Even implementing a game as basic as this may require some features of TADS 3 and avd3Lite we haven't encountered yet to do properly, so don't worry if there are some things you can't quite get to work fully. Just see how far you can get, with the aid of one further hint: this is how you might define the bicycle in outline:

 
    bike: Platform 'bicycle; ; bike'
        isVehicle = true
    ;

Filling in such details as the description is left as an exercise for the reader. When testing your game, note that there's no `ride `command defined in the library. To try riding the bike around, issue a `get on bike` command, and then use travel commands in the normal way (such as `north` or `go through door`). The player character should then travel around on the bike (until you issue a `get off bike` command).

If you like, you can compare your version with the Example 11.t file in the learning directory.

[&laquo; Go to previous chapter](3-putting-things-on-the-map.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](5-containment.html)
