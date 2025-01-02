---
---
<span class="title">parser.t</span><span class="type">file</span>

[source file](../source/parser.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library: parser

This modules defines the language-independent parts of the command
parser.

Portions based on xiny.t, copyright 2002 by Steve Breslin and
incorporated by permission.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`ActorResolveResults`](../object/ActorResolveResults.html)`  `[`AllInContainerNounPhraseProd`](../object/AllInContainerNounPhraseProd.html)`  `[`AllPluralProd`](../object/AllPluralProd.html)`  `[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)`  `[`ArbitraryNounProd`](../object/ArbitraryNounProd.html)`  `[`BasicContainerResolver`](../object/BasicContainerResolver.html)`  `[`BasicPossessiveProd`](../object/BasicPossessiveProd.html)`  `[`BasicProd`](../object/BasicProd.html)`  `[`BasicResolveResults`](../object/BasicResolveResults.html)`  `[`BothPluralProd`](../object/BothPluralProd.html)`  `[`ButPossessiveProd`](../object/ButPossessiveProd.html)`  `[`ButProd`](../object/ButProd.html)`  `[`CancelCommandLineException`](../object/CancelCommandLineException.html)`  `[`commandPhrase(ambiguousConj)`](../object/commandPhrase(ambiguousConj).html)`  `[`commandPhrase(definiteConj)`](../object/commandPhrase(definiteConj).html)`  `[`CommandProd`](../object/CommandProd.html)`  `[`CommandProdWithActor`](../object/CommandProdWithActor.html)`  `[`CommandProdWithAmbiguousConj`](../object/CommandProdWithAmbiguousConj.html)`  `[`CommandProdWithDefiniteConj`](../object/CommandProdWithDefiniteConj.html)`  `[`CommandRanking`](../object/CommandRanking.html)`  `[`CommandRankingByProblem`](../object/CommandRankingByProblem.html)`  `[`CommandRankingByWeakness`](../object/CommandRankingByWeakness.html)`  `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)`  `[`ContainerNounPhraseProd`](../object/ContainerNounPhraseProd.html)`  `[`ContainerResolver`](../object/ContainerResolver.html)`  `[`DefiniteNounProd`](../object/DefiniteNounProd.html)`  `[`DefinitePluralProd`](../object/DefinitePluralProd.html)`  `[`DirectionProd`](../object/DirectionProd.html)`  `[`DisambigPossessiveProd`](../object/DisambigPossessiveProd.html)`  `[`DisambigProd`](../object/DisambigProd.html)`  `[`EmptyLiteralPhraseProd`](../object/EmptyLiteralPhraseProd.html)`  `[`EmptyNounPhraseProd`](../object/EmptyNounPhraseProd.html)`  `[`EmptyTopicPhraseProd`](../object/EmptyTopicPhraseProd.html)`  `[`EverythingButProd`](../object/EverythingButProd.html)`  `[`EverythingProd`](../object/EverythingProd.html)`  `[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)`  `[`ExactQuantifiedPossessivePluralProd`](../object/ExactQuantifiedPossessivePluralProd.html)`  `[`ExceptListProd`](../object/ExceptListProd.html)`  `[`ExceptResolver`](../object/ExceptResolver.html)`  `[`ExceptResults`](../object/ExceptResults.html)`  `[`firstCommandPhrase(commandOnly)`](../object/firstCommandPhrase(commandOnly).html)`  `[`FirstCommandProd`](../object/FirstCommandProd.html)`  `[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)`  `[`HerAdjProd`](../object/HerAdjProd.html)`  `[`HerProd`](../object/HerProd.html)`  `[`HerselfProd`](../object/HerselfProd.html)`  `[`HersNounProd`](../object/HersNounProd.html)`  `[`HimProd`](../object/HimProd.html)`  `[`HimselfProd`](../object/HimselfProd.html)`  `[`HisAdjProd`](../object/HisAdjProd.html)`  `[`HisNounProd`](../object/HisNounProd.html)`  `[`ImpliedActorNounPhraseProd`](../object/ImpliedActorNounPhraseProd.html)`  `[`IndefiniteNounButProd`](../object/IndefiniteNounButProd.html)`  `[`IndefiniteNounProd`](../object/IndefiniteNounProd.html)`  `[`ItProd`](../object/ItProd.html)`  `[`ItsAdjProd`](../object/ItsAdjProd.html)`  `[`ItselfProd`](../object/ItselfProd.html)`  `[`ItsNounProd`](../object/ItsNounProd.html)`  `[`LayeredNounPhraseProd`](../object/LayeredNounPhraseProd.html)`  `[`ListButProd`](../object/ListButProd.html)`  `[`LiteralProd`](../object/LiteralProd.html)`  `[`MeProd`](../object/MeProd.html)`  `[`MineNounProd`](../object/MineNounProd.html)`  `[`MissingObjectRanking`](../object/MissingObjectRanking.html)`  `[`MyAdjProd`](../object/MyAdjProd.html)`  `[`NounListProd`](../object/NounListProd.html)`  `[`NounPhraseProd`](../object/NounPhraseProd.html)`  `[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)`  `[`OopsResults`](../object/OopsResults.html)`  `[`ParseFailureException`](../object/ParseFailureException.html)`  `[`ParserException`](../object/ParserException.html)`  `[`PluralProd`](../object/PluralProd.html)`  `[`PossessiveNounProd`](../object/PossessiveNounProd.html)`  `[`PossessivePluralProd`](../object/PossessivePluralProd.html)`  `[`PossessivePronounAdjProd`](../object/PossessivePronounAdjProd.html)`  `[`PossessivePronounNounProd`](../object/PossessivePronounNounProd.html)`  `[`PreResolvedAmbigProd`](../object/PreResolvedAmbigProd.html)`  `[`PreResolvedLiteralProd`](../object/PreResolvedLiteralProd.html)`  `[`PreResolvedProd`](../object/PreResolvedProd.html)`  `[`PronounProd`](../object/PronounProd.html)`  `[`QuantifiedPluralProd`](../object/QuantifiedPluralProd.html)`  `[`ReflexivePronounProd`](../object/ReflexivePronounProd.html)`  `[`ReplacementCommandStringException`](../object/ReplacementCommandStringException.html)`  `[`ResolveAsker`](../object/ResolveAsker.html)`  `[`ResolveInfo`](../object/ResolveInfo.html)`  `[`ResolveResults`](../object/ResolveResults.html)`  `[`RetryCommandTokensException`](../object/RetryCommandTokensException.html)`  `[`SingleNounProd`](../object/SingleNounProd.html)`  `[`SingleNounWithListProd`](../object/SingleNounWithListProd.html)`  `[`StillToResolveItem`](../object/StillToResolveItem.html)`  `[`TerminateCommandException`](../object/TerminateCommandException.html)`  `[`TheirAdjProd`](../object/TheirAdjProd.html)`  `[`TheirsNounProd`](../object/TheirsNounProd.html)`  `[`ThemProd`](../object/ThemProd.html)`  `[`ThemselvesProd`](../object/ThemselvesProd.html)`  `[`TokenListProd`](../object/TokenListProd.html)`  `[`TopicProd`](../object/TopicProd.html)`  `[`TryAsActorResolveResults`](../object/TryAsActorResolveResults.html)`  `[`VagueContainerDefiniteNounPhraseProd`](../object/VagueContainerDefiniteNounPhraseProd.html)`  `[`VagueContainerIndefiniteNounPhraseProd`](../object/VagueContainerIndefiniteNounPhraseProd.html)`  `[`VagueContainerNounPhraseProd`](../object/VagueContainerNounPhraseProd.html)`  `[`VagueContainerResolver`](../object/VagueContainerResolver.html)`  `[`YouProd`](../object/YouProd.html)`  `[`YourAdjProd`](../object/YourAdjProd.html)`  `[`YoursNounProd`](../object/YoursNounProd.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`rankByActorSpecified`](../object/rankByActorSpecified.html)`  `[`rankByAllExcluded`](../object/rankByAllExcluded.html)`  `[`rankByAmbiguity`](../object/rankByAmbiguity.html)`  `[`rankByEmptyBut`](../object/rankByEmptyBut.html)`  `[`rankByEndAdj`](../object/rankByEndAdj.html)`  `[`rankByIndefinite`](../object/rankByIndefinite.html)`  `[`rankByInsufficient`](../object/rankByInsufficient.html)`  `[`rankByListForSingle`](../object/rankByListForSingle.html)`  `[`rankByLiteralLength`](../object/rankByLiteralLength.html)`  `[`rankByMiscWordList`](../object/rankByMiscWordList.html)`  `[`rankByMissing`](../object/rankByMissing.html)`  `[`rankByNonMatch`](../object/rankByNonMatch.html)`  `[`rankByNonMatchPoss`](../object/rankByNonMatchPoss.html)`  `[`rankByPluralTrunc`](../object/rankByPluralTrunc.html)`  `[`rankByPronoun`](../object/rankByPronoun.html)`  `[`rankBySubcommands`](../object/rankBySubcommands.html)`  `[`rankByTokenCount`](../object/rankByTokenCount.html)`  `[`rankByTrunc`](../object/rankByTrunc.html)`  `[`rankByUnwantedPlural`](../object/rankByUnwantedPlural.html)`  `[`rankByVerbStructure`](../object/rankByVerbStructure.html)`  `[`rankByVocabNonMatch`](../object/rankByVocabNonMatch.html)`  `[`rankByWeakness`](../object/rankByWeakness.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`getResolvedObjects`](#getResolvedObjects)`  `[`intersectNounLists`](#intersectNounLists)`  `[`spliceList`](#spliceList)`  `[`tryAskingForObject`](#tryAskingForObject)`  `[`tryOops`](#tryOops)`  `[`tryOopsMain`](#tryOopsMain)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="getResolvedObjects"></span>

`getResolvedObjects (lst)`

[parser.t](../file/parser.t.html)\[[485](../source/parser.t.html#485)\]

<div class="desc">

Extract the objects from a list obtained with resolveNouns(). Returns a
list composed only of the objects in the resolution information list.

</div>

<span id="intersectNounLists"></span>

`intersectNounLists (lst1, lst2)`

[parser.t](../file/parser.t.html)\[[447](../source/parser.t.html#447)\]

<div class="desc">

Intersect two resolved noun lists, returning a list consisting only of
the unique objects from the two lists.

</div>

<span id="spliceList"></span>

`spliceList (lst, idx, newItems)`

[parser.t](../file/parser.t.html)\[[4551](../source/parser.t.html#4551)\]

<div class="desc">

splice a new sublist into a list, replacing the item at 'idx'

</div>

<span id="tryAskingForObject"></span>

`tryAskingForObject (issuingActor, targetActor, resolver, results, responseProd)`

[parser.t](../file/parser.t.html)\[[4569](../source/parser.t.html#4569)\]

<div class="desc">

Try reading a response to a missing object question. If we successfully
read a noun phrase that matches the given production rule, we'll resolve
it, stash the resolved list in the resolvedObjects\_ property of the
match tree, and return the match tree. If they enter something that
doesn't look like a response to the question at all, we'll throw a
new-command exception to process it.

</div>

<span id="tryOops"></span>

`tryOops (tokList, issuingActor, targetActor, firstTokenIndex, cmdTokenList, cmdType)`

[parser.t](../file/parser.t.html)\[[4349](../source/parser.t.html#4349)\]

<div class="desc">

Look for an undefined word in a list of tokens, and give the player a
chance to correct a typo with "OOPS" if appropriate.

If we find an unknown word and we can prompt for interactive resolution,
we'll do so, and we'll throw an appropriate exception to handle the
response. If we can't resolve the missing word interactively, we'll
throw a parse failure exception.

If there are no undefined words in the command, we'll simply return.

tokList is the list of tokens under examination; this is a subset of the
full command token list. cmdTokenList is the full command token list, in
the usual tokenizer format. firstTokenIndex is the index of the first
token in tokList within cmdTokenList.

cmdType is an rmcXxx code giving the type of input we're reading.

</div>

<span id="tryOopsMain"></span>

`tryOopsMain (tokList, issuingActor, targetActor, firstTokenIndex, cmdTokenList, cmdType)`

[parser.t](../file/parser.t.html)\[[4360](../source/parser.t.html#4360)\]

<div class="desc">

main "oops" processor

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
