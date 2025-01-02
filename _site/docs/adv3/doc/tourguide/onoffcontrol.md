<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>OnOffControl : <a
href="thing-introduction.htm">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a href="dial.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="switch.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
An OnOffControl is an immediate descendent of Thing that responds to
TURN ON and TURN OFF commands. It has an **isOn** property which keeps
track of whether it is on (isOn = true) or off (isOn = nil), and a
**makeOn(val)** method that simply sets isOn to val, but which can be
overridden to incorporate the side-effects of turning the control on or
off.  
  
To complete our tour of gadgets and controls we'll return to the space
station that we left in the most minimally-defined state. We'll use an
OnOffControl to open the only door out of the room in which the Tardis
materializes, at the same time filling in a few more details of the
location:  
  
spaceStation : Room 'Space Station - Observation Deck' 'the observation deck'  
  "Judging by the huge observation window, this station is orbiting a huge  
   blood-red planet. On the bulkhead is an electronic calendar, and underneath  
   the calendar is a small green switch. "  
   in = ssDoor1  
;  
  
+ OnOffControl, Fixture 'small green switch/maglock' 'small green switch'  
   "The switch is labelled MAGLOCK. "  
   makeOn(val)  
   {  
     ssDoor1.makeLocked(val);  
     inherited(val);  
   }  
   isOn = true  
;  
  
+ ssDoor1 : IndirectLockable, Door 'steel door' 'steel door'  
   inRoomDesc = "Next to both is a sliding steel door, which is currently \<\<isOpen ?  
     'open' : 'closed'\>\>. "  
   makeLocked(stat)  
   {  
     if(isLocked != isOpen)  
     {  
        "The door slides \<\<stat ? 'shut' : 'open'\>\>. ";          
        makeOpen(!stat);  
     }  
     inherited(stat);    
   }   
;  
  
+ Fixture 'electronic calendar' 'electronic calendar'  
  "According to the calendar the date is \<\<getDate\>\> "  
  getDate()  
  {  
    local gt = getTime();  
    local date;  
    date = toString(gt\[3\]) + '-'+ monthName(gt\[2\]) + '-' + toString(gt\[1\] + 1100);  
    return date;  
  }  
;  
   
function monthName(x)  
{  
  return \['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'\] \[x\];  
}  
  
The important code here is first of all in the makeOn method of the
OnOffControl, which calls the makeLocked method of the door, and then in
the makeLocked method of the door, which makes unlocking the door open
it and locking it close it again. The electronic calendar is largely
decorative, but it does serve to show the player that the Tardis has
traveled well into the future. The getDate() routine makes the calendar
display a date exactly 1100 years in the future from whatever the
current (real world) date happens to be, and in a format that will be
understood the same way on both sides of the Atlantic.  
  
