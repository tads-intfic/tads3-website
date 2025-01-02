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
<td style="text-align: left;"><strong>ExitPortal : <a
href="shipboardroom.html#leaveship">Exitable</a><br />
</strong></td>
<td style="text-align: right;"><a href="entryportal.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="travelbarrier.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An ExitPortal is just like an [Exitable](shipboardroom.html#leaveship),
except that you can go through it as well as exit it. For example:  
  
squareCave : DarkRoom 'Square Cave' 'the square cave'  
   "This capacious cave is unnaturally square, suggesting that it has been  
    artificially hewn out of the rock, an impression further enhanced by  
    the carefully-constructed ashlar archway to the west. "  
   west = mainCave  
   out asExit(west)        
;  
  
+ ExitPortal -\> mainCave 'ashlar arch/archway' 'archway'  
  "The archway is beautifully constructed from dressed stones. "  
;  
  
Note that ExitPortal is *not* a travel connector; -\> mainCave makes
mainCave its connector property, not its masterObject property. For the
distinction, see further on the [Enterable](enterable.html) class. The
template used here is the [Exitable template](exitabletemplate.html).  
  
  
