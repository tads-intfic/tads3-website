---
layout: docs
---
<span class="title">NetRequestEvent</span><span class="type">class</span>

[tadsnet.t](../file/tadsnet.t.html)\[[80](../source/tadsnet.t.html#80)\]

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



Network Request Event. This type of event occurs when a server (such as
an HTTPServer object) receives a request from a network client.

The evRequest member contains a request object describing the network
request. The class of this object depends on the type of server that
received the request. For example, for an HTTP server, this will be an
HTTPRequest object. To reply to the request, use the appropriate
method(s) in the request object - for details, see the specific request
classes for the server types you create in your program.

`class `**`NetRequestEvent`**` :   `[`NetEvent`](../object/NetEvent.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NetRequestEvent`**  
[`NetEvent`](../object/NetEvent.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`evRequest`](#evRequest) [`evType`](#evType)

Inherited from `NetEvent` :  
[`evArgs`](../object/NetEvent.html#evArgs)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="evRequest"></span>

`evRequest`

[tadsnet.t](../file/tadsnet.t.html)\[[97](../source/tadsnet.t.html#97)\]



The request object. When the event type is NetEvRequest, this contains a
request object describing the request. The class of the request object
varies according to the server type; you can use ofKind() to check which
type of request it is. For example, for an HTTP request, this will be an
object of class HTTPRequest.



<span id="evType"></span>

`evType`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[88](../source/tadsnet.t.html#88)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (t, req)`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[82](../source/tadsnet.t.html#82)\]



construction





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


