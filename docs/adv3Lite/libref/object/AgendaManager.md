---
---
<span class="title">AgendaManager</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5630](../source/actor.t.html#5630)\]

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

Base class for items (Actors and DefaultAgendaTopics) that can handle

`class `**`AgendaManager`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`AgendaManager`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`AgendaManager`**  
`         `[`Actor`](../object/Actor.html)  
`         `[`DefaultAgendaTopic`](../object/DefaultAgendaTopic.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`agendaList`](#agendaList)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addToAgenda`](#addToAgenda)`  `[`executeAgenda`](#executeAgenda)`  `[`removeFromAgenda`](#removeFromAgenda)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="agendaList"></span>

`agendaList`

[actor.t](../file/actor.t.html)\[[5636](../source/actor.t.html#5636)\]

<div class="desc">

Our agendaList is the list of AgendaItems we're ready to execute when
they're isReady property is true.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addToAgenda"></span>

`addToAgenda ([lst])`

[actor.t](../file/actor.t.html)\[[5643](../source/actor.t.html#5643)\]

<div class="desc">

add an agenda item. We try to make this as author-proof as possible so
that the method will accept addToAgenda(item), addToAgenda(item1, item2,
...) or addToAgenda(\[item1, item2,..\])

</div>

<span id="executeAgenda"></span>

`executeAgenda ( )`

[actor.t](../file/actor.t.html)\[[5696](../source/actor.t.html#5696)\]

<div class="desc">

Execute the next item in our agenda, if there are any items in the
agenda that are ready to execute. We'll return true if we found an item
to execute, nil if not.

</div>

<span id="removeFromAgenda"></span>

`removeFromAgenda ([lst])`

[actor.t](../file/actor.t.html)\[[5676](../source/actor.t.html#5676)\]

<div class="desc">

remove one or more agenda items

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
