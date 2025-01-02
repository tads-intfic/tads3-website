---
layout: docs
---
<span class="title">Me</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[4784](../source/parser.t.html#4784)\]

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

Me - the first-person singular. ME always binds to the player character.

The discussion about the validity of binding YOU to the PC applies in
mirror image here. In a second-person game, the PC is the narrator's YOU
and the player's ME; in a first-person game, she's the narrator's ME and
the player's YOU. But there is no game-world object for ME to bind to in
commands in a first-person game - if anything, ME would be the player
(not the player character, but the actual player), who is clearly not a
game-world entity. Since that's not meaningful, we can assume that a
player talking about ME in a first-person game is being literal-minded
and just using the same pronouns the narrator does, or that they're so
accustomed to the second-person convention of most IF that they're
saying ME out of habit. In either case, the PC is the one they're
talking about.

**`Me`**` :   `[`Pronoun`](../object/Pronoun.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Me`**  
[`Pronoun`](../object/Pronoun.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`person`](#person)

Inherited from `Pronoun` :  
[`all`](../object/Pronoun.html#all)[`aName`](../object/Pronoun.html#aName)[`ante`](../object/Pronoun.html#ante)[`reflexive`](../object/Pronoun.html#reflexive)[`theName`](../object/Pronoun.html#theName)[`theObjName`](../object/Pronoun.html#theObjName)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`resolve`](#resolve)

Inherited from `Pronoun` :  
[`construct`](../object/Pronoun.html#construct)[`matchObj`](../object/Pronoun.html#matchObj)[`setAntecedents`](../object/Pronoun.html#setAntecedents)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="person"></span>

`person`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4792](../source/parser.t.html#4792)\]

<div class="desc">

this is a first-person pronoun

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="resolve"></span>

`resolve ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4789](../source/parser.t.html#4789)\]

<div class="desc">

the first person always resolves to the player character, regardless of
context

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
