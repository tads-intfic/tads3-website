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
<td style="text-align: left;"><strong>SingleContainer : <a
href="container.html">Container</a><br />
</strong></td>
<td style="text-align: right;"><a
href="containerdoor.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="bagofaffinity.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A SingleContainer is a special type of container that can hold only one
object at a time. If a new object is inserted, the old one is removed.  
  
The example we'll create may seem a little contrived at first, but
hopefully it'll make more sense when it ends up in its proper context.
For now we'll simply put it in mainCave, where it'll be convenient to
test it out until its proper starting place (a space station we'll be
visiting in a Tardis) has been constructed. From the description of this
object it's fairly clear we'll need to add a number of components to it
in due course. Since we don't want these to end up inside in the
Container we make our autoRectifier a ComplexContainer and the
SingleContainer its subContainer object:  
  
autoRectifier : ComplexContainer 'silver cylinder' 'silver cylinder' @mainCave  
  "It's about a foot high and five inches in diameter. A black ring surrounds  
   the opening at one end. The only other feature of interest are a conspicuous  
   orange button and the manufacturer's name inscribed just below the ring. "  
   subContainer : ComplexComponent, SingleContainer {  bulkCapacity = 3 }  
   bulk = 4  
   weight = 3  
;  
  
To try this out, compile the game, pick up the first aid kit on the way
down to the main cave, then try putting the contents of the first aid
kit in the cylinder one at time.  
  
This gadget is clearly incomplete, but we'll add its components and make
it functional when we come to deal with the [bent
key](keyedcontainer.html#bentkey) below.  
  
  
