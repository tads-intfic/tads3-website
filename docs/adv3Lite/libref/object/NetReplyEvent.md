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

<div class="fdesc">

Network Reply event. This type of event occurs when we receive a reply
to a network request made with sendNetRequest().

`class `**`NetReplyEvent`**` :   `[`NetEvent`](../object/NetEvent.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`NetReplyEvent`**  
[`NetEvent`](../object/NetEvent.html)  
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

[`evType`](#evType)[`httpStatusLine`](#httpStatusLine)[`redirectLoc`](#redirectLoc)[`replyBody`](#replyBody)[`replyHeaders`](#replyHeaders)[`replyHeadersRaw`](#replyHeadersRaw)[`requestID`](#requestID)[`statusCode`](#statusCode)

Inherited from `NetEvent` :  
[`evArgs`](../object/NetEvent.html#evArgs)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="evType"></span>

`evType`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[164](../source/tadsnet.t.html#164)\]

<div class="desc">

our default event type is NetEvReply

</div>

<span id="httpStatusLine"></span>

`httpStatusLine`

[tadsnet.t](../file/tadsnet.t.html)\[[211](../source/tadsnet.t.html#211)\]

<div class="desc">

the HTTP status string (the first line of the headers)

</div>

<span id="redirectLoc"></span>

`redirectLoc`

[tadsnet.t](../file/tadsnet.t.html)\[[234](../source/tadsnet.t.html#234)\]

<div class="desc">

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

</div>

<span id="replyBody"></span>

`replyBody`

[tadsnet.t](../file/tadsnet.t.html)\[[202](../source/tadsnet.t.html#202)\]

<div class="desc">

the content body from the reply

</div>

<span id="replyHeaders"></span>

`replyHeaders`

[tadsnet.t](../file/tadsnet.t.html)\[[208](../source/tadsnet.t.html#208)\]

<div class="desc">

the HTTP headers from the reply, as a lookup table indexed by header
name

</div>

<span id="replyHeadersRaw"></span>

`replyHeadersRaw`

[tadsnet.t](../file/tadsnet.t.html)\[[218](../source/tadsnet.t.html#218)\]

<div class="desc">

the HTTP headers from the reply, in the raw text format - this is simply
a string of all the headers, separated by CR-LF (\r\n) sequences

</div>

<span id="requestID"></span>

`requestID`

[tadsnet.t](../file/tadsnet.t.html)\[[171](../source/tadsnet.t.html#171)\]

<div class="desc">

The request identifier. This is the ID value provided by the caller in
the call to sendNetRequest(), so that the caller can relate the reply
back to the corresponding request.

</div>

<span id="statusCode"></span>

`statusCode`

[tadsnet.t](../file/tadsnet.t.html)\[[199](../source/tadsnet.t.html#199)\]

<div class="desc">

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

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (t, id, status, body, headers, loc)`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[114](../source/tadsnet.t.html#114)\]

<div class="desc">

construction

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
