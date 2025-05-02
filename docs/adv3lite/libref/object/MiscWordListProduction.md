---
layout: docs
---
<span class="title">MiscWordListProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4479](../source/parser.t.html#4479)\]

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



MiscWordListProduction is a subclass of Production for miscellaneous
word list rules. These are grammar rules of last resort, for matching
text that's positionally where a noun phrase ought to be, but which
doesn't match any of our other rules for constructing a valid noun
phrase. These rules let us still recognize the overall verb-phrase
structure of a command, even though we can't make sense of what goes
where the nouns ought to be.

`class `**`MiscWordListProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MiscWordListProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`MiscWordListProduction`**  
[`miscWordList(list)`](../object/miscWordList(list).html)  
[`miscWordList(wordOrNumber)`](../object/miscWordList(wordOrNumber).html)  
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

[parser.t](../file/parser.t.html)\[[4480](../source/parser.t.html#4480)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


