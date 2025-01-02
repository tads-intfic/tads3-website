---
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Custom
Preconditions  
<span class="navnp"><a href="t3verb.html" class="nav"><em>Prev:</em> How to Create Verbs</a>
    <a href="t3msg.html" class="nav"><em>Next:</em> Message Parameter
Substitutions</a>     </span>

</div>

<div class="main">

# Custom Preconditions

*by Eric Eve*

Preconditions provide a powerful and reasonably easy-to-use way of
enforcing conditions when certain actions are performed on or with
certain objects: for example, the Player Character must be able to touch
the door in order to open it, and must be holding the key in order to
unlock anything with it. Preconditions can be particularly helpful since
they can not only enforce conditions (such as that the key must be held
before it can be used), but can also bring them about through implicit
actions: if the key to the door is lying in plain sight it's simply
annoying for the player to be told "You must be holding the key before
you can unlock anything with it"; it's much neater if the parser
recognizes what the player intends and makes the Player Character first
pick up the key automatically so that the unlocking can proceed.

The standard library already defines many commonly useful preconditions,
and applies them appropriately to a large range of actions (for further
details, see the Preconditions section of the Technical Manual Article
on [Action Results](t3res.html#precond)). Sometimes, though, it can be
useful to define preconditions of your own in your own game. This
article will show you how.

## New Object Preconditions

We'll go on to discuss how to define a brand new precondition below, but
we'll start by pointing out that this isn't always necessary. Sometimes
we can get the effect we want by constructing a custom precondition with
`new ObjectPreCondition` together with an existing precondition and the
particular object we want it to apply to.

For example, suppose we have defined a new WRITE ON action, of the form
WRITE ZANZIBAR ON PAPER; we don't want the Player Character to be able
to write on the paper unless he's holding a pen, but we don't want to
force the player to use the awkward syntax WRITE ZANZIBAR ON PAPER WITH
PEN. One way to deal with with would be to make holding the pen a
*precondition* of writing anything on the piece of paper. This would
enforce the availability of a pen as a condition of writing, but it
would also result in the Player Character picking up the pen as an
implicit action if the pen is to hand but not held when the player
issues a command like WRITE ZANZIBAR ON PAPER:

    >write Zanzibar on paper
    (first picking up the pen)
    You write "Zanzibar" on the piece of paper.

Since the implicit action (picking up the pen), and hence the
precondition being enforced, involves an object (the pen) not explicitly
mentioned in the player's command, you might think you'd have to write a
special `penHeld` precondition to deal with it. But in fact there's no
need for this, since we can simply use the existing `objHeld`
precondition and apply it to a different object via the
`new ObjectPreCondition` construct. This is typically used thus:

        new ObjectPreCondition(obj, cond)

Where `obj` is the object to which we want the `cond` precondition to
apply.

So, for example, assuming we've already defined the a new
WriteLiteralOnAction, if on the piece of paper we defined:

       paperPiece: Readable 'piece/paper' 'piece of paper'
          dobjFor(WriteLiteralOn)
          {
              preCond = [touchObj, objHeld]
          }
       ;

Then we'd be making holding the piece of paper a precondition of writing
on it (which we may or may not want), because a precondition normally
applies to the object on which it's listed for a particular action. But
since in this case what we really want is to enforce the precondition
that the *pen* must be held in order to write on the paper, we can use
the `new ObjectPreCondition` construct to 'redirect' the objHeld
precondition from the paper to the pen:

    + paperPiece: Readable 'piece/paper' 'piece of paper'
        dobjFor(WriteLiteralOn)
        {
            preCond = [touchObj, new ObjectPreCondition(pen, objHeld)]
            verify() {}
            action()
            {
                "You write <<gLiteral>> on the piece of paper. ";
                writing += ('\n'+ gLiteral);
            }
        }
        writing = ''
        readDesc = "On the paper is written: <<writing>>"
    ;

The moral of this example is that before writing a completely new
precondition, you should first ask yourself whether you can construct it
using `new ObjectPreCondition` in conjunction with an existing
precondition: this is generally possible if all you want to do is to
apply an existing kind of precondition to an object that is not
explicitly involved in the action (i.e. an object that is not the direct
or indirect object of the current command). It may be, of course, that
what you want to do can't be handled that way; for example, if several
writing implements were available in your game and the Player Character
just had to be holding one of them in order to be able to write on
things, then you'd need a different approach. In the next section we'll
see how to write a completely new precondition.

## Completely New Preconditions

The standard libary defines a good selection of preconditions to cover
the most usual cases, but it may be that you'll come up against a
situation that isn't covered by any of the existing preconditions. For
example, suppose that your game contains one or more balls that can only
be kicked when the actor is *not* holding them, then ideally you'd like
an `objNotHeld` you could use like this:

    class Ball: Thing 
        dobjFor(Attack)
        {
            preCond = [touchObj, objNotHeld]
            verify() { }
            action()
            {
                "{You/he} give{s} {the dobj/him} a good kick. ";
            }
        }
    ;

Ideally, this would make the Player Character drop a ball he was holding
in response to KICK BALL (or HIT BALL or ATTACK BALL) before carrying
out the kicking action. Additionally, if the Player Character is
carrying a red ball and a blue ball is lying on the ground, it should
make KICK BALL prefer the ball that is *not* being carried (i.e. the
blue ball). But since the library does not define an `objNotHeld`
precondition, we'd need to define one for ourselves.

There are several things a PreCondition object needs to do if it is to
function correctly, but rather than describe them in the abstract, it
will far easier simply to start from an existing library precondition
that's reasonably similar to what we want and then adapt it. This will
ensure that we follow the coding pattern of the standard library
preconditions, which should in turn ensure that our new precondition
does what it should. Indeed, this is probably the best procedure to
follow whenever you want to create a new precondition:

- Look through the library file precond.t (perhaps with the aid of the
  Library Reference Manual) until you find a precondition that does
  something reasonably similar to what you want your new precondition to
  do.
- Copy the code for the library precondition (which will be an object of
  type PreCondition, or possibly one of its subclasses) and paste it
  into your own code at the point at which you want to define your own
  custom precondition.
- Change the name of the PreCondition object you have just copied to the
  name you want for your new custom precondition (e.g. at the point
  where you have just copied the `objHeld` precondition into your own
  code you might change its name to `objNotHeld`).
- Then work through the copied PreCondition object in your own code,
  making all the other changes needed to ensure it does what you want.

As just stated, the fourth stage above may not look particularly
helpful, but this will all become much clearer if we work through an
example. Suppose that we indeed wish to create an `objNotHeld`
precondition. Since this seems to be the reverse of the existing
`objHeld` precondition, that might be the best place to start. So the
first step is to locate the `objHeld` precondition in preCond.t (perhaps
with the help of the Library Reference Manual), and the second step is
to copy and paste that object definition into our own code:

    objHeld: PreCondition
        checkPreCondition(obj, allowImplicit)
        {
            /* if the object is already held, there's nothing we need to do */
            if (obj == nil || obj.meetsObjHeld(gActor))
                return nil;
            
            /* the object isn't being held - try an implicit 'take' command */
            if (allowImplicit && obj.tryHolding())
            {
                /* 
                 *   we successfully executed the command; check to make sure
                 *   it worked, and if not, abort the command without further
                 *   comment (if the command failed, presumably the command
                 *   showed an explanation as to why) 
                 */
                if (!obj.meetsObjHeld(gActor))
                    exit;

                /* tell the caller we executed an implicit command */
                return true;
            }

            /* it's not held and we can't take it - fail */
            reportFailure(&mustBeHoldingMsg, obj);

            /* make it the pronoun */
            gActor.setPronounObj(obj);

            /* abort the command */
            exit;
        }

        /* lower the likelihood rating for anything not being held */
        verifyPreCondition(obj)
        {
            /* if the object isn't being held, reduce its likelihood rating */
            if (obj != nil && !obj.meetsObjHeld(gActor))
                logicalRankOrd(80, 'implied take', 150);
        }
    ;

We next carry out Step 3 and change the name to the new name we want (if
we don't we'll get a duplicate object definition compiler error when we
try to compile, and the new name we want to use won't be recognized, so
it's best to do this straight away before we forget):

    objNotHeld: PreCondition

Well, that's the first three steps out of the way, now we just have the
final, most complex step. To make this clearer, we'll break it down into
small sub-steps. The existing definition starts with:

        checkPreCondition(obj, allowImplicit)
        {
            /* if the object is already held, there's nothing we need to do */
            if (obj == nil || obj.meetsObjHeld(gActor))
                return nil;

The `checkPreCondition` method is called at the point when implicit
actions may be carried out to meet the condition we want to impose. The
`obj` parameter is the object whose condition we're testing and which
any implicit action would normally be carried out on. The
`allowImplicit` parameter defines whether or not an implicit action may
be attempted; during command execution the verify and checkPreCondition
routines may be called more than once, but implicit actions are only
allowed on the first pass (to prevent an infinite loop should the
execution of an implicit command then bring about the need to carry out
another implicit command that undoes the result of the first).

The first part of this method checks to see if an implicit action is
actually necessary. In the original `objHeld` there's no need to do
anything if the actor is already holding the object in question, so the
method just returns nil to tell its caller that it didn't need to do
anything. In our new `objNotHeld` precondition we want to apply
precisely the opposite test: we return nil and do no more if the object
is *not* already held:

                
         /* if the object is already not held, there's nothing we need to do */
            if (obj == nil || !obj.meetsObjHeld(gActor))
                return nil;

The next part of the code in the original `objHeld` precondition then
tries to carry out an implicit TAKE or TAKE FROM command and checks
whether this has succeeded, provided that implicit actions are allowed
at this stage of the proceedings:

          /* the object isn't being held - try an implicit 'take' command */
            if (allowImplicit && obj.tryHolding())
            {
                /* 
                 *   we successfully executed the command; check to make sure
                 *   it worked, and if not, abort the command without further
                 *   comment (if the command failed, presumably the command
                 *   showed an explanation as to why) 
                 */
                if (!obj.meetsObjHeld(gActor))
                    exit;

                /* tell the caller we executed an implicit command */
                return true;
            }

The slight oddity here is the test
`if (allowImplicit && obj.tryHolding())`. If `allowImplicit` is nil then
the test fails straight away and the entire code block is bypassed. If
`allowImplicit` is true, then we try to hold the object via a call to
`obj.tryHolding()` which will attempt to take the object out of its
container if the actor is carrying the container, or will otherwise
simply attempt to take the object. Either way the attempt will be via a
call to `tryImplicitAction` and `tryHolding()` will return the result of
that call (true or nil); if the implicit action is attempted then
`tryImplicitAction` will return true, but if it's not (e.g. because one
of the objects involved is not in scope for the actor) it will return
nil.

If no implicit action has been attempted then we can skip the rest of
the code block. If, on the other hand, it has been attempted then we
need to check whether it has been successful (maybe the actor tried to
pick up the anvil but it proved to be too heavy). If the implicit action
did not achieve the desired result (in this case, if the object does not
end up being held by the actor) then we assume that the failed attempt
has already reported the reason for failure and simply exit the action.
If on the the other hand the implicit action succeeded we return true to
tell the caller that we carried out an implicit action that succeeded in
meeting the required condition.

Our new `objNotHeld` precondition needs to follow the same coding
pattern and much of the same logic, reversing it in just a couple of
places: we need to try dropping the object instead of taking it, and we
need to check that the object ends up *not* held, not that it ends up
held. The revised code becomes:

           /* the object is being held - try an implicit 'drop' command */
            if (allowImplicit && tryImplicitAction(Drop, obj))
            {
                /* 
                 *   we successfully executed the command; check to make sure
                 *   it worked, and if not, abort the command without further
                 *   comment (if the command failed, presumably the command
                 *   showed an explanation as to why) 
                 */
                if (obj.meetsObjHeld(gActor))
                    exit;

                /* tell the caller we executed an implicit command */
                return true;
            }

The final part of the method has to deal with the case in which no
implicit action was attempted, either because we're in the second pass
and `allowImplicit` is nil or because the implicit action could not be
attempted. In this case we need to display a message explaining why the
main action cannot go ahead and abort the command. Just before aborting
the command we make the appropriate pronoun (most usually 'it') refer to
the object in question (so that if the player sees a message like "You
need to be holding the Golden Gas-Guzzler of Garak before you can do
that" and responds with TAKE IT, the parser will understand that "it"
refers to the Golden Gas-Guzzler of Garak):

            /* it's not held and we can't take it - fail */
            reportFailure(&mustBeHoldingMsg, obj);

            /* make it the pronoun */
            gActor.setPronounObj(obj);

            /* abort the command */
            exit;

We can use almost precisely the same code for our new `objNotHeld`
precondition, except that we need to supply a custom failure message
appropriate to the different situation:

           /* it's held and we can't drop it - fail */
            
            gMessageParams(obj);
            reportFailure('{You/he} can\'t do that while {you\'re/he\'s} holding 
                {the obj/him}. ');

            /* make it the pronoun */
            gActor.setPronounObj(obj);

            /* abort the command */
            exit;
        }  

That completes the `checkPreCondition` method, but there's also the
`verifyPreCondition` method, which we also need to adapt. On the
`objHeld` precondition this makes it less likely that the command in
question applies to an object that is not currently held by the actor
(e.g., if EAT has a `objHeld` precondition attached to its direct
object, then EAT CAKE will choose the chocolate cake held by the actor
in preference to the fruit cake sitting on the table):

        /* lower the likelihood rating for anything not being held */
        verifyPreCondition(obj)
        {
            /* if the object isn't being held, reduce its likelihood rating */
            if (obj != nil && !obj.meetsObjHeld(gActor))
                logicalRankOrd(80, 'implied take', 150);
        }
    ;

For our new `objNotHeld` precondition we simply need to reverse the
logic so the likelihood rating is reduced for an object that *is* being
held (so, e.g., KICK BALL prefers the blue ball on the ground to the red
ball being carried):

        /* lower the likelihood rating for anything being held */
        verifyPreCondition(obj)
        {
            /* if the object is being held, reduce its likelihood rating */
            if (obj != nil && obj.meetsObjHeld(gActor))
                logicalRankOrd(80, 'implied drop', 150);
        }
    ;

With these changes, our new `objNotHeld` precondition becomes:

    objNotHeld: PreCondition
        checkPreCondition(obj, allowImplicit)
        {
            /* if the object is already not held, there's nothing we need to do */
            if (obj == nil || !obj.meetsObjHeld(gActor))
                return nil;
            
            /* the object is being held - try an implicit 'drop' command */
            if (allowImplicit && tryImplicitAction(Drop, obj))
            {
                /* 
                 *   we successfully executed the command; check to make sure
                 *   it worked, and if not, abort the command without further
                 *   comment (if the command failed, presumably the command
                 *   showed an explanation as to why) 
                 */
                if (obj.meetsObjHeld(gActor))
                    exit;

                /* tell the caller we executed an implicit command */
                return true;
            }

            /* it's held and we can't drop it - fail */
            
            gMessageParams(obj);
            reportFailure('{You/he} can\'t do that while {you\'re/he\'s} holding 
                {the obj/him}. ');

            /* make it the pronoun */
            gActor.setPronounObj(obj);

            /* abort the command */
            exit;
        }

        /* lower the likelihood rating for anything being held */
        verifyPreCondition(obj)
        {
            /* if the object is being held, reduce its likelihood rating */
            if (obj != nil && obj.meetsObjHeld(gActor))
                logicalRankOrd(80, 'implied drop', 150);
        }
    ;

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Custom
Preconditions  
<span class="navnp"><a href="t3verb.html" class="nav"><em>Prev:</em> How to Create Verbs</a>
    <a href="t3msg.html" class="nav"><em>Next:</em> Message Parameter
Substitutions</a>     </span>

</div>
