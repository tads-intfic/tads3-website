---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>



[\[Main\]](index.html)  
*[\[Previous\]](theartofconversation.html)
  [\[Next\]](doorsandwindows.html)*

## What's in a Name?

Once the charcoal burner has revealed his name, we want three things to
happen. First, we want his short name (the one that's displayed in room
descriptions) to change from 'the charcoal burner' to 'Joe Black';
second we want the program to treat the name as a proper name, so we
don't get messages like 'The Joe Black is holding a spade' or 'You see a
Joe Black here'; and third, we want the parser to recognize **joe**,
**joe black** or **black** as referring to Joe. The first two steps are
straightforward. The third is a little more complicated.  
  
To carry out the first two steps we simply need to execute:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
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
<td width="51"></td>
<td>isProperName = true; <br />
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
<td width="51"></td>
<td>name = properName; <br />
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
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

You might think that you could achieve the third by adding 'Joe Black'
to the burner's vocabWords property somehow, but it's not quite that
easy. What we actually need to do is to add them to the game's
dictionary. To add a word to the dictionary we need to call
cmdDict.addWord(obj, word, &wordtype) where obj is the object we want
this word to apply to, and wordtype is the type of word it is (adjective
or noun). Moreover, we can't simply add the contents of the properName
property into the dictionary - it must be added word by word (token by
token), not as a complete phrase. Fortunately the library provides a
means of extracting the individual tokens from a string; we need to use
Tokenizer.tokenize(properName), which returns a list of tokens. Assuming
we assign this list to a local variable tokList, we can get at the
parsed token at position i (in a form suitable for adding to the
dictionary) by calling getTokVal(tokList\[i\]). But just when you
thought it was getting far too complicated to follow, there's another
complication. Logically, all proper names are nouns, so we should add
them to the dictionary as nouns. But if we add them all to the
dictionary as nouns the parser will recognize **joe** or **black** as
referring to Joe, but not **joe black**, since it firmly believes that a
noun phrase should only contain one noun. It will thus accept **joe**
and **black** as alternatives, but not both together. There is an
extremely fiendish way of getting round this by defining another Grammar
Production, but that's way beyond the scope of this Getting Started
guide, so we'll settle for a hack instead, and that is to add every name
but the last into the library as an adjective as well as a noun (which
means that the parser will quite happily recognize **joe black** even
though it does so on the erroneous basis of believing that **joe** is an
adjective qualifying **black** - if one can talk about the beliefs of a
parser).  
  
Since finding out an actor's name some way through a game is a situation
that could arise quite often, it makes sense to make all this happen as
a modification of the Actor class (which will then work for everything
of class Actor or one of is subclasses) rather than something specific
to the burner object. The appropriate code then looks like this:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

modify Actor  
  makeProper  
  {  
    if(isProperName == nil && properName != nil)   
    {  
      isProperName = true;  
      name = properName;  
      local tokList = Tokenizer.tokenize(properName);  
      for (local i = 1, local cnt = tokList.length() ; i \<= cnt ; ++i)  
       {  
        if(i \< cnt)  
          cmdDict.addWord(self, getTokVal(tokList\[i\]), &adjective);  
        cmdDict.addWord(self, getTokVal(tokList\[i\]), &noun);  
       }  
    }  
  }  
;  
  
The purpose of the check if(isProperName == nil && properName != nil) is
to stop the makeProper method doing anything either if the actor has
already been defined as having a proper name (perhaps through a previous
call to makeProper) or if the actor has no properName property
defined.  
  
Apart from cmdDict.addWord(), the only thing that might be really
unfamiliar here is the for loop towards the end of the makeProper
method. If you didn't read about it in chapter 1 (or you did but you've
now forgotten exactly how it works), now might be a good time to refer
back to p. 26 to see how it works.  
  
You should copy the above code into your source file (perhaps near the
top after the definition of the endGame function) and check that it
works. And then I'll confess that all along there was a somewhat simpler
way we could have achieved almost the same effect without either that
complicated for loop or `cmdDict.addWord`. Instead we could have
replaced all the code after name = properName; (apart from the necessary
closing braces) with initializeVocabWith(properName);, and it would have
worked just as well. The only difference is that 'joe' would have been
entered into the dictionary only as an adjective, and not also as a
noun, but in practice that almost certainly doesn't matter. You may want
to test this out.  
  
But you can't test it out just yet: for either method to actually do
anything in our program we need to call it somewhere. We can do this by
simply adding \<\<burner.makeProper\>\>  in the response string of
AskTopic @burner, perhaps just after \<.convnode burner-mud\>.  
  
There's just one more job we need to do before we can leave Joe Black.
As things stand at the moment, if the player asks Joe about himself a
second time, he'll still introduce himself the same way, which we
obviously don't want. We could fix this by using a EventList, since
although \<\<burner.makeProper\>\> won't work inside a single-quoted
string, we can get round this by using a function within the EventList;
but rather than introduce that complication right now, we'll simply use
another AltTopic. Since the burner's isProperName property is nil before
he introduces himself and true afterwards (thanks to
\<\<burner.makeProper\>\>), we can use burner.isProperName as the test
in the isActive property of the AltTopic. The AskTopic and AltTopic then
look like this:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

++ AskTopic @burner  
   "\<q\>My name's Heidi.\</q\> you announce. \<q\>What's yours?\</q\>\<.p\>  
   \<q\>\<\<burner.properName\>\>,\</q\> he replies, \<q\>Mind you, it'll soon be   
    mud.\</q\> \<.convnode burner-mud\>\<\<burner.makeProper\>\>"  
;  
  
+++ AltTopic, StopEventList  
  \[  
   '\<q\>Have you been a charcoal burner long?\</q\> you ask.\<.p\>  
   \<q\>About ten years.\</q\> he replies. ',  
   '\<q\>Do you like being a charcoal burner?\</q\> you wonder, \<q\>It seems  
   rather messy!\</q\>\<.p\>  
   \<q\>It\\s better than being cooped up in some office or factory all day,  
   at any rate.\</q\> he tells you. ',  
   '\<q\>What do you do when you\\re not burning charcoal?\</q\> you   
     enquire.\<.p\>  
   \<q\>Oh -- this and that.\</q\> he shrugs. '  
  \]  
  isActive = (burner.isProperName)  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

One further refinement you could add, which I'll leave as an optional
exercise for the reader, is to add SuggestedAskTopic to the class list
of each of the main topic entries in the burnerTalking state. If you do
that you'll need to add a name property to each of the AskTopic
definitions, perhaps name = 'the smoke', name = 'the fire',
name = 'the ring' and name = 'himself' as appropriate. The player can
then use the **topics** command to see what topics Joe is likely to
respond to.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Another optional exercise you might like to try is expanding the range
of topics to which Joe will respond meaningfully. You can do this with a
mix of AskTopics, TellTopics, AskTellTopics, GiveTopics, ShowTopics and
GiveShowTopics as the mood takes you. You might also want to replace the
DefaultAskTellTopic with a separate DefaultAskTopic and
DefaultTellTopic. You're not restricted to having Joe talk about objects
defined in the game. If, for example, you think he should have an
opinion on Oxford Blue (a type of cheese), you could define an Oxford
Blue topic using the Topic class:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
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
<td width="51"></td>
<td>tOxfordBlue: Topic 'oxford blue/cheese'; <br />
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
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The Topic class can be used for any concrete or abstract topic not
otherwise represented in the game. Unlike game objects (i.e. those
derived from Thing, which Topic isn't), all Topics start out known to
the player character unless you define otherwise, which means that Heidi
doesn't actually have to have encountered any Oxford Blue cheese in the
game in order to ask Joe about it. Incidentally, there's nothing magic
about the t at the start of the object name here (tOxfordBlue), it's
just a convention I use to distinguish Topics from other types of
object.  
  
One further feature you may want to try out is the \<.reveal\> tag,
which you can use to keep track of what's already been said. This works
by keeping track of a list of arbitrary strings (or 'keys') that have
been revealed, either through the gReveal() macro, for example
gReveal('foo'), or through a \<.reveal foo\> tag inserted into a string
(either single-quoted or double-quoted). You can then test whether the
key has been revealed using gRevealed(), e.g. in a declaration like
isActive = gRevealed('foo') on an AskTopic. For example, at the end of
Joe's reply to Heidi's question on Oxford Blue cheese, you might append
a \<.reveal oxford-blue\> tag so that other AskTopics or AltTopics can
test whether this part of the conversation has taken place.  
  
At this point you might like to experiment with increasing Joe's
conversational range before moving on to the next chapter. If you want
to be particularly adventurous, after trying out a few AskTopics and
TellTopics, you could try adding some AltTopics and maybe even the odd
extra ConvNode or two, complete with some more SpecialTopics.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Our game has now reached a point at which, barring full testing, adding
in more decoration objects and the like, it could be regarded as
complete. It can be played through from start to finish, our NPC
provides a reasonably good explanation of the plot (well, the bit about
the magpie may be a bit far-fetched, but if Rossini can get away with it
I don't see why we shouldn't), and there's a reasonable closure when the
Heidi hands the ring over to poor old Joe. As a tutorial game, we could
simply leave it there, even though it's never going to win any prizes in
IF competitions. In the following chapters, however, we'll complicate
things for Heidi by putting more obstacles between her and the ring, not
because this will transform the game into a marvellous one (that would
require a miracle), but because it will provide a convenient vehicle for
introducing some further features of TADS 3.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](theartofconversation.html)
  [\[Next\]](doorsandwindows.html)*


