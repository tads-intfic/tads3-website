---
layout: docs
---
<span class="title">VerifyResultList</span><span class="type">class</span>

[verify.t](../file/verify.t.html)\[[428](../source/verify.t.html#428)\]

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

Verification result list.

`class `**`VerifyResultList`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`VerifyResultList`**  
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

` `[`obj_`](#obj_)`  `[`origOrder`](#origOrder)`  `[`remapAction_`](#remapAction_)`  `[`remapRole_`](#remapRole_)`  `[`remapTarget_`](#remapTarget_)`  `[`results_`](#results_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addResult`](#addResult)`  `[`allowAction`](#allowAction)`  `[`allowImplicit`](#allowImplicit)`  `[`compareTo`](#compareTo)`  `[`construct`](#construct)`  `[`excludePluralMatches`](#excludePluralMatches)`  `[`getEffectiveResult`](#getEffectiveResult)`  `[`matchForCombineRemapped`](#matchForCombineRemapped)`  `[`showMessage`](#showMessage)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="obj_"></span>

`obj_`

[verify.t](../file/verify.t.html)\[[694](../source/verify.t.html#694)\]

<div class="desc">

The ResolveInfo for the object being verified. Note that this isn't
saved until AFTER the verification is completed.

</div>

<span id="origOrder"></span>

`origOrder`

[verify.t](../file/verify.t.html)\[[701](../source/verify.t.html#701)\]

<div class="desc">

The original list index for this result. We use this when sorting a list
of results to preserve the original ordering of otherwise equivalent
items.

</div>

<span id="remapAction_"></span>

`remapAction_`

[verify.t](../file/verify.t.html)\[[684](../source/verify.t.html#684)\]

<div class="desc">

the action and role of the remapped action

</div>

<span id="remapRole_"></span>

`remapRole_`

[verify.t](../file/verify.t.html)\[[685](../source/verify.t.html#685)\]

<div class="desc">

*no description available*

</div>

<span id="remapTarget_"></span>

`remapTarget_`

[verify.t](../file/verify.t.html)\[[681](../source/verify.t.html#681)\]

<div class="desc">

The remapped target object. This will filled in during verification if
we decide that we want to remap the nominal object of the command to a
different object. This should be set to the ultimate target object after
all remappings.

</div>

<span id="results_"></span>

`results_`

[verify.t](../file/verify.t.html)\[[688](../source/verify.t.html#688)\]

<div class="desc">

our list of results

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addResult"></span>

`addResult (result)`

[verify.t](../file/verify.t.html)\[[438](../source/verify.t.html#438)\]

<div class="desc">

Add a result to our result list.

</div>

<span id="allowAction"></span>

`allowAction ( )`

[verify.t](../file/verify.t.html)\[[474](../source/verify.t.html#474)\]

<div class="desc">

Is the action allowed? We return true if we have no results; otherwise,
we allow the action if \*all\* of our results allow it, nil if even one
disapproves.

</div>

<span id="allowImplicit"></span>

`allowImplicit ( )`

[verify.t](../file/verify.t.html)\[[495](../source/verify.t.html#495)\]

<div class="desc">

Is the action allowed as an implicit action? Returns true if we have no
results; otherwise, returns true if \*all\* of our results allow the
implicit action, nil if even one disapproves.

</div>

<span id="compareTo"></span>

`compareTo (other)`

[verify.t](../file/verify.t.html)\[[547](../source/verify.t.html#547)\]

<div class="desc">

Compare my cumulative result (i.e., my most disapproving result) to that
of another result list's cumulative result. Returns a value suitable for
sorting: -1 if I'm worse than the other one, 0 if we're the same, and 1
if I'm better than the other one. This can be used to compare the
cumulative verification results for two objects to determine which
object is more logical.

</div>

<span id="construct"></span>

`construct ( )`

[verify.t](../file/verify.t.html)\[[429](../source/verify.t.html#429)\]

<div class="desc">

*no description available*

</div>

<span id="excludePluralMatches"></span>

`excludePluralMatches ( )`

[verify.t](../file/verify.t.html)\[[484](../source/verify.t.html#484)\]

<div class="desc">

Do we exclude plural matches? We do if we have at least one result that
excludes plural matches.

</div>

<span id="getEffectiveResult"></span>

`getEffectiveResult ( )`

[verify.t](../file/verify.t.html)\[[525](../source/verify.t.html#525)\]

<div class="desc">

Get my effective result object. If I have no explicitly-set result
object, my effective result is the defaut logical result. Otherwise, we
return the most disapproving result in our list.

</div>

<span id="matchForCombineRemapped"></span>

`matchForCombineRemapped (other, action, role)`

[verify.t](../file/verify.t.html)\[[637](../source/verify.t.html#637)\]

<div class="desc">

Determine if we match another verify result list after remapping. This
determines if the other verify result is equivalent to us after
considering the effects of remapping. We'll return true if all of the
following are true:

\- compareTo returns zero, indicating that we have the same weighting in
the verification results

\- we refer to the same object after remapping; the effective object
after remapping is our original resolved object, if we're not remapped,
or our remap target if we are

\- we use the object for the same action and in the same role

Note: this can only be called on remapped results. Results can only be
combined in the first place when remapped, so there's no need to ever
call this on an unremapped result.

</div>

<span id="showMessage"></span>

`showMessage ( )`

[verify.t](../file/verify.t.html)\[[506](../source/verify.t.html#506)\]

<div class="desc">

Show the message. If I have any results, we'll show the message for the
effective (i.e., most disapproving) result; otherwise we show nothing.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
