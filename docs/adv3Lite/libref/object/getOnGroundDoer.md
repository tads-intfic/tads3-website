---
layout: docs
---
<span class="title">getOnGroundDoer</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[5934](../source/english.t.html#5934)\]

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



'Get on ground' or 'stand on ground' does nothing if the player is
already directly in a room, so in that case we just display an
appropriate message; otherwise we take the command as equivalent to
getting out of the actor's immediate container.

**`getOnGroundDoer`**` :   `[`Doer`](../object/Doer.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`getOnGroundDoer`**  
[`Doer`](../object/Doer.html)  
[`Redirector`](../object/Redirector.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Doer` :  
[`cmd`](../object/Doer.html#cmd)[`handleAction`](../object/Doer.html#handleAction)[`ignoreError`](../object/Doer.html#ignoreError)[`priority`](../object/Doer.html#priority)[`strict`](../object/Doer.html#strict)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execAction`](#execAction)

Inherited from `Doer` :  
[`checkDirection`](../object/Doer.html#checkDirection)[`exec`](../object/Doer.html#exec)[`redirect`](../object/Doer.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead)[`doNested`](../object/Redirector.html#doNested)[`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execAction"></span>

`execAction (c)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[5935](../source/english.t.html#5935)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


