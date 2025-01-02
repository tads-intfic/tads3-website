---
layout: docs
---
<span class="title">MessageResult</span><span class="type">class</span>

[exec.t](../file/exec.t.html)\[[1577](../source/exec.t.html#1577)\]

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



Result message object. This is used for verification results and main
command reports, which must keep track of messages to display.

`class `**`MessageResult`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MessageResult`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`MessageResult`**  
[`CommandReportMessage`](../object/CommandReportMessage.html)  
[`CosmeticSpacingCommandReport`](../object/CosmeticSpacingCommandReport.html)  
[`DefaultCommandReport`](../object/DefaultCommandReport.html)  
[`DefaultDescCommandReport`](../object/DefaultDescCommandReport.html)  
[`ExtraCommandReport`](../object/ExtraCommandReport.html)  
[`FullCommandReport`](../object/FullCommandReport.html)  
[`AfterCommandReport`](../object/AfterCommandReport.html)  
[`BeforeCommandReport`](../object/BeforeCommandReport.html)  
[`FailCommandReport`](../object/FailCommandReport.html)  
[`MainCommandReport`](../object/MainCommandReport.html)  
[`QuestionCommandReport`](../object/QuestionCommandReport.html)  
[`VerifyResult`](../object/VerifyResult.html)  
[`DangerousVerifyResult`](../object/DangerousVerifyResult.html)  
[`IllogicalNowVerifyResult`](../object/IllogicalNowVerifyResult.html)  
[`IllogicalAlreadyVerifyResult`](../object/IllogicalAlreadyVerifyResult.html)  
[`IllogicalVerifyResult`](../object/IllogicalVerifyResult.html)  
[`IllogicalSelfVerifyResult`](../object/IllogicalSelfVerifyResult.html)  
[`InaccessibleVerifyResult`](../object/InaccessibleVerifyResult.html)  
[`LogicalVerifyResult`](../object/LogicalVerifyResult.html)  
[`NonObviousVerifyResult`](../object/NonObviousVerifyResult.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`messageProp_`](#messageProp_)[`messageText_`](#messageText_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`resolveMessageText`](#resolveMessageText)[`setMessage`](#setMessage)[`showMessage`](#showMessage)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="messageProp_"></span>

`messageProp_`

[exec.t](../file/exec.t.html)\[[1850](../source/exec.t.html#1850)\]



the message property, if we have one



<span id="messageText_"></span>

`messageText_`

[exec.t](../file/exec.t.html)\[[1847](../source/exec.t.html#1847)\]



the text of our result message



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (msg, [params])`

[exec.t](../file/exec.t.html)\[[1585](../source/exec.t.html#1585)\]



Construct given literal message text, or alternatively a property of the
current actor's verb messages object. In either case, we'll expand the
message immediately to allow the message to be displayed later with any
parameters fixed at the time the message is constructed.



<span id="resolveMessageText"></span>

`resolveMessageText (sources, msg, params)`

[exec.t](../file/exec.t.html)\[[1620](../source/exec.t.html#1620)\]



Static method: resolve a message. If the message is given as a property,
we'll look up the message in the given source objects and in the actor's
"action messages" object. We'll return the resolved message string.



<span id="setMessage"></span>

`setMessage (msg, [params])`

[exec.t](../file/exec.t.html)\[[1831](../source/exec.t.html#1831)\]



set a new message, given the same type of information as we'd use to
construct the object



<span id="showMessage"></span>

`showMessage ( )`

[exec.t](../file/exec.t.html)\[[1840](../source/exec.t.html#1840)\]



Display a message describing why the command isn't allowed.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


