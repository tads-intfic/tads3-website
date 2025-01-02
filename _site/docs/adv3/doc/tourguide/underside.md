<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Underside : <a
href="spaceoverlay.htm">SpaceOverlay</a><br />
</strong></td>
<td style="text-align: right;"><a href="spaceoverlay.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="rearcontainer.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
*An "underside" is a special type of container that describes its
contents as being under the object. This is appropriate for objects that
have a space underneath, such as a bed or a table.  
*  
Usually, an Underside is not much use by itself (since it would be the
Underside of something), and one would normally use it as part of a
[ComplexContainer](complexcontainer.htm). It is, however, possible
(though more laborious) to link an Underside to another object using
remapTo commands. Just to show how it could be done, we'll give the desk
in the cabin an Underside by this means, and then hide the button under
it, so that the player can only find it by explicitly looking under the
desk:  
  
cabinDesk : Heavy, Surface 'large solid oak desk' 'desk' @greatCabin  
  "It's a large, solid oak desk, with a single drawer. "  
  **initSpecialDesc** = "A large oak desk sits in the middle of the cabin. "  
  **specialDescOrder = 50**  
  **dobjFor(LookUnder) remapTo(LookUnder, underDesk)  
  iobjFor(PutUnder) remapTo(PutUnder, DirectObject, underDesk)  
**;  
  
+ underDesk : NameAsOther, Underside, Component  
  targetObj = cabinDesk  
;  
  
++ **Hidden**, Button, **Component** 'small brown button' 'small brown button'  
  "The small brown button is fixed to the underside of the desk. "  
  dobjFor(Push)  
  {  
    action()  
    {  
      "There's a sharp \<i\>click\</i\>, and a section of the foreward bulkhead slides  
      \<\<bulkheadDoor.isOpen ? 'closed' : 'open'\>\>. ";  
      bulkheadDoor.makeOpen(!bulkheadDoor.isOpen);  
    }  
  }    
  **isListedInContents = (discovered)  
**;  
  
Note that this anticipates the use of the [Hidden](hidden.htm) class,
which we'll be looking at in more detail later.  
  
Apart from a number of message properties, the main new property of
interest defined on Underside is **allowPutUnder**; if this is set to
true, actors (including the player character) may place objects in (i.e.
under) this Underside; otherwise they may not. allowPutUnder is true by
default.  
  
