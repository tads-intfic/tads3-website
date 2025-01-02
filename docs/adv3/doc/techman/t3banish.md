---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Banishing (and
Changing) Awkward Messages  
<span class="navnp"><a href="advtop.html" class="nav"><em>Prev:</em> Advanced Topics</a>
   
<a href="t3cycle.html" class="nav"><em>Next:</em> The Command Execution
Cycle</a>     </span>

</div>

<div class="main">

# Banishing (and Changing) Awkward Messages

*by Eric Eve*

TADS 3 does a good job of reporting the status of things to the player,
often through little snippets of text appended to descriptions, such as
"it's open" or "(providing light)". So long as we're happy with the way
is doing this, there's no problem. But if we want to change these
messages, or suppress them altogether, things can get trickier. It's not
that TADS 3 does not allow you to change or suppress these messages,
it's that it's not always immediately obvious how to do it, and that if
you don't know how to do it, wrestling with these little bits of extra
text can become an exercise in frustration. These messages then become
awkward in two senses: they read awkwardly in context (which is why you
may want to change them or get rid of them), and they can prove awkward
to tame.

In this article we shall explore how to deal with four common types of
"awkward" message. In each case we shall also see how the process can be
made a bit simpler by using the custmsg.t extension, which you should be
able to find in the ../lib/extensions directory of your TADS 3
installation. To use custmsg.t just add it to your project after the
adv3 library files but before any of your own game files. If you want
even fuller control over what TADS 3 does when listing and describing
objects, you could try Mark Engelberg's Custom Report extension.

## <span id="open">Open and Closed</span>

If you examine any kind of openable object in a TADS 3 game (such as a
door or an openable box or a drawer) you'll see that the description has
"it's open" or "it's closed" tacked onto whatever description you gave
it. This is fine if it's what you want, but it's not always appropriate.
Consider the following examples:

    >x gate
    It's a large five-bar wooden gate. Through the bars you can clearly see a lush green
    field stretching off into the middle distance. It's open.

    >x flashlight
    It's a sturdy torch, sheathed in black rubber, with a firm grip. It's closed.

In the first example, the text "It's open" comes awkwardly after the
description of the field. In the second, the flashlight has been made an
OpenableContainer so that a battery can be inserted into it, but we
probably don't want the player to see the explicit "It's closed" as part
of its description.

If we simply wanted to *change* the way the open/closed status of these
objects was described, that would be simple enough; we could simply
override the openDesc property of the objects in question, e.g.:

       openDesc = (isOpen ? 'wide open' : 'firmly shut')

But there's no point changing openDesc to an empty string if we want to
get rid of these reports altogether, since that would give us:

    >x gate
    It's a large five-bar wooden gate. Through the bars you can clearly see a lush green
    field stretching off into the middle distance. It's.

    >x flashlight
    It's a sturdy torch, sheathed in black rubber, with a firm grip. It's.

There is also an openStatus() method that provides the complete sentence
("it's open" or "it's closed"), but this method is not responsible for
the closing punctuation. That means that simply overriding openStatus to
do nothing doesn't quite work either, since we then end up with a
spurious additional period/full stop.:

    >x gate
    It's a large five-bar wooden gate. Through the bars you can clearly see a lush green
    field stretching off into the middle distance. .

It's possible to overcome this with a bit more fiddling, but it does
become very fiddly. The proper way to fix this is by using a custom
openableContentsLister; this method is explained further in the article
on [Listers](t3lister.html#openable). There is, however, a much easier
way if you include the custmsg.t extension in your game. This extension
defines a new property, openStatusReportable (on analogy with the
library's lockStatusReportable). If this property is set to nil, the
unwelcome "it's open/closed" disappears, along with the wayward full
stop. The gate could then be redefined like this:

    + gate: Openable, Door 'gate' 'gate'
        "This large five-bar wooden gate is currently <<openDesc>>. Through the
        bars you can clearly see a lush green field stretching off into the middle
        distance. "
        openStatusReportable = nil
    ;

As noted above, the method openDesc is already defined in the libary; it
will therefore display "open" or "closed" as appropriate. By this means
we can integrate the gate's open/closed status into its description much
more neatly than the library default.

In the case of the flashlight we may be happy for the "it's open"
message to be tacked on when it's open, but would like to suppress the
"it's closed" message when it's closed. We can do that by setting
openStatusReportable to (isOpen):

    + blackTorch: OpenableContainer, Flashlight 'black rubber grip/torch/flashlight' 
        'torch'
        "It's a sturdy torch, sheathed in black rubber, with a firm grip. "
        openStatusReportable = (isOpen)
    ;

Remember, though: if you want to use openStatusReportable you *must*
include the custmsg.t extension in your project.

  

## <span id="lit">Lit and Providing Light</span>

In the previous section we saw an example of a flashlight that was also
an OpenableContainer (to allow batteries to be inserted). When it's used
as a flashlight and turned on, the library adds a little piece of text
("(providing light)") to its name when it's listed. For example, suppose
the player picked up the torch, turned it on, and then issued an
INVENTORY command:

    >take flashlight
    Taken. 

    >turn it on
    Okay, the torch is now on. 

    >i
    You are carrying a torch (providing light). 

If you're happy with the "(providing light)" message, that's fine; but
what if you want to change it? Well, the first thing you need to know is
where it comes from: it comes from the listName\_ property (note the
underscore) of a ThingState object called lightSourceStateOn. This may
need a bit more explanation.

ThingStates are helper objects that are used to keep track of
state-related vocabulary of certain kinds of Thing. They have two main
functions. The first, which does not concern us here, is to determing
what words can be used to refer to the Thing in question (a lit torch
can be referred to as 'lit' and an unlit one as 'unlit'); this is
defined through the ThingState's stateTokens property. The second
function, which does concern us, is to provide these extra little pieces
of text that describe the Thing's state (e.g. lit or unlit) when it's
listed.

Only a handful of ThingStates are defined in the library, and only a
handful of classes make use of them:

- **LightSource** has the associated ThingStates **lightSourceStateOff**
  (when not emitting any light) and **LightSourceStateOn** (when
  emitting light). lightSourceStateOn adds the text "(providing light)"
  to the name of a LightSource when it appears in a list.
- **Matchstick** has the associated ThingStates **matchStateLit** (when
  lit) and **matchStateUnlit** (when unlit). matchStateLit adds the text
  "(lit)" to the name of a Matchstick when it's lit.
- **Wearable** has the associated ThingStates **unwornState** and
  **wornState**. wornState defines listName\_ as 'being worn' but
  overrides wornName() to do nothing when a Wearable appears in a list
  of items introduced as being worn (e.g. "You are wearing a brown
  overcoat, a pair of old shoes, and a pink carnation"), when it would
  be superfluous to add "(being worn)" after each name.

Changing or suppressing these messages globally is straightforward. If
you never want any LightSource to announce when it's lit, simply
override lightSourceStateOn.listName\_ to nil:

    modify lightSourceStateOn
        listName_ = nil
    ;

Similarly if we wanted all Matchsticks to announce their lit state with
the text 'ablaze' instead of 'lit' we could likewise modify
matchStateLit:

    modify matchStateLit
        listName_ = 'ablaze'
    ;

The difficulty comes if we want these messages to be different on
different objects; if, for example, we want lit candles to describe
themselves as "(alight)" but a light-emitting flashlight to describe
itself as "(switched on)".

There's a number of ways we could go about this; we could:

1.  override lightSourceStateOn.listName\_ for the message we wanted to
    appear most commonly, and then define our own custom ThingState, say
    flashLightOnState, for our flashlight, defining its listName\_
    according to our special requirememnts.
2.  override lightSourceStateOn.listName(lst) so that it checked its lst
    parameter and produced a different text accordingly.
3.  use the custmsg.t extension and simply override the
    providingLightMsg property on the flashlight object.

Let's now look at each of these methods in turn:

### 1. Using a Custom ThingState

The first method is to define a custom ThingState for any object where
we want an exceptional lit status message to appear; e.g.

    + blackTorch: OpenableContainer, Flashlight 
        'black rubber switched on grip/torch/flashlight'    'torch'
        "It's a sturdy torch, sheathed in black rubber, with a firm grip. "    
        allStates = [lightSourceStateOff, flashlightStateOn]
        getState = (brightness > 1 ? flashlightStateOn : lightSourceStateOff)
    ;

    ++ flashlightStateOn: ThingState 'switched on'
        stateTokens = ['lit', 'on']
    ;

Note that there's no particular reason to locate the flashlightStateOn
object in the flashlight like this (as we've done with the ++ notation),
but that it does no harm. It's useful here because (a) it keeps
flashlightStateOn out of the way in the object containment hierarchy and
(b) it shows that this ThingState is closely associated with this
particular object.

This method is perfectly workable, but a little laborious, especially if
we need to use it for a lot of objects needing custom messages.

  

### 2. Overriding listName()

If we don't want to create custom ThingStates, our second option is to
modify the existing ThingState to change its text according to the
object it's describing. We can do this in its listName() method (not to
be confused with the listName\_ property, which has an underscore),
along the following lines:

    + blackTorch: OpenableContainer, Flashlight 
        'black rubber switched on grip/torch/flashlight'    'torch'
        "It's a sturdy torch, sheathed in black rubber, with a firm grip. "    
    ;

    modify lightSourceStateOn
        listName(lst)
        {
            if(lst.length > 0 && lst[1] == blackTorch)
                return 'switched on';
            
            return inherited(lst);
        }
    ;

If there were several different objects for which we wanted several
different customized messages, we could either use a switch statement,
or else make listName() use a property of the object being listed. The
latter method is used by the custmsg extension, which brings us to the
third approach:

  

### 3. Using custmsg.t

If we include the custmsg.t in our project, we can achieve the same
effect simply by overriding the providingLightMsg property on the
flashlight object:

    + blackTorch: OpenableContainer, Flashlight 
        'black rubber switched on grip/torch/flashlight'    'torch'
        "It's a sturdy torch, sheathed in black rubber, with a firm grip. "    
        providingLightMsg = 'switched on'    
    ;

This extension allows us to customise providingLightMsg and
notProvidingLightMsg on a LightSource or Match (corresponding to their
lit and unlit states) and wornMsg or unwornMsg on a Wearable
(corresponding to its worn or unworn state). So, for example, we could
define an old coat like this:

    + oldCoat: Wearable 'old brown coat' 'old coat'
        "It's brown, but not too motheaten. "
        unwornMsg = 'which nobody is wearing right now'
    ;

With which we could get a transcript like this:

    >take coat
    Taken. 

    >i
    You are carrying an old coat (which nobody is wearing right now). 

    >wear coat
    Okay, youre now wearing the old coat. 

    >i
    You are carrying nothing, and are wearing an old coat. 

Clearly, using custmsg.t makes things a lot easier if we want to do much
of this sort of thing.

Finally, note that this method can also be use to selectively suppress
messages altogether. For example, if we didn't want the flashlight to
show any special text when it's on, we could just set its
providingLightMsg to nil.

  

## <span id="posture">Unwanted Postures</span>

If an actor is located in a NestedRoom, or has a posture other than
standing, then the standard library adds a description of the actor's
posture to the description that's displayed when he or she is examined.
For example, suppose we define:


    mavis: Person 'old mavis/woman' 'Mavis' @woodenChair
        "She's a funny old woman, when all's said and done. "  
        isProperName = true
        isHer = true
        posture = sitting
    ;

    + HermitActorState
        isInitState = true
        noResponse = "The old woman simply rocks back and forth in her chair
            moaning, <q>Woe, woe, woe is me!</q>"    
        specialDesc = "Mavis is slumped miserably in the wooden chair. "    
    ;

Then, when we examine Mavis we'll see:

    >x mavis
    She's a funny old woman, when all's said and done. She is sitting on the wooden chair. 

This may not be ideal, but it's serviceable, and in this situation the
information that she's sitting on the wooden chair may well be something
that we're content to convey to the player in this manner. But suppose
we'd given Mavis's HermitActorState a stateDesc which already contained
this information:

    + HermitActorState
        isInitState = true
        noResponse = "The old woman simply rocks back and forth in her chair
            moaning, <q>Woe, woe, woe is me!</q>"
        stateDesc = "She's rocking back and forth in her chair moaning <q>Woe!</q> "
        specialDesc = "Mavis is slumped miserably in the wooden chair. "
    ;

    >x mavis
    She's a funny old woman, when all's said and done. She is sitting on the wooden chair. 
    She's rocking back and forth in her chair moaning Woe!

Now the sentence "She is sitting on the wooden chair" looks decidedly
redundant; but how do get rid of it? In this case the answer is quite
easy; since the redundant sentence is generated by Actor.postureDesc(),
we can just override postureDesc on Mavis herself, so that it displays
nothing:

    mavis: Person 'old mavis/woman' 'Mavis' @woodenChair
        "She's a funny old woman, when all's said and done. "  
        isProperName = true
        isHer = true
        posture = sitting
        postureDesc = nil
    ;

Then we'll see:

    >x mavis
    She's a funny old woman, when all's said and done. She's rocking back and forth in 
    her chair moaning Woe! 

That works well in this case; indeed it would work well for any actor
for which we *never* wanted the library generated posture description to
appear. It gets more complicated, however, if we want the
library-generated posture description to occur in some cases but not
others; if, for example, we want it while Mavis is lying in the bath but
not while she's sitting on the wooden chair. We could achieve this with
a more nuanced override of postureDesc():

    mavis: Person 'old mavis/woman' 'Mavis' @woodenChair
        "She's a funny old woman, when all's said and done. "  
        isProperName = true
        isHer = true
        posture = sitting
        postureDesc()
        {
            if(curState == mavisInBathState)
               inherited;
        }
    ;

But the more different ActorStates with different requirements are
involved, the more complex, messy, and bug prone this is liable to
become. For the simple examples given here, there's not much problem,
but for more complex cases it would be nice to let the ActorState decide
whether the postureDesc should be shown or not.

This can be achieved using the custmsg.t extension.

If you include custmsg.t in your project, you can use the new
postureReportable property of ActorState; so we could just define:

    + HermitActorState
        isInitState = true
        noResponse = "The old woman simply rocks back and forth in her chair
            moaning, <q>Woe, woe, woe is me!</q>"
        stateDesc = "She's rocking back and forth in her chair moaning <q>Woe!</q> "
        specialDesc = "Mavis is slumped miserably in the wooden chair. "
        postureReportable = nil
    ;

And this will suppress the unwanted "She is sitting on the wooden chair"
message as required (so long as Mavis is in this HermitActorState).

  

## <span id="special">Special Descriptions in Contents Listings</span>

Another occasion on which the library will insist on telling the player
than Mavis is sitting in the wooden chair is when the chair is examined.
If, in the previous example, we went on to examine the chair, the game
would respond with:

    >x chair
    It's an old, heavy, lugubrious-looking piece of furniture. 

    Mavis is sitting on the wooden chair. 

That may be fair enough in this instance, but it may not always be what
we want. Suppose, for example, we had arranged for the occupant of the
chair (if there is one) to be incorporated into the chair's description:

    + armChair: Chair, Heavy 'plush green armchair' 'green armchair'
        "The plush green armchair<<occupant()>> is a low-slung affair with great
        sweeping arms and a majestically tall back. "
        occupant()
        {
            /* Check whether our contents includes an object of the Person class */     
            local obj = contents.valWhich({x: x.ofKind(Person)});
            
            /* 
             * If we've found a Person in us, and that Person is sitting, go on to
             * display some appropriate text. 
             */
            if(obj && obj.posture==sitting)
                ", currently occupied by <<obj.theName>>, ";
        }
    ;

    ++ mumbleJoy: Person 'mrs mumblejoy' 'Mrs Mumblejoy'
        isHer = true
        isProperName = true
        posture = sitting
    ;

This would give us:

    >x armchair
    The plush green armchair, currently occupied by Mrs Mumblejoy, is a low-slung affair 
    with great sweeping arms and a majestically tall back. 

    Mrs Mumblejoy is sitting on the green armchair. 

The final sentence is now clearly redundant, and the description would
read far better without it; but how do we get rid of it?

Again, it's not too hard once you know how. That final sentence is
produced by the armchair's examineSpecialContents() method, so we could
simply override it to do nothing:

    + armChair: Chair, Heavy 'plush green armchair' 'green armchair'
        "The plush green armchair<<occupant()>> is a low-slung affair with great
        sweeping arms and a majestically tall back. "
        occupant()
        {
            local obj = contents.valWhich({x: x.ofKind(Person)});
            if(obj && obj.posture==sitting)
                ", currently occupied by <<obj.theName>>, ";
        }
        examineSpecialContents() {}
    ;

An alternative, if we're using the custmsg.t extension in out build, is
to set the armchair's specialContentsListedInExamine property to nil.

    + armChair: Chair, Heavy 'plush green armchair' 'green armchair'
        "The plush green armchair<<occupant()>> is a low-slung affair with great
        sweeping arms and a majestically tall back. "
        occupant()
        {
            local obj = contents.valWhich({x: x.ofKind(Person)});
            if(obj && obj.posture==sitting)
                ", currently occupied by <<obj.theName>>, ";
        }
        specialContentsListedInExamine = nil
    ;

Note that either method will suppress the listing of any item that uses
a specialDesc, not just actors. In the case of the armchair that's
probably okay, since an armchair isn't ever likely to contain objects
that use specialDescs other than people. In other cases we might want to
be more selective about what it or isn't listed. Instead of modifying
the chair, we could, for example, have made Mrs Mumblejoy exclude her
specialDesc from being shown while she's in the armchair, by overriding
her useSpecialDescInContents() method:

    ++ mumbleJoy: Person 'mrs mumblejoy' 'Mrs Mumblejoy'
        isHer = true
        isProperName = true
        posture = sitting
        useSpecialDescInContents(cont)
        {
            if(posture==sitting && cont == armChair)
                return nil;
            
            return inherited(cont);
        }
    ;

If we wanted all people, and not just Mrs Mumblejoy, to be excluded from
being explicitly listed while sitting in the armchair, it might be
better to modify Person with this useSpecialDescInContents code. Yet
another way to go about it would be to modify the isListed method of
SpecialDescContentsLister:

    modify SpecialDescContentsLister
        isListed(obj) 
        { 
            if(cont_ == armChair && obj.ofKind(Person) && obj.posture==sitting)
                return nil;
            return true; 
        }
    ;

In this case cont\_ (note the underscore) is a property of
SpecialDescContentsLister that's set to the container in question by
SpecialDescContentsLister's constructor.

As we've seen, there's a number of possible techniques available here;
which you use depends on which suits the particular circumstances you're
trying to deal with.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Banishing (and
Changing) Awkward Messages  
<span class="navnp"><a href="advtop.html" class="nav"><em>Prev:</em> Advanced Topics</a>
   
<a href="t3cycle.html" class="nav"><em>Next:</em> The Command Execution
Cycle</a>     </span>

</div>
