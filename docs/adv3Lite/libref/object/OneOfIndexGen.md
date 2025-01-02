---
layout: docs
---
<span class="title">OneOfIndexGen</span><span class="type">class</span>

[\_main.t](../file/_main.t.html)\[[1262](../source/_main.t.html#1262)\]

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



\<\<one of\>\> index generator. The compiler generates an anonymous
instance of this class for each \<\<one of\>\> list in string, setting
the property 'numItems' to the number of items in the list, and
'listAttrs' property to a string giving the sequence type. The compiler
generates a call to getNextIndex() within the string to get the next
index value, which is an integer from 1 to numItems.

`class `**`OneOfIndexGen`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`OneOfIndexGen`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`idx_`](#idx_)[`listAttrs`](#listAttrs)[`lst_`](#lst_)[`numItems`](#numItems)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getNextIndex`](#getNextIndex)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="idx_"></span>

`idx_`

[\_main.t](../file/_main.t.html)\[[1468](../source/_main.t.html#1468)\]



current position in the list



<span id="listAttrs"></span>

`listAttrs`

[\_main.t](../file/_main.t.html)\[[1308](../source/_main.t.html#1308)\]



List attributes. This is a string with a comma-delimited list of tokens
describing the treatment on the list for each fetch. The first call to
getNextIndex() takes the first token off the list and generates an
appropriate return value, possibly queuing up a list of future values.
The next call to getNextIndex() reads from the queue. Once the queue is
exhausted, the next call takes the second token off the attribute list
and repeats the process. Once the attribute list is down to one token,
we don't remove the token, but simply repeat it forever.

For example, 'seq,rand' runs through the entire list in sequence once,
then generates independently random values from then on. 'shuffle,stop'
runs through the list once in shuffled order, then repeats the last pick
from the shuffled list forever.

The individual attribute values are:

rand - pick an item at random, independently of past selections.

rand-norpt - pick an item at random, but don't pick the single most
recent item chosen, to avoid repeating the same thing twice in a row.

rand-wt - pick an item by random, weighting the items with decreasing
probabilities. The last item is given relative weight 1, the second to
last weight 2, the third to last weight 3, etc. In other words, the nth
item from the end of the list is n times as likely to be picked as the
last item. The picks are independent.

seq - run through the items in sequence (1, 2, ... numItems).

shuffle - run through the list in a shuffled order.

shuffle2 - shuffle the list into a random order, but only run through
half before reshuffling

stop - repeat the previous selection forever. (This should only be used
as the second or later attribute in the list, since it depends on a
prior selection being made.)



<span id="lst_"></span>

`lst_`

[\_main.t](../file/_main.t.html)\[[1465](../source/_main.t.html#1465)\]



generated list



<span id="numItems"></span>

`numItems`

[\_main.t](../file/_main.t.html)\[[1264](../source/_main.t.html#1264)\]



number of list items



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getNextIndex"></span>

`getNextIndex ( )`

[\_main.t](../file/_main.t.html)\[[1315](../source/_main.t.html#1315)\]



Get the next index value. Returns an integer from 1 to numItems. The
algorithm for choosing the index depends on the list type, as defined by
listAttrs.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


