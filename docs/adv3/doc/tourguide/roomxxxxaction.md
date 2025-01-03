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
<td style="text-align: left;"><strong>roomXxxxAction<br />
</strong></td>
<td style="text-align: right;"><a
href="travelconnector.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="roomparts.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
We have now explored all the main types of Room and TravelConnector in
the standard library that an author is likely to use (we have not
included classes such as BasicLocation, Passage and Stairway that are
unlikely to be used directly, since one would normally use one of their
subclasses). But before leaving the topic of rooms it may be worth
looking at one or two of the methods and properties that can be
overridden on them to customise their behaviour.  
  
We have already seen how to customise the
[atmosphereList](outdoorroom.html) and [brightness](secretdoor.html)
properties, so we shall start with the roomAfterAction and
roomBeforeAction methods. These are called on the room object whenever
an action is performed within that room, either after or before the
action. In addition, the roomBeforeAction can abort an action by calling
the exit macro. As ever, this is probably best illustrated by means of
an example, which we'll provide by adding roomBeforeAction and
roomAfterAction methods to the Cabin class:  
  
class Cabin : ShipboardRoom, Room  
  roomBeforeAction()  
  {  
    if(gActionIs(Jump))  
    {  
      "{You/he} had better not try jumping here, {you/he} might hit  
       {your} head on the deck beams. ";  
       exit;  
    }      
  }  
  roomAfterAction  
  {  
    if(gActionIn(Look, Examine))  
    {  
      "\nThe ship creaks ominously.\n";  
    }  
  }  
;  
  
The gActionIs macro tests for the action that is about to be performed
in the room. If the Player Character attempts to jump in the cabin he or
she is warned that doing so might result in a collision of head and deck
beams and the action is aborted. We use the parameter substitution
syntax ( {You/he} etc. ) to deal with the possibility that an NPC is
made to jump in the cabin. The gActionIn macro tests for an action
matching any of the actions in a list; we use it in roomAfterAction,
which tests for either a LOOK or an EXAMINE command being performed, and
then displays a message about the ship creaking after the results of the
LOOK or EXAMINE. This example is somewhat contrived, and one would
probably use some other method to describe the creaking of the ship
(although this one may well do well enough) or else have roomAfterAction
call the doScript method of an EventList object to vary the message
displayed, but the example will suffice to give the general idea. If you
like, you can compile and run the game to see what happens in a cabin
when you try to JUMP, LOOK or EXAMINE there.  
  
Perhaps the most important point to remember here is to use the
roomAfterAction and roomBeforeAction methods for this type of effect;
using afterAction or beforeAction on a Room doesn't work.  
  
Note also that in the above code snippet I've put brackets after
roomBeforeAction() but not after roomAfterAction. Where a method takes
no parameters either is correct (brackets or no brackets) and it makes
no difference which you use.  
