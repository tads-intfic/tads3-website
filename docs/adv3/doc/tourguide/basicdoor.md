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
<td style="text-align: left;"><strong>BasicDoor: <a
href="basicopenable.html">BasicOpenable</a>, <a
href="throughpassage.html">ThroughPassage</a><br />
</strong></td>
<td style="text-align: right;"><a href="door.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="notravelmessage.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A BasicDoor encapsulates the behaviour common to both [Door](door.html)
and [SecretDoor](secretdoor.html) and their descendents, and is thus
intended as an abstract class containing the common behaviour of
door-like objects, rather than as a class that a game author would use
directly in a game. If you wanted to a special kind of door that didn't
fit either Door or SecretDoor (and their descendents) you might want to
derive it from this class.  
  
The framework provided by BasicDoor does the following:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Provides a getFacets routine which makes both sides of a BasicDoor
facets of each other (assuming one of the doors points to the other as
its other side).  <br />
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
<td width="14">·</td>
<td>Overrided makeOpen to keep both sides of a BasicDoor in sync with
each other when one side is opened or closed.  <br />
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
<td width="14">·</td>
<td>Provides routines for noting and describing a remote opening of the
door (to cope with the situation where a door is opened or closed from
the other side from that on which the player character is on).  <br />
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
<td width="14">·</td>
<td>Provides handling for executing TravelVia the BasicDoor  <br />
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
<td width="14">·</td>
<td>Boost the likelihood that this door is the object of commands like
LOCK or CLOSE if this is the last door-like object the PC has traversed.
 <br />
</td>
</tr>
</tbody>
</table>



  
