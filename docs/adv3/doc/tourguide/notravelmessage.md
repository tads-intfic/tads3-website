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
<td style="text-align: left;"><strong>NoTravelMessage : <a
href="travelmessage.html">TravelMessage</a><br />
</strong></td>
<td style="text-align: right;"><a href="basicdoor.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="exitonlypassage.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
We have described the lakeShore room as being on the northern shore of a
giant underground lake. This means that it should be fairly apparent
that the PC cannot proceed south. In this situation we may want to
display a custom message if the player nevertheless attempts to walk out
onto the lake; a NoTravelMessage will perform this role (using the
[NoTravelMessage template](notravelmessagetemplate.html)):  
  
  
lakeRoom: Room 'Lake Shore'  
  "This is the northern shore of a giant underground lake. A door leads north. "  
  north = lakeDoor2  
  **south : NoTravelMessage { "You never learnt to walk on water. " }  
  southeast asExit(south)  
  southwest asExit(south)  
**;  
  
This is very similar to a [FakeConnector](fakeconnector.html). The only
difference is a direction attached to a NoTravelMessage won't be
included in a list of exits (e.g. in response to an EXITS command, or in
the status line), whereas that attached to a FakeConnector will. A
NoTravelMessage should therefore be used to explain why travel is not
possible in a direction in which it's reasonably apparent that travel
isn't possible, while a FakeConnector should be used to make travel
apparently possible in a direction in which it isn' t really, e.g.. to
provide a "soft boundary" to the map.  
  
  
