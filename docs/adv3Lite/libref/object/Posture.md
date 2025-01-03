---
layout: docs
---
<span class="title">Posture</span><span class="type">class</span>

[postures.t](../file/postures.t.html)\[[34](../source/postures.t.html#34)\]

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



The Posture class is used to define the various postures used in the
POSTURES EXTENSION.

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



[`allowedInProp`](#allowedInProp) [`allowedOnProp`](#allowedOnProp) [`cannotInMsgProp`](#cannotInMsgProp) [`cannotOnMsgProp`](#cannotOnMsgProp) [`participle`](#participle) [`verbPhrase`](#verbPhrase)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canAdoptIn`](#canAdoptIn)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowedInProp"></span>

`allowedInProp`

[postures.t](../file/postures.t.html)\[[43](../source/postures.t.html#43)\]



The property of a potential container that must be true if the actor is
to be allowed to adopt this posture in that container (e.g.
&canStandInMe). \[POSTURES EXTENSION\]



<span id="allowedOnProp"></span>

`allowedOnProp`

[postures.t](../file/postures.t.html)\[[50](../source/postures.t.html#50)\]



The property of a potential container that must be true if the actor is
to be allowed to adopt this posture on that container (e.g.
&canStandOnMe). \[POSTURES EXTENSION\]



<span id="cannotInMsgProp"></span>

`cannotInMsgProp`

[postures.t](../file/postures.t.html)\[[56](../source/postures.t.html#56)\]



The property of a potential container that contains the message to
display if we can't adopt this posture in it. \[POSTURES EXTENSION\]



<span id="cannotOnMsgProp"></span>

`cannotOnMsgProp`

[postures.t](../file/postures.t.html)\[[62](../source/postures.t.html#62)\]



The property of a potential container that contains the message to
display if we can't adopt this posture on it. \[POSTURES EXTENSION\]



<span id="participle"></span>

`participle`

[postures.t](../file/postures.t.html)\[[36](../source/postures.t.html#36)\]



The participle (e.g. 'standing') relating to the posture. \[POSTURES
EXTENSION\]



<span id="verbPhrase"></span>

`verbPhrase`

[postures.t](../file/postures.t.html)\[[79](../source/postures.t.html#79)\]



The verb phrase (subject and verb) corresponding an action that involves
taking this posture. \[POSTURES EXTENSION\]



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canAdoptIn"></span>

`canAdoptIn (obj)`

[postures.t](../file/postures.t.html)\[[69](../source/postures.t.html#69)\]



A method that returns true or nil according to whether an actor can
adopt this posture in/on obj, which depends on the contType of obj.
\[POSTURES EXTENSION\]
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


