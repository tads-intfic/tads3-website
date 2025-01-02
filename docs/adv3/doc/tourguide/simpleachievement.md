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
<td style="text-align: left;"><strong>SimpleAchievement : <a
href="achievement.html">Achievement</a><br />
</strong></td>
<td style="text-align: right;"><a href="achievement.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="awardpoints.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
SimpleAchievement is a subclass of Achievement with a construct method
added. This allows you to pass a string in a new SimpleAchievement
statement to be used as the description of the achievement for which
points are being awarded. This could be useful, for example, if we
wanted to award a point for finding each of the tablets. Instead of
coding this separately on each tablet object, we can write the code once
on the Tablet class. We'll award the points once when each tablet is
taken; to do this we override the actionDobjTake method to add a call to
addToScoreOnce(). But we want this called on a separate Achievement (or
rather, SimpleAchievement) object for each separate tablet. We can't use
the anonymous nested object syntax for that; if we wrote:  
  
class Tablet : Readable   
  desc = "\\\<\<theName\>\> is about eight inches square and an inch thick.  
   \<\<readDesc\>\>"     
  readDesc = "On it is inscribed:\b\<FONT FACE='TADS-Typewriter'\>\<\<inscription\>\>\</FONT\>\b"    
  bulk = 4  
  **achievement: Achievement { desc = "finding \<\<theName\>\>" } // this won't work**  
;  
  
We should end up with only one Achievement object for the whole class,
which wouldn't work at all the way we want it to. Instead we need to use
the **perInstance** macro to create a new instance of an Achievement
object for each instance of a Tablet object. But then we need to find a
way to make each Achievement object describe itself appropriately; using
the SimpleAchievement class, which allows us to pass a description
string in its constructor (i.e. as a parameter in a
new SimpleAchievement statement) provides just the solution we need:  
  
  
class Tablet : Readable   
  desc = "\\\<\<theName\>\> is about eight inches square and an inch thick.  
   \<\<readDesc\>\>"     
  readDesc = "On it is inscribed:\b\<FONT FACE='TADS-Typewriter'\>\<\<inscription\>\>\</FONT\>\b"    
  bulk = 4  
  **achievement = perInstance(new SimpleAchievement('finding ' + theName)) // this works just fine**  
  **dobjFor(Take)  
  {  
    action()  
    {  
      inherited;  
      achievement.addToScoreOnce(1);  
    }  
  }  
**;  
  
