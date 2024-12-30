[StringComparator]{.title}[class]{.type}

[strcomp.h](../file/strcomp.h.html)\[[29](../source/strcomp.h.html#29)\]

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
StringComparator intrinsic class. This class provides support for
dictionaries based on complex string matches, including truncation
(matching an input word to a dictionary word when the input word is at
least some minimum length, and matches the dictionary word up to the
full length of the input word, but the input word is shorter than the
dictionary word); case folding (matching upper-case letters to
lower-case letters and vice versa); and character equivalences (for
matching accented characters to non-accented equivalents, or matching
special characters to multi-character equivalents, such as matching a
German \"ess-zet\" (\"sharp-s\") ligature to a pair of lower-case \"s\"
characters in input).

`intrinsic class `**`StringComparator`**` :   `[`Object`](../object/Object.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`StringComparator`**\
`         `[`Object`](../object/Object.html)\
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

` `

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`calcHash`](#calcHash)`  `[`matchValues`](#matchValues)`  `

Inherited from `Object` :\
` `[`callInherited`](../object/Object.html#callInherited)`  `[`createIterator`](../object/Object.html#createIterator)`  `[`createLiveIterator`](../object/Object.html#createLiveIterator)`  `[`forEach`](../object/Object.html#forEach)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`mapAll`](../object/Object.html#mapAll)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#calcHash}

`calcHash (str)`

[strcomp.h](../file/strcomp.h.html)\[[82](../source/strcomp.h.html#82)\]

::: desc
Calculate a hash value. This returns an integer giving the hash value
for the given string.
:::

[]{#matchValues}

`matchValues (inputStr, dictStr)`

[strcomp.h](../file/strcomp.h.html)\[[100](../source/strcomp.h.html#100)\]

::: desc
Match two values. The first value is the input string, and the second is
the dictionary string. Each character in the dictionary string can match
the corresponding input string character exactly (with or without case
sensitivity, as specified in our constructor), or can match the
equivalence mapping sequence for the dictionary character.

The return value is zero if the values do not match. If the values do
match, the return value is a non-zero integer, which will be a bitwise
OR combination of all of the flag values applicable to the match. This
is a combination of pre-defined flag values (see below) and any flag
values from equivalence mappings. The flag values from ALL equivalence
mappings that were actually used to make the match are included.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
