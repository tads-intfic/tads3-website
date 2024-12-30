::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Character
Building](character.htm){.nav} \> The Security Guard\
[[*Prev:* Overview](npcoverview.htm){.nav}     [*Next:* Pablo
Cortes](cortes.htm){.nav}     ]{.navnp}
:::

::: main
# The Security Guard --- A Really Simple NPC

Back in Chapter 7 we arranged for the ID card to be confiscated by a
security guard if the player character attempts to pass through the
metal detector carrying the card, unless the metal detector is switched
off. We therefore clearly need an NPC to represent the security guard,
although the implementation can be very simple, since confiscating the
card is about the only role he will be called to play in the game. He\'s
therefore a good choice for our first NPC.

The object that represents the actual physical presence of the NPC (as
opposed to various aspects of its behaviour) is defined much like any
other Thing, except that we define it to be of class Actor. The Actor
object representing the security guard might look like this:

::: code
    guard: Actor 'security guard; burly flab; man; him' @securityGate
        "He's a burly-looking fellow, though it's probably as much flab as muscle. "
        
        actorSpecialDesc = "A security guard stands by the metal detector, eyeing
            you suspiciously. "
        
        checkAttackMsg = 'With your training you could probably overpower him
            easily enough, although he\'s armed and you\'re not, but that would
            probably result in all the other airport security staff coming after you,
            which is a complication you could do without right now. '
    ;
:::

You can place this code right at the start of your npcs.t file, and then
recompile and run the game to ensure that the security guard is now
present by the security gate.

There are a few points to note about this definition:

1.  Since we\'re defining the security guard in a separate file, we
    can\'t use the + notation to define his initial location. Instead we
    use the @ notation as the second element in the template to define
    where the security guard starts out, hence [\@securityGate]{.code}.
    This is a technique you\'ll often use when defining NPCs.
2.  Note that we use all four sections of the vocab property, ending it
    with \'him\' after the third and final semicolon. This defines the
    NPC as being male (rather than female or neuter), so that he can be
    referred to with the pronoun \'him\', and so that any
    library-generated messages will use the right pronoun to refer to
    him.
3.  Note that we\'ve used [actorSpecialDesc]{.code} to provide a
    separate paragraph about the security guard in the room listing.
    This works much like [specialDesc]{.code}, and indeed in this
    particular case we could have used [specialDesc]{.code} just as
    well, but with a more complex actor this would have broken part of
    the ActorState mechanism, so using **actorSpecialDesc** with Actors
    is a good habit to get into. The reason for this will become more
    apparent when we come to implement the flight attendant.
4.  We\'ve also defined a **checkAttackMsg** to provide a customized
    (refusal) response to HIT GUARD, ATTACK GUARD and the like, an
    action which the player might well try. If this property is defined
    it actually stops the ATTACK action at the check stage (typically as
    here with a message explaining why the player character isn\'t going
    to carry out this action).

For now, this really is all there is to defining the security guard. For
sure, as implemented he seems hardly more than another Decoration
object, but we\'ll make him a bit more responsive in Chapter 11, when we
implement some NPC conversation.

For the full story on defining the basic [Actor
Object](../manual/actorobj.htm), consult the *adv3Lite Library Manual*.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Character
Building](character.htm){.nav} \> The Security Guard\
[[*Prev:* Overview](npcoverview.htm){.nav}     [*Next:* Pablo
Cortes](cortes.htm){.nav}     ]{.navnp}
:::
