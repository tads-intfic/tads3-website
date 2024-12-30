::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Cockpit
Controls](cockpit.htm){.nav} \> Furnishing the Cockpit\
[[*Prev:* Cockpit Controls](cockpit.htm){.nav}     [*Next:* Defining
Actions](actions.htm){.nav}     ]{.navnp}
:::

::: main
# Furnishing the Cockpit

Up to this point we have left the cockpit as a bare room with not even a
description. The time has come to start implementing it. The first
question to consider, however, is just how much detail we want to go
into. Interactive Fiction is not a good medium in which to implement a
flight simulator, and we shall not attempt to do so here. On the other
hand, we need to provide some means for the player to get the plane off
the ground and win the game, and we ideally need to allow some amount of
interactivity in the process.

The solution we\'ll adopt here is to implement a basic set of controls
with somewhat limited interactivity: a control column with a wheel, a
thrust lever, and an engine start button. We\'ll also implement three
basic instruments: an airspeed indicator, an altimeter and a fuel gauge.
Nothing will do anything until the engines are running, but once the
engine start button is pushed we\'ll use a cut-scene to taxi the
aircraft away from the jetway to the start of the runway. An IF purist
might complain that cutscenes aren\'t best practice in IF, but it\'s
probably the least bad option here, and in any case trying to implement
a taxying-round-airport simulator is way beyond the scope of this
manual. Once the cutscene is ended, the player must push the thrust
lever full forward, and then pull back on the control column when the
aeroplane reaches the right airspeed. Pulling back too soon or too late
may result in a fatal crash. Pulling back at around the right time will
cause the plane to take off and the game to be won.

The first step is to give the cockpit a decent description:

::: code
    cockpit: Room 'Cockpit' 'cockpit'
        "The cockpit is quite small but has everything you might expect: a
        windscreen looking forward, a pilot's seat from which you can operate all
        the usual controls, and a door leading out aft. "
        aft = cabinDoor
        south asExit(aft)
        out asExit(aft)
        
        regions = [planeRegion]
    ;
:::

Next we need to implement the pilot\'s seat and the controls. For the
seat we can use a Platform, and set [dobjFor(Enter)
asDobjFor(Board)]{.code} so that SIT IN SEAT will do the same as SIT ON
SEAT. We\'ll use a single object to represent the controls as a group,
and then make the individual controls and instruments components of the
controls object by locating them within it. This will make it relatively
easy to enforce a couple of conditions: to operate the controls you have
to be sitting in the pilot\'s seat, and from the pilot\'s seat the only
things you can reach in the cockpit are the controls. Here\'s how we can
start this off (putting these object definitions immediately after that
of the cabinDoor that\'s already in the cockpit):

::: code
    + pilotSeat: Fixture, Platform 'pilot\'s seat'
            
        dobjFor(Enter) asDobjFor(Board)
        
        allowReachOut(obj)
        {
            return obj.isOrIsIn(controls);
        }
    ;

    + controls: Fixture 'controls;; instruments;them'
        "The instruments and controls of most immediate interest to you are
        <<makeListStr(contents, &theName)>>. "
        
        checkReach(actor)
        {
            if(!actor.isIn(pilotSeat))
                "You really need to be sitting in the pilot's seat before you start
                operating the controls. ";
        }
    ;
:::

The first point of note here is the use of a Platform to implement the
seat. For an actor to be able to get on (sit on/stand on/lie on) an
object, the object\'s [contType]{.code} must be [On]{.code} and its
[isBoardable]{.code} property true; a Platform is basically the subclass
of Thing that fulfils these two conditions. For an actor to be able to
get *in* (sit in/stand in/lie in) an object its [contType]{.code} must
be [In]{.code} and its [isEnterable]{.code} property true. The subclass
of Thing that fulfils those two conditions is [Booth]{.code}, but
something can\'t be both a Booth and a Platform at the same time, since
its contType can\'t be simultaneously In and On. To allow the player
character to SIT IN SEAT as well as SIT ON SEAT we therefore define
[dobjFor(Enter) asDobjFor(Board)]{.code} on the seat, which means
\'Treat ENTER SEAT as BOARD SEAT\'. Since SIT IN SEAT is treated as
ENTER SEAT, this makes SIT IN SEAT behave like BOARD SEAT, which is what
SIT ON SEAT also does. The wider lesson here is that if you want to
define a piece of furniture which the player can get in or on without it
meaning anything much different, define it as a Platform and add
[dobjFor(Enter) asDobjFor(Board)]{.code}.

The second point of note is the use of [allowReachOut(obj)]{.code} on
the seat to control which items are in reach of someone sitting on the
seat (the seat itself and anything on the seat are automatically in
reach). Here we want the controls object and all its contents to be
reachable from the seat, so we get the method to return
[obj.isOrIsIn(controls)]{.code}, which will be true either if obj is the
[controls]{.code} object or if it is directly or indirectly contained in
the [controls]{.code} object. The default behaviour if an actor sitting
on the chair tries to reach anything else is to move the actor out of
the chair, which is absolutely fine here.

The third point is the use of the [checkReach(actor)]{.code} method on
the [controls]{.code} object to control where the controls are reachable
from. If the method displays anything (normally a reason why the object
or its contents can\'t be reached) then the contents of the object and
the object itself are considered out of reach to the actor. We can
therefore use this method to display a message saying that you need to
be in the pilot\'s seat to operate the controls if the actor isn\'t in
the pilot\'s seat.

The fourth point is the use of [\<\<makeListStr(contents,
&theName)\>\>]{.code} to provide a list of the controls, which we\'re
about to locate in the [controls]{.code} object. The [contents]{.code}
parameter simply refers to the contents of the controls object, which
we\'re about to define. The option [&theName]{.code} parameter tells the
[makeListStr()]{.code} to use the theName property of each item in the
contents when building its list, instead of the aName property it would
otherwise have used by default, since it will look more natural to list
the names of the controls with the definite article here.

Before we go on, let\'s pause and look at the second and third points in
a bit more detail. Note first of all that although they have similar
names, they\'re not mirror images of each other, and they do work a
little differently. [allowReachOut(obj)]{.code} takes the *object* to be
reached as its parameter and returns true or nil depending on whether an
actor can reach the object from within the container on which the method
is defined. [checkReach(actor)]{.code} takes the *actor* doing the
reaching as its parameter and displays a message if the actor can\'t
reach the object on which it\'s defined (and so can\'t reach inside the
object either). There is also a [checkReachIn(actor)]{.code} method
which you can use if you want reaching inside an object to be possible
under different conditions from reaching the object itself, but by
default [checkReachIn(actor)]{.code} just calls
[checkReach(actor)]{.code}.

The reason for the difference between the two methods is that they\'re
modelling slightly different circumstances. [allowReachOut(obj)]{.code}
is typically intended for cases where an actor is on a piece of
furniture like a chair or bed and may not be able to reach everything in
the room from that container. If an object can\'t be reached it\'s
because it\'s too far away, and the obvious default behaviour is for the
actor to leave the container to reach the object s/he\'s trying to
reach. If we want to disallow this default for any reason, which we can
do by setting [autoGetOutToReach]{.code} to nil, then the default
refusal message of the form \"You can\'t reach the bookcase from the
armchair\" will nearly always be appropriate, so we don\'t generally
need to provide a means for producing a custom message. On the other
hand [checkReach(obj)]{.code} and [checkReachIn(obj)]{.code} are
intended to model a whole range of situations where an object can\'t be
reached; perhaps it\'s too high up on a shelf, or perhaps it\'s too hot
to touch, or perhaps there\'s a venomous spider on it, or perhaps
there\'s some other reason. It\'s therefore generally necessary to
provide a custom refusal message for each particular case, so a method
that just returns true or nil won\'t do. We therefore define a couple of
methods that work like a check() routine; if they display anything
they\'re disallowing the action; and these methods are in fact called at
the check() stage (via the touchObj precondition, if you want to get
technical). It\'s therefore appropriate to give them names that start
with check.

There is a further asymmetry between the two cases that results in one
taking the object to be reached as its parameter and the other the actor
doing the reaching. In the case of [allowReachOut(obj)]{.code} we know
exactly where the actor doing the reaching is; s/he\'s in or on the
piece of furniture on which we\'re defining the
[allowReachOut(obj)]{.code} method, and whether obj is reachable from
there or not depends on which obj it is and where it is located. In the
case of [canReach(actor)]{.code} or [canReachIn(actor)]{.code} we
already know precisely which object is being reached and/or where it is;
it\'s the object on which we\'re defining the method, and whether the
actor can reach it or not may well depend on the location of the actor.

The most typical kind of case where we might use [checkReach()]{.code}
and/or [checkReachIn()]{.code} is, say, to represent a high shelf which
the actor can only reach when s/he\'s standing on a ladder or a chair.
Here we\'re using it a bit differently to prevent the player character
operating the cockpit controls unless he\'s sitting in the pilot\'s
seat. Of course, strictly speaking, an actor wouldn\'t actually have to
be sitting in the seat to reach the controls, but it\'s far easier to
trap every attempt to touch them in a single checkReach() method than it
would be to attempt to trap every action that might count as
manipulating the controls to fly the plane. By placing the individual
controls within the [controls]{.code} object, that is just what we can
do. So the next step is to define the individual instruments and
controls, locating them in the [controls]{.code} object, although at
this stage their implementations will be a little sketchy:

::: code
    ++ controlColumn: Fixture 'control column;;stick'
        "It's basically a stick that can be pushed forward or pulled back, with a
        wheel attached at the top. "
        listOrder = 10
    ;

    +++ wheel: Fixture 'wheel'
        "The wheel can be turned to port or starboard to steer the aircraft. "
    ;

    ++ thrustLever: Fixture 'thrust lever'
        "It's a lever that can be pushed forward or pulled back. "
        listOrder = 20
    ;

    ++ ignitionButton: Button 'engine ignition button; big green'
        "It's a big green button. "
        listOrder = 30
        isOn = nil
        
        makePushed()
        {
            if(isOn)
                "The engines are already running. ";
            else
            {
                isOn = true;
                "The plane judders as the engines roar into life. ";
            }
        }
    ;

    ++ asi: Fixture 'airspeed indicator; air speed; asi'
        "It's currently registering an airspeed of <<airspeed>> knots. "
        listOrder = 40
        
        airspeed = 0
    ;

    ++ altimeter: Fixture 'altimeter'
        "It's currently indicating an altitude of <<altitude>> feet. "
        listOrder = 50
        
        altitude = 0
    ;

    ++ fuelGauge: Fixture 'fuel gauge'
        "It's currently registering full. "
        listOrder = 60
    ;

    + windscreen: Fixture 'windscreen;; window windshield'
    ;
:::

The implementation is deliberately incomplete at this stage, since
completing it will be the task that occupies the remainder of this
chapter. The main thing to note right now is the use of the **Button**
class to implement the ignition button. In the adv3Lite library a Button
is fixed by default (since buttons are nearly always part of something
else, and not free-standing items that can be picked up and carried
around by themselves), so there\'s no need to define [isFixed =
true]{.code}. A Button doesn\'t do much by default. If pushed a
Button\'s [makePushed()]{.code} method is called, but does nothing by
default, so this is a good place to put code to make the Button do
something useful. Here we make it display a message and set
[isOn]{.code} to true if it wasn\'t already. A Button doesn\'t have an
[isOn]{.code} property by default, but there\'s nothing to stop our
giving it one, as here. If we hadn\'t overridden the
[makePushed()]{.code} method the response to PUSH BUTTON would have been
\"Click\", but the text output by our custom [makePushed()]{.code}
method displaces this default response for reasons we\'ll look at later.

We\'ve also given custom [airspeed]{.code} and [altitude]{.code}
properties to the air speed indicator and the altimeter respectively, so
that their descriptions can mention what these instruments are
measuring. We haven\'t bothered to do this with the fuel gauge, because
the game will end before the plane has used a significant amount of
fuel.

We\'ve also defined the listOrder on each of the controls and
instruments; this is principally to ensure that
\<\<makeListStr(contents, &theName)\>\> in the description of the
[controls]{.code} object lists these instruments in the order we want.

In the next section we\'ll start discussing how to make the controls
respond to commands, which will involve our learning how to define
actions.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Cockpit
Controls](cockpit.htm){.nav} \> Furnishing the Cockpit\
[[*Prev:* Cockpit Controls](cockpit.htm){.nav}     [*Next:* Defining
Actions](actions.htm){.nav}     ]{.navnp}
:::
