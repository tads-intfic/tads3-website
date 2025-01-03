---
layout: docs
---
<span class="title">NounPhraseProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1205](../source/parser.t.html#1205)\]

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



Basic noun phrase production class.

`class `**`NounPhraseProd`**` :   `[`BasicProd`](../object/BasicProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NounPhraseProd`**  
[`BasicProd`](../object/BasicProd.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`NounPhraseProd`**  
[`ButProd`](../object/ButProd.html)  
[`EverythingButProd`](../object/EverythingButProd.html)  
[`terminalNounPhrase(allBut)`](../object/terminalNounPhrase(allBut).html)  
[`IndefiniteNounButProd`](../object/IndefiniteNounButProd.html)  
[`terminalNounPhrase(anyBut)`](../object/terminalNounPhrase(anyBut).html)  
[`ListButProd`](../object/ListButProd.html)  
[`terminalNounPhrase(pluralExcept)`](../object/terminalNounPhrase(pluralExcept).html)  
[`completeNounPhrase(miscPrep)`](../object/completeNounPhrase(miscPrep).html)  
[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
[`BasicPossessiveProd`](../object/BasicPossessiveProd.html)  
[`ButPossessiveProd`](../object/ButPossessiveProd.html)  
[`exceptNounPhrase(singlePossessive)`](../object/exceptNounPhrase(singlePossessive).html)  
[`DisambigPossessiveProd`](../object/DisambigPossessiveProd.html)  
[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)  
[`PossessiveNounProd`](../object/PossessiveNounProd.html)  
[`qualifiedSingularNounPhrase(possessive)`](../object/qualifiedSingularNounPhrase(possessive).html)  
[`PossessivePluralProd`](../object/PossessivePluralProd.html)  
[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)  
[`explicitDetPluralOnlyNounPhrase(possessive)`](../object/explicitDetPluralOnlyNounPhrase(possessive).html)  
[`ContainerNounPhraseProd`](../object/ContainerNounPhraseProd.html)  
[`indetPluralNounPhrase(locational)`](../object/indetPluralNounPhrase(locational).html)  
[`indetPluralOnlyNounPhrase(locational)`](../object/indetPluralOnlyNounPhrase(locational).html)  
[`indetSingularNounPhrase(locational)`](../object/indetSingularNounPhrase(locational).html)  
[`PreResolvedAmbigProd`](../object/PreResolvedAmbigProd.html)  
[`qualifiedSingularNounPhrase(definite)`](../object/qualifiedSingularNounPhrase(definite).html)  
[`VagueContainerNounPhraseProd`](../object/VagueContainerNounPhraseProd.html)  
[`AllInContainerNounPhraseProd`](../object/AllInContainerNounPhraseProd.html)  
[`qualifiedPluralNounPhrase(theOnesIn)`](../object/qualifiedPluralNounPhrase(theOnesIn).html)  
[`VagueContainerDefiniteNounPhraseProd`](../object/VagueContainerDefiniteNounPhraseProd.html)  
[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)  
[`VagueContainerIndefiniteNounPhraseProd`](../object/VagueContainerIndefiniteNounPhraseProd.html)  
[`qualifiedSingularNounPhrase(anyOneIn)`](../object/qualifiedSingularNounPhrase(anyOneIn).html)  
[`EmptyNounPhraseProd`](../object/EmptyNounPhraseProd.html)  
[`ImpliedActorNounPhraseProd`](../object/ImpliedActorNounPhraseProd.html)  
[`nounList(empty)`](../object/nounList(empty).html)  
[`singleNoun(empty)`](../object/singleNoun(empty).html)  
[`IndefiniteNounProd`](../object/IndefiniteNounProd.html)  
[`ArbitraryNounProd`](../object/ArbitraryNounProd.html)  
[`qualifiedSingularNounPhrase(anyPlural)`](../object/qualifiedSingularNounPhrase(anyPlural).html)  
[`qualifiedSingularNounPhrase(arbitrary)`](../object/qualifiedSingularNounPhrase(arbitrary).html)  
[`qualifiedSingularNounPhrase(indefinite)`](../object/qualifiedSingularNounPhrase(indefinite).html)  
[`LayeredNounPhraseProd`](../object/LayeredNounPhraseProd.html)  
[`completeNounPhrase(main)`](../object/completeNounPhrase(main).html)  
[`completeNounPhraseWithoutAll(qualified)`](../object/completeNounPhraseWithoutAll(qualified).html)  
[`detPluralNounPhrase(main)`](../object/detPluralNounPhrase(main).html)  
[`detPluralOnlyNounPhrase(main)`](../object/detPluralOnlyNounPhrase(main).html)  
[`indetPluralNounPhrase(basic)`](../object/indetPluralNounPhrase(basic).html)  
[`indetPluralOnlyNounPhrase(basic)`](../object/indetPluralOnlyNounPhrase(basic).html)  
[`indetSingularNounPhrase(basic)`](../object/indetSingularNounPhrase(basic).html)  
[`nounPhrase(main)`](../object/nounPhrase(main).html)  
[`pluralPhrase(main)`](../object/pluralPhrase(main).html)  
[`possessiveAdjPhrase(npApostropheS)`](../object/possessiveAdjPhrase(npApostropheS).html)  
[`possessiveAdjPhrase(ppApostropheS)`](../object/possessiveAdjPhrase(ppApostropheS).html)  
[`possessiveNounPhrase(npApostropheS)`](../object/possessiveNounPhrase(npApostropheS).html)  
[`qualifiedNounPhrase(main)`](../object/qualifiedNounPhrase(main).html)  
[`qualifiedPluralNounPhrase(determiner)`](../object/qualifiedPluralNounPhrase(determiner).html)  
[`singleNoun(normal)`](../object/singleNoun(normal).html)  
[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)  
[`adjPhrase(adjAdj)`](../object/adjPhrase(adjAdj).html)  
[`AdjPhraseWithVocab`](../object/AdjPhraseWithVocab.html)  
[`adjPhrase(adj)`](../object/adjPhrase(adj).html)  
[`adjWord(adj)`](../object/adjWord(adj).html)  
[`adjWord(adjAbbr)`](../object/adjWord(adjAbbr).html)  
[`adjWord(adjApostS)`](../object/adjWord(adjApostS).html)  
[`literalAdjPhrase(literalAdj)`](../object/literalAdjPhrase(literalAdj).html)  
[`literalAdjPhrase(number)`](../object/literalAdjPhrase(number).html)  
[`literalAdjPhrase(string)`](../object/literalAdjPhrase(string).html)  
[`compoundNounPhrase(of)`](../object/compoundNounPhrase(of).html)  
[`compoundNounPhrase(simple)`](../object/compoundNounPhrase(simple).html)  
[`compoundPluralPhrase(of)`](../object/compoundPluralPhrase(of).html)  
[`compoundPluralPhrase(simple)`](../object/compoundPluralPhrase(simple).html)  
[`miscWordList(list)`](../object/miscWordList(list).html)  
[`miscWordList(wordOrNumber)`](../object/miscWordList(wordOrNumber).html)  
[`NounWordProd`](../object/NounWordProd.html)  
[`nounWord(noun)`](../object/nounWord(noun).html)  
[`nounWord(nounAbbr)`](../object/nounWord(nounAbbr).html)  
[`simpleNounPhrase(adj)`](../object/simpleNounPhrase(adj).html)  
[`simpleNounPhrase(adjAndOne)`](../object/simpleNounPhrase(adjAndOne).html)  
[`simpleNounPhrase(adjNP)`](../object/simpleNounPhrase(adjNP).html)  
[`simpleNounPhrase(empty)`](../object/simpleNounPhrase(empty).html)  
[`simpleNounPhrase(misc)`](../object/simpleNounPhrase(misc).html)  
[`simpleNounPhrase(noun)`](../object/simpleNounPhrase(noun).html)  
[`simpleNounPhrase(nounAndNumber)`](../object/simpleNounPhrase(nounAndNumber).html)  
[`simpleNounPhrase(number)`](../object/simpleNounPhrase(number).html)  
[`simpleNounPhrase(numberAndNoun)`](../object/simpleNounPhrase(numberAndNoun).html)  
[`simplePluralPhrase(adjAndOnes)`](../object/simplePluralPhrase(adjAndOnes).html)  
[`simplePluralPhrase(empty)`](../object/simplePluralPhrase(empty).html)  
[`simplePluralPhrase(misc)`](../object/simplePluralPhrase(misc).html)  
[`simplePluralPhrase(plural)`](../object/simplePluralPhrase(plural).html)  
[`simplePluralPhrase(poundNum)`](../object/simplePluralPhrase(poundNum).html)  
[`PluralProd`](../object/PluralProd.html)  
[`AllPluralProd`](../object/AllPluralProd.html)  
[`explicitDetPluralOnlyNounPhrase(definite)`](../object/explicitDetPluralOnlyNounPhrase(definite).html)  
[`qualifiedPluralNounPhrase(all)`](../object/qualifiedPluralNounPhrase(all).html)  
[`DefinitePluralProd`](../object/DefinitePluralProd.html)  
[`explicitDetPluralNounPhrase(definite)`](../object/explicitDetPluralNounPhrase(definite).html)  
[`implicitDetPluralOnlyNounPhrase(main)`](../object/implicitDetPluralOnlyNounPhrase(main).html)  
[`QuantifiedPluralProd`](../object/QuantifiedPluralProd.html)  
[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)  
[`BothPluralProd`](../object/BothPluralProd.html)  
[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)  
[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)  
[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)  
[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)  
[`PronounProd`](../object/PronounProd.html)  
[`HerProd`](../object/HerProd.html)  
[`completeNounPhraseWithoutAll(her)`](../object/completeNounPhraseWithoutAll(her).html)  
[`HimProd`](../object/HimProd.html)  
[`completeNounPhraseWithoutAll(him)`](../object/completeNounPhraseWithoutAll(him).html)  
[`ItProd`](../object/ItProd.html)  
[`completeNounPhraseWithoutAll(it)`](../object/completeNounPhraseWithoutAll(it).html)  
[`MeProd`](../object/MeProd.html)  
[`completeNounPhraseWithoutAll(me)`](../object/completeNounPhraseWithoutAll(me).html)  
[`PossessivePronounAdjProd`](../object/PossessivePronounAdjProd.html)  
[`HerAdjProd`](../object/HerAdjProd.html)  
[`possessiveAdjPhrase(her)`](../object/possessiveAdjPhrase(her).html)  
[`HisAdjProd`](../object/HisAdjProd.html)  
[`possessiveAdjPhrase(his)`](../object/possessiveAdjPhrase(his).html)  
[`ItsAdjProd`](../object/ItsAdjProd.html)  
[`possessiveAdjPhrase(its)`](../object/possessiveAdjPhrase(its).html)  
[`MyAdjProd`](../object/MyAdjProd.html)  
[`possessiveAdjPhrase(my)`](../object/possessiveAdjPhrase(my).html)  
[`TheirAdjProd`](../object/TheirAdjProd.html)  
[`possessiveAdjPhrase(their)`](../object/possessiveAdjPhrase(their).html)  
[`YourAdjProd`](../object/YourAdjProd.html)  
[`possessiveAdjPhrase(your)`](../object/possessiveAdjPhrase(your).html)  
[`PossessivePronounNounProd`](../object/PossessivePronounNounProd.html)  
[`HersNounProd`](../object/HersNounProd.html)  
[`possessiveNounPhrase(hers)`](../object/possessiveNounPhrase(hers).html)  
[`HisNounProd`](../object/HisNounProd.html)  
[`possessiveNounPhrase(his)`](../object/possessiveNounPhrase(his).html)  
[`ItsNounProd`](../object/ItsNounProd.html)  
[`possessiveNounPhrase(its)`](../object/possessiveNounPhrase(its).html)  
[`MineNounProd`](../object/MineNounProd.html)  
[`possessiveNounPhrase(mine)`](../object/possessiveNounPhrase(mine).html)  
[`TheirsNounProd`](../object/TheirsNounProd.html)  
[`possessiveNounPhrase(theirs)`](../object/possessiveNounPhrase(theirs).html)  
[`YoursNounProd`](../object/YoursNounProd.html)  
[`possessiveNounPhrase(yours)`](../object/possessiveNounPhrase(yours).html)  
[`ReflexivePronounProd`](../object/ReflexivePronounProd.html)  
[`HerselfProd`](../object/HerselfProd.html)  
[`completeNounPhraseWithoutAll(herself)`](../object/completeNounPhraseWithoutAll(herself).html)  
[`HimselfProd`](../object/HimselfProd.html)  
[`completeNounPhraseWithoutAll(himself)`](../object/completeNounPhraseWithoutAll(himself).html)  
[`ItselfProd`](../object/ItselfProd.html)  
[`completeNounPhraseWithoutAll(itself)`](../object/completeNounPhraseWithoutAll(itself).html)  
[`ThemselvesProd`](../object/ThemselvesProd.html)  
[`completeNounPhraseWithoutAll(themselves)`](../object/completeNounPhraseWithoutAll(themselves).html)  
[`ThemProd`](../object/ThemProd.html)  
[`completeNounPhraseWithoutAll(them)`](../object/completeNounPhraseWithoutAll(them).html)  
[`YouProd`](../object/YouProd.html)  
[`completeNounPhraseWithoutAll(yourself)`](../object/completeNounPhraseWithoutAll(yourself).html)  
[`SingleNounProd`](../object/SingleNounProd.html)  
[`PrepSingleNounProd`](../object/PrepSingleNounProd.html)  
[`atSingleNoun(main)`](../object/atSingleNoun(main).html)  
[`forSingleNoun(main)`](../object/forSingleNoun(main).html)  
[`fromSingleNoun(main)`](../object/fromSingleNoun(main).html)  
[`inSingleNoun(main)`](../object/inSingleNoun(main).html)  
[`onSingleNoun(main)`](../object/onSingleNoun(main).html)  
[`outOfSingleNoun(main)`](../object/outOfSingleNoun(main).html)  
[`throughSingleNoun(main)`](../object/throughSingleNoun(main).html)  
[`toSingleNoun(main)`](../object/toSingleNoun(main).html)  
[`withSingleNoun(main)`](../object/withSingleNoun(main).html)  
[`singleNounOnly(main)`](../object/singleNounOnly(main).html)  
[`TopicProd`](../object/TopicProd.html)  
[`EmptyTopicPhraseProd`](../object/EmptyTopicPhraseProd.html)  
[`PrepSingleTopicProd`](../object/PrepSingleTopicProd.html)  
[`aboutTopicPhrase(main)`](../object/aboutTopicPhrase(main).html)  
[`topicPhrase(main)`](../object/topicPhrase(main).html)  
[`topicPhrase(misc)`](../object/topicPhrase(misc).html)  
[`SingleNounWithListProd`](../object/SingleNounWithListProd.html)  
[`singleNoun(multiple)`](../object/singleNoun(multiple).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`filterForCollectives`](#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterTruncations`](#filterTruncations) [`getVerifyKeepers`](#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="filterForCollectives"></span>

`filterForCollectives`

[parser.t](../file/parser.t.html)\[[1213](../source/parser.t.html#1213)\]



Determine whether this kind of noun phrase prefers to keep a collective
or the collective's individuals when filtering. If this is true, we'll
keep a collective and discard its individuals when filtering a
resolution list; otherwise, we'll drop the collective and keep the
individuals.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterTruncations"></span>

`filterTruncations (lst, resolver)`

[parser.t](../file/parser.t.html)\[[1248](../source/parser.t.html#1248)\]



Filter a match list of results for truncated matches. If we have a mix
of truncated matches and exact matches, we'll keep only the exact
matches. If we have only truncated matches, though, we'll return the
list unchanged, as we don't have a better offer going.



<span id="getVerifyKeepers"></span>

`getVerifyKeepers (results)`

[parser.t](../file/parser.t.html)\[[1227](../source/parser.t.html#1227)\]



Filter a "verify" result list for the results we'd like to keep in the
final resolution of the noun phrase. This is called after we've run
through the verification process on the list of candidate matches, so
'lst' is a list of ResolveInfo objects, sorted in descending order of
logicalness.

By default, we keep only the items that are equally as logical as the
best item in the results. Since the items are sorted in descending order
of goodness, the best item is always the first item.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


