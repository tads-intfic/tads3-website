::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Attachables\
[[*Prev:* Optional Modules](optional.htm){.nav}     [*Next:*
Events](event.htm){.nav}     ]{.navnp}
:::

::: main
# Attachables

The attachables module provides a couple of classes to facilitate
attaching objects to one another in simple cases (so if you don\'t have
any need to attach objects to each other in your game right now you can
skip this section and come back to it later). The adv3Lite
implementation is both simpler and easier to use than the adv3
Attachable class, but handles a far more restricted range of cases (for
the sake of keeping things simple). Also, unlike the adv3 Attachable
framework, in adv3Lite attachment is *not* a symmetrical arrangement,
i.e. ATTACH A TO B does not mean the same thing as ATTACH B to A.
Moreover in adv3Lite attachment is (mainly) implemented as a many-to-one
relationship, that is you can attach many As to one B using commands of
the form ATTACH A to B (the exception is the [Attachable](#attachable)
class described below, which allows a many-to-many attachment
relationship).

We can make this clearer by means of a concrete example. Suppose we have
a fridge magnet. We can then ATTACH MAGNET TO FRIDGE. The magnet is then
considered as attached to the fridge rather then vice versa. Since the
fridge is the dominant or larger object in this attachment relationship,
it could have several magnets attached to it, for example a round
magnet, a square magnet, and a star-shaped magnet. All three magnets
could be attached to the fridge in turn with the commands ATTACH ROUND
MAGNET TO FRIDGE, ATTACH SQUARE MAGNET TO FRIDGE, and ATTACH STAR MAGNET
TO FRIDGE. Either before or after being attached to the fridge the
magnets could in their turn have objects attached to them, e.g. ATTACH
PAPERCLIP TO ROUND MAGNET and ATTACH DRAWING PIN TO ROUND MAGNET. After
all these commands had been issued, the three magnets would be attached
to the fridge, while the paperclip and the drawing pin would be attached
to the round magnet.

The base class for implementing this type of attachment in adv3Lite in
the **SimpleAttachable**. In order to attach two objects, both must
defined as SimpleAttachables (or as a subclass thereof). You should then
define the **allowableAttachments** property on the major item (the one
things are to be attached to, such as the fridge in our previous
example) with a list of objects that can be attached to it (e.g.
\[roundMagnet, squareMagnet, starMagnet\]). For example, if we had just
one magnet we wanted to be able to attach to a fridge we might define:

::: code

    + fridge: SimpleAttachable 'fridge; large white; refrigerator door'
        "It's a large, white floor-standing refrigerator. "
        remapIn: SubComponent { isOpenable = true }
        allowableAttachments = [magnet]
        isFixed = true
        isListed = nil
    ;

    ++ magnet: SimpleAttachable 'small magnet; red maple; leaf'
        "It's red and shaped like a maple-leaf. You must have picked it up on your
        last trip to Canada. "
        attachedTo = fridge
    ;
:::

In this example, the magnet starts out attached to the fridge, which is
why we define [attachedTo = fridge]{.code} and locate the magnet in the
fridge (with the ++ notation; note also that to make sure the magnet is
on the outside of the fridge we define the interior of the fridge on its
remapIn property). If you didn\'t want the magnet to start out attached
to the fridge you\'d just locate it wherever you want it to start out
and leave its attachedTo property undefined. The above example does,
however, illustrate a couple of useful points. First, it shows how you
can define an object as starting off attached, and secondly it calls
attention to the fact that if you attach one object to another the first
object ends up located in the second (which ensures that the first
object will move around with the second if the second object is moved),
and that when an object is attached to another object the first
object\'s attachedTo property is set to the second object.

[]{#attachprops}

More generally, the properties and methods of SimpleAttachable you might
commonly want to use are:

-   **allowableAttachments**: a list of items that can be attached *to*
    this item (which in general won\'t be same as the items to which
    this object can be attached).
-   **attachedTo**: the item (if any) to which this item is currently
    attached. Normally this is set by the library when the player issues
    ATTACH and DETACH commands; you only need to set it yourself for
    objects that start out attached.
-   **locType**: You should treat this as a read-only property. It will
    be set to Attached when this object is attached to something.
-   **isFirmAttachment**: If this is true (the default) then this object
    has to be explicitly detached from its parent before it can be moved
    anywhere else (though the library will carry out an implict DETACH
    command if the player character takes this object while it is
    attached).
-   **allowDetach**: If this is true then this object can be detached
    from its parent with a DETACH command. Otherwise the DETACH command
    won\'t work to detach this object (maybe some other command such as
    UNSCREW would be required, as specified by the game author).
-   **allowOtherToMoveWhileAttached**: If this is true (the default)
    then our parent object (the one this object is attached to) can be
    moved while we\'re attached to it. If it\'s nil, then the other
    object cannot be moved while this object is attached to it.
-   **attachments()**: A method that returns the list of objects
    attached to this object.
-   **attachTo(other)**: attaches this object to *other* under
    programmatic control.
-   **detachFrom(other)**: detaches this object from *other* under
    programmatic control; if this object isn\'t attached to *other* then
    the method does nothing.
-   **isAttachedToMe(obj)**: returns true if *obj* is attached to this
    object (i.e. obj is in the list of attachments) and nil otherwise.
-   **isAttachedTo(obj)**: returns true is this object is attached to
    *obj* or if *obj* is attached to this object (i.e., if any
    attachment relationship exists between the object the method is
    defined on and *obj*).

The library defines three subclasses of [SimpleAttachable]{#subclass}:
**AttachableComponent**, **NearbyAttachable** and **Attachable**.

An **AttachableComponent** is a SimpleAttachable that\'s treated as a
component of the item to which its attached (the handle of a knife,
say). An AttachableComponent starts out with its isFirmAttachment
property set to true, and its allowDetach property set to nil. It also
defines an **initiallyAttached** property which, if true (the default)
means that the Component starts out attached to its immediate container.
Moreover, the locType of an attached AttachableComponent is PartOf. If
an AttachableComponent starts out as a separate item (e.g. a handle not
yet attached to a knife) it effectively becomes a part of (i.e. a
component of) the item its attached to when it is attached (e.g. ATTACH
HANDLE TO KNIFE would effectively make the handle part of the knife,
assuming the handle was an AttachableComponent and the knife a suitably
defined SimpleAttachable). Note that if the handle started out attached
to the knife and never needed to be reattached to it during the game,
there would be no need to make the knife a SimpleAttachable; the knife
could then just be a Thing.

A **NearbyAttachable** is a SimpleAttachable that\'s moved into the
*location* of the object it\'s attached to, instead of becoming located
within the other object. (This might be useful, say, for connecting
lengths of hose or cable together, or assembling a device out of its
components). You can override the **attachedLocation** and
**detachedLocation** properties (on the object to be attached) to tweak
this behaviour; for example you could set both to [location]{.code}
(meaning the location of the attached object) if you don\'t want
attaching it to the other object to move it at all.

[]{#attachable}

An **Attachable** is a NearbyAttachable that can be attached to more
than one thing at time (as well as having more than one thing attached
to it). This is intended for more complex cases than the
SimpleAttachable model can handle, such as a cable that\'s needed to
connect a piece of electrical equipment to a power outlet (and so needs
to be plugged into both) or a rope used to tie two or more objects
together (which needs to be attached to all of them). In addition to the
methods and properties it inherits from SimpleAttachable via
NearbyAttachable, the Attachable class defines the following:

-   **attachedToList**: the list of items this object is attached to
    (this should be used in place of the attachedTo property, which just
    contains a single item). Note that this remains distinct from the
    attachments property which continues to hold the list of items
    attached to this one. On an Attachable item the
    [isAttachedTo(obj)]{.code} method can be used to determine if *obj*
    is in either list.
-   **maxAttachedTo**: the maximum number of items to which this object
    can be attached at once. The default value is 2, on the basis that
    this is likely to be the most common case. If you don\'t want there
    to be any limit at all, you can set this property to nil. Note that
    the [maxAttachedTo]{.code} property does not impose any limit on the
    number of items that can be attached to the objects it\'s defined on
    (the number of items in the [attachments]{.code} property); it
    merely limits the maximum length of the [attachedToList]{.code}
    property.
-   **reverseConnect(obj)**: If this method returns true for *obj* then
    this reverses the order of connection between self and *obj* when
    *obj* is the direct object of the command; i.e. CONNECT OBJ TO SELF,
    will be treated as CONNECT SELF TO OBJ. Since the adv3Lite
    attachment relationship is asymmetric, this method can be used to
    help enforce the attachment hierarchy intended by the game author.
-   **multiPluggable**: if this property is true (the default) then this
    allows an Attachable that\'s also a PlugAttachable to be plugged
    into more than one thing at a time (e.g. to implement a cable
    that\'s needed to make an electrical connection between two
    different items).

\

## [PlugAttachable]{#plug}

The **PlugAttachable** class is a mix-in class designed to be used
together with either [SimpleAttachable]{.code} or
[NearbyAttachable]{.code}. This allows an object to be Plugged into or
Unplugged from another object. It\'s then attached to the other object,
but described as being plugged into it. Attaching one PlugAttachable to
another is equivalent to plugging it in. For example:

::: code
    + plug: PlugAttachable, NearbyAttachable 'electric plug'    
    ;

    + socket: PlugAttachable, NearbyAttachable, Fixture 'power socket'
        allowableAttachments = [plug]
    ;
:::

The number of items that can be plugged into something (the socket) at
any one time is controlled by the socket\'s **socketCapacity** property,
which is 1 by default.

If you want to define an object that can be plugged in and unplugged
without specifying a particular socket, you can use the
[PlugAttachable]{.code} mix-in with an ordinary Thing class and define
its **needsExplicitSocket** property as nil, e.g.:

::: code
    + tv: PlugAttachable, Switch, Fixture 'television;;tv'
        "It's currently <<if isOn>>on<<else>>off<<end>>, not that it makes much
        difference to the quality of what appears on the screen. "

        specialDesc = "A TV lurks in one corner of the room. "
        needsExplicitSocket = nil
        
        dobjFor(SwitchOn)
        {
            check()
            {
                if(!isPluggedIn)
                    "It's not plugged in. ";
            }
        }
        
        makePlugged(stat)
        {
            inherited(stat);
            if(!stat)
                makeOn(nil);
        }
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Attachables\
[[*Prev:* Optional Modules](optional.htm){.nav}    
[*Next:*Events](event.htm){.nav}     ]{.navnp}
:::
