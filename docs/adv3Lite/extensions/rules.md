::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Rules\
[[*Prev:* Room Parts](roomparts.htm){.nav}     [*Next:*
SceneTopic](scenetopic.htm){.nav}     ]{.navnp}
:::

::: main
# Rules

## Overview

The purpose of the [rules.t](../rules.t) extension is to allow game code
to define Rules and RuleBooks. Rules are associated with RuleBooks,
which may be invoked at any point in game code to carry out actions
and/or return values to their caller.

In brief, calling the **follow()** method of a RuleBook causes it to
call the [follow()]{.code} method of each of its associated Rules in
descending order of precedence (ignoring those Rules that don\'t match
their conditions) until either one of these Rules stops the sequence or
there are no more Rules to call. The value returned to the RuleBook by
the last-executed Rule\'s [follow()]{.code} method is then returned to
the caller of the RuleBook\'s [follow()]{.code} method.

Doers and TopicEntries (especially Doers) are standard classes in the
main adv3Lite library that act a little like Rules, but the Rules
extension allows you to generalize this kind of functionality into all
sorts of other situations. It is most likely to be most useful in
situations where a tangle of nested if statements and switch statements
would otherwise be needed to code complex interactions, but you are, of
course, free to use rules wherever you wish.

This extension does not define any actual Rules or Rulebooks, but simply
the Rule and RuleBook classes that allow rules and rulebooks to be
defined. For some predefined rules and rulebooks that work with this
extension and provide rule-based access to certain aspects of the
action-processing and turn cycles, see the related
[sysrules](sysrules.htm) extension.

\
[]{#classes}

## New Classes, Methods and Properties

In addition to a number of objects, properties and methods intended
purely for internal use, this extension defines the following new
classes, methods and properties:

-   *Classes*: **Rule** and **RuleBook**.
-   *Properties/Methods on Rule*: [follow()]{.code}, [priority]{.code},
    [execAfter]{.code}, [execBefore]{.code}, [isActive]{.code},
    [activate()]{.code}, [deactivate()]{.code}, [addTo(rb)]{.code},
    [moveTo(rb)]{.code}, [removeFrom(rb)]{.code}, [stopValue]{.code},
    [where]{.code}, [when]{.code}, [who]{.code}, [during]{.code},
    [action]{.code}, [dobj]{.code}, [iobj]{.code}, [aobj]{.code},
    [matchObj]{.code}, and [present]{.code}.
-   *Properties/Methods on RuleBook*: [follow()]{.code}, [actor]{.code},
    [contVal]{.code}, [defaultVal]{.code}, and [initBook()]{.code}.

\
[]{#usage}

## Usage

Include the rules.t file after the library files but before your game
source files.

\

### Defining Rules and Rulebooks

At its simplest a RuleBook can be defined simply by giving it a name and
making it of the RuleBook class:

::: code
     jumpRules: RuleBook
     ;
     
:::

Unless you need to refer to them in some other part of your code, rules
can usually be defined as anonymous objects located in the RuleBook to
which they belong by using the + property. The one method you must
define on a Rule is its **follow()** method; for example:

::: code
     + Rule
        where = room
        
        follow()
        {
            "You jump pointlessly. ";        
        }
    ;

    + Rule 
        where = nextRoom
        
        follow()
        {
            "You jump fruitfully. ";        
        }    
    ;

    + Rule
        follow()
        {
            "You jump energetically. ";       
        }  
    ; 
     
:::

In this case we could have defined these rules even more succinctly as:

::: code
     + Rule
        where = room
        
        follow = "You jump pointlessly. "
    ;

    + Rule 
        where = nextRoom
        
        follow = "You jump fruitfully. "        
    ;

    + Rule
        follow =  "You jump energetically. "          
    ; 
     
:::

We can do that here because in this RuleBook, the [follow()]{.code}
methods take no arguments. You can, however, define as many arguments to
the [follow()]{.code} method of a RuleBook as you like; precisely the
same arguments will then be passed to the [follow()]{.code} methods of
any Rule it invokes, so you must make sure that the argument lists
match, or you\'ll get a run-time error. If in doubt you can use the
variable argument list notation to ensure that your Rules match any
argument lists that are passed to them, for instance:

::: code
     + Rule
        where = room
        
        follow([args])
        {
            "You jump pointlessly. ";        
        }
    ;

    + Rule 
        where = nextRoom
        
        follow([args])
        {
            "You jump fruitfully. ";        
        }    
    ;

    + Rule
        follow([args])
        {
            "You jump energetically. ";       
        }  
    ; 
     
:::

The advlite.h header file defines one template for use with Rules, which
can be used to define their location and/or action properties. If both
are present in the template the location property must be defined first,
preceded by @. The action property is defined either with & or as a
list, e.g.:

::: code
    Rule @jumprules
       // A Rule located in the jumprules rulebook
       ...
    ;
     
    Rule &Jump 
       // A Rule matching the Jump action.
       ...
    ; 

    dropRule: Rule @treetopRules [Drop, Throw, ThrowDir]
       /*  
        *  A Rule located in the treetopRules rulebook and matching
        *  any one of the Drop, Throw or ThrowDir actions.
        */
       ...
    ;
     
:::

\
[]{#match_conditions}

### Specifying Match Conditions on Rules

Rules are only useful for distinguishing what should happen under
different circumstances. Most of the rules you define (with the possible
exception of the odd catch-all rule) will need to specify the conditions
under which they apply. This can be specified using one or more of the
following properties:

-   **where**: This can be the location either of the player character
    (the default) or of the current actor, depending on the value of the
    parent rulebook\'s [actor]{.code} property (indeed it could be the
    location of whatever object is specified in the rulebook\'s actor
    property, but the intention is that this should normally be either
    [gPlayerChar]{.code} or [gActor]{.code}). The [where]{.code}
    property can be defined as a Room, a Region or a list of Rooms
    and/or Regions.
-   **when**: This can be any condition that must be true for the Rule
    to be matched. This is for use when none of the other means of
    speficifying rule conditions will do the job.
-   **who**: The current actor ([gActor]{.code}): this can be specified
    as a single actor or as a list of actors.
-   **during:** A Scene or a list of Scenes, one of which must be
    currently happening for this Rule to be matched.
-   **action**: An action of list of actions, of one which must be the
    current action ([gAction]{.code}) for the Rule to be matched.
-   **dobj**: The direct object of the current action. This may be
    specified as an object, a class, or a list of objects and/or
    classes.
-   **iobj**: The indirect object of the current action. This may be
    specified as an object, a class, or a list of objects and/or
    classes.
-   **aobj**: The accessory object of the current action. This may be
    specified as an object, a class, or a list of objects and/or
    classes. Note that this property is only applicable when the
    [TIAAction](tiaaction.htm) extension is included in your game.
-   **matchObj**: an object or class or list of objects and/or classes
    one of which much match the first argument passed to the rulebook\'s
    [follow()]{.code} method. For example if the rulebook is invoked
    with [follow(helmetOfDoom)]{.code} the Rule would be matched if its
    [matchObj]{.code} property was [helmetOfDoom]{.code} or
    [Thing]{.code} or [\[helmetOfDoom, pinkRabbit, cuddlyBear\]]{.code}
    (or anything else that included the [helmetOfDoom]{.code}). Note
    that while this condition is principally intended to be used with
    objects, it will in fact work with any kind of value, such as
    numbers and strings.
-   **present**: An object or a list of objects, one of which must be
    present to the actor. See below on what \'[present](#present)\'
    means.

Note that where any of the foregoing properties is specified as a list,
the Rule will match if any of the items in the list matches (provided,
of course, that any other conditions are also met).

For example, to write a Rule that matches when either Fred or Mary drops
the crown jewels in either the hall or the lounge during the party scene
when the queen can see them you might write:

::: code
    + Rule
        follow()
        {
           "Oh dear! That was jolly embarrassing! Her Majesty does not look at all amused.<.p>";    
        }
        
        where = [hall, lounge]
        during = party
        who = [fred, mary]
        action = Drop
        dobj = crownJewels
        when = (queen.canSee(gActor))
    ;
     
:::

(Assuming, that is, that we know that the player character will always
be present in the same location, otherwise further conditions would need
to be added).

\
[]{#present}

#### Being Present

One of the properties we can define on a Rule is **present**, but what
does this mean?

First, this property must specify objects rather than classes, except
for one special case. The [present]{.code} property may be defined as a
single class (e.g. [present = Actor]{.code}), in which case the rule
will be matched provided at least one object of that class is in the
same room as the actor (either [gPlayerChar]{.code} or [gActor]{.code},
depending on how the parent rulebook defines this property).

Otherwise, if the [present]{.code} property defines an object or a list
of objects, at least one of these objects must be present in the same
room as the actor for the rule to match.

There may, however, be occasions when \'being in the same room as\'
isn\'t quite what you want for a test of presence. For example, should
the rule match if the gem of ultimate destiny is in the same room as the
actor but hidden away inside a secret drawer the player character has
yet to open? Conversely, if the Elephant of Desire is clearly visible in
the neighbouring field, should it count as being present or not? To deal
with instances such as these you can define the [present]{.code}
property so that at least one of the object or objects it lists needs to
be perceivable by *actor* via a given sense, which you define as one of
the property pointers [&canSee]{.code}, [&canHear]{.code},
[&canSmell]{.code}, [&canReach]{.code}, e.g.:

::: code
      present = [&canSee, gem]
      present = {&canSmell, burntToast]
      present = [&canHear, elephant, trumpet, sergeantMajor] 
      
:::

\
[]{#precedence}

### Rules\' Order of Precedence

We stated above that when RuleBooks are called, they run through their
matching Rules in descending order of precedence. But how is that order
of precedence determined?

Left to its own devices, the Rules extensions orders rules according to
their specificity (how specific their conditions are). The more
conditions are specified (out of [when]{.code}, [where]{.code},
[who]{.code}, [during]{.code}, [action]{.code}, [dobj]{.code},
[iobj]{.code}, [aobj]{.code}, [matchObj]{.code} or [present]{.code}) the
more specific the Rule is considered to be. Also, a [where]{.code}
condition referencing at least one Room is considered more specific that
one that one references Regions, and a [dobj]{.code}, [iobj]{.code},
[aobj]{.code}, [matchObj]{.code} or [present]{.code} property that
includes at least one object is considered more specific that one that
only refers to classes. Finally, if two rules appear to be equally
specific, precedence is given to the one defined later in your source
code (it may at first sight seem counter-intuitive to do it this way
round, but this is consistent with the way the library handles Doers and
AltTopics). Normally this default ordering will give you what you want;
a more specific rule will take precedence over a more general rule
without your having to worry about it. Note, however, that the library
has no way of judging how specific a [when]{.code} condition is, which
is why it\'s normally better to use the other condition properties when
you can.

If for any reason you need to change the order of precedence there are a
couple of ways you can do so. The first is to specify that the current
rule must run either after or before one or more other specified rules
(which would then need to be named so they can be referred to), by
listing those other rules in the **execAfter** or **execBefore**
properties respectively. For example, to ensure that your
dangerousJumpRule executes after your dodgyJumpRule but before your
fatalJumpRule you might write:

::: code
    + dangerousJumpRule: Rule
         action = 'Jump'
         follow = "I wouldn't jump here if I were you. "
         execAfter = [dodgyJumpRule]
         execBefore = [fatalJumpRule]
    ;  
      
:::

This will then override any other ordering the library would have made.
Note, however, it is then your responsibility to ensure that any use you
make of [execAfter]{.code} and [execBefore]{.code} is consistent. If the
[dodgyJumpRule]{.code} were specified in both the execAfter and the
execBefore properties of the same rule, for example, this would be
self-contradictory; in this case the library would resolve the
contradiction by ignoring the execBefore specification. On the other
were rule A to specify that it is to be run after rule B, while rule B
specified that it was to run after rule A, the outcome would be
unpredictable.

The second method of reordering rules is to override their **priority**
property. The default [priority]{.code} is 100. The higher the priority,
the higher the precedence, so that a Rule with a priority of 2000 will
be run before a Rule with a [priority]{.code} of 1. Changing the
[priority]{.code} to a very high or a very low value can thus be a
useful way of ensuring that a Rule runs towards the beginning or the end
of its RuleBook (or, provided you assign the [priority]{.code} numbers
with sufficient care) that it is either the very first or the very last
Rule to be considered. Note that any rearrangement of rule ordering
carried out via the [execBefore]{.code} or [execAfter]{.code} properties
will take precedence over the setting of the [priority]{.code} property,
however. Apart from that, Rules with the same [priority]{.code} will be
ordered according to their specificity.

A RuleBook re-sorts the rules it is considering each time its
[follow()]{.code} method is called, so that if you change the value of
the [priority]{.code}, [execBefore]{.code} or [execAfter]{.code}
properties during the course of your game, these changes will take
effect the next time the corresponding RuleBook is invoked. Normally,
however, a rule\'s specificity is only calculated once, at preinit, so
if you made any changes to a rule that might change its specificity you
would need explicitly to issue the statement [x.specificity =
x.calcSpecificity()]{.code} (where *x* was the rule in question) for any
reordering to take effect. Such dynamic changes to rules\' precedence
and conditions should only be needed very rarely and should be used very
sparingly, otherwise your code is likely to become quite confusing.

\
[]{#starting}

### Starting and Stopping Rulebooks: Return Values and Parameters

As we have seen, the way to start a RuleBook is to call its **follow()**
method. This causes it to select all of the rules that belong to it that
also match their various criteria, and then to run through them in
descending order of precedence, calling each of their [follow()]{.code}
methods in turn until either there are no more rules to consider or one
of the rules signals that no more rules should be considered after
itself. But how does a rule signal that?

The default behaviour is for a RuleBook to stop iterating through its
rules when one of its rules returns any value except **null**, where
[null]{.code} is an enum that has been defined for this purpose. Since
TADS 3 considers a method that does not have an explicit return value to
implicitly return [nil]{.code} (and since [nil]{.code} and [null]{.code}
are different values) this means that the default behaviour of a
RuleBook is to execute the highest priority matching rule, and then stop
iterating through any other rules that happen to match. Since the
RuleBook returns whatever its last-executed rule returns, this means
that by default it will simply return [nil]{.code} to its caller
(assuming it actually executes any rules). Often this behaviour may be
just what you want, since if you simply want your RuleBook to execute
the most appropriate Rule, you may not be interested in the return
value, and you will probably want the RuleBook to stop at the first rule
it finds (in order of precedence).

There may be occasions when you want to change this behaviour, however.
First, it may that you want to define a Rule that doesn\'t stop its
RuleBook. You can do that by ending the [follow()]{.code} method of that
rule with the **nostop** macro, for example:

::: code
    + Rule
        priority = 1000
        follow()
        {
            "You tense yourself. ";
            nostop;
        }
    ;
     
:::

This rule will always run first (assuming there\'s no rule in the same
RuleBook to which we\'ve given a higher priority), but it won\'t stop
the RuleBook. We could have used [return null]{.code} rather than
[nostop]{.code} here, but not only is [nostop]{.code} less typing (and
perhaps clearer in meaning), for reasons we\'ll explain shortly it\'s
also safer.

If you\'re defining a RuleBook in which you want the majority of Rules
not to stop the processing of further Rules in that RuleBook, you can
override the RuleBook\'s **contValue** (short for \'continuation
value\') to [nil]{.code} instead of [null]{.code}. The
[contValue]{.code} property defines the value a Rule must return if it
is **not** to stop the processing of the RuleBook. Since (as we
mentioned just above) a method with no explicit return value implicitly
returns nil, this means that the RuleBook won\'t then stop at a rule
with no explicit return value (and hence an implicit return value of
nil). If you want some rules in such a RuleBook to stop the RuleBook
from processing any more rules, you can make those rules return a
non-nil value or use the **stop** macro to do this for you (by default
[stop]{.code} returns true, but you can change what it returns by
overriding the RuleBook\'s **stopVal** property).

As has been mentioned before, if a Rule returns any value other than its
RuleBook\'s [contVal]{.code} value, the RuleBook will pass that value
back to its caller. This may be useful simply as a way of telling the
caller what the RuleBook did, but it could also be used if you wanted a
RuleBook to calculate a value. Suppose, for example, you wanted to use a
RuleBook to calculate the player character\'s happiness rating; you
could do something like this:

::: code
     happinessRules: RuleBook
        contVal = nil
        total = 0
        initBook()
        {
           total = 0;
        }
     ;
     
     + Rule
        priority = 0
        follow()
        {
           return rulebook.total;
        }
     ;
     
     + Rule
       when = (me.hasSeen(gertrude))
       follow()
       {
          rulebook.total += 3;
       }
     ;
     
     + Rule
       action = Kiss
       dobj = gertrude
       follow() { rulebook.total += 2; }
     ;

     + Rule
       action = Attack
       who = gertrude
       dobj = me
       follow() { rulebook.total -= 10; }
     ;

     + Rule
       when = (orbOfSatisfaction.isIn(me))
       follow() { rulebook.total += 6; }
     ;   
     ... 
     
:::

Note how we here define a custom [total]{.code} property on the RuleBook
to keep track of the value we want to calculate. We can then use the
**initBook()** method (which is called whenever we call the RuleBook\'s
[follow()]{.code} method) to reset the value of total to 0 before our
rules go on to calculate its new value. We also supply a Rule with a
priority of 0 (which should ensure that it\'s the last rule to run) to
return the value of rulebook.total once all the other Rules have had
their chance to adjust it. Finally, note the use of the **rulebook**
property of a Rule to reference the Rulebook that triggered it (in this
case, so that we can get at the [total]{.code} property of that
Rulebook).

[]{#arguments}

#### Passing Arguments

Although it\'s often fine to call the [follow()]{.code} method of a
RuleBook with no arguments, you can pass arguments if you need to. These
arguments are then passed in turn to the [follow()]{.code} method of
each Rule executed by the RuleBook and by the RuleBook\'s
[initBook()]{.code} method, so you must make sure that their argument
lists match those you plan to pass to their RuleBook\'s
[follow()]{.code} method (or you\'ll get a run-time error due to
argument mismatch). Thus, for example, if you are going to call a
RuleBook\'s follow() method with two arguments ([myRules.follow(john,
\'silly\')]{.code}, say) then you must ensure that you define all the
associated Rules\' follow() methods and the RuleBook\'s
[initBook()]{.code} method with two arguments (assuming you override the
latter at all; if you don\'t, you don\'t need to worry about it). If in
doubt you can use the variable argument list syntax on these methods so
they\'ll match any parameters that are passed to them, like so:

::: code
      myRules: RuleBook
        initBook([args])
        {
           foobar = 0;
           ...
        }
        ...
      ;

     + Rule
         follow([args])
         {
           ...
         }
         ...
     ; 
      
:::

That way, you can be sure of avoiding any problems. But, to repeat the
point, this is only necessary if you plan to pass any arguments to your
RuleBook\'s [follow()]{.code} method, which very often you won\'t need
to do.

You can use the arguments you pass (if you pass any) for any purpose you
find useful, but bear in mind that the first argument you pass will be
used to set the value of the RuleBook\'s [matchObj]{.code} property for
its Rules\' [matchObj]{.code} properties to match against. This first
argument will then be passed as the first argument to each of the
matching Rules\' follow() method, which can be helpful as a way of
telling a Rule which specific object it\'s matching. For example:

::: code
       myRules.follow(magicOrb); // called somewhere else in your code
     
       ...
       
       myRules: RuleBook;
       
       + Rule
          matchObj = Treasure
          follow(obj)
          {
              "\<<obj.theNameIs>> worth <<obj.points>>. ";
          }
       ;   
     
     
:::

Assuming you have defined the magicOrb to be of the Treasure class (and
have given it a points property), this will allow your rule to refer to
the specific Treasure matched (in this case the magicOrb), although it
would, of course, have matched any other Treasure.

\
[]{#manipulating}

### Manipulating Rules

There are a couple of ways you can manipulate Rules at run-time. First
of all you can temporarily disable a Rule by calling its
**deactivate()** method, which sets its **isActive** property to nil.
You can set [isActive]{.code} back to true again by calling the Rule\'s
**activate()** method. When a Rule is deactivated it can never be
matched, so this may occasionally be a useful way of temporarily
removing a Rule from consideration.

You can also move Rules between RuleBooks, or add Rules to more than one
RuleBook at a time, using the following methods:

-   **moveInto(rb)**: move this Rule to the *rb* RuleBook, moving the
    Rule out of every RuleBook it was in previously. If *rb* is nil this
    has the effect of leaving the Rule detached from any RuleBook.
-   **addTo(rb)**: add this Rule to the *rb* RuleBook while also leaving
    it in its current RuleBook(s). This allows a Rule to be used in more
    than one RuleBook at a time.
-   **removeFrom(rb)**: remove this Rule from the *rb* RuleBook while
    leaving it attached to any other RuleBook(s) it may be associated
    with.

\
[]{#using}

## Using Rules

This extension defines the Rule and RuleBook classes, but it doesn\'t
define any actual Rules or RuleBooks. It\'s up to you as a game author
to decide where you want to use them in your game.

Rules and RuleBooks are typically likely to be useful where a relatively
complex set of responses would otherwise require a mass of if and switch
statements to code, although there may often ways of approaching the
same problem in adv3Lite. For example, if you want the Jump action to
work differently in different situations, you could write a whole lot of
roomBeforeAction() methods to intercept the Jump action, but it might be
neater to redefine the action itself so that it uses a RuleBook:

[]{#jump}

::: code
     modify Jump
        execAction(cmd)
        {
            jumpRules.follow();
        }
    ;

    jumpRules: RuleBook
    ;
     
    + Rule
       when = (goldBullion.isIn(me))
       follow()
       {
          "The bullion is so heavy your feet hardly leave the ground. ";
       }
     ;
     
     + Rule
       where = lowCave
       follow()
       {
          "Your head bumps the ceiling. Ouch! ";
       }
     ;
     
     + Rule
        present = [king, queen, auntAgatha]
        follow()
        {
           "You hesitate to leap around in the presence of so
            august a personage. ";
        }
    ;
     
:::

If there were many such factors involving the outcome of a JUMP command,
it could become quite convoluted to code them in any other way.

Rules are less likely to be useful for coding the responses to TActions,
since normally these can be quite easily dealt with in the various
[dobjFor()]{.code} sections of the direct object, although again there
may be occasional cases where the outcome of an action depends on so
many factors that defining a RuleBook and calling it from the action()
method may be the neatest way to deal with it. This approach is more
likely to be useful for TIActions, especially when different outcomes
depend on different combinations of direct object and indirect object
and perhaps other circumstances besides, which could then be quite messy
to code in the dobjFor() or iobjFor() sections of the direct and/or
indirect objects. For example, suppose that a variety of objects can be
used to dig a variety of other objects in a variety of places under a
variety of circumstances. The neatest way to handle it might be
something like this:

[]{#digwith}

::: code
     modify Thing
        dobjFor(DigWith) { action() { diggingRules.follow(); } }
     ;   
      
     diggingRules: RuleBook;
     
     + Rule
         where = sandyBeach
         follow()
         {
            "You dig in the sand with {the iobj}, but turn up nothing
              of interest. ";
         }
     ;

     + Rule
         dobj = rockyPath
         follow()
         {
            "You find you can make little impression on the hard,
             rocky path with {the iobj}. ";
         }     
     ;
     
     + Rule
        dobj = rockyPath
        iobj = pickaxe
        follow()
        {
           "You manage to break through the surface of the rocky
            path with the pickaxe. As a result you uncover a
            small gold box. ";
            goldBox.moveInto(me.location);
        }
     ;
      
     + Rule
        dobj = rockyPath
        iobj = pickaxe
        when = (goldBox.moved)
        follow()
        {
           "Digging around in the path with the pickaxe reveals
            nothing further of interest. ";
        }
     ; 
        
     + Rule
        dobj = rockyPath
        priority = 150
        present = [&canSee, gardener]
        {
           "You start to wield {the iobj}, but when you see
            the gardener looking your way you decide you'd
            better stop. ";
        }
     ; 

     ... 
     
:::

Note that in this second case, the check() and verify() methods of the
direct and indirect objects will already have ensured that the player
character is attempting to dig something that can sensibly be dug with
something that can sensibly be employed as a digging implement, so your
digging rules would not need to test for any of that. If the check
conditions were also likely to be complicated you could always define
separate checkDigging and actionDigging RuleBooks and call them from the
check() and action() methods respectively.

\
[]{#doers}

### Rules and Doers

Rules are a lot like Doers, and at first sight it might appear that both
examples above could equally well have been handled with Doers, for
example:

::: code
     + Doer 'jump'
       when = (goldBullion.isIn(me))
       execAction(c)
       {
          "The bullion is so heavy your feet hardly leave the ground. ";
       }
     ;
     
     + Doer 'jump'
       where = lowCave
       execAction(c)
       {
          "Your head bumps the ceiling. Ouch! ";
       }
     ;
     
:::

This would almost have the same effect, but not quite. By calling the
jumpRules from within the Jump Action you ensure that the Jump action
actually takes place. That means that any preconditions of jumping (such
as not being in any nested room) are honoured, and that the relevant
beforeAction() notifications are sent. This does not happen if you use
Doers to try to achieve the same thing. You may not notice the
difference, but again you may, since you might later go on to add a
roomBeforeAction() or a beforeAction() method that\'s intended to trap a
Jump action, and then discover that it doesn\'t work (because the
beforeAction() notification are never being sent). You could manually
call the beforeAction() notifications from your Doers (usually by
setting their [handleAction]{.code} property to true), but that\'s extra
work, potentially quite a lot of extra work if you\'ve defined quite a
few of them. Using Doers works well if you want:

1.  To stop an action happening at all (and presumably display a message
    explaining why), e.g. \"There\'s not enough room here to jump. \";
    or
2.  To turn one action into another, e.g. to make PUT CARD IN SLOT
    perform the action UNLOCK SECURITY DOOR WITH CARD.

Otherwise, if you want the original action to go ahead, you may well be
better off using Rules. That way you can take full advantage of the
beforeAction() notifications, as well as of any verify() and check()
methods the library already defines for you. (Also, Rules take a more
fine-grained approach that Doers to sorting themselves in order of
specificity, which may also be helpful in complex cases).

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[rules.t](../rules.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Room Parts\
[[*Prev:* Room Parts](roomparts.htm){.nav}     [*Next:*
SceneTopic](scenetopic.htm){.nav}     ]{.navnp}
:::
