<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Surface : <a
href="bulklimiter.htm">BulkLimiter</a><br />
</strong></td>
<td style="text-align: right;"><a href="bulklimiter.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="basiccontainer.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
Perhaps the simplest kind of container, or BulkLimiter, is the Surface,
which is simply something you can put things on. The description of
entranceCave mentions a narrow ledge carved into one wall, and this
would be a good candidate for a Surface; in this case the Surface will
also be a Fixture since it's plainly not something we can carry
around:  
  
Surface, Fixture 'narrow ledge' 'narrow ledge' @entranceCave  
  "It's about a foot wide and two feet long. "  
  bulkCapacity = 25  
;  
  
Setting the bulk capacity to 25 isn't essential here, but since the
ledge is described as narrow, there must presumably be some limit to how
much can be placed on it. If you like you can try running the game and
putting things on the ledge.  
  
Another good candidate for a Surface is the desk in the cabin, which is
plainly something one could put things on. While we're at it, we'll put
something on it:  
  
cabinDesk : Heavy, **Surface** 'large solid oak desk' 'desk' @greatCabin  
  "It's a large, solid oak desk. A button is fixed underneath it. "  
  inRoomDesc = "A large oak desks sits in the middle of the cabin. "  
;  
  
+ chart : Readable 'chart' 'chart'  
  "It appears to be a chart of the lake. "  
  readDesc = "According to the chart the lake is roughly circular. There appears to  
   be one landing spot each on the north, south, east and west shores of the lake. "  
  initSpecialDesc = "A chart lies open on the desk. "  
;  
  
Note the use of the + location here; anything located *in* a Surface is
considered to be *on* it. Technically this should cause a problem for
our previously defined [Button](hiddendoor.htm) object (used to unlock
the hidden door in the bulkhead), but the way we've described the desk
and the button, together with the fact that the button is a
[Component](component.htm) means that we can in fact get away with it,
although later we'll look at a way of tying up this potential loose
end.  
  
