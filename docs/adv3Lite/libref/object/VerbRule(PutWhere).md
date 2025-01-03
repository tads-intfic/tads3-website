---
layout: docs
---
<span class="title">VerbRule(PutWhere)</span><span class="type">grammar</span>

[grammar.t](../file/grammar.t.html)\[[1696](../source/grammar.t.html#1696)\]

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



*no description available*

`VerbRule(PutWhere)      `*`// original source text`*  
`grammar `**[`VerbRule`](../object/VerbRule.html)`(PutWhere)`**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VerbRule(PutWhere)`**  
[`VerbProduction`](../object/VerbProduction.html)  
[`Production`](../object/Production.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`action`](#action)  [`iobjReply`](#iobjReply)  [`missingQ`](#missingQ)  [`missingRole`](#missingRole)  [`priority`](#priority)  [`verbPhrase`](#verbPhrase)  `

Inherited from `VerbProduction` :  
` [`isActive`](../object/VerbProduction.html#isActive)  `

Inherited from `Production` :  
` [`determiner`](../object/Production.html#determiner)  [`nounPhraseRole`](../object/Production.html#nounPhraseRole)  [`npClass`](../object/Production.html#npClass)  [`parent`](../object/Production.html#parent)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`answerMissing`](#answerMissing)  `

Inherited from `VerbProduction` :  
` [`build`](../object/VerbProduction.html#build)  [`missingRoleProd`](../object/VerbProduction.html#missingRoleProd)  [`visitProd`](../object/VerbProduction.html#visitProd)  `

Inherited from `Production` :  
` [`addNounListItem`](../object/Production.html#addNounListItem)  [`findAction`](../object/Production.html#findAction)  [`findChild`](../object/Production.html#findChild)  [`findParent`](../object/Production.html#findParent)  [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)  [`getText`](../object/Production.html#getText)  [`getTokens`](../object/Production.html#getTokens)  [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)  [`isChildOf`](../object/Production.html#isChildOf)  [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)  [`visitLiteral`](../object/Production.html#visitLiteral)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="action"></span>

`action`

[grammar.t](../file/grammar.t.html)\[[1699](../source/grammar.t.html#1699)\]



*no description available*



<span id="iobjReply"></span>

`iobjReply`

[grammar.t](../file/grammar.t.html)\[[1704](../source/grammar.t.html#1704)\]



*no description available*



<span id="missingQ"></span>

`missingQ`

[grammar.t](../file/grammar.t.html)\[[1701](../source/grammar.t.html#1701)\]



*no description available*



<span id="missingRole"></span>

`missingRole`

[grammar.t](../file/grammar.t.html)\[[1703](../source/grammar.t.html#1703)\]



*no description available*



<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[grammar.t](../file/grammar.t.html)\[[1736](../source/grammar.t.html#1736)\]



found it - use this action



<span id="verbPhrase"></span>

`verbPhrase`

[grammar.t](../file/grammar.t.html)\[[1700](../source/grammar.t.html#1700)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="answerMissing"></span>

`answerMissing (cmd, np)`<span class="rem">OVERRIDDEN</span>

[grammar.t](../file/grammar.t.html)\[[1711](../source/grammar.t.html#1711)\]



when the player supplies our missing indirect object by answering the
"where do you want to put it" question, we'll change the action
according to the preposition in the indirect object reply
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


