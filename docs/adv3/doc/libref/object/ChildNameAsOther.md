<span class="title">ChildNameAsOther</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[2076](../source/en_us.t.html#2076)\]

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

ChildNameAsOther is a mix-in class that can be used with NameAsOther to
add the various childInXxx naming to the mapped properties. The
childInXxx names are the names generated when another object is
described as located within this object; by mapping these properties to
our target object, we ensure that we use exactly the same phrasing as we
would if the contained object were actually contained by our target
rather than by us.

Note that this should always be used in combination with NameAsOther:

myObj: NameAsOther, ChildNameAsOther, Thing ...

You can also use it the same way in combination with a subclass of
NameAsOther, such as NameAsParent.

`class `**`ChildNameAsOther`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ChildNameAsOther`**  
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

` `[`actorInAName`](#actorInAName)`  `[`actorInName`](#actorInName)`  `[`actorInPrep`](#actorInPrep)`  `[`actorIntoName`](#actorIntoName)`  `[`actorIntoPrep`](#actorIntoPrep)`  `[`actorOutOfName`](#actorOutOfName)`  `[`actorOutOfPrep`](#actorOutOfPrep)`  `[`objInPrep`](#objInPrep)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`childInName`](#childInName)`  `[`childInNameGen`](#childInNameGen)`  `[`childInNameWithOwner`](#childInNameWithOwner)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actorInAName"></span>

`actorInAName`

[en_us.t](../file/en_us.t.html)\[[2089](../source/en_us.t.html#2089)\]

<div class="desc">

*no description available*

</div>

<span id="actorInName"></span>

`actorInName`

[en_us.t](../file/en_us.t.html)\[[2086](../source/en_us.t.html#2086)\]

<div class="desc">

*no description available*

</div>

<span id="actorInPrep"></span>

`actorInPrep`

[en_us.t](../file/en_us.t.html)\[[2078](../source/en_us.t.html#2078)\]

<div class="desc">

*no description available*

</div>

<span id="actorIntoName"></span>

`actorIntoName`

[en_us.t](../file/en_us.t.html)\[[2088](../source/en_us.t.html#2088)\]

<div class="desc">

*no description available*

</div>

<span id="actorIntoPrep"></span>

`actorIntoPrep`

[en_us.t](../file/en_us.t.html)\[[2080](../source/en_us.t.html#2080)\]

<div class="desc">

*no description available*

</div>

<span id="actorOutOfName"></span>

`actorOutOfName`

[en_us.t](../file/en_us.t.html)\[[2087](../source/en_us.t.html#2087)\]

<div class="desc">

*no description available*

</div>

<span id="actorOutOfPrep"></span>

`actorOutOfPrep`

[en_us.t](../file/en_us.t.html)\[[2079](../source/en_us.t.html#2079)\]

<div class="desc">

*no description available*

</div>

<span id="objInPrep"></span>

`objInPrep`

[en_us.t](../file/en_us.t.html)\[[2077](../source/en_us.t.html#2077)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="childInName"></span>

`childInName (childName)`

[en_us.t](../file/en_us.t.html)\[[2081](../source/en_us.t.html#2081)\]

<div class="desc">

*no description available*

</div>

<span id="childInNameGen"></span>

`childInNameGen (childName, myName)`

[en_us.t](../file/en_us.t.html)\[[2084](../source/en_us.t.html#2084)\]

<div class="desc">

*no description available*

</div>

<span id="childInNameWithOwner"></span>

`childInNameWithOwner (childName)`

[en_us.t](../file/en_us.t.html)\[[2082](../source/en_us.t.html#2082)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
