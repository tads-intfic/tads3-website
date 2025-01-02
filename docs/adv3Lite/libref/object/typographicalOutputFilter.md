---
layout: docs
---
<span class="title">typographicalOutputFilter</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[1866](../source/output.t.html#1866)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Typographical effects output filter. This filter looks for certain
sequences in the text and converts them to typographical equivalents.
Authors could simply write the HTML for the typographical markups in the
first place, but it's easier to write the typewriter-like sequences and
let this filter convert to HTML.

We perform the following conversions:

'---' -\> &zwnbsp;&mdash;  
'--' -\> &zwnbsp;&ndash;  
sentence-ending punctuation -\> same + &ensp;

Since this routine is called so frequently, we hard-code the replacement
strings, rather than using properties, for slightly faster performance.
Since this routine is so simple, games that want to customize the
replacement style should simply replace this entire routine with a new
routine that applies the customizations.

Note that we define this filter in the English-specific part of the
library, because it seems almost certain that each language will want to
customize it for local conventions.

**`typographicalOutputFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`typographicalOutputFilter`**  
[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`abbreviations`](#abbreviations)[`abbrevPat`](#abbrevPat)[`eosPattern`](#eosPattern)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterText`](#filterText)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="abbreviations"></span>

`abbreviations`

[output.t](../file/output.t.html)\[[1948](../source/output.t.html#1948)\]



Common abbreviations. These are excluded from being treated as sentence
endings when they appear with a trailing period.

Note that abbrevPat must be rebuilt manually if you change this on the
fly - abbrevPat is static, so it picks up the initial value of this
property at start-up, and doesn't re-evaluate it while the game is
running.



<span id="abbrevPat"></span>

`abbrevPat`

[output.t](../file/output.t.html)\[[1936](../source/output.t.html#1936)\]



pattern for abbreviations that were mistaken for sentence endings



<span id="eosPattern"></span>

`eosPattern`

[output.t](../file/output.t.html)\[[1923](../source/output.t.html#1923)\]



The end-of-sentence pattern. This looks a bit complicated, but all we're
looking for is a period, exclamation point, or question mark, optionally
followed by any number of closing group marks (right parentheses or
square brackets, closing HTML tags, or double or single quotes in either
straight or curly styles), all followed by an ordinary space.

If a lower-case letter follows the space, though, we won't consider it a
sentence ending. This applies most commonly after quoted passages ending
with what would normally be sentence-ending punctuation: "'Who are you?'
he asked." In these cases, the enclosing sentence isn't ending, so we
don't want the extra space. We can tell the enclosing sentence isn't
ending because a non-capital letter follows.

Note that we specifically look only for ordinary spaces. Any
sentence-ending punctuation that's followed by a quoted space or any
typographical space overrides this substitution.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterText"></span>

`filterText (ostr, val)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1867](../source/output.t.html#1867)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


