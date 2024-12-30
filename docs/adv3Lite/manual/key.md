::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Keys\
[[*Prev:*TravelConnectors and Barriers](travel.htm){.nav}     [*Next:*
MultiLocs](multiloc.htm){.nav}     ]{.navnp}
:::

::: main
# Keys

As we have seen, we can define the lockability property of a Thing
(typically a Door or an openable container) to be lockableWithKey, which
means that the player character needs a key to lock and unlock it. The
other part of setting up something to be locked and unlocked with a key
is defining the appropriate Key object (or objects, since any number of
keys can be defined to work on one lock if we so wish). For this purpose
the core library defines the Key class.

The one property we have to define on a Key is the list of things it
locks and unlocks (since a Key may be defined to work on any number of
objects, if we so wish). We do this simply by listing the objects the
Key works on in its **actualLockList** property.

A Key also maintains a **knownLockList** property, which is a list of
objects the player character knows that this key locks and unlocks (this
helps the parser to select the right key in cases of ambiguity, or when
the player issues a LOCK or UNLOCK command without specifying which key
to use). By default the library since adds objects to this list once the
key has been successfully used to lock or unlock them, but you can if
you wish define objects on this list if the player character starts out
knowing what the key is for (e.g., the player character would presumably
recognize her own front door key).

A third property you can optionally define is the **plausibleLockList**.
This is a list of the objects the key looks like it might plausibly lock
and unlock (typically because it\'s roughly the right size and shape).
It\'s obvious, for example, that a large iron key designed to open the
main door of an old church isn\'t going to unlock a tiny jewelry box,
and equally obvious that a yale key isn\'t going to fit a cardkey lock.
Defining this property can thus help the parser to make better decisions
about which key a player most likely intends to use. Defining this
property is a bit of extra work, and it isn\'t essential, but it will
provide the player with a better playing experience if you take the
trouble to do it.

Thus, for example, we might define a front door key as follows:

::: code
     brassKey: Key 'brass key; medium sized'    
        "It's just a medium sized brass key, typical of the sort used to lock and
        unlock doors. "
        plausibleLockList = [frontDoor, frontDoorOutside, backDoor, backDoorOutside]
        actualLockList = [frontDoor, frontDoorOutside]
    ;
:::

Note that we have to specify both sides of the frontDoor in the
actualLockList property if we want the key to work on both sides.
Otherwise we define a Key in just the same way as we would any other
Thing, except that there are two further properties of possible
interest:

-   **notAPlausibleKeyMsg** (single-quoted string) The message to
    display if the player tries to use this key to lock or unlock an
    object that\'s neither in this Key\'s actualLockList or its
    plausibleLockList.
-   **keyDoesntFitMsg** (single-quoted string) The message to display if
    the player tries to use this key on a lock it doesn\'t fit.

[]{#keylist}

## The keyList property

The normal way to relate locks and keys in adv3Lite is to define the
plausibleLockList, actualLockList and knownLockList property on the key,
as shown above. An alternative way to define what a key locks and
unlocks is to define the **keyList** property on the object it
locks/unlocks. Note that this simply adds the object it\'s defined on to
the plausibleLockList and actualLockList of any Keys it lists at
PreInit, so the keyList property can\'t be used to defined change the
relationship between locks and keys dynamically during the course of a
game; for that you need to manipulate the properties of the Key object,
as you also need to do to define any objects a Key is known to unlock at
the start of the game.

The [keyList]{.code} property (which you\'d typically define on a Door
or a KeyedContainer) is provided as a convenient alternative for authors
who find it easier to define the lock-key relationship on the lockable
item rather than the key. The [keyList]{.code} property has the added
advantage that if a non-nil [keyList]{.code} property is defined on an
object, the [lockability]{.code} of that object will automatically be
[lockableWithKey]{.code} (unless explicitly overridden by the game
author) and the object will automatically start out locked (unless this,
too, is overridden by the game author).

This means that, for example, to define a Door that starts out locked
and can be unlocked with the brassKey we could just define:

::: code
    + frontDoor: Door ->frontDoorOutside 'door'
       keyList = [brassKey]  
    ;
     
:::

This is an alternative to listing frontDoor in the actualLockList of the
brassKey (although it wouldn\'t matter if you did both). If you like,
you can mix defining keyLists on lockable objects and lockable objects
in the actualLockLists of Keys.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Keys\
[[*Prev:* TravelConnectors and Barriers](travel.htm){.nav}     [*Next:*
MultiLocs](multiloc.htm){.nav}     ]{.navnp}
:::
