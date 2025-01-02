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
<td style="text-align: left;"><strong>Component : <a
href="fixture.html">Fixture</a><br />
</strong></td>
<td style="text-align: right;"><a href="heavy.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="thing-introduction.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
As its name suggests, a Component is something that is part of something
else. It need not be fixed within a particular room location, since it
could be part of a portable object, a button on a mobile device, for
example, but it cannot be detached from its immediate parent, and
wherever its parent goes, it goes with it. A button on a stationery
device equally qualifies, however, so we can now move the button that
was defined in greatCabin to a more appropriate location (just after the
[desk](heavy.html) defined above), and change it from a Fixture to a
Component:  
  
+ Button, **Component** 'small brown button' 'small brown button'  
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
;  
  
As yet we have not implemented any portable objects to which a component
might be attached, but we have referred to a panel mounted on the deck
rail, so we can follow the definition of the deck rail object
immediately with:  
  
+ Component 'large wooden panel' 'panel'  
  "The panel seems to have something to do with sailing the ship. A wheel and a lever  
   are mounted on it, and between them is a hexagonal aperture. "  
;  
  
The panel refers to a wheel, a lever and a hexagonal aperture, all of
which will be its components; but we are not in a position to implement
any of these just yet.  
  
  
  
  
