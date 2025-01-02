---
layout: docs
---
<span class="title">CommandRanking</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[6099](../source/parser.t.html#6099)\]

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

<div class="fdesc">

Production match ranking object. We create one of these objects for each
match tree that we wish to rank.

This class is generally not instantiated by client code - instead,
clients use the sortByRanking() class method to rank a list of
production matches.

`class `**`CommandRanking`**` :   `[`ResolveResults`](../object/ResolveResults.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandRanking`**  
`         `[`ResolveResults`](../object/ResolveResults.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`CommandRanking`**  
`         `[`DisambigRanking`](../object/DisambigRanking.html)  
`         `[`MissingObjectRanking`](../object/MissingObjectRanking.html)  
`         `[`OopsResults`](../object/OopsResults.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`actorSpecifiedCount`](#actorSpecifiedCount)`  `[`allExcludedCount`](#allExcludedCount)`  `[`allowActionRemapping`](#allowActionRemapping)`  `[`ambigCount`](#ambigCount)`  `[`commandCount`](#commandCount)`  `[`emptyButCount`](#emptyButCount)`  `[`endAdjCount`](#endAdjCount)`  `[`indefiniteCount`](#indefiniteCount)`  `[`inSingleObjSlot`](#inSingleObjSlot)`  `[`insufficientCount`](#insufficientCount)`  `[`inTopicSlot`](#inTopicSlot)`  `[`listForSingle`](#listForSingle)`  `[`literalLength`](#literalLength)`  `[`match`](#match)`  `[`miscWordListCount`](#miscWordListCount)`  `[`missingCount`](#missingCount)`  `[`nonMatchCount`](#nonMatchCount)`  `[`nonMatchPossCount`](#nonMatchPossCount)`  `[`nounSlotCount`](#nounSlotCount)`  `[`pluralTruncCount`](#pluralTruncCount)`  `[`pronounCount`](#pronounCount)`  `[`rankingCriteria`](#rankingCriteria)`  `[`tokCount`](#tokCount)`  `[`truncCount`](#truncCount)`  `[`unknownWordCount`](#unknownWordCount)`  `[`unwantedPluralCount`](#unwantedPluralCount)`  `[`vocabNonMatchCount`](#vocabNonMatchCount)`  `[`weaknessLevel`](#weaknessLevel)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`allNotAllowed`](#allNotAllowed)`  `[`ambiguousNounPhrase`](#ambiguousNounPhrase)`  `[`askMissingObject`](#askMissingObject)`  `[`beginSingleObjSlot`](#beginSingleObjSlot)`  `[`beginTopicSlot`](#beginTopicSlot)`  `[`calcRanking`](#calcRanking)`  `[`compareRanking`](#compareRanking)`  `[`construct`](#construct)`  `[`emptyNounPhrase`](#emptyNounPhrase)`  `[`endSingleObjSlot`](#endSingleObjSlot)`  `[`endTopicSlot`](#endTopicSlot)`  `[`getImpliedObject`](#getImpliedObject)`  `[`incCommandCount`](#incCommandCount)`  `[`insufficientQuantity`](#insufficientQuantity)`  `[`noMatch`](#noMatch)`  `[`noMatchForAll`](#noMatchForAll)`  `[`noMatchForAllBut`](#noMatchForAllBut)`  `[`noMatchForListBut`](#noMatchForListBut)`  `[`noMatchForLocation`](#noMatchForLocation)`  `[`noMatchForPossessive`](#noMatchForPossessive)`  `[`noMatchForPronoun`](#noMatchForPronoun)`  `[`noMatchPossessive`](#noMatchPossessive)`  `[`noteActorSpecified`](#noteActorSpecified)`  `[`noteAdjEnding`](#noteAdjEnding)`  `[`noteBadPrep`](#noteBadPrep)`  `[`noteEmptyBut`](#noteEmptyBut)`  `[`noteIndefinite`](#noteIndefinite)`  `[`noteLiteral`](#noteLiteral)`  `[`noteMatches`](#noteMatches)`  `[`noteMiscWordList`](#noteMiscWordList)`  `[`noteNounSlots`](#noteNounSlots)`  `[`notePlural`](#notePlural)`  `[`notePronoun`](#notePronoun)`  `[`noteWeakPhrasing`](#noteWeakPhrasing)`  `[`nothingInLocation`](#nothingInLocation)`  `[`noVocabMatch`](#noVocabMatch)`  `[`reflexiveNotAllowed`](#reflexiveNotAllowed)`  `[`singleObjectRequired`](#singleObjectRequired)`  `[`sortByRanking`](#sortByRanking)`  `[`uniqueObjectRequired`](#uniqueObjectRequired)`  `[`unknownNounPhrase`](#unknownNounPhrase)`  `[`wrongReflexive`](#wrongReflexive)`  `[`zeroQuantity`](#zeroQuantity)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actorSpecifiedCount"></span>

`actorSpecifiedCount`

[parser.t](../file/parser.t.html)\[[6384](../source/parser.t.html#6384)\]

<div class="desc">

an actor is specified

</div>

<span id="allExcludedCount"></span>

`allExcludedCount`

[parser.t](../file/parser.t.html)\[[6357](../source/parser.t.html#6357)\]

<div class="desc">

number of "all" or "any" lists totally excluded by "but"

</div>

<span id="allowActionRemapping"></span>

`allowActionRemapping`

[parser.t](../file/parser.t.html)\[[6714](../source/parser.t.html#6714)\]

<div class="desc">

don't allow action remapping while ranking

</div>

<span id="ambigCount"></span>

`ambigCount`

[parser.t](../file/parser.t.html)\[[6378](../source/parser.t.html#6378)\]

<div class="desc">

number of ambiguous noun phrases

</div>

<span id="commandCount"></span>

`commandCount`

[parser.t](../file/parser.t.html)\[[6381](../source/parser.t.html#6381)\]

<div class="desc">

number of subcommands in the command

</div>

<span id="emptyButCount"></span>

`emptyButCount`

[parser.t](../file/parser.t.html)\[[6354](../source/parser.t.html#6354)\]

<div class="desc">

number of empty "but" lists

</div>

<span id="endAdjCount"></span>

`endAdjCount`

[parser.t](../file/parser.t.html)\[[6366](../source/parser.t.html#6366)\]

<div class="desc">

number of phrases ending in adjectives

</div>

<span id="indefiniteCount"></span>

`indefiniteCount`

[parser.t](../file/parser.t.html)\[[6369](../source/parser.t.html#6369)\]

<div class="desc">

number of phrases with indefinite noun phrase structure

</div>

<span id="inSingleObjSlot"></span>

`inSingleObjSlot`

[parser.t](../file/parser.t.html)\[[6663](../source/parser.t.html#6663)\]

<div class="desc">

*no description available*

</div>

<span id="insufficientCount"></span>

`insufficientCount`

[parser.t](../file/parser.t.html)\[[6348](../source/parser.t.html#6348)\]

<div class="desc">

number of phrases requiring quantity higher than can be fulfilled

</div>

<span id="inTopicSlot"></span>

`inTopicSlot`

[parser.t](../file/parser.t.html)\[[6667](../source/parser.t.html#6667)\]

<div class="desc">

*no description available*

</div>

<span id="listForSingle"></span>

`listForSingle`

[parser.t](../file/parser.t.html)\[[6351](../source/parser.t.html#6351)\]

<div class="desc">

number of noun lists in single-noun slots

</div>

<span id="literalLength"></span>

`literalLength`

[parser.t](../file/parser.t.html)\[[6390](../source/parser.t.html#6390)\]

<div class="desc">

total character length of literal text phrases

</div>

<span id="match"></span>

`match`

[parser.t](../file/parser.t.html)\[[6316](../source/parser.t.html#6316)\]

<div class="desc">

the match tree I'm ranking

</div>

<span id="miscWordListCount"></span>

`miscWordListCount`

[parser.t](../file/parser.t.html)\[[6372](../source/parser.t.html#6372)\]

<div class="desc">

number of miscellaneous word lists as noun phrases

</div>

<span id="missingCount"></span>

`missingCount`

[parser.t](../file/parser.t.html)\[[6360](../source/parser.t.html#6360)\]

<div class="desc">

missing phrases (structurally omitted, as in "put book")

</div>

<span id="nonMatchCount"></span>

`nonMatchCount`

[parser.t](../file/parser.t.html)\[[6338](../source/parser.t.html#6338)\]

<div class="desc">

number of noun phrases matching nothing in scope

</div>

<span id="nonMatchPossCount"></span>

`nonMatchPossCount`

[parser.t](../file/parser.t.html)\[[6345](../source/parser.t.html#6345)\]

<div class="desc">

Number of possessive-qualified noun phrases matching nothing in scope.
For example, "bob's desk" when there's no desk in scope (Bob's or
otherwise).

</div>

<span id="nounSlotCount"></span>

`nounSlotCount`

[parser.t](../file/parser.t.html)\[[6332](../source/parser.t.html#6332)\]

<div class="desc">

The number of structural "noun phrase slots" in the verb. An
intransitive verb has no noun phrase slots; a transitive verb with a
direct object has one; a verb with a direct and indirect object has two
slots.

</div>

<span id="pluralTruncCount"></span>

`pluralTruncCount`

[parser.t](../file/parser.t.html)\[[6363](../source/parser.t.html#6363)\]

<div class="desc">

number of truncated plurals

</div>

<span id="pronounCount"></span>

`pronounCount`

[parser.t](../file/parser.t.html)\[[6393](../source/parser.t.html#6393)\]

<div class="desc">

number of pronoun phrases

</div>

<span id="rankingCriteria"></span>

`rankingCriteria`

[parser.t](../file/parser.t.html)\[[6292](../source/parser.t.html#6292)\]

<div class="desc">

Our list of ranking criteria. This is a list of CommandRankingCriterion
objects. The list is given in order of importance: the first criterion
is the most important, so if it can discriminate the two match trees, we
use its result; if the first criterion can't tell any difference, then
we move on to the second criterion; and so on through the list.

The most important thing is whether or not we have irresolvable noun
phrases (vocabNonMatchCount). If one of us has a noun phrase that refers
to nothing anywhere in the game, it's not as good as a phrase that at
least matches something somewhere.

Next, if one of us has noun phrases that cannot be resolved to something
in scope (nonMatchCount), and the other can successfully resolve its
noun phrases, the one that can resolve the phrases is preferred.

Next, check for insufficient numbers of matches to counted phrases
(insufficientCount).

Next, check for noun lists in single-noun-only slots (listForSingle).

Next, if we have an empty "but" list in one but not the other, take the
one with the non-empty "but" list (emptyButCount). We prefer a non-empty
"but" list with an empty "all" even to a non-empty "all" list with an
empty "but", because in the latter case we probably failed to exclude
anything because we misinterpreted the noun phrase to be excluded.

Next, if we have an empty "all" or "any" phrase due to "but" exclusion,
take the one that's not empty (allExcludedCount).

Next, prefer a command that addresses an actor (actorSpecifiedCount) -
if the actor name looks like a command (we have someone named "Open
Bob," maybe?), we'd prefer to interpret the name appearing as a command
prefix as an actor name.

Next, prefer no unstructured word lists as noun phrases (miscWordList
phrases) (miscWordListCount).

Next, prefer interpretations that treat less text as uninterpreted
literal text. By "less text," we simply mean that one has a shorter
string treated as a literal than the other.

Prefer no indefinite noun phrases (indefiniteCount).

Prefer no truncated plurals (pluralTruncCount).

Prefer no noun phrases ending in adjectives (endAdjCount).

Prefer no truncated words of any kind (truncCount).

Prefer fewer pronouns. If we have an interpretation that matches a word
to explicit vocabulary, take it over matching a word as a pronoun: if a
word is given explicitly as vocabulary for an object, use it if
possible.

Prefer no missing phrases (missingCount).

Prefer the one with fewer subcommands - if one has fewer subcommands
than the other, it means that we were able to interpret ambiguous
conjunctions (such as "and") as noun phrase conjunctions rather than as
command conjunctions; since we know by now that we both either have or
don't have unresolved noun phrases, we'd rather take the interpretation
that gives us noun phrases than the one that involves more separate
commands.

Prefer the tree that matches more tokens.

Prefer the one with more structural noun phrases in the verb. For
example, if we have one interpretation that's DETACH (X FROM Y) (where X
FROM Y is a 'locational' phrase that we treat as the direct object), and
one that's DETACH X FROM Y (where X is the direct object and Y is in the
indirect object), prefer the latter, because it has both direct and
indirect object phrases, whereas the former has only a direct object
phrase. English speakers almost always try to put prepositions into a
structural role in the verb phrase like this when they could be either
in the verb phrase or part of a noun phrase.

If all else fails, prefer the one that is initially less ambiguous.
Ambiguity is a weak test at this point, since we might end up narrowing
things down through automatic "logicalness" tests later, but it's
slightly better to have the match be less ambiguous now, all other
things being equal.

</div>

<span id="tokCount"></span>

`tokCount`

[parser.t](../file/parser.t.html)\[[6319](../source/parser.t.html#6319)\]

<div class="desc">

the number of tokens my match tree consumes

</div>

<span id="truncCount"></span>

`truncCount`

[parser.t](../file/parser.t.html)\[[6375](../source/parser.t.html#6375)\]

<div class="desc">

number of truncated words overall

</div>

<span id="unknownWordCount"></span>

`unknownWordCount`

[parser.t](../file/parser.t.html)\[[6387](../source/parser.t.html#6387)\]

<div class="desc">

unknown words

</div>

<span id="unwantedPluralCount"></span>

`unwantedPluralCount`

[parser.t](../file/parser.t.html)\[[6399](../source/parser.t.html#6399)\]

<div class="desc">

number of plural phrases encountered in single-object slots

</div>

<span id="vocabNonMatchCount"></span>

`vocabNonMatchCount`

[parser.t](../file/parser.t.html)\[[6335](../source/parser.t.html#6335)\]

<div class="desc">

number of noun phrases matching nothing anywhere in the game

</div>

<span id="weaknessLevel"></span>

`weaknessLevel`

[parser.t](../file/parser.t.html)\[[6396](../source/parser.t.html#6396)\]

<div class="desc">

weakness level (for noteWeakPhrasing)

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="allNotAllowed"></span>

`allNotAllowed ( )`

[parser.t](../file/parser.t.html)\[[6432](../source/parser.t.html#6432)\]

<div class="desc">

note that we have an unmatched possessive-qualified noun phrase

</div>

<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, asker, txt, matchList, fullMatchList, scopeList, requiredNum, resolver)`

[parser.t](../file/parser.t.html)\[[6503](../source/parser.t.html#6503)\]

<div class="desc">

treat this as any other noun phrase that matches nothing

</div>

<span id="askMissingObject"></span>

`askMissingObject (asker, resolver, responseProd)`

[parser.t](../file/parser.t.html)\[[6566](../source/parser.t.html#6566)\]

<div class="desc">

count the missing object phrase

</div>

<span id="beginSingleObjSlot"></span>

`beginSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[6661](../source/parser.t.html#6661)\]

<div class="desc">

if this object was matched with a truncated plural, note it

</div>

<span id="beginTopicSlot"></span>

`beginTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[6665](../source/parser.t.html#6665)\]

<div class="desc">

*no description available*

</div>

<span id="calcRanking"></span>

`calcRanking (resolveArguments)`

[parser.t](../file/parser.t.html)\[[6146](../source/parser.t.html#6146)\]

<div class="desc">

calculate my ranking

</div>

<span id="compareRanking"></span>

`compareRanking (other)`

[parser.t](../file/parser.t.html)\[[6173](../source/parser.t.html#6173)\]

<div class="desc">

Compare two production list entries for ranking purposes. Returns a
negative number if this one ranks worse than the other, 0 if they have
the same ranking, or a positive number if this one ranks better than the
other one.

This routine is designed to run entirely off of our rankingCriteria
property. In most cases, subclasses should be able to customize the
ranking system simply by overriding the rankingCriteria property to
provide a customized list of criteria objects.

</div>

<span id="construct"></span>

`construct (match)`

[parser.t](../file/parser.t.html)\[[6136](../source/parser.t.html#6136)\]

<div class="desc">

create a new entry

</div>

<span id="emptyNounPhrase"></span>

`emptyNounPhrase (resolver)`

[parser.t](../file/parser.t.html)\[[6582](../source/parser.t.html#6582)\]

<div class="desc">

add the length of this literal to the total literal length

</div>

<span id="endSingleObjSlot"></span>

`endSingleObjSlot ( )`

[parser.t](../file/parser.t.html)\[[6662](../source/parser.t.html#6662)\]

<div class="desc">

*no description available*

</div>

<span id="endTopicSlot"></span>

`endTopicSlot ( )`

[parser.t](../file/parser.t.html)\[[6666](../source/parser.t.html#6666)\]

<div class="desc">

*no description available*

</div>

<span id="getImpliedObject"></span>

`getImpliedObject (np, resolver)`

[parser.t](../file/parser.t.html)\[[6559](../source/parser.t.html#6559)\]

<div class="desc">

return the results

</div>

<span id="incCommandCount"></span>

`incCommandCount ( )`

[parser.t](../file/parser.t.html)\[[6682](../source/parser.t.html#6682)\]

<div class="desc">

If we're resolving a single-object slot, we want to avoid plurals, since
they could resolve to multiple objects as though we'd typed a list of
objects here. This isn't a problem for topics, though, since a topic
slot isn't iterated for execution.

</div>

<span id="insufficientQuantity"></span>

`insufficientQuantity (txt, matchList, requiredNum)`

[parser.t](../file/parser.t.html)\[[6595](../source/parser.t.html#6595)\]

<div class="desc">

treat this as a non-matching noun phrase

</div>

<span id="noMatch"></span>

`noMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[6419](../source/parser.t.html#6419)\]

<div class="desc">

note the unknown phrase

</div>

<span id="noMatchForAll"></span>

`noMatchForAll ( )`

[parser.t](../file/parser.t.html)\[[6438](../source/parser.t.html#6438)\]

<div class="desc">

treat this as a non-matching noun phrase

</div>

<span id="noMatchForAllBut"></span>

`noMatchForAllBut ( )`

[parser.t](../file/parser.t.html)\[[6450](../source/parser.t.html#6450)\]

<div class="desc">

note it

</div>

<span id="noMatchForListBut"></span>

`noMatchForListBut ( )`

[parser.t](../file/parser.t.html)\[[6456](../source/parser.t.html#6456)\]

<div class="desc">

count the total exclusion

</div>

<span id="noMatchForLocation"></span>

`noMatchForLocation (loc, txt)`

[parser.t](../file/parser.t.html)\[[6486](../source/parser.t.html#6486)\]

<div class="desc">

treat this as any other noun phrase that matches nothing

</div>

<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`

[parser.t](../file/parser.t.html)\[[6480](../source/parser.t.html#6480)\]

<div class="desc">

treat this as any other noun phrase that matches nothing

</div>

<span id="noMatchForPronoun"></span>

`noMatchForPronoun (typ, txt)`

[parser.t](../file/parser.t.html)\[[6462](../source/parser.t.html#6462)\]

<div class="desc">

treat this as any other noun phrase that matches nothing

</div>

<span id="noMatchPossessive"></span>

`noMatchPossessive (action, txt)`

[parser.t](../file/parser.t.html)\[[6425](../source/parser.t.html#6425)\]

<div class="desc">

note that we have a noun phrase that matches nothing

</div>

<span id="noteActorSpecified"></span>

`noteActorSpecified ( )`

[parser.t](../file/parser.t.html)\[[6688](../source/parser.t.html#6688)\]

<div class="desc">

increase our subcommand counter

</div>

<span id="noteAdjEnding"></span>

`noteAdjEnding ( )`

[parser.t](../file/parser.t.html)\[[6615](../source/parser.t.html#6615)\]

<div class="desc">

ignore this for now - we might get a unique object via disambiguation
during the execution phase

</div>

<span id="noteBadPrep"></span>

`noteBadPrep ( )`

[parser.t](../file/parser.t.html)\[[6492](../source/parser.t.html#6492)\]

<div class="desc">

treat this as any other noun phrase that matches nothing

</div>

<span id="noteEmptyBut"></span>

`noteEmptyBut ( )`

[parser.t](../file/parser.t.html)\[[6444](../source/parser.t.html#6444)\]

<div class="desc">

treat this as any other noun phrase that matches nothing

</div>

<span id="noteIndefinite"></span>

`noteIndefinite ( )`

[parser.t](../file/parser.t.html)\[[6621](../source/parser.t.html#6621)\]

<div class="desc">

count it

</div>

<span id="noteLiteral"></span>

`noteLiteral (txt)`

[parser.t](../file/parser.t.html)\[[6576](../source/parser.t.html#6576)\]

<div class="desc">

no need to do anything here - we'll count the missing object in
getImpliedObject, and we don't want to ask for anything interactively at
this point

</div>

<span id="noteMatches"></span>

`noteMatches (matchList)`

[parser.t](../file/parser.t.html)\[[6642](../source/parser.t.html#6642)\]

<div class="desc">

note the presence of a pronoun

</div>

<span id="noteMiscWordList"></span>

`noteMiscWordList (txt)`

[parser.t](../file/parser.t.html)\[[6627](../source/parser.t.html#6627)\]

<div class="desc">

count it

</div>

<span id="noteNounSlots"></span>

`noteNounSlots (cnt)`

[parser.t](../file/parser.t.html)\[[6694](../source/parser.t.html#6694)\]

<div class="desc">

note it

</div>

<span id="notePlural"></span>

`notePlural ( )`

[parser.t](../file/parser.t.html)\[[6669](../source/parser.t.html#6669)\]

<div class="desc">

*no description available*

</div>

<span id="notePronoun"></span>

`notePronoun ( )`

[parser.t](../file/parser.t.html)\[[6636](../source/parser.t.html#6636)\]

<div class="desc">

count this as a literal as well

</div>

<span id="noteWeakPhrasing"></span>

`noteWeakPhrasing (level)`

[parser.t](../file/parser.t.html)\[[6707](../source/parser.t.html#6707)\]

<div class="desc">

If this is the first noun slot count we've received, remember it. If we
already have a count, ignore the new one - we only want to consider the
first verb phrase if there are multiple verb phrases, since we'll
reconsider the next verb phrase when we're ready to execute it.

</div>

<span id="nothingInLocation"></span>

`nothingInLocation (txt)`

[parser.t](../file/parser.t.html)\[[6497](../source/parser.t.html#6497)\]

<div class="desc">

don't do anything at this point

</div>

<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[6413](../source/parser.t.html#6413)\]

<div class="desc">

ResolveResults implementation. We use this results receiver when we're
comparing the semantic strengths of multiple structural matches, so we
merely note each error condition without showing any message to the user
or asking the user for any input. Once we've ranked all of the matches,
we'll choose the one with the best attributes and then resolve it for
real, at which point if we chose one with any errors, we'll finally get
around to showing the errors to the user.

</div>

<span id="reflexiveNotAllowed"></span>

`reflexiveNotAllowed (typ, txt)`

[parser.t](../file/parser.t.html)\[[6468](../source/parser.t.html#6468)\]

<div class="desc">

treat this as any other noun phrase that matches nothing

</div>

<span id="singleObjectRequired"></span>

`singleObjectRequired (txt)`

[parser.t](../file/parser.t.html)\[[6601](../source/parser.t.html#6601)\]

<div class="desc">

treat this as a non-matching noun phrase

</div>

<span id="sortByRanking"></span>

`sortByRanking (lst, [resolveArguments])`

[parser.t](../file/parser.t.html)\[[6108](../source/parser.t.html#6108)\]

<div class="desc">

Sort a list of productions, as returned from GrammarProd.parseTokens(),
in descending order of command strength. We return a list of
CommandRanking objects whose first element is the best command
interpretation.

Note that this can be used as a class-level method.

</div>

<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (txt, matchList)`

[parser.t](../file/parser.t.html)\[[6607](../source/parser.t.html#6607)\]

<div class="desc">

treat this as a non-matching noun phrase

</div>

<span id="unknownNounPhrase"></span>

`unknownNounPhrase (match, resolver)`

[parser.t](../file/parser.t.html)\[[6529](../source/parser.t.html#6529)\]

<div class="desc">

return the abbreviated list

</div>

<span id="wrongReflexive"></span>

`wrongReflexive (typ, txt)`

[parser.t](../file/parser.t.html)\[[6474](../source/parser.t.html#6474)\]

<div class="desc">

treat this as any other noun phrase that matches nothing

</div>

<span id="zeroQuantity"></span>

`zeroQuantity (txt)`

[parser.t](../file/parser.t.html)\[[6589](../source/parser.t.html#6589)\]

<div class="desc">

treat this as a non-matching noun phrase

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
