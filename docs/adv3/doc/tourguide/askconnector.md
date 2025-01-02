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
<td style="text-align: left;"><strong>AskConnector : TravelConnector,
ResolveAsker<br />
</strong></td>
<td style="text-align: right;"><a
href="travelbarrier.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="travelconnector.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The normal IF convention assumes that there is only one exit in any
given compass direction. But what happens if you want to model a
situation where there are two, or three, or half a dozen, such as a
north wall in which there are several doors? You could, of course,
simply attach a FakeConnector to the north property of such a location
and have it display a message telling the player to select a door to go
through instead, but a better solution would be to use an AskConnector.
This is an "ask which" travel connector. Rather than just traversing the
connector, we ask for a direct object for a specified travel verb; if
the player supplies the missing indirect object (or if the parser can
automatically choose a default), we'll perform the travel verb using
that direct object.  
  
AskConnector defines the following properties:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>promptMessage</strong> - An extra prompt message to show
before the normal parser prompt for a missing or ambiguous object. We'll
show this just before the normal parser message, if it's specified. If
you want to customize the messages more completely, you can override
askDisambig() or askMissingObject(). The parser will invoke these to
generate the prompt, so you can customize the entire messages by
overriding these.  <br />
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
<td><strong>travelAction</strong> - The specific travel action to
attempt. This must be a TAction - an action that takes a direct object
(and only a direct object). The default is TravelVia, but this should
usually be customized in each instance to the type of travel appropriate
for the possible connectors.  <br />
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
<td><strong>travelObjs</strong> - The list of possible direct objects
for the travel action. If this is nil, we'll simply treat the direct
object of the travelAction as completely missing, forcing the parser to
either find a default or ask the player for the missing object. If the
travel is limited to a specific set of objects (for example, if there
are two doors leading north, and we want to ask which one to use), this
should be set to the list of possible objects; the parser will then use
the ambiguous noun phrase rules instead of the missing noun phrase rules
to ask the player for more information.  <br />
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
<td><strong>travelObjsPhrase</strong> - The phrase to use in the
disambiguation question to ask which of the travelObjs entries is to be
used. The language-specific module provides a suitable default, but this
should usually be overridden if travelObjs is overridden.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
  
Here's an example of an AskConnector when there are two doors in the
south wall.  
  
  
stoneLanding : Room 'Landing' 'the landing'  
   "A pair of doors lead south from this narrow landing, from which  
    a narrow flight of stone steps lead down to the north. "  
   down = slStairsDown  
   north asExit(down)     
   south : AskConnector   
    {   
     promptMessage = "There are two doors you could go through to the south . "   
     travelAction = GoThroughAction   
     travelObjs = \[leftDoor, rightDoor\]  
     travelObjsPhrase = 'of them'  
    }  
;  
  
+ leftDoor : Door 'left hand door\*doors' 'left hand door'  
;  
  
+ rightDoor : Door 'right hand door\*doors' 'right hand door'  
;  
  
Now, if you arrive at this destination and type the command SOUTH the
parser will respond with "There are two doors you could go through to
the south. Which of them do you mean, the right hand door, or the left
hand door?" Of course, right now there's no way of reaching this
location; we'll eventually provide it when we come to look at
[Consultable](consultable.html).  
