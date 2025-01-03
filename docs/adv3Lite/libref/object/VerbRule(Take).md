---
layout: docs
---
<span class="title">VerbRule(Take)</span><span class="type">grammar</span>

[grammar.t](../file/grammar.t.html)\[[1503](../source/grammar.t.html#1503)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Verb grammar (predicate) rules for English.

English's predicate syntax is highly positional. That is, the role of
each word in a predicate is determined largely by its position in the
phrase. There are a several common patterns to the predicate word order,
but the specific pattern that applies to a given verb is essentially
idiomatic to that verb, especially with respect to complement words
(like the "up" in "pick up"). Our approach to defining the predicate
grammar is therefore to define a separate, custom syntax rule for each
verb. This makes it easy to add rules for the odd little idioms in
English verbs.

For verbs that take indirect objects, the indirect object is usually
introduced by a preposition (e.g., PUT KEY IN LOCK). Since we consider
the preposition in such a case to be part of the verb's grammatical
structure, we write it directly into the grammar rule as a literal. This
means that we wouldn't be able to parse input that's missing the whole
indirect object phrase (e.g., PUT KEY). We don't want to just reject
those without explanation, though, which means we have to define
separate grammar rules for the truncated verbs. Some of these cases are
valid commands in their own right: UNLOCK DOOR and UNLOCK DOOR WITH KEY
are both valid grammatically. But PUT KEY isn't, so we need to mark this
as missing its indirect object. We do this by setting the missingRole
property for these rules to the role (usually IndirectObject) of the
phrase that's missing.

Each VerbRule has several properties and methods that it can or must
define:

action \[Required\] - The associated Action that's executed when this
verb is parsed. The base library requires this property.

verbPhrase - The message-building template for the verb. The library
uses this to construct messages to describe the associated action. The
format is 'verb/verbing (dobj) (iobj) (accessory)'. Each object role in
parentheses consists of an optional preposition and the word 'what' or
'whom'. For example, 'ask/asking (whom) (about what)'. Outside of the
parentheses, you can also include verb complement words before the first
object or after the last, but never between objects: for example,
'pick/picking up (what)'.

missingQ - the template for asking missing object questions. This
consists of one question per object, separated by semicolons, in the
order dobj, iobj, accessory. You only need as many questions as the verb
has object slots (i.e., you only need an iobj question if the verb takes
an indirect object). The question is simply of the form "what do you
want to \<verb\>", but you can also include the words "it" and "that" to
refer to the "other" object(s) in the verb. "It" will be replaced by
it/him/her/them as appropriate, and "that" by that/them. Use it-dobj,
it-iobj, it-acc to specify which other object you're talking about
(which is never necessary for two-object verbs, since there's only one
other object). Put the entire 'it' phrase, including prepositions, in
parentheses to make it optional; it will be omitted if the object isn't
part of the command input. This is only necessary for objects appearing
earlier in the verb rule, since it's resolved left to right.

missingRole - the object role (DirectObject, etc) that's explicitly
missing from this grammar syntax. This is for rules that you define
specifically to recognize partial input, like "PUT \<dobj\>". The parser
will ask for the missing object when it resolves such a rule.

answerMissing(cmd, np) - the base library calls this when the player
answers the parser's question asking for the missing noun phrase. 'cmd'
is the Command, and 'np' is the noun phrase parsed from the user's
answer to the query. This is called from the base library but isn't
required, in that it's purely advisory. The point of this routine is to
let the verb change the command according to the reply. For example, in
English, we have a generic Put \<dobj\> verb that asks where to put the
dobj. If the user says "in the box", we can change the action to Put In;
if the user says "on the table", we can change the action to Put On.

dobjReply, iobjReply, accReply - the noun phrase production to use for
parsing a reply to the missing-object question for the corresponding
role. Players sometimes reply to a question like "What do you want to
put it in?" by starting the answer with the same preposition in the
question: "in the box". To support this, you can specify a noun phrase
production that starts with the appropriate preposition (inSingleNoun,
onSingleNoun, etc).

(Note that the base library doesn't place any requirements on exactly
how the verb rules are defined. In particular, you don't have to define
one rule per verb, the way we do in English. The English module's
one-verb/one-rule approach might not be a good fit when implementing a
highly inflected language, since such languages are typically a lot more
flexible about word order, creating a wide range of possible phrasings
for each verb. It might be easier to for such a language to define a set
of universal verb grammar rules that cover the common structures for all
verbs, and then define the individual verbs as simple vocabulary words
that slot into this universal phrase structure.)

`VerbRule(Take)      `*`// original source text`*  
`grammar `**[`VerbRule`](../object/VerbRule.html)`(Take)`**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VerbRule(Take)`**  
[`VerbProduction`](../object/VerbProduction.html)  
[`Production`](../object/Production.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`action`](#action)  [`missingQ`](#missingQ)  [`verbPhrase`](#verbPhrase)  `

Inherited from `VerbProduction` :  
` [`isActive`](../object/VerbProduction.html#isActive)  [`priority`](../object/VerbProduction.html#priority)  `

Inherited from `Production` :  
` [`determiner`](../object/Production.html#determiner)  [`nounPhraseRole`](../object/Production.html#nounPhraseRole)  [`npClass`](../object/Production.html#npClass)  [`parent`](../object/Production.html#parent)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `VerbProduction` :  
` [`answerMissing`](../object/VerbProduction.html#answerMissing)  [`build`](../object/VerbProduction.html#build)  [`missingRoleProd`](../object/VerbProduction.html#missingRoleProd)  [`visitProd`](../object/VerbProduction.html#visitProd)  `

Inherited from `Production` :  
` [`addNounListItem`](../object/Production.html#addNounListItem)  [`findAction`](../object/Production.html#findAction)  [`findChild`](../object/Production.html#findChild)  [`findParent`](../object/Production.html#findParent)  [`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)  [`getText`](../object/Production.html#getText)  [`getTokens`](../object/Production.html#getTokens)  [`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)  [`isChildOf`](../object/Production.html#isChildOf)  [`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)  [`visitLiteral`](../object/Production.html#visitLiteral)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="action"></span>

`action`

[grammar.t](../file/grammar.t.html)\[[1507](../source/grammar.t.html#1507)\]



*no description available*



<span id="missingQ"></span>

`missingQ`

[grammar.t](../file/grammar.t.html)\[[1509](../source/grammar.t.html#1509)\]



*no description available*



<span id="verbPhrase"></span>

`verbPhrase`

[grammar.t](../file/grammar.t.html)\[[1508](../source/grammar.t.html#1508)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


