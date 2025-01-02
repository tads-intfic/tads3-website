---
layout: docs
---
<span class="title">disambigPhrase(all)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[7317](../source/en_us.t.html#7317)\]

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

<div class="fdesc">

A "disambiguation phrase" is a phrase that answers a disambiguation
question ("which book do you mean...").

A disambiguation question can be answered with several types of syntax:

  
all/everything/all of them  
both/both of them  
any/any of them  
\<disambig list\>  
the \<ordinal list\> ones  
the former/the latter

Note that we assign non-zero badness to all of the ordinal
interpretations, so that we will take an actual vocabulary
interpretation instead of an ordinal interpretation whenever possible.
For example, if an object's name is actually "the third button," this
will give us greater affinity for using "third" as an adjective than as
an ordinal in our own list.

`grammar `<span class="gramalt">[`disambigPhrase`](../object/disambigPhrase.html)`(all)`</span>` :   `[`DisambigProd`](../object/DisambigProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`disambigPhrase(all)`**  
[`DisambigProd`](../object/DisambigProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>





Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`getResponseList`](#getResponseList)[`resolveNouns`](#resolveNouns)

Inherited from `DisambigProd` :  
[`removeAmbigFlags`](../object/DisambigProd.html#removeAmbigFlags)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getResponseList"></span>

`getResponseList ( )`

[en_us.t](../file/en_us.t.html)\[[7326](../source/en_us.t.html#7326)\]

<div class="desc">

there's only me in the response list

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[en_us.t](../file/en_us.t.html)\[[7319](../source/en_us.t.html#7319)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
