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

<div class="fdesc">

Network Reply Done event. This type of event occurs when an asynchronous
network reply (such as HTTPRequest.sendReplyAsync()) completes.

`class `**`NetReplyDoneEvent`**` :   `[`NetEvent`](../object/NetEvent.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`NetReplyDoneEvent`**  
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

[`errMsg`](#errMsg)[`evType`](#evType)[`requestObj`](#requestObj)[`socketErr`](#socketErr)

Inherited from `NetEvent` :  
[`evArgs`](../object/NetEvent.html#evArgs)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`isSuccessful`](#isSuccessful)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="errMsg"></span>

`errMsg`

[tadsnet.t](../file/tadsnet.t.html)\[[276](../source/tadsnet.t.html#276)\]

<div class="desc">

Error message, if any. If the reply failed, this contains a string with
a description of the error that occurred. If the reply was sent
successfully, this is nil.

</div>

<span id="evType"></span>

`evType`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[253](../source/tadsnet.t.html#253)\]

<div class="desc">

our default event type is NetEvReplyDone

</div>

<span id="requestObj"></span>

`requestObj`

[tadsnet.t](../file/tadsnet.t.html)\[[259](../source/tadsnet.t.html#259)\]

<div class="desc">

The object representing the request we replied to. For HTTP requests,
this is an HTTPRequest object.

</div>

<span id="socketErr"></span>

`socketErr`

[tadsnet.t](../file/tadsnet.t.html)\[[269](../source/tadsnet.t.html#269)\]

<div class="desc">

The socket error, if any. If the reply failed due to a network error,
this contains the error number. If no network error occurred, this is
zero.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (t, req, err, msg)`<span class="rem">OVERRIDDEN</span>

[tadsnet.t](../file/tadsnet.t.html)\[[244](../source/tadsnet.t.html#244)\]

<div class="desc">

construction

</div>

<span id="isSuccessful"></span>

`isSuccessful ( )`

[tadsnet.t](../file/tadsnet.t.html)\[[262](../source/tadsnet.t.html#262)\]

<div class="desc">

was the reply successfully sent?

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
