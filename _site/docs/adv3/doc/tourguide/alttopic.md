<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>AltTopic : <a
href="topicentry.htm">TopicEntry</a><br />
</strong></td>
<td style="text-align: right;"><a
href="giveshowtopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="initiatetopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
We use AltTopic topic to provide one or more alternative responses to
conversational commands (ASK ABOUT, ASK FOR, TELL ABOUT, SHOW TO, GIVE
TO) depending on some condition specified in the AltTopic's isActive
property. AltTopics are nested within their corresponding TopicEntry,
and the order in which they appear is significant: the last entry for
which isActive is true is the one that is used. For example, supposed
one had this structure:  
  
bob : Person 'bob' 'Bob'  
  ...  
;  
   
+ bobTalking : InConversationState  
  ...  
;  
  
++ ShowTopic @letter  
    "Bob glances at the envelope and then pushes it away, \<q\>I don't read other people's correspondence\</q\>  
     he says."  
;  
  
+++ AltTopic  
    "Bob snatches the letter from your grasp and peruses it eagerly before handing it back.  
    \<q\>My goodness!\</q\> he declares.  
    isActive = (gRevealed('exciting-scandal'))  
;  
  
+++ AltTopic  
   "Bob stares at the letter disdainfully. \<q\>That's not much use now...\</q\> he complains."  
   isActive = (letter.isTorn)  
;  
  
If we show the letter to bob when letter.isTorn is nil and the exciting
scandal is yet to be revealed, then we'll see the "Bob glances at the
envelope and pushes it away" response. If somewhere in the game
\<.reveal exciting-scandal\> or gReveal('exciting-scandal') has been
used, but letter.isTorn is still nil, then we'll see the "Bob snatches
the letter from your grasp" response. If, however, letter.isTorn is
true, we'll see the "Bob stares at the letter disdainfully" response
regardless of the value of gRevealed('exciting-scandal').  
  
Let's now put this to good use with Sarah, the ring, and the diamond:  
  
++ GiveShowTopic @diamond  
  "{The sarah/she} studies the gem carefully, \<q\>That certainly looks like it could  
   be the diamond from my ring,\</q\> she decides, \<q\>But where's the ring?\</q\>  
   \<.reveal diamond-shown\>"  
;  
  
+++ AltTopic  
  "\<q\>Yes, I think that's the diamond.\</q\> she nods eagerly, \<q\>Have you tried  
   whether it fits the ring?\</q\>"  
   isActive = gRevealed('ring-shown')  
;   
  
++ GiveShowTopic @ring  
  "{The sarah/she} nods eagerly, \<q\>Yes, that's my ring!\</q\> she declares, but then  
   her hand flies to her mouth, \<q\>But - oh my goodness - the diamond is missing!\</q\>  
   \<.reveal ring-shown\>"  
;  
  
+++ AltTopic   
  "\<q\>That's my ring, all right!\</q\> {the sarah/she} declares, \<q\>But you haven't  
   fitted the diamond!\</q\>"  
   isActive = gRevealed('diamond-shown')  
;  
  
The sequence of responses if the player shows first the ring, then the
diamond, and then the reassembled ring to Sarah (and then finally gives
her the ring) may not be absolutely perfect, but it's now starting to
get within the bounds of the tolerable, and improving on it further can
be left as yet another exercise for the dedicated reader: the first step
would probably be to replace the single responses with EventLists; you
might also want to test gRevealed('ring-shown') and
gRevealed('diamond-shown') on the diamondRing GiveTopic and ShowTopic.  
  
A little way back we provided a slightly complex GiveTopic to allow the
player character to hand Sarah a gas mask. We need her to accept one gas
mask, but not both of them, so it would be good to provide an AltTopic
that makes Sarah decline the second gas mask if she already has the
first. We can achieve this by checking whether anything in Sarah's
inventory is of class GasMask, but to do that we need to make isActive a
slightly more complex method than normal:  
  
++ AltTopic  
  "\<q\>No thanks,\</q\> she declines, \<q\>I think one gas mask's enough for anyone,   
  don't you?\</q\> "  
  isActive  
  {  
    foreach(local obj in getActor.contents)  
      if(obj.ofKind(GasMask))  
        return true;  
    return nil;  
  }  
;    
  
Obviously, this should go straight after the relevant GiveTopic.  
  
