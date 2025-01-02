---
layout: docs
---
<span class="title">msg_neu.t</span><span class="type">file</span>

[source file](../source/msg_neu.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library - "neutral" messages for US English

This module provides standard library messages with a parser/narrator
that's as invisible (neutral) as possible. These messages are designed
to reduce the presence of the computer as mediator in the story, to give
the player the most direct contact that we can with the scenario.

The parser almost always refers to itself in the third person (by
calling itself something like "this story") rather than in the first
person, and, whenever possible, avoids referring to itself in the first
place. Our ideal phrasing is either second-person, describing things
directly in terms of the player character's experience, or "no-person,"
simply describing things without mentioning the speaker or listener at
all. For example, rather than saying "I don't see that here," we say
"you don't see that here," or "that's not here." We occasionally stray
from this ideal where achieving it would be too awkward.

In the earliest days of adventure games, the parser was usually a
visible presence: the early parsers frequently reported things in the
first person, and some even had specific personalities. This conspicuous
parser style has become less prevalent in modern games, though, and
authors now usually prefer to treat the parser as just another part of
the user interface, which like all good UI's is best when the user
doesn't notice it.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`BaseContentsLister`](../object/BaseContentsLister.html)`  `[`BaseInlineContentsLister`](../object/BaseInlineContentsLister.html)`  `[`BaseRearContentsLister`](../object/BaseRearContentsLister.html)`  `[`BaseSurfaceContentsLister`](../object/BaseSurfaceContentsLister.html)`  `[`BaseThingContentsLister`](../object/BaseThingContentsLister.html)`  `[`BaseUndersideContentsLister`](../object/BaseUndersideContentsLister.html)`  `[`CustomRoomLister`](../object/CustomRoomLister.html)`  `[`ExitLister`](../object/ExitLister1.html)`  `[`LookWhereContentsLister`](../object/LookWhereContentsLister.html)`  `[`MajorAttachmentLister`](../object/MajorAttachmentLister.html)`  `[`RemoteRoomLister`](../object/RemoteRoomLister.html)`  `[`SimpleAttachmentLister`](../object/SimpleAttachmentLister.html)`  `[`SuggestedTopicLister`](../object/SuggestedTopicLister.html)`  `[`SuggestionListGroup`](../object/SuggestionListGroup.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`aboardVehicleLister`](../object/aboardVehicleLister.html)`  `[`actorHoldingDescInventoryListerLong`](../object/actorHoldingDescInventoryListerLong.html)`  `[`actorHoldingDescInventoryListerShort`](../object/actorHoldingDescInventoryListerShort.html)`  `[`actorInventoryLister`](../object/actorInventoryLister.html)`  `[`actorSingleInventoryLister`](../object/actorSingleInventoryLister.html)`  `[`darkRoomLister`](../object/darkRoomLister.html)`  `[`equivalentStateLister`](../object/equivalentStateLister.html)`  `[`exitsTip`](../object/exitsTip.html)`  `[`explicitExitLister`](../object/explicitExitLister.html)`  `[`finishOptionsLister`](../object/finishOptionsLister.html)`  `[`footnotesTip`](../object/footnotesTip.html)`  `[`fullScoreTip`](../object/fullScoreTip.html)`  `[`implicitAnnouncementGrouper`](../object/implicitAnnouncementGrouper.html)`  `[`inlineListingContentsLister`](../object/inlineListingContentsLister.html)`  `[`keyringExamineContentsLister`](../object/keyringExamineContentsLister.html)`  `[`keyringInlineContentsLister`](../object/keyringInlineContentsLister.html)`  `[`libMessages`](../object/libMessages.html)`  `[`lookAroundExitLister`](../object/lookAroundExitLister.html)`  `[`lookAroundTerseExitLister`](../object/lookAroundTerseExitLister.html)`  `[`npcActionMessages`](../object/npcActionMessages.html)`  `[`npcDeferredMessages`](../object/npcDeferredMessages.html)`  `[`npcDeferredMessagesDirect`](../object/npcDeferredMessagesDirect.html)`  `[`npcMessages`](../object/npcMessages.html)`  `[`npcMessagesDirect`](../object/npcMessagesDirect.html)`  `[`oopsTip`](../object/oopsTip.html)`  `[`openableDescContentsLister`](../object/openableDescContentsLister.html)`  `[`openableOpeningLister`](../object/openableOpeningLister.html)`  `[`otherExitLister`](../object/otherExitLister.html)`  `[`playerActionMessages`](../object/playerActionMessages.html)`  `[`playerMessages`](../object/playerMessages.html)`  `[`rearAbandonContentsLister`](../object/rearAbandonContentsLister.html)`  `[`rearContentsLister`](../object/rearContentsLister.html)`  `[`rearDescContentsLister`](../object/rearDescContentsLister.html)`  `[`rearInlineContentsLister`](../object/rearInlineContentsLister.html)`  `[`rearLookBehindLister`](../object/rearLookBehindLister.html)`  `[`roomLister`](../object/roomLister.html)`  `[`roomPartContentsLister`](../object/roomPartContentsLister.html)`  `[`roomPartDescContentsLister`](../object/roomPartDescContentsLister.html)`  `[`roomPartLookInLister`](../object/roomPartLookInLister.html)`  `[`scoreChangeTip`](../object/scoreChangeTip.html)`  `[`statuslineExitLister`](../object/statuslineExitLister.html)`  `[`suggestionAskForGroup`](../object/suggestionAskForGroup.html)`  `[`suggestionAskGroup`](../object/suggestionAskGroup.html)`  `[`suggestionGiveGroup`](../object/suggestionGiveGroup.html)`  `[`suggestionShowGroup`](../object/suggestionShowGroup.html)`  `[`suggestionTellGroup`](../object/suggestionTellGroup.html)`  `[`suggestionYesNoGroup`](../object/suggestionYesNoGroup.html)`  `[`surfaceContentsLister`](../object/surfaceContentsLister.html)`  `[`surfaceDescContentsLister`](../object/surfaceDescContentsLister.html)`  `[`surfaceInlineContentsLister`](../object/surfaceInlineContentsLister.html)`  `[`surfaceLookInLister`](../object/surfaceLookInLister.html)`  `[`thingContentsLister`](../object/thingContentsLister.html)`  `[`thingDescContentsLister`](../object/thingDescContentsLister.html)`  `[`thingLookInLister`](../object/thingLookInLister.html)`  `[`undersideAbandonContentsLister`](../object/undersideAbandonContentsLister.html)`  `[`undersideContentsLister`](../object/undersideContentsLister.html)`  `[`undersideDescContentsLister`](../object/undersideDescContentsLister.html)`  `[`undersideInlineContentsLister`](../object/undersideInlineContentsLister.html)`  `[`undersideLookUnderLister`](../object/undersideLookUnderLister.html)`  `[`undoTip`](../object/undoTip.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`buildParam`](#buildParam)`  `[`buildSynthParam`](#buildSynthParam)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="buildParam"></span>

`buildParam (typeString, nm)`

[msg_neu.t](../file/msg_neu.t.html)\[[53](../source/msg_neu.t.html#53)\]

<div class="desc">

Build a message parameter string with the given parameter type and name.

This is useful when we have a name from a variable, and we need to build
the message substitution string for embedding in a larger string. We
can't just embed the name variable using \<\<var\>\>, because that would
process the output piecewise - the output filter needs to see the whole
{typ var} expression in one go. So, instead of writing this:

  
{The/he \<\<var\>\>} {is} ...

write this:

  
\<\<buildParam('The/he', var)\>\> {is} ...

</div>

<span id="buildSynthParam"></span>

`buildSynthParam (typeString, obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[66](../source/msg_neu.t.html#66)\]

<div class="desc">

Synthesize a message parameter, and build it into a parameter string
with the given substitution type.

For example, buildSynthParam('abc', obj) returns '{abc xxx}', where
'xxx' is a synthesized message parameter name (created using
gSynthMessageParam) for the object obj.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
