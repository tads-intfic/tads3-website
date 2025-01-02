---
---
<span class="title">NameAsOther</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[1966](../source/en_us.t.html#1966)\]

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

An object that uses the same name as another object. This maps all of
the properties involved in supplying the object's name, number, and
other usage information from this object to a given target object, so
that all messages involving this object use the same name as the target
object. This is a mix-in class that can be used with any other class.

Note that we map only the \*reported\* name for the object. We do NOT
give this object any vocabulary from the other object; in other words,
we don't enter this object into the dictionary with the other object's
vocabulary words.

`class `**`NameAsOther`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`NameAsOther`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`NameAsOther`**  
`         `[`NameAsParent`](../object/NameAsParent.html)  
`                 `[`ComplexComponent`](../object/ComplexComponent.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`aDisambigName`](#aDisambigName)`  `[`aName`](#aName)`  `[`aNameObj`](#aNameObj)`  `[`disambigEquivName`](#disambigEquivName)`  `[`disambigName`](#disambigName)`  `[`isHer`](#isHer)`  `[`isHim`](#isHim)`  `[`isIt`](#isIt)`  `[`isMassNoun`](#isMassNoun)`  `[`isPlural`](#isPlural)`  `[`isProperName`](#isProperName)`  `[`isQualifiedName`](#isQualifiedName)`  `[`itIs`](#itIs)`  `[`itIsContraction`](#itIsContraction)`  `[`itNom`](#itNom)`  `[`itObj`](#itObj)`  `[`itPossAdj`](#itPossAdj)`  `[`itPossNoun`](#itPossNoun)`  `[`itReflexive`](#itReflexive)`  `[`listName`](#listName)`  `[`name`](#name)`  `[`nameDoes`](#nameDoes)`  `[`nameIs`](#nameIs)`  `[`nameIsnt`](#nameIsnt)`  `[`nameSays`](#nameSays)`  `[`nameSees`](#nameSees)`  `[`pluralName`](#pluralName)`  `[`targetObj`](#targetObj)`  `[`thatIsContraction`](#thatIsContraction)`  `[`thatNom`](#thatNom)`  `[`thatObj`](#thatObj)`  `[`theDisambigName`](#theDisambigName)`  `[`theName`](#theName)`  `[`theNameObj`](#theNameObj)`  `[`theNamePossAdj`](#theNamePossAdj)`  `[`theNamePossNoun`](#theNamePossNoun)`  `[`theNameWithOwner`](#theNameWithOwner)`  `[`verbCan`](#verbCan)`  `[`verbCannot`](#verbCannot)`  `[`verbCant`](#verbCant)`  `[`verbEndingEs`](#verbEndingEs)`  `[`verbEndingIes`](#verbEndingIes)`  `[`verbEndingS`](#verbEndingS)`  `[`verbEndingSD`](#verbEndingSD)`  `[`verbEndingSEd`](#verbEndingSEd)`  `[`verbMust`](#verbMust)`  `[`verbToBe`](#verbToBe)`  `[`verbToCome`](#verbToCome)`  `[`verbToDo`](#verbToDo)`  `[`verbToGo`](#verbToGo)`  `[`verbToHave`](#verbToHave)`  `[`verbToLeave`](#verbToLeave)`  `[`verbToSay`](#verbToSay)`  `[`verbToSee`](#verbToSee)`  `[`verbWas`](#verbWas)`  `[`verbWill`](#verbWill)`  `[`verbWont`](#verbWont)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`aNameOwnerLoc`](#aNameOwnerLoc)`  `[`conjugateRegularVerb`](#conjugateRegularVerb)`  `[`countDisambigName`](#countDisambigName)`  `[`countName`](#countName)`  `[`countNameOwnerLoc`](#countNameOwnerLoc)`  `[`itVerb`](#itVerb)`  `[`nameVerb`](#nameVerb)`  `[`notePromptByOwnerLoc`](#notePromptByOwnerLoc)`  `[`notePromptByPossAdj`](#notePromptByPossAdj)`  `[`theNameOwnerLoc`](#theNameOwnerLoc)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="aDisambigName"></span>

`aDisambigName`

[en_us.t](../file/en_us.t.html)\[[1983](../source/en_us.t.html#1983)\]

<div class="desc">

*no description available*

</div>

<span id="aName"></span>

`aName`

[en_us.t](../file/en_us.t.html)\[[2018](../source/en_us.t.html#2018)\]

<div class="desc">

*no description available*

</div>

<span id="aNameObj"></span>

`aNameObj`

[en_us.t](../file/en_us.t.html)\[[2019](../source/en_us.t.html#2019)\]

<div class="desc">

*no description available*

</div>

<span id="disambigEquivName"></span>

`disambigEquivName`

[en_us.t](../file/en_us.t.html)\[[1985](../source/en_us.t.html#1985)\]

<div class="desc">

*no description available*

</div>

<span id="disambigName"></span>

`disambigName`

[en_us.t](../file/en_us.t.html)\[[1981](../source/en_us.t.html#1981)\]

<div class="desc">

map the derived name properties as well, in case any are overridden

</div>

<span id="isHer"></span>

`isHer`

[en_us.t](../file/en_us.t.html)\[[1974](../source/en_us.t.html#1974)\]

<div class="desc">

*no description available*

</div>

<span id="isHim"></span>

`isHim`

[en_us.t](../file/en_us.t.html)\[[1973](../source/en_us.t.html#1973)\]

<div class="desc">

*no description available*

</div>

<span id="isIt"></span>

`isIt`

[en_us.t](../file/en_us.t.html)\[[1975](../source/en_us.t.html#1975)\]

<div class="desc">

*no description available*

</div>

<span id="isMassNoun"></span>

`isMassNoun`

[en_us.t](../file/en_us.t.html)\[[1972](../source/en_us.t.html#1972)\]

<div class="desc">

*no description available*

</div>

<span id="isPlural"></span>

`isPlural`

[en_us.t](../file/en_us.t.html)\[[1971](../source/en_us.t.html#1971)\]

<div class="desc">

map our naming and usage properties to the target object

</div>

<span id="isProperName"></span>

`isProperName`

[en_us.t](../file/en_us.t.html)\[[1976](../source/en_us.t.html#1976)\]

<div class="desc">

*no description available*

</div>

<span id="isQualifiedName"></span>

`isQualifiedName`

[en_us.t](../file/en_us.t.html)\[[1977](../source/en_us.t.html#1977)\]

<div class="desc">

*no description available*

</div>

<span id="itIs"></span>

`itIs`

[en_us.t](../file/en_us.t.html)\[[1998](../source/en_us.t.html#1998)\]

<div class="desc">

*no description available*

</div>

<span id="itIsContraction"></span>

`itIsContraction`

[en_us.t](../file/en_us.t.html)\[[1999](../source/en_us.t.html#1999)\]

<div class="desc">

*no description available*

</div>

<span id="itNom"></span>

`itNom`

[en_us.t](../file/en_us.t.html)\[[1990](../source/en_us.t.html#1990)\]

<div class="desc">

map the pronoun properites, in case any are overridden

</div>

<span id="itObj"></span>

`itObj`

[en_us.t](../file/en_us.t.html)\[[1991](../source/en_us.t.html#1991)\]

<div class="desc">

*no description available*

</div>

<span id="itPossAdj"></span>

`itPossAdj`

[en_us.t](../file/en_us.t.html)\[[1992](../source/en_us.t.html#1992)\]

<div class="desc">

*no description available*

</div>

<span id="itPossNoun"></span>

`itPossNoun`

[en_us.t](../file/en_us.t.html)\[[1993](../source/en_us.t.html#1993)\]

<div class="desc">

*no description available*

</div>

<span id="itReflexive"></span>

`itReflexive`

[en_us.t](../file/en_us.t.html)\[[1994](../source/en_us.t.html#1994)\]

<div class="desc">

*no description available*

</div>

<span id="listName"></span>

`listName`

[en_us.t](../file/en_us.t.html)\[[1986](../source/en_us.t.html#1986)\]

<div class="desc">

*no description available*

</div>

<span id="name"></span>

`name`

[en_us.t](../file/en_us.t.html)\[[1978](../source/en_us.t.html#1978)\]

<div class="desc">

*no description available*

</div>

<span id="nameDoes"></span>

`nameDoes`

[en_us.t](../file/en_us.t.html)\[[2028](../source/en_us.t.html#2028)\]

<div class="desc">

*no description available*

</div>

<span id="nameIs"></span>

`nameIs`

[en_us.t](../file/en_us.t.html)\[[2021](../source/en_us.t.html#2021)\]

<div class="desc">

*no description available*

</div>

<span id="nameIsnt"></span>

`nameIsnt`

[en_us.t](../file/en_us.t.html)\[[2022](../source/en_us.t.html#2022)\]

<div class="desc">

*no description available*

</div>

<span id="nameSays"></span>

`nameSays`

[en_us.t](../file/en_us.t.html)\[[2035](../source/en_us.t.html#2035)\]

<div class="desc">

*no description available*

</div>

<span id="nameSees"></span>

`nameSees`

[en_us.t](../file/en_us.t.html)\[[2033](../source/en_us.t.html#2033)\]

<div class="desc">

*no description available*

</div>

<span id="pluralName"></span>

`pluralName`

[en_us.t](../file/en_us.t.html)\[[2020](../source/en_us.t.html#2020)\]

<div class="desc">

*no description available*

</div>

<span id="targetObj"></span>

`targetObj`

[en_us.t](../file/en_us.t.html)\[[1968](../source/en_us.t.html#1968)\]

<div class="desc">

the target object - we'll use the same name as this object

</div>

<span id="thatIsContraction"></span>

`thatIsContraction`

[en_us.t](../file/en_us.t.html)\[[1997](../source/en_us.t.html#1997)\]

<div class="desc">

*no description available*

</div>

<span id="thatNom"></span>

`thatNom`

[en_us.t](../file/en_us.t.html)\[[1995](../source/en_us.t.html#1995)\]

<div class="desc">

*no description available*

</div>

<span id="thatObj"></span>

`thatObj`

[en_us.t](../file/en_us.t.html)\[[1996](../source/en_us.t.html#1996)\]

<div class="desc">

*no description available*

</div>

<span id="theDisambigName"></span>

`theDisambigName`

[en_us.t](../file/en_us.t.html)\[[1982](../source/en_us.t.html#1982)\]

<div class="desc">

*no description available*

</div>

<span id="theName"></span>

`theName`

[en_us.t](../file/en_us.t.html)\[[2003](../source/en_us.t.html#2003)\]

<div class="desc">

*no description available*

</div>

<span id="theNameObj"></span>

`theNameObj`

[en_us.t](../file/en_us.t.html)\[[2004](../source/en_us.t.html#2004)\]

<div class="desc">

*no description available*

</div>

<span id="theNamePossAdj"></span>

`theNamePossAdj`

[en_us.t](../file/en_us.t.html)\[[2005](../source/en_us.t.html#2005)\]

<div class="desc">

*no description available*

</div>

<span id="theNamePossNoun"></span>

`theNamePossNoun`

[en_us.t](../file/en_us.t.html)\[[2006](../source/en_us.t.html#2006)\]

<div class="desc">

*no description available*

</div>

<span id="theNameWithOwner"></span>

`theNameWithOwner`

[en_us.t](../file/en_us.t.html)\[[2007](../source/en_us.t.html#2007)\]

<div class="desc">

*no description available*

</div>

<span id="verbCan"></span>

`verbCan`

[en_us.t](../file/en_us.t.html)\[[2037](../source/en_us.t.html#2037)\]

<div class="desc">

*no description available*

</div>

<span id="verbCannot"></span>

`verbCannot`

[en_us.t](../file/en_us.t.html)\[[2038](../source/en_us.t.html#2038)\]

<div class="desc">

*no description available*

</div>

<span id="verbCant"></span>

`verbCant`

[en_us.t](../file/en_us.t.html)\[[2039](../source/en_us.t.html#2039)\]

<div class="desc">

*no description available*

</div>

<span id="verbEndingEs"></span>

`verbEndingEs`

[en_us.t](../file/en_us.t.html)\[[2046](../source/en_us.t.html#2046)\]

<div class="desc">

*no description available*

</div>

<span id="verbEndingIes"></span>

`verbEndingIes`

[en_us.t](../file/en_us.t.html)\[[2047](../source/en_us.t.html#2047)\]

<div class="desc">

*no description available*

</div>

<span id="verbEndingS"></span>

`verbEndingS`

[en_us.t](../file/en_us.t.html)\[[2043](../source/en_us.t.html#2043)\]

<div class="desc">

*no description available*

</div>

<span id="verbEndingSD"></span>

`verbEndingSD`

[en_us.t](../file/en_us.t.html)\[[2044](../source/en_us.t.html#2044)\]

<div class="desc">

*no description available*

</div>

<span id="verbEndingSEd"></span>

`verbEndingSEd`

[en_us.t](../file/en_us.t.html)\[[2045](../source/en_us.t.html#2045)\]

<div class="desc">

*no description available*

</div>

<span id="verbMust"></span>

`verbMust`

[en_us.t](../file/en_us.t.html)\[[2036](../source/en_us.t.html#2036)\]

<div class="desc">

*no description available*

</div>

<span id="verbToBe"></span>

`verbToBe`

[en_us.t](../file/en_us.t.html)\[[2024](../source/en_us.t.html#2024)\]

<div class="desc">

*no description available*

</div>

<span id="verbToCome"></span>

`verbToCome`

[en_us.t](../file/en_us.t.html)\[[2030](../source/en_us.t.html#2030)\]

<div class="desc">

*no description available*

</div>

<span id="verbToDo"></span>

`verbToDo`

[en_us.t](../file/en_us.t.html)\[[2027](../source/en_us.t.html#2027)\]

<div class="desc">

*no description available*

</div>

<span id="verbToGo"></span>

`verbToGo`

[en_us.t](../file/en_us.t.html)\[[2029](../source/en_us.t.html#2029)\]

<div class="desc">

*no description available*

</div>

<span id="verbToHave"></span>

`verbToHave`

[en_us.t](../file/en_us.t.html)\[[2026](../source/en_us.t.html#2026)\]

<div class="desc">

*no description available*

</div>

<span id="verbToLeave"></span>

`verbToLeave`

[en_us.t](../file/en_us.t.html)\[[2031](../source/en_us.t.html#2031)\]

<div class="desc">

*no description available*

</div>

<span id="verbToSay"></span>

`verbToSay`

[en_us.t](../file/en_us.t.html)\[[2034](../source/en_us.t.html#2034)\]

<div class="desc">

*no description available*

</div>

<span id="verbToSee"></span>

`verbToSee`

[en_us.t](../file/en_us.t.html)\[[2032](../source/en_us.t.html#2032)\]

<div class="desc">

*no description available*

</div>

<span id="verbWas"></span>

`verbWas`

[en_us.t](../file/en_us.t.html)\[[2025](../source/en_us.t.html#2025)\]

<div class="desc">

*no description available*

</div>

<span id="verbWill"></span>

`verbWill`

[en_us.t](../file/en_us.t.html)\[[2040](../source/en_us.t.html#2040)\]

<div class="desc">

*no description available*

</div>

<span id="verbWont"></span>

`verbWont`

[en_us.t](../file/en_us.t.html)\[[2041](../source/en_us.t.html#2041)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="aNameOwnerLoc"></span>

`aNameOwnerLoc (ownerPri)`

[en_us.t](../file/en_us.t.html)\[[2008](../source/en_us.t.html#2008)\]

<div class="desc">

*no description available*

</div>

<span id="conjugateRegularVerb"></span>

`conjugateRegularVerb (verb)`

[en_us.t](../file/en_us.t.html)\[[2001](../source/en_us.t.html#2001)\]

<div class="desc">

*no description available*

</div>

<span id="countDisambigName"></span>

`countDisambigName (cnt)`

[en_us.t](../file/en_us.t.html)\[[1984](../source/en_us.t.html#1984)\]

<div class="desc">

*no description available*

</div>

<span id="countName"></span>

`countName (cnt)`

[en_us.t](../file/en_us.t.html)\[[1987](../source/en_us.t.html#1987)\]

<div class="desc">

*no description available*

</div>

<span id="countNameOwnerLoc"></span>

`countNameOwnerLoc (cnt, ownerPri)`

[en_us.t](../file/en_us.t.html)\[[2012](../source/en_us.t.html#2012)\]

<div class="desc">

*no description available*

</div>

<span id="itVerb"></span>

`itVerb (verb)`

[en_us.t](../file/en_us.t.html)\[[2000](../source/en_us.t.html#2000)\]

<div class="desc">

*no description available*

</div>

<span id="nameVerb"></span>

`nameVerb (verb)`

[en_us.t](../file/en_us.t.html)\[[2023](../source/en_us.t.html#2023)\]

<div class="desc">

*no description available*

</div>

<span id="notePromptByOwnerLoc"></span>

`notePromptByOwnerLoc (ownerPri)`

[en_us.t](../file/en_us.t.html)\[[2014](../source/en_us.t.html#2014)\]

<div class="desc">

*no description available*

</div>

<span id="notePromptByPossAdj"></span>

`notePromptByPossAdj ( )`

[en_us.t](../file/en_us.t.html)\[[2016](../source/en_us.t.html#2016)\]

<div class="desc">

*no description available*

</div>

<span id="theNameOwnerLoc"></span>

`theNameOwnerLoc (ownerPri)`

[en_us.t](../file/en_us.t.html)\[[2010](../source/en_us.t.html#2010)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
