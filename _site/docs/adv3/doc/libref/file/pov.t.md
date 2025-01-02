<span class="title">pov.t</span><span class="type">file</span>

[source file](../source/pov.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library - point of view

This module provides definitions related to point of view and sensory
context. When we generate output, we do so with respect to a particular
point of view; different points of view can result in different output,
because of the viewer's distance from an object, for example, or because
of the presence of obscuring materials between the viewer and the viewed
object. We also generate output in a particular sensory context, which
controls whether or not a message that describes an object with respect
to a particular sense should be generated at all; for example, if the
viewer can't see an object because of darkness or an obscuring layer of
material, messages about the object's visual appearance should not be
generated.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`senseContext`](../object/senseContext.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`callFromPOV`](#callFromPOV)`  `[`callWithSenseContext`](#callWithSenseContext)`  `[`clearPOV`](#clearPOV)`  `[`getPOV`](#getPOV)`  `[`getPOVActor`](#getPOVActor)`  `[`getPOVActorDefault`](#getPOVActorDefault)`  `[`getPOVDefault`](#getPOVDefault)`  `[`popPOV`](#popPOV)`  `[`pushPOV`](#pushPOV)`  `[`setPOV`](#setPOV)`  `[`setRootPOV`](#setRootPOV)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="callFromPOV"></span>

`callFromPOV (actor, pov, funcToCall, [args])`

[pov.t](../file/pov.t.html)\[[328](../source/pov.t.html#328)\]

<div class="desc">

Call a function from a point of view. We'll set the new point of view,
call the function with the given arguments, then restore the original
point of view.

</div>

<span id="callWithSenseContext"></span>

`callWithSenseContext (source, sense, func)`

[pov.t](../file/pov.t.html)\[[56](../source/pov.t.html#56)\]

<div class="desc">

Call a function with a given sensory context.

The sensory context specifies the source of any messages generated in
the course of the routine we invoke and the sense which those messages
use to convey information. If the player character cannot sense the
source object in the given sense, then we block all messages generated
while calling this function.

If the source object is nil, this establishes a neutral sense context in
which all messages are visible.

This can be used for processing events that are not directly initiated
by the player character, such as non-player character activities or
scheduled events (fuses and daemons). The idea is that anything
described in the course of calling our routine is physically associated
with the source object and relates to the given sense, so if the player
character cannot sense the source object, then the player should not be
aware of these happenings and thus should not see the messages.

Sense contexts are not nested in their effects - we will show or hide
the messages that our callback routine generates regardless of whether
or not messages are hidden by an enclosing sensory context. So, this
routine effectively switches to the new sense context for the duration
of the callback, eliminating the effect of any enclosing context.
However, we do restore the enclosing sense context before returning, so
there is no lasting net effect on the global sense context.

</div>

<span id="clearPOV"></span>

`clearPOV ( )`

[pov.t](../file/pov.t.html)\[[310](../source/pov.t.html#310)\]

<div class="desc">

Clear the point of view and all stacked elements

</div>

<span id="getPOV"></span>

`getPOV ( )`

[pov.t](../file/pov.t.html)\[[205](../source/pov.t.html#205)\]

<div class="desc">

Get the current point of view. In \*most\* cases, this is the same as
the point-of-view actor: the actor is looking around with its own eyes,
so it's the point of view. However, this can differ from the actor when
the actor is viewing the location being described through an
intermediary of some kind. For example, if an actor is observing a
remote room through a closed-circuit TV system, the point of view would
be the camera in the remote room (not the TV - the point of view is
intended to be the object that's physically absorbing the light rays or
other sensory equivalents).

</div>

<span id="getPOVActor"></span>

`getPOVActor ( )`

[pov.t](../file/pov.t.html)\[[189](../source/pov.t.html#189)\]

<div class="desc">

Get the current point-of-view actor - this is the actor who's performing
the action (LOOK AROUND, EXAMINE, SMELL, etc) that's generating the
current description.

</div>

<span id="getPOVActorDefault"></span>

`getPOVActorDefault (dflt)`

[pov.t](../file/pov.t.html)\[[211](../source/pov.t.html#211)\]

<div class="desc">

get the POV actor, returning the given default if there isn't one set

</div>

<span id="getPOVDefault"></span>

`getPOVDefault (dflt)`

[pov.t](../file/pov.t.html)\[[221](../source/pov.t.html#221)\]

<div class="desc">

get the POV, returning the given default if there isn't one set

</div>

<span id="popPOV"></span>

`popPOV ( )`

[pov.t](../file/pov.t.html)\[[283](../source/pov.t.html#283)\]

<div class="desc">

Pop the most recent point of view pushed

</div>

<span id="pushPOV"></span>

`pushPOV (actor, pov)`

[pov.t](../file/pov.t.html)\[[270](../source/pov.t.html#270)\]

<div class="desc">

Push the current point of view

</div>

<span id="setPOV"></span>

`setPOV (actor, pov)`

[pov.t](../file/pov.t.html)\[[233](../source/pov.t.html#233)\]

<div class="desc">

Change the point of view without altering the point-of-view stack

</div>

<span id="setRootPOV"></span>

`setRootPOV (actor, pov)`

[pov.t](../file/pov.t.html)\[[245](../source/pov.t.html#245)\]

<div class="desc">

Set the root point of view. This doesn't affect the current point of
view unless there is no current point of view; this merely sets the
outermost default point of view.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
