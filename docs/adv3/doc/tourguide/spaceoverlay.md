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
<td style="text-align: left;"><strong>SpaceOverlay : <a
href="bulklimiter.html">BulkLimiter</a><br />
</strong></td>
<td style="text-align: right;"><a
href="stretchycontainer.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="underside.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
You are unlikely to use a SpaceOverlay directly (except perhaps to
derive your own subclass from it). The main function of the SpaceOverlay
class is to provide common functionality for its subclasses:
[Underside](underside.html), [RearContainer](rearcontainer.html), and
[RearSurface](rearsurface.html). It is worth considering the SpaceOverlay
before its subclasses, however, in order to be aware of the common
behaviour they all inherit.  
  
According to the comments in the library code:  
*A "space overlay" is a special type of container whose contents are
supposed to be adjacent to the container object (i.e., self), but are
not truly contained in the usual sense. This is used to model spatial
relationships such as UNDER and BEHIND, which aren't directly supported
in the normal containment model.  
  
The special feature of a space overlay is that the contents aren't truly
attached to the container object, so they don't move with it the way
that the contents of an ordinary container do. For example, suppose we
have a space overlay representing a bookcase and the space behind it, so
that we can hide a painting behind the bookcase: in this case, moving
the bookcase should leave the painting where it was, because it was just
sitting there in that space. In the real world, of course, the painting
was sitting on the floor all along, so moving the bookcase would have no
effect on it; but our spatial relationship model isn't quite as good as
reality's, so we have to resort to an extra fix-up step. Specifically,
when we move a space overlay, we always check to see if its contents
need to be relocated to the place where they were really supposed to be
all along.*  
  
SpaceOverlay defines the following properties that are inherited by its
subclasses:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>abandonLocation</strong> - This is the location where
objects located in a SpaceOverlay (Underside, RearContainer or
RearSurface) end up when the SpaceOverlay is moved. By default, this
will be the immediate container of the SpaceOverlay. For example, if the
SpaceOverlay represents the underside or rear of a dressing table, if
the dressing table is moved, then we would expect whatever was behind it
to stay put in the dressing table's original location. You can override
abandonLocation to some other location if that's where objects in the
SpaceOverlay should fetch up, or set it to nil if you want objects in
the SpaceOverlay to move with the SpaceOverlay (because they're to be
considered attached to the underside or rear of the object that's
moved). In addition, any object of class Component in a SpaceOverlay
will always move with the SpaceOverlay, since a Component is assumed to
be attached to its parent object.  <br />
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
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>alwaysListOnMove</strong> - If this property is set to nil
(the default), the SpaceOverlay only lists its contents the first time
it's moved (on the basis that if you moved, say, a piece of furniture,
you would then see what was behind it or underneath it). If
alwaysListOnMove is set to true, on the other hand, then the contents of
the SpaceOverlay are listed every time it is moved.  <br />
</td>
</tr>
</tbody>
</table>



  
Note that a SpaceOverlay will generally be implemented as a Component of
a [ComplexContainer](complexcontainer.html): in such a case the 'it' that
will actually be moved (causing SpaceOverlays such as its Underside or
RearSurface) will be the ComplexContainer (though it will of course take
its SpaceOverlays with it).  
  
