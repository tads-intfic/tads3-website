---
layout: docs
---
<span class="title">Traveler</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[273](../source/travel.t.html#273)\],
[en_us.t](../file/en_us.t.html)\[[2769](../source/en_us.t.html#2769)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



A Traveler is an object that can travel. The two main kinds of travelers
are Actors and Vehicles. A vehicle can contain multiple actors, so a
single vehicle travel operation could move several actors.

This class is intended to be multiply inherited, since it is not based
on any simulation object class.

*Modified in
[en_us.t](../file/en_us.t.html)\[[2769](../source/en_us.t.html#2769)\]:*  
English-specific Traveler changes

`class `**`Traveler`**` :   `[`TravelMessageHandler`](../object/TravelMessageHandler.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Traveler`**  
[`TravelMessageHandler`](../object/TravelMessageHandler.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Traveler`**  
[`Actor`](../object/Actor.html)  
[`UntakeableActor`](../object/UntakeableActor.html)  
[`Person`](../object/Person.html)  
[`Vehicle`](../object/Vehicle.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`getTravelerActors`](#getTravelerActors)[`getTravelerMotiveActors`](#getTravelerMotiveActors)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canTravelVia`](#canTravelVia)[`checkDirectlyInRoom`](#checkDirectlyInRoom)[`checkMovingTravelerInto`](#checkMovingTravelerInto)[`describeArrival`](#describeArrival)[`describeDeparture`](#describeDeparture)[`describeNpcArrival`](#describeNpcArrival)[`describeNpcDeparture`](#describeNpcDeparture)[`explainNoTravelVia`](#explainNoTravelVia)[`forEachTravelingActor`](#forEachTravelingActor)[`getNotifyTable`](#getNotifyTable)[`isActorTraveling`](#isActorTraveling)[`isTravelerCarrying`](#isTravelerCarrying)[`travelerLocName`](#travelerLocName)[`travelerPreCond`](#travelerPreCond)[`travelerRemoteLocName`](#travelerRemoteLocName)[`travelerSeenBy`](#travelerSeenBy)[`travelerTravelTo`](#travelerTravelTo)[`travelerTravelWithin`](#travelerTravelWithin)

Inherited from `TravelMessageHandler` :  
[`getNominalTraveler`](../object/TravelMessageHandler.html#getNominalTraveler)[`sayArriving`](../object/TravelMessageHandler.html#sayArriving)[`sayArrivingDir`](../object/TravelMessageHandler.html#sayArrivingDir)[`sayArrivingDownStairs`](../object/TravelMessageHandler.html#sayArrivingDownStairs)[`sayArrivingLocally`](../object/TravelMessageHandler.html#sayArrivingLocally)[`sayArrivingThroughPassage`](../object/TravelMessageHandler.html#sayArrivingThroughPassage)[`sayArrivingUpStairs`](../object/TravelMessageHandler.html#sayArrivingUpStairs)[`sayArrivingViaPath`](../object/TravelMessageHandler.html#sayArrivingViaPath)[`sayDeparting`](../object/TravelMessageHandler.html#sayDeparting)[`sayDepartingDir`](../object/TravelMessageHandler.html#sayDepartingDir)[`sayDepartingDownStairs`](../object/TravelMessageHandler.html#sayDepartingDownStairs)[`sayDepartingLocally`](../object/TravelMessageHandler.html#sayDepartingLocally)[`sayDepartingThroughPassage`](../object/TravelMessageHandler.html#sayDepartingThroughPassage)[`sayDepartingUpStairs`](../object/TravelMessageHandler.html#sayDepartingUpStairs)[`sayDepartingViaPath`](../object/TravelMessageHandler.html#sayDepartingViaPath)[`sayTravelingRemotely`](../object/TravelMessageHandler.html#sayTravelingRemotely)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="getTravelerActors"></span>

`getTravelerActors`

[travel.t](../file/travel.t.html)\[[723](../source/travel.t.html#723)\]



Get the list of actors taking part in the travel. When an actor is the
traveler, this list simply contains the actor itself; for a vehicle or
other composite traveler that moves more than one actor at a time, this
should return the list of all of the actors involved in the travel.



<span id="getTravelerMotiveActors"></span>

`getTravelerMotiveActors`

[travel.t](../file/travel.t.html)\[[734](../source/travel.t.html#734)\]



Get the list of actors traveling undo their own power. In the case of an
actor traveling directly, this is just the actor; in the case of an
actor pushing something, this is likewise the actor; in the case of a
group of actors traveling together, this is the list of traveling
actors; in the case of a vehicle, this is an empty list, since anyone
traveling with the vehicle is traveling under the vehicle's power.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canTravelVia"></span>

`canTravelVia (connector, dest)`

[travel.t](../file/travel.t.html)\[[308](../source/travel.t.html#308)\]



Can the traveler travel via the given connector to the given
destination? Returns true if the travel is permitted, nil if not.

By default, this simply returns true to indicate that the travel is
allowed. Individual instances can override this to enforce limitations
on what kind of travel the traveler can perform.



<span id="checkDirectlyInRoom"></span>

`checkDirectlyInRoom (dest, allowImplicit)`

[travel.t](../file/travel.t.html)\[[279](../source/travel.t.html#279)\]



Check, using pre-condition rules, that the traveler is directly in the
given room. We'll attempt to implicitly remove the actor from any nested
rooms within the given room.



<span id="checkMovingTravelerInto"></span>

`checkMovingTravelerInto (room, allowImplicit)`

[travel.t](../file/travel.t.html)\[[289](../source/travel.t.html#289)\]



Check, using pre-condition rules, that the traveler is in the given
room, moving the traveler to the room if possible.



<span id="describeArrival"></span>

`describeArrival (origin, backConnector)`

[travel.t](../file/travel.t.html)\[[415](../source/travel.t.html#415)\]



Show my arrival message - this is shown when I'm entering a room in view
of the player character from a location where the player character could
not see me. 'backConnector' is the connector in the destination location
from which we appear to be emerging.



<span id="describeDeparture"></span>

`describeDeparture (dest, connector)`

[travel.t](../file/travel.t.html)\[[327](../source/travel.t.html#327)\]



Show my departure message - this is shown when I'm leaving a room where
the player character can see me for another room where the player
character cannot see me.



<span id="describeNpcArrival"></span>

`describeNpcArrival (origin, backConnector)`

[travel.t](../file/travel.t.html)\[[462](../source/travel.t.html#462)\]



Describe the arrival of a non-player character or any other traveler
that doesn't involve the player character.



<span id="describeNpcDeparture"></span>

`describeNpcDeparture (dest, connector)`

[travel.t](../file/travel.t.html)\[[355](../source/travel.t.html#355)\]



Describe the departure of a non-player character, or any traveler not
involving the player character.



<span id="explainNoTravelVia"></span>

`explainNoTravelVia (connector, dest)`

[travel.t](../file/travel.t.html)\[[320](../source/travel.t.html#320)\]



Explain why the given travel is not possible. This is called when
canTravelVia() returns nil, to display a report to the player explaining
why the travel was disallowed.

By default, we do nothing, since our default canTravelVia() never
disallows any travel. If canTravelVia() is overridden to disallow travel
under some conditions, this must be overridden to generate an
appropriate explanatory report.



<span id="forEachTravelingActor"></span>

`forEachTravelingActor (func)`

[travel.t](../file/travel.t.html)\[[710](../source/travel.t.html#710)\]



invoke a callback function for each traveling actor



<span id="getNotifyTable"></span>

`getNotifyTable ( )`

[travel.t](../file/travel.t.html)\[[665](../source/travel.t.html#665)\]



Get a lookup table giving the set of objects to be notified of a
beforeTravel/afterTravel event. By default, we return a table including
every object connected to the traveler by containment.



<span id="isActorTraveling"></span>

`isActorTraveling (actor)`

[travel.t](../file/travel.t.html)\[[681](../source/travel.t.html#681)\]



Is the given actor traveling with this traveler? Returns true if the
actor is in my getTravelerActors list.



<span id="isTravelerCarrying"></span>

`isTravelerCarrying (obj)`

[travel.t](../file/travel.t.html)\[[692](../source/travel.t.html#692)\]



Is the given object being carried by the traveler? Returns true if the
object is inside the traveler itself, or is inside any of the actors
traveling.



<span id="travelerLocName"></span>

`travelerLocName ( )`

[en_us.t](../file/en_us.t.html)\[[2776](../source/en_us.t.html#2776)\]



Get my location's name, from the PC's perspective, for describing my
arrival to or departure from my current location. We'll simply return
our location's destName, or "the area" if it doesn't have one.



<span id="travelerPreCond"></span>

`travelerPreCond (conn)`

[travel.t](../file/travel.t.html)\[[298](../source/travel.t.html#298)\]



Get the travel preconditions specific to the traveler, for the given
connector. By default, we return no extra conditions.



<span id="travelerRemoteLocName"></span>

`travelerRemoteLocName ( )`

[en_us.t](../file/en_us.t.html)\[[2792](../source/en_us.t.html#2792)\]



Get my "remote" location name, from the PC's perspective. This returns
my location name, but only if my location is remote from the PC's
perspective - that is, my location has to be outside of the PC's
top-level room. If we're within the PC's top-level room, we'll simply
return an empty string.



<span id="travelerSeenBy"></span>

`travelerSeenBy (actor)`

[travel.t](../file/travel.t.html)\[[675](../source/travel.t.html#675)\]



Determine if the given actor can see this traveler. By default, we'll
simply check to see if the actor can see 'self'.



<span id="travelerTravelTo"></span>

`travelerTravelTo (dest, connector, backConnector)`

[travel.t](../file/travel.t.html)\[[555](../source/travel.t.html#555)\]



Travel to a new location. Moves the traveler to a new location via the
given connector, triggering any side effects of the travel.

Note that this routine is not normally called directly; in most cases,
the actor's travelTo is called, and it in turn invokes this method in
the appropriate traveler.

'dest' is the new location to which we're traveling. 'connector' is the
TravelConnector we're traversing from the source location to reach the
new destination; the connector is normally the invoker of this routine.
'backConnector' is the connector in the destination from which the actor
will appear to emerge on the other end of the travel.



<span id="travelerTravelWithin"></span>

`travelerTravelWithin (actor, dest)`

[travel.t](../file/travel.t.html)\[[655](../source/travel.t.html#655)\]



Perform "local" travel - that is, travel between nested rooms within a
single top-level location. By default, we simply defer to the actor to
let it perform the local travel.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


