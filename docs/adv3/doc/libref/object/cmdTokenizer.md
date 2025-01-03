---
layout: docs
---
<span class="title">cmdTokenizer</span><span class="type">object</span>

[en_us.t](../file/en_us.t.html)\[[4763](../source/en_us.t.html#4763)\]

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



Command tokenizer for US English. Other language modules should provide
their own tokenizers to allow for differences in punctuation and other
lexical elements.

**`cmdTokenizer`**` :   `[`Tokenizer`](../object/Tokenizer.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`cmdTokenizer`**  
[`Tokenizer`](../object/Tokenizer.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`patAlphaDashAlpha`](#patAlphaDashAlpha) [`patPunct`](#patPunct) [`patSpelledTens`](#patSpelledTens) [`patSpelledUnits`](#patSpelledUnits) [`rules_`](#rules_)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`acceptAbbrTok`](#acceptAbbrTok) [`buildOrigText`](#buildOrigText) [`tokCvtAbbr`](#tokCvtAbbr) [`tokCvtApostropheS`](#tokCvtApostropheS) [`tokCvtPluralApostrophe`](#tokCvtPluralApostrophe) [`tokCvtSpelledNumber`](#tokCvtSpelledNumber)

Inherited from `Tokenizer` :  
[`deleteRule`](../object/Tokenizer.html#deleteRule) [`deleteRuleAt`](../object/Tokenizer.html#deleteRuleAt) [`insertRule`](../object/Tokenizer.html#insertRule) [`insertRuleAt`](../object/Tokenizer.html#insertRuleAt) [`tokCvtLower`](../object/Tokenizer.html#tokCvtLower) [`tokCvtSkip`](../object/Tokenizer.html#tokCvtSkip) [`tokenize`](../object/Tokenizer.html#tokenize)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="patAlphaDashAlpha"></span>

`patAlphaDashAlpha`

[en_us.t](../file/en_us.t.html)\[[4962](../source/en_us.t.html#4962)\]



add the part after the hyphen



<span id="patPunct"></span>

`patPunct`

[en_us.t](../file/en_us.t.html)\[[5081](../source/en_us.t.html#5081)\]



*no description available*



<span id="patSpelledTens"></span>

`patSpelledTens`

[en_us.t](../file/en_us.t.html)\[[5077](../source/en_us.t.html#5077)\]



some pre-compiled regular expressions



<span id="patSpelledUnits"></span>

`patSpelledUnits`

[en_us.t](../file/en_us.t.html)\[[5079](../source/en_us.t.html#5079)\]



*no description available*



<span id="rules_"></span>

`rules_`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[4764](../source/en_us.t.html#4764)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="acceptAbbrTok"></span>

`acceptAbbrTok (txt)`

[en_us.t](../file/en_us.t.html)\[[4974](../source/en_us.t.html#4974)\]



Check to see if we want to accept an abbreviated token - this is a token
that ends in a period, which we use for abbreviated words like "Mr." or
"Ave." We'll accept the token only if it appears as given - including
the period - in the dictionary. Note that we ignore truncated matches,
since the only way we'll accept a period in a word token is as the last
character; there is thus no way that a token ending in a period could be
a truncation of any longer valid token.



<span id="buildOrigText"></span>

`buildOrigText (toks)`

[en_us.t](../file/en_us.t.html)\[[5013](../source/en_us.t.html#5013)\]



Given a list of token strings, rebuild the original input string. We
can't recover the exact input string, because the tokenization process
throws away whitespace information, but we can at least come up with
something that will display cleanly and produce the same results when
run through the tokenizer.



<span id="tokCvtAbbr"></span>

`tokCvtAbbr (txt, typ, toks)`

[en_us.t](../file/en_us.t.html)\[[4994](../source/en_us.t.html#4994)\]



Process an abbreviated token.

When we find an abbreviation, we'll enter it with the abbreviated word
minus the trailing period, plus the period as a separate token. We'll
mark the period as an "abbreviation period" so that grammar rules will
be able to consider treating it as an abbreviation -- but since it's
also a regular period, grammar rules that treat periods as regular
punctuation will also be able to try to match the result. This will
ensure that we try it both ways - as abbreviation and as a word with
punctuation - and pick the one that gives us the best result.



<span id="tokCvtApostropheS"></span>

`tokCvtApostropheS (txt, typ, toks)`

[en_us.t](../file/en_us.t.html)\[[4900](../source/en_us.t.html#4900)\]



Handle an apostrophe-s word. We'll return this as two separate tokens:
one for the word preceding the apostrophe-s, and one for the
apostrophe-s itself.



<span id="tokCvtPluralApostrophe"></span>

`tokCvtPluralApostrophe (txt, typ, toks)`

[en_us.t](../file/en_us.t.html)\[[4924](../source/en_us.t.html#4924)\]



Handle a plural apostrophe word ("the smiths' house"). We'll return this
as two tokens: one for the plural word, and one for the apostrophe.



<span id="tokCvtSpelledNumber"></span>

`tokCvtSpelledNumber (txt, typ, toks)`

[en_us.t](../file/en_us.t.html)\[[4948](../source/en_us.t.html#4948)\]



Handle a spelled-out hyphenated number from 21 to 99. We'll return this
as three separate tokens: a word for the tens name, a word for the
hyphen, and a word for the units name.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


