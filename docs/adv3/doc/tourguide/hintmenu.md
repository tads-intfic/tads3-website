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
<td style="text-align: left;"><strong>HintMenu : MenuItem,
HintMenuObject<br />
</strong></td>
<td style="text-align: right;"><a href="tophintmenu.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="goal.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Unless your hint system is going to be very simple, you'll probably want
to split it into submenus. To do this you use a series of HintMenu
objects, which would be located directly in the
[TopHintMenu](tophintmenu.html). In the present game we might do this by
splitting the hints according to region:  
  
  
TopHintMenu;  
  
+ HintMenu 'In the First Set of Caves'  
;  
  
+ HintMenu 'Aboard the ship'  
;  
  
+ HintMenu 'The Tardis and its Destinations'  
;  
  
+ HintMenu 'On the East Side of the Lake'  
;  
  
+ HintMenu 'On the South Side of the Lake'  
;  
  
+ HintMenu 'On the West Side of the Lake'  
;  
  
Note that the Menu template defines the single-quoted string as the
title property, so, for example, our first HintMenu could have been
defined as:  
  
+ HintMenu  
    title = 'In the First Set of Caves'  
;  
  
Note also that each of these menus is only displayed if it contains
currently open goals.  
