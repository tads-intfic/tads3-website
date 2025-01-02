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



Verification result list.

`class `**`VerifyResultList`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VerifyResultList`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`obj_`](#obj_) [`origOrder`](#origOrder) [`remapAction_`](#remapAction_) [`remapRole_`](#remapRole_) [`remapTarget_`](#remapTarget_) [`results_`](#results_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addResult`](#addResult) [`allowAction`](#allowAction) [`allowImplicit`](#allowImplicit) [`compareTo`](#compareTo) [`construct`](#construct) [`excludePluralMatches`](#excludePluralMatches) [`getEffectiveResult`](#getEffectiveResult) [`matchForCombineRemapped`](#matchForCombineRemapped) [`showMessage`](#showMessage)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="obj_"></span>

`obj_`

[verify.t](../file/verify.t.html)\[[694](../source/verify.t.html#694)\]



The ResolveInfo for the object being verified. Note that this isn't
saved until AFTER the verification is completed.



<span id="origOrder"></span>

`origOrder`

[verify.t](../file/verify.t.html)\[[701](../source/verify.t.html#701)\]



The original list index for this result. We use this when sorting a list
of results to preserve the original ordering of otherwise equivalent
items.



<span id="remapAction_"></span>

`remapAction_`

[verify.t](../file/verify.t.html)\[[684](../source/verify.t.html#684)\]



the action and role of the remapped action



<span id="remapRole_"></span>

`remapRole_`

[verify.t](../file/verify.t.html)\[[685](../source/verify.t.html#685)\]



*no description available*



<span id="remapTarget_"></span>

`remapTarget_`

[verify.t](../file/verify.t.html)\[[681](../source/verify.t.html#681)\]



The remapped target object. This will filled in during verification if
we decide that we want to remap the nominal object of the command to a
different object. This should be set to the ultimate target object after
all remappings.



<span id="results_"></span>

`results_`

[verify.t](../file/verify.t.html)\[[688](../source/verify.t.html#688)\]



our list of results



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addResult"></span>

`addResult (result)`

[verify.t](../file/verify.t.html)\[[438](../source/verify.t.html#438)\]



Add a result to our result list.



<span id="allowAction"></span>

`allowAction ( )`

[verify.t](../file/verify.t.html)\[[474](../source/verify.t.html#474)\]



Is the action allowed? We return true if we have no results; otherwise,
we allow the action if \*all\* of our results allow it, nil if even one
disapproves.



<span id="allowImplicit"></span>

`allowImplicit ( )`

[verify.t](../file/verify.t.html)\[[495](../source/verify.t.html#495)\]



Is the action allowed as an implicit action? Returns true if we have no
results; otherwise, returns true if \*all\* of our results allow the
implicit action, nil if even one disapproves.



<span id="compareTo"></span>

`compareTo (other)`

[verify.t](../file/verify.t.html)\[[547](../source/verify.t.html#547)\]



Compare my cumulative result (i.e., my most disapproving result) to that
of another result list's cumulative result. Returns a value suitable for
sorting: -1 if I'm worse than the other one, 0 if we're the same, and 1
if I'm better than the other one. This can be used to compare the
cumulative verification results for two objects to determine which
object is more logical.



<span id="construct"></span>

`construct ( )`

[verify.t](../file/verify.t.html)\[[429](../source/verify.t.html#429)\]



*no description available*



<span id="excludePluralMatches"></span>

`excludePluralMatches ( )`

[verify.t](../file/verify.t.html)\[[484](../source/verify.t.html#484)\]



Do we exclude plural matches? We do if we have at least one result that
excludes plural matches.



<span id="getEffectiveResult"></span>

`getEffectiveResult ( )`

[verify.t](../file/verify.t.html)\[[525](../source/verify.t.html#525)\]



Get my effective result object. If I have no explicitly-set result
object, my effective result is the defaut logical result. Otherwise, we
return the most disapproving result in our list.



<span id="matchForCombineRemapped"></span>

`matchForCombineRemapped (other, action, role)`

[verify.t](../file/verify.t.html)\[[637](../source/verify.t.html#637)\]



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



<span id="showMessage"></span>

`showMessage ( )`

[verify.t](../file/verify.t.html)\[[506](../source/verify.t.html#506)\]



Show the message. If I have any results, we'll show the message for the
effective (i.e., most disapproving) result; otherwise we show nothing.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


