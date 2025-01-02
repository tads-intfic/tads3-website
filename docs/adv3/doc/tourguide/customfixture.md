<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>CustomFixture : <a
href="fixture.htm">Fixture</a><br />
</strong></td>
<td style="text-align: right;"><a href="fixture.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="decoration.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A CustomFixture is simply a fixture that uses the same custom message
for taking, moving, and putting. In many cases, it's useful to customize
the message for a fixture, using the same custom message for all sorts
of moving. Just override **cannotTakeMsg**, and the other messages will
copy it.  
  
We haven't yet reached the point in our game where we need a
CustomFixture, but we'll eventually use one to represent the pillars in
a [temple](lever.htm#temple).  
  
See also the similar but subtly different
[CustomImmovable](customimmovable.htm).  
