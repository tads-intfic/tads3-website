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
<td style="text-align: left;"><strong>CustomImmovable : <a
href="immovable.html">Immovable</a><br />
</strong></td>
<td style="text-align: right;"><a href="immovable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="heavy.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A CustomImmovable is an Immovable that uses the same custom message for
taking, moving, and putting. In many cases, it's useful to customize the
message for an immovable, using the same custom message for all sorts of
moving. Just override **cannotTakeMsg**, and the other messages will
copy it.  
  
At first sight this makes a CustomImmovable look identical in function
to a [CustomFixture](customfixture.html); there is, however, a subtle
difference. This is, of course, the same as the difference between an
Immovable and a Fixture, namely that while the library regards an
attempt to move, push or take a Fixture as illogical (i.e. ruled out in
the verify method), it merely disallows taking an Immovable (in the
action method). The main practical effect of this is that a
CustomFixture will not be considered as a possible candidate for a move,
take or push action in disambiguation, while a CustomImmovable will.
CustomFixture should therefore be used for things that obviously can't
be moved around (like pillars in a temple), while CustomImmovable should
be used for things that perhaps could be taken, but in fact cannot be
(like the carpet in the [Immovable](immovable.html) example, which could
just as well have been a CustomImmovable). We'll give another example of
a CustomImmovable [later](cycliceventlist.html).  
  
  
