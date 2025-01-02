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
<td style="text-align: left;"><strong>Script : object<br />
</strong></td>
<td style="text-align: right;"><a
href="collectivegroup(mobile).html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="eventlist.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The basic Script class provides the skeletal framework for a simple
state machine. You're more likely to use one of the subclasses of Script
(namely [EventList](eventlist.html) or one of its subclasses) than Script
itself, though there may be occasions when Script itself is useful.  
  
The interface provided by the Script class is rudimentary, to say the
least. It provides a **curScriptState** property (which is 0 by
default), a **getScriptState()** method which simply returns
**curScriptState**, and a **doScript** method which does nothing at
all.  
  
The kind of situation in which this basic framework might be useful is
when you want something to happen at irregular or widely spaced
intervals: for example, suppose we'd like an occasional atmospheric
message to be displayed in the graveyard. If we get the roomDaemon to
call the Room's doScript method we could do something like this:  
  
graveyard : Room**, Script **'Graveyard' 'the graveyard'  
  "There is something decidedly eerie about this underground graveyard with its  
   musty old tombstones. This is truly a place of death; nothing   
   lives here, for this place never sees the sun; a dusty path leads off to the  
    northeast and a strange, stone temple is situated just to the west. "  
   northeast = westShore  
   west = temple       
   **roomDaemon  
   {  
     if(!ghost.isIn(self)) doScript;  
     if(!ghost.moved && !statue.isPulled)  
     {  
       ghost.moveInto(self);  
       ghost.initiateConversation(ghostTalking, ghostNode);  
       ghostAppearingEvent.triggerEvent(ghost);         
     }  
   }  
   doScript()  
   {  
     switch(curScriptState++)  
     {  
       case 1: msg1; break;  
       case 3: msg2; break;  
       case 6: msg1; break;  
       case 10: msg2; break;  
       case 15: curScriptState = 0;  
     }  
   }  
   msg1 = "There's a sound like a distant moaning. "  
   msg2 = "Something seems to flicker, but perhaps it's only a   
     trick of the light. ";   
**;  
  
In this case, it would probably be easier to put the two message strings
in the Room's atmosphereList and use one of the EventList classes to
control the frequency of display. There may be cases, however, where
being able to control exactly when things occur like this is what you
need.  
  
  
