---
layout: docs
---
<span class="title">Openable</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3484](../source/objects.t.html#3484)\]

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



Openable: a mix-in class that can be combined with an object's other
superclasses to make the object respond to the verbs "open" and "close."
We also add some extra features for other related verbs, such as a
must-be-open precondition "look in" and "board".

`class `**`Openable`**` :   `[`BasicOpenable`](../object/BasicOpenable.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Openable`**  
[`BasicOpenable`](../object/BasicOpenable.html)  
[`Linkable`](../object/Linkable.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Openable`**  
[`Door`](../object/Door.html)  
[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
[`Matchbook`](../object/Matchbook.html)  
[`OpenableContainer`](../object/OpenableContainer.html)  
[`KeyedContainer`](../object/KeyedContainer.html)  
[`LockableContainer`](../object/LockableContainer.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`descContentsLister`](#descContentsLister)[`lockStatusReportable`](#lockStatusReportable)[`openingLister`](#openingLister)

Inherited from `BasicOpenable` :  
[`cannotMoveThroughMsg`](../object/BasicOpenable.html#cannotMoveThroughMsg)[`cannotTouchThroughMsg`](../object/BasicOpenable.html#cannotTouchThroughMsg)[`initiallyOpen`](../object/BasicOpenable.html#initiallyOpen)[`isOpen_`](../object/BasicOpenable.html#isOpen_)[`openDesc`](../object/BasicOpenable.html#openDesc)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addInteriorReachableCond`](#addInteriorReachableCond)[`dobjFor(Board)`](#dobjFor(Board))[`dobjFor(Close)`](#dobjFor(Close))[`dobjFor(GetOutOf)`](#dobjFor(GetOutOf))[`dobjFor(Lock)`](#dobjFor(Lock))[`dobjFor(LockWith)`](#dobjFor(LockWith))[`dobjFor(LookIn)`](#dobjFor(LookIn))[`dobjFor(Open)`](#dobjFor(Open))[`dobjFor(Search)`](#dobjFor(Search))[`iobjFor(PourInto)`](#iobjFor(PourInto))[`iobjFor(PutIn)`](#iobjFor(PutIn))[`openStatus`](#openStatus)

Inherited from `BasicOpenable` :  
[`initializeThing`](../object/BasicOpenable.html#initializeThing)[`isOpen`](../object/BasicOpenable.html#isOpen)[`makeOpen`](../object/BasicOpenable.html#makeOpen)[`tryImplicitRemoveObstructor`](../object/BasicOpenable.html#tryImplicitRemoveObstructor)

Inherited from `Linkable` :  
[`masterObject`](../object/Linkable.html#masterObject)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="descContentsLister"></span>

`descContentsLister`

[objects.t](../file/objects.t.html)\[[3492](../source/objects.t.html#3492)\]



Describe our contents using a special version of the contents lister, so
that we add our open/closed status to the listing. The message we add is
given by our openStatus method, so if all you want to change is the
"it's open" status message, you can just override openStatus rather than
providing a whole new lister.



<span id="lockStatusReportable"></span>

`lockStatusReportable`

[objects.t](../file/objects.t.html)\[[3519](../source/objects.t.html#3519)\]



By default, an Openable that's also a Lockable must be closed to be
locked. This means that when it's open, the object is implicitly
unlocked, in which case "It's unlocked" isn't worth mentioning when the
description says "It's open."



<span id="openingLister"></span>

`openingLister`

[objects.t](../file/objects.t.html)\[[3499](../source/objects.t.html#3499)\]



Contents lister to use when we're opening the object. This lister shows
the items that are newly revealed when the object is opened.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addInteriorReachableCond"></span>

`addInteriorReachableCond (lst)`

[objects.t](../file/objects.t.html)\[[3668](../source/objects.t.html#3668)\]



Generate a precondition to make sure gActor can reach the interior of
the container. We consider the inside reachable if either the actor is
located inside the container, or the actor is outside and the container
is open.



<span id="dobjFor(Board)"></span>

`dobjFor(Board)`

[objects.t](../file/objects.t.html)\[[3716](../source/objects.t.html#3716)\]



must be open to get into a nested room



<span id="dobjFor(Close)"></span>

`dobjFor(Close)`

[objects.t](../file/objects.t.html)\[[3590](../source/objects.t.html#3590)\]



show any special contents as well



<span id="dobjFor(GetOutOf)"></span>

`dobjFor(GetOutOf)`

[objects.t](../file/objects.t.html)\[[3706](../source/objects.t.html#3706)\]



must be open to get out of a nested room



<span id="dobjFor(Lock)"></span>

`dobjFor(Lock)`

[objects.t](../file/objects.t.html)\[[3696](../source/objects.t.html#3696)\]



can't lock an openable that isn't closed



<span id="dobjFor(LockWith)"></span>

`dobjFor(LockWith)`

[objects.t](../file/objects.t.html)\[[3700](../source/objects.t.html#3700)\]



*no description available*



<span id="dobjFor(LookIn)"></span>

`dobjFor(LookIn)`

[objects.t](../file/objects.t.html)\[[3608](../source/objects.t.html#3608)\]



show the default report



<span id="dobjFor(Open)"></span>

`dobjFor(Open)`

[objects.t](../file/objects.t.html)\[[3524](../source/objects.t.html#3524)\]



Action handlers



<span id="dobjFor(Search)"></span>

`dobjFor(Search)`

[objects.t](../file/objects.t.html)\[[3633](../source/objects.t.html#3633)\]



return the result



<span id="iobjFor(PourInto)"></span>

`iobjFor(PourInto)`

[objects.t](../file/objects.t.html)\[[3689](../source/objects.t.html#3689)\]



make sure that our interior is reachable



<span id="iobjFor(PutIn)"></span>

`iobjFor(PutIn)`

[objects.t](../file/objects.t.html)\[[3683](../source/objects.t.html#3683)\]



return the result



<span id="openStatus"></span>

`openStatus ( )`

[objects.t](../file/objects.t.html)\[[3511](../source/objects.t.html#3511)\]



Get our "open status" message - this is a complete sentence saying that
we're open or closed. By default, in English, we just say "it's open"
(adjusted for number and gender, of course).

Note that this message has to be a stand-alone independent clause. In
particular note that we don't put any spacing after it, since we need to
be able to add sentence-ending or clause-ending punctuation immediately
after it.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


