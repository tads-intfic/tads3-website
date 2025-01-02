---
layout: docs
---
<span class="title">Distinguisher</span><span class="type">class</span>

[disambig.t](../file/disambig.t.html)\[[25](../source/disambig.t.html#25)\]

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



Distinguisher. This object encapsulates logic that determines whether or
not we can tell two objects apart.

Each game object has a list of distinguishers. For most objects, the
distinguisher list contains only BasicDistinguisher, since most game
objects are unique and thus are inherently distinguishable from all
other objects.

`class `**`Distinguisher`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Distinguisher`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`basicDistinguisher`](../object/basicDistinguisher.html) [`litUnlitDistinguisher`](../object/litUnlitDistinguisher.html) [`locationDistinguisher`](../object/locationDistinguisher.html) [`nullDistinguisher`](../object/nullDistinguisher.html) [`ownershipDistinguisher`](../object/ownershipDistinguisher.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canDistinguish`](#canDistinguish) [`matchName`](#matchName) [`notePrompt`](#notePrompt) [`objInScope`](#objInScope)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canDistinguish"></span>

`canDistinguish (a, b)`

[disambig.t](../file/disambig.t.html)\[[27](../source/disambig.t.html#27)\]



can we distinguish the given two objects?



<span id="matchName"></span>

`matchName (obj, origTokens, adjustedTokens, matchList, fullMatchList)`

[disambig.t](../file/disambig.t.html)\[[79](../source/disambig.t.html#79)\]



Try matching an object to a noun phrase in a disambiguation reply from
the player (that is, the player's response to a "Which foo did you mean"
question). By default, we call the object's matchNameDisambig() method
to let it try to match its disambiguation name.

Subclasses can override this to check for additional phrasing specific
to the subclass. For example, the locational distinguisher checks for a
match to the container or owner name, so that the player can simply
respond to the question with the location name rather than typing in a
whole locational phrase. Note that subclasses will usually want to
inherit the default handling if they don't find a match to their own
special phrasing, because the player might respond with a simple
adjective pertaining to the base object even if there's some external
distinguishing characteristic handled by the subclass.



<span id="notePrompt"></span>

`notePrompt (lst)`

[disambig.t](../file/disambig.t.html)\[[42](../source/disambig.t.html#42)\]



Note that we're showing a prompt to the player asking for help in
narrowing the object list, based on this distinguisher. 'lst' is the
list of ResolveInfo objects which we're mentioning in the prompt.

By default, we do nothing. Some types of distinguishers might want to do
something special here. For example, an ownership distinguisher might
want to set pronoun antecedents based on the owners mentioned in the
disambiguation prompt, so that the player's response can refer
anaphorically to the nouns in the prompt.



<span id="objInScope"></span>

`objInScope (obj, matchList, fullMatchList)`

[disambig.t](../file/disambig.t.html)\[[55](../source/disambig.t.html#55)\]



Is the object in scope for the purposes of the disambiguation reply from
the player? By default, any object in the full match list is in scope.

Distinguishers that can use related objects to qualify the name should
add those related objects to the scope by returning true here. For
example, the locational distinguisher can use the location name as a
qualifying phrase, so the location name is in scope.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


