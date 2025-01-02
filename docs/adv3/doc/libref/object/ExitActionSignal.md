---
layout: docs
---
<span class="title">ExitActionSignal</span><span class="type">class</span>

[exec.t](../file/exec.t.html)\[[1326](../source/exec.t.html#1326)\]

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



Exit Action signal. This signal indicates that we're finished with the
execAction portion of processing the command, but we still want to
proceed with the rest of the command as normal. This can be used when a
step in the action processing wants to preempt any of the more default
processing that would normally follow. This skips directly to the
'afterAction' phase of the command.

Note that this doesn't prevent further processing of the same command if
there are multiple objects involved, and it doesn't affect processing of
additional commands on the same command line. If you want to cancel
further iteration of the same command for additional objects, call
gAction.cancelIteration().

`class `**`ExitActionSignal`**` :   `[`Exception`](../object/Exception.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ExitActionSignal`**  
[`Exception`](../object/Exception.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `Exception` :  
[`construct`](../object/Exception.html#construct) [`displayException`](../object/Exception.html#displayException) [`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


