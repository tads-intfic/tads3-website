::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> EventList\
[[*Prev:* Events](event.htm){.nav}     [*Next:* Exits](exit.htm){.nav}
    ]{.navnp}
:::

::: main
# EventList

The EventList module implements the various EventList classes which are
identical to those in adv3.

An EventList provides a means of showing a series of messages (or doing
other things) either in sequence or in random order (depending on the
kind of EventList). Typical uses for EventLists include displaying
varying atmospheric messages and varying conversational responses. To
set up and use an EventList you define its list of items on its
**eventList** property and call its **doScript()** method to process the
next item in turn (typically but not necessarily a single-quoted string,
which is then displayed).

The various types of EventList are:

-   **EventList**: The base EventList runs through each of its items in
    order and then does nothing after it passes the last item.
-   **CyclicEventList**: A CyclicEventList runs through each of its
    items in order and then starts again at the beginning after reaching
    the end.
-   **StopEventList**: A StopEventList runs through each of its items in
    order and then keeps repeating the last item once it reaches the
    end.
-   **SyncEventList**: A SyncEventList is an EventList that is
    synchronized with the EventList defined on its **masterObject**
    property; the two EventLists can then define different lists of
    items but remain in the same state (e.g., if one is about to show
    the third item in its list, so is the other).
-   **RandomEventList**: A RandomEventList chooses one of its items at
    random each time its doScript() method is called.
-   **ShuffledEventList**: A ShuffledEventList goes through each of its
    items and then shuffles them into a new random order when it reaches
    the end of the list before starting again at the beginning (like
    going through a deck/pack of cards one at a time and then shuffling
    the deck/pack before going through them again). This is often the
    best option for atmospheric messages and varying default
    conversational responses.

Since random atmospheric messages can start to get a bit tired after the
player has seen them a couple of times, RandomEventList and
ShuffledEventList define a few additional properties to control the
frequency with which they trigger their items:

-   **eventPercent**: The percentage probability (expressed as an
    integer between 0 and 100) that this EventList will display an item
    when its doScript() method is called.
-   **eventReduceTo**: The percentage probability to reduce to after the
    EventList has fired **eventReduceAfter** times. If
    **eventReduceAfter** is nil (default), the EventList keeps on firing
    at its original rate (eventPercent).

[]{#shuffled}

**ShuffledEventList** defines a further couple of properties to control
its behaviour:

-   **firstEvents**: If this property is not nil, but supplies a list of
    items, this list of items is gone through in order once only before
    the ShuffledEventList starts using the items in its eventList
    property.
-   **shuffleFirst**: If this property is true (the default) the items
    in the eventList property are shuffled before being used for the
    first time. If shuffleFirst is nil, then the items in the eventList
    are worked through in the order you defined them the first time and
    shuffled thereafter.

The library calls the roomDaemon() method on the player character\'s
current location at the end of every turn. This could be used to drive a
ShuffledEventList displaying atmospheric messages, as in the following
example:

::: code

    hall: Room, ShuffledEventList 'Hall' 'hall'   
        "<<one of>>At least the fire hasn't reached the ground floor yet. The hall
        is still blessedly clear of smoke, though you can see the smoke billowing
        around at the top of the stairs you've just come down. The front door
        leading out to the safety of the drive is just a few paces to the west -- if
        only you'd remembered that key! Otherwise all seems normal: \v<<or>>At a
        less troubled time you'd feel quite proud of this hall. A fine oak staircase
        sweeps up to the floor above, matching the solid front door that stands just
        to the west. <<stopping>>The pictures you bought last year look totally
        oblivious of the flames that might engulf them, and since so far the fire
        seems confined to the top floor there's nothing blocking your path north to
        the lounge, east to the kitchen, or south to the study.  "
        
        south = study
        north = lounge
        east = kitchen
        up = landing
        west = frontDoor
        out asExit(west)
        
        roomDaemon  { doScript; }
        
        eventList = 
        [
            'Wisps of smoke drift down the stairs. ',
            
            'You momentarily catch sight of the smoke billowing at the top of the
            staircase. ',
            
            'There\'s an ominous creak upstairs. ',
            
            'You fancy you feel a wave of hot air gush about your face. '
        ]
        
        eventReduceTo = 50
        eventReduceAfter = 6
        
        regions = downstairs
        
        listenDesc = "There's a disturbing crackling of flames somewhere upstairs. "
    ;
:::

Although the items in an event list are usually single-quoted strings
they can be any of the following:

-   A single-quoted string, in which case the string is displayed.
-   An object, in which case the object\'s doScript() method is called.
-   A function pointer, in which case the function is invoked (note that
    an anonymous function counts as a function pointer for this purpose,
    so you could include an anonynous function as an item in an event
    list).
-   A property pointer, in which case the property (or method) is
    invoked on the event list object.
-   nil (or any other value not listed above), in which case nothing
    happens; it might be useful to use nil when you want an eventList to
    do nothing for one step.

**WARNING!** Be very careful about using embedded expressions inside
single-string elements of an EventList, since this can very easily lead
to odd and hard-to-find bugs. The full reasons for this are explained in
the section on \"More on evaluation timing, and a warning on side
effects\" in the \"String Literals\" chapter of Part III of the *TADS 3
System Manual*, but in essence the problem is that such embedded
expressions will be evaluated at times you do not expect and rather more
often than you expect. It is safe to include an embedded expression in a
single quoted string in this kind of situation if and only if evaluating
it won\'t change the value of anything. So for example, the following
would all be quite safe:

::: code
    eventList = [
      '<q>What do you think about<<me.hasSeen(mary)>> Mary<<else>> Jane?<<end>> you ask. '
      
      '<q>I personally don\'t care for <<oddBloke.theName>> you say. <.inform dislike-oddbloke> '
    ]
:::

But the following most certainly would NOT:

::: code
    eventList = [
       '<q>Tell me about <<one of>> Jane<<or>> Martha<<or>> green cheese<<cycling>>, you request. ',
       
       '<q>I have now said this <<++count>> times!</q> you declare. '
    ]
:::

You can make the second version safe by using anonymous functions in
place of single-quoted strings:

::: code
    eventList = [
       {: "<q>Tell me about <<one of>> Jane<<or>> Martha<<or>> green cheese<<cycling>>, you request. " },
       
       {: "<q>I have now said this <<++count>> times!</q> you declare. " }
    ]
:::

Note that this is far from being the *only* situation in which you can
get caught out by the unexpected evaluation of embedded expressions in
single-quoted strings, but it\'s probably the situation that\'s most
likely to constitute a trap for even fairly experienced game authors.
For the full story, consult the aforementioned chapter of the *TADS 3
System Manual*.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> EventList\
[[*Prev:* Events](event.htm){.nav}     [*Next:*Exits](exit.htm){.nav}
    ]{.navnp}
:::
