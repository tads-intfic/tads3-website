::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Cockpit
Controls](cockpit.htm){.nav} \> Taking Off\
[[*Prev:* Responding to Actions](responding.htm){.nav}     [*Next:*
Character Building](character.htm){.nav}     ]{.navnp}
:::

::: main
# Taking Off

Now that we have a bunch of controls in the cockpit and an aircraft on
the tarmac, we just need to make the plane move and take off. Again
there are now several ways we could go about this, but one convenient
way is to use a Scene. To keep things simple we\'ll have the Scene
triggered by pushing the engine start button. The start of the scene
will consist of a short cut-scene in which the protagonist taxis the
plane to the start of the runway, leaving the plane ready for take-off.
We\'ll also reset the controls to their starting positions, and close
off the exit from the plane to the walkway:

::: code
    takeoff: Scene
        startsWhen = (ignitionButton.isOn == true)
        
        whenStarting()
        {
            "A few moments later a truck tows your plane away from the jetway, and
            following the instructions from the control tower, you taxi the plane to 
            the start of Runway 2 just as the sun finally disappears below the
            horizon. About a minute later, you are cleared for take-off. ";
            
            /* reset all controls to their initial positions */
            thrustLever.curSetting = '0';
            wheel.angle = 0;
            controlColumn.position = 0;
            
            /* close off the exit from the plane */
            
            planeFront.port = 'You can\'t leave the plane now it\'s left the jetway.
                ';
        }
:::

We\'ll use the [eachTurn()]{.code} method of the takeoff scene to
control just about everything else. A scene\'s [eachTurn()]{.code}
method is executed every turn the scene is happening. We can therefore
use it to check the state of the controls at the end of every turn after
the button is pushed and make the plane respond accordingly. To do this
we need to check how fast the plane is travelling, and how far down the
runway it has gone. If it goes too far it\'ll go past the end of the
runway, presumably with dire consequences as it ploughs into whatever
lies beyond. We\'ll define a custom [distanceTraveled]{.code} property
on the takeoff scene to keep track of how far the plane has travelled
down the runway. We can used [asi.airspeed]{.code} to keep track of its
speed.

The first thing to check for is whether the plane should now take off.
It should do so if the control column has been pulled back and the
airspeed is sufficient for takeoff; we then display a message describing
the successful take-off and end the game in victory. If the player
character pulls back on the stick a little prematurely, then the plane
starts to take off but then stalls, coming back down with a bump. If the
player pulls back much too early then nothing much happens until the
plane has picked up just enough speed to start taking off and then
stall:

::: code
        /* The total distance traveled along the runway */
        distanceTraveled = 0
        
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
                    towards Miami. Hopefully those hoodlums back in the passenger cabin
                    won't notice, though, at least, not until it's far too late. You
                    reach for the radio to call ahead and arrange a suitable
                    reception committee, and then settle back in your seat, content
                    with a job well done. ";
                    
                    finishGameMsg(ftVictory, [finishOptionUndo]);
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
:::

We next need to do some calculations to determine how fast the plane is
now travelling and how far down the runway it has travelled. There\'s no
attempt to create equations of motion that exactly model real-world
physics here; some very rough approximations will do. We\'ll assume that
the engines provide thrust that\'s proportional to the setting of the
thrust lever, but that there\'s also some drag proportional to the
current speed. We then increase the airspeed in proportion to the net
thrust. Since in principle this could be negative if the drag exceeds
the engine thrust (e.g. because the player pulls back the thrust lever
to zero after setting the plane in motion) we add a test to ensure that
the airspeed doesn\'t become negative. We then increment the distance
traveled by the average of the new airspeed and the previous airspeed
(assuming constant acceleration over the turn). Since this isn\'t a
tutorial in applied mathematics, don\'t worry if these details don\'t
make too much sense to you. In terms of code they look like:

::: code
            local thrust = toInteger(thrustLever.curSetting) * 400 - asi.airspeed;
            
            asi.airspeed += (thrust/100);
            
            if(asi.airspeed < 0)
                asi.airspeed = 0;
            
            distanceTraveled += ((asi.airspeed + oldSpeed)/2);
:::

Here we\'re simply assuming that one turn represents an appropriate unit
of time. Note the use of the **toInteger()** function to convert the
current setting of the thrust lever (a string property) into a number we
can use in calculations.

If we\'ve reached this point in the [eachTurn()]{.code} method the plane
hasn\'t taken off yet, so we need to check that it hasn\'t overshot the
runway. If it has, then a fatal crash occurs and we end the game in
death:

::: code
           /* If we go too far, we run off the end of the runway */
            if(distanceTraveled > 500)
            {
                "The plane reaches the end of the runway, ploughs through the fences
                and crashes into some buildings. What happens after that you never
                know, but it seems a terribly destructive way to dispose of a
                plane-load of hoodlums. ";
                
                finishGameMsg(ftDeath, [finishOptionUndo]);
            }
:::

The figure of 500 for the length of the runway wasn\'t arrived at by any
kind of calculation, by the way; I simply ran the previous code to get
an idea of how much length of runway was needed to allow the plane to
take off and then added a safety margin by rounding it up to a nice
round number.

The final check we need to make is on the wheel position. Here we\'ll
simply assume that turning the wheel while the plane is moving down the
runway will send it to one side or the other with catastrophic effects,
although in case the player tries this more than once we\'ll introduce
some slight variations into the description of the ensuing catastrophe:

::: code
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
                
                finishGameMsg(ftDeath, [finishOptionUndo]);
            }
:::

If you\'ve been following the logic of what we\'ve been doing up until
now at all closely, you\'ll have noticed that this is the only effect
that turning the wheel can have in the game, which may make it seem a
little pointless. In a way that\'s true, but even this most minimalistic
implementation of the cockpit controls needs some means by which the
aircraft could in theory be steered; the absence of any wheel would
probably stretch player credulity too far. An alternative would have
been to implement the wheel but either not allow the player to turn it
at all, or not allow the player to turn it during the takeoff scene
(perhaps warning of the catastrophic consequences that would result),
but either of these approaches would rob the player of even more agency
in controlling the plane than our minimal implementation already does.
If you feel one of the other approaches would be preferable, however,
you can always try to implement one or the other of them yourself, using
the tools we have already covered.

The final task for this [eachTurn()]{.code} to perform is to provide the
player with some feedback on what\'s happening if nothing more dramatic
has intervened:

::: code
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

Hopefully the logic of this should be reasonably apparent. If the speed
has increased since the previous turn, we select a message depending on
whether the plane has just started to move or is continuing to move. If
the speed has decreased we likewise select a message depending on
whether the plane is still moving or has come to a halt.

If we now put all the pieces together, the complete definition of the
takeoff scene (which does all the work of responding to the movement of
the cockpit controls) looks like this:

::: code
    takeoff: Scene
        startsWhen = (ignitionButton.isOn == true)
        
        whenStarting()
        {
            "A few moments later a truck tows your plane away from the jetway, and
            following the instructions from the control tower, you taxi the plane to 
            the start of Runway 2 just as the sun finally disappears below the
            horizon. About a minute later, you are cleared for take-off. ";
            
            /* reset all controls to their initial positions */
            thrustLever.curSetting = '0';
            wheel.angle = 0;
            controlColumn.position = 0;
            
            /* close off the exit from the plane */        
            planeFront.port = 'You can\'t leave the plane now it\'s left the jetway.
                ';
        }
        
        /* The total distance traveled along the runway */
        distanceTraveled = 0
        
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
                    towards Miami. Hopefully those hoodlums back in the passenger cabin
                    won't notice, though, at least, not until it's far too late. You
                    reach for the radio to call ahead and arrange a suitable
                    reception committee, and then settle back in your seat, content
                    with a job well done. ";
                    
                    finishGameMsg(ftVictory, [finishOptionUndo]);
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
           
            
            /* The following commented-out lines were for testing purposes only */
    //         "The aircraft has covered <<distanceTraveled>>m and is now travelling at
    //        <<asi.airspeed>> knots. ";   
            
            
            /* If we go too far, we run off the end of the runway */
            if(distanceTraveled > 500)
            {
                "The plane reaches the end of the runway, ploughs through the fences
                and crashes into some buildings. What happens after that you never
                know, but it seems a terribly destructive way to dispose of a
                plane-load of hoodlums. ";
                
                finishGameMsg(ftDeath, [finishOptionUndo]);
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
                
                finishGameMsg(ftDeath, [finishOptionUndo]);
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

There is quite a lot happening on this Scene object, but it\'s probably
easier to co-ordinate it all there rather than distribute the effects of
manipulating the controls during takeoff over the various controls.

## The Windscreen

The one object in the cockpit that remains totally unimplemented is the
windscreen. Really all the player needs to do with it is EXAMINE it or
LOOK THROUGH IT, and both actions may as well do the same thing. The
complication is that the view through the windscreen will change
depending on what\'s happening, so perhaps the easiest approach is to
make the windscreen\'s [desc]{.code} property a method that calls a
separate method when the takeoff scene is in progress:

::: code
    + windscreen: Fixture 'windscreen;; window windshield'
        desc()
        {
            if(takeoff.isHappening)
                takeoffDesc();
            else
                "The light is starting to fade outside, but you can easily make out
                the terminal off to the port side and the last-minute bustle of
                preparations around your plane. ";            
        }
        
        takeoffDesc()
        {
            local dt = takeoff.distanceTraveled/5;
            
            "It's now quite dark outside, but you can see the landing lights marking
            the course of the runway <<if asi.airspeed == 0>>stationary on either
            side<<else if asi.airspeed < 30>> moving slowly past<<else>> rushing
            past<<end>>. <<if dt < 10>> Virtually the whole length of the runway
            stretches ahead of you<<else if dt < 33>> Most of the runway still lies
            ahead<< else if dt < 67>> So far as you can judge only about half the
            runway still lies ahead<<else if dt < 85>> You're starting to run out of
            runway<<else>> You're nearly at the end of the runway<<end>>. ";
        }
        
        
        dobjFor(LookThrough) asDobjFor(Examine)
    ;
:::

Defining [takeoff.distanceTraveled/5]{.code} at the start of the
[takeoffDesc]{.code} method not only saves us a lot of repetitive typing
of an awkwardly long name, it turns dt into a percentage of the runway
traversed (through dividing by 5), which makes it a bit easier to decide
at what points to change the text describing how much runway is left.

Unfortunately we\'ve now created another little problem for ourselves.
Although we\'ve kept the descriptions of what can be seen through the
windscreen as minimalist as possible, they do mention a couple of
objects that players might try to examine, so for the sake of
completeness we need to implement those two objects and then swap one
for the other at the start of the takeoff scene. This code might come
directly after the end of the windscreen object, assuming that the
windscreen is the last of the cockpit contents objects you\'ve defined
in your source:

::: code
    + terminalBuilding: Distant 'terminal building; shabby white large; structure'
        "It's a large white structure just off to port. In the fading light you
        can't really make out how shabby it actually looks. "
    ;

    landingLights: Distant 'landing lights; red green;;them'
        "The red lights are to port and the greens ones to starboard. "
    ;

    takeoff: Scene
        startsWhen = (ignitionButton.isOn == true)
        
        whenStarting()
        {
            "A few moments later a truck tows your plane away from the jetway, and
            following the instructions from the control tower, you taxi the plane to 
            the start of Runway 2 just as the sun finally disappears below the
            horizon. About a minute later, you are cleared for take-off. ";
            
            /* reset all controls to their initial positions */
            thrustLever.curSetting = '0';
            wheel.angle = 0;
            controlColumn.position = 0;
            
            /* close off the exit from the plane */
            
            planeFront.port = 'You can\'t leave the plane now it\'s left the jetway.
                ';
            
            landingLights.moveInto(cockpit);
            terminalBuilding.moveInto(nil);
        }
        ...
:::

By making the [terminalBuilding]{.code} and [landingLights]{.code} both
of the [Distant]{.code} class, we ensure that all the player can do with
them is EXAMINE them. Any other command will be met with a response that
they\'re too far away.

## Conclusion

I\'m not suggesting that what we\'ve done here is necessarily the best
way to implement an aircraft cockpit in a piece of IF, although it\'s
probably adequate for our Airport game. The points to pick up on here
are not the details of this particular implementation, but the library
tools and features used. The main lesson of this chapter has been how to
customize responses to actions and how to create new actions. What
we\'ve covered is really only an introduction to these topics, but it
should be enough to get you started. For the full story on actions you
will need to study the complete [Actions](../manual/action.htm) part of
the *adv3Lite Library Manual*. In particular, remember that the [Action
Reference](../manual/actionref.htm) is your friend when you want to know
about the actions defined in the library.

In the final section of this chapter we also illustrated how a Scene
might provide a convenient way of further customising responses to
actions, especially where several different objects may be interacting
so that it could become quite complex and messy to write the code
directly in those object\'s action-handling routines.

Up until now we have been almost exclusively concerned with how adv3Lite
can be used to model inanimate objects. Over the course of the next two
chapters we\'ll be looking at how it can be used to model people in your
game.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Cockpit
Controls](cockpit.htm){.nav} \> Taking Off\
[[*Prev:* Responding to Actions](responding.htm){.nav}     [*Next:*
Character Building](character.htm){.nav}     ]{.navnp}
:::
