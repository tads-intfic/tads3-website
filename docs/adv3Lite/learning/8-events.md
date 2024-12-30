---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 8. Events

## 8.1. Fuses and Daemons

It's often useful to be able to schedule something to happen at some point in the future, or to carry out a routine every turn (or every so many turns). For this purpose we can use Fuses and Daemons.

In adv3Lite, Fuses and Daemons are created as dynamic objects. We set up a Fuse with a command like:

 
    new Fuse(obj, &prop, n);

or

 
    fuseID = new Fuse(obj, &prop, n);

Where `fuseID` (or whatever name we want to use) is typically a property we're using to store a reference to the Fuse, if we need one. With these definitions the *prop* property of the *obj* object will be executed after *n* turns. If n is 1, `obj.prop` will be executed on the next turn. If n is 0, the fuse will fire on the same turn;  this can be useful if we want to set something up to happen at the end of the current turn. For example, we might define:

 
    dynamite: Thing 'stick of dynamite'
 
        
    dobjFor(Burn)
 
    {
 
        
        verify() {}
 
        
    action()
 
        
 
    { 
        
        
    new Fuse(self, &explode, 3);

 
        
          
 
        "You set the dynamite alight. ";
 
        
    }

 
        
    }
 
     explode()
    
 
    { 
        
 
        "Bang! ";

 
        
        
    moveInto(nil);
 
     }

 
    ;

With this definition the dynamite will explode three turns after it is set alight. If the player should find some way to extinguish it in the meanwhile, we need to find some way to disable the fuse. If we'd stored a reference to the Fuse we could do that most simply with

 
    fuseID.removeEvent();

If we hadn't stored a reference to it, we could still disable the Fuse with:

 
    eventManager.removeMatchingEvents(dynamite, &explode);

In a full implementation of the dynamite, we'd probably do something more dramatic when it exploded than just saying "Bang!" and removing the dynamite from play, but in any case we shouldn't report what happens unless the player character is there to see it. If the player lights the dynamite and then immediately heads off to a remote location, the report of the explosion should presumably not appear. To handle this kind of situation we can use a SenseFuse:

 
    new SenseFuse(obj, &prop, n, &senseProp?, source?);

The two extra (but optional) parameters are *senseProp* and *source*. With a SenseFuse `obj.prop` will still be executed after *n* turns, but anything that obj.prop tries to display to the screen won't actually appear unless the player character can sense *source* via *senseProp,* which must be one of `&canSee` (sight), `&canHear` (sound), `&canSmell` (smell) or `&canReach` (touch) (these are in fact methods of the Q object, which is used to query the world model about such things as scope and sensory connections, but we needn't go into that right now). The question-mark indicates an optional parameter: if we don't specify the *source* it's taken to be the same as *obj*, and if we don't specify the *senseProp* it's taken to be `&canSee`. We can specify *senseProp* without specifying *source*, but we can't specify *source* without also specifying *senseProp*. We could thus revise our dynamite accordingly:

 
    dynamite: Thing 'stick of dynamite[n]'
        dobjFor(Burn)
    
 
    { 
        
    verify() {}

 
        
        action()
     
 
    {
 
        
          
 
        "You set the dynamite alight. ";
 
        
        
    new SenseFuse(self, &explode, 3, &canHear);

 
        
        }
 
     }

 
        
    explode()
 
    {
 
        
     
 
        "Bang! ";
 
        
     moveInto(nil);

 
        
    }
;

With this definition, if the dynamite is out of earshot when the fuse goes off, the dynamite is still moved out of play, but the "Bang!" message will not be displayed.

It should be added that although the dynamite example implements a fuse in a rather literal sense, `Fuses` and `SenseFuses` can be used to trigger any kinds of event we like.

If we want a repeating event rather than a one-off event, we use a `Daemon` rather than a Fuse. This is created in much the same way:

 
    new Daemon(obj, &prop, n);
 
    or

 
    daemonID = new Daemon(obj, &prop, n);

This causes `obj.prop` to be executed every *n* turns. If n is 1, `obj.prop` is first executed on the current turn;
 if it is 2, it is next executed on the following turn (and so on).

For example:

 
    cave: Room 'Small Cave'
 
        
    startDrip()
 
    {
 
        
        dripCount = 0;
 
        
    dripDaemon = new Daemon(self, &drip, 1);

 
        
    }
 
     stopDrip()
    
 
    { 
        
    if(dripDaemon != nil)
 
        
 
    { 
        
        
    dripDaemon.removeEvent();

 
        
        
        dripDaemon = nil;
 
        
    }

 
        
    }

 
        
    dripDaemon = nil
        dripCount = 0
 
        
    drip()
 
    {
 
        
        switch(++dripCount)    
 
    {
 
        
        
     case 1: "A faint dripping starts. ";
 break;
 
        
        case 2: "The dripping gets louder. ";
 break;

 
        
        
     case 3: "The dripping becomes louder still. ";
 break;
 
        
        default: "There's a continuous loud dripping. ";  break; 
 
        
        }
 
     }

 
    ;

This code should be clear enough;
 note how the `stopDrip()` method checks that `dripDaemon` is not nil before attempting to call the `removeEvent()` method on it;
 this is a defensive programming strategy to ensure that it's always safe to call `stopDrip() `without causing a run-time error. The alternative would be to call:

 
    eventManager.removeMatchingEvents(cave, &drip).
Corresponding to the `SenseFuse` is the `SenseDaemon`, defined in a similar way:

 
    new SenseDaemon(obj, &prop, n, &senseProp?, source?);

Here all the parameters have the meanings we've already seen. For example, in order to ensure that we only report the dripping sound when the player is in the cave to hear it, we might have set up the dripping daemon with:

 
    dripDaemon = new SenseDaemon(self, &drip, 1, &canHear);

In addition to the `Daemon` and the `SenseDaemon`, there's a `PromptDaemon`, which is run every turn just before the prompt is displayed. This is set up simply with

 
    new PromptDaemon(obj, &prop);

This will cause `obj.prop` to be executed every turn, just before the command prompt. The `OneTimePromptDaemon` is a `PromptDaemon` (set up in the same way) that executes just once and then disables itself. This can be useful when we want something to happen right at the end of the current turn;
 it can also be useful to set things up just before the first turn.

We can control the order in which Daemons and Fuses are executed by overriding their `eventOrder` property;
 the lower the number, the earlier the Event will execute. The default value is 100.

For more information, look up Event and its subclasses in the *Library Reference Manual*.

## 8.2. Coding Excursus 13 -- Anonymous Functions

It is possible to create not only objects but functions dynamically;
 these are then *anonymous* functions. At its most general, the syntax is:

 
    new function(*args*)  {  *function body *}
;

This returns a pointer to the function thus created, which we could use to call the function;
 for example:

 
    local f = new function(x, y) { return x + y;
 }
;

 
    local sum = f(1, 2);

When executed, this would result in `sum` being evaluated to 3. The keyword *new* is optional when creating an anonymous function. The following is equally legal:

 
    local f = function(x, y) { return x + y;
 }
;

 
    local sum = f(1, 2);

An anonymous function is not restricted to containing a single statement;
 an anonymous function can be as long and complex as we like. But where an anonymous function does consist of a single statement, generally an expression to be evaluated and returned by the function, we can use a short form of the syntax. The following is equivalent to the anonymous function we just defined above:

 
    local f = { x, y: x + y }
;

Note that with this short-form syntax, the list of arguments (if any) is followed by a colon, which in turn is followed by the expression that the anonymous function is to return. We do *not* use the keyword `return` in this short-form syntax, and we do *not*

follow the expression (inside the short-form anonymous function) with a semi-colon. Attempting to use a semi-colon inside a short-form anonymous function will result in a compilation error.

It's perfectly legal to define an anonymous function that takes no arguments at all, for example:

 
    local hello = {: "Hello World! " }
;

Subsequently executing `hello()` will then cause "Hello World!" to be displayed. As we shall see shortly, this kind of anonymous function definition can be particularly useful in EventLists.

Anonymous functions can refer to local variables and to the self object that is in scope at the time they are created. For example, the following is perfectly legal:

 
    someObj: object
     name = 'banana'
 
        doName()
     {
 
        
        local str = 'split';  
        
    local f = { x: name + x + str }
;

 
        
        return f(' ');  
    }

 
    ;

The `doName()` method would return 'banana split'.

At this point, you may well be thinking "This looks all very nice, but what useful purpose does it serve?" We'll be seeing some uses for anonymous functions later on in this chapter, but one common use is as the argument to some function or method. An anonymous function definition is an expression, returning a function pointer. It can thus be passed to a method or function that expects a function pointer as an argument. For example, we could define:

 
    function countItems(lst, func)
 
    { 
     local cnt = 0;

 
        
    for(local i;
 i <= lst.length();
 i++)
 
    {
 
        
        if(func(lst[i]))
        
        cnt++;

 
        
    }
 
     return cnt;

 
    }

This function takes two arguments, a list (we'll say more about lists in the next Coding Excursus, a little further on in this chapter) and a function pointer. It returns the number of items in the list for which the function returns true (when called with a list item as its parameter). So, for example, we could call it with something like:

 
    evens = countItems([1, 2, 3, 4, 5], {x: x % 2 == 0 }
 );

And this would return the number of even numbers in the list [1, 2, 3, 4, 5]. We could subsequently call it with:

 
    clothingCount = countItems(me.allContents, {x: x.ofKind(Wearable) }
;

And this would return the total number of Wearable items carried, worn, or indirectly carried by the player character.

As we shall see, we don't actually need to define this particular function, since there's already an equivalent method defined on the List class, but that, too, uses anonymous functions in much this way.

It's also possible to create anonymous methods (and floating methods);  we'll return to that briefly later on.

For a fuller account of anonymous functions (and methods), see the chapter on 'Anonymous Functions' in Part III of the *System Manual*.

## 8.3. EventLists

We've seen how a Daemon can be used to make something happen each turn, but it's often useful to be able to define a list of events, one of which is to occur on each turn. We can do this with the `EventList` class.  This defines an `eventList` property, which should contain a list of items (in the form  [item1, item2, ... item*n*]).

The items in an EventList can be any of the following:

- A single-quoted string (in which case the string is displayed)

- A function pointer (in which case the function is invoked without arguments)

- A property pointer (in which case the property/method of the self object (i.e. the EventList object) is invoked without arguments)

- An object (which should be another Script or EventList), in which case its doScript() method is invoked.

- nil (in which case nothing happens).

Each item is dealt with in turn when the EventList's `doScript()` method is executed. We could thus use a Daemon to drive an `EventList` simply by repeatedly calling its `doScript()` method. For example, the dripping cave example could have been written:

 
    cave: Room 'Small Cave'
 
        
    startDrip()
        
 
    {
 
        
        dripDaemon = new Daemon(self, &drip, 1);
 
     }

 
        
    stopDrip()
    
 
    { 
        
    if(dripDaemon != nil)
 
        
 
    { 
        
        
    dripDaemon.removeEvent();

 
        
        
        dripDaemon = nil;
 
        
    }

 
        
    }

 
        
    dripDaemon = nil
 
        
    drip() { dripEvents.doScript();
 }

 
        
    dripEvents: EventList
 
    {
 
        
        eventList =
        
     [
 
        
        
    'A faint dripping starts. ',
        
        'The dripping gets louder. ',
 
        
        
    'The dripping becomes louder still. ',
        
        'There\'s a continuous loud dripping. '
 
        
        ]
        }

 
    ;

Actually, this is not *quite* the same, since an `EventList` stops doing anything at all when it runs off the end, whereas we want the "continuous loud dripping" message to keep repeating;
 for this we need a `StopEventList` rather than a plain `EventList`. Also, since we so often need to define the `eventList` property of an `EventList`, this can be done via a template. We could therefore define the `dripEvents` property as:

 
        
    dripEvents: StopEventList
    
 
    { 
        
        
        [
 
        
        
    'A faint dripping starts. ',
        
        'The dripping gets louder. ',
 
        
        
    'The dripping becomes louder still. ',
        
        'There\'s a continuous loud dripping. '
 
        
        ]
        }

The various kinds of `EventList` we can use are:

- `EventList` -- this runs through its eventList once, in order, and then stops doing anything once it passes the final item.

- `StopEventList` -- this runs through its eventList once, in order, and then keeps repeating the final item.

- `CyclicEventList` -- this runs through its eventList, in order, and returns to the first item once the final item is passed.

- `RandomEventList` -- this chooses an item at random each time it's evoked.

- `ShuffledEventList` -- this (usually) sorts the items in random order before

running through it for the first time. It then runs through the items until it reaches the last one. After it's used the last one it sorts the items in random order again and starts over from the beginning. The effect is a little like repeatedly shuffling a pack/deck of cards and dealing one at a time.

- `SyncEventList` -- an event list that takes its actions from a separate event list object. We get our current state from the other list, and advancing our state advances the other list's state in lock step. Set `masterObject` to refer to the master list whose state we synchronize with.

- `ExternalEventList` -- a list whose state is driven externally to the script. Specifically, the state is not advanced by invoking the script;
 the state is advanced exclusively by some external process (for example, by a daemon that invokes the event list's advanceState() method).

We may often use `RandomEventList` and `ShuffledEventList` to provide atmospheric background messages (e.g. descriptions of various small animals and birds rustling around in a forest location). To prevent such messages out-repeating their welcome we can control their frequency with the properties `eventPercent`, `eventReduceTo` and `eventReduceAfter`. If we set `eventPercent` to 75, 50, or 25, say, then a `RandomEventList` or `ShuffledEventList` will only trigger one of its items on average on three-quarters, or half, or one-quarter of the turns. If we want this frequency to fall after a while, we can specify a second frequency in `eventReduceTo` which will come into effect after we've fired events `eventReduceAfter` times. If we don't want the frequency to change, we should leave `eventReduceAfter` at nil. If we want this functionality on any other kind of EventList we can use the `RandomFiringScript` mix in class (e.g. we could define something as `RandomFiringScript,StopEventList`).
A `ShuffledEventList` has a couple of other properties we can use to tweak the way it behaves.  If we *don't* want the events to be shuffled first time through (because we want them to be fired in the order we defined them first time round), we can set `shuffleFirst` to nil. If, on the other hand, we want a separate set of events to be triggered before we start on the shuffled list, we can define a separate `firstEvents` property. To allow us to define this easily, there's a `ShuffledEventList` template;  if we define a `ShuffledEventList` with two lists (without explicitly assigning them to properties), then the first list will be assigned to the `firstEvents` property, and the second to the `eventList` property, e.g.:

 
    someList: ShuffledEventList
    ['First message', 'Second message' 'Third message']
 
        ['A random message', 'Another shuffled message',
        'Yet another shuffled message']
 
    ;

So far, all our examples have been of event lists containing single-quoted strings, but as we said at the outset, this is only one kind of item that can go there. We can't put

a double-quoted string in an event list, even though we might want to (perhaps to take advantage of the `<<>>` embedded expression syntax), but we can put a function pointer in an event list, and such a function pointer could come from a short-form anonymous function containing a double-quoted string:
 
    myList: EventList
 
        [
        'A single-quoted string. ',
 
     
 
    {: "A double-quoted string with an<<embeddedExpression()>>. " }
  ]

 
        embeddedExpression() { "embedded expression";
 }
;

An alternative would be to use a property pointer:

 
    myList: EventList  [
 
        
     'A single-quoted string. ',
        &sayDouble
 
        ]  sayDouble() { "A double-quoted string with an
<<embeddedExpression()>>. ";
 }
    

 
        embeddedExpression() { "embedded expression";
 }
;

This is more verbose in this case, but usefully illustrates how to use a property pointer in an EventList. In any case, we can use one syntax or the other to do something rather more complicated that display a double-quoted string, for example:

 
    floorList: EventList
     [
 
        
        'The floor starts to creak alarmingly. ',
        
    'The creaking from the floor starts to sound more likecracking. ',

 
        
        new function()    
 
    {
 
        
        
 
        "With a loud <i>crack</i> the floor suddenly givesway, and you
        
        
        suddenly find yourself falling...";
    
 
        
        
        gPlayerChar.moveInto(cellar);
 
        
        cellar.lookAroundWithin();

 
        
        }
 
    ]
 
    ;

In this case, it's a matter of individual preference whether we prefer to include an anonymous function within the list itself, or implement it as a separate method called via a property pointer:

 
    floorList: EventList
     [
 
        
        'The floor starts to creak alarmingly. ',
        
    'The creaking from the floor starts to sound more likecracking. ',

 
        
        &floorBreak
     ]
 
        floorBreak()
 
          
 
    { 
          
 
        "With a loud <i>crack</i> the floor suddenly givesway, and you 

 
        
        
        suddenly find yourself falling...";

 
        
        
        gPlayerChar.moveInto(cellar);
 
        
        cellar.lookAroundWithin();

 
        
        
    }

 
    ;

Embedded expressions can be used in single-quoted strings. Why, then, should we ever want to use an anonymous function to encapsulate a double-quoted string in an Event List just so we can use an embedded expression? Surely we could just write something like:

 
    myList: EventList  [
 
        
     'A single-quoted string. ',
        'A double-quoted string with an <<embeddedExpression()>>.' 

 
        ]  embeddedExpression() { 'embedded expression';  }

 
    ;

Often, this will indeed work perfectly well. For example, there would be nothing at all wrong with an EventList constructed like this:

 
    myList: ShuffledEventList
 
        [
        'The wind whistles in the trees. ',
 
        
     'A <<iffrontDoor.isOpen>>loud<<else>>muffled<<end>>sound wafts
        
     through the <<frontDoor.name>>. ',
 
        
     'From <<me.location.theName>> you notice the wind changedirection. ',

 
    'The sun glints off the <<if
window.isBroken>>broken<<else>>front<<end>>

 
     window. '
 
        ]
 
    ;

And this type of thing probably covers the most common cases where you might want to use embedded expressions in an EventList. Note, however, that the following would not work at all how you might expect:

 
    myList: ShuffledEventList
 
        [
        'The wind whistles in the trees;  you have now noticed this<<++count>>
 
        times. ',
 
        
     'A <<oneof>>starling<<or>>crow<<or>>pigeon<<or>>blackbird<<shuffled>> 

 
        
        suddenly takes flight. ',
        'You notice the wind change direction to the <<oneof>>north<<or>>

 
        
        south<<or>>east<<or>>west<<cycling>>. ',
 
    'The sun <<one of>>suddenly<<or>>once again<<stopping>>
glints off 

 
    the front window. '
 
        ]
 
        count = 0
 
    ;

If you wrote something like that, you'd find the `count` variable increasing far more rapidly that expected, the cycling of directions not working properly, the stopping list

reaching 'once again' prematurely, and the shuffled list of birds apparent not being shuffled properly. The (albeit somewhat obscure) reason for this is that the elements of an EventList are evaluated far more frequently than you might expect (typically six times per turn), even though you only see one of them displayed. In this kind of case, you do need to enclose the embedded expressions in double-quoted strings using anonymous functions. The following would work fine:

 
    myList: ShuffledEventList
 
        [ 
 
    {: "The wind whistles in the trees;
 you have now noticed this<<++count>>
 
        times. "}
,
 
     
 
    {: "A <<oneof>>starling<<or>>crow<<or>>pigeon<<or>>blackbird<<shuffled>> 

 
        
        suddenly takes flight. "}
, 
 
    {: "You notice the wind change direction to the <<oneof>>north<<or>>

 
        
        south<<or>>east<<or>>west<<cycling>>. "}
,
 
    {: "The sun <<one of>>suddenly<<or>>once
again<<stopping>> glints off 

 
    the front window. "}

 
        ]
 
        count = 0
 
    ;

The rule of thumb is that it's safe to use an embedded expression in a single-quoted string in an EventList when the embedded expression won't change its value in the course of a single turn (even if it is evaluated several times during the course of that turn) but not otherwise. A `<<oneof>>...` type construct will nearly always change its value with successive evaluations, and so should not be put inside a single-quoted string used as a list element. The same applies to other expressions that explicitly change their value each time they're evaluated (such as `++count`) or have other side-effects that might make successive changes to the game state over the course of a single turn.
We can always drive an EventList by calling its doScript() method from a Daemon, but there are some places where the library provides hooks for EventLists that will be driven for us if we define them in the appropriate place.

For example, `Room` defines an `roomDaemon` method. If the Room is mixed in with an EventList class the default behaviour of roomDaemon is to call doScript, thereby driving the EventList, which will then automatically shows its elements every turn the player character is in the room in question. This could be used to display a series of atmospheric messages, for example:

 
    class ForestRoom: Room, ShuffledEventList
 
        [
        'A squirrel darts up a tree and vanishes out of sight. ',
 
        
    'A fox runs across your path. ',
        'You hear a small animal rustling in the undergrowth. ',
 
        
    'Some distance off to the right, a pair a birds take flight. '
        ]

 
        eventPercent = 80
     eventReduceTo = 40
 
        eventReduceAfter = 4
     ;

Here we use a `ShuffledEventList` (probably the most suitable class for an atmosphere list), and reduce its frequency so that the player doesn't tire of our atmospheric messages too quickly.

Another place where an `EventList` might be useful is in conjunction with a `TravelConnector`. If the `TravelConnector` is also an `EventList`, then traversing it will automatically call its `doScript() `method (provided we haven't otherwise overridden its `travelDesc() `method). For example:

 
    clearing: Room 'Forest Clearing'
 
        "It looks like you could go east or west from here. "
 
        west = streamBank
     east: TravelConnector, StopEventList
    
 
    { 
        
    destination = roadSide
 
        
        eventList =
        
        [
 
        
        
        'You walk eastwards for several hundred yards down atrack that
        
        
     seems to get narrower and narrower, until you're forcedto 

 
        
        
        squeeze through the tightest of gaps between trees.After that
        
        
     the track gradually widens out again, until you at lastfind

 
        
        
        yourself emerging by the side of a road. ',
 
        
        
        'You once again walk eastwards down the narrow track,squeeze
        
        
     through the gap, and emerge by the side of the road. '
 
        
        ]
     }

 
    ;

Here it might be tedious for the player to see the somewhat lengthy description of the walk down the track on each occasion, so we provide an abbreviated version for second and subsequent attempts.

We'll be meeting more of these built-in hooks for event lists in later on;  in the meantime, for more information on the EventList classes look up the Script class and its subclasses in the *Adv3Lite Library Reference Manual*. You might want to look up `ShuffledList` at the same time;  although this is not a kind of EventList, there may be occasions when you'd find in useful (specifically when you want a sequence of values returned in a shuffled order, rather than a sequence of events executed in a shuffled order).

## 8.4. Coding Excursus 14 -- Lists and Vectors

We've already mentioned Lists several times;  the time has come to look at them a bit more closely. Since Vectors are quite similar to Lists, we may as well consider them together.

As we have already seen, a List is simply a series of values combined together as a single value. To define a constant list, we enclose the items in the list in square brackets and separate each element in the list from the next with a comma, e.g.:

 
    local numlst = [1, 2, 3, 5, 7, 10];

 
    local objlst = [redBall, greenBall, brownCow, blackShirt];

The above example assigns lists to local variables;
 they can equally well be assigned to object properties, or passed as arguments to functions or methods, or indeed returned as the value of a function or method, e.g.:

 
    sumProduct(lst)
 
    { 
    local sum = 0;

 
        local prod = 1;
 
    for(local i = 1;
 i <= lst.length() ;
 i++)
    
 
    { 
        sum += lst[i];

 
        
        prod *= lst[i];
 
    }

 
        return [sum, prod];
}

This function takes a list of numbers as its argument, and returns a list containing the sum and the product of these numbers. This demonstrates, among other things, how we can return more than one value from a function (or method) by using a list.

The example also shows how we can get at the individual items in a list. To get at item `i` in list `lst` we simply give the list name followed by the index in square brackets: `lst[i]`. It's also legal to change a list value this way, e.g. `lst[4]= 15`. A list is indexed starting at 1, so that, for example, in the `numlst[1]` would be 1 and `objlist[1]` would be `redBall` (assuming these two lists are defined as shown above). The number of items in a list is given by its `length()` method, so that, for example `numlst.length()` would be 6 and `objlst.length()` would be 4. It's illegal to try to refer to a list element beyond the end of the list (e.g. an attempt to refer to `objlst[5]` would result in a run-time error, unless we'd made the list longer somehow).
All the lists we've seen so far have contained elements of the same type, but it's perfectly legal to mix data types in a list;  the following, for example, is a perfectly valid list:

 
    [1, 'red', greenBall, 5, &name]
It's also perfectly legal for a list to contain other lists as elements, for example:

 
    local lst = [1, 3, ['red', redBall], [4, 5], 'herring']; 
In this case `lst[3]` would yield the value `['red',redBall]` whereas `lst[3][2]` would yield the value `redBall`.
We can add elements to a list using the + operator. For example if `lst` is the list `[1, 3, 5]` then `lst + 7` would be the list `[1, 3, 5,7]`. If we wanted to change `lst` to the list `[1, 3, 5, 7]` we could use the statement `lst += 7.

We can also use the -- operator to remove an item from a list. If `lst` were `[1,3, 5, 7]` then `lst -- 3 `would be `[1, 5,
7]`;
 if we want to apply the change to `lst` (rather than assigning the changed list to another variable), we could do so with `lst
-= 3`.
This raises an important point to remember: *using methods or operators on lists yields a new value which we can assign to something else, but does not in itself change the list operated on unless we explicitly make it do so*.

In other words, it's fatally easy to write an expression like `lst +2;  
    when what we really needed was the assignment statement `lst +=
2;
 
    . The former is perfectly legal as a statement and will compile quite happily;
 it just won't do what we probably want.

For full details of how the + and -- operators work with Lists and Vectors, see the chapter on 'Expressions and Operators' in Part III of the *TADS 3 System Manual*.

There are also quite a few methods of the List (and Vector) class that's it's useful to know about. We've already met one, `length()`;  we'll now introduce a few more.

The `append()` method is quite similar to the + operator. That is `lst.append(x)` does much what `lst +x` does, namely adds x as a new element to the end of `lst`. Note, however, that this is an *expression*. Simply writing the statement `lst.append(x)` will *not* change the value of `lst`;
 instead it will return a new list that's `lst` plus `x`. If we want to change the value of `lst` using `append() `we need to write `lst= lst.append(x)`. There's also a subtle difference between + and `append()`. The difference is that `append()` always treats its argument as a single value, even if it's a list. The effect is that if lst is, say, [1, 3, 5] then:
 
    lst + [7, 9] is [1, 3, 5, 7, 9]lst.append([7,9]) is [1, 3, 5, [7, 9]]
Similar to `append() `is `appendUnique()`, except that each value in the combined list will appear only once, so for example:

 
    [1, 2, 2, 4, 7].appendUnique([1, 3, 5, 7]) is [1, 2, 3, 4, 5,
7]

Related to `appendUnique()` is `getUnique()`, which simply returns a List containing

each element only once.

 
    [1, 2, 2, 4, 7].getUnique() is [1, 2, 4, 7]
The `countOf(val) `method returns the number of elements of the list equal to `val`, so for example `[1, 2, 2, 4, 7].countOf(2)` would return 2.

Similarly `indexOf(val)` returns the index of the first item in the list that's equal to `val`;  so if `lst` is `[1, 2, 2, 4,7]` then `lst.indexOf(2) `would be 2 while `lst.indexOf(7)` would be 5 and `lst.indexOf(3)` would be nil (showing that we can use `indexOf() `to test whether a list contains a particular value).
The two methods `countOf()` and `indexOf()` have a pair of powerful cousins called `countWhich()` and `indexWhich()`. The argument to these methods is an anonymous function, itself with one argument, which should return true for the condition we're interested in. For example, suppose that we've defined a Treasure class, and we want to know how many items of Treasure the player character is carrying (directly or indirectly). Using `countWhich()` we can do it like this:

 
        local treasureNum = me.allContents.countWhich({x: x.ofKind(Treasure)
}
);
    

Likewise if we want to identify which (if any) of the items the player is carrying is a `Treasure`, we can do so with this code:

 
        local idx = me.contents.indexWhich({x: x.ofKind(Treasure) }
);
    local treasureItem = me.contents[idx];

In fact, we can do this even more compactly using the `valWhich() `method, which gives us the matching value directly, rather than its index position within the list.

 
        local treasureItem = me.contents.valWhich({x: x.ofKind(Treasure)
}
);
    

This kind of thing may look a little scary at first sight, but it's *well* worth getting used to, since it enables us to manipulate lists (and vectors) so economically. The alternative would be to write a loop:

 
        local treasureItem = nil;

 
        foreach(local cur in me.contents)
     {
 
        
        if(cur.ofKind(Treasure))    
 
    {
 
        
        
        treasureItem = cur;
 
        
        break;

 
        
        }
 
    }

While this isn't too terrible, it's clearly quite cumbersome compared with using `valWhich()`, which enables us to achieve the same result in a single line of code. But it does, incidentally, introduce a new kind of loop, the `foreach` loop, which, as you

may have gathered from the context, allows us to iterate over the elements of a List (or Vector). The general syntax should be reasonably apparent from the example:

 
        foreach(*iterator-variable* in *list-name*)
 
        
        *loop-body*
The idea is that *iterator-variable* takes the value of each element of *list-name* in turn, until we reach the end of the list (or encounter a `break` statement). Note that if we like we can use `for` in place of `foreach` in this kind of statement.

Among the other List methods available, we should mention `sublist()` and `subset()`, both of which provide means of extracting some group of elements from a list. The method `sublist(*start*, *len*)` returns a new list starting with the *start* element of the list we're operating with and continuing for at most *len* elements. The *len* argument is optional;  if it's absent, we simply continue to the end of the list, so for example, if we have:

 
    local a = [1, 2, 3, 4, 5];

 
    local b = a.sublist(3);
local c = a.sublist(3, 2);

Then b will be `[3, 4, 5]` whereas c will be `[3, 4]`.

The `subset()` function takes an anonymous function as an argument, and returns a list of all the elements for which the anonymous function evaluates to true. For example, if we want a list containing all the `Treasure` items directly or indirectly in the player character's inventory we could generate it with:

 
    me.allContents.subset({x: x.ofKind(Treasure)}
)
Alternatively, if we wanted a list of everything directly carried by the player with a bulk greater than 4, we could generate it with:

 
    me.contents.subset({x: x.bulk > 4}
)
There are also methods to sort Lists, remove elements from Lists, and do various other interesting and useful things with Lists. For a full account, read the chapter on 'List' in Part IV of the *TADS 3 System Manual*.

Two further function to be aware of are `nilToList()` and `valToList`();
 if the argument to either of these functions is a list, the function returns the list unchanged, but if the argument is nil the function returns the empty list `[]`. The `valToList`() function additionally turns just about anything fed to it into a list if it isn't a list already, so that (for example) `valToList(redBall) `returns the list `[redBall]`. This can be useful when we want to perform a list operation on a property that may contain either a list or a single object or nil. For example, suppose we want to add a precondition for an action on a particular object, we might write:

 
        preCond = inherited + objHeld
Should the object inherit from a class where the precondition for that action is undefined (and hence nil), this will cause a run-time error. We can avoid this danger by instead writing:

 
        preCond = valToList(inherited) + objHeld
Apart from the `nilToList()` and `valToList()` functions, virtually everything we've said about Lists also applies to Vectors, so now we should say something about the difference between the two. The key difference is that a List is immutable while a Vector is not. That means that if we perform some operation on a List, we don't change the List, we create a new List with the revised set of values. A Vector, however, can be dynamically changed. This makes updating a Vector more efficient than updating a List, but also has implications for the effect of the change. As the *System Manual* explains it, if we defined the following:

 
        local a = [1, 2, 3];

 
        local b = a;
 
    a[2] = 100;

 
        say(b[2]);

When we display the second element of b we'll see the value 2 displayed. This is because when we change the second element of a we create a new List which is then assigned to a, but this does not affect the List that's assigned to b.

If, however, we attempted the equivalent operation with a Vector, we'd get a different  result:

 
        local a = new Vector(10, [1, 2, 3]);

 
        local b = a;
 
    a[2] = 100;

 
        say(b[2]);

Displaying the second element of b would now show it to be 100. Since Vectors can be changed, no new object is created when we change the second element of the Vector, and so a and b continue to contain the same Vector object.

This example shows that creating a Vector is a bit different from creating a list. There's no such thing as a Vector constant equivalent to a List constant like `[1,2, 3]`. Vectors have to be created dynamically with the `new` keyword. The constructor can take one or two arguments. The first argument must be an integer specifying the initial allocation size of the Vector. So for example, we could create a Vector with a statement like:
 
        
    myProp = new Vector(20);

This would create a Vector with an initial memory allocation for 20 elements. This

does not mean that the Vector is created with 20 elements;
 it is created empty. It also does not mean that the Vector is limited to 20 elements;
 we can carry on adding as many elements as we like. It simply means that we expect the Vector to grow to about 20 elements, and things will be a bit more efficient if our guess is more or less right.

We can also add a second argument, which can be either an integer or a List. With this statement:

 
    myProp = new Vector(20, 10);

We'd create a new Vector and initialize it with 10 nil elements. With this one:

 
    myProp = new Vector(20, [1, 3, 5]);

We'd create a new Vector and initialize its first three elements to 1, 3 and 5. This form of the Vector constructor effectively enables us to convert a List into a Vector (or, strictly speaking, to obtain a Vector containing the same elements as any given List). We can carry out the opposite operation with the `toList() `method, which returns a List containing the same elements a the Vector it's called on. It can optionally return a subset of the elements from the Vector by specifying one or two optional arguments;  `vec.toList(start,count) `will return a List containing *count* elements starting with the *start* element of `vec`.

Vector also defines many of the same methods we have seen for List, which do similar things, but with one important difference: *many methods that return a new List but leave the original List unchanged *will* change a Vector when executed on a Vector*.

If we want an object property to hold a Vector, there's a couple of ways we can typically go about it. One coding pattern is to start with a nil value and to create the Vector dynamically the first time we try to add an element to it:

 
    myObj: object
 
        vecProp = nil
    addVecElement(val)
  
 
    { 
        if(vecProp == nil)
 
        
        
     vecProp = new Vector(25);

 
        
        vecProp.append(val);
    }

 
    ;

The alternative is to assign a Vector to the property's initial value using the `static` keyword:

 
    myObj: object
 
        vecProp = static new Vector(25);

We'll say more about the `static` keyword below.

The main question this all leaves is why one should use a Vector in preference to a List. The answer is that it's more efficient to change a Vector than a List (the latter requiring the overhead of creating a new object each time it's updated). It can therefore lead to better performance if we use a Vector for properties that are likely to be changed frequently, or when building a set of values dynamically. In the latter case we can always convert the Vector to a List once we've built it.

This section has introduced only the most salient features of Lists and Vectors. For the full story see the 'List' and 'Vector' chapters in Part IV of the *TADS 3 System Manual*.

## 8.5. Initialization and Pre-initialization

### 8.5.1. Initialization

We've seen how we can use Daemons and Fuses to trigger certain kinds of events, and EventLists to control sequences of Events;  one other place where we might want to make things happen is when our game starts.

One way we can do that is with an `InitObject`. An `InitObject` is simply an object whose `execute()` method will be executed when the game starts up. `InitObject` can be mixed in with other classes so that an object's initialization code can be written on the object. This can be particularly useful for starting a Fuse or Daemon at the start of play, for example:

 
    bomb: InitObject, Thing 'bomb;  long black;  cylinder'
 
        "It looks like a long black cylinder. "
 
        execute()  {
    fuseID = new Fuse(self, &explode, 20);
 }
 
    fuseID = nil
 
        explode()
     {
 
          
 
        "The bomb explodes with a mighty roar! ";
 
        
     if(gPlayerChar.isIn(getOutermostRoom))
 
        
        
        
    gPlayerChar.die();

 
        
        
    moveInto(nil);
 
    }

 
    ;

If we want, we can control the order of execution through the `execBeforeMe` and `execAfterMe` properties. These properties can hold lists of InitObjects that should be executed before or after the InitObject we're defining. For example, if we went on to define a second InitObject we wanted to execute after the bomb sets up its Fuse, we'd define `execBeforeMe = [bomb]` on it.

### 8.5.2. Pre-Initialization

Initialization takes place at game start-up. Pre-Initialization takes place towards the end of the compilation process;
 we can therefore use it to set up data structures and carry out calculations that need to be in place at the start of play, without causing any delay at the start of play, since the result of these calculations will be part of the compiled game image.

Just as we can use `InitObjects` to carry out tasks at initialization, so we can use `PreinitObjects` to carry out tasks at pre-initialization.

Apart from the stage at which its `execute()` method is executed, a `PreinitObject` works in much the same way as an `InitObject`. As with InitObjects, we can define as many PreinitObjects as we like, mix `PreinitObject` in with other classes, and use its `execBeforeMe` and `execAfterMe` properties to control the order in which PreinitObjects are executed.

For example, suppose at various points in our game we want to check the status of all objects belonging to our custom `Treasure` class. To do that, it would be helpful to have a list of them all stored somewhere;
 we could build it using a `PreinitObject` thus:

 
    treasureManager: PreinitObject
 
        treasureList = []
     execute()
    
 
    { 
        for(local obj = firstObj(Treasure);
 obj != nil;

 
        
        
        
        
        
        
        
        
        
        
    obj = nextObj(obj,Treasure))
        
        
        treasureList += obj;
    
 
        }
;

If we then need to iterate over all the `Treasure` objects in the course of play, we can then do so using the list in `treasureManager.treasureList.` (We'll be properly introduced to the `firstObj()` and `nextObj()` methods in the next chapter).

The existence of both `InitObject` and `PreinitObject` raises the question of which to use when. The general rule is probably to use `PreinitObject` wherever possible, and `InitObject` otherwise. Situations in which we have to use an `initObject `rather than a `PreinitObject` include:

- Outputting text to the screen, or accepting input from the player.

- Creating Fuses and Daemons.

- Testing the capabilities of the interpreter the game is running on (e.g. with the `systemInfo()` function), and setting things up accordingly.

- Setting up something random.

For the full story on Initialization and Pre-Initialization see the chapter on 'Program

Initialization' in Part V of the *TADS 3 System Manual*.

### 8.5.3. Static Property Initialization

This seems a convenient point to mention one other means of carrying out useful calculations at compile time, namely static initialization. This is actually carried out just before pre-initialization, and allows us to assign an expression to an object property at compile time by using the `static` keyword. This expression can, for example, be an object that has to be created dynamically, such as a Vector, e.g.:

 
        agendaList = static new Vector(15)
As another example, we might want to set the `reduceEventAfter` property of a `ShuffledEventList` to the number of items in its `eventList` property, since it would make good sense to reduce the frequency of random atmospheric messages once the player has seen every one of them once. We could do this with:

 
        eventReduceAfter = (eventList.length())
This would have the advantage that `eventReduceAfter` would contain the right value even if we decide to add more atmosphere strings to the `eventList`. But it would be more efficient to use static initialization:

 
        eventReduceAfter =  static eventList.length()
With this code, the length of the `eventList` is calculated at compile time and the value is assigned to the `eventReduceAfter` property as a constant value.

Any valid expression may follow the `static` keyword. For a fuller account, see the 'Static Property Initialization' section of the 'Object Definitions' chapter in Part III of the *TADS 3 System Manual*. It is worth being aware of one potential trap with `static`, however, and that is that it should generally only be used to initialize individual object properties, not class properties. For example, were you to do this:

 
    class Friend: Actor
 
        friends = static new Vector(10);

And then create a whole series of Friend objects, you'd find that they all shared the same `friends` Vector, which probably wasn't at all what you intended. What you'd probably need in a case like this is something like:

 
    class Friend: Actor
     friends = perInstance(new Vector(10))
 
    ;

This would ensure that every instance of the Friend class ended up with its own friends Vector.

Exercise 15:  Try creating the following game. The player character starts in a living room in wartime London, in which an unexploded bomb lies on the floor. He has 25 turns in which to defuse the bomb, after which it will explode. To defuse the bomb he has to remove a metal cap from it, which can only be removed with the aid of his spanner. This is one of his tools, which starts out in his black tool bag, which is out in the hall. The tool bag also contains his wire cutters and his bomb disposal manual.

Removing the cap from the bomb reveals five coloured wires in the detonator: red, blue, green, yellow, black. Cutting the right wire will defuse the bomb, but cutting the wrong one will make it go off. To find out which is the right wire, the player must determine which kind of bomb it is and then look it up in the bomb disposal manual. The serial number of the bomb is on the underside of the casing, so the player must look under the bomb to find it.

Out in the hall an inquisitive rat is scurrying around, so we should display a series of messages describing what it's up to. We should also display a series of random messages describing sounds coming from outside the house. Finally, when there's only five turns left, the bomb should start ticking louder, as a hint to the player that he needs to hurry up.

We'll add some further finishing touches to this game in the next chapter, but in the meantime you might like to compare your version with the Bomb Disposal sample game (Exercise 15.t in the learning folder).

[&laquo; Go to previous chapter](7-knowledge.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](9-beginnings-and-endings.html)