---
layout: docs
---
<span class="title">SpellingHistory</span><span class="type">class</span>

[spelling.t](../file/spelling.t.html)\[[437](../source/spelling.t.html#437)\]

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



SpellingHistory: this maintains the history of attempted spelling
corrections for the current command. We process each word separately, so
each word has its own entry in the history.

The point of maintaining a history is that it allows us to backtrack if
we decide that an earlier guess at a corrected word isn't going to
result in a working command after all. If an earlier correction had
other equally good options, we can go back and try the other options by
unwinding the history.

`class `**`SpellingHistory`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SpellingHistory`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`corrections`](#corrections) [`cstack`](#cstack) [`parser`](#parser) [`startTime`](#startTime)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkSpelling`](#checkSpelling) [`clear`](#clear) [`construct`](#construct) [`hasCorrections`](#hasCorrections) [`noteSpelling`](#noteSpelling) [`rollback`](#rollback)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="corrections"></span>

`corrections`

[spelling.t](../file/spelling.t.html)\[[772](../source/spelling.t.html#772)\]



The indices of the words we've corrected so far. We keep track of the
corrections we've made so that we don't try to further correct a word
we've already corrected. (We \*do\* try multiple candidates per slot,
but we do that by backtracking.)



<span id="cstack"></span>

`cstack`

[spelling.t](../file/spelling.t.html)\[[781](../source/spelling.t.html#781)\]



The attempted correction stack. Each time we correct a word, we'll add a
SpellingCorrection item to the stack. If we decide a correction didn't
work after all (i.e., didn't yield a valid parsing), the stack lets us
retract it and try a different correction candidate.



<span id="parser"></span>

`parser`

[spelling.t](../file/spelling.t.html)\[[761](../source/spelling.t.html#761)\]



our parser object



<span id="startTime"></span>

`startTime`

[spelling.t](../file/spelling.t.html)\[[764](../source/spelling.t.html#764)\]



starting time (in GetTimeTicks time)



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkSpelling"></span>

`checkSpelling (toks, err)`

[spelling.t](../file/spelling.t.html)\[[463](../source/spelling.t.html#463)\]



Check for spelling errors in a token list, and attempt automatic
spelling correction. We'll scan the token list for a word that isn't in
the dictionary. If we find one, and spelling correction is enabled,
we'll attempt to automatically correct the error.

'toks' is the token list for the command line, and 'err' is the
ParseError object indicating what error triggered the spelling check.

Returns a new token list if we correct a spelling error, nil otherwise.



<span id="clear"></span>

`clear ( )`

[spelling.t](../file/spelling.t.html)\[[786](../source/spelling.t.html#786)\]



Clear the history



<span id="construct"></span>

`construct (parser)`

[spelling.t](../file/spelling.t.html)\[[438](../source/spelling.t.html#438)\]



*no description available*



<span id="hasCorrections"></span>

`hasCorrections ( )`

[spelling.t](../file/spelling.t.html)\[[448](../source/spelling.t.html#448)\]



have we made any corrections?



<span id="noteSpelling"></span>

`noteSpelling (newToks)`

[spelling.t](../file/spelling.t.html)\[[685](../source/spelling.t.html#685)\]



Note spelling changes between the original token list and the given
token list.



<span id="rollback"></span>

`rollback (toks, err)`

[spelling.t](../file/spelling.t.html)\[[646](../source/spelling.t.html#646)\]



Roll back spelling changes to the last one that actually improved
matters. 'toks' is the latest token list, and 'err' is the parsing error
that we encountered attempting to parse this token list.

If 'err' is a curable error, we'll leave things as they are. The curable
error means that the token list is now well-formed, but is missing some
information we need to actually execute it. Since it's well-formed, our
spelling corrections must have made some kind of sense, so we'll assume
they were correct.

If the error isn't curable, though, our spelling corrections didn't
result in a working command. The way we pick candidate words tends to
give us lots of false matches, so the fact that we didn't end up with
meaningful syntax overall suggests that our guess for an individual word
was a spurious match.

To determine what we keep and what we roll back, we look at whether a
change improved the intelligibility of the command. There are basically
three stages of intelligibility that we can distinguish: (1) completely
unintelligible, (2) valid verb structure but unknown noun phrases, and
(3) valid verb structure AND resolvable noun phrases.

We want to keep any attempted spelling corrections that successfully
advanced us from one stage to the next, because the improved
intelligibility is pretty good evidence that our corrections were in
fact correct. We DON'T want to keep any corrections that didn't advance
the process, because we can't tell if they actually helped. We're
intentionally conservative about spelling correction, because spurious
corrections are worse in an IF context than in most applications. In IF,
a spurious correction could be a spoiler, by revealing the existence of
a dictionary word too early in the game. To reduce spurious corrections,
we only accept corrections that actually make the command more
parseable.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


