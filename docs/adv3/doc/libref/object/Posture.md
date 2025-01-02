---
---
<span class="title">Posture</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[103](../source/actor.t.html#103)\],
[en_us.t](../file/en_us.t.html)\[[2596](../source/en_us.t.html#2596)\]

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

Postures. A posture describes how an actor is internally positioned:
standing, lying, sitting. We represent postures with objects of class
Posture to make it easier to add new game-specific postures.

*Modified in
[en_us.t](../file/en_us.t.html)\[[2596](../source/en_us.t.html#2596)\]:*  
Give the postures some additional attributes

`class `**`Posture`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Posture`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`lying`](../object/lying.html)`  `[`sitting`](../object/sitting.html)`  `[`standing`](../object/standing.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`msgVerbI`](#msgVerbI)`  `[`msgVerbIPast`](#msgVerbIPast)`  `[`msgVerbIPresent`](#msgVerbIPresent)`  `[`msgVerbT`](#msgVerbT)`  `[`msgVerbTPast`](#msgVerbTPast)`  `[`msgVerbTPresent`](#msgVerbTPresent)`  `[`participle`](#participle)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`setActorToPosture`](#setActorToPosture)`  `[`tryMakingPosture`](#tryMakingPosture)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="msgVerbI"></span>

`msgVerbI`

[en_us.t](../file/en_us.t.html)\[[2604](../source/en_us.t.html#2604)\]

<div class="desc">

Intransitive and transitive forms of the verb, for use in library
messages. Each of these methods simply calls one of the two
corresponding fixed-tense properties, depending on the current tense.

</div>

<span id="msgVerbIPast"></span>

`// msgVerbIPast`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2616](../source/en_us.t.html#2616)\]

<div class="desc">

our past-tense intransitive form ("he stood up")

</div>

<span id="msgVerbIPresent"></span>

`// msgVerbIPresent`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2613](../source/en_us.t.html#2613)\]

<div class="desc">

our present-tense intransitive form ("he stands up")

</div>

<span id="msgVerbT"></span>

`msgVerbT`

[en_us.t](../file/en_us.t.html)\[[2605](../source/en_us.t.html#2605)\]

<div class="desc">

*no description available*

</div>

<span id="msgVerbTPast"></span>

`// msgVerbTPast`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2622](../source/en_us.t.html#2622)\]

<div class="desc">

our past-tense transitive form ("he stood on the chair")

</div>

<span id="msgVerbTPresent"></span>

`// msgVerbTPresent`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2619](../source/en_us.t.html#2619)\]

<div class="desc">

our present-tense transitive form ("he stands on the chair")

</div>

<span id="participle"></span>

`// participle`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2625](../source/en_us.t.html#2625)\]

<div class="desc">

our participle form

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="setActorToPosture"></span>

`setActorToPosture (actor, loc)`

[actor.t](../file/actor.t.html)\[[111](../source/actor.t.html#111)\]

<div class="desc">

put the actor into our posture via a nested action

</div>

<span id="tryMakingPosture"></span>

`tryMakingPosture (loc)`

[actor.t](../file/actor.t.html)\[[108](../source/actor.t.html#108)\]

<div class="desc">

Try getting the current actor into this posture within the given
location, by running an appropriate implied command.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
