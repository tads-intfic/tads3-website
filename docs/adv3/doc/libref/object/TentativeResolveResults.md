---
layout: docs
---
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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TentativeResolveResults`**  
[`ResolveResults`](../object/ResolveResults.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allowActionRemapping`](#allowActionRemapping) [`allowEquivalentFiltering`](#allowEquivalentFiltering) [`npMissing`](#npMissing)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`ambiguousNounPhrase`](#ambiguousNounPhrase) [`askMissingLiteral`](#askMissingLiteral) [`askMissingObject`](#askMissingObject) [`canResolveInteractively`](#canResolveInteractively) [`construct`](#construct) [`emptyNounPhrase`](#emptyNounPhrase) [`incCommandCount`](#incCommandCount) [`insufficientQuantity`](#insufficientQuantity) [`noMatch`](#noMatch) [`noMatchForAll`](#noMatchForAll) [`noMatchForAllBut`](#noMatchForAllBut) [`noMatchForListBut`](#noMatchForListBut) [`noMatchForLocation`](#noMatchForLocation) [`noMatchForPossessive`](#noMatchForPossessive) [`noMatchForPronoun`](#noMatchForPronoun) [`noMatchPoss`](#noMatchPoss) [`noteActorSpecified`](#noteActorSpecified) [`noteAdjEnding`](#noteAdjEnding) [`noteBadPrep`](#noteBadPrep) [`noteEmptyBut`](#noteEmptyBut) [`noteIndefinite`](#noteIndefinite) [`noteLiteral`](#noteLiteral) [`noteMatches`](#noteMatches) [`noteMiscWordList`](#noteMiscWordList) [`noteNounSlots`](#noteNounSlots) [`notePronoun`](#notePronoun) [`noteWeakPhrasing`](#noteWeakPhrasing) [`nothingInLocation`](#nothingInLocation) [`noVocabMatch`](#noVocabMatch) [`reflexiveNotAllowed`](#reflexiveNotAllowed) [`uniqueObjectRequired`](#uniqueObjectRequired) [`unknownNounPhrase`](#unknownNounPhrase) [`wrongReflexive`](#wrongReflexive) [`zeroQuantity`](#zeroQuantity)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowActionRemapping"></span>

`allowActionRemapping`

[action.t](../file/action.t.html)\[[3864](../source/action.t.html#3864)\]



*no description available*



<span id="allowEquivalentFiltering"></span>

`allowEquivalentFiltering`

[action.t](../file/action.t.html)\[[3872](../source/action.t.html#3872)\]



during the tentative phase, keep all equivalents - we don't want to make
any arbitrary choices among equivalents during this phase, because doing
so could improperly force a choice among otherwise ambiguous resolutions
to the other phrase



<span id="npMissing"></span>

`npMissing`

[action.t](../file/action.t.html)\[[3912](../source/action.t.html#3912)\]



flag: the noun phrase we're resolving is a missing noun phrase, which
means that we'll ask for it to be filled in when we get around to
resolving it for real



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, asker, txt, matchList, fullMatchList, scopeList, requiredNum, resolver)`

[action.t](../file/action.t.html)\[[3878](../source/action.t.html#3878)\]



for ambiguous results, don't attempt to narrow things down - just keep
the entire list



<span id="askMissingLiteral"></span>

`askMissingLiteral (action, which)`

[action.t](../file/action.t.html)\[[3902](../source/action.t.html#3902)\]



no interaction is allowed, so return no tokens if we need to ask for a
literal



<span id="askMissingObject"></span>

`askMissingObject (asker, resolver, responseProd)`

[action.t](../file/action.t.html)\[[3889](../source/action.t.html#3889)\]



no interaction is allowed, so return nothing if we need to ask for a
missing object



<span id="canResolveInteractively"></span>

`canResolveInteractively ( )`

[action.t](../file/action.t.html)\[[3905](../source/action.t.html#3905)\]



no interaction is allowed during tentative resolution



<span id="construct"></span>

`construct (target, issuer)`

[action.t](../file/action.t.html)\[[3829](../source/action.t.html#3829)\]



*no description available*



<span id="emptyNounPhrase"></span>

`emptyNounPhrase (resolver)`

[action.t](../file/action.t.html)\[[3851](../source/action.t.html#3851)\]



*no description available*



<span id="incCommandCount"></span>

`incCommandCount ( )`

[action.t](../file/action.t.html)\[[3860](../source/action.t.html#3860)\]



*no description available*



<span id="insufficientQuantity"></span>

`insufficientQuantity (txt, matchList, requiredNum)`

[action.t](../file/action.t.html)\[[3853](../source/action.t.html#3853)\]



*no description available*



<span id="noMatch"></span>

`noMatch (action, txt)`

[action.t](../file/action.t.html)\[[3835](../source/action.t.html#3835)\]



ignore most resolution problems, since this is only a tentative
resolution pass



<span id="noMatchForAll"></span>

`noMatchForAll ( )`

[action.t](../file/action.t.html)\[[3838](../source/action.t.html#3838)\]



*no description available*



<span id="noMatchForAllBut"></span>

`noMatchForAllBut ( )`

[action.t](../file/action.t.html)\[[3840](../source/action.t.html#3840)\]



*no description available*



<span id="noMatchForListBut"></span>

`noMatchForListBut ( )`

[action.t](../file/action.t.html)\[[3841](../source/action.t.html#3841)\]



*no description available*



<span id="noMatchForLocation"></span>

`noMatchForLocation (loc, txt)`

[action.t](../file/action.t.html)\[[3846](../source/action.t.html#3846)\]



*no description available*



<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`

[action.t](../file/action.t.html)\[[3845](../source/action.t.html#3845)\]



*no description available*



<span id="noMatchForPronoun"></span>

`noMatchForPronoun (typ, txt)`

[action.t](../file/action.t.html)\[[3842](../source/action.t.html#3842)\]



*no description available*



<span id="noMatchPoss"></span>

`noMatchPoss (action, txt)`

[action.t](../file/action.t.html)\[[3836](../source/action.t.html#3836)\]



*no description available*



<span id="noteActorSpecified"></span>

`noteActorSpecified ( )`

[action.t](../file/action.t.html)\[[3861](../source/action.t.html#3861)\]



*no description available*



<span id="noteAdjEnding"></span>

`noteAdjEnding ( )`

[action.t](../file/action.t.html)\[[3855](../source/action.t.html#3855)\]



*no description available*



<span id="noteBadPrep"></span>

`noteBadPrep ( )`

[action.t](../file/action.t.html)\[[3847](../source/action.t.html#3847)\]



*no description available*



<span id="noteEmptyBut"></span>

`noteEmptyBut ( )`

[action.t](../file/action.t.html)\[[3839](../source/action.t.html#3839)\]



*no description available*



<span id="noteIndefinite"></span>

`noteIndefinite ( )`

[action.t](../file/action.t.html)\[[3856](../source/action.t.html#3856)\]



*no description available*



<span id="noteLiteral"></span>

`noteLiteral (txt)`

[action.t](../file/action.t.html)\[[3850](../source/action.t.html#3850)\]



*no description available*



<span id="noteMatches"></span>

`noteMatches (matchList)`

[action.t](../file/action.t.html)\[[3859](../source/action.t.html#3859)\]



*no description available*



<span id="noteMiscWordList"></span>

`noteMiscWordList (txt)`

[action.t](../file/action.t.html)\[[3857](../source/action.t.html#3857)\]



*no description available*



<span id="noteNounSlots"></span>

`noteNounSlots (cnt)`

[action.t](../file/action.t.html)\[[3862](../source/action.t.html#3862)\]



*no description available*



<span id="notePronoun"></span>

`notePronoun ( )`

[action.t](../file/action.t.html)\[[3858](../source/action.t.html#3858)\]



*no description available*



<span id="noteWeakPhrasing"></span>

`noteWeakPhrasing (level)`

[action.t](../file/action.t.html)\[[3863](../source/action.t.html#3863)\]



*no description available*



<span id="nothingInLocation"></span>

`nothingInLocation (loc)`

[action.t](../file/action.t.html)\[[3848](../source/action.t.html#3848)\]



*no description available*



<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[action.t](../file/action.t.html)\[[3837](../source/action.t.html#3837)\]



*no description available*



<span id="reflexiveNotAllowed"></span>

`reflexiveNotAllowed (typ, txt)`

[action.t](../file/action.t.html)\[[3843](../source/action.t.html#3843)\]



*no description available*



<span id="uniqueObjectRequired"></span>

`uniqueObjectRequired (txt, matchList)`

[action.t](../file/action.t.html)\[[3854](../source/action.t.html#3854)\]



*no description available*



<span id="unknownNounPhrase"></span>

`unknownNounPhrase (match, resolver)`

[action.t](../file/action.t.html)\[[3849](../source/action.t.html#3849)\]



*no description available*



<span id="wrongReflexive"></span>

`wrongReflexive (typ, txt)`

[action.t](../file/action.t.html)\[[3844](../source/action.t.html#3844)\]



*no description available*



<span id="zeroQuantity"></span>

`zeroQuantity (txt)`

[action.t](../file/action.t.html)\[[3852](../source/action.t.html#3852)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


