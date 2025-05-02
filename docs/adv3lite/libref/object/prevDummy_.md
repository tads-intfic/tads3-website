---
layout: docs
---
<span class="title">prevDummy\_</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[4145](../source/english.t.html#4145)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



prevDummy\_ is used by the {prev} message parameter substitution to
enable a subsequent verb to agree with a previous list defined through
one of the string templates.

**`prevDummy_`**` :   `[`Mentionable`](../object/Mentionable.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`prevDummy_`**  
[`Mentionable`](../object/Mentionable.html)  
[`LMentionable`](../object/LMentionable.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`dummyName`](#dummyName) [`name`](#name) [`plural`](#plural)

Inherited from `Mentionable` :  
[`ambiguouslyPlural`](../object/Mentionable.html#ambiguouslyPlural) [`disambigGroup`](../object/Mentionable.html#disambigGroup) [`disambigMatchPhrases`](../object/Mentionable.html#disambigMatchPhrases) [`disambigName`](../object/Mentionable.html#disambigName) [`disambigOrder`](../object/Mentionable.html#disambigOrder) [`distinguishByContents`](../object/Mentionable.html#distinguishByContents) [`isHer`](../object/Mentionable.html#isHer) [`isHim`](../object/Mentionable.html#isHim) [`isIt`](../object/Mentionable.html#isIt) [`massNoun`](../object/Mentionable.html#massNoun) [`matchPhrases`](../object/Mentionable.html#matchPhrases) [`matchPhrasesExclude`](../object/Mentionable.html#matchPhrasesExclude) [`nominalContents`](../object/Mentionable.html#nominalContents) [`person`](../object/Mentionable.html#person) [`proper`](../object/Mentionable.html#proper) [`qualified`](../object/Mentionable.html#qualified) [`roomTitle`](../object/Mentionable.html#roomTitle) [`states`](../object/Mentionable.html#states) [`vocab`](../object/Mentionable.html#vocab) [`vocabWords`](../object/Mentionable.html#vocabWords)

Inherited from `LMentionable` :  
[`acronymPluralPat`](../object/LMentionable.html#acronymPluralPat) [`alphaCharPat`](../object/LMentionable.html#alphaCharPat) [`aName`](../object/LMentionable.html#aName) [`apostPluralPat`](../object/LMentionable.html#apostPluralPat) [`apostSPat`](../object/LMentionable.html#apostSPat) [`deannotatePat`](../object/LMentionable.html#deannotatePat) [`dictComp`](../object/LMentionable.html#dictComp) [`elevenEighteenPat`](../object/LMentionable.html#elevenEighteenPat) [`emptyVocabWords`](../object/LMentionable.html#emptyVocabWords) [`esPluralPat`](../object/LMentionable.html#esPluralPat) [`firstWordPat`](../object/LMentionable.html#firstWordPat) [`heName`](../object/LMentionable.html#heName) [`herName`](../object/LMentionable.html#herName) [`hersName`](../object/LMentionable.html#hersName) [`himName`](../object/LMentionable.html#himName) [`iesPluralPat`](../object/LMentionable.html#iesPluralPat) [`irregularPlurals`](../object/LMentionable.html#irregularPlurals) [`lastWordPat`](../object/LMentionable.html#lastWordPat) [`leadingTagOrQuotePat`](../object/LMentionable.html#leadingTagOrQuotePat) [`menPluralPat`](../object/LMentionable.html#menPluralPat) [`objInName`](../object/LMentionable.html#objInName) [`objIntoName`](../object/LMentionable.html#objIntoName) [`objName`](../object/LMentionable.html#objName) [`objOutOfName`](../object/LMentionable.html#objOutOfName) [`oneLetterAnWordPat`](../object/LMentionable.html#oneLetterAnWordPat) [`oneLetterWordPat`](../object/LMentionable.html#oneLetterWordPat) [`ownerNamed`](../object/LMentionable.html#ownerNamed) [`pluralPat`](../object/LMentionable.html#pluralPat) [`posPat`](../object/LMentionable.html#posPat) [`possAdj`](../object/LMentionable.html#possAdj) [`possEnding`](../object/LMentionable.html#possEnding) [`possNoun`](../object/LMentionable.html#possNoun) [`prepList`](../object/LMentionable.html#prepList) [`prepPhrasePat`](../object/LMentionable.html#prepPhrasePat) [`prepWordPat`](../object/LMentionable.html#prepWordPat) [`pronounMap`](../object/LMentionable.html#pronounMap) [`properNamePat`](../object/LMentionable.html#properNamePat) [`properPat`](../object/LMentionable.html#properPat) [`reflexiveName`](../object/LMentionable.html#reflexiveName) [`specialAOrAn`](../object/LMentionable.html#specialAOrAn) [`tagOrQuotePat`](../object/LMentionable.html#tagOrQuotePat) [`thatName`](../object/LMentionable.html#thatName) [`thatObjName`](../object/LMentionable.html#thatObjName) [`theName`](../object/LMentionable.html#theName) [`theObjName`](../object/LMentionable.html#theObjName) [`trimPat`](../object/LMentionable.html#trimPat) [`truncationLength`](../object/LMentionable.html#truncationLength) [`weakWordPat`](../object/LMentionable.html#weakWordPat)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`noteName`](#noteName)

Inherited from `Mentionable` :  
[`construct`](../object/Mentionable.html#construct) [`filterResolveList`](../object/Mentionable.html#filterResolveList) [`matchName`](../object/Mentionable.html#matchName) [`matchNameCommon`](../object/Mentionable.html#matchNameCommon) [`matchNameDisambig`](../object/Mentionable.html#matchNameDisambig) [`phraseMatchName`](../object/Mentionable.html#phraseMatchName) [`simpleMatchName`](../object/Mentionable.html#simpleMatchName)

Inherited from `LMentionable` :  
[`addDictWord`](../object/LMentionable.html#addDictWord) [`addVocab`](../object/LMentionable.html#addVocab) [`addVocabWord`](../object/LMentionable.html#addVocabWord) [`aNameFrom`](../object/LMentionable.html#aNameFrom) [`aNameFromPoss`](../object/LMentionable.html#aNameFromPoss) [`classInit`](../object/LMentionable.html#classInit) [`contify`](../object/LMentionable.html#contify) [`distinguishedName`](../object/LMentionable.html#distinguishedName) [`ifPronoun`](../object/LMentionable.html#ifPronoun) [`inheritVocab`](../object/LMentionable.html#inheritVocab) [`initVocab`](../object/LMentionable.html#initVocab) [`initVocabWord`](../object/LMentionable.html#initVocabWord) [`locify`](../object/LMentionable.html#locify) [`matchPronoun`](../object/LMentionable.html#matchPronoun) [`pluralNameFrom`](../object/LMentionable.html#pluralNameFrom) [`pluralWordFrom`](../object/LMentionable.html#pluralWordFrom) [`possessify`](../object/LMentionable.html#possessify) [`pronoun`](../object/LMentionable.html#pronoun) [`removeVocabWord`](../object/LMentionable.html#removeVocabWord) [`replaceVocab`](../object/LMentionable.html#replaceVocab) [`theNameFrom`](../object/LMentionable.html#theNameFrom) [`theNameIs`](../object/LMentionable.html#theNameIs)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="dummyName"></span>

`dummyName`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[4146](../source/english.t.html#4146)\]



*no description available*



<span id="name"></span>

`name`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[4147](../source/english.t.html#4147)\]



*no description available*



<span id="plural"></span>

`plural`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[4153](../source/english.t.html#4153)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="noteName"></span>

`noteName (src)`

[english.t](../file/english.t.html)\[[4148](../source/english.t.html#4148)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


