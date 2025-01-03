---
layout: docs
---
<span class="title">LCS</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[2118](../source/misc.t.html#2118)\]

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



LCS - class that computes the Longest Common Subsequence for two lists
or vectors.

The LCS is most frequently used as a differencing tool, to compute a
description of how two data sets differ. This is at the core of tools
like "diff", which shows the differences between two versions of a file.
The LCS is the part of the two sets that's the same, so everything in
one of the sets that's not in the LCS is unique to that set. The
standard diff algorithm computes the LCS, then generates a list of edits
by specifying a "delete" operation on each item in the "new" set that's
not in the LCS, and an "insert" operation on each item in the "old" set
that's not in the LCS. Merge and sort the two edit lists and you have
basically the standard Unix "diff" output. (Some diff utilities make the
report more readable by combining overlapping edit and insert operations
into "update" operations. But it's really the same thing, of course.)

The constructor does all the work: use 'new' to create an instance of
this class, providing the two lists to be compared as arguments. The
resulting object contains the LCS information.

Note that you can use this class to generate a character-by-character
LCS for two strings, simply by using toUnicode() to convert each string
to a list of character values.

`class `**`LCS`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`LCS`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`lcsA`](#lcsA) [`lcsB`](#lcsB)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="lcsA"></span>

`lcsA`

[misc.t](../file/misc.t.html)\[[2183](../source/misc.t.html#2183)\]



the LCS, as lists of character indices into the respective strings



<span id="lcsB"></span>

`lcsB`

[misc.t](../file/misc.t.html)\[[2184](../source/misc.t.html#2184)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (a, b)`

[misc.t](../file/misc.t.html)\[[2119](../source/misc.t.html#2119)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


