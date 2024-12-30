::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Doers\
[[*Prev:* Messages](message.htm){.nav}     [*Next:* Implicit
Actions](implicit.htm){.nav}     ]{.navnp}
:::

::: main
# Doers

A Doer intervenes between a Command and the actions it performs. Most of
the Doers defined in the standard library (which simply match any player
command) either pass the command straight on to the appopriate action
(if it is to be performed by the player character) or call the
handleCommand() method of the target actor (or other object) if it\'s a
command directed at anyone else (such as GEORGE, TAKE THE RED BALL). But
game authors can define custom Doers to intervene much more drastically,
either stopping the action in its tracks or doing something quite
different from the norm. A Doer is thus a little like an Inform 7
instead rule, and like an instead rule it can be defined to match
specific actions on specific objects under specific circumstances, and
only take effect then. Its use is thus similar to that of an instead
rule, except that adv3Lite authors are likely to use Doers rather less
frequently than Inform 7 authors use instead rules, since the methods
for customizing [action results](actres.htm) can often achieve the same
results and will often be a better way of doing things. But there are
cases where defining a custom Doer may be the better or simpler
approach.

There are basically two aspects to defining a Doer: defining the
circumstances under which it is active, and defining what it does when
it\'s active. We\'ll consider each of these in turn.

[]{#defining}

## Defining when a Doer is active

[]{#matching}

### Matching a Command

The first part of defining when a Doer is active is defining what
command it should match. We do this on its cmd property, which should be
defined as a single-quoted string specifying the action and any objects
it might take. We call this the *command string*.

The command string specifies a verb and its objects, generally using the
same verb phrase syntax that a player would use to enter a command to
the game. The exact verb syntax is up to the language library to define;
for English, we replicate the same verb phrases used to parse command
input.

The verb phrase syntax is generally the same as for regular player
commands, but the noun syntax is different. Each noun is written as the
*source code* name of a game object or class. That is, not a
noun-and-adjective phrase as the player would type it, but the program
symbol name as it appears in the source code. If you use a class name,
the command matches any object of the class. For example, to handle
putting any treasure in any container:

::: code
    cmd = 'put Treasure in Container'
:::

You can match multiple objects or classes in a single noun slot (and you
can freely mix objects and classes). For example, to handle putting any
treasure or magic item in a container:

::: code
    cmd = 'put Treasure|Magical in Container'
:::

You can\'t use the \'\|\' syntax with verbs, because the verb syntax
covers the entire phrase. You can match multiple verbs by writing out
the entire phrasing for each verb, separating each phrase with a
semicolon:

::: code
    cmd = 'take skull; put skull in Thing'
:::

You can also write a command that matches ANY verb, by using \"\*\" as
the verb. You can follow the \"\*\" with any number of objects; the
first is the direct object, the second is the indirect, and the third is
the accessory (note, the adv3Lite library does not currently make any
use of the third, accessory, object, unless you include the
[TIAAction](../../extensions/docs/tiaaction.htm) extension). This
phrasing will match any verb that matches the given objects AND the
given number of objects. For example, \'\* Thing\' will match any verb
with a direct object that\'s of class Thing, but it won\'t match verbs
without any objects or verbs with an indirect object. Using \"\*\" as a
noun will match any object as well as no object at all.

[]{#doerdir}

Note, however, that there are some limitations with the kinds of objects
a Doer\'s command string can match. The matching currently only works
properly on objects derived from Thing (i.e. for TActions and TIActions,
along with IActions). It can, however, be made to appear to work with
**directions** to a limited extent. For example, a Doer defined like
this will match a GO NORTH command:

::: code
    Doer
       cmd = 'go north'
       ...
    ;
:::

We can also define a Doer that will match an attempt to move in one of
several directions, for example:

::: code
    Doer
       cmd = 'go north|south'
       ...
    ;
:::

This will match both GO NORTH or GO SOUTH (or just N or S for that
matter). But the way it works isn\'t quite the way it works with
commands referring to physical objects, like the TAKE SKULL example. If
you defined a Doer like this:

::: code
    Doer
       cmd = 'go xxx'
       ...
    ;
:::

You\'d find it would match an attempt to move in any direction (whatever
xxx was, provided it wasn\'t the name of a direction). In the case of a
movement command we could work round this by defining a **direction**
property on the Doer:

::: code
    Doer 'go dir'
      direction = northDir
      ...
    ;
     
:::

It would, however, be simpler to define the action as \'go north\' to
achieve the same effect. Note the use of the [Doer
template]{#doertemplate-idx} here. Since the cmd property has to be
defined for every Doer and it\'s usually a relatively short
single-quoted string, it makes sense to use a template for it like this.

In the previous example it wouldn\'t have made any difference what word
followed \'go\', provided it\'s alphanumeric and didn\'t match the name
of a direction recognized by the library. It could as well have been
\'banana\' or \'kangaroo\' for all the difference it makes to the way
the library interprets the command string in this special case; for the
travel command it\'s simply matching the pattern \'go\' followed by one
other word. This is a consequence of the fact that at this point the
Mercury implementation is set up only to recognize the verb, direct
object, indirect object, and accessory object names in a command string,
and its parser doesn\'t treat a direction as any of these. The library
conceals this limitation from game authors by scanning the cmd string of
every Doer and, if it finds the name of a direction (e.g. \'north\') it
adds the corresponding direction object (e.g. [northDir]{.code}) to the
Doer\'s [direction]{.code} property. So, for example we could do the
following:

::: code
    Doer 'go port|starboard|forward|aft'
        exec(curCmd)
        {
            "Shipboard directions have no meaning in this game. ";
            
            /*  
             *  Use the abort macro to stop the rest of the action processing
             *  cycle in its tracks, since we don't want this refusal to
             *  act to count as a player turn. 
             */
            abort;
        }
        
    ;
:::

This would block any command to go Port, Starboard, Forward or Aft with
the message shown (rather than printing the normal \"You can\'t go that
way\" message, which could be taken as implying that the Shipboard
Directions might be usable in a different room).

Note that if we want to test for the direction associated with the
player\'s command in the exec() method of a Doer in any other way, we
need to test the value of the current command\'s
[verbProd.dirMatch.dir]{.code} property, for example:

::: code
    Doer 'go xxx'
        exec(curCmd)
        {
            local dirn;
            if(curCmd.verbProd.dirMatch != nil)
               dirn = curCmd.verbProd.dirMatch.dir;
               
            /*
             * Note that the dirn variable should now reference a Direction object. 
             */         
            if(dirn == northDirection)
               ...        
        }
    ;    
     
     
     
:::

Incidentally, Doers work even less well at matching commands involving
literals or topics (conversational commands and the like), but this is
probably not much of a restriction in practice since it is hard to
envisage a situation where it would be useful to have a Doer intercept
such commands. It is just about possible to get a Doer to match a
command involving a Topic, but the way of doing it may seem a bit
counterintuitive: you have to use [ResolvedTopic]{#resolvedtop_idx} as
the name of the object or class to be matched. For example this works:

::: code
    Doer 'think about ResolvedTopic'
        execAction(c)
        {
            if(c.dobj.name == 'relativity')
                "That's quite beyond you. ";
            else
                inherited(c);
        }    
    ;
:::

Or you could do it this way:

::: code
    Doer 'think about ResolvedTopic'
        execAction(c)
        {
            "That's quite beyond you. ";
        }
        when = gCommand.dobj.name == 'relativity'
    ;
:::

For a LiteralAction you can do a similar trick using
[LiteralObject]{#literalobj_idx}:

::: code
    Doer 'write LiteralObject'
        execAction(c)
        {
            "You write <q><<c.dobj.name>></q> on the first thing that comes
            to hand. ";
        }
    ;
:::

\
[]{#matching}

### Matching Special Conditions

In addition to matching commands, you can specify the conditions under
which a Doer takes effect; when the conditions are not met, the Doer
does not intervene in the handling of the command. The conditions you
can specify on a Doer are:

-   **where**: This is a room or region, or a list of rooms and/or
    regions; the player character must be in the specified room or
    region, or one of the specified rooms or regions in the list, for
    the Doer to take effect.
-   **during**: A Scene that must be currently happening for the Doer to
    take effect (or a list of scenes, one of which must be active)
-   **when**: A condition that must be true for the Doer to take effect
    (i.e. an expression that evaluates to true or nil or a method that
    returns true or nil)
-   **who**: The actor performing the command (or a list of actors, one
    of whom must be the actor performing this command). Use this
    condition with care, since you could end up bypassing the normal
    [command-handling](orders.htm) process (for when the player
    character gives an order to an actor) in ways you may not intend.

If you specify more than one of these conditions, then all the
conditions you specify have to be true for the Doer to take effect.

To give just one example: people often ask how to disable the UNDO
command during combat. Here\'s one way we could do it with a Doer: first
define a scene during which the combat takes place then define the
corresponding Doer:

::: code
    Doer 'undo'
        exec(curCmd)
        {
            "Sorry, you can't undo right now. ";
        }
        
        during = combatScene
    ;
:::

Note that we don\'t need to use the abort macro in this case (though
doing so would be harmless) since Undo, being a SystemAction, wouldn\'t
run any after notifications, daemons or turn count increment in any case
(which are the steps \'abort\' would normally prevent).

\

## [Defining What a Doer Does]{#doerdoes}

There are two methods you can override on Doer to affect what it does,
**exec(curCmd)** and **execAction(curCmd**). Which of them you choose
depends on what it is you want to achieve. By default exec(curCmd) calls
execAction(curCmd) if the action is to be carried out by the player
character, and curCmd.actor.handleCommand if it\'s a command directed at
anyone or anything else. Thus if you want your custom Doer to have the
same effect whether the command is an action to be carried out by the
player character or a command directed at someone else, then execCmd()
is probably the best method to override; this works best when you simply
want to block the action altogether, as in the examples we\'ve seen so
far. But it you want to make the command work differently just for the
player character, then execAction() is probably the better choice; at
the very least, if you choose to override exec() for anything other than
simply blocking the command altogether you\'ll need to bear in mind that
your custom code will be executed whether the player enters a command
for the player character to carry out (e.g. TAKE RED BALL) or a command
for someone or something else to carry out (e.d. BOB, TAKE THE RED
BALL), and your code will therefore have to cover both cases, something
you don\'t need to worry about if you override execAction() (which is
precisely why it\'s a separate method in the first place).

Whether you\'re overriding exec(curCmd) or execAction(curCmd), it\'s
useful to know that the curCmd parameter represents the current Command
object (it can\'t be abbreviated to cmd, since that\'s the name of a
property of Doer; you could abbreviate it to something briefer like just
c in your own code if you wish, but we use curCmd in this manual to make
it clear what it\'s for). You can use the properties of curCmd to get at
the parser\'s interpretation of the player\'s command. The **actor**
property give the actor the command is targeted at (usually the player
character if it\'s an ordinary command, but otherwise the other actor if
the command was targeted at another actor). The **action** property
gives the action to be carried out (e.g. Take, Jump, PutIn). The
**dobj** and **iobj** properties give the direct and indirect objects of
the command, if they exist.

At the point at which exec() or execAction() is called on a Doer, the
parser has thus identified the action to be carried out, and the objects
involved in that command, and the Command object is processing the
action for one set of objects (where the command might apply to multiple
direct objects, say). The parser has used the action\'s verify method to
help it resolve the objects, but that\'s all; the verify method has not
yet been used to determine whether or not the action can go ahead, and
no other part of the action handling has been carried out. If you try to
handle the action manually you should be aware that unless the normal
action handling is executed, the library won\'t carry out any before
notifications, although depending on the action it will usuall carry out
the after notification, execute any daemons, and advance the turn
counter (since these steps are handled by the Command object). The main
exception is with SystemActions, that don\'t execute before and after
notifications, fuses, daemons and incrementing turn count in any case.
If your Doer simply substitutes one action for another (probably the
commonest case apart from blocking an action altogether), then none of
this should be a problem, since the new action will handle all the
notifications and so forth in any case.

To make this easier for you, the Doer object provides a **doInstead()**
method, which can be called with one or more parameters. The first
parameter is the action you want to execute (e.g. Jump, Take, PutIn).
The two optional parameters are the new direct and indirect objects of
the command which, if they are included, must be called in the order
direct object, indirect object.To give some examples:

-   [doInstead(Jump);]{.code} makes the player character jump.
-   [doInstead(Take, redBall);]{.code} makes the player character take
    the red ball.
-   [doInstead(PutIn, redBall, blueBox);]{.code} makes the player
    character put the red ball in the blue box.
-   [doInstead(PutIn, gDobj, blueBox); ]{.code} makes the player
    character put the original direct object of the command in the blue
    box.

One use of Doer to redirect one command to another could be where
English idiom suggests a meaning for a command other than its usual IF
interpretation. For example, whereas GO THROUGH X normally means passing
through X or walking through X, a command like GO THROUGH JUNK could be
a way of saying SEARCH JUNK, so we might define a Doer like this:

::: code
    Doer 'go through junk'   
        exec(curCmd)
        {
            doInstead(LookIn, gDobj);
        }
    ;
:::

The one slight problem with this is that this Doer will match any
wording of the GO THROUGH action, including WALK THROUGH JUNK, for
example, which may be less than ideal. We can solve this problem by
defining the **strict** property of the Doer to true, which means it
will only match the player\'s command if the first word of the player\'s
command (the command verb) is strictly identical to the first word of
the Doer\'s cmd property. So in this case do define the Doer to match GO
THROUGH JUNK but not WALK THROUGH JUNK we\'d write:

::: code
    Doer 'go through junk'    
        strict = true
        
        exec(curCmd)
        {
            doInstead(LookIn, gDobj);
        }
    ;
:::

For a travel command, use the special **Go** action followed by the
direction object corresponding to the direction you want the player
character to go in; for example:

::: code
     Doer 'jump'
        execAction(curCmd)
        {       
            "You jump off the cliff, and down you go! ";
            doInstead(Go, downDir);
        }
        where = cliffEdge
     ;
     
:::

If you prefer, you can use the macros **goInstead()** and **goNested()**
instead. For example, [goInstead(north)]{.code} would be exactly
equivalent to [doInstead(Go, northDir)]{.code}.

The kind of situation where one might want to use a Doer to carry out
the full processing of a command rather than simply redirecting it to
another action might be where an action involving a particular pair of
objects does something quite out of the ordinary. For example, suppose
that inserting the blood-diamond into the crown of the demon king
results in the player character being instantly transported into the
nether regions; we might use a Doer like this:

::: code
     Doer 'put bloodDiamond in crown'
        execAction(c)
        {        
             
        
            "The crown shatters in your hand. An instant later there's a
             blinding flash and you suddenly feel horribly hot. Once you
             recover your sight you see your surroundings have changed
             ... for the worse!\b";
             
             crown.moveInto(nil);
             
             hell.travelVia(gPlayerChar);        
        }
        
    /* 
         * If we are going to handle an action manually we should first
         * call its beforeAction() method manually to ensure that all
         * the appropriate beforeAction notification are handled as
         * we would expect. Setting handleAction to true ensures that
         * this is taken care of.
         */
            
        handleAction = true
     ;
     
:::

[]{#handleact}

Note in particular the use of the **handleAction** property here. If we
are handling an entire action manually within a Doer without letting any
action actually handle it, it is essential to start by calling the
beforeAction() method of the action we\'re notionally handling so that
the normal beforeAction notifications are sent. Failure to do so may
lead to puzzling bugs later when we find that various beforeAction(),
roomBeforeAction() etc. methods defined elsewhere are not working as we
expect. We can take care of this by setting the [handleAction]{.code}
property of the Doer, which will then call the appopriate beforeAction()
handling for us. To trigger beforeAction handling [handleAction]{.code}
property should either be set to [true]{.code} or to the name of an
Action object. If it is set to [true]{.code} the beforeAction routines
of the action we are notionally handling will be carried out (in the
above example, those for the PutIn action). If we set it to some other
action, such as Travel (since in this example we are sending the player
character on a journey to hell), the beforeAction handlings for that
action will be executed instead. The main difference is in what will
show up as [gAction]{.code} (i.e. the current action) if we want to test
for it in the beforeAction() and/or roomBeforeAction() methods of any
objects and/or rooms.

That said, there are two cases where it makes sense to leave
[handleAction]{.code} at its default value of [nil]{.code}. The first is
where you want the Doer to stop the action in its tracks and do nothing
(such as refusing to go to starboard when the attempt to do so doesn\'t
even make sense), since in such a case no action is actually carried out
and you don\'t want any beforeAction notifications to occur. The second
is when you use [doInstead()]{.code} to carry out a new action, in which
case that new action will handle its own beforeAction notifications
without further ado.

Note that you can also call [doInstead()]{.code} on a Thing or an
Action, using precisely the same syntax, and with broadly similar
effects (broadly similar in that when you call this method on an Action
or Thing you\'re intervening at a later stage of the action-processing
cycle, so the effect isn\'t quite the same). Thing and Action also
define a [doNested()]{.code} method for when you want to perform one
action as part of another instead of replacing one action with another.
It\'s also perfectly okay to call [doNested()]{.code} on a Doer, but in
that case it won\'t do anything different from [doInstead()]{.code}, so
there\'s little point.

If you\'re wondering which to use, then as a rule of thumb
[Doer.doInstead()]{.code} should be used to handle special cases in your
game code, whereas calling [doInstead()]{.code} or [doNested()]{.code}
in the [execAction()]{.code} method of an Action or an action method on
a Thing (or, for that matter, using the lower-level functions
[replaceAction()]{.code} or [nestedAction()]{.code}) is best left either
to general case handling of a new (user defined) action or when
[Doer.doInstead()]{.code} simply won\'t do the job (for example because
you need to execute a nested action as part of another action, or you
need to make another actor do something via [nestedActorAction()]{.code}
or [replaceActorAction()]{.code}, but such cases are likely to be rare).
The technical difference is that calling [Doer.doInstead()]{.code} calls
the exec() method of the new action (and so gives you the entire action
cycle) whereas all the other methods call the [execAction()]{.code}
method of the new action (and so skip part of the action cycle).

Under what other circumstances is it better to define a Doer rather than
override the various methods described in the [Action
Results](actres.htm) section above? The kinds of situation where it
seems likely that a Doer may be the better choice include:

[]{#handling}

1.  Preventing certain actions taking place altogether (conditionally or
    otherwise) as in some of the examples given above.
2.  Transforming one action into another action.
3.  Doing something different under special circumstances, which can be
    readily specified using the where, when and/or during properties of
    a Doer (but remember to set [handleAction]{.code} to true).
4.  Implementing special handling of a TIAction when what should happen
    depends on the particular objects involved, particularly when it
    depends on particular pairings of direct and indirect objects, which
    can become quite awkward to deal with using the methods described
    under [Action Results](actres.htm) (but remember to set
    [handleAction]{.code} to true).

Of these, 1 and 2 are the safest. In cases 3 and 4 you need to remember
to set the Doer\'s **handleAction** property to true, as shown above, or
else you may find yourself faced with hard-to-find bugs. Uses 3 and 4
*may* work well if you\'re careful about how you employ them, but do
bear in mind that if you effectively bypass the normal action handling
in that way, you may have to handle a lot of complexity that would
otherwise be handled for you in the library. Sometimes, a better
alternative to using a Doer in cases 3 and 4 may be to make use of the
[Rules](..\..\extensions\docs\rules.htm) extension and, say, calling a
RuleBook from within the appropriate action() method. Doers can be
useful, but they are not a magic bullet for every kind of complex
problem. Rules are also smarter about sorting themselves in order of
specificity.

The effect of setting [handleAction]{.code} to true is to ensure that
the appropriate beforeAction notifications are sent before the
execAction() method is executed, thus, for example, allowing a relevant
[beforeAction()]{.code} or [roomBeforeAction()]{.code} method to veto
the action. It is good practice to do this unless you are absolutely
certain you want to bypass the beforeAction notifications, since
otherwise you may be left wondering why beforeAction notifications
aren\'t working as you expect.

The effect may be illustrated by means of the following examples.
Suppose on the current room you have defined:

::: code
     roomBeforeAction()
        {
            if(gActionIs(Wait))
            {
                "There's no time to hang around here! ";
                exit;
            }
        } 
     
:::

And elsewhere in you code you have the following Doer:

::: code
     Doer 'wait'
        execAction(c)
        {
            "You wait patiently, but nothing much happens. ";
        }   
    ; 
     
:::

Then the response to WAIT would be \"You wait patiently, but nothing
much happens. \" Since the beforeAction notifications haven\'t been
sent, [roomBeforeAction()]{.code} never gets a look-in. But if instead
you defined the Doer thus:

::: code
     Doer 'wait'
        execAction(c)
        {
            "You wait patiently, but nothing much happens. ";
        }
        
        handleAction = true // NOTE THIS ADDITION
    ; 
     
:::

Then the response to WAIT would be \"There\'s no time to hang around
here! \" In this case the [roomBeforeAction()]{.code} method would
intercept the action, as you would normally expect.

[]{#enterdoer}

A good example of a type 3 case where you might want to use a Doer to
handle an entire action manually, bypassing the normal action handling,
is where you want to allow the player character to ride a vehicle into
an enterable object (for example, to allow the player to use the command
ENTER COPSE to make the player character ride a bike into the copse,
when the copse object is an Enterable representing the exterior of
another location, such as insideCopse). The default library behaviour
here would be to make the player character get off the bicycle and enter
the copse on foot (that is the player character object would be moved to
insideCopse but the bike would be left behind). This default is
perfectly sensible; in most cases where the player character is in or on
one object it makes sense for the player character to leave that first
object before entering a second. Unfortunately, it may not be what we
want in this particular case. While it would be possible to override the
dobjFor(Enter) handling on the copse object to produce the desired
effect, this would be quite fiddly to get right (given that we\'d also
want to allow the player character to walk into the copse without using
any vehicle), and is almost certainly much more easily handled with a
Doer:

::: code
    Doer 'enter copse'
        execAction(c)
        {
            "{I} {ride} the bike into the copse. ";
            bike.travelVia(insideCopse);
        }
        
        handleAction = true
        
        when = gPlayerChar.isIn(bike);    
    ;
     
:::

\
[]{#doerpriority}

## Priority of Doers

If several Doers are defined, it\'s possible that more than one will
match a given command, in which case there needs to be some way of
determining which one takes effect. The way in which the Mercury
library, and hence the adv3Lite library, handles this is rather like the
way Inform 7 orders the priority of rules such as instead rules, by
giving the more specific Doers priority over less specific ones. Doers
also have a **priority** property (default value 100) which can be used
to determine the Doer\'s precedence order manually. You can use this
when it\'s necessary to override the default precedence order, which is
figured according to the specialization rules described below.

Most of the time, you shouldn\'t need to set a priority manually. If you
don\'t, the library determines the precedence automatically according to
the degree of specialization. However, the way the library figures
specialization is a heuristic, so it\'s not always right. In cases where
the heuristic produces the wrong results, you can bypass the rules by
setting a priority manually. A manual priority takes precedence over all
of the standard rules.

The basic approach is to process Doers in order from most specific to
most general. This creates a natural hierarchy of handlers where more
specific rules override the generic, default handlers. Here are the
degrees of specialization, in order of importance:

1.  A Doer with a higher *priority* value takes precedence over one with
    a lower value.
2.  A Doer with a *when* condition is more specific than a Doer without
    one. A *when* condition means that the Doer is designed to operate
    only under specific circumstancs, so it\'s inherently more
    specialized than one that always operates.
3.  A Doer with a *where* condition is more specific than a Doer without
    one. A *where* condition means that the Doer only applies to a
    limited geographical area.
4.  A Doer with a *who* condition is more specific than a Doer without
    one. A *who* condition means that the Doer only applies to a
    particular actor.
5.  A Doer with a *during* condition is more specific than a Doer
    without one. A *during* condition means that a Doer is restricted to
    a particular scene.
6.  A Doer that matches a particular Action is more specific than one
    that matches any Action.
7.  If two Doer commands are for the same Action, the Doer that matches
    a more specialized subclass (or just a single object instance) for a
    noun phrase is more specific than one that matches a base class for
    the same noun phrase. For example, \'take Container\' is more
    specific than \'take Thing\', because Container is a subclass of
    Thing, and \'take backpack\' (where the \'backpack\' is a Container)
    is more specific than either. This type of specialization applies in
    the canonical object role order: direct object, indirect object,
    accessory. For example, we consider \'put Container in Thing\' to be
    more specific than \'put Thing in Container\', because we look at
    the direct object by itself before we even consider the indirect
    object. This rule only applies when the Action is the same: \'put
    Thing in Container\' and \'open Door\' are equal for the purposes of
    this rule.

It\'s important to understand that each degree of specialization is
considered independently of the others, in the order above. For example,
if you have a Doer with just a \'when\' condition, and another with only
a \'where\' condition, the one with the \'when\' condition has higher
priority. This is because we look at the presence of a \'when\'
condition first, before even considering whether there\'s a \'where\'
condition.

The library has no way to gauge the specificity of a \'when\',\'where\',
\'who\' or \'during\' condition, so there\'s no finer-grained priority
to the conditions than simply their presence or absence.

If two Doers have the same priority based on the rules above, the one
that\'s defined LATER in the source code has priority. This means that
Doers defined in the game take priority over library definitions.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Doers\
[[*Prev:* Messages](message.htm){.nav}     [*Next:* Implicit
Actions](implicit.htm){.nav}     ]{.navnp}
:::
:::
