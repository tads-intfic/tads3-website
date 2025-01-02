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
<td style="text-align: left;"><strong>Achievement : object<br />
</strong></td>
<td style="text-align: right;"><a href="addtoscore.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="simpleachievement.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Using addToScore is fine where we can easily make sure that it will be
called only once, but in some situations this becomes harder to
guarantee.  
  
For example, the player should probably be rewarded for getting the door
into the museum corridor open, since this is a puzzle that takes several
steps to solve, but if we just put addToScore in, say,
blankSteelDoor.makeOpen(), then players could keep adding to their score
by repeatedly opening the blank steel door once they'd worked out how to
[fix the button](attachable.html). We *could* prevent this by adding a
hasBeenOpened property to the blankSteelDoor, setting it to true when
the door is opened, and only calling addToScore if hasBeenOpened is nil.
But it would be nice if there was an addToScoreOnce function that
effectively did this for us. Well, there's no such *function*, but there
is always the **addToScoreOnce(points)** *method* of the Achievement
class, and we could always use that.  
  
This does mean, of course, that we need to set up an Achievement object
for the purpose, but there's no reason why this shouldn't simply be an
anonymous nested object, so that, for example, we could get the result
we wanted by modifying blankSteelDoor thus:  
  
+ blankSteelDoor : Door 'blank steel door' 'blank steel door'  
  "The door \<\<isOpen ? 'has slid open out of sight' : 'is without handle,   
   keyhole or any other visible mechanism'\>\>"  
   openStatus {  }  
   checkDobjOpen() { "There's nothing on the door to get a purchase on. "; exit; }      
   checkDobjClose() { "The door has slid out of sight. "; exit; }     
   makeOpen(stat)  
   {  
     inherited(stat);  
     **achievement.addToScoreOnce(3);**  
     "The steel door slides \<\<isOpen ? 'open' : 'shut'\>\>. ";       
   }  
   **achievement : Achievement { "opening the blank steel door" }  
**;  
  
This will increase the player's score by three points the first time the
player manages to get the blank steel door open, but not thereafter.  
  
At this point it may be helpful to take a closer look at the properties
and methods the Achievement class defines:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>desc</strong> - Describe the achievement - this must display
a string explaining the reason the points associated with this
achievement were awarded. Note that this description can make use of the
scoreCount information to show different descriptions depending on how
many times the item has scored. For example, an achievement for finding
various treasure items might want to display "finding a treasure" if
only one treasure was found and "finding five treasures" if five were
found. In some cases, it might be desirable to keep track of additional
custom information, and use that information in generating the
description. For example, the game might keep a list of treasures found
with the achievement, adding to the list each time the achievement is
scored, and displaying the contents of the list when the description is
shown.  <br />
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
<td><strong>scoreCount</strong> - The number of times the achievement
has been awarded. Each time the achievement is passed to addToScore(),
this is incremented. Note that this is distinct from the number of
points.  <br />
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
<td><strong>totalPoints</strong> - the number of points awarded for the
achievement; if this achievement has been accomplished multiple times,
this reflects the aggregate number of points awarded for all of the
times it has been accomplished.  <br />
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
<td><strong>addToScoreOnce(<em>points</em>) -</strong> Add this
achievement to the score one time only. This can be used to score an
achievement without separately tracking whether or not the achievement
has been accomplished previously. If the achievement has already been
scored before, this will do nothing at all; otherwise, it'll score the
achievement with the given number of points.  <br />
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
<td><strong>points</strong> - the number of points awarded for this
Achievement if either its <a href="awardpoints.html">awardPoints</a> or
its <a href="awardpointsonce.html">awardPointsOnce</a> method is called.
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
<td><strong>maxPoints</strong> - the maximum number of points that can
be awarded for this Achievement if its points can be awarded for it more
than once. By default this is simply the same as <em>points</em>. This
figure is used by the library routine that calculates the <a
href="maxscore.html">maximum score</a>.  <br />
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
<td><strong>awardPoints()</strong> - adds this Achievement to the list
of Achievements accomplished, and awards the number of points contained
in its <em>points</em> property (which <em>must</em> then be overridden
to something other than nil).  <br />
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
<td><strong>awardPointsOnce()</strong> - this is the same as
awardPoints, except that the points are awarded only the first time this
method is called (so that you would typically use this method like
addToScoreOnce, which it in fact calls, to ensure that the player is not
awarded points multiple times for the same achievement).  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
You'll see from this that an Achievement object is geared up to the
possibility of awarding points for the same achievement more than once.
The situation where you'd mostly likely want to do this is in
aggregating points for similar feats under a common generic description,
such as:  
  
23 points for finding sundry items  
  
Rather than listing the twenty-three sundry items separately at one
point each.  
  
In the present game, we might want to define such an aggregating
achievement for getting past sundry minor obstacles:  
  
obstacleAchievement : Achievement  
  desc = "getting past \<\<scoreCount \> 1 ? spellInt(scoreCount) +   
   ' sundry obstacles' : 'an obstacle'\>\>. "  
;  
  
Then we can employ this obstacleAchievement at each place in the code
where we want to reward the player for getting past a minor obstacle, by
calling addToScore(*points*, obstacleAchievement); though now we have to
make sure that we call this only once for each obstacle; for example:  
  
secretPassage : Room 'Secret Passage' 'the secret passage'  
  "This hitherto secret passage narrows to a long tunnel running north. To the  
   south \<\<rock2.isOpen ? 'an opening leads out into a large, ruddy-hued cave'  
    : 'a large rock blocks the way out'\>\>. "    
  south = rock2  
  north = tunnel  
  brightness = (rock2.isOpen ? 3 : 0)  
  **enteringRoom(traveler)  
  {  
    if(!seen) addToScore(1, obstacleAchievement);       **  
**  }  
**;  
  
crewQuarters : DarkCabin 'Crew Quarters' 'the crew quarters'  
   ...  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td>enteringRoom(traveler)  <br />
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
<td width="14"></td>
<td>  {  <br />
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
<td width="14"></td>
<td>   darkEvents.curScriptState = 1;    <br />
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
<td width="14"></td>
<td>   <strong>if(!seen) addToScore(1, obstacleAchievement);</strong>
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
<tr data-valign="TOP">
<td width="14"></td>
<td>  }  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

;  
  
hellPath : OutdoorRoom 'Path down Hell Fire Cavern' 'the path'  
   ...  
  **enteringRoom(traveler)  
   { if(!seen) addToScore(2, obstacleAchievement); }**  
;  
  
chasmLedge : DarkRoom 'Ledge of Chasm' 'the ledge of the chasm'  
  "A deep, wide chasm splits the ground immediately to the north of this  
   narrow ledge, while a dark tunnel runs south. Another tunnel can be   
   seen leading north from the far side of the chasm. "  
  north = deepChasm  
  south = tunnelFromChasm  
  inRoomName(pov)   
  {   
    return 'on the ' + (pov.isIn(deepChasm) ? 'south' : 'far') + ' ledge of the chasm';   
  }  
  **enteringRoom(traveler)  
  { if(!seen) addToScore(1, obstacleAchievement); }   
**;  
  
museum : Room 'Museum of Curious Antiquities' 'the main museum'  
    ...  
   **enteringRoom(traveler)  
  { if(!seen) addToScore(1, obstacleAchievement); }  
**;  
  
templeCellar : DarkRoom 'Cellar beneath Temple' 'the cellar beneath the Temple'  
  "This long, damp cellar probably hasn't been visited in years. "  
   ...  
   **enteringRoom(traveler)  
     { addToScore (1, obstacleAchievement); }  
**;  
  
  
Of course some of the obstacles are more noteworthy and would definitely
deserve their own individual achievements, along the lines we have
already seen, such as:  
  
+ Lever, Component 'banana-shaped banana shaped projection' 'banana-shaped projection'  
   "Protruding from the north side of the altar, the banana-shaped projection is  
    its only decorative feature. "  
   makePulled(pulled)  
   {  
     if(stoneAltar.getWeight != 54)  
     {  
       reportFailure('It won\\t budge. ');         
       exit;  
     }  
     else if(pulled)       
       "With a loud grating sound, the wall behind the altar grinds open. ";       
     else  
       "When you push the lever, the wall behind the altar grinds shut. ";  
     inherited(pulled);    
     templeWestWall.makeOpen(pulled);  
     **achievement.addToScoreOnce(5);  
**   }   
   weight = 0    
   **achievement : Achievement { "opening the wall behind the altar " }  
**;  
  
Note that we have used the [Achievement
Template](achievementtemplate.html) in these definitions.  
  
  
  
  
  
  
  
  
  
  
  
  
