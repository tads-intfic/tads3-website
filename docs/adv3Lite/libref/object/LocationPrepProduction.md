---
layout: docs
---
<span class="title">LocationPrepProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4374](../source/parser.t.html#4374)\]

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



A LocationPrepProduction is a special Production type for phrases that
encode the preposition of a locational phrase. This is only needed in
languages that use prepositional grammar to express location
relationships. For languages that use noun case inflection, the
relationship will have to be inferred from the case grammar of the noun
phrase (such as noun affixes or articles), and the noun phrase
production will have to set the locType in the LocationalProduction.

Set the locType property to the LocType object corresponding to the
location relationship of the preposition.

`class `**`LocationPrepProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`LocationPrepProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`LocationPrepProduction`**  
[`locationPrep(from)`](../object/locationPrep(from).html)  
[`locationPrep(in)`](../object/locationPrep(in).html)  
[`locationPrep(on)`](../object/locationPrep(on).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`locType`](#locType)

Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner) [`nounPhraseRole`](../object/Production.html#nounPhraseRole) [`npClass`](../object/Production.html#npClass) [`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`build`](#build)

Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem) [`findAction`](../object/Production.html#findAction) [`findChild`](../object/Production.html#findChild) [`findParent`](../object/Production.html#findParent) [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole) [`getText`](../object/Production.html#getText) [`getTokens`](../object/Production.html#getTokens) [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild) [`isChildOf`](../object/Production.html#isChildOf) [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence) [`visitLiteral`](../object/Production.html#visitLiteral) [`visitProd`](../object/Production.html#visitProd)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="locType"></span>

`locType`

[parser.t](../file/parser.t.html)\[[4376](../source/parser.t.html#4376)\]



our location relationship type, as a LocType object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4382](../source/parser.t.html#4382)\]



on building the production, set the locType in our LocationalProduction
parent





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


