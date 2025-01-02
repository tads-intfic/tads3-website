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

<div class="fdesc">

Stream state object for String.specialsToHtml().

`class `**`SpecialsToHtmlState`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SpecialsToHtmlState`**  
`         object`  
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

` `[`flags_`](#flags_)`  `[`tag_`](#tag_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`resetLine`](#resetLine)`  `[`resetState`](#resetState)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="flags_"></span>

`flags_`

[\_main.t](../file/_main.t.html)\[[1170](../source/_main.t.html#1170)\]

<div class="desc">

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

</div>

<span id="tag_"></span>

`tag_`

[\_main.t](../file/_main.t.html)\[[1173](../source/_main.t.html#1173)\]

<div class="desc">

tag in progress at end of last string parsed

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="resetLine"></span>

`resetLine ( )`

[\_main.t](../file/_main.t.html)\[[1149](../source/_main.t.html#1149)\]

<div class="desc">

Explicitly reset to the start of a line. This can be called after a
non-output operation that resets the line position, such as reading an
input line.

</div>

<span id="resetState"></span>

`resetState ( )`

[\_main.t](../file/_main.t.html)\[[1138](../source/_main.t.html#1138)\]

<div class="desc">

Reset the state. This should be used when the output stream context is
reset, such as when clearing the window.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
