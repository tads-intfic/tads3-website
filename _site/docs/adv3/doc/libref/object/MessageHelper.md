<span class="title">MessageHelper</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[3153](../source/en_us.t.html#3153)\]

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

Some helper routines for the library messages.

`class `**`MessageHelper`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MessageHelper`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`libMessages`](../object/libMessages.html)`  `[`playerActionMessages`](../object/playerActionMessages.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`askDisambigList`](#askDisambigList)`  `[`shortTIMsg`](#shortTIMsg)`  `[`shortTMsg`](#shortTMsg)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="askDisambigList"></span>

`askDisambigList (matchList, fullMatchList, showIndefCounts, dist)`

[en_us.t](../file/en_us.t.html)\[[3160](../source/en_us.t.html#3160)\]

<div class="desc">

Show a list of objects for a disambiguation query. If 'showIndefCounts'
is true, we'll show the number of equivalent items for each equivalent
item; otherwise, we'll just show an indefinite noun phrase for each
equivalent item.

</div>

<span id="shortTIMsg"></span>

`shortTIMsg (short, long)`

[en_us.t](../file/en_us.t.html)\[[3270](../source/en_us.t.html#3270)\]

<div class="desc">

For a TIAction result, select the short-form or long-form message. This
works just like shortTIMsg(), but takes into account both the direct and
indirect objects.

</div>

<span id="shortTMsg"></span>

`shortTMsg (short, long)`

[en_us.t](../file/en_us.t.html)\[[3247](../source/en_us.t.html#3247)\]

<div class="desc">

For a TAction result, select the short-form or long-form message,
according to the disambiguation status of the action. This is for the
ultra-terse default messages, such as "Taken" or "Dropped", that
sometimes need more descriptive variations.

If there was no disambiguation involved, we'll use the short version of
the message.

If there was unclear disambiguation involved (meaning that there was
more than one logical object matching a noun phrase, but the parser was
able to decide based on likelihood rankings), we'll still use the short
version, because we assume that the parser will have generated a
parenthetical announcement to point out its choice.

If there was clear disambiguation involved (meaning that more than one
in-scope object matched a noun phrase, but there was only one choice
that passed the logicalness tests), AND the announcement mode (in
gameMain.ambigAnnounceMode) is DescribeClear, we'll choose the long-form
message.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
