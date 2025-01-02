---
layout: docs
---
<span class="title">Us</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[4808](../source/parser.t.html#4808)\]

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

<div class="fdesc">

Us - the first-person plural. We throw this one in for relative
completeness, but we simply treat it as a synonym for Me. This could be
useful in a game with a PC that represents a group of people (an
adventuring party in a hack-n-slash game, say), or a royal personage.

A more sophisticated use would be to allow the player to refer
collectively to the PC and a group of accompanying NPCs. The base
library doesn't implement this because it doesn't define a way to
identify such a group, but a game could add that capability. Once you've
defined what US means, you could make the pronoun US bind to that group
simply by modifying the resolve() method here.

**`Us`**` :   `[`Pronoun`](../object/Pronoun.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Us`**  
`         `[`Pronoun`](../object/Pronoun.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `Pronoun` :  
` `[`all`](../object/Pronoun.html#all)`  `[`aName`](../object/Pronoun.html#aName)`  `[`ante`](../object/Pronoun.html#ante)`  `[`person`](../object/Pronoun.html#person)`  `[`reflexive`](../object/Pronoun.html#reflexive)`  `[`theName`](../object/Pronoun.html#theName)`  `[`theObjName`](../object/Pronoun.html#theObjName)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`resolve`](#resolve)`  `

Inherited from `Pronoun` :  
` `[`construct`](../object/Pronoun.html#construct)`  `[`matchObj`](../object/Pronoun.html#matchObj)`  `[`setAntecedents`](../object/Pronoun.html#setAntecedents)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="resolve"></span>

`resolve ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4809](../source/parser.t.html#4809)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
