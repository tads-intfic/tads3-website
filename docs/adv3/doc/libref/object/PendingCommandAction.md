---
---
<span class="title">PendingCommandAction</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[10519](../source/actor.t.html#10519)\]

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

a pending command based on a pre-resolved Action and its objects

`class `**`PendingCommandAction`**` :   `[`PendingCommandInfo`](../object/PendingCommandInfo.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PendingCommandAction`**  
`         `[`PendingCommandInfo`](../object/PendingCommandInfo.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`action_`](#action_)`  `[`objs_`](#objs_)`  `

Inherited from `PendingCommandInfo` :  
` `[`hasCommand`](../object/PendingCommandInfo.html#hasCommand)`  `[`issuer_`](../object/PendingCommandInfo.html#issuer_)`  `[`startOfSentence_`](../object/PendingCommandInfo.html#startOfSentence_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`executePending`](#executePending)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="action_"></span>

`action_`

[actor.t](../file/actor.t.html)\[[10549](../source/actor.t.html#10549)\]

<div class="desc">

the resolved Action to perform

</div>

<span id="objs_"></span>

`objs_`

[actor.t](../file/actor.t.html)\[[10552](../source/actor.t.html#10552)\]

<div class="desc">

the resolved objects for the action

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (startOfSentence, issuer, action, [objs])`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10520](../source/actor.t.html#10520)\]

<div class="desc">

*no description available*

</div>

<span id="executePending"></span>

`executePending (targetActor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10530](../source/actor.t.html#10530)\]

<div class="desc">

execute the pending command

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
