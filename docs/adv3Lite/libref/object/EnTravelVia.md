---
layout: docs
---
<span class="title">EnTravelVia</span><span class="type">class</span>

[grammar.t](../file/grammar.t.html)\[[2502](../source/grammar.t.html#2502)\]

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



Create a TravelVia subclass merely so we can supply a verbPhrase. (The
parser looks for subclasses of each specific Action class to find its
verb phrase, since the language-specific Action definitions are always
in the language module's 'grammar' subclasses. We don't need an actual
grammar rule, since this isn't an input-able verb, so we merely need to
create a regular subclass in order for the verbPhrase to get found.)

`class `**`EnTravelVia`**` :   `[`VerbProduction`](../object/VerbProduction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EnTravelVia`**  
[`VerbProduction`](../object/VerbProduction.html)  
[`Production`](../object/Production.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`missingQ`](#missingQ) [`verbPhrase`](#verbPhrase)

Inherited from `VerbProduction` :  
[`isActive`](../object/VerbProduction.html#isActive) [`priority`](../object/VerbProduction.html#priority)

Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner) [`nounPhraseRole`](../object/Production.html#nounPhraseRole) [`npClass`](../object/Production.html#npClass) [`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `VerbProduction` :  
[`answerMissing`](../object/VerbProduction.html#answerMissing) [`build`](../object/VerbProduction.html#build) [`missingRoleProd`](../object/VerbProduction.html#missingRoleProd) [`visitProd`](../object/VerbProduction.html#visitProd)

Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem) [`findAction`](../object/Production.html#findAction) [`findChild`](../object/Production.html#findChild) [`findParent`](../object/Production.html#findParent) [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole) [`getText`](../object/Production.html#getText) [`getTokens`](../object/Production.html#getTokens) [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild) [`isChildOf`](../object/Production.html#isChildOf) [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence) [`visitLiteral`](../object/Production.html#visitLiteral)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="missingQ"></span>

`missingQ`

[grammar.t](../file/grammar.t.html)\[[2504](../source/grammar.t.html#2504)\]



*no description available*



<span id="verbPhrase"></span>

`verbPhrase`

[grammar.t](../file/grammar.t.html)\[[2503](../source/grammar.t.html#2503)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


