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

<div class="fdesc">

Result object from applying a Distinguisher to a set of objects.

`class `**`DistResult`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DistResult`**  
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

` `[`appliesTo`](#appliesTo)`  `[`distinguisher`](#distinguisher)`  `[`partitioned`](#partitioned)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`partition`](#partition)`  `[`partSize`](#partSize)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="appliesTo"></span>

`appliesTo`

[parser.t](../file/parser.t.html)\[[1520](../source/parser.t.html#1520)\]

<div class="desc">

the objects that the distinguisher applies to

</div>

<span id="distinguisher"></span>

`distinguisher`

[parser.t](../file/parser.t.html)\[[1531](../source/parser.t.html#1531)\]

<div class="desc">

the Distinguisher that these results come from

</div>

<span id="partitioned"></span>

`partitioned`

[parser.t](../file/parser.t.html)\[[1528](../source/parser.t.html#1528)\]

<div class="desc">

The partitioned list of objects. This is a list of lists. Each sublist
is a group of objects we can't distinguish from one another. Each object
in appliesTo appears once in a sublist, and each object in a sublist
appears in appliesTo.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (dist)`

[parser.t](../file/parser.t.html)\[[1498](../source/parser.t.html#1498)\]

<div class="desc">

*no description available*

</div>

<span id="partition"></span>

`partition (obj)`

[parser.t](../file/parser.t.html)\[[1508](../source/parser.t.html#1508)\]

<div class="desc">

get the partition in which 'obj' appears

</div>

<span id="partSize"></span>

`partSize (obj)`

[parser.t](../file/parser.t.html)\[[1514](../source/parser.t.html#1514)\]

<div class="desc">

get the size of the partition in which 'obj' appears

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
