---
layout: docs
---
<span class="title">DoerCmd</span><span class="type">class</span>

[doer.t](../file/doer.t.html)\[[482](../source/doer.t.html#482)\]

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



A DoerCmd is a helper object that stores a single command match template
for a Doer object. A given Doer can match multiple commands; each match
is represented by one of these objects.

`class `**`DoerCmd`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DoerCmd`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`cmd`](#cmd)[`doer`](#doer)[`doerTab`](#doerTab)[`seqno`](#seqno)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`compareTo`](#compareTo)[`construct`](#construct)[`findDoers`](#findDoers)[`matchCmd`](#matchCmd)[`matchConditions`](#matchConditions)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="cmd"></span>

`cmd`

[doer.t](../file/doer.t.html)\[[501](../source/doer.t.html#501)\]



The parsed command template. This is a list consisting of the Action we
match plus the objects or classes we match for the noun phrases, in the
canonical order (direct object, indirect object, accessory). The action
can also be the Action class itself, to indicate that we match all
actions. We only match a command with the same number of noun phrases as
in the template.



<span id="doer"></span>

`doer`

[doer.t](../file/doer.t.html)\[[491](../source/doer.t.html#491)\]



the Doer I'm associated with



<span id="doerTab"></span>

`doerTab`

[doer.t](../file/doer.t.html)\[[519](../source/doer.t.html#519)\]



Class member: the master table of DoerCmd objects. The library builds
this automatically during preinitialization. This is a lookup table
indexed by Action. Each Action entry has a list of DoerCmd objects
associated with that Action. Note that the generic all-verb handlers are
listed under Action.



<span id="seqno"></span>

`seqno`

[doer.t](../file/doer.t.html)\[[510](../source/doer.t.html#510)\]



My global sequence number. During initialization, we set this to reflect
our position in the global list of DoerCmd objects after the list is
sorted into priority order. This makes it easy to sort a new list of
DoerCmd objects into the original priority order.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="compareTo"></span>

`compareTo (other)`

[doer.t](../file/doer.t.html)\[[641](../source/doer.t.html#641)\]



Get the processing priority sorting order relative to another DoerCmd.
(See Doer.priority for a discussion of the priority rules.)



<span id="construct"></span>

`construct (d, c)`

[doer.t](../file/doer.t.html)\[[484](../source/doer.t.html#484)\]



construction



<span id="findDoers"></span>

`findDoers (cmdLst)`

[doer.t](../file/doer.t.html)\[[526](../source/doer.t.html#526)\]



Class method: Get a list of Doer objects matching the given command.
'cmdLst' is the command's action and object list in canonical format:
\[action, dobj, iobj, accessory\].



<span id="matchCmd"></span>

`matchCmd (cmdLst)`

[doer.t](../file/doer.t.html)\[[571](../source/doer.t.html#571)\]



Check for a match to a command list. 'cmdLst' is the command object list
in canonical format: \[action, dobj, iobj, ...\]. This routine
determines if our Doer is a handler for the given command.



<span id="matchConditions"></span>

`matchConditions ( )`

[doer.t](../file/doer.t.html)\[[745](../source/doer.t.html#745)\]



Check whether a Doer matches its where, when, who and during conditions.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


