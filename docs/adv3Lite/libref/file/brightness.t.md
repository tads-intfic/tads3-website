---
layout: docs
---
<span class="title">brightness.t</span><span class="type">file</span>

[source file](../source/brightness.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



  
Brightness Exteension for adv3Lite  
Version 1.0 29-Oct-22  
Eric Eve \*. This extension provides much of the adv3 ligthting levels
functionality in a slightly different form for the adv3Lite library.

It adds brightness and opacity properties to the Thing class, as well as
a brightnessWithin() method which returns the current brightness within
a room or booth (which is taken to be the brightness of its brightest
available light source). The opacity property takes effect only on a
container that is defined as transparent, in which case the opacity is
the loss of brightness for a light source shining in or out of that
container.

The extension is set up to mimic the adv3 brightness scale, in that a
brightness of 0 equates to darkness, a brightness of 1 is a
self-illuminating object (or isVisibleInDark) that doesn't illuminate
anything else, a brightness of 2 provides dim light that's sufficient
for examining one's environment but not enough to read by, a brightness
of 3 is normal light, and a brightness of 4 is an especially bright
light, but game code can implement a differnent scale if desired.

There are limitations to the realism of this brightness model, for
example it doesn't accumulate the brightness of multiple light sources,
and offers only limited handling of light sources in remote locations in
the same SenseRegion. Also, apart from imposing a minimum brightness
level required for reading and providing the means to model loss of
brightness at a distance or through a semi-transparent medium, it has
very little impact on game behaviour out of the box; for the most part,
it is up to game code to decide what it wants to do with the brightness
mechanism provided.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`lightProbe_`](../object/lightProbe_.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


