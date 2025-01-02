---
layout: docs
---
<span class="title">CoreNounPhraseProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4161](../source/parser.t.html#4161)\]

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



CoreNounPhraseProduction is a Production subclass for the "core" noun
phrase grammar for noun phrases with object vocabulary. This is the part
of the grammar that matches the basic name of an object, after all
qualifiers (such as articles, possessives, and quantifiers) have already
been dealt with. This is the part of the phrase that contains the
vocabulary words for game-world objects.

This class is only needed for noun phrases with object vocabulary words.
It captures the unqualified core of the phrase as entered by the user,
mostly for reiteration in error messages from the parser. It's not
necessary to define rules of this class for noun phrases that don't have
object vocabulary words (e.g., pronouns, ALL).

`class `**`CoreNounPhraseProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CoreNounPhraseProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CoreNounPhraseProduction`**  
[`nounPhrase(main)`](../object/nounPhrase(main).html)  
[`pluralPhrase(main)`](../object/pluralPhrase(main).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner) [`nounPhraseRole`](../object/Production.html#nounPhraseRole) [`npClass`](../object/Production.html#npClass) [`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`build`](#build)

Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem) [`findAction`](../object/Production.html#findAction) [`findChild`](../object/Production.html#findChild) [`findParent`](../object/Production.html#findParent) [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole) [`getText`](../object/Production.html#getText) [`getTokens`](../object/Production.html#getTokens) [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild) [`isChildOf`](../object/Production.html#isChildOf) [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence) [`visitLiteral`](../object/Production.html#visitLiteral) [`visitProd`](../object/Production.html#visitProd)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4162](../source/parser.t.html#4162)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


