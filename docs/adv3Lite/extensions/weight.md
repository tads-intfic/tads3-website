::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Weight\
[[*Prev:* Viewport](viewport.htm){.nav}     [*Next:*
Extensions](../../docs/manual/extensions.htm){.nav}     ]{.navnp}
:::

::: main
# Weight

## Overview

The standard library allows you to assign a bulk to each items and to
limit what can be carried or placed in, on, under or behind other
objects according to bulk. The Weight extension allows you to do the
same with weight. Each item in the game (or at least, each portable
item) can be assigned a weight according to whatever scale you wish,
while actors and other objects can be assigned a weightCapacity which
limits how much weight they can bear. These features are probably not
needed for the majority of games, in which controlling by bulk is
usually sufficient, but are provided in this extension for any game that
wishes to make use of them. The principle difference between weight and
bulk is, of course, that while the bulk of an object is simply its bulk,
the weight of an object is its own weight plus the weight of all the
objects it contains.

\
[]{#properties}

## New Methods and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following methods and properties on Thing:

-   *Additional properties*: [weight]{.code}, [weightCapacity]{.code},
    [maxSingleWeight]{.code}, [maxWeightHiddenUnder]{.code},
    [maxWeightHiddenBehind]{.code}, [maxWeightHiddenIn]{.code}.
-   *Additional methods*: [totalWeight()]{.code},
    [getWeightWithin()]{.code}, [getCarriedWeight()]{.code},
    [sayTooHeavy(obj)]{.code}, [sayCantBearMoreWeight(obj)]{.code},
    [totalWeightIn(lst)]{.code}, [sayTooHeavyToHide(obj,
    insType)]{.code}, [getWeightHiddenUnder]{.code},
    [getWeightHiddenIn]{.code}, [getWeightHiddenBehind]{.code}.

[]{#usage}

## Usage

Include the weight.t file after the library files but before your game
source files.

Every object (or every portable object) can be assigned a **weight**
value, which is an integer value representing its weight on whatever
scale you find convenient. This [weight]{.code} represents the intrinsic
weight of the object by itself, less any contents. By default every
object has a [weight]{.code} of 0.

The total weight of an object, including its contents, is given by its
**totalWeight()** method, while the weight of its contents (excluding
the object\'s own weight) is given by its **getWeightWithin()** method.
Hence for any object, [totalWeight = weight + getWeightWithin()]{.code}.
For actors, **getCarriedWeight()** gives the total weight carried by the
actor; this excludes the weight of anything worn or of anything fixed in
place (the latter are assumed to be body parts).

The carrying capacity of both actors and other objects is defined by
their **weightCapacity** and **maxSingleWeight** properties. The
[weightCapacity]{.code} (by default 100000) is the maximum total weight
that can be carried by the actor, or the maximum load that can be placed
in/on/under or behind the object. The [maxSingleWeight]{.code} (which by
default takes its value from [weightCapacity]{.code}) defines the
maximum weight of a single object that can be carried by the actor or
borne by the object.

The method **sayTooHeavy(obj)** is used to display a message to the
effect that *obj* exceeds the load capacity of the object into or onto
which an attempt is being made to place it (i.e. when the total weight
of *obj* exceeds either the [weightCapacity]{.code} or
[maxSingleWeight]{.code} of the object on which
[sayTooHeavy(obj)]{.code} is defined). The method
**sayCantBearMoreWeight(obj)** is used to display a message when *obj*
would otherwise cause the object\'s weightCapacity to be exceeded (since
the addition of *obj* would make its [getWeightWithin]{.code} greater
than its [weightCapacity]{.code}).

In some instances, objects can be effectively
[hidden](../../docs/manual/thing.htm#hidden) in, under or behind other
objects by being added to their [hiddenIn]{.code}, [hiddenUnder]{.code}
or [hiddenBehind]{.code} lists. While in virtually every case it
probably makes more sense to limit this by bulk than by weight, for the
sake of completeness this extension provides **maxWeightHiddenIn**,
**maxWeightHiddenUnder** and **maxWeightHiddenBehind** properties to
limit the total weight that can be placed in, under or behind an object
in this manner. The default value of all these properties is 100000. The
method **sayTooHeavyToHide(obj, insType)** is used to display a message
when hiding would cause the maximum weight to be exceeded; *obj* is the
object that the player is attempting to hide and *insType* is one of
[In]{.code}, [Under]{.code} or [Behind]{.code} depending whether the
action being attempted is PutIn, PutUnder or PutBehind.

Finally, the service method **totalWeightIn(lst)** is used to calculate
the total weight of all the items in *lst*.

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[weight.t](../weight.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Weight\
[[*Prev:* Viewport](viewport.htm){.nav}     [*Next:*
Extensions](../../docs/manual/extensions.htm){.nav}     ]{.navnp}
:::
