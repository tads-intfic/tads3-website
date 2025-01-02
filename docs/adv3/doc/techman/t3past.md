---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Writing a Game
in the Past Tense  
<span class="navnp"><a href="t3globalremap.html" class="nav"><em>Prev:</em> Global Command
Remapping</a>    
<a href="mediatypes.html" class="nav"><em>Next:</em> Internet Media Types
for TADS</a>     </span>

</div>

<div class="main">

# Writing a Game in the Past Tense

*by Michel Nizette*

IF authors usually prefer to write in the second person and in the
present tense, as though the events were happening directly to the
player. Many feel that this creates a sense of involvement in the story
that cannot be so efficiently achieved otherwise. Occasionally, though,
some authors like to break free of this tradition and explore how a
different narrative style affects the playing experience. For example, a
first-person game presented in the form of a dialogue between the player
and the protagonist of the story may help establish the latter as a
distinct character, with an independent personality. The past tense also
can be used to good effect to evoke the protagonist's memories, either
for the whole story or during a short interlude.

Before TADS 3, experimenting with these unusual narrative styles wasn't
easy, and required a lot of work on the part of the author. All IF
authoring systems provide a set of default responses to the player's
actions, and many games don't need to replace more than a few of them.
However, these messages are usually written in the second person and in
the present tense, according to the most widespread usage. This means
that the whole set of messages have to be replaced if you want to try a
different combination of person and tense.

In TADS 3, the person and tense aren't hard-coded in the message
definitions. Instead, TADS 3 uses parameterized messages that
automatically adapt to the combination of person and tense of your
choice, which you specify simply via a couple of settings. As a result
of this design, you are not restricted to use the same tense and person
for the whole story: you can switch to a different combination at any
time during the game.

## Selecting the person and tense of the narrative

You select the narrative tense via the
<span class="code">usePastTense</span> property of your
<span class="code">gameMain</span> object. This is the object where you
define the initial player character and the messages displayed during
the introduction and after quitting. The default value of
<span class="code">usePastTense</span> is <span class="code">nil</span>,
meaning that, by default, the story uses the present tense. Override
this property to <span class="code">true</span> for a past tense
narrative.

You can reset this property at any time during the game to switch to a
different tense. The TADS 3 Library defines a convenience macro for
this, called <span class="code">setPastTense</span>. This macro takes a
single argument and is just a shorthand for assigning
<span class="code">gameMain.usePastTense</span> directly:
<span class="code">setPastTense(val)</span> simply expands to
<span class="code">gameMain.usePastTense = val</span>.

Unlike the narrative tense, the person in which the player character is
referred to is a property of the player character's
<span class="code">Actor</span> object. In a game where several
characters can be controlled by the player at different times, you might
want to use distinct grammatical persons for some of them, so it makes
sense to define this setting separately for each potential player
character. To select the person for the player character object, you set
its <span class="code">pcReferralPerson</span> property to one of the
three following values: <span class="code">FirstPerson</span>,
<span class="code">SecondPerson</span>, or
<span class="code">ThirdPerson</span>. The default value is
<span class="code">SecondPerson</span>, so that the game refers to the
player character as "you" unless otherwise specified.

## The past tense handling framework

The ability to switch between the present tense and the past tense is a
recent addition to TADS 3. On this occasion, it has been necessary to
extend the message parameter substitution mechanism already used for
plugging the appropriate object names in the command responses and
making verbs agree in person and number with the subject. The remainder
of this article describes the new features of the substitution parameter
framework that are specific to handling the past tense, and which are
not covered in the older article [Message Parameter Substitutions in the
TADS 3 Library](t3msg.html). From now on, we'll assume that you have some
familiarity with the material exposed therein.

If you have read the article in question, you have probably noticed that
the first given example of a message that uses substitution parameters:

<div class="code">

       {You/he} see{s} nothing unusual about {it dobj/him}.

</div>

has been updated in a more recent version of the TADS 3 Library to:

<div class="code">

       {You/he} {sees} nothing unusual about {it dobj/him}.

</div>

Although the verb "see" could be considered regular as long as we were
only interested in the present-tense form, and could be handled with the
regular verb ending parameter {s}, it can't be anymore now that we need
to take the irregular past tense form ("saw") into account. The new
parameter {sees} generates the appropriate conjugated form of "see" in
agreement with the subject of the sentence *and* in the desired tense:
it produces "sees" in the third-person singular of the present tense,
"see" in all other cases of the present tense, and "saw" in the past
tense. The irregular verb "see," just like "have," is common enough to
justify a dedicated substitution parameter, although all irregular verbs
don't have their own specific substitution parameters. We'll see below
how to conjugate arbitrary verbs, whether regular or irregular.

## Regular verb endings

Regular verbs are those that obey simple conjugation rules in both the
present tense and the past tense: up to some minor variations, they take
-s in the third-person singular of the present tense and -ed in the past
tense. Formerly, TADS 3 defined three substitution parameters for
regular verb endings: {s}, {es}, and {ies}. The problem with these
parameters is that they don't always provide enough information about
the correct past-tense ending, so now the set of verb ending parameters
has been augmented with the following:

Parameter string

Thing property

Example use

Example expansion

s/d

verbEndingSD

close{s/d}

close, close<u>s</u>, close<u>d</u>

s/ed

verbEndingSEd

open{s/ed}

open, open<u>s</u>, open<u>ed</u>

s/?ed

verbEndingSMessageBuilder\_

drop{s/ped}

drop, drop<u>s</u>, drop<u>ped</u>

es/ed

verbEndingEs

fix{es/ed}

fix, fix<u>es</u>, fix<u>ed</u>

ies/ied

verbEndingIes

carr{ies/ied}

carr<u>y</u>, carr<u>ies</u>, carr<u>ied</u>

Their use should be mostly self-explanatory from the examples given in
the two last columns of the table, but a few comments are worth making.

The two first parameters, {s/d} and {s/ed}, are used for those verbs
that just take -s in the third-person singular present: some of them
take -d in the past (like "close") and thus require {s/d}, and others
take -ed (like "open") and thus require {s/ed}. The parameter {s}
doesn't contain enough information to lift this ambiguity, and should be
used only in those contexts where you are certain that you don't need
the past-tense form (more about this later).

The parameter {s/?ed} is handled in a special way by the Library. It is
used for those verbs that end with a consonant and have that last
consonant repeated in the past tense, but otherwise have a regular
conjugation. The example listed in the table is "drop," which has its
final 'p' repeated in the past: "dropped." To use this parameter, you
never type it literally with the explicit question mark. Instead, its
proper use is to replace the question mark with the repeated consonant:
{s/ped}, {s/ted}, or whatever.

The two last parameters in the table, {es/ed} and {ies/ied}, are
respectively for those verbs that take -es or have their -y ending
replaced with -ies in the third-person singular present. Note that,
unlike {s}, the verb endings {es} and {ies} actually contain no
ambiguity about the corresponding regular past tense form, since -es
always becomes -ed, and -ies always becomes -ied in the past. So, the
parameters {es/ed} and {ies/ied} are actually redundant, and are in fact
equivalent to {es} and {ies}, respectively. They only are provided for
symmetry with the {s/d}, {s/ed}, {s/?ed} set. We recommand that you
always use the paramater forms that explicitly list the past tense
ending in all cases, so that you never need to think about which case
truly requires it and which does not.

## Common irregular verbs

Already before the introduction of the past-tense framework, the TADS 3
Library defined substitution parameters for the few verbs that have an
irregular form in the past tense. This set is pretty limited: there are
"to have," "to be," and a few contractions of "to be" with the subject.
However, many verbs have a regular conjugation in the present tense, but
an irregular past-tense form. For the most commonly used of them, the
Library now defines the following additional parameters:

Parameter strings

Thing property

Expands to

do, does

verbToDo

do, does, did

go, goes

verbToGo

go, goes, went

come, comes

verbToCome

come, comes, came

leave, leaves

verbToLeave

leave, leaves, left

see, sees

verbToSee

see, sees, saw

say, says

verbToGo

say, says, said

must

verbMust

must, had to

can

verbCan

can, could

cannot

verbCannot

cannot, could not

can't

verbCant

can't, couldn't

will

verbWill

will, would

won't

verbWont

won't, wouldn't

You can see from the table that if a verb or verb form is defective in
the past tense, then the corresponding parameter expands to a close
approximation: {must} expands to "had to," and {cannot} expands to
"could not." Also, for some verbs, there are two equivalent parameter
strings: for example, {do} and {does} have exactly the same expansion
rules.

## Arbitrary irregular verbs

All irregular verbs aren't used as frequently as those listed in the
table above, and thus don't deserve a specific substitution parameter.
For the less-used irregular verbs, the Library provides a fallback
mechanism that allows switching between two arbitrary strings depending
on the narrative tense. The format superficially looks like an ordinary
substitution parameter: the syntax is {*presentString*\|*pastString*},
where *presentString* and *pastString* represent the (possibly empty)
strings to be displayed in the present and past tenses, respectively.

For example, the substring {may\|might} in a parameterized message
string would expand to "may" in the present tense and to "might" in the
past tense.

This example is rather exceptional in that the verb "may" doesn't vary
at all in the present tense. Most irregular verbs need to be made to
agree with the subject in the present tense, and so you'll often want to
include ordinary substitution parameters inside one of the two strings
embedded in a tense-switching sequence. The nested substitution
parameters, if present, must be enclosed in square brackets rather than
braces. For example, a message involving the verb "understand" could be
written like this:

<div class="code">

       {You/he} hardly underst{and[s]|ood} Blottnyan poetry.

</div>

Let's look at this example in detail. The initial substitution parameter
sets up the actor as the grammatical subject. Then, a bit further on, we
have the constant substring "underst" immediately followed by the
tense-switching sequence, {and\[s\]\|ood}. If the current narrative
tense is the past, then this sequence expands to "ood," producing
"understood" in combination with the prefix "underst." In the present
tense, the switching sequence selects "and\[s\]" instead, which contains
an ordinary substitution parameter, \[s\], enclosed in square brackets.
This parameter expands to either "s" or nothing, depending on which of
these gives the correct verb agreement, so the whole switching sequence
expands to either "and" or "ands." In combination with the prefix
"underst," this ultimately gives either "understand" or "understands" in
the present tense.

Note, by the way, that here we have a case where it makes sense to use
the verb ending parameter \[s\] rather than one of the forms that has
the past tense ending listed explicitly (such as \[s/ed\] or whatever),
because we never use a regular past-tense ending.

## Arbitrary tense-dependent expressions

The tense-switching syntax can also be useful for more complicated verb
forms, or for things other than verbs but that still vary with tense.
For example, the following message string is defined somewhere in the
TADS 3 Library:

<div class="code">

       {The dobj/he} should {be|have been} right {|t}here,
       but {you/he} {can\'t} see {it dobj/him}.

</div>

In this example, the tense-switching syntax is used twice. The first
instance generates a present or past conditional: the substring "should
{be\|have been}" produces "should be" in the present tense, and "should
have been" in the past tense. The second instance is "{\|t}here," which
gives "here" in the present tense and "there" in the past tense. (In
case you wonder, the reason why we want to avoid using "here" in the
past tense is that it doesn't make much sense to call "here" a place
which the player character has visited at some time in the past, but
might very well have left since then.)

Note also an important difference between the two following messages
(both found in the TADS 3 Library):

<div class="code">

       {You/he} smell{s/ed} nothing out of the ordinary.

       Opening {the dobj/him} reveal{s|ed} nothing unusual.

</div>

You may wonder why the first message uses the ordinary verb ending
substitution parameter {s/ed}, whereas the second message uses the
generic tense-switching syntax {s\|ed}, for apparently identical
purposes. The answer is that ordinary verb parameters need a subject to
agree with, while the tense-switching syntax doesn't. In the first
message, the parameter {You/he} sets up the grammatical subject of the
sentence. The verb "smell" is then required to agree with it, so we must
use the appropriate substitution parameter for the verb ending. In the
second message, the subject of the sentence is the present participle
"Opening," which unconditionally requires the verb to be in third-person
singular. Because the subject isn't a parameterized expression, we don't
need (and we can't use) a verb ending parameter here. But the verb
ending still needs to vary with tense, so we use the tense-switching
syntax.

Behind the scenes, the tense-switching syntax is implemented via a macro
which you may find convenient in its own right. The macro is named
<span class="code">tSel</span> and takes two arguments; it just expands
to its first argument if the current narrative tense is the present, and
to its second argument if it is the past. For example,
<span class="code">tSel(getTime()\[1\], 1492)</span> would give the
current year for the present tense, and the year of the discovery of
America by Columbus for the past tense.

## Disabling tense switching in substitution parameters

Occasionally, you may want a verb form to vary as a function of person
and number only, but not as a function of the narrative tense. Quoted
speech, for example, is always reported in the present tense, even in a
past tense narrative.

You might be tempted to write a default response to giving an arbitrary
object to a certain character as follows:

<div class="code">

       {The iobj/he} {says}, <q>{The dobj/he} {is} of no use to me right now.</q>

</div>

except that this won't quite work as you want it to, at least in the
past tense. The kind of response you are aiming for with such a message
string is probably something like "The thief said, 'the lock pick *is*
of no use to me right now.'" But instead, it will generate "The thief
said, 'the lock pick *was* of no use to me right now,'" because the
system has no way to know that you want the verb "is" in the present
tense, despite this being a past-tense phrasing. Yet you really need a
substitution parameter for the verb "is," because it must agree in
number with the direct object of the action. This is obvious from the
following example: "The thief said, 'the gloves *are* of no use to me
right now.'"

TADS 3 provides a solution to this problem. Just add an exclamation mark
at the end of the substitution parameter for which you want the
present-tense form unconditionally, like this:

<div class="code">

       {The iobj/he} {says}, <q>{The dobj/he} {is!} of no use to me right now.</q>

</div>

The Library then will not attempt to render the verb "to be" in the past
tense, but still knows that you want it to agree with the subject.

There is another situation where this mechanism can be useful. If your
whole game is written in the past tense, then the only verb for which
you'll ever need a substitution parameter is the verb "to be," whose
conjugated forms are "was" and "were." All other verbs have the same
form for any person and number in the past tense, so they have no
agreement rules to worry about: you can just type them out literally,
without using substitution parameters. For the verb "to be," the
straightforward way to proceed would be to use {are} or {is}. But since
most of the text is going to be written in the past tense, you may not
like the intrusion of parameters that look formally like present-tense
verb forms. And you can't use {was} or {were} for this purpose, because
both of them would expand to "had been" (which is really equivalent to
"was" or "were" with a second layer of past added!) Note, however, that
in the situation we're considering, you don't care about having your
text correctly rendered in the present tense, so you may just as well
use {was!} or {were!}, with final exclamation marks. These always give
the past-tense form of the verb "to be" that agrees with the subject.

Internally, the fixed-tense parameter substitution mechanism makes use
of a function named <span class="code">withTense</span>, whose purpose
is to temporarily override the current narrative tense and to invoke and
return the value of a callback function within the new, temporary tense
context. The function <span class="code">withTense</span> takes two
arguments. The first one must be either <span class="code">nil</span>
(selecting the present tense) or <span class="code">true</span>
(selecting the past tense). The second argument is a reference to the
callback function.

The TADS 3 Library complements this function with two convenience
macros, named <span class="code">withPresent</span> and
<span class="code">withPast</span>. They simply call the function
<span class="code">withTense</span> with a <span class="code">nil</span>
or <span class="code">true</span> first argument, respectively. Both
macros take a single argument, which is the callback function to be
passed to <span class="code">withTense</span>.

For example, on the assumption that your game contains an actor named
"me", <span class="code">withPast({:
me.conjugateRegularVerb('carry')})</span> would return the string
<span class="code">'carried'</span> no matter what the current narrative
tense is.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Writing a Game
in the Past Tense  
<span class="navnp"><a href="t3globalremap.html" class="nav"><em>Prev:</em> Global Command
Remapping</a>    
<a href="mediatypes.html" class="nav"><em>Next:</em> Internet Media Types
for TADS</a>     </span>

</div>
