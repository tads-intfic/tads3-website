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
<td style="text-align: left;"><strong>BasicChair : <a
href="nestedroom.html">NestedRoom</a><br />
</strong></td>
<td style="text-align: right;"><a href="nestedroom.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="platform.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
It is most unlikely that you would need to use the BasicChair class in
your game: it would represent something you could sit on but not put
anything on. However, it is important to discuss some of the features of
BasicChair that are inherited by Chair, Bed and Platform, and are hence
common to these classes that you most likely will use.  
  
The important properties to note on BasicChair are:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>allowedPostures</strong> - a list of the postures that are
allowed on this chair (out of a selection of <em>sitting</em>,
<em>standing</em>, and <em>lying</em>). For a chair this is normally
<em>sitting</em> and <em>standing</em>, but you could optionally
disallow standing (for example, if the chair is the back seat of a car)
or allow lying (for example, if the chair is a large settee). Beds and
platforms also allow lying by default, but again this can be changed.
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
<td><strong>obviousPostures</strong> - a list of the <em>obvious</em>
postures for this object. For a chair, this would normally be just
sitting, since although you can stand on a chair, this is not the
obvious posture to adopt on it.  <br />
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
<td><strong>defaultPosture</strong> - the posture adopted by default for
this object (in the case of a chair, this would be <em>sitting</em>).
 <br />
</td>
</tr>
</tbody>
</table>



  
  
