---
layout: docs
---
<span class="title">VerifyResult</span><span class="type">class</span>

[verify.t](../file/verify.t.html)\[[55](../source/verify.t.html#55)\]

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



Verification result class. Verification routines return a verification
result describing whether or not an action is allowed, and how much
sense the command seems to make. When a verification fails, it must
include a message describing why the command isn't allowed.

It is important to understand that the purpose of verification results
is to guess what's in the player's mind, not to reflect the full
internal state of the game. We use verification results to figure out
what a player means with a command, so if we were to rely on information
the player doesn't have, we would not correctly guess the player's
intentions. So, in choosing a verification result, only information that
ought to be obvious to the player should be consdidered.

For example, suppose we have a closed door; suppose further that the
door happens to be locked, but that there's no way for the player to see
that just by looking at the door. Now, if the player types "close door,"
we should return "currently illogical" - common sense tells the player
that the door is something that can be opened and closed, so we wouldn't
return "always illogical," but the player can plainly see that the door
is already closed and thus would know that it makes no sense to close it
again. In other words, the player would conclude looking at the door
that closing it is currently illogical, so that's the result we should
generate.

What if the player types "open door," though? In this case, should we
return "currently illogical" as well, because the door is locked? The
answer is no. We know that the command won't succeed because we know
from looking at the internal game state that the door is locked, but
that doesn't matter - it's what the \*player\* knows that's important,
not what the internal game state tells us. So, what should we return
here? It might seem strange, but the correct result is "logical" - as
far as the player is concerned, the door is something that can be opened
and closed, and it is currently closed, so it makes perfect sense to
open it.

`class `**`VerifyResult`**` :   `[`MessageResult`](../object/MessageResult.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VerifyResult`**  
[`MessageResult`](../object/MessageResult.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`VerifyResult`**  
[`DangerousVerifyResult`](../object/DangerousVerifyResult.html)  
[`IllogicalNowVerifyResult`](../object/IllogicalNowVerifyResult.html)  
[`IllogicalAlreadyVerifyResult`](../object/IllogicalAlreadyVerifyResult.html)  
[`IllogicalVerifyResult`](../object/IllogicalVerifyResult.html)  
[`IllogicalSelfVerifyResult`](../object/IllogicalSelfVerifyResult.html)  
[`InaccessibleVerifyResult`](../object/InaccessibleVerifyResult.html)  
[`LogicalVerifyResult`](../object/LogicalVerifyResult.html)  
[`NonObviousVerifyResult`](../object/NonObviousVerifyResult.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allowAction`](#allowAction)[`excludePluralMatches`](#excludePluralMatches)[`resultRank`](#resultRank)

Inherited from `MessageResult` :  
[`messageProp_`](../object/MessageResult.html#messageProp_)[`messageText_`](../object/MessageResult.html#messageText_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`compareTo`](#compareTo)[`identicalTo`](#identicalTo)[`isWorseThan`](#isWorseThan)[`shouldInsertBefore`](#shouldInsertBefore)

Inherited from `MessageResult` :  
[`construct`](../object/MessageResult.html#construct)[`resolveMessageText`](../object/MessageResult.html#resolveMessageText)[`setMessage`](../object/MessageResult.html#setMessage)[`showMessage`](../object/MessageResult.html#showMessage)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowAction"></span>

`allowAction`

[verify.t](../file/verify.t.html)\[[60](../source/verify.t.html#60)\]



Is the action allowed? This returns true if the command can be allowed
to proceed on the basis of the verification, nil if not.



<span id="excludePluralMatches"></span>

`excludePluralMatches`

[verify.t](../file/verify.t.html)\[[152](../source/verify.t.html#152)\]



Should we exclude plurals from being matched, when this type of result
is present? By default, we don't; some illogical types might want to
exclude plurals because the result types indicate such obvious
illogicalities.



<span id="resultRank"></span>

`resultRank`

[verify.t](../file/verify.t.html)\[[144](../source/verify.t.html#144)\]



Our result ranking relative to other results. Each result class defines
a ranking level so that we can determine whether one result is better
(more approving) or worse (more disapproving) than another.

To allow easy insertion of new library extension result types or
game-specific result types, we assign widely spaced rankings to the
pre-defined results. This is arbitrary; the only thing that matters in
comparing two results is the order of the rank values.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="compareTo"></span>

`compareTo (other)`

[verify.t](../file/verify.t.html)\[[96](../source/verify.t.html#96)\]



compare to another: negative if I'm worse than the other, zero if we're
the same, positive if I'm better



<span id="identicalTo"></span>

`identicalTo (other)`

[verify.t](../file/verify.t.html)\[[127](../source/verify.t.html#127)\]



Determine if I'm identical to another result. Note that it's possible
for two items to compare the same but not be identical - compareTo() is
concerned only with logicalness ranking, but identicalTo() determines if
the two items are exactly the same. Some subclasses (such as
LogicalVerifyResult) distinguish among items that compare the same but
have different reasons for their rankings.



<span id="isWorseThan"></span>

`isWorseThan (other)`

[verify.t](../file/verify.t.html)\[[86](../source/verify.t.html#86)\]



Am I worse than another result? Returns true if this result is more
disapproving than the other.



<span id="shouldInsertBefore"></span>

`shouldInsertBefore (other)`

[verify.t](../file/verify.t.html)\[[108](../source/verify.t.html#108)\]



Determine if I should appear in a result list before the given result
object. By default, this is true if I'm worse than the given result, but
some types of results use special sorting orders.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


