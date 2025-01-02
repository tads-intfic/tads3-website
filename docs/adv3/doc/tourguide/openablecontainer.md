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
<td style="text-align: left;"><strong>OpenableContainer :<a
href="openable.html">Openable</a>, <a
href="container.html">Container</a><br />
</strong></td>
<td style="text-align: right;"><a href="container.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="notifyinsert+notifyremove.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
If, unlike the cap and the glass jar in the last two sections, you want
a container that can be opened and closed by the player, then you need
to use OpenableContainer (or one of its lockable subclasses, which we'll
be encountering later). As an example of a simple OpenableContainer
we'll leave a first aid kit on the ledge in entranceCave and put a
couple of items in it. For convenience, the definition of the ledge is
repeated to show the nesting relationship using the + syntax:  
  
Surface, Fixture 'narrow ledge' 'narrow ledge' @entranceCave  
  "It's about a foot wide and two feet long. "  
  bulkCapacity = 25  
;  
  
+ firstAidKit : OpenableContainer 'small white first aid box/kit' 'first aid kit'   
  "It's made of some kind of white plastic and is about nine inches long. The lid  
   is marked with a broad red cross. "  
   initSpecialDesc = "A small white box lies on the ledge. "  
   bulkCapacity = 3  
   bulk = 4  
;  
  
++ syringe : Thing 'syringe' 'syringe';  
  
++ stickingPlaster : Thing 'sticking adhesive plaster' 'sticking plaster';  
  
Note the use of the + notation to place the firstAidKit on the ledge,
and the ++ notation to indicate a second level of nesting to put objects
in the firstAidKit. The use of initSpecialDesc means that it will be
described as a 'small white box' when the player first encounters it,
but will be listed as 'a first aid kit' once the player picks it up,
which seems reasonable: its vocabulary has been defined so that it will
answer to either appellation. Since it is only a small box we give it
quite a small bulkCapacity, and a bulk that's just a bit bigger than its
capacity. We also place a couple of items in it, but their definition is
minimal for now - we'll be fleshing them out in due course.  
  
  
