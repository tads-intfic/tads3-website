---
layout: docs
---
<span class="title">MessageBuilder</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[1070](../source/output.t.html#1070)\]

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



MessageBuilder - this object provides a general text substitution
mechanism. Text to be substituted is enclosed in {curly braces}. Within
the braces, we have the substitution parameter name, which can be in the
following formats:

id  
id obj  
id1/id2 obj  
id1 obj/id2

The ID string gives the type of substitution to perform. The ID's all
come from a table, which is specified by the language-specific subclass,
so the ID's can vary by language (to allow for natural template-style
parameter names for each language). If the ID is in two pieces (id1 and
id2), we concatenate the two pieces together with a slash between to
form the name we seek in the table - so {the/he dobj} and {the dobj/he}
are equivalent, and both look up the identifier 'the/he'. If a two-part
identifier is given, and the identifier isn't found in the table, we'll
try looking it up with the parts reversed: if we see {he/the dobj},
we'll first try finding 'he/the', and if that fails we'll look for
'the/he'.

If 'obj' is present, it specificies the target object providing the text
to be substitutued; this is a string passed to the current Action, and
is usually something like 'actor', 'dobj', or 'iobj'.

One instance of this class, called langMessageBuilder, should be created
by the language-specific library.

`class `**`MessageBuilder`**` :   `[`OutputFilter`](../object/OutputFilter.html) [`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MessageBuilder`**  
[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`langMessageBuilder`](../object/langMessageBuilder.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`lastParamObj_`](#lastParamObj_) [`lastTargetObj_`](#lastTargetObj_) [`nameTable_`](#nameTable_) [`paramList_`](#paramList_) [`paramTable_`](#paramTable_) [`patAllCaps`](#patAllCaps) [`patIdObj`](#patIdObj) [`patIdObjSlashId`](#patIdObjSlashId) [`patIdSlash`](#patIdSlash) [`patUpper`](#patUpper)





Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute) [`filterText`](#filterText) [`generateMessage`](#generateMessage) [`genLiteral`](#genLiteral) [`getTargetProp`](#getTargetProp) [`langRewriteParam`](#langRewriteParam) [`processResult`](#processResult) [`quoteMessage`](#quoteMessage)





Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="lastParamObj_"></span>

`lastParamObj_`

[output.t](../file/output.t.html)\[[1513](../source/output.t.html#1513)\]



the parameter name of the last target object ('dobj', 'actor', etc)



<span id="lastTargetObj_"></span>

`lastTargetObj_`

[output.t](../file/output.t.html)\[[1510](../source/output.t.html#1510)\]



The most recent target object. Each time we parse a substitution string,
we'll remember the target object here; when a substitution string
doesn't imply or specify a target object, we'll use the previous one by
default.



<span id="nameTable_"></span>

`nameTable_`

[output.t](../file/output.t.html)\[[1519](../source/output.t.html#1519)\]



our global name table - a LookupTable we set up during preinit



<span id="paramList_"></span>

`paramList_`

[output.t](../file/output.t.html)\[[1581](../source/output.t.html#1581)\]



our parameter list - this should be initialized in the language-specific
subclass to a list like this:

\[entry1, entry2, entry3, ...\]

Each entry is a list like this:

\[paramName, &prop, impliedTargetName, \<extra\>\]

paramName is a string giving the substitution parameter name; this can
be one word or two ('the' or 'the obj', for example).

prop is a property identifier. This is the property invoked on the
target object to obtain the substitution text.

impliedTargetName is a string giving the target object name to use. When
this is supplied, the paramName is normally used in message text with no
object name. This should be nil for parameters that do not imply a
particular target.

\<extra\> is any number of additional parameters for the
language-specific subclass. The generic code ignores these extra
parameters, but the langague-specific subclass can use them if it
requires additional information.

Here's an example:

paramList\_ = \[  
\['you', &theDesc, nil, 'actor'\],  
\['the obj' &theObjDesc, &itReflexive, nil\]  
\]

The first item specifies a substitution name of 'you', which is expanded
by evaluating the property theDesc on the target object, and specifies
an implied target object of 'actor'. When this is expanded, we'll call
the current action to get the meaning of 'actor', then evaulate property
theDesc on the result.

The second item specifies a substitution name of 'the obj', expanded by
evaluating property theObjDesc on the target object. This one doesn't
have an implied object, so the target object is the one explicitly given
in the message source text or is the previous target object if one isn't
specified in the message text.



<span id="paramTable_"></span>

`paramTable_`

[output.t](../file/output.t.html)\[[1516](../source/output.t.html#1516)\]



our parameter table - a LookupTable that we set up during preinit



<span id="patAllCaps"></span>

`patAllCaps`

[output.t](../file/output.t.html)\[[1073](../source/output.t.html#1073)\]



*no description available*



<span id="patIdObj"></span>

`patIdObj`

[output.t](../file/output.t.html)\[[1076](../source/output.t.html#1076)\]



*no description available*



<span id="patIdObjSlashId"></span>

`patIdObjSlashId`

[output.t](../file/output.t.html)\[[1074](../source/output.t.html#1074)\]



*no description available*



<span id="patIdSlash"></span>

`patIdSlash`

[output.t](../file/output.t.html)\[[1077](../source/output.t.html#1077)\]



*no description available*



<span id="patUpper"></span>

`patUpper`

[output.t](../file/output.t.html)\[[1072](../source/output.t.html#1072)\]



pre-compile some regular expressions we use a lot



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1472](../source/output.t.html#1472)\]



execute pre-initialization



<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1498](../source/output.t.html#1498)\]



Our output filter method. We'll run each string written to the display
through our parameter substitution method.



<span id="generateMessage"></span>

`generateMessage (orig)`

[output.t](../file/output.t.html)\[[1084](../source/output.t.html#1084)\]



Given a source string with substitution parameters, generate the
expanded message with the appropriate text in place of the parameters.



<span id="genLiteral"></span>

`genLiteral (str)`

[output.t](../file/output.t.html)\[[1463](../source/output.t.html#1463)\]



Internal routine - generate the literal text for the given source
string. We'll remove any stuttered close braces.



<span id="getTargetProp"></span>

`getTargetProp (targetObj, paramObj, info)`

[output.t](../file/output.t.html)\[[1410](../source/output.t.html#1410)\]



Get the property to invoke on the target object for the given parameter
information entry. By default, we simply return info\[2\], which is the
standard property to call on the target. This can be overridden by the
language-specific subclass to provide a different property if
appropriate.

'targetObj' is the target object, and 'paramObj' is the parameter name
of the target object. For example, 'paramObj' might be the string 'dobj'
to represent the direct object, in which case 'targetObj' will be the
gDobj object.

The English version, for example, uses this routine to supply a
reflexive instead of the default entry when the target object matches
the subject of the sentence.



<span id="langRewriteParam"></span>

`langRewriteParam (paramStr)`

[output.t](../file/output.t.html)\[[1529](../source/output.t.html#1529)\]



Rewrite the parameter string for any language-specific rules. By
default, we'll return the original parameter string unchanged; the
language-specific instance can override this to provide any special
syntax extensions to the parameter string syntax desired by the
language-specific library. The returned string must be in one of the
formats recognized by the generic handler.



<span id="processResult"></span>

`processResult (txt)`

[output.t](../file/output.t.html)\[[1442](../source/output.t.html#1442)\]



Process result text. This takes some result text that we're about to add
and returns a processed version. This is called for all text as we add
it to the result string.

The text we pass to this method has already had all parameter text fully
expanded, so this routine does not need to worry about { } sequences -
all { } sequences will have been removed and replaced with the
corresponding expansion text before this is called.

This routine is called piecewise: the routine will be called once for
each parameter replacement text and once for each run of text between
parameters, and is called in the order in which the text appears in the
original string.

By default we do nothing with the result text; we simply return the
original text unchanged. The language-specific subclass can override
this as desired to further modify the text for special language-specific
parameterization outside of the { } mechanism. The subclass can also use
this routine to maintain internal state that depends on sentence
structure. For example, the English version looks for sentence-ending
punctuation so that it can reset its internal notion of the subject of
the sentence when a sentence appears to be ending.



<span id="quoteMessage"></span>

`quoteMessage (str)`

[output.t](../file/output.t.html)\[[1454](../source/output.t.html#1454)\]



"Quote" a message - double each open or close brace, so that braces in
the message will be taken literally when run through the substitution
replacer. This can be used when a message is expanded prior to being
displayed to ensure that braces in the result won't be mistaken as
substitution parameters requiring further expansion.

Note that only open braces need to be quoted, since lone close braces
are ignored in the substitution process.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


