---
layout: docs
---
<span class="title">hintManager</span><span class="type">object</span>

[hintsys.t](../file/hintsys.t.html)\[[549](../source/hintsys.t.html#549)\]

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

The default hint system user interface implementation. All of the
hint-related verbs operate by calling methods in the object stored in
the global variable gHintSystem, which we'll by default initialize with
a reference to this object. Games can replace this with their own
implementations if desired.

**`hintManager`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`hintManager`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`topHintMenuObj`](#topHintMenuObj)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`disableHints`](#disableHints)[`execute`](#execute)[`showHints`](#showHints)[`showHintWarning`](#showHintWarning)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="topHintMenuObj"></span>

`topHintMenuObj`

[hintsys.t](../file/hintsys.t.html)\[[594](../source/hintsys.t.html#594)\]

<div class="desc">

The top-level hint menu. This must be provided by the game, and should
be set during initialization. If this is nil, hints won't be available.

We don't provide a default top-level hint menu because we want to give
the game maximum flexibility in defining this object exactly as it
wants. For convenience, an object of class TopHintMenu will
automatically register itself during pre-initialization - but note that
there should be only one such object in the entire game, since if there
are more than one, only one will be arbitrarily chosen as the registered
object.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="disableHints"></span>

`disableHints ( )`

[hintsys.t](../file/hintsys.t.html)\[[567](../source/hintsys.t.html#567)\]

<div class="desc">

Disable hints - this is invoked by the HINTS OFF action.

Some users don't like on-line hint systems because they find them to be
too much of a temptation. To address this concern, we provide this HINTS
OFF command. Players who want to ensure that their will-power won't
crumble later on in the face of a difficult puzzle can type HINTS OFF
early on, before the going gets rough; this will disable hints for the
rest of the session. It's kind of like giving your credit card to a
friend before going to the mall, making the friend promise that they
won't let you spend more than such and such an amount, no matter how
much you beg and plead.

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[551](../source/hintsys.t.html#551)\]

<div class="desc">

during pre-initialization, register as the global hint manager

</div>

<span id="showHints"></span>

`showHints ( )`

[hintsys.t](../file/hintsys.t.html)\[[599](../source/hintsys.t.html#599)\]

<div class="desc">

Show hints - invoke the hint system.

</div>

<span id="showHintWarning"></span>

`showHintWarning ( )`

[hintsys.t](../file/hintsys.t.html)\[[646](../source/hintsys.t.html#646)\]

<div class="desc">

Show a warning before showing any hints. By default, we'll show this at
most once per session or once per saved game. Returns true if we are to
proceed to the hints, nil if not.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
