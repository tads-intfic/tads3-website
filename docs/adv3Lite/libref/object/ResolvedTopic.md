---
layout: docs
---
<span class="title">ResolvedTopic</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3094](../source/parser.t.html#3094)\],
[english.t](../file/english.t.html)\[[2071](../source/english.t.html#2071)\]

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

<div class="fdesc">

*no description available*

*Modified in
[english.t](../file/english.t.html)\[[2071](../source/english.t.html#2071)\]:*  
Modification to the ResolvedTopic for use with the English-language
specific part of the library.

`class `**`ResolvedTopic`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ResolvedTopic`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`aName`](#aName)[`getBestMatch`](#getBestMatch)[`getTopicText`](#getTopicText)[`name`](#name)[`person`](#person)[`theName`](#theName)[`tokens`](#tokens)[`topicList`](#topicList)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`getTopicText`](#getTopicText)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="aName"></span>

`aName`

[parser.t](../file/parser.t.html)\[[3115](../source/parser.t.html#3115)\]

<div class="desc">

*no description available*

</div>

<span id="getBestMatch"></span>

`getBestMatch`

[parser.t](../file/parser.t.html)\[[3112](../source/parser.t.html#3112)\]

<div class="desc">

*no description available*

</div>

<span id="getTopicText"></span>

`getTopicText`

[parser.t](../file/parser.t.html)\[[3113](../source/parser.t.html#3113)\]

<div class="desc">

*no description available*

</div>

<span id="name"></span>

`name`

[parser.t](../file/parser.t.html)\[[3116](../source/parser.t.html#3116)\]

<div class="desc">

*no description available*

</div>

<span id="person"></span>

`person`

[parser.t](../file/parser.t.html)\[[3117](../source/parser.t.html#3117)\]

<div class="desc">

*no description available*

</div>

<span id="theName"></span>

`theName`

[parser.t](../file/parser.t.html)\[[3114](../source/parser.t.html#3114)\]

<div class="desc">

*no description available*

</div>

<span id="tokens"></span>

`tokens`

[parser.t](../file/parser.t.html)\[[3110](../source/parser.t.html#3110)\]

<div class="desc">

*no description available*

</div>

<span id="topicList"></span>

`topicList`

[parser.t](../file/parser.t.html)\[[3109](../source/parser.t.html#3109)\]

<div class="desc">

if our list of topics has more than one entry, sort it in ascending
order of length of name. That's because the shorter the name, the closer
it may be to what the player actually typed.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (lst, toks)`

[parser.t](../file/parser.t.html)\[[3095](../source/parser.t.html#3095)\]

<div class="desc">

*no description available*

</div>

<span id="getTopicText"></span>

`getTopicText ( )`

[english.t](../file/english.t.html)\[[2078](../source/english.t.html#2078)\]

<div class="desc">

The English Tokenizer separates apostrophe-S from the word it's part of,
so in restoring the original text we need to join any apostrophe-S back
to the word it was separated from.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
