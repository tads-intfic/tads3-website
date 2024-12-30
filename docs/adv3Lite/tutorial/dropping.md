::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Heidi
Revisited](revisit.htm){.nav} \> Dropping objects from the tree\
[[*Prev:* Climbing the tree](climbing.htm){.nav}     [*Next:* Is the
bird in the nest?](birdinnest.htm){.nav}     ]{.navnp}
:::

::: main
# Dropping objects from the tree

Once Heidi reaches the top of the tree the player may encounter another
problem, or at least a point at which the behaviour of the game appears
to defy reality. If Heidi drops the bird or the nest while at the top of
the tree the object will appear to remain suspended in mid-air, as it
were. One solution might be to assume that anything dropped at the top
of the tree is put on the branch, and we could implement that. This
would be another good use of a Doer:

::: code
    Doer 'drop Thing'
        execAction(curCmd)    
        {        
            doInstead(PutOn, gDobj, branch);
        }
        
        where = topOfTree
    ;
:::

Here \'drop Thing\' will match the attempt to drop any Thing (in this
context either the bird or the nest, since these are the only two
portable objects in the game). The condition [where = topOfTree]{.code}
ensures that this Doer only takes effect when the player character is at
the top of the tree; when she\'s anywhere else we want the DROP command
to work as normal (incidentally we could supply a list of rooms, such as
[\[topOfTree, clearing\]]{.code}, here if we wanted our Doer to take
effect in more than one room). We then call [doInstead(PutOn, gDobj,
branch);]{.code} to turn the DROP *command* into a PutOn *action*. The
first parameter we must pass is the new action we want the player
character to carry out, in this case the PutOn action (the action that
would normally be triggered by a command of the form PUT X ON Y). We can
then specify the two objects we want the PutOn action to work with; here
[gDobj]{.code} means the existing direct object of the command.

With the PutOn action the *direct object* is the object being placed
(the bird or the nest) and the *indirect object* is the object on which
we want to place it (here the branch). In this instance the direct
object doesn\'t change, since it will be the same as the direct object
of the original DROP command (if Heidi drops the nest, it\'s the nest
that should be put on the branch, and if she drops the bird, it\'s the
bird that needs to be put on the branch), so we can just specify it as
[gDobj]{.code} (the existing direct object). But we do need to specify
the particular new indirect object of the command (here the branch),
otherwise the [doInstead()]{.code} method won\'t know what to put the
direct object on.

This is a perfectly good use of a Doer and a perfectly decent solution
to the problem of what should happen to objects dropped at the top of
the tree, but it\'s not the solution employed in the *Inform Beginner\'s
Guide*, from which Heidi has been borrowed. One reason for that might be
that it makes it a bit too easy for the player to win the game if DROP
NEST effectively turns into the winning move PUT NEST ON BRANCH. Another
might be that everywhere else in this game (and most others) DROP
SOMETHING results in something falling to the ground, not in something
being placed elsewhere. It could thus be argued that for the sake of
consistency that\'s what should happen here: anything dropped at the top
of the tree should fall to the ground, the problem in this case being
that the ground is in the clearing at the bottom of the tree.

We therefore need to find some way of intercepting the DROP command to
make objects dropped at the top of the tree fall to the clearing below.
We could use a Doer to do this, but here we\'ll illustrate another way,
using the [roomBeforeAction()]{.code} method of the location to
intercept an action just before it takes place:

::: code
    topOfTree: Room 'At the top of the tree'
        "You cling precariously to the trunk. "
        
        down = clearing
        
        cannotGoThatWay(dir)
        {
            "The only way from here is down. ";
        }
        
        roomBeforeAction()
        {
            if(gActionIs(Drop))
            {
                gDobj.actionMoveInto(clearing);
                "{The subj dobj} {falls} to the ground below. ";
                exit;
            }
        }
    ;
:::

Now let\'s explain how this works. The [roomBeforeAction()]{.code}
method is called on the player character\'s current location just before
she\'s about to carry out an action. The test
[if(gActionIs(Drop))]{.code} checks whether the current action is a Drop
action; if it is, the statements in braces immediately following the
if-statement are executed (while if it isn\'t, the
[roomBeforeAction()]{.code} method simply finishes its work without
doing anything else). The statement
[gDobj.actionMoveInto(clearing);]{.code} moves the direct object of the
Drop command (either the bird or the nest) into the clearing; note the
use of [gDobj ]{.code}to get at the direct object of the current action.
We could have just used [moveInto(clearing)]{.code} here, but using
[actionMoveInto()]{.code} is a good habit to get into in this kind of
situation, to ensure that the appropriate notifications are triggered
(yes I know I keep on mentioning \'notifications\' without explaining
what I mean, but there\'s a limit to how many things I can explain at
once without confusing you, and this one will just have to wait till a
more opportune time; but if you really want to know about them now you
could look at the section on [Reacting to Actions](../manual/react.htm)
in the adv3Lite manual).

The next statement, [\"{The subj dobj} {falls} to the ground below.
\";]{.code}, tells the player what\'s just happened. Since we don\'t
know what object Heidi will drop (in this game it can only be the bird
or the nest, but in a bigger game it could be one of a large number of
things) we need to write this message in such a way that it will
accurately refer to the dropped object whatever it is. We do this with
the *message substitution parameter* [{The subj dobj}]{.code} which
means \"the direct object of the command, taken as the subject of the
verb that follows\". The \"The\" at the beginning tells the game to use
the definite article (if appropriate; it would not be with proper names)
with the first letter capitalized (appropriately for the start of the
sentence). The next token, [{falls}]{.code}, tells the game to use the
correct form of the verb \'to fall\' to agree with the subject. We could
just have written \'falls\' here (without the curly braces), since in
this game the subject of the sentence can only be the bird or the nest,
so we know it\'ll always be singular. In a bigger game that might not
always be the case, however. If Heidi was also carrying some nuts, and
dropped them from the top of the tree you\'d want the player to see
\"The nuts **fall** to the ground below\" not \"The nuts **falls** to
the ground below\", and by placing \'falls\' in curly braces we ensure
that that\'s what you\'d get. Note, however, that this only works for
verbs the library knows about, which is most of the common irregular
ones. For a regular verb we\'d just place the ending in curly braces
according to how the ending should change. For example, if you had
written [\"{The subj dobj} {plummets} to the ground below. \";]{.code}
it wouldn\'t have worked, because \'plummet\' isn\'t an irregular verb;
instead you\'d need to write \"{The subj dobj} plummet{s/?ed} to the
ground below. \";.

A *message substitution parameter* is thus a fancy name for a piece of
text in curly braces that the library knows how to translate into
something more relevant and useful before displaying it to the player
(for example [{The subj dobj} {falls}]{.code} will become either \"The
bird\'s nest falls\" or \"The baby bird falls\" depending on which
object Heidi drops). If you\'re anxious to find out more about message
substitution parameters straight away you can read all about them in the
[adv3Lite manual](../manual/message.htm#parameter), where you can find a
complete list.

The final statement, [exit;]{.code}, prevents the rest of the action
from happening; otherwise we\'d see the message \"Dropped\" after the
message about the object falling to the ground below, and the object
would actually end up in topOfTree instead of clearing, since that\'s
where the standing handling for Drop would put it. The difference
between [exit]{.code} and [abort]{.code} is that [exit]{.code} stops the
action in its tracks but allows the rest of the turn cycle (Daemons,
Fuses and advancing the turn count, but not the after action
notifications) to go ahead, while [abort]{.code} additionally skips the
entire remainder of the turn cycle (so that it doesn\'t even count as a
turn).

Now try compiling and running the game again to check that everything
once again behaves as you expect.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Heidi
Revisited](revisit.htm){.nav} \> Dropping objects from the tree\
[[*Prev:* Climbing the tree](climbing.htm){.nav}     [*Next:* Is the
bird in the nest?](birdinnest.htm){.nav}     ]{.navnp}
:::
