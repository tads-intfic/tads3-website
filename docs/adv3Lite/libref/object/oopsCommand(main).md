---
layout: docs
---
<span class="title">oopsCommand(main)</span><span class="type">grammar</span>

[grammar.t](../file/grammar.t.html)\[[1347](../source/grammar.t.html#1347)\]

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



The main grammar for an OOPS command. This is separate from the main
command grammar, since OOPS commands are somewhat special (in
particular, they can't be mixed with other commands on an input line).

The grammar tree for an OOPS command must include one or more
OopsProduction objects. Each of these must have a '-\>toks\_' property
that gives the sub-production with the literal token list of the
correction.

\[Required\]

`grammar `**[`oopsCommand`](../object/oopsCommand1.html)`(main)`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`oopsCommand(main)`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner) [`nounPhraseRole`](../object/Production.html#nounPhraseRole) [`npClass`](../object/Production.html#npClass) [`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem) [`build`](../object/Production.html#build) [`findAction`](../object/Production.html#findAction) [`findChild`](../object/Production.html#findChild) [`findParent`](../object/Production.html#findParent) [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole) [`getText`](../object/Production.html#getText) [`getTokens`](../object/Production.html#getTokens) [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild) [`isChildOf`](../object/Production.html#isChildOf) [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence) [`visitLiteral`](../object/Production.html#visitLiteral) [`visitProd`](../object/Production.html#visitProd)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


