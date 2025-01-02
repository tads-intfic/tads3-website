<span class="title">TentativeResolveResults</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[3828](../source/action.t.html#3828)\]

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

"Tentative" noun resolver results gather. This type of results gatherer
is used to perform a tentative pre-resolution of an object of a
multi-object action.

Consider what happens when we resolve a two-object action, such as "put
\<dobj\> in \<iobj\>". Since we have two objects, we obviously must
resolve one object or the other first; but this means that we must
resolve one object with no knowledge of the resolution of the other
object. This often makes it very difficult to resolve that first object
intelligently, because we'd really like to know something about the
other object. For example, if we first resolve the iobj of "put \<dobj\>
in \<iobj\>", it would be nice to know which dobj we're talking about,
since we could reduce the likelihood that the iobj is the dobj's present
container.

Tentative resolution addresses this need by giving us some information
about a later-resolved object while resolving an earlier-resolved
object, even though we obviously can't have fully resolved the
later-resolved object. In tentative resolution, we perform the
resolution of the later-resolved object, completely in the dark about
the earlier-resolved object(s), and come up with as much information as
we can. The important thing about this stage of resolution is that we
don't ask any interactive questions and we don't count anything for
ranking purposes - we simply do the best we can and note the results,
leaving any ranking or interaction for the true resolution phase that
we'll perform later.

`class `**`TentativeResolveResults`**` :   `[`ResolveResults`](../object/ResolveResults.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TentativeResolveResults`**  
`         `[`ResolveResults`](../object/ResolveResults.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`allowActionRemapping`](#allowActionRemapping)`  `[`allowEquivalentFiltering`](#allowEquivalentFiltering)`  `[`npMissing`](#npMissing)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`ambiguousNounPhrase`](#ambiguousNounPhrase)`  `[`askMissingLiteral`](#askMissingLiteral)`  `[`askMissingObject`](#askMissingObject)`  `[`canResolveInteractively`](#canResolveInteractively)`  `[`construct`](#construct)`  `[`emptyNounPhrase`](#emptyNounPhrase)`  `[`incCommandCount`](#incCommandCount)`  `[`insufficientQuantity`](#insufficientQuantity)`  `[`noMatch`](#noMatch)`  `[`noMatchForAll`](#noMatchForAll)`  `[`noMatchForAllBut`](#noMatchForAllBut)`  `[`noMatchForListBut`](#noMatchForListBut)`  `[`noMatchForLocation`](#noMatchForLocation)`  `[`noMatchForPossessive`](#noMatchForPossessive)`  `[`noMatchForPronoun`](#noMatchForPronoun)`  `[`noMatchPoss`](#noMatchPoss)`  `[`noteActorSpecified`](#noteActorSpecified)`  `[`noteAdjEnding`](#noteAdjEnding)`  `[`noteBadPrep`](#noteBadPrep)`  `[`noteEmptyBut`](#noteEmptyBut)`  `[`noteIndefinite`](#noteIndefinite)`  `[`noteLiteral`](#noteLiteral)`  `[`noteMatches`](#noteMatches)`  `[`noteMiscWordList`](#noteMiscWordList)`  `[`noteNounSlots`](#noteNounSlots)`  `[`notePronoun`](#notePronoun)`  `[`noteWeakPhrasing`](#noteWeakPhrasing)`  `[`nothingInLocation`](#nothingInLocation)`  `[`noVocabMatch`](#noVocabMatch)`  `[`reflexiveNotAllowed`](#reflexiveNotAllowed)`  `[`uniqueObjectRequired`](#uniqueObjectRequired)`  `[`unknownNounPhrase`](#unknownNounPhrase)`  `[`wrongReflexive`](#wrongReflexive)`  `[`zeroQuantity`](#zeroQuantity)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowActionRemapping"></span>

`allowActionRemapping`

[action.t](../file/action.t.html)\[[3864](../source/action.t.html#3864)\]

<div class="desc">

*no description available*

</div>

<span id="allowEquivalentFiltering"></span>

`allowEquivalentFiltering`

[action.t](../file/action.t.html)\[[3872](../source/action.t.html#3872)\]

<div class="desc">

during the tentative phase, keep all equivalents - we don't want to make
any arbitrary choices among equivalents during this phase, because doing
so could improperly force a choice among otherwise ambiguous resolutions
to the other phrase

</div>

<span id="npMissing"></span>

`npMissing`

[action.t](../file/action.t.html)\[[3912](../source/action.t.html#3912)\]

<div class="desc">

flag: the noun phrase we're resolving is a missing noun phrase, which
means that we'll ask for it to be filled in when we get around to
resolving it for real

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, asker, txt, matchList, fullMatchList, scopeList, requiredNum, resolver)`

[action.t](../file/action.t.html)\[[3878](../source/action.t.html#3878)\]

<div class="desc">

for ambiguous results, don't attempt to narrow things down - just keep
the entire list

</div>

<span id="askMissingLiteral"></span>

`askMissingLiteral (action, which)`

[action.t](../file/action.t.html)\[[3902](../source/action.t.html#3902)\]

<div class="desc">

no interaction is allowed, so return no tokens if we need to ask for a
literal

</div>

<span id="askMissingObject"></span>

`askMissingObject (asker, resolver, responseProd)`

[action.t](../file/action.t.html)\[[3889](../source/action.t.html#3889)\]

<div class="desc">

no interaction is allowed, so return nothing if we need to ask for a
missing object

</div>

<span id="canResolveInteractively"></span>

`canResolveInteractively ( )`

[action.t](../file/action.t.html)\[[3905](../source/action.t.html#3905)\]

<div class="desc">

no interaction is allowed during tentative resolution

</div>

<span id="construct"></span>

`construct (target, issuer)`

[action.t](../file/action.t.html)\[[3829](../source/action.t.html#3829)\]

<div class="desc">

*no description available*

</div>

<span id="emptyNounPhrase"></span>

`emptyNounPhrase (resolver)`

[action.t](../file/action.t.html)\[[3851](../source/action.t.html#3851)\]

<div class="desc">

*no description available*

</div>

<span id="incCommandCount"></span>

`incCommandCount ( )`

[action.t](../file/action.t.html)\[[3860](../source/action.t.html#3860)\]

<div class="desc">

*no description available*

</div>

<span id="insufficientQuantity"></span>

`insufficientQuantity (txt, matchList, requiredNum)`

[action.t](../file/action.t.html)\[[3853](../source/action.t.html#3853)\]

<div class="desc">

*no description available*

</div>

<span id="noMatch"></span>

`noMatch (action, txt)`

[action.t](../file/action.t.html)\[[3835](../source/action.t.html#3835)\]

<div class="desc">

ignore most resolution problems, since this is only a tentative
resolution pass

</div>

<span id="noMatchForAll"></span>

`noMatchForAll ( )`

[action.t](../file/action.t.html)\[[3838](../source/action.t.html#3838)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForAllBut"></span>

`noMatchForAllBut ( )`

[action.t](../file/action.t.html)\[[3840](../source/action.t.html#3840)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForListBut"></span>

`noMatchForListBut ( )`

[action.t](../file/action.t.html)\[[3841](../source/action.t.html#3841)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForLocation"></span>

`noMatchForLocation (loc, txt)`

[action.t](../file/action.t.html)\[[3846](../source/action.t.html#3846)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`

[action.t](../file/action.t.html)\[[3845](../source/action.t.html#3845)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchForPronoun"></span>

`noMatchForPronoun (typ, txt)`

[action.t](../file/action.t.html)\[[3842](../source/action.t.html#3842)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchPoss"></span>

`noMatchPoss (action, txt)`

[action.t](../file/action.t.html)\[[3836](../source/action.t.html#3836)\]

<div class="desc">

*no description available*

</div>

<span id="noteActorSpecified"></span>

`noteActorSpecified ( )`

[action.t](../file/action.t.html)\[[3861](../source/action.t.html#3861)\]

<div class="desc">

*no description available*

</div>

<span id="noteAdjEnding"></span>

`noteAdjEnding ( )`

[action.t](../file/action.t.html)\[[3855](../source/action.t.html#3855)\]

<div class="desc">

*no description available*

</div>

<span id="noteBadPrep"></span>

`noteBadPrep ( )`

[action.t](../file/action.t.html)\[[3847](../source/action.t.html#3847)\]

<div class="desc">

*no description available*

</div>

<span id="noteEmptyBut"></span>

`noteEmptyBut ( )`

[action.t](../file/action.t.html)\[[3839](../source/action.t.html#3839)\]

<div class="desc">

*no description available*

</div>

<span id="noteIndefinite"></span>

`noteIndefinite ( )`

[action.t](../file/action.t.html)\[[3856](../source/action.t.html#3856)\]

<div class="desc">

*no description available*

</div>

<span id="noteLiteral"></span>

`noteLiteral (txt)`

[action.t](../file/action.t.html)\[[3850](../source/action.t.html#3850)\]

<div class="desc">

*no description available*

</div>

<span id="noteMatches"></span>

`noteMatches (matchList)`

[action.t](../file/action.t.html)\[[3859](../source/action.t.html#3859)\]

<div class="desc">

*no description available*

</div>

<span id="noteMiscWordList"></span>

`noteMiscWordList (txt)`

[action.t](../file/action.t.html)\[[3857](../source/action.t.html#3857)\]

<div class="desc">

*no description available*

</div>

<span id="noteNounSlots"></span>

`noteNounSlots (cnt)`

[action.t](../file/action.t.html)\[[3862](../source/action.t.html#3862)\]

<div class="desc">

*no description available*

</div>

<span id="notePronoun"></span>

`notePronoun ( )`

[action.t](../file/action.t.html)\[[3858](../source/action.t.html#3858)\]

<div class="desc">

*no description available*

</div>

<span id="noteWeakPhrasing"></span>

`noteWeakPhrasing (level)`

[action.t](../file/action.t.html)\[[3863](../source/action.t.html#3863)\]

<div class="desc">

*no description available*

</div>

<span id="nothingInLocation"></span>

`nothingInLocation (loc)`

[action.t](../file/action.t.html)\[[3848](../source/action.t.html#3848)\]

<div class="desc">

*no description available*

</div>

<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[action.t](../file/action.t.html)\[[3837](../source/action.t.html#3837)\]

<div class="desc">

*no description available*

</div>

<span id="reflexiveNotAllowed"></span>

`reflexiveNotAllowed (typ, txt)`

[action.t](../file/action.t.html)\[[3843](../source/action.t.html#3843)\]

<div class="desc">

*no description available*

</div>

<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (txt, matchList)`

[action.t](../file/action.t.html)\[[3854](../source/action.t.html#3854)\]

<div class="desc">

*no description available*

</div>

<span id="unknownNounPhrase"></span>

`unknownNounPhrase (match, resolver)`

[action.t](../file/action.t.html)\[[3849](../source/action.t.html#3849)\]

<div class="desc">

*no description available*

</div>

<span id="wrongReflexive"></span>

`wrongReflexive (typ, txt)`

[action.t](../file/action.t.html)\[[3844](../source/action.t.html#3844)\]

<div class="desc">

*no description available*

</div>

<span id="zeroQuantity"></span>

`zeroQuantity (txt)`

[action.t](../file/action.t.html)\[[3852](../source/action.t.html#3852)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
