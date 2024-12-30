---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 13. More About Actions

## 13.1. Messages

As we've seen, it's possible to use macros like `illogical('You can't do that. ')` in verify routines, but it's more usual to see them specified in the form `illogical(cannotTakeMsg)`, where `cannotTakeMsg` is a property of Thing. This makes it easy to override properties like `cannotTakeMsg` with a single-quoted string of your own devising to provide your own custom response to taking something that can't be taken, without having to override a complete verify method to do so. The same principle is followed for other kinds of responses too. The name of the message can often be guessed from the name of the action. Thus, if the action was called `Foo`, a message ruling it out at the verify stage would probably be called `cannotFooMsg`. For an action that takes two objects, a TIAction that is, the message will probably be called `cannotFooMsg` on the direct object and `cannotFooPrepMsg` on the indirect object, where Prep is the preposition that forms part of the action name (e.g. With if the action were called `FooWith`).
We can't list all the adv3Lite library messages here, but if you need to find out where one is defined or what it is called there are various options available to you. One is to click on the Messages tab of the *adv3Lite Library Reference Manual*. This will provide you with an alphabetical list (in a somewhat special sense of 'alphabetical') of library messages which your web browser should allow you to search. Another place to look is in the file tads3Lite_msgs.csv which is located in the manual folder of your adv3Lite documentation. You can open this file in a spreadsheet program such as Microsoft Excel and then sort it and search it in any way you like. A third way is to use the Action Reference chapter of the *adv3Lite Manual*;  you can use this to look up a particular action and then see some of the principal message properties associated with that action.

If you do look up any of the messages defined in the library, you'll see that they're defined with either the `BMsg()` or the `DMsg()` macro, and tend to take the following form:

 
    BMsg(message name, 'message text', params...)
 
    DMsg(message name, 'message text', params...)

The difference between them is that BMsg (Build Message) returns a singe-quoted string containing the message text, while DMsg (Display Message) displays the message straight away.

The 'message text' part of these definitions can just be a single-quoted string containing the text to be displayed, but it can also contain a number of items in curly braces, like `{The subj dobj}` or `{1}`. The numbers in curly braces refer to the corresponding parameter in the (optional) list of params that follows, so that, for example:

 
    DMsg (eat something, 'You eat {1}
 with {2). ', food.theName,
'relish');     

Would result in the display of "You eat the strong cheese with relish. " if food is an object whose theName is 'the strong cheese'.

The other items in curly braces are called *message parameter substitutions*, and can be used virtually anywhere in a double- or single-quoted string. These are pieces of placeholder text that are replaced with particular words according to context when the string containing them is displayed, allowing the containing strings to adapt to the circumstances of their use.

Commonly used message parameter substitutions include:

- {The subj obj} ; the theName of obj, marked as the subject of the next verb to follow.

- {A subj obj} ; the aName of obj, marked as the subject of the next verb to follow.

- {the obj} ; theName of obj, regarded as the object of a verb.
- {her obj} ; the possessive form of obj (e.g. "Brian's", or "my", or the "baker's")

- {himself obj} ; the reflexive form of obj (e.g. "herself", "himself", or "yourself")

- {i} ; the current actor, in the subjective case (e.g. "I", "you", "Bob", or "the baker")

- {me} ; the current actor, in the objective case (e.g. "me", "you", "Bob", or "the baker")

- {my} ; the possessive of the current actor (e.g. "my", "your", "Bob's")

- {that obj} ; 'that' or 'those' (depending on whether obj is singular or plural), regarded as the object of verb.

- {that subj obj} ; 'that' or 'those' as the subject of the following verb.

- {is} {am} or `{are} ; the verb 'to be' in agreement with the most recent subject; in the absence of such a subject, the subject is assumed to be in the third person singular.

- {come} ; the verb 'to come' in agreement with the most recent subject, and so on for about two hundred other irregular verbs.

- {dummy} ; a dummy subject marker that displays nothing, but makes any verbs that follow agree with a third-person singular subject.

- {plural} ; a dummy subject marker that displays nothing, but makes any verbs that follow agree with a third-person plural subject.

- love{s/d} ; the verb 'to love' in agreement with the most recent subject, and so on for all the other regular verbs that follow this pattern.

- frown{s/ed} ; the verb 'to frown' in agreement with the most recent subject, and so on for all the other regular verbs that follow this pattern.

- splash{es/ed} ; the verb 'to splash' in agreement with the most recent subject, and so on for all the other regular verbs that follow this pattern.

- cr{ies/ied} ; the verb 'to cry' in agreement with the most recent subject, and so on for all the other regular verbs that follow this pattern.

- stop{s/?ed} ; the verb 'to stop' in agreement with the most recent subject, and so on for all the other regular verbs that double their final consonant in the past tense.

For a complete list see the chapter on Messages in the *adv3Lite Library Manual*.

Where *obj* appears in any of these it can be one of:

- `dobj` -- the direct object of the current action

- `iobj` -- the indirect object of the current action

- `cobj` -- the current object of the current action (which may be either the direct or the indirect object, depending on context)

- `actor` -- the current actor

- The `globalParamName` of an object (defined by giving it a globalParamName property, defined as a single-quoted string)

- A temporary message parameter `val` defined by the `gMessageParams(val)` macro where *val* is the name of a local variable.

Note that where a message parameter substitution starts with a capital letter, so will the text that's substituted for it, so we normally want to start a message parameter substitution with a capital letter if it appears at the start of a sentence, but not otherwise, so:
 
        "{I}
 {cannot}
 {see}
 {the dobj}
 {here}
. ";

But

 
    "It {dummy}
 seem{s/ed}
 that {i}
 {cannot}
 {see}
 {the dobj}
 {here}
.
";
    

(`{here}
 
     is a message parameter substitution that becomes 'here' in the present tense and 'there' in the past tense).

But to get back to `DMsg()` and `BMsg()`, we still haven't explained the message name that appears in formats such as:

 
    Dmsg(cannot see obj, '
 
    {I}
 {cannot}
 {see}
 {the dobj}
 {here}
. '); 
In this instance, `cannot see obj` is the message name, and it can be used if we want to change the message to something else, either because we're translating the library wholesale into another language, or because we want to customize the library's messages. To customize library messages we need to define a `CustomMessages` object. This contains a list of `Msg()` macros which in turn give the message name followed by the message string we want to replace it with, for example:
 
    CustomMessages
 
        messages = [
        Msg(cannot see obj, '{The subj dobj}
 {isn\'t}
 anywhere to beseen. ')

 
        ];

Or, to give a more extensive example, this is how we might customize the library messages associated with the Take action:

 
    CustomMessages
     messages = [
 
        
        Msg(report take, 'Snatched. | You grab {1}
. '),
        
    Msg(fixed in place, 'Idiot;  any fool can see {the subj dobj}
{is}
 firmly

 
        
        
        nailed down. '),
        
    Msg(already holding, 'In case you hadn\'t noticed, you\'realready

 
        
        
        holding {the dobj}
. '),
        
    Msg(cannot take my container, 'Great idea. Just how do youpropose to

 
        
        
        pick up {the dobj}
 while you\'re right {1}
? ')
 
        ];

Note that in such cases we can't change the parameters that place-holders like `{1}` refer to; they continue to retain the same meaning they had in the original `BMsg()` and `DMsg()` definitions. We can, however, use the place-holder mechanism to construct strings outside the BMsg()/DMsg() mechanisms by using the `dmsg()` and `bmsg()` functions;  e.g.:

 
    dmsg('The {1}
 in {2}
 falls mainly on the {3}
. ', 'rain',
'Spain', 

 
    'tourists'); 
 
    cannotBendMsg = bmsg{'{I}
 {can\'t}
 bend {1}
. ', theName)

Finally, there's a couple of properties of `CustomMessages` we can use to determine which `CustomMessages` object to use. The `priority` property determines which CustomMessages object takes precedence if more than one overrides the same message;  the higher the priority the higher the precedence (to override library messages use a `priority` of 200 or above). The `active` property determines whether the CustomMessages object will be used at all;  you could switch this between true and nil, for example, to change the tone of your game between different narrators.

## 13.2. Stopping Actions

We have already encountered the `exit` macro, which can be used to stop an action in its tracks. We should now take a slightly closer look at this and other ways of stopping actions before they're allowed to run their normal course.

The effect of `exit` is to halt the action just at the point where the `exit` statement appears, and skip straight to the end of turn processing (if any are pending, Fuses and Daemons). Note, however, that the `exit` statement skips only the rest of the command processing for the current action on the current object. So for example, if the player enters the command `take the apple, the carrot and the banana` and an `exit` macro is encountered in the course of taking the carrot, taking the carrot will be skipped but the game will go on to try to take the banana. Likewise, if the player enters several commands on the command line, only the current action is skipped by an `exit` macro. For example, if the player had entered `take the carrot then go north` and an `exit` macro prevented the taking of the carrot, the player character would still try to go north.

Slightly different is the effect of the `abort` macro. This not only stops the current action, but skips over the iteration of the action on any other objects entered on the command line at the same time and also skips over any end of term processing like Fuses and Daemons. It does not, however, cancel any separate commands entered on the same line.

To illustrate the difference, suppose we define the following:

 
    streetCorner: Room, CyclicEventList 'Street Corner'
    
 
        "The corner of the street. A store lies to the south. "
 
        south = store
 
        eventList = [
        
    'A gust of wind blew. ',
 
        
        'A cloud passed over the sun. ',
        
    'The sun came out again. '
 
        ];

 
    + ball: Thing 'ball'
 
        
        beforeAction()
    
 
    { 
        if(gDobj == ball)
 
        
 
    { 
        
 
        "The ball wouldn't allow that. "; 
 
        
        
        exit;
 
        }

 
        }
;

 
    + bat: Thing 'bat'
 
    ;

 
    store: Room 'store; ;  shop'
 
        "The way out is to the north. "
 
        north = streetCorner;

In this case if we enter the command `take ball and bat`, the `exit `statement will prevent the ball being taken, but not the bat, and we'll still see one of the atmospheric messages like 'A gust of wind blew.' If we changed `exit` to `abort` then we'd just see the refusal to do anything with the ball;  there'd be no attempt to take the bat and no atmospheric message. If we had entered the command `take ball and bat;  throw bat;  go south `however, then the commands `throw bat` and `go south` would be executed even with `abort`, but we'd only see one atmospheric message instead of the two we would have seen had we used `exit` rather than `abort`. In other words, each separate command entered on the command line is treated as separate;  
    abort` completely stops the current command (but not any subsequent commands entered on the same command line), whereas `exit` merely terminates the execution of the current action with the current object.

Both `exit` and `abort` are in fact macros that throw Exceptions. This introduces a feature of TADS 3 programming we haven't encountered before;  we'd better explain it now.

## 13.3. Coding Excursus 17 -- Exceptions and Error Handling

We've just used some code that throws something called an `Exception`. In fact, that's what the `exit` and `abort` macros do too. These are, after all, macros, which means they're really a convenient abbreviation for some other code. Their full definitions are:

 
    #define exit throw new ExitSignal()
 
    #define abort throw new AbortActionSignal()

To explain these seemingly mysterious definitions, we need to explain a little about how TADS 3 handles *Exceptions*.

A TADS 3 Exception may be some kind of error condition, or it may just be used (as in the examples above) as a convenient means of breaking out of a procedure prematurely and skipping to some later point. In general, then, an Exception represents some kind of unusual situation. More specifically, an Exception is an object of the `Exception` class (or, more likely, of one its subclasses), that encapsulates some kind of information about the exceptional situation.

The Exception mechanism has two main parts: throwing and catching. We have already seen examples of an Exception being thrown, namely via a `throw` statement. To throw an Exception of the `MyException` class we simply use a statement like:

 
    throw new MyException;

As with any other dynamically created class, an Exception can have a constructor (defined in its `construct()` method) to which parameters can be passed when the Exception is created;
 this could be used to store additional information about the exceptional circumstances that resulted in the Exception being thrown.

Once an Exception has been thrown, program execution jumps to the next enclosing `catch` statement relevant to that kind of exception. For this to work, the Exception must have been thrown in a block of code protected by a `try` statement. The general coding pattern is:

 
    someRoutine()
 
        try()
    {
 
        
     doSomeStuff();
    }

 
        catch(MyException myexc)
  
 
    { 
     /* do something with myexc */
 
        }

 
        catch(SomeOtherException oexc)
    {
 
        
    /* do something with oexc */
    }

 
        finally
  
 
    { 
     /* clean up afterwards */
 
        }
 
    ;

The code in the `try` block can be as extensive as we like. Here we envisage it calling a `doSomeStuff() `method. If an Exception is thrown in the `doSomeStuff() `method, or a method called by the` doSomeStuff()` method (and so on to any depth of nesting), execution will still jump to the `catch` section of `someRoutine()` (unless `doSomeStuff()` defines its own` try...catch` block to handle Exceptions). There can be any number of catch blocks;
 the one that will be used is the first one to match the class of Exception that has been raised (where matching means that the Exception that has been raised is either of the same class as the class listed at the start of the parentheses following the `catch` keyword or is a subclass of that class). Thus, for example, if `doSomeStuff() `threw an Exception of the `MyException` class or of a subclass of `MyException`, it would be caught by the first `catch` statement. The Exception object that has been thrown is then assigned to the local variable named at the end of the parenthesis (we can use any name we like for this). Thus, for example, if `doSomeStuff()` threw a `MyException`, the `MyException` object would be assigned to the local variable `myexc`, so that we could then do something with it if we wished (such as displaying an error message from one of its methods or properties).

The `finally` clause is optional, but must come last if present. The code in the finally block is executed before we leave `someRoutine() `however `someRoutine()` is terminated (whether by `return` or `goto` or any other means). A `finally` block can therefore be used to ensure things get tidied up even if an Exception has been raised.

This explanation is highly compressed;
 it's more to alert you to the existence of the Exception-handling mechanism than to give a full and detailed explanation. For a fuller explanation, read the chapter on "Exceptions and Error Handling" in Part III of the *TADS 3 System Manual* and look up the Exception class in the *adv3Lite Library Reference Manual*. It's also worth looking at the explanations of `throw` and `try` towards the end of the "Procedural Code" chapter in Part III of the *TADS 3 System Manual*.

## 13.4. Reacting to Actions

We have seen how the objects involved in an action can respond to it, but it's also possible to make other objects in scope react to it, both before it takes place and after it has taken place. A reaction that occurs before the action takes place can prevent the action happening at all (usually by means of the `exit` macro).

All the objects in scope get a chance to intervene beforehand in their `beforeAction() `method. For example:

 
    bob: Actor 'Bob; ; man;
 him'
 
        
        beforeAction()
    
 
    { 
        inherited;

 
        
        if(gActionIs(Yell))    
 
    {
 
        
        
 
        "There\'s no need to shout;  Bob can hear you
        
        
        perfectly well. ";

 
        
        
        exit;
 
        }

 
        }
;

If we want the player's *location  *to intervene, however, we should use its `roomBeforeAction() `method;  e.g.:

 
    lowCave: Room 'Low Cave'
 
        "There's not much headroom here. "
 
        roomBeforeAction()
    {
 
        
     if(gActionIs(Jump)) 
 
    {
 
        
 
        "You\'d better not jump here;  you\'d bump your head onthe
        
        low ceiling. ");
    
 
        
        exit;
 
        }

 
        }
;

We could do the same thing for an entire Region by using `regionBeforeAction()`, for example:

 
    caveRegion: Region
 
        regionBeforeAction()
    {
 
        
     if(gActionIs(Jump)) 
 
    {
 
        
 
        "You\'d better not jump here;  you'd bump your head onthe
        
        low ceiling. ");
    
 
        
        exit;
 
        }

 
        }
;

When exactly these methods are run depends on the value of an option set in `gameMain.beforeRunsBeforeCheck`.  If this is true then  `roomBeforeAction()`,` regionBeforeAction() `and` beforeAction() `run between the verify and check stages of the action (in that order). If it is nil (the current default), then these before notifiers are run between the check and action` `stages.  This latter is arguably the better option: if an action fails at the check stage it isn't going to be carried out, so that it's not then really appropriate for other objects to react to it.

Objects and locations can also react to actions after the event, through their `afterAction()`, `roomAfterAction() `and` regionAfterAction() `methods. For example:

 
    lowCave: Room 'Low Cave'  "There is very little headroom here. "
 
        roomAfterAction()  {
 
        
    if(gActionIs(Jump))    
 
        "Ouch! You bang your head on the ceiling. ";

 
        
    if(gActionIs(Yell))
 
        
 
        "Your shout echoes round the cave. ";
  }

 
    ;

 
    + vase: Thing 'vase'  "It looks very delicate. "
 
        afterAction()  {
 
        if(gActionIs(Yell) && !vase.location.ofKind(Actor))  
 
        "The vase vibrates alarmingly. ";

 
        }
;

 
    + bob: Actor 'Bob; ;  man;
 him'
 
        
     afterAction()
  
 
    { 
        inherited;

 
        
     if(gActionIs(Take) && gDobj == vase)
 
        
 
        "<q>Be careful with that!</q> Bob admonishes you. ";

 
        }
;

We call `inherited()` on the `beforeAction()` and `afterAction() `methods of Bob, by the way, since the library already defines something here that we don't want to disable (we'll see more about that in the next chapter).

There are one or two other places we can intervene. Before `roomBeforeAction(), regionBeforeAction() `and `beforeAction() `are called (in that order)`,` `actorAction() `is called on the actor, and we could use that to restrict the actor's actions when blindfolded or tied up, for example:

 
    me: Actor
     actorAction()
    
 
    { 
        if(isTiedUp && gActionIs(Stand))
 
        
 
    { 
        
 
        "You can't stand up while you're all tied up. "; 
 
        
        
    exit;
 
        }

 
        }
 
    isTiedUp = nil
 
    ;

## 13.5. Reacting to Travel

Travelling is an action like any other action, and can be reacted to in the same way. However, there's a special set of methods for reacting to travel and it's generally more convenient to use these specialized travel-related methods rather than the more generic beforeAction and afterAction methods.

We've already met one way of reacting to travel, namely by overriding the `noteTraversal(traveler)` on the TravelConnector via which the travel is taking place. In this instance the *traveler* parameter may be the actor who's travelling (if he or she is on foot) or it may be the Vehicle the actor is travelling in. When this method is called, travel is already taking place;  the various beforeTravel notifications have already been dealt with, so this method is a good place to carry out the side effects of travel, such as displaying a message describing it. We can also display a message describing travel in the `travelDesc() `method of a TravelConnector (which calls `travelDesc()` from `noteTraversal()`).

The travelling equivalent of `beforeAction()` is `beforeTravel(traveler, connector)`. Once again *traveler* may be the actor (if on foot) or the Vehicle in which the actor is travelling;
 *connector* is the TravelConnector via which the *traveler* is about to travel. If we want to, we can cancel the travel before it gets going by using the `exit` macro in this method, for example:

 
    riverBank: Room 'Bank of River' 'bank of the river'
    
 
        "A narrow bridge spans the river to the north. "
     north = bridge
 
    ;

 
    + troll: Actor 'troll;  mean mean-looking;  beast;
 him' 
 
        "A truly mean-looking beast! "
 
        beforeTravel(traveler, connector)
    {
 
        
     if(traveler == me && connector == bridge) 
 
    {
 
          
 
        "The troll blocks your path with a menacing growl! ";
 
        
    exit;

 
        
     }
 
        inherited(traveler, connector);

 
        }
;

There's a couple of points to note in this example. Firstly, once again, we call the inherited method. It is a good idea to get into the habit of always doing this on Actors (and ActorStates, which we'll meet in the next chapter), since if it's not needed, it'll do no harm, but it frequently is needed so that omitting it is likely to break something (a fairly easy way of introducing bugs into a game).

The second point to note is a second easy way to introduce bugs: suppose we later went back to modify `riverBank` by adding a TravelConnector to its `north` property:

 
    riverBank: Room 'Bank of River' 'bank of the river'
    
 
        "A narrow bridge spans the river to the north. "
 
        north: TravelConnector
 
    {
 
        
        destination = bridge
        travelDesc = "You walk cautiously onto the bridge. "
 
        }
;

Now when the player character tries to go north from the river bank, the TravelConnector by which he's attempting to travel is no longer the `bridge` but the anonymous TravelConnector on `riverBank.north`, so that the troll will no longer block the player character's path. One way to avoid this problem is to define the beforeTravel method on the troll as:

 
    + troll: Actor 'troll;  mean mean-looking;  beast;
 him' 
 
        "A truly mean-looking beast! "
 
        beforeTravel(traveler, connector)
    {
 
        
     if(traveler == me && connector == riverBank.north) 
 
    {
 
          
 
        "The troll blocks your path with a menacing growl! ";
 
        
    exit;

 
        
     }
 
        inherited(traveler, connector);

 
        }
;

This will then work whether `riverBank.north` is left as `bridge` or subsequently changed to a TravelConnector.

The most convenient travelling equivalent of `roomBeforeAction()` is `travelerLeaving(traveler,dest)`, which would need to be overridden on the Room the *traveler* (actor or vehicle) is about to leave to go to *dest*. We can also define this method on a Region, in which case it will be triggered when the traveler is about to move from a room that's in the Region in question to one that isn't.
All the travel methods we have just discussed are called on the region, room, or objects in the room, that the actor is just about to leave. The next set of methods, equivalent to the afterAction stage, are all called on the region, room, or objects in the room, that the player has just entered (or is just entering) at the end point of travel.

The travel equivalent of `afterAction()` is `afterTravel(traveler,connector)`. This is called on all the objects in scope in the new location just as the actor is entering it. So, for example, we could have:
 
    + bob: Actor 'Bob; ;  man;
 him'
    afterTravel(traveler, connector)
  
 
    { 
        if(traveler == me)
 
        
 
        "<.p><q>Ah, there you are!</q> Bob greets you. ";
 
        inherited(traveler, connector);

 
        }
;

In practice we'd probably code this greeting a little differently (as should become apparent in the next chapter), but the example serves to illustrate `afterTravel()` well enough.

The equivalent method to call on the room the actor is just entering is `travelerEntering(traveler,origin),` where the *origin* parameter is the room *traveler* is about to travel from. There's also a `travelerEntering(traveler, origin)` method of Region, where *origin *is once again the room traveled from. This method is only called on a Region after *traveler* has entered a room that's in the region from a room that isn't.

One potential catch with it is that this method is called before the room description is displayed;
 this may not be a problem, depending on what you want to do, but if you want to display something *after* the room description then it may be a bit of a problem. One workaround would be to use the `travelerEntering()` method to set up a Fuse to be executed at the end of the same turn:

 
    store: Room 'Store'
    
 
        "All sorts of interesting goods are on sale here. The way out
        is back to the south. "
 
        
        south = streetCorner
 
        
        travelerEntering(traveler, origin)
    
 
    {    
 
        "{I}
 enter{s/ed}
 from <<origin.theName>>. ";

 
        
        new Fuse(self, &enterMsg, 0);
 
    }

 
        
        enterMsg = "{I}
 look{s/ed}
 around the shop with keen interest. "
 
    ;

If you just want to display a message after entering a room, however, it's probably simpler just to use afterTravel():

 
    store: Room 'Store'
    
 
        "All sorts of interesting goods are on sale here. The way out
        is back to the south. "
 
        
        south = streetCorner
 
        
        afterTravel(traveler, connector)
    
 
    {    
 
        "{I}
 look{s/ed}
 around the shop with keen interest. ";

 
        }
 
    ;

## 13.6. NPC Actions

Actions carried out by NPCs (non-player characters, the other actors in our game besides the player character, who is controlled by the player) present no particular problems in adv3Lite, since the library handles them in virtually the same manner as it does actions carried out by the player character. If you actually need an action to work differently for the player character and for NPCs you can test the identity of `gActor`, either with `gActor == gPlayerChar` or with `gActor ==me` or with `gActor.isPlayerChar()`; for example:

 
    largeBox: OpenableContainer 'large box'
     dobjFor(Take)
    
 
    { 
        check()
 
        
 
    { 
        
     if(gActor.isPlayerChar())
 
        
        
 
        "You're too much of a weakling to pick it up;  you'll
        
        
     have to persuade someone else to carry it for you. ";

 
        
        }
 
    }

 
    ;

The main thing we need to take care of if we want actions to work for actors other than the player character is making sure any messages (or other output text) we write will work as well for other actors as they do for the player character. In practice this means that we must write them all with parameter substitution strings, not just as straightforward text. For example, if an actor other than a player might put down the vase, then instead of writing something like:

 
    vase: Container 'priceless vase;  cut glass'
 
        okayDropMsg = 'You carefully lower the vase to the ground. '
    ;
    

We must write:

 
    vase: Container 'priceless vase;  cut glass'
     okayDropMsg = '{I}
 carefully lower{s/ed}
 the vase to the ground. '    

 
    ;

Then we'll get "You carefully lower the vase to the ground" or "Aunt Mildred carefully lowers the vase to the ground" as appropriate.

To make an NPC carry out an action we can use  `replaceActorAction()` or `nestedActorAction().` We could use either of these to make an NPC carry out a brand new action;
 the only difference is that `replaceActorAction()` adds an exit statement after executing the action to stop the action it was called from, while `nestedActorAction()` would allow any calling action to continue (if, for example, either macro were called from the action routine of some other action). Both functions are called with two or more arguments: the first argument is the actor who is to carry out the action;
 the second is the action to be carried out. Any further arguments are the objects on which the action is to be carried out. So, for example, we could have:

 
    nestedActorAction(bob, Jump);

 
    nestedActorAction(bob, Take, redBall);
nestedActorAction(bob, PutIn, redBall, blueBox);

The first of these would make Bob jump;
 the second would make Bob take the red ball;
 the third would make Bob put the red ball in the blue box.

Note that all of these are ways of making Bob act 'spontaneously' (under program control);  they are not ways in which the *player* or *player character* gives orders to Bob, they are ways in which the *game author* can make Bob do things.

Making NPCs carry out actions is only a small part of implementing NPC behaviour. In the next chapter we shall go on to see what else we can do with NPCs in adv3Lite.

[&laquo; Go to previous chapter](12-locks-and-other-gadgets.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](14-non-player-characters.html)
