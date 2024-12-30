::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Giving Orders to NPCs\
[[*Prev:* Player Character and NPC Knowledge](knowledge.htm){.nav}    
[*Next:* String Tags and Object Tags](tags.htm){.nav}     ]{.navnp}
:::

::: main
# Giving Orders to NPCs

It\'s a long-standing convention of interactive fiction that a command
in the form BOB, JUMP or BOB, TAKE THE RED BALL or BOB, PUT THE BALL IN
THE BOX is to be understood as an attempt by the player character to
order another character (in this case Bob) to do something. It\'s also a
long-standing convention that IF parsers should deal with such commands
cleanly, even if few games actually need them. Even if giving commands
to other actors plays no part in your game, your game needs to be able
to deal with such commands gracefully (which may just mean giving a
polite refusal). If it is important to your game that the player give
instructions to NPCs at some point or other, then it\'s even more
important that your game should be able to handle them.

The basic handling of orders directed to NPCs in adv3Lite is as follows:

1.  The default Doer objects redirect the command to the
    handleCommand(action) method of the target actor (the actor to whom
    the order was given).
2.  The actor\'s handleCommand() method performs various sanity checks,
    and then either refuses the command, translates it into another
    command, or tries to find a CommandTopic to deal with it.
3.  The command is handled by the relevant **CommandTopic** or
    **DefaultCommandTopic**, if there is one.
4.  If the command hasn\'t been intercepted by handleCommand(), and
    there\'s no CommandTopic to deal with it, the Actor\'s
    refuseCommandMsg is displayed (by default this says, \'Bob has
    better things to do\', with the actual name of the actor substituted
    for \'Bob\'.)

In principle, then, you could intervene at any of these stages, but the
normal and recommended way of dealing with orders directed to NPCs is by
defining [CommandTopics](#commandtopic). But before looking at
CommandTopics we should go into a little more detail about what the
handleCommand method does.

[]{#handlecom}

## The handleCommand() method

The action parameter passed to the handleCommand(action) method is in
effect gCommand.action (the action property of the current command
object). You can get at other properties of the current command object
via the gCommand pseudo global variable.

The handleCommand() method performs the following checks, before trying
to deal with the command via a CommandTopic:

1.  If the command was of the form BOB, GIVE ME THE SPANNER it\'s
    executed as if it were ASK BOB FOR SPANNER.
2.  If the command was of the form BOB, TELL ME ABOUT THE TOWER, it\'s
    executed as it it were ASK BOB ABOUT THE TOWER.
3.  If the command is a system action, e.g. BOB, RESTORE or BOB, UNDO or
    BOB, QUIT, it\'s simply refused.
4.  BOB, HELLO is treated as saying hello to Bob.
5.  BOB, BYE is treated as saying goodbye to Bob.
6.  BOB, HOW/WHAT/WHY/WHO/WHEN xxx is executed as if it were ASK BOB
    HOW/WHAT/WHY/WHO/WHEN xxx.
7.  BOB, FOO (where FOO doesn\'t match any normal command syntax) is
    treated as SAY FOO TO BOB (but this only works if the player
    character is already talking to Bob, otherwise the parser won\'t
    treat FOO as an implicit SAY command).

It\'s only after this that CommandTopics are tried.

If you want to override this method to handle other cases, it\'s
probably a good idea to call the inherited handling at the end, so your
overridden method still ends by trying to deal with the order via a
CommandTopic object, for example:

::: code
    modify Actor
        handleCommand(action)
        {
           if(action.ofKind(ThinkAbout) || action.ofKind(AskAbout))
              "I'm afraid that's a bit too convoluted. ";
           else
              inherited(action);
        }
    ;
:::

Note that if a command is directed to an inanimate object (e.g. BALL,
JUMP!) that object\'s handleCommand() method is also called, but in this
case all it does is to display a message to the effect that it\'s futile
to direct commands at inanimate objects. But you could always override
this if, for example, you wanted some objects to respond to a magic
word. For example:

::: code
    modify Thing    
        handleCommand(action)
        {
            if(isOpenable && !isOpen && action = Xyzzy)
            {
                "\^<<theName>> flies open! ";
                makeOpen(true);
            }
            else
                inherited(action);
        }
    ;

    DefineIAction(Xyzzy)
        execAction(cmd)
        {
            "Your spell falls limp on the air. ";
        }
    ;

    VerbRule(Xyzzy)
        'xyzzy'
        : VerbProduction
        action = Xyzzy
        verbPhrase = 'say/saying XYZZY'
    ;
:::

\

## [CommandTopics]{#commandtopic}

Apart from the special cases noted above, the normal way to handle a
command directed to an NPC is via a CommandTopic. A **CommandTopic** is
basically just like any other ActorTopicEntry, except that it defines a
few extra properties in relation to its special function:

-   **matchObj**: While this is not peculiar to CommandTopic, it does
    have a slightly unusual meaning. The matchObj property of a
    CommandTopic is the action (e.g. Jump, Take, PutIn) that it responds
    to (or a list of actions).
-   **matchDobj**: If the action matched by this CommandTopic is a
    TAction or TIAction then the matchDobj property can be a Thing or
    class or a list of Things and/or classes that the direct object of
    the action needs to match.
-   **matchIobj**: If the action matched by this CommandTopic is a
    TIAction then the matchIobj property can be a Thing or class or a
    list of Things and/or classes that the indirect object of the action
    needs to match.
-   **myAction**: stores the value of the action this CommandTopic has
    just matched.
-   **allowAction**: if this is true then the targeted actor will
    perform the action according to the standard handling after the
    topicResponse() method has been executed. Note that setting this to
    nil (the default) doesn\'t necessarily mean that the actor is
    refusing the command; it might mean that you want to handle the
    execution of the command in some non-standard way in the
    topicResponse() method.
-   **actionPhrase()**: this method attempts (with mixed results) to
    reconstruct a phrase describing the command (e.g. \'take the red
    ball\') that can then be used as part of the topicResponse, which
    may be particularly useful in a DefaultCommandTopic. It works best
    with IActions, TActions and TIActions, but probably needs further
    refinement before it\'s completely reliable.

We can also define a DefaultCommandTopic to handle any commands not
picked up by our CommandTopics. A simple example of how this might all
work in practice might be:

::: code
    + CommandTopic @Jump
        "<q>Jump!</q> you cry.\b
        <q>Very well then,</q> he agrees. "
        allowAction = true
    ;

    + CommandTopic @Take
        "<q>Bob, be a good fellow and pick up that red ball will you?</q> you
        request.\b
        <q>Very well,</q> he agrees.<.p>"
        
        allowAction = true
        matchDobj = redBall
        isActive = !redBall.isIn(bob)
    ;

    + DefaultCommandTopic
        "<q>Bob, would you <<actionPhrase>> please?</q> you ask.\b
        <q>No, I don't think I will,</q> he replies. "
    ;
:::

If you want the actor to whom you\'ve given the command to perform some
other action than the one the player orders him to, you can use
[doNested()]{.code} to make the actor perform the other command. For
example, to make an actor jump when he\'s told to wait you could do
this:

::: code
    + CommandTopic @Wait
        topicResponse()
        {
            "<q>Would you wait a moment?</q> you request.\b
            <q>If you don't mind my keeping warm while I do,</q> he replies.\b";
            doNested(Jump);
        }
    ;
:::

Note, this works in a CommandTopic since the actor being addressed is
considered the current actor of the command. If you want any other kind
of TopicEntry to make an actor react, you need to use
[nestedActorAction()]{.code} instead; e.g.:

::: code
    + TellTopic @george
        topicResponse()
        {
            "<q>You're not looking very active,</q> you complain.\b
            <q>How about this then?</q> he asks.\b";
            nestedActorAction(getActor, Jump);    
        }    
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Giving Orders to NPCs\
[[*Prev:* Player Character and NPC Knowledge](knowledge.htm){.nav}    
[*Next:* String Tags and Object Tags](tags.htm){.nav}     ]{.navnp}
:::
