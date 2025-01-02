<span class="title">GlobalRemapping</span><span class="type">class</span>

[exec.t](../file/exec.t.html)\[[615](../source/exec.t.html#615)\]

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

GlobalRemapping makes it possible to transform one action into another
globally - as opposed to the remapTo mechanism, which lets an object
involved in the command perform a remapping. The key difference between
global remappings and remapTo is that the latter can't happen until
after the objects are resolved (for fairly obvious reasons: each remapTo
mapping is associated with an object, so you can't know which mapping to
apply until you know which object is involved). In contrast, global
remappings are performed \*before\* object resolution - this is possible
because the mappings don't depend on the objects involved in the action.

Whenever an action is about to be executed, the parser runs through all
of the defined global remappings, and gives each one a chance to remap
the command. If any remapping succeeds, we replace the original command
with the remapped version, then repeat the scan of the global remapping
list from the start - we do another complete scan of the list in case
there's another global mapping that applies to the remapped version of
the command. We repeat this process until we make it through the whole
list without finding a remapping.

GlobalRemapping instances are added to the master list of mappings
automatically at pre-init time, and any time you construct one
dynamically with 'new'.

`class `**`GlobalRemapping`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`GlobalRemapping`**  
`         `[`PreinitObject`](../object/PreinitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`giveMeToAskFor`](../object/giveMeToAskFor.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`allGlobalRemappings`](#allGlobalRemappings)`  `[`listNeedsSorting`](#listNeedsSorting)`  `[`remappingOrder`](#remappingOrder)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`execute`](#execute)`  `[`findGlobalRemapping`](#findGlobalRemapping)`  `[`getRemapping`](#getRemapping)`  `[`registerGlobalRemapping`](#registerGlobalRemapping)`  `[`unregisterGlobalRemapping`](#unregisterGlobalRemapping)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allGlobalRemappings"></span>

`allGlobalRemappings`

[exec.t](../file/exec.t.html)\[[771](../source/exec.t.html#771)\]

<div class="desc">

Static class property: the master list of remappings. We build this
automatically at preinit time, and manipulate it via our constructor.

</div>

<span id="listNeedsSorting"></span>

`listNeedsSorting`

[exec.t](../file/exec.t.html)\[[778](../source/exec.t.html#778)\]

<div class="desc">

static class property: the master list needs to be sorted; this is set
to true each time we update the list, so that the list scanner knows to
sort it before doing its scan

</div>

<span id="remappingOrder"></span>

`remappingOrder`

[exec.t](../file/exec.t.html)\[[661](../source/exec.t.html#661)\]

<div class="desc">

Remapping order - the parser applies global remappings in ascending
order of this value. In most cases, the order shouldn't matter, since
most remappings should be narrow enough that a given command will only
be subject to one remapping rule. However, in some cases you might need
to define rules that overlap, so the ordering lets you specify which one
goes first. In most cases you'll want to apply the more specific rule
first.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct ( )`

[exec.t](../file/exec.t.html)\[[740](../source/exec.t.html#740)\]

<div class="desc">

construction: add myself to the master list

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[exec.t](../file/exec.t.html)\[[733](../source/exec.t.html#733)\]

<div class="desc">

pre-initialization: add each instance to the master list

</div>

<span id="findGlobalRemapping"></span>

`findGlobalRemapping (issuingActor, targetActor, action)`

[exec.t](../file/exec.t.html)\[[678](../source/exec.t.html#678)\]

<div class="desc">

Static class method: look for a remapping. This runs through the master
list of mappings, looking for a mapping that applies to the given
command. If we find one, we'll replace the command with the remapped
version, then start over with a fresh scan of the entire list to see if
there's a remapping for the \*new\* version of the command. We repeat
this until we get through the whole list without finding a remapping.

The return value is a list, \[targetActor, action\], giving the
resulting target actor and new action object. If we don't find any
remapping, this will simply be the original values passed in as our
arguments; if we do find a remapping, this will be the new version of
the command.

</div>

<span id="getRemapping"></span>

`getRemapping (issuingActor, targetActor, action)`

[exec.t](../file/exec.t.html)\[[642](../source/exec.t.html#642)\]

<div class="desc">

Check for and apply a remapping. This method must be implemented in each
GlobalRemapping instance to perform the actual remapping work.

This routine should first check to see if the command is relevant to
this remapping. In most cases, this means checking that the command
matches some template, such as having a particular action (verb) and
combination of potential objects. Note that the objects aren't fully
resolved during global remapping - the whole point of global remapping
is to catch certain phrasings before we get to the noun resolution
phase - but the \*phrases\* involved will be known, so the range of
potential matches is knowable.

If the routine decides that the action isn't relevant to this remapping,
it should simply return nil.

If the action decides to remap the action, it must create a new Action
object representing the replacement version of the command. Then, return
a list, \[targetActor, action\], giving the new target actor and the new
action. You don't have to change the target actor, of course, but it's
included in the result so that you can change it if you want to. For
example, you could use this to remap a command of the form "X, GIVE ME
Y" to "ME, ASK X FOR Y" - note that the target actor changes from X to
ME.

</div>

<span id="registerGlobalRemapping"></span>

`registerGlobalRemapping ( )`

[exec.t](../file/exec.t.html)\[[747](../source/exec.t.html#747)\]

<div class="desc">

register myself with the global list, making this an active mapping

</div>

<span id="unregisterGlobalRemapping"></span>

`unregisterGlobalRemapping ( )`

[exec.t](../file/exec.t.html)\[[761](../source/exec.t.html#761)\]

<div class="desc">

unregister - this removes me from the global list, making this mapping
inactive: after being unregistered, the parser won't apply this mapping
to new commands

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
