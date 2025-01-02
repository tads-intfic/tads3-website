---
layout: docs
---
<span class="title">en_us.t</span><span class="type">file</span>

[source file](../source/en_us.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

  
Past-tense extensions written by Michel Nizette, and incorporated by
permission.

TADS 3 Library - English (United States variant) implementation

This defines the parts of the TADS 3 library that are specific to the
English language as spoken (and written) in the United States.

We have attempted to isolate here the parts of the library that are
language-specific, so that translations to other languages or dialects
can be created by replacing this module, without changing the rest of
the library.

In addition to this module, a separate set of US English messages are
defined in the various msg_xxx.t modules. Those modules define messages
in English for different stylistic variations. For a given game, the
author must select one of the message modules - but only one, since they
all define variations of the same messages. To translate the library, a
translator must create at least one module defining those messages as
well; only one message module is required per language.

The past-tense system was contributed by Michel Nizette.

  
-----

"Watch an immigrant struggling with a second language or a stroke
patient with a first one, or deconstruct a snatch of baby talk, or try
to program a computer to understand English, and ordinary speech begins
to look different."

  
Stephen Pinker, "The Language Instinct"

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

[`aboutTopicPhrase(main)`](../object/aboutTopicPhrase(main).html)[`actorBadCommandPhrase(main)`](../object/actorBadCommandPhrase(main).html)[`adjPhrase(adj)`](../object/adjPhrase(adj).html)[`adjPhrase(adjAdj)`](../object/adjPhrase(adjAdj).html)[`AdjPhraseWithVocab`](../object/AdjPhraseWithVocab.html)[`adjWord(adj)`](../object/adjWord(adj).html)[`adjWord(adjAbbr)`](../object/adjWord(adjAbbr).html)[`adjWord(adjApostS)`](../object/adjWord(adjApostS).html)[`atSingleNoun(main)`](../object/atSingleNoun(main).html)[`ChildNameAsOther`](../object/ChildNameAsOther.html)[`commandOnlyConjunction(nonSentenceEnding)`](../object/commandOnlyConjunction(nonSentenceEnding).html)[`commandOnlyConjunction(sentenceEnding)`](../object/commandOnlyConjunction(sentenceEnding).html)[`commandOrNounConjunction(main)`](../object/commandOrNounConjunction(main).html)[`completeNounPhrase(main)`](../object/completeNounPhrase(main).html)[`completeNounPhrase(miscPrep)`](../object/completeNounPhrase(miscPrep).html)[`completeNounPhraseWithAll(main)`](../object/completeNounPhraseWithAll(main).html)[`completeNounPhraseWithoutAll(her)`](../object/completeNounPhraseWithoutAll(her).html)[`completeNounPhraseWithoutAll(herself)`](../object/completeNounPhraseWithoutAll(herself).html)[`completeNounPhraseWithoutAll(him)`](../object/completeNounPhraseWithoutAll(him).html)[`completeNounPhraseWithoutAll(himself)`](../object/completeNounPhraseWithoutAll(himself).html)[`completeNounPhraseWithoutAll(it)`](../object/completeNounPhraseWithoutAll(it).html)[`completeNounPhraseWithoutAll(itself)`](../object/completeNounPhraseWithoutAll(itself).html)[`completeNounPhraseWithoutAll(me)`](../object/completeNounPhraseWithoutAll(me).html)[`completeNounPhraseWithoutAll(qualified)`](../object/completeNounPhraseWithoutAll(qualified).html)[`completeNounPhraseWithoutAll(them)`](../object/completeNounPhraseWithoutAll(them).html)[`completeNounPhraseWithoutAll(themselves)`](../object/completeNounPhraseWithoutAll(themselves).html)[`completeNounPhraseWithoutAll(yourself)`](../object/completeNounPhraseWithoutAll(yourself).html)[`compoundNounPhrase(of)`](../object/compoundNounPhrase(of).html)[`compoundNounPhrase(simple)`](../object/compoundNounPhrase(simple).html)[`compoundPluralPhrase(of)`](../object/compoundPluralPhrase(of).html)[`compoundPluralPhrase(simple)`](../object/compoundPluralPhrase(simple).html)[`detPluralNounPhrase(main)`](../object/detPluralNounPhrase(main).html)[`detPluralOnlyNounPhrase(main)`](../object/detPluralOnlyNounPhrase(main).html)[`directionName(aft)`](../object/directionName(aft).html)[`directionName(down)`](../object/directionName(down).html)[`directionName(east)`](../object/directionName(east).html)[`directionName(fore)`](../object/directionName(fore).html)[`directionName(in)`](../object/directionName(in).html)[`directionName(north)`](../object/directionName(north).html)[`directionName(northeast)`](../object/directionName(northeast).html)[`directionName(northwest)`](../object/directionName(northwest).html)[`directionName(out)`](../object/directionName(out).html)[`directionName(port)`](../object/directionName(port).html)[`directionName(south)`](../object/directionName(south).html)[`directionName(southeast)`](../object/directionName(southeast).html)[`directionName(southwest)`](../object/directionName(southwest).html)[`directionName(starboard)`](../object/directionName(starboard).html)[`directionName(up)`](../object/directionName(up).html)[`directionName(west)`](../object/directionName(west).html)[`disambigList(list)`](../object/disambigList(list).html)[`disambigList(single)`](../object/disambigList(single).html)[`disambigListItem(noun)`](../object/disambigListItem(noun).html)[`disambigListItem(ordinal)`](../object/disambigListItem(ordinal).html)[`disambigListItem(plural)`](../object/disambigListItem(plural).html)[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)[`disambigOrdinalList(head)`](../object/disambigOrdinalList(head).html)[`disambigOrdinalList(tail)`](../object/disambigOrdinalList(tail).html)[`DisambigOrdProd`](../object/DisambigOrdProd.html)[`disambigPhrase(all)`](../object/disambigPhrase(all).html)[`disambigPhrase(any)`](../object/disambigPhrase(any).html)[`disambigPhrase(both)`](../object/disambigPhrase(both).html)[`disambigPhrase(list)`](../object/disambigPhrase(list).html)[`disambigPhrase(ordinalList)`](../object/disambigPhrase(ordinalList).html)[`DisambigVocabProd`](../object/DisambigVocabProd.html)[`EnTravelVia`](../object/EnTravelVia.html)[`exceptList(list)`](../object/exceptList(list).html)[`exceptList(single)`](../object/exceptList(single).html)[`exceptNounPhrase(singleComplete)`](../object/exceptNounPhrase(singleComplete).html)[`exceptNounPhrase(singlePossessive)`](../object/exceptNounPhrase(singlePossessive).html)[`explicitDetPluralNounPhrase(definite)`](../object/explicitDetPluralNounPhrase(definite).html)[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)[`explicitDetPluralNounPhrase(possessiveNumber)`](../object/explicitDetPluralNounPhrase(possessiveNumber).html)[`explicitDetPluralOnlyNounPhrase(definite)`](../object/explicitDetPluralOnlyNounPhrase(definite).html)[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)[`explicitDetPluralOnlyNounPhrase(possessive)`](../object/explicitDetPluralOnlyNounPhrase(possessive).html)[`explicitDetPluralOnlyNounPhrase(possessiveNumber)`](../object/explicitDetPluralOnlyNounPhrase(possessiveNumber).html)[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)[`forSingleNoun(main)`](../object/forSingleNoun(main).html)[`fromSingleNoun(main)`](../object/fromSingleNoun(main).html)[`GetVerbPhraseContext`](../object/GetVerbPhraseContext.html)[`ImplicitAnnouncementContext`](../object/ImplicitAnnouncementContext.html)[`implicitDetPluralOnlyNounPhrase(main)`](../object/implicitDetPluralOnlyNounPhrase(main).html)[`indetPluralNounPhrase(basic)`](../object/indetPluralNounPhrase(basic).html)[`indetPluralNounPhrase(locational)`](../object/indetPluralNounPhrase(locational).html)[`indetPluralOnlyNounPhrase(basic)`](../object/indetPluralOnlyNounPhrase(basic).html)[`indetPluralOnlyNounPhrase(locational)`](../object/indetPluralOnlyNounPhrase(locational).html)[`indetSingularNounPhrase(basic)`](../object/indetSingularNounPhrase(basic).html)[`indetSingularNounPhrase(locational)`](../object/indetSingularNounPhrase(locational).html)[`inSingleNoun(main)`](../object/inSingleNoun(main).html)[`ListImpCtx`](../object/ListImpCtx.html)[`literalAdjPhrase(literalAdj)`](../object/literalAdjPhrase(literalAdj).html)[`literalAdjPhrase(number)`](../object/literalAdjPhrase(number).html)[`literalAdjPhrase(string)`](../object/literalAdjPhrase(string).html)[`literalPhrase(empty)`](../object/literalPhrase(empty).html)[`literalPhrase(miscList)`](../object/literalPhrase(miscList).html)[`literalPhrase(string)`](../object/literalPhrase(string).html)[`mainDisambigPhrase(main)`](../object/mainDisambigPhrase(main).html)[`MessageHelper`](../object/MessageHelper.html)[`miscWordList(list)`](../object/miscWordList(list).html)[`miscWordList(wordOrNumber)`](../object/miscWordList(wordOrNumber).html)[`NameAsOther`](../object/NameAsOther.html)[`NameAsParent`](../object/NameAsParent.html)[`nonTerminalNounMultiList(multi)`](../object/nonTerminalNounMultiList(multi).html)[`nonTerminalNounMultiList(pair)`](../object/nonTerminalNounMultiList(pair).html)[`nounConjunction(main)`](../object/nounConjunction(main).html)[`nounList(empty)`](../object/nounList(empty).html)[`nounList(list)`](../object/nounList(list).html)[`nounList(nonTerminal)`](../object/nounList(nonTerminal).html)[`nounList(terminal)`](../object/nounList(terminal).html)[`nounMultiList(multi)`](../object/nounMultiList(multi).html)[`nounMultiList(nonterminal)`](../object/nounMultiList(nonterminal).html)[`nounPhrase(main)`](../object/nounPhrase(main).html)[`nounWord(noun)`](../object/nounWord(noun).html)[`nounWord(nounAbbr)`](../object/nounWord(nounAbbr).html)[`NounWordProd`](../object/NounWordProd.html)[`numberPhrase(digits)`](../object/numberPhrase(digits).html)[`numberPhrase(spelled)`](../object/numberPhrase(spelled).html)[`NumberProd`](../object/NumberProd.html)[`onSingleNoun(main)`](../object/onSingleNoun(main).html)[`oopsCommand(main)`](../object/oopsCommand(main).html)[`oopsPhrase(main)`](../object/oopsPhrase(main).html)[`oopsPhrase(missing)`](../object/oopsPhrase(missing).html)[`outOfSingleNoun(main)`](../object/outOfSingleNoun(main).html)[`pluralPhrase(main)`](../object/pluralPhrase(main).html)[`possessiveAdjPhrase(her)`](../object/possessiveAdjPhrase(her).html)[`possessiveAdjPhrase(his)`](../object/possessiveAdjPhrase(his).html)[`possessiveAdjPhrase(its)`](../object/possessiveAdjPhrase(its).html)[`possessiveAdjPhrase(my)`](../object/possessiveAdjPhrase(my).html)[`possessiveAdjPhrase(npApostropheS)`](../object/possessiveAdjPhrase(npApostropheS).html)[`possessiveAdjPhrase(ppApostropheS)`](../object/possessiveAdjPhrase(ppApostropheS).html)[`possessiveAdjPhrase(their)`](../object/possessiveAdjPhrase(their).html)[`possessiveAdjPhrase(your)`](../object/possessiveAdjPhrase(your).html)[`possessiveNounPhrase(hers)`](../object/possessiveNounPhrase(hers).html)[`possessiveNounPhrase(his)`](../object/possessiveNounPhrase(his).html)[`possessiveNounPhrase(its)`](../object/possessiveNounPhrase(its).html)[`possessiveNounPhrase(mine)`](../object/possessiveNounPhrase(mine).html)[`possessiveNounPhrase(npApostropheS)`](../object/possessiveNounPhrase(npApostropheS).html)[`possessiveNounPhrase(theirs)`](../object/possessiveNounPhrase(theirs).html)[`possessiveNounPhrase(yours)`](../object/possessiveNounPhrase(yours).html)[`poundNumberPhrase(main)`](../object/poundNumberPhrase(main).html)[`predicate(About)`](../object/predicate(About).html)[`predicate(Again)`](../object/predicate(Again).html)[`predicate(AskAbout)`](../object/predicate(AskAbout).html)[`predicate(AskAboutImplicit)`](../object/predicate(AskAboutImplicit).html)[`predicate(AskAboutWhat)`](../object/predicate(AskAboutWhat).html)[`predicate(AskFor)`](../object/predicate(AskFor).html)[`predicate(AskVague)`](../object/predicate(AskVague).html)[`predicate(AskWhomFor)`](../object/predicate(AskWhomFor).html)[`predicate(AttachTo)`](../object/predicate(AttachTo).html)[`predicate(AttachToWhat)`](../object/predicate(AttachToWhat).html)[`predicate(Attack)`](../object/predicate(Attack).html)[`predicate(AttackWith)`](../object/predicate(AttackWith).html)[`predicate(Board)`](../object/predicate(Board).html)[`predicate(Break)`](../object/predicate(Break).html)[`predicate(Burn)`](../object/predicate(Burn).html)[`predicate(BurnWith)`](../object/predicate(BurnWith).html)[`predicate(Clean)`](../object/predicate(Clean).html)[`predicate(CleanWith)`](../object/predicate(CleanWith).html)[`predicate(Climb)`](../object/predicate(Climb).html)[`predicate(ClimbDown)`](../object/predicate(ClimbDown).html)[`predicate(ClimbDownWhat)`](../object/predicate(ClimbDownWhat).html)[`predicate(ClimbUp)`](../object/predicate(ClimbUp).html)[`predicate(ClimbUpWhat)`](../object/predicate(ClimbUpWhat).html)[`predicate(Close)`](../object/predicate(Close).html)[`predicate(Consult)`](../object/predicate(Consult).html)[`predicate(ConsultAbout)`](../object/predicate(ConsultAbout).html)[`predicate(ConsultWhatAbout)`](../object/predicate(ConsultWhatAbout).html)[`predicate(Credits)`](../object/predicate(Credits).html)[`predicate(CutWith)`](../object/predicate(CutWith).html)[`predicate(CutWithWhat)`](../object/predicate(CutWithWhat).html)[`predicate(Detach)`](../object/predicate(Detach).html)[`predicate(DetachFrom)`](../object/predicate(DetachFrom).html)[`predicate(Dig)`](../object/predicate(Dig).html)[`predicate(DigWith)`](../object/predicate(DigWith).html)[`predicate(Doff)`](../object/predicate(Doff).html)[`predicate(Drink)`](../object/predicate(Drink).html)[`predicate(Drop)`](../object/predicate(Drop).html)[`predicate(Eat)`](../object/predicate(Eat).html)[`predicate(Enter)`](../object/predicate(Enter).html)[`predicate(EnterOn)`](../object/predicate(EnterOn).html)[`predicate(EnterOnWhat)`](../object/predicate(EnterOnWhat).html)[`predicate(Examine)`](../object/predicate(Examine).html)[`predicate(Exits)`](../object/predicate(Exits).html)[`predicate(ExitsMode)`](../object/predicate(ExitsMode).html)[`predicate(Extinguish)`](../object/predicate(Extinguish).html)[`predicate(Fasten)`](../object/predicate(Fasten).html)[`predicate(FastenTo)`](../object/predicate(FastenTo).html)[`predicate(Feel)`](../object/predicate(Feel).html)[`predicate(Flip)`](../object/predicate(Flip).html)[`predicate(Follow)`](../object/predicate(Follow).html)[`predicate(Footnote)`](../object/predicate(Footnote).html)[`predicate(FootnotesFull)`](../object/predicate(FootnotesFull).html)[`predicate(FootnotesMedium)`](../object/predicate(FootnotesMedium).html)[`predicate(FootnotesOff)`](../object/predicate(FootnotesOff).html)[`predicate(FootnotesStatus)`](../object/predicate(FootnotesStatus).html)[`predicate(FullScore)`](../object/predicate(FullScore).html)[`predicate(GetOffOf)`](../object/predicate(GetOffOf).html)[`predicate(GetOut)`](../object/predicate(GetOut).html)[`predicate(GetOutOf)`](../object/predicate(GetOutOf).html)[`predicate(GiveTo)`](../object/predicate(GiveTo).html)[`predicate(GiveToType2)`](../object/predicate(GiveToType2).html)[`predicate(GiveToWhom)`](../object/predicate(GiveToWhom).html)[`predicate(GoBack)`](../object/predicate(GoBack).html)[`predicate(Goodbye)`](../object/predicate(Goodbye).html)[`predicate(GoThrough)`](../object/predicate(GoThrough).html)[`predicate(Hello)`](../object/predicate(Hello).html)[`predicate(Hint)`](../object/predicate(Hint).html)[`predicate(HintsOff)`](../object/predicate(HintsOff).html)[`predicate(In)`](../object/predicate(In).html)[`predicate(Inventory)`](../object/predicate(Inventory).html)[`predicate(InventoryTall)`](../object/predicate(InventoryTall).html)[`predicate(InventoryWide)`](../object/predicate(InventoryWide).html)[`predicate(Jump)`](../object/predicate(Jump).html)[`predicate(JumpOff)`](../object/predicate(JumpOff).html)[`predicate(JumpOffI)`](../object/predicate(JumpOffI).html)[`predicate(JumpOver)`](../object/predicate(JumpOver).html)[`predicate(Kiss)`](../object/predicate(Kiss).html)[`predicate(Lie)`](../object/predicate(Lie).html)[`predicate(LieOn)`](../object/predicate(LieOn).html)[`predicate(Light)`](../object/predicate(Light).html)[`predicate(ListenImplicit)`](../object/predicate(ListenImplicit).html)[`predicate(ListenTo)`](../object/predicate(ListenTo).html)[`predicate(Lock)`](../object/predicate(Lock).html)[`predicate(LockWith)`](../object/predicate(LockWith).html)[`predicate(Look)`](../object/predicate(Look).html)[`predicate(LookBehind)`](../object/predicate(LookBehind).html)[`predicate(LookIn)`](../object/predicate(LookIn).html)[`predicate(LookThrough)`](../object/predicate(LookThrough).html)[`predicate(LookUnder)`](../object/predicate(LookUnder).html)[`predicate(Move)`](../object/predicate(Move).html)[`predicate(MoveTo)`](../object/predicate(MoveTo).html)[`predicate(MoveWith)`](../object/predicate(MoveWith).html)[`predicate(No)`](../object/predicate(No).html)[`predicate(Notify)`](../object/predicate(Notify).html)[`predicate(NotifyOff)`](../object/predicate(NotifyOff).html)[`predicate(NotifyOn)`](../object/predicate(NotifyOn).html)[`predicate(Oops)`](../object/predicate(Oops).html)[`predicate(OopsOnly)`](../object/predicate(OopsOnly).html)[`predicate(Open)`](../object/predicate(Open).html)[`predicate(Out)`](../object/predicate(Out).html)[`predicate(Pause)`](../object/predicate(Pause).html)[`predicate(PlugIn)`](../object/predicate(PlugIn).html)[`predicate(PlugInto)`](../object/predicate(PlugInto).html)[`predicate(PlugIntoWhat)`](../object/predicate(PlugIntoWhat).html)[`predicate(Port)`](../object/predicate(Port).html)[`predicate(Pour)`](../object/predicate(Pour).html)[`predicate(PourInto)`](../object/predicate(PourInto).html)[`predicate(PourOnto)`](../object/predicate(PourOnto).html)[`predicate(Pull)`](../object/predicate(Pull).html)[`predicate(Push)`](../object/predicate(Push).html)[`predicate(PushTravelClimbDown)`](../object/predicate(PushTravelClimbDown).html)[`predicate(PushTravelClimbUp)`](../object/predicate(PushTravelClimbUp).html)[`predicate(PushTravelDir)`](../object/predicate(PushTravelDir).html)[`predicate(PushTravelEnter)`](../object/predicate(PushTravelEnter).html)[`predicate(PushTravelGetOutOf)`](../object/predicate(PushTravelGetOutOf).html)[`predicate(PushTravelThrough)`](../object/predicate(PushTravelThrough).html)[`predicate(PutBehind)`](../object/predicate(PutBehind).html)[`predicate(PutIn)`](../object/predicate(PutIn).html)[`predicate(PutInWhat)`](../object/predicate(PutInWhat).html)[`predicate(PutOn)`](../object/predicate(PutOn).html)[`predicate(PutUnder)`](../object/predicate(PutUnder).html)[`predicate(Quit)`](../object/predicate(Quit).html)[`predicate(Read)`](../object/predicate(Read).html)[`predicate(Record)`](../object/predicate(Record).html)[`predicate(RecordEvents)`](../object/predicate(RecordEvents).html)[`predicate(RecordEventsString)`](../object/predicate(RecordEventsString).html)[`predicate(RecordOff)`](../object/predicate(RecordOff).html)[`predicate(RecordString)`](../object/predicate(RecordString).html)[`predicate(Remove)`](../object/predicate(Remove).html)[`predicate(ReplayQuiet)`](../object/predicate(ReplayQuiet).html)[`predicate(ReplayString)`](../object/predicate(ReplayString).html)[`predicate(Restart)`](../object/predicate(Restart).html)[`predicate(Restore)`](../object/predicate(Restore).html)[`predicate(RestoreDefaults)`](../object/predicate(RestoreDefaults).html)[`predicate(RestoreString)`](../object/predicate(RestoreString).html)[`predicate(Save)`](../object/predicate(Save).html)[`predicate(SaveDefaults)`](../object/predicate(SaveDefaults).html)[`predicate(SaveString)`](../object/predicate(SaveString).html)[`predicate(Score)`](../object/predicate(Score).html)[`predicate(Screw)`](../object/predicate(Screw).html)[`predicate(ScrewWith)`](../object/predicate(ScrewWith).html)[`predicate(Script)`](../object/predicate(Script).html)[`predicate(ScriptOff)`](../object/predicate(ScriptOff).html)[`predicate(ScriptString)`](../object/predicate(ScriptString).html)[`predicate(Search)`](../object/predicate(Search).html)[`predicate(Set)`](../object/predicate(Set).html)[`predicate(SetTo)`](../object/predicate(SetTo).html)[`predicate(ShowTo)`](../object/predicate(ShowTo).html)[`predicate(ShowToType2)`](../object/predicate(ShowToType2).html)[`predicate(ShowToWhom)`](../object/predicate(ShowToWhom).html)[`predicate(Sit)`](../object/predicate(Sit).html)[`predicate(SitOn)`](../object/predicate(SitOn).html)[`predicate(Sleep)`](../object/predicate(Sleep).html)[`predicate(Smell)`](../object/predicate(Smell).html)[`predicate(SmellImplicit)`](../object/predicate(SmellImplicit).html)[`predicate(Stand)`](../object/predicate(Stand).html)[`predicate(StandOn)`](../object/predicate(StandOn).html)[`predicate(Starboard)`](../object/predicate(Starboard).html)[`predicate(Strike)`](../object/predicate(Strike).html)[`predicate(Switch)`](../object/predicate(Switch).html)[`predicate(Take)`](../object/predicate(Take).html)[`predicate(TakeFrom)`](../object/predicate(TakeFrom).html)[`predicate(TalkTo)`](../object/predicate(TalkTo).html)[`predicate(TalkToWhat)`](../object/predicate(TalkToWhat).html)[`predicate(Taste)`](../object/predicate(Taste).html)[`predicate(TellAbout)`](../object/predicate(TellAbout).html)[`predicate(TellAboutImplicit)`](../object/predicate(TellAboutImplicit).html)[`predicate(TellAboutWhat)`](../object/predicate(TellAboutWhat).html)[`predicate(TellVague)`](../object/predicate(TellVague).html)[`predicate(Terse)`](../object/predicate(Terse).html)[`predicate(Throw)`](../object/predicate(Throw).html)[`predicate(ThrowAt)`](../object/predicate(ThrowAt).html)[`predicate(ThrowDir)`](../object/predicate(ThrowDir).html)[`predicate(ThrowDirDown)`](../object/predicate(ThrowDirDown).html)[`predicate(ThrowTo)`](../object/predicate(ThrowTo).html)[`predicate(ThrowToType2)`](../object/predicate(ThrowToType2).html)[`predicate(TipsOff)`](../object/predicate(TipsOff).html)[`predicate(TipsOn)`](../object/predicate(TipsOn).html)[`predicate(Topics)`](../object/predicate(Topics).html)[`predicate(Travel)`](../object/predicate(Travel).html)[`predicate(Turn)`](../object/predicate(Turn).html)[`predicate(TurnOff)`](../object/predicate(TurnOff).html)[`predicate(TurnOn)`](../object/predicate(TurnOn).html)[`predicate(TurnTo)`](../object/predicate(TurnTo).html)[`predicate(TurnWith)`](../object/predicate(TurnWith).html)[`predicate(TypeLiteralOn)`](../object/predicate(TypeLiteralOn).html)[`predicate(TypeLiteralOnWhat)`](../object/predicate(TypeLiteralOnWhat).html)[`predicate(TypeOn)`](../object/predicate(TypeOn).html)[`predicate(Undo)`](../object/predicate(Undo).html)[`predicate(Unfasten)`](../object/predicate(Unfasten).html)[`predicate(UnfastenFrom)`](../object/predicate(UnfastenFrom).html)[`predicate(Unlock)`](../object/predicate(Unlock).html)[`predicate(UnlockWith)`](../object/predicate(UnlockWith).html)[`predicate(Unplug)`](../object/predicate(Unplug).html)[`predicate(UnplugFrom)`](../object/predicate(UnplugFrom).html)[`predicate(Unscrew)`](../object/predicate(Unscrew).html)[`predicate(UnscrewWith)`](../object/predicate(UnscrewWith).html)[`predicate(VagueTravel)`](../object/predicate(VagueTravel).html)[`predicate(Verbose)`](../object/predicate(Verbose).html)[`predicate(Version)`](../object/predicate(Version).html)[`predicate(Wait)`](../object/predicate(Wait).html)[`predicate(Wear)`](../object/predicate(Wear).html)[`predicate(Yell)`](../object/predicate(Yell).html)[`predicate(Yes)`](../object/predicate(Yes).html)[`PrepSingleNounProd`](../object/PrepSingleNounProd.html)[`PrepSingleTopicProd`](../object/PrepSingleTopicProd.html)[`qualifiedNounPhrase(main)`](../object/qualifiedNounPhrase(main).html)[`qualifiedPluralNounPhrase(all)`](../object/qualifiedPluralNounPhrase(all).html)[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)[`qualifiedPluralNounPhrase(determiner)`](../object/qualifiedPluralNounPhrase(determiner).html)[`qualifiedPluralNounPhrase(theOnesIn)`](../object/qualifiedPluralNounPhrase(theOnesIn).html)[`qualifiedSingularNounPhrase(anyOneIn)`](../object/qualifiedSingularNounPhrase(anyOneIn).html)[`qualifiedSingularNounPhrase(anyPlural)`](../object/qualifiedSingularNounPhrase(anyPlural).html)[`qualifiedSingularNounPhrase(arbitrary)`](../object/qualifiedSingularNounPhrase(arbitrary).html)[`qualifiedSingularNounPhrase(definite)`](../object/qualifiedSingularNounPhrase(definite).html)[`qualifiedSingularNounPhrase(indefinite)`](../object/qualifiedSingularNounPhrase(indefinite).html)[`qualifiedSingularNounPhrase(possessive)`](../object/qualifiedSingularNounPhrase(possessive).html)[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)[`quotedStringPhrase(main)`](../object/quotedStringPhrase(main).html)[`simpleNounPhrase(adj)`](../object/simpleNounPhrase(adj).html)[`simpleNounPhrase(adjAndOne)`](../object/simpleNounPhrase(adjAndOne).html)[`simpleNounPhrase(adjNP)`](../object/simpleNounPhrase(adjNP).html)[`simpleNounPhrase(empty)`](../object/simpleNounPhrase(empty).html)[`simpleNounPhrase(misc)`](../object/simpleNounPhrase(misc).html)[`simpleNounPhrase(noun)`](../object/simpleNounPhrase(noun).html)[`simpleNounPhrase(nounAndNumber)`](../object/simpleNounPhrase(nounAndNumber).html)[`simpleNounPhrase(number)`](../object/simpleNounPhrase(number).html)[`simpleNounPhrase(numberAndNoun)`](../object/simpleNounPhrase(numberAndNoun).html)[`simplePluralPhrase(adj)`](../object/simplePluralPhrase(adj).html)[`simplePluralPhrase(adjAndOnes)`](../object/simplePluralPhrase(adjAndOnes).html)[`simplePluralPhrase(empty)`](../object/simplePluralPhrase(empty).html)[`simplePluralPhrase(misc)`](../object/simplePluralPhrase(misc).html)[`simplePluralPhrase(plural)`](../object/simplePluralPhrase(plural).html)[`simplePluralPhrase(poundNum)`](../object/simplePluralPhrase(poundNum).html)[`singleNoun(empty)`](../object/singleNoun(empty).html)[`singleNoun(multiple)`](../object/singleNoun(multiple).html)[`singleNoun(normal)`](../object/singleNoun(normal).html)[`singleNounOnly(main)`](../object/singleNounOnly(main).html)[`spelledHundred(aHundred)`](../object/spelledHundred(aHundred).html)[`spelledHundred(aHundredPlus)`](../object/spelledHundred(aHundredPlus).html)[`spelledHundred(hundreds)`](../object/spelledHundred(hundreds).html)[`spelledHundred(hundredsPlus)`](../object/spelledHundred(hundredsPlus).html)[`spelledHundred(small)`](../object/spelledHundred(small).html)[`spelledMillion(aMillion)`](../object/spelledMillion(aMillion).html)[`spelledMillion(aMillionAndSmall)`](../object/spelledMillion(aMillionAndSmall).html)[`spelledMillion(millions)`](../object/spelledMillion(millions).html)[`spelledMillion(millionsAndSmall)`](../object/spelledMillion(millionsAndSmall).html)[`spelledMillion(millionsPlus)`](../object/spelledMillion(millionsPlus).html)[`spelledNumber(main)`](../object/spelledNumber(main).html)[`spelledSmallNumber(digit)`](../object/spelledSmallNumber(digit).html)[`spelledSmallNumber(teen)`](../object/spelledSmallNumber(teen).html)[`spelledSmallNumber(tens)`](../object/spelledSmallNumber(tens).html)[`spelledSmallNumber(tensAndUnits)`](../object/spelledSmallNumber(tensAndUnits).html)[`spelledSmallNumber(zero)`](../object/spelledSmallNumber(zero).html)[`spelledThousand(aThousand)`](../object/spelledThousand(aThousand).html)[`spelledThousand(aThousandAndSmall)`](../object/spelledThousand(aThousandAndSmall).html)[`spelledThousand(thousands)`](../object/spelledThousand(thousands).html)[`spelledThousand(thousandsAndSmall)`](../object/spelledThousand(thousandsAndSmall).html)[`spelledThousand(thousandsPlus)`](../object/spelledThousand(thousandsPlus).html)[`StrikeAction`](../object/StrikeAction.html)[`terminalNounPhrase(allBut)`](../object/terminalNounPhrase(allBut).html)[`terminalNounPhrase(anyBut)`](../object/terminalNounPhrase(anyBut).html)[`terminalNounPhrase(pluralExcept)`](../object/terminalNounPhrase(pluralExcept).html)[`throughSingleNoun(main)`](../object/throughSingleNoun(main).html)[`topicPhrase(main)`](../object/topicPhrase(main).html)[`topicPhrase(misc)`](../object/topicPhrase(misc).html)[`toSingleNoun(main)`](../object/toSingleNoun(main).html)[`withSingleNoun(main)`](../object/withSingleNoun(main).html)
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

[`askingImpCtx`](../object/askingImpCtx.html)[`cmdTokenizer`](../object/cmdTokenizer.html)[`defaultGetVerbPhraseContext`](../object/defaultGetVerbPhraseContext.html)[`enterOnWhatAsker`](../object/enterOnWhatAsker.html)[`langMessageBuilder`](../object/langMessageBuilder.html)[`languageGlobals`](../object/languageGlobals.html)[`lightSourceStateOff`](../object/lightSourceStateOff.html)[`lightSourceStateOn`](../object/lightSourceStateOn.html)[`matchStateLit`](../object/matchStateLit.html)[`matchStateUnlit`](../object/matchStateUnlit.html)[`standardImpCtx`](../object/standardImpCtx.html)[`tryingImpCtx`](../object/tryingImpCtx.html)[`typographicalOutputFilter`](../object/typographicalOutputFilter.html)[`unwornState`](../object/unwornState.html)[`wornState`](../object/wornState.html)
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

[`intOrdinal`](#intOrdinal)[`intToDecimal`](#intToDecimal)[`parseInt`](#parseInt)[`parseIntTokens`](#parseIntTokens)[`spellInt`](#spellInt)[`spellIntBelow`](#spellIntBelow)[`spellIntBelowExt`](#spellIntBelowExt)[`spellIntExt`](#spellIntExt)[`spellIntOrdinal`](#spellIntOrdinal)[`spellIntOrdinalExt`](#spellIntOrdinalExt)[`stripQuotesFrom`](#stripQuotesFrom)[`withTense`](#withTense)[`yesOrNo`](#yesOrNo)

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="intOrdinal"></span>

`intOrdinal (n)`

[en_us.t](../file/en_us.t.html)\[[4580](../source/en_us.t.html#4580)\]

<div class="desc">

Return a string giving the numeric ordinal representation of a number:
1st, 2nd, 3rd, 4th, etc.

</div>

<span id="intToDecimal"></span>

`intToDecimal (val, flags)`

[en_us.t](../file/en_us.t.html)\[[4361](../source/en_us.t.html#4361)\]

<div class="desc">

Format a number as a string of decimal digits. The DigitFormatXxx flags
specify how the number is to be formatted.\`

</div>

<span id="parseInt"></span>

`parseInt (str)`

[en_us.t](../file/en_us.t.html)\[[4683](../source/en_us.t.html#4683)\]

<div class="desc">

Parse a spelled-out number. This is essentially the reverse of
spellInt() and related functions: we take a string that contains a
spelled-out number and return the integer value. This uses the command
parser's spelled-out number rules, so we can parse anything that would
be recognized as a number in a command.

If the string contains numerals, we'll treat it as a number in digit
format: for example, if it contains '789', we'll return 789.

If the string doesn't parse as a number, we return nil.

</div>

<span id="parseIntTokens"></span>

`parseIntTokens (toks)`

[en_us.t](../file/en_us.t.html)\[[4709](../source/en_us.t.html#4709)\]

<div class="desc">

Parse a spelled-out number that's given as a token list (as returned
from Tokenizer.tokenize). If we can successfully parse the token list as
a number, we'll return the integer value. If not, we'll return nil.

</div>

<span id="spellInt"></span>

`spellInt (val)`

[en_us.t](../file/en_us.t.html)\[[4310](../source/en_us.t.html#4310)\]

<div class="desc">

Spell out an integer number in words. Returns a string with the
spelled-out number.

Note that this simple version of the function uses the default options.
If you want to specify non-default options with the SpellIntXxx flags,
you can call spellIntExt().

</div>

<span id="spellIntBelow"></span>

`spellIntBelow (val, threshold)`

[en_us.t](../file/en_us.t.html)\[[4326](../source/en_us.t.html#4326)\]

<div class="desc">

Spell out an integer number in words, but only if it's below the given
threshold. It's often awkward in prose to spell out large numbers, but
exactly what constitutes a large number depends on context, so this
routine lets the caller specify the threshold.

If the absolute value of val is less than (not equal to) the threshold
value, we'll return a string with the number spelled out. If the
absolute value is greater than or equal to the threshold value, we'll
return a string representing the number in decimal digits.

</div>

<span id="spellIntBelowExt"></span>

`spellIntBelowExt (val, threshold, spellFlags, digitFlags)`

[en_us.t](../file/en_us.t.html)\[[4337](../source/en_us.t.html#4337)\]

<div class="desc">

Spell out an integer number in words if it's below a threshold, using
the spellIntXxx flags given in spellFlags to control the spelled-out
format, and using the DigitFormatXxx flags in digitFlags to control the
digit format.

</div>

<span id="spellIntExt"></span>

`spellIntExt (val, flags)`

[en_us.t](../file/en_us.t.html)\[[4425](../source/en_us.t.html#4425)\]

<div class="desc">

Spell out an integer number - "extended" interface with flags. The
"flags" argument is a (bitwise-OR'd) combination of SpellIntXxx values,
specifying the desired format of the result.

</div>

<span id="spellIntOrdinal"></span>

`spellIntOrdinal (n)`

[en_us.t](../file/en_us.t.html)\[[4625](../source/en_us.t.html#4625)\]

<div class="desc">

Return a string giving a fully spelled-out ordinal form of a number:
first, second, third, etc.

</div>

<span id="spellIntOrdinalExt"></span>

`spellIntOrdinalExt (n, flags)`

[en_us.t](../file/en_us.t.html)\[[4635](../source/en_us.t.html#4635)\]

<div class="desc">

Return a string giving a fully spelled-out ordinal form of a number:
first, second, third, etc. This form takes the same flag values as
spellIntExt().

</div>

<span id="stripQuotesFrom"></span>

`stripQuotesFrom (str)`

[en_us.t](../file/en_us.t.html)\[[7106](../source/en_us.t.html#7106)\]

<div class="desc">

Service routine: strip quotes from a \*possibly\* quoted string. If the
string starts with a quote, we'll remove the open quote. If it starts
with a quote and it ends with a corresponding close quote, we'll remove
that as well.

</div>

<span id="withTense"></span>

`withTense (usePastTense, callback)`

[en_us.t](../file/en_us.t.html)\[[4258](../source/en_us.t.html#4258)\]

<div class="desc">

Temporarily override the current narrative tense and invoke a callback
function.

</div>

<span id="yesOrNo"></span>

`yesOrNo ( )`

[en_us.t](../file/en_us.t.html)\[[63](../source/en_us.t.html#63)\]

<div class="desc">

Simple yes/no confirmation. The caller must display a prompt; we'll read
a command line response, then return true if it's an affirmative
response, nil if not.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
