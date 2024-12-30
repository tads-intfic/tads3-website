::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Finishing Touches\
[[*Prev:* Adding the Tree and the Branch](tree.htm){.nav}     [*Next:*
Reviewing the Basics](reviewing.htm){.nav}     ]{.navnp}
:::

::: main
# Finishing Touches

We\'ve nearly completed our first pass through the game. There\'s just a
couple more things to do. The first is to prevent Heidi climbing the
tree while holding both the bird and the nest in her hands (this would
be rather awkward to do!); to get the bird back in its nest on the
branch Heidi must either put the bird in the nest and then carry the
nest, or else make two trips up the tree, one with the nest and one with
the bird. In this simple game we\'ll enforce this in the simplest way
possible, by limiting the amount Heidi can carry at any one time. First
change the definition of the [me]{.code} object:

::: code
    + me: Thing 'you;;heidi'   
        isFixed = true    
        proper = true
        ownsContents = true
        person = 2   
        contType = Carrier    
        bulkCapacity = 1
    ;
:::

Adding [bulkCapacity = 1]{.code} to the definition of the [me]{.code}
object limits the total bulk Heidi can carry to one unit of bulk at a
time (here the \'unit\' of bulk is whatever the game author wants it to
be, that is, you define units of bulk on whatever scale suits the
purposes of your game). It wouldn\'t normally be a good idea to put such
a savage carrying restriction on the player character\'s carrying
capacity, but there are so few portable objects in this game that we can
get away with it.

For this to have any effect, we also need to give some bulk to the two
portable objects in question, the bird and the nest, by defining [bulk =
1]{.code} on both of them:

::: code
    + bird: Thing 'baby bird;;nestling'
        "Too young to fly, the nestling tweets helplessly. "
        
        bulk = 1
    ;


    clearing: Room 'A forest clearing'
        "A tall sycamore stands in the middle of this clearing. The path winds
        southwest through the trees. "
        
        southwest = forest
        up = topOfTree
    ;

    + nest: Thing 'bird\'s nest; carefully woven; moss twigs'
        "The nest is carefully woven of twigs and moss. "
        
        contType = In   
        bulk = 1
    ;
:::

Try making the changes indicated above and then compiling and running
the game once more. This time you\'ll find that Heidi can\'t pick up the
nest while holding the bird or *vice versa*, but that she can put the
bird in the nest, pick up the nest, and then climb the tree.

The final change is a bit more complex. At the moment there\'s no way of
winning the game (or ending it in any other way, apart from issuing a
QUIT command). We want the game to end victoriously when Heidi restores
the nest to the branch (preferably with the bird inside it, but we\'ll
leave that little detail till later). There are several ways we could do
this, but the one we\'ll use here is to use the [afterAction()]{.code}
method of the [branch]{.code} to test whether the nest is on the branch,
and then end the game in victory if it is:

::: code
    + branch: Thing 'wide firm bough; flat; branch'
        "It's flat enough to support a small object. "
        
        iFixed = true
        isListed = true
        contType = On
        
        afterAction()
        {
            if(nest.isIn(self))
                finishGameMsg(ftVictory, [finishOptionUndo]);
        }
    ;
:::

This introduces several new concepts at once; we\'ll explain them
briefly here and then give a slightly more systematic explanation in the
next chapter.

[afterAction()]{.code} is the first example we\'ve seen of a *method*. A
method is like a property in that it\'s associated with a specific
object (or class of objects), but unlike a property, which just holds a
piece of data, a method contains one or more *statements* of procedural
code. This code is *run* or *executed* (the two mean the same thing)
when the method is *called* or *invoked* (again, for our purposes, the
two mean the same thing).

As its name possibly suggests, the [afterAction()]{.code} method is
called on every object in scope (i.e., roughly speaking, every object in
the immediate vicinity of the actor) just after an action is performed.
Since Heidi must perform some action (like putting the nest on the
branch) in the immediate vicinity of the branch in order for the nest to
end up on the branch, we can confidently use the [afterAction()]{.code}
method of the branch to test for the presence of the nest on the branch.
We do so by using an [if]{.code} statement.

The [if]{.code} statement takes the form:

    if(expression)
        statement;

or:

    if(expression)
    {
        statement;
        statement;
        ...
    }

In the first case, [statement;]{.synPar} is executed if
[expression]{.synPar} evaluates to true; in the second the entire block
of statements between the opening and closing braces, { }, is executed
if [expression]{.synPar} evaluates to true. For this purpose, an
expression is considered to be true if it evaluates to anything other
than [nil]{.code} or [0]{.code}.

In this instance, the expression being tested is
[nest.isIn(self)]{.code}. [isIn(*obj*)]{.code} is a method of the
[Thing]{.code} class that evaluates to [true]{.code} (or returns
[true]{.code}) if the object it\'s called in is either directly or
indirectly in *obj*. Although we want to know whether the nest is *on*
the branch, programmatically we just test whether the nest lies *in* the
branch\'s containment tree.

You might have expected that we\'d test for [nest.isIn(branch)]{.code},
and that would indeed have worked, but using [self]{.code} here is
generally better practice. In TADS 3 *self* means \'the current object\'
or \'the object this property or method is being defined on\'. Since
we\'re defining the [afterAction()]{.code} method of [branch]{.code},
[self]{.code} here refers to [branch]{.code}. The advantage of using
self rather than branch in this context is that it makes our code more
generically applicable and less error-prone. If, for example, at some
later point we were to change our mind about calling the branch object
[branch]{.code}, and decided to call it [bough]{.code} instead, its
[afterAction()]{.code} method would still work as expected without our
having to remember to change [isIn(branch)]{.code} to
[isIn(bough)]{.code} since self would now automatically refer to
[bough]{.code}.

So, if the nest is on the branch when the [afterAction()]{.code} method
of [branch]{.code} is invoked, the statement [finishGameMsg(ftVictory,
\[finishOptionUndo\]);]{.code} will be executed. But what does this do?
[finishGameMsg()]{.code} is the first example we\'ve encountered of an
adv3Lite *function*. Like a method, a function is a block of code that
contains one or more procedural statements (i.e. code to be executed).
Unlike a method, a function is not associated with any particular
object. [finishGameMsg()]{.code} is a function defined in the adv3Lite
library for use when we want to finish the game. It takes two
*arguments*. The first defines how we want the game to end. Here we want
it to end with the player winning, so we use [ftVictory]{.code} (you can
think of this being short for finishTypeVictory, although the library
wouldn\'t recognize this longer form). Other possibilities included
[ftDeath]{.code}, [ftFailure]{.code} and [ftGameOver]{.code}.
Alternatively, you could just use a single-quoted string with your own
message, such as \'YOU HAVE DONE WELL\' or \'THAT WAS DISMAL\'.

The second parameter we pass to the [finishGameMsg()]{.code} function is
a list of finishOptions. When you call the [finishGameMsg()]{.code}
function the game displays your chosen message and then offers the
player a list of options. These always include the options to RESTART
the story, RESTORE a saved game or QUIT, but here we also want to offer
the player the option to UNDO his or her last turn (in case s/he wants
to carry on playing the game to try something different, perhaps), so we
include the option [finishOptionUndo]{.code}. The square brackets round
[finishOptionUndo]{.code} indicate that we are actually passing a list
of options to the function, though a list that here contains only one
item. There could have been more, e.g., [\[finishOptionUndo,
finishOptionCredits, finishOptionFullScore,
finishOptionAmusing\]]{.code}, but since we haven\'t defined any credits
for this game, and we haven\'t been keeping score, and we haven\'t
defined any amusing things for the player to try after winning the game,
we really don\'t need these other options here.

This is as far as we\'ll take the Heidi game for now. We\'ll add some
more refinements to it in Chapter Five, but we introduced a lot of new
concepts in a bit of a rush at the end of this chapter just to explain
how the game could be won, and we actually covered quite a bit of ground
before that, so before adding any further finishing touches to our Heidi
game we should pause and take stock, which is what we\'ll do in the next
chapter. In the meantime, here\'s the complete listing of what the Heidi
game should now look like:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"

    versionInfo: GameID
        IFID = '' // obtain IFID from http://www.tads.org/ifidgen/ifidgen
        name = 'The Adventures of Heidi'
        byline = 'by A.N. Author'
        htmlByline = 'by <a href="mailto:an.author@somemail.com">
                      A.N. Author</a>'
        version = '1'
        authorEmail = 'A.N. Author <an.author@somemail.com>'
        desc = 'A simple game borrowed from the Inform Beginner\'s Guide by Roger
            Firth and Sonja Kesserich.'
        htmlDesc = 'A simple game borrowed from the <i>Inform Beginner\'s Guide</i>
            by Roger Firth and Sonja Kesserich.'    
        
    ;

    gameMain: GameMainDef
        /* Define the initial player character; this is compulsory */
        initialPlayerChar = me
    ;


    /* The starting location; this can be called anything you like */

    beforeCottage: Room 'In front of a Cottage'
        "You stand outside a cottage. The forest stretches east. "
        
        east = forest
    ;

    /* 
     *   The player character object. This doesn't have to be called me, but me is a
     *   convenient name. If you change it to something else, rememember to change
     *   gameMain.initialPlayerChar accordingly.
     */

    + me: Thing 'you;;heidi'   
        isFixed = true    
        proper = true
        ownsContents = true
        person = 2   
        contType = Carrier    
        bulkCapacity = 1
    ;


    forest: Room 'Deep in the forest'
        "Through the dense foliage, you glimpse a building to the west. A track
        heads to the northeast. "
        
        west = beforeCottage
        northeast = clearing
    ;

    + bird: Thing 'baby bird;;nestling'
        "Too young to fly, the nestling tweets helplessly. "
        
        bulk = 1
    ;


    clearing: Room 'A forest clearing'
        "A tall sycamore stands in the middle of this clearing. The path winds
        southwest through the trees. "
        
        southwest = forest
        up = topOfTree
    ;

    + nest: Thing 'bird\'s nest; carefully woven; moss twigs'
        "The nest is carefully woven of twigs and moss. "
        
        contType = In   
        bulk = 1
    ;


    + tree: Thing 'tall sycamore tree;;stout proud'     
        "Standing proud in the middle of the clearing, the stout tree looks easy to
        climb."
        
        isFixed = true
    ;

    topOfTree: Room 'At the top of the tree'
        "You cling precariously to the trunk. "
        
        down = clearing
    ;

    + branch: Thing 'wide firm bough; flat; branch'
        "It's flat enough to support a small object. "
        
        iFixed = true
        isListed = true
        contType = On
        
        afterAction()
        {
            if(nest.isIn(self))
                finishGameMsg(ftVictory, [finishOptionUndo]);
        }
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Finishing Touches\
[[*Prev:* Adding the Tree and the Branch](tree.htm){.nav}     [*Next:*
Reviewing the Basics](reviewing.htm){.nav}     ]{.navnp}
:::
