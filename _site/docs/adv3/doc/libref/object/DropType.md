<span class="title">DropType</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[270](../source/thing.t.html#270)\]

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

Drop Descriptor. This is passed to the receiveDrop() method of a "drop
destination" when an object is discarded via commands such as DROP or
THROW. The purpose of the descriptor is to identify the type of command
being performed, so that the receiveDrop() method can generate an
appropriate report message.

`class `**`DropType`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DropType`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`DropType`**  
`         `[`DropTypeThrow`](../object/DropTypeThrow.html)  
`                 `[`DropTypeShortThrow`](../object/DropTypeShortThrow.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`dropTypeDrop`](../object/dropTypeDrop.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getReportPrefix`](#getReportPrefix)`  `[`standardReport`](#standardReport)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getReportPrefix"></span>

`// getReportPrefix (obj, dest)`<span class="rem">Interface description
only</span>

[thing.t](../file/thing.t.html)\[[299](../source/thing.t.html#299)\]

<div class="desc">

Get a short report describing the action without saying where the object
ended up. This is roughly the same as the standard report, but omits any
information on where the object lands, so that the caller can show a
separate message explaining that part.

The report must be worded such that the object being dropped is the
logical antecedent for any subsequent text. This means that callers can
use a pronoun to refer back to the object dropped, allowing for more
natural sequences to be constructed. (It usually sounds stilted to
repeat the full name: "You drop the box. The box falls into the chasm."
It's better if we can use a pronoun in the second sentence: "You drop
the box. It falls into the chasm.")

'obj' is the object being dropped, and 'dest' is the drop destination.

</div>

<span id="standardReport"></span>

`// standardReport (obj, dest)`<span class="rem">Interface description
only</span>

[thing.t](../file/thing.t.html)\[[279](../source/thing.t.html#279)\]

<div class="desc">

Generate the standard report message for the action. The drop
destination's receiveDrop() method can call this if the standard message
is adequate to describe the result of the action.

'obj' is the object being dropped, and 'dest' is the drop destination.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
