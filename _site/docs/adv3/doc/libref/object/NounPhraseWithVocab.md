<span class="title">NounPhraseWithVocab</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3578](../source/parser.t.html#3578)\]

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

Noun phrase with vocabulary resolution. This is a base class for the
various noun phrases that match adjective, noun, and plural tokens. This
class provides dictionary resolution of a vocabulary word into a list of
objects.

In non-declined languages such as English, the parts of speech of our
words are usually simply 'adjective' and 'noun'. A language "declines"
its noun phrases if the words in a noun phrase have different forms that
depend on the function of the noun phrase in a sentence; for example, in
German, adjectives take suffixes that depend upon the gender of the noun
being modified and the function of the noun phrase in the sentence
(subject, direct object, etc). In a declined language, it might be
desirable to use separate parts of speech for separate declined
adjective and noun forms.

`class `**`NounPhraseWithVocab`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`NounPhraseWithVocab`**  
`         `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                 `[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`NounPhraseWithVocab`**  
`         `[`adjPhrase(adjAdj)`](../object/adjPhrase(adjAdj).html)  
`         `[`AdjPhraseWithVocab`](../object/AdjPhraseWithVocab.html)  
`                 `[`adjPhrase(adj)`](../object/adjPhrase(adj).html)  
`                 `[`adjWord(adj)`](../object/adjWord(adj).html)  
`                 `[`adjWord(adjAbbr)`](../object/adjWord(adjAbbr).html)  
`                 `[`adjWord(adjApostS)`](../object/adjWord(adjApostS).html)  
`                 `[`literalAdjPhrase(literalAdj)`](../object/literalAdjPhrase(literalAdj).html)  
`                 `[`literalAdjPhrase(number)`](../object/literalAdjPhrase(number).html)  
`                 `[`literalAdjPhrase(string)`](../object/literalAdjPhrase(string).html)  
`         `[`compoundNounPhrase(of)`](../object/compoundNounPhrase(of).html)  
`         `[`compoundNounPhrase(simple)`](../object/compoundNounPhrase(simple).html)  
`         `[`compoundPluralPhrase(of)`](../object/compoundPluralPhrase(of).html)  
`         `[`compoundPluralPhrase(simple)`](../object/compoundPluralPhrase(simple).html)  
`         `[`miscWordList(list)`](../object/miscWordList(list).html)  
`         `[`miscWordList(wordOrNumber)`](../object/miscWordList(wordOrNumber).html)  
`         `[`NounWordProd`](../object/NounWordProd.html)  
`                 `[`nounWord(noun)`](../object/nounWord(noun).html)  
`                 `[`nounWord(nounAbbr)`](../object/nounWord(nounAbbr).html)  
`         `[`simpleNounPhrase(adj)`](../object/simpleNounPhrase(adj).html)  
`         `[`simpleNounPhrase(adjAndOne)`](../object/simpleNounPhrase(adjAndOne).html)  
`         `[`simpleNounPhrase(adjNP)`](../object/simpleNounPhrase(adjNP).html)  
`         `[`simpleNounPhrase(empty)`](../object/simpleNounPhrase(empty).html)  
`         `[`simpleNounPhrase(misc)`](../object/simpleNounPhrase(misc).html)  
`         `[`simpleNounPhrase(noun)`](../object/simpleNounPhrase(noun).html)  
`         `[`simpleNounPhrase(nounAndNumber)`](../object/simpleNounPhrase(nounAndNumber).html)  
`         `[`simpleNounPhrase(number)`](../object/simpleNounPhrase(number).html)  
`         `[`simpleNounPhrase(numberAndNoun)`](../object/simpleNounPhrase(numberAndNoun).html)  
`         `[`simplePluralPhrase(adjAndOnes)`](../object/simplePluralPhrase(adjAndOnes).html)  
`         `[`simplePluralPhrase(empty)`](../object/simplePluralPhrase(empty).html)  
`         `[`simplePluralPhrase(misc)`](../object/simplePluralPhrase(misc).html)  
`         `[`simplePluralPhrase(plural)`](../object/simplePluralPhrase(plural).html)  
`         `[`simplePluralPhrase(poundNum)`](../object/simplePluralPhrase(poundNum).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`combineWordMatches`](#combineWordMatches)`  `[`combineWordMatchItems`](#combineWordMatchItems)`  `[`dictMatchIsExact`](#dictMatchIsExact)`  `[`dictMatchIsStronger`](#dictMatchIsStronger)`  `[`filterDictMatches`](#filterDictMatches)`  `[`getAdjustedTokens`](#getAdjustedTokens)`  `[`getVocabMatchList`](#getVocabMatchList)`  `[`getWordMatches`](#getWordMatches)`  `[`inScopeMatches`](#inScopeMatches)`  `[`intersectWordMatches`](#intersectWordMatches)`  `[`resolveNouns`](#resolveNouns)`  `[`resolveNounsMatchName`](#resolveNounsMatchName)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="combineWordMatches"></span>

`combineWordMatches (aLst, bLst)`

[parser.t](../file/parser.t.html)\[[3607](../source/parser.t.html#3607)\]

<div class="desc">

Combine two word match lists. This simply adds each entry from the
second list that doesn't already have a corresponding entry in the first
list, returning the combined list.

</div>

<span id="combineWordMatchItems"></span>

`combineWordMatchItems (a, b)`

[parser.t](../file/parser.t.html)\[[3656](../source/parser.t.html#3656)\]

<div class="desc">

Combine the given word match entries. We'll merge the flags of the two
entries to produce a single merged entry in 'a'.

</div>

<span id="dictMatchIsExact"></span>

`dictMatchIsExact (flags)`

[parser.t](../file/parser.t.html)\[[3769](../source/parser.t.html#3769)\]

<div class="desc">

Check a dictionary match's string comparator flags to see if the match
is "exact." The exact meaning of "exact" is dependent on the language's
lexical rules; this generic base version considers a match to be exact
if it doesn't have any string comparator flags other than the base
"matched" flag and the case-fold flag. This should be suitable for most
languages, as (1) case folding usually doesn't improve match strength,
and (2) any additional comparator flags usually indicate some kind of
inexact match status.

A language that depends on upper/lower case as a marker of match
strength will need to override this to consider the case-fold flag as
significant in determining match exactness. In addition, a language that
uses additional string comparator flags to indicate better (rather than
worse) matches will have to override this to require the presence of
those flags.

</div>

<span id="dictMatchIsStronger"></span>

`dictMatchIsStronger (flags1, flags2)`

[parser.t](../file/parser.t.html)\[[3795](../source/parser.t.html#3795)\]

<div class="desc">

Compare two dictionary matches for the same object and determine if the
first one is stronger than the second. Both are for the same object; the
only difference is the string comparator flags.

Language modules might need to override this to supplement the filtering
with their own rules. This generic base version considers truncation: an
untruncated match is stronger than a truncated match. Non-English
languages might want to consider other lexical factors in the match
strength, such as whether we matched the exact accented characters or
approximated with unaccented equivalents - this information will, of
course, need to be coordinated with the dictionary's string comparator,
and reflected in the comparator match flags. It's the comparator match
flags that we're looking at here.

</div>

<span id="filterDictMatches"></span>

`filterDictMatches (lst)`

[parser.t](../file/parser.t.html)\[[3702](../source/parser.t.html#3702)\]

<div class="desc">

Filter a dictionary match list. This is called to clean up the raw match
list returned from looking up a vocabulary word in the dictionary.

The main purpose of this routine is to eliminate unwanted redundancy
from the dictionary matches; in particular, the dictionary might have
multiple matches for a given word at a given object, due to truncation,
upper/lower folding, accent removal, and so on. In general, we want to
keep only the single strongest match from the dictionary for a given
word matching a given object.

The meaning of "stronger" and "exact" matches is language-dependent, so
we abstract these with the separate methods dictMatchIsExact() and
dictMatchIsStronger().

Keep in mind that the raw dictionary match list has alternating entries:
object, comparator flags, object, comparator flags, etc. The return list
should be in the same format.

</div>

<span id="getAdjustedTokens"></span>

`getAdjustedTokens ( )`

[parser.t](../file/parser.t.html)\[[4005](../source/parser.t.html#4005)\]

<div class="desc">

Each subclass must override getAdjustedTokens() to provide the
appropriate set of tokens used to match the object. This is usually
simply the original set of tokens, but in some cases it may differ; for
example, spelled-out numbers normally adjust to the numeral form of the
number.

For each adjusted token, the list must have two entries: the first is a
string giving the token text, and the second is the property giving the
part of speech for the token.

</div>

<span id="getVocabMatchList"></span>

`getVocabMatchList (resolver, results, extraFlags)`

[parser.t](../file/parser.t.html)\[[4014](../source/parser.t.html#4014)\]

<div class="desc">

Get the vocabulary match list. This is simply the set of objects that
match all of the words in the noun phrase. Each rule subclass must
override this to return an appropriate list. Note that subclasses should
use getWordMatches() and intersectWordMatches() to build the list.

</div>

<span id="getWordMatches"></span>

`getWordMatches (tok, partOfSpeech, resolver, flags, truncFlags)`

[parser.t](../file/parser.t.html)\[[3585](../source/parser.t.html#3585)\]

<div class="desc">

Get a list of the matches in the main dictionary for the given token as
the given part of speech (&noun, &adjective, &plural, or others as
appropriate for the local language) that are in scope according to the
resolver.

</div>

<span id="inScopeMatches"></span>

`inScopeMatches (dictionaryMatches, flags, truncFlags, resolver)`

[parser.t](../file/parser.t.html)\[[3832](../source/parser.t.html#3832)\]

<div class="desc">

Given a list of dictionary matches to a given word, construct a list of
ResolveInfo objects for the matches that are in scope. For regular
resolution, "in scope" means the resolver thinks the object is in scope.

</div>

<span id="intersectWordMatches"></span>

`intersectWordMatches (tok, partOfSpeech, resolver, flags, truncFlags, lst)`

[parser.t](../file/parser.t.html)\[[3811](../source/parser.t.html#3811)\]

<div class="desc">

Get a list of the matches in the main dictionary for the given token,
intersecting the resulting list with the given list.

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[3882](../source/parser.t.html#3882)\]

<div class="desc">

Resolve the objects.

</div>

<span id="resolveNounsMatchName"></span>

`resolveNounsMatchName (results, resolver, matchList)`

[parser.t](../file/parser.t.html)\[[3912](../source/parser.t.html#3912)\]

<div class="desc">

Run a set of resolved objects through matchName() or a similar routine.
Returns the filtered results.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
