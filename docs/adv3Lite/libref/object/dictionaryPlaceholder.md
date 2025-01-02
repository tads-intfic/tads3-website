---
---
<span class="title">dictionaryPlaceholder</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[5742](../source/parser.t.html#5742)\]

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

<div class="fdesc">

A placeholder object for dictionary entries. The Dictionary class stores
a three-way association: word string, part-of-speech property, and
object. The object association is designed to allow the parser to come
up with a list of objects that could match a given word, but the adv3L
library doesn't use this feature. We instead figure out the
word-to-object association by directly asking the objects in scope if
they're associated with a word. We still need \*something\* to store as
the object association for each word entry in the dictionary, though.
That's where this object comes in: it's a dummy object that serves as
the required object to associate with each word.

A language module can ignore this and use the word-object-property
association feature of the dictionary, if desired.

**`dictionaryPlaceholder`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`dictionaryPlaceholder`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
