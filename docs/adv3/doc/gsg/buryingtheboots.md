---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)





[\[Main\]](index.html)  
*[\[Previous\]](crossingthestream.html)
  [\[Next\]](callingaspadeaspade.html)*

## Burying the Boots

We'll hide the boots by burying them in a cave and then provide a means
of digging them out again. In the next chapter we'll give the cave a
dark interior so we can look at the handling of light sources, but so as
not to handle too many new problems at once, we'll leave that to one
side for now, and concentrate on giving the cave a floor that can be
excavated.

  
But first we have to add the cave and a means of getting to it. Again,
you may like to try doing this yourself rather than just copying the
code overleaf. Create a room to the south of forest called outsideCave,
and give it an appropriate name and description. Then create a room
called insideCave (representing the inside of the cave) to the south of
that. Be sure to implement all the appropriate connections (including
one south from forest!). Also, give some thought to which class is most
appropriate to each of these two new locations, and also whether it may
be appropriate to use the asExit() macro to allow alternative commands
for moving between them.  
  
Once you've done that and checked that it all works, you'll probably
have an outsideCave location that mentions a cave somewhere in the
description - at least, you certainly should do. So what if the player
types the command **enter cave**? You'd better add another object to
handle that.  
  
Finally, if you're feeling really adventurous, you could try to devise a
way of burying the boots in the cave so that they are only discovered
when Heidi digs in the ground with a spade (which you'll need to
provide). For inspiration, you could look back at the way we hid the
ring in the nest, or the stick in the pile of twigs.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Here's one way of implementing the new rooms:  
  
  
outsideCave : OutdoorRoom 'Just Outside a Cave'  
  "The path through the trees from the north comes to an end  
  just outside the mouth of a large cave to the south. Behind the cave  
  rises a sheer wall of rock. "  
  north = forest  
  in = insideCave  
  south asExit(in)  
;  
  
+ Enterable 'cave/entrance' 'cave'  
  "The entrance to the cave looks quite narrow, but probably just wide  
  enough for someone to squeeze through. "  
  connector = insideCave  
;  
  
insideCave : Room 'Inside a large cave'  
  "The cave is larger than its narrow entrance might lead one to expect.  
    Even a tall adult could stand here quite comfortably, and the cave   
    stretches back quite some way. "  
  out = outsideCave   
  north asExit(out)  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

There's nothing that requires comment here, apart from the need to add
south = outsideCave to the definition of the forest room (whose
description already mentions a path to the south that might have seemed
a bit superfluous up to now.)  
  
Now let's make a number of assumptions about how we want to handle the
action of digging. The library provides both Dig and DigWith verbs (e.g.
**dig ground** and **dig ground with spade**). Let's assume that in
order to be able to dig, it's necessary to be holding a spade, and that
there's only one spade object in the game. Let's further assume that
although we should allow the player to **dig ground with spade**, it's
unnecessarily pedantic to insist on that form of command and refuse to
respond to **dig ground** when the spade is being held (if someone's
holding a spade it's pretty obvious that's what they want to dig with).
Finally, let's assume that there may in general be more than one place
where we might want the player to be able to dig, so that it would be
useful to define a Diggable class that can handle all this. The class
might then look like this:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

class Diggable : Floor  
  dobjFor(DigWith)  
  {  
    preCond = \[objVisible, touchObj\]      
    verify() {}  
    check() {}  
    action()  
    {  
      "Digging here reveals nothing of interest. ";  
    }  
  }  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

At first sight, this class definition may look a little surprising,
since we have done nothing to handle the case where the player simply
types **dig ground**. In fact this is already catered for by the
library, which defines the action method of Dig on the Thing class as:
action() { askForIobj(DigWith); }. This more or less does what it looks
like: if the player types **dig whatever** without specifying an
indirect object, (i.e. an implement to dig with) the game will respond
with "What do you want to dig in it with?". If the player then types the
name of an implement, such as "spoon", the game will treat the whole
command as if it were **dig in whatever with spoon**. On the other hand,
if one and only one suitable digging implement is to hand, then the
parser will automatically assume that's what the player wants to use. In
this game the only suitable digging implement is the spade, so if the
player types **dig in ground** when Heidi is already holding the spade,
the parser will automatically select the spade and treat the command as
if it had been **dig in ground with spade**; this is precisely what we
want. Normally we'll override the dobjFor(DigWith) action() method on
the specific object to provide a particular response, but we provide a
default response on the class.  
  
In order to dig in something you must be able to touch it. In practice,
you probably need to be able to see it as well. We take care of
enforcing these conditions with the line
preCond = \[objVisible, touchObj\], which adds a couple of
*preconditions* to the digging action on the digging class. Although
it's possible (and not actually all that difficult) to define
preconditions of your own, the common ones are already defined for you
in the library. In particular, the objVisible precondition prevents the
action from proceeding if the object is not visible for any reason (this
will become relevant when we go on to make the cave dark). Similarly
touchObj will not allow an actor to dig in the ground unless the actor
is in a position to touch the ground (this precondition will not
strictly affect anything in this game, but we'll add it anyway for the
sake of completeness and in order to illustrate the principle).  
  
We next need to define the spade:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

spade : Thing 'sturdy spade' 'spade'  
@insideCave  
  "It's a sturdy spade with a broad steel blade and a firm wooden handle. "  
  initSpecialDesc = "A sturdy spade leans against the wall of the cave. "   
  iobjFor(DigWith)  
  {  
    verify() {}  
    check() {}  
  }       
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Placing the spade inside the cave is a temporary measure to make it easy
to test that the digging operation works as we intend. The only point to
note about the definition of this object is the empty verify() and
check() methods we supply for iobjFor(DigWith) to ensure that the spade
raises no objection to be used as a digging implement (i.e. the indirect
object of a **dig with** command).  
  
Now we need to supply our Diggable object, the ground. Since digging the
ground will create a hole, and a pair of boots will be found lurking in
the hole, we may as well deal with them at the same time.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

caveFloor : Diggable 'cave floor/ground' 'cave floor'  
  @insideCave  
  "The floor of the cave is quite sandy; near the centre is  
  \<\<hasBeenDug ? 'a freshly dug hole' : 'a patch that looks as if it has  
  been recently disturbed'\>\>. "  
  hasBeenDug = nil  
  dobjFor(DigWith)  
  {  
    check()  
    {  
      if(hasBeenDug)  
      {  
        "You've already dug a hole here. ";  
        exit;  
      }        
    }  
   action()  
   {  
     hasBeenDug = true;  
     "You dig a small hole in the sandy floor and find a buried pair of  
     old Wellington boots. ";  
     hole.moveInto(self);  
     addToScore(1, 'finding the boots');  
   }       
  }  
;  
  
hole : Container, Fixture 'hole' 'hole'  
  "There's a small round hole, freshly dug in the floor near the centre  
  of the cave. "  
;  
  
+ boots : Wearable 'old pair of wellington boots/wellies' 'old pair of boots'    
 "They look ancient, battered, and scuffed, but probably still waterproof. "  
  initSpecialDesc = "A pair of old Wellington boots lies in the hole. "  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Again, there's little that should require much explanation here. Note
that we have moved the original boots and put them inside the hole,
giving them an appropriate initSpecialDesc. Since the act of digging
undoubtedly will be to create a hole, we make the creation of the hole
(simulated by moving the hole object into the floor) the main effect of
the DigWith action - again note that we do this by using the hole's
moveInto method, *not* by setting its location property directly. We
make the hole both a Container (so the boots can be in it) and a Fixture
(so we can't carry it away). We use the check() method to trap a second
or subsequent attempt to dig in the floor, although it would have worked
just as well to put the same test in the action() method - in this case
it's simply a matter of preference (I slightly prefer it the way I did
it because the message displayed in the check method implies that a
second or subsequent request to dig in the cave floor is not even
attempted, so there should be no action notifications). The desc
property of the floor makes use of the double angle brackets, the ?:
ternary operator and the custom hasBeenDug property to display an
appropriate description.  
  
Note that as of TADS 3.1.0 there is another way we could have written
the desc property of the cave, namely:  

    caveFloor : Diggable 'cave floor/ground' 'cave floor'  @insideCave  "The floor of the cave is quite sandy; near the centre is a  <<if hasBeenDug>>freshly dug hole<<else>>patch that looks as if it has  been recently disturbed<<end>>. "

  
Either way, this *almost* works fine, apart from one thing: as you'll no
doubt discover, it you haven't tried it already, when you try to **dig
floor with spade** you'll be greeted with the message:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>Which floor do you mean, the cave floor, or the floor? <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

This is somewhat annoying, to say the least. The reason for it is that
the Room class defines a default set of room components: four walls, a
floor, and a ceiling, which normally provide an uninformative default
message if you try to examine them. So what we should have done, instead
of using @insideCave to put our custom floor into the cave, was to
include it in the list of room parts. While we're at it, we may as well
replace some of the other default room parts:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

caveNorthWall : DefaultWall 'north wall' 'north wall'  
  "In the north wall is a narrow gap leading out of the cave. "  
;  
  
caveEastWall : DefaultWall 'east wall' 'east wall'  
  "The east wall of the cave is quite smooth and has the faint remains of  
   something drawn or written on it. Unfortunately it's no longer possible  
   to discern whether it was once a Neolithic cave painting or an example  
   of modern graffiti. "  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

We then override the roomParts property of insideCave. At the same time,
we must be careful to remove @insideCave from the definition of
caveFloor, otherwise we'll effectively be including the floor in the
cave twice. While we're at it, we'll also tweak insideCave's description
so that it includes a description of the floor:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

insideCave : Room 'Inside a large cave'  
  "The cave is larger than its narrow entrance might lead one to expect.   
   Even a tall adult could stand here quite comfortable, and the cave   
   stretches back quite some way. \<\<caveFloor.desc\>\>"  
  out = outsideCave   
  north asExit(out)  
  roomParts = \[caveFloor, defaultCeiling,  caveNorthWall,   
                defaultSouthWall, caveEastWall, defaultWestWall\]  
  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

By the way, note that we made Diggable inherit from Floor rather than,
say, Fixture; this tells the library that the caveFloor (derived from
Floor via Diggable) is the room part acting as the floor, so that, for
example **put torch on ground** is equivalent to **drop torch**. If you
compile and run the game again you should find it works much more
satisfactorily, with the added bonus that if you examine the cave walls,
two of them will be a bit more interesting than the defaults would have
been.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](crossingthestream.html)
  [\[Next\]](callingaspadeaspade.html)*


