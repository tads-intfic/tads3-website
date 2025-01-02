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

<div class="fdesc">

The Posture class is used to define the various postures used in the
POSTURES EXTENSION.

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

` `[`allowedInProp`](#allowedInProp)`  `[`allowedOnProp`](#allowedOnProp)`  `[`cannotInMsgProp`](#cannotInMsgProp)`  `[`cannotOnMsgProp`](#cannotOnMsgProp)`  `[`participle`](#participle)`  `[`verbPhrase`](#verbPhrase)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`canAdoptIn`](#canAdoptIn)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowedInProp"></span>

`allowedInProp`

[postures.t](../file/postures.t.html)\[[43](../source/postures.t.html#43)\]

<div class="desc">

The property of a potential container that must be true if the actor is
to be allowed to adopt this posture in that container (e.g.
&canStandInMe). \[POSTURES EXTENSION\]

</div>

<span id="allowedOnProp"></span>

`allowedOnProp`

[postures.t](../file/postures.t.html)\[[50](../source/postures.t.html#50)\]

<div class="desc">

The property of a potential container that must be true if the actor is
to be allowed to adopt this posture on that container (e.g.
&canStandOnMe). \[POSTURES EXTENSION\]

</div>

<span id="cannotInMsgProp"></span>

`cannotInMsgProp`

[postures.t](../file/postures.t.html)\[[56](../source/postures.t.html#56)\]

<div class="desc">

The property of a potential container that contains the message to
display if we can't adopt this posture in it. \[POSTURES EXTENSION\]

</div>

<span id="cannotOnMsgProp"></span>

`cannotOnMsgProp`

[postures.t](../file/postures.t.html)\[[62](../source/postures.t.html#62)\]

<div class="desc">

The property of a potential container that contains the message to
display if we can't adopt this posture on it. \[POSTURES EXTENSION\]

</div>

<span id="participle"></span>

`participle`

[postures.t](../file/postures.t.html)\[[36](../source/postures.t.html#36)\]

<div class="desc">

The participle (e.g. 'standing') relating to the posture. \[POSTURES
EXTENSION\]

</div>

<span id="verbPhrase"></span>

`verbPhrase`

[postures.t](../file/postures.t.html)\[[79](../source/postures.t.html#79)\]

<div class="desc">

The verb phrase (subject and verb) corresponding an action that involves
taking this posture. \[POSTURES EXTENSION\]

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canAdoptIn"></span>

`canAdoptIn (obj)`

[postures.t](../file/postures.t.html)\[[69](../source/postures.t.html#69)\]

<div class="desc">

A method that returns true or nil according to whether an actor can
adopt this posture in/on obj, which depends on the contType of obj.
\[POSTURES EXTENSION\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
