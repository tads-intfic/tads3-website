---
layout: docs
---
<span class="title">ContentsQualifierProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4274](../source/parser.t.html#4274)\]

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



ContentsQualifierProduction is a subclass of Production for phrases that
involve contents qualifiers, as in "the bucket of water".

Each grammar rule of this type needs to define two special '-\>'
associations in its template:

cont\_ is the contents qualifier. This is also just an ordinary noun
phrase. This is the "water" part in "bucket of water".

prep\_ is the preposition giving the relationship.

`class `**`ContentsQualifierProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ContentsQualifierProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ContentsQualifierProduction`**  
[`nounPhraseWithContents(contents)`](../object/nounPhraseWithContents(contents).html)  
[`pluralPhraseWithContents(contents)`](../object/pluralPhraseWithContents(contents).html)  
[`qualifiedPluralNounPhrase(theOnesContaining)`](../object/qualifiedPluralNounPhrase(theOnesContaining).html)  
[`qualifiedSingularNounPhrase(theOneContaining)`](../object/qualifiedSingularNounPhrase(theOneContaining).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner)[`nounPhraseRole`](../object/Production.html#nounPhraseRole)[`npClass`](../object/Production.html#npClass)[`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`visitProd`](#visitProd)

Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem)[`build`](../object/Production.html#build)[`findAction`](../object/Production.html#findAction)[`findChild`](../object/Production.html#findChild)[`findParent`](../object/Production.html#findParent)[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)[`getText`](../object/Production.html#getText)[`getTokens`](../object/Production.html#getTokens)[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)[`isChildOf`](../object/Production.html#isChildOf)[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)[`visitLiteral`](../object/Production.html#visitLiteral)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="visitProd"></span>

`visitProd (cmd, np, prod)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4281](../source/parser.t.html#4281)\]



Visit a production. When we process the contents qualifier phrase, we'll
build out the sub-tree in the context of a new NounPhrase, which we
attach as a contents qualifier to the encompassing noun phrase under
construction.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


