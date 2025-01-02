<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>StretchyContainer : <a
href="container.htm">Container</a><br />
</strong></td>
<td style="text-align: right;"><a href="dispenser.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="spaceoverlay.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A StretchyContainer is simply a Container that changes bulk according to
its contents. An example might be a sack, which would have virtually no
bulk when empty, but becomes bulkier the more is put in it. We can leave
one in the squareCave, which could be used for carting things around
in:  
  
sack : StretchyContainer 'coarse brown sack' 'coarse brown sack' @squareCave  
  initSpecialDesc = "A coarse brown sack lies crumpled in the corner. "  
  bulkCapacity = 30  
  minBulk = 1  
;  
  
Presumably not even a StretchyContainer is infinitely elastic, so we
give it a finite **bulkCapacity**. We can also set a **minBulk** which
is the bulk of the sack when empty.  
  
Note that if we want to find out how bulky the sack has become at any
point in our game code we need to test its **getBulk()** method, not its
bulk property (which never changes).  
