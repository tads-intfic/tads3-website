<span class="title">ProxyActor</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[6738](../source/actor.t.html#6738)\]

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

The ProxyActor class can be used to continue the definition of a complex
actor over more than one file. Simply place a ProxyActor object at the
head of a second or subsequent file for the same actor and then set its
location to the Actor object its standing in for. You can then locate
TopicGroups, TopicEntries, ActorStates, AgendaItems, ConvNodes etc.,
within the ProxyActor just as if it were the Actor.

`class `**`ProxyActor`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ProxyActor`**  
`         object`  
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

` `[`active`](#active)`  `[`getActor`](#getActor)`  `[`location`](#location)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addTopic`](#addTopic)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="active"></span>

`active`

[actor.t](../file/actor.t.html)\[[6749](../source/actor.t.html#6749)\]

<div class="desc">

I am active if my location (i.e. my actor) is active).

</div>

<span id="getActor"></span>

`getActor`

[actor.t](../file/actor.t.html)\[[6740](../source/actor.t.html#6740)\]

<div class="desc">

My Actor is my location

</div>

<span id="location"></span>

`location`

[actor.t](../file/actor.t.html)\[[6755](../source/actor.t.html#6755)\]

<div class="desc">

Set the location to the Actor I'm standing in for in a new file. This
can be done via the @ notation in the template.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addTopic"></span>

`addTopic (obj)`

[actor.t](../file/actor.t.html)\[[6743](../source/actor.t.html#6743)\]

<div class="desc">

Pass a call to addTopic() up to my actor

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
