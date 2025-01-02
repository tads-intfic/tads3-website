---
layout: docs
---
<span class="title">FullCommandReport</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[214](../source/report.t.html#214)\]

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

base class for all "full" reports

`class `**`FullCommandReport`**` :   `[`CommandReportMessage`](../object/CommandReportMessage.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`FullCommandReport`**  
[`CommandReportMessage`](../object/CommandReportMessage.html)  
[`CommandReport`](../object/CommandReport.html)  
`                         object`  
[`MessageResult`](../object/MessageResult.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`FullCommandReport`**  
[`AfterCommandReport`](../object/AfterCommandReport.html)  
[`BeforeCommandReport`](../object/BeforeCommandReport.html)  
[`FailCommandReport`](../object/FailCommandReport.html)  
[`MainCommandReport`](../object/MainCommandReport.html)  
[`QuestionCommandReport`](../object/QuestionCommandReport.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`seqNum`](#seqNum)



Inherited from `CommandReport` :  
[`action_`](../object/CommandReport.html#action_)[`isFailure`](../object/CommandReport.html#isFailure)[`isQuestion`](../object/CommandReport.html#isQuestion)[`iter_`](../object/CommandReport.html#iter_)

Inherited from `MessageResult` :  
[`messageProp_`](../object/MessageResult.html#messageProp_)[`messageText_`](../object/MessageResult.html#messageText_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>



Inherited from `CommandReportMessage` :  
[`construct`](../object/CommandReportMessage.html#construct)

Inherited from `CommandReport` :  
[`getAction`](../object/CommandReport.html#getAction)[`isActionImplicit`](../object/CommandReport.html#isActionImplicit)[`isActionNestedIn`](../object/CommandReport.html#isActionNestedIn)[`isPartOf`](../object/CommandReport.html#isPartOf)[`setAction`](../object/CommandReport.html#setAction)

Inherited from `MessageResult` :  
[`resolveMessageText`](../object/MessageResult.html#resolveMessageText)[`setMessage`](../object/MessageResult.html#setMessage)[`showMessage`](../object/MessageResult.html#showMessage)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="seqNum"></span>

`seqNum`

[report.t](../file/report.t.html)\[[220](../source/report.t.html#220)\]

<div class="desc">

a full report has a sequence number that tells us where the report goes
relative to the others - the higher this number, the later the report
goes

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
