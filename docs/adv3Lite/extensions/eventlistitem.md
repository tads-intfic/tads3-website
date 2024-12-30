::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> EventListIem\
[[*Prev:* Dynamic Region](dynregion.htm){.nav}     [*Next:*
Footnotes](footnotes.htm){.nav}     ]{.navnp}
:::

::: main
# EventListItem

## Overview

The EventListItem extension defines a new **EventListItem** class (along
with appropriate modifications to various EventList classes to enable it
to work). At a first approximation, an EventListItem combines the
functionanlity of AgendaItems and EventList. An EventListItem can be
included amongst other items in an EventList, but will only be used when
its isReady condition is true, and will cease to be used once its isDone
condition becomes true. It can be defined to become isDone after being
used a certain number of uses, and a minimum interval can be set between
successive uses of any given EventListItem.

EventListItems can be used with any class of EventList, but are probably
most useful in conjunction with ShuffledEventLists.

## Usage

Include the eventListItem.t file after the library files but before your
game source files.

EventListItems are added to the eventList property (usually) of the
EventList defined in the EventListItem\'s **myListObj** property.
Instead of defining the myListObj property explicitly, we can simply
locate EventListItems in their associated EventList using the + syntax.
For example, suppose we have a ShuffledEventList that displays a list of
atmospheric strings for a room. We could add an EventListItem to it
thus:

::: code
    startroom: Room, ShuffledEventList 'The Starting Location'
        "This is the starting location, blah, blah, blah. "
        
        eventList =     
        [
            'This room has quite an atmosphere. ',
            'What an atmospheric room! ',
            'You can\'t help noticing the atmosphere here. ',
            'Okay, so what else do you expect to happen here? '
        ]
    ;

    + EventListItem
        invokeItem = "The key may help you escape the atmosphere here. " 
        
        isReady = silverKey.moved
        
        minInterval = 5
        
        maxFireCt = 2
    ;   
     
:::

This defines an EventListItem that won\'t be used until the silverKey
has been moved, and which will then display the text \"The key may help
you escape the atmosphere here. \", but only twice in all with at least
five turns in between occurrences.

Using the abbreviated alias **ELI** for the EventListItem class together
with the EventListItem template defined in advLite.h, we could
abbreviate the definition of EventListIem here to:

::: code
    + ELI ~(silverKey.moved) +5 *2 "The key may help you escape the atmosphere here. ";
:::

This illustrates the basic usage; we move next to some of the detail.

\

## Properties and Methods of EventListItem

The following are the properties and methods of EventListItem that are
intended for direct use by game authors(there are some others which are
primarily intended to for the internal use of the extension to support
the implementation of this class, but we won\'t include them here):

-   **invokeItem()**: This a method that defines what should happen when
    this EventListItem is invoked (i.e., when the EventList to which it
    belongs wants to use this EventListItem). Normally, we\'d just
    define this as a double-quoted string to display some text here, or
    maybe a method to display some text if we need something more
    complicated. We wouldn\'t normally use it to carry out side-effects
    (although there may be some cases in which it could be convenient to
    do so).
-   **isReady**: The condition that must be true for this EventListItem
    to be used. This can either be an expression that evaluates to true
    to nil or a method that returns true or nil. It is fine for the
    value of this property to alternate between true and nil over the
    course of the game; the EventListItem will only be used when isReady
    is true.
-   **minInterval**: the minimum number of turns that must elapse
    between separate occurrences of this EventListItem (even if its
    EventList might want to use it more frequently).
-   **maxFireCt**: The maximum number of times this EventListItem may be
    used. Once it\'s been used that number of times its isDone property
    will be set to true. If we don\'t want to limit the number of times
    this EventListItem can use, set maxFireCt to nil (the default).
-   **doneWhen**: An alternative condition which will set isDone to true
    if it (doneWhen) evaluates to true.
-   **myListObj**: The EventList to which this EventListItem belongs.
    Normally we\'ll set this indirectly by locating EventListItems in
    their EventList using the + syntax (the extension will then
    automatically set myListObj to the EventListItem\'s location).
-   **whichList**: A property pointer defining which list property of
    our EventList (myListObj) we want this EventListItem to belong to.
    Normally this will be &eventList, but it could, for example, be
    &firstEvents.
-   **fallBackResponse**: A method or double-quoted string that displays
    some text if our EventList wants to use this EventListItem but it\'s
    not available to use (because it\'s not ready or is already done,
    for example). Normally when an EventList tries to use an
    EventListItem that\'s not available to use, the EventListItem will
    simply call the EventList\'s doScript() method to trigger the next
    item in the list (thereby effectively skipping over the unavailable
    EventListItem), but in rare cases there may be no other item in the
    list that can be used; fallBackResponse is then called as a last
    resort. If our EventList doesn\'t need to display something every
    turn (e.g., because it\'s a list of atmospheric messages),
    fallBackResponse can be left to do nothing, but if we do need
    something every turn (e.g., because our EventList is also some
    variety of DefaultTopic), then we might want fallBackResponse to
    display something appropriate to when this EventListItem\'s isn\'t
    available (such as an atmospheric message that would be appropriate
    in the absence of this EventListItem\'s not being available to use).
    Note that this situation is only ever likely to occur if our
    EventList contains nothing but EventListItems.
-   **underused()**: A method that returns true if this EventListItem
    item is considered \'underused\' (and so should be prioritized for
    firing in a RandomEventList or ShuffledEventList). By default it\'s
    considered underused if its missedTurn property (for which see
    below) is non-nil, which probably works well enough in many
    situations, but game code may wish to define some other method of
    prioritization, such as [fireCt == 0]{.code} (meaning that the
    EventListItem in question has never been used), so this is defined
    as a separate method to make it easy to customize.
-   **canRemoveWhenDone**: Flag - do we want to allow our EventList to
    remove this EventListItem from its eventList property when it (the
    EventListItem) is done (isDone = true). By default we do (this
    property has a default value of true). Note that this only grants
    permission to our EventList to remove this EventListItem, it
    doesn\'t require it to, so it will only take effect if the EventList
    wants to clear this EventListItem out of its eventList (the default
    defined on EventList is that EventList\'s don\'t want to, but game
    cose can change this, see further below).

There are all a number of EventListItem properties that game code may
wish to query but should change only with great care, if at all (since
they are meant to be maintained by the code in this extension):

-   **isDone**: Flag, have we finished with this EventListItem?
-   **missedTurn**: The last turn on which our EventList wanted to use
    us but couldn\'t because we weren\'t available to fire. This starts
    at nil (our EventList hasn\'t tried to use us yet) and is reset to
    nil whenever our EventList successfully uses us (and we fire).
-   **canFire()**: Are we available to fire (i.e., be used)? Return true
    if so or nil otherwise. Overriding this method may break the way
    this extension works unless done with care, and is unlikely to be
    needed.
-   **fireCt**: The number of times we have fired (i.e., been
    successfully invoked).
-   **readyTime**: The next turn on which we\'re available to fire.
    Normally this is set via the **setDelay(turns)** method which in
    turn is called at PreInit to set our minInterval.
-   **lastClock**: The last turn on which we successfully fire.
-   **getActor()**: Returns the actor our EventList is associated with,
    if any; otherwise returns nil.

\

## Customising EventLists for Use with EventListItem

This extension makes a number of minor modifications to EventList and
some of its subclasses to faciliate the use of the EventListItem class.
To a large extent curious users can be left to inspect these in the
eventListItem.t source file (perhaps via the Library Reference File),
but there is one method and one property that should be mentioned here.

The **resetList()** method can be called on an EventList to remove any
spent (isDone = true) EventListItems from its eventList. This is
probably only ever necessary in an EventList that contains so many
EventListItems that the presence of spent ones (through which code may
nevertheless have to iterate) is slowing things down too much.

The **resetEachCycle** property (which defaults to nil) can be
overridden to true on an EventList so that it calls resetList() at
appropriate intervals (roughly speaking, each time the EventList has
iterated through every item in its eventList). Whether this is
advantageous can only be determined by experimentation in any given
game, since the reduced overhead resulting from clearing out spent
EventListItems may be counteracted by the increased overhead of clearing
them out. If in doubt, this is probably best left at nil.

\

## Convenient Shorthand

To save typing, EventListItem can be abbreviated to **ELI** (the
extensions defines [class ELI: EventListItem;]{.code}).

The clase **ELI1** can be used as a shorthand way of defining an
EventListItem with a maxFireCt of 1.

EventListItems can be defined using the following template (itself
defined in advlite.h):

::: code
    EventListItem template @myListObj? ~isReady? +minInterval? *maxFireCt? "invokeItem"? ;
:::

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[eventListItem.t](../eventListItem.t) file.

\
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> EventListItem\
[[*Prev:* Dynamic Region](dynregion.htm){.nav}     [*Next:*
Footnotes](footnotes.htm){.nav}     ]{.navnp}
:::
