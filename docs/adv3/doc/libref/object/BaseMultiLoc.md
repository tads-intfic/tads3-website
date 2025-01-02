<span class="title">BaseMultiLoc</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[2436](../source/objects.t.html#2436)\]

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

Base multi-location item with automatic initialization. This is the base
class for various multi-located object classes.

We provide four ways of initializing a multi-located object's set of
locations.

First, the object can simply enumerate the locations explicitly, by
setting the 'locationList' property to the list of locations.

Second, the object can indicate that it's located in every object of a
given class, by setting the 'initialLocationClass' property to the
desired class.

Third, the object can define a rule that specifies which objects are its
initial locations, by defining the 'isInitiallyIn(obj)' method to return
true if 'obj' is an initial location, nil if not. This can be combined
with the 'initialLocationClass' mechanism: if 'initialLocationClass' is
non-nil, then only objects of the given class will be tested with
'isInitiallyIn()'; if 'initialLocationClass' is nil, then every object
in the entire game will be tested.

Fourth, you can override the method buildLocationList() to build an
return the initial list of locations. You can use this approach if you
have a complex set of rules for determining the initial location list,
and none of the above approaches are flexible enough to implement it. If
you override buildLocationList(), simply compute and return the list of
initial locations; the library will automatically call the method during
pre-initialization.

If you don't define any of these, then the object simply has no initial
locations by default.

`class `**`BaseMultiLoc`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BaseMultiLoc`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`BaseMultiLoc`**  
`         `[`MultiInstance`](../object/MultiInstance.html)  
`                 `[`MultiFaceted`](../object/MultiFaceted.html)  
`         `[`MultiLoc`](../object/MultiLoc.html)  
`                 `[`SenseConnector`](../object/SenseConnector.html)  
`                         `[`DistanceConnector`](../object/DistanceConnector.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`initialLocationClass`](#initialLocationClass)`  `[`locationList`](#locationList)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`buildLocationList`](#buildLocationList)`  `[`isDirectlyIn`](#isDirectlyIn)`  `[`isIn`](#isIn)`  `[`isInitiallyIn`](#isInitiallyIn)`  `[`isListedInContents`](#isListedInContents)`  `[`isOrIsIn`](#isOrIsIn)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="initialLocationClass"></span>

`initialLocationClass`

[objects.t](../file/objects.t.html)\[[2451](../source/objects.t.html#2451)\]

<div class="desc">

The class of our initial locations. If this is nil, then our default
buildLocationList() method will test every object in the entire game
with our isInitiallyIn() method; otherwise, we'll test only objects of
the given class.

</div>

<span id="locationList"></span>

`locationList`

[objects.t](../file/objects.t.html)\[[2443](../source/objects.t.html#2443)\]

<div class="desc">

The location list. Instances can override this to manually enumerate our
initial locations. By default, we'll call buildLocationList() the first
time this is invoked, and store the result.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="buildLocationList"></span>

`buildLocationList ( )`

[objects.t](../file/objects.t.html)\[[2471](../source/objects.t.html#2471)\]

<div class="desc">

Build my list of locations, and return the list. This default
implementation looks for an 'initialLocationClass' property value, and
if one is found, looks at every object of that class; otherwise, it
looks at every object in the entire game. In either case, each object is
then passed to our isInitiallyIn() method, and is included in our result
list if isInitiallyIn() returns true.

</div>

<span id="isDirectlyIn"></span>

`isDirectlyIn (obj)`

[objects.t](../file/objects.t.html)\[[2533](../source/objects.t.html#2533)\]

<div class="desc">

determine if I'm directly in the given object

</div>

<span id="isIn"></span>

`isIn (obj)`

[objects.t](../file/objects.t.html)\[[2518](../source/objects.t.html#2518)\]

<div class="desc">

determine if I'm in a given object, directly or indirectly

</div>

<span id="isInitiallyIn"></span>

`isInitiallyIn (obj)`

[objects.t](../file/objects.t.html)\[[2460](../source/objects.t.html#2460)\]

<div class="desc">

Test an object for inclusion in our initial location list. By default,
we'll simply return true to include every object. We return true by
default so that an instance can merely specify a value for
initialLocationClass in order to place this object in every instance of
the given class.

</div>

<span id="isListedInContents"></span>

`isListedInContents (examinee, :?)`

[objects.t](../file/objects.t.html)\[[2551](../source/objects.t.html#2551)\]

<div class="desc">

Determine if I'm to be listed within my immediate container. As a
multi-location object, we have multiple immediate containers, so we need
to know which direct container we're talking about.
Thing.examineListContents() passes this down via "cont:", a named
parameter. Other callers might not always provide this argument, though,
so if it's not present simply base this on whether we have a special
description in any context.

</div>

<span id="isOrIsIn"></span>

`isOrIsIn (obj)`

[objects.t](../file/objects.t.html)\[[2559](../source/objects.t.html#2559)\]

<div class="desc">

Am I either inside 'obj', or equal to 'obj'?

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
