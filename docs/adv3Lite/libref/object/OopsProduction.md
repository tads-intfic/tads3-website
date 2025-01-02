---
layout: docs
---
<span class="title">OopsProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4495](../source/parser.t.html#4495)\]

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



An OopsProduction is a subclass for the word list part of an OOPS
command. This must have a -\>toks\_ property that holds the sub-tree for
the literal token list of the correction.

`class `**`OopsProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`OopsProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`OopsProduction`**  
[`oopsPhrase(main)`](../object/oopsPhrase(main).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner)[`nounPhraseRole`](../object/Production.html#nounPhraseRole)[`npClass`](../object/Production.html#npClass)[`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`applyCorrection`](#applyCorrection)[`build`](#build)

Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem)[`findAction`](../object/Production.html#findAction)[`findChild`](../object/Production.html#findChild)[`findParent`](../object/Production.html#findParent)[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)[`getText`](../object/Production.html#getText)[`getTokens`](../object/Production.html#getTokens)[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)[`isChildOf`](../object/Production.html#isChildOf)[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)[`visitLiteral`](../object/Production.html#visitLiteral)[`visitProd`](../object/Production.html#visitProd)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="applyCorrection"></span>

`applyCorrection (prod, toks, typoIdx)`

[parser.t](../file/parser.t.html)\[[4500](../source/parser.t.html#4500)\]



Class method: apply the correction for an OOPS command to an original
token list.



<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4514](../source/parser.t.html#4514)\]



build the command





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


