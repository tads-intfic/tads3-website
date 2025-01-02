---
layout: docs
---
<span class="title">implicitGroupTransform</span><span class="type">object</span>

[report.t](../file/report.t.html)\[[1435](../source/report.t.html#1435)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Transcript Transform: group implicit announcements. We'll find any runs
of consecutive implicit command announcements, and group each run into a
single announcement listing all of the implied actions. For example,
we'll turn this:

  
\>go south  
(first opening the door)  
(first unlocking the door)

this into:

  
\>go south  
(first opening the door and unlocking the door)

In addition, if we find an implicit announcement in the middle of a set
of regular command reports, and it's for an action nested within the
action generating the regular reports, we'll start a new paragraph
before the implicit announcement.

**`implicitGroupTransform`**` :   `[`TranscriptTransform`](../object/TranscriptTransform.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`implicitGroupTransform`**  
[`TranscriptTransform`](../object/TranscriptTransform.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>





*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`applyTransform`](#applyTransform)[`canGroupWith`](#canGroupWith)[`processDefaultAnnouncements`](#processDefaultAnnouncements)[`unstackRecursiveGroup`](#unstackRecursiveGroup)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="applyTransform"></span>

`applyTransform (trans, vec)`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[1436](../source/report.t.html#1436)\]

<div class="desc">

*no description available*

</div>

<span id="canGroupWith"></span>

`canGroupWith (a, b)`

[report.t](../file/report.t.html)\[[1745](../source/report.t.html#1745)\]

<div class="desc">

Can we group the second item with the first? Returns true if the second
item is also an implicit action announcement, or it's a default object
announcement whose parent action is the first item's action.

</div>

<span id="processDefaultAnnouncements"></span>

`processDefaultAnnouncements (vec)`

[report.t](../file/report.t.html)\[[1683](../source/report.t.html#1683)\]

<div class="desc">

Process default object announcements in a grouped message vector.

Default object announcements come in two flavors: with and without
message text. Those without message text are present purely to retain a
structural record of the default object in the internal transcript; we
can simply remove these, since the actions that created them didn't even
want default messages. For those that do include message text, remove
them as well, but also use their actions to replace the corresponding
parent actions, so that the parent actions reflect what actually
happened with the final defaulted objects.

</div>

<span id="unstackRecursiveGroup"></span>

`unstackRecursiveGroup (groupVec, vec, idx)`

[report.t](../file/report.t.html)\[[1621](../source/report.t.html#1621)\]

<div class="desc">

"Unstack" a recursive group of nested announcements. Adds the recursive
group to the output group vector in chronological order, and returns the
index of the next item after the recursive group.

A recursive group is a set of nested implicit commands, where one
implicit command triggered another, which triggered another, and so on.
The innermost of the nested set is the one that's actually executed
first chronologically, since an implied command must be carried out
before its enclosing command can proceed. For example:

  
\>go south  
(first opening the door)  
(first unlocking the door)  
(first taking the key out of the bag)

Going south implies opening the door, but before we can open the door,
we must unlock it, and before we can unlock it we must be holding the
key. In report order, the innermost command is listed last, since it's
nested within the enclosing commands. Chronologically, though, the
innermost command is actually executed first. The purpose of this
routine is to unstack these nested sets, rearranging them into
chronological order.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
