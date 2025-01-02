---
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>ComplexContainer : <a
href="thing-thebasics.html">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a href="rearsurface.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="containerdoor.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
As we saw with the potential trap in trying to add a Component to a
LockableContainer, an item's contents are deemed to be either in it or
on it (or, by extension, under it or behind it), but only one of these
at a time. So what happens if we have something like desk that we want
to put things both on and in? Well, we've already seen how one solution
might work, because we've been using it with [Underside](underside.html)
and [RearContainer](rearcontainer.html), namely to define a second
object, say a desk drawer, to act as the container, and remap all the
commands relating to looking in, opening, closing, and putting things
into the desk to the drawer object instead:  
  
cabinDesk : Heavy, Surface 'large solid oak desk' 'desk' @greatCabin  
  "It's a large, solid oak desk, with a single drawer. "  
  initSpecialDesc = "A large oak desk sits in the middle of the cabin. "  
  specialDescOrder = 50  
  **dobjFor(Open) remapTo(Open, cabinDeskDrawer)  
  dobjFor(Close) remapTo(Close, cabinDeskDrawer)  
  dobjFor(LookIn) remapTo(LookIn, cabinDeskDrawer)  
  iobjFor(PutIn) remapTo(PutIn, DirectObject, cabinDeskDrawer)**  
  dobjFor(LookUnder) remapTo(LookUnder, underDesk)  
  iobjFor(PutUnder) remapTo(PutUnder, DirectObject, underDesk)  
  dobjFor(LookBehind) remapTo(LookBehind, deskRear)  
  iobjFor(PutBehind) remapTo(PutBehind, DirectObject, deskRear)  
  dobjFor(GoBehind) remapTo(GoBehind, deskRear)  
;  
  
+ cabinDeskDrawer : OpenableContainer, Component 'drawer' 'drawer'  
  bulkCapacity = 4  
;  
  
++ tardisKey : Key 'small silver key' 'small silver key';  
  
Note the use of DirectObject in the remapTo(PutIn...) macro when we are
remapping a command for which the desk is the indirect object. Again, we
have defined the key to be of class Key which we haven't actually
introduced yet, but since the object definition is so simple it would be
pointless to make it a Thing only to have to change it later. We'll see
how this Key works when we come to discuss the
[LockableWithKey](lockablewithkey.html) class.  
  
Note also that although the cabinDeskDrawer, being in the cabinDesk's
contents, is strictly speaking notionally on its surface, this doesn't
matter in practice, since as a Component it will never be listed, and
since it's on the outside of the desk and not within some kind of
Container there's no danger of its being inappropriately hidden from the
player.  
  
It would be perfectly feasible to implement all objects that have
contents both on them and in them in this way. There is, however,
another way, or rather a way that automates some of the labour, and that
is to use a ComplexContainer. We'll put an old dressing-table in
anotherCave as an example:  
  
dressingTable : ComplexContainer, Heavy  'battered old dressing table' 'dressing table'  
  @anotherCave  
  "It's battered and scratched, and looks just about on its last legs. In place  
   of drawers, it has a pair of doors attached to the front"  
  inRoomDesc = "A battered old dressing table leans drunkenly against a wall of the cave. "  
  subSurface : ComplexComponent, Surface { }  
  subContainer : ComplexComponent, OpenableContainer   
             {   
               bulkCapacity = 5   
               openStatus { if(isOpen) ". It's open"; }       
             }  
  subUnderside : ComplexComponent, Underside { bulkCapacity = 5 }  
  subRear : ComplexComponent, RearContainer { bulkCapacity = 5 }      
;  
  
The main thing to note here is the way the subSurface, subContainer,
subUnderside and subRear properties are defined. Each must contain the
definition of a nested object of class ComplexComponent, together with
an appropriate Surface class (for subSurface) or Container class (for
subContainer) or Underside (for subUnderside) or RearContainer class
(for subRear). The ComplexContainer will then direct the relevant
commands (e.g. PUT ON, PUT IN, OPEN, CLOSE, LOOK IN, LOOK UNDER, LOOK
BEHIND) to its subSurface, subContainer, subUnderside or subRear as
appropriate. The definition of the ComplexComponent objects can be as
minimal as the subSurface, or we can introduce further customization, as
with the subContainer. Here we give the table a limited bulkCapacity
when it acts as a Container, and override its **openStatus()** method to
suppress the "It's closed. " message that would otherwise be appended to
the description of the dressing table in response to an EXAMINE command
(we have to cheat a little here, since even if openStatus prints
nothing, a terminating full stop will be printed; so we omit the full
stop from the end of the desc property and put one at the start of ".
It's open"; that way the description will look right whether the table
is open or closed).  
  
Note that [inRoomDesc](specialdesc.html) is *not* a property defined in
the library; it was a custom property we defined some way back as a
convenient way of adding the description of NonPortable objects to the
room description. Here this simply avoids our having to go back and
change anotherRoom.desc.  
  
The one thing that may not be immediately obvious is how to define the
initial location of objects in or on a Complex container. This is one
way:  
  
silverCoin : Thing 'small silver coin' 'small silver coin'  
  "On the obverse is the head of Queen Fanny the Futile; the reverse is stamped with  
   the words THREE FARTHINGS. "  
   location = dressingTable.subSurface  
;  
  
ring : Thing 'platinum ring/band/recess' 'platinum ring'  
  "It's a plain platinum band, with a small empty recess on one side. "   
   location = dressingTable.subContainer  
;  
  
And this is the other:  
  
+ silverCoin : Thing 'small silver coin' 'small silver coin'  
  "On the obverse is the head of Queen Fanny the Futile; the reverse is stamped with  
   the words THREE FARTHINGS. "  
   subLocation = &subSurface        
;  
  
+ ring : Thing 'platinum ring/band/recess' 'platinum ring'  
  "It's a plain platinum band, with a small empty recess on one side. "   
   subLocation = &subContainer  
;  
  
Whichever way you use, you should only use the location or subLocation
property to set the *initial* location of an item. To move an item into
part of a ComplexContainer you should use moveInto(), e.g.
ring.moveInto(dressingTable.subRear).  
  
  
**ComplexContainer Traps for the Unwary  
**  
Although ComplexContainers can be very useful, they can also be the
source of very strange, frustrating and hard-to-trace bugs in your code.
The reason is that after you've set your ComplexContainer up, it can be
very easy to forget that, programmatically, it is not a single object
but a linked collection of objects. Thus, for example, you might later
write a routine to check the contents of all the containers held by a
particular actor, and do something like:  
  
foreach(local cur in actor.contents)  
  if(cur.ofKind(Container))  
     foreach(local obj in cur.contents)  
     {  
        /\* do something with the contents \*/  
     }  
  
The problem here is that you may, for some reason, have implemented a
portable container as a ComplexContainer; perhaps it's an openable box
with a handle on the lid; to make the handle a Component which doesn't
disappear when the box is closed, you have to make the box a
ComplexContainer. You find the above code is mysteriously excluding one
of the containers, which you finally realize is because it's a
ComplexContainer, so you amend the code to:  
  
foreach(local cur in actor.contents)  
  if(cur.ofKind(Container) \|\| cur.ofKind(ComplexContainer))  
     foreach(local obj in cur.contents)  
     {  
        /\* do something with the contents \*/  
     }  
  
But when this gets to your box, the above code won't work as expected,
since the 'contents' of the ComplexContainer will be its subContainers
and its Component handle, not the things inside the box, as you
automatically expected. The objects actually held inside the box are
actually to be found in its subContainer.contents property, not its
contents property. What you actually need in the above example is
something like:  
  
foreach(local cur in actor.contents)  
  {  
    local cont = \[\];  
    if(cur.ofKind(Container))  
       cont = contents;  
    if(cur.ofKind(ComplexContainer) && (cur.subContainer != nil))  
       cont = cur.subContainer.contents;  
     foreach(local obj in cont)  
     {  
        /\* do something with the contents \*/  
     }  
}  
  
  
Prior to TADS 3.0.8 there was also a potential trap with opening,
closing, locking and unlocking ComplexContainers, particularly a
ComplexContainer that you came to think of as being primarily a
container. You might, for example, test for cupboard.isOpen when you
needed to test for cupboard.subContainer.isOpen, or call
cupboard.makeLocked(true) when you actually meant
cupboard.subContainer.makeLocked(true).  
  
Fortunately TADS 3.0.8 introduced some changes that greatly alleviate
this. Suppose you have a cupboard mounted on the wall, which you can put
things in, on or under. The cupboard will have a subSurface, a
subContainer and a subUnderside. If you open, close, lock or unlock the
cupboard, you are actually opening, closing, locking or unlocking its
subContainer. As of version 3.0.8 TADS has ComplexContainer recognize
this by having its isOpen, isLocked, makeOpen and makeLocked properties
and methods refer to the corresponding properties and methods of its
subContainer, provided it has one. So, for example, if you test for
cupboard.isOpen you will now get the value of
cupboard.subContainer.isOpen. Likewise, if you write a statement like
cupboard.makeLocked(true) it will now automatically call
cupboard.subContainer.makeLocked(true). Of course you can, if you wish,
continue to test explicitly for cupboard.subContainer.isOpen and
explicitly code cupboard.subContainer.makeLocked(true); the point is not
so much that these forms are more long-winded, but that it can be very
easy to forget to do this, especially if you come to think of the
cupboard as being primarily a form of lockable and openable container
(which just happens to allow things to be put on top of it and
underneath it as well).  
