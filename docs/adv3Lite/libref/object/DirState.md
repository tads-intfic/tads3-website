---
layout: docs
---
<span class="title">DirState</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[2009](../source/english.t.html#2009)\]

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

DirState. This is useful for SymConnectors and the like, whose
directional vocab may change according to which direction they're
approached from.

**`DirState`**` :   `[`State`](../object/State.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DirState`**  
`         `[`State`](../object/State.html)  
`                 `[`LState`](../object/LState.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`adjectives`](#adjectives)`  `[`stateProp`](#stateProp)`  `

Inherited from `State` :  
` `[`all`](../object/State.html#all)`  `[`vocabTab`](../object/State.html#vocabTab)`  `[`vocabWords`](../object/State.html#vocabWords)`  `

Inherited from `LState` :  
` `[`additionalInfo`](../object/LState.html#additionalInfo)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`appliesTo`](#appliesTo)`  `

Inherited from `State` :  
` `[`classInit`](../object/State.html#classInit)`  `[`construct`](../object/State.html#construct)`  `[`getVocab`](../object/State.html#getVocab)`  `[`matchName`](../object/State.html#matchName)`  `

Inherited from `LState` :  
` `[`addToName`](../object/LState.html#addToName)`  `[`getAdditionalInfo`](../object/LState.html#getAdditionalInfo)`  `[`initWord`](../object/LState.html#initWord)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="adjectives"></span>

`adjectives`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2011](../source/english.t.html#2011)\]

<div class="desc">

*no description available*

</div>

<span id="stateProp"></span>

`stateProp`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2010](../source/english.t.html#2010)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="appliesTo"></span>

`appliesTo (obj)`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[217](../source/symconn.t.html#217)\]

<div class="desc">

We exclude SymStairway because including 'up' or 'down' in its vocab
confuses the parser's interpretation of CLIMB UP and CLIMB DOWN.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
