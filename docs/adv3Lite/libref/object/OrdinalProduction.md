---
layout: docs
---
<span class="title">OrdinalProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4457](../source/parser.t.html#4457)\]

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



OrdinalProduction is a subclass of Production for ordinal phrases
("first", "second", etc). The match object must define a method ordval()
that returns the integer value of the ordinal (1 for "first", 2 for
"second", etc).

`class `**`OrdinalProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`OrdinalProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`OrdinalProduction`**  
[`disambigListItem(ordinal)`](../object/disambigListItem(ordinal).html)  
[`disambigOrdinalItem(main)`](../object/disambigOrdinalItem(main).html)  
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

[parser.t](../file/parser.t.html)\[[4458](../source/parser.t.html#4458)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


