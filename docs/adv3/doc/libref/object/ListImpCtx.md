---
layout: docs
---
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



A class for messages appearing in a list. Within a list, we want to keep
track of the last direct object, so that we can refer to it with a
pronoun later in the list.

`class `**`ListImpCtx`**` :   `[`ImplicitAnnouncementContext`](../object/ImplicitAnnouncementContext.html) [`GetVerbPhraseContext`](../object/GetVerbPhraseContext.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ListImpCtx`**  
[`ImplicitAnnouncementContext`](../object/ImplicitAnnouncementContext.html)  
`                 object`  
[`GetVerbPhraseContext`](../object/GetVerbPhraseContext.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`baseCtx`](#baseCtx) [`getVerbCtx`](#getVerbCtx) [`isInList`](#isInList) [`useInfPhrase`](#useInfPhrase)

Inherited from `ImplicitAnnouncementContext` :  
[`isInSublist`](../object/ImplicitAnnouncementContext.html#isInSublist)

Inherited from `GetVerbPhraseContext` :  
[`pronounObj`](../object/GetVerbPhraseContext.html#pronounObj)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`buildImplicitAnnouncement`](#buildImplicitAnnouncement) [`setBaseCtx`](#setBaseCtx)



Inherited from `GetVerbPhraseContext` :  
[`isObjPronoun`](../object/GetVerbPhraseContext.html#isObjPronoun) [`objNameObj`](../object/GetVerbPhraseContext.html#objNameObj) [`setPronounObj`](../object/GetVerbPhraseContext.html#setPronounObj)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="baseCtx"></span>

`baseCtx`

[en_us.t](../file/en_us.t.html)\[[8112](../source/en_us.t.html#8112)\]



our base context - we delegate some unoverridden behavior to this



<span id="getVerbCtx"></span>

`getVerbCtx`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8103](../source/en_us.t.html#8103)\]



we are our own getVerbPhrase context



<span id="isInList"></span>

`isInList`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8100](../source/en_us.t.html#8100)\]



we're in a list



<span id="useInfPhrase"></span>

`useInfPhrase`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8106](../source/en_us.t.html#8106)\]



delegate the phrase format to our underlying announcement context



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="buildImplicitAnnouncement"></span>

`buildImplicitAnnouncement (txt)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8109](../source/en_us.t.html#8109)\]



build the announcement using our underlying context



<span id="setBaseCtx"></span>

`setBaseCtx (ctx)`

[en_us.t](../file/en_us.t.html)\[[8085](../source/en_us.t.html#8085)\]



Set the appropriate base context for the given implicit action
announcement report (an ImplicitActionAnnouncement object).





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


