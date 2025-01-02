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
<td style="text-align: left;"><strong>scoreRankTable<br />
</strong></td>
<td style="text-align: right;"><a
href="awardpointsonce.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="maxscore.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Many games not only display a score, they translate that score into a
rank, along the lines of  
  
"Your score is 0 of a possible 10, in 0 moves. This makes you a tourist.
"  
  
To get TADS 3 to do this you need to set up a **scoreRankTable** on the
**gameMain** object, for example:  
  
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
;  
  
  
Note how this works: the scoreRankTable is a list, each element of which
is itself a list of two elements, a number and a single-quoted string.
The number is the minimum score needed to reach the rank described in
the string. These two-element sublists *must* be arranged in ascending
order of score.  
  
