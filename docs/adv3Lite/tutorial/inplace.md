::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Goldskull](goldskull.htm){.nav}
\> Everything in its place\
[[*Prev:* Weightier Matters](weightier.htm){.nav}     [*Next:*
Retrospective](retro.htm){.nav}     ]{.navnp}
:::

::: main
# Everything in its place

## Starting Out Right

In the original version of the Goldskull game, which we began by
reproducing, the rock starts out inside the cave, conveniently waiting
to be placed on a pedestal. In a real game you probably wouldn\'t want
to make the solution to the problem quite so obvious. In this two-room
game the only other place to put the rock (unless we want to hide it
somewhere, which we won\'t attempt here) is in the starting location.
While we\'re at it we may as well move the pebble there too. We\'ll also
introduce a new property, the [initSpecialDesc]{.code}. This determines
the way an item is first described in a room listing, until the item is
moved. Try moving the rock and the pebble into startroom and adding an
initSpecialDesc to the rock like this:

::: code
    + smallRock: Thing 'small rock; round solid'
         "It's roughly round and looks pretty solid. "
        
        initSpecialDesc = "A small rock lies on the ground near the mouth of the
            cave, evidence, perhaps, of long-term erosion. "
        
        weight = 10
    ;
:::

Once you\'ve made these changes, try recompiling and running the game.
You should now see the following as the description of the starting
location on the first turn:

::: cmdline
    Outside Cave
    Youre standing in the bright sunlight just outside of a large, dark, foreboding cave, which lies to the north.
    The path back to your camp winds roughly southeast through the dense foliage. 

    A small rock lies on the ground near the mouth of the cave, evidence, perhaps, of long-term erosion. 

    You can see a tiny pebble here.
:::

This is arguably both better and worse than just displaying \"You see a
small rock and a tiny pebble here.\" It\'s better insofar as the longer
sentence about the small rock is more atmospheric, but worse in that it
then makes the sentence about the tiny pebble look just a little
incongruous. What would we be even better would be if we could combine
the mention of both objects into a single sentence. Here\'s one way we
can do it:

::: code
    + smallRock: Thing 'small rock; round solid'
         "It's roughly round and looks pretty solid. "
        
        initSpecialDesc = "A small rock <<if pebble.moved>>lies <<else>> and
            <<mention a pebble>> lie <<end>> on the ground near the mouth of the
            cave, evidence, perhaps, of long-term erosion. "
        
        weight = 10
    ;
:::

Let\'s look at how this works. The smallRock will use its
initSpecialDesc until it has been moved. When a Thing is moved (via a
call to [actionMoveInto()]{.code}, which is generally used in the
handling of any player command that causes an object to be moved) its
[moved]{.code} property is set to true. We can thus use
[pebble.moved]{.code} to test whether the pebble has been moved or
whether it\'s still resting by the mouth of the cave next to the rock.
If the pebble has been moved, then [smallRock.initSpecialDesc]{.code}
just describes the rock as lying there, but if the pebble hasn\'t been
moved yet it mentions the pebble as well.

The subtle touch is using the embedded expression [\<\<mention a
pebble\>\>]{.code} to display the text \'a pebble\' in the course of
this description. What this does is not only to tell the game to provide
the name of the pebble with the indefinite article (\'a pebble\') but
also to note that the pebble has already been mentioned in the room
description so it doesn\'t need to be mentioned again, thus suppressing
the additional line \"You see a small pebble here.\" Once either the
pebble or the rock is moved, this changes, as the following transcript
illustrates:

::: cmdline
    Outside Cave
    Youre standing in the bright sunlight just outside of a large, dark, foreboding cave, which lies to the north. 
    The path back to your camp winds roughly southeast through the dense foliage. 

    A small rock and a tiny pebble lie on the ground near the mouth of the cave, evidence, perhaps, of long-term erosion. 

    >take pebble
    Taken. 

    >l
    Outside Cave
    Youre standing in the bright sunlight just outside of a large, dark, foreboding cave, which lies to the north. 
    The path back to your camp winds roughly southeast through the dense foliage. 

    A small rock lies on the ground near the mouth of the cave, evidence, perhaps, of long-term erosion. 

    >take rock
    Taken. 

    >l
    Outside Cave
    Youre standing in the bright sunlight just outside of a large, dark, foreboding cave, which lies to the north. 
    The path back to your camp winds roughly southeast through the dense foliage. 

    >drop all
    (first taking off the knapsack)
    You drop the tiny pebble, the small rock and the knapsack. 

    >l
    Outside Cave
    Youre standing in the bright sunlight just outside of a large, dark, foreboding cave, which lies to the north. 
    The path back to your camp winds roughly southeast through the dense foliage. 

    You can see a small rock, a knapsack, and a tiny pebble here.
:::

You may find this combination of techniques useful for getting your room
descriptions starting out just the way you want.

[initSpecialDesc]{.code} has a close relative called
[specialDesc]{.code}, the difference being that specialDesc displays all
the time (whether the object it has been defined on has been moved or
not --- actually that\'s not strictly true since you can control when
both [specialDesc]{.code} and [initSpecialDesc]{.code} are used, but
that\'s a complication we\'ll leave aside for now). Both initSpecialDesc
and specialDesc are used regardless of the value of [isFixed]{.code} or
[isListed]{.code} on the item in question, so a common use of
[specialDesc]{.code} is to provide a separate description of a fixed
object not otherwise mentioned in the main room description
(particularly when we want to call attention to the object rather than
letting it merge into the overall description of the room).

Consider the description of the cave room. As it now appears (with the
rock and pebble moved outside), the player will see:

::: cmdline
    Cave
    Youre inside a dark and musty cave. Sunlight pours in from a passage to the south. 

    On the stone pedestal you see a gold skull.
:::

This is actually a little odd, since the stone pedestal is only
mentioned as the supporter of the gold skull, yet it\'s referred to as
\'the stone pedestal\' as if the player already knows about it. Morever,
if nothing were resting on the pedestal, it wouldn\'t be mentioned at
all (admittedly that situation can\'t come about in this game without
killing the player, but it still doesn\'t seem quite right in
principle). Of course we could simply add a mention of the object to the
main room description, but this seems quite a good opportunity to
illustrate the use of [specialDesc]{.code}:

::: code
    + pedestal: Fixture, Surface 'stone pedestal; smooth solitary'
        "The smooth stone pedestal is artfully positioned to catch the sunlight at
        just this time of day. "
            
        specialDesc = "A solitary stone pedestal stands at the centre of the cave. "
        
        notifyRemove(obj)
        {
            gMessageParams(obj);
            
            if(getWeightWithin() - obj.getWeight < goldSkull.weight)
            {
                "As {the subj obj} {leaves} the pedestal, a volley of poisonous
                arrows is shot from the walls! You try to dodge the arrows, but
                they take you by surprise!";  
                
                finishGameMsg(ftDeath, [finishOptionUndo]);  
            }
        }
    ;
:::

The room description then becomes:

::: cmdline
    Cave
    Youre inside a dark and musty cave. Sunlight pours in from a passage to the south. 

    A solitary stone pedestal stands at the centre of the cave. 

    On the stone pedestal you see a gold skull.
:::

This is probably an improvement. At least the text makes sense, and at
least the stone pedestal will get a mention even if there\'s nothing on
it, but it would be neater if the paragraph about the skull could be
combined with the paragraph about the pedestal. We could try to do with
some combination of [\<\<if goldSkull.location==pedestal\>\>]{.code} and
[\<\<mention a goldSkull\>\>]{.code}, but since in principle all sorts
of objects could end up on top of the pedestal, this approach would
pretty soon become quite unwieldy. What we need is some means of listing
all the objects currently on the pedestal, whatever they happen to be.
The following should do the trick:

::: code
    + pedestal: Fixture, Surface 'stone pedestal; smooth solitary'
        "The smooth stone pedestal is artfully positioned to catch the sunlight at
        just this time of day. "
            
        specialDesc = "A solitary stone pedestal stands at the centre of the
            cave<<if listableContents.length > 0 >>, with <<list of
              listableContents>> resting on top of it<<end>>. "
        
        notifyRemove(obj)
        {
            gMessageParams(obj);
            
            if(getWeightWithin() - obj.getWeight < goldSkull.weight)
            {
                "As {the subj obj} {leaves} the pedestal, a volley of poisonous
                arrows is shot from the walls! You try to dodge the arrows, but
                they take you by surprise!";  
                
                finishGameMsg(ftDeath, [finishOptionUndo]);  
            }
        }
    ;
:::

We use [listableContents]{.code} rather than just [contents]{.code} to
exclude any fixtures or components that are attached to the pedestal
rather than just resting on top of it (see next subsection). If there
are any items in the [listableContents]{.code} list (which we can test
by seeing whether its length is greater than 0) then we append a list of
what they are, in a suitably-worded clause. The embedded expression
[\<\<list of listableContents\>\>]{.code} both produces a properly
formatted list of whatever\'s in [listableContents]{.code}, it also
marks everything in the list as having been mentioned so it won\'t
appear in the room contents listing again. With this definition the room
description becomes:

::: cmdline
    Cave
    Youre inside a dark and musty cave. Sunlight pours in from a passage to the south. 

    A solitary stone pedestal stands at the centre of the cave, with a gold skull resting on top of it. 
:::

There are several other ways we can tweak how items are displayed in a
room description listing. For the full story see the section on [Room
Descriptions](../manual/roomdesc.htm) in the *adv3Lite Manual*.

## Giving Due Warning

As the game stands, it gives very little warning to the player that
taking the gold skull might spring a trap. To be sure both the setting
and the nature of the skull might suggest that a hidden danger is
lurking somewhere, and the wary player might well suspect that just
walking in and taking the skull seems a bit too easy; moreover, if the
player character gets himself killed the player can always UNDO and try
something else, but most modern players of Interactive Fiction tend to
regard such \"learning by dying\" as rather bad form, and if you want
your game to be respected, it\'s better to put some kind of clue or
warning of impending danger that goes beyond relying on your players\'
intuition.

There are all sorts of ways we could do that here. If this were part of
a larger game, the player could have been warned of the trap in a
previous episode. Or we could furnish the cave with the grisly remains
of the last adventurer who tried to steal the gold skull. Or we could
call attention to rows of suspicious-looking holes in the walls of the
cave. But what we\'ll actually do here is provide the pedestal with a
warning inscription:

::: code
    + pedestal: Fixture, Surface 'stone pedestal; smooth solitary'
        "The smooth stone pedestal is artfully positioned to catch the sunlight at
        just this time of day, picking out the inscription carved into its front. "
            
        ... 
    ;

    ++ Fixture 'inscription; faded ancient sumerian; lettering script cuneiform'
        "The lettering is quite faded, and the script is in ancient Sumerian
        Cuneiform, but fortunately that's a language you took the trouble to learn,
        and you can just about make it out. "
        
        readDesc = "The inscription reads <q>Whoever dares remove this sacred object
            from its place shall become as that which he desires.</q> "
        
        weight = 0
        
        cannotTakeMsg = 'You can hardly take the inscription; it\'s part of the
            pedestal. '
        
    ; 
:::

For the sake of brevity we\'ve omitted repeating the rest of the
definition of the pedestal. Note that we don\'t need to give the
inscription object a programmatic name, since no code ever needs to
refer to it; it\'s only one step up from a decoration. We do define a
custom [cannotTakeMsg]{.code}, however, since it seems better to say
that the inscription is part of the pedestal than to say merely that
it\'s fixed in place (customizing message properties like this is a good
way to give your game some character and to show that you\'ve taken
trouble with it; if all players see is lots of default messages they
probably won\'t think much of your efforts). We define [weight =
0]{.code} because we don\'t want the inscription to contribute to the
weight of objects resting on the pedestal, as it otherwise would. Note
that since we took the trouble to use [listableContents]{.code} rather
than [contents]{.code} above to list what\'s on the pedestal, we\'ve
averted the danger of the inscription showing up as one of the things
resting on the pedestal (as it otherwise would). It might have been
easier to make the inscription a completely separate object, not
contained in the pedestal at all, and since neither the pedestal nor its
inscription are ever going to move in this game, that would have worked
just fine. In other situations though, it\'s possible that something
like the pedestal might be moved, so it\'s best to maintain the
containment relationship if possible, to make sure its components (such
as the inscription) will always move with it. It also serves to make the
relationship between the inscription and the pedestal that much clearer
in your code. Note, however, that if we wanted to attach a component to
a Container we might need to take a different approach, because if the
Container were ever to become closed (or started out closed), the
component would be hidden away out of sight inside the Container. We\'ll
return to this issue in a later chapter.

\<q\> and \</q\> just give a pair of matching typographical quotes ("
and "). Of more note is the [readDesc]{.code} property, which we
haven\'t met before. If defined on an object, this gives a response to
the command READ WHATEVER (in this case READ INSCRIPTION), which in
general is different from the response to EXAMINE WHATEVER. If you did
want the two to be the same you could just define [readDesc =
(desc)]{.code}.

## Pointing the Way

We\'ll just perform one more task before finally leaving the Goldskull
game. You may remember above we said that the way we\'d set up the
PathPassage notionally leading back to the camp was something of a
horrible hack. Now we\'ll see how it should be done:

::: code
    startroom: Room 'Outside Cave'
        desc = "You're standing in the bright sunlight just outside of a large,
            dark, foreboding cave, which lies to the north. The path back to your
            camp winds roughly southeast through the dense foliage. " 
        
        north = cave 
        in asExit(north)
       
        southeast = pathBack
        
    ;

    + pathBack: PathPassage 'overgrown path'
        "The heavily overgrown path runs roughly southeast through the trees. "
        
        canTravelerPass(traveler)
        {
            return goldSkull.isIn(traveler);
        }
        
        explainTravelBarrier(traveler)
        {
            "You've no intention of leaving till you've got what you came for. ";
        }
        
        travelDesc()
        {
            "Your mission complete, you head triumphantly back to your camp. ";
            finishGameMsg(ftVictory, [finishOptionUndo]);
        }    
    ;
:::

If you think there\'s something vaguely familiar about this, then
you\'re right. For one thing, much of the code on the [pathBack]{.code}
object was previously what was defined on the southeast() method of
[startroom]{.code}. For another, pointing a direction property to an
object and then defining the [travelDesc]{.code} property/method on that
object is something we\'ve done before, when we made the tree object in
the Heidi game a StairwayUp. PathPassage and StairwayUp both inherit
from the TravelConnector class (along with the Thing class), and that\'s
why we\'re seeing a similarity. You can read all about TravelConnectors
in the section on [Travel Connectors and Barriers](../manual/travel.htm)
in the adv3Lite manual, if you like, but you can glean most of what you
need to know about them from these two examples (the tree and the path).
The [canTravelerPass(traveler)]{.code} method determines whether
*traveler* is allowed to pass through this TravelConnector; in this case
we allow it if the traveler (which in this game can only be the player
character) is directly or indirectly carrying the gold skull (he\'d be
carrying it indirectly if he put the skull in the knapsack and then
carried the knapsack, but using [isIn(traveler)]{.code} allows for this
possibility too). If we disallow travel, the
[explainTravelBarrier(travel)]{.code} method is used to explain why.
Finally, the [travelDesc()]{.code} method can be used to define the
side-effects of travel, in this case displaying a message and then
ending the game in victory.

Can you notice anything that seems to be missing from this new version
of the [pathBack]{.code} object? You may remember that on the tree
object in the Heidi game we defined [destination = topOfTree]{.code} to
control where the player character went when the tree was climbed.
Ordinarily we\'d do the same here, but since the game is ended before
the player character can actually end up anywhere else, there\'s no
point, so we can leave the destination of pathBack as nil. If we
actually wanted to continue the game instead of ending it when the
player retrieves the gold skull we\'d have defined something like
[destination = camp]{.code} on the pathBack object.

It so happens that whereas the earlier scheme of defining a method on
[startroom.southeast]{.code} resembles the TADS 2 way of doing things,
this second scheme of pointing the southeast property to a PathPassage
object and then defining various methods of the PathPassage closely
resembles the adv3 way. The first way is often more convenient, and
that\'s why adv3Lite allows it, but the second way is more robust when
you need something like a PathPassage or a StairwayUp to represent a
physical connection between locations. The more abstract TravelConnector
class, when not used to represent a physical object, can also be useful
in controlling conditional travel (through its
[canTravelerPass()]{.code} and [explainTravelBarrier()]{.code} methods)
or carrying out the side-effects of travel (through its
[traveLDesc]{.code} method). We shall meet more examples of this in due
course.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Goldskull](goldskull.htm){.nav}
\> Everything in its place\
[[*Prev:* Weightier Matters](weightier.htm){.nav}     [*Next:*
Retrospective](retro.htm){.nav}     ]{.navnp}
:::
