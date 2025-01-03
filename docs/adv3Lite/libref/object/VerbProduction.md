---
layout: docs
---
<span class="title">VerbProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3957](../source/parser.t.html#3957)\],
[grammar.t](../file/grammar.t.html)\[[3669](../source/grammar.t.html#3669)\]

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



VerbProduction is a special Production subclass for verb (predicate)
rules. This production has special processing for building out the
object phrases making up the verb.

Each instance should have an 'action' property giving the Action object
associated with the verb rule. This is the Action that will be performed
when the parser matches the command input to the rule.

Some languages, such as English, have "positional" predicate grammars.
This means that the position of a noun phrase in the sentence determines
its role (direct object, indirect object, etc). In the grammar for a
positional language, each predicate rule simply needs to plug in a
singleNoun or nounList production (as appropriate) in each noun phrase
position, with its '-\>' property set to correspond to the role:
-\>dobjMatch for a direct object, -\>iobjMatch for an indirect object,
and -\>accMatch for an accessory object.

Some languages, such as German and Latin, identify the role of a noun
phrase using grammatical case. This means that the articles change form
in the different roles, or that the nouns themselves are inflected (they
have different forms, such as added suffixes) according to role. Case
languages tend to have flexible predicate word order, because the case
markers tell you the role of each noun even if the nouns are rearranged.
For this reason, it can be tedious to write a grammar for a case
language the way we do for English, where the word ordering for a given
verb is so rigid that we can easily just write out each possible
phrasing manually. For a case language, you'll probably instead want to
write a set of generic verb rules that cover \*all\* verbs (i.e., you
leave the verb word itself as a sub-production) in all of the different
word orders, and use the case tagging in the language to determine the
role of each noun phrase. For this style of grammar, the grammar must
set the property nounPhraseRole in the top-level rule for each noun
phrase case; set this to DirectObject, IndirectObject, AccessoryObject,
etc., according to the role denoted by the case.

Still other languages, such as Japanese, use particles (grammar function
words) to denote the role of each noun phrase in the sentence. This is
similar to grammatical case, but the role information is encoded in
separate words (the particles) rather than in noun affixes, so the nouns
themselves aren't inflected. You can handle this type of language
roughly the same way you'd handle a case language. Create generic rules
that cover all verbs, then create a grammar rule for each
particle-plus-noun structure. In each particle-plus-noun phrase's
top-level rule, set the nounPhraseRole property to the appropriate role
object (DirectObject, etc).

*Modified in
[grammar.t](../file/grammar.t.html)\[[3669](../source/grammar.t.html#3669)\]:*  
English-specific VerbProduction additions

`class `**`VerbProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VerbProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`VerbProduction`**  
[`defaultVerbPhrase(noun)`](../object/defaultVerbPhrase(noun).html)  
[`EnTravelVia`](../object/EnTravelVia.html)  
[`VerbRule(About)`](../object/VerbRule(About).html)  
[`VerbRule(Again)`](../object/VerbRule(Again).html)  
[`VerbRule(AskAbout)`](../object/VerbRule(AskAbout).html)  
[`VerbRule(AskAboutImplicit)`](../object/VerbRule(AskAboutImplicit).html)  
[`VerbRule(AskAboutWhat)`](../object/VerbRule(AskAboutWhat).html)  
[`VerbRule(AskFor)`](../object/VerbRule(AskFor).html)  
[`VerbRule(AskForImplicit)`](../object/VerbRule(AskForImplicit).html)  
[`VerbRule(AskVague)`](../object/VerbRule(AskVague).html)  
[`VerbRule(AskWhomFor)`](../object/VerbRule(AskWhomFor).html)  
[`VerbRule(Attach)`](../object/VerbRule(Attach).html)  
[`VerbRule(AttachTo)`](../object/VerbRule(AttachTo).html)  
[`VerbRule(Attack)`](../object/VerbRule(Attack).html)  
[`VerbRule(AttackWith)`](../object/VerbRule(AttackWith).html)  
[`VerbRule(AuxQuery)`](../object/VerbRule(AuxQuery).html)  
[`VerbRule(Board)`](../object/VerbRule(Board).html)  
[`VerbRule(Break)`](../object/VerbRule(Break).html)  
[`VerbRule(Brief)`](../object/VerbRule(Brief).html)  
[`VerbRule(Burn)`](../object/VerbRule(Burn).html)  
[`VerbRule(BurnWith)`](../object/VerbRule(BurnWith).html)  
[`VerbRule(Clean)`](../object/VerbRule(Clean).html)  
[`VerbRule(CleanWith)`](../object/VerbRule(CleanWith).html)  
[`VerbRule(Climb)`](../object/VerbRule(Climb).html)  
[`VerbRule(ClimbDown)`](../object/VerbRule(ClimbDown).html)  
[`VerbRule(ClimbDownWhat)`](../object/VerbRule(ClimbDownWhat).html)  
[`VerbRule(ClimbUp)`](../object/VerbRule(ClimbUp).html)  
[`VerbRule(ClimbUpWhat)`](../object/VerbRule(ClimbUpWhat).html)  
[`VerbRule(Close)`](../object/VerbRule(Close).html)  
[`VerbRule(CmdMenu)`](../object/VerbRule(CmdMenu).html)  
[`VerbRule(ConsultAbout)`](../object/VerbRule(ConsultAbout).html)  
[`VerbRule(ConsultWhatAbout)`](../object/VerbRule(ConsultWhatAbout).html)  
[`VerbRule(Continue)`](../object/VerbRule(Continue).html)  
[`VerbRule(Credits)`](../object/VerbRule(Credits).html)  
[`VerbRule(Cut)`](../object/VerbRule(Cut).html)  
[`VerbRule(CutWith)`](../object/VerbRule(CutWith).html)  
[`VerbRule(Debug)`](../object/VerbRule(Debug).html)  
[`VerbRule(DebugI)`](../object/VerbRule(DebugI).html)  
[`VerbRule(Detach)`](../object/VerbRule(Detach).html)  
[`VerbRule(DetachFrom)`](../object/VerbRule(DetachFrom).html)  
[`VerbRule(Dig)`](../object/VerbRule(Dig).html)  
[`VerbRule(DigWith)`](../object/VerbRule(DigWith).html)  
[`VerbRule(Doff)`](../object/VerbRule(Doff).html)  
[`VerbRule(Drink)`](../object/VerbRule(Drink).html)  
[`VerbRule(Drop)`](../object/VerbRule(Drop).html)  
[`VerbRule(Eat)`](../object/VerbRule(Eat).html)  
[`VerbRule(Enter)`](../object/VerbRule(Enter).html)  
[`VerbRule(EnterOn)`](../object/VerbRule(EnterOn).html)  
[`VerbRule(Evaluate)`](../object/VerbRule(Evaluate).html)  
[`VerbRule(Examine)`](../object/VerbRule(Examine).html)  
[`VerbRule(Exits)`](../object/VerbRule(Exits).html)  
[`VerbRule(ExitsColour)`](../object/VerbRule(ExitsColour).html)  
[`VerbRule(ExitsMode)`](../object/VerbRule(ExitsMode).html)  
[`VerbRule(Extinguish)`](../object/VerbRule(Extinguish).html)  
[`VerbRule(ExtraHints)`](../object/VerbRule(ExtraHints).html)  
[`VerbRule(Fasten)`](../object/VerbRule(Fasten).html)  
[`VerbRule(FastenTo)`](../object/VerbRule(FastenTo).html)  
[`VerbRule(Feel)`](../object/VerbRule(Feel).html)  
[`VerbRule(FiatLux)`](../object/VerbRule(FiatLux).html)  
[`VerbRule(Flip)`](../object/VerbRule(Flip).html)  
[`VerbRule(Follow)`](../object/VerbRule(Follow).html)  
[`VerbRule(Footnote)`](../object/VerbRule(Footnote).html)  
[`VerbRule(FootnotesFull)`](../object/VerbRule(FootnotesFull).html)  
[`VerbRule(FootnotesMedium)`](../object/VerbRule(FootnotesMedium).html)  
[`VerbRule(FootnotesOff)`](../object/VerbRule(FootnotesOff).html)  
[`VerbRule(FootnotesStatus)`](../object/VerbRule(FootnotesStatus).html)  
[`VerbRule(FullScore)`](../object/VerbRule(FullScore).html)  
[`VerbRule(GetOff)`](../object/VerbRule(GetOff).html)  
[`VerbRule(GetOut)`](../object/VerbRule(GetOut).html)  
[`VerbRule(GetOutOf)`](../object/VerbRule(GetOutOf).html)  
[`VerbRule(GiveTo)`](../object/VerbRule(GiveTo).html)  
[`VerbRule(GiveToImplicit)`](../object/VerbRule(GiveToImplicit).html)  
[`VerbRule(GiveToType2)`](../object/VerbRule(GiveToType2).html)  
[`VerbRule(GoAlong)`](../object/VerbRule(GoAlong).html)  
[`VerbRule(GoBack)`](../object/VerbRule(GoBack).html)  
[`VerbRule(GoNear)`](../object/VerbRule(GoNear).html)  
[`VerbRule(Goodbye)`](../object/VerbRule(Goodbye).html)  
[`VerbRule(GoSomewhere)`](../object/VerbRule(GoSomewhere).html)  
[`VerbRule(GoThrough)`](../object/VerbRule(GoThrough).html)  
[`VerbRule(GoTo)`](../object/VerbRule(GoTo).html)  
[`VerbRule(Hello)`](../object/VerbRule(Hello).html)  
[`VerbRule(Help)`](../object/VerbRule(Help).html)  
[`VerbRule(Hints)`](../object/VerbRule(Hints).html)  
[`VerbRule(HintsOff)`](../object/VerbRule(HintsOff).html)  
[`VerbRule(In)`](../object/VerbRule(In).html)  
[`VerbRule(instructions)`](../object/VerbRule(instructions).html)  
[`VerbRule(Intro)`](../object/VerbRule(Intro).html)  
[`VerbRule(Inventory)`](../object/VerbRule(Inventory).html)  
[`VerbRule(InventoryTall)`](../object/VerbRule(InventoryTall).html)  
[`VerbRule(InventoryWide)`](../object/VerbRule(InventoryWide).html)  
[`VerbRule(Jump)`](../object/VerbRule(Jump).html)  
[`VerbRule(JumpOff)`](../object/VerbRule(JumpOff).html)  
[`VerbRule(JumpOffIntransitive)`](../object/VerbRule(JumpOffIntransitive).html)  
[`VerbRule(JumpOver)`](../object/VerbRule(JumpOver).html)  
[`VerbRule(KeepGoing)`](../object/VerbRule(KeepGoing).html)  
[`VerbRule(Kiss)`](../object/VerbRule(Kiss).html)  
[`VerbRule(Lie)`](../object/VerbRule(Lie).html)  
[`VerbRule(LieIn)`](../object/VerbRule(LieIn).html)  
[`VerbRule(LieOn)`](../object/VerbRule(LieOn).html)  
[`VerbRule(Light)`](../object/VerbRule(Light).html)  
[`VerbRule(Listen)`](../object/VerbRule(Listen).html)  
[`VerbRule(ListenTo)`](../object/VerbRule(ListenTo).html)  
[`VerbRule(ListRelations)`](../object/VerbRule(ListRelations).html)  
[`VerbRule(ListTests)`](../object/VerbRule(ListTests).html)  
[`VerbRule(Lock)`](../object/VerbRule(Lock).html)  
[`VerbRule(LockWith)`](../object/VerbRule(LockWith).html)  
[`VerbRule(Look)`](../object/VerbRule(Look).html)  
[`VerbRule(LookBehind)`](../object/VerbRule(LookBehind).html)  
[`VerbRule(LookHere)`](../object/VerbRule(LookHere).html)  
[`VerbRule(LookIn)`](../object/VerbRule(LookIn).html)  
[`VerbRule(LookThrough)`](../object/VerbRule(LookThrough).html)  
[`VerbRule(LookUnder)`](../object/VerbRule(LookUnder).html)  
[`VerbRule(LookUp)`](../object/VerbRule(LookUp).html)  
[`VerbRule(LookX)`](../object/VerbRule(LookX).html)  
[`VerbRule(Move)`](../object/VerbRule(Move).html)  
[`VerbRule(MoveTo)`](../object/VerbRule(MoveTo).html)  
[`VerbRule(MoveWith)`](../object/VerbRule(MoveWith).html)  
[`VerbRule(No)`](../object/VerbRule(No).html)  
[`VerbRule(Notify)`](../object/VerbRule(Notify).html)  
[`VerbRule(NotifyOff)`](../object/VerbRule(NotifyOff).html)  
[`VerbRule(NotifyOn)`](../object/VerbRule(NotifyOn).html)  
[`VerbRule(Open)`](../object/VerbRule(Open).html)  
[`VerbRule(Out)`](../object/VerbRule(Out).html)  
[`VerbRule(PlugIn)`](../object/VerbRule(PlugIn).html)  
[`VerbRule(PlugInto)`](../object/VerbRule(PlugInto).html)  
[`VerbRule(PlugIntoWhat)`](../object/VerbRule(PlugIntoWhat).html)  
[`VerbRule(Pour)`](../object/VerbRule(Pour).html)  
[`VerbRule(PourInto)`](../object/VerbRule(PourInto).html)  
[`VerbRule(PourOnto)`](../object/VerbRule(PourOnto).html)  
[`VerbRule(Pull)`](../object/VerbRule(Pull).html)  
[`VerbRule(Purloin)`](../object/VerbRule(Purloin).html)  
[`VerbRule(Push)`](../object/VerbRule(Push).html)  
[`VerbRule(PushTravelClimbDown)`](../object/VerbRule(PushTravelClimbDown).html)  
[`VerbRule(PushTravelClimbUp)`](../object/VerbRule(PushTravelClimbUp).html)  
[`VerbRule(PushTravelDir)`](../object/VerbRule(PushTravelDir).html)  
[`VerbRule(PushTravelEnter)`](../object/VerbRule(PushTravelEnter).html)  
[`VerbRule(PushTravelGetOutOf)`](../object/VerbRule(PushTravelGetOutOf).html)  
[`VerbRule(PushTravelThrough)`](../object/VerbRule(PushTravelThrough).html)  
[`VerbRule(PutBehind)`](../object/VerbRule(PutBehind).html)  
[`VerbRule(PutIn)`](../object/VerbRule(PutIn).html)  
[`VerbRule(PutOn)`](../object/VerbRule(PutOn).html)  
[`VerbRule(PutUnder)`](../object/VerbRule(PutUnder).html)  
[`VerbRule(PutWhere)`](../object/VerbRule(PutWhere).html)  
[`VerbRule(Query)`](../object/VerbRule(Query).html)  
[`VerbRule(Query2)`](../object/VerbRule(Query2).html)  
[`VerbRule(QueryAbout)`](../object/VerbRule(QueryAbout).html)  
[`VerbRule(QueryVague)`](../object/VerbRule(QueryVague).html)  
[`VerbRule(Quit)`](../object/VerbRule(Quit).html)  
[`VerbRule(Read)`](../object/VerbRule(Read).html)  
[`VerbRule(Record)`](../object/VerbRule(Record).html)  
[`VerbRule(RecordEvents)`](../object/VerbRule(RecordEvents).html)  
[`VerbRule(RecordEventsString)`](../object/VerbRule(RecordEventsString).html)  
[`VerbRule(RecordOff)`](../object/VerbRule(RecordOff).html)  
[`VerbRule(RecordString)`](../object/VerbRule(RecordString).html)  
[`VerbRule(RelationDetails)`](../object/VerbRule(RelationDetails).html)  
[`VerbRule(Remove)`](../object/VerbRule(Remove).html)  
[`VerbRule(ReplayQuiet)`](../object/VerbRule(ReplayQuiet).html)  
[`VerbRule(ReplayString)`](../object/VerbRule(ReplayString).html)  
[`VerbRule(Restart)`](../object/VerbRule(Restart).html)  
[`VerbRule(Restore)`](../object/VerbRule(Restore).html)  
[`VerbRule(RestoreString)`](../object/VerbRule(RestoreString).html)  
[`VerbRule(Sample)`](../object/VerbRule(Sample).html)  
[`VerbRule(Save)`](../object/VerbRule(Save).html)  
[`VerbRule(SaveString)`](../object/VerbRule(SaveString).html)  
[`VerbRule(Say)`](../object/VerbRule(Say).html)  
[`VerbRule(SayTo)`](../object/VerbRule(SayTo).html)  
[`VerbRule(Score)`](../object/VerbRule(Score).html)  
[`VerbRule(Screw)`](../object/VerbRule(Screw).html)  
[`VerbRule(ScrewWith)`](../object/VerbRule(ScrewWith).html)  
[`VerbRule(ScriptOff)`](../object/VerbRule(ScriptOff).html)  
[`VerbRule(ScriptOn)`](../object/VerbRule(ScriptOn).html)  
[`VerbRule(ScriptString)`](../object/VerbRule(ScriptString).html)  
[`VerbRule(Search)`](../object/VerbRule(Search).html)  
[`VerbRule(Seek)`](../object/VerbRule(Seek).html)  
[`VerbRule(Set)`](../object/VerbRule(Set).html)  
[`VerbRule(SetTo)`](../object/VerbRule(SetTo).html)  
[`VerbRule(ShowTo)`](../object/VerbRule(ShowTo).html)  
[`VerbRule(ShowToImplicit)`](../object/VerbRule(ShowToImplicit).html)  
[`VerbRule(ShowToType2)`](../object/VerbRule(ShowToType2).html)  
[`VerbRule(Sit)`](../object/VerbRule(Sit).html)  
[`VerbRule(SitIn)`](../object/VerbRule(SitIn).html)  
[`VerbRule(SitOn)`](../object/VerbRule(SitOn).html)  
[`VerbRule(Sleep)`](../object/VerbRule(Sleep).html)  
[`VerbRule(Smell)`](../object/VerbRule(Smell).html)  
[`VerbRule(SmellSomething)`](../object/VerbRule(SmellSomething).html)  
[`VerbRule(Stand)`](../object/VerbRule(Stand).html)  
[`VerbRule(StandIn)`](../object/VerbRule(StandIn).html)  
[`VerbRule(StandOn)`](../object/VerbRule(StandOn).html)  
[`VerbRule(Strike)`](../object/VerbRule(Strike).html)  
[`VerbRule(Switch)`](../object/VerbRule(Switch).html)  
[`VerbRule(SwitchOff)`](../object/VerbRule(SwitchOff).html)  
[`VerbRule(SwitchOn)`](../object/VerbRule(SwitchOn).html)  
[`VerbRule(Take)`](../object/VerbRule(Take).html)  
[`VerbRule(TakeFrom)`](../object/VerbRule(TakeFrom).html)  
[`VerbRule(TalkAbout)`](../object/VerbRule(TalkAbout).html)  
[`VerbRule(TalkAboutImplicit)`](../object/VerbRule(TalkAboutImplicit).html)  
[`VerbRule(TalkTo)`](../object/VerbRule(TalkTo).html)  
[`VerbRule(Taste)`](../object/VerbRule(Taste).html)  
[`VerbRule(TellAbout)`](../object/VerbRule(TellAbout).html)  
[`VerbRule(TellAboutImplicit)`](../object/VerbRule(TellAboutImplicit).html)  
[`VerbRule(TellAboutWhat)`](../object/VerbRule(TellAboutWhat).html)  
[`VerbRule(TellThat)`](../object/VerbRule(TellThat).html)  
[`VerbRule(TellTo)`](../object/VerbRule(TellTo).html)  
[`VerbRule(TellVague)`](../object/VerbRule(TellVague).html)  
[`VerbRule(Test)`](../object/VerbRule(Test).html)  
[`VerbRule(Think)`](../object/VerbRule(Think).html)  
[`VerbRule(ThinkAbout)`](../object/VerbRule(ThinkAbout).html)  
[`VerbRule(Throw)`](../object/VerbRule(Throw).html)  
[`VerbRule(ThrowAt)`](../object/VerbRule(ThrowAt).html)  
[`VerbRule(ThrowDir)`](../object/VerbRule(ThrowDir).html)  
[`VerbRule(ThrowDirDown)`](../object/VerbRule(ThrowDirDown).html)  
[`VerbRule(ThrowTo)`](../object/VerbRule(ThrowTo).html)  
[`VerbRule(ThrowToType2)`](../object/VerbRule(ThrowToType2).html)  
[`VerbRule(Topics)`](../object/VerbRule(Topics).html)  
[`VerbRule(Travel)`](../object/VerbRule(Travel).html)  
[`VerbRule(Turn)`](../object/VerbRule(Turn).html)  
[`VerbRule(TurnTo)`](../object/VerbRule(TurnTo).html)  
[`VerbRule(TurnWith)`](../object/VerbRule(TurnWith).html)  
[`VerbRule(TypeLiteralOn)`](../object/VerbRule(TypeLiteralOn).html)  
[`VerbRule(TypeLiteralOnWhat)`](../object/VerbRule(TypeLiteralOnWhat).html)  
[`VerbRule(TypeOn)`](../object/VerbRule(TypeOn).html)  
[`VerbRule(Undo)`](../object/VerbRule(Undo).html)  
[`VerbRule(Unfasten)`](../object/VerbRule(Unfasten).html)  
[`VerbRule(UnfastenFrom)`](../object/VerbRule(UnfastenFrom).html)  
[`VerbRule(Unlock)`](../object/VerbRule(Unlock).html)  
[`VerbRule(UnlockWith)`](../object/VerbRule(UnlockWith).html)  
[`VerbRule(Unplug)`](../object/VerbRule(Unplug).html)  
[`VerbRule(UnplugFrom)`](../object/VerbRule(UnplugFrom).html)  
[`VerbRule(Unscrew)`](../object/VerbRule(Unscrew).html)  
[`VerbRule(UnscrewWith)`](../object/VerbRule(UnscrewWith).html)  
[`VerbRule(VagueTravel)`](../object/VerbRule(VagueTravel).html)  
[`VerbRule(Verbose)`](../object/VerbRule(Verbose).html)  
[`VerbRule(Version)`](../object/VerbRule(Version).html)  
[`VerbRule(Wait)`](../object/VerbRule(Wait).html)  
[`VerbRule(Wear)`](../object/VerbRule(Wear).html)  
[`VerbRule(WhatAmICarrying)`](../object/VerbRule(WhatAmICarrying).html)  
[`VerbRule(WhatIsNoun)`](../object/VerbRule(WhatIsNoun).html)  
[`VerbRule(WhatNext)`](../object/VerbRule(WhatNext).html)  
[`VerbRule(WhatsHere)`](../object/VerbRule(WhatsHere).html)  
[`VerbRule(WhatsThePoint)`](../object/VerbRule(WhatsThePoint).html)  
[`VerbRule(WhatThisGame)`](../object/VerbRule(WhatThisGame).html)  
[`VerbRule(WhereAmI)`](../object/VerbRule(WhereAmI).html)  
[`VerbRule(WhereGo)`](../object/VerbRule(WhereGo).html)  
[`VerbRule(WhereHelp)`](../object/VerbRule(WhereHelp).html)  
[`VerbRule(WhoAmI)`](../object/VerbRule(WhoAmI).html)  
[`VerbRule(Write)`](../object/VerbRule(Write).html)  
[`VerbRule(WriteOn)`](../object/VerbRule(WriteOn).html)  
[`VerbRule(Yell)`](../object/VerbRule(Yell).html)  
[`VerbRule(Yes)`](../object/VerbRule(Yes).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isActive`](#isActive) [`priority`](#priority)

Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner) [`nounPhraseRole`](../object/Production.html#nounPhraseRole) [`npClass`](../object/Production.html#npClass) [`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`answerMissing`](#answerMissing) [`build`](#build) [`missingRoleProd`](#missingRoleProd) [`visitProd`](#visitProd)

Inherited from `Production` :  
[`addNounListItem`](../object/Production.html#addNounListItem) [`findAction`](../object/Production.html#findAction) [`findChild`](../object/Production.html#findChild) [`findParent`](../object/Production.html#findParent) [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole) [`getText`](../object/Production.html#getText) [`getTokens`](../object/Production.html#getTokens) [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild) [`isChildOf`](../object/Production.html#isChildOf) [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence) [`visitLiteral`](../object/Production.html#visitLiteral)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isActive"></span>

`isActive`

[parser.t](../file/parser.t.html)\[[3977](../source/parser.t.html#3977)\]



Do we want to consider this production to be active; we may want some
VerbRules to be active only under certain circumstanes.



<span id="priority"></span>

`priority`

[parser.t](../file/parser.t.html)\[[3971](../source/parser.t.html#3971)\]



The "priority" of this grammar rule. This is a contributor to the
Command priority - see Command.priority for an explanation of how that's
used.

The predicate priority is a small number, 0-99. The default is 50, which
should apply to most normal, complete verb phrases. For incomplete
phrases (with a missing object, which will force the parser to assume a
default or ask the player for the missing information), use 25. Other
values are for fine-tuning as needed in the individual grammar rules. A
higher value means higher priority.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="answerMissing"></span>

`answerMissing (cmd, np)`

[parser.t](../file/parser.t.html)\[[4040](../source/parser.t.html#4040)\]



The parser calls answerMissing() when the player answers a query for a
missing noun phrase in the last command. There's nothing that needs to
happen here, and by default we do nothing; this is purely advisory. This
routine gives the language module a chance to alter the command
according to the reply, if necessary.



<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3980](../source/parser.t.html#3980)\]



build the command



<span id="missingRoleProd"></span>

`missingRoleProd (role)`

[grammar.t](../file/grammar.t.html)\[[3688](../source/grammar.t.html#3688)\]



Get the grammar production for the given noun phrase role, for answering
missing-noun questions ("What do you want to open?"). By default, we'll
look in three places:

1\. If we have the "reply" property that corresponds to the role
(dobjReply, iobjReply, etc), we'll return the grammar rule specified
there.

2\. We'll try to find the role's match property in our grammar rule
list. If we find it, we'll return the production for the first one we
find.

3\. Failing all that, we'll return nounList for a direct object, or
singleNoun for anything else.

\[Required\]



<span id="visitProd"></span>

`visitProd (cmd, np, prod)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4002](../source/parser.t.html#4002)\]



Visit a production during the build process. If this is one of our noun
phrase slots, we tell the command to add a new noun phrase of this type,
and make it the current phrase; then we recursively build out this child
to populate the new noun phrase.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


