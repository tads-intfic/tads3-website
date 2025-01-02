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
<td style="text-align: left;"><strong>BasicOpenable: Linkable<br />
</strong></td>
<td style="text-align: right;"><a href="openable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="lightandfire-introduction.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
BasicOpenable is the base class for openable items. It defines the basic
behaviour for objects that can be opened and closed, but no special
handling for commands (such as OPEN and CLOSE) that might commonly be
used for openable objects. It is much more likely that you will use
subclasses of BasicOpenable (such as [Openable](openable.html),
[BasicDoor](basicdoor.html) and their subclasses) than BasicOpenable in
game code. It is conceivable that you might want to subclass a custom
kind of openable object from BasicOpenable, as it is conceivable that
you might want to implement a BasicOpenable object in a game for an
object that can be open and closed but not does respond to normal
opening and closing commands (e.g. because it can only be opened and
closed by pushing a button or pulling a lever), but these are left as
exercises for the interested reader. The chief importance of
BasicOpenable is that if defines the behaviour common to all its
descendants. The important properties and methods to know about are:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>initiallyOpen</strong>: set this to true if you want the
object to start out open. The default is nil.  <br />
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
<td><strong>isOpen()</strong>: use this method to determine whether the
object is open (true) or closed (nil), but do not overwrite this
property in game code to make an object open or closed; call makeOpen
instead.  <br />
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
<td><strong>makeOpen(stat)</strong>: call this method to open or close
the object programmatically, by calling makeOpen(true) or makeOpen(nil).
You can also override this method to bring about additional side-effects
of opening or closing the object, but if you do so be sure to remember
to call inherited(stat) somewhere in your overridden makeOpen(stat).
 <br />
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
<td><strong>openDesc()</strong>: the method/property that provides an
additional description to say whether the object is open or closed; the
English library defaults are "open" and "closed", which are good enough
for most purposes.  <br />
</td>
</tr>
</tbody>
</table>

|     |
|-----|
|     |
