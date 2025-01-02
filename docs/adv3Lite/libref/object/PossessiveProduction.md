---
layout: docs
---
<span class="title">PossessiveProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4239](../source/parser.t.html#4239)\]

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

<div class="fdesc">

A PossessiveProduction is a production subclass for possessive qualifier
phrases ("John's", "my"). When we build out this production's
contribution to the command, we add a separate NounPhrase object for it,
as a possessive qualifier to the current noun phrase.

`class `**`PossessiveProduction`**` :   `[`Production`](../object/Production.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PossessiveProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PossessiveProduction`**  
[`possessiveAdjPhrase(definiteNpApostropheS)`](../object/possessiveAdjPhrase(definiteNpApostropheS).html)  
[`possessiveAdjPhrase(her)`](../object/possessiveAdjPhrase(her).html)  
[`possessiveAdjPhrase(his)`](../object/possessiveAdjPhrase(his).html)  
[`possessiveAdjPhrase(indefiniteNpApostropheS)`](../object/possessiveAdjPhrase(indefiniteNpApostropheS).html)  
[`possessiveAdjPhrase(its)`](../object/possessiveAdjPhrase(its).html)  
[`possessiveAdjPhrase(my)`](../object/possessiveAdjPhrase(my).html)  
[`possessiveAdjPhrase(npApostropheS)`](../object/possessiveAdjPhrase(npApostropheS).html)  
[`possessiveAdjPhrase(their)`](../object/possessiveAdjPhrase(their).html)  
[`possessiveAdjPhrase(your)`](../object/possessiveAdjPhrase(your).html)  
[`possessiveNounPhrase(hers)`](../object/possessiveNounPhrase(hers).html)  
[`possessiveNounPhrase(his)`](../object/possessiveNounPhrase(his).html)  
[`possessiveNounPhrase(its)`](../object/possessiveNounPhrase(its).html)  
[`possessiveNounPhrase(mine)`](../object/possessiveNounPhrase(mine).html)  
[`possessiveNounPhrase(npApostropheS)`](../object/possessiveNounPhrase(npApostropheS).html)  
[`possessiveNounPhrase(theirs)`](../object/possessiveNounPhrase(theirs).html)  
[`possessiveNounPhrase(yours)`](../object/possessiveNounPhrase(yours).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner)[`nounPhraseRole`](../object/Production.html#nounPhraseRole)[`npClass`](../object/Production.html#npClass)[`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`build`](#build)

Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem)[`findAction`](../object/Production.html#findAction)[`findChild`](../object/Production.html#findChild)[`findParent`](../object/Production.html#findParent)[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)[`getText`](../object/Production.html#getText)[`getTokens`](../object/Production.html#getTokens)[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)[`isChildOf`](../object/Production.html#isChildOf)[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)[`visitLiteral`](../object/Production.html#visitLiteral)[`visitProd`](../object/Production.html#visitProd)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4246](../source/parser.t.html#4246)\]

<div class="desc">

Build the phrase. We'll build out our sub-tree as normal, except that
we'll assign its output to a new NounPhrase, which we attach as a
possessive qualifier to the encompassing noun phrase under construction.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
