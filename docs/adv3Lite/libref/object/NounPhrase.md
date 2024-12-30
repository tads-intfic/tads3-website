[NounPhrase]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[1646](../source/parser.t.html#1646)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A NounPhrase object represents a noun phrase within a command line. This
class handles the mapping from the text of the noun phrase in the input
to the game-world objects that the noun phrase refers to.

This object encompasses a core noun phrase plus all of its qualifiers.
Qualifiers can themselves be noun phrases: possessives, locationals, and
contents phrases contain subsidiary noun phrases, so we represent these
qualifiers with subsidiary NounPhrase objects.

`class `**`NounPhrase`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`NounPhrase`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`NounPhrase`**\
`         `[`LiteralPhrase`](../object/LiteralPhrase.html)\
`         `[`NumberPhrase`](../object/NumberPhrase.html)\
`         `[`TopicPhrase`](../object/TopicPhrase.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`contPrep`](#contPrep)`  `[`contQual`](#contQual)`  `[`coreProd`](#coreProd)`  `[`determiner`](#determiner)`  `[`disambigNameList`](#disambigNameList)`  `[`errName`](#errName)`  `[`errNameProd`](#errNameProd)`  `[`exclusions`](#exclusions)`  `[`locQual`](#locQual)`  `[`locType`](#locType)`  `[`matches`](#matches)`  `[`objs`](#objs)`  `[`ordinal`](#ordinal)`  `[`parent`](#parent)`  `[`possQual`](#possQual)`  `[`prod`](#prod)`  `[`pronoun`](#pronoun)`  `[`quantifier`](#quantifier)`  `[`role`](#role)`  `[`tokens`](#tokens)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addContents`](#addContents)`  `[`addExclusionItem`](#addExclusionItem)`  `[`addLiteral`](#addLiteral)`  `[`addLocation`](#addLocation)`  `[`addMatches`](#addMatches)`  `[`addOrdinal`](#addOrdinal)`  `[`addPossessive`](#addPossessive)`  `[`addQuantifier`](#addQuantifier)`  `[`ambigError`](#ambigError)`  `[`applyContQual`](#applyContQual)`  `[`applyDisambig`](#applyDisambig)`  `[`applyExclusion`](#applyExclusion)`  `[`applyLocational`](#applyLocational)`  `[`applyPossessive`](#applyPossessive)`  `[`buildObjList`](#buildObjList)`  `[`clone`](#clone)`  `[`construct`](#construct)`  `[`contains`](#contains)`  `[`disambiguate`](#disambiguate)`  `[`expandErrName`](#expandErrName)`  `[`isAllEquivalent`](#isAllEquivalent)`  `[`isMultiple`](#isMultiple)`  `[`matchNameScope`](#matchNameScope)`  `[`matchVocab`](#matchVocab)`  `[`matchVocabPoss`](#matchVocabPoss)`  `[`resolveAll`](#resolveAll)`  `[`resolveReflexives`](#resolveReflexives)`  `[`selectObjects`](#selectObjects)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#contPrep}

`contPrep`

[parser.t](../file/parser.t.html)\[[2924](../source/parser.t.html#2924)\]

::: desc
the preposition of the contents qualifier
:::

[]{#contQual}

`contQual`

[parser.t](../file/parser.t.html)\[[2921](../source/parser.t.html#2921)\]

::: desc
the contents qualifier phrase, if any (\"the bucket OF WATER\")
:::

[]{#coreProd}

`coreProd`

[parser.t](../file/parser.t.html)\[[2899](../source/parser.t.html#2899)\]

::: desc
the grammar match for the core noun phrase; this is the part that names
a single object, stripped of all qualifiers (such as possessives,
articles, quantifiers, and locational phrases)
:::

[]{#determiner}

`determiner`

[parser.t](../file/parser.t.html)\[[2937](../source/parser.t.html#2937)\]

::: desc
the determiner, if any, as a Determiner object
:::

[]{#disambigNameList}

`disambigNameList`

[parser.t](../file/parser.t.html)\[[2946](../source/parser.t.html#2946)\]

::: desc
the name list from the disambiguation query
:::

[]{#errName}

`errName`

[parser.t](../file/parser.t.html)\[[1696](../source/parser.t.html#1696)\]

::: desc
By default, use the original input text of my \"core\" production as the
name we show for this noun phrase in error messages. The core production
is the noun phrase minus any qualifiers (articles, possessives,
locational phrases, etc).

As we successfully resolve qualifiers, we\'ll expand this to include the
qualifying phrases. Any error we find after resolving a qualifier will
necessary apply to the qualified form, so we want to include the
qualifier in any error message.

For example, if the original phrase is BUCKET OF FISH ON TABLE, we\'ll
start out with the core phrase of BUCKET. We\'ll next resolve the
contents qualifier, OF FISH. Assuming that we find a BUCKET OF FISH,
that becomes the new error name. If we then fail to find such an object
ON TABLE, we\'ll be able to report that there\'s no BUCKET OF FISH on
the table. This is better than reporting that we don\'t see any BUCKET
on the table, because there could in fact be a different bucket on the
table.
:::

[]{#errNameProd}

`errNameProd`

[parser.t](../file/parser.t.html)\[[1699](../source/parser.t.html#1699)\]

::: desc
the source of the error name is initially the core production
:::

[]{#exclusions}

`exclusions`

[parser.t](../file/parser.t.html)\[[2943](../source/parser.t.html#2943)\]

::: desc
the exclusion list, if any (this is the list following EXCEPT or BUT in
a phrase like ALL EXCEPT THE RED ONES)
:::

[]{#locQual}

`locQual`

[parser.t](../file/parser.t.html)\[[2911](../source/parser.t.html#2911)\]

::: desc
the locational qualifier phrase, if any (\"the box ON THE SHELF\")
:::

[]{#locType}

`locType`

[parser.t](../file/parser.t.html)\[[2918](../source/parser.t.html#2918)\]

::: desc
The locational qualifier relationship, as a LocType object. (This is
stored on the locational qualifier noun phrase itself, not on the
underlying noun phrase it qualifies.)
:::

[]{#matches}

`matches`

[parser.t](../file/parser.t.html)\[[2797](../source/parser.t.html#2797)\]

::: desc
List of NPMatch objects. This is populated during the matchName phase
with the list of possible vocabulary matches, and then reduced during
disambiguation to the final set.
:::

[]{#objs}

`objs`

[parser.t](../file/parser.t.html)\[[2804](../source/parser.t.html#2804)\]

::: desc
List of resolved objects. This is populated after disambiguation from
the \'matches\' set - it contains the same objects, but simply the
objects rather than the NPMatch wrappers.
:::

[]{#ordinal}

`ordinal`

[parser.t](../file/parser.t.html)\[[2934](../source/parser.t.html#2934)\]

::: desc
The ordinal value, if any, as a number: for \"the third one\", this is
3. This is intended for use in disambiguation replies, to let the user
pick out an item by its position in the offered list.
:::

[]{#parent}

`parent`

[parser.t](../file/parser.t.html)\[[2889](../source/parser.t.html#2889)\]

::: desc
the NounPhrase we qualify, if we\'re a possessive or locational
:::

[]{#possQual}

`possQual`

[parser.t](../file/parser.t.html)\[[2908](../source/parser.t.html#2908)\]

::: desc
the possessive qualifier, if any (\"BOB\'S box\")
:::

[]{#prod}

`prod`

[parser.t](../file/parser.t.html)\[[2892](../source/parser.t.html#2892)\]

::: desc
the grammar production match object for this noun phrase
:::

[]{#pronoun}

`pronoun`

[parser.t](../file/parser.t.html)\[[2905](../source/parser.t.html#2905)\]

::: desc
the pronoun, if any, as a Pronoun object
:::

[]{#quantifier}

`quantifier`

[parser.t](../file/parser.t.html)\[[2927](../source/parser.t.html#2927)\]

::: desc
the quantifier, if any, as a number: for \"five books\", this is 5
:::

[]{#role}

`role`

[parser.t](../file/parser.t.html)\[[2886](../source/parser.t.html#2886)\]

::: desc
the Command list we\'re a part of (&dobjNPs, &iobjNPs, etc: the Command
overrides this to the actual list property for a primary noun phrase,
and for qualifiers such as possessives, this inherited version looks it
up via the parent)
:::

[]{#tokens}

`tokens`

[parser.t](../file/parser.t.html)\[[2902](../source/parser.t.html#2902)\]

::: desc
the literal tokens making up the noun phrase
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addContents}

`addContents (prep, prod)`

[parser.t](../file/parser.t.html)\[[2817](../source/parser.t.html#2817)\]

::: desc
add a contents qualifier, returning the new noun phrase
:::

[]{#addExclusionItem}

`addExclusionItem (prod)`

[parser.t](../file/parser.t.html)\[[2852](../source/parser.t.html#2852)\]

::: desc
add an exclusion list item
:::

[]{#addLiteral}

`addLiteral (tok)`

[parser.t](../file/parser.t.html)\[[2807](../source/parser.t.html#2807)\]

::: desc
add a literal to this phrase
:::

[]{#addLocation}

`addLocation (locType, prod)`

[parser.t](../file/parser.t.html)\[[2827](../source/parser.t.html#2827)\]

::: desc
add a locational qualifier, returning the new noun phrase
:::

[]{#addMatches}

`addMatches (vec, lst, match)`

[parser.t](../file/parser.t.html)\[[1870](../source/parser.t.html#1870)\]

::: desc
Add matching objects to a match vector. \'lst\' can be a list or vector
of objects, or a single object. \'match\' is the MatchXxx flag value
returned from the object name match, if applicable.
:::

[]{#addOrdinal}

`addOrdinal (num)`

[parser.t](../file/parser.t.html)\[[2846](../source/parser.t.html#2846)\]

::: desc
add an ordinal, given as an integer value
:::

[]{#addPossessive}

`addPossessive (prod)`

[parser.t](../file/parser.t.html)\[[2810](../source/parser.t.html#2810)\]

::: desc
add a possessive qualifier, returning the new noun phrase
:::

[]{#addQuantifier}

`addQuantifier (num)`

[parser.t](../file/parser.t.html)\[[2840](../source/parser.t.html#2840)\]

::: desc
add a quantifier, given as an integer value
:::

[]{#ambigError}

`ambigError (cmd)`

[parser.t](../file/parser.t.html)\[[2436](../source/parser.t.html#2436)\]

::: desc
Throw an ambiguous noun phrase error for the current match list.
:::

[]{#applyContQual}

`applyContQual ( )`

[parser.t](../file/parser.t.html)\[[2101](../source/parser.t.html#2101)\]

::: desc
Apply this contents qualifier phrase\'s qualification. This filters the
underlying (parent) noun list to keep only objects that contain the
object(s) named in this noun list.
:::

[]{#applyDisambig}

`applyDisambig (cmd, ambigMatches, nameList)`

[parser.t](../file/parser.t.html)\[[2509](../source/parser.t.html#2509)\]

::: desc
Apply this noun phrase as a disambiguation reply to the given original
list of matches to an ambiguous noun phrase.
:::

[]{#applyExclusion}

`applyExclusion (cmd)`

[parser.t](../file/parser.t.html)\[[2168](../source/parser.t.html#2168)\]

::: desc
Apply an exclusion item. This resolves the vocabulary for the exclusion
phrase and filters the matching item(s) noun phrase out of the parent
list.
:::

[]{#applyLocational}

`applyLocational ( )`

[parser.t](../file/parser.t.html)\[[2130](../source/parser.t.html#2130)\]

::: desc
Apply this locational phrase\'s qualification. This filters the
underlying (parent) noun list to keep only objects located within the
object(s) named in this noun phrase.
:::

[]{#applyPossessive}

`applyPossessive ( )`

[parser.t](../file/parser.t.html)\[[2064](../source/parser.t.html#2064)\]

::: desc
Apply this possessive phrase\'s qualification. This filters the
underlying (parent) noun list to keep only objects owned by the
object(s) named in this noun phrase.
:::

[]{#buildObjList}

`buildObjList ( )`

[parser.t](../file/parser.t.html)\[[2787](../source/parser.t.html#2787)\]

::: desc
Build the \'objs\' list from the match list
:::

[]{#clone}

`clone ( )`

[parser.t](../file/parser.t.html)\[[1659](../source/parser.t.html#1659)\]

::: desc
clone - create a modifiable copy based on this original noun phrase
:::

[]{#construct}

`construct (parent, prod)`

[parser.t](../file/parser.t.html)\[[1648](../source/parser.t.html#1648)\]

::: desc
create
:::

[]{#contains}

`contains (np)`

[parser.t](../file/parser.t.html)\[[1734](../source/parser.t.html#1734)\]

::: desc
Does this NounPhrase contain the given NounPhrase? Returns true if
NounPhrase is self, or one of our qualifier noun phrases contains it.
:::

[]{#disambiguate}

`disambiguate (cmd, num, action)`

[parser.t](../file/parser.t.html)\[[2347](../source/parser.t.html#2347)\]

::: desc
Disambiguate the match list to select the given target number of
objects.
:::

[]{#expandErrName}

`expandErrName (np)`

[parser.t](../file/parser.t.html)\[[1706](../source/parser.t.html#1706)\]

::: desc
Expand the error-message name to include the given qualifier. We\'ll
find the common parent of the core production and the given qualifier\'s
production, and use its text as the new error name.
:::

[]{#isAllEquivalent}

`isAllEquivalent (matchList)`

[parser.t](../file/parser.t.html)\[[2337](../source/parser.t.html#2337)\]

::: desc
Determine whether all matches in the matchList are impossible to
disambiguate.
:::

[]{#isMultiple}

`isMultiple ( )`

[parser.t](../file/parser.t.html)\[[2873](../source/parser.t.html#2873)\]

::: desc
Does this noun phrase refer to multiple objects structurally? This is
true if any the matches used plural words, or the determiner is All, or
we have a quantifier greater than 1.
:::

[]{#matchNameScope}

`matchNameScope (cmd, scope)`

[parser.t](../file/parser.t.html)\[[1884](../source/parser.t.html#1884)\]

::: desc
Find the vocabulary matches for a given noun phrase within a given scope
list. Add all of the matches to the given vector.
:::

[]{#matchVocab}

`matchVocab (cmd)`

[parser.t](../file/parser.t.html)\[[1750](../source/parser.t.html#1750)\]

::: desc
Get the list of objects matching the vocabulary words in our noun
phrase. Populates our \'matches\' property with a vector of matching
objects. This doesn\'t look at any of our qualifiers, or attempt to
disambiguate contextually; it simply finds everything in scope that the
noun phrase could refer to.
:::

[]{#matchVocabPoss}

`matchVocabPoss (cmd)`

[parser.t](../file/parser.t.html)\[[1950](../source/parser.t.html#1950)\]

::: desc
Match vocabulary for a possessive qualifier phrase.

Possessive matching has somewhat different rules than for ordinary noun
phrases.

First, possessive pronouns (HIS, HER, ITS, THEIR) \*can\* act like
reflexives, in that they can refer back to earlier clauses in the same
predicate: ASK BOB ABOUT HIS MOTHER. However, they can also refer to
previous commands: SEARCH BOB; TAKE HIS WALLET. The deciding factor is
whether or not there\'s an earlier noun phrase in the command that
matches in gender and number; if so, we use the reflexive meaning,
otherwise we use the external referent.

Second, the scope for ordinary noun phrases has to be expanded to
include the owners of the objects in scope. If we have a wallet that we
know belongs to Bob, we should be able to refer to it as \"Bob\'s
wallet\" whether or not Bob himself is in scope. So, for the purposes of
the possessive, Bob is in scope even if he wouldn\'t be for an ordinary
noun phrase.
:::

[]{#resolveAll}

`resolveAll (cmd)`

[parser.t](../file/parser.t.html)\[[2706](../source/parser.t.html#2706)\]

::: desc
Resolve ALL. This is called on a separate pass after selectObjects(),
because two-object verbs sometimes resolve ALL in one slot according to
the selection in the other slot.
:::

[]{#resolveReflexives}

`resolveReflexives (cmd)`

[parser.t](../file/parser.t.html)\[[2751](../source/parser.t.html#2751)\]

::: desc
Resolve reflexive pronouns. Our Command calls this AFTER resolving all
of the regular noun phrases, because reflexives refer back to other
nouns in the same command.
:::

[]{#selectObjects}

`selectObjects (cmd)`

[parser.t](../file/parser.t.html)\[[2219](../source/parser.t.html#2219)\]

::: desc
Select the objects from among the vocabulary matches. This narrows the
list of possible vocabulary matches for our noun phrase to find the
actual object or objects the player is referencing.

When this is called, we\'ve already filled in the match list with all
objects in scope that match the vocabulary of the core noun phrase
(including non-reflexive pronouns and ALL), and we\'ve applied any
possessive, locational, and exclusion qualifiers. What we\'re left with
is the list of in-scope objects that meet all of the specifications
contained in the entire noun phrase. In other words, we\'ve squeezed all
available information out of the noun phrase itself. If the result is
ambiguous, then, we\'ll have to look beyond the noun phrase, to the
broader semantic content of the overall command.

There are three possible \"goals\" for what our final object list should
look like after disambiguation. Only one goal applies to each particular
noun phrase; which it is depends on the grammar of the phrase:

1\. Definite mode: TAKE BOOK, TAKE THE BOOK, TAKE BOTH BOOKS, TAKE THE
THREE BOOKS. The goal in definite mode is to choose the given number of
objects, \*and\* to make sure that the player could \*only\* have meant
those precise objects. In other words, we\'re not allowed to make an
arbitrary choice: in natural language, the definite mode says that the
speaker believes the listener knows which \*particular\* object or
objects the speaker is referring to. If we\'re not absolutely sure which
objects the player is talking about, we have a disagreement with the
player\'s apparent expectations and must ask for clarification.

2\. Indefinite mode: TAKE A BOOK, TAKE ANY BOOK, TAKE TWO BOOKS. The
goal is to choose the given number of objects from the possible matches,
arbitrarily choosing from the available objects.

3\. Plural mode: TAKE BOOKS, TAKE THE BOOKS, TAKE ALL BOOKS. The goal
here is to choose all of the matching objects.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
