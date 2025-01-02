<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>brightness<br />
</strong></td>
<td style="text-align: right;"><a
href="lightandfire-introduction.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="lightsource.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The simplest way to provide portable light is to create a portable
object and set its brightness property to a suitable level, e.g.:  
  
Thing 'brass lantern' 'brass lantern' @mainCave  
  "It's an ordinary brass lantern, except you can't turn it off. "  
  brightness = 3  
;  
  
We shan't be making this lantern a permanent feature of the game, but if
you want to experiment, by all means try it. You'll find that when the
player character is carrying the lantern you can move around all the
previously darkened areas easily, since the lantern now provides light.
For some games in some situations this may be all you need. The other
classes of light-providing objects we'll be looking at simply provide
more sophisticated ways of adjusting the brightness property of
(usually) portable objects.  
