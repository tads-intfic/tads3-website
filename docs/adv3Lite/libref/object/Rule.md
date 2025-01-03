---
layout: docs
---
<span class="title">Rule</span><span class="type">class</span>

[rules.t](../file/rules.t.html)\[[177](../source/rules.t.html#177)\]

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



A Rule is an object that defines a set of conditions that need to be met
for it to be executed when its RuleBook is run and a method that's
executed when its conditions are met. A Rule can be associated with one
or more RuleBooks; it starts out in the RuleBook with which it is
associated via its + property (i.e. its location). \[DEFINED IN RULES
EXTENSION\]

`class `**`Rule`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Rule`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Rule`**  
[`AfterRule`](../object/AfterRule.html)  
[`BeforeRule`](../object/BeforeRule.html)  
[`InitRule`](../object/InitRule.html)  
[`PreinitRule`](../object/PreinitRule.html)  
[`ReportRule`](../object/ReportRule.html)  
[`TurnEndRule`](../object/TurnEndRule.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`action`](#action) [`actor`](#actor) [`aobj`](#aobj) [`dobj`](#dobj) [`during`](#during) [`execAfter`](#execAfter) [`execBefore`](#execBefore) [`iobj`](#iobj) [`isActive`](#isActive) [`location`](#location) [`matchObj`](#matchObj) [`present`](#present) [`priority`](#priority) [`rulebook`](#rulebook) [`rulebooks`](#rulebooks) [`specificity`](#specificity) [`stopValue`](#stopValue) [`where`](#where) [`who`](#who)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`activate`](#activate) [`addTo`](#addTo) [`calcSpecficity`](#calcSpecficity) [`compareTo`](#compareTo) [`deactivate`](#deactivate) [`follow`](#follow) [`initializeRule`](#initializeRule) [`matchConditions`](#matchConditions) [`moveInto`](#moveInto) [`removeFrom`](#removeFrom) [`runAfter`](#runAfter) [`runBefore`](#runBefore) [`setRulebook`](#setRulebook) [`when`](#when)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="action"></span>

`// action`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[756](../source/rules.t.html#756)\]



An action, or a list of Actions, one of which (e.g. Take or Jump) must
be the current action in order for this Rule to match. \[RULES
EXTENSION\]



<span id="actor"></span>

`actor`

[rules.t](../file/rules.t.html)\[[716](../source/rules.t.html#716)\]



The actor to use to compare with the who property of this Rule. This
will normally be gPlayerChar, but the value of this property is taken
from our RuleBook's actor property. \[RULES EXTENSION\]



<span id="aobj"></span>

`// aobj`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[767](../source/rules.t.html#767)\]



*no description available*



<span id="dobj"></span>

`// dobj`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[765](../source/rules.t.html#765)\]



An object (or class), or a list of objects (and or classes) one of which
of each the direct, indirect and accessory objects of the current action
must match in order for this Rule to match. (The accessory object is
only relevant if the TIAAction extension is in use). \[RULES EXTENSION\]



<span id="during"></span>

`// during`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[750](../source/rules.t.html#750)\]



A Scene, or a list of Scenes, one of which much be currently happening
for this Rule to match. \[RULES EXTENSION\]



<span id="execAfter"></span>

`execAfter`

[rules.t](../file/rules.t.html)\[[258](../source/rules.t.html#258)\]



A list of Rules this Rule should specifically run after; this overrides
all other ranking. \[RULES EXTENSION\]



<span id="execBefore"></span>

`execBefore`

[rules.t](../file/rules.t.html)\[[275](../source/rules.t.html#275)\]



A list of Rules this Rule should specifically run before; this overrides
all other ranking except for runAfter/execAfter. \[RULES EXTENSION\]



<span id="iobj"></span>

`// iobj`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[766](../source/rules.t.html#766)\]



*no description available*



<span id="isActive"></span>

`isActive`

[rules.t](../file/rules.t.html)\[[282](../source/rules.t.html#282)\]



A Rule is normally active (that is it will normally be considered when a
RuleBook is being followed) but it can be temporarily disabled by
setting its isActive property to nil. \[RULES EXTENSION\]



<span id="location"></span>

`location`

[rules.t](../file/rules.t.html)\[[183](../source/rules.t.html#183)\]



Our location is the RuleBook with which we start out being associated.
Normally this will be defined by locating a Rule inside its RukeBook
using the + notation. \[RULES EXTENSION\]



<span id="matchObj"></span>

`// matchObj`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[775](../source/rules.t.html#775)\]



An object, class, or other value, or a list of objects and/or classes or
of other values, one of which must match the matchObj property of our
rulebook (which is set by the first parameter of a call to that
RuleBooks's follow() method) for this Rule to match. \[RULES EXTENSION\]



<span id="present"></span>

`// present`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[786](../source/rules.t.html#786)\]



An object in the presence of which the actor must be for this rule to
match. Presence normally means in the same room, but if this property is
defined as a list and the first item in the list is a property pointer
(&canSee, &canHear, &canReach, &canSmell), this property will be used to
test for tne appropriate sense connection between the actor and at least
one of the other items in the list instead. \[RULES EXTENSION\]



<span id="priority"></span>

`priority`

[rules.t](../file/rules.t.html)\[[234](../source/rules.t.html#234)\]



The priority of this Rule. This can be used to alter the order in which
this Rule is considered in its RuleBook. If two Rules have different
priorities they will be run in priority order, highest priority first.
The default value is 100. \[RULES EXTENSION\]



<span id="rulebook"></span>

`rulebook`

[rules.t](../file/rules.t.html)\[[191](../source/rules.t.html#191)\]



The rulebook that's currently considering us. Normally this will be our
location, but it could be a different RuleBook if we belong to one. Note
that this property is automatically set by the library and so it should
never need to be altered by game code. \[RULES EXTENSION\]



<span id="rulebooks"></span>

`rulebooks`

[rules.t](../file/rules.t.html)\[[201](../source/rules.t.html#201)\]



A list of all the rulebooks this rule is currently associated with.
\[RULES EXTENSION\]



<span id="specificity"></span>

`specificity`

[rules.t](../file/rules.t.html)\[[242](../source/rules.t.html#242)\]



Where two Rules have the same priority, the one with the more specific
conditions is taken first. The specificity property holds a measure of
the Rule's specificity which is calculated by the calcSpecificity()
method at PreInit. \[RULES EXTENSION\]



<span id="stopValue"></span>

`stopValue`

[rules.t](../file/rules.t.html)\[[709](../source/rules.t.html#709)\]



The value this rule should return when the stop macro is used at the end
of its follow method. By default we use our rulebook's stopValue.
\[RULES EXTENSION\]



<span id="where"></span>

`// where`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[730](../source/rules.t.html#730)\]



A Room or Region, or a list of Rooms and/or Regions in which our actor
(usually either gActor or gPlayerChar - the latter by default - must be
for this Rule to match. \[RULES EXTENSION\]



<span id="who"></span>

`// who`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[744](../source/rules.t.html#744)\]



An actor, or a list of actors, one of whom must be performing the
current action for this Rule to match. \[RULES EXTENSION\]



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="activate"></span>

`activate ( )`

[rules.t](../file/rules.t.html)\[[285](../source/rules.t.html#285)\]



Make this Rule active \[RULES EXTENSION\]



<span id="addTo"></span>

`addTo (rb)`

[rules.t](../file/rules.t.html)\[[649](../source/rules.t.html#649)\]



Add this rule to another rulebook \[RULES EXTENSION\]



<span id="calcSpecficity"></span>

`calcSpecficity ( )`

[rules.t](../file/rules.t.html)\[[297](../source/rules.t.html#297)\]



Calculate the specificity of this Rule. The principles are (a) Rules
that specify more conditions are more specific than Rule that specify
fewer condition; (b) conditions involving specific objects are more
specific that those relating to classes and (c) Rooms are more specific
than Regions in a where condition. \[RULES EXTENSION\]



<span id="compareTo"></span>

`compareTo (other)`

[rules.t](../file/rules.t.html)\[[417](../source/rules.t.html#417)\]



Get the processing priority sorting order relative to another Rule.
\[RULES EXTENSION\]



<span id="deactivate"></span>

`deactivate ( )`

[rules.t](../file/rules.t.html)\[[288](../source/rules.t.html#288)\]



Make this Rule inactive \[RULES EXTENSION\]



<span id="follow"></span>

`follow ([args])`

[rules.t](../file/rules.t.html)\[[224](../source/rules.t.html#224)\]



Do whatever this Rule needs to do when its conditions are met. This
method will need to be defined on each individual Rule in game code.
\[RULES EXTENSION\]



<span id="initializeRule"></span>

`initializeRule ( )`

[rules.t](../file/rules.t.html)\[[208](../source/rules.t.html#208)\]



Initialize this Rule by adding it to the contents list of its location
and calculating its specificity (i.e. how specific its conditions are)
\[RULES EXTENSION\]



<span id="matchConditions"></span>

`matchConditions ( )`

[rules.t](../file/rules.t.html)\[[464](../source/rules.t.html#464)\]



Check whether a Rule matches its where, when, who and during conditions.
\[RULES EXTENSION\]



<span id="moveInto"></span>

`moveInto (rb)`

[rules.t](../file/rules.t.html)\[[676](../source/rules.t.html#676)\]



Move this rule to another rulebook, removing it from all its current
rulebooks. If rb is nil, simply remove this Rule from its current
rulebooks. \[RULES EXTENSION\]



<span id="removeFrom"></span>

`removeFrom (rb)`

[rules.t](../file/rules.t.html)\[[659](../source/rules.t.html#659)\]



Remove this rule from a rulebook \[RULES EXTENSION\]



<span id="runAfter"></span>

`runAfter (other)`

[rules.t](../file/rules.t.html)\[[249](../source/rules.t.html#249)\]



Return true if this Rule should always execute after other (despite all
other ranking criteria). By default we return true if and only if other
is in our execAfter list. \[RULES EXTENSION\]



<span id="runBefore"></span>

`runBefore (other)`

[rules.t](../file/rules.t.html)\[[265](../source/rules.t.html#265)\]



Return true if this Rule should always execute before other (despite all
other ranking criteria). By default we return true if and only if other
is in our execBefore list. \[RULES EXTENSION\]



<span id="setRulebook"></span>

`setRulebook (r)`

[rules.t](../file/rules.t.html)\[[198](../source/rules.t.html#198)\]



Set our current rulebook to r. Note that this method is normally called
by the Rulebook that's running us, and shouldn't normally be used by
game code. \[RULES EXTENSION\]



<span id="when"></span>

`// when ( )`<span class="rem">Interface description only</span>

[rules.t](../file/rules.t.html)\[[738](../source/rules.t.html#738)\]



A condition that must hold (or a method returning a Boolean value to
determine whether or not appropriate conditions hold) for this Rule to
match. This is only needed if none of the other properties in this
section provide a way of speficifying the required conditions.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


