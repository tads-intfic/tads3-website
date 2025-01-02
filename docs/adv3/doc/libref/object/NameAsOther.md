---
layout: docs
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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NameAsOther`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`NameAsOther`**  
[`NameAsParent`](../object/NameAsParent.html)  
[`ComplexComponent`](../object/ComplexComponent.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`aDisambigName`](#aDisambigName)[`aName`](#aName)[`aNameObj`](#aNameObj)[`disambigEquivName`](#disambigEquivName)[`disambigName`](#disambigName)[`isHer`](#isHer)[`isHim`](#isHim)[`isIt`](#isIt)[`isMassNoun`](#isMassNoun)[`isPlural`](#isPlural)[`isProperName`](#isProperName)[`isQualifiedName`](#isQualifiedName)[`itIs`](#itIs)[`itIsContraction`](#itIsContraction)[`itNom`](#itNom)[`itObj`](#itObj)[`itPossAdj`](#itPossAdj)[`itPossNoun`](#itPossNoun)[`itReflexive`](#itReflexive)[`listName`](#listName)[`name`](#name)[`nameDoes`](#nameDoes)[`nameIs`](#nameIs)[`nameIsnt`](#nameIsnt)[`nameSays`](#nameSays)[`nameSees`](#nameSees)[`pluralName`](#pluralName)[`targetObj`](#targetObj)[`thatIsContraction`](#thatIsContraction)[`thatNom`](#thatNom)[`thatObj`](#thatObj)[`theDisambigName`](#theDisambigName)[`theName`](#theName)[`theNameObj`](#theNameObj)[`theNamePossAdj`](#theNamePossAdj)[`theNamePossNoun`](#theNamePossNoun)[`theNameWithOwner`](#theNameWithOwner)[`verbCan`](#verbCan)[`verbCannot`](#verbCannot)[`verbCant`](#verbCant)[`verbEndingEs`](#verbEndingEs)[`verbEndingIes`](#verbEndingIes)[`verbEndingS`](#verbEndingS)[`verbEndingSD`](#verbEndingSD)[`verbEndingSEd`](#verbEndingSEd)[`verbMust`](#verbMust)[`verbToBe`](#verbToBe)[`verbToCome`](#verbToCome)[`verbToDo`](#verbToDo)[`verbToGo`](#verbToGo)[`verbToHave`](#verbToHave)[`verbToLeave`](#verbToLeave)[`verbToSay`](#verbToSay)[`verbToSee`](#verbToSee)[`verbWas`](#verbWas)[`verbWill`](#verbWill)[`verbWont`](#verbWont)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`aNameOwnerLoc`](#aNameOwnerLoc)[`conjugateRegularVerb`](#conjugateRegularVerb)[`countDisambigName`](#countDisambigName)[`countName`](#countName)[`countNameOwnerLoc`](#countNameOwnerLoc)[`itVerb`](#itVerb)[`nameVerb`](#nameVerb)[`notePromptByOwnerLoc`](#notePromptByOwnerLoc)[`notePromptByPossAdj`](#notePromptByPossAdj)[`theNameOwnerLoc`](#theNameOwnerLoc)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="aDisambigName"></span>

`aDisambigName`

[en_us.t](../file/en_us.t.html)\[[1983](../source/en_us.t.html#1983)\]



*no description available*



<span id="aName"></span>

`aName`

[en_us.t](../file/en_us.t.html)\[[2018](../source/en_us.t.html#2018)\]



*no description available*



<span id="aNameObj"></span>

`aNameObj`

[en_us.t](../file/en_us.t.html)\[[2019](../source/en_us.t.html#2019)\]



*no description available*



<span id="disambigEquivName"></span>

`disambigEquivName`

[en_us.t](../file/en_us.t.html)\[[1985](../source/en_us.t.html#1985)\]



*no description available*



<span id="disambigName"></span>

`disambigName`

[en_us.t](../file/en_us.t.html)\[[1981](../source/en_us.t.html#1981)\]



map the derived name properties as well, in case any are overridden



<span id="isHer"></span>

`isHer`

[en_us.t](../file/en_us.t.html)\[[1974](../source/en_us.t.html#1974)\]



*no description available*



<span id="isHim"></span>

`isHim`

[en_us.t](../file/en_us.t.html)\[[1973](../source/en_us.t.html#1973)\]



*no description available*



<span id="isIt"></span>

`isIt`

[en_us.t](../file/en_us.t.html)\[[1975](../source/en_us.t.html#1975)\]



*no description available*



<span id="isMassNoun"></span>

`isMassNoun`

[en_us.t](../file/en_us.t.html)\[[1972](../source/en_us.t.html#1972)\]



*no description available*



<span id="isPlural"></span>

`isPlural`

[en_us.t](../file/en_us.t.html)\[[1971](../source/en_us.t.html#1971)\]



map our naming and usage properties to the target object



<span id="isProperName"></span>

`isProperName`

[en_us.t](../file/en_us.t.html)\[[1976](../source/en_us.t.html#1976)\]



*no description available*



<span id="isQualifiedName"></span>

`isQualifiedName`

[en_us.t](../file/en_us.t.html)\[[1977](../source/en_us.t.html#1977)\]



*no description available*



<span id="itIs"></span>

`itIs`

[en_us.t](../file/en_us.t.html)\[[1998](../source/en_us.t.html#1998)\]



*no description available*



<span id="itIsContraction"></span>

`itIsContraction`

[en_us.t](../file/en_us.t.html)\[[1999](../source/en_us.t.html#1999)\]



*no description available*



<span id="itNom"></span>

`itNom`

[en_us.t](../file/en_us.t.html)\[[1990](../source/en_us.t.html#1990)\]



map the pronoun properites, in case any are overridden



<span id="itObj"></span>

`itObj`

[en_us.t](../file/en_us.t.html)\[[1991](../source/en_us.t.html#1991)\]



*no description available*



<span id="itPossAdj"></span>

`itPossAdj`

[en_us.t](../file/en_us.t.html)\[[1992](../source/en_us.t.html#1992)\]



*no description available*



<span id="itPossNoun"></span>

`itPossNoun`

[en_us.t](../file/en_us.t.html)\[[1993](../source/en_us.t.html#1993)\]



*no description available*



<span id="itReflexive"></span>

`itReflexive`

[en_us.t](../file/en_us.t.html)\[[1994](../source/en_us.t.html#1994)\]



*no description available*



<span id="listName"></span>

`listName`

[en_us.t](../file/en_us.t.html)\[[1986](../source/en_us.t.html#1986)\]



*no description available*



<span id="name"></span>

`name`

[en_us.t](../file/en_us.t.html)\[[1978](../source/en_us.t.html#1978)\]



*no description available*



<span id="nameDoes"></span>

`nameDoes`

[en_us.t](../file/en_us.t.html)\[[2028](../source/en_us.t.html#2028)\]



*no description available*



<span id="nameIs"></span>

`nameIs`

[en_us.t](../file/en_us.t.html)\[[2021](../source/en_us.t.html#2021)\]



*no description available*



<span id="nameIsnt"></span>

`nameIsnt`

[en_us.t](../file/en_us.t.html)\[[2022](../source/en_us.t.html#2022)\]



*no description available*



<span id="nameSays"></span>

`nameSays`

[en_us.t](../file/en_us.t.html)\[[2035](../source/en_us.t.html#2035)\]



*no description available*



<span id="nameSees"></span>

`nameSees`

[en_us.t](../file/en_us.t.html)\[[2033](../source/en_us.t.html#2033)\]



*no description available*



<span id="pluralName"></span>

`pluralName`

[en_us.t](../file/en_us.t.html)\[[2020](../source/en_us.t.html#2020)\]



*no description available*



<span id="targetObj"></span>

`targetObj`

[en_us.t](../file/en_us.t.html)\[[1968](../source/en_us.t.html#1968)\]



the target object - we'll use the same name as this object



<span id="thatIsContraction"></span>

`thatIsContraction`

[en_us.t](../file/en_us.t.html)\[[1997](../source/en_us.t.html#1997)\]



*no description available*



<span id="thatNom"></span>

`thatNom`

[en_us.t](../file/en_us.t.html)\[[1995](../source/en_us.t.html#1995)\]



*no description available*



<span id="thatObj"></span>

`thatObj`

[en_us.t](../file/en_us.t.html)\[[1996](../source/en_us.t.html#1996)\]



*no description available*



<span id="theDisambigName"></span>

`theDisambigName`

[en_us.t](../file/en_us.t.html)\[[1982](../source/en_us.t.html#1982)\]



*no description available*



<span id="theName"></span>

`theName`

[en_us.t](../file/en_us.t.html)\[[2003](../source/en_us.t.html#2003)\]



*no description available*



<span id="theNameObj"></span>

`theNameObj`

[en_us.t](../file/en_us.t.html)\[[2004](../source/en_us.t.html#2004)\]



*no description available*



<span id="theNamePossAdj"></span>

`theNamePossAdj`

[en_us.t](../file/en_us.t.html)\[[2005](../source/en_us.t.html#2005)\]



*no description available*



<span id="theNamePossNoun"></span>

`theNamePossNoun`

[en_us.t](../file/en_us.t.html)\[[2006](../source/en_us.t.html#2006)\]



*no description available*



<span id="theNameWithOwner"></span>

`theNameWithOwner`

[en_us.t](../file/en_us.t.html)\[[2007](../source/en_us.t.html#2007)\]



*no description available*



<span id="verbCan"></span>

`verbCan`

[en_us.t](../file/en_us.t.html)\[[2037](../source/en_us.t.html#2037)\]



*no description available*



<span id="verbCannot"></span>

`verbCannot`

[en_us.t](../file/en_us.t.html)\[[2038](../source/en_us.t.html#2038)\]



*no description available*



<span id="verbCant"></span>

`verbCant`

[en_us.t](../file/en_us.t.html)\[[2039](../source/en_us.t.html#2039)\]



*no description available*



<span id="verbEndingEs"></span>

`verbEndingEs`

[en_us.t](../file/en_us.t.html)\[[2046](../source/en_us.t.html#2046)\]



*no description available*



<span id="verbEndingIes"></span>

`verbEndingIes`

[en_us.t](../file/en_us.t.html)\[[2047](../source/en_us.t.html#2047)\]



*no description available*



<span id="verbEndingS"></span>

`verbEndingS`

[en_us.t](../file/en_us.t.html)\[[2043](../source/en_us.t.html#2043)\]



*no description available*



<span id="verbEndingSD"></span>

`verbEndingSD`

[en_us.t](../file/en_us.t.html)\[[2044](../source/en_us.t.html#2044)\]



*no description available*



<span id="verbEndingSEd"></span>

`verbEndingSEd`

[en_us.t](../file/en_us.t.html)\[[2045](../source/en_us.t.html#2045)\]



*no description available*



<span id="verbMust"></span>

`verbMust`

[en_us.t](../file/en_us.t.html)\[[2036](../source/en_us.t.html#2036)\]



*no description available*



<span id="verbToBe"></span>

`verbToBe`

[en_us.t](../file/en_us.t.html)\[[2024](../source/en_us.t.html#2024)\]



*no description available*



<span id="verbToCome"></span>

`verbToCome`

[en_us.t](../file/en_us.t.html)\[[2030](../source/en_us.t.html#2030)\]



*no description available*



<span id="verbToDo"></span>

`verbToDo`

[en_us.t](../file/en_us.t.html)\[[2027](../source/en_us.t.html#2027)\]



*no description available*



<span id="verbToGo"></span>

`verbToGo`

[en_us.t](../file/en_us.t.html)\[[2029](../source/en_us.t.html#2029)\]



*no description available*



<span id="verbToHave"></span>

`verbToHave`

[en_us.t](../file/en_us.t.html)\[[2026](../source/en_us.t.html#2026)\]



*no description available*



<span id="verbToLeave"></span>

`verbToLeave`

[en_us.t](../file/en_us.t.html)\[[2031](../source/en_us.t.html#2031)\]



*no description available*



<span id="verbToSay"></span>

`verbToSay`

[en_us.t](../file/en_us.t.html)\[[2034](../source/en_us.t.html#2034)\]



*no description available*



<span id="verbToSee"></span>

`verbToSee`

[en_us.t](../file/en_us.t.html)\[[2032](../source/en_us.t.html#2032)\]



*no description available*



<span id="verbWas"></span>

`verbWas`

[en_us.t](../file/en_us.t.html)\[[2025](../source/en_us.t.html#2025)\]



*no description available*



<span id="verbWill"></span>

`verbWill`

[en_us.t](../file/en_us.t.html)\[[2040](../source/en_us.t.html#2040)\]



*no description available*



<span id="verbWont"></span>

`verbWont`

[en_us.t](../file/en_us.t.html)\[[2041](../source/en_us.t.html#2041)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="aNameOwnerLoc"></span>

`aNameOwnerLoc (ownerPri)`

[en_us.t](../file/en_us.t.html)\[[2008](../source/en_us.t.html#2008)\]



*no description available*



<span id="conjugateRegularVerb"></span>

`conjugateRegularVerb (verb)`

[en_us.t](../file/en_us.t.html)\[[2001](../source/en_us.t.html#2001)\]



*no description available*



<span id="countDisambigName"></span>

`countDisambigName (cnt)`

[en_us.t](../file/en_us.t.html)\[[1984](../source/en_us.t.html#1984)\]



*no description available*



<span id="countName"></span>

`countName (cnt)`

[en_us.t](../file/en_us.t.html)\[[1987](../source/en_us.t.html#1987)\]



*no description available*



<span id="countNameOwnerLoc"></span>

`countNameOwnerLoc (cnt, ownerPri)`

[en_us.t](../file/en_us.t.html)\[[2012](../source/en_us.t.html#2012)\]



*no description available*



<span id="itVerb"></span>

`itVerb (verb)`

[en_us.t](../file/en_us.t.html)\[[2000](../source/en_us.t.html#2000)\]



*no description available*



<span id="nameVerb"></span>

`nameVerb (verb)`

[en_us.t](../file/en_us.t.html)\[[2023](../source/en_us.t.html#2023)\]



*no description available*



<span id="notePromptByOwnerLoc"></span>

`notePromptByOwnerLoc (ownerPri)`

[en_us.t](../file/en_us.t.html)\[[2014](../source/en_us.t.html#2014)\]



*no description available*



<span id="notePromptByPossAdj"></span>

`notePromptByPossAdj ( )`

[en_us.t](../file/en_us.t.html)\[[2016](../source/en_us.t.html#2016)\]



*no description available*



<span id="theNameOwnerLoc"></span>

`theNameOwnerLoc (ownerPri)`

[en_us.t](../file/en_us.t.html)\[[2010](../source/en_us.t.html#2010)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


