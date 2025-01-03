---
layout: docs
---
<span class="title">VerbRule(Footnote)</span><span class="type">grammar</span>

[footnote.t](../file/footnote.t.html)\[[307](../source/footnote.t.html#307)\]

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



This VerbRule is defined directly in the FOOTNOTE extension.

Note to translators: the following VerbRules are defined directly in the
FOOTNOTES extension file since it would be awkward to put them anywhere
else. When translating, define an additional language-specific file
(e.g. footnotes_fr.t or footnotes_de.t) and in it include (a) your
language-specific modifications to the following VerbRules (using modify
VerbRule) and (b) a CustomMessages object containing translations of any
DMsg and BMsg text used in this extension. Then instruct users to
include your language-specific file after this one. \[FOOTNOTE
EXTENSION\]

`VerbRule(Footnote)      `*`// original source text`*  
`grammar `**[`VerbRule`](../object/VerbRule.html)`(Footnote)`**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VerbRule(Footnote)`**  
[`VerbProduction`](../object/VerbProduction.html)  
[`Production`](../object/Production.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`action`](#action)  [`verbPhrase`](#verbPhrase)  `

Inherited from `VerbProduction` :  
` [`isActive`](../object/VerbProduction.html#isActive)  [`priority`](../object/VerbProduction.html#priority)  `

Inherited from `Production` :  
` [`determiner`](../object/Production.html#determiner)  [`nounPhraseRole`](../object/Production.html#nounPhraseRole)  [`npClass`](../object/Production.html#npClass)  [`parent`](../object/Production.html#parent)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `VerbProduction` :  
` [`answerMissing`](../object/VerbProduction.html#answerMissing)  [`build`](../object/VerbProduction.html#build)  [`missingRoleProd`](../object/VerbProduction.html#missingRoleProd)  [`visitProd`](../object/VerbProduction.html#visitProd)  `

Inherited from `Production` :  
` [`addNounListItem`](../object/Production.html#addNounListItem)  [`findAction`](../object/Production.html#findAction)  [`findChild`](../object/Production.html#findChild)  [`findParent`](../object/Production.html#findParent)  [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)  [`getText`](../object/Production.html#getText)  [`getTokens`](../object/Production.html#getTokens)  [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)  [`isChildOf`](../object/Production.html#isChildOf)  [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)  [`visitLiteral`](../object/Production.html#visitLiteral)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="action"></span>

`action`

[footnote.t](../file/footnote.t.html)\[[310](../source/footnote.t.html#310)\]



*no description available*



<span id="verbPhrase"></span>

`verbPhrase`

[footnote.t](../file/footnote.t.html)\[[311](../source/footnote.t.html#311)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


