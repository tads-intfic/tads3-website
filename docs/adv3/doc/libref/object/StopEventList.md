---
layout: docs
---
<span class="title">StopEventList</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[1167](../source/misc.t.html#1167)\]

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



A stopping event list - this runs through the event list in order, then
stops at the last item and repeats it each time the script is
subsequently invoked.

This is often useful for things like ASK ABOUT topics, where we reveal
more information when asked repeatedly about a topic, but eventually
reach a point where we've said everything:

  
\>ask bob about black book  
"What makes you think I know anything about it?" he says, his voice
shaking.

\>again  
"No! You can't make me tell you!"

\>again  
"All right, I'll tell you what you want to know! But I warn you, these
are things mortal men were never meant to know. Your life, your very
soul will be in danger from the moment you hear these dark secrets!"

\>again  
\[scene missing\]

\>again  
"I've already told you all I know."

\>again  
"I've already told you all I know."

`class `**`StopEventList`**` :   `[`EventList`](../object/EventList.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`StopEventList`**  
[`EventList`](../object/EventList.html)  
[`Script`](../object/Script.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `EventList` :  
[`curScriptState`](../object/EventList.html#curScriptState) [`eventList`](../object/EventList.html#eventList) [`eventListLen`](../object/EventList.html#eventListLen)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`advanceState`](#advanceState)

Inherited from `EventList` :  
[`construct`](../object/EventList.html#construct) [`doScript`](../object/EventList.html#doScript) [`doScriptEvent`](../object/EventList.html#doScriptEvent) [`scriptDone`](../object/EventList.html#scriptDone)

Inherited from `Script` :  
[`getScriptState`](../object/Script.html#getScriptState)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="advanceState"></span>

`advanceState ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1168](../source/misc.t.html#1168)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


