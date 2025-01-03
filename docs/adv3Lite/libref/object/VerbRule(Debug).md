---
layout: docs
---
<span class="title">VerbRule(Debug)</span><span class="type">grammar</span>

[debug.t](../file/debug.t.html)\[[52](../source/debug.t.html#52)\]

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



Debug options. This is the general verb for performing various debugging
operations while running the game. The Debug Action parses the options
string to carry out the command.

`VerbRule(Debug)      `*`// original source text`*  
`grammar `**[`VerbRule`](../object/VerbRule.html)`(Debug)`**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VerbRule(Debug)`**  
[`VerbProduction`](../object/VerbProduction.html)  
[`Production`](../object/Production.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`action`](#action)  [`missingQ`](#missingQ)  [`verbPhrase`](#verbPhrase)  `

Inherited from `VerbProduction` :  
` [`isActive`](../object/VerbProduction.html#isActive)  `[`priority`](../object/VerbProduction.html#priority)

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



<span id="action"></span>

`action`

[debug.t](../file/debug.t.html)\[[55](../source/debug.t.html#55)\]



*no description available*



<span id="missingQ"></span>

`missingQ`

[debug.t](../file/debug.t.html)\[[57](../source/debug.t.html#57)\]



*no description available*



<span id="verbPhrase"></span>

`verbPhrase`

[debug.t](../file/debug.t.html)\[[56](../source/debug.t.html#56)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


