---
layout: docs
---
<span class="title">mainDisambigPhrase(main)</span><span class="type">grammar</span>

[grammar.t](../file/grammar.t.html)\[[983](../source/grammar.t.html#983)\]

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



The top-level disambiguation grammar. The parser uses this to parse
input that might be an answer to a disambiguation prompt ("Which did you
mean...?").

We accept whole noun phrases and various fragments of noun phrases in
response to these questions. We accept fragments because (a) users are
accustomed from lots of other IF games to being able to respond with a
word or two, and (b) all we need is something that distinguishes one
object from another.

This should use DisambigProduction as the base class for the match tree
item.

\[Required\]

`grammar `**[`mainDisambigPhrase`](../object/mainDisambigPhrase.html)`(main)`**` :   `[`DisambigProduction`](../object/DisambigProduction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`mainDisambigPhrase(main)`**  
[`DisambigProduction`](../object/DisambigProduction.html)  
[`Production`](../object/Production.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner) [`nounPhraseRole`](../object/Production.html#nounPhraseRole) [`npClass`](../object/Production.html#npClass) [`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `DisambigProduction` :  
[`addNounListItem`](../object/DisambigProduction.html#addNounListItem)

Inherited from `Production` :  
[`build`](../object/Production.html#build) [`findAction`](../object/Production.html#findAction) [`findChild`](../object/Production.html#findChild) [`findParent`](../object/Production.html#findParent) [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole) [`getText`](../object/Production.html#getText) [`getTokens`](../object/Production.html#getTokens) [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild) [`isChildOf`](../object/Production.html#isChildOf) [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence) [`visitLiteral`](../object/Production.html#visitLiteral) [`visitProd`](../object/Production.html#visitProd)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


