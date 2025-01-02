---
layout: docs
---
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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ChildNameAsOther`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`actorInAName`](#actorInAName) [`actorInName`](#actorInName) [`actorInPrep`](#actorInPrep) [`actorIntoName`](#actorIntoName) [`actorIntoPrep`](#actorIntoPrep) [`actorOutOfName`](#actorOutOfName) [`actorOutOfPrep`](#actorOutOfPrep) [`objInPrep`](#objInPrep)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`childInName`](#childInName) [`childInNameGen`](#childInNameGen) [`childInNameWithOwner`](#childInNameWithOwner)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="actorInAName"></span>

`actorInAName`

[en_us.t](../file/en_us.t.html)\[[2089](../source/en_us.t.html#2089)\]



*no description available*



<span id="actorInName"></span>

`actorInName`

[en_us.t](../file/en_us.t.html)\[[2086](../source/en_us.t.html#2086)\]



*no description available*



<span id="actorInPrep"></span>

`actorInPrep`

[en_us.t](../file/en_us.t.html)\[[2078](../source/en_us.t.html#2078)\]



*no description available*



<span id="actorIntoName"></span>

`actorIntoName`

[en_us.t](../file/en_us.t.html)\[[2088](../source/en_us.t.html#2088)\]



*no description available*



<span id="actorIntoPrep"></span>

`actorIntoPrep`

[en_us.t](../file/en_us.t.html)\[[2080](../source/en_us.t.html#2080)\]



*no description available*



<span id="actorOutOfName"></span>

`actorOutOfName`

[en_us.t](../file/en_us.t.html)\[[2087](../source/en_us.t.html#2087)\]



*no description available*



<span id="actorOutOfPrep"></span>

`actorOutOfPrep`

[en_us.t](../file/en_us.t.html)\[[2079](../source/en_us.t.html#2079)\]



*no description available*



<span id="objInPrep"></span>

`objInPrep`

[en_us.t](../file/en_us.t.html)\[[2077](../source/en_us.t.html#2077)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="childInName"></span>

`childInName (childName)`

[en_us.t](../file/en_us.t.html)\[[2081](../source/en_us.t.html#2081)\]



*no description available*



<span id="childInNameGen"></span>

`childInNameGen (childName, myName)`

[en_us.t](../file/en_us.t.html)\[[2084](../source/en_us.t.html#2084)\]



*no description available*



<span id="childInNameWithOwner"></span>

`childInNameWithOwner (childName)`

[en_us.t](../file/en_us.t.html)\[[2082](../source/en_us.t.html#2082)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


