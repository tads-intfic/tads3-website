<span class="title">Production</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3302](../source/parser.t.html#3302)\]

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

Our root class for grammar productions. (A "production" represents a
match to a syntax rule, as defined with a 'grammar' template.)

The language module's grammar rules can define certain special
properties on any production match object, and we'll find them in the
course of building the command from the match tree:

endOfSentence=true - define this on a production for a sentence-ending
verb conjunction. In English (and most Western languages), this can be
used with rules that match punctuation marks like periods, exclamation
points, and question marks, since these marks typically end a sentence.
The parser distinguishes between the grammar rules for the first clause
in a sentence vs subsequent clauses. It starts a new input line with the
first-in-sentence rule, then uses the additional clause rule for each
subsequent clause. When a clause ends with a sentence-ending mark,
though, we'll treat the next clause as a sentence opener again.

`class `**`Production`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Production`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Production`**  
`         `[`actorBadCommandPhrase(main)`](../object/actorBadCommandPhrase(main).html)  
`         `[`atSingleNoun(main)`](../object/atSingleNoun(main).html)  
`         `[`BadListProduction`](../object/BadListProduction.html)  
`                 `[`singleNoun(multiple)`](../object/singleNoun(multiple).html)  
`         `[`commandOnlyConjunction(nonSentenceEnding)`](../object/commandOnlyConjunction(nonSentenceEnding).html)  
`         `[`commandOnlyConjunction(sentenceEnding)`](../object/commandOnlyConjunction(sentenceEnding).html)  
`         `[`commandOrNounConjunction(main)`](../object/commandOrNounConjunction(main).html)  
`         `[`CommandProduction`](../object/CommandProduction.html)  
`                 `[`commandPhrase(ambiguousConj)`](../object/commandPhrase(ambiguousConj).html)  
`                 `[`commandPhrase(definiteConj)`](../object/commandPhrase(definiteConj).html)  
`                 `[`defaultCommandPhrase(examine)`](../object/defaultCommandPhrase(examine).html)  
`                 `[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)  
`                 `[`firstCommandPhrase(commandOnly)`](../object/firstCommandPhrase(commandOnly).html)  
`                 `[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)  
`         `[`completeNounPhrase(main)`](../object/completeNounPhrase(main).html)  
`         `[`completeNounPhrase(miscPrep)`](../object/completeNounPhrase(miscPrep).html)  
`         `[`completeNounPhraseWithAll(main)`](../object/completeNounPhraseWithAll(main).html)  
`         `[`completeNounPhraseWithoutAll(main)`](../object/completeNounPhraseWithoutAll(main).html)  
`         `[`compoundNounArticle(main)`](../object/compoundNounArticle(main).html)  
`         `[`compoundNounPhrase(of)`](../object/compoundNounPhrase(of).html)  
`         `[`compoundNounPhrase(simple)`](../object/compoundNounPhrase(simple).html)  
`         `[`compoundNounPrep(main)`](../object/compoundNounPrep(main).html)  
`         `[`compoundPluralPhrase(of)`](../object/compoundPluralPhrase(of).html)  
`         `[`compoundPluralPhrase(simple)`](../object/compoundPluralPhrase(simple).html)  
`         `[`contentsPrep(main)`](../object/contentsPrep(main).html)  
`         `[`contentsPrepOrVerb(main)`](../object/contentsPrepOrVerb(main).html)  
`         `[`ContentsQualifierProduction`](../object/ContentsQualifierProduction.html)  
`                 `[`nounPhraseWithContents(contents)`](../object/nounPhraseWithContents(contents).html)  
`                 `[`pluralPhraseWithContents(contents)`](../object/pluralPhraseWithContents(contents).html)  
`                 `[`qualifiedPluralNounPhrase(theOnesContaining)`](../object/qualifiedPluralNounPhrase(theOnesContaining).html)  
`                 `[`qualifiedSingularNounPhrase(theOneContaining)`](../object/qualifiedSingularNounPhrase(theOneContaining).html)  
`         `[`CoreNounPhraseProduction`](../object/CoreNounPhraseProduction.html)  
`                 `[`nounPhrase(main)`](../object/nounPhrase(main).html)  
`                 `[`pluralPhrase(main)`](../object/pluralPhrase(main).html)  
`         `[`detPluralNounPhrase(main)`](../object/detPluralNounPhrase(main).html)  
`         `[`detPluralOnlyNounPhrase(main)`](../object/detPluralOnlyNounPhrase(main).html)  
`         `[`directionName(root)`](../object/directionName(root).html)  
`         `[`disambigListItem(noun)`](../object/disambigListItem(noun).html)  
`         `[`disambigListItem(plural)`](../object/disambigListItem(plural).html)  
`         `[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)  
`         `[`disambigPhrase(all)`](../object/disambigPhrase(all).html)  
`         `[`disambigPhrase(any)`](../object/disambigPhrase(any).html)  
`         `[`disambigPhrase(list)`](../object/disambigPhrase(list).html)  
`         `[`disambigPhrase(ordinalList)`](../object/disambigPhrase(ordinalList).html)  
`         `[`DisambigProduction`](../object/DisambigProduction.html)  
`                 `[`mainDisambigPhrase(main)`](../object/mainDisambigPhrase(main).html)  
`         `[`EmptyNounProduction`](../object/EmptyNounProduction.html)  
`                 `[`literalPhrase(empty)`](../object/literalPhrase(empty).html)  
`                 `[`nounList(empty)`](../object/nounList(empty).html)  
`                 `[`simpleNounPhrase(empty)`](../object/simpleNounPhrase(empty).html)  
`                 `[`simplePluralPhrase(empty)`](../object/simplePluralPhrase(empty).html)  
`                 `[`singleNoun(empty)`](../object/singleNoun(empty).html)  
`         `[`exceptListBody(single)`](../object/exceptListBody(single).html)  
`         `[`ExceptListProduction`](../object/ExceptListProduction.html)  
`                 `[`exceptList(main)`](../object/exceptList(main).html)  
`         `[`exceptNounPhrase(singleComplete)`](../object/exceptNounPhrase(singleComplete).html)  
`         `[`exceptNounPhrase(singlePossessive)`](../object/exceptNounPhrase(singlePossessive).html)  
`         `[`explicitDetPluralNounPhrase(definite)`](../object/explicitDetPluralNounPhrase(definite).html)  
`         `[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)  
`         `[`explicitDetPluralOnlyNounPhrase(definite)`](../object/explicitDetPluralOnlyNounPhrase(definite).html)  
`         `[`explicitDetPluralOnlyNounPhrase(possessive)`](../object/explicitDetPluralOnlyNounPhrase(possessive).html)  
`         `[`forSingleNoun(main)`](../object/forSingleNoun(main).html)  
`         `[`fromSingleNoun(main)`](../object/fromSingleNoun(main).html)  
`         `[`implicitDetPluralOnlyNounPhrase(main)`](../object/implicitDetPluralOnlyNounPhrase(main).html)  
`         `[`indetPluralNounPhrase(basic)`](../object/indetPluralNounPhrase(basic).html)  
`         `[`indetPluralOnlyNounPhrase(basic)`](../object/indetPluralOnlyNounPhrase(basic).html)  
`         `[`indetSingularNounPhrase(basic)`](../object/indetSingularNounPhrase(basic).html)  
`         `[`inSingleNoun(main)`](../object/inSingleNoun(main).html)  
`         `[`literalNounPhrase(number)`](../object/literalNounPhrase(number).html)  
`         `[`literalNounPhrase(string)`](../object/literalNounPhrase(string).html)  
`         `[`LiteralNounProduction`](../object/LiteralNounProduction.html)  
`                 `[`literalPhrase(miscList)`](../object/literalPhrase(miscList).html)  
`                 `[`literalPhrase(string)`](../object/literalPhrase(string).html)  
`         `[`LocationalProduction`](../object/LocationalProduction.html)  
`                 `[`disambigPhrase(locational)`](../object/disambigPhrase(locational).html)  
`                 `[`indetPluralNounPhrase(locational)`](../object/indetPluralNounPhrase(locational).html)  
`                 `[`indetPluralOnlyNounPhrase(locational)`](../object/indetPluralOnlyNounPhrase(locational).html)  
`                 `[`indetSingularNounPhrase(locational)`](../object/indetSingularNounPhrase(locational).html)  
`                 `[`qualifiedPluralNounPhrase(theOnesIn)`](../object/qualifiedPluralNounPhrase(theOnesIn).html)  
`                 `[`qualifiedSingularNounPhrase(anyOneIn)`](../object/qualifiedSingularNounPhrase(anyOneIn).html)  
`                 `[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)  
`         `[`LocationPrepProduction`](../object/LocationPrepProduction.html)  
`                 `[`locationPrep(from)`](../object/locationPrep(from).html)  
`                 `[`locationPrep(in)`](../object/locationPrep(in).html)  
`                 `[`locationPrep(on)`](../object/locationPrep(on).html)  
`         `[`MiscWordListProduction`](../object/MiscWordListProduction.html)  
`                 `[`miscWordList(list)`](../object/miscWordList(list).html)  
`                 `[`miscWordList(wordOrNumber)`](../object/miscWordList(wordOrNumber).html)  
`         `[`nounConjunction(main)`](../object/nounConjunction(main).html)  
`         `[`nounList(list)`](../object/nounList(list).html)  
`         `[`nounList(nonTerminal)`](../object/nounList(nonTerminal).html)  
`         `[`nounList(terminal)`](../object/nounList(terminal).html)  
`         `[`NounListProduction`](../object/NounListProduction.html)  
`                 `[`disambigList(list)`](../object/disambigList(list).html)  
`                 `[`disambigOrdinalList(head)`](../object/disambigOrdinalList(head).html)  
`                 `[`disambigOrdinalList(tail)`](../object/disambigOrdinalList(tail).html)  
`                 `[`exceptListBody(list)`](../object/exceptListBody(list).html)  
`                 `[`nonTerminalNounMultiList(multi)`](../object/nonTerminalNounMultiList(multi).html)  
`                 `[`nonTerminalNounMultiList(pair)`](../object/nonTerminalNounMultiList(pair).html)  
`                 `[`nounMultiList(multi)`](../object/nounMultiList(multi).html)  
`         `[`nounMultiList(nonterminal)`](../object/nounMultiList(nonterminal).html)  
`         `[`nounPhraseWithContents(basic)`](../object/nounPhraseWithContents(basic).html)  
`         `[`nounWord(noun)`](../object/nounWord(noun).html)  
`         `[`nounWord(nounAbbr)`](../object/nounWord(nounAbbr).html)  
`         `[`nounWord(nounApostS)`](../object/nounWord(nounApostS).html)  
`         `[`NumberNounProduction`](../object/NumberNounProduction.html)  
`                 `[`numberObjPhrase(main)`](../object/numberObjPhrase(main).html)  
`                 `[`numberPhrase(digits)`](../object/numberPhrase(digits).html)  
`                 `[`numberPhrase(spelled)`](../object/numberPhrase(spelled).html)  
`                 `[`poundNumberPhrase(main)`](../object/poundNumberPhrase(main).html)  
`         `[`onSingleNoun(main)`](../object/onSingleNoun(main).html)  
`         `[`oopsCommand(main)`](../object/oopsCommand(main).html)  
`         `[`OopsProduction`](../object/OopsProduction.html)  
`                 `[`oopsPhrase(main)`](../object/oopsPhrase(main).html)  
`         `[`OrdinalProduction`](../object/OrdinalProduction.html)  
`                 `[`disambigListItem(ordinal)`](../object/disambigListItem(ordinal).html)  
`                 `[`disambigOrdinalItem(main)`](../object/disambigOrdinalItem(main).html)  
`         `[`outOfSingleNoun(main)`](../object/outOfSingleNoun(main).html)  
`         `[`pluralPhraseWithContents(basic)`](../object/pluralPhraseWithContents(basic).html)  
`         `[`PossessiveProduction`](../object/PossessiveProduction.html)  
`                 `[`possessiveAdjPhrase(definiteNpApostropheS)`](../object/possessiveAdjPhrase(definiteNpApostropheS).html)  
`                 `[`possessiveAdjPhrase(her)`](../object/possessiveAdjPhrase(her).html)  
`                 `[`possessiveAdjPhrase(his)`](../object/possessiveAdjPhrase(his).html)  
`                 `[`possessiveAdjPhrase(indefiniteNpApostropheS)`](../object/possessiveAdjPhrase(indefiniteNpApostropheS).html)  
`                 `[`possessiveAdjPhrase(its)`](../object/possessiveAdjPhrase(its).html)  
`                 `[`possessiveAdjPhrase(my)`](../object/possessiveAdjPhrase(my).html)  
`                 `[`possessiveAdjPhrase(npApostropheS)`](../object/possessiveAdjPhrase(npApostropheS).html)  
`                 `[`possessiveAdjPhrase(their)`](../object/possessiveAdjPhrase(their).html)  
`                 `[`possessiveAdjPhrase(your)`](../object/possessiveAdjPhrase(your).html)  
`                 `[`possessiveNounPhrase(hers)`](../object/possessiveNounPhrase(hers).html)  
`                 `[`possessiveNounPhrase(his)`](../object/possessiveNounPhrase(his).html)  
`                 `[`possessiveNounPhrase(its)`](../object/possessiveNounPhrase(its).html)  
`                 `[`possessiveNounPhrase(mine)`](../object/possessiveNounPhrase(mine).html)  
`                 `[`possessiveNounPhrase(npApostropheS)`](../object/possessiveNounPhrase(npApostropheS).html)  
`                 `[`possessiveNounPhrase(theirs)`](../object/possessiveNounPhrase(theirs).html)  
`                 `[`possessiveNounPhrase(yours)`](../object/possessiveNounPhrase(yours).html)  
`         `[`PronounProduction`](../object/PronounProduction.html)  
`                 `[`pronounPhrase(her)`](../object/pronounPhrase(her).html)  
`                 `[`pronounPhrase(herself)`](../object/pronounPhrase(herself).html)  
`                 `[`pronounPhrase(him)`](../object/pronounPhrase(him).html)  
`                 `[`pronounPhrase(himself)`](../object/pronounPhrase(himself).html)  
`                 `[`pronounPhrase(it)`](../object/pronounPhrase(it).html)  
`                 `[`pronounPhrase(itself)`](../object/pronounPhrase(itself).html)  
`                 `[`pronounPhrase(me)`](../object/pronounPhrase(me).html)  
`                 `[`pronounPhrase(them)`](../object/pronounPhrase(them).html)  
`                 `[`pronounPhrase(themselves)`](../object/pronounPhrase(themselves).html)  
`                 `[`pronounPhrase(us)`](../object/pronounPhrase(us).html)  
`                 `[`pronounPhrase(you)`](../object/pronounPhrase(you).html)  
`         `[`putPrep(main)`](../object/putPrep(main).html)  
`         `[`putPrepSingleNoun(main)`](../object/putPrepSingleNoun(main).html)  
`         `[`qualifiedNounPhrase(main)`](../object/qualifiedNounPhrase(main).html)  
`         `[`qualifiedPluralNounPhrase(all)`](../object/qualifiedPluralNounPhrase(all).html)  
`         `[`qualifiedPluralNounPhrase(determiner)`](../object/qualifiedPluralNounPhrase(determiner).html)  
`         `[`qualifiedSingularNounPhrase(anyPlural)`](../object/qualifiedSingularNounPhrase(anyPlural).html)  
`         `[`qualifiedSingularNounPhrase(arbitrary)`](../object/qualifiedSingularNounPhrase(arbitrary).html)  
`         `[`qualifiedSingularNounPhrase(definite)`](../object/qualifiedSingularNounPhrase(definite).html)  
`         `[`qualifiedSingularNounPhrase(indefinite)`](../object/qualifiedSingularNounPhrase(indefinite).html)  
`         `[`qualifiedSingularNounPhrase(possessive)`](../object/qualifiedSingularNounPhrase(possessive).html)  
`         `[`QuantifierProduction`](../object/QuantifierProduction.html)  
`                 `[`disambigPhrase(both)`](../object/disambigPhrase(both).html)  
`                 `[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)  
`                 `[`explicitDetPluralNounPhrase(possessiveNumber)`](../object/explicitDetPluralNounPhrase(possessiveNumber).html)  
`                 `[`explicitDetPluralNounPhrase(possessiveNumber2)`](../object/explicitDetPluralNounPhrase(possessiveNumber2).html)  
`                 `[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)  
`                 `[`explicitDetPluralOnlyNounPhrase(possessiveNumber)`](../object/explicitDetPluralOnlyNounPhrase(possessiveNumber).html)  
`                 `[`explicitDetPluralOnlyNounPhrase(possessiveNumber2)`](../object/explicitDetPluralOnlyNounPhrase(possessiveNumber2).html)  
`                 `[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)  
`                 `[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)  
`                 `[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
`                 `[`qualifiedPluralNounPhrase(definiteNum)`](../object/qualifiedPluralNounPhrase(definiteNum).html)  
`         `[`quotedStringPhrase(main)`](../object/quotedStringPhrase(main).html)  
`         `[`simpleNounPhrase(adjAndOne)`](../object/simpleNounPhrase(adjAndOne).html)  
`         `[`simpleNounPhrase(adjAndOnes)`](../object/simpleNounPhrase(adjAndOnes).html)  
`         `[`simpleNounPhrase(list)`](../object/simpleNounPhrase(list).html)  
`         `[`simpleNounPhrase(literal)`](../object/simpleNounPhrase(literal).html)  
`         `[`simpleNounPhrase(literalAndList)`](../object/simpleNounPhrase(literalAndList).html)  
`         `[`simpleNounPhrase(misc)`](../object/simpleNounPhrase(misc).html)  
`         `[`simpleNounPhrase(noun)`](../object/simpleNounPhrase(noun).html)  
`         `[`simplePluralPhrase(adjAndOnes)`](../object/simplePluralPhrase(adjAndOnes).html)  
`         `[`simplePluralPhrase(misc)`](../object/simplePluralPhrase(misc).html)  
`         `[`simplePluralPhrase(plural)`](../object/simplePluralPhrase(plural).html)  
`         `[`singleNoun(normal)`](../object/singleNoun(normal).html)  
`         `[`singleNounOnly(main)`](../object/singleNounOnly(main).html)  
`         `[`spelledHundred(aHundred)`](../object/spelledHundred(aHundred).html)  
`         `[`spelledHundred(aHundredPlus)`](../object/spelledHundred(aHundredPlus).html)  
`         `[`spelledHundred(hundreds)`](../object/spelledHundred(hundreds).html)  
`         `[`spelledHundred(hundredsPlus)`](../object/spelledHundred(hundredsPlus).html)  
`         `[`spelledHundred(small)`](../object/spelledHundred(small).html)  
`         `[`spelledMillion(aMillion)`](../object/spelledMillion(aMillion).html)  
`         `[`spelledMillion(aMillionAndSmall)`](../object/spelledMillion(aMillionAndSmall).html)  
`         `[`spelledMillion(millions)`](../object/spelledMillion(millions).html)  
`         `[`spelledMillion(millionsAndSmall)`](../object/spelledMillion(millionsAndSmall).html)  
`         `[`spelledMillion(millionsPlus)`](../object/spelledMillion(millionsPlus).html)  
`         `[`spelledNumber(main)`](../object/spelledNumber(main).html)  
`         `[`spelledSmallNumber(digit)`](../object/spelledSmallNumber(digit).html)  
`         `[`spelledSmallNumber(teen)`](../object/spelledSmallNumber(teen).html)  
`         `[`spelledSmallNumber(tens)`](../object/spelledSmallNumber(tens).html)  
`         `[`spelledSmallNumber(tensAndUnits)`](../object/spelledSmallNumber(tensAndUnits).html)  
`         `[`spelledSmallNumber(zero)`](../object/spelledSmallNumber(zero).html)  
`         `[`spelledThousand(aThousand)`](../object/spelledThousand(aThousand).html)  
`         `[`spelledThousand(aThousandAndSmall)`](../object/spelledThousand(aThousandAndSmall).html)  
`         `[`spelledThousand(thousands)`](../object/spelledThousand(thousands).html)  
`         `[`spelledThousand(thousandsAndSmall)`](../object/spelledThousand(thousandsAndSmall).html)  
`         `[`spelledThousand(thousandsPlus)`](../object/spelledThousand(thousandsPlus).html)  
`         `[`terminalNounPhrase(allBut)`](../object/terminalNounPhrase(allBut).html)  
`         `[`terminalNounPhrase(anyBut)`](../object/terminalNounPhrase(anyBut).html)  
`         `[`terminalNounPhrase(pluralExcept)`](../object/terminalNounPhrase(pluralExcept).html)  
`         `[`throughSingleNoun(main)`](../object/throughSingleNoun(main).html)  
`         `[`TopicNounProduction`](../object/TopicNounProduction.html)  
`                 `[`aboutTopicPhrase(main)`](../object/aboutTopicPhrase(main).html)  
`                 `[`topicPhrase(main)`](../object/topicPhrase(main).html)  
`                 `[`topicPhrase(misc)`](../object/topicPhrase(misc).html)  
`         `[`toSingleNoun(main)`](../object/toSingleNoun(main).html)  
`         `[`VerbProduction`](../object/VerbProduction.html)  
`                 `[`defaultVerbPhrase(noun)`](../object/defaultVerbPhrase(noun).html)  
`                 `[`EnTravelVia`](../object/EnTravelVia.html)  
`                 `[`VerbRule(About)`](../object/VerbRule(About).html)  
`                 `[`VerbRule(Again)`](../object/VerbRule(Again).html)  
`                 `[`VerbRule(AskAbout)`](../object/VerbRule(AskAbout).html)  
`                 `[`VerbRule(AskAboutImplicit)`](../object/VerbRule(AskAboutImplicit).html)  
`                 `[`VerbRule(AskAboutWhat)`](../object/VerbRule(AskAboutWhat).html)  
`                 `[`VerbRule(AskFor)`](../object/VerbRule(AskFor).html)  
`                 `[`VerbRule(AskForImplicit)`](../object/VerbRule(AskForImplicit).html)  
`                 `[`VerbRule(AskVague)`](../object/VerbRule(AskVague).html)  
`                 `[`VerbRule(AskWhomFor)`](../object/VerbRule(AskWhomFor).html)  
`                 `[`VerbRule(Attach)`](../object/VerbRule(Attach).html)  
`                 `[`VerbRule(AttachTo)`](../object/VerbRule(AttachTo).html)  
`                 `[`VerbRule(Attack)`](../object/VerbRule(Attack).html)  
`                 `[`VerbRule(AttackWith)`](../object/VerbRule(AttackWith).html)  
`                 `[`VerbRule(AuxQuery)`](../object/VerbRule(AuxQuery).html)  
`                 `[`VerbRule(Board)`](../object/VerbRule(Board).html)  
`                 `[`VerbRule(Break)`](../object/VerbRule(Break).html)  
`                 `[`VerbRule(Brief)`](../object/VerbRule(Brief).html)  
`                 `[`VerbRule(Burn)`](../object/VerbRule(Burn).html)  
`                 `[`VerbRule(BurnWith)`](../object/VerbRule(BurnWith).html)  
`                 `[`VerbRule(Clean)`](../object/VerbRule(Clean).html)  
`                 `[`VerbRule(CleanWith)`](../object/VerbRule(CleanWith).html)  
`                 `[`VerbRule(Climb)`](../object/VerbRule(Climb).html)  
`                 `[`VerbRule(ClimbDown)`](../object/VerbRule(ClimbDown).html)  
`                 `[`VerbRule(ClimbDownWhat)`](../object/VerbRule(ClimbDownWhat).html)  
`                 `[`VerbRule(ClimbUp)`](../object/VerbRule(ClimbUp).html)  
`                 `[`VerbRule(ClimbUpWhat)`](../object/VerbRule(ClimbUpWhat).html)  
`                 `[`VerbRule(Close)`](../object/VerbRule(Close).html)  
`                 `[`VerbRule(CmdMenu)`](../object/VerbRule(CmdMenu).html)  
`                 `[`VerbRule(ConsultAbout)`](../object/VerbRule(ConsultAbout).html)  
`                 `[`VerbRule(ConsultWhatAbout)`](../object/VerbRule(ConsultWhatAbout).html)  
`                 `[`VerbRule(Continue)`](../object/VerbRule(Continue).html)  
`                 `[`VerbRule(Credits)`](../object/VerbRule(Credits).html)  
`                 `[`VerbRule(Cut)`](../object/VerbRule(Cut).html)  
`                 `[`VerbRule(CutWith)`](../object/VerbRule(CutWith).html)  
`                 `[`VerbRule(Debug)`](../object/VerbRule(Debug).html)  
`                 `[`VerbRule(DebugI)`](../object/VerbRule(DebugI).html)  
`                 `[`VerbRule(Detach)`](../object/VerbRule(Detach).html)  
`                 `[`VerbRule(DetachFrom)`](../object/VerbRule(DetachFrom).html)  
`                 `[`VerbRule(Dig)`](../object/VerbRule(Dig).html)  
`                 `[`VerbRule(DigWith)`](../object/VerbRule(DigWith).html)  
`                 `[`VerbRule(Doff)`](../object/VerbRule(Doff).html)  
`                 `[`VerbRule(Drink)`](../object/VerbRule(Drink).html)  
`                 `[`VerbRule(Drop)`](../object/VerbRule(Drop).html)  
`                 `[`VerbRule(Eat)`](../object/VerbRule(Eat).html)  
`                 `[`VerbRule(Enter)`](../object/VerbRule(Enter).html)  
`                 `[`VerbRule(EnterOn)`](../object/VerbRule(EnterOn).html)  
`                 `[`VerbRule(Evaluate)`](../object/VerbRule(Evaluate).html)  
`                 `[`VerbRule(Examine)`](../object/VerbRule(Examine).html)  
`                 `[`VerbRule(Exits)`](../object/VerbRule(Exits).html)  
`                 `[`VerbRule(ExitsColour)`](../object/VerbRule(ExitsColour).html)  
`                 `[`VerbRule(ExitsMode)`](../object/VerbRule(ExitsMode).html)  
`                 `[`VerbRule(Extinguish)`](../object/VerbRule(Extinguish).html)  
`                 `[`VerbRule(ExtraHints)`](../object/VerbRule(ExtraHints).html)  
`                 `[`VerbRule(Fasten)`](../object/VerbRule(Fasten).html)  
`                 `[`VerbRule(FastenTo)`](../object/VerbRule(FastenTo).html)  
`                 `[`VerbRule(Feel)`](../object/VerbRule(Feel).html)  
`                 `[`VerbRule(FiatLux)`](../object/VerbRule(FiatLux).html)  
`                 `[`VerbRule(Flip)`](../object/VerbRule(Flip).html)  
`                 `[`VerbRule(Follow)`](../object/VerbRule(Follow).html)  
`                 `[`VerbRule(Footnote)`](../object/VerbRule(Footnote).html)  
`                 `[`VerbRule(FootnotesFull)`](../object/VerbRule(FootnotesFull).html)  
`                 `[`VerbRule(FootnotesMedium)`](../object/VerbRule(FootnotesMedium).html)  
`                 `[`VerbRule(FootnotesOff)`](../object/VerbRule(FootnotesOff).html)  
`                 `[`VerbRule(FootnotesStatus)`](../object/VerbRule(FootnotesStatus).html)  
`                 `[`VerbRule(FullScore)`](../object/VerbRule(FullScore).html)  
`                 `[`VerbRule(GetOff)`](../object/VerbRule(GetOff).html)  
`                 `[`VerbRule(GetOut)`](../object/VerbRule(GetOut).html)  
`                 `[`VerbRule(GetOutOf)`](../object/VerbRule(GetOutOf).html)  
`                 `[`VerbRule(GiveTo)`](../object/VerbRule(GiveTo).html)  
`                 `[`VerbRule(GiveToImplicit)`](../object/VerbRule(GiveToImplicit).html)  
`                 `[`VerbRule(GiveToType2)`](../object/VerbRule(GiveToType2).html)  
`                 `[`VerbRule(GoAlong)`](../object/VerbRule(GoAlong).html)  
`                 `[`VerbRule(GoBack)`](../object/VerbRule(GoBack).html)  
`                 `[`VerbRule(GoNear)`](../object/VerbRule(GoNear).html)  
`                 `[`VerbRule(Goodbye)`](../object/VerbRule(Goodbye).html)  
`                 `[`VerbRule(GoSomewhere)`](../object/VerbRule(GoSomewhere).html)  
`                 `[`VerbRule(GoThrough)`](../object/VerbRule(GoThrough).html)  
`                 `[`VerbRule(GoTo)`](../object/VerbRule(GoTo).html)  
`                 `[`VerbRule(Hello)`](../object/VerbRule(Hello).html)  
`                 `[`VerbRule(Help)`](../object/VerbRule(Help).html)  
`                 `[`VerbRule(Hints)`](../object/VerbRule(Hints).html)  
`                 `[`VerbRule(HintsOff)`](../object/VerbRule(HintsOff).html)  
`                 `[`VerbRule(In)`](../object/VerbRule(In).html)  
`                 `[`VerbRule(instructions)`](../object/VerbRule(instructions).html)  
`                 `[`VerbRule(Intro)`](../object/VerbRule(Intro).html)  
`                 `[`VerbRule(Inventory)`](../object/VerbRule(Inventory).html)  
`                 `[`VerbRule(InventoryTall)`](../object/VerbRule(InventoryTall).html)  
`                 `[`VerbRule(InventoryWide)`](../object/VerbRule(InventoryWide).html)  
`                 `[`VerbRule(Jump)`](../object/VerbRule(Jump).html)  
`                 `[`VerbRule(JumpOff)`](../object/VerbRule(JumpOff).html)  
`                 `[`VerbRule(JumpOffIntransitive)`](../object/VerbRule(JumpOffIntransitive).html)  
`                 `[`VerbRule(JumpOver)`](../object/VerbRule(JumpOver).html)  
`                 `[`VerbRule(KeepGoing)`](../object/VerbRule(KeepGoing).html)  
`                 `[`VerbRule(Kiss)`](../object/VerbRule(Kiss).html)  
`                 `[`VerbRule(Lie)`](../object/VerbRule(Lie).html)  
`                 `[`VerbRule(LieIn)`](../object/VerbRule(LieIn).html)  
`                 `[`VerbRule(LieOn)`](../object/VerbRule(LieOn).html)  
`                 `[`VerbRule(Light)`](../object/VerbRule(Light).html)  
`                 `[`VerbRule(Listen)`](../object/VerbRule(Listen).html)  
`                 `[`VerbRule(ListenTo)`](../object/VerbRule(ListenTo).html)  
`                 `[`VerbRule(ListRelations)`](../object/VerbRule(ListRelations).html)  
`                 `[`VerbRule(ListTests)`](../object/VerbRule(ListTests).html)  
`                 `[`VerbRule(Lock)`](../object/VerbRule(Lock).html)  
`                 `[`VerbRule(LockWith)`](../object/VerbRule(LockWith).html)  
`                 `[`VerbRule(Look)`](../object/VerbRule(Look).html)  
`                 `[`VerbRule(LookBehind)`](../object/VerbRule(LookBehind).html)  
`                 `[`VerbRule(LookHere)`](../object/VerbRule(LookHere).html)  
`                 `[`VerbRule(LookIn)`](../object/VerbRule(LookIn).html)  
`                 `[`VerbRule(LookThrough)`](../object/VerbRule(LookThrough).html)  
`                 `[`VerbRule(LookUnder)`](../object/VerbRule(LookUnder).html)  
`                 `[`VerbRule(LookUp)`](../object/VerbRule(LookUp).html)  
`                 `[`VerbRule(LookX)`](../object/VerbRule(LookX).html)  
`                 `[`VerbRule(Move)`](../object/VerbRule(Move).html)  
`                 `[`VerbRule(MoveTo)`](../object/VerbRule(MoveTo).html)  
`                 `[`VerbRule(MoveWith)`](../object/VerbRule(MoveWith).html)  
`                 `[`VerbRule(No)`](../object/VerbRule(No).html)  
`                 `[`VerbRule(Notify)`](../object/VerbRule(Notify).html)  
`                 `[`VerbRule(NotifyOff)`](../object/VerbRule(NotifyOff).html)  
`                 `[`VerbRule(NotifyOn)`](../object/VerbRule(NotifyOn).html)  
`                 `[`VerbRule(Open)`](../object/VerbRule(Open).html)  
`                 `[`VerbRule(Out)`](../object/VerbRule(Out).html)  
`                 `[`VerbRule(PlugIn)`](../object/VerbRule(PlugIn).html)  
`                 `[`VerbRule(PlugInto)`](../object/VerbRule(PlugInto).html)  
`                 `[`VerbRule(PlugIntoWhat)`](../object/VerbRule(PlugIntoWhat).html)  
`                 `[`VerbRule(Pour)`](../object/VerbRule(Pour).html)  
`                 `[`VerbRule(PourInto)`](../object/VerbRule(PourInto).html)  
`                 `[`VerbRule(PourOnto)`](../object/VerbRule(PourOnto).html)  
`                 `[`VerbRule(Pull)`](../object/VerbRule(Pull).html)  
`                 `[`VerbRule(Purloin)`](../object/VerbRule(Purloin).html)  
`                 `[`VerbRule(Push)`](../object/VerbRule(Push).html)  
`                 `[`VerbRule(PushTravelClimbDown)`](../object/VerbRule(PushTravelClimbDown).html)  
`                 `[`VerbRule(PushTravelClimbUp)`](../object/VerbRule(PushTravelClimbUp).html)  
`                 `[`VerbRule(PushTravelDir)`](../object/VerbRule(PushTravelDir).html)  
`                 `[`VerbRule(PushTravelEnter)`](../object/VerbRule(PushTravelEnter).html)  
`                 `[`VerbRule(PushTravelGetOutOf)`](../object/VerbRule(PushTravelGetOutOf).html)  
`                 `[`VerbRule(PushTravelThrough)`](../object/VerbRule(PushTravelThrough).html)  
`                 `[`VerbRule(PutBehind)`](../object/VerbRule(PutBehind).html)  
`                 `[`VerbRule(PutIn)`](../object/VerbRule(PutIn).html)  
`                 `[`VerbRule(PutOn)`](../object/VerbRule(PutOn).html)  
`                 `[`VerbRule(PutUnder)`](../object/VerbRule(PutUnder).html)  
`                 `[`VerbRule(PutWhere)`](../object/VerbRule(PutWhere).html)  
`                 `[`VerbRule(Query)`](../object/VerbRule(Query).html)  
`                 `[`VerbRule(Query2)`](../object/VerbRule(Query2).html)  
`                 `[`VerbRule(QueryAbout)`](../object/VerbRule(QueryAbout).html)  
`                 `[`VerbRule(QueryVague)`](../object/VerbRule(QueryVague).html)  
`                 `[`VerbRule(Quit)`](../object/VerbRule(Quit).html)  
`                 `[`VerbRule(Read)`](../object/VerbRule(Read).html)  
`                 `[`VerbRule(Record)`](../object/VerbRule(Record).html)  
`                 `[`VerbRule(RecordEvents)`](../object/VerbRule(RecordEvents).html)  
`                 `[`VerbRule(RecordEventsString)`](../object/VerbRule(RecordEventsString).html)  
`                 `[`VerbRule(RecordOff)`](../object/VerbRule(RecordOff).html)  
`                 `[`VerbRule(RecordString)`](../object/VerbRule(RecordString).html)  
`                 `[`VerbRule(RelationDetails)`](../object/VerbRule(RelationDetails).html)  
`                 `[`VerbRule(Remove)`](../object/VerbRule(Remove).html)  
`                 `[`VerbRule(ReplayQuiet)`](../object/VerbRule(ReplayQuiet).html)  
`                 `[`VerbRule(ReplayString)`](../object/VerbRule(ReplayString).html)  
`                 `[`VerbRule(Restart)`](../object/VerbRule(Restart).html)  
`                 `[`VerbRule(Restore)`](../object/VerbRule(Restore).html)  
`                 `[`VerbRule(RestoreString)`](../object/VerbRule(RestoreString).html)  
`                 `[`VerbRule(Sample)`](../object/VerbRule(Sample).html)  
`                 `[`VerbRule(Save)`](../object/VerbRule(Save).html)  
`                 `[`VerbRule(SaveString)`](../object/VerbRule(SaveString).html)  
`                 `[`VerbRule(Say)`](../object/VerbRule(Say).html)  
`                 `[`VerbRule(SayTo)`](../object/VerbRule(SayTo).html)  
`                 `[`VerbRule(Score)`](../object/VerbRule(Score).html)  
`                 `[`VerbRule(Screw)`](../object/VerbRule(Screw).html)  
`                 `[`VerbRule(ScrewWith)`](../object/VerbRule(ScrewWith).html)  
`                 `[`VerbRule(ScriptOff)`](../object/VerbRule(ScriptOff).html)  
`                 `[`VerbRule(ScriptOn)`](../object/VerbRule(ScriptOn).html)  
`                 `[`VerbRule(ScriptString)`](../object/VerbRule(ScriptString).html)  
`                 `[`VerbRule(Search)`](../object/VerbRule(Search).html)  
`                 `[`VerbRule(Seek)`](../object/VerbRule(Seek).html)  
`                 `[`VerbRule(Set)`](../object/VerbRule(Set).html)  
`                 `[`VerbRule(SetTo)`](../object/VerbRule(SetTo).html)  
`                 `[`VerbRule(ShowTo)`](../object/VerbRule(ShowTo).html)  
`                 `[`VerbRule(ShowToImplicit)`](../object/VerbRule(ShowToImplicit).html)  
`                 `[`VerbRule(ShowToType2)`](../object/VerbRule(ShowToType2).html)  
`                 `[`VerbRule(Sit)`](../object/VerbRule(Sit).html)  
`                 `[`VerbRule(SitIn)`](../object/VerbRule(SitIn).html)  
`                 `[`VerbRule(SitOn)`](../object/VerbRule(SitOn).html)  
`                 `[`VerbRule(Sleep)`](../object/VerbRule(Sleep).html)  
`                 `[`VerbRule(Smell)`](../object/VerbRule(Smell).html)  
`                 `[`VerbRule(SmellSomething)`](../object/VerbRule(SmellSomething).html)  
`                 `[`VerbRule(Stand)`](../object/VerbRule(Stand).html)  
`                 `[`VerbRule(StandIn)`](../object/VerbRule(StandIn).html)  
`                 `[`VerbRule(StandOn)`](../object/VerbRule(StandOn).html)  
`                 `[`VerbRule(Strike)`](../object/VerbRule(Strike).html)  
`                 `[`VerbRule(Switch)`](../object/VerbRule(Switch).html)  
`                 `[`VerbRule(SwitchOff)`](../object/VerbRule(SwitchOff).html)  
`                 `[`VerbRule(SwitchOn)`](../object/VerbRule(SwitchOn).html)  
`                 `[`VerbRule(Take)`](../object/VerbRule(Take).html)  
`                 `[`VerbRule(TakeFrom)`](../object/VerbRule(TakeFrom).html)  
`                 `[`VerbRule(TalkAbout)`](../object/VerbRule(TalkAbout).html)  
`                 `[`VerbRule(TalkAboutImplicit)`](../object/VerbRule(TalkAboutImplicit).html)  
`                 `[`VerbRule(TalkTo)`](../object/VerbRule(TalkTo).html)  
`                 `[`VerbRule(Taste)`](../object/VerbRule(Taste).html)  
`                 `[`VerbRule(TellAbout)`](../object/VerbRule(TellAbout).html)  
`                 `[`VerbRule(TellAboutImplicit)`](../object/VerbRule(TellAboutImplicit).html)  
`                 `[`VerbRule(TellAboutWhat)`](../object/VerbRule(TellAboutWhat).html)  
`                 `[`VerbRule(TellThat)`](../object/VerbRule(TellThat).html)  
`                 `[`VerbRule(TellTo)`](../object/VerbRule(TellTo).html)  
`                 `[`VerbRule(TellVague)`](../object/VerbRule(TellVague).html)  
`                 `[`VerbRule(Test)`](../object/VerbRule(Test).html)  
`                 `[`VerbRule(Think)`](../object/VerbRule(Think).html)  
`                 `[`VerbRule(ThinkAbout)`](../object/VerbRule(ThinkAbout).html)  
`                 `[`VerbRule(Throw)`](../object/VerbRule(Throw).html)  
`                 `[`VerbRule(ThrowAt)`](../object/VerbRule(ThrowAt).html)  
`                 `[`VerbRule(ThrowDir)`](../object/VerbRule(ThrowDir).html)  
`                 `[`VerbRule(ThrowDirDown)`](../object/VerbRule(ThrowDirDown).html)  
`                 `[`VerbRule(ThrowTo)`](../object/VerbRule(ThrowTo).html)  
`                 `[`VerbRule(ThrowToType2)`](../object/VerbRule(ThrowToType2).html)  
`                 `[`VerbRule(Topics)`](../object/VerbRule(Topics).html)  
`                 `[`VerbRule(Travel)`](../object/VerbRule(Travel).html)  
`                 `[`VerbRule(Turn)`](../object/VerbRule(Turn).html)  
`                 `[`VerbRule(TurnTo)`](../object/VerbRule(TurnTo).html)  
`                 `[`VerbRule(TurnWith)`](../object/VerbRule(TurnWith).html)  
`                 `[`VerbRule(TypeLiteralOn)`](../object/VerbRule(TypeLiteralOn).html)  
`                 `[`VerbRule(TypeLiteralOnWhat)`](../object/VerbRule(TypeLiteralOnWhat).html)  
`                 `[`VerbRule(TypeOn)`](../object/VerbRule(TypeOn).html)  
`                 `[`VerbRule(Undo)`](../object/VerbRule(Undo).html)  
`                 `[`VerbRule(Unfasten)`](../object/VerbRule(Unfasten).html)  
`                 `[`VerbRule(UnfastenFrom)`](../object/VerbRule(UnfastenFrom).html)  
`                 `[`VerbRule(Unlock)`](../object/VerbRule(Unlock).html)  
`                 `[`VerbRule(UnlockWith)`](../object/VerbRule(UnlockWith).html)  
`                 `[`VerbRule(Unplug)`](../object/VerbRule(Unplug).html)  
`                 `[`VerbRule(UnplugFrom)`](../object/VerbRule(UnplugFrom).html)  
`                 `[`VerbRule(Unscrew)`](../object/VerbRule(Unscrew).html)  
`                 `[`VerbRule(UnscrewWith)`](../object/VerbRule(UnscrewWith).html)  
`                 `[`VerbRule(VagueTravel)`](../object/VerbRule(VagueTravel).html)  
`                 `[`VerbRule(Verbose)`](../object/VerbRule(Verbose).html)  
`                 `[`VerbRule(Version)`](../object/VerbRule(Version).html)  
`                 `[`VerbRule(Wait)`](../object/VerbRule(Wait).html)  
`                 `[`VerbRule(Wear)`](../object/VerbRule(Wear).html)  
`                 `[`VerbRule(WhatAmICarrying)`](../object/VerbRule(WhatAmICarrying).html)  
`                 `[`VerbRule(WhatIsNoun)`](../object/VerbRule(WhatIsNoun).html)  
`                 `[`VerbRule(WhatNext)`](../object/VerbRule(WhatNext).html)  
`                 `[`VerbRule(WhatsHere)`](../object/VerbRule(WhatsHere).html)  
`                 `[`VerbRule(WhatsThePoint)`](../object/VerbRule(WhatsThePoint).html)  
`                 `[`VerbRule(WhatThisGame)`](../object/VerbRule(WhatThisGame).html)  
`                 `[`VerbRule(WhereAmI)`](../object/VerbRule(WhereAmI).html)  
`                 `[`VerbRule(WhereGo)`](../object/VerbRule(WhereGo).html)  
`                 `[`VerbRule(WhereHelp)`](../object/VerbRule(WhereHelp).html)  
`                 `[`VerbRule(WhoAmI)`](../object/VerbRule(WhoAmI).html)  
`                 `[`VerbRule(Write)`](../object/VerbRule(Write).html)  
`                 `[`VerbRule(WriteOn)`](../object/VerbRule(WriteOn).html)  
`                 `[`VerbRule(Yell)`](../object/VerbRule(Yell).html)  
`                 `[`VerbRule(Yes)`](../object/VerbRule(Yes).html)  
`         `[`withSingleNoun(main)`](../object/withSingleNoun(main).html)  
`         `[`YesOrNoProduction`](../object/YesOrNoProduction.html)  
`                 `[`yesOrNoPhrase(no)`](../object/yesOrNoPhrase(no).html)  
`                 `[`yesOrNoPhrase(yes)`](../object/yesOrNoPhrase(yes).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`determiner`](#determiner)`  `[`nounPhraseRole`](#nounPhraseRole)`  `[`npClass`](#npClass)`  `[`parent`](#parent)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addNounListItem`](#addNounListItem)`  `[`build`](#build)`  `[`findAction`](#findAction)`  `[`findChild`](#findChild)`  `[`findParent`](#findParent)`  `[`getNounPhraseRole`](#getNounPhraseRole)`  `[`getText`](#getText)`  `[`getTokens`](#getTokens)`  `[`grammarInfoForBuild`](#grammarInfoForBuild)`  `[`isChildOf`](#isChildOf)`  `[`noteEndOfSentence`](#noteEndOfSentence)`  `[`visitLiteral`](#visitLiteral)`  `[`visitProd`](#visitProd)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="determiner"></span>

`determiner`

[parser.t](../file/parser.t.html)\[[3487](../source/parser.t.html#3487)\]

<div class="desc">

The determiner that this production applies to the noun phrase it's part
of, as a Determiner object. If this is non-nil, this Determiner will be
set in the current NounPhrase when we visit this production in the build
process.

</div>

<span id="nounPhraseRole"></span>

`nounPhraseRole`

[parser.t](../file/parser.t.html)\[[3446](../source/parser.t.html#3446)\]

<div class="desc">

My assigned noun phrase role, as a NounRole object. This must be
explicitly set for the top node in a noun slot (which can be a noun list
production, a single noun production, a topic, etc).

In a positional language grammar, the predicate production will mark its
immediate child in each noun phrase slot by setting this according to
the role that the sub-tree plays in the predicate grammar.
Non-positional languages that use grammatical case or other ways of
encoding the role information must set this some other way.

</div>

<span id="npClass"></span>

`npClass`

[parser.t](../file/parser.t.html)\[[3432](../source/parser.t.html#3432)\]

<div class="desc">

The NounPhrase subclass to use for noun phrases within this sub-tree. By
default, we look to our parent; if we don't have a parent, we use the
base NounPhrase class.

Special phrase types (topics, literals, and numbers) have their own
NounPhrase subclasses. This is important because the resolution rules
for these phrase types differ from the regular object resolution rules.

</div>

<span id="parent"></span>

`parent`

[parser.t](../file/parser.t.html)\[[3502](../source/parser.t.html#3502)\]

<div class="desc">

My parent production. The low-level GrammarProd mechanism doesn't set
this up, so we set it up ourselves in the course of building out the
tree. In build(), just before we visit each sub-production, we set the
sub-production's 'parent' property to point back to the parent
production. This property is therefore always set while we're traversing
the child's tree, but won't necessarily be set yet if we're not
currently working somewhere within the child's tree. That means that you
can always look at 'parent' within your own build() routine or a child
build() routine, but you can't necessarily look at it across the tree or
within your own children.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addNounListItem"></span>

`addNounListItem (cmd, prod)`

[parser.t](../file/parser.t.html)\[[3404](../source/parser.t.html#3404)\]

<div class="desc">

Add a new NounPhrase item to the list under construction. Certain
productions are associated with specific functional slots in the
abstract command - direct object, indirect object, EXCEPT list, etc.
This routine is for such production subclasses to override, to direct
new noun phrases into the appropriate slot lists. In a grammar, the
functional role is typically at a higher level in the tree, with
ordinary noun phrases plugged in underneath.

Our default handling is to first check our nounPhraseRole property; if
it's set, it tells us the role that this sub-tree plays in the predicate
(direct object, indirect object, accessory). We use that information to
add the new NounPhrase to the Command list that we're building for our
assigned role.

If nounPhraseRole is nil, then we simply pass the request up to our
parent. Eventually we should reach a node encoding the function slot.

</div>

<span id="build"></span>

`build (cmd, np)`

[parser.t](../file/parser.t.html)\[[3329](../source/parser.t.html#3329)\]

<div class="desc">

Build the command for this production and its children. By default,
we'll simply traverse into our children.

</div>

<span id="findAction"></span>

`findAction ( )`

[parser.t](../file/parser.t.html)\[[3538](../source/parser.t.html#3538)\]

<div class="desc">

Find the action. This finds the child of type VerbProduction, then
retrieves the action from the verb production.

</div>

<span id="findChild"></span>

`findChild (cls)`

[parser.t](../file/parser.t.html)\[[3550](../source/parser.t.html#3550)\]

<div class="desc">

Find a child of a given class.

</div>

<span id="findParent"></span>

`findParent (func)`

[parser.t](../file/parser.t.html)\[[3509](../source/parser.t.html#3509)\]

<div class="desc">

Find a parent matching a given test. We'll scan up the parent tree,
looking for the nearest parent p for which func(p) returns true,
returning p. If we can't find one, we return nil.

</div>

<span id="getNounPhraseRole"></span>

`getNounPhraseRole ( )`

[parser.t](../file/parser.t.html)\[[3452](../source/parser.t.html#3452)\]

<div class="desc">

Get our noun phrase role. If we don't have a role defined directly,
we'll inherit the role from our parent node.

</div>

<span id="getText"></span>

`getText ( )`

[parser.t](../file/parser.t.html)\[[3304](../source/parser.t.html#3304)\]

<div class="desc">

get the original text of the command for this match

</div>

<span id="getTokens"></span>

`getTokens ( )`

[parser.t](../file/parser.t.html)\[[3315](../source/parser.t.html#3315)\]

<div class="desc">

get my original token list, in canonical tokenizer format

</div>

<span id="grammarInfoForBuild"></span>

`grammarInfoForBuild ( )`

[parser.t](../file/parser.t.html)\[[3379](../source/parser.t.html#3379)\]

<div class="desc">

Get the grammar match list for build() purposes. By default, this simply
returns the grammarInfo() results, which are automatically generated by
the compiler to return a list of the "-\>prop" values from the matched
grammar rule. Some rules might want to modify that default value list,
so we provide this routine as an override hook.

</div>

<span id="isChildOf"></span>

`isChildOf (prod)`

[parser.t](../file/parser.t.html)\[[3520](../source/parser.t.html#3520)\]

<div class="desc">

Is this production a child of the given production?

</div>

<span id="noteEndOfSentence"></span>

`noteEndOfSentence (cmd, prod)`

[parser.t](../file/parser.t.html)\[[3416](../source/parser.t.html#3416)\]

<div class="desc">

Note an end-of-sentence marker. We'll simply notify our parent by
default.

</div>

<span id="visitLiteral"></span>

`visitLiteral (cmd, np, tok)`

[parser.t](../file/parser.t.html)\[[3463](../source/parser.t.html#3463)\]

<div class="desc">

Visit a literal token child in our sub-tree. This is called during the
build process for each literal token in our child list. By default, we
add the token to the command's current noun phrase.

</div>

<span id="visitProd"></span>

`visitProd (cmd, np, prod)`

[parser.t](../file/parser.t.html)\[[3475](../source/parser.t.html#3475)\]

<div class="desc">

Visit a production object in our list. This is called during the build
process for each production object in our child list. By default, we
simply build the child production recursively.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
