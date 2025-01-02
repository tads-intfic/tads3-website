<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>TravelMessage :<a
href="travelwithmessage.htm">TravelWithMessage</a>, <a
href="travelconnector.htm">TravelConnector</a><br />
</strong></td>
<td style="text-align: right;"><a href="darkroom.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="roomautoconnector.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
Up to this point, you can get into the small cave but not out of it
again. This time we won't explicitly mention the tunnel in the room
description or implement it as an object, but we might want to mention
the walk down the tunnel when the PC travels south. The simplest way to
do that is with a TravelMessage. We do not need to define this as a
separate object, it can simply be an anonymous nested object attached to
the south property of smallCave:  
  
smallCave : DarkRoom 'Small Cave' 'the small cave'  
  "The long narrow tunnel from the south comes to an end in this cramped,  
    sandy-floored cave, whose rough rocky walls press in claustrophobically  
    on every side. Anyone much taller than average would have to stoop here. "  
  **south : TravelMessage   
    {   
      -\> secretPassage  
      "You walk south for quite some way down a long tunnel. ";  
    }  
**;   
  
This time, we have used the [TravelMessage
template](travelmessagetemplate.htm) to simplify the definition here.
The first template property here, -\> secretPassage, is in fact the
**destination** property of the TravelMessage, while the second, the
double-quoted string, is its **travelDesc** property (defined on
TravelWithMessage, from which TravelMessage inherits).  
