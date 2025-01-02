---
layout: docs
---
<span class="title">english.t</span><span class="type">file</span>

[source file](../source/english.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

The main English language module.

This is the English implementation of the generic language interfaces.
All of the code here is English-specific, so other language modules will
replace the actual implementation. However, somef of the methods and
properties are part of the generic interface - this means that each
language module must define methods and properties with these names, and
with the abstract behavior described. How they actually implement the
behavior is up to them.

Methods and properties that are part of the generic interface are
identified with \[Required\].

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

[`CustomVocab`](../object/CustomVocab.html)[`LCommandTopicHelper`](../object/LCommandTopicHelper.html)[`LMentionable`](../object/LMentionable.html)[`LState`](../object/LState.html)
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

[`actorActionContinuer_`](../object/actorActionContinuer_.html)[`decimalPreParser`](../object/decimalPreParser.html)[`DirState`](../object/DirState.html)[`englishCustomVocab`](../object/englishCustomVocab.html)[`englishMessageParams`](../object/englishMessageParams.html)[`englishOptions`](../object/englishOptions.html)[`finishOptionsLister`](../object/finishOptionsLister.html)[`getOnGroundDoer`](../object/getOnGroundDoer.html)[`libMessages`](../object/libMessages.html)[`LitUnlit`](../object/LitUnlit.html)[`OpenClosed`](../object/OpenClosed.html)[`prevDummy_`](../object/prevDummy_.html)[`pronounPreinit`](../object/pronounPreinit.html)[`putOnGroundDoer`](../object/putOnGroundDoer.html)[`removeDoer`](../object/removeDoer.html)[`subLister`](../object/subLister.html)[`takePathDoer`](../object/takePathDoer.html)
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

[`andList`](#andList)[`announceBestChoice`](#announceBestChoice)[`askAmbiguous`](#askAmbiguous)[`askMissingNoun`](#askMissingNoun)[`conjugate`](#conjugate)[`conjugateBe`](#conjugateBe)[`conjugateBeNot`](#conjugateBeNot)[`conjugateCan`](#conjugateCan)[`conjugateDoNot`](#conjugateDoNot)[`conjugateDont`](#conjugateDont)[`conjugateHavenot`](#conjugateHavenot)[`conjugateHavnt`](#conjugateHavnt)[`conjugateIm`](#conjugateIm)[`conjugateIsnt`](#conjugateIsnt)[`conjugateIve`](#conjugateIve)[`conjugateMust`](#conjugateMust)[`conjugateRegular`](#conjugateRegular)[`conjugateWas`](#conjugateWas)[`conjugateWasnot`](#conjugateWasnot)[`conjugateWasnt`](#conjugateWasnt)[`genList`](#genList)[`isListStr`](#isListStr)[`langAdjust`](#langAdjust)[`listStrIs`](#listStrIs)[`makeCountedPlural`](#makeCountedPlural)[`makeListInStr`](#makeListInStr)[`makeListStr`](#makeListStr)[`makeSentence`](#makeSentence)[`mentionA`](#mentionA)[`mentionThe`](#mentionThe)[`mergeDuplicates`](#mergeDuplicates)[`nounRoleQuestion`](#nounRoleQuestion)[`npListPronoun`](#npListPronoun)[`orList`](#orList)[`pastParticiple`](#pastParticiple)[`spelledToInt`](#spelledToInt)[`spellNumber`](#spellNumber)[`stripArticle`](#stripArticle)[`yesOrNo`](#yesOrNo)

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="andList"></span>

`andList (lst)`

[english.t](../file/english.t.html)\[[3512](../source/english.t.html#3512)\]

<div class="desc">

Construct a printable list of strings separated by "and" conjunctions.

</div>

<span id="announceBestChoice"></span>

`announceBestChoice (action, obj, role)`

[english.t](../file/english.t.html)\[[3868](../source/english.t.html#3868)\]

<div class="desc">

Announce our choice of object when askForIobj() or askForDobj() chooses
the best match on the player's behalf. We find the section of the
verbPhrase appropriate to the direct or indirect object (e.g. '(what)'
or '(on what)') and replace 'what' with the object name.

</div>

<span id="askAmbiguous"></span>

`askAmbiguous (cmd, role, names)`

[english.t](../file/english.t.html)\[[3787](../source/english.t.html#3787)\]

<div class="desc">

Ask for help with an ambiguous noun. The parser calls this when the
player enters a noun phrase that's ambiguous, and we need to ask for
clarification.

'cmd' is the command, 'role' is the noun phrase's role in the predicate
(DirectObject, etc), and 'nameList' is a list of strings determined by
the Distinguisher process.

\[Required\]

</div>

<span id="askMissingNoun"></span>

`askMissingNoun (cmd, role)`

[english.t](../file/english.t.html)\[[3771](../source/english.t.html#3771)\]

<div class="desc">

Ask for a missing noun phrase. The parser calls this when the player
enters a command that omits a required noun phrase, such as PUT KEY or
just TAKE.

'cmd' is the Command object. The other objects in the command, if any,
have been resolved as much as possible when this is called. 'role' is
the NounRole object telling us which predicate role is missing
(DirectObject, IndirectObject, etc).

\[Required\]

</div>

<span id="conjugate"></span>

`conjugate (ctx, params)`

[english.t](../file/english.t.html)\[[4668](../source/english.t.html#4668)\]

<div class="desc">

Regular verb conjugator. This takes the list of CustomVocab verbParmas
tokens built during preinit, and returns the appropriate conjugation for
the subject and tense.

</div>

<span id="conjugateBe"></span>

`conjugateBe (ctx, params)`

[english.t](../file/english.t.html)\[[4861](../source/english.t.html#4861)\]

<div class="desc">

Conjugate "to be". This is a handler function for message parameter
expansion, for the "be" verb parameters ({am}, {is}, {are}).

</div>

<span id="conjugateBeNot"></span>

`conjugateBeNot (ctx, params)`

[english.t](../file/english.t.html)\[[4906](../source/english.t.html#4906)\]

<div class="desc">

Conjugate "to be" in negative senses. This is a handler function for
message parameter expansion, for auxiliaries with negative usage
(cannot, will not, etc).

</div>

<span id="conjugateCan"></span>

`conjugateCan (ctx, params, beFunc, present, past)`

[english.t](../file/english.t.html)\[[5280](../source/english.t.html#5280)\]

<div class="desc">

Conjugate 'can', 'can\\t', or 'cannot'. In the present, these are
variations on "I can"; in the past, "I could"; in all other tenses,
these change to conjugations of "to be able to": I have been able to, I
had been able to, I will be able to, I will have been able to.

</div>

<span id="conjugateDoNot"></span>

`conjugateDoNot (ctx, params)`

[english.t](../file/english.t.html)\[[5232](../source/english.t.html#5232)\]

<div class="desc">

Conjugate "do not" plus a verb. "Do not" is always an auxiliary in
English, and has an irregular structure in different tenses. The second
token in the {donot x} phrase is the main verb we're auxiliarizing.

</div>

<span id="conjugateDont"></span>

`conjugateDont (ctx, params)`

[english.t](../file/english.t.html)\[[5185](../source/english.t.html#5185)\]

<div class="desc">

Conjugate "don't" plus a verb. "Don't" is always an auxiliary in
English, and has an irregular structure in different tenses. The second
token in the {don't x} phrase is the main verb we're auxiliarizing.

</div>

<span id="conjugateHavenot"></span>

`conjugateHavenot (ctx, params)`

[english.t](../file/english.t.html)\[[5158](../source/english.t.html#5158)\]

<div class="desc">

*no description available*

</div>

<span id="conjugateHavnt"></span>

`conjugateHavnt (ctx, params)`

[english.t](../file/english.t.html)\[[5136](../source/english.t.html#5136)\]

<div class="desc">

Conjugate haven\\t (contracted have not)

</div>

<span id="conjugateIm"></span>

`conjugateIm (ctx, params)`

[english.t](../file/english.t.html)\[[4996](../source/english.t.html#4996)\]

<div class="desc">

Conjugate "to be" contractions - I'm, you're, he's, she's, etc. This is
a handler function for message parameter expansion, for the "be" verb
parameters with contraction ({I'm}, {he's}, {you're}).

</div>

<span id="conjugateIsnt"></span>

`conjugateIsnt (ctx, params)`

[english.t](../file/english.t.html)\[[4951](../source/english.t.html#4951)\]

<div class="desc">

Conjugate "isn't". This is a handler function for message parameter
expansion, for the "be" verb parameters with "not" contractions ({am
not}, {isn't}, {aren't}).

</div>

<span id="conjugateIve"></span>

`conjugateIve (ctx, params)`

[english.t](../file/english.t.html)\[[5108](../source/english.t.html#5108)\]

<div class="desc">

Conjugate 've (contraction of have). After some words it's better not to
contract (e.g. Liz's or Jesus'd is a a bit awkward) so we use the full
'have' or 'had' form for such subjects and the contracted form
otherwise.

</div>

<span id="conjugateMust"></span>

`conjugateMust (ctx, params)`

[english.t](../file/english.t.html)\[[5306](../source/english.t.html#5306)\]

<div class="desc">

Conjugate "must" plus a verb. In the present, this is "I must \<x\>"; in
other tenses, this is a conjugation of "to have to \<x\>": I had to
\<x\>, I have to have \<xed\>, I had to have \<xed\>, I will have to
\<x\>, I will have to have \<xed\>.

</div>

<span id="conjugateRegular"></span>

`conjugateRegular (ctx, params)`

[english.t](../file/english.t.html)\[[4751](../source/english.t.html#4751)\]

<div class="desc">

Conjugate a regular verb

</div>

<span id="conjugateWas"></span>

`conjugateWas (ctx, params)`

[english.t](../file/english.t.html)\[[5042](../source/english.t.html#5042)\]

<div class="desc">

Conjugate the past tense of "to be" where we want to use the past tense
in a present context (e.g. "You can see that Kilroy was here. "). This
is a handler function for {was} or {were}.

</div>

<span id="conjugateWasnot"></span>

`conjugateWasnot (ctx, params)`

[english.t](../file/english.t.html)\[[5082](../source/english.t.html#5082)\]

<div class="desc">

*no description available*

</div>

<span id="conjugateWasnt"></span>

`conjugateWasnt (ctx, params)`

[english.t](../file/english.t.html)\[[5062](../source/english.t.html#5062)\]

<div class="desc">

*no description available*

</div>

<span id="genList"></span>

`genList (lst, conj)`

[english.t](../file/english.t.html)\[[3520](../source/english.t.html#3520)\]

<div class="desc">

General list constructor

</div>

<span id="isListStr"></span>

`isListStr (objList)`

[english.t](../file/english.t.html)\[[3480](../source/english.t.html#3480)\]

<div class="desc">

Function for use with the \<\<is list of \*\>\> string template,
prefixing a list with the correct form of the verb to be to match the
grammatical number of the list (e.g. "There are a box and a glove here"
or "There is box here").

</div>

<span id="langAdjust"></span>

`langAdjust (txt)`

[english.t](../file/english.t.html)\[[4717](../source/english.t.html#4717)\]

<div class="desc">

Language specific adjustments to a string applied before the message
processor looks for parameter substitutions. Here we scan txt for
sequences like 'verb{s/d}' and convert them to '{conj verb s/d}', which
the parameter substitution mechanism can then deal with.

</div>

<span id="listStrIs"></span>

`listStrIs (objList)`

[english.t](../file/english.t.html)\[[3495](../source/english.t.html#3495)\]

<div class="desc">

Function for use by the \<\<list of \* is\>\> string template, which
returns a formatted list followed by the appropriate form of the verb
'to be' in grammatical agreement with that list.

</div>

<span id="makeCountedPlural"></span>

`makeCountedPlural (str, num)`

[english.t](../file/english.t.html)\[[3626](../source/english.t.html#3626)\]

<div class="desc">

Take the string representation of a name (str) and a number (num) and
return a string with the number spelled out and the name pluralised,
e.g. makeCountPlural('a cat', 3) -\> 'three cats' Amended to deal with
the more complex case ('taking the coin'), 3) -\> 'taking three coins');
i.e. the method now substitutes the number for the first occurrence of
an article, if there is one.

</div>

<span id="makeListInStr"></span>

`makeListInStr (objList)`

[english.t](../file/english.t.html)\[[3469](../source/english.t.html#3469)\]

<div class="desc">

A version of makeListStr that uses only one parameter, for use by the
\<\<list of \*\>\>string template

</div>

<span id="makeListStr"></span>

`makeListStr (objList, nameProp, =, &, aName, conjunction, =, ', and, ')`

[english.t](../file/english.t.html)\[[3363](../source/english.t.html#3363)\]

<div class="desc">

Take a list of objects supplied in objList and return a formatted list
in a single quoted string, having first sorted the items in objList in
the order of their listOrder property.

If the nameProp parameter is supplied, we'll use that property for the
name of every item in the list; otherwise we use the aName property by
default.

By default the last two items in the list are separated by 'and', but we
can choose a different conjunction by supplying the conjunction
parameter.

</div>

<span id="makeSentence"></span>

`makeSentence (msg)`

[english.t](../file/english.t.html)\[[4103](../source/english.t.html#4103)\]

<div class="desc">

make an error message into a sentence, by capitalizing the first letter
and adding a period at the end if it doesn't already have one

</div>

<span id="mentionA"></span>

`mentionA (obj)`

[english.t](../file/english.t.html)\[[3422](../source/english.t.html#3422)\]

<div class="desc">

Function to use with the \<\<mention a \*\>\> string template. This
marks the object as mentioned in a room description and allows it to be
used as the antecedent of a {prev} tag, to ensure verb agreement.

</div>

<span id="mentionThe"></span>

`mentionThe (obj)`

[english.t](../file/english.t.html)\[[3446](../source/english.t.html#3446)\]

<div class="desc">

Function to use with the \<\<mention the \*\>\> string template. This
marks the object as mentioned in a room description and allows it to be
used as the antecedent of a {prev} tag, to ensure verb agreement.

</div>

<span id="mergeDuplicates"></span>

`mergeDuplicates (lst)`

[english.t](../file/english.t.html)\[[3558](../source/english.t.html#3558)\]

<div class="desc">

Take a list of strings of the form \['a book', 'a cat', 'a book'\] and
merge the duplicate items to return a list of the form \['two books', 'a
cat'\]

</div>

<span id="nounRoleQuestion"></span>

`nounRoleQuestion (cmd, role)`

[english.t](../file/english.t.html)\[[3814](../source/english.t.html#3814)\]

<div class="desc">

Get the basic question for a noun role. This turns the verb around into
a question about one of its roles. For example, for (Open,
DirectObject), we'd return "what do you want to open". For (AttachTo
IndirectObject), "what do you want to connect it to".

</div>

<span id="npListPronoun"></span>

`npListPronoun (pro, nplst, prep)`

[english.t](../file/english.t.html)\[[3904](../source/english.t.html#3904)\]

<div class="desc">

Get the pronoun for a resolved (or partially resolved) NounPhrase list
from a command.

</div>

<span id="orList"></span>

`orList (lst)`

[english.t](../file/english.t.html)\[[3504](../source/english.t.html#3504)\]

<div class="desc">

Construct a printable list of strings separated by "or" conjunctions.

</div>

<span id="pastParticiple"></span>

`pastParticiple (verb)`

[english.t](../file/english.t.html)\[[4825](../source/english.t.html#4825)\]

<div class="desc">

Form the past participle of a verb, which may either be given in the
form xxx, in which case we assume it's an irregular verb to be looked up
in the table of irregular verbs, or in the form xxx\[y/z\], in which
case we assume it's a regular verb to be conjugated according to the
\[y/z\] ending.

</div>

<span id="spelledToInt"></span>

`spelledToInt (str)`

[english.t](../file/english.t.html)\[[2896](../source/english.t.html#2896)\]

<div class="desc">

Try to convert a spelled out number (e.g. 'ninety-six') to its integer
representation. If this fails, return nil.

</div>

<span id="spellNumber"></span>

`spellNumber (n)`

[english.t](../file/english.t.html)\[[2800](../source/english.t.html#2800)\]

<div class="desc">

Generate a spelled-out version of the given number value, or simply a
string representation of the number. We follow fairly standard English
style rules:

  
- we spell out numbers below 100  
- we also spell out round figures above 100 that can be expressed  
in two words (e.g., "fifteen thousand" or "thirty million")  
- for millions and billions, we write, e.g., "1.7 million", if
possible  
- for anything else, we return the decimal digits, with commas to  
separate groups of thousands (e.g., 120,400)

Other languages might have different style rules, so the choice using a
spelled-out number or digits might vary by language.

\[Required\]

</div>

<span id="stripArticle"></span>

`stripArticle (txt)`

[english.t](../file/english.t.html)\[[3667](../source/english.t.html#3667)\]

<div class="desc">

Remove any definite or indefinite article that occurs at the beginning
of txt, and return the resultant string in lower case.

</div>

<span id="yesOrNo"></span>

`yesOrNo ( )`

[english.t](../file/english.t.html)\[[5848](../source/english.t.html#5848)\]

<div class="desc">

Simple yes/no confirmation. The caller must display a prompt; we'll read
a command line response, then return true if it's an affirmative
response, nil if not.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
