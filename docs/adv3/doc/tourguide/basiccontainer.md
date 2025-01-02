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
<td style="text-align: left;"><strong>BasicContainer : <a
href="bulklimiter.html">BulkLimiter</a><br />
</strong></td>
<td style="text-align: right;"><a href="surface.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="container.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Next to a Surface, the simplest kind of BulkLimiter is a Container,
which, as you'd expect, is simply something that can contain other
things. The main difference between a Surface and a Container is that
whereas the contents of a surface are regarded as being *on* the
surface, the contents of a Container are regarded as being *in* the
Container.  
  
The other main difference between a Container and a Surface is that,
unlike a Surface, a Container can be either **open** or **closed**. If a
Container is open its contents are visible and can be removed from the
Container, while other things can be inserted into the Container
(subject to restrictions of bulk and so forth). If, on the other hand a
Container is closed, nothing can be inserted into or removed from it,
and, unless the Container is made of some transparent material, its
contents will be invisible.  
  
A basic container is an object that can enclose its contents. This is
the core of the Container type, but this class only has the bare-bones
sense-related enclosing features, without any action implementation.
This can be used for cases where an object isn't meant to have its
contents be manipulable by the player (so we don't want to allow "put
in" and so on), but where we do want the ability to conceal our contents
when we're closed.  
  
BasicContainer defines a few properties of its own, of which the most
significant are:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>isOpen</strong> - defines whether this BasicContainer is
open or closed. By default, this property is true. An open box, for
example, would have isOpen true, whereas it would be nil on a sealed
glass tube.  <br />
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
<td><strong>material</strong> - the material from which this container
is made; this basically defines whether and how an object in the
container can be sensed if the container is closed. The default is
<em>adventium</em>, which prevents an object in a closed container being
sensed at all. If the material were <em>glass</em>, we could see what
was inside, but not otherwise interact with it. If it were
<em>paper</em>, we could smell or hear an object in the closed container
(assuming it was noisy and smelly) but not see or touch it.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
In practice, it's hard to think of examples where this class would be
useful (as opposed to one of its subclasses). One possible use would be
to have an object permanently encased in a glass container - but then
there would seem to be no reason not to have a single object which
described itself as a glass container encasing a dead butterfly or
whatever it is. On the other hand, if the container can be broken open
at some point and the contents removed, never to be replaced, one could
use a BasicContainer for that.  
  
To illustrate the fact that if a closed container is transparent you can
see its contents but not touch them (and hence not manipulate them),
let's create a sealed transparent container with something inside. To
make the jar transparent we override its **material** property to
**glass**.  
  
glassJar : BasicContainer 'glass jar' 'glass jar' @mainCave  
  "It seems to be sealed fast. "  
  isOpen = nil  
  bulkCapacity = 4  
  material = glass  
;  
  
+ hexCrystal : Thing 'hexagonal blue crystal' 'blue crystal'  
  "The crystal is almost cylindrical, except that it has a hexagonal  
   cross-section. It's about eight inches long and pulsates with  
   a faint blue light. "  
  brightness = 1  
  bulk = 2  
  weight = 2  
;  
  
Note that since we have described the crystal as pulsating with a faint
blue light we give it a brightness of 1 - enough to make it
self-illuminating in the dark but not enough for it to illuminate
anything else. To see the effect, try carrying the crystal (by carrying
the jar) into a dark room. We'll implement a way of [getting the crystal
out of the jar](restrictedcontainer.html#openjar) shortly.  
  
