---
---
<span class="title">HintMenuObject</span><span class="type">class</span>

[hintsys.t](../file/hintsys.t.html)\[[181](../source/hintsys.t.html#181)\]

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

A basic hint menu object. This is an abstract base class that
encapsulates some behavior common to different hint menu classes.

`class `**`HintMenuObject`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`HintMenuObject`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`HintMenuObject`**  
`         `[`Goal`](../object/Goal.html)  
`         `[`HintLongTopicItem`](../object/HintLongTopicItem.html)  
`         `[`HintMenu`](../object/HintMenu.html)  
`                 `[`TopHintMenu`](../object/TopHintMenu.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`topicOrder`](#topicOrder)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`compareForTopicSort`](#compareForTopicSort)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="topicOrder"></span>

`topicOrder`

[hintsys.t](../file/hintsys.t.html)\[[191](../source/hintsys.t.html#191)\]

<div class="desc">

The topic order. When we're about to show a list of open topics, we'll
sort the list in ascending order of this property, then in ascending
order of title. By default, we set this order value to 1000; if
individual goals don't override this, then they'll simply be sorted
lexically by topic name. This can be used if there's some basis other
than alphabetical order for sorting the list.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="compareForTopicSort"></span>

`compareForTopicSort (other)`

[hintsys.t](../file/hintsys.t.html)\[[202](../source/hintsys.t.html#202)\]

<div class="desc">

Compare this goal to another, for the purposes of sorting a list of
topics. Returns a positive number if this goal sorts after the other
one, a negative number if this goal sorts before the other one, 0 if the
relative order is arbitrary.

By default, we'll sort by topicOrder if the topicOrder values are
different, otherwise alphabetically by title.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
