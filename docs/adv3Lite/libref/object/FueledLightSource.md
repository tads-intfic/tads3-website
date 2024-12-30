[FueledLightSource]{.title}[class]{.type}

[fueled.t](../file/fueled.t.html)\[[35](../source/fueled.t.html#35)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A FueledLightSource is a light source that stars out with a set amount
of fuel, which is then consumed at one unit per turn. Once the fuel is
exhausted the FueledLightSource goes out and can\'t be re-lit until it
has been refueled. \[PART OF FUELED EXTENSION\]

`class `**`FueledLightSource`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`FueledLightSource`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`burnedOutMsg`](#burnedOutMsg)`  `[`fuelDaemonID`](#fuelDaemonID)`  `[`fuelLevel`](#fuelLevel)`  `[`fuelSource`](#fuelSource)`  `[`plungedIntoDarknessMsg`](#plungedIntoDarknessMsg)`  `[`wontLightMsg`](#wontLightMsg)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`fuelDaemon`](#fuelDaemon)`  `[`makeLit`](#makeLit)`  `[`removeFuelSource`](#removeFuelSource)`  `[`sayBurnedOut`](#sayBurnedOut)`  `[`showWarning`](#showWarning)`  `[`startFuelDaemon`](#startFuelDaemon)`  `[`stopFuelDaemon`](#stopFuelDaemon)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#burnedOutMsg}

`burnedOutMsg`

[fueled.t](../file/fueled.t.html)\[[123](../source/fueled.t.html#123)\]

::: desc
If our going out has left the player character in darkness, say so.
:::

[]{#fuelDaemonID}

`fuelDaemonID`

[fueled.t](../file/fueled.t.html)\[[49](../source/fueled.t.html#49)\]

::: desc
A note of our fuelDaemon\'s ID, if one is running.
:::

[]{#fuelLevel}

`fuelLevel`

[fueled.t](../file/fueled.t.html)\[[46](../source/fueled.t.html#46)\]

::: desc
Our remaining fuel level. The default is a modest level but this can be
overridden on particular instances.
:::

[]{#fuelSource}

`fuelSource`

[fueled.t](../file/fueled.t.html)\[[40](../source/fueled.t.html#40)\]

::: desc
The source of our fuel. By default this is self, but it could be an
external source such as a battery
:::

[]{#plungedIntoDarknessMsg}

`plungedIntoDarknessMsg`

[fueled.t](../file/fueled.t.html)\[[125](../source/fueled.t.html#125)\]

::: desc
*no description available*
:::

[]{#wontLightMsg}

`wontLightMsg`

[fueled.t](../file/fueled.t.html)\[[159](../source/fueled.t.html#159)\]

::: desc
The message to display when we can\'t be lit because we have no fuel.
Most instances will probably want to override this to something more
specific.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#fuelDaemon}

`fuelDaemon ( )`

[fueled.t](../file/fueled.t.html)\[[75](../source/fueled.t.html#75)\]

::: desc
The fuelDaemon is executed every turn this object is lit
:::

[]{#makeLit}

`makeLit (stat)`

[fueled.t](../file/fueled.t.html)\[[128](../source/fueled.t.html#128)\]

::: desc
Modifications to the makeLit() method for FueledLightSource \[FUELED
EXTENSION\]
:::

[]{#removeFuelSource}

`removeFuelSource ( )`

[fueled.t](../file/fueled.t.html)\[[166](../source/fueled.t.html#166)\]

::: desc
If we have an external fuel source then removing or disabling it will
have certain consequences, so code that, for example, you can call this
method if a battery is removed from a flashlight.
:::

[]{#sayBurnedOut}

`sayBurnedOut (fromDaemon?)`

[fueled.t](../file/fueled.t.html)\[[106](../source/fueled.t.html#106)\]

::: desc
The message to display when we run out of fuel
:::

[]{#showWarning}

`showWarning ( )`

[fueled.t](../file/fueled.t.html)\[[103](../source/fueled.t.html#103)\]

::: desc
The showWarning() message can be used to display a message warning when
this light source is about to go out. One way to do this would be via a
switch statement that looks at the value of fuelSource.fuelLevel and
displays warning messages when that reaches low values. There\'s no need
for this message to display anything when the fuelLevel is zero,
however, since that is handled by sayBurnedOut().
:::

[]{#startFuelDaemon}

`startFuelDaemon ( )`

[fueled.t](../file/fueled.t.html)\[[55](../source/fueled.t.html#55)\]

::: desc
Start our fuelDaemon running in a SenseDaemon (so no messages are
displayed if the player character can\'t see us).
:::

[]{#stopFuelDaemon}

`stopFuelDaemon ( )`

[fueled.t](../file/fueled.t.html)\[[65](../source/fueled.t.html#65)\]

::: desc
Stop the fuelDaemon; first check that we actually have one and then
disable it.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::