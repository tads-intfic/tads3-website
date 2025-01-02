---
layout: docs
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Consultable : <a
href="thing-introduction.html">Thing</a>, TopicDatabase<br />
</strong></td>
<td style="text-align: right;"><a
href="amodifieddefaultcommandtopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="consulttopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Consultable is something you can look things up in, in response to
commands like LOOK BANANA UP IN BOOK or CONSULT BOOK ABOUT MEANING OF
LIFE. It follows that a Consultable will normally be something like a
book, or maybe a computer. The advantage of a Consultable is that it can
contain [ConsultTopics](consulttopic.html), which work in much the way as
other [TopicEntries](topicentry.html) work for an actor.  
  
We'll define just one Consultable in this game: a book, which we'll also
make a Readable:  
  
historyBook : Readable, Consultable 'dark blue book' 'dark blue book' @glassShelf  
  "The gold-lettered title on the dark blue cover is \<i\>The Great History\</i\>."  
  readDesc = "It's too long to read from cover to cover right now, but  
   you could consult it on specific topics. "      
 dobjFor(Read)  
 {  
   preCond = inherited + objHeld;  
 }    
 dobjFor(Consult)  
 {  
   preCond = inherited + objHeld;  
 }  
;  
  
Just to make things a little more difficult, we've put the history book
inside a glass-fronted shelf, so that it can only be read by first
opening the front of the shelf. To enforce this we add objHeld to the
list of preconditions for both reading and consulting the book. The
shelf front is unlocked by pushing a button, but this will only work if
the shelf is plugged in to the electrical supply. To do this requires
the power cable that's also used for the vending machine. We'll start
this cable off in a wall-mounted cabinet in a storeroom next to the
library, but to reach the cabinet you need to stand on something, so
we'll put a convenient stool in the library for the purpose. Since the
doors to the library and the storeroom are next to each other in the
south wall, we'll need to use an AskConnector.  
  
None of this is new, but it may refresh your memory of things we've used
before:  
  
stoneLanding : Room 'Landing' 'the landing'  
   "A pair of doors lead south from this narrow landing, from which  
    a narrow flight of stone steps lead down to the north. "  
   down = slStairsDown  
   north asExit(down)     
   south : AskConnector   
    {   
     promptMessage = "There are two doors to the south. "   
     travelAction = GoThroughAction   
     travelObjs = \[leftDoor, rightDoor\]  
     travelObjsPhrase = 'of them'  
    }  
;  
  
+ slStairsDown : StairwayDown -\>eastShoreUp 'flight stone down stairs/steps'   
   'stone steps down'  
  isPlural = true  
;  
  
+ leftDoor : Door 'left hand door\*doors' 'left hand door'  
;  
  
+ rightDoor : Door 'right hand door\*doors' 'right hand door'  
;  
  
library : Room 'Library' 'the library'  
  "The library is a long rectangular room, with bookshelves all around.   
  It looks, however, as if the shelves have been raided, for they are  
  all bare, apart from a glass fronted-shelf at the southern end of  
  the room. Not far from this shelf is an electrical socket in the wall. "  
  north = libraryDoor  
  out asExit(north)  
    
;  
  
+ libraryDoor : Door -\> rightDoor 'door' 'door'  
    
;  
  
+ Decoration '(book) shelves/bookshelves' 'bookshelves'  
  "The bookshelves are all bare, apart from the glass-fronted shelf  
   at the end. "  
;  
   
+ glassShelf : IndirectLockable, OpenableContainer, Fixture   
   'glass fronted glass-fronted (book) shelf/front' 'glass-fronted shelf'  
  "The glass-fronted shelf is effectively a container for one or two books.   
  A small brown button is mounted on one side, next to an electrical inlet. "  
  material = glass    
  powerOn = (powerCable.isAttachedTo(glassSocket) && powerCable.isAttachedTo(librarySocket))  
  iobjFor(PutOn) asIobjFor(PutIn)  
  afterAction()  
  {  
    if(gActionIs(AttachTo) && powerOn && !isLit)  
    {  
      "A light comes on inside the glass-fronted shelf. ";      
      isLit = true;  
    }  
    if(gActionIs(DetachFrom) && !powerOn && isLit)  
    {  
      "The light in the glass-fronted shelf goes out. ";  
      isLit = nil;  
    }  
  }    
  isLit = nil  
  brightness = (isLit ? 3 : 0)  
;  
  
+ NameAsOther, SecretFixture  
  targetObj = glassShelf  
;  
  
++ Button, Component 'small brown button' 'small brown button'  
  dobjFor(Push)  
  {  
   action()  
   {  
    if(glassShelf.powerOn)  
    {  
      "A small click comes from the glass-fronted shelf. ";  
      glassShelf.makeLocked(!glassShelf.isLocked);  
    }  
    else  
      "Nothing happens. ";  
   }  
  }   
;  
  
++ glassSocket : PlugAttachable, Attachable, Component 'electrical inlet'  
   'electrical inlet'  
   "The electrical inlet is mounted next to the brown button on the  
    side of the glass-fronted shelf. "  
;  
  
+ librarySocket : PlugAttachable, Attachable, Fixture 'electrical (wall) socket'  
   'wall socket'  
  "The electrical socket is mounted on the wall, a couple of inches  
   up from the floor. It's just a standard socket. "  
;  
  
+ stool : Chair 'reading stool' 'reading stool'  
  "It's a plain wooden stool, without a back. "  
  initSpecialDesc = "A plain wooden stool stands in the middle of the room. "  
;  
  
storeRoom : DarkRoom 'Store Room' 'the store room'  
  "The storeroom is completely bare apart   
    from a cabinet mounted on one wall. "  
    
  north = storeRoomDoor  
  out asExit(north)  
;  
  
+ storeRoomDoor : Door -\>leftDoor 'door' 'door'  
;  
  
+ storeRoomCabinet : OutOfReach, OpenableContainer, Fixture  
  'cabinet' 'cabinet'  
  "The cabinet is mounted high up on the west wall. "  
  canObjReachContents(obj)   
  { return obj.location.ofKind(Chair); }  
  
;  
  
++ powerCable : PlugAttachable, Attachable, Thing   
   'thick black power cable/cord/lead/plugs' 'black cable'  
   "It's a thick black power cable, about four feet long, with  
    plugs both ends. "  
  bulk = 2   
  canAttachTo(obj)   
   {return obj is in (socket, vendingMachine, **librarySocket, glassSocket)**; }  
  travelWhileAttached (movedObj, traveler, connector)  
  {  
    if(movedObj==self)  
    {  
      foreach(local cur in attachedObjects)        
        tryImplicitAction(DetachFrom, self, cur);        
    }  
  }  
;     
  
Note that this is the same power cable we defined before: we've simply
moved it to a new initial location and added a couple of items to the
list of things it can be attached to.  
