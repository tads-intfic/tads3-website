---
---
<span class="title">DynamicProd</span><span class="type">class</span>

[gramprod.t](../file/gramprod.t.html)\[[156](../source/gramprod.t.html#156)\]

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

Dynamic match object interface. This is a mix-in class that should be
used as a superclass for any class used as the match object when
creating new alternatives dynamically with GrammarProd.addAlt().

This class provides an implementation of grammarInfo() that works like
the version the compiler generates for static match objects. In this
case, we use the grammarAltProps information that addAlt() stores in the
match object.

`class `**`DynamicProd`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DynamicProd`**  
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

` `[`grammarAltProps`](#grammarAltProps)`  `[`grammarTag`](#grammarTag)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`grammarInfo`](#grammarInfo)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="grammarAltProps"></span>

`grammarAltProps`

[gramprod.t](../file/gramprod.t.html)\[[180](../source/gramprod.t.html#180)\]

<div class="desc">

grammarAltProps - the list of "-\>" properties used in all of the
alternatives associated with this match object. addAlts() stores this
list automatically - there's no need to create it manually.

</div>

<span id="grammarTag"></span>

`grammarTag`

[gramprod.t](../file/gramprod.t.html)\[[173](../source/gramprod.t.html#173)\]

<div class="desc">

grammarTag - the name for the collection of alternatives associated with
the match object. This name is primarily for debugging purposes; it
appears as the first element of the grammarInfo() result list.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="grammarInfo"></span>

`grammarInfo ( )`

[gramprod.t](../file/gramprod.t.html)\[[162](../source/gramprod.t.html#162)\]

<div class="desc">

Generate match information. This returns the same information that
grammarInfo() returns for match objects that the compiler generates for
static 'grammar' statements.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
