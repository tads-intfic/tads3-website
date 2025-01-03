---
layout: docs
---
<span class="title">ImplicitAnnouncementContext</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[8007](../source/en_us.t.html#8007)\]

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



Implicit action context. This is passed to the message methods that
generate implicit action announcements, to indicate the context in which
the message is to be used.

`class `**`ImplicitAnnouncementContext`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ImplicitAnnouncementContext`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ImplicitAnnouncementContext`**  
[`ListImpCtx`](../object/ListImpCtx.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`standardImpCtx`](../object/standardImpCtx.html) [`tryingImpCtx`](../object/tryingImpCtx.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`getVerbCtx`](#getVerbCtx) [`isInList`](#isInList) [`isInSublist`](#isInSublist) [`useInfPhrase`](#useInfPhrase)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`buildImplicitAnnouncement`](#buildImplicitAnnouncement)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="getVerbCtx"></span>

`getVerbCtx`

[en_us.t](../file/en_us.t.html)\[[8026](../source/en_us.t.html#8026)\]



our getVerbPhrase context - by default, don't use one



<span id="isInList"></span>

`isInList`

[en_us.t](../file/en_us.t.html)\[[8016](../source/en_us.t.html#8016)\]



is this message going in a list?



<span id="isInSublist"></span>

`isInSublist`

[en_us.t](../file/en_us.t.html)\[[8023](../source/en_us.t.html#8023)\]



Are we in a sublist of 'just trying' or 'just asking' messages? (We can
only have sublist groupings one level deep, so we don't need to worry
about what kind of sublist we're in.)



<span id="useInfPhrase"></span>

`useInfPhrase`

[en_us.t](../file/en_us.t.html)\[[8013](../source/en_us.t.html#8013)\]



Should we use the infinitive form of the verb, or the participle form
for generating the announcement? By default, use use the participle
form: "(first OPENING THE BOX)".



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="buildImplicitAnnouncement"></span>

`buildImplicitAnnouncement (txt)`

[en_us.t](../file/en_us.t.html)\[[8029](../source/en_us.t.html#8029)\]



generate the announcement message given the action description
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


