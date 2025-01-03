---
layout: docs
---
<span class="title">SocketDisconnectException</span><span class="type">class</span>

[tadsnet.t](../file/tadsnet.t.html)\[[393](../source/tadsnet.t.html#393)\]

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



A SocketDisconnectException is thrown when attempting to read or write a
network socket that's been closed, either by us or by the peer (the
computer on the other end of the network connection). If we didn't close
the socket on this side, this error usually means simply that the peer
program has terminated or otherwise disconnected, so we should consider
the conversation terminated.

`class `**`SocketDisconnectException`**` :   `[`NetException`](../object/NetException.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SocketDisconnectException`**  
[`NetException`](../object/NetException.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`errMsg`](#errMsg)



Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `NetException` :  
[`construct`](../object/NetException.html#construct) [`displayException`](../object/NetException.html#displayException)

Inherited from `Exception` :  
[`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="errMsg"></span>

`errMsg`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[394](../source/tadsnet.t.html#394)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


