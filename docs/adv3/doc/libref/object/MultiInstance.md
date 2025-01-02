---
layout: docs
---
<span class="title">MultiInstance</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3049](../source/objects.t.html#3049)\]

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



A "multi-instance" object is a simple way of creating copies of an
object in several places. This is often useful for decorations and other
features that recur in a whole group of rooms.

You define a multi-instance object in two parts.

First, you define a MultiInstance object, which is just a hollow shell
of an object that sets up the location relationships. This shell object
doesn't have any presence in the game world; it's just a programming
abstraction.

Second, as part of the shell object, you define an example of the object
that will actually show up in the game in each of the multiple
locations. You do this by defining a nested object under the
'instanceObject' property of the shell object. This is otherwise a
perfectly ordinary object. In most cases, you'll want to make this a
Decoration, Fixture, or some other non-portable object class, since the
"cloned" nature of these objects means that you usually won't want them
moving around (if they did, you might run into situations where you had
several of them in the same place, leading to disambiguation headaches
for the player).

Here's an example of how you set up a multi-instance object:

trees: MultiInstance  
locationList = \[forest1, forest2, forest3\]  
instanceObject: Fixture { 'tree/trees' 'trees'  
"Many tall, old trees grow here. "  
isPlural = true  
}  
;

Note that the instanceObject itself has no location, because it doesn't
appear in the game-world model itself - it's just a template for the
real objects.

During initialization, the library will automatically create several
instances (i.e., subclasses) of the example object - one instance per
location, to be exact. These instances are the real objects that show up
in the game world.

MultiInstance has one more helpful feature: it lets you dynamically
change the set of locations where the instances appear. You do this
using the same interface that you use to move around MultiLoc objects -
moveInto(), moveIntoAdd(), moveOutOf(). When you call these routines on
the MultiInstance shell object, it will add and remove object instances
as needed to keep everything consistent. Thanks to a little manipulation
we do on the instance objects when we set them up, you can also move the
instance objects around directly using moveInto(), and they'll update
the MultiInstance parent to keep its location list consistent.

`class `**`MultiInstance`**` :   `[`BaseMultiLoc`](../object/BaseMultiLoc.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MultiInstance`**  
[`BaseMultiLoc`](../object/BaseMultiLoc.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`MultiInstance`**  
[`MultiFaceted`](../object/MultiFaceted.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`instanceList`](#instanceList) [`instanceMixIn`](#instanceMixIn) [`instanceObject`](#instanceObject)

Inherited from `BaseMultiLoc` :  
[`initialLocationClass`](../object/BaseMultiLoc.html#initialLocationClass) [`locationList`](../object/BaseMultiLoc.html#locationList)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addInstance`](#addInstance) [`addToContents`](#addToContents) [`getInstanceIn`](#getInstanceIn) [`initializeLocation`](#initializeLocation) [`moveInto`](#moveInto) [`moveIntoAdd`](#moveIntoAdd) [`moveOutOf`](#moveOutOf) [`removeFromContents`](#removeFromContents)

Inherited from `BaseMultiLoc` :  
[`buildLocationList`](../object/BaseMultiLoc.html#buildLocationList) [`isDirectlyIn`](../object/BaseMultiLoc.html#isDirectlyIn) [`isIn`](../object/BaseMultiLoc.html#isIn) [`isInitiallyIn`](../object/BaseMultiLoc.html#isInitiallyIn) [`isListedInContents`](../object/BaseMultiLoc.html#isListedInContents) [`isOrIsIn`](../object/BaseMultiLoc.html#isOrIsIn)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="instanceList"></span>

`instanceList`

[objects.t](../file/objects.t.html)\[[3159](../source/objects.t.html#3159)\]



our vector of active instance objects



<span id="instanceMixIn"></span>

`instanceMixIn`

[objects.t](../file/objects.t.html)\[[3156](../source/objects.t.html#3156)\]



the mix-in superclass for our instance objects



<span id="instanceObject"></span>

`instanceObject`

[objects.t](../file/objects.t.html)\[[3051](../source/objects.t.html#3051)\]



the template object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addInstance"></span>

`addInstance (loc)`

[objects.t](../file/objects.t.html)\[[3119](../source/objects.t.html#3119)\]



internal service routine - add an instance for a given location



<span id="addToContents"></span>

`addToContents (obj)`

[objects.t](../file/objects.t.html)\[[3147](../source/objects.t.html#3147)\]



If any contents are added to the MultiInstance object, they must be
contents of the template object, so add them to the template object
instead of the MultiInstance parent.



<span id="getInstanceIn"></span>

`getInstanceIn (loc)`

[objects.t](../file/objects.t.html)\[[3115](../source/objects.t.html#3115)\]



get our instance object (if any) that's in the given location



<span id="initializeLocation"></span>

`initializeLocation ( )`

[objects.t](../file/objects.t.html)\[[3054](../source/objects.t.html#3054)\]



initialize my locations



<span id="moveInto"></span>

`moveInto (loc)`

[objects.t](../file/objects.t.html)\[[3065](../source/objects.t.html#3065)\]



Move the MultiInstance into the given location. This removes us from any
other existing locations and adds us (if we're not already there) to the
given location.



<span id="moveIntoAdd"></span>

`moveIntoAdd (loc)`

[objects.t](../file/objects.t.html)\[[3091](../source/objects.t.html#3091)\]



Add the new location to our set of locations. Any existing locations are
unaffected.



<span id="moveOutOf"></span>

`moveOutOf (loc)`

[objects.t](../file/objects.t.html)\[[3102](../source/objects.t.html#3102)\]



Remove me from the given location. Other locations are unaffected.



<span id="removeFromContents"></span>

`removeFromContents (obj)`

[objects.t](../file/objects.t.html)\[[3153](../source/objects.t.html#3153)\]



remove an object from our contents - we'll delegate this to our template
object just like we delegate addToContents





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


