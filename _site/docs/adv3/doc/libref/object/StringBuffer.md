<span class="title">StringBuffer</span><span class="type">class</span>

[strbuf.h](../file/strbuf.h.html)\[[44](../source/strbuf.h.html#44)\]

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

A StringBuffer is a mutable character string object. You can insert,
append, delete, and replace characters in the buffer in place. These
operations don't create new objects as they do with ordinary strings,
but simply modify the existing StringBuffer object's contents.

The object manages memory automatically. When you first create the
object, it allocates an initial buffer to hold its character contents.
You can specify the initial buffer size with a constructor argument, or
simply let the object pick a default. As you add text to the buffer, the
object automatically allocates more memory as needed to accommodate the
added text. The maximum size for the string contained in the buffer is
about 32000 characters.

Construction: new StringBuffer() creates a buffer with default initial
size values. new StringBuffer(length, increment) specifies the initial
buffer size in characters ('length'), and the minimum number of
characters to add to the buffer each time it's automatically expanded
('increment').

Passing a StringBuffer to an internal function or method that takes a
String argument, such as tadsSay(), will automatically convert the
object to a string. To explicitly convert a StringBuffer to an ordinary
String, use the toString() function. You can also create an ordinary
string from a section of the buffer using the substr() method.

`intrinsic class `**`StringBuffer`**` : `

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`StringBuffer`**  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`append`](#append)`  `[`charAt`](#charAt)`  `[`copyChars`](#copyChars)`  `[`deleteChars`](#deleteChars)`  `[`insert`](#insert)`  `[`length`](#length)`  `[`splice`](#splice)`  `[`substr`](#substr)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="append"></span>

`append (str)`

[strbuf.h](../file/strbuf.h.html)\[[65](../source/strbuf.h.html#65)\]

<div class="desc">

Append text to the current contents of the buffer. This adds the new
text at the end of the current text. The value is automatically
converted to a string if possible; this includes numbers and true and
nil values.

</div>

<span id="charAt"></span>

`charAt (idx)`

[strbuf.h](../file/strbuf.h.html)\[[57](../source/strbuf.h.html#57)\]

<div class="desc">

Retrieve the Unicode character value of the character at the given
index. Returns an integer with the Unicode value. If idx is negative,
it's an index from the end of the string: -1 is the last character, -2
is the second to last, etc.

</div>

<span id="copyChars"></span>

`copyChars (txt, idx)`

[strbuf.h](../file/strbuf.h.html)\[[82](../source/strbuf.h.html#82)\]

<div class="desc">

Copy text into the buffer, starting at the given index (the first
character in the buffer is at index 1). Overwrites any text currently in
the buffer at this point.

</div>

<span id="deleteChars"></span>

`deleteChars (idx, len?)`

[strbuf.h](../file/strbuf.h.html)\[[90](../source/strbuf.h.html#90)\]

<div class="desc">

Delete the given text. This deletes 'len' characters starting at the
given index (the first character is at index 1). If the length is
omitted, the portion from idx to the end of the string is deleted. A
negative idx value indexes from the end of the string.

</div>

<span id="insert"></span>

`insert (txt, idx)`

[strbuf.h](../file/strbuf.h.html)\[[75](../source/strbuf.h.html#75)\]

<div class="desc">

Insert text into the buffer just before the character at the given
index. The first character is at index 1, so to insert the new text
before the first current character, insert at index 1. If the index is
past the end of the current text, this has the same effect as append().
A negative value indexes from the end of the string. The text is
automatically converted to a string if possible.

</div>

<span id="length"></span>

`length ( )`

[strbuf.h](../file/strbuf.h.html)\[[49](../source/strbuf.h.html#49)\]

<div class="desc">

Get the length in characters of the current text in the buffer.

</div>

<span id="splice"></span>

`splice (idx, len, str)`

[strbuf.h](../file/strbuf.h.html)\[[101](../source/strbuf.h.html#101)\]

<div class="desc">

Splice text. This deletes 'len' characters starting at the given index
(the first character is at index 1), and replaces them with the given
new text. If the new text is nil, this simply deletes the old characters
without inserting anything new. If 'len' is zero, simply inserts the new
text without deleting any old text. A negative idx value indexes from
the end of the string. The 'str' value is automatically converted to a
string if possible.

</div>

<span id="substr"></span>

`substr (idx, len?)`

[strbuf.h](../file/strbuf.h.html)\[[110](../source/strbuf.h.html#110)\]

<div class="desc">

Retrieve the substring of the buffer starting at the given index and
running for the given character length. If the length is omitted,
everything from the starting index to the end of the buffer is included
in the result string. A negative value for 'idx' indexes from the end of
the string.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
