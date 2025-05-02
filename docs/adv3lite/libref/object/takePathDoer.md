---
layout: docs
---
<span class="title">takePathDoer</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[5945](../source/english.t.html#5945)\]

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



In English taking a path means going along it

**`takePathDoer`**` :   `[`Doer`](../object/Doer.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`takePathDoer`**  
[`Doer`](../object/Doer.html)  
[`Redirector`](../object/Redirector.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`ignoreError`](#ignoreError) [`strict`](#strict)

Inherited from `Doer` :  
[`cmd`](../object/Doer.html#cmd) [`handleAction`](../object/Doer.html#handleAction) [`priority`](../object/Doer.html#priority)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execAction`](#execAction)

Inherited from `Doer` :  
[`checkDirection`](../object/Doer.html#checkDirection) [`exec`](../object/Doer.html#exec) [`redirect`](../object/Doer.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="ignoreError"></span>

`ignoreError`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[5961](../source/english.t.html#5961)\]



Ignore an error report for this Doer in PreInit, since it only means
that extras.t hasn't been included.



<span id="strict"></span>

`strict`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[5955](../source/english.t.html#5955)\]



But this only applies if the command is actually 'take' and not a
synonymn like 'get' or 'pick up'



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execAction"></span>

`execAction (c)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[5946](../source/english.t.html#5946)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


