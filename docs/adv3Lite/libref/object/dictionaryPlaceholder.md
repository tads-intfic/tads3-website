[dictionaryPlaceholder]{.title}[object]{.type}

[parser.t](../file/parser.t.html)\[[5742](../source/parser.t.html#5742)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A placeholder object for dictionary entries. The Dictionary class stores
a three-way association: word string, part-of-speech property, and
object. The object association is designed to allow the parser to come
up with a list of objects that could match a given word, but the adv3L
library doesn\'t use this feature. We instead figure out the
word-to-object association by directly asking the objects in scope if
they\'re associated with a word. We still need \*something\* to store as
the object association for each word entry in the dictionary, though.
That\'s where this object comes in: it\'s a dummy object that serves as
the required object to associate with each word.

A language module can ignore this and use the word-object-property
association feature of the dictionary, if desired.

**`dictionaryPlaceholder`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`dictionaryPlaceholder`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

*(none)* []{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
