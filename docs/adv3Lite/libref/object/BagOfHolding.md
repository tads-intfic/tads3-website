---
layout: docs
---
<span class="title">BagOfHolding</span><span class="type">class</span>

[gadget.t](../file/gadget.t.html)\[[292](../source/gadget.t.html#292)\]

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



Mix-in class to help with inventory management. A BagOfHolding can be
mixed in with a Container (or, less usually, Surface, RearContainer or
Underside) to provide an object which, if held by the player character,
will be used to move objects in the player character's inventory to if
his/her hands become too full to pick up another object.

`class `**`BagOfHolding`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BagOfHolding`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`affinityFor`](#affinityFor) [`moveAction`](#moveAction) [`suitabilityFor`](#suitabilityFor) [`tryHolding`](#tryHolding)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="affinityFor"></span>

`affinityFor (obj)`

[gadget.t](../file/gadget.t.html)\[[302](../source/gadget.t.html#302)\]



The affinity for this BagOfHolding for obj. This can be used to
determined how 'willing' a particular BagOfHolding is to contain obj. A
value of less than 1 means that the BagOfHolding can't contain obj at
all. The higher the affinity, the better the choice this BagOfHolding is
for obj. The default value is 100, or 0 for a BagOfHolding's affinity
for itself.



<span id="moveAction"></span>

`moveAction ( )`

[gadget.t](../file/gadget.t.html)\[[418](../source/gadget.t.html#418)\]



The action needed to move an object into me.



<span id="suitabilityFor"></span>

`suitabilityFor (obj)`

[gadget.t](../file/gadget.t.html)\[[312](../source/gadget.t.html#312)\]



To be suitable to contain obj a BagOfHolding must have enough spare
capacity for it. If it has, its suitability is its affinity for obj;
otherwise it's 0. A BagOfHolding is also unsuitable if it's locked.



<span id="tryHolding"></span>

`tryHolding (obj)`

[gadget.t](../file/gadget.t.html)\[[327](../source/gadget.t.html#327)\]



Class method to determine whether the actor is carrying a suitable
BagOfHolding that could be used to move something from his inventory
into, and then to move items from the actor's inventory into an
appropriate bag of holding.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


