[Hint]{.title}[class]{.type}

[hintsys.t](../file/hintsys.t.html)\[[394](../source/hintsys.t.html#394)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A Hint encapsulates one hint from a topic. In many cases, hints can be
listed in a topic simply as strings, rather than using Hint objects.
Hint objects provide a little more control, though; in particular, a
Hint object can specify some additional code to run when the hint is
shown, so that it can apply any side effects of showing the hint (for
example, when a hint is shown, it could mark another Goal object as
Open, which might be desirable if the hint refers to another topic that
the player might not yet have encountered).

`class `**`Hint`**` :   `[`MenuTopicSubItem`](../object/MenuTopicSubItem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Hint`**\
`         `[`MenuTopicSubItem`](../object/MenuTopicSubItem.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`hintText`](#hintText)`  `[`referencedGoals`](#referencedGoals)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`getItemText`](#getItemText)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#hintText}

`hintText`

[hintsys.t](../file/hintsys.t.html)\[[396](../source/hintsys.t.html#396)\]

::: desc
the hint text
:::

[]{#referencedGoals}

`referencedGoals`

[hintsys.t](../file/hintsys.t.html)\[[413](../source/hintsys.t.html#413)\]

::: desc
A list of other Goal objects that this hint references. By default, when
we show this hint for the first time, we\'ll promote each goal in this
list from Undiscovered to Open.

Sometimes, it\'s necessary to solve one puzzle before another can be
solved. In these cases, some hints for the first puzzle (which depends
on the second), especially the later, more specific hints, might need to
refer to the other puzzle. This would make the player aware of the other
puzzle even if they weren\'t already. In such cases, it\'s a good idea
to make sure that we make hints for the other puzzle available
immediately, since otherwise the player might be confused by the absence
of hints about it.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#getItemText}

`getItemText ( )`[OVERRIDDEN]{.rem}

[hintsys.t](../file/hintsys.t.html)\[[421](../source/hintsys.t.html#421)\]

::: desc
Get my hint text. By default, we mark as Open any goals listed in our
referencedGoals list, then return our hintText string. Individual Hint
objects can override this as desired to apply any additional side
effects.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
