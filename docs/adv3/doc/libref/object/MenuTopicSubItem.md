---
layout: docs
---
<span class="title">MenuTopicSubItem</span><span class="type">class</span>

[menusys.t](../file/menusys.t.html)\[[459](../source/menusys.t.html#459)\]

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



A menu topic sub-item can be used to represent an item in a
MenuTopicItem's list of display items. This can be useful when
displaying a topic must trigger a side-effect.

`class `**`MenuTopicSubItem`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MenuTopicSubItem`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`MenuTopicSubItem`**  
[`Hint`](../object/Hint.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getItemText`](#getItemText)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getItemText"></span>

`getItemText ( )`

[menusys.t](../file/menusys.t.html)\[[465](../source/menusys.t.html#465)\]



Get the item's text. By default, we just return an empty string. This
should be overridden to return the appropriate text, and can also
trigger any desired side-effects.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


