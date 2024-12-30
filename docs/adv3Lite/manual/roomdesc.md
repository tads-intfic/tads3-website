::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Room Descriptions\
[[*Prev:*Rooms](room.htm){.nav}     [*Next:* Doors](door.htm){.nav}    
]{.navnp}
:::

::: main
# Room Descriptions

In a typical room description (which occurs when the player character
enters a new room or enters an explicit LOOK command), provided there\'s
enough light, the player will see the room name (usually in bold)
followed by a description of the room itself, followed by a listing of
the items the room contains. This item listing typically contains four
parts (although not all these parts are necessarily present in every
room listing):

1.  A paragraph for each item with a specialDesc or initSpecialDesc
    (where useSpecialDesc or useInitSpecialDesc is true).
2.  A list of miscellaneous items (for which lookListed is true).
3.  Lists of the visible contents of any objects in the room.
4.  A paragraph for each NPC (non-player character) present in the room.

(If the room belongs to a [SenseRegion](senseregion.htm), then this list
will be complicated by the listing of items in other rooms in the
SenseRegion, but we\'ll ignore that complication for now).

We have some control over the order in which the items appear within
each of these sections by using the following properties:

[]{#descorder}

-   **listOrder**: (integer) controls the order in which miscellaneous
    items appear in the second part of the listing; the higher the
    number, the later the item will appears relative to any others in
    this list.
-   **specialDescBeforeContents**: (true or nil) determines whether the
    specialDesc or initSpecialDesc appears before the miscellaneous
    items (i.e. at stage one, the default for most Things) or after
    (i.e. at stage 4, the default for Actors/NPCs).
-   **specialDescOrder**: (integer) determines the relative order of the
    specialDesc or initSpecialDesc within stage 1 or 4.
-   **lookListed**: (true or nil) determines whether or not this item is
    included in the list of miscellaneous items at stages 2 and 3. By
    default lookListed takes its value from isListed which in turn takes
    its value from !isFixed (i.e. portable items are listed and
    non-portable ones aren\'t). Note that this property has no effect
    for items with an active specialDesc or initSpecialDesc.
-   **contentsListedInLook**: (true or nil) determines whether this
    item\'s contents (if any) are listed when showing a room
    description. By default contentsListedInLook takes its value from
    contentsListed, which is true by default.

Thus, for example, suppose we had a room defined along the following
lines:

::: code
    study: Room 'Study' 'study'   
        "This is your favourite room in the whole house, where you do your best
        work, think your best thoughts, and read your best books. The way out is to
        the north. "
        
        north = hall
        out asExit(north)
        
        west = "Unfortunately you can't get the window open. "
        
        regions = downstairs
    ;


    + desk: Thing 'desk; fine old'
        "It's a fine old desk with a single drawer. "
        
        specialDesc = "A fine old desk stands in the middle of the room. "
        
        isFixed = true
        cannotTakeMsg = 'The desk is too heavy for one person to move around. '
        
        contType = On
        
        remapIn = deskDrawer   
    ;

    ++ redBox: Thing 'red box; small'
        "It's a smallish box you keep odds and ends in. "
        
        isOpenable = true
        isOpen = nil
        isLocked = true
        lockability = lockableWithKey
        contType = In
        
        bulk = 3
        bulkCapacity = 3
        
        lockedMsg = '\^<<theNameIs>> locked; you keep it that way to stop thieving
            little hands pinching your odds and ends. '
        
       
    ;

    +++ battery: Thing 'battery' 
        bulk = 1    
    ;

    ++ deskDrawer: Thing 'drawer; desk' 
        contType = In
        isOpenable = true
        isOpen = nil
        isFixed = true
        
        bulkCapacity = 6
        maxSingleBulk = 3
    ;

    +++ brownFile: Thing 'brown file; large brown; manuscript'
        "The file contains the manuscript of an exceedingly boring book a colleague
        sent you to read so you can offer your comments on it. Frankly if it
        perished in the flames that threaten to engulf your house you wouldn't
        regard it as much of a loss. "
        
        hiddenUnder = [silverKey]
        
        dobjFor(Open) asDobjFor(Read)
        
        readDesc = "Flicking through the file for ten seconds is enough to remind
            you why this rubbish would be best consigned to the flames. "
          
    ;
:::

Suppose further that an NPC called George follows the player character
into the room, and the player character opens the desk drawer, drops a
couple of objects, and then executes a LOOK command. The player would
then see something like this:

::: cmdline
    Study
    This is your favourite room in the whole house, where you do your best work, think your best thoughts, 
    and read your best books. The way out is to the north. 

    A fine old desk stands in the middle of the room. 

    You can see a note and a blue ball here.

    On the desk you see a blue book and a red box.

    In the drawer you see a brown file.

    George is watching you carefully, waiting for you to speak.
:::

This is okay, insofar as it gets the job done by telling the player what
s/he needs to know about the room\'s contents, but it\'s not terribly
elegant, not least because the contents of the desk and its drawer are
separated from the mention of the desk, and also, arguably, because
there\'s a threefold repetition of \"you see\". The adv3Lite library
provides a number of tools that let you customize this output further.

[]{#mentioned}

The key point to note is that at the start of a room description every
item in scope has its **mentioned** property reset to nil. As each item
is mentioned in the room description its mentioned property is set to
true. Once mentioned is true, the item won\'t be listed again, even if
it has a specialDesc or initSpecialDesc or it would otherwise have
appeared in a list of miscellaneous items or contents. We can take
advantage of this to mention an item manually before the room lister
would otherwise do so, and describe it in any way we please. To help us
do that the adv3Lite provides the following embedded expressions we can
use in various description properties to preempt the way the library
would otherwise have listed things:

-   **\<\<mention a obj\>\>** (or \<\<mention an obj\>\>): displays the
    aName of *obj* and sets obj.mentioned to true.
-   **\<\<mention the obj\>\>**: displays the theName of *obj* and sets
    obj.mentioned to true.
-   **\<\<list of lst\>\>**: displays the aName of every item in *lst*
    (properly formatted as a list) and sets all their mentioned
    properties to true.
-   **\<\<list of lst is\>\>**: as for \<\<list of lst\>\> except that
    the list is followed by the appropriate form of the verb \'to be\'
    (e.g. \'is\', \'are\', \'was\' or \'were\' depending on number and
    tense).
-   **\<\<is list of lst\>\>**: as for \<\<list of lst\>\> except that
    the list is preceded by the appropriate form of the verb \'to be\'
    (e.g. \'is\', \'are\', \'was\' or \'were\' depending on number and
    tense).
-   **\<\<exclude obj\>\>**: marks *obj* as mentioned so that it will be
    excluded from the room listing. This might be used, for example,
    when a custom description already refers to the object, perhaps by
    something other than its standard name. *Obj* can be either a single
    object or a list of object.

The first three of these can be immediately followed by the *{prev}* tag
to make any verb that follows agree, for example [\"\\\^\<\<list of
contents\>\> {prev} {lie} strewn across the desk. \"]{.code}

Armed with these tools we can, for example, amend the specialDesc of the
desk so that the desk lists its contents in any way we please. For
example:

::: code
    + desk: Thing 'desk; fine old'
        "It's a fine old desk with a single drawer. "
        

        specialDesc = "A fine old desk stands in the middle of the room<< if
              listableContents.length > 0 >>, bearing 
            <<list of listableContents>><<end>>. <<if deskDrawer.isOpen &&
              deskDrawer.listableContents.length > 0>> Its drawer is open and
            contains <<list of deskDrawer.listableContents>>. "
        
        isFixed = true
        cannotTakeMsg = 'The desk is too heavy for one person to move around. '
            
        contType = On
        
        remapIn = deskDrawer    
    ;
:::

Which would give us:

::: cmdline
    Study
    This is your favourite room in the whole house, where you do your best work, think your best thoughts, 
    and read your best books. The way out is to the north. 

    A fine old desk stands in the middle of the room, bearing a red box and a blue book. Its drawer is open and contains a brown file. 

    You can see a note and a blue ball here.

    George is watching you carefully, waiting for you to speak.
:::

Note how the desk\'s specialDesc has to test whether there\'s anything
on the desk or in its drawer available for listing before displaying the
appropriate text. Note in particular the use of the **listableContents**
property for this purpose; if we just used contents the drawer would be
shown as lying on top of the desk. Its thus a bit more work to get this
right than to allow the library to perform its default listing, but the
gain is much greater control over how some items are listed.

Finally, note that this works because the \<\<list of \>\> embedded
expressions set the mentioned property of the desk\'s contents before
the library would otherwise have listed them, so that they\'re no longer
available for listing by the time the default routine gets round to
them. It wouldn\'t have worked if we\'d used these expressions after the
library had already listed miscellaneous items or contents, since by
then it would have been too late.

The one listing that remained unaffected by the above methods was \"You
can see a note and a blue ball here. \" One way we could change this is
by incorporating a list of miscellaneous items into the room description
itself, for example:

::: code
    study: Room 'Study' 'study'   
        "This is your favourite room in the whole house, where you do your best
        work, think your best thoughts, and read your best books. The way out is to
        the north. <<if listableContents.length > 0>>\bIt's a bit messy right now
        since someone's left <<list of listableContents>> lying on the
        floor.<<end>>"
        
        north = hall
        out asExit(north)
        
        west = "Unfortunately you can't get the window open. "
        
        regions = downstairs
    ;
:::

This works after a fashion, but it\'s less than ideal, not least because
you may not want this list of miscellaneous items to appear before the
specialDescs of other objects. We could get round that by attaching the
list of the room\'s listableContents to the end of the desk\'s
specialDesc, perhaps, but this would be a bit ad hoc and messy. A better
way to customize the listing of miscellaneous items is probably by using
a CustomRoomLister, which we\'ll look at next.

\

## [CustomRoomLister]{#customroomlister}

A CustomRoomLister allows us to customise the text that comes
immediately before and after the list of miscellaneous items in a room
listing. To use a CustomRoomLister you attach it to the
roomContentsLister property of the room in question and pass the prefix
and suffix text you want to use via its constructor, thus:

::: code
    study: Room 'Study' 'study'   
        "This is your favourite room in the whole house, where you do your best
        work, think your best thoughts, and read your best books. The way out is to
        the north."
        
        north = hall
        out asExit(north)
        
        west = "Unfortunately you can't get the window open. "
        
        regions = downstairs
        
        roomContentsLister = new CustomRoomLister('Someone\'s left ', suffix: '
            lying on the floor. ')
    ;
:::

Note that here the first parameter we pass to the CustomRoomLister\'s
constructor is always the prefix string (since this is the most common
case). Any other parameters we want to pass to this constructor are
*optional named* paramaters, hence the need to include [suffix:]{.code}
before the suffix string we want to use. If we didn\'t pass a suffix
string the lister would simply use a full stop at the end of the list.

The other named parameters we could supply are **prefixMethod:** and
**suffixMethod:**. These enable us to define the methods the
CustomRoomLister uses to display the prefix string and/or suffix string
and are for use when simply supplying the strings themselves isn\'t
flexible enough (typically because we need a verb to agree in number
with the list of items we\'re displaying). Note that if we define
prefixMethod, any string we supply for the prefix won\'t be used;
likewise, if define suffixMethod, there\'s no point supplying a suffix
string, since it won\'t be used (unless we define the suffix method as
using it).

What the prefixMethod and suffixMethod parameters do is allow us to
replace the CustomRoomLister\'s standard showListPrefix and
showListSuffix methods with methods of our own devising. These methods
take three parameters: showListPrefix(lst, pl, irName) and
showListSuffix(lst, pl, irName). The *lst* parameter is the list of
items to be listed. The *pl* parameter defines whether the list
constitutes a plural (true) or singular(nil) grammatical subject (it\'s
plural either if there\'s more than one item in the list or if the first
item in the list is itself plural). The *irName* parameter is the
\'inRoomName\' of the room whose contents we\'re listing, and is only
really relevant if we\'re listing the contents of a [remote
location](senseregion.htm#descriptions).

To define a prefix or suffix method on a CustomRoomLister we therefore
need to name the parameter, use the **method** keyword to define a
method with three parameters, and then write our method definition
within curly braces, for example:

::: code
    study: Room 'Study' 'study'   
        "This is your favourite room in the whole house, where you do your best
        work, think your best thoughts, and read your best books. The way out is to
        the north."
        
        north = hall
        out asExit(north)
        
        west = "Unfortunately you can't get the window open. "
        
        regions = downstairs
        
        roomContentsLister = new CustomRoomLister(nil, prefixMethod: 
                                                  method (lst, pl, irName) 
            {"Lying on the floor <<if pl>>are<<else>>is<<end>> ";})
    ;
:::

Note that since we don\'t need a prefix string here, we supply the first
parameter as nil. We\'d define a suffix method in much the same way, for
example:

::: code
    study: Room 'Study' 'study'   
        "This is your favourite room in the whole house, where you do your best
        work, think your best thoughts, and read your best books. The way out is to
        the north."
        
        north = hall
        out asExit(north)
        
        west = "Unfortunately you can't get the window open. "
        
        regions = downstairs
        
        roomContentsLister = new CustomRoomLister('\^', suffixMethod: 
                                                  method (lst, pl, irName) 
            {" <<if pl>>are<<else>>is<<end>> lying on the floor. ";})
    ;
:::

Note that in this case we supply \'\\\^\' as the prefix string to make
sure that the sentence listing the room contents starts with a capital
letter.

\

## [Further Listing Options]{#further}

Consider the original version of the study room definition which
resulted in a listing like:

::: cmdline
    Study
    This is your favourite room in the whole house, where you do your best work, think your best thoughts, 
    and read your best books. The way out is to the north.

    A fine old desk stands in the middle of the room. 

    On the desk you see a blue book and a red box.

    In the drawer you see a brown file.

    In the red box you see a battery.
:::

There are two further options you can set to change the way this basic
listing is presented. The first is to change
**gameMain.paraBrksBtwnSubcontents** to [nil]{.code}, which will remove
the paragraph breaks between the sentences that list the contents of the
items in the room. In the above example, this would mean that the final
three sentences would be run together into a single paragraph, thus:

::: cmdline
    Study
    This is your favourite room in the whole house, where you do your best work, think your best thoughts, 
    and read your best books. The way out is to the north.

    A fine old desk stands in the middle of the room. 

    On the desk you see a blue book and a red box. In the drawer you see a brown file. In the red box you see a battery.
:::

[]{#parabrk}

Note that the **paraBrksBtwnSubcontents** property can also be
overridden on individual rooms, if you wish; the default behaviour is
for every room to take the value of this property from the setting on
gameMain.

A second option is to set **gameMain.useParentheticalListing** to true.
This would result in output like:

::: cmdline
    Study
    This is your favourite room in the whole house, where you do your best work, think your best thoughts, 
    and read your best books. The way out is to the north.

    A fine old desk stands in the middle of the room. 

    On the desk you see a blue book and a red box (in which is a battery).

    In the drawer you see a brown file.
:::

You can control the nesting depth of parenthetical listing by overriding
the value of **subLister.maxNestingDepth**. The default value is 1,
resulting in output like:

::: cmdline
    Study
    This is your favourite room in the whole house, where you do your best work, think your best thoughts, 
    and read your best books. The way out is to the north.

    A fine old desk stands in the middle of the room. 

    On the desk you see a blue book and a glass case (in which is a red box).

    In the drawer you see a brown file.
:::

If you increased the [maxNestingDepth]{.code} to 4, say, you might
potentially see something like:

::: cmdline
    Study
    This is your favourite room in the whole house, where you do your best work, think your best thoughts, 
    and read your best books. The way out is to the north.

    A fine old desk stands in the middle of the room. 

    On the desk you see a blue book and a glass case (in which is a red box (in which is a saucer (on which is a matchbox (in which is a tiny battery)))).

    In the drawer you see a brown file.
:::

If you set both [paraBrksBtwnSubcontents]{.code} and
[useParentheticalListing]{.code} to true, your output might look like:

::: cmdline
    Study
    This is your favourite room in the whole house, where you do your best work, think your best thoughts, 
    and read your best books. The way out is to the north.

    A fine old desk stands in the middle of the room. 

    On the desk you see a blue book and a glass case (in which is a red box). In the drawer you see a brown file.
:::

For further information on listing options, see the chapter on [Lists
and Listers](lister.htm).

## [Determining What\'s Listed]{#whatlisted}

Various (true or nil) properties are available to customize which items
are actually included in the listing of an item\'s contents, whether in
a room listing, or in response to an EXAMINE, INVENTORY or SEARCH
command.

The properties in question are the Thing **lookListed**,
**examineListed**, **searchListed**, **contentsListedInLook**,
**contentsListedInExamine** and **contentsListedInSearch**. The first
three of these determine whether an item is listed as part of the
miscellaneous contents of its parent in response to a LOOK command, or
when its parent is EXAMINED, or when its parent is searched (with SEARCH
or LOOK IN/UNDER/BEHIND) respectively. The second three determine
whether the contents of the item on which it is defined are listed in
response to a LOOK, EXAMINE or SEARCH command. By default
[examineListed]{.code}, [lookListed]{.code} and [searchListed]{.code}
all take their value from the [isListed]{.code} property. The
[contentsListedInLook]{.code} and [contentsListedInExamine]{.code}
properties both take their default values from the
[contentsListed]{.code} property (which is true by default). The default
value of [contentsListedInSearch]{.code}, however, is simply
[true]{.code}, since it\'s hard to think of many cases where you
wouldn\'t want an object to reveal its contents when explicitly
searched; the property is nevertheless provided for completeness.

The [inventoryListed]{.code} property determines whether an object is
listed in response to an INVENTORY command. It too takes its default
value from [isListed]{.code}.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Room Descriptions\
[[*Prev:* Rooms](thing.htm){.nav}     [*Next:* Doors](door.htm){.nav}
    ]{.navnp}
:::
