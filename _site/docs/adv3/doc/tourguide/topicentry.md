<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>TopicEntry : object<br />
</strong></td>
<td style="text-align: right;"><a
href="greetingprotocols.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="givetopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
One way to handle conversational commands such as ASK FRED ABOUT
TREASURE or SHOW ROTTEN APPLE TO MAVIS might be to override the
actionIobjAskAbout and actionIobjShowTo methods on Fred and Mavis with
long and complicated statements, probably starting with switch(gDobj)
and then going on to have complex IF ... ELSE IF spaghetti within the
more complex cases, until the whole thing becomes a nightmare to code,
an impossibility to debug, and a disincentive to attempt any kind of
sophisticated conversation with an NPC. Fortunately TADS 3 makes such
spaghetti nightmares a thing of the past, thanks mainly to the
TopicEntry.  
  
To handle conversations in TADS 3 there is no need to override a single
action method on any NPC (unless you're attempting something not covered
by the library). The commands ASK ABOUT, ASK FOR, TELL ABOUT, SHOW TO
and GIVE TO can all be handled with TopicEntry objects (as can some
other constructs we'll be meeting later). These objects define the
response an actor gives to a particular command concerning a particular
object (for example an object defined as AskTopic @carbuncle would
define a response to an ASK ABOUT CARBUNCLE command). TopicEntry objects
may be nested directly inside the Actor whose responses they represent,
but they may also be nested inside ActorStates, to form the set of
responses the Actor gives when in that state, or else within
TopicGroups, to form a set of responses the actor gives when certain
conditions obtain. TopicEntry objects may also be placed within
TopicGroups within ActorStates. Again, each TopicEntry may be allocated
a condition that must obtain before it is used as a response, or may be
assigned one or more alternative entries (AltTopics) that will be used
under different conditions. Again, a TopicEntry may (depending on
circumstances) match a physical game object (such as the carbuncle), an
abstract topic (such as 'the meaning of life'), a set of objects or
topics, or a regular expression. If none of these is suitable, the
author can override the TopicEntry's **matchTopic** method to provide
custom matching (for example, to match any object belonging to a certain
class). As if that were not enough, the TopicEntry system can also cater
for NPCs being proactive and posing questions to the player character,
to which any set of responses may be defined (via SpecialTopic).  
  
The above explanation is probably too abstract and dense to be terribly
meaningful at first reading. For a more digestible explanation you may
want to read the article on
<a href="../techman/t3conv.htm" target="_top">Programming Conversations
with NPCs</a> in the *Technical Manual*. In any case, hopefully the
dense, abstract explanation given above will begin to make more sense
when we start giving concrete examples.  
  
The first thing to note is that game authors are most unlikely to use
raw TopicEntry objects (unless they're devising a custom TopicEntry
class of their own). In practice one uses one of the subclasses of
TopicEntry:  
  
TopicEntry  
   [AltTopic](alttopic.htm)  
   [CommandTopic](commandtopic.htm)  
   [DefaultTopic](defaulttopics-overview.htm)  
      [DefaultAskForTopic](defaultaskfortopic.htm)  
      [DefaultAskTellTopic](defaultasktelltopic.htm)  
      [DefaultAskTopic](defaultasktopic.htm)  
      DefaultCommandTopic  
      [DefaultConsultTopic](defaultconsulttopic.htm)  
      [DefaultGiveShowTopic](defaultgiveshowtopic.htm)  
      [DefaultGiveTopic](defaultgivetopic.htm)  
      DefaultInitiateTopic  
      [DefaultShowTopic](defaultshowtopic.htm)  
      [DefaultTellTopic](defaulttelltopic.htm)  
   [SpecialTopic](specialtopic.htm)  
   ThingMatchTopic  
      [GiveShowTopic](giveshowtopic.htm)  
         [GiveTopic](givetopic.htm)  
         [ShowTopic](showtopic.htm)  
      [InitiateTopic](initiatetopic.htm)  
   TopicMatchTopic  
      [AskTellTopic](asktelltopic.htm)  
         [AskForAboutTopic](askaboutfortopic.htm)  
         [AskForTopic](askfortopic.htm)  
         AskTellAboutForTopic  
         [AskTopic](asktopic.htm)  
         [TellTopic](telltopic.htm)  
      [ConsultTopic](consulttopic.htm)  
   TopicOrThingMatchTopic  
      [AskTellGiveShowTopic](asktellgiveshowtopic.htm)  
      [AskTellShowTopic](asktellshowtopic.htm)  
   [MiscTopic](misctopic.htm)  
      [ByeTopic](byetopic.htm)  
      [HelloGoodbyeTopic](hellogoodbyetopic.htm)  
      [HelloTopic](hellotopic.htm)  
      [ImpByeTopic](impbyetopic.htm)  
      [ImpHelloTopic](imphellotopic.htm)  
      YesNoTopic  
         [NoTopic](notopic.htm)  
         [YesTopic](yestopic.htm)  
  
The structure of this inheritance tree is important, because it gives a
clear indication of the different subcategories of TopicEntry, each one
of which is subtly different and has a slightly different use and
purpose. The first distinction to be clear about is between
ThingMatchTopics and TopicMatchTopics; the former match game objects
(generally of class Thing or one of its subclasses) while the latter
match ResolvedTopics. The main consequence of this is that a
ThingMatchTopic can only match an object that's in scope (this makes
sense - you can't give or show an object to someone unless the object is
there to be given or shown), whereas a TopicMatchTopic can match any
object that's been defined (including a Topic), since something doesn't
have to be physically present to be asked about, asked for, or told
about. The distinction between ThingMatchTopic and TopicMatchTopic is
also important if you override certain of their methods, as we'll see
presently.  
  
We'll come across the other main types of TopicEntry in due course.
[AltTopic](alttopic.htm) is used to provide an alternative response to
another TopicEntry under author-defined conditions.
[DefaultTopics](defaulttopics-overview.htm) match any input relating to
the command in question, (i.e. a DefaultAskTopic matches ASK FRED ABOUT
X whatever X is), and is activated by anything for which a more specific
response has not been defined. [SpecialTopic](specialtopic.htm) responds
to any author-defined string (e.g. PRAISE SARAH, TELL CURATOR A LIE or
RECITE A POEM), but works only in the context of a Conversation Node.  
  
TopicEntries have the following methods and properties which you either
will or may need to use:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>matchObj</strong> - The matching simulation object or
objects; this can either be a single object or a list of objects.
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
<td><strong>matchPattern</strong> - a regular expression pattern that
this TopicEntry matches (as an alternative to matchObj)  <br />
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
<td><strong>matchScore</strong> - the match strength score. By default
this is 100 (except on DefaultTopics, where it's 1, 2 or 3). If more
than one TopicEntry is a possible match to a conversational command, the
one with the highest matchScore is used.  <br />
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
<td><strong>getActor()</strong> - The Actor object to which this
TopicEntry ultimately belongs (you'll never want to override this but
you may want to refer to it).  <br />
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
<td><strong>topicResponse</strong> - The response to ASK, TELL, GIVE or
SHOW. You override this to show the response text (normally in a
double-quoted string, but you can define this as a method if you need
something more complicated), alternatively you can override handleTopic
to do the job.  <br />
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
<td><strong>isActive</strong> - The condition that must be true for this
TopicEntry to be matched. This is true by default but can be set to
anything you like to make matching conditional; while this property
evaluates to nil its response will not be shown. For example, you might
want a particular response to be used only if Sarah has seen the ghost,
in which case you could define isActive = sarah.hasSeen(ghost).  <br />
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
<td><strong>isConversational</strong> - true by default, this property
determines whether this response is treated as conversational. If this
property is set to nil then matching this topic will not trigger any
greeting protocols. For example, if the player attempts to ASK SARAH FOR
BANANA when the PC is already carrying the banana, instead of having
Sarah deliver a sarcastic reply you may simply want the game to report
"You already have the banana." Since this would not constitute a
conversational exchange between Sarah and the PC you'd probably want to
set isConversational = nil on this response.  <br />
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
<td><strong>handleTopic(fromActor, topic)</strong> - By default this
either calls doScript (if the TopicEntry also inherits from a Script
class - e.g. if it was defined as AskTopic, StopEventList) or else (if
the TopicEntry is not also a Script) simply calls topicResponse. The
first parameter (fromActor) is the actor (normally the player character)
doing the asking, showing, giving or telling. The meaning of the second
parameter depends on the type of TopicEntry. For a ThingMatchTopic
(GiveTopic, ShowTopic or InitiateTopic) the parameter is the actual game
object that the TopicEntry matched (this can be useful, e.g. in a Give
command if you want to move the object matched into the actor it's been
given to). For a TopicMatchTopic (AskTopic, TellTopic, AskForTopic),
however, the second parameter is a ResolvedTopic object (though you may
be able to get at the actual game object matched by calling
topic.getBestMatch).  <br />
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
<td><strong>matchTopic(fromActor, topic)</strong> - By default this
matches the TopicEntry according to what you have defined in matchObj or
matchPattern, so you don't need to worry about overriding it. On
occasion, however, you may have a special case that's most easily dealt
with by overriding this method. For example, if you defined a custom
Coin class and then wanted a GiveTopic that matched any member of the
Coin class you could override matchTopic(fromActor, obj) to return
matchScore if obj is ofKind(Coin). Note that the parameters to this
method mean the same as those for handleTopic, so that the meaning of
the second parameter depends on whether we're using a TopicMatchTopic or
a ThingMatchTopic.  <br />
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
<td><strong>isMatchPossible(actor, scopeList)</strong> - This method
decides whether the TopicEntry can be matched. For a TopicMatchTopic it
returns true if the matchObj (or any of the objects in the matchObj list
if it is a list) is either in scope (in the scopeList) or is known to
actor, or if matchObj is nil (which means that the TopicEntry is being
matched by a pattern or a custom method). For a ThingMatchTopic it
returns true only if matchObj or one of the objects in the matchObj list
is in scope. Most of the time you probably won't want to change this
behaviour.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
This may look a bit daunting, but in practice the use of templates makes
the definition of the majority of TopicEntries pretty straightforward.
To ask about a single object, for example, one might define an AskTopic
thus:  
  
+ AskTopic @cheese  
  "\<q\>Do you like cheese?\</q\> you ask.\b  
   \<q\>Only if it's blue cheese.\</q\> she replies. "  
;  
  
The object following the @ sign is the matchObj, and the double-quoted
string that follows is the topicResponse.  
  
If you want a TopicEntry that matches a list of items, you enclose that
list in square brackets instead of using the @ sign, e.g.  
  
+ AskTopic \[cheese, bread\]  
   "\<q\>Do you like cheese on your bread?\</q\> you enquire.\b  
   \<q\>That depends on the cheese.\</q\> she tells you."  
;  
  
If you wanted a different response that takes preference under special
circumstances you could use a higher matchScore by placing it after a +
sign before the matchObj:  
  
+ AskTopic +110 @cheese  
  "\<q\>Do you like this cheese?\</q\> you ask, holding out the lump you're holding.\b  
   \<q\>Ooh! Blue Stilton! lovely!\</q\> she exclaims. "  
  isActive = (cheese.isHeldBy(gPlayerChar))  
;  
  
In all these examples the player will always see the same response to
the same command. For more realism you may prefer to use a list of
responses, which you can do by adding a Script class to the class list
of the TopicEntry and supplying a list of responses in square brackets
instead of a single response in a double-quoted string:  
  
+ AskTopic, StopEventList \[cheese, bread\]  
  \[ '\<q\>Do you like cheese on your bread?\</q\> you ask.\b  
    \<q\>That depends on the cheese\</q\> she tells you. ',  
  
   '\<q\>So, what kind of cheese do you like with your bread?\</q\> you enquire.\b  
    \<q\>Blue cheese.\</q\> she replies firmly. ',  
  
    '\<q\>I can\\t interest you in some nice gooey brie on a fresh crusty piece  
    of wholemeal then?\</q\> you suggest\b  
     \<q\>No - but if you made that a nice smelly piece of Blue Stilton on a  
    fresh crusty piece of wholemeal that'd be a different matter.\</q\> she smiles. ',  
  
    '\<q\>So - only blue cheese on your bread will do.\</q\> you surmise.\b  
    \<q\>That\\s right.\</q\> she affirms. '  
   \]  
;  
  
Finally, you might want to override topicResponse with a method if it
needs to do something more complicated than merely displaying a piece of
text, for example:  
  
+ GiveTopic @cheese  
  topicResponse  
  {  
    "\<q\>Here, have this,\</q\> you say, handing over the lump of stilton.\b  
     \<q\>Thanks!\</q\> she beams, then proceeds to eat the lot. "  
     cheese.moveInto(getActor);  
     nestedActorAction(getActor, Eat, cheese);  
  }  
;  
  
Having looked at TopicEntries in the abstract, we can now go on to see
how we might use the various types of TopicEntry in our game.  
  
