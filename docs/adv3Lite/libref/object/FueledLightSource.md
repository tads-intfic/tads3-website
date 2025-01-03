---
layout: docs
---
<span class="title">FueledLightSource</span><span class="type">class</span>

[fueled.t](../file/fueled.t.html)\[[35](../source/fueled.t.html#35)\]

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



A FueledLightSource is a light source that stars out with a set amount
of fuel, which is then consumed at one unit per turn. Once the fuel is
exhausted the FueledLightSource goes out and can't be re-lit until it
has been refueled. \[PART OF FUELED EXTENSION\]

`class `**`FueledLightSource`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`FueledLightSource`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`burnedOutMsg`](#burnedOutMsg) [`fuelDaemonID`](#fuelDaemonID) [`fuelLevel`](#fuelLevel) [`fuelSource`](#fuelSource) [`plungedIntoDarknessMsg`](#plungedIntoDarknessMsg) [`wontLightMsg`](#wontLightMsg)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`fuelDaemon`](#fuelDaemon) [`makeLit`](#makeLit) [`removeFuelSource`](#removeFuelSource) [`sayBurnedOut`](#sayBurnedOut) [`showWarning`](#showWarning) [`startFuelDaemon`](#startFuelDaemon) [`stopFuelDaemon`](#stopFuelDaemon)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="burnedOutMsg"></span>

`burnedOutMsg`

[fueled.t](../file/fueled.t.html)\[[123](../source/fueled.t.html#123)\]



If our going out has left the player character in darkness, say so.



<span id="fuelDaemonID"></span>

`fuelDaemonID`

[fueled.t](../file/fueled.t.html)\[[49](../source/fueled.t.html#49)\]



A note of our fuelDaemon's ID, if one is running.



<span id="fuelLevel"></span>

`fuelLevel`

[fueled.t](../file/fueled.t.html)\[[46](../source/fueled.t.html#46)\]



Our remaining fuel level. The default is a modest level but this can be
overridden on particular instances.



<span id="fuelSource"></span>

`fuelSource`

[fueled.t](../file/fueled.t.html)\[[40](../source/fueled.t.html#40)\]



The source of our fuel. By default this is self, but it could be an
external source such as a battery



<span id="plungedIntoDarknessMsg"></span>

`plungedIntoDarknessMsg`

[fueled.t](../file/fueled.t.html)\[[125](../source/fueled.t.html#125)\]



*no description available*



<span id="wontLightMsg"></span>

`wontLightMsg`

[fueled.t](../file/fueled.t.html)\[[159](../source/fueled.t.html#159)\]



The message to display when we can't be lit because we have no fuel.
Most instances will probably want to override this to something more
specific.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="fuelDaemon"></span>

`fuelDaemon ( )`

[fueled.t](../file/fueled.t.html)\[[75](../source/fueled.t.html#75)\]



The fuelDaemon is executed every turn this object is lit



<span id="makeLit"></span>

`makeLit (stat)`

[fueled.t](../file/fueled.t.html)\[[128](../source/fueled.t.html#128)\]



Modifications to the makeLit() method for FueledLightSource \[FUELED
EXTENSION\]



<span id="removeFuelSource"></span>

`removeFuelSource ( )`

[fueled.t](../file/fueled.t.html)\[[166](../source/fueled.t.html#166)\]



If we have an external fuel source then removing or disabling it will
have certain consequences, so code that, for example, you can call this
method if a battery is removed from a flashlight.



<span id="sayBurnedOut"></span>

`sayBurnedOut (fromDaemon?)`

[fueled.t](../file/fueled.t.html)\[[106](../source/fueled.t.html#106)\]



The message to display when we run out of fuel



<span id="showWarning"></span>

`showWarning ( )`

[fueled.t](../file/fueled.t.html)\[[103](../source/fueled.t.html#103)\]



The showWarning() message can be used to display a message warning when
this light source is about to go out. One way to do this would be via a
switch statement that looks at the value of fuelSource.fuelLevel and
displays warning messages when that reaches low values. There's no need
for this message to display anything when the fuelLevel is zero,
however, since that is handled by sayBurnedOut().



<span id="startFuelDaemon"></span>

`startFuelDaemon ( )`

[fueled.t](../file/fueled.t.html)\[[55](../source/fueled.t.html#55)\]



Start our fuelDaemon running in a SenseDaemon (so no messages are
displayed if the player character can't see us).



<span id="stopFuelDaemon"></span>

`stopFuelDaemon ( )`

[fueled.t](../file/fueled.t.html)\[[65](../source/fueled.t.html#65)\]



Stop the fuelDaemon; first check that we actually have one and then
disable it.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


