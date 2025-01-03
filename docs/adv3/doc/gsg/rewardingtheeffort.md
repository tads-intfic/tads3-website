---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)
[\[Main\]](index.html)  
*[\[Previous\]](makinglifemoreproblematic.html)
  [\[Next\]](controllingtheaction.html)*

## Rewarding the Effort

If the player has gone to all this trouble to reach the top of the tree,
perhaps he or she deserves some sort of reward for it. One way we can do
this is to add some points to the player's score. This can be done with
the statement:
 
addToScore(points, 'reason for awarding points'); 


In this case we might have:  
 
addToScore(1, 'reaching the top of the tree.'); 


The two problems we need to solve now are (a) where best to put this
statement and (b) how to prevent the player from accumulating a huge (if
boring) score by repeatedly going up the tree - the point should be
awarded first time round only.  
  
It would possible to code this on the TravelMessage object Heidi has to
travel via when she climbs the tree, but since what we want to do is to
check for Heidi arriving at a the top of the tree regardless of how she
gets there, the best solution is to make use of the `enteringRoom`
method of the `topOfTree` room. The library code already keeps track of
which rooms have been visited by setting their `seen` property, so we
can use this to ensure that the point is awarded only the first time
Heidi reaches the top of the tree. The revised `topOfTree` room then
looks like this:  


topOfTree : OutdoorRoom 'At the top of the tree'  
   "You cling precariously to the trunk, next to a firm, narrow branch."  
    down = clearing       
    enteringRoom(traveler)   
    {         
      if(!traveler.hasSeen(self) && traveler == gPlayerChar)     
          addToScore(1, 'reaching the top of the tree. ');                
    }  
;  


Being awarded a point is all very well, but it may all seem pretty
pointless if that's all that happens when Heidi arrives at the top of
the tree. At the very least she should find something interesting there.
Since the room description for the top of the tree mentions a branch,
that may be the first thing to add. Then perhaps we could place a bird's
nest on the branch (in the original *Adventures of Heidi* the object was
to replace the bird's nest, complete with fledgling, to the branch), and
finally we could place a worthwhile find in the nest.  
  
Before turning over the page to see how this guide does it, you could
have a go at implementing these extra objects yourself. Remember that
the branch will need to be a Supporter so you can put things on it, and
the nest a Container so you can put things in it. Remember too that
you'll need to make sure that Heidi can't pick up the branch - after all
it's part of the tree and fixed in place (if in doubt, look at the
pedestal in the 'goldskull' game). Then put something interesting in the
nest, and see if you can get your revised game to compile and run.  


Here's how this guide does it (this code should be placed immediately
after the definition of topOfTree).  
  
+ branch : Surface, Fixture 'branch' 'branch'  
  "The branch looks too narrow to walk, crawl or climb along, but firm  
   enough to support a reasonable weight. "  
;  
  
++ nest : Container 'bird\\s nest' 'bird\\s nest'  
  "It's carefully woven from twigs and moss. "  
;  
  
+++ ring : Thing 'platinum diamond ring' 'diamond ring'  
  "The ring comprises a sparkling solitaire diamond set in platinum. It   
    looks like it could be intended as an engagement ring. "  
;  
  
Note the use of the + notation to nest (no pun intended) each item in
the preceding one. We make the branch a Surface so that we can put
things *on* it and a Fixture so that it's fixed in place; this
llustrates how the same object may inherit from more than one superclass
(but note that the same object can't be both a Surface and a Container).
The nest is made a Container so we can put something *in* it. Internally
there's not a lot of difference; the location property of ring is set to
nest, and the location property of nest to branch. The difference lies
in the way the library code describes the situation (in or on) and the
type of commands it will respond to (**put in** or **put on**), as
you'll find if you add the code and play with the new version of the
game.  
  
You'll probably also find that the discovery of the ring seems rather
bland and bathetic, since as soon as Heidi arrives at the top of the
tree the game announces "On the branch is a bird's nest (which contains
a diamond ring)." It would be more interesting if she had to work a
little to find that ring. Besides, one might suppose that the ring would
at first be hidden among the twigs and moss that make up the nest. The
first step towards making things more interesting, then, is to remove
the `+++` from in front of the definition of the ring (so that it starts
life outside the game world altogether) and then code the nest to
respond to a **search** or **look in** command. This code must first
check that we haven't already found the ring, and then, if we haven't,
it should move the ring into the nest and report the find. While we're
at it we might as well award the player a point for the discovery. The
appropriate code looks like this:  


++ nest : Container 'bird\\s nest' 'bird\\s nest'  
  "It's carefully woven from twigs and moss. "  
  dobjFor(LookIn)  
  {      
    action()      
    {  
       **if**(ring.moved)  
       {  
         "You find nothing else of interest in the nest. ";  
         exit;  
       }  
       ring.moveInto(self);  
       "A closer examination of the nest reveals a diamond ring inside! ";  
       addToScore(1, 'finding the ring');  
    }  
  }  
;  
  
You'll remember that dobj is short for direct object, so that when we
define `dobjFor(LookIn)` on an object we're defining what should happen
when that object is the direct object of a **look in** command. In this
case, though, what comes after `dobjFor` looks rather more complicated
than our previous example.

Let's take the simpler part first. Towards the end of the nest object we
have written `dobjFor(Search) asDobjFor(LookIn)`. That `asDobjFor()` is
a reasonably close cousin of the `remapTo()` we encountered earlier; you
could read it as "as if it were the direct object for" so that
`dobjFor(Search) asDobjFor(LookIn)` means "when the nest is the direct
object of a **search** command treat it as if it were the direct object
of a **look in** command", or "treat **search nest** as equivalent **to
look in nest**".

Up to this point we've only used `dobjFor()` to make one command behave
like another, but obviously there has to be more to writing a game than
that: at some point we have to define what a command actually *does*,
and this is what the example above does for `dobjFor(LookIn)`. Note
first of all that when we do that we follow `dobjFor()` with a block of
code enclosed by braces {}. Within that block we have what looks like a
method called action() with its code enclosed in a further set of braces
{}. This may look rather strange; it is in fact exactly equivalent to
defining a method called `actionDobjLookIn()` (without `dobjFor()` and
the outer enclosing braces), and you could indeed do it that way. We
tend to use `dobjFor()` instead because it makes the code easier to read
and write.

We'll give a fuller account of all this at the end of the chapter, so
don't worry if it still seems a little hazy at the moment. The main
thing to note right now is that the method that looks like it's called
`action()`, what we might call the action part of the `dobjFor()` block,
is the place where we put the code that defines what actually happens
when the nest is looked in.

There are four further points to note about this code:  
  
(1) moved is a property defined by the library; it starts at nil (i.e.
not true) and is set to true as soon as the object is moved from its
initial location, which is what ring.moveInto(self) does;  
(2) to move the ring we use its moveInto method, we do *not* change its
location property directly by writing something like
ring.location = self (part of the reason for this is that the library
maintains lists of what's contained by what; the moveInto method takes
care of updating the appropriate lists when an object is moved, while
setting the location property would not);  
(3) self simply refers to the object in which it occurs (in this case
the nest);  
(4) exit terminates the action straightaway, so that code following an
exit statement is not executed; the exit statement may also be used to
veto an action at the check stage, as we shall see shortly;  
  
An alternative way of achieving the same effect would be to leave the
+++ in front of the definition of ring, and add PresentLater to the
front of its class list, at the same time changing ring.moveInto(self)
to ring.makePresent() in the definition of nest. Where the PresentLater
mix-in class is used, the game initialization makes a note of the
object's location, then moves it into nil (i.e. out of the game world);
a call to makePresent() then restores the object to its initial
location. Yet another way we could achieve much the same effect would be
by making the ring of class Hidden, but we shall illustrate that on
another object shortly.  
  
The revision to the nest object makes things slightly more interesting,
but searching the nest isn't much of a challenge. It would be rather
more interesting if in order to search the nest we first had to hold it,
and, furthermore, if the nest was just out of reach so we first had to
find some way of bringing it nearer. The obvious tool for the job would
be some sort of stick, and the obvious place to find such a stick might
be among twigs and branches lying at the foot of the tree.  
  
But first we must prevent Heidi from looking in the nest until she's
holding it. To do that we can use `check()`. Like `action()`, `check()`
is a method that goes inside the braces following `dobjFor()`, but
whereas we use `action()` to define what happens when the command is
carried out, we can use `check()` to stop it being carried out and
explain why. In this case we don't want to stop it unconditionally, but
only if the nest isn't held:  
  
check() 
    { 
      if(!isHeldBy(gActor)) 
      { 



               "You really need to hold the nest to take a good look at  
                 what's inside. ";  
        exit; 
      } 
    } 


Our next job is to make it impossible to take the nest without the use
of the stick. TADS 3 already defines what happens when the player tries
to take something, so what we need to do here is to change that
behaviour; we do this by overriding the nest's `dobjFor(Take)` routines.
Nonetheless, when we do allow the action to go ahead, we'll still want
the normal library handling to work; to ensure that happens we need to
include `inherited` in the action part, which calls the action handling
for **take** that the nest inherits from its superclass. To ease the
player's "guess the verb" hassle we'll let the player character take the
nest if she's simply carrying the stick. The appropriate code, which
illustrates both a check and an action section in the same `dobjFor()`
block, is as follows::  


dobjFor(Take)  
  {  
    check()  
    {  
      if(!moved && !stick.isIn(gActor))  
      {  
        "The nest is too far away for you to reach. ";  
        exit;  
      }        
    }  
    action()  
    {  
      if(!moved)  
        "Using the stick you manage to pull the nest near enough to take,  
          which you promptly do. ";  
      inherited;  
    }    
  }  


We include the if(!moved) condition in both check() and action() here on
the assumption that once the nest has been moved, it won't be put back
out of reach. The inherited statement at the end of the action method
ensures that we actually do end up taking the nest (by continuing with
the standard behaviour for the take action). But this raises another
issue: `inherited()` means roughly "at this point carry out what would
have happened if we hadn't overridden this method", but what would have
happened is that not only would Heidi have picked up the nest, but this
would have been reported with the laconic response "Taken." That's fine,
except the first time we take the nest (when `moved` is still `nil`),
when we don't want to see "Taken" in addition to our custom message
about moving the stick. Actually, this won't be a problem; if you try
running this code you'll find that the "Taken" message doesn't appear
alongside the other message. That's because the library doesn't use a
double-quoted string to produce it, but a macro called
`defaultReport()`, in this case. `defaultReport('Taken. ')`, and a
defaultReport is only shown if there's no other report.  
  
This is fine, but it might not occur to the player that the nest can be
taken simply because Heidi is holding the stick; the player may suppose
other command needs to be used to bring the stick nearer, such as **move
nest with stick**, so we'll code this command to act in exactly the same
way. This introduces a new complication, defining special behaviour for
a verb involving two objects. We'll begin by defining some code on the
intended direct object of this command, which is still the nest:  


dobjFor(MoveWith)  
  {  
    verify()   
     {   
       if(isHeldBy(gActor))   
          illogicalAlready('{You/he} {is} already holding it. ');   
     }  
    check()   
    {  
      if(gIobj != stick)  
        {  
          "{You/he} can't move the nest with that. ";  
          exit;  
        }  
    }      
  }  
  
The effect of this code is to rule that it is illogical to attempt to
move the nest with anything while the nest is being held, and not to
allow the nest to be moved with anything other than the stick.

This code snippet introduces several new features we should pause to
consider. First, just as in TADS 3 the abbreviation dobj will normally
refer to a direct object, so iobj will normally refer to an **i**ndirect
**obj**ect, the second object involved in a two-object command like
**move nest with stick**. But in the `check` routine above what we
actually see is something call `gIobj`. Here the g effectively stands
for 'global'; although TADS 3 does not in fact support global variables,
it has several things that look and act like global variables, and
`gIobj` is one of them (in fact these pseudo-global variables are
shorthand ways of referring to the properties of objects in which the
values are actually stored, but that needn't concern us now). The common
not-exactly-global variables you'll often encounter in TADS 3 include:
`gDobj` (the direct object of the current action), `gIobj` (the indirect
object of the current action), `gAction` (the current action), `gActor`
(the actor performing the current action, which is usually but not
necessarily the player character), and `gPlayerChar` (the object
representing the player character).

The next new feature we've introduced in this code is a `verify()`
routine. We'll be giving the full story on `verify()` shortly, but the
very brief version is that, like `check()`, `verify` can be used to veto
an action, but that unlike `check()`, `verify()` affects disambiguation
(which object the parser thinks a player's command most probably refers
to). A `verify()` routine can contribute to disambiguation without
vetoing an action, but when it does disallow an action it (nearly)
always does so with statement of the form
`illogical('Reason why this action is plain daft. ')`.
`illogicalAlready()` is just a specialized form of `illogical()`, used
when the action is pointless because it's trying to bring about
something that's already the case (for example, trying to open a door
that's already open).

The third new feature is the use of parameter substitution strings,
meaning those strange things in curly braces: `{you/he}` and `{is}`. The
point of these is that when they are actually displayed in a game, they
are replaced with the appropriate text. So, for example, if the player
issues the command move nest with stick '`{you/he} {is}`' becomes 'you
are', but if an NPC called Fred attempted the action it would become
'Fred is'. For the full story on parameter substitution strings, read
the [Message Parameter Substitutions](../techman/t3msg.html) article in
the Technical Manual.

The next job is to make the stick handle its part of the action. You'll
recall that the stick is the indirect object of this command, so you
might guess that just as we need to define `dobjFor()` on the direct
object, we need to define `iobjFor()` on the indirect object. IUf you
did guess that, you'd be right:


iobjFor(MoveWith)  
  {  
    verify() {}  
    check() {}  
    action()  
    {  
      if(gDobj==nest && !nest.moved)  
        replaceAction(Take, nest);        
    }  
  }  
  
The first thing to note is the `verify()and check()` routines that do
nothing. We need them to do nothing to make sure they don't veto the use
of the stick as the indirect object of a **move with** command. Without
that empty `verify()` method **move nest with stick** would produce the
response 'You cannot move anything with the stick.' We don't actually
need to provide an empty `check()` method here, since the library
version is already empty, but including it here does no harm, and if we
didn't know that the library didn't rule out move with in `check()` it
would be as well to include it just to make sure.

The `action()` routine only does anything if the direct object (`gDobj`)
is the nest and the nest hasn't already been moved. If either of those
conditions fails, the command will result in the default MoveWith action
of the direct object, which simply reports that moving the direct object
didn't achieve anything. If, however, the direct object is the nest and
it hasn't been moved yet we want the result to be the same as if we had
issued the command **take nest**. We achieve this with the
`replaceAction `macro, which does just what it says it does and stops
processing the current command, replacing it with the new command. Had
we wished to execute another command and then continue with the existing
command we would have used `nestedAction `instead.

You may be wondering how `replaceAction()` differs from `remap()`, which
we used before. The main difference is that remapping happens before
anything else (in particular, before `verify()` and `check()`), while
`replaceAction()`, which can really only go in the `action()` part,
happens after `verify()` and `check()`; `replaceAction()` and
`nestedAction()` are also more flexible than remap in that they can be
combined with other code in the `action()` routine; we can do other
things before replacing the action, but we can't do anything before
remapping.

You may also be wondering why we put the code for taking the nest in the
`action()` routine of the indirect object rather than the direct object
here. The answer is, there's no reason at all for doing it that way,
apart from illustrating the use of an `action()` routine on an indirect
object (and incidentally taking advantage of the fact that the indirect
object's `action()` routine generally runs before the direct object's
`action()` routine). Other than that, it would have been just as good,
if not better, to have put this handling on the direct object, thus:

    dobjFor(MoveWith){    verify()      {        if(isHeldBy(gActor))           illogicalAlready('{You/he} {is} already holding it. ');      }    check()     {      if(gIobj != stick)        {          "{You/he} can't move the nest with that. ";          exit;        }    }        action()    {       if(!moved)          replaceAction(Take, self);       else          inherited();    }}

Indeed, this would probably have been a clearer and neater way of doing
it. In this revised version, note the use of `inherited()` to call the
base class handling of MoveWith once the nest has been moved. Note also
that `else` on the line before is not strictly necessary since once
`replaceAction()` is executed the original (MoveWith) action is stopped
in any case.

More broadly, this illustrates that the `action()` part of a two-object
command can be written on either the direct object or the indirect
object or even split between both, since both action routines will be
executed (unless `exit` or one of its close relatives is used to break
out of them), with the indirect object's action handling usually (but
not necessarily) called before the direct object's. So how do we decide
which to use? One rule of thumb might be to write the `action()`
handling on the object most affected by the action. Another might be to
write it on the object which most affects the outcome of the item: for
example, if your game contains a knife, a sword and a laser rifle, and
cutting things with each of these produces greatly different results,
you might want to write the CutWith action handling on the indirect
object, whereas if it doesn't make much difference what you cut with but
a great deal of difference whether it's a piece of solid rock, a window,
a lump of butter, or Aunt Gertrude that you're cutting, you'll probably
be better off putting the action handling on the direct object. A third
rule of thumb might be to put the action handling on the object that
exhibits the most exceptional behaviour; so, for example, most objects
won't allow things to be put inside them, but Containers will, so the
library action handling for **put x in y** goes on the indirect object
(the Container), not the thing that's being put in the Container. Other
cases may be less clear-cut (no pun intended), in which case it's best
to choose one or the other and stick with it consistently (having an
action like CutWith handled on some direct objects and some indirect
objects is a likely recipe for confusion).

Enough of that digression; let's return to the stick. Although the base
of the tree is a good place to find the stick, it's probably better not
to make it too obvious; if the stick is just lying there in plain sight
the player will take it automatically, which will make getting hold of
the nest virtually a non-puzzle. We'll make things harder by burying the
stick in a pile of useless twigs, so that the player has to do some work
to find them. While we're at it we'll change the description of the
sycamore tree so that it refers to the pile of twigs. Again, this is
something you might like to try yourself before reading on to see how
this guide does it. After changing the description of the tree, you'll
need to add one object to represent the pile of twigs, and then another
for the stick object, which should remain hidden until Heidi examines or
searches the pile of twigs. To hide the stick you could use one of the
techniques discussed in relation to hiding the ring in the nest, or you
could make the stick a Hidden object and call its discovered() method at
the appropriate moment.  


Here's one way of doing it:-  


+ tree : Fixture 'tall sycamore tree' 'tree'  
    "Standing proud in the middle of the clearing, the stout  
      tree looks like it should be easy to climb. A small pile of loose   
      twigs has gathered at its base. "  
    dobjFor(Climb) remapTo(Up)    
     
;  
  
+ Decoration 'loose small pile/twigs' 'pile of twigs'  
  "There are several small twigs here, most of them small, insubstantial,  
   and frankly of no use to anyone bigger than a blue-tit \<\<stick.moved ?  
   nil : '; but there is also one fairly long, substantial stick among   
    them'\>\>. \<\<stick.discover\>\>"  
  dobjFor(Search) asDobjFor(Examine)   
;  
  
+ stick : Hidden 'long substantial stick' 'long stick'  
  "It's about two feet long, a quarter of an inch in diameter, and   
    reasonably straight. "  
   iobjFor(MoveWith)  
  {  
    verify() {}  
    check() {}  
    action()  
    {  
      if(gDobj==nest && !nest.moved)  
        replaceAction(Take, nest);        
    }  
  }  
;  
  
We could have handled the stick in a similar manner to the ring, by
moving it into the clearing when we wanted it to appear, but this seems
a good opportunity to introduce the Hidden class, which does much what
it says. A Hidden item is one that is physically present but does not
reveal its presence until its discover method is called. By making stick
of class Hidden instead of class Thing, we can control when we want it
to appear. In this case we want it to appear when the player character
examines the pile of twigs, so we make an embedded call to
stick.discover in the description of the twigs, using the \<\<\>\>
syntax. The fact that this method will be called every time the twigs
are examined doesn't matter, since once the method has been called once,
the subsequent calls will have no effect. There are a couple of other
refinements we need to think about, however. First, the description of
the pile of twigs should only refer to the stick amongst them until the
stick has been moved; we achieve this through another embedded
expression,
`<<stick.moved ? nil : '; but there is also one fairly long, substantial stick among them'>>`
that displays nothing if the stick has been moved but describes the
stick if it hasn't. Secondly, the player might reasonably try to
**search** the pile of sticks as well as **examine** them, so we add a
line to the definition of the anonymous sticks object to remap
**search** to **examine**.  
  
Note how we have defined the vocabWords property of the Decoration
object representing the pile of twigs: we have defined it as
'loose small pile/twigs'. Although you can't normally refer to an object
by two or more of its nouns, there is an exception in the case of a name
like 'x of y', where both x and y should be specified as nouns. Our pile
of twigs will now respond to **examine twigs** or **x small pile** or
**search pile of loose twigs** and other such combinations.  
  
Let's just add one final refinement. Normally if you **drop** an object,
it lands in the room where you are, as you would expect. But if you were
to drop something from the top of a tree you'd expect it to fall to the
ground below rather than hover around in the air still conveniently in
reach. It would be good if we could model this in our game, and it turns
out to be fairly straightforward. First, we need to change the class of
topOfTree to FloorlessRoom, which means that any object dropped or
thrown from this location won't land here. Then we need to override
topOfTree's bottomRoom property to define where something dropped from
there *will* land. In this case we want bottomRoom to be clearing. Now
anything dropped (or thrown) while Heidi is at the top of the tree will
fall to the clearing, and the game will display a suitable message to
show that the object is falling out of sight. The definition of
topOfTree thus becomes;  


topOfTree : FloorlessRoom 'At the top of the tree'  
     "You cling precariously to the trunk, next to a firm, narrow   
            branch. "  
     down = clearing       
     enteringRoom(traveler)  
     {         
       if(!traveler.hasSeen(self) && traveler == gPlayerChar)     
         addToScore(1, 'reaching the top of the tree. ');                
     }  
     bottomRoom = clearing  
;  


In the [next chapter](settingthescene.html) we shall learn how the ring
came to be in the nest, who it belongs to, and how to win the game. To
do that we shall need to create a Non Player Character (NPC), and that
will be our central task.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](makinglifemoreproblematic.html)  [\[Next\]](controllingtheaction.html)*


