<span class="title">RemapActionSignal</span><span class="type">class</span>

[exec.t](../file/exec.t.html)\[[1353](../source/exec.t.html#1353)\]

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

Action Remap signal. This signal can be thrown only during the noun
phrase resolution phase of execution, and indicates that we want to
remap the action to a different action, specified in the signal.

This is useful when an object is always used in a special way, so that a
generic verb used with the object must be mapped to a more specific verb
on the object. For example, a game with a generic USE verb might convert
USE PAINTBRUSH ON WALL to PAINT WALL WITH PAINTBRUSH by remapping the
UseWith action to a PaintWith action instead.

`class `**`RemapActionSignal`**` :   `[`Exception`](../object/Exception.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RemapActionSignal`**  
`         `[`Exception`](../object/Exception.html)  
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

` `[`action_`](#action_)`  `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

Inherited from `Exception` :  
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="action_"></span>

`action_`

[exec.t](../file/exec.t.html)\[[1361](../source/exec.t.html#1361)\]

<div class="desc">

the new action that should replace the original action

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (action)`<span class="rem">OVERRIDDEN</span>

[exec.t](../file/exec.t.html)\[[1354](../source/exec.t.html#1354)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>