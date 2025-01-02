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
<td style="text-align: left;"><strong>Shipboard : object<br />
</strong></td>
<td style="text-align: right;"><a href="pathpassage.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="floorlessroom.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Shipboard is a mix-in class that can be added to other room classes to
indicate that shipboard directions (port, starboard, fore and aft) are
meaningful in such locations. Clearly, the principal use of this class
will be when constructing locations aboard a ship.  
  
To illustrate the use of this class, we first need a ship. Fortunately,
we already have a lake we can float it on, so we can begin by defining
it thus:  
  
ship : Enterable -\>portDeck 'large wooden sailing ship' 'ship' @lakeRoom  
  "It's a large wooden sailing ship, close enough to the shore to board. "  
  specialDesc = "A large wooden ship floats on the lake, just by the shore. "  
  dobjFor(Board) asDobjFor(Enter)    
  getFacets { return \[leaveShip\]; }  
;  
  
There are a number of points to note about this short definition. The
first is the use of the @ notation as an alternative means of specifying
the ship's initial location. Although the ship is notionally on the
lake, we in fact place it in lakeRoom since we want it to be visible and
enterable from there (before it moves). However, since we always want
the ship to be *described* as floating on the lake, we add a specialDesc
to that effect; this is how the ship will then always be described when
listed in room descriptions. Although the ship will not always remain in
*this* location, it will always be in some location close to the shore,
and our description is sufficiently general to cover that. Next, a
player is as likely to type BOARD SHIP as ENTER SHIP in order to enter
the vessel, so we add dobjFor(Board) asDobjFor(Enter) to make BOARD
equivalent to ENTER here. Finally, we'll assume that on boarding the
ship we arrive on the port deck, so we use the -\> notation of the
Enterable template to indicate that portDeck is the location this
Enterable takes us to. We'll explain the mysterious **getFacets** in
just a minute.  
  
We next need to define the portDeck location. Since there'll be several
other deck locations, all of which will use the Shipboard mix-in class,
we can save ourselves a bit of typing if we first define a custom Deck
class:  
  
class Deck : Shipboard, OutdoorRoom;  
  
We can then define the portDeck thus:  
  
portDeck : Deck 'Port Deck' 'the main deck'  
   "This part of the main deck is on the port side of the ship, close to the shore. The  
    deck continues to fore, aft and starboard, and a tall mast towers up from  
    the middle of the main deck. "  
    fore = foreDeck  
    aft = quarterDeck  
    starboard = starboardDeck  
    out = (ship.location)  
    up = mast  
;  
  
<span id="leaveship">We'll be defining the destinations referred to
shortly; for now the only one to note is that attached to the out
property. This is set to (ship.location) so that whenever we type OUT
from portDeck we'll end up in whatever location the ship object is in;
this provides an easy way of moving the entire ship. But of course, just
as players may type BOARD SHIP to enter the ship, they may also want to
type LEAVE SHIP or GET OUT OF SHIP to disembark. The way to handle this
is to provide at EXITABLE object for SHIP to refer to in these
circumstances:  
  
+ leaveShip : Exitable -\>(ship.location) 'ship' 'ship'  
  "It's a large wooden sailing vessel, which stretches fore, aft and to starboard of  
   the port deck. "  
   getFacets { return \[ship\]; }  
;  
  
Note that (ship.location) needs to be enclosed in parentheses when using
the template -\>connector syntax here, since it is an expression.
Otherwise, the Exitable behaves pretty much the same way as the</span>
[Enterable](enterable.html) we encountered before (except that it handles
EXIT so-and-so instead of ENTER so-and-so). The main point to note here
is the use of the **getFacets** method. The point of this is that
although they are separate programming objects, both *ship* and
*leaveShip* refer to the same physical object. In this case the two
programming objects could be regarded as two different facets of the
same ship seen from the shore or from its port deck. The getFacets
method, which returns a list of the other facets of an object, is the
means by which we can specify this relation to the parser. The practical
effect of this is that the player can type BOARD SHIP followed by LEAVE
IT, and the parser will be able to work out that IT should now refer to
the leaveShip object. Without the use of getFacets the LEAVE IT command
would fail, since the original ship would no longer be in scope to be
the object of the LEAVE command, and would not handle the command
properly even if it were. Note that for doors and other passage-like
objects that the library recognizes as double-sided entities this
getFacets mechanism is automatically set up by the library, so it is
only in less standard contexts such as the present one that game authors
need to worry about it.  
  
With these complications out of the way, the definition of the starboard
part of the deck is fairly straightforward:  
  
starboardDeck : Deck 'Starboard Deck' 'the main deck'  
  "From the starboard side of the ship there's a clear view over the lake as far as  
   the eye can see to starboard. The deck continues forward, aft and to port, and a   
   tall  mast rises up from the centre of the main deck. "  
   port = portDeck  
   fore = foreDeck  
   aft = quarterDeck  
   up = mast  
;  
  
The foreDeck and quarterDeck would be even more straightforward but for
one complication. The way we have defined our ship, the main deck
straddles its central portion and is divided into a port side and a
starboard side. Going aft from either side takes us to the quarterDeck,
which going foreward from either side takes us to the foreDeck. So where
should we end up if we come aft from the foreDeck or forward from the
quarterDeck? Clearly we should arrive somewhere on the main deck, but
should it be on the port or the starboard side? It could be either but
there seems no clear reason why it should be on or the other. One way to
handle this is for travel aft from the foreDeck or forward from the
quarterDeck to bring the PC to either location, chosen at random on each
location (which will also give the player something else to figure
out!). The neatest way to implement that is by using a
OneWayRoomConnector that produces this result:  
  
mainDeck : OneWayRoomConnector  
  destination = (rand(portDeck, starboardDeck))  
;  
  
  
The definition of the other two deck sections then becomes
straightforward:  
  
foreDeck : Deck 'Fore Deck' 'the fore deck'  
  "The foredeck is at the front of the ship, overlooking the bows. Most of the  
  ship is aft from here. "  
  aft = mainDeck  
;  
  
quarterDeck : Deck 'Quarterdeck' 'the quarterdeck'  
  "The quarterdeck is a raised portion of the deck near the stern of the ship, and separated  
   from the deck further foreward by a wooden rail on which is mounted a panel. A flight  
   of steps leads down below. "  
   fore = mainDeck  
   down = deckSteps  
;  
  
+ deckSteps : StairwayDown 'flight steps' 'steps'  
  "The steps lead down into a cabin below. "  
  isPlural = true  
;  
  
That said, when the player goes fore from the quarterDeck, it will
normally be with the intention of leaving the ship, via the port deck.
The random selection of destinations in this case will quickly become an
annoyance, so it is probably better to define:  
  
quarterDeck : Deck 'Quarterdeck' 'the quarterdeck'  
  "The quarterdeck is a raised portion of the deck near the stern of the ship, and separated  
   from the deck further foreward by a wooden rail on which is mounted a panel. A flight  
   of steps leads down below. "  
   **fore = portDeck  
   port = portDeck  
   starboard = starboardDeck  
**   down = deckSteps  
;  
  
**Note**: Shipboard and ShipboardRoom: prior to TADS 3.0.8 the class now
called Shipboard was called ShipboardRoom. The name was changed because
Shipboard is a mix-in class designed to be used with Rooms, but not
actually a type of Room, so it seemed illogical to include Room in its
name.  
  
TADS 3 still defines a ShipboardRoom class (for convenience), but it now
means something slightly different, being defined simply as a
combination of Shipboard and Room:  
  
class ShipboardRoom : Shipboard, Room  
;  
  
  
