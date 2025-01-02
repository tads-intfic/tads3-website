---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)





[\[Main\]](index.html)  
*[\[Previous\]](whatsinaname.html)   [\[Next\]](crossingthestream.html)*

# Chapter 6 - Expanding the Horizons

## Doors and Windows

If you've managed to follow this *Guide* so far, you should have grasped
most of the basics of programming in TADS 3. In the present chapter
we'll look at more features of the library, but we'll move on a bit more
briskly, on the assumption that much of the code should start to be
self-explanatory.

  
In order to make Heidi's life more difficult, we'll make it harder for
her to get hold of the chair she needs to climb the tree. To do that, we
simply need to supply the cottage with a locked front door and hide the
key in some out-of-the-way place.  
  
The first thing to realize is that doors in TADS 3 are normally
two-sided. That is, they are generally represented not by *one* object,
but by *two*, the two objects being the two sides of the door. At first
sight this may seem something of an unnecessary complication, and it
does require a little more work, but not as much more work as you might
think. Provided the two sides of the door are properly set up, the
library will take care of keeping them in sync (i.e. ensuring that one
side is open or closed or locked or unlocked when the other is). It will
also take care of making travel through one side of the door result in
the traveler arriving in the location of the other side. One reason for
doing it this way (i.e. with each side of the door represented by a
separate object) is that it allows more flexibility; the two sides of a
door often aren't identical: they may, for example, be painted different
colours, or they may use different locking mechanisms, say with one side
requiring a key and the other using a paddle.  
  
We'll start by adding the outside of the front door (which should be
contained in outsideCottage):  

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

+ cottageDoor : LockableWithKey, Door 'door' 'door'  
  "It's a neat little door, painted green to match the window frame. "  
  keyList = \[cottageKey\]  
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

To make the door work, we also need to change the in property of
outsideCottage to read cottageDoor instead of insideCottage. As noted
above, we also need to define the other side of the door:  

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

+ cottageDoorInside : Lockable, Door -\> cottageDoor 'door' 'door';  
  
This needs to be located in insideCottage, and we need to change the out
property of insideCottage to cottageDoorInside. The -\>cottageDoor is a
template shortcut for assigning cottageDoor to the masterObject
property, which (a) keeps both sides of the door in sync (both
open/closed and locked/unlocked) together, and (b) tells each door what
its other side is (through code executed in the preinitialization
routine, which we don't need to worry about).  
  
Note that we have defined the outside of the door as a LockableWithKey
and the inside as simply Lockable; this reflects the way many house
doors in fact behave (we don't need a key to lock or unlock the front
door from the inside). Note also that the *order* of the classes here is
important: Lockable, LockableWithKey or IndirectLockable must come
*before* Door in this kind of declaration, or else the lock won't work.
The short explanation for this is that Lockable, LockableWithKey and
IndirectLockable are examples of *mix-in* classes (not derived from
Thing) which must come before the any Thing-derived class with which
they are combined.  
  
Before this door will work, we have to define the key object. As a
temporary measure (we'll move it elsewhere later), we'll do this with
simply:  

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

cottageKey : Key 'small brass key' 'small brass key' @outsideCottage;  

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

Since Heidi's now locked out of the cottage (or would be if the key was
not so readily in reach), an obvious thing for her to try is looking
through the window to see what's inside. It's probably a good thing to
allow this, since if she can see that the chair is there it will make it
all the more obvious that it's worth going to look for the key.  
  
The question is, how should this be implemented? We could just write a
LookThrough routine that displayed a pre-programmed message, but that's
less than ideal, since the contents of the cottage could change as the
player moves objects around. Writing a LookThrough routine that does the
job properly is quite tricky, so for now we'll attempt something a
little less ambitious: a window through which whatever is on the other
side is visible. We'll return to a more sophisticated LookThrough
later.  
  
To create a window through which the contents of another location are
visible, we need to use a SenseConnector, and locate it in the two rooms
joined by the window:  

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

cottageWindow : SenseConnector, Fixture 'window' 'window'  
  "The cottage window has a freshly painted green frame.   
    The glass has been freshly cleaned. "  
   connectorMaterial = glass  
  locationList = \[outsideCottage, insideCottage\]  
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

Since SenseConnector is a MultiLoc (an object that exists in more than
one location) we do not define its location property; instead we define
its locationList to contain a list of the locations that contain the
window, in this case the inside and outside of the cottage. The other
important property to define here is connectorMaterial; the TADS 3
library defines a number of different materials that transmit the
various senses in different ways. Glass is defined to be transparent to
sight, but opaque to sound, smell and touch (the fact that real world
glass may allow sound to pass need not concern us here, since in this
case sight is the only sense we're worried about). This means that from
outside the cottage the player character will be able to see anything
located inside, and from inside, the player character will be able to
see anything left directly outside, but that Heidi will not be able to
smell, hear or touch anything through the window.  
  
If you compile and test the game now, you'll find that this works, but
that objects visible through the window are listed in a less than ideal
fashion. There are several steps we can take to improve that. You'll
recall that we defined an initSpecialDesc on the chair. The first
problem is that we'll now see that initSpecialDesc when Heidi is
standing just outside the cottage:  

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

**In front of a cottage**  
You stand just outside a cottage; the forest stretches east. A short
path leads round the cottage to the northwest.  

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

A plain wooden chair sits in the corner.  

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

This description is plainly inappropriate when the chair is being viewed
through the window from outside. What we want is a different type of
initSpecialDesc that's shown when the chair is viewed from a room other
than the one in which it's actually located; for that we use
remoteInitSpecialDesc. Add the following to the definition of the chair
object:  

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

remoteInitSpecialDesc(actor) { "Through the cottage window you can  
   see a plain wooden chair sitting in the corner of the front room. "; }  

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

The actor parameter refers to the actor doing the looking, normally the
player character. The parameter can be used to test where the chair is
being viewed from; for example, if there were a second window looking
into the room from the cottageGarden (we'll be this garden adding later,
though not the second window), your remoteInitSpecialDesc(actor) routine
could test for actor.isIn(cottageGarden) and actor.isIn(outsideCottage)
and provide different descriptions for the two cases. In this case this
is unnecessary, however, since outsideRoom is the only remote location
from which the chair can ever be viewed.  
  
If you test the game now, you'll find the window works okay with the
chair, but is not so good with portable objects. For example, if you
drop the key outside the cottage and then go inside, you'll see the key
listed as:  

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

   In the in front of a cottage, you see a small brass key.  

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

Similarly if you leave the key inside the cottage and then go back
outside, you'll find the key listed as:  

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
<td>In the inside cottage, you see a small brass key. <br />
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

The library provides two ways to fix this: (1) you can give a room an
inRoomName, which is the name to be used when an item is listed as being
in that room when viewed from another location; or (2) you can define a
custom remoteRoomContentsLister which defines how portable items will be
listed when viewed in a remote location. If you use method (1) you
define inRoomName on the room that's being viewed remotely; if you use
method (2) you define the remoteRoomContentsLister on the room from
which the remote viewing is taking place. In order to illustrate both
methods we'll use method (1) for looking in through the window from the
outside, and method (2) for looking out through the window from the
inside. This means that both methods need to be implemented on
insideCottage:  

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

insideCottage : Room 'Inside Cottage'  
  "The front parlour of the little cottage looks impeccably neat.   
  The door out is to the east. "      
  out = cottageDoorInside  
  east asExit(out)  
  inRoomName(pov) { return 'inside the cottage'; }  
  remoteRoomContentsLister(other)  
   {  
     return new CustomRoomLister('Through the window, {you/he} see{s}',   
           ' lying on the ground.');  
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

The pov parameter (in inRoomName) represents the point of view, and
could be used to give a room different names depending on where it was
being viewed from (e.g. on a long stretch of road you might want a
particular stretch of road named as 'on the road to the south' when the
pov is north of it and 'on the road to the north' when the pov is to the
south of it). The other parameter of remoteRoomContentsLister is the
other location that's being viewed from here, which would allow you to
vary the lister according to which room's contents was being described;
in this case the only other location visible from insideCottage is
outsideCottage, so it's not necessary to make use of this parameter. The
two parameters supplied to new CustomRoomLister are the prefix and
suffix strings. This will result in message like:  

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
<td>Through the window, you see a small brass key lying on the
ground. <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Similarly, if the key is left inside the cottage, then from the outside
you'd see:  

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
<td>Inside the cottage, you see a small brass key. <br />
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

Both of these messages are substantial improvements over what we had
before. We have still not implemented a response to explicitly looking
through the window, but since this is rather trickier, we'll leave it
till later.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](whatsinaname.html)   [\[Next\]](crossingthestream.html)*


