---
layout: docs
---
<span class="title">NounPhrase</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1646](../source/parser.t.html#1646)\]

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



A NounPhrase object represents a noun phrase within a command line. This
class handles the mapping from the text of the noun phrase in the input
to the game-world objects that the noun phrase refers to.

This object encompasses a core noun phrase plus all of its qualifiers.
Qualifiers can themselves be noun phrases: possessives, locationals, and
contents phrases contain subsidiary noun phrases, so we represent these
qualifiers with subsidiary NounPhrase objects.

`class `**`NounPhrase`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NounPhrase`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`NounPhrase`**  
[`LiteralPhrase`](../object/LiteralPhrase.html)  
[`NumberPhrase`](../object/NumberPhrase.html)  
[`TopicPhrase`](../object/TopicPhrase.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`contPrep`](#contPrep) [`contQual`](#contQual) [`coreProd`](#coreProd) [`determiner`](#determiner) [`disambigNameList`](#disambigNameList) [`errName`](#errName) [`errNameProd`](#errNameProd) [`exclusions`](#exclusions) [`locQual`](#locQual) [`locType`](#locType) [`matches`](#matches) [`objs`](#objs) [`ordinal`](#ordinal) [`parent`](#parent) [`possQual`](#possQual) [`prod`](#prod) [`pronoun`](#pronoun) [`quantifier`](#quantifier) [`role`](#role) [`tokens`](#tokens)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addContents`](#addContents) [`addExclusionItem`](#addExclusionItem) [`addLiteral`](#addLiteral) [`addLocation`](#addLocation) [`addMatches`](#addMatches) [`addOrdinal`](#addOrdinal) [`addPossessive`](#addPossessive) [`addQuantifier`](#addQuantifier) [`ambigError`](#ambigError) [`applyContQual`](#applyContQual) [`applyDisambig`](#applyDisambig) [`applyExclusion`](#applyExclusion) [`applyLocational`](#applyLocational) [`applyPossessive`](#applyPossessive) [`buildObjList`](#buildObjList) [`clone`](#clone) [`construct`](#construct) [`contains`](#contains) [`disambiguate`](#disambiguate) [`expandErrName`](#expandErrName) [`isAllEquivalent`](#isAllEquivalent) [`isMultiple`](#isMultiple) [`matchNameScope`](#matchNameScope) [`matchVocab`](#matchVocab) [`matchVocabPoss`](#matchVocabPoss) [`resolveAll`](#resolveAll) [`resolveReflexives`](#resolveReflexives) [`selectObjects`](#selectObjects)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="contPrep"></span>

`contPrep`

[parser.t](../file/parser.t.html)\[[2924](../source/parser.t.html#2924)\]



the preposition of the contents qualifier



<span id="contQual"></span>

`contQual`

[parser.t](../file/parser.t.html)\[[2921](../source/parser.t.html#2921)\]



the contents qualifier phrase, if any ("the bucket OF WATER")



<span id="coreProd"></span>

`coreProd`

[parser.t](../file/parser.t.html)\[[2899](../source/parser.t.html#2899)\]



the grammar match for the core noun phrase; this is the part that names
a single object, stripped of all qualifiers (such as possessives,
articles, quantifiers, and locational phrases)



<span id="determiner"></span>

`determiner`

[parser.t](../file/parser.t.html)\[[2937](../source/parser.t.html#2937)\]



the determiner, if any, as a Determiner object



<span id="disambigNameList"></span>

`disambigNameList`

[parser.t](../file/parser.t.html)\[[2946](../source/parser.t.html#2946)\]



the name list from the disambiguation query



<span id="errName"></span>

`errName`

[parser.t](../file/parser.t.html)\[[1696](../source/parser.t.html#1696)\]



By default, use the original input text of my "core" production as the
name we show for this noun phrase in error messages. The core production
is the noun phrase minus any qualifiers (articles, possessives,
locational phrases, etc).

As we successfully resolve qualifiers, we'll expand this to include the
qualifying phrases. Any error we find after resolving a qualifier will
necessary apply to the qualified form, so we want to include the
qualifier in any error message.

For example, if the original phrase is BUCKET OF FISH ON TABLE, we'll
start out with the core phrase of BUCKET. We'll next resolve the
contents qualifier, OF FISH. Assuming that we find a BUCKET OF FISH,
that becomes the new error name. If we then fail to find such an object
ON TABLE, we'll be able to report that there's no BUCKET OF FISH on the
table. This is better than reporting that we don't see any BUCKET on the
table, because there could in fact be a different bucket on the table.



<span id="errNameProd"></span>

`errNameProd`

[parser.t](../file/parser.t.html)\[[1699](../source/parser.t.html#1699)\]



the source of the error name is initially the core production



<span id="exclusions"></span>

`exclusions`

[parser.t](../file/parser.t.html)\[[2943](../source/parser.t.html#2943)\]



the exclusion list, if any (this is the list following EXCEPT or BUT in
a phrase like ALL EXCEPT THE RED ONES)



<span id="locQual"></span>

`locQual`

[parser.t](../file/parser.t.html)\[[2911](../source/parser.t.html#2911)\]



the locational qualifier phrase, if any ("the box ON THE SHELF")



<span id="locType"></span>

`locType`

[parser.t](../file/parser.t.html)\[[2918](../source/parser.t.html#2918)\]



The locational qualifier relationship, as a LocType object. (This is
stored on the locational qualifier noun phrase itself, not on the
underlying noun phrase it qualifies.)



<span id="matches"></span>

`matches`

[parser.t](../file/parser.t.html)\[[2797](../source/parser.t.html#2797)\]



List of NPMatch objects. This is populated during the matchName phase
with the list of possible vocabulary matches, and then reduced during
disambiguation to the final set.



<span id="objs"></span>

`objs`

[parser.t](../file/parser.t.html)\[[2804](../source/parser.t.html#2804)\]



List of resolved objects. This is populated after disambiguation from
the 'matches' set - it contains the same objects, but simply the objects
rather than the NPMatch wrappers.



<span id="ordinal"></span>

`ordinal`

[parser.t](../file/parser.t.html)\[[2934](../source/parser.t.html#2934)\]



The ordinal value, if any, as a number: for "the third one", this is 3.
This is intended for use in disambiguation replies, to let the user pick
out an item by its position in the offered list.



<span id="parent"></span>

`parent`

[parser.t](../file/parser.t.html)\[[2889](../source/parser.t.html#2889)\]



the NounPhrase we qualify, if we're a possessive or locational



<span id="possQual"></span>

`possQual`

[parser.t](../file/parser.t.html)\[[2908](../source/parser.t.html#2908)\]



the possessive qualifier, if any ("BOB'S box")



<span id="prod"></span>

`prod`

[parser.t](../file/parser.t.html)\[[2892](../source/parser.t.html#2892)\]



the grammar production match object for this noun phrase



<span id="pronoun"></span>

`pronoun`

[parser.t](../file/parser.t.html)\[[2905](../source/parser.t.html#2905)\]



the pronoun, if any, as a Pronoun object



<span id="quantifier"></span>

`quantifier`

[parser.t](../file/parser.t.html)\[[2927](../source/parser.t.html#2927)\]



the quantifier, if any, as a number: for "five books", this is 5



<span id="role"></span>

`role`

[parser.t](../file/parser.t.html)\[[2886](../source/parser.t.html#2886)\]



the Command list we're a part of (&dobjNPs, &iobjNPs, etc: the Command
overrides this to the actual list property for a primary noun phrase,
and for qualifiers such as possessives, this inherited version looks it
up via the parent)



<span id="tokens"></span>

`tokens`

[parser.t](../file/parser.t.html)\[[2902](../source/parser.t.html#2902)\]



the literal tokens making up the noun phrase



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addContents"></span>

`addContents (prep, prod)`

[parser.t](../file/parser.t.html)\[[2817](../source/parser.t.html#2817)\]



add a contents qualifier, returning the new noun phrase



<span id="addExclusionItem"></span>

`addExclusionItem (prod)`

[parser.t](../file/parser.t.html)\[[2852](../source/parser.t.html#2852)\]



add an exclusion list item



<span id="addLiteral"></span>

`addLiteral (tok)`

[parser.t](../file/parser.t.html)\[[2807](../source/parser.t.html#2807)\]



add a literal to this phrase



<span id="addLocation"></span>

`addLocation (locType, prod)`

[parser.t](../file/parser.t.html)\[[2827](../source/parser.t.html#2827)\]



add a locational qualifier, returning the new noun phrase



<span id="addMatches"></span>

`addMatches (vec, lst, match)`

[parser.t](../file/parser.t.html)\[[1870](../source/parser.t.html#1870)\]



Add matching objects to a match vector. 'lst' can be a list or vector of
objects, or a single object. 'match' is the MatchXxx flag value returned
from the object name match, if applicable.



<span id="addOrdinal"></span>

`addOrdinal (num)`

[parser.t](../file/parser.t.html)\[[2846](../source/parser.t.html#2846)\]



add an ordinal, given as an integer value



<span id="addPossessive"></span>

`addPossessive (prod)`

[parser.t](../file/parser.t.html)\[[2810](../source/parser.t.html#2810)\]



add a possessive qualifier, returning the new noun phrase



<span id="addQuantifier"></span>

`addQuantifier (num)`

[parser.t](../file/parser.t.html)\[[2840](../source/parser.t.html#2840)\]



add a quantifier, given as an integer value



<span id="ambigError"></span>

`ambigError (cmd)`

[parser.t](../file/parser.t.html)\[[2436](../source/parser.t.html#2436)\]



Throw an ambiguous noun phrase error for the current match list.



<span id="applyContQual"></span>

`applyContQual ( )`

[parser.t](../file/parser.t.html)\[[2101](../source/parser.t.html#2101)\]



Apply this contents qualifier phrase's qualification. This filters the
underlying (parent) noun list to keep only objects that contain the
object(s) named in this noun list.



<span id="applyDisambig"></span>

`applyDisambig (cmd, ambigMatches, nameList)`

[parser.t](../file/parser.t.html)\[[2509](../source/parser.t.html#2509)\]



Apply this noun phrase as a disambiguation reply to the given original
list of matches to an ambiguous noun phrase.



<span id="applyExclusion"></span>

`applyExclusion (cmd)`

[parser.t](../file/parser.t.html)\[[2168](../source/parser.t.html#2168)\]



Apply an exclusion item. This resolves the vocabulary for the exclusion
phrase and filters the matching item(s) noun phrase out of the parent
list.



<span id="applyLocational"></span>

`applyLocational ( )`

[parser.t](../file/parser.t.html)\[[2130](../source/parser.t.html#2130)\]



Apply this locational phrase's qualification. This filters the
underlying (parent) noun list to keep only objects located within the
object(s) named in this noun phrase.



<span id="applyPossessive"></span>

`applyPossessive ( )`

[parser.t](../file/parser.t.html)\[[2064](../source/parser.t.html#2064)\]



Apply this possessive phrase's qualification. This filters the
underlying (parent) noun list to keep only objects owned by the
object(s) named in this noun phrase.



<span id="buildObjList"></span>

`buildObjList ( )`

[parser.t](../file/parser.t.html)\[[2787](../source/parser.t.html#2787)\]



Build the 'objs' list from the match list



<span id="clone"></span>

`clone ( )`

[parser.t](../file/parser.t.html)\[[1659](../source/parser.t.html#1659)\]



clone - create a modifiable copy based on this original noun phrase



<span id="construct"></span>

`construct (parent, prod)`

[parser.t](../file/parser.t.html)\[[1648](../source/parser.t.html#1648)\]



create



<span id="contains"></span>

`contains (np)`

[parser.t](../file/parser.t.html)\[[1734](../source/parser.t.html#1734)\]



Does this NounPhrase contain the given NounPhrase? Returns true if
NounPhrase is self, or one of our qualifier noun phrases contains it.



<span id="disambiguate"></span>

`disambiguate (cmd, num, action)`

[parser.t](../file/parser.t.html)\[[2347](../source/parser.t.html#2347)\]



Disambiguate the match list to select the given target number of
objects.



<span id="expandErrName"></span>

`expandErrName (np)`

[parser.t](../file/parser.t.html)\[[1706](../source/parser.t.html#1706)\]



Expand the error-message name to include the given qualifier. We'll find
the common parent of the core production and the given qualifier's
production, and use its text as the new error name.



<span id="isAllEquivalent"></span>

`isAllEquivalent (matchList)`

[parser.t](../file/parser.t.html)\[[2337](../source/parser.t.html#2337)\]



Determine whether all matches in the matchList are impossible to
disambiguate.



<span id="isMultiple"></span>

`isMultiple ( )`

[parser.t](../file/parser.t.html)\[[2873](../source/parser.t.html#2873)\]



Does this noun phrase refer to multiple objects structurally? This is
true if any the matches used plural words, or the determiner is All, or
we have a quantifier greater than 1.



<span id="matchNameScope"></span>

`matchNameScope (cmd, scope)`

[parser.t](../file/parser.t.html)\[[1884](../source/parser.t.html#1884)\]



Find the vocabulary matches for a given noun phrase within a given scope
list. Add all of the matches to the given vector.



<span id="matchVocab"></span>

`matchVocab (cmd)`

[parser.t](../file/parser.t.html)\[[1750](../source/parser.t.html#1750)\]



Get the list of objects matching the vocabulary words in our noun
phrase. Populates our 'matches' property with a vector of matching
objects. This doesn't look at any of our qualifiers, or attempt to
disambiguate contextually; it simply finds everything in scope that the
noun phrase could refer to.



<span id="matchVocabPoss"></span>

`matchVocabPoss (cmd)`

[parser.t](../file/parser.t.html)\[[1950](../source/parser.t.html#1950)\]



Match vocabulary for a possessive qualifier phrase.

Possessive matching has somewhat different rules than for ordinary noun
phrases.

First, possessive pronouns (HIS, HER, ITS, THEIR) \*can\* act like
reflexives, in that they can refer back to earlier clauses in the same
predicate: ASK BOB ABOUT HIS MOTHER. However, they can also refer to
previous commands: SEARCH BOB; TAKE HIS WALLET. The deciding factor is
whether or not there's an earlier noun phrase in the command that
matches in gender and number; if so, we use the reflexive meaning,
otherwise we use the external referent.

Second, the scope for ordinary noun phrases has to be expanded to
include the owners of the objects in scope. If we have a wallet that we
know belongs to Bob, we should be able to refer to it as "Bob's wallet"
whether or not Bob himself is in scope. So, for the purposes of the
possessive, Bob is in scope even if he wouldn't be for an ordinary noun
phrase.



<span id="resolveAll"></span>

`resolveAll (cmd)`

[parser.t](../file/parser.t.html)\[[2706](../source/parser.t.html#2706)\]



Resolve ALL. This is called on a separate pass after selectObjects(),
because two-object verbs sometimes resolve ALL in one slot according to
the selection in the other slot.



<span id="resolveReflexives"></span>

`resolveReflexives (cmd)`

[parser.t](../file/parser.t.html)\[[2751](../source/parser.t.html#2751)\]



Resolve reflexive pronouns. Our Command calls this AFTER resolving all
of the regular noun phrases, because reflexives refer back to other
nouns in the same command.



<span id="selectObjects"></span>

`selectObjects (cmd)`

[parser.t](../file/parser.t.html)\[[2219](../source/parser.t.html#2219)\]



Select the objects from among the vocabulary matches. This narrows the
list of possible vocabulary matches for our noun phrase to find the
actual object or objects the player is referencing.

When this is called, we've already filled in the match list with all
objects in scope that match the vocabulary of the core noun phrase
(including non-reflexive pronouns and ALL), and we've applied any
possessive, locational, and exclusion qualifiers. What we're left with
is the list of in-scope objects that meet all of the specifications
contained in the entire noun phrase. In other words, we've squeezed all
available information out of the noun phrase itself. If the result is
ambiguous, then, we'll have to look beyond the noun phrase, to the
broader semantic content of the overall command.

There are three possible "goals" for what our final object list should
look like after disambiguation. Only one goal applies to each particular
noun phrase; which it is depends on the grammar of the phrase:

1\. Definite mode: TAKE BOOK, TAKE THE BOOK, TAKE BOTH BOOKS, TAKE THE
THREE BOOKS. The goal in definite mode is to choose the given number of
objects, \*and\* to make sure that the player could \*only\* have meant
those precise objects. In other words, we're not allowed to make an
arbitrary choice: in natural language, the definite mode says that the
speaker believes the listener knows which \*particular\* object or
objects the speaker is referring to. If we're not absolutely sure which
objects the player is talking about, we have a disagreement with the
player's apparent expectations and must ask for clarification.

2\. Indefinite mode: TAKE A BOOK, TAKE ANY BOOK, TAKE TWO BOOKS. The
goal is to choose the given number of objects from the possible matches,
arbitrarily choosing from the available objects.

3\. Plural mode: TAKE BOOKS, TAKE THE BOOKS, TAKE ALL BOOKS. The goal
here is to choose all of the matching objects.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


