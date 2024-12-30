::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> Just the Ticket\
[[*Prev:* Schemes and Devices](schemes.htm){.nav}     [*Next:* The
Maintenance Room](maintenance.htm){.nav}     ]{.navnp}
:::

::: main
# Just the Ticket

The description of the Airport game calls for a ticket found by picking
up a newspaper in the snack bar. We\'ve already implemented the
newspaper; now it\'s time to implement the ticket:

::: code
    ticket: Thing 'plane ticket'
        "It's a ticket for flight TI 179 to Buenos Aires. "
        
        readDesc = (desc)
        specialDesc = "A ticket lies on the ground. "
        useSpecialDesc = (location == getOutermostRoom)

    ;
:::

That was the easy bit. The only new thing here is the use of the
useSpecialDesc property to determine when the specialDesc is used. We
want \"A ticket lies on the ground\" to appear in the room description
whenever the ticket is notionally lying on the ground, which is whenever
it\'s directly in a room rather than some other object; we can test this
by testing whether its location is the same as the room it\'s in, as
above. While we\'re at it we define [readDesc]{.code} as [(desc)]{.code}
so that READ TICKET gives the same response as X TICKET. The next trick
is to hide it in the newspaper so that the player character finds it if
he either searches the newspaper or picks it up.

It would be rather complicated to make the newspaper a container just so
we can hide the ticket in it. Fortunately we don\'t need to; instead we
can make use of the **hiddenIn** property. This contains a list of items
that are notionally hidden inside an object, and are discovered when the
player issues a LOOK IN or SEARCH command. To use hiddenIn we list the
items we want the player to be able to discover in this way, while
defining the items elsewhere in our code with no starting location (i.e.
a starting location of nil), as with the ticket above. We can thus put
the ticket in the hiddenIn property of the newspaper:

::: code
    ++ newspaper: Thing 'newspaper; narcosia; paper herald'
        "It's a copy of the latest edition of the <i>Narcosia Herald</i>. "
        
        readDesc = "A quick skim of the paper reveals nothing unusual for this part
            of the world. Yet another government minister is denying charges of
            ...
            to this godforsaken hell-hole. "
        
        hiddenIn = [ticket]
    ;
:::

In the same way we could use [hiddenUnder]{.code} or
[hiddenBehind]{.code} to hide items under or behind another object.

This will work well enough if the player thinks to LOOK IN or SEARCH the
newspaper, but nothing happens if the player character just picks it up.
Picking up an object would reveal any items in its [hiddenUnder]{.code}
or [hiddenBehind]{.code} lists, on the basis that they would be left
behind when the object is picked up and hence revealed to view, but if
an object is picked up anything hidden in it is assumed to travel with
it. We can change that by overriding the **revealOnMove()** method,
which defines what happens when the object is moved. By default this is
the method that reveals anything hidden under or behind the object, but
since we\'re not hiding anything under or behind the newspaper we can
override this method to do just what we need:

::: code
    ++ newspaper: Thing 'newspaper; narcosia; paper herald'
        "It's a copy of the latest edition of the <i>Narcosia Herald</i>. "
        
        readDesc = '''A quick skim of the paper reveals nothing unusual for this part
            of the world. Yet another government minister is denying charges of
            ...
            to this godforsaken hell-hole. '''
        
        hiddenIn = [ticket]
        
        revealOnMove()
        {
            if(hiddenIn.length > 0)
            {
                "As you pick up the newspaper a ticket falls out of it
                and lands on the floor. ";
                
                ticket.moveInto(getOutermostRoom);
                
                hiddenIn = [];
            }
        }
        
        lookInMsg = (readDesc)
    ;
:::

We first check that there\'s something still hidden in the newspaper
before doing anything else, since we only want the ticket to fall out of
the newspaper the first time it\'s picked up, and not thereafter. Then,
if the ticket is still hidden in the newspaper, we display a message to
say that it flutters out and lands on the floor, move the ticket to the
enclosing outer room, and empty the hiddenIn list. Although this version
of [revealOnMove()]{.code} will work perfectly well for this game, if
you wanted a more generalized version of the routine that worked
whatever was hidden in the newspaper you could write:

::: code
    ++ newspaper: Thing 'newspaper; narcosia; paper herald'
        "It's a copy of the latest edition of the <i>Narcosia Herald</i>. "
        
        readDesc = '''A quick skim of the paper reveals nothing unusual for this part
            of the world. Yet another government minister is denying charges of
            ...
            to this godforsaken hell-hole. '''
        
        hiddenIn = [ticket]
        
        revealOnMove()
        {
            if(hiddenIn.length > 0)
            {
                "As you pick up the newspaper <<list of hiddenIn>> {prev} {falls}
                out of it and land{s/ed} on the floor. ";
                
                moveHidden(&hiddenIn, getOutermostRoom);
            }
        }
        
        lookInMsg = (readDesc)
    ;
:::

Here, [\<\<list of hiddenIn\>\>]{.code} provides a list of everything
that\'s hidden in the newspaper, while the [{prev}]{.code} tag then
ensures that the verbs [{falls}]{.code} and [land{s/ed}]{.code} will
agree with the list, whether it turns out to be a singular or plural
subject (e.g. \"a ticket falls\...\" or \"a ticket and a leaflet
fall\...\"). Meanwhile the [moveHidden(&prop, loc)]{.code} method moves
everything in the *prop* list to *loc* and then sets *prop* to \[\].
Note that we pass the property pointer &prop to this method. I repeat,
we don\'t actually *need* this more general form of
[revealOnMove()]{.code} in this game; it\'s shown here so you can see
how to do it if you need it in your own game.

One last thing: once the ticket has fallen out of the newspaper then
LOOK IN NEWSPAPER will produce the response \"You see nothing of
interest in the newspaper\", which could rather too easily be taken as a
comment on the paper\'s contents. To avoid this, it would be better if
LOOK IN NEWSPAPER worked the same as READ NEWSPAPER once there\'s
nothing left inside it. When LOOK IN has nothing else to display, it
displays the object\'s **lookInMsg**. So here the easiest thing to do is
to define [lookInMsg]{.code} to be the same as [readDesc]{.code}. But
then we hit another apparent snag: [lookInMsg]{.code} would normally be
defined as a single-quoted string but we defined [readDesc]{.code} as a
double-quoted string. Fortunately, adv3Lite also allows us to define it
as a single-quoted string, so we need to change it to one here. But our
original definition of the newspaper\'s [readDesc]{.code} contained a
number of apostrophes which we\'d now need to escape with backslashes.
To avoid having to do this, we use the alternative way of defining a
single-quoted string, by starting and ending it with three single-quote
marks in a row \'\'\'like this\'\'\'. This removes the need to escape
any apostrophes/single-quote marks (two names for the same character
here) within the string. (Alternatively, we could have got away with
defining [lookInMsg = readDesc]{.code}, since this is an instance where
adv3Lite allows a double-quoted string to be used in place of the
expected single-quoted one, but this isn\'t always the case, so don\'t
get into the habit of thinking they\'re always interchangeable!)

Now try compiling and running the game again to test that the newspaper
and ticket work as expected. Use whichever version of
[revealOnMove()]{.code} you prefer.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> Just the Ticket\
[[*Prev:* Schemes and Devices](schemes.htm){.nav}     [*Next:* The
Maintenance Room](maintenance.htm){.nav}     ]{.navnp}
:::
