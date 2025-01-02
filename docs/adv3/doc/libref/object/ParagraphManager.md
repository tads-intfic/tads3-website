---
layout: docs
---
<span class="title">ParagraphManager</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[471](../source/output.t.html#471)\]

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



Paragraph manager. We filter strings as they're about to be sent to the
console to convert paragraph markers (represented in the source text
using the "style tag" format, \<.P\>) into a configurable display
rendering.

We also process the zero-spacing paragraph, \<.P0\>. This doesn't
generate any output, but otherwise acts like a paragraph break in that
it suppresses any paragraph breaks that immediately follow.

The special marker \<./P0\> cancels the effect of a \<.P0\>. This can be
used if you want to ensure that a newline or paragraph break is
displayed, even if a \<.P0\> was just displayed.

Our special processing ensures that paragraph tags interact with one
another and with other display elements specially:

\- A run of multiple consecutive paragraph tags is treated as a single
paragraph tag. This property is particularly important because it allows
code to write out a paragraph marker without having to worry about
whether preceding code or following code add paragraph markers of their
own; if redundant markers are found, we'll filter them out
automatically.

\- We can suppress paragraph markers following other specific sequences.
For example, if the paragraph break is rendered as a blank line, we
might want to suppress an extra blank line for a paragraph break after
an explicit blank line.

\- We can suppress other specific sequences following a paragraph
marker. For example, if the paragraph break is rendered as a newline
plus a tab, we could suppress whitespace following the paragraph break.

The paragraph manager should always be instantiated with transient
instances, because this object's state is effectively part of the
interpreter user interface, which doesn't participate in save and
restore.

`class `**`ParagraphManager`**` :   `[`OutputFilter`](../object/OutputFilter.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ParagraphManager`**  
[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`mainParagraphManager`](../object/mainParagraphManager.html)[`menuParagraphManager`](../object/menuParagraphManager.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`leadingMultiPat`](#leadingMultiPat)[`leadingSinglePat`](#leadingSinglePat)[`renderAfterInput`](#renderAfterInput)[`renderText`](#renderText)[`suppressAfter`](#suppressAfter)[`suppressBefore`](#suppressBefore)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterText`](#filterText)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="leadingMultiPat"></span>

`leadingMultiPat`

[output.t](../file/output.t.html)\[[507](../source/output.t.html#507)\]



pre-compile some regular expression patterns we use a lot



<span id="leadingSinglePat"></span>

`leadingSinglePat`

[output.t](../file/output.t.html)\[[508](../source/output.t.html#508)\]



*no description available*



<span id="renderAfterInput"></span>

`renderAfterInput`

[output.t](../file/output.t.html)\[[482](../source/output.t.html#482)\]



Flag: show or hide paragraph breaks immediately after input. By default,
we do not show paragraph breaks after an input line.



<span id="renderText"></span>

`renderText`

[output.t](../file/output.t.html)\[[476](../source/output.t.html#476)\]



Rendering - this is what we display on the console to represent a
paragraph break. By default, we'll display a blank line.



<span id="suppressAfter"></span>

`suppressAfter`

[output.t](../file/output.t.html)\[[504](../source/output.t.html#504)\]



Following suppression. This is a regular expression that we match to
individual characters. If the character immediately following a
paragraph marker matches this expression, we'll suppress the character.
We'll apply this to each character following a paragraph marker in turn
until we find one that does not match; we'll suppress all of the
characters that do match. By default, we suppress additional blank lines
after a paragraph break.



<span id="suppressBefore"></span>

`suppressBefore`

[output.t](../file/output.t.html)\[[492](../source/output.t.html#492)\]



Preceding suppression. This is a regular expression that we match to
individual characters. If the character immediately preceding a
paragraph marker matches this expression, we'll suppress the paragraph
marker in the output. By default, we'll suppress a paragraph break
following a blank line, because the default rendering would add a
redundant blank line.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[512](../source/output.t.html#512)\]



process a string that's about to be written to the console





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


