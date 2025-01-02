---
---
<span class="title">Footnote</span><span class="type">class</span>

[footnote.t](../file/footnote.t.html)\[[44](../source/footnote.t.html#44)\]

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

Footnote - this allows footnote references to be generated in displayed
text, and the user to retrieve the contents of the footnote on demand.

Create an instance of Footnote for each footnote. For each footnote
object, define the "desc" property as a double-quoted string (or method)
displaying the footnote's contents.

To display a footnote reference in a passage of text, call
\<\<x.noteRef\>\>, where x is the footnote object in question. That's
all you have to do - we'll automatically assign the footnote a
sequential number (so that footnote references are always seen by the
player in ascending order, regardless of the order in which the player
encounters the sources of the footnotes), and the NOTE command will
automatically figure out which footnote object is involved for a given
footnote number.

This class also serves as a daemon notification object to receive
per-command daemon calls. The first time we show a footnote reference,
we'll show an explanation of how footnotes work.

\[ONLY IN FOOTNOTE EXTENSION\]

`class `**`Footnote`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Footnote`**  
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

` `[`desc`](#desc)`  `[`everShownFootnote`](#everShownFootnote)`  `[`footnoteNum`](#footnoteNum)`  `[`footnoteRead`](#footnoteRead)`  `[`footnoteSettings`](#footnoteSettings)`  `[`lastFootnote`](#lastFootnote)`  `[`numberedFootnotes`](#numberedFootnotes)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`checkNotification`](#checkNotification)`  `[`footnoteRef`](#footnoteRef)`  `[`showFootnote`](#showFootnote)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="desc"></span>

`desc`

[footnote.t](../file/footnote.t.html)\[[50](../source/footnote.t.html#50)\]

<div class="desc">

Display the contents of the footnote - this will be called when the user
asks to show the footnote with the "NOTE n" command. Each instance must
provide suitable text here.

</div>

<span id="everShownFootnote"></span>

`everShownFootnote`

[footnote.t](../file/footnote.t.html)\[[193](../source/footnote.t.html#193)\]

<div class="desc">

static property: we've never shown a footnote reference before

</div>

<span id="footnoteNum"></span>

`footnoteNum`

[footnote.t](../file/footnote.t.html)\[[168](../source/footnote.t.html#168)\]

<div class="desc">

my footnote number - this is assigned the first time I'm referenced;
initially we have no number, since we don't want to assign a number
until the note is first referenced

</div>

<span id="footnoteRead"></span>

`footnoteRead`

[footnote.t](../file/footnote.t.html)\[[176](../source/footnote.t.html#176)\]

<div class="desc">

Flag: this footnote's full text has been displayed. This refers to the
text of the footnote itself, not the reference, so this is only set when
the "FOOTNOTE n" command is used to read this footnote.

</div>

<span id="footnoteSettings"></span>

`footnoteSettings`

[footnote.t](../file/footnote.t.html)\[[161](../source/footnote.t.html#161)\]

<div class="desc">

SettingsItem tracking our current status

</div>

<span id="lastFootnote"></span>

`lastFootnote`

[footnote.t](../file/footnote.t.html)\[[183](../source/footnote.t.html#183)\]

<div class="desc">

Static property: the highest footnote number currently in use. We start
this at zero, because zero is never a valid footnote number.

</div>

<span id="numberedFootnotes"></span>

`numberedFootnotes`

[footnote.t](../file/footnote.t.html)\[[190](../source/footnote.t.html#190)\]

<div class="desc">

Static property: a vector of all footnotes which have had numbers
assigned. We use this to find a footnote object given its note number.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkNotification"></span>

`checkNotification ( )`

[footnote.t](../file/footnote.t.html)\[[196](../source/footnote.t.html#196)\]

<div class="desc">

static property: per-command-prompt daemon entrypoint

</div>

<span id="footnoteRef"></span>

`footnoteRef (num)`

[footnote.t](../file/footnote.t.html)\[[114](../source/footnote.t.html#114)\]

<div class="desc">

get the string to display for a footnote reference

</div>

<span id="showFootnote"></span>

`showFootnote (num)`

[footnote.t](../file/footnote.t.html)\[[128](../source/footnote.t.html#128)\]

<div class="desc">

Display a footnote given its number. If there is no such footnote, we'll
display an error message saying so. (This is a class method, so it
should be called directly on Footnote, not on instances of Footnote.)

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
