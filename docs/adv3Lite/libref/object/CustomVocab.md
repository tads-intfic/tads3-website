---
layout: docs
---
<span class="title">CustomVocab</span><span class="type">class</span>

[english.t](../file/english.t.html)\[[2348](../source/english.t.html#2348)\]

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

CustomVocab objects define special-case vocabulary for the parser and
name generation routines.

The library provides a CustomVocab object with many common special-case
words, but games and extensions can augment the built-in lists by
defining their own CustomVocab objects that follow the same patterns.
The library automatically includes all of the special word lists in all
of the CustomVocab objects defined throughout the game.

`class `**`CustomVocab`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CustomVocab`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`englishCustomVocab`](../object/englishCustomVocab.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`irregularPlurals`](#irregularPlurals)`  `[`specialAOrAn`](#specialAOrAn)`  `[`verbParams`](#verbParams)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="irregularPlurals"></span>

`irregularPlurals`

[english.t](../file/english.t.html)\[[2377](../source/english.t.html#2377)\]

<div class="desc">

Irregular plural list. This is a list of words with plurals that can't
be inferred from any of the usual spelling rules. The entries are in
pairs: singular, \[plurals\]. The plurals are given in a list, since
some words have more than one valid plural. The first plural is the
preferred one; the remaining entries are alternates.

</div>

<span id="specialAOrAn"></span>

`specialAOrAn`

[english.t](../file/english.t.html)\[[2367](../source/english.t.html#2367)\]

<div class="desc">

The list of special-case a/an words. Choosing 'a' or 'an' is purely
phonetic, and English orthography is notoriously inconsistent
phonetically. What's more, the choice for many words varies by dialect,
accent, and personal style. We try to cover as much as we can in our
spelling-based rules, but it's hopeless to cover all the bases purely
with spelling. At some point we just have to turn to a table of special
cases.

We apply the special rules based on the first word in a name. The first
word is simply the first contiguous group of alphanumeric characters. If
the first word in a name is found in this list, the setting here will
override any spelling rules.

The entries here are simply strings of the form 'a word' or 'an word'.
Start with the appropriate form of a/an, then add a space, then the
special word to match.

</div>

<span id="verbParams"></span>

`verbParams`

[english.t](../file/english.t.html)\[[2402](../source/english.t.html#2402)\]

<div class="desc">

Verbs for substitution parameter strings. This is a list of strings,
using the following template:

  
'infinitive/present3/past/past-participle'

The 'infinitive' is the 'to' form of the verb (to go, to look, to see),
but \*without\* the word 'to'. 'present3' is the third-person present
form (is, goes, sees). 'past' is the past tense form (went, looked,
saw). 'past-participle' is the past participle form; this is optional,
and is needed only for verbs with distinct past and past participle
forms (e.g., saw/seen, went/gone). Most regular verbs - those with the
past formed by adding -ed to the infinitive - have identical past and
participle forms.

For every English verb except "to be", the entire present and past
conjugations can be derived from these three bits of information. The
past perfect, future, and future perfect conjugations can also be
derived from this information, for any verb except "to be" and the
auxiliary verbs (could, should, etc). The English library pre-defines
"to be" and all of the auxiliary verbs, so there's no need to define
those with this mechanism.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
