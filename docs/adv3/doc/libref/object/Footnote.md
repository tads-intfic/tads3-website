---
layout: docs
---
<span class="title">Footnote</span><span class="type">class</span>

[footnote.t](../file/footnote.t.html)\[[38](../source/footnote.t.html#38)\]

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

`class `**`Footnote`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Footnote`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`desc`](#desc) [`everShownFootnote`](#everShownFootnote) [`footnoteNum`](#footnoteNum) [`footnoteRead`](#footnoteRead) [`footnoteSettings`](#footnoteSettings) [`lastFootnote`](#lastFootnote) [`numberedFootnotes`](#numberedFootnotes)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkNotification`](#checkNotification) [`showFootnote`](#showFootnote)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="desc"></span>

`desc`

[footnote.t](../file/footnote.t.html)\[[44](../source/footnote.t.html#44)\]



Display the contents of the footnote - this will be called when the user
asks to show the footnote with the "NOTE n" command. Each instance must
provide suitable text here.



<span id="everShownFootnote"></span>

`everShownFootnote`

[footnote.t](../file/footnote.t.html)\[[184](../source/footnote.t.html#184)\]



static property: we've never shown a footnote reference before



<span id="footnoteNum"></span>

`footnoteNum`

[footnote.t](../file/footnote.t.html)\[[159](../source/footnote.t.html#159)\]



my footnote number - this is assigned the first time I'm referenced;
initially we have no number, since we don't want to assign a number
until the note is first referenced



<span id="footnoteRead"></span>

`footnoteRead`

[footnote.t](../file/footnote.t.html)\[[167](../source/footnote.t.html#167)\]



Flag: this footnote's full text has been displayed. This refers to the
text of the footnote itself, not the reference, so this is only set when
the "FOOTNOTE n" command is used to read this footnote.



<span id="footnoteSettings"></span>

`footnoteSettings`

[footnote.t](../file/footnote.t.html)\[[152](../source/footnote.t.html#152)\]



SettingsItem tracking our current status



<span id="lastFootnote"></span>

`lastFootnote`

[footnote.t](../file/footnote.t.html)\[[174](../source/footnote.t.html#174)\]



Static property: the highest footnote number currently in use. We start
this at zero, because zero is never a valid footnote number.



<span id="numberedFootnotes"></span>

`numberedFootnotes`

[footnote.t](../file/footnote.t.html)\[[181](../source/footnote.t.html#181)\]



Static property: a vector of all footnotes which have had numbers
assigned. We use this to find a footnote object given its note number.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkNotification"></span>

`checkNotification ( )`

[footnote.t](../file/footnote.t.html)\[[187](../source/footnote.t.html#187)\]



static property: per-command-prompt daemon entrypoint



<span id="showFootnote"></span>

`showFootnote (num)`

[footnote.t](../file/footnote.t.html)\[[120](../source/footnote.t.html#120)\]



Display a footnote given its number. If there is no such footnote, we'll
display an error message saying so. (This is a class method, so it
should be called directly on Footnote, not on instances of Footnote.)





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


