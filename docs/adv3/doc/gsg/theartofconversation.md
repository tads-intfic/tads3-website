---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)





[\[Main\]](index.html)  
*[\[Previous\]](endingthegame.html)   [\[Next\]](whatsinaname.html)*

## The Art of Conversation

When you go up and talk to someone, the chances are that they won't just
carry on what they're doing while they're talking with you, they're more
likely to stop and adopt another posture (no doubt you can think of
plenty of exceptions to this, but it's true most of the time). Also,
it's normal to begin and end a conversation with some kind of greeting
and farewell protocol (e.g. saying "Hello and goodbye."). Of course
there are people who will just bounce up to you and say, "Have you done
the monthly sales figures yet?" or "What do you think about the election
results?", but it's more normal to start with "Good morning" or the
like.  
  
The traditional way of programming NPCs to respond to ASK ABOUT and TELL
ABOUT (as in **ask jones about monthly report** or **tell fred about
election results**) doesn't really allow for such niceties. The player
character just walks up to the NPC and tries to find out what topics he,
she, or it will respond to, without much sense that a conversation is
starting or ending in the normal way. TADS 3 goes a long way to
providing a more realistic approximation to the way human beings
actually converse by using ActorStates and greeting protocols.  
  
The idea is that an actor (NPC) typically starts in a type of ActorState
called a ConversationReadyState that defines what he or she is doing
prior to the conversation, and how the conversation is begun and ended.
Starting a conversation with the actor (either with a **talk to**
command, or by using **ask about**, **ask for**, **tell about**, **give
to**, or **show to**) then causes the greeting message to be displayed,
and the actor to switch into the corresponding InConversationState. This
latter type of ActorState typically provides a description of what the
actor is doing while talking to you, and contains within it the various
TopicEntry objects to which the actor will respond while in that
state.  
  
To see how this works in practice, add the following code immediately
after the definition of the DefaultGiveShowTopic:  
  
+ burnerTalking : InConversationState  
  stateDesc = "He's standing talking with you. "   
  specialDesc = "{The burner/he} is leaning on his spade   
    talking with you. "  
;  
  
++ burnerWorking : ConversationReadyState  
  stateDesc = "He's busily tending the fire. "  
  specialDesc = "\<\<a++ ? '{The burner/he}' : '{A burner/he}'\>\>   
  is walking round the fire, occasionally shovelling dirt onto it with his   
    spade. "  
  isInitState = true  
  a = 0  
;  
  
+++ HelloTopic, StopEventList  
  \[  
    '\<q\>Er, excuse me,\</q\> you say, trying to get {the\\s burner/her}  
      attention.\<.p\>  
     {The burner/he} moves away from the fire and leans on his spade  
     to talk to you. \<q\>Hello, young lady. Mind you don\\t get too   
     close to that fire now.\</q\>',  
    '\<q\>Hello!\</q\> you call cheerfully.\<.p\>  
     \<q\>Hello again!\</q\> {the burner/he} declares, pausing from   
     his labours to rest on his spade. '  
  \]  
;  
  
+++ ByeTopic  
  "\<q\>Bye for now, then.\</q\> you say.\<.p\>  
   \<q\>Take care, now.\</q\> {the burner/he} admonishes you as he   
     returns to his work. "  
;  
  
+++ ImpByeTopic  
  "{The burner/he} gives a little shake of the head and returns   
    to work. "  
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

The specialDesc is the description of the actor that appears in the room
description. The stateDesc is appended to the end of the desc of the
actor when he's examined with an **examine** command. By default, the
library expects to find the ConversationReadyState contained within its
corresponding InConversationState (which is what we have done here).
Clearly, the game needs to know which ActorState our charcoal burner
starts in; we achieve that by setting isInitState = true on
burnerWorking (the ConversationReadyState).  
  
To display what happens at the start of a conversation, we use a
HelloTopic located in the ConversationReadyState. In this game, we are
assuming that Heidi and the charcoal burner have never seen each other
before, so the exchange between them on their first meeting is likely to
be different from that on subsequent occasions. We accordingly define
the HelloTopic to be a StopEventList as well. A StopEventList works
through each element in its list in sequence, until it reaches the last
one, which it then keeps repeating. In this example we have only
provided two strings in the list - one for the first greeting and a
second one for every subsequent greeting. We could also use an
ImpHelloTopic to provide a different response if Heidi strikes up a
conversation with Joe without first explicitly greeting him through a
player command (**talk to burner**), but this is a complication we can
manage without here.  
  
Likewise, to display what happens at the end of the conversation we use
a ByeTopic. We could once again display a list of different messages
when the conversation is terminated, but here we take the simpler option
of displaying the same message each time. On the other hand we supply a
separate ImpByeTopic to define what happens if the conversation is ended
implicitly (either by Heidi walking away in the middle of the
conversation, or by exhausting the burner's attention span by failing to
continue the conversation) rather than explicitly (with a **bye**
command).  
  
If this all seems a bit much to take in, it may become clearer if you
try running the game again with it included and seeing how the charcoal
burner now behaves (you can get into conversation with him either
explicitly with **talk to burner** or by trying to give him or show him
something). At some point you will also want to have a careful read of
the articles on
<a href="../techman/t3conv.html" target="_top">Programming Conversations
with NPCs</a> in TADS 3 in the *Technical Manual*, though there's no
need to do that until you've completed this guide.  
  
I should explain, though, that there's one little trick in the code
given above that you won't find documented there or anywhere else. Since
Heidi has never seen the charcoal burner before, the very first time
he's mentioned he should be described as "a charcoal burner", but, once
he's been referred to once, on every subsequent occasion he should be
called "the charcoal burner" (until we learn his name, when he'll be
referred to as "Joe Black", which is why we're using the substitution
strings - {the burner/he} and so forth). To achieve this effect, the
specialDesc property of burnerWorking has been defined thus:  

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

specialDesc = "\<\<a++ ? '{The burner/he}' : '{A burner/he}'\>\>   
  is walking round the fire, occasionally shovelling dirt onto   
   it with his spade. "  

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

The first part of this little trick is the use of the ternary operator
? : . This means if the expression before the question-mark is true,
evaluate to the expression between the question-mark and the colon,
otherwise evaluate to the expression after the colon. So, for example:  

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
<td>(x &gt; 5) ? 96 : 32 <br />
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

evaluates to 96 if x is 6 but to 32 if x is 4. Moreover, a++ means use
the current value of a, then increase it by one after we've use it. We
have initialized the property a to 0 (something as uninformative as 'a'
would normally be frowned upon as a property name, but since we're using
it here to determine whether the burner should be called *a* burner or
*the* burner, we might just about be forgiven for it). This means that
the first time the specialDesc string is displayed, a is zero (which is
treated as equivalent to nil, i.e. a Boolean false), so the whole
expression in the double angle brackets evaluates to the parameter
string '{A burner/he}' which in turn displays as "A charcoal burner".
But since the act of displaying the string causes a to increment by one,
on every subsequent occasion the specialDesc string is displayed a will
be some number greater than zero, which will be treated as meaning true.
This will result in the whole expression evaluating to
'{The burner/he}', and thus displaying as "The charcoal burner".  
  
The next step is to give the charcoal burner a couple of topics he can
talk about. Since he's tending a fire, and the fire and smoke are
mentioned in the room description, they might be two obvious topics to
start with. Compared with what we've just done, coding them is fairly
straightforward:  

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

++ AskTopic @smoke  
   "\<q\>Doesn't that smoke bother you?\</q\> you ask.\<.p\>  
   \<q\>Nah! You get used to it - you just learn not to breathe too deep when  
    it gets blown your way.\</q\> he assures you. "  
;  
  
++ AskTopic, ShuffledEventList @fire  
   \[  
     '\<q\>Why have you got that great big bonfire in the middle of the   
       forest?\</q\> you ask.\<.p\>  
     \<q\>It\\s not a bonfire, Miss, it\\s a fire for making charcoal.\</q\> he  
      explains, \<q\>And to make charcoal I need to burn wood - slow like -   
      and a forest is a good place to find wood - see?\</q\>',  
     '\<q\>Doesn\\t it get a bit hot, working with that fire all day?\</q\> you   
        wonder.\<.p\>  
     \<q\>Yes, but it beats being cooped up in an office all day.\</q\> he  
       replies, \<q\>I couldn\\t stand that!\</q\>',  
     '\<q\>Why do you keep putting that dust on the fire?\</q\> you wonder.\<.p\>  
     \<q\>To stop it burning too quick.\</q\> he tells you. '  
   \]  
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

We make them both of class AskTopic so that the burner will respond to
**ask burner about fire** or **ask burner about smoke**. For the smoke
we've just given him a single reply he'll give every time (not because
this is a particularly good idea, but just to show how it's done). For
the fire, we've given him a list of three responses which will be
treated as a ShuffledEventList (since their order is not significant).
There's only a couple of other points to note here. The first is that
our response strings define both sides of the conversation, so we see
what Heidi asks as well as what the burner answers. The second is that
these topics belong in burnerTalking, the InConversationState, so we
precede them both with two plus signs to contain them at the right place
in the object hierarchy.  
  
It's always possible that the player will try to ask the burner some
topic we haven't explicitly defined, so it would be useful to define a
catchall DefaultAskTellTopic to handle such cases:  

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

++ DefaultAskTellTopic  
   "\<q\>What do you think about \<\<gTopicText\>\>?\</q\> you ask.\<.p\>  
   \<q\>Ah, yes indeed, \<\<gTopicText\>\>,\</q\> he nods sagely,  
   \<q\>\<\<rand('Quite so', 'You never know', 'Or there again, no   
    indeed')\>\>.\</q\>"  
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

This definition (loosely based on a similar trick in the sample game
that comes with TADS 3), is designed to create the vague illusion of
responding to any topic (though the illusion will quickly be shattered
in practice), by using gTopicText, which returns the text of whatever
the player typed after **about** **** in an **ask burner about** or
**tell burner about** command. When the rand() function is given a list
of arguments, as here, it selects one of them at random; this at least
gives a measure of variety to the charcoal burner's meaningless replies,
and will generate a transcript like:  

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

\>**ask burner about the weather**  
"What do you think about the weather?" you ask.  
  
"Ah, yes indeed, the weather," he nods sagely, "You never know."  
  
\>**ask him about weapons of mass destruction**  
"What do you think about weapons of mass destruction?" you ask.  
  
"Ah, yes indeed, weapons of mass destruction," he nods sagely, "Or there
again, no indeed."  
  
\>**ask him about his mother**  
"What do you think about his mother?" you ask.  
  
"Ah, yes indeed, his mother," he nods sagely, "Or there again, no
indeed."  

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

The last of these rather gives the game away, which is why this
particular technique (trying to echo what the player typed in the player
character's response) is not really satisfactory, unless you're trying
to represent your NPC as an eccentric old buffer who displays his
confusion by talking like this. It's usually rather better to show
non-commital responses to the effect that the NPC doesn't hear the
question, refuses to answer, mutters an inaudible reply, becomes
distracted, or says something so convoluted that you fail to understand
it. In such cases it isn't really practicable to give the full question
asked by the player character, so you either have to omit it, or
represent it in indirect speech (e.g. "You ask your question and…") or
have the NPC interrupt it half way through, (e.g. "What do you think
about…?" you begin. "I don't," he interrupts, "Thinking's for
intellectuals, and I sure as hell ain't one of them.") As an exercise
you may wish to devise your own list of default ask responses for our
burner to replace the slightly dodgy ones shown above.  
  
Now the time has come to get the charcoal burner to tell us about
himself (in response to the player typing **ask burner about himself**).
This doesn't require us to define a special himself object or topic,
since the parser will recognize **ask burner about himself** as
equivalent to **ask burner about burner**. We simply need to add an
AskTopic with burner as its matchObj:  

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
    mud.\</q\>"    
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

For clarity of code structure, it might be a good idea to put this just
before our catchall DefaultAskTellTopic. The one point to note here is
the use of \<\<burner.properName\>\> rather than simply Joe Black. The
advantage of doing it this way is that if we later decide we want to
call the charcoal burner 'Fred Bloggs' or 'Ebenezer Oddball Sidewinder
Bumblebotham' instead, we need only change the value of the burner
object's properName property, rather than having to hunt down and change
every occurrence of the string 'Joe Black'.  
  
Joe's statement (let's stick with calling him Joe) that his name will
soon be mud invites the question why, but this doesn't seem to be the
sort of question that naturally fits the **ask about** format: **ask joe
about mud**, for example, wouldn't read right. What we'd really like is
to be able to **ask why**, but for this to be a valid question only at
this point in the conversation. Fortunately TADS 3 makes this possible
through a mechanism called *conversation nodes* used in conjunction with
SpecialTopics. A conversation node represents a particular point in the
conversation (such as here, when Joe tells us his name will be mud) at
which particular responses make sense which might not make sense
elsewhere. Another example might be when an NPC asks a question
requiring a yes or no answer: it makes sense to answer yes or no at that
point, but it probably would have made no sense to do so on the previous
turn, and the moment when it makes sense may have passed by the next
turn. For something more complicated than a straightforward 'yes' or
'no' response, we can define a SpecialTopic, which in principle allows
the player character to ask any question or make any reply we like
(though in practice we'll want to restrict their complexity), with the
restriction that these responses are only valid while their Conversation
Node is active (because after that the conversation will have moved on,
and before that the NPC hadn't yet made the remark to which these are
potentially relevant responses).  
  
This may become clearer with an example. What we want to do is to allow
Heidi to ask why Joe thinks his name will be mud. To do this we need to
define a conversation node (which we'll call 'burner-mud') and add a
couple of SpecialTopics to it to handle questions like **ask why**. We
also need to tell the game when to enter the 'burner-mud' conversation
mode. This can be done by use of the \<.convnode name\> tag, where name
is the name of the conversation node we want to enter. We use it by
including it in the output string at the appropriate point:  

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
   mud.\</q\> \<.convnode burner-mud\>"  
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

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>The definition of the ConvNode object is pretty minimal. The
SpecialTopics require a little more attention, and we add a
DefaultAskTellTopic at the end to ensure that the player stays in the
ConvNode until he or she asks the question we want asked: <br />
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

+ ConvNode 'burner-mud';  
  
++ SpecialTopic, StopEventList      
   'deny that mud is a name'      
   \['deny', 'that', 'mud', 'is', 'a', 'name'\]     
   \[  
     '\<q\>Mud! What kind of name is that?\<q\> you ask.\<.p\>  
     \<q\>My name -- tonight.\</q\> he replied gloomily. \<.convstay\>',  
     '\<q\>But you can\\t \<i\>really\</i\> be called \<q\>Mud\</q\>\</q\> you   
       insist.\<.p\>  
     \<q\>Oh yes I can!\</q\> he assures you. \<.convstay\>'  
   \]  
;  
  
++ SpecialTopic 'ask why' \['ask', 'him', 'why'\]  
  "\<q\>Why will your name be mud?\</q\> you want to know.\<.p\>  
  He shakes his head, lets out an enormous sigh, and replies,  
  \<q\>I was going to give her the ring tonight -- her engagement ring --  
  only I've gone and lost it. Cost me two months' wages it did. And  
  now she'll never speak to me again,\</q\> he concludes, with another  
  mournful shake of the head, \<q\>never.\</q\>"  
;  
  
++ DefaultAskTellTopic  
  "\<q\>And why does...\</q\> you begin.\<.p\>  
  \<q\>Mud.\</q\> he repeats with a despairing sigh. \<.convstay\>"  
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

Note that there is only one + sign in front of the ConvNode. This is
because here we are putting the ConvNode directly inside the actor (in
this case the burner), not any of its actor states. It is also legal
(though never necessary) to locate a ConvNode in an ActorState.  
  
We should spend a few minutes thinking about how all this works. First,
since the player cannot be expected to guess what wording will trigger
our special topics, we need to provide some kind of prompt. This is what
the single-quoted strings immediately after the class names do (the
strings in the name property of the SpecialTopic objects). These strings
need to be of a form that make sense after "You could…"; in this case
the player will be prompted with:  

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
<td>(You could deny that mud is a name, or ask why.) <br />
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

The list of strings in square brackets (the keywordList property) is
then the list of words (or 'tokens') that the parser will check for in
deciding whether to match a given SpecialTopic. It is not necessary that
the player types all the words in the list for a match to take place -
in this instance one or other of the SpecialTopics will be matched if
the player simply types **deny** or **mud** or **why**, for example; but
a match will not take place if the command contains any words not in the
list. For example if the player types **deny mud a proper name** the
parser will respond with:  

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
<td>The word "proper" is not necessary in this story. <br />
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

The only way to try to avoid this it to be as careful as possible in the
list of strings you include in the keywordList; in this instance we have
mostly just duplicated the words that will appear in the prompt, but it
seems likely that the player might try something else (and you can be
sure than many players will), we can always add more words to these
lists (e.g. 'him' between 'ask' and 'why'). Note also that the list of
the words in the keywordList property must be separated by commas, which
can often be surprisingly easy to forget.  
  
Everything else about the SpecialTopics works in the same way as for
other TopicEntries. We supply the 'deny mud is a name' topic merely to
give the player the appearance of having an option at this point; a
prompt that merely said "(You could ask why)" would look a bit *too*
directive. We use the \<.convstay\> tags in the 'deny mud' topic and the
DefaultAskTellTopic to try to prevent the player from leaving the
conversation node until he or she has asked why and so given Joe a
chance to start telling his sorry tale (the player could just walk away
and terminate the conversation without learning about the ring, but one
hopes that most players' natural curiosity will prompt them to **ask
why** first).  
  
Since the player could type **deny mud is a name** more than once, we
provide more than one response to it. Once he or she types **ask why**,
however, the game will leave the conversation node after displaying the
response, so there's no need for more than one response.  
  
One further point to note is the use of double dashes (--) in the text
of various responses. TADS will automatically convert each pair of
dashes into one long dash, which looks better in the output than a short
dash.  
  
Finally, note that normally a Conversation Node will normally only last
for one turn. That is why we needed to insert all those \<.convstay\>
tags to keep this node active until the player asks the question we want
asked. But we could change the default behaviour by setting the
ConvNode's isSticky property to true; in that case the Conversation Node
would remain active until we explicitly left it, either by switching to
another node, or by using a tag such as \<.convnode nil\> to leave the
current node without entering another. You might like to experiment with
changing the code to use this alternative approach to check that you can
get it to work.  
  
The next thing that's likely to occur to the player is to **ask burner
about ring**. There's an important story to be told here, so this guide
will need to provide it's own version, but before seeing what it is, you
might first like to try defining an AskTopic of your own to handle this.
For the sake of argument, assume that Heidi asks "What happened to the
ring - how did you manage to lose it?", and try devising your own
answer. Then check that Joe responds to **ask burner about ring** as you
intended.  
  
The answer we actually need here, since it's important to our plot, may
be supplied thus (this time nested inside burnerTalking again, so put it
just after the definition of ++ AskTopic @burner):  

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

++ AskTellTopic, StopEventList @ring  
   \[  
     '\<q\>What happened to the ring -- how did you manage to lose it?\</q\> you   
       ask.\<.p\>  
     \<q\>You wouldn\\t believe it.\</q\> he shakes his head again, \<q\>I took it   
       out to take a look at it a couple of hours back, and then dropped the  
       thing. Before I could pick it up again, blow me if a thieving little  
       magpie didn\\t flutter down and fly off with it!\</q\>',  
     '\<q\>Where do you think the ring could have gone?\</q\> you wonder.\<.p\>  
     \<q\>I suppose it\\s fetched up in some nest somewhere,\</q\> he sighs,   
     \<q\>Goodness knows how I\\ll ever get it back again!\</q\>',  
     '\<q\>Would you like me to try to find your ring for you?\</q\> you   
       volunteer earnestly.\<.p\>  
     \<q\>Yes, sure, that would be wonderful.\</q\> he agrees, without sounding  
      in the least convinced that you\\ll be able to. '  
   \]  
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

There's one problem with this (actually, there's two, but we'll come to
the second one in a minute). This part of the conversation presupposes
that Joe has told Heidi the sad story of how he came to lose the ring,
but that she hasn't found it yet. Although events could happen that way
round, it's perfectly possible that the player could locate the ring
before getting into conversation with Joe. That's easy enough to test
for - if the ring has been found gPlayerChar.hasSeen(ring) will be true,
otherwise it will be nil. But where do we put this test without a lot of
clumsy coding? Once again TADS 3 comes to our rescue with a very neat
solution, we simply use an AltTopic (directly after the AskTellTopic
we've just defined):  

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

+++ AltTopic  
    "\<q\>I found a ring in a bird's nest, up a tree just down there.\</q\> you  
     tell him, pointing vaguely southwards, \<q\>Could it be yours?\</q\>\<.p\>  
    \<q\>Really?\</q\> he asks, his eyes lighting up with disbelieving hope,  
     \<q\>Let me see it!\</q\>"  
    isActive = (gPlayerChar.hasSeen(ring))  
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

There's no need to code either the commands or the object the AltTopic
is to respond to, it will respond to whatever the TopicEntry it's
contained in responds to, provided that its isActive property is true.
If its isActive property is true then it will be used in preference to
the TopicEntry in which it is contained. In this case we want the
AltTopic to be used instead of its main AskTellTopic if (and only if)
Heidi has actually found the ring, which we achieve with the line
isActive = (gPlayerChar.hasSeen(ring)). Incidentally, this is why we
made the topic an AskTellTopic instead of simply an AskTopic; once Heidi
has found the ring the player is just as likely to **tell burner about
ring** as **ask burner about ring**.  
  
If you now compile and run the game, you should soon encounter the
second problem. If Heidi has found the ring when she asks or tells Joe
about it, everything should work as expected, but if she hasn't, then
asking (or telling) the charcoal burner about the ring works just like
asking or telling him about a topic we haven't defined. This makes sense
before Heidi has got Joe to tell his sorry tale, since she doesn't know
there's a ring to ask about (which is why the library handles it this
way), but once Joe has mentioned his ring she ought to be able to ask
about it.  
  
The TADS library keeps track of which things an actor knows about
through objects' isKnown property, which should be tested through
actors' actor.knowsAbout(obj) method. Actually, the standard library
only keeps track of what the Player Character knows about by this means,
but provides the actors parameter in case some brave soul wants to
expand the system to a tracking NPCs' knowledge as well. By default
actor.knowsAbout(obj) is true either if obj has been seen by the Player
Character or if obj.isKnown has been set to true. The correct way of
achieving the latter is by calling gPlayerChar.setKnowsAbout(obj). This
seems rather long-winded for what is likely to be a quite commonly
needed operation, so the library offers an abbreviated form (a macro)
gSetKnown(obj). This macro definition is a preprocessor directive that
means roughly 'whenever you see gSetKnown(obj) in the source code,
replace it with gPlayerChar.setKnowsAbout(obj) before presenting it to
the compiler, where obj can be any object name we care to use'. In other
words, all we have to do to fix things is to add \<\<gSetKnown(ring)\>\>
to the end of the output string of the appropriate SpecialTopic, thus:  

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

++ SpecialTopic 'ask why' \['ask','why'\]  
  "\<q\>Why will your name be mud?\</q\> you want to know.\<.p\>  
  He shakes his head, lets out an enormous sigh, and replies,  
  \<q\>I was going to give her the ring tonight -- her engagement ring --  
  only I've gone and lost it. Cost me two months' wages it did. And  
  now she'll never speak to me again,\</q\> he concludes, with another  
  mournful shake of the head, \<q\>never.\</q\>\<\<gSetKnown(ring)\>\>"  
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

Now, once Joe has mentioned the ring, Heidi will be able to ask about it
and get a sensible response, even is she hasn't found the ring yet. If
you recompile and play the game with these changes, you should find it
all works properly.  
  
Well, not quite all, perhaps. Although the charcoal burner has told
Heidi that his name is 'Joe Black', he continues to be described as 'the
charcoal burner'. Not only that, but the parser refuses to recognize him
if we try to refer to **joe**, **black** or **joe black**. We'll fix
these problems in the next section.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](endingthegame.html)   [\[Next\]](whatsinaname.html)*


