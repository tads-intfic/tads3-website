---
layout: docs
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



Dynamic match object interface. This is a mix-in class that should be
used as a superclass for any class used as the match object when
creating new alternatives dynamically with GrammarProd.addAlt().

This class provides an implementation of grammarInfo() that works like
the version the compiler generates for static match objects. In this
case, we use the grammarAltProps information that addAlt() stores in the
match object.

`class `**`DynamicProd`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DynamicProd`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`grammarAltProps`](#grammarAltProps) [`grammarTag`](#grammarTag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`grammarInfo`](#grammarInfo)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="grammarAltProps"></span>

`grammarAltProps`

[gramprod.t](../file/gramprod.t.html)\[[180](../source/gramprod.t.html#180)\]



grammarAltProps - the list of "-\>" properties used in all of the
alternatives associated with this match object. addAlts() stores this
list automatically - there's no need to create it manually.



<span id="grammarTag"></span>

`grammarTag`

[gramprod.t](../file/gramprod.t.html)\[[173](../source/gramprod.t.html#173)\]



grammarTag - the name for the collection of alternatives associated with
the match object. This name is primarily for debugging purposes; it
appears as the first element of the grammarInfo() result list.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="grammarInfo"></span>

`grammarInfo ( )`

[gramprod.t](../file/gramprod.t.html)\[[162](../source/gramprod.t.html#162)\]



Generate match information. This returns the same information that
grammarInfo() returns for match objects that the compiler generates for
static 'grammar' statements.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


