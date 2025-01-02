---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](doorsandwindows.html)   [\[Next\]](buryingtheboots.html)*

## Crossing the Stream

As the next step to making things more complicated for Heidi, we'll put
the key in a field on the far side of a stream. First we need to add two
extra locations to accommodate the stream:  

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

pathByStream : OutdoorRoom 'By a stream'  
  "The path through the trees from the southeast comes to an end on  
  the banks of a stream. Across the stream to the west you can see  
  an open meadow. "  
  southeast = fireClearing  
  west = streamWade  
;  
  
streamWade : RoomConnector  
  room1 = pathByStream  
  room2 = meadow  
;  
  
meadow : OutdoorRoom 'Large Meadow'  
  "This large, open meadow stretches almost as far as you can see  
  to north, west, and south, but is bordered by a fast-flowing stream  
  to the east. "  
  east = streamWade  
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

The reason for using the separate RoomConnector object, streamWade, will
gradually become apparent. At the moment note that it simply connects
the room in its room1 property to the room in its room2 property. It
also furnishes an example of how we can set the direction property of a
room to an explicit connector object. One further thing we need to do at
this stage is to set the northwest property of fireClearing to
pathByStream.  
  
Next we'll move the small brass key to the meadow and tweak its
properties a little.  

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

+ cottageKey : Key 'small brass brassy key/object/something' 'object'  
  "It's a small brass key, with a faded tag you can no longer read. "  
  initSpecialDesc = "A small brass object lies in the grass. "  
  remoteInitSpecialDesc(actor)   
  {   
    "There is a momentary glint of something brassy as  
    the sun reflects off something lying in the meadow across the stream. ";  
  }  
  dobjFor(Take)  
  {  
    action()  
    {  
      if(!moved)   
         addToScore(1, 'retrieving the key');   
      inherited;  
      name = 'small brass key';  
    }  
  }  
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

The reason for the special dobjFor(Take) routine is that if we let the
key start with the name 'small brass key', it might give its presence
away prematurely, so we give it about the vaguest name we can in its
initial definition and then change it to a more meaningful name when
it's picked up. Note that we have once again used remoteInitSpecialDesc,
which (once we've done some more clever stuff) will be the description
that's displayed when we view the key from a distance, in this case the
other side of the stream. Note that this is a method, not a property,
and it takes a single parameter pov (point of view). This parameter
represents the actor who is doing the looking, and would allow you to
alter the message displayed depending on where the actor was (e.g by
testing for if(pov.isIn(pathByStream)) ). In this case the test is
unnecessary, since there is only one location from which the key can be
viewed remotely before it is moved.  
  
Now comes the clever stuff. In order to make objects in room A visible
from room B we need to join the two locations together with a
DistanceConnector; which is particular kind of SenseConnector (which we
met before in connection with the cottage window); a SenseConnector can
exist in two or more locations since it is a subclass of MultiLoc (more
of which anon). A DistanceConnector has a library template that makes it
exceedingly easy to define; all we need to add is:  

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

DistanceConnector \[pathByStream, meadow\];  

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

The list in square brackets is in fact the locationList property, the
name of which should be fairly self-explanatory. Note that
DistanceConnector is a descendant of both MultiLoc, which is a mix-in
class, and Intangible (since the connector has no physical presence).
Another MultiLoc object we could use here would be a stream, which runs
through both the rooms. And while we're at it, we'll make it possible
for the player to cross the stream with the command **cross stream**.  

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

stream : MultiLoc, Fixture 'stream' 'stream'  
  "The stream is not terribly deep at this point, though it's flowing  
    quite rapidly towards the south. "  
  locationList = \[pathByStream, meadow\]  
  dobjFor(Cross)  
  {  
    verify() {}  
    check() {}  
    action()  
    {  
      replaceAction(TravelVia, streamWade);  
    }  
  }  
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

Note that being a MultiLoc object (like the DistanceConnector), the
stream does not have a location property (its list of locations instead
being held in locationList). Note also that for this to work properly,
MultiLoc must come first in the class list; MultiLoc is a mix-in class
that should always be combined with something else.  
  
Part of the value of defining a separate streamWade object now becomes
apparent; it makes the coding of the action method of
dobjFor(Cross) exceedingly simple. Instead of having to test for which
side of the stream we're on to decide which side we need to end up on
when we cross the stream, we simply TravelVia streamWade and leave
streamWade to sort it all out. But as we'll see shortly, that's only
part of the story.  

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

In the meantime, there's another little matter we need to attend to.
Unlike the other verbs we've used so far, there's no definition of Cross
anywhere in the TADS 3 library, so we have to create our own. For
details of how to do this in general, see the
*<a href="../techman/t3verb.html" target="_top">Technical Manual</a> (but
there's no need to consult it right now - you can finish this guide
first). Here we'll just list the steps for this simple case.  
  
First, we need to define both CrossAction and its associated grammar. A
couple of library macros hide most of the complication of all this, and
all we need write is:  
*

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

DefineTAction(Cross);  
  
VerbRule(Cross)  
  'cross' singleDobj  
  : CrossAction  
  verbPhrase = 'cross/crossing (what)'  
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

We use the DefineTAction() macro to define a Transitive Action (hence
TAction), which means an action taking a direct object (as opposed to an
IAction like **Look** which takes no objects, or a TIAction like **put x
on y** which takes both a direct object and an indirect object). We next
use the VerbRule() macro to define the grammar for the command, that is
the form of words that a player can use to invoke it.  
  
The name of the VerbRule (here Cross) can be anything we like, so long
as it's unique among the VerbRule names in our game. It doesn't actually
*need* to match the name of our action, it's just (a) a convenient way
of ensuring a unique VerbRule name and (b) an obvious way of making it
clear what the VerbRule is for. After naming the VerbRule we next need
to define its grammar, i.e. the phrase that the player must enter to
invoke this command. This will normally consist of a fixed element, such
as the name of the verb, in this case 'cross', followed by a placeholder
for the noun or nouns that the player wants the command to apply to. For
a TAction this placeholder can either be singleDobj (meaning that only
one direct object is allowed) or dobjList (meaning that the command can
be applied to several direct objects at once, as in **take the red ball,
the long stick, and the bent banana**).  
  
It would make no sense to cross several objects at once, so we
definitely want singleDobj rather than dobjList here. We could, if we
wanted, have defined more synonyms for the verb,
e.g. ('cross' \| 'ford') singleDobj, but once more I'll leave that as an
exercise for the interested reader. The point to note is that if we do
want to define alternative phrasings, we use a vertical bar (\|) to
separate the alternatives, and brackets to group them. The brackets
would be necessary in the foregoing example, since without them we'd
have 'cross' \| 'ford' singleDobj, which would mean 'cross' or 'ford
something', rather than 'cross something' or 'ford something', as we'd
actually want.  
  
After the definition of the grammar for the command comes a colon
followed by the name of the action class, which is the name we gave the
action plus the word 'Action' appended, hence CrossAction. If you think
this looks rather like declaring our VerbRule (strictly speaking, our
grammar definition) to be of class CrossAction, then you're right; but
again this isn't an issue that need concern us here, beyond noting that
the DefineTAction(Cross) macro in fact defines a new class called
CrossAction as a subclass of TAction.  
  
We then have to define a verbPhrase so that the parser can construct
certain messages, such as '(first crossing the stream)' or 'What do you
want to cross?' if it needs to. The correct format for a verb phrase for
a TAction should be reasonably clear from the example shown: first the
infinitive (without 'to') followed by the present participle with a
slash (oblique) in between (hence 'cross/crossing'). Then a placeholder
for a direct object, enclosed in brackets (hence '(what)'). Note that
this placeholder may be used by the parser to construct a question about
a missing direct object ('What do you want to cross?'), so for verbs
that were more likely to be applied to people (e.g. 'thank') you'd want
to use '(who)' or, even more correctly, '(whom)' rather than '(what)'.  
  
One more step we have to take is to define what happens when **cross**
is used with any noun other than the stream, which we can do by
modifying the definition of the Thing class:

    modify Thing  dobjFor(Cross)  {   verify()    {      illogical('{The dobj/he} {is} not something you can cross. ' );    }  };

Note here how we've begun the illogical response with
`'{The dobj/he} {is}'` rather than `'{The dobj/he} is'`. By putting 'is'
in curly braces we ensure that it will always agree in number with the
name of the direct object (which is what, of course, `'{The dobj/he}'`
expands to). This ensures that if the direct object were, say, some
flowers growing on the river bank, then **cross flowers** will respond
with 'The flowers are not something you can cross' rather than the
incorrect 'The flowers is not something you can cross'.

If you now compile and run the game it should all work, though getting
across the stream doesn't seem to be much of a puzzle. We can make it
more of one if Heidi has to wear a pair of old boots before she can
cross. To start with we'll leave the boots lying by the side of the
stream. Then all we have to do is to modify the streamWade object so
that it only allows anyone to pass when they're wearing the boots.  
  
Before looking at the solution below, you may like to try to work out
how to do all this yourself. The only new thing about the boots is that
we need to make them of class Wearable, so Heidi can put them on. The
trick is then to work out how to prevent Heidi from crossing the stream
unless she is wearing the boots. You should be able to work it out by
analogy from the way we prevented Heidi from climbing the tree unless
she's standing on the chair.**  
**

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

First here's the boots; as noted above the only thing new about them is
that we make them of class Wearable, so Heidi can put them on:  

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

boots : Wearable 'old wellington pair/boots/wellies' 'old pair of boots'  
  @pathByStream  
 "They look ancient, battered, and scuffed, but probably still waterproof. "  
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

Next we need to modify the RoomConnector so that Heidi can only cross
the stream when she's wearing the boots:  

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

streamWade : RoomConnector  
  room1 = pathByStream  
  room2 = meadow  
  canTravelerPass(traveler) { return boots.isWornBy(traveler); }  
  explainTravelBarrier(traveler)   
  {   
    "Your shoes aren't waterproof. If you wade across you'll get your feet  
      wet and probably catch your death of cold. ";   
  }    
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

And that's all there is to it. If you try the game again you'll find you
can't cross the stream (in either direction) unless you're wearing the
boots. The next job is to hide the boots in a less obvious place.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](doorsandwindows.html)   [\[Next\]](buryingtheboots.html)*

</div>
