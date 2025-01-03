---
layout: docs
---
<span class="title">events.t</span><span class="type">file</span>

[source file](../source/events.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



TADS 3 Library: events

This module defines the event framework. An event is a programmed
operation that occurs at a particular point in the game; an event can be
turn-based, in which case it occurs after a given number of turns has
elapsed, or it can occur in real time, which means that it occurs after
a particular interval of time has elapsed.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`BasicEvent`](../object/BasicEvent.html) [`BasicEventManager`](../object/BasicEventManager.html) [`Daemon`](../object/Daemon.html) [`Event`](../object/Event.html) [`EventAction`](../object/EventAction.html) [`Fuse`](../object/Fuse.html) [`OneTimePromptDaemon`](../object/OneTimePromptDaemon.html) [`PromptDaemon`](../object/PromptDaemon.html) [`RealTimeDaemon`](../object/RealTimeDaemon.html) [`RealTimeEvent`](../object/RealTimeEvent.html) [`RealTimeFuse`](../object/RealTimeFuse.html) [`RealTimeSenseDaemon`](../object/RealTimeSenseDaemon.html) [`RealTimeSenseFuse`](../object/RealTimeSenseFuse.html) [`Schedulable`](../object/Schedulable.html) [`SenseDaemon`](../object/SenseDaemon.html) [`SenseFuse`](../object/SenseFuse.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`eventManager`](../object/eventManager.html) [`realTimeManager`](../object/realTimeManager.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`runScheduler`](#runScheduler)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="runScheduler"></span>

`runScheduler ( )`

[events.t](../file/events.t.html)\[[26](../source/events.t.html#26)\]



Run the main scheduling loop. This continues until we encounter an
end-of-file error reading from the console, or a QuitException is thrown
to terminate the game.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


