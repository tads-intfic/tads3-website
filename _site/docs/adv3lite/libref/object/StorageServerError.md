<span class="title">StorageServerError</span><span class="type">class</span>

[\_main.t](../file/_main.t.html)\[[889](../source/_main.t.html#889)\]

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

A StorageServerError is thrown when a file operation on a remote storage
server fails. The storage server is used when the game runs on a Web
game server in client/server mode. In Web mode, files are stored on a
separate storage server rather than on the Web server itself, so that
the files can be transparently accessed if the game is continued from
another Web server. This exception is used when a request to the storage
server fails, which could be due to an error on the storage server, a
network error communicating between the game server and the storage
server, or an invalid request (e.g., incorrect user credentials).

`class `**`StorageServerError`**` :   `[`RuntimeError`](../object/RuntimeError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`StorageServerError`**  
`         `[`RuntimeError`](../object/RuntimeError.html)  
`                 `[`Exception`](../object/Exception.html)  
`                         object`  
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

` `[`errCode`](#errCode)`  `[`errMsg`](#errMsg)`  `

Inherited from `RuntimeError` :  
` `[`errno_`](../object/RuntimeError.html#errno_)`  `[`exceptionMessage`](../object/RuntimeError.html#exceptionMessage)`  `[`stack_`](../object/RuntimeError.html#stack_)`  `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`displayException`](#displayException)`  `

Inherited from `RuntimeError` :  
` `[`isDebuggerSignal`](../object/RuntimeError.html#isDebuggerSignal)`  `[`newRuntimeError`](../object/RuntimeError.html#newRuntimeError)`  `

Inherited from `Exception` :  
` `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="errCode"></span>

`errCode`

[\_main.t](../file/_main.t.html)\[[938](../source/_main.t.html#938)\]

<div class="desc">

the storage server error code

</div>

<span id="errMsg"></span>

`errMsg`

[\_main.t](../file/_main.t.html)\[[946](../source/_main.t.html#946)\]

<div class="desc">

error message - this is the message text we get back from the storage
server for a request that's successful at the HTTP level but fails on
the storage server, OR a message describing the HTTP error or network
error that caused the request to fail

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (errno, msg)`<span class="rem">OVERRIDDEN</span>

[\_main.t](../file/_main.t.html)\[[890](../source/_main.t.html#890)\]

<div class="desc">

*no description available*

</div>

<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[\_main.t](../file/_main.t.html)\[[949](../source/_main.t.html#949)\]

<div class="desc">

display the exception

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
