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
<td style="text-align: left;"><strong>Containers - Introduction<br />
</strong></td>
<td style="text-align: right;"><a href="wearable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="bulklimiter.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
For the purposes of our guided tour of the TADS 3 library, "containers"
include every type of physical object that can physically contain
another in some way, not only in the obvious sense that the contained
object is inside the container, but also where it is on, under or behind
the container.  
  
Another way of defining containers in the TADS 3 library is as
descendants of the BulkLimiter class:  
  
[BulkLimiter](bulklimiter.html)  
   [BasicContainer](basiccontainer.html)  
      [Container](container.html)  
         [Booth](booth.html)  
         [Dispenser](dispenser.html)  
            [Matchbook](matchstick+matchbook.html)  
      [OpenableContainer](openablecontainer.html)  
         [KeyedContainer](keyedcontainer.html)  
         [LockableContainer](lockablecontainer.html)  
      [RestrictedContainer](restrictedcontainer.html)  
      [SingleContainer](singlecontainer.html)  
      [StretchyContainer](stretchycontainer.html)  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="57"></td>
<td><a href="spaceoverlay.html">SpaceOverlay</a>  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="100"></td>
<td><a href="rearcontainer.html">RearContainer</a>  <br />
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
<tr data-valign="TOP">
<td width="100"></td>
<td>      <a href="rearsurface.html">RearSurface</a>  <br />
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
<tr data-valign="TOP">
<td width="100"></td>
<td><a href="underside.html">Underside</a>  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

    [Surface](surface.html)  
      [Bed](bed.html)  
      [Chair](chair.html)  
      [Platform](platform.html)  
         [NominalPlatform](nominalplatform.html)  
  
Some of these will be left to later chapters, since they inherit from
other classes we haven't dealt with yet (e.g. Bed, Chair and Platform
are all types of [NestedRoom](nestedroom.html), which we'll deal with
later, and we'll need to delay discussion of
[KeyedContainer](keyedcontainer.html) until we discuss locks and keys in
the next chapter). In the present chapter we'll cover the simpler kind
of containers. We'll also be covering the following functionally related
classes:  
  
   [ComplexComponent](complexcontainer.html)  
   [ComplexContainer](complexcontainer.html)  
  
  
  
  
  
