::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Finishing
Touches](finish.htm){.nav} \> Scoring\
[[*Prev:* Starting Out Right](starting.htm){.nav}     [*Next:*
Hints](hints.htm){.nav}     ]{.navnp}
:::

::: main
# Scoring

In older adventure games it used to be conventional to keep a tally of
the player\'s score. This is far from so universal in modern IF, much of
which can get on perfectly well without a score, especially when the
emphasis is more on the story than the game. Some works of IF do still
tally the player\'s score, however, if only as a rough indicator of
progress through the game. While the Airport Game doesn\'t actually need
a score, and would work perfectly well without, it is the sort of game
where keeping score would not be inappropriate, so in this section
we\'ll briefly discuss how to go about it.

The various methods of keeping score are discussed in the section on
[Scoring](../manual/score.htm) in the *adv3Lite Library Manual*. Here
we\'ll look at just one of them, which is probably the best to use
unless there is a specific reason for not doing so (such as the presence
of multiple possible routes through the game). This method consists of
defining a number of **Achievement** objects and calling their
**awardPointsOnce()** method when the player does something that merits
a points increase. You can also use the [awardPoints()]{.code} method,
but the advantage of [awardPointsOnce()]{.code} is that it ensures that
players are not awarded the same points again for repeating the same
action. Using Achievement objects in this way has a couple of other
advantages:

1.  It makes it easy to keep track of what the player has been awarded
    points for, and to inform the player of this;
2.  It enables the game to calculate the maximum possible score
    automatically.

Perhaps the best place to start in devising a scoring system for the
Airport game is to list what we might want to award points for, which
comes down to listing the key tasks the player needs to achieve in order
to win the game. The principal ones would seem to be:

1.  Finding the plane ticket
2.  Showing the ticket to Angela to board the plane
3.  Getting safely off the plane again (past Pablo Cortez)
4.  Turning off the power to the metal detector
5.  Opening the door to the Security Area
6.  Opening the suitcase
7.  Wearing the Pilot\'s Uniform
8.  Entering the cockpit
9.  Taking off safely (thus winning the game)

To make this come out at a round total of 100 possible points, let\'s
say we\'ll award ten points for each of these achievements apart from
opening the suitcase and flying the plane, for which we\'ll award 15
points each.

To define an Achievement object we need to specify the number of points
it\'s worth and the text describing the achievement. This can be done
very simply using the Achievement template, so that, for example, our
achievement objects might look like this:

::: code
    ticketAchievement: Achievement +10 "finding the plane ticket";
    boardingAchievement: Achievement +10 "boarding the plane";
    escapeAchievement: Achievement +10 "escaping Pablo Cortez";
    powerAchievement: Achievement +10 "cutting the power to the metal detector";
    securityAchievement: Achievement +10 "opening the security door";
    suitcaseAchievement: Achievement +15 "opening the suitcase";
    uniformAchievement: Achievement +10 "putting on the pilot's uniform";
    cockpitAchievement: Achievement +10 "entering the cockpit";
    flyingAchievement: Achievement +15 "flying the plane";
:::

All we have to do now is to ensure that carrying out the appropriate
action calls [awardPointsOnce(]{.code}) on the appropriate Achievement
object. For example, for the first achievement:

::: code
    ticket: Thing 'ticket'
        "It's a ticket for flight TI 179 to Buenos Aires. "
        
        readDesc = (desc)
        specialDesc = "A ticket lies on the ground. "
        useSpecialDesc = (location == getOutermostRoom)
        
        bulk = 1
        
        dobjFor(Take)
        {
            action()
            {
                inherited;
                ticketAchievement.awardPointsOnce();
            }   
        }
    ;
:::

If you compile and run the game and try this, you\'ll find that the
points are awarded only the first time you pick up the ticket; the
awardPointsOnce() method makes sure the points are awarded only once.

The second achievement is awarded when the player character shows Angela
the ticket:

::: code
    ++ GiveShowTopic @ticket
        topicResponse()
        {
            "<q>Here you are,</q> you say, holding out the ticket for {the angela}
            to see.\b
            She glances down at the ticket in your hand, and temporarily takes it
            off you to check. <q>That's fine, sir,</q> she assures you as she
            returns it to you. <q>Please move to the rear of the plane to find a
            seat.</q> ";
            angelaGreetingState.ticketSeen = true;
            boardingAchievement.awardPointsOnce();
        }
    ;
:::

The next achievement needs just a little more thought. The points are
awarded when the player reaches the Jetway from the plane, but only when
Pablo Cortez is threatening people at the front of the plane. There\'s
more than one way we could test for this, but one that\'s as good as any
other is to test for whether the takeover Scene is happening. If it is,
we can then award the points in the [travelerEntering()]{.code} method
of the jetway Room:

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
        
        travelerEntering(traveler, origin) 
        {
            if(traveler == me && takeover.isHappening)
                escapeAchievement.awardPointsOnce();
        }    
    ;
:::

Now that we\'ve established the principle, implementing the scoring for
most of the other achievements can be left as an exercise for the
interested reader. There\'s one additional point to consider when we
come to award the final points for flying the plane, however, namely
that in addition to awarding the points we\'ll want to display the final
score and give the player the option of requesting a full breakdown of
the score. We\'ll probably want to offer the same option too even if the
player character kills himself with a botched take-off attempt, so
we\'ll want to tweak the [eachTurn()]{.code} method of the
[takeOff]{.code} Scene thus:

::: code
    takeoff: Scene   
        ...
     
     
        eachTurn()
        {
            local oldSpeed = asi.airspeed;
            
            if(controlColumn.position < 0)
            {
                if(asi.airspeed >= 115)
                {
                    "The aircraft leaves the ground and continues up into the sky,
                    climbing rapidly above the city. Once you've gained enough
                    height you turn the plane --- not south towards Bogota but north
                    towards Miami. Hopefully those hoodlums back in passenger cabin
                    won't notice, though, at least, not until it's far too late. You
                    reach for the radio to call ahead and arrange a suitable
                    reception committee, and then settle back in your seat, content
                    with a job well done. ";
                    
                    flyingAchievement.awardPointsOnce();
                    
                    finishGameMsg(ftVictory, [finishOptionUndo, finishOptionFullScore]);
                }
                else if(asi.airspeed > 90)
                {
                    "The aircraft leaves the ground for a moment and then stalls,
                    rapidly losing speed and bumping back down onto the runway. ";
                    
                    asi.airspeed -= 30;
                }
                else
                    "The aircraft judders slightly but nothing else happens; it
                    isn't traveling nearly fast enough to take off. ";
            }
            
            local thrust = toInteger(thrustLever.curSetting) * 400 - asi.airspeed;
            
            asi.airspeed += (thrust/100);
            
            if(asi.airspeed < 0)
                asi.airspeed = 0;
            
            distanceTraveled += ((asi.airspeed + oldSpeed)/2);        
           
           
            
            /* If we go too far, we run off the end of the runway */
            if(distanceTraveled > 500)
            {
                "The plane reaches the end of the runway, ploughs through the fences
                and crashes into some buildings. What happens after that you never
                know, but it seems a terribly destructive way to displose of a
                plane-load of hoodlums. ";
                
                finishGameMsg(ftDeath, [finishOptionUndo, finishOptionFullScore]);
            }
                
            
            /* 
             *   If we turn the wheel while the plane is moving along the runway,
             *   the results are likely to be catastrophic.
             */        
            
            if(wheel.angle != 0 && asi.airspeed > 0)
            {
                "The plane lurches off the <<if wheel.angle < 0>> port <<else>>
                starboard<<end>> side of the runway <<one of>>into the path of a
                taxying airliner <<or>> and smashes into a hangar <<or>> and
                collides with a stationary airliner <<or>> and runs into a group of
                sheds <<purely at random>> with predictably disastrous consequences.
                Fortunately, you won't be around to answer for your incompetence. ";
                
                finishGameMsg(ftDeath, [finishOptionUndo, finishOptionFullScore]);
            }
            
            /* 
             *   If nothing else dramatic has intervened, report what's happening to
             *   the speed.
             */
            
            if(asi.airspeed > oldSpeed && oldSpeed == 0)
                "The plane starts moving forward. ";
            else if (asi.airspeed > oldSpeed)
                "The plane continues to pick up speed. ";
            
            if(asi.airspeed < oldSpeed && asi.airspeed == 0)
                "The plane comes to a halt. ";
            else if(asi.airspeed < oldSpeed)
                "The plane is losing speed. ";
        }   
    ;
:::

The same option should probably be added when the player character
manages to get himself killed in other ways (notably by provoking Cortez
into shooting him), but this, too, can be left as an exercise for the
reader.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Finishing
Touches](finish.htm){.nav} \> Scoring\
[[*Prev:* Starting Out Right](starting.htm){.nav}     [*Next:*
Hints](hints.htm){.nav}     ]{.navnp}
:::
:::
