---
layout: docs
---
<span class="title">PendingCommandInfo</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[10474](../source/actor.t.html#10474)\]

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

Pending Command Information structure. This is an abstract base class
that we subclass for particular ways of representing the command to be
executed.

`class `**`PendingCommandInfo`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PendingCommandInfo`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PendingCommandInfo`**  
[`PendingCommandAction`](../object/PendingCommandAction.html)  
[`PendingCommandMarker`](../object/PendingCommandMarker.html)  
[`PendingCommandToks`](../object/PendingCommandToks.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`hasCommand`](#hasCommand)[`issuer_`](#issuer_)[`startOfSentence_`](#startOfSentence_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`executePending`](#executePending)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="hasCommand"></span>

`hasCommand`

[actor.t](../file/actor.t.html)\[[10482](../source/actor.t.html#10482)\]

<div class="desc">

Check to see if this pending command item has a command to perform. This
returns true if we have a command, nil if we're just a queue placeholder
without any actual command to execute.

</div>

<span id="issuer_"></span>

`issuer_`

[actor.t](../file/actor.t.html)\[[10488](../source/actor.t.html#10488)\]

<div class="desc">

the issuer of the command

</div>

<span id="startOfSentence_"></span>

`startOfSentence_`

[actor.t](../file/actor.t.html)\[[10491](../source/actor.t.html#10491)\]

<div class="desc">

we're at the start of a "sentence"

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (issuer)`

[actor.t](../file/actor.t.html)\[[10475](../source/actor.t.html#10475)\]

<div class="desc">

*no description available*

</div>

<span id="executePending"></span>

`executePending (targetActor)`

[actor.t](../file/actor.t.html)\[[10485](../source/actor.t.html#10485)\]

<div class="desc">

execute the command

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
