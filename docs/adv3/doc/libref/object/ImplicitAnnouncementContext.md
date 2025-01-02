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

<div class="fdesc">

Implicit action context. This is passed to the message methods that
generate implicit action announcements, to indicate the context in which
the message is to be used.

`class `**`ImplicitAnnouncementContext`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ImplicitAnnouncementContext`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ImplicitAnnouncementContext`**  
`         `[`ListImpCtx`](../object/ListImpCtx.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`standardImpCtx`](../object/standardImpCtx.html)`  `[`tryingImpCtx`](../object/tryingImpCtx.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`getVerbCtx`](#getVerbCtx)`  `[`isInList`](#isInList)`  `[`isInSublist`](#isInSublist)`  `[`useInfPhrase`](#useInfPhrase)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`buildImplicitAnnouncement`](#buildImplicitAnnouncement)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="getVerbCtx"></span>

`getVerbCtx`

[en_us.t](../file/en_us.t.html)\[[8026](../source/en_us.t.html#8026)\]

<div class="desc">

our getVerbPhrase context - by default, don't use one

</div>

<span id="isInList"></span>

`isInList`

[en_us.t](../file/en_us.t.html)\[[8016](../source/en_us.t.html#8016)\]

<div class="desc">

is this message going in a list?

</div>

<span id="isInSublist"></span>

`isInSublist`

[en_us.t](../file/en_us.t.html)\[[8023](../source/en_us.t.html#8023)\]

<div class="desc">

Are we in a sublist of 'just trying' or 'just asking' messages? (We can
only have sublist groupings one level deep, so we don't need to worry
about what kind of sublist we're in.)

</div>

<span id="useInfPhrase"></span>

`useInfPhrase`

[en_us.t](../file/en_us.t.html)\[[8013](../source/en_us.t.html#8013)\]

<div class="desc">

Should we use the infinitive form of the verb, or the participle form
for generating the announcement? By default, use use the participle
form: "(first OPENING THE BOX)".

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="buildImplicitAnnouncement"></span>

`buildImplicitAnnouncement (txt)`

[en_us.t](../file/en_us.t.html)\[[8029](../source/en_us.t.html#8029)\]

<div class="desc">

generate the announcement message given the action description

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
