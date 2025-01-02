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
<td style="text-align: left;"><strong>Platform : BasicPlatform, <a
href="surface.html">Surface</a><br />
</strong></td>
<td style="text-align: right;"><a href="basicchair.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="nominalplatform.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Platform is a NestedRoom that an actor can stand on (or also sit on or
lie on, though standing on will normally be the most obvious). We'll add
a museum lobby with both a carpet and a table that can be stood on:  
  
museumLobby : Room 'Entrance Lobby' 'the entrance lobby'  
 "A welcoming sign next to the main museum entrance to the west declares:\n  
  \<\<museumSign.desc\>\>.\nOtherwise there's not much to this small lobby  
  apart from plain white walls, a battered old table, and a shabby carpet.   
  A brightly-lit corridor leads off to the east. "  
 east = brightCorridor  
 west = museum  
;  
  
+ museumSign : Readable, Fixture 'sign' 'sign'  
  "ABSOLUTELY NO ADMITTANCE\nTO THE MUSEUM\nWITHOUT A TICKET"  
;  
  
+ Platform, Heavy 'shabby old carpet' 'shabby old carpet'  
  "It may once have been red with a dark blue pattern - or perhaps  
   it was the other way round. "  
;  
  
+ batteredTable : Platform, Heavy 'battered old table' 'battered old table'  
  "This veteran table has clearly seen sterling service for decades,  
   but the poor old thing looks like it's coming up to retirement: it's  
   scratched, chipped, and generally battered, and one of the legs is  
   starting to look distinctly crooked. "  
  actionDobjStandOn  
  {  
    inherited;  
    "As you stand on the table it creaks alarmingly. ";  
  }  
  tableHere = (isIn(museumLobby) ? 'a battered old table, ' : '')    
;  
  
You'll also need to add west = museumLobby to the definition of
brightCorridor.  
