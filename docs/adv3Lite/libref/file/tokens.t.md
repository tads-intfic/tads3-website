---
---
<span class="title">tokens.t</span><span class="type">file</span>

[source file](../source/tokens.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

------------------------------------------------------------------------

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`cmdTokenizer`](../object/cmdTokenizer.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`concatTokens`](#concatTokens)`  `[`isWordToken`](#isWordToken)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="concatTokens"></span>

`concatTokens (a, b)`

[tokens.t](../file/tokens.t.html)\[[45](../source/tokens.t.html#45)\]

<div class="desc">

Concatenate two tokens. This takes two token elements in the same format
returned by Tokenizer.tokenize(), and returns a combined element in the
same format. The result should be as though the original pair of tokens
had been concatenated in the input string.

</div>

<span id="isWordToken"></span>

`isWordToken (tok)`

[tokens.t](../file/tokens.t.html)\[[32](../source/tokens.t.html#32)\]

<div class="desc">

Is the given token a word? This receives a token element in the same
format returned by Tokenizer.tokenize(). Returns true if the token
represents a word that could be looked up in the dictionary, nil if it's
something else (such as punctuation, a number, or a quoted literal).

\[Required\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
