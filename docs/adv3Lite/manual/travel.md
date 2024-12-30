::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> TravelConnectors and Barriers\
[[*Prev:*Doors](door.htm){.nav}     [*Next:* Keys](key.htm){.nav}    
]{.navnp}
:::

::: main
# Travel Connectors and Barriers

## TravelConnectors

In addition to Doors, the direction property of a Room can point to a
TravelConnector (a Door is in fact a particular kind of
TravelConnector). A TravelConnector is a kind of object that allows you
to define:

-   Whether or not the exit should be listed in the exit lister.
-   Whether or not the exit is apparent to the player character (if not,
    then obviously it cannot be used).
-   Whether or not travel should be allowed in that direction according
    to any condition you care to define.
-   Any side-effects of travel, such as displaying a message describing
    the travel.
-   Whether or not the player character knows where the exit leads (this
    is relevant to the routeFinder).

The methods and properties that enable a TravelConnector to be used for
these purposes are as follows:

-   **destination** (a Room) Where this TravelConnector (and hence the
    exit to which it is attached) leads to. This would normally be set
    to a Room.
-   **isConnectorApparent** (true or nil) This must be true if travel is
    to be allowed via this connector. By default this property is true.
    In this context \'apparent\' means \'not concealed\'. To be usable
    the TravelConnector must be not only apparent but visible (i.e.
    [isConnectorVisible]{.code} must be true); this is the case if
    [isConnectorApparent]{.code} is true and the lighting conditions are
    sufficient to see the exit by.
-   **isConnectorListed** (true or nil) If this is true then the
    corresponding exit will be shown in the exit lister. This can be set
    to nil to hide the exit (presumably until something occurs to reveal
    it, when you would then set it to true). By default
    [isConnectorListed]{.code} takes its value from
    [isConnectorApparent]{.code}.
-   **isDestinationKnown** (true or nil) This is true when the player
    character knows where this exit leads. By default this is true if
    the destination of the connector has been visited (visited = true).
    You can, however, define it as true at the start of the game if the
    player character is meant to start out knowing where the exit leads
    (though it may be easier to define familiar = true on a region than
    to set isDestination = true on a whole lot of TravelConnectors).
    This property is mostly relevant to the [routeFinder](pathfind.htm)
    (the mechanism behind the GO TO command). Note that a Room is a
    TravelConnector whose destination is itself (so that if an exit
    leads directly to a room the destination of that exit is known if
    the destination room has been visited). Note also that a slightly
    different rule applies to [doors](door.htm): the isDestinationKnown
    property of both sides of a door becomes true once the player
    character passes through one or other side of it.
-   **noteTraversal(actor)** This method is called when *actor*
    traverses this connector, and can be used to carry out any
    side-effects of the travel. By default we simply display the
    [travelDesc]{.code} here if *actor* is the player character and
    update the [traversedBy]{.code} property with the actor and/or
    vehicle and/or travel pushable that has just traversed us.
-   **travelDesc** (double-quoted string) A message that\'s displayed
    when the player character traverses this TravelConnector
    (alternatively, this could be defined as a method that carried out
    all sorts of side effects of traversing this TravelConnector). Note
    that if [noteTraversal()]{.code} is overridden without a call to
    [inherited()]{.code}, the [travelDesc]{.code} will be disabled. Note
    also that the default behaviour of travelDesc is to call the
    TravelConnector\'s doScript() method if the TravelConnector is also
    a Script; this makes it easy to vary the message displayed when the
    player character traverses the connector by adding an
    [EventList](eventList.htm) class to the TravelConnector\'s class
    list and defining an [eventList]{.code} property on it.
-   **traversedBy** A list of all the actors, vehicles and
    push-travelers (objects pushed around by an actor) that have
    traversed this Travel Collector over the course of the game.
-   **hasBeentraversedBy(traveler)** Method that returns true if an only
    if this TravelConnector has been traversed by *traveler*, where
    *traveler* can be an actor (including the player character), a
    vehicle, or a push-traveler.
-   **traversed** (true or nil). Returns true if and only if this
    TravelConnector has been traversed by the player character, which is
    likely to be the most common traversal condition game code wishes to
    test.
-   **execTravel(actor, traveler, conn)** This method is called by
    travelVia(actor) to move the actor to the destination when
    travelling via the corresponding exit. You won\'t normally want to
    override this method unless you want it to do something drastically
    different like killing the player character or ending the game for
    some other reason. The normal behaviour of this method is defer to
    the execTravel() method of the room being travelled to, which
    actually carries out the travel and issues all the appropriate
    travel notifications: in particular it issues the before travel
    notifications (by calling beforeTravel(actor, self) on every object
    in scope, including the current location), then, if the actor is the
    player character it displays the travelDesc message (if any) and
    notes that the player character now knows where this TravelConnector
    leads. It next calls execTravel(actor) and finally carries out the
    after travel notifications on the new location (by calling
    afterTravel(actor, self) on every object in scope in the new
    location).
-   **travelVia(actor)** This is the principal method called when the
    actor tries to traverse this TravelConnector. It first checks for
    travel barriers (see below), and then if the travel barriers don\'t
    prevent travel, it calls the [execTravel()]{.code} method. The only
    reason to override [travelVia()]{.code} would be if you wanted
    attempting to travel via this connector to do something drastically
    different from a normal travel action.
-   **canTravelerPass(traveler)** Returns true if the traveler is
    allowed to pass through this TravelConnector. Return nil to prevent
    travel (normally travel would be blocked conditionally, e.g.,
    perhaps only certain objects would be allowed to pass, or the player
    character is only allowed to pass if he\'s wearing the magic ring or
    not carrying the great big ladder that won\'t fit through the narrow
    gap). The traveler parameter would normally be the traveling actor,
    but might be a vehicle in which the actor is traveling.
-   **explainTravelBarrier(traveler)** If canTravelerPass(traveler)
    returns nil (or might return nil), explainTravelBarrier(traveler)
    should display a message explaining why travel is disallowed.
-   **travelBarriers** An optional list of TravelBarrier objects (or a
    single TravelBarrier object) that enforce further conditions on
    traveling via this connector (see further below).
-   **transmitsLight**: can be used to control whether or not a
    connector (typically a door) that leads to a lit room is visible
    from a dark room. This can be used, for example, to determine
    whether or not the player character can use a door from a dark room
    to a lit one. This is true by default.

Note that the parameter of canTravelerPass() etc. is called traveler: it
will normally be the actor doing the traveling but it could also be an
object that an actor is attempting to push through this TravelConnector
(via a command like PUSH TROLLEY NORTH, for example). This means that
canTravelerPass(traveler) can also be used to selectively prevent the
pushing of objects in certain directions; for example, you might want to
use this method to prevent a heavy object being pushed up a flight of
stairs.

An example of a TravelConnector which conditionally blocks travel could
be one that only allows travel down a smoke-filled passage if the player
is wearing a wet blanket, which could be defined thus:

::: code
    landing: Room 'Landing' 'landing'
        "The smoke is already becoming so thick here that it's hard to see much.
        Your bedroom lies to the north -- if you can make your way through the
        smoke. Most of the other upstairs rooms are down the passage the other way,
        to the south, but the worst of the smoke seems to be coming from there. "
        
        down = landingStairs
        
        north: TravelConnector
        {
            destination = bedroom
            
            travelDesc = "You manage to force your way through the smoke, coughing
                and choking as you go. "
            
            canTravelerPass(actor)
            {
                return blanket.wornBy == actor && blanket.isWet;
            }
            
            explainTravelBarrier(actor)
            {
                if(blanket.wornBy == actor)
                    "You take a few steps down the corridor but the smoke forces you
                    back as the blanket starts to get singed. ";
                else
                    "The smoke is too thick; you find yourself coughing and choking
                    after the first step and are forced to retreat. ";
            }
        }
        
        
        south  { "The smoke is too thick that way; you almost choke to death
            with the first step south you take. Well, it's not as if there's
            anything down there you really need all that much right now. "; }
        
        regions = upstairs
    ;
:::

This incidentally illustrates that if we only want to use a particular
TravelConnector once, we don\'t need to define it as separate named
object, since we can instead define it as an anonymous nested object
directly on the appropriate direction property.

Note that a TravelConnector only establishes a connection in one
direction: the TravelConnector defined on the [north]{.code} property in
the example above creates a direction north from the landing to the
bedroom, but no connection back south from the bedroom to the landing.
Often, as here, that\'s what we want (since we wouldn\'t want the same
travel restrictions to apply to the attempt to return from the bedroom
to the landing), but if you do want a TravelConnector that works the
same both ways, you could try using the [SymConnector]{.code} defined in
the [symconn](../../extensions/docs/symconn.htm) extension.

[]{#travelbarrier}

## TravelBarriers

For many simple cases conditionally preventing travel by using the
canTravelerPass() method of a TravelConnector will suffice, but there
may be situations where it\'s not the most convenient way to do it. The
two most common situations where this might arise are where:

1.  You want to apply the same condition (and display the same refusal
    message if it\'s not met) to a number of TravelConnectors, and it
    would be tedious to have to define the same canTravelerPass() and
    explainTravelBarrier() methods on each of them.
2.  Several different conditions apply on a TravelConnector, each
    requiring a different explanation if it\'s not met, so that the
    explainTravelBarrier() method would need to contain a messy mass of
    if statements that largely duplicate those in the canTravelerPass()
    method.

If either or both of those two conditions obtain, you might be better
off defining and using a TravelBarrier object to represent the
conditional barrier to travel. There are basically two methods you need
to define when creating a TravelBarrier object:

-   **canTravelerPass(traveler, connector)** Return true if *traveler*
    is allowed to traverse *connector* (the TravelConnector object to
    which this TravelBarrier instance is attached) and nil otherwise.
-   **explainTravelBarrier(traveler, connector)** Explain why the
    traveler is not permitted to traverse this connector if travel is
    disallowed.

Note the additional *connector* parameter on these methods. This is most
likely to be useful when you want the explainTravelBarrier() method to
name the connector that\'s being blocked. For example, suppose our game
had several exits that required the player character to be wearing a wet
blanket in order to penetrate the smoke. We might set it up thus:

::: code
    landing: Room 'Landing' 'landing'
        "The smoke is already becoming so thick here that it's hard to see much.
        Your bedroom lies to the north -- if you can make your way through the
        smoke. Most of the other upstairs rooms are down the passage the other way,
        to the south, but the worst of the smoke seems to be coming from there. "
        
        down = landingStairs
        
        north: TravelConnector
        {
            destination = bedroom
            
            travelDesc = "You manage to force your way through the smoke, coughing
                and choking as you go. "
            
            theName = 'the corridor'
            
            travelBarriers = [smokeBarrier]
        }
        
        
        south: TravelConnector
        {
            destination = bathroom
           
            travelDesc = "With the aid of the blanket, you are able to make your way 
             through the smoke to the bathroom. "
            
            theName = 'bathroom passage'
           
            travelBarriers = [smokeBarrier]
        }   
        
        regions = upstairs
    ;

    smokeBarrier: TravelBarrier
            canTravelerPass(actor, connector)
            {
                return blanket.wornBy == actor && blanket.isWet;
            }
            
            explainTravelBarrier(actor, connector)
            {
                if(blanket.wornBy == actor)
                    "You take a few steps down <<connector.theName>> but the smoke forces you
                    back as the blanket starts to get singed. ";
                else
                    "The smoke is too thick; you find yourself coughing and choking
                    after the first step and are forced to retreat. ";
            }
    ;
:::

Note how we\'ve added a custom theName property to the two
TravelConnectors so that smokeBarrier.explainTravelBarrier(actor,
connector) can refer to them.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> TravelConnectors and Barriers\
[[*Prev:* Doors](door.htm){.nav}     [*Next:* Keys](key.htm){.nav}    
]{.navnp}
:::
