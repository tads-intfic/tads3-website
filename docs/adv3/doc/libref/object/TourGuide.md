<span class="title">TourGuide</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[2319](../source/extras.t.html#2319)\]

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

"Tour Guide" is a mix-in class for Actors. This class can be multiply
inherited by objects along with Actor or a subclass of Actor. This
mix-in makes the Follow action, when applied to the tour guide, initiate
travel according to where the tour guide wants to go next. So, if the
tour guide is here and is waving us through the door, FOLLOW GUIDE will
initiate travel through the door.

This class should appear in the superclass list ahead of Actor or the
Actor subclass.

`class `**`TourGuide`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TourGuide`**  
`         object`  
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

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`dobjFor(Follow)`](#dobjFor(Follow))`  `[`getTourDest`](#getTourDest)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="dobjFor(Follow)"></span>

`dobjFor(Follow)`

[extras.t](../file/extras.t.html)\[[2320](../source/extras.t.html#2320)\]

<div class="desc">

*no description available*

</div>

<span id="getTourDest"></span>

`getTourDest ( )`

[extras.t](../file/extras.t.html)\[[2376](../source/extras.t.html#2376)\]

<div class="desc">

Get the travel connector that takes us to our next guided tour
destination. By default, this returns the escortDest from our current
actor state if our state is a guided tour state, or nil if our state is
any other kind of state. Subclasses must override this if they use other
kinds of states to represent guided tours, since we'll only detect that
we're in a guided tour state if our current actor state object is of
class GuidedTourState (or any subclass).

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
