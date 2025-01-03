---
layout: docs
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



Postures. A posture describes how an actor is internally positioned:
standing, lying, sitting. We represent postures with objects of class
Posture to make it easier to add new game-specific postures.

*Modified in
[en_us.t](../file/en_us.t.html)\[[2596](../source/en_us.t.html#2596)\]:*  
Give the postures some additional attributes

`class `**`Posture`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Posture`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`lying`](../object/lying.html) [`sitting`](../object/sitting.html) [`standing`](../object/standing.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`msgVerbI`](#msgVerbI) [`msgVerbIPast`](#msgVerbIPast) [`msgVerbIPresent`](#msgVerbIPresent) [`msgVerbT`](#msgVerbT) [`msgVerbTPast`](#msgVerbTPast) [`msgVerbTPresent`](#msgVerbTPresent) [`participle`](#participle)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`setActorToPosture`](#setActorToPosture) [`tryMakingPosture`](#tryMakingPosture)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="msgVerbI"></span>

`msgVerbI`

[en_us.t](../file/en_us.t.html)\[[2604](../source/en_us.t.html#2604)\]



Intransitive and transitive forms of the verb, for use in library
messages. Each of these methods simply calls one of the two
corresponding fixed-tense properties, depending on the current tense.



<span id="msgVerbIPast"></span>

`// msgVerbIPast`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2616](../source/en_us.t.html#2616)\]



our past-tense intransitive form ("he stood up")



<span id="msgVerbIPresent"></span>

`// msgVerbIPresent`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2613](../source/en_us.t.html#2613)\]



our present-tense intransitive form ("he stands up")



<span id="msgVerbT"></span>

`msgVerbT`

[en_us.t](../file/en_us.t.html)\[[2605](../source/en_us.t.html#2605)\]



*no description available*



<span id="msgVerbTPast"></span>

`// msgVerbTPast`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2622](../source/en_us.t.html#2622)\]



our past-tense transitive form ("he stood on the chair")



<span id="msgVerbTPresent"></span>

`// msgVerbTPresent`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2619](../source/en_us.t.html#2619)\]



our present-tense transitive form ("he stands on the chair")



<span id="participle"></span>

`// participle`<span class="rem">Interface description only</span>

[en_us.t](../file/en_us.t.html)\[[2625](../source/en_us.t.html#2625)\]



our participle form



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="setActorToPosture"></span>

`setActorToPosture (actor, loc)`

[actor.t](../file/actor.t.html)\[[111](../source/actor.t.html#111)\]



put the actor into our posture via a nested action



<span id="tryMakingPosture"></span>

`tryMakingPosture (loc)`

[actor.t](../file/actor.t.html)\[[108](../source/actor.t.html#108)\]



Try getting the current actor into this posture within the given
location, by running an appropriate implied command.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


