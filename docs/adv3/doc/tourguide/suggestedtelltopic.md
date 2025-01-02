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
<td style="text-align: left;"><strong>SuggestedTellTopic : <a
href="suggestedtopic.html">SuggestedTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="suggestedasktopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="suggestedgivetopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A SuggestedAskTopic is the particular type of
[SuggestedTopic](suggestedtopic.html) that prompts the player to Tell
About such-and-such a thing.  
  
For example, you might want to tell Sarah about the rockfall blocking
the obvious way back out:  
  
+ TellTopic, SuggestedTellTopic, StopEventList @tRockfall  
   \[  
     {: "\<q\>We won't get out the way we came it,\</q\> you warn her, \<q\>I'm  
        afraid there's just been a rockfall, blocking the way back out  
        to the outside world!\</q\> \<\<sarah.setKnowsAbout(tRockfall)\>\>\b  
        \<q\>Oh wonderful!\</q\> {the sarah/she} declares, as if it was your  
        fault. " },  
     '\<q\>The way out back through the caves is blocked by a rockfall.\</q\>  
       you say.\b  
      \<q\>Yes, you already told me.\</q\> she reminds you. '           
   \]       
   timesToSuggest = 1  
   name = 'the rockfall'  
   isActive = entranceTunnel.blocked  
;  
  
tRockfall : Topic 'rockfall' sarahKnowsAbout = nil;  
  
Note that we set timesToSuggest here because we overrode it on
[SuggestedTopic](suggestedtopic.html) to be the length of the list, but
here only the first response is really worth seeing. In case at a later
date we want any of Sarah's responses to depend on whether she knows
about the rockfall or not, we call sarah.setKnowsAbout(tRockfall),
although since Sarah is likely to be the only NPC interested in this we
could perhaps more simply have used \<.reveal rockfall\>, which we could
test with gRevealed('rockfall'). We also set isActive so that the player
character can't talk about the rockfall before it happens. Note finally
that we also need to define the tRockfall Topic; be careful not to mix
this is with the TopicEntries, which might upset the location nesting
tree.  
  
  
