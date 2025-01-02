<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>LightSource : <a
href="thing-introduction.htm">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a href="brightness.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="flashlight.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
LightSource is the most basic class that provides some specialization
for providing light. It provides a **makeLit(lit)** method for turning
the light on and off, or, to be strictly accurate, for adjusting the
brightness between the values of its **brightnessOn** and
**brightnessOff** properties (by default 3 and 0 respectively). Again,
by default, a LightSource starts out lit (i.e. with its **isLit**
property set to true). It also describes itself as providing light when
lit. It may sometimes be useful to use this class for lightsources other
than the [Flashlight](flashlight.htm) and [Candle](candle.htm) types
provided by the library. As an illustration, we can convert the brass
lantern of the previous section into a curious device that is lit only
when the player character is holding it.  
  
LightSource 'brass lantern' 'brass lantern' @mainCave  
  "It's an ordinary brass lantern, except it has no visible means of control. "  
  isLit = nil  
  moveInto(newCont)  
  {  
    makeLit(newCont == gPlayerChar);  
    inherited(newCont);  
  }  
;  
  
Once you've finished playing (experimenting seriously, I mean) with this
lantern you can delete it; it's an impractical device and we shall have
no further use for it in this game. In the meantime you may have noticed
that an even simpler way to have defined it would have been:  
  
LightSource 'brass lantern' 'brass lantern' @mainCave  
  "It's an ordinary brass lantern, except it has no visible means of control. "  
  isLit = (isHeldBy(gPlayerChar))    
;  
  
But I wanted to illustrate the use of the makeLit() method. The second
way of defining it does, however, provide a useful illustration of the
isHeldBy(actor) method, a method of Thing that returns true if the Thing
is directly in the actor's inventory, but is not being worn by the actor
(more or less).  
  
  
