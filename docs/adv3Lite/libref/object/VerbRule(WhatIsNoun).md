---
layout: docs
---
<span class="title">VerbRule(WhatIsNoun)</span><span class="type">grammar</span>

[newbie.t](../file/newbie.t.html)\[[657](../source/newbie.t.html#657)\]

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



Make WHAT IS X behave like EXAMINE X, but then explain the standard
phrasing of an EXAMINE command.

`VerbRule(WhatIsNoun)      `*`// original source text`*  
`grammar `**[`VerbRule`](../object/VerbRule.html)`(WhatIsNoun)`**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VerbRule(WhatIsNoun)`**  
[`VerbProduction`](../object/VerbProduction.html)  
[`Production`](../object/Production.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`action`](#action)  [`isActive`](#isActive)  [`priority`](#priority)  [`verbPhrase`](#verbPhrase)  `



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

[newbie.t](../file/newbie.t.html)\[[660](../source/newbie.t.html#660)\]



*no description available*



<span id="isActive"></span>

`isActive`<span class="rem">OVERRIDDEN</span>

[newbie.t](../file/newbie.t.html)\[[670](../source/newbie.t.html#670)\]



Don't match this grammar if the player char is in conversation, since in
that case the player may be attempting a valid conversational command)



<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[newbie.t](../file/newbie.t.html)\[[663](../source/newbie.t.html#663)\]



*no description available*



<span id="verbPhrase"></span>

`verbPhrase`

[newbie.t](../file/newbie.t.html)\[[661](../source/newbie.t.html#661)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


