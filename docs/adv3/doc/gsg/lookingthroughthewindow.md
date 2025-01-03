---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)
[\[Main\]](index.html)  
*[\[Previous\]](countingthecash.html)
  [\[Next\]](easingtestinganddebugging.html)*

## Looking Through the Window

You'll recall that some time back we fitted a
[window](doorsandwindows.html) to the cottage that allowed Heidi to see
what's inside when she's outside and *vice versa*. As implemented, this
is a rather 'passive' window that simply makes whatever's inside the
cottage visible on the outside (and *vice versa*). Since a window is
something one might actively look through, it would be nice if we could
implement a **look through** **window** command, the response to which
was a description of what was on the other side of the window. In
principle, this could be done quite simply by something like this:  


cottageWindow : SenseConnector, Fixture 'window' 'window'  
  "The cottage window has a freshly painted green frame. The glass   
    has been recently cleaned. "  
  
  dobjFor(LookThrough)  
  {  
    verify() {}  
    check() {}  
    action()  
    {  
      local otherLocation;  
      if(gActor.isIn(outsideCottage))  
      {  
         otherLocation = insideCottage;  
         "You peer through the window into the neat little room  
         inside the cottage. ";       
      }  
      else  
      {  
         otherLocation = outsideCottage;  
         "Looking out through the window you see a path   
          leading into the forest. ";           
      }  
      gActor.location.listRemoteContents(otherLocation);       
  
    }  
  }     
  connectorMaterial = glass  
  locationList = \[outsideCottage, insideCottage\]  
;  


The logic of this should be reasonably easy to follow: according to
whether Heidi is inside or outside the cottage the action routine
displays a brief general description of what can be seen on the other
side of the window and then calls listRemoteContents(otherLocation) to
list the contents of the other location being viewed through the window.
We need to use a listRemoteContents routine because we want to list the
contents of the other location as they appear from the room we're in,
not as they would appear if Heidi were in the same location as they.
This is all fairly straightforward apart from one thing: there is no
listRemoteContents method in the library, so we'll have to provide our
own.  
  
The library does provide a routine that does almost what we want; it's
called lookAround. This is normally used to provide a full room
description, but we can restrict it to just listing the objects within a
room. At a first approximation our listRemoteContents routine could be
defined simply as:  


listRemoteContents(otherLocation)  
{   
   lookAround(gActor, LookListSpecials \| LookListPortables);     
}  
  
  
The first parameter of lookAround is the actor performing the command
(i.e. gActor). The final parameter uses the bitwise or operator ( \| ),
the details of which are a bit beyond this Getting Started Guide;
suffice to say that in this context it can be used to combine a number
of option flags into a single argument. The two flags listed here are to
list the objects with special descriptions and the portable objects.  
  
If you define lookRemoteContents on Thing, and then try compiling and
running the game (with the revised cottageWindow), you'll find that it
almost works as we want, but not quite. If you stand outside the cottage
and look through its window on the first turn, the chair will be
reported sitting in the corner of the room as expected. But if you
subsequently collect the key, unlock the door, then drop the key on the
ground, you'll find that looking in through the window from the outside
lists the key as well as the chair, while looking out through the window
from the inside lists the chair as well as the key. The problem is that
lookAround lists everything that's visible from the room as well as the
contents of the room itself, whereas we want something that lists only
the contents of the room on the other side of the window.  
  
Fortunately, TADS 3 provides another Thing method we can use to tweak
this: adjustLookAroundTable. This is a method that can be used to remove
any items we don't want included in the room description. By default it
simply removes the point-of-view object, since an object looking round a
location doesn't normally include itself in the list of things it sees;
but we could use it to remove any object that's not in the location
we're interested in:  


adjustLookAroundTable(tab, pov, actor)  
  {  
    inherited(tab, pov, actor);  
    if(listLocation\_ !=  nil)  
    {  
      local lst = tab.keysToList();  
      foreach(local cur in lst)  
      {  
        if(!cur.isIn(listLocation\_))  
          tab.removeElement(cur);  
      }  
    }  
  }  


  
In this method, we first call the inherited behaviour to remove the
actor and point-of-view object. If listLocation\_ (which we'll explain
more fully shortly) is not nil, we then go on to remove everything
that's not in listLocation\_ from the table of items to be listed. The
items that are otherwise about to be listed are in a LookupTable passed
in the tab parameter. This LookupTable contains a series of pairs of
values: a *key* containing the object and a value containing information
about the sensing of the object. If that all sounds a bit too
complicated, don't worry; all we're interested in this point is the list
of objects contained in the keys. To get at this we use the
keysToList() method. Then, having obtained the list of objects (in the
local variable lst) we simply work through them and remove from the
table every object that isn't in listLocation\_.  
  
So far, so good, but what exactly is listLocation\_ and how do we set it
to what we want? Well, listLocation\_ is the name we're giving to the
location (i.e. room) whose contents we want listed. It can't be passed
as a parameter of adjustLookAroundTable(), since there's no provision
for such an extra parameter in the library's definition of this method.
So to make it available to adjustLookAroundTable() we need to define it
as a property (which can then be set from another method). We add the
underscore at the end of the name to highlight the fact that it's a
property intended for a particular internal use only.  
  
We next need to arrange for listRemoteContents to set listLocation\_ to
the room whose contents we want listed:  


listRemoteContents(otherLocation)    
{   
   listLocation\_ = otherLocation;   
   lookAround(gActor, LookListSpecials \| LookListPortables);     
   listLocation\_ = nil;  
}  


Note that we reset listLocation\_ to nil after calling lookAroundWithin.
This is vital, because we only want adjustLookAroundTable to remove
items from the list of objects to be shown when listRemoteContents is
called. At any other time we want adjustLookAroundTable to behave as
defined in the library - which it will when listLocation\_ is nil. If
listLocation\_ were not reset to nil at the end of each call to
listRemoteContents, then subsequent listings of objects in room
descriptions would cease to work properly (since all objects not in
listLocation\_ would be removed from the list of objects to be shown).
In fact, it's so important that we make sure that listLocation\_ is
always reset to nil at the end of listRemoteContents that there's one
more step we really ought to take to ensure that it always is - and
that's to use try… finally. The way we do this is to enclose one or more
statements in a block following the try keyword, then one or more
statements in a block following the finally keyword. This will ensure
that the statements in the finally block will *always* be executed, even
if the game encounters an exception (such as an unanticipated error) in
the try block. In this case we want to protect the call to
lookAroundWithin in a try block and place the statement
listLocation\_ = nil in the finally block, to make it absolutely certain
that listLocation\_ will *always* be reset to nil at the end of the
method, come what may.  
  
The modification to Thing required to achieve all this is thus:  


modify Thing  
  listLocation\_ = nil  
  listRemoteContents(otherLocation)  
  {  
    listLocation\_ = otherLocation;  
    try  
    {  
      lookAround(gActor, LookListSpecials \| LookListPortables);  
    }  
    finally  
    {  
      listLocation\_ = nil;  
    }  
  }  
    
  adjustLookAroundTable(tab, pov, actor)  
  {  
    inherited(tab, pov, actor);  
    if(listLocation\_ !=  nil)  
    {  
      local lst = tab.keysToList();  
      foreach(local cur in lst)  
      {  
        if(!cur.isIn(listLocation\_))  
          tab.removeElement(cur);  
      }  
    }  
  }  
;  


If you don't totally understand all the details of this, don't worry at
this stage. You can just copy the code and check that it works (or use
it in your own project), and then come back to it when you're more
experienced with TADS 3 and it makes more sense to you.  
  
In the meantime, there's one further refinement we may want to add to
the cottage window. At the moment, the chair inside the cottage
advertises its presence as soon as Heidi's in outsideCottage, which she
is on the very first turn of the game. It may be both a bit more subtle
and a bit more realistic if she's not allowed to become aware of what's
inside the cottage until she either enters it or explicitly looks in
through the window.  
  
The simplest way to achieve this is to have the window start totally
opaque and only become transparent to sight the first time a **look
through window** command is issued. To do this, first change the
definition of cottageWindow so that instead of  
 
connectorMaterial = glass 


You have  
 
connectorMaterial = adventium 


Then add the statement  
 
connectorMaterial = glass; 


At the start of the action routine of dobjFor(LookThrough), say,
immediately after local otherLocation;. Now, the chair will not be
listed until the player issues the command **look through window**.  
  
You might be tempted to add a further statement
connectorMaterial = adventium; at the end of the action routine, so that
the contents of the room inside the cottage are visible only when the
window is being explicitly looked through. The problem with this is that
once the player has seen the chair inside the cottage, he or she ought
to be able to refer to it (e.g. with **x chair**), but making the window
opaque again (adventium is a material that's opaque to all senses) will
prevent that (**x chair** would result in the message 'you see no chair
here', even though you'd just seen it through the window). In any case,
once Heidi has once looked through the window it's not so unreasonable
that she should continue to be aware of what lies on the other side of
it.  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](countingthecash.html)
  [\[Next\]](easingtestinganddebugging.html)*


