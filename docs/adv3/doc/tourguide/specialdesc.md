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
<td style="text-align: left;"><strong>specialDesc<br />
</strong></td>
<td style="text-align: right;"><a
href="globalparamname.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="described.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
There may be cases where we want something other than the plain-vanilla
"You see an xxx here" to appear in room description lists even after an
object has moved. For this purpose an object may be given a specialDesc
property as well as an initSpecialDesc property. If an object has a
specialDesc property it is used *either* if the object has moved (i.e.
its moved property is true) *or* if there is not also an initSpecialDesc
property. This works even for objects that would not normally be listed,
because they are NonPortable. For example, if we wanted the desk in the
greatCabin to appear in the list of the cabin's contents we could give
it a specialDesc:  
  
cabinDesk : Heavy 'large solid oak desk' 'desk' @greatCabin  
  "It's a large, solid oak desk. A button is fixed underneath it. "  
  **specialDesc = "A large oak desks sits in the middle of the cabin. "**  
;  
  
In this case this may a bit redundant, since we have already mentioned
the desk in the description of the cabin, and we would normally want one
or the other but not both. But at least the specialDesc property allows
us the option of which way we do it (although since cabinDesk is never
moved it would work equally well to use its initSpecialDesc property).
Incidentally, the library does not provide a mechanism for incorporating
a specialDesc within the text of a room description (like an Inform
describe routine), but it's fairly easy to achieve this effect if you
want it, by defining a custom property (say inRoomDesc) on the object
you want so described, and a custom method on the room in question,
e.g.:  
  
greatCabin : Cabin 'Great Cabin' 'the great cabin'  
  "The great cabin occupies the entire width of the ship at the stern. The stern  
   windows aft look out over the water, **while there is a solid wooden bulkhead  
   foreward and a flight of steps leads up to the deck above. \<\<extras\>\>**"  
   up = cabinSteps  
   fore = bulkheadDoor  
   roomParts = static inherited - defaultAftBulkhead - defaultForeBulkhead  
      + greatCabinAftBulkhead + greatCabinForeBulkhead  
   **extras()  
   {  
     foreach(local cur in contents)  
       cur.inRoomDesc;  
   }**     
;  
  
cabinDesk : Heavy 'large solid oak desk' 'desk' @greatCabin  
  "It's a large, solid oak desk. A button is fixed underneath it. "  
  **inRoomDesc = "A large oak desks sits in the middle of the cabin. "**  
;  
  
There is nothing to stop you defining this extras() method on the Room
class if you want to make it more general, but you then have to remember
to include \<\<extras\>\> at the appropriate point of your room
descriptions, or else override the library code in some such way as:  
  
modify Room  
 roomDesc() { inherited; extras; }  
 extras()  
   {  
     foreach(local cur in contents)  
       cur.inRoomDesc;  
   }  
;  
  
This may be more convenient, since it will now work in every room
without your needing to add \<\<extras\>\> to the desc property,
provided you're happy for the inRoomDescs always to be listed at the end
of the room description. We'll give a more sophisticated version of this
modification below.  
  
But to return to specialDesc, we could also use this property to give
the coin a more specialized description in a room listing whenever it's
dropped on back on the floor, e.g.  
  
specialDesc = "{A coin/he} lies on the floor. "  
  
Which will give an appropriate description whether the coin has been
examined or not. The problem with this is that we want this
specialDescription only to be used if the coin is in fact lying on the
floor somewhere, and not, for example, if it's placed on some other
surface or in some other container. The easiest way to achieve this is
to override useSpecialDesc, so that the brassCoin object becomes:  
  
brassCoin : Thing '(small) brassy object' 'small brassy object' @longCave  
  "On the obverse is the head of King Freddie the Fat, and on the reverse  
   is stamped ONE GROAT. "   
   initSpecialDesc = "{A coin/he} lies on the ground in a dim corner of the cave. "  
   initDesc = "It looks like it might be a coin of some sort. "  
   globalParamName = 'coin'  
   **specialDesc = "{A coin/he} lies on the floor. "     
   useSpecialDesc { return location.ofKind(Room) \|\| useInitSpecialDesc(); }  
**   dobjFor(Examine)  
   {  
     action()  
     {  
       inherited;  
       changeName();  
     }  
   }  
   changeName()  
   {  
     name = 'small brass coin';  
     cmdDict.removeWord(self, 'object', &noun);  
     initializeVocabWith('brass coin/groat\*coins');  
   }   
;  
  
You need to be careful about one thing in particular when overriding
useSpecialDesc, however, namely that useSpecialDesc *also* determines if
the initSpecialDesc is displayed; if useSpecialDesc returns nil when the
initSpecialDesc would otherwise be displayed, the initSpecialDesc won't
be used. The safest way not to fall foul of this problem is to add
\|\| useInitSpecialDesc() to whatever condition you're using to
determine whether the specialDesc should be used, as in the example
above (where it is not, in this particular instance, strictly
necessary).  
  

To return to our inRoomDesc customization, it would be nice if we could
choose the order in which objects using our custom inRoomDesc property
were mentioned in the description of the room that contains them,
perhaps by the addition of an inRoomDescOrder property. To achieve this,
we need to make our customization a bit more complicated:  
  
  
modify Room  
 roomDesc() { inherited; extras; finalDesc;}  
 extras()  
   {  
     if(contents.length==0) return;  
     local cur;  
     local vec = new Vector(10);  
     foreach(cur in contents)  
       if(cur.propType(&inRoomDesc) is in (TypeDString, TypeCode))  
         vec.append(cur);  
     if(vec.length==0) return;    
    
     vec = vec.sort(nil, {a, b: a.inRoomDescOrder - b.inRoomDescOrder });  
     foreach(cur in vec)     
      if(gPlayerChar.canSee(cur))  
        cur.inRoomDesc;  
   }  
   finalDesc = nil  
;  
  
modify Thing  
  /\* Text to add to the description of the room I'm immediately in.  
   \*  If inRoomDesc is a double-quoted string or a method that displays  
   \* a string, this is added to the description of the enclosing room.  
   \*/  
  inRoomDesc = nil  
    
   /\* If several objects in the same room have an inRoomDesc, the inRoomDesc  
    \* property can be used to define the order in which they are described.  
    \* To have objects included in the room description in the order in which  
    \* they are defined in the source file, define inRoomDescOrder = (sourceTextOrder)  
    \*/  
     
  inRoomDescOrder = 100    
;  
  
In the event that you wanted to mix in room description text with object
description text in some way other than having all the objects described
last, you use the finalDesc property, e.g.:  
  
boringRoom : Room 'Boring Room'  
  "There's not much here really, "    
  finalDesc = "The only way out is to the north. "  
;  
  
+ Decoration 'carvings' 'carvings'  
  "They're rather amateurish. "  
  inRoomDesc = "apart from some carvings on one wall. "    
;  
  
This will produce the room description: "There's not much here really,
apart from some carvings on the wall. The only way out is to the north.
" This would probably be more useful if the description of the carvings
might change, e.g.:  
  
+ Decoration 'carvings' 'carvings'  
  "They're rather amateurish. "  
  inRoomDesc = "apart from some \<\<epithet\>\> carvings on one wall. "    
  epithet = (described ? 'amateurish' : 'intriguing')  
;  
  
For a more complex sandwich, you could include SecretFixture objects
whose only function was to provide parts of the room description in the
sequence determined by their inRoomDescOrder.  
  
  
