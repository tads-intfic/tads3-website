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
<td style="text-align: left;"><strong>cannotGoThatWay<br />
</strong></td>
<td style="text-align: right;"><a href="roomparts.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="cannotgothatwayindark.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
BasicLocation.cannotGoThatWay is called whenever an actor (usually the
PC) attempts travel in a direction that is not currently available
(except in the dark, when
[cannotGoThatWayInDark](cannotgothatwayindark.html) is used instead). By
default this simply displays a message saying you can't go that way, and
listing the exits that are available from the current location. There
may be occasions, however, when you'd like a different message
displayed.  
  
Consider our shipboard locations, the Decks and Cabins. Just as a
shipboard direction such as PORT or AFT is that meaningful on dry land,
we may feel that compass directions such as NORTH or SW are not that
relevant to moving around a ship. We could therefore override the
cannotGoThatWay method of Deck to display a more appropriate message
when travel in a compass direction is attempted:  
  
class Deck : ShipboardRoom, OutdoorRoom  
  roomParts = \[defaultDeck, caveSky\]  
  **cannotGoThatWay()  
  {  
    if(gAction.parentAction.dirMatch.dir.ofKind(CompassDirection))  
       "Compass directions aren't that useful for getting about ship;  
        try fore, aft, port and starboard instead. ";  
    else  
      inherited;  
  }**  
;  
  
The complicated part here is getting at what kind of direction the
player typed, but the above seems to work. The easy part is extending
this behaviour to the Cabin class; simply make Cabin inherit from Deck
instead of from ShipboardRoom and Room. Since Deck inherits from
ShipboardRoom and OutdoorRoom, the only difference between Room and
OutdoorRoom is the list of roomParts, and Cabin overwrites roomParts
anyway, this change is perfectly safe.  
  
More generally, if you want to provide custom "Can't go that way" in a
number of different locations, you may just need to provide a
cannotGoThatWayMsg:  
  
squareCave : DarkRoom 'Square Cave' 'the square cave'  
   "This capacious cave is unnaturally square, suggesting that it has been  
    artificially hewn out of the rock, an impression further enhanced by  
    the carefully-constructed ashlar archway to the west. "  
   west = mainCave  
   out asExit(west)  
   **cannotGoThatWayMsg = 'You can\\t go through solid rock! '  
**;  
  
Where the property is not overridden, however, the default "You can't go
that way" message will be displayed as before.  
  
  
