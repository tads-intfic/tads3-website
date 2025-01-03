---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Global Command
Remapping  
<span class="navnp"><a href="t3odd_noun.html" class="nav"><em>Prev:</em> Handling Odd Noun
Phrases</a>    
<a href="t3past.html" class="nav"><em>Next:</em> Writing a Game in the
Past Tense</a>     </span>
# Global Command Remapping

In version 3.0.17, the Adv3 library introduced "global remapping." This
is a way of transforming the player's input into a different syntax, so
that the parser sees a rewritten version of the command.

One reason that you might want to rewrite a command is that natural
languages often have several ways of saying the same thing - that is, a
single underlying meaning can often be expressed with several syntactic
variations. In these cases it's convenient to be able to funnel the
syntactic variations down to a single internal representation, so that
you can write a single set of handlers (dobjFor, iobjFor, etc) for that
one meaning, rather than having to duplicate the code in several places
just to handle the syntax differences. TADS does this automatically to a
large degree through its grammar matching system, but that only goes as
far as handling superficial variations in verb syntax; sometimes there
are two completely different verbs that amount to the same thing, and
sometimes the equivalency depends on context.

Another reason for rewriting commands is that natural languages
sometimes use the same syntax to mean quite different things. For
example, in English, TAKE usually means PICK UP, but when used with
ASPIRIN, PICTURE, or A SEAT, it can mean something different. These
sorts of contextual meanings are often easy enough to handle with the
dobjFor and iobjFor mechanisms, but sometimes it's better to rewrite the
command into an unambiguous form from the outset (EAT ASPIRIN, SNAP
PICTURE, SIT ON SEAT) so that there's less to override in the action
handlers, and so that object resolution uses the rules for the remapped
phrasing rather than the original.

Global remapping is related to the "remapTo" mechanism. remapTo lets an
object handle a given action by rewriting the command into a different
form; for example, Room handles "look in *room*" by remapping the
command to "examine *room*" via remapTo.

The remapTo mechanism is convenient, but it has an important limitation:
it's tied to the objects involved in a command. Obviously, remapping
that's associated with the objects in a command can't occur until after
the objects are known. This means that remapTo can't take effect until
after the object resolution phase of parsing.

That's where the new mechanism comes in. It's "global" in the sense that
it's not associated with any particular objects. Instead, there's simply
a list of remapping rules that's always in effect. Since the rules are
global, there's no need to wait until after the objects are known to
apply the rules - they can be applied as soon as the parser has
determined the syntactic structure of the player's input, before any
objects have been resolved.

This ability to apply rewrites *before* object resolution is the whole
purpose of the new global remapping system. There are cases that remapTo
can't readily handle due to its association with resolved objects.

## How to create a global remapping

To create a global remapping, you define an object of class
GlobalRemapping. The parser automatically maintains a global list of
these objects, so all you need to do is define one, and the parser will
find it and apply it. On every command (more specifically, on parsing
each action), the parser runs through its global list of remappings, and
calls each one to give it a chance to apply its rewrite.

Each GlobalRemapping object you define needs one method, getRemapping(
*issuingActor, targetActor, action*). *issuingActor* gives the Actor
object of the "issuer" of the command, which is the actor who typed the
command at the command prompt. In most cases this is the player
character, but it's possible for other actors to issue commands via
scripted events. *targetActor* is the Actor object giving the character
to whom the command is addressed. For example, in "Bob, go north", the
target actor is Bob. *action* is the Action describing the command to be
performed. This object's class tells you the type of verb involved, and
it provides the properties dobjMatch, iobjMatch, topicMatch, and
literalMatch that give you the "parsing match trees" of the objects
involved, if any.

The getRemapping() method has essentially two tasks to perform. First,
it must determine whether or not it wants to apply a remapping. To do
this, it should examine the Action object to see if this is the type of
command that the remapping wants to transform. If the answer is no, the
routine should simply return nil. If the answer is yes, the routine
performs its second task: create and return the transformed version of
the command.

When the routine decides to remap the command, the return value is a
list with two elements: \[*targetActor*, *newAction*\]. The
*targetActor* is the Actor to whom the *transformed* command is
addressed. In many cases this will simply be the same as the original
target actor, but you can change the target if necessary. The
*newAction* is a new Action object giving the new action to be performed
in place of the original.

## Global remapping runs before object resolution

Note that the Action object in the getRemapping() parameters does
**not** include a list of the actual objects involved in the command.
Instead, it has parse trees describing the syntax of the noun phrases in
the player's command that refer to the objects. This is very different
from what we're accustomed to for writing things like dobjFor() and
iobjFor() handlers - in those routines, we can look at variables like
gDobj, gIobj, gTopic, and gLiteral to get the actual objects involved in
the command.

So, why aren't gDobj and the rest available? This is because global
remapping happens *before* the "object resolution" phase. Object
resolution is the part of the parsing process where the parser examines
the noun phrases in the player's input and figures out which game
objects they refer to. Before the object resolution phase, the parser
only knows the noun phrases. Since global remapping runs before object
resolution, only the noun phrases are available.

As we mentioned in the introduction, the whole point of the global
remapping mechanism is that it runs before object resolution, but this
does slightly complicate things when we try to use the mechanism.

Fortunately, we're not completely on our own to interpret the noun
phrases. For one thing, the parser hasn't yet resolved the noun phrases
to objects by the time we get to remapping, but it has performed *some*
analysis. Specifically, the parser has determined the syntax of the noun
phrases and produced "match trees" for them. A match tree is a data
structure that describes the syntax of a phrase - it's basically a
sentence diagram of the type you probably encountered in elementary
school language classes. You can read all about these in the GrammarProd
chapter of the *TADS 3 System Manual*, but for the purposes of writing a
remapping rule, you probably won't need to know much about them
directly. Instead, the parser provides helper methods that let you ask
the most relevant questions about the match trees without having to
decode them.

The key question that you'll usually want to ask in a remapper is
whether a given noun phrase *could* resolve to a given object. Remember,
it's not possible to determine at this point if a phrase *actually*
resolves to a given object - we can't know that until after object
resolution, at which point it would be too late to perform global
remapping. However, we can rule objects in or out, according to whether
their vocabulary words could possibly match those in the noun phrase.
The Action class provides two methods to do just this:
canDobjResolveTo(*obj*) does this for the direct object, and
canIobjResolveTo(*obj*) works for the indirect object. These methods
return true if the relevant noun phrase could possibly resolve to *obj*,
nil if not. These methods only take into account the syntax of the noun
phrase; they don't look at things like location and scope, since we can
only properly consider those factors after we know the final form of the
action.

You can also get the literal text of the noun phrase, if you want to do
your own parsing at the textual level. As we mentioned, you can get the
various match trees via the Action's properties dobjMatch, iobjMatch,
topicMatch, and literalMatch. Once you have a match tree, you can get
its original literal text via its method getOrigText(), and you can
retrieve the same information as a token list via getOrigTokenList().

## How remappings interact

The parser keeps a global list of all GlobalRemapping objects, and it
runs through the list on each turn, calling each one's getRemapping()
method to give it a chance to apply its transformation.

If a getRemapping() method returns nil, the parser simply continues on
to the next rule in the list to give it a crack at the command, and so
on until it reaches the end of the list. Upon exhausting the list, the
parser moves on to the next parsing phase (object resolution).

If a getRemapping() method returns a transformed command, the parser
replaces the original action (and target actor) with the new version. It
then **starts over** in its scan of the global list. The reason for
starting over is that there might be some other rule - possibly earlier
in the list - that applies to the *new* version of the command. By
starting the scan over, we ensure that any remapping that applies to the
new version gets a chance to apply its transformation.

Because of the way the parser re-scans the list after each
transformation of the command, the order of application of the rules
doesn't make any difference in terms of performing "chained"
transformations, where the output of one rewrite is the input to a
further rewrite. However, the order does matter when two or more rules
could both apply to the *same* input. For example, suppose you have a
rule that transforms the command "TAKE RED BOOK", and another that
applies to "TAKE *book*", where *book* is any type of book in the game;
both of these rules will apply to "TAKE RED BOOK". In such a case, you
might want to fine-tune the ordering of the rules. You can do this using
the remappingOrder property of the GlobalRemapping object. The parser
scans the list in ascending order of this property, so a rule with a
lower remappingOrder value will run earlier than one with a higher
value. The default value is 100, so if you don't override this for any
rules, they'll all have the same priority and thus will run in arbitrary
order.

## A detailed example

There are some subtleties to writing a global remapping that are easiest
to explain by looking at a concrete example. We'll look at a remapping
that's provided as part of the Adv3 library: giveMeToAskFor, which maps
commands of the form "ACTOR, GIVE ME ITEM" to the alternative format
"ME, ASK ACTOR FOR ITEM". This transformation makes it easier to code
actor interactions, since it funnels both phrasings into the single ASK
FOR format, which means that you can handle both kinds using AskForTopic
objects. Here's the object definition:

```
    /*
     *   Define a global remapping to transform commands of the form "X, GIVE
     *   ME Y" to the format "ME, ASK X FOR Y".  This makes it easier to write
     *   the code to handle these sorts of exchanges, since it means you only
     *   have to write it in the ASK FOR handler.  
     */
    giveMeToAskFor: GlobalRemapping
        /*
         *   Remap a command, if applicable.  We look for commands of the form
         *   "X, GIVE ME Y": we look for a GiveTo action whose indirect object
         *   is the same as the issuing actor.  When we find this form of
         *   command, we rewrite it to "ME, ASK X FOR Y".  
         */
        getRemapping(issuingActor, targetActor, action)
        {
            /* 
             *   if it's of the form "X, GIVE Y TO Z", where Z is the issuing
             *   actor (generally ME, but it could conceivably be someone
             *   else), transform it into "Z, ASK X FOR Y".  
             */
            if (action.ofKind(GiveToAction)
                && action.canIobjResolveTo(issuingActor))
            {
                /* create the ASK FOR action */
                local newAction = AskForAction.createActionInstance();

                /* remember the original version of the action */
                newAction.setOriginalAction(action);

                /*
                 *   Changing the phrasing from "X, GIVE Y TO Z" to "Z, ASK X
                 *   FOR Y" will change the target actor from X in the old
                 *   version to Z in the new version.  In the original format,
                 *   the pronouns "you", "your", and "yours" implicitly refers
                 *   to Z ("Bob, give me your book" implies "bob's book").  The
                 *   rewrite will change that, though - assuming that Z is a
                 *   second-person actor, "you" will by default refer to Z in
                 *   the rewrite.  In order to preserve the original meaning,
                 *   we have to override "you" in the rewrite so that it
                 *   continues to refer to "X", which we can do using a pronoun
                 *   override in the new action.  
                 */
                newAction.setPronounOverride(PronounYou, targetActor);

                /* 
                 *   The direct object - the person we're asking - is the
                 *   original target actor ("bob" in "bob, give me x").  Since
                 *   this is a specific object, we need to wrap it in a
                 *   PreResolvedProd.
                 */
                local dobj = new PreResolvedProd(targetActor);

                /*
                 *   The thing we're asking for is the original direct object.
                 *   ASK FOR takes a topic phrase for its indirect object,
                 *   whereas GIVE TO takes a regular noun phrase.  The two
                 *   aren't quite identical syntactically, so we'll do better
                 *   if we re-parse the original dobj noun phrase as a topic
                 *   phrase.  Fortunately, this is easy...
                 */
                local iobj = newAction.reparseMatchAsTopic(
                    action.dobjMatch, issuingActor, issuingActor);

                /* set the object match trees */
                newAction.setObjectMatches(dobj, iobj);
                
                /* 
                 *   Return the new command, addressing the *issuing* actor
                 *   this time around. 
                 */
                return [issuingActor, newAction];
            }

            /* it's not ours */
            return nil;
        }
    ;
```

Let's go over that line by line.

First, we have to define the GlobalRemapping object, using an ordinary
object definition for an object of class GlobalRemapping:

```
    giveMeToAskFor: GlobalRemapping
```

Next, we define a getRemapping() method. We're required to define this
method for each GlobalRemapping we create, since it's where we determine
whether or not to do a remapping, and if so, it's where we create the
remapped action.

```
        getRemapping(issuingActor, targetActor, action)
        {
```

The first thing we do in this method is to determine if we want to remap
the command. For this mapping, we're interested in any command of the
form ACTOR, GIVE ME ITEM. In other words, we want to catch GiveTo
actions where the indirect object (the receiver of the GIVE TO) is ME.

Checking the type of verb phrase is easy: we just check the *action*
parameter to see if its class is the kind of Action we care about, in
this case GiveToAction.

Now, we could just look for the literal text "me" in the iobj phrase,
but this wouldn't always work. For example, it wouldn't work in games in
languages other than English. It also wouldn't work even in English for
a game other than in the second person - in a third-person game, for
example, the player character might be BOB rather than ME. The actual
thing we're looking for, then, isn't that the receiver is ME, but that
it's *the actor who gave the command*. In other words, the issuing
actor, which is given to us as the *issuingActor* parameter.

Okay, so we know which object *we're* interested in, but we have to
remember the complication that the *parser* doesn't know which objects
are involved yet, because object resolution is yet to come. So we can't
just ask "is the iobj the same as the issuing actor?" Fortunately, we
have the handy canIobjResolveTo() method on the Action, which lets us do
the next best thing: it lets us find out if the iobj phrase *could*
resolve to the issuing actor.

Putting together our test for the action class and our test for the
potential resolution of the iobj phrase, we come up with our main "if"
statement, determining whether or not we're going to perform a
remapping:

```
            if (action.ofKind(GiveToAction)
                && action.canIobjResolveTo(issuingActor))
            {
```

Entering the "if" block means that we've passed the test, so we're going
to perform the remapping. Our job at this point is to create the new
Action object representing the new command. We'll start by creating an
instance of our new action. We want to change the action to ASK FOR,
which is represented by the AskForAction class. To create an instance,
we do this:

```
                local newAction = AskForAction.createActionInstance();
```

This new action is a replacement for another action that the parser was
working on, and in these cases it's important to tell the parser about
that relationship. We do this by telling the new Action object that it
has an "original" Action:

```
                newAction.setOriginalAction(action);
```

Next, we have to deal with a subtle complication that comes from
changing the target actor. Recall that we're changing the phrasing from
ACTOR, GIVE ME ITEM to ME, ASK ACTOR FOR ITEM - the target actor is
changing from ACTOR to ME. Suppose the original phrasing was BOB, GIVE
ME YOUR KEY; the transformed version will be ME, ASK BOB FOR YOUR KEY.
See the problem? If you didn't know about the rewrite, you'd think we're
talking about *my* key rather than Bob's.

In principle, we could do something like change the word YOUR to HIS -
ME, ASK BOB FOR HIS KEY. That's not easy, for many reasons - we'd have
to dig through the match tree for the right nodes, we'd have to figure
out that Bob is a "he" to know which pronoun to use, we'd have to deal
with language differences, etc. Fortunately, the parser provides a much
easier way of handling this: it lets us temporarily override the meaning
of "you", just for the duration of this action. To do this, we use the
method setPronounOverride() on the action:

```
                newAction.setPronounOverride(PronounYou, targetActor);
```

Note that we only have to override "you", not "your" and "yours,"
because the parser considers all of these to be aspects of the same
pronoun. In fact, there is no "PronounYour" to override - "your" exists
only in the input grammar, and always refers to the same antecedent as
"you."

We now have our new action object, but it's just an empty shell so far,
because we haven't told it about the objects involved. The next step is
to plug in the objects - or, more precisely, the match trees for the
noun phrases. Just as the original Action has match trees instead of
resolved nouns, we have to fill in the replacement Action with match
trees instead of resolved nouns.

In the case of the direct object, this might seem a bit awkward, because
we do in fact know the exact object we want to plug in: the target
actor. Fortunately, the parser provides a class, PreResolvedProd,
designed for just this situation. PreResolvedProd is basically a "fake"
match tree. It looks just like a match tree to the parser, but rather
than representing a noun phrase from the player's input, it represents a
known ("pre-resolved") object. To use it, we just create an instance of
PreResolvedProd, passing in as the constructor argument the known object
that we want to "wrap" in match tree clothing:

```
                local dobj = new PreResolvedProd(targetActor);
```

For the indirect object, we would *normally* do something even simpler.
We're transforming from ACTOR, GIVE ME ITEM to ME, ASK ACTOR FOR ITEM:
note how we're just moving ITEM from the dobj slot in the input to the
iobj slot in the output. So what we'd usually do here is simply take the
original action's dobjMatch value (the ITEM noun phrase) and plug it
directly in as the iobjMatch of the new action. Doing that here will, in
fact, mostly work fine. However, there's another complication about our
particular example that we should deal with: in the ASK FOR command, the
indirect object is a "topic phrase" rather than an ordinary noun phrase.
(Look at the grammar definition for the AskFor command to see this.) The
syntax rules for topic phrases are *almost* the same as for ordinary
noun phrases, but not exactly the same. To make sure we use the exact
rules for topics, we should re-parse the indirect object phrase as a
topic. Once again, the parser comes to the rescue with a handy method,
in this case a TopicAction method called reparseMatchAsTopic() that
takes an ordinary noun phrase match tree and turns it into a topic
phrase match tree. We just pass our dobjMatch from the original action
into this method, and out pops our topic match tree:

```
                local iobj = newAction.reparseMatchAsTopic(
                    action.dobjMatch, issuingActor, issuingActor);
```

We finally have all of the objects (actually, match trees) for the new
action, but we still have to fill the slots in, which we do using the
setObjectMatches() method on the new action:

```
                newAction.setObjectMatches(dobj, iobj);
```

Now we just need to return the new command. This is done by returning a
list consisting of the new target actor and the new Action object:

```
                return [issuingActor, newAction];
```

That's it for the main "if". All that remains is to close off the "if"
block, and deal with the case where we *didn't* decide to remap the
action. To signal that we're not doing any remapping, we simply return
nil; so we just need to add a nil return in case we didn't go into the
"if" block and return a new action.

```
            }
            return nil;
```

And that's everything - we just close the method, end the object, and
we're done.

```
        }
    ;
```
------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Global Command
Remapping  
<span class="navnp"><a href="t3odd_noun.html" class="nav"><em>Prev:</em> Handling Odd Noun
Phrases</a>    
<a href="t3past.html" class="nav"><em>Next:</em> Writing a Game in the
Past Tense</a>     </span>


