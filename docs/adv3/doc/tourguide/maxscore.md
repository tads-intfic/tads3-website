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
<td style="text-align: left;"><strong>maxScore<br />
</strong></td>
<td style="text-align: right;"><a
href="scoreranktable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="hints-overview.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
If you want to set the maximum score in your game manually, you will
need to override **gameMain.maxScore**:  
  
gameMain: GameMainDef  
        initialPlayerChar = me  
        scoreRankTable =  
        \[  
         \[ 0, 'a tourist'\],  
         \[ 5, 'a novice explorer'\],  
         \[ 10, 'a willing amateur'\],  
         \[ 15, 'an apprentice adventurer'\],  
         \[ 25, 'an accomplished adventurer'\],  
         \[ 40, 'a hero'\]  
        \]  
**    maxScore = 43**  
;  
  
However, it is possible to have the game calculate the maximum score
automatically, provided you follow certain rules in the way you award
points. These rules, as they are described in the library code comments,
are as follows:  
  
*You can use EXCLUSIVELY Achievement objects to represents scoring
items, and give each Achievement object a 'points' property indicating
the number of points it's worth. To award a scoring item, you call the
method awardPoints() on an Achievement object. If you use this style of
scoring, the library AUTOMATICALLY computes the gameMain.maxScore value,
by adding up the 'points' values of all of the Achievement objects in
the game. For this to work properly, you have to obey the following
rules:  
*

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><em></em>·<em></em></td>
<td><em>use ONLY Achievement objects (never strings) to award points;
 <br />
</em></td>
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
<td width="14"><em></em>·<em></em></td>
<td><em>set the 'points' property of each Achievement to its score;
 <br />
</em></td>
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
<td width="14"><em></em>·<em></em></td>
<td><em>define Achievement objects statically only (never use 'new' to
create an Achievement dynamically)  <br />
</em></td>
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
<td width="14"><em></em>·<em></em></td>
<td><em>if an Achievement can be awarded more than once, you must
override its 'maxPoints' property to reflect the total number of points
it will be worth when it is awarded the maximum number of times;  <br />
</em></td>
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
<td width="14"><em></em>·<em></em></td>
<td><em>always award an Achievement through its awardPoints() or
awardPointsOnce() method;  <br />
</em></td>
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
<td width="14"><em></em>·<em></em></td>
<td><em>there exists at least one solution of the game in which every
Achievement object is awarded</em> <em> <br />
</em></td>
</tr>
</tbody>
</table>



  
We have not followed these rules in this game (otherwise we should not
have been able to demonstrate the other ways of awarding points), so
this cannot be demonstrated here. Note, however, that there *may* be a
way of sorts round the last two restrictions in some cases. In
particular, if there are alternative routes through the game so that
points can be awarded (say) for doing either A or B but not both, then
you could award points for A using awardPoints() or awardPointsOnce, and
points for B by using addToScore or addToScoreOnce, and provided the
same number of points are awarded for A or B, then the automatic maximum
score calculation should still work.  
  
You also need to bear in mind the following rules about setting
maxScore:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>If you do not explicitly override gameMain.maxScore at all in your
game code, then the game will automatically calculate the maximum score
on the basis of the rules given above.  <br />
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
<td>If you explicitly set gameMain.maxScore to nil, then the game will
assume there is no defined maximum score, and the maximum score will not
be mentioned at all in response to the SCORE and FULL SCORE commands.
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
<td width="14">·</td>
<td>If you explicitly set gameMain.maxScore to a number, that number
will be used as the maximum score.  <br />
</td>
</tr>
</tbody>
</table>



  
