[TravelBarrier]{.title}[class]{.type}

[travel.t](../file/travel.t.html)\[[1630](../source/travel.t.html#1630)\]

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
A TravelBarrier is an object that can optionally be associated with one
or more TravelConnectors to define additional conditional (or even
unconditional) barriers preventing travel.

`class `**`TravelBarrier`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TravelBarrier`**\
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

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`canTravelerPass`](#canTravelerPass)`  `[`checkTravelBarrier`](#checkTravelBarrier)`  `[`explainTravelBarrier`](#explainTravelBarrier)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#canTravelerPass}

`canTravelerPass (traveler, connector)`

[travel.t](../file/travel.t.html)\[[1638](../source/travel.t.html#1638)\]

::: desc
This method should return true to permit the traveler to travel via
connector and nil to prohibit travel. By default we simply allow travel
but particular instances will need to override this method to specify
the conditions under which travel is or is not permitted.
:::

[]{#checkTravelBarrier}

`checkTravelBarrier (traveler, connector)`

[travel.t](../file/travel.t.html)\[[1655](../source/travel.t.html#1655)\]

::: desc
Check whether traveler can pass through this connector. If it can,
return true; otherise explain why travel is disallowed and return nil.
:::

[]{#explainTravelBarrier}

`explainTravelBarrier (traveler, connector)`

[travel.t](../file/travel.t.html)\[[1647](../source/travel.t.html#1647)\]

::: desc
Display some text explaining why traveler is not permitted to travel via
connector when canTravelerPass() returns nil.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
