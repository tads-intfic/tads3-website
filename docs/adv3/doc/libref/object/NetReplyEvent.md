---
layout: docs
---
<span class="title">NetReplyEvent</span><span class="type">class</span>

[tadsnet.t](../file/tadsnet.t.html)\[[112](../source/tadsnet.t.html#112)\]

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



Network Reply event. This type of event occurs when we receive a reply
to a network request made with sendNetRequest().

`class `**`NetReplyEvent`**` :   `[`NetEvent`](../object/NetEvent.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NetReplyEvent`**  
[`NetEvent`](../object/NetEvent.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`evType`](#evType)[`httpStatusLine`](#httpStatusLine)[`redirectLoc`](#redirectLoc)[`replyBody`](#replyBody)[`replyHeaders`](#replyHeaders)[`replyHeadersRaw`](#replyHeadersRaw)[`requestID`](#requestID)[`statusCode`](#statusCode)

Inherited from `NetEvent` :  
[`evArgs`](../object/NetEvent.html#evArgs)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="evType"></span>

`evType`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[164](../source/tadsnet.t.html#164)\]



our default event type is NetEvReply



<span id="httpStatusLine"></span>

`httpStatusLine`

[tadsnet.t](../file/tadsnet.t.html)\[[211](../source/tadsnet.t.html#211)\]



the HTTP status string (the first line of the headers)



<span id="redirectLoc"></span>

`redirectLoc`

[tadsnet.t](../file/tadsnet.t.html)\[[234](../source/tadsnet.t.html#234)\]



Redirect location, if applicable. By default, this will be nil whether
or not a redirection took place, because sendNetRequest() normally
follows redirection links transparently, returning only the final result
from the final server we're redirected to. However, you can override
automatic redirection with an option flag (NetReqNoRedirect) when
calling sendNetRequest(). When that option is selected, the function
won't follow redirection links at all, but will instead simply return
the redirect information as the result from the request. When that
happens, this property is set to a string giving the target of the
redirect. You can then follow the redirect manually, if desired, by
sending a new request to the target given here.



<span id="replyBody"></span>

`replyBody`

[tadsnet.t](../file/tadsnet.t.html)\[[202](../source/tadsnet.t.html#202)\]



the content body from the reply



<span id="replyHeaders"></span>

`replyHeaders`

[tadsnet.t](../file/tadsnet.t.html)\[[208](../source/tadsnet.t.html#208)\]



the HTTP headers from the reply, as a lookup table indexed by header
name



<span id="replyHeadersRaw"></span>

`replyHeadersRaw`

[tadsnet.t](../file/tadsnet.t.html)\[[218](../source/tadsnet.t.html#218)\]



the HTTP headers from the reply, in the raw text format - this is simply
a string of all the headers, separated by CR-LF (\r\n) sequences



<span id="requestID"></span>

`requestID`

[tadsnet.t](../file/tadsnet.t.html)\[[171](../source/tadsnet.t.html#171)\]



The request identifier. This is the ID value provided by the caller in
the call to sendNetRequest(), so that the caller can relate the reply
back to the corresponding request.



<span id="statusCode"></span>

`statusCode`

[tadsnet.t](../file/tadsnet.t.html)\[[199](../source/tadsnet.t.html#199)\]



The network status code. This is an integer value indicating whether the
request was successful or failed with an error. A negative value is a
low-level TADS error indicating that the request couldn't be sent to the
server, or that a network error occurred receiving the reply:

  
-1 - out of memory  
-2 - couldn't connect to host  
-3 - other network/socket error  
-4 - invalid parameters  
-5 - error reading the content data to send to the server  
-6 - error saving the reply data received from the server  
-7 - error retrieving reply headers  
-8 - error starting background thread  
-100 - other TADS/network error

A positive value means that the network transaction itself was
successful, and reflects the status information returned by the network
server that handled the request. This must be interpreted according to
the protocol used to send the request:

\- For HTTP requests, the value is an HTTP status code. A code in the
200 range generally indicates success, while other ranges generally
indicate errors.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (t, id, status, body, headers, loc)`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[114](../source/tadsnet.t.html#114)\]



construction





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


