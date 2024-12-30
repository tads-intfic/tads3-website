::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> Making a Scene\
[[*Prev:* The Security Area](security.htm){.nav}     [*Next:*
Recapitulation](recap.htm){.nav}     ]{.navnp}
:::

::: main
# Making a Scene

We have now implemented most of the physical mechanics of the game,
apart from the cockpit controls, which we\'ll leave until Chapter 10,
but very little is happening to drive the story forward; so far it
largely depends on the player\'s inquisitiveness, and though there are
now several puzzles to be solved, nothing much is advancing the plot or
providing the player with a great deal of motivation.

One way to structure the plot progression of a piece of IF in adv3Lite
is through the use of Scenes. A **Scene** is simply an object that
starts and stops under author-controlled conditions, and which cause
particular things to occur when it starts or stops or while it is
happening. For the full details of Scenes you can read the section on
[Scenes](../manual/scene.htm) in the *adv3Lite Library Manual*, but the
basics are fairly simple. A Scene begins when its **startsWhen**
property evaluates to true, and ends when its **endsWhen** property
becomes true. When the Scene starts its **whenStarting** method is
invoked, and when it ends its **whenEnding** method is invoked. While a
Scene is current its **eachTurn** method is invoked every turn, and its
**isRecurrent** property determines whether it can take place more than
once.

You can test whether a Scene is currently in progress by querying its
**isHappening** property, or whether a Scene has occurred in the past
(and is now over) from its **hasHappened** property. The **startedAt**
and **endedAt** properties give the turn number on which the Scene
started and ended, while for a recurrent Scene, the **timesHappened**
property indicates how many times the Scene has happened. You can also
use the **during** property of a Doer to specify that it only takes
effect during the Scene or Scenes in question.

To create a Scene we simply define an object of the Scene class, e.g.;

::: code
    myScene: Scene
       startsWhen = (me.isIn(throneRoom))
       whenStarting()
       {
          king.moveInto(throneRoom);
          "The door opens and a man stomps into the room behind you.
          You suddenly find yourself in the presence of the king! ";
       }
       ...
    ;
:::

You may recall that earlier on we said that at some point the drug
cartels would take over the aeroplane standing at Gate 3 for their own
use. This could be a dramatic turning-point in our little airport game,
that motivates the events that follow. A good point to make the takeover
scene start might be when the player character visits the toilet aboard
the plane, which he\'s very likely to do in the course of exploration.
Up until that point he will have been motivated to board the plane in
the hope of flying out of the country, but won\'t have any particular
motivation to leave the plane again to search for the pilot\'s uniform.
Having the passengers thrown off to make way for El Diablo\'s men might
provide the necessary motivation.

As a start, we might then define a Scene that\'s triggered by the player
reaching the plane\'s toilet, and starts with an announcement over the
plane\'s intercom:

::: code
    takeover: Scene
        startsWhen = (bathroom.visited)
        
        whenStarting()
        {
            "An announcement comes over the intercom: <q>Due to scheduling problems,
            passengers are kindly requested to disembark from the aircraft and
            return to the airport lounge. Please remember to take all your personal
            belongings with you.</q>\b
            The announcement is immediately greeted by a chorus of groans from the
            cabin. ";
        }
    ;
:::

A good place to put this might be right at the end of the plane.t file.

That\'s a good start, but obviously rather more than this needs to
happen when the drug cartels take over the plane for their own use. For
one thing, it\'s obviously not much use if the player character leaves
the toilet again to find that absolutely nothing in the cabin has
changed. One thing that will definitely have changed is that the
passengers will no longer be in their seats but in the aisle, trying to
collect their belongings and make their way forward. We therefore want
to change the description of the passengers and add a specialDesc. One
way to tackle that is to change the description of the passenger object
so it\'s conditional on whether the takeover scene is happening or not,
and add a specialDesc that\'s only used when the takeover scene is
happening:

::: code
    airlinePassengers: MultiLoc, Decoration 'passengers;;men women; them'
        "<<if takeover.isHappening>>They seem confused and annoyed in equal
        measure<<else>>You sense an air of impatience about them, as if they're all
        wondering when the aircraft is finally going to leave<<end>>. "
        
        notImportantMsg = 'Better leave them alone; you don\'t want to draw
            attention to yourself. ' 
        
        locationList = [planeFront, planeRear]
        
        specialDesc = "The aisle is full of passengers trying to leave their seats,
            retrieve their luggage, and make their way to the <<if me.isIn(planeRear)>> 
            front of the plane<<else>>exit<<end>>. "
        
        useSpecialDesc = (takeover.isHappening)  
        
    ;
:::

The notImportantMsg of the seats Decoration object referred to them all
being occupied. This too needs to change to reflect that the passengers
are now milling about in the aisle:

::: code
    MultiLoc, Decoration 'seats; red; seating seat airline; them'
        "Like all airline seats, these ones look like they were designed for the
        average-sized person of a century and a half ago. "
        
        notImportantMsg = '<<if takeover.isHappening>>You can\'t get at the seats for
            the press of passengers in the aisle<<else>>All the seats round here
            seem to be taken, so you\'d best leave them alone<<end>>. '
        
        locationList = [planeFront, planeRear]
    ;
:::

The commotion has been caused because El Diablo has instructed his
ruthless lieutenant Pablo Cortez to order the passengers off the plane
so that his party can take it instead. This puts the player character in
some peril, since Cortez might recognize him, and is now standing by the
exit of the plane with some other hoodlums, trying to get the passengers
to leave as quickly as possible. The player character\'s best chance of
getting off the plane unnoticed is to try to pass as a cleaner, which
he\'ll only risk if he\'s carrying *all* the items left in the toilet.
This incidentally should mean that he can\'t put the game into an
unwinnable state by leaving the maintenance room key behind when he
leaves the plane, because once he gets off we\'re not going to let him
back on until he\'s wearing the pilot\'s uniform.

We can achieve this by putting a **TravelConnector** on the exit leading
foreward from the rear of the plane, and setting up its
[canTravelerPass()]{.code} and [explainTravelBarrier()]{.code} to
prevent travel during the takeover scene unless all four items from the
toilet are being carried. In this case, though, we don\'t need to create
a separate TravelConnector object, since in this case we\'re not
implementing it as a physical object but as an abstract means of
enforcing various conditions. We can therefore define it on the
[fore]{.code} property of the planeRear room:

::: code
    planeRear: Room 'Rear of Plane' 'rear[n] of the plane;;airplane aeroplane'
        "The main aisle continue forward to the front of the plane and aft to the
        bathroom between rows of red coloured seats. "
        
        fore: TravelConnector
        {
            destination = planeFront
            canTravelerPass(traveler)
            {
                return !takeover.isHappening || cleanerItemCount(traveler) > 3;
            }
            
            explainTravelBarrier(traveler)
            {       
                "You take a step forward towards the front of the plane, but ";
                
                switch(cleanerItemCount(traveler))
                {                
                case 0:
                case 1:
                    "as you do so, you catch sight of Pablo Cortez, one of El
                    Diablo's most ruthless henchmen, standing near the exit, so you
                    take a hasty step back into the throng of passengers before he
                    can recognize you, wondering how you might disguise yourself. ";   
                    break;
                case 2:
                    "you spot Pablo Cortez, El Diablo's evil lieutenant, standing
                    by the exit looking increasingly impatient at the passengers'
                    disorganized departure. You step back hastily, not at all
                    sure that he'll mistake you for a cleaner. ";
                    break;
                case 3:
                    "at that moment Pablo Cortez, El Diablo's particularly nasty
                    right-hand man, glances aft from the front of the plane, as if
                    he's trying to place you. Maybe you aren't carrying quite enough
                    to be mistaken as a cleaner, so you take a hasty step back. ";
                    break;
                    
                }
            }
            
            travelDesc = "<<if takeover.isHappening>>Clutching the bucket and the
                garbage bag in such a way to hide as much of yourself as possible,
                you push your way through the passengers milling in the aisle,
                hoping to avoid Pablo Cortez's eye. If he catches you, you'll be
                dead before you can say <q>funeral expenses</q>! <<else>>Ignoring
                the passengers seated either side of the aisle, you return to the
                front of the plane. <<end>>"  
            
            cleanerItemCount(traveler)
            {
                return traveler.allContents.countWhich(
                    { o: o is in (bucket, sponge, garbageBag, brassKey) } );
                    
            }
        }
        
        north asExit(fore)
        aft = bathroomDoor
        south asExit(aft)
        
        regions = [planeRegion]    
    ;
:::

We\'ve introduced a new TADS 3 language construct here, namely the
**switch** statement. This compares the value of the expression in
parentheses immediately following the keyword [switch]{.code} with the
constant values after each [case]{.code} statement until it finds one
that matches, and then executes the code it finds from there either
until the end of the switch statement block (the closing brace matching
the open brace immediately following [switch(*expr*)]{.code}, or until
it encounters a **break** statement. For that reason we normally need to
place a [break]{.code} statement at the end of each [case]{.code} block
to prevent fall-through to the next case block (unless we want to allow
fall-through, as in the example above where we want [case 0]{.code} and
[case 1]{.code} to do the same thing). If no matching [case]{.code} is
found the code following **default** is executed if [default]{.code} is
present. In the above example it is not, because we don\'t need it; this
code can only be executed if the player character is holding 0, 1, 2 or
3 items from the toilet, so we have every possible case covered.

In the [explainTravelBarrier()]{.code} method above the [switch]{.code}
statement simply varies the message according to the number of items
from the toilet being carried, at the same time trying to give the
player a gentle hint what needs to be done to sneak past Pablo Cortez
unobserved. [cleanerItemCount(traveler)]{.code} is a service method we
define to return the number of items from the toilet the player
character is currently carrying; it simply looks through all the player
character\'s contents (direct or indirect) and counts the number of them
that are one of the four items. The expression [o is in (bucket, sponge,
garbageBag, brassKey)]{.code} is true if o is either the bucket, the
sponge, the garbageBag or the brassKey (note this use of [is in (
)]{.code}; it can be a very useful tool).

The [canTravelerPass()]{.code} method returns true (and so allows the
player to proceed) either if the takeover scene is not happening (in
which case no further checks are needed) or if the player is carrying
more than three items from the toilet. Finally, the [travelDesc]{.code}
property displays a message describing what happens when the player does
go foreward to the front of the plane. Strictly speaking we should check
whether the takeover scene is happening before we display this message,
but in practice we don\'t actually need to here since the player
character will only ever travel through this TravelConnector during this
scene.

To make sure the player can\'t get the game into an unwinnable state by
dropping the key in the front of the cabin before leaving the plane
we\'ll use a Doer to prevent this from happening:

::: code
    Doer 'drop Thing'
        execAction(c)
        {
            "You'd better not start dropping things here; it might make Cortez
            notice you. ";
            exit;
        }
        
        where = planeFront
        during = takeover
    ;
:::

Notice the use of the [where]{.code} and [during]{.code} properties to
restrict when this Doer is applicable: it only takes effect at the front
of the plane when the takeover scene is happening.

Next, we want to stop the player character going back aboard the plane
until he\'s wearing the pilot\'s uniform. We can do that by defining
another TravelConnector, this time on the east property of the jetway.
While we\'re at it we should also change the description of the jetway
to reflect the change in situation:

::: code
    jetway: Room 'Jetway' 'jetway;short enclosed; walkway'
        "This is little more than a short enclosed walkway leading west-east from
        the gate to the plane. <<if takeover.isHappening>> Right now it's thronging
        with a stream of disgruntled passengers who have just been forced to
        disembark from their flight. <<else unless takeover.hasHappened>>You seem to
        be the only person here, as if everyone else has already boarded.<<end>> "
        
        west = gate3
        east: TravelConnector
        {
            destination = planeFront
            
            canTravelerPass(traveler) { return !takeover.isHappening; }
            explainTravelBarrier(traveler)
            {
                "You dare not go back aboard the plane until you've found a rather
                more effective disguise than a handful of cleaning items. ";
            }
        }
        
    ;
:::

This description mentions a throng of disgruntled passengers, which we
should implement and move into the jetway when the scene starts. We
should also remove the dark-suited men from the snack bar, since
they\'re now notionally about to board the plane. The start of the scene
might also be a good time to cut off the announcements calling for
passengers to board at Gate 3, since this clearly isn\'t relevant any
more:

::: code
    takeover: Scene
        startsWhen = (bathroom.visited)
        
        whenStarting()
        {
            "An announcement comes over the intercom: Due to scheduling problems,
            passengers are kindly requested to disembark from the aircraft and
            return to the airport lounge. Please remember to take all your personal
            belongings with you.\b
            The announcement is immediately greeted by a chorus of groans from the
            cabin. ";   
            
            announcementObj.stopDaemon();
            disembarkingPassengers.moveInto(jetway);
            darkSuits.moveInto(nil);        
          
        }
    ;

    disembarkingPassengers: Decoration 
        'disgruntled passengers; disembarking grumbling of[prep]; men women people 
        stream throng; them'
        
        "Some of the passengers forced to disembark from the plane are standing
        around grumbling, and some are making their way back into the terminal,
        while others continue to emerge from the plane. "
        
        notImportantMsg = 'You don\'t have time for these people right now. ' 
    ;
:::

This might be a good point at which to ensure the player character
doesn\'t start the announcements up again the next time he passes
through the metal detector. We can check whether the takeover Scene has
ever started by checking whether or not its startAt property is nil:

::: code
    + metalDetector: Passage 'metal detector; crude; frame'
        "The metal detector is little more than a crude metal frame, just large
        enough to step through, with a power cable trailing across the floor. "
        destination = concourse
        
        ...
        
        travelDesc()
        {
            "You pass through the metal detector without incident. ";
            
            if(takeover.startedAt == nil)
                announcementObj.start();
        }
    ;
:::

We\'ve defined what happens when the takeover scene starts; we also need
to define its ending. We\'ll end it when the player character puts on
the pilot\'s uniform, since this is what will allow the player character
to board the plane once more. One thing we\'ll want to do at that point
is to remove the disgruntled passengers from the jetway, since they
should all have left by then; we should also remove the original set of
passengers from the plane and replace them with a new set:

::: code
    takeover: Scene
        startsWhen = (bathroom.visited)
        
        whenStarting()
        {
            "An announcement comes over the intercom: <q>Due to scheduling problems,
            passengers are kindly requested to disembark from the aircraft and
            return to the airport lounge. Please remember to take all your personal
            belongings with you.</q>\b
            The announcement is immediately greeted by a chorus of groans from the
            cabin. ";   
            
            announcementObj.stopDaemon();
            disembarkingPassengers.moveInto(jetway);
            darkSuits.moveInto(nil);
        }
        
        endsWhen = (uniform.wornBy == me)
        
        whenEnding()
        {
            disembarkingPassengers.moveInto(nil);
            airlinePassengers.moveInto(nil);
            criminalPassengers.moveInto(planeFront);
        }
    ;

    criminalPassengers: Decoration 'passengers; smart dark of[prep]; men gangsters
        suits lieutenants bunch people; them'
        "They may all be dressed in smart dark suits but you're well aware they're
        little more than a bunch of gangsters, the senior lieutenants of men like El
        Diablo who'd slit their own grandmothers' throats for a couple of pesos. "
        
        notImportantMsg = 'You really don\'t want to do anything that might make any
            of those people take any notice of you. '
            
        beforeTravel(traveler, connector)
        {
            if(traveler == me && connector == planeRear)
            {
                "You really don't want to call attention to yourself by walking past
                those passengers to the rear of the plane, since even the most
                simple-minded gangster will think it odd if the pilot goes anywhere
                but the cockpit. ";
                
                exit;
            }
        }
    ;
:::

Although the [airlinePassengers]{.code} object is a MultiLoc, we can
quite happily move it off stage with [moveInto(nil)]{.code}. There\'s no
need to make the [criminalPassengers]{.code} object a MultiLoc since we
shan\'t be letting the player character return to the rear of the plane.
This is ensured by the [beforeTravel()]{.code} method defined on the
[criminalPassengers]{.code} object. The [beforeTravel()]{.code} method
is called on all objects in scope just before travel is about to be
carried out, and can be used to allow any object to react to the travel
or, as here, veto it (via the use of [exit]{.code}). There\'s also an
[afterTravel(traveler, connector)]{.code} method that\'s called on every
object in scope just after travel has been completed.

One last thing: the player could defeat our scheme by donning the
uniform and then taking it off again before boarding the plane. To
prevent this we\'ll insert a check() stage into the
[dobjFor(Doff)]{.code} handling of the uniform (Doff is the action
corresponding to taking clothes off) to prevent the player character
from taking off the uniform once he\'s put it on:

::: code
    ++ uniform: Wearable 'pilot\'s uniform; timo large'  
        "It's a uniform for a Timo Airlines pilot. It's a little large for you, but
        <<if wornBy == me>> it's not too bad a f<<else>>you could probably wear
        <<end>>it. "
        
        bulk = 6
        subLocation = &remapIn
        
        dobjFor(Doff)
        {
            check()
            {
                "After going to all that trouble to get this uniform you're in no
                hurry to take it off. ";
            }
        }
    ;
:::

Note that we\'ve also tweaked the description of the uniform so that it
changes when the player character is wearing it. We\'ve rather sneakily
defined it so that the \'it\' at the end can also do duty as the last
two letters of \'fit\', but maybe in the interests of readability
that\'s not the kind of trick we should use too often.

There\'s a little more work for our takeover scene to do: in particular,
some of our non-player characters will need to move around when it
starts and ends, but we shan\'t start defining them until chapter 10. In
the meantime, this introduction to the use of scenes should hopefully
have shown how useful they can be in controlling conditions at turning
points in your story.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> Making a Scene\
[[*Prev:* The Security Area](security.htm){.nav}     [*Next:*
Recapitulation](recap.htm){.nav}     ]{.navnp}
:::
