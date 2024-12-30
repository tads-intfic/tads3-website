[LState]{.title}[class]{.type}

[english.t](../file/english.t.html)\[[1919](../source/english.t.html#1919)\]

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
LState is the language-specific base class for State objects.

\[Required\]

`class `**`LState`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`LState`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`LState`**\
`         `[`State`](../object/State.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`additionalInfo`](#additionalInfo)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addToName`](#addToName)`  `[`getAdditionalInfo`](#getAdditionalInfo)`  `[`initWord`](#initWord)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#additionalInfo}

`additionalInfo`

[english.t](../file/english.t.html)\[[1956](../source/english.t.html#1956)\]

::: desc
Additional info to be added to the item name when it appears in a
listing and is in the corresponding state
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addToName}

`addToName (obj, str)`

[english.t](../file/english.t.html)\[[1927](../source/english.t.html#1927)\]

::: desc
Add the state name to an object name under construction. \'obj\' is the
object, and \'str\' the object name being built. This adds the
appropriate adjective for the state to the name.

\[Required\]
:::

[]{#getAdditionalInfo}

`getAdditionalInfo (obj)`

[english.t](../file/english.t.html)\[[1963](../source/english.t.html#1963)\]

::: desc
Get the string providing additional info about this object when it\'s in
a particular state (such as \'(providing light)\', the only additional
state info actually defined in the English library)
:::

[]{#initWord}

`initWord (w)`

[english.t](../file/english.t.html)\[[1946](../source/english.t.html#1946)\]

::: desc
Initialize a state adjective. The base library calls this during preinit
for each word, given as a string. The language module must define this
routine, but it doesn\'t have to do anything. The English version adds
the word to the dictionary, so that the spelling corrector can recognize
it.

\[Required\]
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
