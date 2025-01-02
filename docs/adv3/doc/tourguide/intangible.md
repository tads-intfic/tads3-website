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
<td style="text-align: left;"><strong>Intangible : <a
href="thing-introduction.html">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a
href="intangibles-overview.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="distanceconnector.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An Intangible object (as opposed to an object derived from some of
Intangible's subclasses) is one that has no sensory presence whatsoever,
which means that the player can never refer to it, even with a bare
EXAMINE command. That means it is really only useful for abstract
objects that the player will never interact with directly (as a mix-in
class with a SenseConnector, perhaps, as in the
[DistanceConnector](distanceconnector.html)). To represent intangible but
sensible objects such a ray of light, you are better off using the
[Vaporous](vaporous.html) class than trying to tweak Intangible.  
  
  
