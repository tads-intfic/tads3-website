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
<td style="text-align: left;"><strong>Scoring - Overview<br />
</strong></td>
<td style="text-align: right;"><a
href="defaultconsulttopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="addtoscore.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
In some, though not all, games you may want to keep the score, awarding
points for various achievements, and notifying players how they're
getting on by showing their current score in relation to the maximum
score available. In addition you may want to assign a descriptive rank
(e.g. from 'novice' to 'hero') to the player depending on the score
currently attained. In addition, you may want players to be able to see
how their score is made up, with a list containing the scores for
individual achievements, and aggregate scores for related achievements
(such as finding the different members of a set of related items).  
  
The TADS 3 library allows you to do all this fairly simply. You can
change the player's score with a simple [addToScore](addtoscore.html)
statement at any point, or use [Achievement](achievement.html) objects to
help keep track of the point they've earned. For aggregating scores for
similar feats under a common description, the
[SimpleAchievement](simpleachievement.html) class can be useful. Finally,
you can set up a [scoreRankTable](scoreranktable.html) to translate
scores into descriptive ranks (e.g. "This makes you a mere blundering
novice/fantastic superhero") and define the [maximum
score](maxscore.html) attainable.  
  
  
