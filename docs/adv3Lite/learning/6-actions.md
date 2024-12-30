---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 6. Actions

## 6.1. Taxonomy of Actions

Although there is quite some way to go to cover all the main features of adv3Lite, we've now covered the fundamentals of the adv3Lite world model. But that doesn't enable us to write any very interesting games;  we can build a map and populate it with objects, but we can't make them *do* much;  indeed, as yet, we can't make them do anything beyond their default behaviour. We can build a very basic simulation, but we can't make a game. What makes a work of Interactive Fiction interesting is the way it responds to the player's commands, and in particular, the way its responses go beyond the basic library model. A great deal of the programming in IF consists in defining the response to player's commands. This chapter will lay the groundwork for doing this. We'll leave some of the finer details to a later chapter.

Before we can start coding responses to actions, we need to understand the types and parts of an action. In form, commands in adv3Lite (and most IF in general) take one of three forms:

- *verb -- *for example `look

- *verb direct-object -- *for example `take ball

- *verb direct-object preposition indirect-object --* for example `put ball in box

In these commands, the *verb* part is always a verb in the imperative mood (the kind of verb form we use for giving orders), for example `go`, `take`, `put`, `drop`. The *direct-object* is generally a noun naming a game object;
 the direct object is the object on which we want the command to act on directly (taking, dropping or moving the ball, for example). Where the command involves two objects, the second object is called the *indirect object*;
 for example the box is the indirect object in the command `put ball in box`. The preposition is the word between the two objects defining how the indirect object is involved in the command (e.g. `put the ball *in* the box`, `cut the string *with* the knife`, or `give the book *to* the man`).

Sometimes, both English and adv3Lite allow a variant form in which the indirect object comes before the direct object and the preposition (normally 'to') is omitted;  for example `give Bob the ball` means `give the ball to Bob`;  just as `throw Bob the ball` means `throw the ball to Bob`. With commands of this kind we have to translate the phrasing back to the longer form (including a preposition) to work out which is direct object, and which is the indirect object.

In working with actions in adv3Lite we'll often see names (often of macros, which we'll explain shortly) containing 'dobj' and 'iobj' somewhere. It helps to recognize that these are nearly always abbreviations for direct object and indirect object.

The three kinds of actions we've encountered so far correspond to three classes of action in adv3Lite:

- `IAction`  - actions with a command only (and no objects), like `look.
- `TAction` -- actions with one object, the direct object, like `take ball
- `TIAction` -- actions with two objects, a direct object and an indirect object, like `put ball under table`.

It's often useful to know what the current action is, who's carrying it out, and what objects are involved in it. For those purposes we can use the following pseudo-global variables (actually macros):

- `gAction` -- the current action.

- `gActor` -- the actor performing the current action.

- `gDobj` -- the direct object of the current action.

- `gIobj` -- the indirect object of the current action.

- `gCommand` -- the current command. We'll explain the notion of a command below.

There's also a pair of macros (which look like functions) we can use to test what the current action is:

- `gActionIs(Something)` -- returns `true` if the current action is Something.

- `gActionIn(Something, SomethingElse...
YetSomethingElse) `-- returns `true` if the current action is one of those listed.
These might be used like this:

 
    if(gActionIs(Take))

 
        "Don't be greedy -- you're carrying quite enough already. "; 
 
    if(gActionIn(PutIn, PutOn, PutUnder, PutBehind))

 
        "Just leave things where they are! ";

For a complete list of actions, go to the *Library Reference Manual*, and then click the *Actions* link third along from the left. A list of actions defined in the adv3Lite library will then appear in the bottom left-hand panel. Alternatively, you can look up the action reference section in the *adv3Lite Manual*.

Amongst the actions listed are a number that look a bit like `TActions` or `TIActions`, but are in fact something a bit different. Examples of such actions include:

- GO NORTH

- PUSH THE TROLLEY EAST

- TYPE SUGARPOP ON TERMINAL

- ASK BOB ABOUT THE WEATHER

- LOOK UP RABIES IN MEDICAL TEXTBOOK

In the first of these NORTH is not the direct object of the GO command;
 this is a `TravelAction` (effectively a kind of Iaction), not a `TIAction`. In adv3Lite *north* is a direction, not a Thing (grammatically it's more like an adverb than a noun in this context). Indeed, an IF player will normally abbreviate this kind of command to just the direction, `north` or `n`. Similarly, the second command is not a `TIAction`, but a `TAction`;  TROLLEY is the direct object but there is no indirect object (and in particular, EAST is not the indirect object). In the command TYPE SUGARPOP ON TERMINAL, it may look as if SUGARPOP is the direct object and TERMINAL the indirect object, but this is not so: SUGARPOP is not the name of an object in the game, but a string of characters (perhaps a password) that the player wants to type on the terminal. Thus this is not a `TIAction` (as it might first appear) but a `LiteralTAction`, in which the terminal is the direct object (accessible as `gDobj`) and SUGARPOP is the 'literal phrase' (accessible as `gLiteral`). Neither of the final two examples is a `TIAction` either (despite initial appearances);  the way adv3Lite defines these two actions (and others like them), THE WEATHER and RABIES are topics, not things (since the player is not restricted to talking about things implemented in the game). ASK ABOUT and LOOK UP are `TopicTActions`.

The difference between a topic and a literal may not be immediately apparent. The difference is that a Literal is simply a piece of text, with no reference to any simulation object in the game. A topic may just match a piece of text, but it may also refer to a `Topic` object or a simulation object (we'll talk more about `Topic` objects in the next chapter). If the command had been ASK BOB ABOUT SUSAN, the action would still have been a `TopicTAction` (with Bob as the direct object), even if there was an actor called Susan implemented in the game;  but even though SUSAN would, in the first instance, be matched as a topic, a connection could also be made between this topic and the Susan object (don't worry if this explanation seems a little obscure right now, we'll unpack it further in later chapters).

The main point to note right now is that there are four more types of action:

- `LiteralAction
-- `a command consisting of a *verb* plus some *literal text*.
- `LiteralTAction` -- a command consisting of a *verb*, one *thing *(the direct object), and some *literal text* (e.g. `write foo on paper`).

- `TopicAction` -- a command consisting of a *verb* plus one *topic* (e.g. `talk about the weather`)

- `TopicTAction` -- a command consisting of a *verb* plus one *thing* (the direct object) plus one *topic* (e.g. `tell bob about the weather`).

Knowing the types of action is only the prelude to learning how to customize them, but before we go on to that, there's another couple of coding constructs it will be helpful to know about.

## 6.2. Coding Excursus 9 -- Macros and Propertysets

### 6.2.1. Macros

Several times now we've referred to things called *macros* without really explaining what they are. Put simply, a macro is a kind of convenient abbreviation. Put a bit more technically, a macro is a piece of text that the *preprocessor* replaces with a predefined expansion before the compiler gets to work on the source file. For example, in reality TADS 3 has no global variables. Things that look like global variables are in reality the properties on some object (such as `libGlobal`). The current action, for example, is in reality `libGlobal.curAction`, but the macro `gAction` is defined as a convenient abbreviation for this. The current direct object is in reality `libGlobal.curAction.curDobj`, but it's much easier just to be able to write `gDobj`.

Macros are defined using the keyword `#define`. The macros just mentioned are defined like this:

 
    #define gAction (libGlobal.curAction)#define gDobj (gAction.curDobj)
In effect, these are instructions to the preprocessor (which runs just prior to compilation), telling it that every time it sees the text `gAction` in the source file it should replace it with `(libGlobal.curAction)`, and that every time it sees the text `gDobj` in the source file it should replace it with `(gAction.curDobj)`. Note that this replacement is cumulative;
 having replaced `gDobj` with `(gAction.curDobj) `the preprocessor will replace `gAction` with `(libGlobal.curAction)` so that the full expansion of `gDobj` becomes `((libGlobal.curAction).curDobj)`;
 thus whenever we write `gDobj` in our source code, `((libGlobal.curAction).curDobj)` is what the compiler 'sees'. (Macro replacement is not, however, recursive;  if a macro contains its own name in its expansion, it will not recursively expand its own name on any second or subsequent pass).

Note also that macros only take effect in the source file in which they are defined. If we want macros to take effect in several (or all) of our source files, we need to define them in a header file (one with a .h extension) and then include the header file in all our source files. This is one of the reasons why we need to put the following near the top of all our adv3Lite game source files:

 
    #include "advlite.h"
This ensures that we can use all the macros defined in the adv3Lite library. If we defined some macros of our own we wanted to use in our own game, we might put them in a file called myGame.h then ensure we added the following near the top of all our source files:

 
    #include "myGame.h"
We would probably use quote marks ("") rather than angle brackets (<>) here because we'd presumably put myGame.h in the same directory as all the other source files for our game.

Macros can be both simpler and more complicated than those we've seen so far. The very simplest form of macro just defines that the macro has been defined;  e.g.:

 
    #define ExtraHandsome
This can then be used to define an optional block of code that's only compiled if the `ExtraHandsome` macro has been defined:

 
    #ifdef ExtraHandsome
     modify me
 
        
        desc = "So unbelievably handsome you can't bear to look atyourself. "
    ;
    

 
    #endif
Almost as simple is a macro that just gives a symbolic name to a constant:

 
    #define SpecialOptionCount 12
Rather more complicated is the function-type macro, which takes one or more arguments, for example:

 
    #define Double(X)  (X * 2)
This looks a bit like a function, but what actually happen is that the preprocessor substitutes whatever value we put in for X and replaces it with that value in the expansion. For example, if the preprocessor encounters `Double(3)` it will replace it with `(3 * 2) `before the compiler gets to work on it.

Function-type macros can also use *token pasting* to construct a programming token out of its arguments, using the `##` token pasting symbol. This is best explained by means of an example. Suppose we define the following macro:

 
    #define goInstead(dirn)` ` doInstead(Go, dirn##Dir)
Then when the processor comes across `goInstead(north)` it will replace it with `doInstead(Go, northDir)`.

The foregoing is only a quick sketch of what macros can do. To get the full story on macros, as well as including header files and other features of the preprocessor see the article on 'The Preprocessor' in Part III of the *TADS 3 System Manual*.

To find out what macros the library defines and what they do, click the *Macros* link in the bar at the top of the *Library Reference Manual*. A list of library macros will then

appear in the bottom left-hand panel. You can scroll through this list and click on any macro you're interested in to see its definition, often along with a brief description of what it's for.

### 6.2.2. Propertysets

A *Property Set* is simply a short-cut way of defining a number of related properties with similar names. The `propertyset` keyword is used to define the pattern to be used in such a set of properties. This pattern uses an asterisk (``*) as a placeholder for the variable part of the property name. For example, suppose we wanted to define a whole set of properties that included 'put' in their name;  we might define:

 
    propertyset 'put*'
 
    { 
     In(x)  {  moveInto(x);
 }

 
        
    On() { "You can't do that. " }
 
     Under(x) { "There's no room under <<x.theName>>. "}

 
        
    Behind(x}
 { }
 
     Msg = 'You put it somewhere. '
 
    }

This is exactly the same as defining:

 
    putIn(x)  {  moveInto(x);
 }

 
    putOn() { "You can't do that. " }
putUnder(x) { "There's no room under <<x.theName>>. "}

 
    putBehind(x}
 { }
putMsg = 'You put it somewhere. '
And this, indeed, is precisely what the compiler 'sees'.

A macro definition can be combined with a propertyset definition;
 for example the library defines:

 
    dobjFor(action)  objFor(Dobj, action)iobjFor(action) objFor(Iobj, action)
 
    objFor(which, action) propertyset '*' ## #@which ## #@action
The effect of this somewhat arcane definition is as if we'd defined:

 
    dobjFor(action)  propertyset '*Dobj' ## #action
 
    iobjFor(action)  propertyset '*Iobj' ## #action
For example, consider the following code (of a kind that's very common when we start customizing and defining actions):

 
    dobjFor(Take)
 
    { 
    preCond = [touchObj]
 
        verify()
 
    {
 
        if(isIn(gActor))
 
        
        
    illogicalNow('You are already holding it! '); 
 
        }

 
        check() { }
 
    action()
    
 
    { 
        actionMoveInto(gActor);
 
        }

 
        report()
     {
 
        
 
        "Taken. ";
 
    }

 
    }

This is exactly equivalent to:

 
        preCondDobjTake = [touchObj]
 
        verifyDobjTake()
    
 
    {
 
        if(isIn(gActor))
 
        
        
    illogicalNow('You are already holding it! ');  
    }

 
        checkDobjTake() { }

 
        actionDobjTake()
    
 
    { 
        actionMoveInto(gActor);
 
        }

 
        reportDobjTake()
     {
 
        
 
        "Taken. ";
 
    }

What's important here is not so much that we understand every step of the process by which the first piece of code becomes equivalent to the second, but that we recognize the equivalence.

For the full story on property sets, read the 'Property Sets' section of the 'Object Definitions' article in Part III of the *TADS 3 System Manual*.

## 6.3. Customizing Action Behaviour

When it comes to customizing the behaviour of existing actions (or defining the behaviour of new actions), actions basically divide into two kinds: those that have direct objects (TAction`, `TIAction, TopicTAction and LiteralTAction) and those without (IAction, TopicAction, and LiteralAction). The latter kind is easier to explain, so we'll start with that first.

### 6.3.1. Actions Without Objects

The behaviour of an action that has no objects is defined in the `execAction()` method

of the action class. To customize the behaviour of an existing action, we simply modify the appropriate action class and override its `execAction()` method. For example, if we want to customize the way the Jump action works, we might do this:

 
    modify Jump
 
        execAction(cmd)
     {
 
        
        if(gActor.bulk > 1500)
        
        
 
        "You're too big to jump. "; 
 
        
        else
        
        
 
        "You jump vigorously, but it does no good. ";

 
        }
;

If we're modifying the behaviour of an action defined in the library, it's a good idea first to look at how the library defines it, however. For example, the library defines `Sleep` as:

 
    DefineIAction(Sleep)
 
        execAction(cmd)
     {
 
        
        DMsg(no sleeping, 'This {dummy}
 {is}
 no time for sleeping.');  
    }
    
 
    ;

So that if we want to change the way the Sleep action works, we might do better to change the 'no sleeping' message (how to do this is a subject to which we shall return). To look up the definition of an existing action, click on the *Actions* link near the left hand end of the top bar of the *Library Reference Manual*. A list of actions will then appear in the bottom left-hand pane, and you can scroll down and click on the one you're interested in.

Incidentally, the *cmd* parameter to the `execAction(cmd)` method refers to the current `Command` object, which contains information about how the parser interpreted the command the player typed. We'll say more about Command objects later.

### 6.3.2. Actions With Objects

If an action has a direct object, or both a direct object and an indirect object, then we *`don't`* override `execAction(cmd)`;  instead we define the action handling on one or both of those objects, generally by using the `dobjFor()` macro on the direct object and the `iobjFor()` macro on the indirect object (just *how* we use them is something we'll come to shortly). But what exactly do we mean by defining the action handling on these objects?

Where an action involves a direct object, or a direct object and an indirect object, the significant stages in handling the action are performed by calling a number of methods on these objects (these are called directly or indirectly from the action's `execAction()` method, which is why we shouldn't override it);  these are the methods

we define with the `dobjFor()` and `iobjFor() `macros. The direct and indirect objects of an action (where they exist) will always be objects derived from the `Thing` class (either of class `Thing` themselves or inheriting from `Thing`). The basic handling for each action therefore needs to be defined on the `Thing` class, even if it's simply a refusal to carry out the action (e.g. displaying a message saying "You can't eat that" in response to the Eat action). It may then be necessary to override this basic action handling on subclasses that need to behave differently, for example to allow objects of class `Food` to be eaten, or stopping non-portable objects from being taken and moved around. Finally, we may often want to override the action handling on individual objects to make them behave in a particular way;  for example, if only one green button makes the airlock door slide open, then we need to write special action handling for pressing that particular green button.

We can customize action handling at any of these levels (or introduce a new level of our own by defining custom classes). If we want to change the library's default handling of certain actions, we can modify the action handling on `Thing` or on one of its relevant subclasses;  if we need specialized handling just on a particular object, we override the action handling just for that object.

The `dobjFor() `and `iobjFor()` macros can also be used with the pseudo-action, `Default`. If we define `dobjFor(Default)` or `iobjFor(Default)` verify handlers on a class or action, these handlers will be used on objects for which `isDecoration` is true (normally the `Decoration` class and its subclasses) where the action was not listed in the object's `decorationActions` property. The default definition on `Thing` of `decorationActions` is `[Examine,GoTo]`, which means that the commands EXAMINE X and GO TO X work normally when X is a Decoration, but that any other command directed to X will be met with the response "The X is not important".
### 6.3.3. Stages of an Action

There's no need to override every stage of action handling, but if we were to, our action handling would, in outline, take the following form:

 
    banana: Food 'banana;  ripe;  food fruit'
        dobjFor(Eat)
    
 
    { 
        
     remap = xxx
 
        
        
    preCond = [ ... ]
        
        verify() { ... }

 
        
        
    check() { ... }
 
        
     action() { ... }

 
        
        
    report() { ... }
 
     }

 
    ;

Where the ... represents the particular code we'd need to write to customize the action handling at each stage.

At a first approximation, the action handling goes through each of the remap, verify, check, action and report stages in turn. In fact, many of these stages could stop the action, so that, for example, if we wrote a `verify() `routine that always stopped the action, there would be no need to go on to write `check()` and `action() `routines (they'd never be executed). This is only a first approximation, because the `preCond` property contains a number of objects (called preconditions) defining methods that are called either at the verify stage, or between the verify and check stages. Also, if the action involves several objects (e.g. `take bell, book and candle`) then the `report()` stage is only executed once at the end, so that it can report on the complete set of actions (e.g. "You take the bell, the book and the candle.")

We'll now look at each stage in turn.

### 6.3.4. Remap

The purpose of the remap stage is to divert one action into the same action on a different object. If you want this kind of remapping, you simply set the remap property to the other object you want the action diverted to.

For example, if we define a desk with a drawer, we might want `open desk` to be treated as `open drawer`. We can achieve that like this:

 
    desk: Surface, Heavy 'desk'
 
     
 
        "The desk has a single drawer. "
        dobjFor(Open) { remap = drawer }

 
    ;

 
    + drawer: OpenableContainer, Fixture 'drawer'; 
Of course we'd probably use `remapIn =drawer` here to divert a whole set of actions at once, but the example serves to illustrate the principle. In fact the library uses just this mechanism to make `remapIn` work, for example:
 
    dobjFor(LookIn) {
 
        remap = remapIn
     ...
 
     }

If `remapIn` is `nil` then `remap` is nil, so no remapping takes place;
 but if `remapIn` points to another object, then so does `remap`, and the remapping goes ahead for LookIn and all the other relevant actions.

Note that this is the *only* kind of remapping that remap can do in adv3Lite. If you want to change one action into a totally different action, then the best way to do it is with a `Doer`, which is something we'll come to later.

### 6.3.5. Verify

The verify stage has two purposes:

- To help the parser decide which objects are the most suitable targets for the current command.

- To explain why the command may not be carried out with this object if the verify routine decides to disallow it.

In the language of TADS 3, the purpose of a verify routine is to decide whether or not an action with this object is *logical*, and how logical or illogical it is. In cases of ambiguity (e.g. `take ball` when there's a red ball, a blue ball, and a green ball all in scope), the parser will choose the most logical object in scope. If it finds a tie for first place (i.e. more than one object has the most logical -- or least illogical -- score) it will prompt the player to stipulate which object he or she means. In this case 'logical' means 'logical from the perspective of the player' (the point is to try to guess what the player most probably meant). So, for example, if there's a large stone ornamental ball on a plinth, a small red rubber ball lying on the ground, and a golf ball in the player's hand, `take ball` is most likely to refer to the small red rubber ball (the large stone ball is rather obviously untakeable and the player already has the golf ball).

The simplest form of a verify() routine is one that does nothing;
 far from being pointless this means that the action is allowed to go ahead with this object;
 it's a perfectly logical choice of object for this command. It's useful to define empty verify methods to allow actions the library would otherwise have ruled out as illogical, for example:

 
    banana: Thing 'banana'
 
        dobjFor(Eat)
     {
 
        
        verify() {}
 
    }

 
    ;

 
    knife: Thing 'knife'
     iobjFor(CutWith)
    
 
    { 
        verify() {}

 
        }
 ;

We can't eat ordinary things, but we can eat a banana (of course it would have been simpler to define the banana as a `Food` here, but we're just illustrating the principle);  in general the library won't let us use things to cut other things with, but a knife presumably can be used for cutting.

It's almost as simple to use verify to rule out an action. In the simplest case we use the `illogical()` macro, which also needs to state why the action is being disallowed;  for example:

 
    knife: Thing 'knife'
 
        dobjFor(Eat)
     {
 
        
        verify()
     
 
    {
 
        
        
     illogical('You lack the training to swallow a knifesafely. ');  
        
    }
    
 
        }
 
    ;

We can also disallow actions conditionally, depending on the game state, for example:

 
    banana: Food 'banana'
     hasBeenPeeled = nil
 
        dobjFor(Eat)
     {
 
        
        verify()
     
 
    {
 
        
        
     if(!hasBeenPeeled)
        
        
    illogicalNow('You\'ll have to peel it first. '); 
 
        
        }
 
    }

;
Note that in this instance we use `illogicalNow()` rather than just `illogical()`;
 eating a banana isn't illogical *per se*, it's just illogical to attempt it until the banana has been peeled. The point of using a different macro here is that eating the unpeeled banana would be less illogical than attempting to eat the ornamental stone banana on the sculpture, say, so that the we still want the parser to prefer the fruit to the sculpture even when the fruit is unpeeled.

A third kind of verify routine allows an action to proceed, but adjusts its logical ranking, either up or down from the default of 100. For example, if at some point in the game the protagonist is romantically attracted to a particular NPC (let's call her Mary), then other things being equal, she's the most likely target of a Kiss action, so we might define:

 
    mary: Actor 'Mary; ;  woman;
 her'
 
        
        
    dobjFor(Kiss)
    
 
    { 
        
     verify() {  logicalRank(120);
 }

 
        
    }
;

With this definition, `kiss woman` will be taken to mean `kiss mary` even if other women are present, although an explicit `kiss anne` command will still be allowed (provided Anne is present). As is apparent from this example, the `logicalRank()` macro takes one arguments: the logical rank score, with 100 being the default, so that giving something a logical rank of more than 100 makes it a likely target of the command, while decreasing it below 100 makes it a possible but not likely target;
 the library assumes that logical ranks will generally be in the range 50-150.

There are a number of macros we can use within verify routines. As a quick rule-of-thumb, those whose name starts with the letter i disallow the action (with this object) altogether, while the rest allow the action to go ahead with this object but vary the likelihood of the parser choosing it as a target for the command. The complete list (slightly simplified) is:

- `logical` -- equivalent to assigning a logical rank of 100, or defining an empty verify statement. This is provided so that we can make it explicit that we're allowing an action, which may be particularly useful when our verify routine contains a number of conditional branches.

- `illogical(msg) `-- disallow this action with this object, because the object is never suitable (e.g. trying to cut something with a banana);
 the *msg* parameter explains why we're disallowing the action (msg can be a single-quoted string or a message property;  we'll talk about message properties in a later chapter).

- `implausible(msg)` -- disallow this action with this object. This is almost the same as `illogical` except that it's regarded as slightly less illogical, so that the parser will prefer an implausible choice to an illogical one.

- `illogicalNow(msg)` -- disallow the action because it's inappropriate while the object is in its present state (e.g. trying to eat an unpeeled banana), or possibly because it's inappropriate while some other part of the game world is in its present state.

- `illogicalSelf(msg)` -- disallow the action where the direct and indirect objects are the same and the object can't carry out the action on itself, e.g. `cut knife with knife`.

- `inaccessible(msg)` -- disallow the action because the object isn't accessible (even though it's in scope).

- `dangerous` -- allow the action to be carried out if the player explicitly insists on it, but not otherwise (e.g. as an implicit action or as the result of the parser choosing a default object). This is intended for actions that the player would perceive as obviously dangerous, such as breaking a glass jar full of poisonous gas, to prevent them being carried out by accident.

- `nonObvious` -- similar to dangerous, but intended to prevent a player solving a puzzle by accident by using an unobvious object to carry out a command even though it may in fact be the correct solution, e.g. `unlock case with toothpick`.

Fuller details are available in the other documentation we'll mention at this end of this section. In the meantime there are a few more points to note about verify routines:

- Verify routines should *never* change the game state, and *never *display any text except via the macros just listed. A verify routine may be run several times during object resolution and command execution.

- It's perfectly okay for a verify routine to produce more than one result;  the one that counts will be the *least* logical one currently applicable.

- It's therefore safe to use the `inherited` keyword to use the inherited behaviour of a verify routine and then add further cases of your own.

- A verify routine should thus contain nothing apart from one or more of the macros listed above, the `inherited` keyword, and flow control statements (such as `if).

### 6.3.6. Check

The only role of a check routine is to disallow actions (if they need to be disallowed). At first sight this may seem the same as ruling out an action with an `illogical` macro at the verify stage. The difference is that ruling out an action at the check stage doesn't affect the parser's choice of object. For a check() routine to block an action all it needs to do is to display a message explaining why the action is being disallowed.

For example, suppose the player character is a woman wearing a dress. Removing the dress is not illogical, insofar as the dress is a perfectly sensible target of a Doff command, but we might nevertheless not want to allow it. We could therefore write:

 
    me: Actor;

 
    + Wearable 'dress'
 
        wornBy = me
     dobjFor(Doff)
    
 
    { 
        check()
 
        
 
    { 
          
 
        "It would be quite unseemly to strip in public. ";
 
        
        
 
        
        }
 
    }

 
    ;

Check routines should generally be used for no other purpose than this (or to be overridden to do nothing in order to allow an action to go ahead when inheriting from something that would have prevented it), although it is, of course, perfectly legal to rule out an action conditionally in check. For example, if we wanted our player character to be able to remove her dress in her own bedroom but nowhere else, we could rewrite the previous example as:

 
    + Wearable 'dress'
 
        wornBy = me
     dobjFor(Doff)
    
 
    { 
        check()
 
        
 
    {
 
    if(!me.isIn(myBedroom))
 
        
          
 
        "It would be quite unseemly to strip in public. ";
 
        
        
 
        
        }

 
        }
 
    ;

Check routines should not display text other than to explain why an action is being forbidden, nor should they change the game state (with one possible exception: it's perfectly okay for a check routine to set a flag the sole purpose of which is to show that the check routine has been run, so that we can later test whether the player attempted a certain action even though it did not succeed).

For more guidance on the difference between check and verify, see the article on 'Verify, Check and When to Use Which' in the *TADS 3 Technical Manual*.

### 6.3.7. Action

Once action processing has survived the remap, verify, check (and possibly precondition) stages, we're ready to actually carry out the action. That's what the action stage is for: to make the appropriate changes to the game state and report what's happened. This can be as simple or as complicated as we like. At its simplest an action routine may simply report that nothing very much happened as a result of the action:

 
    + Button 'green button'
 
        dobjFor(Push)
    {
 
        
     action() { "You push the green button but nothing happens. ";
 }
    }
    

 
    ;

More usually, we'd want some change to result from the action. For example, if the green button controls a sliding door, we'd want pushing it to open the door when closed and close the door when open:

 
    + Button 'green button'
 
        dobjFor(Push)
    {
 
        
     action() 
 
    {
 
        
        
    slidingDoor.makeOpen(!slidingDoor.isOpen);
 
        
 
        "You push the green button and the door slides
 
        
        
     <<slidingDoor.isOpen ? 'open' : 'closed'>>. ";  
        }

 
        }
 
    ;
One complication occurs when the action involves two objects, e.g. `cut banana with knife`. In such a case we have to decide whether to define the action handling on the direct object or the indirect object. Although it would be possible to implement part of the handling on one and part of it on another, this is likely to lead to confusion unless

we're very sure what we're doing. In general it's probably a good idea to define the action handling on the object that makes most difference to the outcome. For example, if there's only one item in the game capable of cutting things, or if all the cutting objects behave in much the same way, but cutting different things (the butter, the banana, the glass case, and Aunt Beatrice, say) has substantially different results, it's probably best to define the action handling on the direct object of CutWith commands. If however, it makes a huge difference whether you cut things with the butter knife or the dagger or the Magic Diamond Sword, then if may be better to define the action handling on the indirect object (if both the object cut and the object used to cut it with make a significant difference, then we just have to make an arbitrary choice of one or the other and stick with it).

Another approach when we want the outcome of an action to depend on a particular pairing of objects is to use a `Doer`, which we'll discuss in due course.

We can more or less put whatever code we like in an action routine, provided it gets the job done. It's always worth remembering to use the `inherited` keyword where we want the default handling to take place but just want to customize it slightly, e.g.:

 
    vase 'antique vase;  delicate glass'
     dobjFor(Drop)
    
 
    { 
        
    action()
 
        
 
    { 
        
        inherited;

 
        
        
 
        "You set the glass vase down <i>very</i> carefully.";
 
        
    }
    
 
        }
;

Here we want `drop vase` to have its normal effect, we just want it reported differently.

At this point we should pause to consider the effect of displaying something at the action stage. Normally the library's standard report for an action (such as a laconic 'Dropped') is produced at the `report()` stage (which we'll come to next). Displaying something at the action stage suppresses what would have been displayed at the report stage for that object (so, in the example above, we won't get the 'dropped' message as well). If we want something displayed at the action stage to be in addition to what the report stage is going to report, then we need to use either the `reportAfter()` macro or the `extraReport()` macro, like this:

 
    vase 'antique vase;  delicate glass'
     dobjFor(Drop)
    
 
    { 
        
    action()
 
        
 
    { 
        
        inherited;

 
        
        
        extraReport('(Remembering to be very careful with thevase)');  
        
        reportAfter('You feel most relieved to have set the vase
 
        
        
        down without breaking it. ')
        
     }

 
        }

;
This might produce an output like this:

 
    >drop vase`(Remembering to be very careful with the vase)Dropped.You feel most relieved to have set the vase down without breaking it.

Or possibly this:

 
    >drop all`(Remembering to be very careful with the vase)You drop the penknife, the vase, the big red ball and
the walking stick.You feel most relieved to have set the vase down without breaking it.

Two methods it's useful to know about in relation to action routines are `doNested()` and `doInstead()`. Both of these can be used to carry out some other action;  the difference is that the action routine will continue after `doNested()` but not after `doInstead()` (which stops the current action).  For example, suppose we have a button controlling a sliding door, but after the player has discovered that the door can be opened by pressing the button, we want `open door` to be redirected to `push button` provided the door isn't already open. We might write something like this:

 
    + slidingDoor: Fixture 'sliding door'
 
        dobjFor(Open)
    {
 
        
    verify()
 
    {
 
        
        if(isOpen)
 
        
    illogicalNow('It\'s already open. '); 
 
        
    }
 
     check()
    
 
    { 
        if(!opened)
 
        
        
 
        "You\'ll have to work out how to open it. ";  
     }

 
        
    action()  { doInstead(Push, greenButton);
 }
    }

 
    ;

Note that `doInstead()` and `doNested()` are both methods, not functions or macros, so they can only be used on objects that define them. They are in fact defined on the `Redirector` class, from which `Thing`, `Doer` and `Action` inherit. They can thus only be used from methods of these three classes, or of classes or objects that descend from any of these three classes.

### 6.3.8. Report

The sole function of the report stage is to report on the action that's just taken place. The report produced should be a default kind of report -- the standard report for that kind of action -- and it should not only be applicable to any object that might be involved in the action, but to all of them (in a case where the same action, such as `take all`, may be iterated over a number of objects).

A report routine should thus never be written to report on a specific object. If you want a customized report for a specific object this should be defined in the action() routine of the object concerned. It follows that it never really makes sense to define a report routine anywhere other than on the Thing class. It certainly makes little or no sense to define it on a particular object, since in the general case you can never be sure which object's `report()` routine will be called (one possible exception might be when the grammar of the action only allows it to act on a single object at a time). The function of a report routine is to give a summary report of the effect of the action on all the objects the action iterated over, e.g. "You take the ball, the bat and the gloves"), and to do this it will be called only on the last object in such a list;  in general you won't know what that last object will be. This is why report routines should generally only be defined on the Thing class, so that the same version will be called no matter what Thing it happens to be called on.

It follows that you need some way of referring to all the objects an action iterated over. The library defines special macro for this purpose, called `gActionListStr`. Once an action reaches the report stage (but not before) this macro will evaluate to a single-quoted string containing a formatted list of the objects involved in the command, e.g. 'the ball, the bat and the gloves'. It can thus be used like this:

 
    modify Thing
    dobjFor(Take)
  
 
    { 
        report()
 
        
 
    { 
        
 
        "You carefully pick up <<gActionListStr>>. ";

 
        
        }
 
    }

 
    ;

Any report routine you write should basically follow this pattern (though there are slightly more sophisticated ways of doing it we'll encounter in due course). In particular a report routine should never (normally) be written with a string like `"You carefully pick up<<gDobj.theName>>"`, since this will only refer to what happens to have been the last object in the list, not the whole list.
It's also possible to make the list of objects the subject of a sentence like this, but that requires techniques we haven't covered yet.

### 6.3.9. Precondition

The final part of action-handling we need to look at is preCond, short for precondition. Often in Interactive Fiction one (relatively mundane) action needs to be carried out in order to allow another one to go ahead. In order to put the banana in the box, I first need to be holding the banana;
 in order to go through the door, I first need to open it;
 in order to open the door, I first need to unlock it. If I can't hold the banana, or open the door, or unlock the door, the main action cannot go ahead. In other cases some condition just needs to be true for the main action to proceed;  I need to be able to see the book or the rug before reading the book or examining the rug.

These standard conditions are implemented in adv3Lite via `PreCondition` objects. These objects instantiate often-used preconditions by defining two methods: `verifyPreCondition() `and `checkPreCondition()`. The first of these is called at the verify stage, and basically adds further conditions that can rule out an action altogether (e.g. if it's too dark to see by) or can change its logical ranking. The second is called between verify and check, and can carry out an *implicit action* (like taking the banana to allow the player to put it in the box) which allows the main action (putting the banana in the box) to go ahead. If the necessary condition already obtains (the player is already holding the banana), then `checkPreCondition()` method has nothing to do. If the necessary condition doesn't hold (the player isn't yet holding the banana, say), the method tries to bring it about through an implicit action (the kind of action that's reported as "(first taking the banana)") and then tests to see if the condition now obtains (since something may have prevented the actor from taking the banana). If it does not, the precondition fails the action;  otherwise, it can go ahead.

The library defines a number of precondition objects, the most commonly-used of which include:

- `objVisible -- `the object must be visible to the actor for the action to proceed.

- `objAudible` -- the object must be audible to the actor for the action to proceed.

- `objHeld` -- the actor must be holding the object for the action to proceed (an implicit take action is attempted if not).

- `objOpen` -- the object must be open for the action to proceed (an implicit open action is attempted if not).

- `containerOpen` -- the object must be open for the action to proceed, but only if it's a container (i.e. if its `contType` is `In`);  an implicit open is attempted if not.

- `objClosed` -- the object must be closed for the action to proceed (an implicit close action is attempted if not).

- `objUnlocked` -- the object much be unlocked for the action to proceed (an implicit unlock action is attempted if not).

- `touchObj` -- the actor must be able to touch the object for the action to

proceed.

- `objDetached` -  the object must be unattached to any other object for the action to proceed (an implicit detach action is attempted if not).

- `objNotWorn` -- the object must be unworn for the action to proceed (an implicit doff action is attempted if not).

To use these preconditions, we simply need to list them in the appropriate `preCond` property. For example, in order to eat the banana we'd probably need to be holding it, so we might define:

 
    banana: Food 'banana'
     dobjFor(Eat)
    
 
    { 
        preCond = [objHeld]
 
        
        action()  
 
    {
 
        
        
 
        "Well, that tasted good! But it's all gone now! ";  
        
        moveInto(nil);

 
        
        }
 
    }

 
    ;
    
This has been a very rapid outline of customizing actions, both to avoid the essentials becoming lost in a mass of detail, and also because most of the detail is amply documented elsewhere. We shall examine some of the other details in a later chapter, but in the meantime, if you want to know more, you could read the section on Actions in the *adv3Lite Manual*.

## 6.4. Coding Excursus 10 -- Switching and Looping

Now that we've been introduced to action handling, we'll have much more occasion to write procedural code. This thus seems a good point at which to introduce some of the other main coding constructs.

### 6.4.1. The Switch Statement

We can, if we like, nest if statement to any depth, but when we're basically just testing the same variable against a number of different possible values, it can become a little cumbersome. For example:

m`odify Jump
    execAction()

  
 
    { 
        if(gActor.getOutermostRoom == bedroom)
 
        
        
 
        "You'd better not, you might wake your Aunt Maude nextdoor. ";  
        else if(gActor.getOutermostRoom is in (cellar, lowPassage))
 
        
        
 
        "Ouch! You bang your head on the ceiling. ";
 
        else if(gActor.getOutermostRoom == attic)
 
        
 
    {
 
        
        
 
        "You land back on the rotten floor and fall through tothe 

 
        
        
        bedroom below;
 luckily, landing on the bed breaks yourfall. ";
 
        
        gActor.moveInto(spareBed);
 
        
        
 
        
        
        gActor.getOutermostRoom.lookAroundWithin();
 
        }

 
        
        else
          
 
        "You jump up and down, uselessly expending energy. ";

 
        }
;

In this kind of case we'd be better off using a `switch` statement. This tests the value of a variable, and then executes a different branch depending which `case` statement is matched. Note that we need to use a `break` statement between one case and the next to prevent falling through, unless we actually want to fall through to the next case (as we do with the cellar). The general form of a switch statement is:

 
    switch(expr){
 
        case a: ...
     case b: ...
 
        default: ...}

There can be as many `case `statement as we like, but only one `default` statement (which defines what happens if no `case` statement is matched). The values following the keyword `case` must be constants. Using a switch statement our example becomes:

m`odify JumpAction
    execAction()

  
 
    { 
        switch(gActor.getOutermostRoom)
 
     
 
    { 
        case bedroom:
 
        
        
 
        "You'd better not, you might wake your Aunt Maude nextdoor. ";  
        
        break;
    
 
        
        case cellar:
        
    case lowPassage:
 
        
        
 
        "Ouch! You bang your head on the ceiling. ";
 
        
        break;

 
        
        case attic:
        
        
        
 
        "You land back on the rotten floor and fall through tothe 

 
        
        
        bedroom below;
 luckily, landing on the bed breaks yourfall. ";
 
        
        gActor.moveInto(spareBed);
 
        
        
 
        
        
        gActor.getOutermostRoom.lookAroundWithin();
 
        
        break;

 
        
        default:
          
 
        "You jump up and down, uselessly expending energy. ";

 
        
        
        break;
    }

;
For more details, see the section on 'switch' in the 'Procedural Code' article in the *TADS 3 System Manual*.

### 6.4.2. Loops

TADS 3 defines four kinds of loop, one of which (`foreach`) we'll leave to a later chapter. The other three are `while`, `do...while`, and `for`.

The format of the `while` loop is basically:

 
    while(cond)
    *loopBody*
Where *loopBody *is a single statement or block of statements that continues to be executed while *cond* is true. For example:

 
    local i = 0;
while (i <= 10)
 
    { 
    i++;

    
 
        "<<i>>\n";
}

This would cause the numbers 1 to 10 to be displayed in a vertical column. The `do ...while` loop is similar, except that the test is made at the end. The format is:
 
    do
    *loopBody*
 
    while(cond);

For example:

 
    local i = 0;

 
    do{
 
        i++;

 
        "<<i>>\n";

 
    }
while (i <= 10)
This would do much the same as the first example. The only difference is that if the first statement in each example set i to some value greater than 10, the `do...while` loop would still execute once (so we'd see one number displayed) whereas the `while` loop would not (so we wouldn't see anything displayed from it).

The final loop type is the `for` loop. This is the most complex and powerful of the three. Its general form is:

 
    for(*initializer*;
* condition*;
 *updater*)
    loopBody
Once again, *loopBody* is a statement or block of statements that is repeatedly executed while the loop is active. The *initializer* initializes the value of one or more

loop variables. The loop continues executing while *condition* remains true. The *updater* is used to change the value of the loop variable(s). So, for example, our previous examples could have been written:

 
    for(local i = 0;
 i <= 10;
 i++)
    
 
        "<<i>>\n";

The for loop can take also take the form of `for..in` or `for..inrange`. For example, the loop in the previous example could be written:
 
    for(local i in 1..10)
    
 
        "<<i>>\n";

With all three types of loop it's essential to make sure that they end somehow, so that we don't end up putting the game in an infinite loop. For example, the following loop would go on forever, causing our game to hang:

 
    local i = 0;

 
    while (i <= 10){
    
 
        "<<i>>\n";
}

There is, however, another way out of a loop, and that's to use a `break` statement. The following example will only print the numbers from 1 to 10:

 
    local i = 0;

 
    while (i <= 1000){
 
        i++;

 
        "<<i>>\n";

 
        if(i >= 10)
        break;

 
    }

The `break` statement (usable with all four kinds of loop) takes program execution straight out of a loop. Its complement is the `continue` statement that makes execution jump to the next iteration, skipping over the rest of the loop. The following example will also only print the numbers 1 to 10, although it might cause a bit of a pause after displaying the number 10:

 
    local i = 0;

 
    while (i <= 1000){
 
        i++;
    if(i >= 10)
 
        
     continue;

 
        "<<i>>\n";

 
    }

For more details of these loops, see the 'Procedural Code' chapter of the *TADS 3 System Manual*.

## 6.5. Commands and Doers

### 6.5.1. Commands

When the player enters a command at the command prompt, the parser creates one or more `Command` objects to represent its interpretation of what the player meant. Each Command object encapsulates information about what action the parser interprets the player as wanting to carry out, what objects are involved in that action, and certain other information about what the player typed. The Command object then passes this information to a Doer, which can either execute the command unaltered, or transform it into a completely different command, or simply stop it in its tracks. The execution of the command may then involve the execution of one or more actions. For example the command `look in box `may involve an implicit Open action followed by the explicitly requested LookIn action.

The current `Command` object is passed as the `curCmd` parameter to the Doer's `execAction(curCmd) `method and thence as the `cmd` parameter to the action's `execAction(cmd)` method. You can also get at the current command object with the `gCommand` pseudo-global variable.

You can probably spend quite some time writing a game in adv3Lite without having to worry about `Command` objects, but there can be times when it's useful to get at the information contained in some of their more straightforward properties. These include:

- `actor` -- the actor performing the command

- `action` -- the action the command thinks should be carried out

- `dobj` -- the direct object of the action the command thinks should be carried out

- `iobj` -- the indirect object of the action the command thinks should be carried out

- `dobjs` -- a Vector containing the `NPMatch` objects relevant to all the direct objects to be interated over.

- `verbProd` -- the VerbProduction (VerbRule) matched by this command.

Most of these require a bit of further explanation.

First of all, the command's `action`, `dobj` and `iobj` properties may or may not correspond to `gAction`, `gDobj` and `gIobj`. It all depends on the type of action and what's intervened. For example, if an Open action triggers an implicit Unlock action, then `gAction` may be `Unlock` while `gCommand.action` may be `Open`. Again, the command object's interpretation of `dobj` and `iobj` is unlikely to be that of the action's when the action is a TopicAction, TopicTAction, LiteralAction or LiteralTAction. In

particular, while `gDobj` and/or `gIobj` may be `nil` for these kinds of action, `gCommand.dobj` or `gCommand.iobj` will contain the `LiteralObject` or `ResolvedTopic` that the command matched, in which case the name property of the `LiteralObject` will contain a form of the literal text entered by the player, while the `topicList` property of the `ResolvedTopic` will contain a list of Topics that the player's command might match.

As noted above, the `dobjs` property contains a Vector of NPMatch objects. The actual objects concerned will be contained in the `obj` property of the NPMatch object. This means that we can get at a list of objects to be iterated over by looking at `gCommand.dobjs[1].obj`, `gCommand.dobjs[2].obj` and so forth, or we can iterate over them with code like:

 
    foreach(local cur in gCommand.dobjs)
 
    { 
    local o = cur.obj;

 
        /* do something with o */}

The `verbProd` property contains an object that has a number of useful properties. Its `grammarTag` property identifies the VerbRule that was matched (for VerbRules, see later in this chapter).  Its `tokenList` property contains a list of the tokens that make up the command typed by the player. And for a command that involve a direction (e.g. `go east`, `push box west`, `throw ball south`) the `dirMatch.dir` property (i.e. `gCommand.verbProd.dirMatch.dir`) gives the direction that was matched (e.g. `eastDir`, `westDir` or `southDir`).

Some awareness of these properties of the `Command` object can be particular important when we come to define a `Doer`, since the Command object is passed to a Doer's `execAction(curCmd) `method via the `curCmd` parameter, and the method will often need to analyse that command to decide what to do with it.

### 6.5.2. Doers

A Doer is an object that stands between a Command and an Action and decides how the Command is to be translated into one or more Actions. The library defines four default Doers that simply pass the command straight through to the associated action unaltered, but game code can include custom Doers to change what a command does. (If you're familiar with Inform 7, think of a Doer as adv3Lite's rough equivalent to an instead rule).

A Doer can make a command carry out a completely different action from normal, or it can stop an action in its tracks. We can specify precisely what commands we want a particular Doer to match, and under what circumstances. Where more than one Doer could potentially match the same command, the most specific Doer is the one that's

used.

We make a Doer match a command by defining its `cmd` property. This is a single-quoted string that contains more or less what the player would type to trigger the command, except that we replace the vocab of any objects involved with their programmatic names (e.g. `redBall` or `table`). We can also use the name of a class instead of the name of an object. The following are all valid cmd strings to use with a Doer:

 
    'jump'
 
    'put redBall in greenBox''put Thing in Container'
 
    'take stick|hat'
The last of these would match attempts to take either the stick or the hat. If we want to match more than one verb, however, we have to list the commands separated by semicolons:

 
    'put redBall in greenBox;  eat redBall'
Since every Doer we'll ever define must define a `cmd` property, we can do it via a template, thus:

 
    Doer 'put redBall in greenBox'; 
Of course none of this is very useful unless we make the Doer actually do something. To do this we generally override its `execAction()` method, either to make it execute a different action, or to stop the action altogether (we could also write our own action-handling from scratch in this method, but unless we want to do something very unusual, that's probably more trouble than it's worth).

For example, suppose we have a door that can be unlocked by inserting a card into a slot. In this case we might want `put card in slot` to work the same as `unlock door with card`. We can do this by calling the `doInstead()` method from within the `execAction()` method, like so:

 
    Doer 'put card in slot'
    execAction(c)
  
 
    { 
        doInstead(UnlockWith, securityDoor, card);

 
        }
;

The `doInstead()` method can take one, two or three arguments. The first argument is the action you want to perform. The second and third arguments are the direct and indirect objects you want to perform the action on, provided it's the kind of action that takes these objects.

To stop an action in its tracks we can just display a message followed by an `abort

statement, like so:

 
    Doer 'jump'
 
        execAction(c)
    {
 
        
 
        "Jumping is such an unseemly waste of energy! ";
 
        abort;

 
        }
;

Actions involving motion in particular compass directions are a special case. We can match them by using a cmd string consisting of the word 'go' followed by one or more direction names, separated by vertical bars, like so:

 
    Doer 'go east|west|north|south'
    execAction(c)
  
 
    {    
 
        "You're a bishop, and bishops can only move diagonally. "; 
 
        
        abort;
    }

 
    ;

In this case the direction names have to exactly match the way they would appear in the exit lister.

To synthesize a command to travel in a particular direction we can either use `doInstead()` with `Go` and the name of the direction object (e.g. `northDir`) or just `goInstead()` with the name of the direction. The two are exactly equivalent:

 
    Doer 'jump'
 
        execAction(c)
    {
 
        
        doInstead(Go, upDir);
    }

 
    ;
 
    Or alternatively,

 
    Doer 'jump'
 
        execAction(c)
    {
 
        
        goInstead(up);
    }

 
    ;

All the Doers we've seen so far are active all the time, but we can also control when they take effect by defining one or more of the following properties on a Doer:

- `when` -- a condition that must be true for the Doer to take effect.

- `where` -- a Room or Region or a list of Rooms and/or Regions one of which the actor must be in for the Doer to take effect.

- `who` -- an actor or a list of actors, one of which must be the current actor for the Doer to take effect.

- `during` -- a Scene, or a list of Scenes, one of which must be currently in progress for the Doer to take effect. (We'll discuss Scenes fully in a later chapter).

For example, to prevent the player character from jumping while in the `caveRegion` (and here at last is one use for Regions) we could do this:

 
    Doer 'jump'
 
        execAction(c)
    {
 
        
 
        "There's not enough headroom to jump here. ";  
        
    abort;

 
        }

 
        where = caveRegion;

Or to stop the player from issuing an `undo `command during a fight scene we could do this:

 
    Doer 'undo'
    execAction(c)
  
 
    { 
     
 
        "Sorry;
 UNDO is disabled during this fight scene. ";

 
        
        abort;
    }

 
        during = fightScene
 
    ;

Where several Doers could match any given action, the most specific one wins. A Doer is more specific the more conditions (when, where, who, during) it imposes and the more specific the objects it matches (individual objects are more specific than classes, and subclasses are more specific than parent classes). If we need to, we can override this ordering by setting the Doer's `priority` property. The Doer with the highest priority always takes precedence;  the default value of the `priority` property is 100.

If you want to use a Doer to carry out an action, instead of just stopping the action or replacing it with another one (as in the above example) -- in other words if your `execAction()` method is meant to behave as if it's handling the entire action itself -- you should set the `handlingAction` property of the Doer to true (so that the expected beforeAction notifications are sent).

## 6.6. Defining New Actions

Being able to modify the responses to existing actions is useful, but most works of IF normally require at least a few completely new actions as well. There are generally three steps to defining an action: (1) defining the new action class;
 (2) defining the grammar that triggers the action;
 and (3) writing code to handle the action.

Defining a new action class is generally just a matter of using the appropriate `DefineXXXAction` macro. The name of the macro we need to use is generally the name of the action class preceded by 'Define'. For example, suppose we want to define a new TAction (an action taking a single, direct, object) which will respond to commands like `cross so-and-so `(as in `cross the road` or `cross the bridge`). To define the new action class we'd just write:

 
    DefineTAction(Cross);

Similarly, if we wanted to define a new `TIAction` (an action taking two objects, a direct object and an indirect object) we'd just define, say:

 
    DefineTIAction(OpenWith);

If we want to define a new action that takes no objects at all, such as an IAction, we have to do a little more work;
 or rather we need to combine the first and third steps in the same definition, for example:

 
    DefineIAction(Ponder)
     execAction(cmd)
    
 
    {    
 
        "You ponder deeply, but it doesn't seem to do much good. "; 
 
        }
;

In practice we might want to code a more interesting and varied response, but the principle remains the same. Remember, though, that you should never override the `execAction()` method on actions that do take objects, i.e. TActions, TIActions, TopicTActions and LiteralTActions.

The second step is to define the grammar that will match these actions, in other words the pattern of words the player needs to type to make our new action happen. To do that we use a `VerbRule() `macro. For example, to make `cross so-and-so `match our new CrossAction we could define:

 
    VerbRule(Cross)
     'cross' singleDobj
 
        : VerbProduction
        action = Cross
 
        verbPhrase = 'cross/crossing (what)'
     missingQ = 'what do you want to cross'
 
    ;

Here `singleDobj` is a grammar token that matches a single noun, the direct object. If we wanted it to be possible to cross several things at once, we could use `dobjList` here instead, but crossing is the kind of action you can only do to one object at a time, so `singleDobj` seems the better choice here. The first part of the definition thus states that this grammar will match commands consisting of the word `cross` followed by the name of a single noun. The next line, a colon followed by `VerbProduction`, is necessary for every VerbRule, defining it to belong to the VerbProduction class. Next we define the action with which this `VerbRule` is associated by assigning it to the `action` property. Although we called it `VerbRule(Cross)`, this doesn't automatically associate it with the `DefineTAction(Cross)` we used earlier. The tag we attach to a `VerbRule` is just an arbitrary name (which needs to be unique among `VerbRule` tag names);  it is, however, convenient to give it a name identical or at least similar to the corresponding action so we can easily see which `VerbRule` goes with which action.

Following the class name, we can define other properties and methods in the normal way, but the only other properties we generally need to define here are the `verbPhrase` and the `missingQ`. The library uses the `verbPhrase` to construct message relating to the action such as "(first trying to cross the river)" or "(first crossing the river)". The format of the `verbPhrase` string is generally 'infinitive/participle (placeholder)'. The infinitive (actually the infinitive less 'to') is the form of the verb that follows 'to' in phrases such as "What do you want to...";  the participle is the form of the verb ending in "ing", and the placeholder is usually the interrogative pronoun 'what'  we want used in posing questions about the action ("Whom do you want to ask?" or "What do you want to cross?"). Finally the `missingQ` defines the question the parser can ask if the player types `cross` without specifying an object to cross.

We might want to tweak this `VerbRule` a little further, since there are more ways of phrasing the command than just `cross street`;
 we might, for example, want the phrasing `walk across street` and `go across street` to trigger the same action. We can do this by using a vertical bar (|) to separate alternatives, and parentheses to group them, so that our `VerbRule` would become:

 
    VerbRule(Cross)
 
        ((('walk' | 'go') 'across') | 'cross') singleDobj
    : VerbProduction
 
        action = Cross
     verbPhrase = 'cross/crossing (what)'
 
        missingQ = 'what do you want to cross'; 
If we're defining an `IAction` our `VerbRule` can generally be a bit simpler:

 
    VerbRule(Think)
    'think' | 'ponder' | 'cogitate'
 
        : VerbProduction
    action = Think
 
        verbPhrase = 'think/thinking'; 
Conversely, if we're defining a TIAction we need a token for the indirect object as well as the direct object, for example:

 
    VerbRule(OpenWith)
 
        'open' dobjList 'with' singleIobj
    : VerbProduction
 
        action = OpenWith
    verbPhrase = 'open/opening (what) (with what)'
 
        missingQ = 'what do you want to open;  what do you want to open it
with'
    dobjReply = singleNoun

 
        iobjReply = withSingleNoun;

In this case note that the `missingQ` comprises two sections, divided by a semicolon;
 the first to ask for a missing direct object and the second to ask for a missing indirect object.

Using `dobjList` allows us to try to open several objects at once with the same indirect object. It would also be legal (though in practice far less usual) to use `iobjList`, but we cannot use both `dobjList` and `iobjList` in the same `VerbRule. `A command like `open the soup can, the beer bottle, and the paint tin with the can opener, the bottle opener and the screwdriver` would just be too convoluted to handle.

The third stage is to define what the action does. If the action doesn't have any objects, we'll have done that already in the `execAction(cmd)` method of the action class when we defined it (see above). If it does have any actions we must define at least minimal handling on the Thing class (to trap attempts to try the action out on objects we never intended it for). For example:

 
    modify Thing
 
        dobjFor(Cross)
     {
 
        
        preCond = [touchObj]
        
     verify() { illogical(cannotCrossMsg);
 }

 
        }
 
    cannotCrossMsg = '{That subj dobj}
 {is}
 not something {i}
 {can}
cross. '

 
        
        dobjFor(OpenWith)
    
 
    { 
        
    preCond = [touchObj]
 
        
        verify() { illogical(cannotOpenMsg);
 }
 
    }

 
        
        iobjFor(OpenWith)
    
 
    { 
        
    preCond = [objHeld]
 
        
        verify() { illogical(cannotOpenWithMsg);
 }
 
    }

 
        cannotOpenWithMsg = '{I}
 {cannot}
 open anything with {that iobj}
.';   

There are several things to note about this example. First, we *could *have just defined the failure messages directly, for example with:

 
        dobjFor(Cross)
    
 
    { 
        
    preCond = [touchObj]
 
        
        verify()
        
 
    {
 
        
        
        illogical('{That subj dobj}
 {is}
 not something {i}
 {can}
cross. ');  
        
     }
    
 
        }
    
The reason for not doing it that way is that it makes it so much easier to customize the message for special cases, for example:

 
    river: Fixture 'river'
 
        cannotCrossMsg = '{I}
 {can\'t}
 walk on water! '; 
This is rather more convenient than having to redefine the `dobjFor(Cross)verify() `method on the river object.
Note, however, that when we came to define `dobjFor(Open) `we used `cannotOpenMsg `without actually defining it;
 that's because there's already a `cannotOpenMsg` defined on Thing in the library, and we can make use of it here.

Another point to note is that our messages contain lots of strange looking pieces of text in curly braces, like `{I}
 
     or `{That subjdobj}
 
    . These are *message parameter strings*. When the text is actually displayed the library substitutes text appropriate to the circumstance. For example `{I}
 
     becomes just 'You' if the player character is carrying out the action, or the name of the actor, e.g. 'Bob', if an NPC is carrying out the action. Similarly `{That subjdobj}
 
     becomes either 'That' or 'Those' depending on whether the direct object is singular or plural. The string `{is}
 
     expands into either 'is' or 'are' in order to agree with its subject, and we can use `{s/d}
 
    or `{es/ed}
 
     and the like at the end of other verbs to secure similar agreement, or, in the case of irregular verbs, enclose the complete verb in curly brackets e.g. '`{I}
 {put}

down {the dobj}
 
    . ' Using these message parameter strings helps makes our responses as general as possible. Other commonly useful ones include:

- `{the subj
dobj}
 
     -- the name of the direct object preceded by the definite article ('the'), as the subject of the sentence.

- `{a subj
dobj}
 
     -- the name of the direct object preceded by the indefinite article ('a' or 'an'), as the subject of the sentence.

- `{the
dobj}
 
     -- the name of the direct object preceded by the definite article ('the'), as the object of the sentence.

- `{he
dobj}
 
     -- the correct pronoun for the direct object in the subjective case ('he', 'she', 'it' or 'they')

- `{him
dobj}
 
     -- the correct pronoun for the direct object in the objective case ('him', 'her', 'it' or 'them')

These all work with iobj or actor in place of dobj (to refer to the indirect object or the actor), and can be made to work with any object whatsoever provided it has an appropriate parameter name. For example, if we define:

 
    + banana: Food 'banana'
 
        globalParamName = 'banana'; 
We can then use parameters substitution strings like` {the subjbanana}
 
    or `{him banana}
 
    . We can also temporarily assign a parameter string to a local variable representing an object using the `gMessageParams()` macro, for example:
 
    talkAbout(obj)
     {
 
        
        gMessageParams(obj)
     
 
        "{The subj obj}
 {is}
, in your opinion, utterly hideous. ";

 
        }

Note that if we start a message parameter string with a capital letter, its substitution will also start with a capital letter. It follows that when a parameter substitution occurs at the start of a sentence, you should start it with a capital letter to make sure the sentence starts with a capital letter. For the full story on message parameters, including a list of all the ones the library defines, see the chapter on 'Messages' in the *adv3Lite Manual*.

The final thing to note about our example (now a couple of pages back) is that we assumed that you have to be able to touch something in order to cross it or open it with something else, but you have to be holding something in order to use it to open something else with.

One further stage would be to define the handling on objects or classes where we want our new actions to actually do something. For example, we might define a Crossable class for which the command `cross x` takes us to some other location (e.g. the other side of the bridge):

 
    class Crossable: Enterable
 
        dobjFor(Cross)
     {
 
        
        verify() { }
 
        action()
 
        
 
    { 
          
 
        "{I}
 {set}
 out across {the dobj}
. ";

 
        
        
        connector.travelVia(gActor);
 
        }

 
        
    }
 
     ;

Of course, if there was only one crossable object in the entire game, we probably wouldn't bother to do this;  we'd simply define the handling directly on that object;  but as soon as we want similar handling on more than one object it's worth considering defining a new class (or modifying an existing one).

We have here given a somewhat compressed account of defining new actions;
 for a fuller account, read the section on Actions in *The adv3Lite Manual*.

Exercise 13:  Now that you've seen how to implement actions, you can finish off the previous exercise. Return to your kitchen and make the can opener able to open the can of soup. Put some soup in the can that can be poured into appropriate objects (but not elsewhere). Implement a pencil sharpener and some pencils, so that only pencils can be put in the sharpener, and the sharpener actually sharpens the pencils. Define some grammar so that it's possible to hang an apron on the peg. Customize eating the cake. If any other ideas occur to you, by all means try them too!

[&laquo; Go to previous chapter](5-containment.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](7-knowledge.html)