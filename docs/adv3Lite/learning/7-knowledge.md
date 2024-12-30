---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 7. Knowledge

## 7.1. Seen and Known

### 7.1.1. Tracking What Has Been Seen

It is sometimes useful to keep track of what objects the player character has seen, and which he or she knows about. This can be particularly useful when we come to implement conversations (where what the player knows may well affect what's said) or hint systems, but it can be relevant to other aspects of the game besides.

An adv3Lite game keeps track of what the player character has seen. By default the `seen` property of every object is set to true when the player sees it. The library is pretty good at catching most situations in which a player first sees something, but it may miss one or two, in particular when we move an object into the player's location with `moveInto()`. The obvious way to mark an object as having been seen in such a situation (assuming the player character can see it) is simply to set the `seen `property to true. A safer way is to use `gPlayerChar.setHasSeen(obj)` (where *obj* is the object the player character has just seen);  this can be abbreviated to the macro `gSetSeen(obj)`. Likewise, while we might test `obj.seen` to see whether *obj* has been seen, it's probably a good idea to get into the habit of using `gPlayerChar.hasSeen(obj)` or `me.hasSeen(obj)`.

The reason for this is that while the `seen` property is the default property used by the library to track what the player character has seen, we can change it to something else. The reason we might want to do this is to track what NPCs have seen separately from what the player character has seen;
 by default the library uses the `seen` property for every actor in the game, although it only actively tracks what the player character has seen. By default, then, `actor.hasSeen(obj)` will return the same value for every actor in the game, which will be the correct value only for the player character. Likewise, `actor.setHasSeen(obj)` will set the same property (`seen`) for every actor in the game, which is almost certainly not what we want if we're bothering to track what actors other than the player character have seen.

If we want to track what different actors have seen (which, in the majority of games, we probably won't) we can redefine what property to use for the purpose. We do this by changing the actors' `seenProp` property to something other than `&seen`, the default. For example, if want to keep track of what two NPCs, Bob and Carol, have seen, we might define:

 
    bob: Actor 'Bob; ;  man;
 him'
        
    seenProp = &bobHasSeen
 
    ;

 
    carol: Actor 'Carol; ;  woman;
 her'
 
        seenProp = &carolHasSeen;

 
    modify Thing
 
        bobHasSeen = nil
    carolHasSeen = nil
 
    ;

Note the ampersands (&) before the property names here. If we wrote `seenProp= bobHasSeen` we'd be setting the value of `bob.seenProp` to the value of `bob.bobHasSeen`, which isn't what we want at all. What we want to do is to tell the game to use the `bobHasSeen` property of `Thing` to keep track of what things Bob has seen; for this purpose we need to use a property *pointer*, which is what we obtain by preceding the property name with &.

Once we've done this `bob.setHasSeen(obj),` `carol.hasSeen(obj)` and the like will use the appropriate properties of Thing, so we can keep track of what Bob and Carol have seen separately from what the player character has seen. Note, however, that the library won't actually mark things as seen by Bob and Carol for us;  that's something we'll have to take care of for ourselves by calling `bob.setHasSeen(obj) `and `carol.setHasSeen(obj)` whenever Bob and Carol see things.

### 7.1.2. Tracking What Is Known

People don't necessarily have to have seen something to know about it, so we can keep track of what the player character (and optionally, other NPCs) know about separately from what they have seen. `Thing` defines a `familiar `property, analogous to the `seen` property which we have just met. We can set the `familiar `property for the player character using `gPlayerChar.setKnowsAbout(obj)` or the macro `gSetKnown(obj)`. We can similarly test what the player character knows about using `gPlayerChar.knowsAbout(obj)` or, often enough, `me.knowsAbout(obj)`. By default, `familiar` is `nil` on everything, but if the player character starts out the game knowing about several things, we can define `familiar` as `true` on those objects.

So why do we call this property `familiar` rather than `known`? The reason is that the player characters is reckoned to know about something either if it is `familiar` or if has been `seen`. There is a `known` property, but it's true if either `familiar` is `true` or `seen` is `true`.

Just as we can keep separate track of what different NPCs have seen, we can also keep track of what they know, this time by overriding their `knownProp`:

 
    bob: Actor 'Bob; ;  man;
 him'
        
    seenProp = &bobHasSeen
 
        knownProp = &bobKnows
 
    ;

 
    carol: Actor 'Carol; ;  woman;
 her'
 
        seenProp = &carolHasSeen
     knownProp = &carolKnows
 
    ;

 
    modify Thing
    bobHasSeen = nil
 
        bobKnows = nil
    carolHasSeen = nil
 
        carolKnows = nil;

Note that even if we're not particularly interested in tracking what NPCs have seen, we have to define a separate `seenProp` for them if we want to track their knowledge separately (or else test the `bobKnows` and `carolKnows`  properties directly). The reason for this is that `actor.knowsAbout(obj)` will be true, as we've just said, either if the appropriate `knownProp` is true or if the appropriate `seenProp` is true. But if we hadn't overridden `bob.seenProp`, then it would still be `seen`, which keeps track of what the player character has seen;  this would mean that `bob.knowsAbout(obj)` would be true for every *obj* that the player character has seen.

One way round this if we want to keep track of what NPCs know about, but not what they have seen (which may be quite a common requirement), is to override `seenProp` for the player character only, e.g.:

 
    me: Actor
     seenProp = &meHasSeen
 
    ;

 
    modify Thing
     meHasSeen = nil
 
    ;

If we do that, the player character will use a different property to track what s/he has seen from that used by all NPCs (which will still be using `seen`). There is then no need to define a separate `seenProp` for the NPCs unless we actually want to track what they've each individually seen. But then we must remember to use `gSetSeen(obj)` and `me.hasSeen(obj)` to set and test what the player character has seen, rather than using the `seen` property. This is one reason why it's good to get into the habit of using these methods rather than manipulating the `seen` property directly. Another is that if we're half-way through a game and then decide we want to start tracking NPC knowledge separately it will be so much easier if we haven't used `familiar` and `seen` directly in our code up to that point.

### 7.1.3. Revealing

There is one more mechanism for keeping track of what is known in an adv3Lite game, which we may call *revealing. *This simply lets us declare an arbitrary string tag as having been revealed, and later test whether or not it has been revealed. To declare something as revealed we simply use the `gReveal()` macro, in the form `gReveal('tag')`, where 'tag' can be any string we like. To test whether something has been revealed we use the `gRevealed()` macro, in the form `gRevealed('tag')`. We can also reveal something when a string is displayed using `<.reveal tag>`. For example:

    
 
        "<q>Have you heard about the lighthouse?</q> Bob asks
anxiously.
        
    <.reveal lighthouse>";
    
 
        
        ...
 
        if(gRevealed('lighthouse'))
 
     
 
        "<q>Tell me about the lighthouse,</q> you ask. ";

 
        ...
 
        box: OpenableContainer 'box'
        dobjFor(Open)
    
 
    { 
        check()
 
        
 
    { 
        
        if(isStuck)
 
        
        
 
        "Something seems to be stopping it open. <.revealbox-stuck>";
 
        }
    
 
        
        action()    
 
    {
 
        
        
     inherited;
 
        
        gReveal('box-opened'); 
 
        
        }
 
     }

 
        
    isStuck = true
    ;

As these examples suggest, this mechanism is probably most useful for conversation (for which it was devised) and hints (the hints system, which we'll look at in a later chapter, could display a hint about getting the box open once 'box-stuck' had been revealed and remove the hint again once 'box-opened' had been revealed). But of course you're entirely free to use this mechanism for any purpose you find helpful.

By default, the library simply records that fact *that* a particular tag has been revealed. We can, if we like, associate more information about the revealing of tags by overriding the `setRevealed(tag)` method on `libGlobal`, perhaps to store the turn on which the revelation took place, or the location, or some more complex set of data encapsulated in an object of our own devising.

## 7.2. Coding Excursus 11 -- Comments, Literals and Datatypes

This is a convenient point at which to tie up a few loose ends, covering a number of things that have been presupposed up to now without being formally explained, and introducing one or two new things it's useful to know about when writing TADS 3 code.

### 7.2.1. Comments

We can insert a comment into TADS source code in one of two ways. A single line comment is any text starting with `//` and running on to the end of the line. A block comment is any text starting with `/`* and ending with *`/`. Block comments may not be nested. Comments are ignored by the compiler, and so can contain anything we like. We can (and probably should) use comments both to explain our code to others (if anyone else might read it) and, perhaps even more importantly, to explain it to ourselves, or at least to remind ourselves what we were trying to do, why and how.

 
    // This is a single-line comment.
 
    local var = nil;
 // this is another single-line comment.
 
    /* This is a block comment spanning a single line */
 
    /* This is a block comment spanning several lines;
 
    it can go on for as long as we like, but we can't
 
        nest another block comment inside it, as the block
    comment will be assumed to come to an end as
 
        soon as the compiler encounters */
If we are using the editor built into Windows Workbench, it can automatically format block comments neatly for us. It can also add and remove `//` comment markers to the beginning of a selected set of lines, this can be useful for 'commenting out' blocks of source code, i.e. temporarily disabling blocks of code for testing or debugging purposes.

### 7.2.2. Identifiers

An *identifier* is the name of an object, class, function, property, method, or local variable. An identifier must start with an alphabetic character or underscore, which must be followed by zero or more alphabetic characters, underscores, or the digits 0-9. TADS 3 identifiers are case-sensitive, so that `Apple`, `apple`, and `aPPle` would refer to three different things. The normal convention is that class names and macro names start with capital letters, except for macros that behave like pseudo-global variables, which start with a lower case g.

For further information see the articles on 'Naming Conventions' and 'Source Code Structure' in the *TADS 3 System Manual*.

### 7.2.3. Literals and Datatypes

TADS 3 recognizes the following datatypes, represented by the following kinds of literal values:

- `nil `and `true`: where `nil` is a false or empty value.

- Integer: -2147483648 to + 2147483647

- Hexadecimal: 0xFFFF

- Enumerators: e.g. `enum blue, red, green

- Property ID: `&myProp

- Function Pointer: e.g.` func  

- List: `[item1, item2, item3, item4, ... item*n*]
- BigNumber: e.g., 12.34 or 1.25e9;
 can store up to 65,000 decimal digits in a value between 1032767 and 10-32767.

- String: an ordered set of Unicode characters. A string constant is written by enclosing a sequence of characters in single quotation marks, e.g. `'Hello World! '

We've already met strings, integers, nil and true;  we'll say more about lists in the next chapter, and something about Enumerators and Property IDs below.  BigNumber is one of those things that's nice to have, but which we probably won't use much in Interactive Fiction;  for more information see the article on BigNumber in section IV of the *TADS 3 System Manual*. For more information on TADS 3 datatypes in general, see the article on 'Fundamental Datatypes' in the *System Manual*.

### 7.2.4. Determining the Datatype (and Class) of Something

It's often useful to be able to determine what type of data something is. We can do this with the function `dataType(val)`, where *val* is the data item we want to test. This function returns one of the following values:

- `TypeNil
nil

- `TypeTrue
true

- `TypeObject
object reference

- `TypeProp
property ID

- `TypeInt
integer

- `TypeSString
single-quoted string

- `TypeDString
double-quoted string

- `TypeList
list

- `TypeCode
executable code

- `TypeFuncPtr
function pointer

- `TypeNativeCode`  native code

- `TypeEnum
enumerator

If an identifier turns out to be an object, we can also determine its class using the methods `ofKind`() and `getSuperclassList().` The method `obj.ofKind(cls)` returns true if *obj* inherits from *cls* anywhere in its inheritance hierarchy. The method `obj.getSuperclassList() `returns a list of the classes with which *obj* was defined.

For example, suppose we had (in outline) the following definition:

 
    box: Heavy, OpenableContainer
 
    ;

Then `box.getSuperclassList()` would return `[Heavy,OpenableContainer]`, while `box.ofKind(Heavy)`, `box.ofKind(OpenableContainer)`, `box.ofKind(Container)` and `box.ofKind(Thing)` would all return `true` (because `OpenableContainer` descends from `Container` which in turn descends from `Thing`). On the other hand, `box.ofKind(Food)` or `box.ofKind(Actor)` would both return `nil`.
Incidentally, there is also a `setSuperclassList()` method which allows us to change the superclass list of an object at run-time. For example, suppose `handle` starts out as a component of `briefcase`, but it can be broken off to form a separate item. We might then want `handle` to perform like an ordinary `Thing`, and we could use `handle.setSuperclassList([Thing])` to bring this about.

One other thing we may wish to do is to is to determine the datatype of a property without evaluating that property. We can do that with the `propType() `method. We call this on the object or class we're interested in, passing a property pointer as the single argument. The return value is one of the `TypeXXXX` values listed above. For example, we could use `box.propType(&name)` to determine whether the `name` property of `box` was simply a single-quoted string, or a piece of code (which might return a single-quoted string).

For further details see the chapters on Reflection, Object and TadsObject in the *Library Reference Manual*.

### 7.2.5. Property and Function Pointers

If we precede the name of a property or method with an ampersand we turn it into a property pointer. If we give the name of a function without its argument list or any brackets we obtain a function pointer. These pointers are useful when we want a reference to the property or function itself rather than whatever the property, method, or function evaluates to.

When we do want to evaluate (or execute) the property or method, we surround the pointer name in parentheses and then follow it with the argument list.

For example, suppose we define an object with a number of different methods so:

 
    myObj: object
 
        double(x) { return x * 2;
 }
 
    triple(x) { return x * 3;
 }

 
        quadruple(x) { return x * 4;
 }
 
    calculate(prop, x)  {
    return self.(prop)(x);
    }

 
    ;

The statement `local a = myObj.calculate(&triple,2);
 `will set a to 6. So will the following pair of statements:
 
    local meth = &triple;

 
    local a = myObj.(meth)(2);

This is used, for example, in the definition of `hasSeen(obj),` which is defined as:

 
    hasSeen(obj) { return obj.(seenProp);
 }

Note the difference between that and

 
    hasSeen(obj) { return obj.seenProp;
 }
 
    Which would erroneously return a pointer to the `seen` property (or whichever other property had been defined), instead of the *value* of the `seen` property.

We thus use property pointers when we want to reference properties (or methods) *indirectly*, typically when we need to write code that might use more than one property of some object, but we don't know which property it will be.

A function pointer is similar, but the syntax is a little different. To obtain a function pointer, we don't precede the function name with an ampersand, we just omit the brackets and the argument list following it. Thus with the following definition:

 
    halve(x)
 
    { 
    return x/2;

 
    }

 
    doSomething(){
 
        local a = halve(4);
    local f = halve;

 
        local b = f(6);
}

When `doSomething()` executes, a will evaluate to 2, f will evaluate to a function pointer referencing the `halve()` function, and b will evaluate to 3.

There's one subtlety to note here;  we can assign a function pointer to an object property, but it may not work quite as we expect:

 
    myObj:
 
        funcPtr = halve
    half(x) { return (funcPtr)(x);
 }
 //
 
    This won't work!
 
    ;

This will compile, but will probably produce a run-time error if we call `myObj.half()`. To make it work as we want, we first need to store the function pointer in a local variable:

 
    myObj:
    funcPtr = halve
 
        half(x)
     {
 
        
    local f = funcPtr;
 
        return (f)(x);
 // but this is fine.
 
        }
 ;

### 7.2.6. Enumerators

It is sometimes useful to have constants with meaningful symbolic names. One way we can do this is by defining a number of macros, e.g.:

 
    #define red 1
 
    #define blue 2#define green 3
This is useful if we want our constants to have numerical values, and the numeric values are meaningful, but if we just want to test whether some variable or property is equal to some symbolic constant value, we can use enumerators instead. In this case, we could just define:

 
    enum red, blue, green;

We can assign these values to properties and variables, and test for equality or inequality, e.g.:

 
    local colour = blue;

 
    if(colour == blue)
    
 
        "It's blue! "; 
 
    if(colour != red)
 
        "It's not red! "; 
That's just about all there is to enumerators, but there are few further points worth noting:

- A `enum `statement is a top-level statement that can appear anywhere outside an object, class or function definition.

- Enumerators are a distinct datatype;
 enumerators do not have a numerical value, and they cannot be mixed with numbers in arithmetic operations or

comparisons.

- There is no relation between enumerators apart from the fact that they *are *all enumerators, and so can legally be compared with one another for equality or inequality. Declaring several enumerators in one statement does not establish any particular relationship between them.

- Enumerator constants can be used in the case parts of a switch statement provided the switch variable is of enumerator type.

For further information, see the article on 'Enumerators' in Part III of the *System Manual*.

## 7.3. Topics

Earlier in the chapter we saw how we could track the player's (and optionally other characters') knowledge of the things in the game. But physical objects aren't the only things people know about (or can think about, discuss, look up and so forth). People can also know about (or think about, discuss, look up and so forth) abstract topics such as the weather, Chinese politics, the meaning of life, astronomy, and sympathetic magic. If any of these figure in our game, we need to represent them somehow, but they're not physical objects. For this purpose we use the `Topic` class.

There's only one property we need to define on a Topic, namely its `vocab `(which works in precisely the same way as the `vocab` property on Thing). So we might, for example, define:

 
    tWeather: Topic vocab= 'weather'; 
 
    tChinesePolitics: Topic vocab = 'chinese politics'; tMeaningOfLife: Topic vocab = 'meaning of life'; 
Since we always need to define the `vocab `property on a `Topic`, as you might imagine we can do so by means of a template:

 
    tWeather: Topic 'weather'; tChinesePolitics: Topic 'chinese politics'; 
 
    tMeaningOfLife: Topic 'meaning of life'; tMagicFormula: Topic 'magic formula' @nil; 
There is, by the way, no need to start the name of `Topic` objects with the letter t, but it's often useful to be able to distinguish `Topics` from physical objects in our code, so it's a good idea to adopt some such convention (you might prefer to use the slightly more explicit `top `as the identifying prefix, for example).
The other commonly useful property `Topic` defines is `familiar`, which has the same meaning as the `familiar `property on `Thing`. Whereas `Thing.familiar` is nil by default, `Topic.familiar` starts out as true, so that if there are topics the player character starts the game not knowing about, we need to change `familiar` to nil on

those topics;
 we can do this via the template as in the `tMagicFormula` example above. We can use `gSetKnown()` and all the rest with `Topics` as well as `Things`, but we need to remember that if we override `knownProp` on any actor(s),  we need to make the corresponding changes (to allow for the new `knownProp`) on both `Thing` and `Topic`.

There are two other kinds of thing besides abstract topics we can usefully implement as `Topics`. The first is physical objects and people who are mentioned in the game but don't actually appear within it as objects in their own right;  for example our game may mention William Shakespeare or the planet Uranus or the lost Ark of the Covenant without any of them making any physical appearance in the game;  such objects are probably best implemented as `Topics`. Topics can also be useful when we want to talk about a group of objects that are implemented in the game;
 suppose, for example, that our game implements a red ball, a blue ball, a green ball and an orange ball, but at some point we want our player character to be able to discuss coloured balls in general with some NPC;
 it may well prove convenient to define a `tColouredBalls Topic` to do the job.

At this point it's probably worth mentioning that neither the `topicDobj` grammar token nor the `gTopic` pseudo-variable directly references a `Topic` object. They instead refer to a `ResolvedTopic` object. Or to put it a bit more carefully, when we define an action that uses the `topicDobj` or `topicIobj` token in its `VerbRule` (a `TopicAction` or `TopicTAction`), the object matching the `topicDobj/topicObj` token, obtainable through the `gTopic` pseudo-variable, will be of class `ResolvedTopic`.

If we want to get at the actual simulation object or `Topic` that was (probably) matched, we can use the `getBestMatch()` method, i.e. `gTopic.getBestMatch() `or just` gTopicMatch`. This is only *probably* the simulation object or `Topic` in question, since a `ResolvedTopic` actually maintains a list of possible matches (in its `topicList` property) and `getBestMatch()` somewhat arbitrarily returns the first item from this list. This is generally good enough for most purposes, however. For more details, look up `ResolvedTopic` in the *Library Reference Manual*.

To get at the original text the player typed that the `ResolvedTopic` is matching, we can use the `getTopicText() `method, i.e. `gTopic.getTopicText()`. We can use the macro `gTopicText` to return this value, converted to lower case.

Finally, note that a `TopicAction` or `TopicTAction` will always succeed in returning a `ResolvedTopic` even if what the player typed matches no `Thing` or `Topic` defined in the game. In this case `gTopic.getTopicText() `will return that part of the player's command that matched the `topicXobj` token, but `gTopic.getBestMatch()` will return a Topic newly created to match the player's input.

## 7.4. Coding Excursus 12 -- Dynamically Creating Objects

So far, all the objects we've encountered have been statically defined in our source code. But it's also possible to create objects on the fly at run-time. At its simplest this is just a matter using the keyword `new` plus the class name.

For example, suppose we wanted to create an apple tree that goes on dispensing apples for as long as the player attempts to pick them. We could do something like this:

 
    DefineTAction(Pick);

 
    VerbRule(Pick)
    'pick' singleDobj
 
        : VerbProduction
    action = Pick
 
        verbPhrase = 'pick/picking (what)'
    missingQ = 'what do you want to pick'
 
    ;

 
    modify Thing  dobjFor(Pick)
 
 
    { 
     preCond = [touchObj]
 
        
    verify() { illogical(cannotPickMsg);
 }
  }

 
        cannotPickMsg = '{That dobj}
 {is}
 not something {i}
 {can}
 pick. '; 
 
    class Apple: Food 'apple'
 
    ;

 
    orchard: Room 'Orchard'
 
        "An apple tree grows in the middle of the orchard. "
 
    ;

 
    + tree: Fixture 'apple tree'
    ;

 
    ++ Fixture 'apple'
 
        dobjFor(Pick)
    {
 
        
        verify() { }
 
        action()
 
        
 
    { 
        
     local apple = new Apple;

 
        
        
    apple.moveInto(gActor);
 
        
 
        "You pick an apple from the tree. ";

 
        
        }
    }

 
    ;

Here the `Fixture` represents the apples still on the tree. The command `pick apple `will select this object in preference to any apples that have already been picked (since picking a picked apple is illogical);
 the `actionDobjPick()` method will then create a new `Apple` object and move it into the player's inventory. In principle the player could

go on picking apples forever;
 in practice the game will probably start grinding to a halt after a few dozen apples have been picked (not because they're dynamically created, but because you end up with so many objects in scope at once).

When we use the `new` keyword to create an object the object's `construct()` method is called immediately after it has been created. This method can take as many parameters as we like, which can be used to initialize the object. For example, suppose we wanted to be able to create a number of different pieces of fruit dynamically, we could define a `Fruit` class thus:

 
    class Fruit: Food
     construct(fruitName, nutrValue)
    
 
    { 
        name = fruitName;

 
        
        nutritionValue = nutrValue;
 
        vocab = name + '; ; fruit '; 
 
        
        inherited();
 
    }

 
        nutritionValue = 0
 
        dobjFor(Eat)
     {
 
        
        action()  
 
    {
 
        
     
 
        "You eat <<theName>>;
 it tastes jolly good. ";
 
        
     gActor.strength += nutritionValue;

 
        
        
    moveInto(nil);
 
        }

 
        }
;

We could then create different pieces of fruit with code like:

 
        local x = new Fruit('banana', 2);   local y = new Fruit('apple', 3); 
 
        local z = new Fruit('orange', 4); 
As an alternative, we could use the `createInstance()` method, called directly on the Fruit class:

 
        local x = Fruit.createInstance('banana', 2); 
 
        local y = Fruit.createInstance('apple', 3);   local z = Fruit.createInstance('orange', 4); 
For more information, see the chapters on 'Dynamic Object Creation' and 'TadsObject' in Parts III and IV of the *System Manual*.

## 7.5. Consultables

One place where we might look for knowledge, in works of IF as well as in real life, is in books and book-like objects. These are the kinds of thing that can be used in commands like `consult cookery book about pancakes` or `look up tads in encyclopaedia`.

The mechanism adv3Lite provides for implementing such objects uses two classes of object: `Consultable` to represent the book (or other reference work) we're consulting, and `ConsultTopic` to represent the topics we want the player to be able to look up. We can also define a `DefaultConsultTopic` to provide a catch-all response when the player tries to look up something we haven't provided for. We then locate the `ConsultTopics` (and the `DefaultConsultTopic`) inside the `Consultable`.

A `ConsultTopic` can be matched either on an object (a `Thing` or `Topic`), or on a regular expression. If we want to it to match on an object, we define its `matchObj` property to be the object in question;
 if we want it to match on a regular expression we instead define its `matchPattern` property to be a single-quoted string containing the regular expression we want to match. We can, if we like, define both these properties, and then the `ConsultTopic` will match on either (if you're not at all familiar with regular expressions, don't worry about them just yet;  if you are, but want to know how they're implemented in TADS 3, look at the 'Regular Expressions' chapter in Part IV of the *System Manual*). The `matchObj` property can also contain a list of objects;  the `ConsultTopic` will then match on any one of those objects.

The information that's to be displayed when the player looks up a particular topic is defined in the `ConsultTopic's` `topicResponse` property. If we want a topic to be only conditionally available, we can set its `isActive` property to the relevant condition (we could, for example, use this to prevent the player from looking up something he's not meant to know about yet).

This should become clearer with a couple of examples:

 
    + Consultable 'green book'
    readDesc = "It's rather too long to read from cover to cover, but
you 

 
        
    could try looking up particular topics of interest. ";

 
    ++ ConsultTopic
 
        
     matchObj = tWeather
        topicResponse = "The weather in these parts is frequentlyvariable. "

 
    ;

 
    ++ ConsultTopic
        matchObj =[redBall, greenBall]
 
        
     topicResponse = "According to the book, both the green ball andthe
        
     red ball are pretty much round. "
 
    ++ ConsultTopic
 
        
     matchPattern = '<alpha>{1,3}
<digit>{1,3}
'
        topicResponse = "According to the green book this could theserial

 
        
        number of a type 4 widget-spangler. "
 
    ;

 
    ++ DefaultConsultTopic
        topicResponse = "The book doesn't seem to have anything to sayon that

 
        
        topic. ";

If the player issues the command `look up weather in green book` or `consult green book about the weather` then (assuming the `tWeather` `Topic` has been suitably defined), the game will respond with "The weather in these parts is frequently variable." If the player looks up the green ball or the red ball in the book, s/he'll get the message about the balls being round. If the player tries looking up `abc123` or some other combination of one to three letters followed by one to three digits s/he'll get the response about the widget-spangler. Trying to consult the green book about anything else will be met with the default response saying that the book doesn't have anything to say on the topic. In a real `Consultable` we'd probably provide more responses on a more coherent range of topics.

The definition of a large number of ConsultTopics can be made easier (as ever) using a template. We can define the `matchObj` using @ followed by a single object, or a list of objects in square brackets, or else the `matchPattern` in single quotes. We can then give the `topicResponse` simply as a double-quoted string. Using the template, the ConsultTopics defined above can become just:

 
    ++ ConsultTopic @tWeather 
 
        "The weather in these parts is frequently variable. "
 
    ;

 
    ++ ConsultTopic [redBall, greenBall]  
 
        "According to the book, both the green ball and the
 
        
        red ball are pretty much round. "
 
    ++ ConsultTopic '<alpha>{1,3}
<digit>{1,3}
'  
 
        "According to the green book this could the serial
 
        
        number of a type 4 widget-spangler. ";

 
    ++ DefaultConsultTopic
 
        
 
        "The book doesn't seem to have anything to say on that
        topic. "
 
    ;

Exercise 14:
     Create your own `Consultable` object (a book or timetable or anything else you like) with a number of entries. Don't worry about using regular expressions to match `ConsultTopics` unless you're reasonably comfortable with them. If you need a bit more help look up `Consultable` and `ConsultTopic` in the *Library Reference Manual*;  you may also find it helpful to look up `TopicEntry` there as well, along with the `TopicEntry` template.

[&laquo; Go to previous chapter](6-actions.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](8-events.html)