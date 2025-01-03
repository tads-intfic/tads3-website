---
layout: docs
---
<span class="title">BadListProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4089](../source/parser.t.html#4089)\]

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



A BadListProduction is a Production subclass for a noun list written in
a slot intended for a single noun only. This isn't really a grammatical
error, so the language grammar will probably want to include a rule for
this. However, it \*is\* a semantic error; rules that are written for
single objects are written that way because we can't make sense of a
list there. For example, PUT BOOK IN BOX AND BAG would be nonsensical to
us, because we can't put something in two places at once. This class can
be used for a grammar rule that parses a list where a single noun is
required; we'll flag it with an explanatory error message for the user.

`class `**`BadListProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BadListProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`BadListProduction`**  
[`singleNoun(multiple)`](../object/singleNoun(multiple).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `Production` :  
` [`determiner`](../object/Production.html#determiner)  [`nounPhraseRole`](../object/Production.html#nounPhraseRole)  [`npClass`](../object/Production.html#npClass)  [`parent`](../object/Production.html#parent)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`build`](#build)  `

Inherited from `Production` :  
` [`addNounListItem`](../object/Production.html#addNounListItem)  [`findAction`](../object/Production.html#findAction)  [`findChild`](../object/Production.html#findChild)  [`findParent`](../object/Production.html#findParent)  [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)  [`getText`](../object/Production.html#getText)  [`getTokens`](../object/Production.html#getTokens)  [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)  [`isChildOf`](../object/Production.html#isChildOf)  [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)  [`visitLiteral`](../object/Production.html#visitLiteral)  [`visitProd`](../object/Production.html#visitProd)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4090](../source/parser.t.html#4090)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


