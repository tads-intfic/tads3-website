---
layout: docs
---
<span class="title">action.t</span><span class="type">file</span>

[source file](../source/action.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library: Actions.

This module defines the Action classes. An Action is an abstract object
representing a command to be performed.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

[`Action`](../object/Action.html)[`ActionRemappingTooComplexError`](../object/ActionRemappingTooComplexError.html)[`AllAction`](../object/AllAction.html)[`ConvIAction`](../object/ConvIAction.html)[`ConvTopicResolver`](../object/ConvTopicResolver.html)[`ConvTopicTAction`](../object/ConvTopicTAction.html)[`DefaultAction`](../object/DefaultAction.html)[`IAction`](../object/IAction.html)[`LiteralAction`](../object/LiteralAction.html)[`LiteralActionBase`](../object/LiteralActionBase.html)[`LiteralTAction`](../object/LiteralTAction.html)[`PreCondDesc`](../object/PreCondDesc.html)[`ResolvedTopic`](../object/ResolvedTopic.html)[`SystemAction`](../object/SystemAction.html)[`TAction`](../object/TAction.html)[`TActionTopicResolver`](../object/TActionTopicResolver.html)[`TentativeResolveResults`](../object/TentativeResolveResults.html)[`TIAction`](../object/TIAction.html)[`TopicAction`](../object/TopicAction.html)[`TopicActionBase`](../object/TopicActionBase.html)[`TopicResolver`](../object/TopicResolver.html)[`TopicTAction`](../object/TopicTAction.html)
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

[`dummyTentativeInfo`](../object/dummyTentativeInfo.html)[`dummyTentativeObject`](../object/dummyTentativeObject.html)[`objectRelations`](../object/objectRelations.html)[`resolvedTopicNothing`](../object/resolvedTopicNothing.html)
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

[`callRoomAfterAction`](#callRoomAfterAction)[`callRoomBeforeAction`](#callRoomBeforeAction)[`withParserGlobals`](#withParserGlobals)

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="callRoomAfterAction"></span>

`callRoomAfterAction (room)`

[action.t](../file/action.t.html)\[[2995](../source/action.t.html#2995)\]

<div class="desc">

Call the roomAfterAction method on a given room, then on the room's
containing rooms.

</div>

<span id="callRoomBeforeAction"></span>

`callRoomBeforeAction (room)`

[action.t](../file/action.t.html)\[[2982](../source/action.t.html#2982)\]

<div class="desc">

Call the roomBeforeAction method on a given room's containing rooms,
then on the room itself.

</div>

<span id="withParserGlobals"></span>

`withParserGlobals (issuer, actor, action, func)`

[action.t](../file/action.t.html)\[[89](../source/action.t.html#89)\]

<div class="desc">

Invoke the given function with the given values for the parser global
variables gActor and gAction.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
