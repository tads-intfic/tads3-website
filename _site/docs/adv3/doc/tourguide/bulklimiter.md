<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>BulkLimiter : <a
href="thing-thebasics.htm">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a
href="containers-introduction.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="surface.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
BulkLimiter is the common base class for containers and surfaces: things
that have limited bulk capacities. You probably won't have cause to use
this class directly; you'll usually use subclasses such as
[Surface](surface.htm) and [Container](container.htm) instead.  
  
BulkLimiter defines the following properties that are inherited by its
subclasses:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>bulkCapacity</strong> - the total aggregate bulk that can be
contained in this object (by default, 10000).  <br />
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
<td><strong>maxSingleBulk</strong> - the maximum bulk that any
individual item inserted into the BulkLimiter may have (by default 10).
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
<td><strong>revealHiddenItems</strong> - a flag that determines whether
any Hidden items will be revealed when this BulkLimiter's interior is
examined (i.e. when look in, under, or behind will cause the discover
method of any item of class <a href="hidden.htm">Hidden</a> to be
called). By default this is true, representing the fact that when we
look in, under or behind something we normally see what was there even
if we didn't before we looked; if desired this can be set to nil so that
<a href="hidden.htm">Hidden</a> items remain hidden.  <br />
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
<td><strong>tooFullMsg</strong> - The message that is displayed when
adding a new object would exceed the BulkLimiter's bulkCapacity. This
may be overridden on subclasses.  <br />
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
<td><strong>becomingTooFullMsg</strong> - the message property to use
when doing something to one of our contents would cause our overall
contents to exceed our capacity.  <br />
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
<td><strong>becomingTooLargeMsg</strong> - the message property to use
when doing something to one of our contents would make it too large to
fit all by itself into this container (that is, it would cause that
object's bulk to exceed our maxSingleBulk).  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
BulkLimiter also overrides the
[notifyInsert()](notifyinsert+notifyremove.htm) method to check whether
an object will fit into BulkContainer (which it won't if either the
aggregate bulkCapacity or the individual maxSingleBulk would be exceeded
by the insertion).  
  
  
