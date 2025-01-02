---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Message Parameter
Substitutions  
<span class="navnp"><a href="t3precond.html" class="nav"><em>Prev:</em> Custom
Preconditions</a>    
<a href="t3imp_action.html" class="nav"><em>Next:</em> Implied Action
Reports</a>     </span>





# Message Parameter Substitutions

If you've looked at the TADS 3 library (known as "adv3"), you've
probably noticed some funny-looking syntax in many of the response
message strings, where certain words are enclosed in curly braces.
Things like this:

       {You/he} see{s} nothing unusual about {it dobj/him}.

You obviously wouldn't want those curly braces and slashes and so on to
show up in the actual output that the player sees, and indeed they
don't, so you can probably guess that the curly-brace parts are
placeholders that the library replaces with something appropriate to the
situation. You can probably also get a pretty good idea of how to use
these special strings in your own messages just from reading enough of
the library messages and piecing together the pattern. This article is
designed to help you understand the details of the message parameters
and how to use them.

## An example

The full explanations later in the article might get a little abstract,
so let's start with a simple example and see how it works. The format
strings were meant to be fairly intuitive just looking at them; if we
can understand how they're actually used in practice, it should help
with the more abstract material below.

Let's use the same example we saw earlier:

       {You/he} see{s} nothing unusual about {it dobj/him}.

For starters, we know that the parts in curly braces are the
substitution strings, so we have "{You/he}", "{s}", and "{it dobj/him}".
The library replaces each one individually, so let's look at them one by
one.

**{You/he}**. Whenever the library sees a substitution string that uses
a second-person pronoun, it replaces it with a word that relates to the
actor carrying out the current command. ("Second-person" is the
grammatical term for words that refer to the person being address by a
sentence: "you", "yourself", "your", etc.) The library uses this
convention simply because it's traditional (though certainly not
universal) for adventure games to refer to the player character in the
second person. The library uses second-person pronouns like this because
it makes the substitution strings resemble what most authors would
naturally write anyway, if the substitution scheme didn't exist. But
note that this isn't just "{You}": it's "{You/he}". The extra "/he" part
is there to tell us whether the word is the subject of the sentence or
the object of the verb; in English, the second-person pronoun is "you"
in either case, so we can't tell which it is just with "{You}". Finally,
note that the first letter is upper-case: this tells the library that
the string it substitutes should also be capitalized.

**{s}**. This is a parameter that the library replaces with either an
"s" or nothing, as needed to make the verb agree with the subject. So,
if the library replaces the "{You/he}" with "You", it'll replace the
"{s}" with nothing, because "you see" is the correct subject-verb
agreement; if "{You/he}" is replaced with "Bob", then "{s}" will be
replaced by "s", because in this case we'd want the sentence to start
"Bob sees".

**{it dobj/him}**. The "it" tells the library that you want to use a
pronoun here. The "dobj" says that you want that pronoun to be the
appropriate one for the direct object of the current action ("dobj"
stands for **d**irect **obj**ect). The "/him" part goes with the "it";
this tells the library that you specifically want to use an "objective
case" pronoun. "It" by itself doesn't carry enough information here,
which is why we need the extra "/him" to go with it: the same word "it"
works equally well in nominative and objective cases in English. An
"objective case" pronoun, by the way, is one that's used as the object
of a verb rather than as the subject. "He" can only be the subject,
which is called "nominative" case, and "him" can only be the object of
the verb: "**he** pets the dog" and "the dog bites **him**."

Note that the "dobj" in {it dobj/him} does *not* indicate the
grammatical function of the word in the sentence being displayed.
Rather, it selects the direct object from the current action. For
example, you could have written "{It dobj/he} look{s} perfectly
ordinary," in which case we're still using "dobj" even though it's now
serving as the subject of the displayed sentence. Note that "dobj" has
stayed the same, but we're now using "it/he" to tell the library that
this word is to be in the nominative case, since it's the subject of the
sentence.

You might be wondering why "{You/he}" and "{s}" stand on their own,
while "{it dobj/him}" required the "dobj" part to tell us which command
object we're talking about. The reasons are different for the two cases.
For "{You/he}", there's no object specified because the "you" part
implies that the command's actor is the object. In the case of "{s}", we
omit any object reference because we simply want to use the same object
as we did for "{You/he}"; when the object is missing, the library uses
the same object it used for the immediately preceding substitution.

That should give you a concrete reference point for how these strings
are used. Now we'll go into the details.

## The problems that parameters solve

At first glance, you might wonder why the library goes to such trouble
to use these message parameters, rather than just using the literal
text. The answer is that the message parameters make it possible for a
single library message to be re-used in several different contexts.

First, parameterized messages make it possible for the same message to
describe an action by the player character or by a non-player character.
For the most part, the TADS 3 library tries to treat player and
non-player characters as interchangeable; when processing a command, for
example, the library doesn't make any assumption that the player
character is the one performing the command. If the messages all said
things like "You open the flask," though, it would be almost useless to
have such actor independence in the rest of the library: we'd carry out
an NPC's actions correctly, but the descriptions would be all wrong.

Substitution parameters help a lot with this. Rather than saying "You
open the flask," we say "{You/he} open{s} the flask". The "{you/he}"
turns into "you" if the player character is doing the opening, or "Bob"
if Bob is. Likewise, the "{s}" turns into an empty string for the player
character, because the correct verb agreement for "you" is "open" with
no suffix; but if Bob is doing the opening, the "{s}" turns into "s", so
we have the proper subject-verb agreement, "Bob opens".

Second, parameters make it a lot easier to plug in the names of the
other objects apart from the actor performing the command. Rather than
having to call some method on the indirect object, we can simply plug in
a curly-brace string with the special identifier "dobj". There's also an
"iobj" identifier for the indirect object. What's more, we can define
our own additional parameter names and associate them with any objects
we want. So, we can simply say something like "{You/he} open{s} {the
dobj/him}", rather than calling some method on the flask object to get
its "the" name. (Internally, of course, the library does call a method
on the flask object to get its "the" name. It's just that it's less work
for us to write it with the curly braces.)

Third, the parameters make it easy to switch the "person" of the
narration. Since we've already parameterized the subject and verb for
each message that refers to an actor performing a command, we can easily
tell the player character Actor object whether we want it to refer to
itself as "I", "you", "he", "she", "we", "they", or whatever else. By
default, the library uses the second person, "you", but that can be
changed simply by changing a property (referralPerson) of the player
character's Actor object.

## Format of parameter strings

As we've already seen, substitution parameters are enclosed in curly
braces, "{ }". The library takes out everything between and including
the curly braces and replaces it with the appropriate substitution
string.

Within the braces, the format is fairly simple. There's always a "format
type" string, and sometimes there's an "object selector" string.

The "format type" string tells the library the precise grammatical
function of the word you want to use in the final string. When the
library was designed, one possibility we thought about was using a
grammatical term, like "nominative-noun" or "objective-pronoun"; but
that would have been a lot of work to keep straight, so instead we chose
to use essentially an unambiguous example of the word or phrase desired.

For example, instead of something like "{nominative-pronoun}", the
library uses "{you/he}", because that's an unambiguous example of
nominative pronouns. Why the two words and the slash, though? The answer
is that "you" is too ambiguous by itself: in English, the word "you" is
both the nominative and objective form of the second-person pronoun. We
*could* have just used "he", but, as we'll see in a moment, we needed a
second-person pronoun here. So, we added the "/he" to make it
unambiguous that we want the nominative case (the objective form of "he"
is "him", so we can be sure when we see "he" that we're not talking
about the objective case).

Not every format type has a slash in it. The slash is only used when
necessary to remove ambiguity. Don't worry - you won't have to figure
out whether a string is ambiguous or not; just look up the string you
want in the [table](#format_type_table) below.

The "object selector," if it's present, is separated from the format
type by a space. This string indicates which of the current action's
objects is being referred to. The object selector is optional for two
reasons. First, some of the format types imply an object selector; in
particular, all of the second-person types ("you/he", "you/him",
"you're", and others) imply that we're referring to the target actor of
the current action. Second, when a format type doesn't imply an object,
then the default object in the absence of an object selector is the same
as the object from the immediately preceding substitution string. This
is often handy for noun-verb agreement: we specify an object selector
for the noun, and then we don't have to specify it again if the verb
closely follows because we know we'll get the same object again.

A full [table](#object_selector_table) of defined object selectors is
below.

There's one more thing to know about the format of the parameter
strings. When the format type has a slash in it, you can optionally move
the slash part so that it comes after the object selector. For example,
with format type "the/he", and object selector "dobj", the standard form
of the string would be "{the/he dobj}". However, if we want, we can move
the "/he" so that it comes after the object selector, so we'd write
"{the dobj/he}". The two forms mean exactly the same thing. The reason
the library allows both formats is that it's often more readable to use
the second form: you can read it as "the direct object," and the "/he"
is just a silent extra bit that tells us we're using this as the subject
of the sentence.

## Capitalization

Capitalization of the replacement text follows capitalization of the
format string text. If the first letter of a substitution string is
capitalized, then the replacement text will have its first letter
converted to upper-case. If the first two letters of the substitution
string is capitalized, then the *entire* replacement text will be
converted to upper-case.

## Reflexives

In English, if the same thing is referred to as both the subject of the
sentence and as an object of a verb phrase, then the second appearance
of the thing is usually phrased as a "reflexive," which is one of the
pronouns ending in "self": yourself, himself, itself, and so on. For
example: in "Bob slapped himself with the herring," Bob is both the
subject of the sentence and the direct object of the verb, so the direct
object is phrased reflexively.

The library tries to make sure that reflexives are used when
appropriate. To do this, it keeps track of several things.

- First, the library keeps track of when a substitution string is the
  subject of the sentence. It does this by keeping a "subject" flag for
  each format type. See the [format type table](#format_type_table):
  format types marked with "yes" in the "Subject" column are flagged as
  subjects. Whenever a subject appears, the library remembers the target
  object used in the replacement (the actor, the direct object, etc).
- Second, for each format type, the library keeps a separate "reflexive
  pronoun" property. For many format types, a reflexive pronoun wouldn't
  make any sense, so many of these are simply nil. For format types
  where a reflexive pronoun makes sense, though, the library keeps the
  property that can be used to obtain the reflexive form of the
  substitution.
- Third, whenever a substitution string is *not* marked as a subject,
  the library checks the target object to see if it matches the subject
  object the library has been remembering. If it's the same object, then
  the library checks the reflexive pronoun property for the format type;
  if it's not nil, then the library uses the reflexive form of the name,
  otherwise it just uses the normal substitution.
- Finally, the library tries to keep track of sentence boundaries by
  watching for sentence-ending punctuation. Whenever the library sees a
  period, question mark, or exclamation mark, it assumes that the last
  sentence has ended, so it forgets about any subject it had been
  remembering.

## Pre-defined object selectors

The English library defines the following object selectors:

<span id="object_selector_table"></span>

Selector String

Object

actor

The actor performing the command. This is the actor to whom the command
is directed, which is normally the player character unless the player
explicit used the "actor, do this" phrasing.

dobj

The direct object of the command.

iobj

The indirect object of the command.

Note that literal phrases and topic phrases are not available as message
substitution parameters. These aren't available because they're not
represented as game objects, and hence don't have pronouns and so forth
associated with them.

## Game-defined object selectors

It's sometimes convenient to add your own special object selectors for a
particular message. This is handy when you need to refer to an object
that isn't actually part of the command but is related in some way to a
command object, such as the direct object's container.

The object selectors are managed by the current Action. The Action class
lets you to register arbitrary new object selectors with the
setMessageParam() method:

       gAction.setMessageParam('myobj', bob);

Note that the parameter is registered directly with the current Action,
so it only lasts as long as the current command is being processed.

The library provides a convenience macro that makes it a little less
work to register your own selector, but it requires that you have a
local (or parameter) variable containing the object you want to
register. If you have your object in a local variable, you can do this:

       local myobj = bob;
       gMessageParams(myobj);

This registers the object currently stored in the local variable, and it
uses the local variable's name as the object selector. So, once you've
done this, you can use your selector in a message string:

       return 'It would be pointless to slap {that myobj/him}. ';

The gMessageParams() macro can register more than one variable at a
time; just list the variables to register, separated by commas. This
macro simply calls gAction.setMessageParam(), so it's not doing anything
special, but it makes the code a little more compact.

## Full list of format type names

The English library defines the format types in the table below. First,
an explanation of the columns.

The **String** column gives the format type string that's used in
substitution strings.

The **Property** column gives the property that the library uses to get
the name of the target object. To get the substitution string for
"{that/he dobj}", for example, the library evaluates the thatNom
property of the direct object of the current command.

The **Implied Object Selector** column gives the object selector that
will be used for a substitution involving this format type when the
substitution string doesn't include an object selector at all.

The **Reflexive Property** column gives the property, if any, that's
used to obtain the reflexive form of the target object's name. If this
is empty, it means that the format type doesn't have a reflexive form,
in which case it will always use the standard property (from the
Property column).

The **Subject?** column indicates whether or not the format type is the
subject of the sentence. The library uses this to keep track of when to
use the reflexive form for subsequent substitutions.
<span id="format_type_table"></span>

String

Property

Implied Object  
Selector

Reflexive  
Property

Subject?

a/he

aName

\-

\-

Yes

a/her

aNameObj

\-

itReflexive

No

a/him

aNameObj

\-

itReflexive

No

a/she

aName

\-

\-

Yes

an/he

aName

\-

\-

Yes

an/her

aNameObj

\-

itReflexive

No

an/him

aNameObj

\-

itReflexive

No

an/she

aName

\-

\-

Yes

are

verbToBe

\-

\-

Yes

can

verbCan

\-

\-

Yes

cannot

verbCannot

\-

\-

Yes

can't

verbCant

\-

\-

Yes

come

verbToCome

\-

\-

Yes

comes

verbToCome

\-

\-

Yes

do

verbToDo

\-

\-

Yes

does

verbToDo

\-

\-

Yes

es

verbEndingEs

\-

\-

Yes

es/ed

verbEndingEs

\-

\-

Yes

go

verbToGo

\-

\-

Yes

goes

verbToGo

\-

\-

Yes

has

verbToHave

\-

\-

Yes

have

verbToHave

\-

\-

Yes

ies

verbEndingIes

\-

\-

Yes

ies/ied

verbEndingIes

\-

\-

Yes

in

actorInName

\-

\-

No

into

actorIntoName

\-

\-

No

is

verbToBe

\-

\-

Yes

it's/he's

itIsContraction

\-

\-

Yes

it's/she's

itIsContraction

\-

\-

Yes

it's

itIsContraction

\-

\-

Yes

it/he

itNom

\-

\-

Yes

it/her

itObj

\-

itReflexive

No

it/him

itObj

\-

itReflexive

No

it/she

itNom

\-

\-

Yes

its/her

itPossAdj

\-

\-

No

its/hers

itPossNoun

\-

\-

No

itself/herself

itReflexive

\-

\-

No

itself/himself

itReflexive

\-

\-

No

itself

itReflexive

\-

\-

No

leave

verbToLeave

\-

\-

Yes

leaves

verbToLeave

\-

\-

Yes

must

verbMust

\-

\-

Yes

offof

actorOutOfName

\-

\-

No

on

actorInName

\-

\-

No

onto

actorIntoName

\-

\-

No

outof

actorOutOfName

\-

\-

No

s

verbEndingS

\-

\-

Yes

s/d

verbEndingSD

\-

\-

Yes

s/ed

verbEndingSEd

\-

\-

Yes

s/?ed

*see note 1*

\-

\-

Yes

say

verbToSay

\-

\-

Yes

says

verbToSay

\-

\-

Yes

see

verbToSee

\-

\-

Yes

sees

verbToSee

\-

\-

Yes

subj

dummyName

\-

\-

Yes

that/he

thatNom

\-

\-

Yes

that/her

thatObj

\-

itReflexive

No

that/him

thatObj

\-

itReflexive

No

that/she

thatNom

\-

\-

Yes

that's

thatIsContraction

\-

\-

Yes

the's/her

theNamePossAdj

\-

\-

No

the's/hers

theNamePossNoun

\-

\-

No

the/he

theName

\-

\-

Yes

the/her

theNameObj

\-

itReflexive

No

the/him

theNameObj

\-

itReflexive

No

the/she

theName

\-

\-

Yes

was

verbWas

\-

\-

Yes

were

verbWas

\-

\-

Yes

will

verbWill

\-

\-

Yes

won't

verbWont

\-

\-

Yes

you're/he's

itIsContraction

actor

\-

Yes

you're/she's

itIsContraction

actor

\-

Yes

you're

itIsContraction

actor

\-

Yes

you/he

theName

actor

\-

Yes

you/her

theNameObj

actor

itReflexive

No

you/him

theNameObj

actor

itReflexive

No

you/she

theName

actor

\-

Yes

your/her

theNamePossAdj

actor

\-

No

your/his

theNamePossAdj

actor

\-

No

your

theNamePossAdj

actor

\-

No

yours/hers

theNamePossNoun

actor

\-

No

yours/his

theNamePossNoun

actor

\-

No

yours

theNamePossNoun

actor

\-

No

yourself/herself

itReflexive

actor

\-

No

yourself/himself

itReflexive

actor

\-

No

yourself

itReflexive

actor

\-

No

A few notes:

- *Note 1:* In 's/?ed', the question mark is a wildcard - it's not meant
  as a literal question mark. Substitute a consonant for the question
  mark: 'stem{s/med}'.
- Several of the format types are redundant with others. For example,
  a/he, an/he, a/she, and an/she all mean exactly the same thing. The
  redundancies are provided as a convenience, to allow format strings to
  be written more naturally. For example, you might want to say {a
  dobj/he} for a direct object, but {an iobj/he} for an indirect object.
  Or, you might prefer using {a dobj/she} because your game has a female
  protagonist.
- The {subj} format type's property, dummyName, expands to an empty
  string. This format type is meant to allow you to mark the subject of
  the sentence without actually producing any output text; this is
  sometimes useful when a sentence is in an unusual order where the
  subject doesn't precede the object. Explicitly marking the subject
  before the object is sometimes desirable in such cases so that the
  object will be phrased reflexively if appropriate.
- The verb-ending format types, such as {s}, {es}, and {ies}, are meant
  to be appended to verbs to provide an ending that agrees with a
  subject. {s} is for most verbs; it appends an "s" or nothing. {es} is
  for most verbs that end in a vowel, such as "go" or "do", and for
  verbs that end in "s" or "sh", such as "push"; it appends an "es" or
  nothing. {ies} is for verbs that end in "y"; it appends "y" or "ies",
  so note that you must use the {ies} in place of the "y" at the end of
  the verb root: hence "tr{ies}" rather than "try{ies}". It's usually
  pretty easy to figure out which to use: just write out your verb as
  though it's being used in the third person ("he goes", "she opens"),
  and put braces around the entire ending.
- Note the distinction between {it's/he's} and {its/his}. {it's/he's} is
  for contractions of "it is" and the like, while {its/his} is for
  possessives ("his fish", "its lid").
- Note the distinction between {its/her} and {its/hers}. {its/her} is
  for possessive qualifiers, such as "his fish." {its/hers} is for
  possessive noun phrases, as in "the fish is his."

## Timing of parameter substitution

Substitution parameters are handled at two points in the output process.

First, the standard "results" macros (for verifications and for actions:
illogical(), illogicalNow(), mainReport(), reportFailure(), and so on)
replace any parameters on the spot. These macros all perform
substitutions immediately to ensure that the strings are processed in
the context of the correct action.

Second, any strings that aren't processed earlier are processed as a
last resort by an output filter on the main output stream. The library
automatically installs a substitution filter on the main output stream
during initialization, so all strings displayed on the main game console
will be processed before actually being written to the display.



------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Message Parameter
Substitutions  
<span class="navnp"><a href="t3precond.html" class="nav"><em>Prev:</em> Custom
Preconditions</a>    
<a href="t3imp_action.html" class="nav"><em>Next:</em> Implied Action
Reports</a>     </span>


