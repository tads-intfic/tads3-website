---
layout: docs
---
<span class="title">SpecialsToHtmlState</span><span class="type">class</span>

[\_main.t](../file/_main.t.html)\[[1133](../source/_main.t.html#1133)\]

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



Stream state object for String.specialsToHtml().

`class `**`SpecialsToHtmlState`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SpecialsToHtmlState`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`flags_`](#flags_) [`tag_`](#tag_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`resetLine`](#resetLine) [`resetState`](#resetState)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="flags_"></span>

`flags_`

[\_main.t](../file/_main.t.html)\[[1170](../source/_main.t.html#1170)\]



Internal output state flags at end of last string parsed. This is a
combination of bit flags:

0x0001 - last string ended within a line of text  
0x0002 - caps flag '\\' pending  
0x0004 - lowercase flag '\v' pending  
0x0008 - last string ended within an HTML tag  
0x0010 - last string ended in double-quoted HTML tag attribute text  
0x0020 - last string ended in single-quoted HTML tag attribute text  
0x0040 - last string ended with an ordinary space  
0x0080 - last string ended with a quoted space '\\ '  
0x0100 - \<Q\> parity level: 0=double quotes, 1=single quotes  
0x0300 - distance from last '\t' tab column (0..3)



<span id="tag_"></span>

`tag_`

[\_main.t](../file/_main.t.html)\[[1173](../source/_main.t.html#1173)\]



tag in progress at end of last string parsed



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="resetLine"></span>

`resetLine ( )`

[\_main.t](../file/_main.t.html)\[[1149](../source/_main.t.html#1149)\]



Explicitly reset to the start of a line. This can be called after a
non-output operation that resets the line position, such as reading an
input line.



<span id="resetState"></span>

`resetState ( )`

[\_main.t](../file/_main.t.html)\[[1138](../source/_main.t.html#1138)\]



Reset the state. This should be used when the output stream context is
reset, such as when clearing the window.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


