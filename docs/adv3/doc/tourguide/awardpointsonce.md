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
<td style="text-align: left;"><strong>awardPointsOnce<br />
</strong></td>
<td style="text-align: right;"><a href="awardpoints.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="scoreranktable.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
In cases where you want to prevent points being awarded several times
for the same feat, you could use awardPointsOnce in preference to
[awardPoints](awardpoints.html) and as an alternative to
[addToScoreOnce](achievement.html).  
  
+++ bronzeBowl : Container 'bronze bowl/vessel' 'bronze bowl'   
  "It's of ancient and somewhat curious design, cast with two rows of  
    pomegranates all the way round the outside. "  
   bulkCapcity = 4  
   bulk = 5  
   weight = 5   
   **dobjFor(Take)  
   {  
     action()  
     {  
       achievement.awardPointsOnce();  
       inherited;  
     }  
   }  
   achievement : Achievement { +3 "recovering the bronze bowl" }  
**;  
  
Once again, note the use of the [Achievement
template](achievementtemplate.html) here.  
