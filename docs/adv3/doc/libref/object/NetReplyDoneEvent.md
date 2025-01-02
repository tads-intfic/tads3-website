---
layout: docs
---
<span class="title">NetReplyDoneEvent</span><span class="type">class</span>

[tadsnet.t](../file/tadsnet.t.html)\[[242](../source/tadsnet.t.html#242)\]

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



Network Reply Done event. This type of event occurs when an asynchronous
network reply (such as HTTPRequest.sendReplyAsync()) completes.

`class `**`NetReplyDoneEvent`**` :   `[`NetEvent`](../object/NetEvent.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NetReplyDoneEvent`**  
[`NetEvent`](../object/NetEvent.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`errMsg`](#errMsg)[`evType`](#evType)[`requestObj`](#requestObj)[`socketErr`](#socketErr)

Inherited from `NetEvent` :  
[`evArgs`](../object/NetEvent.html#evArgs)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`isSuccessful`](#isSuccessful)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="errMsg"></span>

`errMsg`

[tadsnet.t](../file/tadsnet.t.html)\[[276](../source/tadsnet.t.html#276)\]



Error message, if any. If the reply failed, this contains a string with
a description of the error that occurred. If the reply was sent
successfully, this is nil.



<span id="evType"></span>

`evType`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[253](../source/tadsnet.t.html#253)\]



our default event type is NetEvReplyDone



<span id="requestObj"></span>

`requestObj`

[tadsnet.t](../file/tadsnet.t.html)\[[259](../source/tadsnet.t.html#259)\]



The object representing the request we replied to. For HTTP requests,
this is an HTTPRequest object.



<span id="socketErr"></span>

`socketErr`

[tadsnet.t](../file/tadsnet.t.html)\[[269](../source/tadsnet.t.html#269)\]



The socket error, if any. If the reply failed due to a network error,
this contains the error number. If no network error occurred, this is
zero.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (t, req, err, msg)`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[244](../source/tadsnet.t.html#244)\]



construction



<span id="isSuccessful"></span>

`isSuccessful ( )`

[tadsnet.t](../file/tadsnet.t.html)\[[262](../source/tadsnet.t.html#262)\]



was the reply successfully sent?





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


