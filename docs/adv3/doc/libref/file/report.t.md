---
layout: docs
---
<span class="title">report.t</span><span class="type">file</span>

[source file](../source/report.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



TADS 3 Library: command reports

This module defines the "command report" classes, which the command
execution engine uses to keep track of the status of a command.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`AfterCommandReport`](../object/AfterCommandReport.html) [`AmbigObjectAnnouncement`](../object/AmbigObjectAnnouncement.html) [`BeforeCommandReport`](../object/BeforeCommandReport.html) [`CommandAnnouncement`](../object/CommandAnnouncement.html) [`CommandReport`](../object/CommandReport.html) [`CommandReportMessage`](../object/CommandReportMessage.html) [`CommandSepAnnouncement`](../object/CommandSepAnnouncement.html) [`CommandTranscript`](../object/CommandTranscript.html) [`ConvBeginReport`](../object/ConvBeginReport.html) [`ConvBoundaryReport`](../object/ConvBoundaryReport.html) [`ConvEndReport`](../object/ConvEndReport.html) [`CosmeticSpacingCommandReport`](../object/CosmeticSpacingCommandReport.html) [`DefaultCommandReport`](../object/DefaultCommandReport.html) [`DefaultDescCommandReport`](../object/DefaultDescCommandReport.html) [`DefaultObjectAnnouncement`](../object/DefaultObjectAnnouncement.html) [`EndOfDescReport`](../object/EndOfDescReport.html) [`ExtraCommandReport`](../object/ExtraCommandReport.html) [`FailCommandMarker`](../object/FailCommandMarker.html) [`FailCommandReport`](../object/FailCommandReport.html) [`FullCommandReport`](../object/FullCommandReport.html) [`GroupSeparatorMessage`](../object/GroupSeparatorMessage.html) [`ImplicitActionAnnouncement`](../object/ImplicitActionAnnouncement.html) [`InternalSeparatorMessage`](../object/InternalSeparatorMessage.html) [`MainCommandReport`](../object/MainCommandReport.html) [`MarkerReport`](../object/MarkerReport.html) [`MultiObjectAnnouncement`](../object/MultiObjectAnnouncement.html) [`QuestionCommandReport`](../object/QuestionCommandReport.html) [`RemappedActionAnnouncement`](../object/RemappedActionAnnouncement.html) [`TranscriptTransform`](../object/TranscriptTransform.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`complexMultiTransform`](../object/complexMultiTransform.html) [`defaultReportTransform`](../object/defaultReportTransform.html) [`implicitGroupTransform`](../object/implicitGroupTransform.html) [`reportOrderTransform`](../object/reportOrderTransform.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`withCommandTranscript`](#withCommandTranscript)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="withCommandTranscript"></span>

`withCommandTranscript (transcriptClass, func)`

[report.t](../file/report.t.html)\[[1907](../source/report.t.html#1907)\]



Invoke a callback function using a transcript of the given class.
Returns the return value of the callback function.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


