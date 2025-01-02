<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>PresentLater : object<br />
</strong></td>
<td style="text-align: right;"><a href="hidden.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="gadgets-introduction.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The PresentLater class is slightly more complicated than the Hidden
class, although it can be used in ways that look much the same to the
player. The official purpose of a PresentLater is to define an object
that is not yet where you place it. That is, you can give a PresentLater
object a starting location where you want it to appear subsequently, but
at the preinitialization stage this location will be stored in its
**eventualLocation** property and the object moved into nil. At the
point in your game when you want it to appear in its predefined location
you call its **makePresent()** method. Thus we could have implemented
hiding the brass key by making it a PresentLater, Thing (note that
PresentLater is a mix-in class - it does not descend from Thing itself)
instead of a Hidden, by calling brassKey.makePresent() instead of
brassKey.discover, and by testing if(brassKey.moved) instead of
if(brassKey.discovered). The effect (in terms of the transcript seen by
the player) would have been identical. The main difference is that by
using Hidden the brass key was in roundCave all along (but not visible
until discovered), whereas by using PresentLater the brass key would not
have been in roundCave until makePresent() was called.  
  
There is one important distinction to bear in mind here, though, and
that is that calling makePresent() on a PresentLater sets its **moved**
property to true (since makePresent calls moveInto) while calling
discover on a Hidden does not (because a Hidden is not moved when it is
discovered).  
  
In a simple case like that of the brass key where Hidden will do the
job, it's probably best to use Hidden, unless there's some reason why
you actually want the object concerned to be moved rather than simply
made visible. In more complex cases, however, PresentLater may be the
better choice, since it has a number of other methods we have yet to
explore, and which make it a rather more powerful class than might
appear from what we have seen so far.  
  
In addition to its makePresent, method, PresentLater has a
**makePresentIf(cond)** method; this moves an object from nil to its
eventualLocation if cond is true, otherwise it moves it into nil. We can
illustrate this by adding a console to the Tardis control room; the
console has a panel behind which is a shallow compartment. Effectively,
the compartment is only present in the control room if the panel is
open, so we could use makePresentIf(cond) to bring it into the control
room when the panel is opened and back into nil (in this case, out of
sight) when the panel is closed:  
  
tardisConsole: Fixture '(tardis) hexagonal control console' 'console' @tardisControlRoom  
  "The six-sided console stands in the middle of the room. Amongst its controls  
   are a slider, a dial, a
switch, and a big red button. Beneath these is  
   a panel set in the side of the lower part of the console. "  
;  
  
+ tardisPanel : Openable, Component 'panel' 'panel'  
  makeOpen(stat)  
  {  
    inherited(stat);  
    tardisPanelCompartment.makePresentIf(stat);      
    if(stat)  
      "Opening the panel reveals a shallow compartment behind. ";  
  }     
;  
  
+ tardisPanelCompartment : PresentLater, RestrictedContainer, Fixture 'shallow compartment'  
   'shallow compartment' "It's about four inches deep. "  
  validContents = \[fluidLink\]     
;  
  
++ fluidLink : Thing 'fluid link' 'fluid link'  
  "It's a long transparent tube, half full of mercury. "  
;  
  
We'll do more with the fluid link later. For the moment let's continue
to explore PresentLater. Let's suppose that in addition to the
compartment we want a notice on the back of the panel that's only
visible when the panel is open. We can make this a PresentLater too, and
we could simply add tardisPanelNotice.makePresent(stat) to the
definition of tardisPanel.makeOpen. But there is an alternative if we
want to make several objects present at once: we can use
**makePresentByKey(key)**. To use this you need to define a **plKey** on
each of the PresentLater objects you want controlled by the single
statement; e.g. you could define plKey = 'tardis' on both the
compartment and the notice. To make all objects whose plKey is 'tardis'
present at once you would then call
PresentLater.makePresentByKey('tardis'); note that this method is called
on the PresentLater *class*. In this case, however, we need to go one
better still and use the **makePresentByKeyIf(key, cond)** method:  
  
+ tardisPanel : Openable, Component 'panel' 'panel'  
  makeOpen(stat)  
  {  
    inherited(stat);  
    **PresentLater.makePresentByKeyIf('tardis', stat);**      
    if(stat)  
      "Opening the panel reveals a shallow compartment behind **and a notice on  
       the back of the panel**. ";  
  }     
;  
  
**++ tardisPanelNotice : PresentLater, Component 'notice' 'notice'  
  "The notice reads:\bFor best results ensure the fluid link is full of mercury. "  
  plKey = 'tardis'  
;**  
  
+ tardisPanelCompartment : PresentLater, RestrictedContainer, Fixture 'shallow compartment'  
   'shallow compartment' "It's about four inches deep. "  
  validContents = \[fluidLink\]     
  **plKey = 'tardis'**  
;  
  
++ fluidLink : Thing 'fluid link' 'fluid link'  
  "It's a long transparent tube, half full of mercury. "  
;  
  
One final point about PresentLater, which we'll describe without
illustrating in our game, is that it's possible to use this class for an
object that *starts* present and subsequently disappears. To do this we
set its **initiallyPresent** property to true. It can then be made to
disappear by calling makePresentIf(nil), and to reappear again by
calling makePresent.  
