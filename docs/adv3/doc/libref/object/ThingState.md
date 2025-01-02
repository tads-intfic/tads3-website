---
layout: docs
---
<span class="title">ThingState</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[471](../source/thing.t.html#471)\],
[en_us.t](../file/en_us.t.html)\[[214](../source/en_us.t.html#214)\]

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



"State" of a Thing. This is an object abstractly describing the state of
an object that can assume different states.

The 'listName', 'inventoryName', and 'wornName' give the names of state
as displayed in room/contents listings, inventory listings, and listings
of items being worn by an actor. This state name is displayed along with
the item name (usually parenthetically after the item name, but the
exact nature of the display is controlled by the language-specific part
of the library).

The 'listingOrder' is an integer giving the listing order of this state
relative to other states of the same kind of object. When we show a list
of equivalent items in different states, we'll order the state names in
ascending order of listingOrder.

*Modified in
[en_us.t](../file/en_us.t.html)\[[214](../source/en_us.t.html#214)\]:*  
Language-specific modifications for ThingState.

`class `**`ThingState`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ThingState`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`lightSourceStateOff`](../object/lightSourceStateOff.html)[`lightSourceStateOn`](../object/lightSourceStateOn.html)[`matchStateLit`](../object/matchStateLit.html)[`matchStateUnlit`](../object/matchStateUnlit.html)[`unwornState`](../object/unwornState.html)[`wornState`](../object/wornState.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`listingOrder`](#listingOrder)[`listName_`](#listName_)[`stateTokens`](#stateTokens)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`findStateToken`](#findStateToken)[`inventoryName`](#inventoryName)[`listName`](#listName)[`matchName`](#matchName)[`wornName`](#wornName)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="listingOrder"></span>

`listingOrder`

[thing.t](../file/thing.t.html)\[[504](../source/thing.t.html#504)\]



the relative listing order



<span id="listName_"></span>

`listName_`

[en_us.t](../file/en_us.t.html)\[[325](../source/en_us.t.html#325)\]



our list name setting - we define this so that we can be easily
initialized with a template (we can't initialize listName() directly in
this manner because it's a method, but we define the listName() method
to simply return this property value, which we can initialize with a
template)



<span id="stateTokens"></span>

`stateTokens`

[en_us.t](../file/en_us.t.html)\[[242](../source/en_us.t.html#242)\]



Our state-specific tokens. This is a list of vocabulary words that are
state-specific: that is, if a word is in this list, the word can ONLY
refer to this object if the object is in a state with that word in its
list.

The idea is that you set up the object's "static" vocabulary with the
\*complete\* list of words for all of its possible states. For example:

  
+ Matchstick 'lit unlit match';

Then, you define the states: in the "lit" state, the word 'lit' is in
the stateTokens list; in the "unlit" state, the word 'unlit' is in the
list. By putting the words in the state lists, you "reserve" the words
to their respective states. When the player enters a command, the parser
will limit object matches so that the reserved state-specific words can
only refer to objects in the corresponding states. Hence, if the player
refers to a "lit match", the word 'lit' will only match an object in the
"lit" state, because 'lit' is a reserved state-specific word associated
with the "lit" state.

You can re-use a word in multiple states. For example, you could have a
"red painted" state and a "blue painted" state, along with an
"unpainted" state.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="findStateToken"></span>

`findStateToken (toks)`

[en_us.t](../file/en_us.t.html)\[[293](../source/en_us.t.html#293)\]



Check a token list for any tokens matching any of our state-specific
words. Returns true if we find any such words, nil if not.

'toks' is the \*adjusted\* token list used in matchName().



<span id="inventoryName"></span>

`inventoryName (lst)`

[thing.t](../file/thing.t.html)\[[494](../source/thing.t.html#494)\]



The state name to use in inventory lists. By default, we just use the
base name. 'lst' has the same meaning as in listName().



<span id="listName"></span>

`listName (lst)`

[thing.t](../file/thing.t.html)\[[488](../source/thing.t.html#488)\],
[en_us.t](../file/en_us.t.html)\[[316](../source/en_us.t.html#316)\]



The name of the state to use in ordinary room/object contents listings.
If the name is nil, no extra state information is shown in a listing for
an object in this state. (It's often desirable to leave the most
ordinary state an object can be in unnamed, to avoid belaboring the
obvious. For example, a match that isn't burning would probably not want
to mention "(not lit)" every time it's listed.)

'lst' is a list of the objects being listed in this state. If we're only
listing a single object, this will be a list with one element giving the
object being listed. If we're listing a counted set of equivalent items
all in this same state, this will be the list of items. Everything in
'lst' will be equivalent (in the isEquivalent sense).

*Modified in
[en_us.t](../file/en_us.t.html)\[[316](../source/en_us.t.html#316)\]:*  
get our name



<span id="matchName"></span>

`matchName (obj, origTokens, adjustedTokens, states)`

[thing.t](../file/thing.t.html)\[[520](../source/thing.t.html#520)\],
[en_us.t](../file/en_us.t.html)\[[250](../source/en_us.t.html#250)\]



Match the name of an object in this state. 'obj' is the object to be
matched; 'origTokens' and 'adjustedTokens' have the same meanings they
do for Thing.matchName; and 'states' is a list of all of the possible
states the object can assume.

Implementation of this is always language-specific. In most cases, this
should do something along the lines of checking for the presence (in the
token list) of words that only apply to other states, rejecting the
match if any such words are found. For example, the ThingState object
representing the unlit state of a light source might check for the
presence of 'lit' as an adjective, and reject the object if it's found.

*Modified in
[en_us.t](../file/en_us.t.html)\[[250](../source/en_us.t.html#250)\]:*  
Match the name of an object in this state. We'll check the token list
for any words that apply only to \*other\* states the object can assume;
if we find any, we'll reject the match, since the phrase must be
referring to an object in a different state.



<span id="wornName"></span>

`wornName (lst)`

[thing.t](../file/thing.t.html)\[[501](../source/thing.t.html#501)\]



The state name to use in listings of items being worn. By default, we
just use the base name. 'lst' has the same meaning as in listName().





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


