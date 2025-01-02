---
layout: docs
---
<span class="title">Command</span><span class="type">class</span>

[command.t](../file/command.t.html)\[[15](../source/command.t.html#15)\],
[english.t](../file/english.t.html)\[[2109](../source/english.t.html#2109)\]

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



A Command describes the results of parsing one player predicate - that
is, a single verb phrase, with all its parts. This includes the action
to be performed and the objects to perform it on. It also includes
information on the text of the player's input, and how it maps onto the
grammar structures defined by the language module.

The Command object is built in several steps, so its contents aren't
complete until all of the steps are completed.

*Modified in
[english.t](../file/english.t.html)\[[2109](../source/english.t.html#2109)\]:*  
Modification to the Command class so that when reconstructing a command
string from its tokens a separate apostrophe-S token is concatenated
with the previous word when storing the name (which undoes the effect on
building the name of what the English-language tokenizer does with
apostrophe-S).

`class `**`Command`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Command`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Command`**  
[`FuncCommand`](../object/FuncCommand.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`acc`](#acc) [`accInfo`](#accInfo) [`accNPs`](#accNPs) [`accs`](#accs) [`action`](#action) [`actions`](#actions) [`actor`](#actor) [`actorNPs`](#actorNPs) [`actorPerson`](#actorPerson) [`actors`](#actors) [`afterReports`](#afterReports) [`aobj`](#aobj) [`badMulti`](#badMulti) [`cmdErr`](#cmdErr) [`disambig`](#disambig) [`disambigIdx`](#disambigIdx) [`dobj`](#dobj) [`dobjInfo`](#dobjInfo) [`dobjNPs`](#dobjNPs) [`dobjs`](#dobjs) [`endOfSentence`](#endOfSentence) [`implicitActionReports`](#implicitActionReports) [`iobj`](#iobj) [`iobjInfo`](#iobjInfo) [`iobjNPs`](#iobjNPs) [`iobjs`](#iobjs) [`lastAction`](#lastAction) [`madeTopic`](#madeTopic) [`matchedAll`](#matchedAll) [`matchedMulti`](#matchedMulti) [`miscWordLists`](#miscWordLists) [`missingNouns`](#missingNouns) [`nextTokens`](#nextTokens) [`npList`](#npList) [`npListSorted`](#npListSorted) [`npToResolve`](#npToResolve) [`originalAction`](#originalAction) [`parseTree`](#parseTree) [`predActive`](#predActive) [`predPriority`](#predPriority) [`priority`](#priority) [`reflexiveAnte`](#reflexiveAnte) [`tokenLen`](#tokenLen) [`verbProd`](#verbProd)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addDisambigNP`](#addDisambigNP) [`addNounListItem`](#addNounListItem) [`addNounProd`](#addNounProd) [`afterReport`](#afterReport) [`buildCommandString`](#buildCommandString) [`buildObjLists`](#buildObjLists) [`calcPriority`](#calcPriority) [`changeAction`](#changeAction) [`clone`](#clone) [`cloneNP`](#cloneNP) [`construct`](#construct) [`emptyNounRole`](#emptyNounRole) [`exec`](#exec) [`execCombos`](#execCombos) [`execDoer`](#execDoer) [`execIter`](#execIter) [`fetchDisambigReply`](#fetchDisambigReply) [`fixPriority`](#fixPriority) [`forEachNP`](#forEachNP) [`forEachObj`](#forEachObj) [`getCommandPhrase`](#getCommandPhrase) [`noteMiscWords`](#noteMiscWords) [`npTokenLen`](#npTokenLen) [`numNounSlots`](#numNounSlots) [`resolveNouns`](#resolveNouns) [`resolveReflexive`](#resolveReflexive) [`saveReflexiveAnte`](#saveReflexiveAnte) [`sortList`](#sortList) [`startDisambigReply`](#startDisambigReply) [`terseOK`](#terseOK)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="acc"></span>

`acc`

[command.t](../file/command.t.html)\[[1244](../source/command.t.html#1244)\]



the accessory object for the current iteration



<span id="accInfo"></span>

`accInfo`

[command.t](../file/command.t.html)\[[1250](../source/command.t.html#1250)\]



the NPMatch object for the current accessory



<span id="accNPs"></span>

`accNPs`

[command.t](../file/command.t.html)\[[1238](../source/command.t.html#1238)\]



the accessory phrases, as a list of NounPhrase objects



<span id="accs"></span>

`accs`

[command.t](../file/command.t.html)\[[1241](../source/command.t.html#1241)\]



the list of resolved accessory objects, as NPMatch objects



<span id="action"></span>

`action`

[command.t](../file/command.t.html)\[[1185](../source/command.t.html#1185)\]



the Action object giving the action to be performed



<span id="actions"></span>

`actions`

[command.t](../file/command.t.html)\[[341](../source/command.t.html#341)\]



A list of actions executed directly by this command or via a Doer



<span id="actor"></span>

`actor`

[command.t](../file/command.t.html)\[[1194](../source/command.t.html#1194)\]



the resolved actor; we determine this before disambiguation



<span id="actorNPs"></span>

`actorNPs`

[command.t](../file/command.t.html)\[[1197](../source/command.t.html#1197)\]



the actor(s) to whom the command is addressed, as a NounPhrase list



<span id="actorPerson"></span>

`actorPerson`

[command.t](../file/command.t.html)\[[1211](../source/command.t.html#1211)\]



The grammatical person in which we're addressing the actor. This is 2
for a second-person address, 3 for third-person orders. (It's hard to
think of a case for first-person orders, but

The conventional IF syntax for giving orders is ACTOR, DO SOMETHING,
which addresses ACTOR in the second person (as YOU). This means that
second-person pronouns



<span id="actors"></span>

`actors`

[command.t](../file/command.t.html)\[[1200](../source/command.t.html#1200)\]



the actor(s), as NPMatch objects



<span id="afterReports"></span>

`afterReports`

[command.t](../file/command.t.html)\[[354](../source/command.t.html#354)\]



A list of strings containing reports to be displayed at the end of the
command execution cycle for this command.



<span id="aobj"></span>

`aobj`

[command.t](../file/command.t.html)\[[1247](../source/command.t.html#1247)\]



synonym for the accessory object



<span id="badMulti"></span>

`badMulti`

[command.t](../file/command.t.html)\[[1300](../source/command.t.html#1300)\]



Error flag: we have a noun list (grammatically) where a single noun is
required. When this occurs, this will be set to the role where the error
was noted.



<span id="cmdErr"></span>

`cmdErr`

[command.t](../file/command.t.html)\[[1317](../source/command.t.html#1317)\]



The error we encountered building the command, if any. This is usually a
noun resolution error.



<span id="disambig"></span>

`disambig`

[command.t](../file/command.t.html)\[[1262](../source/command.t.html#1262)\]



Disambiguation replies. Each time the player answers a disambiguation
question, we add the reply to this list. We then go back and re-resolve
the noun phrases, fetching replies from the list as we encounter the
ambiguous objects again.

Note that this is a list of list. Each reply is a list of NounPhrase
objects, and we might have a series of replies, so one list represents
one reply.



<span id="disambigIdx"></span>

`disambigIdx`

[command.t](../file/command.t.html)\[[1265](../source/command.t.html#1265)\]



the next available disambiguation reply



<span id="dobj"></span>

`dobj`

[command.t](../file/command.t.html)\[[1220](../source/command.t.html#1220)\]



the current direct object for the current action iteration



<span id="dobjInfo"></span>

`dobjInfo`

[command.t](../file/command.t.html)\[[1223](../source/command.t.html#1223)\]



the NPMatch object for the current iteration's direct object



<span id="dobjNPs"></span>

`dobjNPs`

[command.t](../file/command.t.html)\[[1214](../source/command.t.html#1214)\]



the direct object phrases, as a list of NounPhrase objects



<span id="dobjs"></span>

`dobjs`

[command.t](../file/command.t.html)\[[1217](../source/command.t.html#1217)\]



the list of resolved direct objects, as NPMatch objects



<span id="endOfSentence"></span>

`endOfSentence`

[command.t](../file/command.t.html)\[[1275](../source/command.t.html#1275)\]



Is this command at the end of a sentence? The grammar match sets this to
true if the input syntax puts this predicate at the end of a sentence.
For example, in the English grammar, this is set if there's a period
after this predicate. This tells the parser that the next predicate in
the same line is the start of a new sentence, so sentence-opening syntax
is allowed.



<span id="implicitActionReports"></span>

`implicitActionReports`

[command.t](../file/command.t.html)\[[383](../source/command.t.html#383)\]



A list of reports of previous implicit actions performed in the course
of executing this command which can be used if we need to collate a
report of a stack of implicit actions.



<span id="iobj"></span>

`iobj`

[command.t](../file/command.t.html)\[[1232](../source/command.t.html#1232)\]



the indirect object for the current iteration



<span id="iobjInfo"></span>

`iobjInfo`

[command.t](../file/command.t.html)\[[1235](../source/command.t.html#1235)\]



the NPMatch object for the current indirect object



<span id="iobjNPs"></span>

`iobjNPs`

[command.t](../file/command.t.html)\[[1226](../source/command.t.html#1226)\]



the indirect object phrases, as a list of NounPhrase objects



<span id="iobjs"></span>

`iobjs`

[command.t](../file/command.t.html)\[[1229](../source/command.t.html#1229)\]



the list of resolved indirect objects, as NPMatch objects



<span id="lastAction"></span>

`lastAction`

[command.t](../file/command.t.html)\[[1188](../source/command.t.html#1188)\]



the Previous action performed by this command



<span id="madeTopic"></span>

`madeTopic`

[command.t](../file/command.t.html)\[[1327](../source/command.t.html#1327)\]



*no description available*



<span id="matchedAll"></span>

`matchedAll`

[command.t](../file/command.t.html)\[[1322](../source/command.t.html#1322)\]



Does this command apply to objects matched to ALL?



<span id="matchedMulti"></span>

`matchedMulti`

[command.t](../file/command.t.html)\[[1325](../source/command.t.html#1325)\]



Does this command apply to objects matched to multiple objects?



<span id="miscWordLists"></span>

`miscWordLists`

[command.t](../file/command.t.html)\[[1126](../source/command.t.html#1126)\]



List of noun phrases containing misc word phrases. The misc word phrase
grammar rules will notify us when they're visited in the build process,
and we'll note them here.



<span id="missingNouns"></span>

`missingNouns`

[command.t](../file/command.t.html)\[[1132](../source/command.t.html#1132)\]



Do we have any missing or empty noun phrases in the match? The verb and
noun phrases will fill this in.



<span id="nextTokens"></span>

`nextTokens`

[command.t](../file/command.t.html)\[[1311](../source/command.t.html#1311)\]



The token list for the next predicate. The first predicate production
fills this in during the build process with the token list for the next
predicate on the same command line, based on the location of the
conjunction or punctuation that ends the first predicate. This is just
what's left of the token list after the tokens used for our own
predicate and after any conjunctions or punctuation marks that separate
our predicate from the next one.



<span id="npList"></span>

`npList`

[command.t](../file/command.t.html)\[[1285](../source/command.t.html#1285)\]



The noun phrase roles (as NounRole objects), in the order they actually
appear in the user input. We build this list as the VerbProduction adds
our noun phrases. The phrase order is important when there are reflexive
pronouns, because a reflexive pronoun generally refers back to the
nearest preceding phrase of the same number and gender.



<span id="npListSorted"></span>

`npListSorted`

[command.t](../file/command.t.html)\[[1293](../source/command.t.html#1293)\]



A copy of the npList sorted to ensure that the direct and indirect
objects of a TIAction are verified in the order specified on that
action.



<span id="npToResolve"></span>

`npToResolve`

[command.t](../file/command.t.html)\[[895](../source/command.t.html#895)\]



If the parser has just asked the player to supply a missing object via
the askMissingObject() function, we don't want to resolve the nouns for
every object role, but only for the role with which askMissingObject()
is currently concerned; askMissingObject() stores that role here so that
our resolvedNouns() method knows to resolve only the noun for this role
rather than for all the roles in the command. If npToResolve is nil (as
it normally will be) then it will be ignored, and all noun roles will be
resolved.



<span id="originalAction"></span>

`originalAction`

[command.t](../file/command.t.html)\[[347](../source/command.t.html#347)\]



The originalAction this Command started out with, which may be changed
by a Doer (or some other mechanism)



<span id="parseTree"></span>

`parseTree`

[command.t](../file/command.t.html)\[[1182](../source/command.t.html#1182)\]



The parse tree (the root of the grammar match), if applicable. Commands
built from user input have a parse tree; those built internally don't.
Note that the parse tree doesn't necessarily include \*all\* of the user
input, since we could have asked questions (disambiguation, missing noun
phrases) before the command was completed. The question replies will be
represented in noun phrases or other data added to the command after the
initial parse.



<span id="predActive"></span>

`predActive`

[command.t](../file/command.t.html)\[[1170](../source/command.t.html#1170)\]



is our predicate currently active (see VerbProduction.isActive)



<span id="predPriority"></span>

`predPriority`

[command.t](../file/command.t.html)\[[1167](../source/command.t.html#1167)\]



the predicate priority (see VerbProduction.priority)



<span id="priority"></span>

`priority`

[command.t](../file/command.t.html)\[[1119](../source/command.t.html#1119)\]



the calculated priority



<span id="reflexiveAnte"></span>

`reflexiveAnte`

[command.t](../file/command.t.html)\[[986](../source/command.t.html#986)\]



table of reflexive pronoun antecedents



<span id="tokenLen"></span>

`tokenLen`

[command.t](../file/command.t.html)\[[1150](../source/command.t.html#1150)\]



The number of tokens from the command line that we matched for the
command. The CommandProduction object sets this for us as it builds the
command from the parse tree. We use this to determine the priority order
of the syntax matches, when there are multiple matches: other things
being equal, we'll take the longest match. Longer matches are better
because they come closer to using everything the user typed, which is
our eventual goal.

This reflects the number of tokens used in the first predicate phrase;
it omits any additional predicates or conjunctions. We only count the
first predicate because we always go back and re-parse any additional
text on the line from scratch after executing the first predicate, in
case the execution changes the game state in such a way that the parsing
changes.



<span id="verbProd"></span>

`verbProd`

[command.t](../file/command.t.html)\[[1191](../source/command.t.html#1191)\]



the VerbProduction object for the command



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addDisambigNP"></span>

`addDisambigNP (prod)`

[command.t](../file/command.t.html)\[[705](../source/command.t.html#705)\]



Add a disambiguation list item. This adds a NounPhrase item to the
current reply list.



<span id="addNounListItem"></span>

`addNounListItem (role, prod)`

[command.t](../file/command.t.html)\[[633](../source/command.t.html#633)\]



add a noun phrase to the given role (a NounRole)



<span id="addNounProd"></span>

`addNounProd (role, prod)`

[command.t](../file/command.t.html)\[[615](../source/command.t.html#615)\]



Add a noun production, building it out as though it had been part of the
original parse tree. This can be used to add a noun phrase after the
initial parsing, such as when the player supplies a missing object.



<span id="afterReport"></span>

`afterReport ( )`

[command.t](../file/command.t.html)\[[365](../source/command.t.html#365)\]



Run through our list of afterReports displaying each in turn. We do this
on the Command rather than on any of the Actions since actions may
invoke other actions (implicit, remapped, nested or replaced), while the
afterReports pertain to the command as a whole.



<span id="buildCommandString"></span>

`buildCommandString ( )`

[command.t](../file/command.t.html)\[[334](../source/command.t.html#334)\],
[english.t](../file/english.t.html)\[[2110](../source/english.t.html#2110)\]



Rebuild the original command string from the tokens. We call this out as
a separate method so language-specific code can override it.



<span id="buildObjLists"></span>

`buildObjLists ( )`

[command.t](../file/command.t.html)\[[902](../source/command.t.html#902)\]



Build the object lists. This runs through each NounPhrase in the command
to build its 'objs' list, then builds the corresponding master list in
the Command object.



<span id="calcPriority"></span>

`calcPriority ( )`

[command.t](../file/command.t.html)\[[1091](../source/command.t.html#1091)\]



Calculate the parsing priority.

When the parser looks for grammar rule matches to the input, it
considers \*all\* of the possible matches. Natural language is full of
syntactic ambiguity, so a given input string can often be parsed into
several different, but equally valid, syntax trees. It's often
impossible to tell which parsing is correct based on syntax alone - you
often have to look at the overall meaning of the sentence. For example,
GIVE BOOK TO BOB could be interpreted as having a direct object (BOOK)
and an indirect object (BOB), or it could be seen as having only a
direct object (BOOK TO BOB, treating the TO as a prepositional phrase
modifying BOOK rather than as a part of the verb phrase structure). The
initial parsing phase only looks at the syntax, so it has to consider
all of the valid phrase structures, even though a human speaker would
immediately dismiss many of them as nonsensical. Once we find all of the
syntax matches, the parser puts them into priority order, and then goes
down the list looking for the first one that makes sense semantically
(which is defined roughly as having noun phrases that refer to actual
objects).

The priority, then, represents our guess at the likelihood that the
grammar structure matches the user's intentions, based on the syntax.
Our fundamental assumption is that the command is valid: that is, it's
well-formed grammatically, AND it expresses something that's possible,
or at least logical to try, within the game-world context. Given this,
our strategy is to find a grammar structure that gives us a command that
we can actually carry out.

The priority is a composite value, made up of weighted component values.
We combine the components into a single scalar value simply by adding up
the parts multiplied by their weights. (Or, looked at another way, we
combine the values using a high-radix numbering system.) The components
are, from most significant to least significant:

\- Grammatically correct commands sort ahead of commands with structural
errors.

\- The predicate priority, from the VerbProduction. (This tells us how
"complete" the predicate structure is: a predicate with missing
information has a lower priority. This is in keeping with our assumption
that the user's input is well-formed - we'll try the most complete
structures first before falling back on the possibility that the user
left out some information.)

\- Filled noun slots ahead of missing noun slots. A missing noun slot
occurs when the player leaves one of the noun roles empty (PUT BOX,
TAKE). We can fill in this information with automatic defaults, so it's
not necessarily a reason to reject the parsing, but if there's another
interpretation that has fully occupied noun slots, try the occupied one
first.

\- More noun phrase slots first. For example, sort a command with a
direct and indirect object (two slots) ahead of one with only a direct
object. More slots means that we found more "structure" in the command;
we can sometimes interpret the same command with less structure by
subsuming more words into a long noun phrase.

\- Longest noun phrases, in aggregate, first. This is in terms of tokens
matched from the user input. (We want to consider longer noun phrases
first because it's more likely that they'll match exact objects, so
there's less chance of ambiguity, \*and\* it's more likely that if we're
wrong about the structure, we'll simply fail to find a matching object
and move on to other parse trees. Longer noun phrases are less likely to
yield spurious matches simply because they have more words that have to
match.)

\- Grammatical noun phrases take priority over misc word phrases (a misc
word phrase is text in a noun phrase slot that doesn't match any of the
defined patterns in the grammar rules).

\- Longest command first, in terms of tokens matched from the user
input. (The more user input we use the better, since that gives us more
confidence that we're correctly interpreting what the user said. When we
leave extra tokens for later, we can't be sure that we'll be able to
make any sense of what's left over, whereas tokens in the current match
are known to fit a grammar rule.)



<span id="changeAction"></span>

`changeAction (newAct, newDo, newIo, newAo)`

[command.t](../file/command.t.html)\[[497](../source/command.t.html#497)\]



Change the action to a new action with a new set of objects



<span id="clone"></span>

`clone ( )`

[command.t](../file/command.t.html)\[[129](../source/command.t.html#129)\]



clone - create a new Command based on this Command



<span id="cloneNP"></span>

`cloneNP (np)`

[command.t](../file/command.t.html)\[[154](../source/command.t.html#154)\]



clone a noun phrase that's part of this command



<span id="construct"></span>

`construct ([args])`

[command.t](../file/command.t.html)\[[41](../source/command.t.html#41)\]



Create the command object. There are several ways to create a command:

new Command(parseTree) - create from a parsed command syntax tree.

new Command(action, dobjProd...) - create from a given Action and a set
of parsed syntax trees for the noun phrases. The first noun phrase is
the direct object, the second is the indirect object, and the third is
the accessory.

new Command(action, dobjs...) - create from a given Action and a set of
objects or object lists for the noun slots. The first argument after the
Action, dobjs, can be a single Mentionable object to use as the resolved
direct object, or a list or vector of Mentionables to use as the
multiple direct objects. The next argument is in the same format and is
used for the indirect object. The third is the accessory.

new Command(actor, action, dobjs...) - create from a given actor (as a
Mentionable object), an Action object, and the object list.

new Command() - create a blank Command, for setting up externally or in
a subclass.



<span id="emptyNounRole"></span>

`emptyNounRole (role)`

[command.t](../file/command.t.html)\[[732](../source/command.t.html#732)\]



mark a noun phrase role as empty



<span id="exec"></span>

`exec ( )`

[command.t](../file/command.t.html)\[[183](../source/command.t.html#183)\]



Execute the action. This carries out the entire command processing
sequence for the action. If the action involves a list of objects (as in
TAKE ALL or DROP BOOK AND CANDLE), we iterate over the listed objects,
executing the action on each object in turn.



<span id="execCombos"></span>

`execCombos (predRoles, n, lst)`

[command.t](../file/command.t.html)\[[394](../source/command.t.html#394)\]



Execute the command for each combination of objects for noun role index
'n' and above. 'lst' is a list containing a partial object combination
for roles at lower indices. We iterate over each combination of the
remaining objects. predRoles is a list containing predicate roles (such
DirectObject, IndirectObject, AccessoryObject) relating to this action.
Callers are responsible for sorting predRoles into the correct order
before calling this method.



<span id="execDoer"></span>

`execDoer (lst)`

[command.t](../file/command.t.html)\[[474](../source/command.t.html#474)\]



Execute the command via the Doers that match the command's action and
objects. 'lst' is the object combination to execute: \[action, dobj,
iobj, ...\].



<span id="execIter"></span>

`execIter (lst)`

[command.t](../file/command.t.html)\[[441](../source/command.t.html#441)\]



Execute one iteration of the command for a particular combination of
objects. 'lst' is the object combination to execute: this is an
\[action, dobj, iobj, ...\] list.



<span id="fetchDisambigReply"></span>

`fetchDisambigReply ( )`

[command.t](../file/command.t.html)\[[724](../source/command.t.html#724)\]



Fetch a disambiguation reply. If we have more replies available, this
returns the next reply's noun phrase list, otherwise nil.



<span id="fixPriority"></span>

`fixPriority ( )`

[command.t](../file/command.t.html)\[[1108](../source/command.t.html#1108)\]



Set a fixed priority. This makes the priority a fixed value rather than
a calculated value. We call this before sorting a list of commands, so
that we don't have to recalculate the priority value repeatedly during
the sort.



<span id="forEachNP"></span>

`forEachNP (func)`

[command.t](../file/command.t.html)\[[870](../source/command.t.html#870)\]



carry out a callback for each noun phrase in each list



<span id="forEachObj"></span>

`forEachObj (func)`

[command.t](../file/command.t.html)\[[524](../source/command.t.html#524)\]



Invoke a callback for each object in the current command iteration. This
invokes the callback on the direct object, indirect object, accessory,
and any other custom roles added by the game.



<span id="getCommandPhrase"></span>

`getCommandPhrase ( )`

[command.t](../file/command.t.html)\[[1335](../source/command.t.html#1335)\]



Get the command phrase entered by the player, with the words used to
match the direct, indirect and accessory objects replaced by (dobj),
(iobj) and (acc) respectively; e.g. PUT RED BALL ON TABLE becomes 'put
(dobj) on (iobj)'



<span id="noteMiscWords"></span>

`noteMiscWords (np)`

[command.t](../file/command.t.html)\[[1111](../source/command.t.html#1111)\]



note a noun phrase with a miscellaneous word list



<span id="npTokenLen"></span>

`npTokenLen ( )`

[command.t](../file/command.t.html)\[[1153](../source/command.t.html#1153)\]



Calculate the sum of the token lengths of our noun phrases



<span id="numNounSlots"></span>

`numNounSlots ( )`

[command.t](../file/command.t.html)\[[1164](../source/command.t.html#1164)\]



Calculate the number of noun slots we have filled in



<span id="resolveNouns"></span>

`resolveNouns ( )`

[command.t](../file/command.t.html)\[[746](../source/command.t.html#746)\]



resolve the noun phrases



<span id="resolveReflexive"></span>

`resolveReflexive (pronoun)`

[command.t](../file/command.t.html)\[[968](../source/command.t.html#968)\]



Resolve a reflexive pronoun on behalf of one of the NounPhrases within
this command.



<span id="saveReflexiveAnte"></span>

`saveReflexiveAnte (obj)`

[command.t](../file/command.t.html)\[[940](../source/command.t.html#940)\]



Save a potential antecedent for a reflexive pronoun coming up later in
the command. Each time we visit a noun phrase during the reflexive
pronoun phase, we'll note its resolved objects here. Since we visit the
noun phrases in their order of appearance in the command, we'll
naturally always have the latest one mentioned when we come to a
reflexive pronoun. This gives us the correct resolution, which is the
nearest preceding noun. Note that the noun phrase shouldn't call this
routine to note reflexive pronouns, since they don't bind to earlier
reflexive pronouns - they only bind to regular noun phrases.



<span id="sortList"></span>

`sortList (cmdLst)`

[command.t](../file/command.t.html)\[[995](../source/command.t.html#995)\]



Class method: Sort a list of Command matches, in priority order. The
priority order is the order for processing predicate grammar matches:
start at the highest priority, and work through the list until you find
one where the noun phrases resolve to valid game-world objects; that's
the one to execute.



<span id="startDisambigReply"></span>

`startDisambigReply (parent, prod)`

[command.t](../file/command.t.html)\[[689](../source/command.t.html#689)\]



Start processing a new disambiguation reply. This adds a reply to a
disambiguation question.



<span id="terseOK"></span>

`terseOK ( )`

[command.t](../file/command.t.html)\[[569](../source/command.t.html#569)\]



Are terse messages OK for this command? A terse message is a simple
acknowledgment of a standard command, such as "Taken", "Dropped",
"Done", etc. The action is so ordinary that the result of a successful
attempt should be obvious to the player; so the only reply needed is an
acknowledgment, not an explanation.

Terse replies only apply to simple actions, and only when the actor is
the player character, AND there's no disambiguation involved. If the
actor isn't the PC, an acknowledgment isn't sufficient; we should
instead describe the NPC carrying out the action, since it's something
we observe, not something we do. If any objects were disambiguated, we
also want to describe the action fully, because the ambiguity calls for
a description of precisely which objects were chosen. Disambiguation
guesses are sometimes wrong, so when they're involved, it's not safe to
assume that the player and parser must both be thinking the same thing.
Showing a full description of the action will make it obvious to the
player when we guessed wrong, because the description won't accord with
what they had in mind. A terse acknowledgment would hide this
difference, allowing the player to wrongly assume that the parser did
what they thought it was going to do and potentially leading to
confusion down the road.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


