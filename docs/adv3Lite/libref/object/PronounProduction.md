---
layout: docs
---
<span class="title">PronounProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4216](../source/parser.t.html#4216)\]

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

PronounProduction is a Production subclass for pronoun phrases. Each
instance should set the property 'pronoun' to a Pronoun object giving
the pronoun role for the phrase.

`class `**`PronounProduction`**` :   `[`Production`](../object/Production.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PronounProduction`**  
`         `[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PronounProduction`**  
`         `[`pronounPhrase(her)`](../object/pronounPhrase(her).html)  
`         `[`pronounPhrase(herself)`](../object/pronounPhrase(herself).html)  
`         `[`pronounPhrase(him)`](../object/pronounPhrase(him).html)  
`         `[`pronounPhrase(himself)`](../object/pronounPhrase(himself).html)  
`         `[`pronounPhrase(it)`](../object/pronounPhrase(it).html)  
`         `[`pronounPhrase(itself)`](../object/pronounPhrase(itself).html)  
`         `[`pronounPhrase(me)`](../object/pronounPhrase(me).html)  
`         `[`pronounPhrase(them)`](../object/pronounPhrase(them).html)  
`         `[`pronounPhrase(themselves)`](../object/pronounPhrase(themselves).html)  
`         `[`pronounPhrase(us)`](../object/pronounPhrase(us).html)  
`         `[`pronounPhrase(you)`](../object/pronounPhrase(you).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `Production` :  
` `[`determiner`](../object/Production.html#determiner)`  `[`nounPhraseRole`](../object/Production.html#nounPhraseRole)`  `[`npClass`](../object/Production.html#npClass)`  `[`parent`](../object/Production.html#parent)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`build`](#build)`  `

Inherited from `Production` :  
` `[`addNounListItem`](../object/Production.html#addNounListItem)`  `[`findAction`](../object/Production.html#findAction)`  `[`findChild`](../object/Production.html#findChild)`  `[`findParent`](../object/Production.html#findParent)`  `[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)`  `[`getText`](../object/Production.html#getText)`  `[`getTokens`](../object/Production.html#getTokens)`  `[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)`  `[`isChildOf`](../object/Production.html#isChildOf)`  `[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)`  `[`visitLiteral`](../object/Production.html#visitLiteral)`  `[`visitProd`](../object/Production.html#visitProd)`  `

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

[parser.t](../file/parser.t.html)\[[4223](../source/parser.t.html#4223)\]

<div class="desc">

Build the phrase. We'll add our pronoun association to the current noun
phrase. (We'll also build out any sub-tree, although in nearly all cases
a pronoun phrase is just a literal and won't have a sub-tree.)

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
