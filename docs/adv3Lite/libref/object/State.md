---
layout: docs
---
<span class="title">State</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[805](../source/thing.t.html#805)\]

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



A State represents a changeable condition of a Mentionable that can be
used as part of the object's name in command input. For example, a state
could be used to represent whether a match is lit or unlit: the words
'lit' and 'unlit' could then be used to describe the object, according
to its current condition.

The actual current condition of a given object is given by a property of
the Mentionable, which we define as part of the State object. So testing
whether an object is lit or unlit is just a matter of checking the
corresponding property of the object.

The parser considers an object to have the state, for parsing purposes,
if the object defines any value for the state property.

Most of the State object's definition is its vocabulary, which is
obviously language-specific. We therefore leave it to the language
modules to define the individual State instances. Games can also add new
states as needed, of course.

`class `**`State`**` :   `[`LState`](../object/LState.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`State`**  
[`LState`](../object/LState.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`DirState`](../object/DirState.html)[`LitUnlit`](../object/LitUnlit.html)[`OpenClosed`](../object/OpenClosed.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`adjectives`](#adjectives)[`all`](#all)[`stateProp`](#stateProp)[`vocabTab`](#vocabTab)[`vocabWords`](#vocabWords)

Inherited from `LState` :  
[`additionalInfo`](../object/LState.html#additionalInfo)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`appliesTo`](#appliesTo)[`classInit`](#classInit)[`construct`](#construct)[`getVocab`](#getVocab)[`matchName`](#matchName)

Inherited from `LState` :  
[`addToName`](../object/LState.html#addToName)[`getAdditionalInfo`](../object/LState.html#getAdditionalInfo)[`initWord`](../object/LState.html#initWord)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="adjectives"></span>

`adjectives`

[thing.t](../file/thing.t.html)\[[878](../source/thing.t.html#878)\]



State/adjective initializer list.

States are generally represented in names by adjectives added to the
object name, both in displaying output and in parsing input. For
example, a Lit/Unlit state would add 'lit' in the lit state and 'unlit'
in the unlit state. So we provide an easy way of initializing a state
object: just list the states and their corresponding adjectives.

Make one entry in this list for each possible state; the entry is a
list, \[stateval, \[adjectives\]\], where 'stateval' is the state
variable value, and \[adjectives\] is a list of strings giving the
corresponding adjectives. The first adjective in the list is the display
adjective - this is the one that addToName() will use to generate an
object name for display. The rest are used to parse input; they'll all
be matched to the state.



<span id="all"></span>

`all`

[thing.t](../file/thing.t.html)\[[894](../source/thing.t.html#894)\]



class property: master list of all State objects



<span id="stateProp"></span>

`stateProp`

[thing.t](../file/thing.t.html)\[[814](../source/thing.t.html#814)\]



The Mentionable property that indicates the current condition of an
object that has this State. The range of values that this property takes
on in the Mentionable is up to the State to define. For some states,
this will be a simple boolean: Lit/Unlit, Open/Closed, On/Off, etc. For
others, this might be an integer range or a set of string values.



<span id="vocabTab"></span>

`vocabTab`

[thing.t](../file/thing.t.html)\[[858](../source/thing.t.html#858)\]



state vocabulary lookup table (built automatically during preinit)



<span id="vocabWords"></span>

`vocabWords`

[thing.t](../file/thing.t.html)\[[891](../source/thing.t.html#891)\]



\*Full\* vocabulary initializer list. If the 'adjectives' list isn't
sufficiently flexible for your needs, you can use this initializer list
instead. This consists of a list of sublist entries, \[stateval, word,
flags\]. 'stateval' is a state value, 'word' is a string giving a
vocabulary word to match, and 'flags' is a combination of MatchXxx flags
for the word.

  
\[\[nil, 'unlit', MatchAdj\],  
\[true, 'lit', MatchAdj\]\]



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="appliesTo"></span>

`appliesTo (obj)`

[thing.t](../file/thing.t.html)\[[821](../source/thing.t.html#821)\]



Does this state apply to the given object? By default, we consider any
object that defines the state property to exhibit the state.



<span id="classInit"></span>

`classInit ( )`

[thing.t](../file/thing.t.html)\[[939](../source/thing.t.html#939)\]



class initialization



<span id="construct"></span>

`construct ( )`

[thing.t](../file/thing.t.html)\[[897](../source/thing.t.html#897)\]



construction



<span id="getVocab"></span>

`getVocab (state)`

[thing.t](../file/thing.t.html)\[[851](../source/thing.t.html#851)\]



Get the vocabulary words that apply to the given state. For example, a
Lit/Unlit object might return 'lit' if state is true and 'unlit' if
state is nil.



<span id="matchName"></span>

`matchName (tok, state, cmp)`

[thing.t](../file/thing.t.html)\[[835](../source/thing.t.html#835)\]



Match a token from the object name for the given state value.
Mentionable.matchName() calls this to see if a token applies because of
the object's current conditdion. 'tok' is the token string; 'state' is
the object's value for the state property; and 'cmp' is the string
comparator to use for the string comparisons. Returns a combination of
MatchXxx flags, or zero if the token doesn't match the current
condition.

For example, a Lit/Unlit state would return MatchAdj for 'lit' if
'state' is true, 0 otherwise.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


