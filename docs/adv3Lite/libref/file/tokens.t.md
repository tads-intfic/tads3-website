---
layout: docs
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



------------------------------------------------------------------------



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`cmdTokenizer`](../object/cmdTokenizer.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`concatTokens`](#concatTokens)[`isWordToken`](#isWordToken)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="concatTokens"></span>

`concatTokens (a, b)`

[tokens.t](../file/tokens.t.html)\[[45](../source/tokens.t.html#45)\]



Concatenate two tokens. This takes two token elements in the same format
returned by Tokenizer.tokenize(), and returns a combined element in the
same format. The result should be as though the original pair of tokens
had been concatenated in the input string.



<span id="isWordToken"></span>

`isWordToken (tok)`

[tokens.t](../file/tokens.t.html)\[[32](../source/tokens.t.html#32)\]



Is the given token a word? This receives a token element in the same
format returned by Tokenizer.tokenize(). Returns true if the token
represents a word that could be looked up in the dictionary, nil if it's
something else (such as punctuation, a number, or a quoted literal).

\[Required\]





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


