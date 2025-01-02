---
layout: docs
---
<span class="title">IllogicalNowVerifyResult</span><span class="type">class</span>

[verify.t](../file/verify.t.html)\[[314](../source/verify.t.html#314)\]

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



Verification result - command is currently illogical due to the state of
the object, but might be logically applied to the object at other times.
For example, "open door" on a door that's already open is illogical at
the moment, but makes more sense than opening something that has no
evident way to be opened or closed to begin with.

`class `**`IllogicalNowVerifyResult`**` :   `[`VerifyResult`](../object/VerifyResult.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`IllogicalNowVerifyResult`**  
[`VerifyResult`](../object/VerifyResult.html)  
[`MessageResult`](../object/MessageResult.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`IllogicalNowVerifyResult`**  
[`IllogicalAlreadyVerifyResult`](../object/IllogicalAlreadyVerifyResult.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allowAction`](#allowAction)[`resultRank`](#resultRank)

Inherited from `VerifyResult` :  
[`excludePluralMatches`](../object/VerifyResult.html#excludePluralMatches)

Inherited from `MessageResult` :  
[`messageProp_`](../object/MessageResult.html#messageProp_)[`messageText_`](../object/MessageResult.html#messageText_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `VerifyResult` :  
[`compareTo`](../object/VerifyResult.html#compareTo)[`identicalTo`](../object/VerifyResult.html#identicalTo)[`isWorseThan`](../object/VerifyResult.html#isWorseThan)[`shouldInsertBefore`](../object/VerifyResult.html#shouldInsertBefore)

Inherited from `MessageResult` :  
[`construct`](../object/MessageResult.html#construct)[`resolveMessageText`](../object/MessageResult.html#resolveMessageText)[`setMessage`](../object/MessageResult.html#setMessage)[`showMessage`](../object/MessageResult.html#showMessage)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowAction"></span>

`allowAction`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[316](../source/verify.t.html#316)\]



the command isn't allowed



<span id="resultRank"></span>

`resultRank`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[319](../source/verify.t.html#319)\]



result rank



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


