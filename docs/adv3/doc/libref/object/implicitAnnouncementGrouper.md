<span class="title">implicitAnnouncementGrouper</span><span class="type">object</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5465](../source/msg_neu.t.html#5465)\]

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

Implied action announcement grouper. This takes a list of
ImplicitActionAnnouncement reports and returns a single message string
describing the entire list of actions.

**`implicitAnnouncementGrouper`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`implicitAnnouncementGrouper`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`keepAllFailures`](#keepAllFailures)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`compositeMessage`](#compositeMessage)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="keepAllFailures"></span>

`keepAllFailures`

[msg_neu.t](../file/msg_neu.t.html)\[[5487](../source/msg_neu.t.html#5487)\]

<div class="desc">

Configuration option: keep all failures in a list of implied
announcements. If this is true, then we'll write things like "trying to
unlock the door and then open it"; if nil, we'll instead write simply
"trying to unlock the door".

By default, we keep only the first of a group of failures. A group of
failures is always recursively related, so the first announcement refers
to the command that actually failed; the rest of the announcements are
for the enclosing actions that triggered the first action. All of the
enclosing actions failed as well, but only because the first action
failed.

Announcing all of the actions is too verbose for most tastes, which is
why we set the default here to nil. The fact that the first action in
the group failed means that we necessarily won't carry out any of the
enclosing actions, so the enclosing announcements don't tell us much.
All they really tell us is why we're running the action that actually
failed, but that's almost always obvious, so suppressing them is usually
fine.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="compositeMessage"></span>

`compositeMessage (lst)`

[msg_neu.t](../file/msg_neu.t.html)\[[5490](../source/msg_neu.t.html#5490)\]

<div class="desc">

build the composite message

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
