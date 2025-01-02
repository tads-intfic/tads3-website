<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>PathPassage : <a
href="throughpassage.htm">ThroughPassage</a><br />
</strong></td>
<td style="text-align: right;"><a
href="onewayroomconnector.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="shipboardroom.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A PathPassage is intended for use as an outdoor passage such as a road
or path that is not enclosed. It is basically the same as a
[ThroughPassage](throughpassage.htm) apart from the way that travel via
it is described (when an actor other than the PC goes along it).
Another, and perhaps more interesting, feature of the PathPassage is
that the English Language extensions to the library understand the
command TAKE PATH in the sense of 'walk along the path' instead of 'pick
up the path'. We can try this out by adding a short path along the side
of the lake:  
  
lakeRoom: Room 'Lake Shore' 'the lake shore'  
  "This is the northern shore of a giant underground lake. A door leads north,  
   **and a path runs a short way east**. "  
  north = lakeDoor2  
  south : NoTravelMessage { "You never learnt to walk on water. " }  
  southeast asExit(south)  
  southwest asExit(south)  
  **east = lakePath**  
;  
  
+ lakeDoor2 : Door -\>lakeDoor 'door' 'door';  
  
+ lakePath : PathPassage 'short eastward rocky lakeside path' 'short lakeside path'  
  "The rocky path runs a short way along the side of the lake. "    
;  
  
pathEnd : OutdoorRoom 'End of Lakeside Path' 'the end of the path'  
  "The path from the west comes to an end just here, on the northern  
   shore of the great underground lake. "  
   west = lakePath2  
   south : NoTravelMessage { "The lake is in the way. " }      
;  
  
+ lakePath2 : PathPassage -\>lakePath 'westward lakeside path' 'westward path'  
  "The path leads off along the shore of the lake to the west. "  
;  
  
If you compile and run the game, you should be able to type SOUTH, DOWN,
SOUTH, SOUTH (as four separate commands) to arrive at the lakeside. From
there you can type TAKE PATH to travel to pathEnd. Typing TAKE PATH a
second time will return you to lakeRoom.  
  
Note that PathPassage uses the same [templates as
Passage](passagetemplate.htm).  
  
The PathPassage class provides a convenient opportunity to introduce
another library feature, albeit one that's only tangentially related. In
English, the expression TAKE PATH can mean FOLLOW PATH (i.e. go down the
path, travel via the path), and hence the English language part of the
library defines:  
  
modify PathPassage   
  /\* treat "take path" the same as "enter path" or "go through path" \*/   
  dobjFor(Take) maybeRemapTo(  
    gAction.getEnteredVerbPhrase == 'take (dobj)',TravelVia, self)   
;   
  
Note the problem this is intended to deal with: while TAKE PATH might
mean FOLLOW PATH, GET PATH or PICK UP PATH do not, and yet all three
forms of the command will match TakeAction. It's true that the commands
GET PATH or PICK PATH UP don't make much sense, but it may still be a
bit puzzling to players if they're treated as instructions to wander
down the path. What we need here is a means of distinguishing between
TAKE PATH on the one hand and GET PATH or PICK PATH UP on the other. In
other words, we need to know what phrasing the player used in actually
issuing the command in this particular case, without going to the
trouble of having to create a separate GetAction which would be treated
as equivalent to TakeAction in 98% of cases.  
  
The library provides a solution to this in the form of an action method
**getEnteredVerbPhrase()**. We can call this on gAction to return a
string containing the exact *verb* phrasing, but with the direct and (if
present) indirect objects replaced with the placeholder tokens '(dobj)'
and '(obj)'. So, for an example, if the player had typed PUT BIG RED
BALL IN THE SMALL PLASTIC BUCKET, gAction.getEnteredVerbPhrase would
return the string 'put (dobj) in (iobj)', which shows us the structure
of the command used without worrying about the wording used to described
the objects involved, and without worrying about whether the player
typed the command in lower case or upper case or a mixture of the two,
since getEnteredVerbPhrase returns a string converted entirely to lower
case (if we actually wanted the full original phrasing of the command we
could use **gAction.getOrigText()** instead).  
