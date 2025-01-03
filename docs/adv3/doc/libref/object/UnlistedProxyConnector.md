---
layout: docs
---
<span class="title">UnlistedProxyConnector</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[1688](../source/travel.t.html#1688)\]

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



An "unlisted proxy" connector acts as a proxy for another connector. We
act exactly like the underlying connector, except that we suppress the
connector from automatic exit lists. This can be used for cases where an
otherwise normal connector is needed but the connector is not to appear
in automatic exit lists (such as the status line).

The most common situation where this kind of connector is useful is
where multiple directions in a given room all go to the same
destination. In these cases, it's often desirable for some of the
directions to be unlisted alternatives. The asExit() macro can be used
for convenience to set up these direction synonyms.

`class `**`UnlistedProxyConnector`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`UnlistedProxyConnector`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isConnectorListed`](#isConnectorListed) [`primaryConn`](#primaryConn)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`dobjFor(TravelVia)`](#dobjFor(TravelVia)) [`ofKind`](#ofKind) [`propNotDefined`](#propNotDefined)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isConnectorListed"></span>

`isConnectorListed`

[travel.t](../file/travel.t.html)\[[1705](../source/travel.t.html#1705)\]



we're not listed



<span id="primaryConn"></span>

`primaryConn`

[travel.t](../file/travel.t.html)\[[1702](../source/travel.t.html#1702)\]



Our underlying connector. Start out with a default TadsObject rather
than nil in case anyone wants to call a property or test inheritance
before we're finished with our constructor - this will produce
reasonable default behavior without having to test for nil everywhere.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (pri)`

[travel.t](../file/travel.t.html)\[[1689](../source/travel.t.html#1689)\]



*no description available*



<span id="dobjFor(TravelVia)"></span>

`dobjFor(TravelVia)`

[travel.t](../file/travel.t.html)\[[1708](../source/travel.t.html#1708)\]



map any TravelVia action to our underlying connector



<span id="ofKind"></span>

`ofKind (cls)`

[travel.t](../file/travel.t.html)\[[1721](../source/travel.t.html#1721)\]



As a proxy, we don't want to disguise the fact that we're a proxy, if
someone specifically asks, so admist to being of our own true kind; but
we also act mostly like our underlying connector, so if someone wants to
know if we're one of those, say yes to that as well. So, return true if
the inherited version returns true, and also return true if our primary
connector would return true.



<span id="propNotDefined"></span>

`propNotDefined (prop, [args])`

[travel.t](../file/travel.t.html)\[[1711](../source/travel.t.html#1711)\]



redirect everything we don't handle to the underlying connector
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


