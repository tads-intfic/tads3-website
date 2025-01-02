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
<td style="text-align: left;"><strong>awardPoints<br />
</strong></td>
<td style="text-align: right;"><a
href="simpleachievement.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="awardpointsonce.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
As an alternative to calling [addToScore](addtoscore.html) or
[addToScoreOnce](achievement.html), you can call awardPoints or
[awardPointsOnce](awardpointsonce.html) on an Achievement object. This
then automatically awards the number of points associated with the
Achievement (i.e. defined in the points property of the Achievement
object). For example, to have the player awarded 2 points for disposing
of the demons, we might change the appropriate ShowTopic thus:  
  

    ++ GiveShowTopic @baarasRoot
       topicResponse
       {
         "As you produce the baaras root and hold it up before their demonic little
           eyes, it starts to glow an eerie pink colour...
          ...
          ...   they
          shimmer and dissolve, turning into plumes of oily black smoke which
          vanishes like a mist. ";
          demons.moveInto(nil);   
          achievement.awardPoints();   
       }
       
       achievement : Achievement { +2 "exorcizing the demons" }
    ;

  
  
Note that since the demons can only ever be exorcized once, we don't
need any checks to prevent the points being awarded several times over.
Otherwise, it would be more convenient to use
[awardPointsOnce](awardpointsonce.html). Note also the use of the
[Achievement template](achievementtemplate.html).  
  
So why do we need awardPoints and awardPointsOnce in addition to
addToScore and addToScoreOnce? There are two implications here:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="6"></td>
<td width="45">1.</td>
<td>With awardPoints and awardPointsOnce the Achievement object
determines the number of points awarded. With addToScore and
addToScoreOnce the function/method call determines the number of points
awarded.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="6"></td>
<td width="45">2.</td>
<td>Which set of methods you use can have implications for the
calculation of the <a href="maxscore.html">maximum score</a>.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |     |
|-----|-----|-----|
|     |     |     |

  
  
  
