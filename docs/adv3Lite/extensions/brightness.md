::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Brightness\
[[*Prev:* Extensions](../../docs/manual/extensions.htm){.nav}    
[*Next:* Collective](collective.htm){.nav}     ]{.navnp}
:::

::: main
# Brightness

## Overview

This extension provides basic modelling of different levels of lighting
(by adding a **brightness** property to the Thing class) and different
degrees of attenuation of light either as a result of distance or
through a semi-transparent medium (specifically an otherwise transparent
close container which can be given a user-defined quantity of
**opacity**. It thus aims to replicate (albeit in a slightly different
formn) much of the adv3 light levels functionality that is absent from
the adv3Lite main library.

\
[]{#classes}

## New Properties and Methods

In addition to a number of properties/methods and one object
(lightProbe\_) intended purely for internal use, this extension defines
the following new properties and methods on the Thing class:

-   *Properties of Thing*: [brightness]{.code}, [brightnessOn]{.code},
    [brightnessOff]{.code}, [brightnessForReading]{.code},
    [illuminationThreshold]{.code}, [opacity]{.code},
    [tooDarkToReadMsg]{.code}, [lightSources]{.code}.
-   *Methods of Thing*: [brightnessWithin()]{.code},
    [accumulatedBrightnessWithin()]{.code},
    [accumulateBrightness()]{.code}, [remoteBrightness(pov)]{.code}.

\
[]{#usage}

## Usage

Include the brighness.t file after the library files but before your
game source files.

This extension adds a **brightness** property to every Thing (including
every Room), which defines the strength of the light it gives off when
lit. Unless overridden by game code, this brightness will be the value
of the **brightnessOn** property when the object is lit (i.e., its

isLit property is true) and value of its **brightnessOff** (usuallu zero
but possibly one --- see further below) when its isLit property is nil.

Out of the box, this extension assumes that brightness will take a value
between 0 (totally unlit) and 4 (very brightly lit), as follows:

-   **0** -- Totally unlit
-   **1** -- Self-illuminating (so visible in an otherwise dark space)
    but not providing sufficient light to illuminate anything else. This
    might be used, for example, for stars in the night sky, or for the
    face of a flourescent clock, or for a large object like a staircase
    that is just about visible in a very dimly lit room.
-   **2** -- Relatively dim lighting that\'s strong enough to see by,
    but not to read by, and may not penetrate well over a large distance
    or through an obscuring medium
-   **3** -- Normal light, sufficient to provide adequate illumination
    to everything around.
-   **4** -- Very bright light, that doesn\'t necessarily provide better
    illumination locally, but which may be better able to penetrate
    through partially obscuring media or to illuminate over a larger
    distance.

The other principal new property defined by this extension is
**opacity**, which only has any effect on transparent closed containers
(closed because othewise light is reckoned to be emitted at full
strength through the opening, and transparent because otherwise no light
would pass through a closed container at all). In other words, the
opacity property is only meaningful on a container whose
[isTransparent]{.code span=""} property is set to true. If light passes
through a closed container, its brightness is decreased by the value of
its opacity property. So, for example, if a closed glass jar with an
opacity of 1 contains a bulb with a brightness of 3 the light emanating
from the jar will have a brightness of 2 (and similarly for light
penetrating inside a closed semi-transparent booth from a light source
outside the booth).

To get at the brighthness of the current illumination within a Room or
Booth you use the value returned by its **brightnessWithin()** or its
**accumulatedBrightnessWithin()**. Out of the box both methods simply
return the value of the brightest light source (adjusted for distance
and/or opacity) that\'s currently providing illumination to the Room,
Booth or Container in question. The trong\>accumulatedBrightnessWithin()
method is provided in case game code wants to implement a different
method of calculating the cumulative brightness of multiple light
sources (on which see further [below](#limitations)).

Finally, to allow for the attenuation of brightness over a distance,
this extension provides a **remoteBrightness(*pov*)**, which should be
called on the light source to obtain the effective brightness of this
light source from the point of view of the *pov* object (typically but
not necessarily the player character) in a remote location. This will
only be relevant if the pov object and the light source object are both
located in the same SenseRegion and that SenseRegion allows sight paths
between the Rooms it contains. By default this method simply returns the
value of the light source\'s

brightness property, which is almost certainly the correct behaviour if
the SenseRegion is modelling the two ends of a large indoor hall with
powerful electric lighting switched on at one end, but may not be so
appropriate if the SenseRegion is modelling the two ends of a large
field at night where the only light source is a candle at the other end
of the field.

\
[]{#interaction}

## Interaction with the Main Library's Handling of Lighting

The main library already contains its own handling of light and
darkness, through such properties as [isLit]{.code} and methods as
[isIlluminated()]{.code} and [litWithin()]{.code}. The brightness
extension does its best to work smoothly with these existing methods and
properties.

As noted above, making (or defining) [isLit]{.code} true makes it take
on the value of its [brightnessOn]{.code} property, which, by default,
is 3. Without any further modification, an object with a
[brightness]{.code} of 3 should for all intents and purposes act in the
same way as a lit object in the main library.

If an object is defined with [visibleInDark]{.code} as true, then its
[brightnessOff]{.code} property will be 1 by default; otherwise it will
be 0. This should result in visibleInDark working much as it does in the
main library.

With the brightness extension is place (and no further customization),
[litWithin()]{.code} simply returns the value of
[isIlluminated()]{.code}, while [isIlluminated()]{.code} returns true if
and only if [accumulatedBrightnessWithin()]{.code} returns a value
greater than 1 (i.e. if there\'s an available light source providing
more brightness than something that\'s merely self-illuminating), except
that [isIlluminated()]{.code} uses the version inherited from the
library when called during the calculations performed by
[brightnessWithin()]{.code} (this is to avoid the vicious circularity
that would otherwise occur with [brightnessWithin()]{.code} relying on
the value of [isIlluminated()]{.code} to construct a list of items in
scope, and Q.scopeList() relying on the value of isIlluminated() to
construct the scope list, but shouldn\'t otherwise have any impact on
game code).

Out of the box, the only action directly affected by light levels is
Read, which, by default, will now fail at the check stage if the
available illumination is less than 3. The message reporting this
failure is defined in the **tooDarkToReadMsg** property of the item
being read, where it can be readily overridden in game code.\
\
[]{#limitations}

## Limitations and Customization Hooks

While this extension provides a some basic handling of levels of
illumination, the model that results is fairly basic, especially in the
way it handles illumination coming from remote objects elsewhere in a
SenseRegion. It is difficult for this extension to do much more than it
does, however, since beyond the basic implentation provided, the details
of any further sophistication required are likely to be dependent upon
what particular individual games are trying to model, which is likely to
vary substantially from one game to another, or even between different
situations in the same game. To compensate for this, the brightness
extension provides a couple of hooks to aid customization.

First, while the default implementation assumes that

brightness will take on a value between 0 and 4, game code can override
this to use a greater range of brightness values if they\'re needed. In
particular:

-   The default value of **brightnessOn** can be set to some value other
    than 3.
-   The value of **illuminationThreshold** can be set to some value
    other than 1, where illuminationThreshold is the available
    brightness that must be *exceeded* for a location or container to be
    considered sufficiently illuminated to ensure visibility (i.e. for
    the [objVisible]{.code} precondition to be satisifed).
-   The value of **brightnessForReading** can be set to some value other
    than its default of 3, where brightnessForReading is the brightness
    that must be available to allow things to be read.

Note that these are all properties of the Thing class, and so can be
overridden on the Thing class and/or the Room class (which inherits from
Thing) and/or on individual Things (and Rooms).

The other customization for which the brightness extension provides a
hook is for defining the effects of multiple light sources in the same
location. Here, no generalised solution is possible: for example, the
effect on ambient lighting of having 20 candles rather than one in an
otherwise dark hallway will be very different from that of having 20
candles rather than 1 scattered over a large field in bright sunlight,
and so it has to be up to game code to define what should happen in each
case (if it wishes to define it).

For this purpose, the customization provides the (Thing) method
**accumulateBrightness(maxBrightness)**. As defined in the brightness
extension, this is called from **accumulatedBrightnessWithin()** (and
really should not be called in any other way), which passes the value of
a call to **brightnessWithin()** in the **maxBrightness** parameter. By
default [accumulatedBrightnessWithin()]{.code} simply returns the
[maxBrightness]{.code} value that\'s passed to it, but the point of the
method is that it *can* be overridden by game code to do something
different (possibly on a Room by Room or Thing by Thing basis).

The call to [brightnessWithin()]{.code} from
[accumulatedBrightnessWithin()]{.code} populate\'s the Thing\'s
**lightSources** with a list of the light sources relevant to the
calculation of the level of illumination (i.e., all the light sources
that might need to be taken into account when deciding what value
[accumulatedBrightnessWithin()]{.code} should return). Each element of
the lightSources list is itself a two-item list of the form \[obj,
adjBt\] where *obj* is the object providing light and *adjBt* is the
brightness of the light it provides after adjustment for any distance or
opacity between *obj* and the location whose accumulated interior
brightness we wish to calculate. A custom
[accumulateBrightness()]{.code} method can thus iterate over the list of
lightSources to decide how it wishes to factor them into the value it
wants to return. For example, in a location that might be lit either by
multiple candles or by some other more powerful light source one might
do something like this:

::: code
    accumulateBrightness(maxBrightness)
    {
        
        /* If our maxBrightness is already more than 2, simply return our maxBrightness. */ 
        if(maxBrightness > 2)
            return maxBrightness;
        
        /* If we have more than 9 lightsources each with an adjusted brightness of 2, return a cumulative brightness of 3 */ 
        if(lightSources.countWhich({s: s[2] == 2}) > 9)
            return 3;
        
        /* Otherwise return our maxBrightness, which will be 2 or less */ 
        return maxBrightness; 
    }
:::

Of course, a real-life example may want to do something more
sophisticated than this, and need not be restricted to integer
arithmetic (since there is nothing to prevent game code using the
BigNumber class for fractional values and more complicated mathematical
functions if that is what it wants to do). Just to emphasize though: you
may usefully override accumulateBrightness(maxBrightness) in your own
game code but you should never call it directly from your game code
(except perhaps for testing or debugging purposes). Conversely, it is
fine to call accumulatedBrightnessWithin() from your game code, but you
should probably refrain from trying to override it, unless you have a
compelling reason for doing so and are completely confident that you\'re
not breaking anything.

Finally, it should be borne in mind that this is the first version of
the brightness extension. The use of it in real-life game code may well
suggests improvements that could be made and wrinkles that could be
ironed out.

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[brightness.t](../brightness.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Brightness\
[[*Prev:* Extensions](../../docs/manual/extensions.htm){.nav}    
[*Next:* Collective](collective.htm){.nav}     ]{.navnp}
:::
