<span class="title">CommandTranscript</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[606](../source/report.t.html#606)\]

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

Command Transcript. This is a "semantic transcript" of the results of a
command. This provides a list of CommandReport objects describing the
results of the command.

`class `**`CommandTranscript`**` :   `[`OutputFilter`](../object/OutputFilter.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandTranscript`**  
`         `[`OutputFilter`](../object/OutputFilter.html)  
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

` `[`isActive`](#isActive)`  `[`isFailure`](#isFailure)`  `[`iter_`](#iter_)`  `[`reports_`](#reports_)`  `[`transforms_`](#transforms_)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`actionFailed`](#actionFailed)`  `[`activate`](#activate)`  `[`addCommandSep`](#addCommandSep)`  `[`addMarker`](#addMarker)`  `[`addReport`](#addReport)`  `[`announceAmbigActionObject`](#announceAmbigActionObject)`  `[`announceDefaultObject`](#announceDefaultObject)`  `[`announceImplicit`](#announceImplicit)`  `[`announceMultiActionObject`](#announceMultiActionObject)`  `[`announceRemappedAction`](#announceRemappedAction)`  `[`applyTransforms`](#applyTransforms)`  `[`canShowReport`](#canShowReport)`  `[`clearReports`](#clearReports)`  `[`construct`](#construct)`  `[`currentActionHasReport`](#currentActionHasReport)`  `[`deactivate`](#deactivate)`  `[`deleteLastReport`](#deleteLastReport)`  `[`deleteRange`](#deleteRange)`  `[`endDescription`](#endDescription)`  `[`filterText`](#filterText)`  `[`findCurrentActionReport`](#findCurrentActionReport)`  `[`flushForInput`](#flushForInput)`  `[`forEachReport`](#forEachReport)`  `[`getLastReport`](#getLastReport)`  `[`moveRangeAppend`](#moveRangeAppend)`  `[`newIter`](#newIter)`  `[`noteFailure`](#noteFailure)`  `[`showReports`](#showReports)`  `[`summarizeAction`](#summarizeAction)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isActive"></span>

`isActive`

[report.t](../file/report.t.html)\[[648](../source/report.t.html#648)\]

<div class="desc">

flag: I'm active; when this is nil, we'll pass text through our filter
routine unchanged

</div>

<span id="isFailure"></span>

`isFailure`

[report.t](../file/report.t.html)\[[617](../source/report.t.html#617)\]

<div class="desc">

flag: the command has failed (i.e., at least one failure report has been
generated)

</div>

<span id="iter_"></span>

`iter_`

[report.t](../file/report.t.html)\[[1235](../source/report.t.html#1235)\]

<div class="desc">

iteration number - for an iterated top-level command, this helps us keep
the results for a particular iteration grouped together

</div>

<span id="reports_"></span>

`reports_`

[report.t](../file/report.t.html)\[[1238](../source/report.t.html#1238)\]

<div class="desc">

our vector of reports

</div>

<span id="transforms_"></span>

`transforms_`

[report.t](../file/report.t.html)\[[1241](../source/report.t.html#1241)\]

<div class="desc">

our list of transformations

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="actionFailed"></span>

`actionFailed (action)`

[report.t](../file/report.t.html)\[[634](../source/report.t.html#634)\]

<div class="desc">

Did the given action fail? This scans the transcript to determine if
there are any failure messages associated with the given action.

</div>

<span id="activate"></span>

`activate ( )`

[report.t](../file/report.t.html)\[[842](../source/report.t.html#842)\]

<div class="desc">

activate - set up to capture output

</div>

<span id="addCommandSep"></span>

`addCommandSep ( )`

[report.t](../file/report.t.html)\[[1148](../source/report.t.html#1148)\]

<div class="desc">

Add a command separator.

</div>

<span id="addMarker"></span>

`addMarker ( )`

[report.t](../file/report.t.html)\[[1005](../source/report.t.html#1005)\]

<div class="desc">

Add a marker report. This adds a marker to the report stream, and
returns the marker object. The marker doesn't show any message in the
final display, but callers can use a pair of markers to identify a range
of reports for later reordering or removal.

</div>

<span id="addReport"></span>

`addReport (report)`

[report.t](../file/report.t.html)\[[934](../source/report.t.html#934)\]

<div class="desc">

Add a report.

</div>

<span id="announceAmbigActionObject"></span>

`announceAmbigActionObject (obj, whichObj)`

[report.t](../file/report.t.html)\[[1129](../source/report.t.html#1129)\]

<div class="desc">

Announce an object that was resolved with slight ambiguity.

</div>

<span id="announceDefaultObject"></span>

`announceDefaultObject (obj, whichObj, action, allResolved)`

[report.t](../file/report.t.html)\[[1138](../source/report.t.html#1138)\]

<div class="desc">

Announce a default object.

</div>

<span id="announceImplicit"></span>

`announceImplicit (action, msgProp)`

[report.t](../file/report.t.html)\[[1080](../source/report.t.html#1080)\]

<div class="desc">

Announce that the action is implicit

</div>

<span id="announceMultiActionObject"></span>

`announceMultiActionObject (preCalcMsg, obj, whichObj)`

[report.t](../file/report.t.html)\[[1119](../source/report.t.html#1119)\]

<div class="desc">

Announce one of a set of objects to a multi-object action. We'll record
this announcement for display with our report list.

</div>

<span id="announceRemappedAction"></span>

`announceRemappedAction ( )`

[report.t](../file/report.t.html)\[[1109](../source/report.t.html#1109)\]

<div class="desc">

Announce a remapped action

</div>

<span id="applyTransforms"></span>

`applyTransforms ( )`

[report.t](../file/report.t.html)\[[1203](../source/report.t.html#1203)\]

<div class="desc">

apply transformations

</div>

<span id="canShowReport"></span>

`canShowReport (report)`

[report.t](../file/report.t.html)\[[1169](../source/report.t.html#1169)\]

<div class="desc">

Can we show a given report? By default, we always return true, but
subclasses might want to override this to suppress certain types of
reports.

</div>

<span id="clearReports"></span>

`clearReports ( )`

[report.t](../file/report.t.html)\[[1157](../source/report.t.html#1157)\]

<div class="desc">

clear our reports

</div>

<span id="construct"></span>

`construct ( )`

[report.t](../file/report.t.html)\[[607](../source/report.t.html#607)\]

<div class="desc">

*no description available*

</div>

<span id="currentActionHasReport"></span>

`currentActionHasReport (func)`

[report.t](../file/report.t.html)\[[1214](../source/report.t.html#1214)\]

<div class="desc">

check to see if the current action has a report matching the given
criteria

</div>

<span id="deactivate"></span>

`deactivate ( )`

[report.t](../file/report.t.html)\[[849](../source/report.t.html#849)\]

<div class="desc">

deactivate - stop capturing output

</div>

<span id="deleteLastReport"></span>

`deleteLastReport ( )`

[report.t](../file/report.t.html)\[[991](../source/report.t.html#991)\]

<div class="desc">

delete the last report added

</div>

<span id="deleteRange"></span>

`deleteRange (marker1, marker2)`

[report.t](../file/report.t.html)\[[1018](../source/report.t.html#1018)\]

<div class="desc">

delete the reports between two markers

</div>

<span id="endDescription"></span>

`endDescription ( )`

[report.t](../file/report.t.html)\[[1071](../source/report.t.html#1071)\]

<div class="desc">

End the description section of the report. This adds a marker report
that indicates that anything following (and part of the same action) is
no longer part of the description; this can be important when we apply
the default description suppression transformation, because it tells us
not to consider the non-descriptive messages following this marker when,
for example, suppressing default descriptive messages.

</div>

<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[1177](../source/report.t.html#1177)\]

<div class="desc">

Filter text. If we're active, we'll turn the text into a command report
and add it to our report list, blocking the text from reaching the
underlying stream; otherwise, we'll pass it through unchanged.

</div>

<span id="findCurrentActionReport"></span>

`findCurrentActionReport (func)`

[report.t](../file/report.t.html)\[[1221](../source/report.t.html#1221)\]

<div class="desc">

find a report in the current action that matches the given criteria

</div>

<span id="flushForInput"></span>

`flushForInput ( )`

[report.t](../file/report.t.html)\[[871](../source/report.t.html#871)\]

<div class="desc">

Flush the transcript in preparation for reading input. This shows all
pending reports, clears the backlog of reports (so that we don't show
them again in the future), and deactivates the transcript's capture
feature so that subsequent output goes directly to the output stream.

We return the former activation status - that is, we return true if the
transcript was activated before the call, nil if not.

</div>

<span id="forEachReport"></span>

`forEachReport (func)`

[report.t](../file/report.t.html)\[[1060](../source/report.t.html#1060)\]

<div class="desc">

Perform a callback on all of the reports in the transcript. We'll invoke
the given callback function func(rpt) once for each report, with the
report object as the parameter.

</div>

<span id="getLastReport"></span>

`getLastReport ( )`

[report.t](../file/report.t.html)\[[984](../source/report.t.html#984)\]

<div class="desc">

get the last report added

</div>

<span id="moveRangeAppend"></span>

`moveRangeAppend (marker1, marker2)`

[report.t](../file/report.t.html)\[[1035](../source/report.t.html#1035)\]

<div class="desc">

Pull out the reports between two markers, and reinsert them at the end
of the transcript.

</div>

<span id="newIter"></span>

`newIter ( )`

[report.t](../file/report.t.html)\[[859](../source/report.t.html#859)\]

<div class="desc">

Count an iteration. An Action should call this once per iteration if
it's a top-level (non-nested) command.

</div>

<span id="noteFailure"></span>

`noteFailure ( )`

[report.t](../file/report.t.html)\[[623](../source/report.t.html#623)\]

<div class="desc">

Note that the current action has failed. This is equivalent to adding a
reportFailure() message to the transcript.

</div>

<span id="showReports"></span>

`showReports (deact)`

[report.t](../file/report.t.html)\[[887](../source/report.t.html#887)\]

<div class="desc">

Show our reports. Returns true if the transcript was previously active,
nil if not.

</div>

<span id="summarizeAction"></span>

`summarizeAction (cond, report)`

[report.t](../file/report.t.html)\[[693](../source/report.t.html#693)\]

<div class="desc">

Summarize the current action's reports. This allows a caller to turn a
series of iterated reports into a single report for the entire action.
For example, we could change something like this:

gold coin: Bob accepts the gold coin.  
gold coin: Bob accepts the gold coin.  
gold coin: Bob accepts the gold coin.

into this:

Bob accepts the three gold coins.

This function runs through the reports for the current action,
submitting each one to the 'cond' callback to see if it's of interest to
the summary. For each consecutive run of two or more reports that can be
summarized, we'll remove the reports that 'cond' accepted, and we'll
remove the multiple-object announcement reports associated with them,
and we'll insert a new report with the message returned by the 'report'
callback.

'cond' is called as cond(x), where 'x' is a report object. This callback
returns true if the report can be summarized for the caller's purposes,
nil if not.

'report' is called as report(vec), where 'vec' is a Vector consisting of
all of the consecutive report objects that we're now summarizing. This
function returns a string giving the message to use in place of the
reports we're removing. This should be a summary message, standing in
for the set of individual reports we're removing.

There's an important subtlety to note. If the messages you're
summarizing are conversational (that is, if they're generated by
TopicEntry responses), you should take care to generate the full
replacement text in the 'report' part, rather than doing so in separate
code that you run after summarizeAction() returns. This is important
because it ensures that the Conversation Manager knows that your
replacement message is part of the same conversation. If you wait until
after summarizeAction() returns to generate more response text, the
conversation manager won't realize that the additional text is part of
the same conversation.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>