[StringBuffer]{.title}[class]{.type}

[strbuf.h](../file/strbuf.h.html)\[[44](../source/strbuf.h.html#44)\]

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
A StringBuffer is a mutable character string object. You can insert,
append, delete, and replace characters in the buffer in place. These
operations don\'t create new objects as they do with ordinary strings,
but simply modify the existing StringBuffer object\'s contents.

The object manages memory automatically. When you first create the
object, it allocates an initial buffer to hold its character contents.
You can specify the initial buffer size with a constructor argument, or
simply let the object pick a default. As you add text to the buffer, the
object automatically allocates more memory as needed to accommodate the
added text. The maximum size for the string contained in the buffer is
about 32000 characters.

Construction: new StringBuffer() creates a buffer with default initial
size values. new StringBuffer(length, increment) specifies the initial
buffer size in characters (\'length\'), and the minimum number of
characters to add to the buffer each time it\'s automatically expanded
(\'increment\').

Passing a StringBuffer to an internal function or method that takes a
String argument, such as tadsSay(), will automatically convert the
object to a string. To explicitly convert a StringBuffer to an ordinary
String, use the toString() function. You can also create an ordinary
string from a section of the buffer using the substr() method.

`intrinsic class `**`StringBuffer`**` : `
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`StringBuffer`**\
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

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`append`](#append)`  `[`charAt`](#charAt)`  `[`copyChars`](#copyChars)`  `[`deleteChars`](#deleteChars)`  `[`insert`](#insert)`  `[`length`](#length)`  `[`splice`](#splice)`  `[`substr`](#substr)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#append}

`append (str)`

[strbuf.h](../file/strbuf.h.html)\[[65](../source/strbuf.h.html#65)\]

::: desc
Append text to the current contents of the buffer. This adds the new
text at the end of the current text. The value is automatically
converted to a string if possible; this includes numbers and true and
nil values.
:::

[]{#charAt}

`charAt (idx)`

[strbuf.h](../file/strbuf.h.html)\[[57](../source/strbuf.h.html#57)\]

::: desc
Retrieve the Unicode character value of the character at the given
index. Returns an integer with the Unicode value. If idx is negative,
it\'s an index from the end of the string: -1 is the last character, -2
is the second to last, etc.
:::

[]{#copyChars}

`copyChars (txt, idx)`

[strbuf.h](../file/strbuf.h.html)\[[82](../source/strbuf.h.html#82)\]

::: desc
Copy text into the buffer, starting at the given index (the first
character in the buffer is at index 1). Overwrites any text currently in
the buffer at this point.
:::

[]{#deleteChars}

`deleteChars (idx, len?)`

[strbuf.h](../file/strbuf.h.html)\[[90](../source/strbuf.h.html#90)\]

::: desc
Delete the given text. This deletes \'len\' characters starting at the
given index (the first character is at index 1). If the length is
omitted, the portion from idx to the end of the string is deleted. A
negative idx value indexes from the end of the string.
:::

[]{#insert}

`insert (txt, idx)`

[strbuf.h](../file/strbuf.h.html)\[[75](../source/strbuf.h.html#75)\]

::: desc
Insert text into the buffer just before the character at the given
index. The first character is at index 1, so to insert the new text
before the first current character, insert at index 1. If the index is
past the end of the current text, this has the same effect as append().
A negative value indexes from the end of the string. The text is
automatically converted to a string if possible.
:::

[]{#length}

`length ( )`

[strbuf.h](../file/strbuf.h.html)\[[49](../source/strbuf.h.html#49)\]

::: desc
Get the length in characters of the current text in the buffer.
:::

[]{#splice}

`splice (idx, len, str)`

[strbuf.h](../file/strbuf.h.html)\[[101](../source/strbuf.h.html#101)\]

::: desc
Splice text. This deletes \'len\' characters starting at the given index
(the first character is at index 1), and replaces them with the given
new text. If the new text is nil, this simply deletes the old characters
without inserting anything new. If \'len\' is zero, simply inserts the
new text without deleting any old text. A negative idx value indexes
from the end of the string. The \'str\' value is automatically converted
to a string if possible.
:::

[]{#substr}

`substr (idx, len?)`

[strbuf.h](../file/strbuf.h.html)\[[110](../source/strbuf.h.html#110)\]

::: desc
Retrieve the substring of the buffer starting at the given index and
running for the given character length. If the length is omitted,
everything from the starting index to the end of the buffer is included
in the result string. A negative value for \'idx\' indexes from the end
of the string.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
