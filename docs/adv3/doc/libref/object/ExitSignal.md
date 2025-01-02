<span class="title">ExitSignal</span><span class="type">class</span>

[exec.t](../file/exec.t.html)\[[1309](../source/exec.t.html#1309)\]

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

Exit signal. This signal indicates that we're finished with the entire
command execution sequence for an action; the remainder of the command
execution sequence is to be skipped for the action. Throw this from
within the command execution sequence in order to skip directly to the
end-of-turn processing. This skips everything remaining in the action,
including after-action notification and the like. This signal skips
directly past the 'afterAction' phase of the command.

Note that this doesn't prevent further processing of the same command if
there are multiple objects involved, and it doesn't affect processing of
additional commands on the same command line. If you want to cancel
further iteration of the same command for additional objects, call
gAction.cancelIteration().

`class `**`ExitSignal`**` :   `[`Exception`](../object/Exception.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ExitSignal`**  
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

` `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `Exception` :  
` `[`construct`](../object/Exception.html#construct)`  `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
