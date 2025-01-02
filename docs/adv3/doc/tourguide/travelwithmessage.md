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
<td style="text-align: left;"><strong>TravelWithMessage : object<br />
</strong></td>
<td style="text-align: right;"><a href="stairwayup.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="secretdoor.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
TravelWithMessage is a mix-in class for use with TravelConnectors (note
that some descendents of TravelConnector -
[TravelMessage](travelmessage.html),
[NoTravelMessage](notravelmessage.html) and
[FakeConnector](fakeconnector.html) - include TravelWithMessage in their
definition in any case). TravelConnector overrides
noteTraversal(traveler) to call showTravelDesc(), which in turn calls
either travelDesc (if the Player Character is doing the traveling) or
npcTravelDesc (if an NPC is doing the traveling).  
  
Firstly, we'll add TravelWithMessage to the upLadder's class list so
that we can use its travelDesc property. We take advantage of the fact
that this will call upLadder's doScript method provided that it also
inherits from the [Script](script.html) class or one of its descendents.
In this case we'll use the [StopEventList](stopeventlist.html) class with
two items in its eventList. The first time the PC traverses the upLadder
the first event in the eventList will be fired, and thereafter the
second one will (defining with the [Passage
template](passagetemplate.html)):  
  
  
+ upLadder : TravelWithMessage, StairwayUp, StopEventList  -\>downLadder   
  'sturdy steel ladder' 'sturdy steel ladder'  
  "The ladder leads up through a hole in the ceiling. "     
**  eventList =** **  
  \[  
    new function  
    {  
      "As you climb the ladder you hear what sounds like a thunderous rockfall  
       up above. ";  
      entranceTunnel.blocked = true;         
    },  
    'You climb the ladder again. '  
  \]    
**;  
  
This takes advantage of the fact that an eventList can contain, inter
alia, single-quoted strings (such as 'You climb the ladder again. '),
which will just be displayed, or anonymous function pointers, in which
case the anonymous function will be executed. To create an anonymous
function containing more than one statement, as we wish to do here, we
have to use the new function syntax:  
  
new function  
{  
  *statement1;  
  statement2;  
*  ...  
}  
  
In this case the function simply prints an appropriate message about the
rockfall and sets [entranceTunnel](roomconnector.html)'s blocked property
to true.  
  
You can now recompile and test the game so far.  
