---
layout: docs
---
<span class="title">gameInfoWriter</span><span class="type">object</span>

[gameinfo.t](../file/gameinfo.t.html)\[[71](../source/gameinfo.t.html#71)\]

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



TADS GameInfo writer

**`gameInfoWriter`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`gameInfoWriter`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getGameInfoToday`](#getGameInfoToday) [`writeGameInfo`](#writeGameInfo)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getGameInfoToday"></span>

`getGameInfoToday ( )`

[gameinfo.t](../file/gameinfo.t.html)\[[100](../source/gameinfo.t.html#100)\]



Get today's date as a string in the format YYYY-MM-DD. This can be used
as a simple way of keeping the release date in the game information up
to date with the latest compilation.



<span id="writeGameInfo"></span>

`writeGameInfo (tab, fname)`

[gameinfo.t](../file/gameinfo.t.html)\[[77](../source/gameinfo.t.html#77)\]



Write the game information from the given LookupTable to the given file.
Each key/value pair in the LookupTable gives the GameInfo key and the
corresponding value string for that key.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


