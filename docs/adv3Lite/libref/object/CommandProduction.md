---
layout: docs
---
<span class="title">CommandProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3631](../source/parser.t.html#3631)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



CommandProduction is a special Production subclass for the top-level
grammar rule for the overall command.

Each instance of this type of production must define the following '-\>'
properties in its syntax template:

actor\_ is the noun phrase giving the addressee of the command, if any.
A command such as TELL ACTOR TO DO X or (using the long-standing IF
convention) ACTOR, DO X addresses a command to an actor; i.e., it tells
the actor to carry out the command, rather than the player's avatar. A
command that isn't addressed to an actor can leave actor\_ as nil.

cmd\_ is the \*first\* predicate phrase (see below), in the desired
order of execution. For example, for "open the door and go north", cmd\_
should be set to the match tree for the "open the door" predicate.

conj\_ is any conjunction or punctuation ending the first predicate
phrase. This might be a period at the end of the sentence, or a word
like 'and' or 'then' that can separate multiple commands. This can be
nil if there's no conjunction at all (such as when the whole command is
just the first predicate). The reason we need conj\_ is that it tells us
where any subsequent command on the same command line starts. If cmd2\_
is not nil, we'll ignore conj\_ and use cmd2\_ instead for this purpose.

cmd2\_ is optional: it's the \*second\* predicate phrase. If this is not
nil, it tells the parser where to start parsing the next predicate on
the same command line after finishing with the first one. This is
optional, even if the command line really does have more than one
predicate, because the parser can use conj\_ instead to infer where the
second predicate must start.

(It's probably intuitively obvious what "first predicate" means, but for
the sake of translators, here's a more thorough analysis. Some command
productions can match more than one predicate phrase, but this is only
for the sake of determining where the first one ends, syntactically. The
execution engine actually only carries out the first predicate matched
for a given parse tree - it simply ignores any others in the same tree.
After we finish executing the first predicate from the match, we go back
and re-parse the remaining text from scratch, as raw text; at that
point, the next predicate in the text becomes the first predicate in the
new parse tree and gets executed. We repeat this until we run out of
text. So we do eventually execute everything the player types in - but
not on the first parse; we have to do one parse per predicate. We have
to repeat the parsing because carrying out the first action could change
the game state in such a way that we'll find a different match to the
next predicate than we would have if we'd parsed everything up front. By
"first predicate phrase", then, we mean the one that gets executed
first. The point is to carry out the user's wishes as expressed in the
command, so we want the first predicate we execute to be the one that
the player \*intends\* to be carried out first; so by "first" we really
mean the one that a speaker of the natural language would expect to be
performed first, given the structure of the sentence and the rules of
the language. In English, this is easy: X THEN Y or X,Y or X AND Y all
mean "first do X, then do Y" - the reading order is the same as the
execution order.)

`class `**`CommandProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CommandProduction`**  
[`commandPhrase(ambiguousConj)`](../object/commandPhrase(ambiguousConj).html)  
[`commandPhrase(definiteConj)`](../object/commandPhrase(definiteConj).html)  
[`defaultCommandPhrase(examine)`](../object/defaultCommandPhrase(examine).html)  
[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)  
[`firstCommandPhrase(commandOnly)`](../object/firstCommandPhrase(commandOnly).html)  
[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`actor_`](#actor_)[`actorPerson`](#actorPerson)

Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner)[`nounPhraseRole`](../object/Production.html#nounPhraseRole)[`npClass`](../object/Production.html#npClass)[`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`build`](#build)[`noteEndOfSentence`](#noteEndOfSentence)[`visitProd`](#visitProd)

Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem)[`findAction`](../object/Production.html#findAction)[`findChild`](../object/Production.html#findChild)[`findParent`](../object/Production.html#findParent)[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)[`getText`](../object/Production.html#getText)[`getTokens`](../object/Production.html#getTokens)[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)[`isChildOf`](../object/Production.html#isChildOf)[`visitLiteral`](../object/Production.html#visitLiteral)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="actor_"></span>

`actor_`

[parser.t](../file/parser.t.html)\[[3633](../source/parser.t.html#3633)\]



-\> property: the match tree for the addressee, if any



<span id="actorPerson"></span>

`actorPerson`

[parser.t](../file/parser.t.html)\[[3655](../source/parser.t.html#3655)\]



The grammatical person of the actor to whom we're giving orders. This is
2 for second person and 3 for third person. (It's not meaningful to give
orders in the first person.)

In English (and probably most languages), commands of the form ACTOR, DO
SOMETHING address ACTOR in the second person. In contrast, TELL ACTOR TO
DO SOMETHING gives orders to ACTOR, but in the third person.

In the second-person form of giving orders, second-person pronouns (YOU,
YOURSELF) within the command will refer back to the actor being
addressed: BOB, EXAMINE YOURSELF tells Bob to look at Bob. In the
indirect form, YOU refers to the player character: TELL BOB TO EXAMINE
YOU tells Bob to look at the PC.

The default is 2, since the long-standing IF convention is the ACTOR, DO
SOMETHING format. Override this (to 3) for TELL TO grammar rules.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3658](../source/parser.t.html#3658)\]



build the tree



<span id="noteEndOfSentence"></span>

`noteEndOfSentence (cmd, prod)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3716](../source/parser.t.html#3716)\]



note the end of the sentence



<span id="visitProd"></span>

`visitProd (cmd, np, prod)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3691](../source/parser.t.html#3691)\]



visit a production





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


