<span class="title">Doer</span><span class="type">class</span>

[doer.t](../file/doer.t.html)\[[163](../source/doer.t.html#163)\]

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

A Doer is a command handler for a specific action acting on particular
objects under a given set of conditions. We use these for all of the
levels of customization in command handling.

Doer objects are inherently static. All Doer objects should be defined
at compile time; they're not designed to be created dynamically during
execution. Rather than creating and removing Doer objects as conditions
in the game change, use the Doer conditions to define when a given Doer
is active and when it's dormant.

`class `**`Doer`**` :   `[`Redirector`](../object/Redirector.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Doer`**  
`         `[`Redirector`](../object/Redirector.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`default1Doer`](../object/default1Doer.html)`  `[`default2Doer`](../object/default2Doer.html)`  `[`default3Doer`](../object/default3Doer.html)`  `[`default4Doer`](../object/default4Doer.html)`  `[`getOnGroundDoer`](../object/getOnGroundDoer.html)`  `[`putOnGroundDoer`](../object/putOnGroundDoer.html)`  `[`removeDoer`](../object/removeDoer.html)`  `[`reverseAttachableDoer`](../object/reverseAttachableDoer.html)`  `[`takePathDoer`](../object/takePathDoer.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`cmd`](#cmd)`  `[`handleAction`](#handleAction)`  `[`ignoreError`](#ignoreError)`  `[`priority`](#priority)`  `[`strict`](#strict)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`checkDirection`](#checkDirection)`  `[`exec`](#exec)`  `[`execAction`](#execAction)`  `[`redirect`](#redirect)`  `

Inherited from `Redirector` :  
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cmd"></span>

`cmd`

[doer.t](../file/doer.t.html)\[[213](../source/doer.t.html#213)\]

<div class="desc">

The command that the object handles. This is a string describing the
action and object combination that this handler recognizes.

The command string specifies a verb and its objects, generally using the
same verb phrase syntax that a player would use to enter a command to
the game. The exact verb syntax is up to the language library to define;
for English, we replicate the same verb phrases used to parse command
input.

The verb phrase syntax is generally the same as for regular player
commands, but the noun syntax is different. Each noun is written as the
SOURCE CODE name of a game object or class. That is, not a
noun-and-adjective phrase as the player would type it, but the program
symbol name as it appears in the source code. If you use a class name,
the command matches any object of the class. For example, to handle
putting any treasure in any container:

  
cmd = 'put Treasure in Container'

You can match multiple objects or classes in a single noun slot (and you
can freely mix objects and classes). For example, to handle putting any
treasure or magic item in a container:

  
cmd = 'put Treasure\|Magical in Container'

You can't use the '\|' syntax with verbs, because the verb syntax covers
the entire phrase. You can match multiple verbs by writing out the
entire phrasing for each verb, separating each phrase with a semicolon:

  
cmd = 'take skull; put skull in Thing'

You can also write a command that matches ANY verb, by using "\*" as the
verb. You can follow the "\*" with any number of objects; the first is
the direct object, the second is the indirect, and the third is the
accessory. This phrasing will match any verb that matches the given
objects AND the given number of objects. For example, '\* Thing' will
match any verb with a direct object that's of class Thing, but it won't
match verbs without any objects or verbs with an indirect object. Using
"\*" as a noun will match any object as well as no object at all. So to
write a handler for every possible command, you'd write:

  
cmd = '\* \* \* \*'

That is, match any verb, with or without any direct object, indirect
object, and accessory object.

</div>

<span id="handleAction"></span>

`handleAction`

[doer.t](../file/doer.t.html)\[[368](../source/doer.t.html#368)\]

<div class="desc">

If this Doer is handling a complete action (instead of stopping one or
replacing it with another) this should either be true (if it's the same
action that we've matched) or some other action (if that's the one we're
simulating and it's not the one we matched).

</div>

<span id="ignoreError"></span>

`ignoreError`

[doer.t](../file/doer.t.html)\[[470](../source/doer.t.html#470)\]

<div class="desc">

Flag, do we want to ignore (i.e. not report) an error in the
construction of this Doer. We may want to do this when the error is
simply due to the exclusion of a module like extras.t

</div>

<span id="priority"></span>

`priority`

[doer.t](../file/doer.t.html)\[[280](../source/doer.t.html#280)\]

<div class="desc">

The priority of this handler. You can use this when it's necessary to
override the default precedence order, which is figured according to the
specialization rules described below.

Most of the time, you shouldn't need to set a priority manually. If you
don't, the library determines the precedence automatically according to
the degree of specialization. However, the way the library figures
specialization is a heuristic, so it's not always right. In cases where
the heuristic produces the wrong results, you can bypass the rules by
setting a priority manually. A manual priority takes precedence over all
of the standard rules.

Our basic approach is to process Doers in order from most specific to
most general. This creates a natural hierarchy of handlers where more
specific rules override the generic, default handlers. Here are the
degrees of specialization, in order of importance:

1\. A Doer with a higher 'priority' value takes precedence over one with
a lower value.

2\. A Doer with a 'when' condition is more specific than a Doer without
one. A 'when' condition means that the Doer is designed to operate only
at specific times, so it's inherently more specialized than one that
always operates.

3\. A Doer with a 'where' condition is more specific than a Doer without
one. A 'where' condition means that the Doer only applies to a limited
geographical area.

4\. A Doer that matches a particular Action is more specific than one
that matches any Action.

5\. If two Doer commands are for the same Action, the Doer that matches
a more specialized subclass (or just a single object instance) for a
noun phrase is more specific than one that matches a base class for the
same noun phrase. For example, 'take Container' is more specific than
'take Thing', because Container is a subclass of Thing, and 'take
backpack' (where the 'backpack' is a Container) is more specific than
either. This type of specialization applies in the canonical object role
order: direct object, indirect object, accessory. For example, we
consider 'put Container in Thing' to be more specific than 'put Thing in
Container', because we look at the direct object by itself before we
even consider the indirect object. This rule only applies when the
Action is the same: 'put Thing in Container' and 'open Door' are equal
for the purposes of this rule.

It's important to understand that each degree of specialization is
considered independently of the others, in the order above. For example,
if you have a Doer with just a 'when' condition, and another with only a
'where' condition, the one with the 'when' condition has higher
priority. This is because we look at the presence of a 'when' condition
first, before even considering whether there's a 'where' condition.

The library has no way to gauge the specificity of a 'when' or 'where'
condition, so there's no finer-grained priority to the conditions than
simply their presence or absence.

If two Doers have the same priority based on the rules above, the one
that's defined LATER in the source code has priority. This means that
Doers defined in the game take priority over library definitions.

</div>

<span id="strict"></span>

`strict`

[doer.t](../file/doer.t.html)\[[463](../source/doer.t.html#463)\]

<div class="desc">

Set this property to true for this Doer to match only if the wording
corresponds (and not just the action). At the moment the check is only
on the first word of the command, but this may usually be enough

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkDirection"></span>

`checkDirection (curCmd)`

[doer.t](../file/doer.t.html)\[[389](../source/doer.t.html#389)\]

<div class="desc">

Check whether the direction associatated with this command is valid for
the actor's current location.

</div>

<span id="exec"></span>

`exec (curCmd)`

[doer.t](../file/doer.t.html)\[[291](../source/doer.t.html#291)\]

<div class="desc">

ECSE ADDED a curCmd parameter (the command being added) to give the Doer
access to what it's meant to be acting on, together with a default
handling (execute the action associated with the current command).

</div>

<span id="execAction"></span>

`execAction (curCmd)`

[doer.t](../file/doer.t.html)\[[376](../source/doer.t.html#376)\]

<div class="desc">

We separate out execAction() as a separate method from exec() so that
custom Doers can readily override this for the player character while
leaving commands directed to other actors (or objects) to be handle by

</div>

<span id="redirect"></span>

`redirect (curCmd, altAction, dobj, :, =, 0, iobj, :, =, 0, aobj, :, =, 0, isReplacement, :, =, true)`

[doer.t](../file/doer.t.html)\[[433](../source/doer.t.html#433)\]

<div class="desc">

Utility method that can be called from execAction() to redirect the
command to a new action with the same (or new) objects. This will
normally be called via the doInstead()/doNested() interface defined on
our Redirector superclass.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
