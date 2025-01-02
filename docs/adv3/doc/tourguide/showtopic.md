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
<td style="text-align: left;"><strong>ShowTopic : <a
href="showtopic.html">GiveShowTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="givetopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="giveshowtopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A ShowTopic is very similar to a GiveTopic, except that it handles the
SHOW TO command rather than the GIVE TO command. We might, for example,
use it to display a different response if the player character merely
shows Sarah her lost diamond ring rather than returning it to her:  
  
++ ShowTopic @diamondRing  
   "{The sarah/she} inspects the ring then looks up at you, \<q\>Yes, that's my ring!\</q\>  
    she declares, \<q\>May I have it, please?\</q\>"  
;  
  
Note that in this case, the topicResponse is simply a double-quoted
string, which the TopicEntry template can cope with, so we don't need to
write out topicEntry as an explicit method. However, in this case the
response is a bit too simplistic, since Sarah will keep repeating the
response each time she's shown the ring. It would be better if we used,
say, a StopEventList to show a sequence of responses if the player
character keeps showing Sarah the ring without giving it to her:  
  
++ ShowTopic, StopEventList @diamondRing  
   \[  
    '{The sarah/she} inspects the ring then looks up at you, \<q\>Yes, that\\s my ring!\</q\>  
    she declares, \<q\>May I have it, please?\</q\>',  
    '\<q\>I think we\\ve already established that\\s my ring.\</q\> she points out, \<q\>I\\d  
     like it back now, please.\</q\>',  
    '{The sarah/she} holds out her hand to you with a look of one doing her best to  
     bear patiently with someone unusually slow of understanding. '  
   \]  
;  
  
On the other hand, perhaps we can get away with one response should the
player show the carbuncle to the curator:  
  
++ ShowTopic @carbuncle  
  "{The curator/he} stares at the carbuncle in your hand, \<q\>Is that what I think  
   it is?\</q\> he wonders, \<q\>May I have a closer look?\</q\>"  
;  
  
You may recall a little way back we left the path down into Hellfire
Cavern blocked by a nasty bunch of demons. The Baaras root Solomon is
busily studying is meant to be good for disposing of demons (or so
Josephus tells us), so perhaps showing it to the demons will do the
trick:  
  
++ GiveShowTopic @baarasRoot  
   topicResponse  
   {  
     "As you produce the baaras root and hold it up before their demonic little  
      eyes, it starts to glow an eerie pink colour. \<q\>Begone foul fiends!\</q\> you  
      cry, \<q\>By the power of Solomon's Baaras Root, and with the incantation he  
      forgot to teach me - er - I banish all evil spirits, all demons and creatures unclean,  
      into the Almighty Garbage Collection routine whence no Dangling Reference shall   
      ever return!\</q\>\b  
      \<q\>Ah no! Mandragora Maxima!\</q\> cries one of the demons.\n  
      \<q\>Eek no! The forgotten incantation!\</q\> shrieks another.\n  
      \<q\>Fie and double discombobulation, the Almighty Garbage Collector!\</q\> squeals  
       another.\n  
      \<q\>RunDaemon, RunDaemon!\</q\> yells a fourth.\b  
      As the demons turn in terror and try to flee, the Baaras root  
      grows ever brighter in your hand, shedding its piercing pink rays over the  
      demonic horde, so that even as they start to clamber down the slope they   
      shimmer and dissolve, turning into plumes of oily black smoke which  
      vanishes like a mist. ";  
      demons.moveInto(nil);        
   }  
;  
  
On the other hand, showing them the banana will get them worked up for
other reasons:  
  
++ ShowTopic @goldenBanana  
  "As you hold up the Golden Banana of Discord for the demons to see they   
   become very excited indeed. \<q\>Give us our Banana back!\</q\> they cry,  
   \<q\>Yes, we have no banana, we want our banana today!\</q\> they sing,  
   \<q\>Gimme! Gimme! Gimme!\</q\> they insist.\b  
   \<q\>Pretty please?\</q\> one of them adds plaintively. "  
;  
  
Since showing the Baaras root to the demons clears them out of the way,
we ought to code the locations the player character will then be able to
reach:  
  
basaltPlain : OutdoorRoom 'Basalt Plain' 'the basalt plain'  
  "To the north this rough, grey basalt plain is bordered by the fiery volcano;  
   to the south it comes to the end at a steep rocky slope, which can be ascended  
   by means of steep stone steps. Progress across the bleak plain looks difficult,  
   since the ground is broken, pitted and uneven. "  
  south asExit(up)  
  north = baseOfVolcano  
  east : FakeConnector { "You struggle a few dozen yards to the east, but the effort  
    seems so unrewarding that you quickly turn back. " }  
  west : FakeConnector { "You stumble over the broken ground to the west, but there  
    doesn't appear to be anything interesting in that direction so you quickly  
    abandon the attempt as futile. " }  
  up = basaltPathUp  
;  
  
+ basaltPathUp : StairwayUp -\> hellPathDown 'stone upward up steps' 'steep stone steps'  
 isPlural = true  
;  
  
baseOfVolcano : OutdoorRoom 'Base of Volcano' 'the base of the volcano'  
  "The harsh basalt plain to the south comes to the end at the base of a  
   volcanic mountain that's busily belching flames and smoke. A narrow path  
   leads uninvitingly up the side of the volcano. "  
  south = basaltPlain  
  north asExit(up)  
  up = volcanoPath  
;  
  
+ volcanoPath : StairwayUp -\>volcanoPathDown 'narrow up path' 'narrow path up'  
;  
  
At this point you might want to add these two new rooms to the Distant
volcano object's locatiobList:  
  
MultiLoc, Distant 'mount volcano/gloom' 'volcano'  
   "The volcano rises up from the basalt plain like an angry sore, belching fumes,  
    smoke and occasional balls of lava, which spit from the summit and ooze  
    pus-like down its rugged slopes. "  
   locationList = \[hellFireCavern, hellPath, **basaltPlain, baseOfVolcano**\]  
;  
  
Note at this point we have finally connected up the full path to the
lava pool where the Golden Banana of Discord is to be destroyed.  
  
