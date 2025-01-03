---
layout: docs
---
<span class="title">Tokenizer</span><span class="type">class</span>

[tok.t](../file/tok.t.html)\[[84](../source/tok.t.html#84)\]

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



Tokenizer base class

`class `**`Tokenizer`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Tokenizer`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`cmdTokenizer`](../object/cmdTokenizer.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`rules_`](#rules_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`deleteRule`](#deleteRule) [`deleteRuleAt`](#deleteRuleAt) [`insertRule`](#insertRule) [`insertRuleAt`](#insertRuleAt) [`tokCvtLower`](#tokCvtLower) [`tokCvtSkip`](#tokCvtSkip) [`tokenize`](#tokenize)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="rules_"></span>

`rules_`

[tok.t](../file/tok.t.html)\[[123](../source/tok.t.html#123)\]



Tokenizing rules. The subclass can override this to specify a list that
defines different tokenization rules. Each entry in the master rules\_
list is one rule. Each rule is a list consisting of the name of the
rule; the pattern to match for the rule; the token type (an 'enum
token') to use when the rule is matched; the value computation rule; and
the value test rule.

The name of a rule is just an arbitrary string to identify the rule.
This can be used to insert new rules in order relative to known existing
rules, or to delete known existing rules.

If the value computation rule is nil, we'll just use the matching text
as the token value. If the value rule is a string, we'll use the string
as a replacement pattern (with rexReplace). If it's a property ID, we'll
invoke the property of self with the following arguments:

txt, typ, toks

'txt' is the matched text; 'typ' is the token type from the rule; and
'toks' is a vector to which the new token or tokens are to be added. The
routine is responsible for adding the appropriate values to the result
list. Note that the routine can add more than one token to the results
if desired.

If the value test rule is non-nil, it must be either a method or a
function; we'll call the method or function to test to see if the
matched value is valid. We'll call the method (on self) with the
matching text as the argument; if the method returns true, the rule
matches, otherwise the rule fails, and we'll continue looking for
another rule as though we hadn't matched the rule's regular expression
in the first place. This can be used for rules that require more than a
simple regular expression match; for example, the value test can be used
to look up the match in a dictionary, so that the rule only matches
tokens that are defined in the dictionary.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="deleteRule"></span>

`deleteRule (name)`

[tok.t](../file/tok.t.html)\[[195](../source/tok.t.html#195)\]



Delete a rule by name. This finds the rule with the given name and
removes it from the list.



<span id="deleteRuleAt"></span>

`deleteRuleAt (idx)`

[tok.t](../file/tok.t.html)\[[208](../source/tok.t.html#208)\]



delete the rule at the given index



<span id="insertRule"></span>

`insertRule (rule, curName, after)`

[tok.t](../file/tok.t.html)\[[154](../source/tok.t.html#154)\]



Insert a new rule before or after the existing rule with the name
'curName'. If 'curName' is nil, or rule is found with the given name,
we'll insert the new rule at the end of the list. 'rule' must be a list
with the standard elements for a tokenizer rule. 'after' is nil to
insert the new rule before the given existing rule, true to insert after
it.



<span id="insertRuleAt"></span>

`insertRuleAt (rule, idx)`

[tok.t](../file/tok.t.html)\[[185](../source/tok.t.html#185)\]



Insert a rule at the given index in our rules list. 'rule' must be a
list with the standard elements for a tokenizer rule. 'idx' is the index
of the new rule; we'll insert before the existing element at this index;
so if 'idx' is 1, we'll insert before the first existing rule.



<span id="tokCvtLower"></span>

`tokCvtLower (txt, typ, toks)`

[tok.t](../file/tok.t.html)\[[215](../source/tok.t.html#215)\]



convert a string to lower-case (for value computation rules)



<span id="tokCvtSkip"></span>

`tokCvtSkip (txt, typ, toks)`

[tok.t](../file/tok.t.html)\[[226](../source/tok.t.html#226)\]



processing routine to skip a match - this is used for whitespace and
other text that does not result in any tokens in the result list



<span id="tokenize"></span>

`tokenize (str)`

[tok.t](../file/tok.t.html)\[[248](../source/tok.t.html#248)\]



Tokenize a string. If we find text that we can't match to any of the
rules, we'll throw an exception (TokErrorNoMatch). If we succeed in
tokenizing the entire string, we'll return a list with one element per
token. Each element of the main list is a sublist with the following
elements describing a token:

\- The first element gives the token's value.

\- The second element the token type (given as a token type enum value).

\- The third element the original token strings, before any conversions
or evaluations were performed. For example, this maintains the original
case of strings that are lower-cased for the corresponding token values.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


