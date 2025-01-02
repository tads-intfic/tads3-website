---
layout: docs
---
<span class="title">PushTravelBarrier</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[3430](../source/travel.t.html#3430)\]

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



A PushTravelBarrier is a TravelConnector that allows regular travel, but
not travel that involves pushing something. By default, we block all
push travel, but subclasses can customize this so that we block only
specific objects.

`class `**`PushTravelBarrier`**` :   `[`TravelBarrier`](../object/TravelBarrier.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PushTravelBarrier`**  
[`TravelBarrier`](../object/TravelBarrier.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canPushedObjectPass`](#canPushedObjectPass) [`canTravelerPass`](#canTravelerPass) [`explainTravelBarrier`](#explainTravelBarrier)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canPushedObjectPass"></span>

`canPushedObjectPass (obj)`

[travel.t](../file/travel.t.html)\[[3437](../source/travel.t.html#3437)\]



Determine if the given pushed object is allowed to pass. Returns true if
so, nil if not. By default, we'll return nil for every object;
subclasses can override this to allow some objects to be pushed through
the barrier but not others.



<span id="canTravelerPass"></span>

`canTravelerPass (traveler)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3451](../source/travel.t.html#3451)\]



Determine if the given traveler can pass through this connector. If the
traveler isn't a push traveler, we'll allow the travel; otherwise, we'll
block the travel if our canPushedObjectPass routine says the object
being pushed can pass.



<span id="explainTravelBarrier"></span>

`explainTravelBarrier (traveler)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3440](../source/travel.t.html#3440)\]



explain why an object can't pass





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


