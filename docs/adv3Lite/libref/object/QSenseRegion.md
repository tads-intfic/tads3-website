---
layout: docs
---
<span class="title">QSenseRegion</span><span class="type">object</span>

[senseRegion.t](../file/senseRegion.t.html)\[[1379](../source/senseRegion.t.html#1379)\]

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



This Special redefines canHear, canSee, canSmell, canTalkTo and
canThrowTo to take account of possible sensory connections across rooms
in a SenseRegion

**`QSenseRegion`**` :   `[`Special`](../object/Special.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`QSenseRegion`**  
[`Special`](../object/Special.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`active`](#active) [`priority`](#priority)

Inherited from `Special` :  
[`all`](../object/Special.html#all) [`allActive_`](../object/Special.html#allActive_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canHear`](#canHear) [`canSee`](#canSee) [`canSmell`](#canSmell) [`canTalkTo`](#canTalkTo) [`canThrowTo`](#canThrowTo) [`nonBlocker`](#nonBlocker) [`reachBlocker`](#reachBlocker)

Inherited from `Special` :  
[`allActive`](../object/Special.html#allActive) [`classInit`](../object/Special.html#classInit) [`first`](../object/Special.html#first) [`next`](../object/Special.html#next)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="active"></span>

`active`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[1388](../source/senseRegion.t.html#1388)\]



This Special should be active whenever this module is included.



<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[1385](../source/senseRegion.t.html#1385)\]



Gives this Special a slightly higher priority than QDefaults, so that it
takes priority.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canHear"></span>

`canHear (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1440](../source/senseRegion.t.html#1440)\]



Can A hear B? We return true if there's a clear sound path from A to B.



<span id="canSee"></span>

`canSee (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1395](../source/senseRegion.t.html#1395)\]



Can A see B? We return true if and only if B is in light and there's a
clear sight path from A to B.



<span id="canSmell"></span>

`canSmell (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1485](../source/senseRegion.t.html#1485)\]



Can A smell B? We return true if there's a clear scent path from A to B.



<span id="canTalkTo"></span>

`canTalkTo (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1531](../source/senseRegion.t.html#1531)\]



For A to be able to talk to B, A must both be able to hear B and either
be in the same room as B or in a room that's close enough to be able to
converse with B



<span id="canThrowTo"></span>

`canThrowTo (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1554](../source/senseRegion.t.html#1554)\]



Can A throw an object to B?



<span id="nonBlocker"></span>

`nonBlocker (o, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1601](../source/senseRegion.t.html#1601)\]



Is o the kind of object that would block movement from one room to the
room containing b? It is unless o is a room and the room and b are both
in a SenseRegion for which autoGoTo is true.



<span id="reachBlocker"></span>

`reachBlocker (a, b)`

[senseRegion.t](../file/senseRegion.t.html)\[[1582](../source/senseRegion.t.html#1582)\]



Determine if A can reach B, and if not, what stands in the way. Returns
a list of containers along the path between A and B that obstruct the
reach. If the two objects are in separate rooms, the top-level room
containing A is in the list to represent the room separation. If there's
no obstruction, we return an empty list.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


