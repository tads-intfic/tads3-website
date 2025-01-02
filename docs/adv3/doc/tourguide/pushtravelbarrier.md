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
<td style="text-align: left;"><strong>PushTravelBarrier : <a
href="travelbarrier.html">TravelBarrier</a><br />
</strong></td>
<td style="text-align: right;"><a
href="travelpushable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="intangibles-overview.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A PushTravelBarrier is a special kind of
[TravelBarrier](travelbarrier.html) that can be used (by attaching it to
the travelBarrier property of a TravelConnector) to block (or
selectively block) pushing a TravelPushable via this connector. By
default a PushTravelBarrier blocks all TravelPushables, but this can be
changed by overriding its canTravelerPass method, or, perhaps more
simply, its **canPushedObjectPass**(obj) method, which canTravelerPass
calls. You can also override the explainTravelBarrier method to explain
why pushing an object this way isn't allowed.  
  
For example, we might well want to prevent pushing any TravelPushables
up and down stairs or ladders. To do this, we can simply define an
appropriate PushTravelBarrier object and modify the Stairway class to
make use of it:  
  
modify Stairway  
  travelBarrier = \[stairBarrier\]  
;     
     
stairBarrier : PushTravelBarrier  
  explainTravelBarrier(traveler)  
     {  
         local obj = traveler.obj\_;  
         gMessageParams(obj);  
         reportFailure('{The obj/he} can\\t negotiate ladders and stairs. ');  
     }  
;     
  
Although we allow the monolith to be pushed down the tunnel, we may feel
that it shouldn't be possible to push it aboard the ship. This time we
can create a selective PushTravelBarrier that just blocks the
monolith:  
  
monolithBarrier : PushTravelBarrier  
  canPushedObjectPass(obj) { return obj != monolith; }  
  explainTravelBarrier(traveler)  
  {  
    "The monolith is far too large and unwieldy to be pushed there. ";  
  }  
;  
  
Then all we have to do is attach this barrier to the portDeck of the
ship (which is where anything entering the ship will arrive):  
  
portDeck : Deck 'Port Deck' 'the main deck'  
   "This part of the main deck is on the port side of the ship, close to the shore. The  
    deck continues to fore, aft and starboard, and a tall mast towers up from  
    the middle of the main deck. "  
    fore = foreDeck  
    aft = quarterDeck  
    starboard = starboardDeck  
    out = (ship.location)  
    up = mast  
    **travelBarrier = \[monolithBarrier\]  
**;  
  
Once again, this works because a Room (from which the custom Deck class
inherits) inherits from TravelConnector.  
  
