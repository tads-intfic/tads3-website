---
layout: docs
---
<span class="title">TopicPhrase</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2955](../source/parser.t.html#2955)\],
[english.t](../file/english.t.html)\[[2026](../source/english.t.html#2026)\]

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

TopicPhrase is a special kind of NounPhrase for topics (ASK ABOUT, TELL
ABOUT, TALK ABOUT, LOOK UP, etc). These phrases aren't resolved to
game-world objects the way ordinary noun phrases are, but instead are
resolved to conversation topic objects.

*Modified in
[english.t](../file/english.t.html)\[[2026](../source/english.t.html#2026)\]:*  
Modifications to TopicPhrase to make it work better with the
English-specific part of the library.

`class `**`TopicPhrase`**` :   `[`NounPhrase`](../object/NounPhrase.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TopicPhrase`**  
`         `[`NounPhrase`](../object/NounPhrase.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `NounPhrase` :  
` `[`contPrep`](../object/NounPhrase.html#contPrep)`  `[`contQual`](../object/NounPhrase.html#contQual)`  `[`coreProd`](../object/NounPhrase.html#coreProd)`  `[`determiner`](../object/NounPhrase.html#determiner)`  `[`disambigNameList`](../object/NounPhrase.html#disambigNameList)`  `[`errName`](../object/NounPhrase.html#errName)`  `[`errNameProd`](../object/NounPhrase.html#errNameProd)`  `[`exclusions`](../object/NounPhrase.html#exclusions)`  `[`locQual`](../object/NounPhrase.html#locQual)`  `[`locType`](../object/NounPhrase.html#locType)`  `[`matches`](../object/NounPhrase.html#matches)`  `[`objs`](../object/NounPhrase.html#objs)`  `[`ordinal`](../object/NounPhrase.html#ordinal)`  `[`parent`](../object/NounPhrase.html#parent)`  `[`possQual`](../object/NounPhrase.html#possQual)`  `[`prod`](../object/NounPhrase.html#prod)`  `[`pronoun`](../object/NounPhrase.html#pronoun)`  `[`quantifier`](../object/NounPhrase.html#quantifier)`  `[`role`](../object/NounPhrase.html#role)`  `[`tokens`](../object/NounPhrase.html#tokens)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`matchNameScope`](#matchNameScope)`  `[`matchVocab`](#matchVocab)`  `[`selectObjects`](#selectObjects)`  `

Inherited from `NounPhrase` :  
` `[`addContents`](../object/NounPhrase.html#addContents)`  `[`addExclusionItem`](../object/NounPhrase.html#addExclusionItem)`  `[`addLiteral`](../object/NounPhrase.html#addLiteral)`  `[`addLocation`](../object/NounPhrase.html#addLocation)`  `[`addMatches`](../object/NounPhrase.html#addMatches)`  `[`addOrdinal`](../object/NounPhrase.html#addOrdinal)`  `[`addPossessive`](../object/NounPhrase.html#addPossessive)`  `[`addQuantifier`](../object/NounPhrase.html#addQuantifier)`  `[`ambigError`](../object/NounPhrase.html#ambigError)`  `[`applyContQual`](../object/NounPhrase.html#applyContQual)`  `[`applyDisambig`](../object/NounPhrase.html#applyDisambig)`  `[`applyExclusion`](../object/NounPhrase.html#applyExclusion)`  `[`applyLocational`](../object/NounPhrase.html#applyLocational)`  `[`applyPossessive`](../object/NounPhrase.html#applyPossessive)`  `[`buildObjList`](../object/NounPhrase.html#buildObjList)`  `[`clone`](../object/NounPhrase.html#clone)`  `[`construct`](../object/NounPhrase.html#construct)`  `[`contains`](../object/NounPhrase.html#contains)`  `[`disambiguate`](../object/NounPhrase.html#disambiguate)`  `[`expandErrName`](../object/NounPhrase.html#expandErrName)`  `[`isAllEquivalent`](../object/NounPhrase.html#isAllEquivalent)`  `[`isMultiple`](../object/NounPhrase.html#isMultiple)`  `[`matchVocabPoss`](../object/NounPhrase.html#matchVocabPoss)`  `[`resolveAll`](../object/NounPhrase.html#resolveAll)`  `[`resolveReflexives`](../object/NounPhrase.html#resolveReflexives)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="matchNameScope"></span>

`matchNameScope (cmd, scope)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3064](../source/parser.t.html#3064)\],
[english.t](../file/english.t.html)\[[2027](../source/english.t.html#2027)\]

<div class="desc">

expand the error text to include the possessive qualifier

</div>

<span id="matchVocab"></span>

`matchVocab (cmd)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2963](../source/parser.t.html#2963)\]

<div class="desc">

Get the list of objects matching the vocabulary words in our noun
phrase. Populates our 'matches' property with a vector of matching
objects. This doesn't look at any of our qualifiers, or attempt to
disambiguate contextually; it simply finds everything in scope that the
noun phrase could refer to.

</div>

<span id="selectObjects"></span>

`selectObjects (cmd)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3088](../source/parser.t.html#3088)\]

<div class="desc">

return the list

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
