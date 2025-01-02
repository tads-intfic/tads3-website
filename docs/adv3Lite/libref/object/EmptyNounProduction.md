---
layout: docs
---
<span class="title">EmptyNounProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4176](../source/parser.t.html#4176)\]

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



EmptyNounProduction is a Production subclass for a grammar rule that
matches no tokens where a noun phrase would ordinarily go.

`class `**`EmptyNounProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EmptyNounProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`EmptyNounProduction`**  
[`literalPhrase(empty)`](../object/literalPhrase(empty).html)  
[`nounList(empty)`](../object/nounList(empty).html)  
[`simpleNounPhrase(empty)`](../object/simpleNounPhrase(empty).html)  
[`simplePluralPhrase(empty)`](../object/simplePluralPhrase(empty).html)  
[`singleNoun(empty)`](../object/singleNoun(empty).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner)[`nounPhraseRole`](../object/Production.html#nounPhraseRole)[`npClass`](../object/Production.html#npClass)[`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`build`](#build)

Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem)[`findAction`](../object/Production.html#findAction)[`findChild`](../object/Production.html#findChild)[`findParent`](../object/Production.html#findParent)[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)[`getText`](../object/Production.html#getText)[`getTokens`](../object/Production.html#getTokens)[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)[`isChildOf`](../object/Production.html#isChildOf)[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)[`visitLiteral`](../object/Production.html#visitLiteral)[`visitProd`](../object/Production.html#visitProd)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4177](../source/parser.t.html#4177)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


