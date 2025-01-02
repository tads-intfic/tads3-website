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
<td style="text-align: left;"><strong>Chair : <a
href="basicchair.html">BasicChair</a>, <a
href="surface.html">Surface</a><br />
</strong></td>
<td style="text-align: right;"><a href="bed.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="highnestedroom.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Having provided King Solomon somewhere to sleep, we can go on to provide
somewhere for him to sit - a chair in the neighbouring room (along with
one or two useful items):  
  
solomonStudy : Room 'Study' 'the study'  
  "This is another square, cedar-panelled room, with windows to north and south  
   and doors to east and west. It is largely bare apart from a table and chair  
   over by the northern window. "  
  east = solBedroomDoorOutside  
  west = studyDoor  
;  
  
+ solBedroomDoorOutside : Door   
   -\> solBedroomDoor 'bedroom door\*doors' 'bedroom door'  
;  
  
+ studyDoor : Door 'study door' 'study door'  
  "Predictably enough, it's made of cedar. "  
  checkDobjOpen  
  {  
    reportFailure('You\\d better not go that way. ');  
    exit;  
  }  
;  
  
+ solomonTable : Surface, Heavy 'table' 'table'  
  "It's a plain, square, cedarwood table. "  
;  
  
++ baarasRoot : Thing 'flame-coloured flame coloured baaras root/mandrake'   
  'flame-coloured root'  
  "The flame-coloured root is forked and fleshy. "  
;  
  
++ carbuncle : Thing 'purple carbuncle/ruby/stone' 'purple carbuncle'  
   "It's an amazingly large stone - probably a ruby, but with a curious purple tinge. "  
;  
  
+ solomonChair : Chair, Heavy 'chair' 'chair'  
  "The chair is made of cedar. It's quite large and elegantly carved with  
   pomegranates, but is totally unpadded and doesn't look terribly  
   comfortable. "  
;  
  
And just to show this works, we can put the king himself in his chair:  
  
solomon : Person 'king solomon' 'King Solomon' @solomonChair  
  isHim = true     
  isProperName = true  
  posture = sitting  
;  
  
Okay, so you think a study is a bit of an anachronism in a tenth-century
BCE palace; you're probably right, but then where did Solomon sit around
while he was getting all that wisdom? The Baaras root, by the way, will
be used for its exorcistic properties. In the meantime, we already have
another chair, the one in the cabin of our ship:  
  
cabinChair : Chair 'padded chair/cushion' 'chair' @deskRear  
  "It's a fine wooden chair with a round back and a padded cushion. "  
  initSpecialDesc = "A wooden chair sits behind the desk. "  
  bulk = 10  
  weight = 7  
;  
  
  
  
  
  
