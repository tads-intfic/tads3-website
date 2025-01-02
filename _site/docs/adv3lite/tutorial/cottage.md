<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="revisit.htm" class="nav">Heidi Revisited</a> \> Entering the
Cottage  
<span class="navnp"><a href="listening.htm" class="nav"><em>Prev:</em> Listening to the
Bird</a>    
<a href="climbing.htm" class="nav"><em>Next:</em> Climbing the tree</a>
    </span>

</div>

<div class="main">

# Entering the Cottage

Having players try to listen to the bird isn't the only accident waiting
to happen in this game. Now consider a transcript that starts off like
this:

<div class="cmdline">

    In front of a Cottage
    You stand outside a cottage. The forest stretches east. 

    >in
    You cant go that way. From here you could go east.

</div>

Since Heidi starts the game standing outside what may be her very own
cottage, this hardly seems an appropriate response. We need to provide a
more plausible reason why Heidi can't enter her cottage. Here's one way
to do it:

<div class="code">

    beforeCottage: Room 'In front of a Cottage'
        "You stand outside a cottage. The forest stretches east. "
        
        east = forest
        in = 'It\'s such a lovely day -- much too nice to go inside. '
    ;

</div>

Previously we only attached rooms to direction properties, but we can
attach all sorts of other things as well. If, as here, we define a
direction property as a string (single or double quoted) an attempt to
move in that direction will just cause the string to be displayed to the
player. This is useful in cases such as this where we want to provide a
non-default message explaining why travel in a given direction isn't
allowed.

While we're at it we could also change the default refusal message to
something a bit less generic than "You can't go that way." One way to do
that is to override <span class="code">cannotGoThatWayMsg</span> on
Room:

<div class="code">

    modify Room
        cannotGoThatWayMsg = 'Better stick to the path. '
    ;

</div>

Then we'd see something like:

<div class="cmdline">

    In front of a Cottage
    You stand outside a cottage. The forest stretches east. 

    >n
    Better stick to the path. From here you could go east.

</div>

Note how overriding <span class="code">cannotGoThatWayMsg</span> thus
changed the first part of the refusal message ("You can't go that way"
becomes "Better stick to the path") but leaves the second part ("From
here you could go east") intact. If we wanted to change the entire
message we would need to override the method
<span class="code">cannotGoThatWay(dir)</span>. This might be the
appropriate thing to do at the top of the tree, where being told "Better
stick to the path" is hardly appropriate:

<div class="code">

    topOfTree: Room 'At the top of the tree'
        "You cling precariously to the trunk. "
        
        down = clearing
        
        cannotGoThatWay(dir)
        {
            "The only way from here is down. ";
        }
    ;

</div>

But even with all these changes we're not out of the woods yet, since if
players attempt to EXAMINE THE COTTAGE or ENTER THE COTTAGE, they'll be
told that no such thing exists, even though it's plainly mentioned in
the room description. It's easy enough to add a cottage object; just add
the following object definition immediately after the definition of the
beforeCottage room:

<div class="code">

    + cottage: Thing 'tiny cottage;small simple; house home'
        "It's small and simple, but you're very happy here. "
        
        isFixed = true
    ;

</div>

This only does half the job, though:

<div class="cmdline">

    In front of a Cottage
    You stand outside a cottage. The forest stretches east. 

    >x cottage
    Its small and simple, but youre very happy here. 

    >enter cottage
    The tiny cottage is not something you can enter. 

</div>

We can fix this by overriding the
<span class="code">cannotEnterMsg</span> property of the cottage:

<div class="code">

    + cottage: Thing 'tiny cottage;small simple; house home'
        "It's small and simple, but you're very happy here. "
        
        isFixed = true
        
        cannotEnterMsg = 'It\'s such a lovely day -- much too nice to go inside. '
    ;

</div>

This works, but now we've defined exactly the same response twice, once
on the cottage and once on the beforeCottage location. This seems a bit
of a nuisance at best, and could be even more of a nuisance if we
decided we wanted to change this message, since we'd now have to
remember to change it in two places. One solution would be simply to
have the <span class="code">cannotEnterMsg</span> property of the
cottage take its value from the <span class="code">in</span> property of
beforeCottage:

<div class="code">

    + cottage: Thing 'tiny cottage;small simple; house home'
        "It's small and simple, but you're very happy here. "
        
        isFixed = true
        
        cannotEnterMsg = location.in
    ;

</div>

You may have noticed that the property for the message explaining the
refusal to allow Heidi to enter the cottage is called
<span class="code">cannotEnterMsg</span>. The adv3lite library tries to
follow this pattern consistenly, so that when an Xxxx action is refused,
the corresponding message property is called
<span class="code">cannotXxxxMsg</span>. Of course this only helps if
you know the name of the action. For the example the commands GET
COTTAGE, TAKE COTTAGE and PICK UP cottage would all result in the Take
action, so to respond to any of them with something a bit less bland
than the standard "The tiny cottage is fixed in place" you'd need to
override <span class="code">cannotTakeMsg</span>. Taking the trouble to
do this kind of thing is often worth it, since it helps lend a bit of
character to your game when you refuse impossible or unimplemented
actions with customized messages. In this case of the cottage, for
example, you could write:

<div class="code">

    + cottage: Thing 'tiny cottage;small simple; house home'
        "It's small and simple, but you're very happy here. "
        
        isFixed = true
        
        cannotEnterMsg = location.in
        cannotTakeMsg = 'You\'re not a tortoise; you can\'t carry your home with
            you. '
    ;

</div>

I'll leave it as an exercise to the reader to add an appropriate
<span class="code">cannotTakeMsg</span> to the tree and the branch. You
may also like to define some additional objects to implement other items
that are mentioned in room descriptions but not actually implemented.

</div>

------------------------------------------------------------------------

<div class="navb">

*adv3Lite Library Tutorial*  
<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="revisit.htm" class="nav">Heidi Revisited</a> \> Entering the
Cottage  
<span class="navnp"><a href="listening.htm" class="nav"><em>Prev:</em> Listening to the
Bird</a>    
<a href="climbing.htm" class="nav"><em>Next:</em> Climbing the tree</a>
    </span>

</div>