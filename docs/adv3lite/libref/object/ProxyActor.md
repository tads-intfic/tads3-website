---
layout: docs
---
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



The ProxyActor class can be used to continue the definition of a complex
actor over more than one file. Simply place a ProxyActor object at the
head of a second or subsequent file for the same actor and then set its
location to the Actor object its standing in for. You can then locate
TopicGroups, TopicEntries, ActorStates, AgendaItems, ConvNodes etc.,
within the ProxyActor just as if it were the Actor.

`class `**`ProxyActor`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ProxyActor`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`active`](#active)  [`getActor`](#getActor)  [`location`](#location)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`addTopic`](#addTopic)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="active"></span>

`active`

[actor.t](../file/actor.t.html)\[[6749](../source/actor.t.html#6749)\]



I am active if my location (i.e. my actor) is active).



<span id="getActor"></span>

`getActor`

[actor.t](../file/actor.t.html)\[[6740](../source/actor.t.html#6740)\]



My Actor is my location



<span id="location"></span>

`location`

[actor.t](../file/actor.t.html)\[[6755](../source/actor.t.html#6755)\]



Set the location to the Actor I'm standing in for in a new file. This
can be done via the @ notation in the template.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addTopic"></span>

`addTopic (obj)`

[actor.t](../file/actor.t.html)\[[6743](../source/actor.t.html#6743)\]



Pass a call to addTopic() up to my actor





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


