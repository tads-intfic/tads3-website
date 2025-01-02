---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Implied Action
Reports  
<span class="navnp"><a href="t3msg.html" class="nav"><em>Prev:</em> Message Parameter
Substitutions</a>    
<a href="t3lister.html" class="nav"><em>Next:</em> Lists and Listers</a>
    </span>

</div>

<div class="main">

# Implicit Action Reports

*by Eric Eve*

Implicit Actions are actions carried out by a TADS 3 game that not
explicitly commanded by the player, usually in order to facilitate the
command the player has just explicitly typed. For example if the player
types EAST when going east would take the player character through a
closed door, the game will (normally) first try to open the door with an
implicit action to enable the explicitly commanded travel action to go
ahead. Similarly, if the player types PUT BALL IN BOX when the ball is
in plain view but not actually held by the player character, a TADS 3
game will typically trigger an implicit action to take the ball before
carrying out the PUT IN action the player explicitly requested.

Such behaviour is generally desirable, since it relieves the player of
the tedium of having to explicitly open every door before walking
through it, or explicitly picking up every object before putting it
somewhere (and so on). It also makes for a much smoother playing
experience to get something like:

    >EAST
    (first opening the door)

    Hall
    This large hall looks as if a small army of servants spends 20 hours a day
    polishing its floor. Doors lead off in all the cardinal directions.

    You see a red ball and a cardboard box here.

    >PUT BALL IN BOX
    (first taking the red ball)
    Done.

Rather than the potentially frustrating:

    >EAST
    You can't, because the door is in the way.

    >PUT BALL IN BOX
    You need to be holding the red ball before you can put it in anything.

Normally the library handles all this automatically for you, usually
through the [preconditions](t3res.html#precond) applied to various
actions. It is also possible to trigger an implicit action in your own
code using the `tryImplicitAction` macro. Either way the game will take
care of reporting the implicit action for you, so that the player is
kept informed of what action the game has just performed on his/her
behalf. These implicit action reports generally take the form of the
messages in brackets we have just seen in the examples above, e.g.

    (first opening the door)

    (first taking the red ball)

A slightly different form of implicit action report is displayed when an
implicit action is attempted but fails for some reason (the door is
locked or the ball is too heavy); in such a case the implicit action
attempted is usually introduced with 'trying to'; for example:

    >EAST
    (first trying to open the door)
    The door seems to be locked.

    >PUT BALL IN BOX
    (first trying to take the ball)
    The ball must be made of solid lead - you can't shift it!

For the most part these standard implicit action reports work well, and
you may never need to worry about them in your game. Occasionally,
though, you may feel you want to vary them for stylistic effect, or to
avoid a report that looks jarring. Suppose, for example, that your
leading female NPC won't let the PC kiss her while he's carrying the
large antique china vase, but you decide to handle putting down the vase
through an implicit action:

      dobjFor(Kiss)
      {
          verify() {}
          action()
          {
              if(vase.meetsObjHeld(gActor);
                 tryImplicitAction(Drop, vase);
                 
              "You give Myrtle a firm kiss on her lips, which makes her burst
               into a fit of giggles. ";
          }           
      }

Then what the player will see is something like:

    >kiss myrtle
    (first dropping the priceless antique vase)
    You give Myrtle a firm kiss on her lips, which makes her burst
    into a fit of giggles.

And you may think this looks a little jarring. Perhaps you would have
preferred:

    >kiss myrtle
    (first putting the priceless antique vase carefully down on the floor)
    You give Myrtle a firm kiss on her lips, which makes her burst
    into a fit of giggles.

This is not too difficult to do once you know how, but it may not be
immediately apparent how to do it. This article will explore how.

  

## The Parts of an Implicit Action Report

If you want to customise an implicit action report, it's first helpful
to recognize that it's made out of a number of elements. For present
purposes we may regard these as the *report framework* and the *action
phrases*. The *action phrases* are the parts of the report referring to
the specific actions being attempted, while the *report framework* is
the surrounding material that identifies the whole thing as an implicit
action report, and makes it grammatically complete. So for example, in
the implicit action reports:

    (first opening the door)
    (first unlocking the door then opening it)
    (first trying to open the door)

    opening the door
    unlocking the door
    opening it
    to open the door

Are all action phrases, whereas:

    (first      )
    (first        then     )
    (first trying          )

Are all report framework. From this it can be seen that an *action
phrase* always consists of a verb (as either a participle - e.g.
opening - or as an infinitive - e.g. to open) plus the object or objects
involved in the action (the door, or the door with the brass key if the
implicit action were "first unlocking the door with the brass key"). It
is likely to be more useful (and generally easier) to customise an
*action phrase* than the *report framework*, so we shall spend most of
the time looking at the former before giving a brief discussion of the
latter.

  

## Customizing Action Phrases

If all we want to do is to customize the action phrase part(s) of an
implicit action report, then ideally we'd like to be able to leave
everything else to the standard library rather than trying to
reimplement wheels in our own code. In this context "everything else"
refers to all aspects of the framework (such as words like "first",
"trying" and "then") as well as deciding whether we need the participle
or infinitive form ("first opening the door" vs "first trying to open
the door") and using a pronoun instead of a noun the second and
subsequent times we refer to the same object ("first unlocking the door
then opening it" rather than "first opening the door then opening the
door"). Fortunately it is easy to write code that changes the action
phrase(s) while leaving the standard library to do everything else as
normal.

The key to this is understanding where the action phrase comes from. In
every case the action phrase of an implicit action report is derived
from the `verbPhrase` property of the associated action, so all we need
to do is to change that `verbPhrase` at some appropriate point, just
before the standard libary code uses it to generate the implicit action
report. In the standard library (and on custom actions you define in
your own code), the `verbPhrase` property is generally defined in the
appropriate `VerbRule` (if you're not familiar with this, see the
article on [How to Create Verbs](t3verb.html)). A `verbPhrase` typically
looks like:

    verbPhrase = 'drop/dropping (what)'

    verbPhrase = 'unlock/unlocking (what) (with what)'

In these verbPhrases, (what) is a placeholder for the noun or nouns
involved in the action, and the 'drop/dropping' or 'unlock/unlocking'
give the infinitive (minus the 'to') and the participle of the
corresponding verb. So, if the implicit action report routine wants to
construct a message for an implicit action that *succeeds* it takes the
verb form immediately after the slash (/) and substitutes the noun for
(what), generating a message like 'dropping the priceless antique vase'.
Similarly, if an implicit action fails, the implicit action report
routine take the verb form immediately before the slash (e.g. unlock),
inserts the noun or nouns into the (what) slots (e.g. 'the door with the
brass key') and prepends "trying to" before the whole thing ("first
trying to unlock the door with the brass key").

So, in the antique vase example, what we need to do is to change this
verbPhrase to something like 'place/placing (what) gently on the floor'
just before the implicit drop action report is generated. The best place
to do this is probably in the `getImplicitPhrase()` method of the
appropriate action:

    modify DropAction    
        getImplicitPhrase(ctx)
        {
            if(dobjCur_ == vase)
                verbPhrase = 'set/setting (what) gently on the floor';
            
            return inherited(ctx);
        }    
    ;

When this modified code runs, it will run on an object of class
DropAction that only exists for the duration on the implicit action
being executed. This means that we don't need to worry about resetting
`verbPhrase` back again to its normal value once we've finished with
this action; any subsequent DROP will take its verbPhrase from
VerbRule(Drop) and won't be affected by the change we've made to this
particular action instance. Moreover since the method will be executed
on the particular action instance we're interested in, we can test
properties of the current (self) object (such as `dobjCur_` and
`iobjCur_`) to get at the objects involved in the command, and we can
change the `verbPhrase` on the current (self) object to get the effect
we want. In this example we simply test whether the current direct
object is the vase, and if so we substitute our custom `verbPhrase` for
the standard one. Implicitly dropping anything other than the vase will
result in the standard message being used.

This method is fine where there's only one object we want to treat as a
special case, but if there were several - especially several with
different customized messages - we might want a more a general solution
(rather than writing a `switch` statement or multiple `if` tests in the
getImplicitPhrase() method). What would be useful would be a method that
had the object concerned decide whether to use a custom phrase, and if
so to supply that custom it. We could achieve this like so:

    modify DropAction    
        getImplicitPhrase(ctx)
        {
            if(dobjCur_.verbPhraseDobjDrop != nil)
                verbPhrase = dobjCur_.verbPhraseDobjDrop;
            
            return inherited(ctx);
        }    
    ;

This code checks whether the current direct object has a non-nil
`verbPhraseDobjDrop` property, and, if (but only if) it has, changes the
`verbPhrase` property on the current action to match. We could, of
course, have called the property of the direct object we're testing for
anything we liked, but there are a couple of advantages to the name
suggested here. First, the suffix 'DobjDrop' makes it clear what this
verbPhrase variant is for (which could become more relevant if we were
customizing several actions in this way) and secondly it corresponds to
the way the dobjFor propertyset expands property names. This means that
we can then customize the vase thus:

    + vase: Thing 'priceless antique vase' 'priceless antique vase'
        dobjFor(Drop)
        {
            action()
            {
                if(!gAction.isImplicit)
                  "{You/he} set{s} the antique vase carefully down on the ground. ";
                inherited;
            }
            verbPhrase = 'set/setting (what) carefully down on the ground. '
        }
    ;

Note that here we've also customized the response to an explicit DROP
VASE so that it corresponds to the implicit message, and that we've
included a test to ensure that this message is only shown when the
action is not implicit (since otherwise we'd see both custom messages -
the implicit and the explicit ones - when the vase was dropped
implicitly, which would not look good.)

The technique outlined here is easily generalizable and should cater for
most implicit action phrase tweaking you're likely to do, but there are
a couple of further points to bear in mind:

- If a player sees an implicit action report like "(first setting the
  priceless antique vase carefully down on the ground)" s/he may very
  well suppose that this is a legitimate way to phrase the action, and
  so at some future point s/he'll try SET VASE CAREFULLY DOWN ON GROUND.
  It might be a good idea to modify or create a VerbRule to cater for
  this phrasing and its likely variants.
- There's no reason why the technique outlined above shouldn't be
  extended to cover two-object commands, but what you'll then need to
  look out for is whether you want the direct object or the indirect
  object of the command to be the one providing the customized
  verbPhrase, or whether you want to give both objects the chance to
  provide a customized verbPhrase, in which case you'll need to decide
  which of the two is to take precedence.

One further advantage of the approach described in this section is that
it allows us to customize implicit action announcements from implicit
actions generated by preconditions, as well as those generated by
explicit calls to tryImplicitAction in our own code. At the end of the
article we'll see how we can use tryImplicitActionMsg as an alternative
way to customize implicit action reports, but this alternative won't
work with the preconditions defined in the standard library.  

## Modifying Framework Text

Modifying the framework text for implicit action reports is probably
less useful to do and rather fiddlier to achieve, so we shall not spend
a great deal of time discussing it. The difficulties are (1) finding
where these bits of text are generated and then (2) customizing them,
given that they turn out to be hard-coded in the depths of various
methods.

We can address the first of these difficulties here by simply pointing
out where in fact these pieces of text are defined in the standard
library. The framing fragment, "(first...)\n" comes from
standardImpCtx.buildImplicitAnnouncement(txt), but you'll actually find
this method defined on the superclass ImplicitAnnouncementContext:

    buildImplicitAnnouncement(txt)
        {
            /* if we're not in a list, make it a full, stand-alone message */
            if (!isInList)
                txt = '<./p0>\n<.assume>first ' + txt + '<./assume>\n';

            /* return the result */
            return txt;
        }

This would be reasonably easy to customize if, for example, you wanted
to change 'first' to 'having first' (you'd just modify standardImpCtx or
ImplicitAnnouncementContext and define your own version of
buildImplicitAnnouncement() accordingly).

Similarly, the 'trying' that preceeds a failed implicit action comes
from tryingImpCtx.buildImplicitAnnouncement, so that, for example, if
you wanted such reports to read "(first attempting to open the door)"
instead of "(first trying to open the door)" you could just modify
tryingImpCtx and override buildImplicitAnnouncement accordingly:

    modify tryingImpCtx    
        buildImplicitAnnouncement(txt)
        {    
            if (!isInSublist)
                txt = 'attempting to ' + txt;

            /* now build the message into the full text as usual */
            return inherited(txt);
        }
    ;

Trickier, and probably even less useful, to change are the separator
parts of the implicit action report framework ("then", "and then" or
just ","). If you really must change these, then the place to look is in
the definition of the implicitAnnouncementGrouper object (defined in
msg_neu.t). What you would need to do is to modify
implicitAnnouncementGrouper, copy and paste the definition of the
compositeMessage(lst) method into your own code, and then tweak the
parts of the method you want to tweak (e.g. by changing 'then' to 'next'
wherever it occurs in a string). This is seldom likely to be all that
worthwhile, but it would not in principle be all that difficult to do if
you were really determined to put your own stamp on implicit action
announcements.

  

## Silent Implicit Actions and tryImplicitActionMsg

We have covered most of the ways in which it is likely to be useful to
customize an implicit action report, apart from two things:

- Suppressing implicit action reports altogether
- Making use of the 'official' mechanism for customizing implicit action
  reports - tryImplicitActionMsg.

As it so happens, these things are closely related, since suppressing an
implicit action report altogether is probably the most practical use of
tryImplicitActionMsg. In particular, if, say, we wished to carry out an
implicit DROP VASE command without any implicit action report at all,
we'd just use:

    tryImplicitActionMsg(&silentImplicitAction, Drop, vase);

The one limitation is that we can only use this in place of
tryImplicitAction when we're explicitly calling it from our own code; if
the implicit action report is coming from a precondition we'd have to
modify the precondition to replace the silent implicit action with the
implicit action the precondition was currently using (though it's hard
to see why anyone would *want* to do this, since failing to report the
implicit action is likely to confuse the player).

To give a slightly fuller explanation: what
tryImplicitActionMsg(&msgProp, action, ...) does is to try the implicit
action and to construct the corresponding report using the msgProp
property of libMessages in place of the announceImplicitActionMsg
property (of libMessages) that would normally be used. Thus:

    tryImplicitAction(Drop, vase);

Is exactly equivalent to:

    tryImplicitActionMsg(&announceImplicitAction, Drop, vase);

If you look at the definition of libMessages in msg_neu.t, you'll see it
defines:

        /*
         *   Get a string to announce an implicit action.  This announces the
         *   current global action.  'ctx' is an ImplicitAnnouncementContext
         *   object describing the context in which the message is being
         *   displayed.  
         */
        announceImplicitAction(action, ctx)
        {
            /* build the announcement from the basic verb phrase */
            return ctx.buildImplicitAnnouncement(action.getImplicitPhrase(ctx));
        }

        /*
         *   Announce a silent implied action.  This allows an implied action
         *   to work exactly as normal (including the suppression of a default
         *   response message), but without any announcement of the implied
         *   action. 
         */
        silentImplicitAction(action, ctx) { return ''; }    

Now, we *could* make use of tryImplicitActionMsg to define an ad-hoc
message for putting down the vase:

    modify libMessages
        announceImplicitDropVaseAction(action, ctx)    {
            
            return '(first putting the priceless vase carefully down on
                the ground)\n';
        }
    ;

At first sight this may seem at least as simple, if not simpler, than
the methods suggested in previous sections, and indeed, in a simple
situation it might well be safe to do this kind of thing and then make
use of it with:

    tryImplicitActionMsg(&announceImplicitDropVaseAction, Drop, vase);

But there are certain limitations. In particular, it's only safe to do
it this way if we know (a) that the implicit action will never fail (so
we'll never use the 'first trying to...' form) and (b) that it's the
only implicit action to be performed on the current turn (so that it'll
never be part of a chain like "(first putting down the vase, then taking
off your hat)"). If we can't be certain of both (a) and (b) we'll have
to start writing extra code to test for these conditions, at which point
it will probably have been easier to use the standard library definition
of announceImplicitAction() and to make our tweaks elsewhere, using the
techniques outlined in previous sections. On the other hand, where we
want a highly non-standard implicit action announcement, especially if
we can be pretty confident about the context in which it will be used,
defining a custom method on libMessages and using it via a call to
tryImplicitActionMsg may be the way to go.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Implied Action
Reports  
<span class="navnp"><a href="t3msg.html" class="nav"><em>Prev:</em> Message Parameter
Substitutions</a>    
<a href="t3lister.html" class="nav"><em>Next:</em> Lists and Listers</a>
    </span>

</div>
