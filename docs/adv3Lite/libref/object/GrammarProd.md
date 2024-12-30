[GrammarProd]{.title}[class]{.type}

[gramprod.h](../file/gramprod.h.html)\[[44](../source/gramprod.h.html#44)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The GrammarProd intrinsic class is a specialized type that\'s designed
for creating parsers. An object of this type is created automatically by
the TADS 3 compiler for each \'grammar\' statement. This class
encapsulates the prototype token list and mapping information defined in
a \'grammar\' statement, and provides a method to match its prototype to
an input token string.

GrammarProd implements a \"parser\" in a limited computerese sense,
which is essentially a program that produces \"sentence diagrams\" a la
elementary school grammar lessons. GrammarProd is thus only a small part
of what we think of as \"the parser\" in an IF context. The broader
parser starts with the sentence diagrams that GrammarProd produces, and
must then interpret their meanings and carry out the intentions they
express.

Parsers built with GrammarProd trees can handle grammars with left or
right recursion, and can handle ambiguous grammars (meaning that a
single input can have multiple ways of matching the grammar). This is
especially important for natural language parsing, since virtually all
natural languages have ambiguous grammars. When a match is ambiguous, a
GrammarProd parser builds all of the possible match trees, allowing you
to choose the best match based on context and semantic content.

You can also create new productions dynamically with new GrammarProd().
Use addAlt() to populate a new production with token matching rules.

`intrinsic class `**`GrammarProd`**` :   `[`Object`](../object/Object.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`GrammarProd`**\
`         `[`Object`](../object/Object.html)\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addAlt`](#addAlt)`  `[`clearAlts`](#clearAlts)`  `[`deleteAlt`](#deleteAlt)`  `[`getGrammarInfo`](#getGrammarInfo)`  `[`parseTokens`](#parseTokens)`  `

Inherited from `Object` :\
` `[`callInherited`](../object/Object.html#callInherited)`  `[`createIterator`](../object/Object.html#createIterator)`  `[`createLiveIterator`](../object/Object.html#createLiveIterator)`  `[`forEach`](../object/Object.html#forEach)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`mapAll`](../object/Object.html#mapAll)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addAlt}

`addAlt (alt, matchObj, dict?, symtab?)`

[gramprod.h](../file/gramprod.h.html)\[[84](../source/gramprod.h.html#84)\]

::: desc
Add a new alternative set of alternatives to the rule list for this
grammar production.

\'alt\' is a string with the token list specifying the alternative(s) to
add. This uses the same syntax as the rule list in a static \'grammar\'
statement. You can use \'\|\' symbols to add multiple alternatives.

\'matchObj\' is the match object class, which is the class of the object
that parseTokens() reutrns in the match list to represent a match to
this production. This corresponds to the base class defined in a static
\'grammar\' statement.

\'dict\' is an optional Dictionary object. Literal tokens used in the
token list will be automatically added to the dictionary if they\'re not
already defined.

\'symtab\' is an optional LookupTable with the global symbol table. This
must be provided if any symbolic tokens are used in the rule list
(property names, sub-production names, etc). In most cases this is
simply the symbol table that t3GetGlobalSymbols() returns during
preinit.
:::

[]{#clearAlts}

`clearAlts (dict?)`

[gramprod.h](../file/gramprod.h.html)\[[123](../source/gramprod.h.html#123)\]

::: desc
Delete all alternatives from the rule list for this grammar production.
This resets the rule to an empty production with no alternatives to
match, which is convenient if you want to redefine the entire rule set
with a subsequent addAlt() call.

\'dict\' is an optional Dictionary object to adjust for the deletion. If
a non-nil \'dict\' is given, we\'ll remove all of the production\'s
literals from the dictionary.
:::

[]{#deleteAlt}

`deleteAlt (id, dict?)`

[gramprod.h](../file/gramprod.h.html)\[[111](../source/gramprod.h.html#111)\]

::: desc
Delete onen or more alternatives from the rule list for this grammar
production. \'id\' identifies the rule(s) to delete:

\- By tag: if \'id\' is a string, the method deletes each alternative
whose match object\'s grammarTag property equals \'id\'. For static
rules defined with \'grammar\' statements, the compiler sets grammarTag
to the tag used in the statement defining the rule. This makes it easy
to delete all of the rules defined by a given \'grammar\' statement.

\- By match object class: if \'id\' is an object, the method deletes
every alternative whose match object equals \'id\' or is a subclass of
\'id\'. This makes it easy to delete a group of dynamically added rules
that share a match object.

\- By index: if \'id\' is an integer, it gives the index of the rule to
delete. This corresponds to an index in the list returned by
getGrammarInfo().

\'dict\' is an optional Dictionary object to adjust for the deletion. If
a non-nil \'dict\' is given, we\'ll remove literals from the dictionary
that were defined by the alternative and no longer used in the
production.
:::

[]{#getGrammarInfo}

`getGrammarInfo ( )`

[gramprod.h](../file/gramprod.h.html)\[[58](../source/gramprod.h.html#58)\]

::: desc
Retrieve a detailed description of the production. This returns a list
of GrammarAltInfo objects that describe the rule alternatives that make
up this production.
:::

[]{#parseTokens}

`parseTokens (tokenList, dict)`

[gramprod.h](../file/gramprod.h.html)\[[51](../source/gramprod.h.html#51)\]

::: desc
Parse the token list, starting at this production, using the given
dictionary to look up tokens. Returns a list of match objects. If there
are no matches to the grammar, simply returns an empty list.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::