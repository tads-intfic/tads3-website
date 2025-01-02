---
---
<span class="title">Signal</span><span class="type">object</span>

[signals.t](../file/signals.t.html)\[[29](../source/signals.t.html#29)\]

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

A Signal is a kind of Relation that can be used to send a signal from a
sender to all the objects related to that sender via this Signal
Relation.

For a signal to be sent from a sender to a receiver, a relationship
first needs to be set up between them with a statement like:

connect(sender, signal, receiver);

Where signal is either the programmatic name or the string name of the
signal we want sent.

To break the link subsequently we can use:

unconnect(sender, signal, receiver);

\[SIGNALS EXTENSION\]

**`Signal`**` :   `[`Relation`](../object/Relation.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Signal`**  
`         `[`Relation`](../object/Relation.html)  
`                 `[`PreinitObject`](../object/PreinitObject.html)  
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`dispatchTab`](#dispatchTab)`  `[`propList`](#propList)`  `[`relationType`](#relationType)`  `

Inherited from `Relation` :  
` `[`name`](../object/Relation.html#name)`  `[`reciprocal`](../object/Relation.html#reciprocal)`  `[`relTab`](../object/Relation.html#relTab)`  `[`reverseName`](../object/Relation.html#reverseName)`  `

Inherited from `PreinitObject` :  
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addHandler`](#addHandler)`  `[`emit`](#emit)`  `[`removeHandler`](#removeHandler)`  `

Inherited from `Relation` :  
` `[`addRelation`](../object/Relation.html#addRelation)`  `[`inverselyRelatedTo`](../object/Relation.html#inverselyRelatedTo)`  `[`isInverselyRelated`](../object/Relation.html#isInverselyRelated)`  `[`isRelated`](../object/Relation.html#isRelated)`  `[`makeUnique`](../object/Relation.html#makeUnique)`  `[`relatedTo`](../object/Relation.html#relatedTo)`  `[`removeRelation`](../object/Relation.html#removeRelation)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="dispatchTab"></span>

`dispatchTab`

[signals.t](../file/signals.t.html)\[[99](../source/signals.t.html#99)\]

<div class="desc">

A LookupTable liniking objects that might emit this signal (potential
senders) to potential receivers of this signal, so that notifications
can be sent from the former to the latter. Game code should not need to
manipulate this table directly; it should instead be updated via the
supplied connect() and unconnect() functions.

\[SIGNALS EXTENSION\]

</div>

<span id="propList"></span>

`propList`

[signals.t](../file/signals.t.html)\[[89](../source/signals.t.html#89)\]

<div class="desc">

A list of pointers to the properties to which additional arguments to
our emit method should be assigned. \[SIGNALS EXTENSION\]

</div>

<span id="relationType"></span>

`relationType`<span class="rem">OVERRIDDEN</span>

[signals.t](../file/signals.t.html)\[[31](../source/signals.t.html#31)\]

<div class="desc">

Signals can potentially relate many things to many other things.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addHandler"></span>

`addHandler (sender, receiver, handler)`

[signals.t](../file/signals.t.html)\[[101](../source/signals.t.html#101)\]

<div class="desc">

*no description available*

</div>

<span id="emit"></span>

`emit (sender, [args])`

[signals.t](../file/signals.t.html)\[[46](../source/signals.t.html#46)\]

<div class="desc">

Notify every object related to sender by us to handle us as a signal
from sender.

If additional args are supplied, they can take one of two forms. Either
values, which are then assigned in turn to the properties listed in our
propList property, or two-element lists of the form \[prop, val\] where
prop is a property pointer and val is the value to be assigned to this
property. Note that these two forms cannot be mixed in the same call to
this method, unless all the list form arguments come at the end.

\[SIGNALS EXTENSION\]

</div>

<span id="removeHandler"></span>

`removeHandler (sender, receiver)`

[signals.t](../file/signals.t.html)\[[109](../source/signals.t.html#109)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
