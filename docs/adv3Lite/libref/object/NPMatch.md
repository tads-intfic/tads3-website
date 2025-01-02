---
layout: docs
---
<span class="title">NPMatch</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3209](../source/parser.t.html#3209)\]

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



NPMatch is an object that describes one object matching a noun phrase.

`class `**`NPMatch`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NPMatch`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`flags`](#flags)[`match`](#match)[`name`](#name)[`np`](#np)[`obj`](#obj)[`score`](#score)[`strength`](#strength)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="flags"></span>

`flags`

[parser.t](../file/parser.t.html)\[[3264](../source/parser.t.html#3264)\]



the selection/disambiguation flags (SelXxx)



<span id="match"></span>

`match`

[parser.t](../file/parser.t.html)\[[3258](../source/parser.t.html#3258)\]



the match flags - this is a combination of MatchXxx flags as returned
from Mentionable.matchName()



<span id="name"></span>

`name`

[parser.t](../file/parser.t.html)\[[3278](../source/parser.t.html#3278)\]



The name, for announcement purposes. This is filled in by the Command
during execution. The Command figures the name so that it's
distinguished from all of the other objects in the same noun role in the
command.



<span id="np"></span>

`np`

[parser.t](../file/parser.t.html)\[[3249](../source/parser.t.html#3249)\]



the NounPhrase we matched



<span id="obj"></span>

`obj`

[parser.t](../file/parser.t.html)\[[3252](../source/parser.t.html#3252)\]



the matching object



<span id="score"></span>

`score`

[parser.t](../file/parser.t.html)\[[3270](../source/parser.t.html#3270)\]



Disambiguation score. This is a number assigned by the action in
scoreObjects().



<span id="strength"></span>

`strength`

[parser.t](../file/parser.t.html)\[[3261](../source/parser.t.html#3261)\]



the match strength, for sorting the match list



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (np, obj, match)`

[parser.t](../file/parser.t.html)\[[3210](../source/parser.t.html#3210)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


