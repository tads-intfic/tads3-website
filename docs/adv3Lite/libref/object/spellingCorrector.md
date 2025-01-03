---
layout: docs
---
<span class="title">spellingCorrector</span><span class="type">object</span>

[spelling.t](../file/spelling.t.html)\[[9](../source/spelling.t.html#9)\]

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



Spelling corrector. This object implements automatic spelling correction
on the player's input.

**`spellingCorrector`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`spellingCorrector`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`dict`](#dict)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkSpacing`](#checkSpacing) [`correct`](#correct) [`correctPairSpacing`](#correctPairSpacing) [`findUnknownWord`](#findUnknownWord) [`getCandidates`](#getCandidates) [`isWordDefined`](#isWordDefined)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="dict"></span>

`dict`

[spelling.t](../file/spelling.t.html)\[[282](../source/spelling.t.html#282)\]



the dictionary object we use for looking up words



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkSpacing"></span>

`checkSpacing (toks, idx, err)`

[spelling.t](../file/spelling.t.html)\[[148](../source/spelling.t.html#148)\]



Find spacing corrections for the token at the given index. This looks
for extra inserted spaces, missing spaces, and spaces transposed with
adjacent letters. We return a list of proposed changes; each element is
a list of three token values, giving the preceding, current and next
token in the proposed change. The preceding and/or next can be nil, in
which case we're not proposing changes to those tokens.

Note that all spacing changes have edit distance 1. All of our
corrections are single character insertions or deletions, or pair
transpositions (which we count as one edit).



<span id="correct"></span>

`correct (toks, idx, err)`

[spelling.t](../file/spelling.t.html)\[[62](../source/spelling.t.html#62)\]



Attempt to correct a typographical error in a token list.

'toks' is a token list to be corrected, and 'idx' is the index of the
first unknown word. 'err' is ParseError that triggered the spelling
check. We use the error to filter the list of candidates for corrected
spellings: for a general verb syntax error, for example, we'll look for
words that are used in verb phrases, and for noun resolution we'll look
for words associated with in-scope objects.

If we fail to find a correction, the return value is nil.

If we find a correction, the return value is a list of token lists. It's
a list rather than a single correction because we might be unable to
break a tie; rather than picking one arbitrarily, we return all of the
candidates. This allows the caller to try the different possibilities.
The caller will generally have more information than we have here about
the overall context, so it's in a better position to make a final
judgment about how to break a tie.

Note that we only correct a single error per call. If the token list has
additional unknown words, the caller can continue parsing and call here
again to get candidate corrections for the next word, and so on until
all unknown words are resolved. We use this iterative approach because
the first correction might change the parser's guess about where the
error lies; by waiting, we get the benefit of the revised context
information for correcting each additional word.



<span id="correctPairSpacing"></span>

`correctPairSpacing (toks, idx)`

[spelling.t](../file/spelling.t.html)\[[211](../source/spelling.t.html#211)\]



Try correcting spelling based on changes to the spacing between a pair
of tokens. We'll try deleting the intervening space entirely, and we'll
try transposing the space with each adjacent letter. 'toks' is a vector
that we'll modify in place; 'idx' is the index of the first word of the
pair. We return true if we make a correction, nil if not.



<span id="findUnknownWord"></span>

`findUnknownWord (toks)`

[spelling.t](../file/spelling.t.html)\[[14](../source/spelling.t.html#14)\]



Find the first word token that isn't in the dictionary. Returns the
token index, or nil if we don't find any unknown words.



<span id="getCandidates"></span>

`getCandidates (w)`

[spelling.t](../file/spelling.t.html)\[[294](../source/spelling.t.html#294)\]



Get a list of similar words, with their Levenshtein edit distances This
returns a list of \[word, distance\] values.



<span id="isWordDefined"></span>

`isWordDefined (w)`

[spelling.t](../file/spelling.t.html)\[[288](../source/spelling.t.html#288)\]



Is the given word defined? We check the command dictionary for the word.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


