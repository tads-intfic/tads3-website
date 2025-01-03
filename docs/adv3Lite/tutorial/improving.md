---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="goldskull.html" class="nav">Goldskull</a> \> Improving the
Game  
<span class="navnp"><a href="making.html" class="nav"><em>Prev:</em> Making things happen</a>
   
<a href="weightier.html" class="nav"><em>Next:</em> Weightier Matters</a>
    </span>





# Improving the Game

## Synonymous Exits

The player character starts outside a cave that's described as being to
the north. Although that clearly suggests that the player should type
NORTH to enter the cave it would seem just as natural to type IN.
Likewise, once the player character is inside the cave it would seem
just as natural to type OUT as SOUTH to leave the cave. We could
obviously allow for that by adding `in = cave`
to `startroom` and `out =
startroom` to `cave`, but then **in** and
**north** would appear as separate exits in the exit lister (for the
startroom) just as **out** and **south** would appear as separate exits
in the cave, even though in reality they're just synonyms for the same
exit. This is arguably a bit misleading. The solution is to use
`asExit()`, as shown below:

```
    startroom: Room 'Outside Cave'
        desc = "You're standing in the bright sunlight just outside of a large,
            dark, foreboding cave, which lies to the north. The path back to your
            camp winds roughly southeast through the dense foliage. " 
        
        north = cave 
        in asExit(north)
        
        southeast()
        {
            if(goldSkull.isIn(me))
            {
                "Your mission complete, you head triumphantly back to your camp. ";
                finishGameMsg(ftVictory, [finishOptionUndo]);
            }
            else
                "You've no intention of leaving till you've got what you came for.
                ";
        }
    ;

    cave: Room 'Cave'    
        desc = "You're inside a dark and musty cave. Sunlight 
        pours in from a passage to the south. " 

        south = startroom 
        out asExit(south)
    ;
```

The construct `asExit(*dir*)` means "make this
exit go where the *dir* exit leads but don't show it as a separate exit
in exit listings." If you recompile and run the game again now you
should find that you can now go in and out of the cave using IN and OUT
but that these are not explicitly listed as exits.

## Missing Objects of Various Kinds

Another obvious way for the player to attempt to enter the cave is by
using the command ENTER CAVE, but that won't work because there's
nothing in the startroom to represent the cave. For that matter EXAMINE
CAVE won't work either, even though the "large, dark, foreboding cave"
is explicitly and prominently mentioned in the room description. We can
fix this by adding an object to represent the cave exterior easily
enough, but then the question is, what kind of object do we need? Of
course we could just make it a Thing, define a couple of properties on
it such as `isFixed = true`, and then add
handling for the ENTER command. But an easier solution is to use a
library class that does all this for us, just as we did in using a
StairwayUp to implement the tree in the Heidi game. In this case the
class to use is called `Enterable`, and we can
use it like this:

```
    + caveMouth: Enterable 'cave; dark large foreboding uninviting of[prep];
        mouth entrance'
        "The mouth of the cave is easily large enough to allow entrance, but looks
        dark and uninviting. "
        
        destination = cave
    ;
```

The main point to note here is the use of the
`destination` property to determine where the
player character ends up when he enters the cave. A smaller point to
note is the way we've defined the vocab property (the first element in
the template, i.e. the single-quoted string immediately following
`Enterable`). In particular, note the
'of\[prep\]' that appears in the adjective section (between the first
and second semicolons). The word 'of' is not actually an adjective, so
we mark it immediately afterwards with '\[prep\]' to signal that it's
actually a preposition. We need the word 'of' in there somewhere in case
the player tries to refer to MOUTH OF CAVE or some such phrase, but by
marking it as a preposition we ensure that the vocabulary of the
caveMouth object won't match just 'of'. Note too that we don't need to
define `isFixed = true`, since this is the
default for an Enterable (since Enterables aren't generally the kind of
thing you can pick up and carry around with you). By the way, the
caveMouth object obviously needs to be placed in your code somewhere
between startroom and cave.

The room description also mentions a path winding through thick foliage.
Let's deal with the foliage first. It's not actually essential to the
game, it's really only a piece of atmospheric scenery in the room
description. The player might try to examine it, and should get a
sensible response (certainly the player shouldn't be told "You see no
foliage here"). At a first attempt we might define a foliage object
thus:

```
    +  foliage: Thing 'foliage; thick dense; jungle trees leaves'
        "The foliage is so thick round here that it blocks every route but the one
        you came by and the entrance to the cave. "
        
        isFixed = true    
    ;   
```

This will do the job, but if players try to do anything with the foliage
but examine it, they'll just get the various default responses for all
the various actions. It might take them a little while, however, to
realize that the foliage is nothing more than a piece of stage scenery,
a decoration with virtually no function rather than something that might
be actually be useful in solving a puzzle or advancing the plot. The
conventional way to signal this to players is to have such a decoration
object respond with "The foliage is not important" to every command
except EXAMINE, which at once tells players that this is something they
don't need to bother with. We can do that by setting
`isDecoration = true` on the foliage object. In
fact, since it is only a decoration object that won't figure in any
other code, we don't even need to give it a name, we can define it as an
*anonymous object*, which can save a lot of time and effort thinking up
names for decoration objects that have no real function beyond acting as
a kind of backdrop:

```
    +  Thing 'foliage; thick dense; jungle trees leaves'
        "The foliage is so thick round here that it blocks every route but the one
        you came by and the entrance to the cave. "
        
        isDecoration = true   
    ; 
```

This type of situation is so common that the library defines another
custom class, Decoration, to deal with it. This allows us to make the
definition even briefer:

```
    +  Decoration 'foliage; thick dense; jungle trees leaves'
        "The foliage is so thick round here that it blocks every route but the one
        you came by and the entrance to the cave. "    
    ; 
```

Now, whether you prefer that to the previous version is to some extent a
matter of taste. The adv3Lite library is designed in such a way as to
allow you to define as many things as possible with just the Thing
class, and then go on to customize their behaviour by overriding various
properties. In some cases, like the Enterable example just above and the
StairwayUp example in the Heidi game, using one of the other library
classes can clearly save you quite a bit of work, since you'd otherwise
have to write quite a bit of your own code to provide equivalent
functionality. In the case of the Decoration class, however, all you're
being saved is a single property definition and a little bit of typing.
Whether it's easier to remember the class name or the property name you
need to produce the same effect is debatable, and different people could
quite reasonably take different views. The adv3Lite library therefore
allows you to do it either way to suit your own preference. In this
tutorial, however, it's probably better if we choose one way or the
other and then stick to it. I propose we go with using the classes
rather than the properties.

On balance, I do actually think this is the better choice. The first
reason is that, other things being equal, using a class name in the
object header makes your code that much easier to read, since it's that
much more obvious from looking at the first line of an object definition
what sort of object it is, whereas, particularly in an object definition
spanning many lines, it might be quite hard to pick out a property
definition like `isDecoration = true` or
`contType = On` that actually defines the
fundamental nature of the object. Also, in several cases the predefined
library classes come with useful defaults and other additional
behaviour. Perhaps just as important, but rather less obvious at this
stage, is that using the pre-defined library classes rather than just
Thing can help take advantage of the object-oriented and
class-inheritance features of the TADS 3 language.

The sunlight is another candidate for a Decoration object, so we could
define it like this:

```
    +  Decoration 'sunlight; bright dazzling; sun light'
        "It's so bright it's almost dazzling. "
    ;
```

This works just fine, but you may feel that the response "The sunlight
is not important" to attempts to take it, smell it, push it (and do
anything else but examine it) feels just a bit too much like a not-quite
appropriate canned message. If so you can replace it with your own
alternative by overriding the `notImportantMsg`
property:

```
    +  Decoration 'sunlight; bright dazzling; sun light'
        "It's so bright it's almost dazzling. "
        
        notImportantMsg = 'It\'s pointless even attempting that with something as
            insubstantial as sunlight. '
    ;
```

That still leaves us with the path. This can't quite be a Decoration,
since there are actions the player could reasonably attempt with the
path that are equivalent to trying to go south, and so shouldn't be met
with a response like "The path is not important." A better alternative
is to use the PathPassage class, which incidentally recognizes that
commands like FOLLOW PATH and TAKE PATH (but not GET PATH) mean
something like "go along the path" (a form of command not recognized by
the libary). As a first attempt we might try this:

```
    + pathBack: PathPassage 'overgrown path'
        "The heavily overgrown path runs roughly southeast through the trees. "
        
        destination = (location.southeast)    
    ;
```

This makes the path lead wherever the southeast exit of its immediate
location (i.e. startroom) leads, and it works after a fashion. But,
quite frankly, it's a bit of an ugly hack, since it's not really the way
PathPassage is meant to be used, but we'll leave it that way for now and
come back to it later.

Implementing the sunlight in the cave, and the path that's said to lead
out of the cave can be left as exercises for the interested reader. But
one thing we will change inside the cave is the definition of the
pedestal object so that it makes use of classes rather than properties:

```
    + pedestal: Fixture, Surface 'stone pedestal; smooth'
        "The smooth stone pedestal is artfully positioned to catch the sunlight at
        just this time of day. "
            
        notifyRemove(obj)
        {
            if(contents.length < 2)
            {
                "As <<obj.theName>> leaves the pedestal, a volley of poisonous
                arrows is shot from the walls! You try to dodge  the arrows, but
                they take you by surprise!";  
                
                finishGameMsg(ftDeath, [finishOptionUndo]);  
            }
        }
    ;
```

This may not save us a lot of typing, but it perhaps makes it easier to
see at a glance what kind of thing the pedestal is. We'll make some more
substantial changes to the pedestal in the next section.



------------------------------------------------------------------------



*adv3Lite Library Tutorial*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="goldskull.html" class="nav">Goldskull</a> \> Improving the
Game  
<span class="navnp"><a href="making.html" class="nav"><em>Prev:</em> Making things happen</a>
   
<a href="weightier.html" class="nav"><em>Next:</em> Weightier Matters</a>
    </span>


