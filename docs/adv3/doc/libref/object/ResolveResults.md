<span class="title">ResolveResults</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[41](../source/parser.t.html#41)\]

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

<div class="fdesc">

ResolveResults - an instance of this class is passed to the
resolveNouns() routine to receive the results of the resolution.

This class's main purpose is to virtualize the handling of error or
warning conditions during the resolution process. The ResolveResults
object is created by the initiator of the resolution, so it allows the
initiator to determine how errors are to be handled without having to
pass flags down through the match tree.

`class `**`ResolveResults`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ResolveResults`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ResolveResults`**  
`         `[`BasicResolveResults`](../object/BasicResolveResults.html)  
`                 `[`ActorResolveResults`](../object/ActorResolveResults.html)  
`                 `[`DisambigResults`](../object/DisambigResults.html)  
`         `[`CommandRanking`](../object/CommandRanking.html)  
`                 `[`DisambigRanking`](../object/DisambigRanking.html)  
`                 `[`MissingObjectRanking`](../object/MissingObjectRanking.html)  
`                 `[`OopsResults`](../object/OopsResults.html)  
`         `[`TentativeResolveResults`](../object/TentativeResolveResults.html)  
`         `[`TryAsActorResolveResults`](../object/TryAsActorResolveResults.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
