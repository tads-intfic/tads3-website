---
layout: docs
---
<span class="title">Hint</span><span class="type">class</span>

[hintsys.t](../file/hintsys.t.html)\[[394](../source/hintsys.t.html#394)\]

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



A Hint encapsulates one hint from a topic. In many cases, hints can be
listed in a topic simply as strings, rather than using Hint objects.
Hint objects provide a little more control, though; in particular, a
Hint object can specify some additional code to run when the hint is
shown, so that it can apply any side effects of showing the hint (for
example, when a hint is shown, it could mark another Goal object as
Open, which might be desirable if the hint refers to another topic that
the player might not yet have encountered).

`class `**`Hint`**` :   `[`MenuTopicSubItem`](../object/MenuTopicSubItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Hint`**  
[`MenuTopicSubItem`](../object/MenuTopicSubItem.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`hintText`](#hintText) [`referencedGoals`](#referencedGoals)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getItemText`](#getItemText)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="hintText"></span>

`hintText`

[hintsys.t](../file/hintsys.t.html)\[[396](../source/hintsys.t.html#396)\]



the hint text



<span id="referencedGoals"></span>

`referencedGoals`

[hintsys.t](../file/hintsys.t.html)\[[413](../source/hintsys.t.html#413)\]



A list of other Goal objects that this hint references. By default, when
we show this hint for the first time, we'll promote each goal in this
list from Undiscovered to Open.

Sometimes, it's necessary to solve one puzzle before another can be
solved. In these cases, some hints for the first puzzle (which depends
on the second), especially the later, more specific hints, might need to
refer to the other puzzle. This would make the player aware of the other
puzzle even if they weren't already. In such cases, it's a good idea to
make sure that we make hints for the other puzzle available immediately,
since otherwise the player might be confused by the absence of hints
about it.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getItemText"></span>

`getItemText ( )`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[421](../source/hintsys.t.html#421)\]



Get my hint text. By default, we mark as Open any goals listed in our
referencedGoals list, then return our hintText string. Individual Hint
objects can override this as desired to apply any additional side
effects.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


