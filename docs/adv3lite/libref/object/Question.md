---
layout: docs
---
<span class="title">Question</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1029](../source/parser.t.html#1029)\]

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



A Question is an interactive question we ask the player via the regular
command line. The player then has the option to answer the question, or
to ignore the question and enter a new command.

The parser uses Question objects internally to handle certain errors
that the player can fix by entering additional information, such as
disambiguation queries and missing noun phrase queries. Games can use
Question objects for other, custom interactions.

The basic Question object is incomplete - you have to subclass it to get
a functional question handler. In particular, you must provide a
parseAnswer() routine that parses the reply and creates a Command to
carry out the action of answering the question.

`class `**`Question`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Question`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Question`**  
[`GramQuestion`](../object/GramQuestion.html)  
[`YesNoQuestion`](../object/YesNoQuestion.html)  
[`ParseErrorQuestion`](../object/ParseErrorQuestion.html)  
[`RexQuestion`](../object/RexQuestion.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`answerTemplate`](#answerTemplate) [`priority`](#priority)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`parseAnswer`](#parseAnswer)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="answerTemplate"></span>

`answerTemplate`

[parser.t](../file/parser.t.html)\[[1074](../source/parser.t.html#1074)\]



the answer template



<span id="priority"></span>

`priority`

[parser.t](../file/parser.t.html)\[[1057](../source/parser.t.html#1057)\]



Priority: Should the answer be parsed before checking for a regular
command entry? If this is true, the parser will try parsing the player's
input as an answer to this question BEFORE it tries parsing the input as
a regular command. If the answer parses, we'll assume it really is an
answer to the question, and we won't even try parsing it as a new
command.

For disambiguation and missing noun queries, the parser only parses
question replies AFTER parsing regular commands. Replies to these
questions are frequently very short, abbreviated noun phrases - maybe
just a single adjective or noun. It's fairly common for there be at
least a few nouns that are the same as verbs in the game, so the input
after a disambiguation or missing noun reply can often be interpreted
equally well as a new verb or as a reply to the question. There's
probably no theoretical basis for choosing one over the other when this
happens, but in practice it seems that it's usually better to treat the
reply as a new command. So, by default we set this property to nil, to
give priority to a new command.

Custom questions posed by the game might want to give higher priority to
the answer interpretation, though. Yes/No questions in particular will
probably want to do this, because otherwise the parser would take the
answer as a conversational overture to any nearby NPC.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="parseAnswer"></span>

`parseAnswer (toks, dict)`

[parser.t](../file/parser.t.html)\[[1071](../source/parser.t.html#1071)\]



Parse the answer. 'toks' is the token list of the user's input, and
'dict' is the main parser Dictionary object.

If the input does look like a valid answer to the question, returns a
CommandList with the parsed reply. If not, returns nil, in which case
the parser will continue trying to parse the input as a whole new
command.

By default, we simply return nil. Subclasses/instances must override
this to provide the custom answer parsing.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


