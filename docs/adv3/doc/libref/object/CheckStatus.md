---
---
<span class="title">CheckStatus</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[185](../source/thing.t.html#185)\]

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

Command check status object. This is an abstract object that we use in
to report results from a check of various kinds.

The purpose of this object is to consolidate the code for certain kinds
of command checks into a single routine that can be used for different
purposes - verification, selection from multiple possibilities (such as
multiple paths), and command action processing. This object encapsulates
a status - success or failure - and, when the status is failure, a
message giving the reason for the failure.

`class `**`CheckStatus`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CheckStatus`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`CheckStatus`**  
`         `[`CheckStatusFailure`](../object/CheckStatusFailure.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`checkStatusSuccess`](../object/checkStatusSuccess.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isSuccess`](#isSuccess)`  `[`msgParams`](#msgParams)`  `[`msgProp`](#msgProp)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isSuccess"></span>

`isSuccess`

[thing.t](../file/thing.t.html)\[[187](../source/thing.t.html#187)\]

<div class="desc">

did the check succeed or fail?

</div>

<span id="msgParams"></span>

`msgParams`

[thing.t](../file/thing.t.html)\[[194](../source/thing.t.html#194)\]

<div class="desc">

*no description available*

</div>

<span id="msgProp"></span>

`msgProp`

[thing.t](../file/thing.t.html)\[[193](../source/thing.t.html#193)\]

<div class="desc">

the message property or string, and parameters, for failure - this is
for use with reportFailure or the like

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
