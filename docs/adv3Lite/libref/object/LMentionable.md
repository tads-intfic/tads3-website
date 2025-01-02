---
layout: docs
---
<span class="title">LMentionable</span><span class="type">class</span>

[english.t](../file/english.t.html)\[[44](../source/english.t.html#44)\]

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

LMentionable is the language-specific base class for Mentionable.

This is the root class for objects that the player can mention in
commands. The key feature of these objects is that they can match noun
phrases in command input. The library subclasses this base class with
Mentionable. This class provides the part of the class that varies by
language.

\[Required\]

`class `**`LMentionable`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`LMentionable`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`LMentionable`**  
`         `[`Mentionable`](../object/Mentionable.html)  
`                 `[`Thing`](../object/Thing.html)  
`                         `[`Actor`](../object/Actor.html)  
`                         `[`Button`](../object/Button.html)  
`                         `[`Collective`](../object/Collective.html)  
`                                 `[`DispensingCollective`](../object/DispensingCollective.html)  
`                         `[`Consultable`](../object/Consultable.html)  
`                         `[`Container`](../object/Container.html)  
`                                 `[`Booth`](../object/Booth.html)  
`                                 `[`OpenableContainer`](../object/OpenableContainer.html)  
`                                         `[`KeyedContainer`](../object/KeyedContainer.html)  
`                                         `[`LockableContainer`](../object/LockableContainer.html)  
`                         `[`Door`](../object/Door.html)  
`                                 `[`SecretDoor`](../object/SecretDoor.html)  
`                         `[`Fixture`](../object/Fixture.html)  
`                                 `[`CollectiveGroup`](../object/CollectiveGroup.html)  
`                                         `[`MobileCollectiveGroup`](../object/MobileCollectiveGroup.html)  
`                                 `[`Component`](../object/Component.html)  
`                                 `[`ContainerDoor`](../object/ContainerDoor.html)  
`                                 `[`Decoration`](../object/Decoration.html)  
`                                         `[`Distant`](../object/Distant.html)  
`                                         `[`RoomPart`](../object/RoomPart.html)  
`                                                 `[`Ceiling`](../object/Ceiling.html)  
`                                                 `[`DefaultWall`](../object/DefaultWall.html)  
`                                         `[`SensoryEmanation`](../object/SensoryEmanation.html)  
`                                                 `[`Noise`](../object/Noise.html)  
`                                                         `[`SimpleNoise`](../object/SimpleNoise.html)  
`                                                 `[`Odor`](../object/Odor.html)  
`                                                         `[`SimpleOdor`](../object/SimpleOdor.html)  
`                                         `[`Unthing`](../object/Unthing.html)  
`                                 `[`Enterable`](../object/Enterable.html)  
`                                 `[`Heavy`](../object/Heavy.html)  
`                         `[`Floor`](../object/Floor.html)  
`                         `[`Food`](../object/Food.html)  
`                         `[`Immovable`](../object/Immovable.html)  
`                         `[`Key`](../object/Key.html)  
`                         `[`Lever`](../object/Lever.html)  
`                         `[`MinorItem`](../object/MinorItem.html)  
`                         `[`Passage`](../object/Passage.html)  
`                                 `[`PathPassage`](../object/PathPassage.html)  
`                         `[`Player`](../object/Player.html)  
`                         `[`RearContainer`](../object/RearContainer.html)  
`                         `[`Room`](../object/Room.html)  
`                                 `[`OutdoorRoom`](../object/OutdoorRoom.html)  
`                         `[`Settable`](../object/Settable.html)  
`                                 `[`Dial`](../object/Dial.html)  
`                                         `[`NumberedDial`](../object/NumberedDial.html)  
`                         `[`SimpleAttachable`](../object/SimpleAttachable.html)  
`                                 `[`AttachableComponent`](../object/AttachableComponent.html)  
`                                 `[`NearbyAttachable`](../object/NearbyAttachable.html)  
`                                         `[`Attachable`](../object/Attachable.html)  
`                         `[`StairwayDown`](../object/StairwayDown.html)  
`                         `[`StairwayUp`](../object/StairwayUp.html)  
`                         `[`SubComponent`](../object/SubComponent.html)  
`                         `[`Surface`](../object/Surface.html)  
`                                 `[`Platform`](../object/Platform.html)  
`                                         `[`Bed`](../object/Bed.html)  
`                                         `[`Chair`](../object/Chair.html)  
`                         `[`Switch`](../object/Switch.html)  
`                                 `[`Flashlight`](../object/Flashlight.html)  
`                         `[`SymPassage`](../object/SymPassage.html)  
`                                 `[`SymDoor`](../object/SymDoor.html)  
`                                 `[`SymPathPassage`](../object/SymPathPassage.html)  
`                                 `[`SymStairway`](../object/SymStairway.html)  
`                         `[`Underside`](../object/Underside.html)  
`                         `[`Wearable`](../object/Wearable.html)  
`                 `[`Topic`](../object/Topic.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`acronymPluralPat`](#acronymPluralPat)`  `[`alphaCharPat`](#alphaCharPat)`  `[`aName`](#aName)`  `[`apostPluralPat`](#apostPluralPat)`  `[`apostSPat`](#apostSPat)`  `[`deannotatePat`](#deannotatePat)`  `[`dictComp`](#dictComp)`  `[`dummyName`](#dummyName)`  `[`elevenEighteenPat`](#elevenEighteenPat)`  `[`emptyVocabWords`](#emptyVocabWords)`  `[`esPluralPat`](#esPluralPat)`  `[`firstWordPat`](#firstWordPat)`  `[`heName`](#heName)`  `[`herName`](#herName)`  `[`hersName`](#hersName)`  `[`himName`](#himName)`  `[`iesPluralPat`](#iesPluralPat)`  `[`irregularPlurals`](#irregularPlurals)`  `[`isHer`](#isHer)`  `[`isHim`](#isHim)`  `[`isIt`](#isIt)`  `[`lastWordPat`](#lastWordPat)`  `[`leadingTagOrQuotePat`](#leadingTagOrQuotePat)`  `[`menPluralPat`](#menPluralPat)`  `[`objInName`](#objInName)`  `[`objIntoName`](#objIntoName)`  `[`objName`](#objName)`  `[`objOutOfName`](#objOutOfName)`  `[`oneLetterAnWordPat`](#oneLetterAnWordPat)`  `[`oneLetterWordPat`](#oneLetterWordPat)`  `[`ownerNamed`](#ownerNamed)`  `[`pluralPat`](#pluralPat)`  `[`posPat`](#posPat)`  `[`possAdj`](#possAdj)`  `[`possEnding`](#possEnding)`  `[`possNoun`](#possNoun)`  `[`prepList`](#prepList)`  `[`prepPhrasePat`](#prepPhrasePat)`  `[`prepWordPat`](#prepWordPat)`  `[`pronounMap`](#pronounMap)`  `[`properNamePat`](#properNamePat)`  `[`properPat`](#properPat)`  `[`reflexiveName`](#reflexiveName)`  `[`specialAOrAn`](#specialAOrAn)`  `[`tagOrQuotePat`](#tagOrQuotePat)`  `[`thatName`](#thatName)`  `[`thatObjName`](#thatObjName)`  `[`theName`](#theName)`  `[`theObjName`](#theObjName)`  `[`trimPat`](#trimPat)`  `[`truncationLength`](#truncationLength)`  `[`weakWordPat`](#weakWordPat)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addDictWord`](#addDictWord)`  `[`addVocab`](#addVocab)`  `[`addVocabWord`](#addVocabWord)`  `[`aNameFrom`](#aNameFrom)`  `[`aNameFromPoss`](#aNameFromPoss)`  `[`classInit`](#classInit)`  `[`contify`](#contify)`  `[`distinguishedName`](#distinguishedName)`  `[`ifPronoun`](#ifPronoun)`  `[`inheritVocab`](#inheritVocab)`  `[`initVocab`](#initVocab)`  `[`initVocabWord`](#initVocabWord)`  `[`locify`](#locify)`  `[`matchPronoun`](#matchPronoun)`  `[`pluralNameFrom`](#pluralNameFrom)`  `[`pluralWordFrom`](#pluralWordFrom)`  `[`possessify`](#possessify)`  `[`pronoun`](#pronoun)`  `[`removeVocabWord`](#removeVocabWord)`  `[`replaceVocab`](#replaceVocab)`  `[`theNameFrom`](#theNameFrom)`  `[`theNameIs`](#theNameIs)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="acronymPluralPat"></span>

`acronymPluralPat`

[english.t](../file/english.t.html)\[[1860](../source/english.t.html#1860)\]

<div class="desc">

pattern for acronyms and numbers

</div>

<span id="alphaCharPat"></span>

`alphaCharPat`

[english.t](../file/english.t.html)\[[1720](../source/english.t.html#1720)\]

<div class="desc">

*no description available*

</div>

<span id="aName"></span>

`aName`

[english.t](../file/english.t.html)\[[50](../source/english.t.html#50)\]

<div class="desc">

Get the indefinite form of the name, nominative case.

\[Required\]

</div>

<span id="apostPluralPat"></span>

`apostPluralPat`

[english.t](../file/english.t.html)\[[1857](../source/english.t.html#1857)\]

<div class="desc">

pattern for plurals that add apostrophe-s

</div>

<span id="apostSPat"></span>

`apostSPat`

[english.t](../file/english.t.html)\[[1179](../source/english.t.html#1179)\]

<div class="desc">

pattern for apostrophe-s words

</div>

<span id="deannotatePat"></span>

`deannotatePat`

[english.t](../file/english.t.html)\[[1292](../source/english.t.html#1292)\]

<div class="desc">

regular expression for removing annotations from a short name

</div>

<span id="dictComp"></span>

`dictComp`

[english.t](../file/english.t.html)\[[1863](../source/english.t.html#1863)\]

<div class="desc">

class property: the main dictionary StringComparator

</div>

<span id="dummyName"></span>

`dummyName`

[english.t](../file/english.t.html)\[[1881](../source/english.t.html#1881)\]

<div class="desc">

The dummyName is a property that displays nothing, for use when we want
to use an object in a sentence without actually displaying any text for
it (e.g. to provide a subject for a verb to agree with).

</div>

<span id="elevenEighteenPat"></span>

`elevenEighteenPat`

[english.t](../file/english.t.html)\[[1721](../source/english.t.html#1721)\]

<div class="desc">

*no description available*

</div>

<span id="emptyVocabWords"></span>

`emptyVocabWords`

[english.t](../file/english.t.html)\[[193](../source/english.t.html#193)\]

<div class="desc">

The VocabWords list for empty objects. These are words (usually
adjectives) that can be applied to an object that can be distinguished
from similar objects by its contents ("box of papers", "bucket of
water"), for times when it's empty. This is a list of VocabWords objects
for matching during parsing.

\[Required\]

</div>

<span id="esPluralPat"></span>

`esPluralPat`

[english.t](../file/english.t.html)\[[1848](../source/english.t.html#1848)\]

<div class="desc">

pattern for nouns with -es plurals

</div>

<span id="firstWordPat"></span>

`firstWordPat`

[english.t](../file/english.t.html)\[[1716](../source/english.t.html#1716)\]

<div class="desc">

*no description available*

</div>

<span id="heName"></span>

`heName`

[english.t](../file/english.t.html)\[[120](../source/english.t.html#120)\]

<div class="desc">

The subjective-case pronoun for this object. We'll try to infer the
pronoun from the gender and number flags: if plural, 'they'; if isHim,
'he'; if isHer 'she'; otherwise 'it'.

</div>

<span id="herName"></span>

`herName`

[english.t](../file/english.t.html)\[[135](../source/english.t.html#135)\]

<div class="desc">

The possessive adjective pronoun for this object. We'll try to infer the
pronoun from the gender and number flags: if plural, 'their'; if isHim,
'his'; if isHer, 'her'; otherwise 'its'.

</div>

<span id="hersName"></span>

`hersName`

[english.t](../file/english.t.html)\[[142](../source/english.t.html#142)\]

<div class="desc">

The possessive noun pronoun for this object. We'll try to infer the
pronoun from the gender and number flags: if plural, 'theirs'; if isHim,
'his'; if isHer, 'hers'; otherwise 'its'.

</div>

<span id="himName"></span>

`himName`

[english.t](../file/english.t.html)\[[127](../source/english.t.html#127)\]

<div class="desc">

The objective-case pronoun for this object. We'll try to infer the
pronoun from the gender and number flags: if plural, 'them'; if isHim,
'him'; if isHer 'her'; otherwise 'it'.

</div>

<span id="iesPluralPat"></span>

`iesPluralPat`

[english.t](../file/english.t.html)\[[1851](../source/english.t.html#1851)\]

<div class="desc">

pattern for nouns y -\> -ies plurals)

</div>

<span id="irregularPlurals"></span>

`irregularPlurals`

[english.t](../file/english.t.html)\[[1842](../source/english.t.html#1842)\]

<div class="desc">

lookup table for irregular plurals - we build this at preinit time

</div>

<span id="isHer"></span>

`isHer`

[english.t](../file/english.t.html)\[[223](../source/english.t.html#223)\]

<div class="desc">

*no description available*

</div>

<span id="isHim"></span>

`isHim`

[english.t](../file/english.t.html)\[[222](../source/english.t.html#222)\]

<div class="desc">

Determine the gender of this object

</div>

<span id="isIt"></span>

`isIt`

[english.t](../file/english.t.html)\[[230](../source/english.t.html#230)\]

<div class="desc">

By default an object is neuter if it's neither masculine nor feminine,
but that can be overridden in cases where something might be referred to
as either 'him' or 'it' for example.

</div>

<span id="lastWordPat"></span>

`lastWordPat`

[english.t](../file/english.t.html)\[[1779](../source/english.t.html#1779)\]

<div class="desc">

pattern for pulling the last word out of a phrase

</div>

<span id="leadingTagOrQuotePat"></span>

`leadingTagOrQuotePat`

[english.t](../file/english.t.html)\[[1715](../source/english.t.html#1715)\]

<div class="desc">

*no description available*

</div>

<span id="menPluralPat"></span>

`menPluralPat`

[english.t](../file/english.t.html)\[[1854](../source/english.t.html#1854)\]

<div class="desc">

pattern for words ending in 'men' (chairman, fireman, etc)

</div>

<span id="objInName"></span>

`objInName`

[english.t](../file/english.t.html)\[[401](../source/english.t.html#401)\]

<div class="desc">

The prepositional phrase for something located inside this object, e.g.
'in the box' or 'on the table

</div>

<span id="objIntoName"></span>

`objIntoName`

[english.t](../file/english.t.html)\[[408](../source/english.t.html#408)\]

<div class="desc">

The prepositional phrase for something being moved inside this object,
e.g. 'into the box' or 'onto the table

</div>

<span id="objName"></span>

`objName`

[english.t](../file/english.t.html)\[[79](../source/english.t.html#79)\]

<div class="desc">

Get the objective form of the name. The regular 'name' property gives
the subjective form - i.e., the form that appears as the subject of a
verb. 'objName' gives the form that appears as a direct or indirect
object. Unlike many languages, English doesn't further distinguish cases
for the different roles of verb objects; they're all just "objective".
English also doesn't inflect regular nouns at all for these two cases -
the objective form of "book" or "key" or "widget" is identical to the
subjective form. The only place where case makes a difference in English
is pronouns: "I" and "me", "he" and "him", etc. So, this routine simply
returns the subjective name string by default, which will work for any
object with a regular noun as its name. Generally, this will only need
to be overridden for the player character object, which usually uses a
pronoun as its name ("you" for a second-person game, "I" for a
first-person game).

</div>

<span id="objOutOfName"></span>

`objOutOfName`

[english.t](../file/english.t.html)\[[414](../source/english.t.html#414)\]

<div class="desc">

The pronominal phrase for something leaving this object, e.g. 'out of
the box'

</div>

<span id="oneLetterAnWordPat"></span>

`oneLetterAnWordPat`

[english.t](../file/english.t.html)\[[1719](../source/english.t.html#1719)\]

<div class="desc">

*no description available*

</div>

<span id="oneLetterWordPat"></span>

`oneLetterWordPat`

[english.t](../file/english.t.html)\[[1718](../source/english.t.html#1718)\]

<div class="desc">

*no description available*

</div>

<span id="ownerNamed"></span>

`ownerNamed`

[english.t](../file/english.t.html)\[[200](../source/english.t.html#200)\]

<div class="desc">

Flag, do we want our theName to be constructed from our owner's name,
e.g. "Bob's wallet" rather than "the wallet".

</div>

<span id="pluralPat"></span>

`pluralPat`

[english.t](../file/english.t.html)\[[1299](../source/english.t.html#1299)\]

<div class="desc">

pattern for plural annotations

</div>

<span id="posPat"></span>

`posPat`

[english.t](../file/english.t.html)\[[1296](../source/english.t.html#1296)\]

<div class="desc">

pattern for part-of-speech annotations

</div>

<span id="possAdj"></span>

`possAdj`

[english.t](../file/english.t.html)\[[93](../source/english.t.html#93)\]

<div class="desc">

Get the possessive adjective-like form of the name. This is the form of
the name we use as a qualifier phrase when showing an object we possess.
The English rule for ordinary nouns is just to add apostrophe-s to the
name: "Bob" becomes "Bob's", "Orc guard" becomes "Orc guard's". This
works for nearly all nouns in English, but you can override this if the
rule produces the wrong result for a particular name. But if the noun is
plural and its name ends with an 's' we should just add an apostrophe -
so we do this via the possEnding property.

However, it does vary for pronouns. By default, we check the name to see
if it's a pronoun, and apply the correct pronoun mapping if so.

</div>

<span id="possEnding"></span>

`possEnding`

[english.t](../file/english.t.html)\[[115](../source/english.t.html#115)\]

<div class="desc">

The correct ending for our possessive form. This is usually apostrophe-s
for an English noun, except where the noun is plural and ends with an
's', which case we just want an apostrophe; for example "the clerks'
lunch" but "the women's dinner".

</div>

<span id="possNoun"></span>

`possNoun`

[english.t](../file/english.t.html)\[[108](../source/english.t.html#108)\]

<div class="desc">

Get the possessive noun-like form of the name. This is the form of the
possessive we use in a genetive "of" phrase or a "being" predicate, such
as "that's a book of Bob's" or "that book is Bob's". In English, this is
almost always identical to the possessive adjective form for a regular
noun - it's just the same apostrophe-s word as the adjective form.

However, it diverges for some of the pronouns: "my" vs "mine", "her" vs
"hers", "their" vs "theirs", "our" vs "ours". We check the name to see
if it's a pronoun, and apply the appropriate pronoun mapping if so.

</div>

<span id="prepList"></span>

`prepList`

[english.t](../file/english.t.html)\[[1289](../source/english.t.html#1289)\]

<div class="desc">

preposition list, as a regular expression OR pattern

</div>

<span id="prepPhrasePat"></span>

`prepPhrasePat`

[english.t](../file/english.t.html)\[[1775](../source/english.t.html#1775)\]

<div class="desc">

if we need to add 's as the plural ending - this should be either a
simple straight quote ('\\'), or HTML markup for a curly quote regular
expression for separating the main phrase and prepositional phrase from
a "noun prep noun" phrase

</div>

<span id="prepWordPat"></span>

`prepWordPat`

[english.t](../file/english.t.html)\[[1282](../source/english.t.html#1282)\]

<div class="desc">

Regular expression pattern for matching a single preposition word. A
word is a preposition if it's in our preposition list, OR it's annotated
explicitly with "\[prep\]" at the end.

</div>

<span id="pronounMap"></span>

`pronounMap`

[english.t](../file/english.t.html)\[[1873](../source/english.t.html#1873)\]

<div class="desc">

class property: pronoun lookup table (built during preinit)

</div>

<span id="properNamePat"></span>

`properNamePat`

[english.t](../file/english.t.html)\[[857](../source/english.t.html#857)\]

<div class="desc">

pattern for detecting a proper name - each word starts with a capital
letter

</div>

<span id="properPat"></span>

`properPat`

[english.t](../file/english.t.html)\[[1305](../source/english.t.html#1305)\]

<div class="desc">

pattern for proper nouns: starts with a capital, and at least one
lower-case letter within

</div>

<span id="reflexiveName"></span>

`reflexiveName`

[english.t](../file/english.t.html)\[[161](../source/english.t.html#161)\]

<div class="desc">

The reflexive name as a pronoun, e.g. himself, herself, itself

</div>

<span id="specialAOrAn"></span>

`specialAOrAn`

[english.t](../file/english.t.html)\[[1711](../source/english.t.html#1711)\]

<div class="desc">

lookup table of special-case a/an words (we build this automatically
during classInit from CustomVocab objects)

</div>

<span id="tagOrQuotePat"></span>

`tagOrQuotePat`

[english.t](../file/english.t.html)\[[1714](../source/english.t.html#1714)\]

<div class="desc">

pre-compile some regular expressions for aName

</div>

<span id="thatName"></span>

`thatName`

[english.t](../file/english.t.html)\[[150](../source/english.t.html#150)\]

<div class="desc">

The demonstrative pronoun for this object, nominative case. For a
singular gendered object, or a first- or second-person object, we'll use
the regular pronoun (I, you, he, her). For any other singular object,
we'll use 'that', and for plural, 'those'.

</div>

<span id="thatObjName"></span>

`thatObjName`

[english.t](../file/english.t.html)\[[158](../source/english.t.html#158)\]

<div class="desc">

The demonstrative pronoun, objective case. For a singular gendered
object, or a first- or second-person object, we'll use the regular
pronoun (me, you, him, her). For any other singular object, we'll use
'that', and for plural, 'those'.

</div>

<span id="theName"></span>

`theName`

[english.t](../file/english.t.html)\[[57](../source/english.t.html#57)\]

<div class="desc">

Get the definite form of the name, nominative case.

\[Required\]

</div>

<span id="theObjName"></span>

`theObjName`

[english.t](../file/english.t.html)\[[60](../source/english.t.html#60)\]

<div class="desc">

Definite name, objective case.

</div>

<span id="trimPat"></span>

`trimPat`

[english.t](../file/english.t.html)\[[1845](../source/english.t.html#1845)\]

<div class="desc">

regular expression for trimming leading and trailing spaces

</div>

<span id="truncationLength"></span>

`truncationLength`

[english.t](../file/english.t.html)\[[1869](../source/english.t.html#1869)\]

<div class="desc">

class property: the truncation length to use for the main dictionary
StringComparator.

</div>

<span id="weakWordPat"></span>

`weakWordPat`

[english.t](../file/english.t.html)\[[1285](../source/english.t.html#1285)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addDictWord"></span>

`addDictWord (w, partOfSpeech, matchFlags)`

[english.t](../file/english.t.html)\[[1185](../source/english.t.html#1185)\]

<div class="desc">

Add a word to the dictionary and to our vocabulary list for the given
match flags.

</div>

<span id="addVocab"></span>

`addVocab (voc)`

[english.t](../file/english.t.html)\[[1229](../source/english.t.html#1229)\]

<div class="desc">

Add additional vocab words to those already in use for this object. If
we specify the name part this will replace the existing name for the
object.

</div>

<span id="addVocabWord"></span>

`addVocabWord (word, matchFlags)`

[english.t](../file/english.t.html)\[[1272](../source/english.t.html#1272)\]

<div class="desc">

*no description available*

</div>

<span id="aNameFrom"></span>

`aNameFrom (str)`

[english.t](../file/english.t.html)\[[1493](../source/english.t.html#1493)\]

<div class="desc">

Apply an indefinite article ("a box", "an orange", "some lint") to the
given name string 'str' for this object. We'll try to figure out which
indefinite article to use based on what kind of noun phrase we use for
our name (singular, plural, or a "mass noun" like "lint"), and our
spelling.

By default, we'll use the article "a" if the name starts with a
consonant, or "an" if it starts with a vowel.

If the name starts with a "y", we'll look at the second letter; if it's
a consonant, we'll use "an", otherwise "a" (hence "an yttrium block" but
"a yellow brick").

If the object is marked as a mass noun or having plural usage, we will
use "some" as the article ("some water", "some shrubs"). If the string
has a possessive qualifier, we'll make that "some of" instead ("some of
Bob's water").

Some objects will want to override the default behavior, because the
lexical rules about when to use "a" and "an" are not without exception.
For example, silent-"h" words ("honor") are written with "an", and "h"
words with a pronounced but weakly stressed initial "h" are sometimes
used with "an" ("an historian"). Also, some 'y' words might not follow
the generic 'y' rule.

'U' words are especially likely not to follow any lexical rule - any 'u'
word that sounds like it starts with 'y' should use 'a' rather than
'an', but there's no good way to figure that out just looking at the
spelling (consider "unassuming", " unimportant word", or "a unanimous
decision" and "an unassuming man"). We simply always use 'an' for a word
starting with 'u', but this will have to be overridden when the 'u'
sounds like 'y'.

</div>

<span id="aNameFromPoss"></span>

`aNameFromPoss (str)`

[english.t](../file/english.t.html)\[[1698](../source/english.t.html#1698)\]

<div class="desc">

Get the indefinite name for a version of our name that has a possessive
qualifier. The caller is responsible for ensuring that the possessive is
already in a suitable format for adding an indefinite article - usually
something like "book of Bob's", so that we can turn this into "a book of
Bob's".

In English, there's a special case where the regular indefinite name
format differs from the possessive format, which is why we need this
separate method in the English module. Specifically, if the basic name
is a plural or mass noun, we have to use "some of" in the possessive
case, rather than the usual "some": "some water" in the normal case, but
"some of Bob's water" in the possessive case.

</div>

<span id="classInit"></span>

`classInit ( )`

[english.t](../file/english.t.html)\[[268](../source/english.t.html#268)\]

<div class="desc">

Class initialization. The library calls this at preinit time, before
calling construct() on any instances, to set up any pre-built tables in
the class. There's no required implementation here - this is purely for
the language module's convenience to do any initial set-up work.

For the English version, we take the opportunity to set up the main
parser Dictionary object, and initialize the plural table. The plural
table is a lookup table we build from the plural list, for quicker
access during execution.

\[Required\]

</div>

<span id="contify"></span>

`contify (obj, str)`

[english.t](../file/english.t.html)\[[1454](../source/english.t.html#1454)\]

<div class="desc">

Apply a contents qualifier to the name for my container. 'obj' is the
object (my container), and 'str' is the name under construction. We'll
add the appropriate prepositional phrase: "the bucket OF WATER".

</div>

<span id="distinguishedName"></span>

`distinguishedName (article, distinguishers)`

[english.t](../file/english.t.html)\[[1321](../source/english.t.html#1321)\]

<div class="desc">

Generate the "distinguished name" for this object, given a list of
Distinguisher objects that we're using to tell it apart from others in a
list.

'article' indicates which kind of article to use: Definite ("the"),
Indefinite ("a", "an", "some"), or nil (no article). 'distinguishers' is
a list of Distinguisher object that are being used to identify this
object uniquely. Our job is to elaborate the object's name with all of
the qualifying phrases implied by the distinguishers.

\[Required\]

</div>

<span id="ifPronoun"></span>

`ifPronoun (prop, str)`

[english.t](../file/english.t.html)\[[168](../source/english.t.html#168)\]

<div class="desc">

Pronoun-or-name mapper. If our name is a pronoun, return the given
pronoun name property. Otherwise return the given name string.

</div>

<span id="inheritVocab"></span>

`inheritVocab ( )`

[english.t](../file/english.t.html)\[[870](../source/english.t.html#870)\]

<div class="desc">

Inherit vocab from our superclasses according to the following scheme:  
1. A + sign in the name section will be replaced with the name from our
superclass.  
2 Unless the adjective and nouns section start with a -, any adjectives
and nouns from our superclasses vocab will be added to the respective
section.  
3 If our pronouns section is empty or contains a +, inherit pronouns
from our superclass, otherwise leave it unchanged.

</div>

<span id="initVocab"></span>

`initVocab ( )`

[english.t](../file/english.t.html)\[[546](../source/english.t.html#546)\]

<div class="desc">

initVocab() - Parse the 'vocab' string. This is called during preinit
and on dynamically constructing a new Mentionable, to initialize up the
object's vocabulary for use by the parser.

The vocab string is designed to make it as quick and easy as possible to
define an object's name and vocabulary. To the extent possible, we
derive the vocabulary from the name, so for many objects the whole
definition will just look like the object name. However, we also make it
possible to define as much extra vocabulary beyond the name as needed,
and to control the way the words making up the name are handled in terms
of their parts of speech.

The 'vocab' string has this overall syntax:

  
vocab = 'article short name; adjectives; nouns; pronouns'

You don't have to include all of the parts; you can simply stop when
you're done, so it's valid, for example, to just write the 'short name'
part. It's also fine to include an empty part: if you have extra nouns
to list, but no adjectives, you can say 'short name;;nouns'.

The 'article' is optional. This can be one of 'a', 'an', 'some', or
'()'. If it's 'a' or 'an', and this differs from what we'd automatically
generate based on the first word of the short name, we automatically
enter the first word into the list of special cases for a/an words. If
it's 'some', we automatically set massNoun=true for the object. If it's
'-', we set qualified=true ('()' means that the name doesn't take an
article at all).

Note that if you want to use 'a', 'an', 'some', or '()' as the first
word of the actual short name, you simply need to add the desired
article in front of it: 'an a tile from a scrabble set'.

The short name gives name that we display whenever the parser needs to
show the object in a list, an announcement, etc.

If the short name consists entirely of capitalized words (that is, if
every word starts with a capital letter), and the 'proper' property
isn't explicitly set for this object, we'll set 'proper' to true to
indicate that this is a proper name.

We also try to infer the object's vocabulary words from the short name.
We first break off any prepositional phrases, if we see the prepositions
'to', 'of', 'from', 'with', or 'for'. We then assume that the FIRST
phrase is of the form 'adj adj adj... noun' - that is, zero or more
adjectives followed by a noun; and that the SECOND and subsequent
phrases are entirely adjectives. You can override the part-of-speech
inference by putting the actual part of speech immediately after a word
(with no spaces) in square brackets: 'John\[n\] Smith' overrides the
assumption that 'John' is an adjective. Use \[n\] to make a word a noun,
\[adj\] to make it an adjective, \[prep\] to make it a preposition, and
\[pl\] to make it a plural. You can also add \[weak\] to make it a weak
token (one on which the object won't be matched alone), or equivalently,
enclose the word in parentheses. These annotations are stripped out of
the name when it's displayed.

We consider ALL of the words in the short name's second and subsequent
phrases (the prepositional phrases) to be adjectives, except for the
preposition words themselves, which we consider to be prepositions. This
is because these phrases all effectively qualify the main phrase, so we
don't consider them as "important" to the object's name. This helps the
parser be smarter about disambiguation, without bothering the user with
clarifying questions all the time. When the player types "garage", we'll
match the "key to the garage" object as well as the "garage" object, but
if both objects are present, we'll know to choose the garage over the
key because the noun usage is a better match to what the user typed.

We automatically ignore articles (a, an, the, and some) as vocabulary
words when they immediately follow prepositions in the short name. For
example, in 'key to the garage', we omit 'the' as a vocabulary word for
the object because it immediately follows 'to'. We also omit 'to', since
we don't enter the prepositions as vocabulary. We do the complementary
work on parsing, by ignoring these words when we see them in the command
input in the proper positions. These words are really structural parts
of the grammar rather than parts of the object names, so the parser can
do a better job of recognizing noun phrases by considering the
grammatical functions of these words.

For many (if not most) objects, the short name won't be enough to state
all of the vocabulary words you want to recognize for the object in
command input. Trying to cram every possible vocabulary word into the
short name would usually make for an unwieldy display name. Fortunately,
it's easy to add input vocabulary words that aren't displayed in the
name. Just add a semicolon, then the adjectives, then another semicolon,
then the nouns.

Note that there's no section for adding extra prepositions, but you can
still add them. Put the prepositions in the adjective list, and
explicitly annotate each one as a preposition by adding "\[prep\]" at
the end, as in "to\[prep\]".

Next, there's the matter of plurals. For each noun, we'll try to
automatically infer a plural according to the spelling pattern. We also
have a table of common irregular plurals that we'll apply. For irregular
words that aren't in the table, you can override the spelling-based
plural by putting the real plural in braces immediately after the noun,
with no spaces. Start with a hyphen to specify a suffix; otherwise just
write the entire plural word. For example, you could write 'man{men}' or
'child{-ren}' (although these particular irregular plurals are already
in our special-case list, so the custom plurals aren't actually needed
in these cases). You can use plural annotations in the short name as
well as the extra noun list; they'll be removed from the short name when
it's displayed. We don't try to generate a plural for a proper noun (a
noun that starts with a capital letter), but you can provide explicit
plurals.

For words longer than the truncation length in the string comparator,
you can set the word to match exactly by adding '=' as the last
character. This also requires exact character matching, rather than
allowing accented character approximations (e.g., matching 'a' in the
input to 'a-umlaut' in the dictionary).

We automatically assume that plurals should be matched without
truncation. This is because English plurals are usually formed with
suffixes; if the user wants to enter a plural, they'll have to type the
whole word anyway, because that's the only way you make it all the way
to the suffix. You can override this assumption for a given plural by
adding '~' at the end of the plural. This explicitly allows truncated
and character approximation matches.

Finally, the 'pronouns' section gives a list of the pronouns that this
word can match. You can include 'it', 'him', 'her', and 'them' in this
section. We'll automatically set the isIt, isHim, isHer, and plural
properties to true when we see the corresponding pronouns.

\[Required\]

</div>

<span id="initVocabWord"></span>

`initVocabWord (w, matchFlags)`

[english.t](../file/english.t.html)\[[982](../source/english.t.html#982)\]

<div class="desc">

Initialize vocabulary for one word from the 'vocab' list. 'w' is the
word text, with optional part-of-speech and plural-form annotations
(\[n\], \[adj\], \[prep\], \[pl\], (-s)). It can also have a special
flag character as its final character: '=' for an exact match (no
truncation and no character approximations), or '~' for fuzzy matches
(truncation and approximation allowed).

'matchFlags' is a combination of MatchXxx values. This should minimally
provide the part of speech as one of MatchAdj, MatchNoun, or
MatchPlural. You can also include MatchNoTrunc to specify that user
input can only match this word without any truncation, and MatchNoApprox
to specify that input can only match without character approximations
(e.g., 'a' matching 'a-umlaut').

</div>

<span id="locify"></span>

`locify (obj, str)`

[english.t](../file/english.t.html)\[[1439](../source/english.t.html#1439)\]

<div class="desc">

Apply a locational qualifier to the name for an object contained within
me. 'obj' is the object (something among my contents), and 'str' is the
name under construction. We'll add the appropriate prepositional phrase:
"the box UNDER THE TABLE".

</div>

<span id="matchPronoun"></span>

`matchPronoun (p)`

[english.t](../file/english.t.html)\[[344](../source/english.t.html#344)\]

<div class="desc">

Match a pronoun. This returns true if this object is a valid antecedent
for this pronoun grammatically: that is, it matches the pronoun in
gender, number, and any other attributes the pronoun carries.

English pronouns have gender and number. (Some other languages have
other attributes, such as animation - whether or not they refer to
living creatures.)

This routine doesn't tell us if the object is a \*current\* antecedent
for the pronoun. The current antecedent is a function of the command
history. This routine only tells us whether this object is a match in
terms of grammatical attributes for the pronoun.

Note that this routine can and should ignore first-person and
second-person pronouns. Those pronouns are relative to the speaker, so
the parser handles them directly.

\[Required\]

</div>

<span id="pluralNameFrom"></span>

`pluralNameFrom (str)`

[english.t](../file/english.t.html)\[[1738](../source/english.t.html#1738)\]

<div class="desc">

Get the plural form of the given name. If the string ends in
vowel-plus-'y' or anything other than 'y', we'll add an 's'; otherwise
we'll replace the 'y' with 'ies'. We also handle abbreviations and
individual letters specially.

This can only deal with simple adjective-noun forms. For more
complicated forms, particularly for compound words, it must be
overridden (e.g., "Attorney General" -\> "Attorneys General",
"man-of-war" -\> "men-of-war"). We recognize a fairly extensive set of
special cases (child -\> children, man -\> men), as listed in the
irregularPlural lists in any CustomVocab objects. Add new items to the
irregular plural list by creating one or more CustomVocab objects with
their own irregularPlural lists.

</div>

<span id="pluralWordFrom"></span>

`pluralWordFrom (str, apost)`

[english.t](../file/english.t.html)\[[1787](../source/english.t.html#1787)\]

<div class="desc">

Get the plural of the given word. If there's an irregular plural entry
for the word, we return that; otherwise we infer the plural from the
spelling. 'apost' is the string to use for an apostrophe ('&rsquo;').

</div>

<span id="possessify"></span>

`possessify (article, obj, str)`

[english.t](../file/english.t.html)\[[1418](../source/english.t.html#1418)\]

<div class="desc">

Generate a possessive name for an object that we own, given a string
under construction for the object's name. 'obj' is the object we're
possessing ('self' is the owner), and 'str' is the name string under
construction, without any possessive or article qualifiers yet.

Note that we must add to 'str', not the base name of the object. We
might be using a variation on the name (such as the disambiguation
name), or we might have already adorned the name with other qualifiers.

'article' specifies the usage: Definite, Indefinite, or nil for no
article. We DON'T actually add the article here; rather, this tells us
the form that the name will take when the caller is done with it, so we
should use a suitable form of the possessive phrasing to the extent it
varies by article. In English, it does vary. In the Definite case, the
possessive effectively replaces the article: "the book" becomes "Bob's
book". In the Indefinite case, the possessive has to be rephrased
prepositionally so that the article can still be included: "a book"
becomes "a book of Bob's". Mass nouns are a further special case: "some
water" becomes "some of Bob's water".

The default behavior is as follows. In Definite mode, we return
"\<name\>'s \<string\>". In Indefinite mode, we return "\<string\> of
\<name\>" (for a final result like "a book of Bob's").

</div>

<span id="pronoun"></span>

`pronoun ( )`

[english.t](../file/english.t.html)\[[364](../source/english.t.html#364)\]

<div class="desc">

Get the pronoun to use for this object. This returns the Pronoun object
suitable for representing this object in a generated message.

\[Required\]

</div>

<span id="removeVocabWord"></span>

`removeVocabWord (word, matchFlags?)`

[english.t](../file/english.t.html)\[[1263](../source/english.t.html#1263)\]

<div class="desc">

Remove a word from this object's vocabulary. If the matchFlags parameter
is supplied it should be one of MatchNoun, MatchAdj, MatchPrep or
MatchPlural, in which case only VocabWords matching the corresponding
part of speech (as well as word) will be removed.

</div>

<span id="replaceVocab"></span>

`replaceVocab (voc)`

[english.t](../file/english.t.html)\[[1209](../source/english.t.html#1209)\]

<div class="desc">

reinitialize the vocab of this object from scratch, using the string voc
in place of the original vocab property.

</div>

<span id="theNameFrom"></span>

`theNameFrom (str)`

[english.t](../file/english.t.html)\[[210](../source/english.t.html#210)\]

<div class="desc">

Get the definite form of the name, given the name string under
construction. The English default is "the \<name\>", unless the object
is already qualified, in which case it's just the base name. If,
however, we're ownerNamed and we have a nominalOwner, return our owner's
possessive adjective followed by our name (e.g. "Bob's wallet").

</div>

<span id="theNameIs"></span>

`theNameIs ( )`

[english.t](../file/english.t.html)\[[238](../source/english.t.html#238)\]

<div class="desc">

The name with a definite article (or just the proper or qualified name)
followed by the appropriate form of the verb 'to be'. This can be useful
for producing sentences of which this object is the subject.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
