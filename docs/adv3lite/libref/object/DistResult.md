---
layout: docs
---
<span class="title">DistResult</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1497](../source/parser.t.html#1497)\]

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



Result object from applying a Distinguisher to a set of objects.

`class `**`DistResult`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DistResult`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`appliesTo`](#appliesTo) [`distinguisher`](#distinguisher) [`partitioned`](#partitioned)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`partition`](#partition) [`partSize`](#partSize)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="appliesTo"></span>

`appliesTo`

[parser.t](../file/parser.t.html)\[[1520](../source/parser.t.html#1520)\]



the objects that the distinguisher applies to



<span id="distinguisher"></span>

`distinguisher`

[parser.t](../file/parser.t.html)\[[1531](../source/parser.t.html#1531)\]



the Distinguisher that these results come from



<span id="partitioned"></span>

`partitioned`

[parser.t](../file/parser.t.html)\[[1528](../source/parser.t.html#1528)\]



The partitioned list of objects. This is a list of lists. Each sublist
is a group of objects we can't distinguish from one another. Each object
in appliesTo appears once in a sublist, and each object in a sublist
appears in appliesTo.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (dist)`

[parser.t](../file/parser.t.html)\[[1498](../source/parser.t.html#1498)\]



*no description available*



<span id="partition"></span>

`partition (obj)`

[parser.t](../file/parser.t.html)\[[1508](../source/parser.t.html#1508)\]



get the partition in which 'obj' appears



<span id="partSize"></span>

`partSize (obj)`

[parser.t](../file/parser.t.html)\[[1514](../source/parser.t.html#1514)\]



get the size of the partition in which 'obj' appears





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


