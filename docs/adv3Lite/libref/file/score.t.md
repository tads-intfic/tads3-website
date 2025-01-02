---
layout: docs
---
<span class="title">score.t</span><span class="type">file</span>

[source file](../source/score.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



Lightly adapted for adv3Lite by Eric Eve

TADS 3 Library - scoring

This module defines objects related to keeping track of the player's
score, which indicates the player's progress through the game.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`Achievement`](../object/Achievement.html)[`SimpleAchievement`](../object/SimpleAchievement.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`fullScoreLister`](../object/fullScoreLister.html)[`libScore`](../object/libScore.html)[`scoreNotifier`](../object/scoreNotifier.html)[`scoreNotifySettingsItem`](../object/scoreNotifySettingsItem.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`addToScore`](#addToScore)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="addToScore"></span>

`addToScore (points, desc)`

[score.t](../file/score.t.html)\[[327](../source/score.t.html#327)\]



Add points to the total score. This is a convenience function that
simply calls libScore.addToScore\_().





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


