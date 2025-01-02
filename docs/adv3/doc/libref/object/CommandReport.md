---
layout: docs
---
<span class="title">CommandReport</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[55](../source/report.t.html#55)\]

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



Command report objects. The library uses these to control how the text
from a command is displayed. Game code can also use report objects to
show and control command results, but this isn't usually necessary; game
code can usually simply display messages directly.

Reports are divided into two broad classes: "default" and "full"
reports.

A "default" report is one that simply confirms that an action was
performed, and provides little additional information. The library uses
default reports for simple commands whose full implications should
normally be obvious to a player typing such commands: take, drop, put
in, and the like. The library's default reports are usually quite terse:
"Taken", "Dropped", "Done".

A "full" report is one that gives the player more information than a
simple confirmation. These reports typically describe either the changes
to the game state caused by a command or surprising side effects of a
command. For example, if the command is "push button," and pushing the
button opens the door next to the button, a full report would describe
the door opening.

Note that a full report is warranted any time a command describes
anything beyond a simple confirmation. In our door-opening button
example, opening the door by pushing the button always warrants a full
report, even if the player has already seen the effects of the button a
hundred times before, and even if the button is labeled "push to open
door." It doesn't matter whether or not the consequences of the command
ought to be obvious to the player; what matters is that the command
warrants a report beyond a simple confirmation. Any time a report is
more than a simple confirmation, it is a full report, no matter how
obvious to the player the effects of the action.

Full reports are further divided into three subcategories by time
ordering: "main," "before," and "after." "Before" and "after" reports
are ordered before and after (respectively) a main report.

`class `**`CommandReport`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandReport`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CommandReport`**  
[`CommandAnnouncement`](../object/CommandAnnouncement.html)  
[`AmbigObjectAnnouncement`](../object/AmbigObjectAnnouncement.html)  
[`CommandSepAnnouncement`](../object/CommandSepAnnouncement.html)  
[`DefaultObjectAnnouncement`](../object/DefaultObjectAnnouncement.html)  
[`ImplicitActionAnnouncement`](../object/ImplicitActionAnnouncement.html)  
[`MultiObjectAnnouncement`](../object/MultiObjectAnnouncement.html)  
[`RemappedActionAnnouncement`](../object/RemappedActionAnnouncement.html)  
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
[`ConvBoundaryReport`](../object/ConvBoundaryReport.html)  
[`ConvBeginReport`](../object/ConvBeginReport.html)  
[`ConvEndReport`](../object/ConvEndReport.html)  
[`GroupSeparatorMessage`](../object/GroupSeparatorMessage.html)  
[`InternalSeparatorMessage`](../object/InternalSeparatorMessage.html)  
[`MarkerReport`](../object/MarkerReport.html)  
[`EndOfDescReport`](../object/EndOfDescReport.html)  
[`FailCommandMarker`](../object/FailCommandMarker.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`action_`](#action_) [`isFailure`](#isFailure) [`isQuestion`](#isQuestion) [`iter_`](#iter_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`getAction`](#getAction) [`isActionImplicit`](#isActionImplicit) [`isActionNestedIn`](#isActionNestedIn) [`isPartOf`](#isPartOf) [`setAction`](#setAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="action_"></span>

`action_`

[report.t](../file/report.t.html)\[[97](../source/report.t.html#97)\]



the action I'm associated with



<span id="isFailure"></span>

`isFailure`

[report.t](../file/report.t.html)\[[85](../source/report.t.html#85)\]



Flag: if this property is true, this report indicates a failure. By
default, a report does not indicate failure.



<span id="isQuestion"></span>

`isQuestion`

[report.t](../file/report.t.html)\[[91](../source/report.t.html#91)\]



Flag: if this property is true, this report indicates an interruption
for interactive input.



<span id="iter_"></span>

`iter_`

[report.t](../file/report.t.html)\[[94](../source/report.t.html#94)\]



iteration number current when we were added to the transcript



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct ( )`

[report.t](../file/report.t.html)\[[56](../source/report.t.html#56)\]



*no description available*



<span id="getAction"></span>

`getAction ( )`

[report.t](../file/report.t.html)\[[67](../source/report.t.html#67)\]



get/set my action



<span id="isActionImplicit"></span>

`isActionImplicit ( )`

[report.t](../file/report.t.html)\[[71](../source/report.t.html#71)\]



check to see if my action is implicit



<span id="isActionNestedIn"></span>

`isActionNestedIn (other)`

[report.t](../file/report.t.html)\[[74](../source/report.t.html#74)\]



check to see if my action is nested in the other report's action



<span id="isPartOf"></span>

`isPartOf (report)`

[report.t](../file/report.t.html)\[[104](../source/report.t.html#104)\]



Am I part of the same action as the given report? Returns true if this
action is part of the same iteration and part of the same action as the
other report.



<span id="setAction"></span>

`setAction (action)`

[report.t](../file/report.t.html)\[[68](../source/report.t.html#68)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


