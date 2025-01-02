---
---
<span class="title">Topic</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[9994](../source/thing.t.html#9994)\],
[english.t](../file/english.t.html)\[[2093](../source/english.t.html#2093)\]

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

A Topic is something that the player character can refer to in the
course of conversation or look up in a book, but which is not
implemented as a physical object in the game. Topics can be used for
abstract concepts such as life, liberty and happiness, or for physical
objects that are referred to but not actually implemented as Things in
the game, such as Alfred the Great or the Great Wall of China.

*Modified in
[english.t](../file/english.t.html)\[[2093](../source/english.t.html#2093)\]:*  
Modification to the Topic class so that when constructing a new Topic a
separate apostrophe-S token is concatenated with the previous word when
storing the name (which undoes the effect on building the name of what
the English-language tokenizer does with apostrophe-S).

`class `**`Topic`**` :   `[`Mentionable`](../object/Mentionable.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Topic`**  
`         `[`Mentionable`](../object/Mentionable.html)  
`                 `[`LMentionable`](../object/LMentionable.html)  
`                         object`  
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

` `[`familiar`](#familiar)`  `[`known`](#known)`  `

Inherited from `Mentionable` :  
` `[`ambiguouslyPlural`](../object/Mentionable.html#ambiguouslyPlural)`  `[`disambigGroup`](../object/Mentionable.html#disambigGroup)`  `[`disambigMatchPhrases`](../object/Mentionable.html#disambigMatchPhrases)`  `[`disambigName`](../object/Mentionable.html#disambigName)`  `[`disambigOrder`](../object/Mentionable.html#disambigOrder)`  `[`distinguishByContents`](../object/Mentionable.html#distinguishByContents)`  `[`isHer`](../object/Mentionable.html#isHer)`  `[`isHim`](../object/Mentionable.html#isHim)`  `[`isIt`](../object/Mentionable.html#isIt)`  `[`massNoun`](../object/Mentionable.html#massNoun)`  `[`matchPhrases`](../object/Mentionable.html#matchPhrases)`  `[`matchPhrasesExclude`](../object/Mentionable.html#matchPhrasesExclude)`  `[`name`](../object/Mentionable.html#name)`  `[`nominalContents`](../object/Mentionable.html#nominalContents)`  `[`person`](../object/Mentionable.html#person)`  `[`plural`](../object/Mentionable.html#plural)`  `[`proper`](../object/Mentionable.html#proper)`  `[`qualified`](../object/Mentionable.html#qualified)`  `[`roomTitle`](../object/Mentionable.html#roomTitle)`  `[`states`](../object/Mentionable.html#states)`  `[`vocab`](../object/Mentionable.html#vocab)`  `[`vocabWords`](../object/Mentionable.html#vocabWords)`  `

Inherited from `LMentionable` :  
` `[`acronymPluralPat`](../object/LMentionable.html#acronymPluralPat)`  `[`alphaCharPat`](../object/LMentionable.html#alphaCharPat)`  `[`aName`](../object/LMentionable.html#aName)`  `[`apostPluralPat`](../object/LMentionable.html#apostPluralPat)`  `[`apostSPat`](../object/LMentionable.html#apostSPat)`  `[`deannotatePat`](../object/LMentionable.html#deannotatePat)`  `[`dictComp`](../object/LMentionable.html#dictComp)`  `[`dummyName`](../object/LMentionable.html#dummyName)`  `[`elevenEighteenPat`](../object/LMentionable.html#elevenEighteenPat)`  `[`emptyVocabWords`](../object/LMentionable.html#emptyVocabWords)`  `[`esPluralPat`](../object/LMentionable.html#esPluralPat)`  `[`firstWordPat`](../object/LMentionable.html#firstWordPat)`  `[`heName`](../object/LMentionable.html#heName)`  `[`herName`](../object/LMentionable.html#herName)`  `[`hersName`](../object/LMentionable.html#hersName)`  `[`himName`](../object/LMentionable.html#himName)`  `[`iesPluralPat`](../object/LMentionable.html#iesPluralPat)`  `[`irregularPlurals`](../object/LMentionable.html#irregularPlurals)`  `[`lastWordPat`](../object/LMentionable.html#lastWordPat)`  `[`leadingTagOrQuotePat`](../object/LMentionable.html#leadingTagOrQuotePat)`  `[`menPluralPat`](../object/LMentionable.html#menPluralPat)`  `[`objInName`](../object/LMentionable.html#objInName)`  `[`objIntoName`](../object/LMentionable.html#objIntoName)`  `[`objName`](../object/LMentionable.html#objName)`  `[`objOutOfName`](../object/LMentionable.html#objOutOfName)`  `[`oneLetterAnWordPat`](../object/LMentionable.html#oneLetterAnWordPat)`  `[`oneLetterWordPat`](../object/LMentionable.html#oneLetterWordPat)`  `[`ownerNamed`](../object/LMentionable.html#ownerNamed)`  `[`pluralPat`](../object/LMentionable.html#pluralPat)`  `[`posPat`](../object/LMentionable.html#posPat)`  `[`possAdj`](../object/LMentionable.html#possAdj)`  `[`possEnding`](../object/LMentionable.html#possEnding)`  `[`possNoun`](../object/LMentionable.html#possNoun)`  `[`prepList`](../object/LMentionable.html#prepList)`  `[`prepPhrasePat`](../object/LMentionable.html#prepPhrasePat)`  `[`prepWordPat`](../object/LMentionable.html#prepWordPat)`  `[`pronounMap`](../object/LMentionable.html#pronounMap)`  `[`properNamePat`](../object/LMentionable.html#properNamePat)`  `[`properPat`](../object/LMentionable.html#properPat)`  `[`reflexiveName`](../object/LMentionable.html#reflexiveName)`  `[`specialAOrAn`](../object/LMentionable.html#specialAOrAn)`  `[`tagOrQuotePat`](../object/LMentionable.html#tagOrQuotePat)`  `[`thatName`](../object/LMentionable.html#thatName)`  `[`thatObjName`](../object/LMentionable.html#thatObjName)`  `[`theName`](../object/LMentionable.html#theName)`  `[`theObjName`](../object/LMentionable.html#theObjName)`  `[`trimPat`](../object/LMentionable.html#trimPat)`  `[`truncationLength`](../object/LMentionable.html#truncationLength)`  `[`weakWordPat`](../object/LMentionable.html#weakWordPat)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getTopicText`](#getTopicText)`  `[`setKnown`](#setKnown)`  `

Inherited from `Mentionable` :  
` `[`filterResolveList`](../object/Mentionable.html#filterResolveList)`  `[`matchName`](../object/Mentionable.html#matchName)`  `[`matchNameCommon`](../object/Mentionable.html#matchNameCommon)`  `[`matchNameDisambig`](../object/Mentionable.html#matchNameDisambig)`  `[`phraseMatchName`](../object/Mentionable.html#phraseMatchName)`  `[`simpleMatchName`](../object/Mentionable.html#simpleMatchName)`  `

Inherited from `LMentionable` :  
` `[`addDictWord`](../object/LMentionable.html#addDictWord)`  `[`addVocab`](../object/LMentionable.html#addVocab)`  `[`addVocabWord`](../object/LMentionable.html#addVocabWord)`  `[`aNameFrom`](../object/LMentionable.html#aNameFrom)`  `[`aNameFromPoss`](../object/LMentionable.html#aNameFromPoss)`  `[`classInit`](../object/LMentionable.html#classInit)`  `[`contify`](../object/LMentionable.html#contify)`  `[`distinguishedName`](../object/LMentionable.html#distinguishedName)`  `[`ifPronoun`](../object/LMentionable.html#ifPronoun)`  `[`inheritVocab`](../object/LMentionable.html#inheritVocab)`  `[`initVocab`](../object/LMentionable.html#initVocab)`  `[`initVocabWord`](../object/LMentionable.html#initVocabWord)`  `[`locify`](../object/LMentionable.html#locify)`  `[`matchPronoun`](../object/LMentionable.html#matchPronoun)`  `[`pluralNameFrom`](../object/LMentionable.html#pluralNameFrom)`  `[`pluralWordFrom`](../object/LMentionable.html#pluralWordFrom)`  `[`possessify`](../object/LMentionable.html#possessify)`  `[`pronoun`](../object/LMentionable.html#pronoun)`  `[`removeVocabWord`](../object/LMentionable.html#removeVocabWord)`  `[`replaceVocab`](../object/LMentionable.html#replaceVocab)`  `[`theNameFrom`](../object/LMentionable.html#theNameFrom)`  `[`theNameIs`](../object/LMentionable.html#theNameIs)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="familiar"></span>

`familiar`

[thing.t](../file/thing.t.html)\[[10005](../source/thing.t.html#10005)\]

<div class="desc">

Whether the player character knows of the existence of this topic. By
default we assume this is true.

</div>

<span id="known"></span>

`known`

[thing.t](../file/thing.t.html)\[[10011](../source/thing.t.html#10011)\]

<div class="desc">

Test whether this topic is known to the player character

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (name_)`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[9995](../source/thing.t.html#9995)\],
[english.t](../file/english.t.html)\[[2094](../source/english.t.html#2094)\]

<div class="desc">

*no description available*

</div>

<span id="getTopicText"></span>

`getTopicText ( )`

[thing.t](../file/thing.t.html)\[[10017](../source/thing.t.html#10017)\]

<div class="desc">

Return a textual description of this topic, which will normally be just
its name. We use the vocab as fall-back alternative.

</div>

<span id="setKnown"></span>

`setKnown ( )`

[thing.t](../file/thing.t.html)\[[10008](../source/thing.t.html#10008)\]

<div class="desc">

Make this topic known to the player character

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
