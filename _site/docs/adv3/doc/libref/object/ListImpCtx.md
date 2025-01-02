<span class="title">ListImpCtx</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[8080](../source/en_us.t.html#8080)\]

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

A class for messages appearing in a list. Within a list, we want to keep
track of the last direct object, so that we can refer to it with a
pronoun later in the list.

`class `**`ListImpCtx`**` :   `[`ImplicitAnnouncementContext`](../object/ImplicitAnnouncementContext.html)`   `[`GetVerbPhraseContext`](../object/GetVerbPhraseContext.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ListImpCtx`**  
`         `[`ImplicitAnnouncementContext`](../object/ImplicitAnnouncementContext.html)  
`                 object`  
`         `[`GetVerbPhraseContext`](../object/GetVerbPhraseContext.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`baseCtx`](#baseCtx)`  `[`getVerbCtx`](#getVerbCtx)`  `[`isInList`](#isInList)`  `[`useInfPhrase`](#useInfPhrase)`  `

Inherited from `ImplicitAnnouncementContext` :  
` `[`isInSublist`](../object/ImplicitAnnouncementContext.html#isInSublist)`  `

Inherited from `GetVerbPhraseContext` :  
` `[`pronounObj`](../object/GetVerbPhraseContext.html#pronounObj)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`buildImplicitAnnouncement`](#buildImplicitAnnouncement)`  `[`setBaseCtx`](#setBaseCtx)`  `

` `

Inherited from `GetVerbPhraseContext` :  
` `[`isObjPronoun`](../object/GetVerbPhraseContext.html#isObjPronoun)`  `[`objNameObj`](../object/GetVerbPhraseContext.html#objNameObj)`  `[`setPronounObj`](../object/GetVerbPhraseContext.html#setPronounObj)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="baseCtx"></span>

`baseCtx`

[en_us.t](../file/en_us.t.html)\[[8112](../source/en_us.t.html#8112)\]

<div class="desc">

our base context - we delegate some unoverridden behavior to this

</div>

<span id="getVerbCtx"></span>

`getVerbCtx`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8103](../source/en_us.t.html#8103)\]

<div class="desc">

we are our own getVerbPhrase context

</div>

<span id="isInList"></span>

`isInList`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8100](../source/en_us.t.html#8100)\]

<div class="desc">

we're in a list

</div>

<span id="useInfPhrase"></span>

`useInfPhrase`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8106](../source/en_us.t.html#8106)\]

<div class="desc">

delegate the phrase format to our underlying announcement context

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="buildImplicitAnnouncement"></span>

`buildImplicitAnnouncement (txt)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8109](../source/en_us.t.html#8109)\]

<div class="desc">

build the announcement using our underlying context

</div>

<span id="setBaseCtx"></span>

`setBaseCtx (ctx)`

[en_us.t](../file/en_us.t.html)\[[8085](../source/en_us.t.html#8085)\]

<div class="desc">

Set the appropriate base context for the given implicit action
announcement report (an ImplicitActionAnnouncement object).

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
