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
<td style="text-align: left;"><strong>SpecialTopic : <a
href="topicentry.html">TopicEntry</a>, <a
href="suggestedtopictree.html">SuggestedTopicTree</a><br />
</strong></td>
<td style="text-align: right;"><a href="notopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="initiateconversation.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
So far we have seen how we can allow the player to respond YES or NO to
Sarah's question, but what if we want to respond with something else
that doesn't fit into the ASK/TELL/GIVE/SHOW paradigm?  
  
The answer is to use a SpecialTopic, which can respond to any string we
care to define. Basically this works by providing the SpecialTopic with
a keywordList containing a list of the words you want it to match. The
special topic will match user input if the user input consists
exclusively of words from this keyword list. The user input doesn't have
to include all of the words defined here, but all of the words in the
user's input have to appear here to match. So for example, if we
defined:  
  
keywordList = \['lie', 'through', 'thru' ,'your', 'teeth'\]  
  
The SpecialTopic would match LIE THROUGH YOUR TEETH or LIE THRU TEETH or
simply LIE.  
  
Note that you can have more than one SpecialTopic in the same ConvNode
that shares some of the same vocabulary, e.g.:  
  
keywordList = \['gnash', 'your', 'teeth'\]  
  
And both topics would work fine provided the player types enough words
to determine which one is meant (e.g. LIE TEETH or GNASH TEETH), but if
the only words typed are common to both SpecialTopics (in this case a
command consisting of just TEETH) neither SpecialTopic will be matched
and the game will treat what the player typed as a standard command. So
if you do devise multiple SpecialTopics under the same ConvNode you need
to treat overlapping wording with some care. In the example just given
it would be rather perverse for the player to type simply TEETH, so
you'd probably be okay; what you do need to avoid is any ambiguity in a
SpecialTopic response a player might reasonably type.  
  
Of course players can't be expected to *guess* the special phrasing
you've devised for your SpecialTopics, so the library automatically
treats every SpecialTopic as a SuggestedTopic and displays its name
property as a prompt to the player, following the phrase "You could ".
For example, for the two cases above you might define:  
  
name = 'lie through your teeth'  
  
and  
  
name = 'gnash your teeth'  
  
Then when the ConvNode is entered, the player will be prompted with:  
  
"(You could lie through your teeth, or gnash your teeth.)  
  
It follows that you want the name property to contain something that
makes sense after "You could "  
  
The SpecialTopic template simplifies these definitions by allowing you
to define a SpecialTopic as:  
  
SpecialTopic 'name' \[keywordList\]  
  "topicReponse"  
;  
  
So you could define these two SpecialTopics thus:  
  
++ SpecialTopic 'lie through your teeth' \['lie', 'through', 'thru', 'your', 'teeth'\]  
   "\<q\>I've never even set eyes on Mabel!\</q\> you declare.\b  
    \<q\>I don't believe you!\</q\> he snarls.  
;  
  
++ SpecialTopic 'gnash your teeth'  \['gnash', 'your', 'teeth'\]  
  "You gnash your teeth in frustration at his wild accusations  
   while he glowers at you in mounting fury.\b  
   \<q\>Answer my question, damn you!\</q\> he cries \<.convstay\> "  
;  
  
But since these aren't relevant to our game, we'll define one that is.
Suppose that in addition to replying 'yes' or 'no' to Sarah's question
about cutting open the glass case, we want to allow the player to ask
her what she thinks. In this case we *could* define an adviceTopic:
Topic with vocabulary such as 'advice/opinion' and then use an
AskForTopic @adviceTopic. And in this case it might even be a simpler
way of doing it! But to show how SpecialTopic works we'll do it the hard
way with a SpecialTopic (which should be put in the same ConvNode as the
NoTopic and YesTopic we've just defined; incidentally it's because a
SpecialTopic always acts like a SuggestedTopic that we have made the
NoTopic and YesTopic SuggestedTopics as well, so that the player can see
that saying YES or NO are also valid options at this point):  
  
++ SpecialTopic, StopEventList 'ask what she thinks'   
    \['ask', 'her', 'sarah', 'what', 'she', 'thinks', 'do' , 'you', 'think'\]  
    \[  
      '\<q\>What do you think?\</q\> you ask.\b  
       {The sarah/she} walks over to the case, raises her hand as if to  
       start cutting it with her ring, but then pauses, peering down at   
       the plinth and  
       running her hand along its carved decorative slat. She turns to  
       you with a worried frown and says, \<q\>I think something\\s wrong.  
       Are you sure you want me to go ahead with this?\</q\>\<.convstay\> ',  
      '\<q\>What do you think is wrong?\</q\> you wonder,\b  
       \<q\>I\\m not sure,\</q\> she admits, \<q\>Just \<i\>something\</i\>  
        about this case. But maybe I\\m just being silly.  
       So, do you want me to go ahead and cut it open?\</q\>\<.convstay\> ',  
      '\<q\>What is it about the case that\\s worrying you?\</q\> you ask.\b  
       \<q\>I can\\t quite put my finger on it,\</q\> she frowns, absently  
       running her hand along the decorative slat round the polished oak  
       plinth, \<q\>So shall I just go ahead and cut it open anyway?\</q\>  
       \<.convstay\>'   
     \]  
;  
  
+++ AltTopic, StopEventList  
 \[  
     '\<q\>Do you think we should?\</q\> you ask.\b  
     \<q\>Yes, let\\s go for it!\</q\> she enthuses,   
     \<q\>So, shall I?\</q\> \<.convstay\>',       
     '\<q\>Do you really think we should?\</q\> you ask.\b  
      \<q\>Yes, I just said so!\</q\> she reminds you,   
      \<q\>So what do you say?\</q\>\<.convstay\>'  
 \]  
 isActive = (microphone.attachedObjects.indexOf(stickingPlaster))  
;  
  
Note that although players will see the prompt "(You could ask what she
thinks.)" the chances are that at least half of them won't suppose they
have to follow the exact wording of the prompt, so we have to make sure
our list of words in our keywordList covers all the things they're
likely to type, including ASK HER WHAT SHE THINKS, ASK SARAH WHAT SHE
THINKS and WHAT DO YOU THINK? Hence the list of keywords we supply here
(though we don't need to worry about players ending the command with,
say, a question-mark, since that's taken care of automatically).  
  
The idea of the example above is that if the player does ask Sarah what
she thinks, she gives a fairly good hint whether it's safe to proceed,
and even a bit of a hint why it isn't if it isn't. The test in the
topicResponse() method is for whether the sticking plaster is attached
to the microphone. The idea is that, if it is, it will stop the
microphone picking up the sound of the glass being cut, which will
otherwise sound the alarm and bring the curator running in to
investigate, which is why we set the objects up the way we did when [we
first created the Benefactors' Room](collectivegroup.html).  
  
One point that may occur to you (or that you may in time discover) about
SpecialTopics is that at least some players will be tempted to use them
in inappropriate ways. That is, having once seen a prompt "ask what she
thinks" as a possible response to a question, they may try to use it in
other contexts as well, when it is no longer valid. Prior to version
3.0.8 TADS's response to this was potentially quite misleading, along
the lines of "The word 'thinks' is not necessary in this game" or "The
story doesn't understand that command." TADS 3.0.8 improves on this
considerably by displaying the rather more accurate and informative
message "That command can't be used right now." In order to do this the
parser keeps track of a number of the most recent SpecialTopics command
phrases displayed, and shows the "That command can't be used right now"
if the inappropriate command matches one of these. The number of such
SpecialTopic command phrases to be retained is held in the
**maxEntries** property of the **specialTopicHistory** object. By
default this number is set to 20, which will normally suffice for most
games (since few players will remember more than the last 20
SpecialTopic command phrases displayed, while the number is not so large
as to make a significant impact on performance). But if you like, you
can set it to some other value; if you set it to nil, instead of
checking against the most recent list the parser will scan *all* the
SpecialTopics in the game (regardless of whether they've yet been
suggested or not).  
