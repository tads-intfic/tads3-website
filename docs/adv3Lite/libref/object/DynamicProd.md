[DynamicProd]{.title}[class]{.type}

[gramprod.t](../file/gramprod.t.html)\[[156](../source/gramprod.t.html#156)\]

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
Dynamic match object interface. This is a mix-in class that should be
used as a superclass for any class used as the match object when
creating new alternatives dynamically with GrammarProd.addAlt().

This class provides an implementation of grammarInfo() that works like
the version the compiler generates for static match objects. In this
case, we use the grammarAltProps information that addAlt() stores in the
match object.

`class `**`DynamicProd`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DynamicProd`**\
`         object`\
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

` `[`grammarAltProps`](#grammarAltProps)`  `[`grammarTag`](#grammarTag)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`grammarInfo`](#grammarInfo)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#grammarAltProps}

`grammarAltProps`

[gramprod.t](../file/gramprod.t.html)\[[180](../source/gramprod.t.html#180)\]

::: desc
grammarAltProps - the list of \"-\>\" properties used in all of the
alternatives associated with this match object. addAlts() stores this
list automatically - there\'s no need to create it manually.
:::

[]{#grammarTag}

`grammarTag`

[gramprod.t](../file/gramprod.t.html)\[[173](../source/gramprod.t.html#173)\]

::: desc
grammarTag - the name for the collection of alternatives associated with
the match object. This name is primarily for debugging purposes; it
appears as the first element of the grammarInfo() result list.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#grammarInfo}

`grammarInfo ( )`

[gramprod.t](../file/gramprod.t.html)\[[162](../source/gramprod.t.html#162)\]

::: desc
Generate match information. This returns the same information that
grammarInfo() returns for match objects that the compiler generates for
static \'grammar\' statements.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
